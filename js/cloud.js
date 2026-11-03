/* =========================================================
   Wafel Cloud — 로그인(구글 / 이메일), 학습 기록 저장, 피드백
   Firebase(무료 Spark 요금제)를 씁니다. 설정은 js/firebase-config.js,
   만드는 방법은 docs/firebase-setup.md 를 보세요.
   설정이 비어 있으면 아무것도 하지 않고, 사이트는 이 기기에만 저장합니다.
   ========================================================= */
(function () {
  "use strict";

  var SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
  var PREFIX = "wafel:";
  var SKIP = { visits: 1 };            // 기기마다 따로 두는 값
  var LOCAL_FIRST = /(-opts|-mode)$/;   // 설정값은 지금 기기 것을 우선

  var cfg = window.FIREBASE_CONFIG;
  var configured = !!(cfg && cfg.apiKey && cfg.projectId);
  var fb = null, auth = null, db = null;
  var user = null, isAdmin = false, unread = 0;
  var syncState = configured ? "loading" : "off"; // off | loading | out | syncing | saved | error
  var listeners = [];
  var pushTimer = null, applying = false;
  var readyResolve;
  var ready = new Promise(function (r) { readyResolve = r; });

  function emit() { listeners.forEach(function (fn) { try { fn(api); } catch (e) { /* ignore */ } }); }
  function setState(s) { syncState = s; emit(); }

  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = function () { rej(new Error("load " + src)); };
      document.head.appendChild(s);
    });
  }

  /* ---------- local snapshot ---------- */
  function snapshot() {
    var out = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k.indexOf(PREFIX) !== 0) continue;
      var name = k.slice(PREFIX.length);
      if (SKIP[name]) continue;
      out[name] = localStorage.getItem(k);
    }
    return out;
  }
  function parse(s) { try { return JSON.parse(s); } catch (e) { return undefined; } }
  function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }

  // 숫자는 큰 쪽, 참/거짓은 하나라도 참이면 참, 객체는 칸마다, 나머지는 이 기기 값
  function mergeVal(a, b) {
    if (a === undefined) return b;
    if (b === undefined) return a;
    if (typeof a === "number" && typeof b === "number") return Math.max(a, b);
    if (typeof a === "boolean" && typeof b === "boolean") return a || b;
    if (isObj(a) && isObj(b)) {
      var o = {}, k;
      for (k in b) o[k] = b[k];
      for (k in a) o[k] = mergeVal(a[k], b[k]);
      return o;
    }
    return a;
  }
  function mergeKey(name, localStr, remoteStr) {
    if (localStr == null) return remoteStr;
    if (remoteStr == null) return localStr;
    var a = parse(localStr), b = parse(remoteStr);
    if (LOCAL_FIRST.test(name)) return localStr;
    if (name === "fouten" && Array.isArray(a) && Array.isArray(b)) {
      var seen = {}, list = a.concat(b).sort(function (x, y) { return (y.t || 0) - (x.t || 0); });
      list = list.filter(function (x) {
        var q = x && x.item && x.item.q;
        if (!q || seen[q]) return false;
        seen[q] = 1; return true;
      });
      return JSON.stringify(list.slice(0, 300));
    }
    return JSON.stringify(mergeVal(a, b));
  }

  /* ---------- sync ---------- */
  function userDoc() { return db.collection("users").doc(user.uid); }

  function pullAndMerge() {
    setState("syncing");
    return userDoc().get().then(function (doc) {
      var remote = (doc.exists && doc.data().data) || {};
      var local = snapshot();
      var keys = {}, k;
      for (k in local) keys[k] = 1;
      for (k in remote) keys[k] = 1;
      var merged = {};
      for (k in keys) {
        if (SKIP[k]) continue;
        var v = mergeKey(k, local[k], remote[k]);
        if (v != null) merged[k] = v;
      }
      applying = true;
      for (k in merged) { try { localStorage.setItem(PREFIX + k, merged[k]); } catch (e) { /* full */ } }
      applying = false;
      window.dispatchEvent(new CustomEvent("wafel:synced"));
      return push(merged);
    }).catch(function (e) { console.warn("[cloud] pull", e); setState("error"); });
  }

  function push(data) {
    if (!user) return Promise.resolve();
    setState("syncing");
    return userDoc().set({
      data: data || snapshot(),
      name: user.displayName || "",
      updatedAt: fb.firestore.FieldValue.serverTimestamp()
    }).then(function () { setState("saved"); })
      .catch(function (e) { console.warn("[cloud] push", e); setState("error"); });
  }

  function schedulePush() {
    if (!user || applying) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { pushTimer = null; push(); }, 1500);
  }
  function flush() { if (pushTimer) { clearTimeout(pushTimer); pushTimer = null; push(); } }

  window.addEventListener("wafel:store", schedulePush);
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });
  window.addEventListener("pagehide", flush);

  /* ---------- admin check (피드백은 관리자만 읽을 수 있어요) ---------- */
  function checkAdmin() {
    isAdmin = false; unread = 0;
    if (!user) return;
    db.collection("feedback").where("read", "==", false).limit(99).get()
      .then(function (snap) { isAdmin = true; unread = snap.size; emit(); })
      .catch(function () { /* 관리자가 아니면 권한이 없어요 */ });
  }

  /* ---------- init ---------- */
  function init() {
    if (!configured) { readyResolve(); emit(); return; }
    loadScript(SDK + "firebase-app-compat.js")
      .then(function () { return Promise.all([loadScript(SDK + "firebase-auth-compat.js"), loadScript(SDK + "firebase-firestore-compat.js")]); })
      .then(function () {
        fb = window.firebase;
        fb.initializeApp(cfg);
        auth = fb.auth();
        db = fb.firestore();
        auth.languageCode = "ko";
        auth.getRedirectResult().catch(function (e) { console.warn("[cloud] redirect", e); });
        auth.onAuthStateChanged(function (u) {
          user = u;
          readyResolve();
          if (u) { pullAndMerge().then(checkAdmin); }
          else { isAdmin = false; unread = 0; setState("out"); }
          emit();
        });
      })
      .catch(function (e) { console.warn("[cloud] init", e); configured = false; syncState = "off"; readyResolve(); emit(); });
  }

  /* ---------- error messages ---------- */
  var MSG = {
    "auth/invalid-email": "이메일 주소 모양이 올바르지 않아요.",
    "auth/missing-password": "비밀번호를 입력해 주세요.",
    "auth/weak-password": "비밀번호는 6글자 이상이어야 해요.",
    "auth/email-already-in-use": "이미 가입된 이메일이에요. '로그인'을 눌러 주세요.",
    "auth/invalid-credential": "이메일 또는 비밀번호가 맞지 않아요.",
    "auth/wrong-password": "비밀번호가 맞지 않아요.",
    "auth/user-not-found": "가입되지 않은 이메일이에요. '새로 가입'을 눌러 주세요.",
    "auth/too-many-requests": "시도가 너무 많아요. 잠시 뒤에 다시 해 주세요.",
    "auth/popup-closed-by-user": "로그인 창이 닫혔어요.",
    "auth/cancelled-popup-request": "로그인 창이 닫혔어요.",
    "auth/network-request-failed": "인터넷 연결을 확인해 주세요.",
    "auth/unauthorized-domain": "이 주소에서는 아직 로그인을 쓸 수 없어요. (관리자: Firebase 승인 도메인에 추가)",
    "permission-denied": "권한이 없어요."
  };
  function message(e) { return MSG[e && e.code] || ("문제가 생겼어요: " + ((e && e.message) || e)); }

  function need() { if (!configured || !auth) return Promise.reject({ code: "x", message: "로그인 기능이 아직 준비되지 않았어요." }); return null; }

  var api = {
    ready: ready,
    get configured() { return configured; },
    get user() { return user; },
    get isAdmin() { return isAdmin; },
    get unread() { return unread; },
    get state() { return syncState; },
    onChange: function (fn) { listeners.push(fn); },
    message: message,

    signInGoogle: function () {
      var n = need(); if (n) return n;
      var p = new fb.auth.GoogleAuthProvider();
      p.setCustomParameters({ prompt: "select_account" });
      return auth.signInWithPopup(p).catch(function (e) {
        if (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") return auth.signInWithRedirect(p);
        throw e;
      });
    },
    signInEmail: function (email, pw) { var n = need(); if (n) return n; return auth.signInWithEmailAndPassword(email, pw); },
    signUpEmail: function (email, pw, name) {
      var n = need(); if (n) return n;
      return auth.createUserWithEmailAndPassword(email, pw).then(function (c) {
        if (name) return c.user.updateProfile({ displayName: name }).then(function () { emit(); });
      });
    },
    resetPassword: function (email) { var n = need(); if (n) return n; return auth.sendPasswordResetEmail(email); },
    signOut: function () { var n = need(); if (n) return n; flush(); return auth.signOut(); },
    syncNow: function () { return user ? pullAndMerge() : Promise.resolve(); },

    sendFeedback: function (title, body) {
      var n = need(); if (n) return n;
      return db.collection("feedback").add({
        title: String(title).slice(0, 100),
        body: String(body).slice(0, 3000),
        createdAt: fb.firestore.FieldValue.serverTimestamp(),
        uid: user ? user.uid : null,
        email: user ? (user.email || null) : null,
        name: user ? (user.displayName || null) : null,
        page: String(location.hash || "#home").slice(0, 100),
        read: false
      });
    },
    listFeedback: function () {
      var n = need(); if (n) return n;
      return db.collection("feedback").orderBy("createdAt", "desc").limit(200).get().then(function (snap) {
        return snap.docs.map(function (d) { var x = d.data(); x.id = d.id; return x; });
      });
    },
    markFeedback: function (id, read) {
      return db.collection("feedback").doc(id).update({ read: !!read }).then(checkAdmin);
    },
    deleteFeedback: function (id) {
      return db.collection("feedback").doc(id).delete().then(checkAdmin);
    },
    _merge: mergeKey
  };

  window.WafelCloud = api;
  init();
})();
