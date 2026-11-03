/* =========================================================
   Pixel art engine — every image on the site is drawn here
   (no image files needed). Sprites render to <canvas> and
   are turned into data-URLs for <img data-sprite="...">.
   ========================================================= */
(function () {
  "use strict";

  // Waffle palette (sampled from emoji/레트로 픽셀 아트 와플.png)
  var WP = {
    O: "#a8470b", // outline / deep edge
    E: "#c95e12", // edge shade
    M: "#e88a24", // mid crust
    R: "#ffd27a", // ridge (light grid line)
    H: "#fff0c2", // highlight on ridge
    C: "#d76c15", // cell
    D: "#a9500d", // cell shadow
    S: "#f0a040", // cell light corner
    K: "#2b1608", // eyes
    P: "#ff8fa3", // blush
    W: "#ffffff"
  };

  /* ---------- Procedural waffle ---------- */
  function waffleGrid(opts) {
    opts = opts || {};
    var w = opts.w || 30, h = opts.h || 24;
    var cx = (w - 1) / 2, cy = (h - 1) / 2;
    var rx = w / 2 - 0.3, ry = h / 2 - 0.3;
    var cell = opts.cell || 5;  // spacing of ridges
    var g = [];
    for (var y = 0; y < h; y++) {
      var row = "";
      for (var x = 0; x < w; x++) {
        var dx = (x - cx) / rx, dy = (y - cy) / ry;
        var d = dx * dx + dy * dy;
        if (d > 1) { row += "."; continue; }
        if (d > 0.8) { row += (dy > 0.25 || dx > 0.55) ? "O" : "E"; continue; }
        if (d > 0.66) { row += (dy < -0.2 && dx < 0.2) ? "R" : "M"; continue; }
        var gx = (x + 1) % cell, gy = (y + 1) % cell;
        if (gx === 0 || gy === 0) {
          // ridge, top-left ridges catch the light
          row += ((x + y) % 7 === 0 && dy < 0.2) ? "H" : "R";
        } else if (gx === 1 || gy === 1) {
          row += "D"; // shadow under ridge
        } else if (gx === cell - 1 && gy === cell - 1) {
          row += "S";
        } else {
          row += "C";
        }
      }
      g.push(row);
    }
    if (opts.face) {
      // cute face: eyes, blush, smile
      var put = function (x, y, c) {
        if (y < 0 || y >= h || x < 0 || x >= w) return;
        g[y] = g[y].substring(0, x) + c + g[y].substring(x + 1);
      };
      var ey = Math.round(cy) - 1;
      var exL = Math.round(cx) - 5, exR = Math.round(cx) + 4;
      [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(function (p) {
        put(exL + p[0], ey + p[1], "K"); put(exR + p[0], ey + p[1], "K");
      });
      put(exL, ey, "W"); put(exR, ey, "W"); // eye sparkle
      put(exL - 2, ey + 3, "P"); put(exL - 1, ey + 3, "P");
      put(exR + 2, ey + 3, "P"); put(exR + 3, ey + 3, "P");
      var my = ey + 3, mx = Math.round(cx) - 2;
      put(mx, my, "K"); put(mx + 1, my + 1, "K"); put(mx + 2, my + 1, "K"); put(mx + 3, my, "K");
    }
    return g;
  }

  /* ---------- Hand-drawn sprites ---------- */
  var BASE = {
    K: "#000000", W: "#ffffff", G: "#808080", L: "#c0c0c0",
    Y: "#ffd800", R: "#d62828", B: "#2f5bd3", N: "#000080",
    T: "#7ed0d6", D: "#7a4a1a", P: "#ff9fb8", S: "#e8b878",
    E: "#1f9d3a", O: "#e07a1a", C: "#39ff14", V: "#5aa0e0"
  };

  var S = {};

  S.home = [
    ".......KK.......",
    "......KRRK......",
    ".....KRRRRK.....",
    "....KRRRRRRK....",
    "...KRRRRRRRRK...",
    "..KRRRRRRRRRRK..",
    ".KKKKKKKKKKKKKK.",
    "..KWWWWWWWWWWK..",
    "..KWVVWWWWDDWK..",
    "..KWVVWWWWDDWK..",
    "..KWWWWWWWDDWK..",
    "..KWWWWWWWDYWK..",
    "..KWWWWWWWDDWK..",
    "..KKKKKKKKKKKK..",
    "EEEEEEEEEEEEEEEE",
    "................"
  ];

  S.back = [
    "................",
    "................",
    "......K.........",
    ".....KYK........",
    "....KYYK........",
    "...KYYYKKKKKKK..",
    "..KYYYYYYYYYYYK.",
    ".KYYYYYYYYYYYYK.",
    "..KYYYYYYYYYYYK.",
    "...KYYYKKKKKKK..",
    "....KYYK........",
    ".....KYK........",
    "......K.........",
    "................",
    "................",
    "................"
  ];

  S.book = [
    "................",
    "..KKKKKKKKKKKK..",
    "..KBBBBBBBBBBWK.",
    "..KBBYYYYYYBBWK.",
    "..KBBBBBBBBBBWK.",
    "..KBBYYYYBBBBWK.",
    "..KBBBBBBBBBBWK.",
    "..KBBBBBBBBBBWK.",
    "..KBBBBBBBBBBWK.",
    "..KBBBBBBBBBBWK.",
    "..KBBBBBBBBBBWK.",
    "..KBBBBBBBBBBWK.",
    "..KKKKKKKKKKKWK.",
    "...KWWWWWWWWWWK.",
    "....KKKKKKKKKKK.",
    "................"
  ];

  S.list = [
    "..KKKKKKKKKKKK..",
    "..KWWWWWWWWWWK..",
    "..KWKKWKKKKKWK..",
    "..KWWWWWWWWWWK..",
    "..KWKKWKKKKWWK..",
    "..KWWWWWWWWWWK..",
    "..KWKKWKKKKKWK..",
    "..KWWWWWWWWWWK..",
    "..KWKKWKKKWWWK..",
    "..KWWWWWWWWWWK..",
    "..KWKKWKKKKKWK..",
    "..KWWWWWWWWWWK..",
    "..KWWWWWWWWOOK..",
    "..KWWWWWWWWOK...",
    "..KKKKKKKKKK....",
    "................"
  ];

  S.pencil = [
    ".............KK.",
    "............KPPK",
    "...........KPPPK",
    "..........KLKPK.",
    ".........KYLLK..",
    "........KYYYK...",
    ".......KYYYK....",
    "......KYYYK.....",
    ".....KYYYK......",
    "....KYYYK.......",
    "...KSYYK........",
    "..KSSSK.........",
    "..KSSK..........",
    ".KKKK...........",
    ".KK.............",
    "................"
  ];

  S.check = [
    "................",
    "................",
    ".............KK.",
    "............KEEK",
    "...........KEEK.",
    "..........KEEK..",
    ".KK......KEEK...",
    "KEEK....KEEK....",
    ".KEEK..KEEK.....",
    "..KEEKKEEK......",
    "...KEEEEK.......",
    "....KEEK........",
    ".....KK.........",
    "................",
    "................",
    "................"
  ];

  S.cross = [
    "................",
    ".KK.........KK..",
    "KRRK.......KRRK.",
    ".KRRK.....KRRK..",
    "..KRRK...KRRK...",
    "...KRRK.KRRK....",
    "....KRRKRRK.....",
    ".....KRRRK......",
    "....KRRKRRK.....",
    "...KRRK.KRRK....",
    "..KRRK...KRRK...",
    ".KRRK.....KRRK..",
    "KRRK.......KRRK.",
    ".KK.........KK..",
    "................",
    "................"
  ];

  S.star = [
    ".......KK.......",
    "......KYYK......",
    "......KYYK......",
    ".....KYYYYK.....",
    "KKKKKKYYYYKKKKKK",
    "KYYYYYYYYYYYYYYK",
    ".KYYYYYYYYYYYYK.",
    "..KYYYYYYYYYYK..",
    "...KYYYYYYYYK...",
    "...KYYYYYYYYK...",
    "..KYYYYKKYYYYK..",
    "..KYYYK..KYYYK..",
    ".KYYK......KYYK.",
    ".KKK........KKK.",
    "................",
    "................"
  ];

  S.starEmpty = S.star.map(function (r) { return r.replace(/Y/g, "L"); });

  S.floppy = [
    "KKKKKKKKKKKKKK..",
    "KNNNWWWWWWWNNNK.",
    "KNNNWWWWWKWNNNNK",
    "KNNNWWWWWKWNNNNK",
    "KNNNWWWWWWWNNNNK",
    "KNNNNNNNNNNNNNNK",
    "KNNNNNNNNNNNNNNK",
    "KNNKKKKKKKKKKNNK",
    "KNNKWWWWWWWWKNNK",
    "KNNKWRRRRRRWKNNK",
    "KNNKWWWWWWWWKNNK",
    "KNNKWKKKKKWWKNNK",
    "KNNKWWWWWWWWKNNK",
    "KKKKKKKKKKKKKKKK",
    "................",
    "................"
  ];

  S.clock = [
    ".....KKKKKK.....",
    "...KKWWWWWWKK...",
    "..KWWWWKWWWWWK..",
    ".KWWWWWKWWWWWWK.",
    ".KWWWWWKWWWWWWK.",
    "KWWWWWWKWWWWWWWK",
    "KWWWWWWKWWWWWWWK",
    "KWWWWWWKKKKKWWWK",
    "KWWWWWWWWWWWWWWK",
    "KWWWWWWWWWWWWWWK",
    ".KWWWWWWWWWWWWK.",
    ".KWWWWWWWWWWWWK.",
    "..KWWWWWWWWWWK..",
    "...KKWWWWWWKK...",
    ".....KKKKKK.....",
    "................"
  ];

  S.trophy = [
    "..KKKKKKKKKKKK..",
    "KKKYYYYYYYYYYKKK",
    "KYKYYWYYYYYYYKYK",
    "KYKYYWYYYYYYYKYK",
    ".KKYYWYYYYYYYKK.",
    "...KYYYYYYYYK...",
    "....KYYYYYYK....",
    ".....KKYYKK.....",
    ".......KK.......",
    ".......KK.......",
    "......KYYK......",
    ".....KKKKKK.....",
    "....KDDDDDDK....",
    "....KDDYYDDK....",
    "....KKKKKKKK....",
    "................"
  ];

  S.globe = [
    ".....KKKKKK.....",
    "...KKVVVVVVKK...",
    "..KVVEEVVVVVVK..",
    ".KVVEEEEVVVEEVK.",
    ".KVEEEEEVVEEEVK.",
    "KVVVEEEVVVEEEEVK",
    "KVVVVEVVVVVEEVVK",
    "KVVVVVVVVVVVVVVK",
    "KVVVVVEEEVVVVVVK",
    "KVVVVEEEEEVVVVVK",
    ".KVVVVEEEEVVVVK.",
    ".KVVVVVEEVVVVVK.",
    "..KVVVVVEVVVVK..",
    "...KKVVVVVVKK...",
    ".....KKKKKK.....",
    "................"
  ];

  S.dice = [
    "................",
    ".KKKKKKKKKKKKKK.",
    ".KWWWWWWWWWWWWK.",
    ".KWKKWWWWWWKKWK.",
    ".KWKKWWWWWWKKWK.",
    ".KWWWWWWWWWWWWK.",
    ".KWWWWWKKWWWWWK.",
    ".KWWWWWKKWWWWWK.",
    ".KWWWWWWWWWWWWK.",
    ".KWKKWWWWWWKKWK.",
    ".KWKKWWWWWWKKWK.",
    ".KWWWWWWWWWWWWK.",
    ".KKKKKKKKKKKKKK.",
    "..GGGGGGGGGGGGG.",
    "................",
    "................"
  ];

  S.warn = [
    ".......KK.......",
    "......KYYK......",
    "......KYYK......",
    ".....KYYYYK.....",
    ".....KYKKYK.....",
    "....KYYKKYYK....",
    "....KYYKKYYK....",
    "...KYYYKKYYYK...",
    "...KYYYKKYYYK...",
    "..KYYYYYYYYYYK..",
    "..KYYYYKKYYYYK..",
    ".KYYYYYKKYYYYYK.",
    ".KYYYYYYYYYYYYK.",
    "KKKKKKKKKKKKKKKK",
    "................",
    "................"
  ];

  S.mail = [
    "................",
    "................",
    "KKKKKKKKKKKKKKKK",
    "KWKWWWWWWWWWWKWK",
    "KWWKWWWWWWWWKWWK",
    "KWWWKWWWWWWKWWWK",
    "KWWWWKWWWWKWWWWK",
    "KWWWWWKRRKWWWWWK",
    "KWWWWKWRRWKWWWWK",
    "KWWWKWWWWWWKWWWK",
    "KWWKWWWWWWWWKWWK",
    "KWKWWWWWWWWWWKWK",
    "KKKKKKKKKKKKKKKK",
    "................",
    "................",
    "................"
  ];

  S.computer = [
    "..KKKKKKKKKKKKKKKKKKKK..",
    ".KTTTTTTTTTTTTTTTTTTTTK.",
    ".KTWWWWWWWWWWWWWWWWWWTK.",
    ".KTWKKKKKKKKKKKKKKKKWTK.",
    ".KTWKWWWWWWWWWWWWWWKWTK.",
    ".KTWKWWWWWWWWWWWWWWKWTK.",
    ".KTWKWWWWWWWWWWWWWWKWTK.",
    ".KTWKWWWWWWWWWWWWWWKWTK.",
    ".KTWKWWWWWWWWWWWWWWKWTK.",
    ".KTWKWWWWWWWWWWWWWWKWTK.",
    ".KTWKWWWWWWWWWWWWWWKWTK.",
    ".KTWKKKKKKKKKKKKKKKKWTK.",
    ".KTWWWWWWWWWWWWWWWWWWTK.",
    ".KTTTTTTTTTWWTTTTTTTTTK.",
    "..KTTTTTTTTTTTTTTTTTTK..",
    "...KKKKKKKKKKKKKKKKKK...",
    "........KTTTTTTK........",
    ".......KTTTTTTTTK.......",
    "..KKKKKKKKKKKKKKKKKKKK..",
    ".KWLWLWLWLWLWLWLWLWLWLK.",
    ".KLWLWLWLWLWLWLWLWLWLWK.",
    "..KKKKKKKKKKKKKKKKKKKK..",
    "........................",
    "........................"
  ];

  /* ---------- Flags ---------- */
  function flag(colsOrRows, vertical) {
    var w = 18, h = 12, g = [];
    for (var y = 0; y < h; y++) {
      var row = "";
      for (var x = 0; x < w; x++) {
        if (x === 0 || y === 0 || x === w - 1 || y === h - 1) { row += "K"; continue; }
        var i = vertical ? Math.min(2, Math.floor((x - 1) / ((w - 2) / 3)))
                         : Math.min(2, Math.floor((y - 1) / ((h - 2) / 3)));
        row += colsOrRows[i];
      }
      g.push(row);
    }
    return g;
  }
  S.flagBE = flag(["K", "Y", "R"], true);
  S.flagNL = flag(["R", "W", "B"], false);

  /* ---------- Shape builder (for picture-word sprites) ---------- */
  function make(w, h, fn) {
    var g = [];
    for (var y = 0; y < h; y++) { g.push([]); for (var x = 0; x < w; x++) g[y].push("."); }
    var api = {
      px: function (x, y, c) { if (x >= 0 && y >= 0 && x < w && y < h) g[y][x] = c; },
      rect: function (x, y, rw, rh, c) { for (var j = 0; j < rh; j++) for (var i = 0; i < rw; i++) api.px(x + i, y + j, c); },
      disc: function (cx, cy, r, c) {
        for (var y2 = 0; y2 < h; y2++) for (var x2 = 0; x2 < w; x2++) {
          var dx = x2 - cx, dy = y2 - cy;
          if (dx * dx + dy * dy <= r * r + r * 0.6) api.px(x2, y2, c);
        }
      },
      ring: function (cx, cy, r, c) {
        for (var y2 = 0; y2 < h; y2++) for (var x2 = 0; x2 < w; x2++) {
          var d = Math.sqrt((x2 - cx) * (x2 - cx) + (y2 - cy) * (y2 - cy));
          if (Math.abs(d - r) < 0.6) api.px(x2, y2, c);
        }
      },
      line: function (x0, y0, x1, y1, c) {
        var dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, err = dx + dy;
        for (;;) {
          api.px(x0, y0, c);
          if (x0 === x1 && y0 === y1) break;
          var e2 = 2 * err;
          if (e2 >= dy) { err += dy; x0 += sx; }
          if (e2 <= dx) { err += dx; y0 += sy; }
        }
      },
      // black outline around everything drawn so far
      outline: function () {
        var add = [];
        for (var y2 = 0; y2 < h; y2++) for (var x2 = 0; x2 < w; x2++) {
          if (g[y2][x2] !== ".") continue;
          var n = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(function (d) {
            var yy = y2 + d[1], xx = x2 + d[0];
            return yy >= 0 && xx >= 0 && yy < h && xx < w && g[yy][xx] !== "." && g[yy][xx] !== "K";
          });
          if (n) add.push([x2, y2]);
        }
        add.forEach(function (p) { g[p[1]][p[0]] = "K"; });
      }
    };
    fn(api);
    return g.map(function (r) { return r.join(""); });
  }

  // extra colours for picture sprites
  BASE.A = "#f6c9a0"; // skin
  BASE.H = "#5a3214"; // hair
  BASE.U = "#d99a52"; // bread / dog
  BASE.M = "#3a3a3a"; // dark gray
  BASE.Z = "#f7e2b0"; // cream

  S.fiets = make(16, 16, function (d) {
    d.ring(4, 11, 3, "K"); d.ring(12, 11, 3, "K");
    d.px(4, 11, "G"); d.px(12, 11, "G");
    d.line(4, 11, 7, 7, "R"); d.line(7, 7, 12, 11, "R"); d.line(7, 7, 11, 7, "R"); d.line(11, 7, 12, 11, "R");
    d.line(11, 7, 11, 4, "M"); d.rect(10, 3, 3, 1, "M");
    d.line(7, 7, 6, 5, "M"); d.rect(5, 4, 3, 1, "K");
  });
  S.auto = make(16, 16, function (d) {
    d.rect(1, 7, 14, 4, "R"); d.rect(4, 4, 8, 3, "R");
    d.rect(5, 5, 3, 2, "V"); d.rect(9, 5, 2, 2, "V");
    d.px(14, 8, "Y"); d.outline();
    d.disc(4, 11, 2, "M"); d.disc(12, 11, 2, "M"); d.px(4, 11, "L"); d.px(12, 11, "L");
  });
  S.tafel = make(16, 16, function (d) {
    d.rect(1, 5, 14, 2, "D"); d.rect(2, 7, 2, 7, "D"); d.rect(12, 7, 2, 7, "D"); d.rect(1, 5, 14, 1, "U");
    d.outline();
  });
  S.koffie = make(16, 16, function (d) {
    d.rect(3, 6, 8, 7, "W"); d.rect(4, 6, 6, 1, "D");
    [[11, 7], [12, 7], [13, 8], [13, 9], [12, 10], [11, 10]].forEach(function (p) { d.px(p[0], p[1], "W"); });
    d.rect(1, 13, 12, 1, "L"); d.outline();
    [[5, 1], [6, 2], [5, 3], [8, 1], [9, 2], [8, 3]].forEach(function (p) { d.px(p[0], p[1], "G"); });
  });
  S.meisje = make(16, 16, function (d) {
    d.rect(3, 4, 10, 9, "H"); d.rect(1, 9, 2, 3, "H"); d.rect(13, 9, 2, 3, "H");
    d.disc(8, 8, 4, "A"); d.rect(4, 3, 8, 3, "H");
    d.px(6, 8, "K"); d.px(10, 8, "K"); d.px(5, 10, "P"); d.px(11, 10, "P"); d.px(8, 11, "R");
    d.px(11, 2, "R"); d.px(12, 2, "R"); d.px(12, 3, "R");
    d.outline();
  });
  S.jongen = make(16, 16, function (d) {
    d.disc(8, 9, 4, "A"); d.rect(4, 4, 9, 3, "H"); d.px(5, 3, "H"); d.px(8, 3, "H"); d.px(11, 3, "H");
    d.px(6, 9, "K"); d.px(10, 9, "K"); d.px(7, 12, "K"); d.px(8, 12, "K"); d.px(9, 12, "K");
    d.rect(5, 14, 7, 2, "B");
    d.outline();
  });
  S.bal = make(16, 16, function (d) {
    d.disc(8, 8, 6, "R"); d.rect(2, 8, 13, 1, "W"); d.px(5, 5, "W"); d.px(6, 4, "W"); d.outline();
  });
  S.sleutel = make(16, 16, function (d) {
    d.disc(4, 8, 3, "Y"); d.px(4, 8, "."); d.rect(7, 7, 8, 2, "Y"); d.rect(11, 9, 1, 2, "Y"); d.rect(13, 9, 1, 3, "Y");
    d.outline(); d.px(4, 8, "K");
  });
  S.kat = make(16, 16, function (d) {
    d.disc(8, 9, 5, "O");
    [[4, 3], [4, 4], [5, 4], [4, 5], [5, 5], [6, 5], [12, 3], [12, 4], [11, 4], [12, 5], [11, 5], [10, 5]].forEach(function (p) { d.px(p[0], p[1], "O"); });
    d.px(6, 9, "K"); d.px(10, 9, "K"); d.px(8, 11, "P"); d.px(7, 12, "K"); d.px(9, 12, "K");
    d.outline();
  });
  S.hond = make(16, 16, function (d) {
    d.disc(8, 9, 5, "U"); d.rect(2, 5, 3, 6, "D"); d.rect(12, 5, 3, 6, "D");
    d.px(6, 8, "K"); d.px(10, 8, "K"); d.rect(7, 10, 3, 2, "K"); d.px(8, 13, "P");
    d.outline();
  });
  S.appel = make(16, 16, function (d) {
    d.disc(8, 9, 5, "R"); d.rect(8, 2, 1, 3, "D"); d.px(9, 3, "E"); d.px(10, 3, "E"); d.px(10, 2, "E"); d.px(11, 2, "E");
    d.px(5, 7, "W"); d.px(5, 8, "W"); d.outline();
  });
  S.brood = make(16, 16, function (d) {
    d.disc(5, 8, 3, "U"); d.disc(11, 8, 3, "U"); d.rect(5, 6, 6, 7, "U"); d.rect(2, 8, 12, 5, "U");
    d.px(5, 7, "Z"); d.px(6, 6, "Z"); d.px(8, 7, "Z"); d.px(9, 6, "Z"); d.px(11, 7, "Z"); d.px(12, 6, "Z");
    d.outline();
  });
  S.trein = make(16, 16, function (d) {
    d.rect(1, 3, 14, 9, "B"); d.rect(3, 5, 3, 3, "V"); d.rect(8, 5, 3, 3, "V"); d.px(13, 9, "Y"); d.rect(1, 10, 14, 1, "W");
    d.outline(); d.disc(4, 13, 1, "M"); d.disc(11, 13, 1, "M"); d.rect(0, 15, 16, 1, "G");
  });
  S.deur = make(16, 16, function (d) {
    d.rect(4, 1, 8, 14, "D"); d.rect(5, 2, 6, 5, "U"); d.rect(5, 8, 6, 6, "U"); d.px(10, 8, "Y"); d.outline();
  });
  S.bed = make(16, 16, function (d) {
    d.rect(1, 9, 14, 3, "D"); d.rect(1, 12, 1, 2, "D"); d.rect(14, 12, 1, 2, "D"); d.rect(1, 5, 2, 4, "D");
    d.rect(3, 7, 3, 2, "W"); d.rect(6, 7, 9, 2, "B"); d.outline();
  });
  S.telefoon = make(16, 16, function (d) {
    d.rect(5, 1, 7, 14, "M"); d.rect(6, 3, 5, 5, "C");
    for (var y = 9; y <= 13; y += 2) for (var x = 6; x <= 10; x += 2) d.px(x, y, "L");
    d.outline();
  });
  S.schoen = make(16, 16, function (d) {
    d.rect(2, 5, 5, 5, "R"); d.rect(2, 9, 12, 3, "R"); d.px(14, 10, "R"); d.px(14, 11, "R");
    d.px(5, 6, "W"); d.px(5, 8, "W"); d.rect(1, 12, 15, 1, "M"); d.outline();
  });
  S.speaker = make(16, 16, function (d) {
    d.rect(2, 6, 3, 4, "G"); d.line(5, 6, 8, 3, "G"); d.line(5, 9, 8, 12, "G"); d.rect(5, 6, 1, 4, "G");
    d.rect(6, 5, 1, 6, "G"); d.rect(7, 4, 1, 8, "G"); d.rect(8, 3, 1, 10, "G");
    d.outline();
    d.px(10, 6, "N"); d.px(10, 9, "N"); d.px(11, 7, "N"); d.px(11, 8, "N");
    d.px(12, 4, "N"); d.px(13, 5, "N"); d.px(13, 6, "N"); d.px(14, 7, "N"); d.px(14, 8, "N"); d.px(13, 9, "N"); d.px(13, 10, "N"); d.px(12, 11, "N");
  });

  /* ---------- groceries (실생활 표현: 마트) ---------- */
  BASE.F = "#b7d96a"; // light green
  BASE.I = "#c79a5b"; // potato skin
  BASE.J = "#f4f0e6"; // off-white
  BASE.Q = "#ffb000"; // orange
  S.aardappel = make(16, 16, function (d) {
    d.disc(6, 9, 4, "I"); d.disc(10, 8, 4, "I"); d.rect(5, 6, 6, 7, "I");
    d.px(5, 8, "D"); d.px(9, 10, "D"); d.px(11, 7, "D"); d.px(7, 6, "Z"); d.px(8, 6, "Z"); d.outline();
  });
  S.prei = make(16, 16, function (d) {
    d.line(2, 14, 9, 7, "J"); d.line(3, 14, 10, 7, "J"); d.line(2, 13, 9, 6, "J");
    d.line(9, 7, 14, 2, "E"); d.line(10, 7, 15, 3, "E"); d.line(9, 6, 12, 1, "F"); d.line(10, 8, 15, 6, "E");
    d.px(1, 15, "Z"); d.px(2, 15, "Z"); d.outline();
  });
  S.look = make(16, 16, function (d) {
    d.disc(8, 10, 5, "J"); d.rect(7, 3, 3, 3, "J"); d.px(8, 2, "J");
    d.line(6, 6, 5, 14, "L"); d.line(10, 6, 11, 14, "L"); d.line(8, 6, 8, 15, "L");
    d.outline(); d.px(7, 1, "U"); d.px(9, 1, "U");
  });
  S.sinaasappel = make(16, 16, function (d) {
    d.disc(8, 9, 6, "Q"); d.px(6, 6, "Y"); d.px(5, 7, "Y"); d.px(10, 12, "O"); d.px(12, 10, "O");
    d.outline(); d.px(8, 2, "D"); d.px(9, 2, "E"); d.px(10, 1, "E"); d.px(11, 1, "E");
  });
  S.bloem = make(16, 16, function (d) {
    d.rect(3, 3, 10, 12, "J"); d.rect(4, 2, 8, 1, "J"); d.rect(4, 7, 8, 5, "B");
    d.disc(8, 9, 1, "Y"); d.px(6, 4, "L"); d.px(9, 4, "L"); d.outline();
  });
  S.yoghurt = make(16, 16, function (d) {
    d.rect(3, 5, 10, 2, "W"); d.rect(4, 7, 8, 8, "W"); d.rect(3, 3, 10, 2, "L");
    d.rect(4, 9, 8, 3, "P"); d.px(7, 10, "R"); d.px(8, 10, "R"); d.outline();
  });
  S.wortel = make(16, 16, function (d) {
    d.line(3, 13, 10, 6, "O"); d.line(3, 12, 9, 6, "O"); d.line(4, 13, 10, 7, "O");
    d.line(5, 12, 11, 6, "O"); d.line(5, 10, 9, 6, "O"); d.px(2, 14, "O");
    d.px(6, 10, "D"); d.px(8, 9, "D"); d.outline();
    d.line(11, 5, 13, 1, "E"); d.line(11, 5, 15, 3, "E"); d.line(11, 5, 12, 2, "F");
  });
  S.tomaat = make(16, 16, function (d) {
    d.disc(8, 9, 6, "R"); d.px(5, 7, "W"); d.px(6, 6, "W"); d.outline();
    d.rect(7, 3, 3, 1, "E"); d.px(6, 4, "E"); d.px(10, 4, "E"); d.px(8, 2, "E");
  });
  S.ui = make(16, 16, function (d) {
    d.disc(8, 10, 5, "U"); d.rect(7, 4, 3, 2, "U"); d.line(6, 6, 6, 14, "D"); d.line(10, 6, 10, 14, "D");
    d.px(5, 8, "Z"); d.outline(); d.px(8, 2, "E"); d.px(9, 1, "E");
  });
  S.banaan = make(16, 16, function (d) {
    d.line(2, 6, 6, 11, "Y"); d.line(2, 7, 6, 12, "Y"); d.line(6, 11, 13, 11, "Y"); d.line(6, 12, 13, 12, "Y");
    d.line(3, 6, 7, 10, "Y"); d.line(7, 10, 13, 10, "Y"); d.line(13, 10, 14, 8, "Y");
    d.outline(); d.px(1, 5, "D"); d.px(14, 7, "D");
  });
  S.melk = make(16, 16, function (d) {
    d.rect(4, 5, 8, 10, "W"); d.line(4, 5, 8, 1, "W"); d.line(11, 5, 8, 2, "W"); d.rect(6, 2, 4, 3, "W");
    d.rect(4, 9, 8, 3, "V"); d.outline(); d.rect(7, 0, 2, 1, "R");
  });
  S.ei = make(16, 16, function (d) {
    d.disc(8, 9, 5, "J"); d.rect(6, 3, 4, 2, "J"); d.px(6, 6, "W"); d.px(6, 7, "W"); d.outline();
  });
  S.kaas = make(16, 16, function (d) {
    for (var y = 5; y <= 12; y++) d.rect(2 + Math.max(0, 12 - y) - 0, y, 13 - Math.max(0, 12 - y), 1, "Y");
    d.rect(2, 9, 13, 4, "Y"); d.disc(6, 11, 1, "Q"); d.px(11, 10, "Q"); d.px(12, 8, "Q"); d.outline();
  });
  S.rijst = make(16, 16, function (d) {
    d.rect(2, 9, 12, 4, "B"); d.rect(3, 13, 10, 1, "B"); d.disc(8, 8, 5, "W"); d.rect(2, 9, 12, 4, "B");
    d.px(5, 6, "L"); d.px(9, 5, "L"); d.px(11, 7, "L"); d.rect(4, 10, 8, 1, "W"); d.outline();
  });
  BASE.X = "#7b3fa0"; // purple
  S.komkommer = make(16, 16, function (d) {
    d.line(2, 12, 12, 3, "E"); d.line(3, 12, 13, 3, "E"); d.line(3, 13, 13, 4, "E"); d.line(2, 11, 11, 3, "E");
    d.px(5, 10, "F"); d.px(8, 7, "F"); d.px(11, 5, "F"); d.outline();
  });
  S.paprika = make(16, 16, function (d) {
    d.disc(6, 10, 4, "R"); d.disc(10, 10, 4, "R"); d.rect(5, 6, 6, 8, "R"); d.px(5, 8, "W"); d.outline();
    d.rect(7, 3, 2, 3, "E"); d.px(9, 3, "E");
  });
  S.sla = make(16, 16, function (d) {
    d.disc(8, 9, 6, "F"); d.disc(8, 10, 4, "E"); d.line(8, 6, 8, 14, "F"); d.line(5, 8, 8, 12, "F"); d.line(11, 8, 8, 12, "F"); d.outline();
  });
  S.champignon = make(16, 16, function (d) {
    d.disc(8, 7, 6, "J"); d.rect(1, 8, 15, 6, "."); d.rect(2, 7, 13, 1, "J"); d.rect(6, 8, 4, 6, "Z");
    d.px(5, 4, "L"); d.px(10, 5, "L"); d.outline();
  });
  S.citroen = make(16, 16, function (d) {
    d.disc(8, 8, 5, "Y"); d.rect(2, 7, 12, 3, "Y"); d.px(1, 8, "Y"); d.px(14, 8, "Y"); d.px(6, 6, "W"); d.outline();
  });
  S.aardbei = make(16, 16, function (d) {
    d.disc(8, 8, 5, "R"); for (var y = 9; y <= 14; y++) d.rect(3 + (y - 9), y, 11 - 2 * (y - 9), 1, "R");
    [[6, 7], [10, 7], [8, 9], [6, 11], [10, 11], [8, 13]].forEach(function (p) { d.px(p[0], p[1], "Y"); });
    d.outline(); d.rect(5, 2, 7, 2, "E"); d.px(8, 1, "E");
  });
  S.druif = make(16, 16, function (d) {
    [[6, 5], [10, 5], [8, 8], [4, 8], [12, 8], [6, 11], [10, 11], [8, 14]].forEach(function (p) { d.disc(p[0], p[1], 2, "X"); });
    d.px(5, 4, "P"); d.px(9, 7, "P"); d.outline(); d.line(8, 0, 8, 3, "D"); d.px(9, 1, "E"); d.px(10, 1, "E");
  });
  S.peer = make(16, 16, function (d) {
    d.disc(8, 11, 4, "F"); d.disc(8, 6, 2, "F"); d.rect(6, 6, 5, 5, "F"); d.px(6, 10, "Y"); d.outline();
    d.rect(8, 1, 1, 3, "D"); d.px(9, 2, "E"); d.px(10, 2, "E");
  });
  S.boter = make(16, 16, function (d) {
    d.rect(2, 6, 12, 6, "Y"); d.rect(4, 4, 10, 2, "Z"); d.rect(2, 6, 12, 1, "Z"); d.outline(); d.rect(1, 13, 14, 1, "L");
  });
  S.kip = make(16, 16, function (d) {
    d.disc(7, 7, 5, "U"); d.disc(9, 9, 4, "U"); d.line(11, 11, 14, 14, "J"); d.px(13, 13, "J"); d.px(15, 13, "J"); d.px(13, 15, "J");
    d.px(5, 5, "Z"); d.px(6, 4, "Z"); d.outline();
  });
  S.vis = make(16, 16, function (d) {
    d.disc(7, 8, 4, "V"); d.rect(4, 6, 7, 5, "V"); d.line(11, 8, 14, 5, "V"); d.line(11, 8, 14, 11, "V"); d.rect(13, 5, 1, 7, "V");
    d.px(5, 7, "W"); d.outline(); d.px(5, 7, "K");
  });
    S.zalm = make(16, 16, function (d) {
    d.rect(2, 6, 12, 5, "O"); d.line(2, 6, 13, 6, "P"); d.line(4, 8, 7, 10, "P"); d.line(8, 8, 11, 10, "P"); d.outline();
  });
  S.water = make(16, 16, function (d) {
    d.rect(5, 5, 6, 10, "T"); d.rect(6, 2, 4, 3, "T"); d.rect(6, 1, 4, 1, "B"); d.rect(5, 8, 6, 3, "V"); d.outline();
  });
  S.thee = make(16, 16, function (d) {
    d.rect(3, 6, 8, 7, "W"); d.rect(4, 6, 6, 1, "O");
    [[11, 7], [12, 7], [13, 8], [13, 9], [12, 10], [11, 10]].forEach(function (p) { d.px(p[0], p[1], "W"); });
    d.rect(1, 13, 12, 1, "L"); d.outline(); d.line(8, 2, 8, 6, "G"); d.rect(7, 2, 3, 2, "E");
  });
  S.ijs = make(16, 16, function (d) {
    d.disc(8, 5, 4, "P"); for (var y = 8; y <= 15; y++) d.rect(4 + Math.floor((y - 8) / 2), y, 9 - 2 * Math.floor((y - 8) / 2), 1, "U");
    d.px(6, 3, "W"); d.outline(); d.px(7, 10, "D"); d.px(9, 12, "D");
  });
  S.suiker = make(16, 16, function (d) {
    d.rect(3, 3, 10, 12, "W"); d.rect(3, 6, 10, 4, "V"); d.px(6, 12, "L"); d.px(9, 13, "L"); d.outline();
  });
  S.zout = make(16, 16, function (d) {
    d.rect(5, 6, 6, 9, "W"); d.disc(8, 5, 3, "L"); d.rect(5, 6, 6, 9, "W"); d.px(7, 3, "M"); d.px(9, 3, "M"); d.px(8, 4, "M"); d.outline();
  });
  S.olie = make(16, 16, function (d) {
    d.rect(5, 6, 6, 9, "Y"); d.rect(7, 2, 2, 4, "Y"); d.rect(7, 1, 2, 1, "E"); d.rect(5, 9, 6, 3, "E"); d.outline();
  });
  S.sojasaus = make(16, 16, function (d) {
    d.rect(5, 6, 6, 9, "M"); d.rect(7, 2, 2, 4, "M"); d.rect(6, 1, 4, 1, "R"); d.rect(5, 9, 6, 3, "R"); d.outline();
  });
  S.pasta = make(16, 16, function (d) {
    d.rect(2, 9, 12, 4, "W"); d.rect(3, 13, 10, 1, "W"); d.disc(8, 8, 5, "Y");
    d.line(4, 7, 12, 9, "S"); d.line(4, 9, 11, 6, "S"); d.rect(2, 9, 12, 4, "W"); d.rect(4, 10, 8, 1, "L"); d.outline();
  });
  S.noedels = S.pasta;
  S.pistolet = make(16, 16, function (d) {
    d.disc(8, 9, 5, "U"); d.line(8, 5, 8, 13, "Z"); d.outline();
  });
  S.chips = make(16, 16, function (d) {
    d.rect(3, 2, 10, 13, "R"); d.rect(4, 1, 8, 1, "R"); d.disc(8, 9, 3, "Y"); d.rect(3, 4, 10, 1, "W"); d.outline();
  });
  S.kool = make(16, 16, function (d) {
    d.disc(8, 9, 6, "F"); d.ring(8, 9, 4, "E"); d.ring(8, 9, 2, "E"); d.px(8, 9, "E"); d.outline();
  });
  S.spinazie = make(16, 16, function (d) {
    d.disc(5, 7, 3, "E"); d.disc(11, 7, 3, "E"); d.disc(8, 5, 3, "E"); d.line(8, 8, 8, 15, "F"); d.line(5, 9, 8, 13, "F"); d.line(11, 9, 8, 13, "F"); d.outline();
  });
  S.room = make(16, 16, function (d) {
    d.rect(4, 5, 8, 10, "W"); d.line(4, 5, 8, 2, "W"); d.line(11, 5, 8, 2, "W"); d.rect(5, 3, 6, 2, "W");
    d.rect(4, 9, 8, 3, "P"); d.outline();
  });
  S.winkelkar = make(16, 16, function (d) {
    d.rect(3, 4, 11, 6, "L"); for (var x = 4; x < 14; x += 3) d.rect(x, 4, 1, 6, "G");
    d.line(0, 2, 3, 4, "M"); d.rect(3, 10, 10, 1, "M"); d.outline();
    d.disc(5, 13, 1, "M"); d.disc(12, 13, 1, "M");
  });
  S.user = make(16, 16, function (d) {
    d.disc(8, 5, 3, "A"); d.rect(3, 10, 10, 5, "B"); d.rect(4, 9, 8, 1, "B");
    d.px(7, 5, "K"); d.px(9, 5, "K"); d.rect(5, 1, 6, 2, "H"); d.outline();
  });

  // Korean-friendly aliases (picture names used in lesson data)
  var ALIAS = { huis: "home", boek: "book", klok: "clock", ster: "star", potlood: "pencil", brief: "mail", wafel: "waffleSmall", knoflook: "look" };

  /* ---------- Rendering ---------- */
  function mirror(rows) {
    return rows.map(function (r) { return r.split("").reverse().join(""); });
  }
  S.forward = mirror(S.back);

  function render(rows, palette, scale) {
    scale = scale || 1;
    var h = rows.length, w = 0;
    rows.forEach(function (r) { if (r.length > w) w = r.length; });
    var c = document.createElement("canvas");
    c.width = w * scale; c.height = h * scale;
    var ctx = c.getContext("2d");
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < rows[y].length; x++) {
        var ch = rows[y][x];
        if (ch === "." || ch === " ") continue;
        var col = palette[ch] || BASE[ch];
        if (!col) continue;
        ctx.fillStyle = col;
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    }
    return c;
  }

  var cache = {};
  function url(name) {
    if (ALIAS[name]) name = ALIAS[name];
    if (cache[name]) return cache[name];
    var c;
    switch (name) {
      case "waffle": c = render(waffleGrid({ w: 30, h: 24 }), WP, 8); break;
      case "waffleFace": c = render(waffleGrid({ w: 30, h: 24, face: true }), WP, 8); break;
      case "waffleSmall": c = render(waffleGrid({ w: 18, h: 15, cell: 4 }), WP, 4); break;
      case "waffleTile": c = tile(); break;
      default:
        if (!S[name]) return "";
        c = render(S[name], {}, 4);
    }
    cache[name] = c.toDataURL("image/png");
    return cache[name];
  }

  // faint waffle-grid background tile
  function tile() {
    var c = document.createElement("canvas");
    c.width = 12; c.height = 12;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#fffbea"; ctx.fillRect(0, 0, 12, 12);
    ctx.fillStyle = "#fcf3d6";
    ctx.fillRect(0, 0, 12, 1); ctx.fillRect(0, 0, 1, 12);
    ctx.fillStyle = "#fef8e4";
    ctx.fillRect(1, 1, 11, 1); ctx.fillRect(1, 1, 1, 11);
    return c;
  }

  function hydrate(root) {
    (root || document).querySelectorAll("img[data-sprite]").forEach(function (img) {
      var u = url(img.getAttribute("data-sprite"));
      if (u && img.src !== u) img.src = u;
      img.classList.add("px");
      if (!img.alt) img.alt = "";
    });
  }

  function has(name) { return !!(ALIAS[name] || S[name] || /^waffle/.test(name)); }

  window.Pixel = { url: url, hydrate: hydrate, sprites: S, has: has };
})();
