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

  // Korean-friendly aliases (picture names used in lesson data)
  var ALIAS = { huis: "home", boek: "book", klok: "clock", ster: "star", potlood: "pencil", brief: "mail", wafel: "waffleSmall" };

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
