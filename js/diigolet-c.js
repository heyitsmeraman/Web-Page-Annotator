if (window.diigolet == undefined) {
  (function () {
    try {
      /eschoolnews.com/i.test(location.host) && window.jQuery.noConflict(true);
    } catch (wa) {}
  })();
  try {
    (function () {
      function wa(ga, ca) {
        var J = ga[ca];
        delete ga[ca];
        if (ga[ca] === undefined) ga[ca] = J;
      }
      var ta = [
          Array.prototype,
          ["slice", "push", "indexOf"],
          String.prototype,
          ["trim"],
        ],
        la,
        ha,
        N,
        Aa,
        M;
      la = 0;
      for (N = ta.length; la < N; la += 2) {
        Aa = ta[la];
        M = ta[la + 1];
        for (ha = 0; ha < N; ha++) wa(Aa, M[ha]);
      }
    })();
  } catch (e$$1) {}
  (function () {
    function wa(a, c) {
      try {
        Na.indexOf(c) >= Na.indexOf(x.logLevel) &&
          window.console &&
          console.log.apply(console, a);
      } catch (d) {}
    }
    function ta(a) {
      var c = document.createElement("canvas");
      c.style.backgroundColor = "transparent";
      var d = c.getContext("2d");
      c.width = 300;
      c.height = 300;
      if (a.length > 580) a = a.substring(0, 500) + " ...";
      d.lineWidth = 1;
      d.font = "14px Arial";
      d.strokeStyle = "black";
      var f = 10;
      a = a.split(" ");
      for (var h = "", i = 0; i < a.length; i++) {
        var m = h + a[i] + " ";
        if (d.measureText(m).width > 300 && i > 0) {
          d.fillText(h, 10, f);
          h = a[i] + " ";
          f += 24;
        } else h = m;
      }
      d.fillText(h, 10, f);
      d = document.createElement("img");
      d.src = c.toDataURL();
      return d;
    }
    function la(a) {
      a = a.concat();
      for (var c = 0; c < a.length; ++c)
        for (var d = c + 1; d < a.length; ++d)
          a[c] === a[d] && a.splice(d--, 1);
      return a;
    }
    function ha(a) {
      return !a || a.length == 0 || (a.match ? !!a.match(/^\s*$/) : true);
    }
    function N() {
      var a = Array.prototype.slice.call(arguments);
      a.unshift("[Diigolet]");
      wa(a, "debug");
    }
    function Aa() {
      var a = Array.prototype.slice.call(arguments);
      a.unshift("[Diigolet]");
      wa(a, "info");
    }
    function M() {
      for (
        var a = [].slice.call(arguments), c = a.shift(), d = 0, f = a.length, h;
        (h = a[d]), d < f;
        d++
      )
        for (var i in h) c[i] = h[i];
      return c;
    }
    function ga(a, c, d) {
      for (var f = 0, h = d.length, i; (i = d[f]), f < h; f++) a[i] = c[i];
      return a;
    }
    function ca(a, c) {
      c = c || " ";
      return a.split(c);
    }
    function J(a, c, d) {
      if (a.length !== undefined)
        for (var f = 0, h = a.length; f < h; f++) c.call(d, a[f], f);
      else for (f in a) c.call(d, a[f], f);
    }
    function Da(a, c, d) {
      for (var f = [], h = 0, i = a.length; h < i; h++)
        c.call(d, a[h], h) && f.push(a[h]);
      return f;
    }
    function W(a, c, d) {
      for (var f = a.length, h = Array(f), i = 0; i < f; i++)
        h[i] = c.call(d, a[i], i);
      return h;
    }
    function Oa(a, c, d) {
      for (var f = 0, h = a.length; f < h; f++)
        if (c.call(d, a[f], f)) return true;
      return false;
    }
    function Pa(a, c, d) {
      for (var f = a.length, h = [], i, m = 0; m < f; m++) {
        i = c.call(d, a[m], m);
        i !== null && h.push(i);
      }
      return h;
    }
    function na(a, c, d) {
      d = d || 0;
      var f = typeof c == "function";
      d = d;
      for (var h = a.length, i; (i = a[d]), d < h; d++)
        if (f ? c(i) : i == c) return d;
      return -1;
    }
    function oa(a, c, d) {
      c = na(a, c, d);
      return c > -1 ? a[c] : null;
    }
    function Qa(a, c) {
      for (var d = [], f = 0, h = a.length, i; (i = a[f]), f < h; f++)
        if (c)
          oa(d, function (m) {
            return c(m, i);
          }) || d.push(i);
        else d.indexOf(i) == -1 && d.push(i);
      return d;
    }
    function bb(a) {
      for (var c = Array(a.length), d = a.length - 1, f = 0; d >= 0; d--, f++)
        c[f] = a[d];
      return c;
    }
    function Ra(a) {
      a = encodeURIComponent(a);
      if ($.browser.msie) {
        if (a.length > 16e3) return true;
      } else if (a.length > 36e3) return true;
      return false;
    }
    function pa(a) {
      a = a.replace(/^\s\s*/, "");
      for (var c = /\s/, d = a.length; c.test(a.charAt(--d)); );
      return a.slice(0, d + 1);
    }
    function cb(a, c, d) {
      if (!c.global) throw "string.scan: pattern is not global";
      for (var f; (f = c.exec(a)); ) d(f);
    }
    function Ea(a) {
      return a == null ? "" : String(a);
    }
    function xa(a, c, d) {
      var f = "";
      a = a;
      for (var h; a.length > 0; )
        if ((h = a.match(c))) {
          f += a.slice(0, h.index);
          f += Ea(d(h));
          a = a.slice(h.index + h[0].length);
        } else {
          f += a;
          a = "";
        }
      return f;
    }
    function Q(a, c) {
      return xa(a, Sa, function (d) {
        if (c == null) return "";
        var f = d[1] || "";
        if (f == "\\") return d[2];
        var h = c,
          i = d[3],
          m = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
        d = m.exec(i);
        if (d == null) return f;
        for (; d != null; ) {
          var l = d[1].indexOf("[") === 0 ? xa(d[2], "\\\\]", "]") : d[1];
          h = h[l];
          if (null == h || "" == d[3]) break;
          i = i.substring("[" == d[3] ? d[1].length : d[0].length);
          d = m.exec(i);
        }
        return f + Ea(h);
      });
    }
    function ua(a, c) {
      return xa(a, Sa, function (d) {
        if (c == null) return "";
        var f = d[1] || "";
        if (f == "\\") return d[2];
        var h = c,
          i = d[3],
          m = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
        d = m.exec(i);
        if (d == null) return f;
        for (; d != null; ) {
          var l = d[1].indexOf("[") === 0 ? xa(d[2], "\\\\]", "]") : d[1];
          h = h[l];
          if (null == h || "" == d[3]) break;
          i = i.substring("[" == d[3] ? d[1].length : d[0].length);
          d = m.exec(i);
        }
        return f + Ea(h);
      });
    }
    function db(a) {
      return $(a);
    }
    function K(a) {
      return $("#" + a);
    }
    function Ta(a) {
      var c = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
      };
      return c[a]
        ? { r: c[a][0], g: c[a][1], b: c[a][2] }
        : (result =
            /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(
              a
            ))
        ? {
            r: parseInt(result[1]),
            g: parseInt(result[2]),
            b: parseInt(result[3]),
          }
        : (result =
            /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(
              a
            ))
        ? {
            r: parseFloat(result[1]) * 2.55,
            g: parseFloat(result[2]) * 2.55,
            b: parseFloat(result[3]) * 2.55,
          }
        : (result = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(a))
        ? {
            r: parseInt("0x" + result[1] + result[1]),
            g: parseInt("0x" + result[2] + result[2]),
            b: parseInt("0x" + result[3] + result[3]),
          }
        : (result = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(
            a
          ))
        ? {
            r: parseInt("0x" + result[1]),
            g: parseInt("0x" + result[2]),
            b: parseInt("0x" + result[3]),
          }
        : { r: 255, g: 255, b: 255 };
    }
    function Ua(a) {
      var c, d, f, h, i, m;
      f = a.length;
      d = 0;
      for (c = ""; d < f; ) {
        h = a.charCodeAt(d++) & 255;
        if (d == f) {
          c +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
              h >> 2
            );
          c +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
              (h & 3) << 4
            );
          c += "==";
          break;
        }
        i = a.charCodeAt(d++);
        if (d == f) {
          c +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
              h >> 2
            );
          c +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
              ((h & 3) << 4) | ((i & 240) >> 4)
            );
          c +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
              (i & 15) << 2
            );
          c += "=";
          break;
        }
        m = a.charCodeAt(d++);
        c +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
            h >> 2
          );
        c +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
            ((h & 3) << 4) | ((i & 240) >> 4)
          );
        c +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
            ((i & 15) << 2) | ((m & 192) >> 6)
          );
        c +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
            m & 63
          );
      }
      return c;
    }
    function qa(a) {
      function c(t, s) {
        var u, E, G, D, F;
        G = t & 2147483648;
        D = s & 2147483648;
        u = t & 1073741824;
        E = s & 1073741824;
        F = (t & 1073741823) + (s & 1073741823);
        if (u & E) return F ^ 2147483648 ^ G ^ D;
        return u | E
          ? F & 1073741824
            ? F ^ 3221225472 ^ G ^ D
            : F ^ 1073741824 ^ G ^ D
          : F ^ G ^ D;
      }
      function d(t, s, u, E, G, D, F) {
        t = c(t, c(c((s & u) | (~s & E), G), F));
        return c((t << D) | (t >>> (32 - D)), s);
      }
      function f(t, s, u, E, G, D, F) {
        t = c(t, c(c((s & E) | (u & ~E), G), F));
        return c((t << D) | (t >>> (32 - D)), s);
      }
      function h(t, s, u, E, G, D, F) {
        t = c(t, c(c(s ^ u ^ E, G), F));
        return c((t << D) | (t >>> (32 - D)), s);
      }
      function i(t, s, u, E, G, D, F) {
        t = c(t, c(c(u ^ (s | ~E), G), F));
        return c((t << D) | (t >>> (32 - D)), s);
      }
      function m(t) {
        var s = "",
          u = "",
          E;
        for (E = 0; E <= 3; E++) {
          u = (t >>> (E * 8)) & 255;
          u = "0" + u.toString(16);
          s += u.substr(u.length - 2, 2);
        }
        return s;
      }
      var l = [],
        r,
        y,
        z,
        w,
        o,
        p,
        n,
        q;
      l = (function (t) {
        var s,
          u = t.length;
        s = u + 8;
        for (
          var E = ((s - (s % 64)) / 64 + 1) * 16,
            G = Array(E - 1),
            D = 0,
            F = 0;
          F < u;

        ) {
          s = (F - (F % 4)) / 4;
          D = (F % 4) * 8;
          G[s] |= t.charCodeAt(F) << D;
          F++;
        }
        s = (F - (F % 4)) / 4;
        D = (F % 4) * 8;
        G[s] |= 128 << D;
        G[E - 2] = u << 3;
        G[E - 1] = u >>> 29;
        return G;
      })(a);
      o = 1732584193;
      p = 4023233417;
      n = 2562383102;
      q = 271733878;
      for (a = 0; a < l.length; a += 16) {
        r = o;
        y = p;
        z = n;
        w = q;
        o = d(o, p, n, q, l[a + 0], 7, 3614090360);
        q = d(q, o, p, n, l[a + 1], 12, 3905402710);
        n = d(n, q, o, p, l[a + 2], 17, 606105819);
        p = d(p, n, q, o, l[a + 3], 22, 3250441966);
        o = d(o, p, n, q, l[a + 4], 7, 4118548399);
        q = d(q, o, p, n, l[a + 5], 12, 1200080426);
        n = d(n, q, o, p, l[a + 6], 17, 2821735955);
        p = d(p, n, q, o, l[a + 7], 22, 4249261313);
        o = d(o, p, n, q, l[a + 8], 7, 1770035416);
        q = d(q, o, p, n, l[a + 9], 12, 2336552879);
        n = d(n, q, o, p, l[a + 10], 17, 4294925233);
        p = d(p, n, q, o, l[a + 11], 22, 2304563134);
        o = d(o, p, n, q, l[a + 12], 7, 1804603682);
        q = d(q, o, p, n, l[a + 13], 12, 4254626195);
        n = d(n, q, o, p, l[a + 14], 17, 2792965006);
        p = d(p, n, q, o, l[a + 15], 22, 1236535329);
        o = f(o, p, n, q, l[a + 1], 5, 4129170786);
        q = f(q, o, p, n, l[a + 6], 9, 3225465664);
        n = f(n, q, o, p, l[a + 11], 14, 643717713);
        p = f(p, n, q, o, l[a + 0], 20, 3921069994);
        o = f(o, p, n, q, l[a + 5], 5, 3593408605);
        q = f(q, o, p, n, l[a + 10], 9, 38016083);
        n = f(n, q, o, p, l[a + 15], 14, 3634488961);
        p = f(p, n, q, o, l[a + 4], 20, 3889429448);
        o = f(o, p, n, q, l[a + 9], 5, 568446438);
        q = f(q, o, p, n, l[a + 14], 9, 3275163606);
        n = f(n, q, o, p, l[a + 3], 14, 4107603335);
        p = f(p, n, q, o, l[a + 8], 20, 1163531501);
        o = f(o, p, n, q, l[a + 13], 5, 2850285829);
        q = f(q, o, p, n, l[a + 2], 9, 4243563512);
        n = f(n, q, o, p, l[a + 7], 14, 1735328473);
        p = f(p, n, q, o, l[a + 12], 20, 2368359562);
        o = h(o, p, n, q, l[a + 5], 4, 4294588738);
        q = h(q, o, p, n, l[a + 8], 11, 2272392833);
        n = h(n, q, o, p, l[a + 11], 16, 1839030562);
        p = h(p, n, q, o, l[a + 14], 23, 4259657740);
        o = h(o, p, n, q, l[a + 1], 4, 2763975236);
        q = h(q, o, p, n, l[a + 4], 11, 1272893353);
        n = h(n, q, o, p, l[a + 7], 16, 4139469664);
        p = h(p, n, q, o, l[a + 10], 23, 3200236656);
        o = h(o, p, n, q, l[a + 13], 4, 681279174);
        q = h(q, o, p, n, l[a + 0], 11, 3936430074);
        n = h(n, q, o, p, l[a + 3], 16, 3572445317);
        p = h(p, n, q, o, l[a + 6], 23, 76029189);
        o = h(o, p, n, q, l[a + 9], 4, 3654602809);
        q = h(q, o, p, n, l[a + 12], 11, 3873151461);
        n = h(n, q, o, p, l[a + 15], 16, 530742520);
        p = h(p, n, q, o, l[a + 2], 23, 3299628645);
        o = i(o, p, n, q, l[a + 0], 6, 4096336452);
        q = i(q, o, p, n, l[a + 7], 10, 1126891415);
        n = i(n, q, o, p, l[a + 14], 15, 2878612391);
        p = i(p, n, q, o, l[a + 5], 21, 4237533241);
        o = i(o, p, n, q, l[a + 12], 6, 1700485571);
        q = i(q, o, p, n, l[a + 3], 10, 2399980690);
        n = i(n, q, o, p, l[a + 10], 15, 4293915773);
        p = i(p, n, q, o, l[a + 1], 21, 2240044497);
        o = i(o, p, n, q, l[a + 8], 6, 1873313359);
        q = i(q, o, p, n, l[a + 15], 10, 4264355552);
        n = i(n, q, o, p, l[a + 6], 15, 2734768916);
        p = i(p, n, q, o, l[a + 13], 21, 1309151649);
        o = i(o, p, n, q, l[a + 4], 6, 4149444226);
        q = i(q, o, p, n, l[a + 11], 10, 3174756917);
        n = i(n, q, o, p, l[a + 2], 15, 718787259);
        p = i(p, n, q, o, l[a + 9], 21, 3951481745);
        o = c(o, r);
        p = c(p, y);
        n = c(n, z);
        q = c(q, w);
      }
      return (m(o) + m(p) + m(n) + m(q)).toLowerCase();
    }
    function ra(a, c) {
      c = c === undefined ? 850 : c;
      a = $(a).unbind("mouseout").unbind("mouseover");
      a[0] && clearTimeout(a[0]._hideTimerId);
      a.bind("mouseout", function () {
        a[0]._hideTimerId = setTimeout(function () {
          a.hide();
        }, c);
      }).bind("mouseover", function () {
        clearTimeout(a[0]._hideTimerId);
      });
    }
    function ia() {
      return k.signedIn && k.user && k.user.length > 0;
    }
    function da() {
      return ia() || (H.notify(diigolet.consts.MSG_NEED_TO_SIGNIN, 5e3), false);
    }
    function Va() {
      document.hidden || k.user || C.loadBookmark();
    }
    function Wa() {
      var a, c;
      if (typeof document.hidden !== "undefined") {
        a = "hidden";
        c = "visibilitychange";
      } else if (typeof document.mozHidden !== "undefined") {
        a = "mozHidden";
        c = "mozvisibilitychange";
      } else if (typeof document.msHidden !== "undefined") {
        a = "msHidden";
        c = "msvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        a = "webkitHidden";
        c = "webkitvisibilitychange";
      }
      typeof document.addEventListener === "undefined" ||
        typeof a === "undefined" ||
        document.addEventListener(c, Va, false);
    }
    function eb() {
      J([R, B, H, Y, P, X, U, Xa, V], function (a) {
        if (a.j) {
          var c = (function (d) {
            return function () {
              ya = d.clickedOn = true;
            };
          })(a);
          a.j
            .unbind()
            .bind("mouseup", c)
            .bind("mousedown", c)
            .bind("keydown", function (d) {
              d.stopPropagation();
            });
        }
      });
      Fa.mousedown(function (a) {
        if (a.target.tagName == "INPUT" || a.target.tagName == "TEXTAREA")
          Ga = true;
        else if (
          a.target.id == "diigolet-csm-dropdown" ||
          a.target.className == "diigolet-csm-coloritem" ||
          a.target.parentNode.id == "diigolet-panel-btnHighlight"
        )
          ya = true;
        window.getSelection();
        mousedownTop = a.pageY;
        mousedownLeft = a.pageX;
      })
        .mouseup(fb)
        .mouseover(gb)
        .mouseout(hb)
        .mousemove(function (a) {
          window.curcorX = a.pageX;
          window.curcorY = a.pageY;
        })
        .click(ib);
    }
    function jb() {
      new kb("#Diigo-Bookmark-Tag", {
        resultsClass: "diigolet ac_results",
        data: k.myTags,
        mode: "multiple",
        multipleSeparator: " ,",
        onItemSelect: function () {
          R.clickedOn = true;
        },
      });
    }
    function ib(a, c) {
      if (!k.draggingFloatNote) {
        var d = S.isHighlightElement(a.target);
        if (d) {
          c = I.find(d.ids[0]);
          if (c != null) {
            c.activate(true);
            if (
              d.type == diigolet.consts.ANNOTATION_TYPE_TEXT ||
              d.type == diigolet.consts.ANNOTATION_TYPE_IMAGE
            ) {
              Z.reset(c);
              P.scheduleShow(a, c);
            }
            if (
              c.comments.length > 0 &&
              (d.type == diigolet.consts.ANNOTATION_TYPE_TEXT ||
                d.type == diigolet.consts.ANNOTATION_TYPE_IMAGE)
            ) {
              Z.reset(c);
              Z.scheduleToggleEdit(true);
            }
          }
        }
      }
    }
    function gb(a, c) {
      if (!k.draggingFloatNote) {
        var d = S.isHighlightElement(a.target);
        if (d) {
          c = I.find(d.ids[0]);
          c.activate(true);
          if (
            d.type == diigolet.consts.ANNOTATION_TYPE_TEXT ||
            d.type == diigolet.consts.ANNOTATION_TYPE_IMAGE
          ) {
            Z.reset(c);
            console.log("sdfsd", c, $(".diigoHighlight .id_" + c.id));
            $(".diigoHighlight.id_" + c.id).addClass("hover");
          } else if (
            d.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE ||
            d.type == diigolet.consts.ANNOTATION_TYPE_ICON
          ) {
            Z.removeEditMode();
            Z.ann = null;
            var f = B.ann != c;
            if (!B.isEditing())
              if (f || !B.shown) {
                B.shown && B.hide();
                B.scheduleShow(a, c);
              } else B.cancelHide();
          }
          if (
            c.comments.length > 0 &&
            (d.type == diigolet.consts.ANNOTATION_TYPE_TEXT ||
              d.type == diigolet.consts.ANNOTATION_TYPE_IMAGE)
          ) {
            Z.reset(c);
            Z.scheduleToggleEdit(true);
          }
        }
      }
    }
    function hb(a, c) {
      if (!k.draggingFloatNote) {
        var d = S.isHighlightElement(a.target);
        if (d) {
          c = I.find(d.ids[0]);
          c.activate(false);
          $(".diigoHighlight.id_" + c.id).removeClass("hover");
          !B.pinned && !B.editing && B.aboutToShow() && B.scheduleHide();
          Z.aboutToShow() && c.comments.length <= 0 && Z.scheduleHide();
          Z.scheduleToggleEdit(false);
          P.scheduleHide();
        }
      }
    }
    function fb(a) {
      H.clickedOn || $("#diigolet-toolbar .dropdownMenu").hide();
      B.shown && !B.clickedOn && !B.isEditing() && B.hide();
      if (!Ga && !ya && Ba.isTextSelected() && k.isOwner)
        if (k.isHighlightPen) diigolet.handle(a, "highlight");
        else {
          Y.direction = a.pageX < mousedownLeft ? "reverse" : "normal";
          Y.show(a, "selection");
        }
      else if (a.target.id != "diigolet-csm-search") {
        console.log("hide");
        Y.hide();
      }
      H.clickedOn =
        R.clickedOn =
        lb.clickedOn =
        B.clickedOn =
        U.clickedOn =
        Ga =
        ya =
          false;
    }
    function Ya() {
      N("onSignOut");
      k.reset();
      X.onSignOut();
      H.onSignOut();
      k.unpaintAllAnnotations();
      C.loadBookmark();
    }
    function mb() {
      var a = (document.body.id = document.body.id || "bodyid");
      a = (function (m) {
        var l = /[^\-_a-z0-9U+00A1-]/g;
        if (l.test(m))
          return m.replace(l, function (r) {
            return "\\" + r.charCodeAt(0).toString(16) + " ";
          });
        return m;
      })(a);
      var c = Ha.split("/**No replace area**/");
      Ha = c[0];
      for (var d = "", f, h, i = /([^{}@]*)(\{[^{}]*\})/g; (f = i.exec(Ha)); ) {
        h = f[1];
        f = f[2].replace(/\r\n/g, "\n");
        d +=
          $.map(h.split(","), function (m) {
            if (/(^|\s)body([\s.\[#]|$)/.test(m))
              return m.replace("body", "body#" + a);
            if (/(^|\s)html(\s|$)/.test(m))
              return m.replace("html", "html body#" + a);
            return "body#" + a + " " + m.replace(/^\s+/m, "");
          }).join(",") +
          f +
          "\n";
      }
      d += c[1];
      document.createStyleSheet
        ? (document.createStyleSheet().cssText = d)
        : $("head, body")
            .add(document.body)
            .eq(0)
            .append(
              $(document.createElement("style"))
                .attr({ type: "text/css" })
                .text(d)
            );
    }
    function aa(a, c, d) {
      this.options = $.extend(
        {
          reverse: false,
          whatToShow: -1,
          filter: function () {
            return true;
          },
        },
        d || {}
      );
      this.node = a;
      this.func = c;
      this.end = false;
    }
    function Za(a) {
      var c = document.createElement("div");
      c.innerHTML = a;
      c.setAttribute("contenteditable", "true");
      c.style.position = "absolute";
      document.body.appendChild(c);
      a = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(c);
      a.removeAllRanges();
      a.addRange(range);
      document.execCommand("copy");
      document.body.removeChild(c);
    }
    function nb() {
      var a = [];
      k.myTagsWithCount.sort(function (m, l) {
        return m.count <= l.count ? 1 : -1;
      });
      var c = k.myTagsWithCount.slice(0, 101),
        d = c[0].count,
        f = c.length;
      c.sort(function (m, l) {
        return m.name.toLowerCase() <= l.name.toLowerCase() ? -1 : 1;
      });
      for (var h = 0; h < f; h++) a[h] = c[h].count;
      a = la(a);
      f = a.length;
      a.sort(function (m, l) {
        return m < l ? 1 : -1;
      });
      var i = Math.ceil(f / 10);
      f = a.slice(1, 1 + i);
      h = a.slice(1 + i, 1 + 2 * i);
      a = a.slice(1 + 2 * i, 1 + 3 * i);
      return { topTags: c, maxCount: d, a: f, b: h, c: a };
    }
    var x = (window.diigolet = {
      debug: false,
      logLevel: "error",
      version: "5.0b4",
      show: function () {
        H.show();
      },
      callback: function () {
        C.callback.apply(C, arguments);
      },
    });
    window.diigoletrocks = function () {
      x.logLevel = "debug";
      window.d = window.D = x;
      window.dj = $;
      window.devil = window.e = x.devil;
      window.Bookmark = ma;
      window.Annotation = I;
      window.TextHighlight = Ia;
      window.ImageHighlight = ba;
      window.FloatNote = Ja;
      window.Comment = Ca;
      window.PageComment = ja;
      window.InlineComment = ea;
      window.Ctx = k;
      window.DlgShare = V;
      window.Toolbar = H;
      window.DlgBookmark = R;
      window.DlgIC = B;
      window.Utils = A;
    };
    $.browser.ieBelow7 = $.browser.msie && $.browser.version < 7;
    $.browser.ieBelow8 = $.browser.msie && $.browser.version < 8;
    $.browser.supportPositionFixed =
      !$.browser.msie || ($.browser.version >= 7 && $.support.boxModel);
    $.browser.operaBelow11 = $.browser.msie && $.browser.version < 11;
    $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
    $.fn.showHide = function (a) {
      return a ? this.show() : this.hide();
    };
    (function (a) {
      var c = false;
      try {
        if (
          JSON &&
          JSON.parse &&
          JSON.stringify &&
          JSON.parse('{"a":1}').a === 1 &&
          JSON.stringify([1]) == '"[1]"'
        )
          c = true;
      } catch (d) {}
      a.toJSON = function (i) {
        var m = typeof i;
        if (i === null) return "null";
        if (m != "undefined") {
          if (m == "number") return isFinite(i) ? String(i) : "null";
          if (m == "boolean") return i + "";
          if (m == "string") return a.quoteString(i);
          if (m == "object") {
            if (Object.prototype.toString.apply(i) === "[object Array]") {
              var l = [];
              for (m = 0; m < i.length; m++) l.push(a.toJSON(i[m]) || "null");
              return "[" + l.join(",") + "]";
            }
            if (i.constructor === Date) {
              l = i.getUTCMonth() + 1;
              if (l < 10) l = "0" + l;
              m = i.getUTCDate();
              if (m < 10) m = "0" + m;
              var r = i.getUTCFullYear(),
                y = i.getUTCHours();
              if (y < 10) y = "0" + y;
              var z = i.getUTCMinutes();
              if (z < 10) z = "0" + z;
              var w = i.getUTCSeconds();
              if (w < 10) w = "0" + w;
              i = i.getUTCMilliseconds();
              if (i < 100) i = "0" + i;
              if (i < 10) i = "0" + i;
              return (
                '"' +
                r +
                "-" +
                l +
                "-" +
                m +
                "T" +
                y +
                ":" +
                z +
                ":" +
                w +
                "." +
                i +
                'Z"'
              );
            }
            m = [];
            for (l in i)
              if (Object.hasOwnProperty.call(i, l))
                (r = a.toJSON(i[l])) && m.push(a.quoteString(l) + ":" + r);
            return "{" + m.join(", ") + "}";
          }
        }
      };
      a.evalJSON = function (i) {
        if (typeof JSON == "object" && JSON.parse) return JSON.parse(i);
        return eval("(" + i + ")");
      };
      a.secureEvalJSON = function (i) {
        if (typeof JSON == "object" && JSON.parse) return JSON.parse(i);
        var m = i;
        m = m.replace(/\\["\\\/bfnrtu]/g, "@");
        m = m.replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        );
        m = m.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(m)) return eval("(" + i + ")");
        else throw new SyntaxError("Error parsing JSON, source is not valid.");
      };
      a.quoteString = function (i) {
        if (i.match(f))
          return (
            '"' +
            i.replace(f, function (m) {
              var l = h[m];
              if (typeof l === "string") return l;
              l = m.charCodeAt();
              return (
                "\\u00" +
                Math.floor(l / 16).toString(16) +
                (l % 16).toString(16)
              );
            }) +
            '"'
          );
        return '"' + i + '"';
      };
      var f =
          /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        h = {
          "\u0008": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\u000c": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\",
        };
    })(jQuery);
    var Na = ["debug", "info", "error"];
    if (!Array.prototype.indexOf)
      Array.prototype.indexOf = function (a, c) {
        var d = this.length,
          f = Number(c) || 0;
        f = f < 0 ? Math.ceil(f) : Math.floor(f);
        if (f < 0) f += d;
        for (; f < d; f++) if (f in this && this[f] === a) return f;
        return -1;
      };
    var Sa = /(^|.|\r|\n)(#\{(.*?)\})/,
      ob = {
        mixin: function (a) {
          ga(
            a,
            this,
            ca("addEventListener removeEventListener fireEvent _resetEvents")
          );
          a._resetEvents();
        },
        addEventListener: function (a, c) {
          this._events[a] || (this._events[a] = []);
          var d = this._events[a];
          d.indexOf(c) == -1 && d.push(c);
        },
        removeEventListener: function (a, c) {
          var d = this._events[a];
          if (d)
            if (arguments.length == 2) {
              var f = d.indexOf(c);
              f > -1 && d.splice(f);
            } else delete this._events[a];
        },
        _resetEvents: function () {
          this._supressEvents = false;
          this._events = [];
        },
        fireEvent: function (a, c) {
          if (!this._supressEvents) {
            N("[event]", a);
            var d = this._events[a];
            if (d)
              for (var f = 0, h, i = d.length; (h = d[f]), f < i; f++)
                (typeof h == "function" ? h : h["on" + a]).apply(h, c);
          }
        },
      },
      A = (x.utils = {
        dump: function () {
          window.diigolet.debug &&
            window.console &&
            console.log.apply(console, [].slice.call(arguments));
        },
        parseColor: function (a) {
          var c = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0],
          };
          return c[a]
            ? { r: c[a][0], g: c[a][1], b: c[a][2] }
            : (result =
                /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(
                  a
                ))
            ? {
                r: parseInt(result[1]),
                g: parseInt(result[2]),
                b: parseInt(result[3]),
              }
            : (result =
                /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(
                  a
                ))
            ? {
                r: parseFloat(result[1]) * 2.55,
                g: parseFloat(result[2]) * 2.55,
                b: parseFloat(result[3]) * 2.55,
              }
            : (result = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(a))
            ? {
                r: parseInt("0x" + result[1] + result[1]),
                g: parseInt("0x" + result[2] + result[2]),
                b: parseInt("0x" + result[3] + result[3]),
              }
            : (result =
                /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(a))
            ? {
                r: parseInt("0x" + result[1]),
                g: parseInt("0x" + result[2]),
                b: parseInt("0x" + result[3]),
              }
            : { r: 255, g: 255, b: 255 };
        },
        content2Html: function (a) {
          return a;
        },
        fork: function (a) {
          setTimeout(function () {
            a();
          }, 13);
        },
      });
    A.lang = {
      isArray: function (a) {
        if (a)
          return (
            this.isNumber(a.length) &&
            this.isFunction(a.splice) &&
            !this.hasOwnProperty(a.length)
          );
        return false;
      },
      isBoolean: function (a) {
        return typeof a === "boolean";
      },
      isFunction: function (a) {
        return typeof a === "function";
      },
      isNull: function (a) {
        return a === null;
      },
      isNumber: function (a) {
        return typeof a === "number" && isFinite(a);
      },
      isObject: function (a) {
        return (a && (typeof a === "object" || this.isFunction(a))) || false;
      },
      isString: function (a) {
        return typeof a === "string";
      },
      isUndefined: function (a) {
        return typeof a === "undefined";
      },
      hasOwnProperty: function (a, c) {
        if (Object.prototype.hasOwnProperty) return a.hasOwnProperty(c);
        return !this.isUndefined(a[c]) && a.constructor.prototype[c] !== a[c];
      },
      extend: function () {
        for (
          var a = [].slice.call(arguments),
            c = a.shift(),
            d = 0,
            f = a.length,
            h;
          (h = a[d]), d < f;
          d++
        )
          for (var i in h) c[i] = h[i];
        return c;
      },
      protectiveExtend: function (a, c) {
        for (var d in c) if (a[d] !== undefined) a[d] = c[d];
      },
      extendFiltered: function () {
        for (
          var a = [].slice.call(arguments),
            c = a.shift(),
            d = a.pop(),
            f = 0,
            h = a.length,
            i;
          (i = a[f]), f < h;
          f++
        )
          for (var m in i) {
            var l = d(m);
            if (l) c[l === true ? m : l] = i[m];
          }
        return c;
      },
      toArray: function (a) {
        return [].slice.call(a);
      },
      toBoolean: function (a) {
        return !a ? false : a != "false" && a != "0";
      },
      each: function (a, c, d) {
        if (a.forEach) a.forEach(c, d);
        else for (var f in a) c.call(d, a[f], f);
      },
    };
    A.lang.extend(A, A.lang);
    A.array = {
      findIndex: function (a, c, d) {
        d = d = d || 0;
        for (var f = a.length, h; (h = a[d]), d < f; d++) if (c(h)) return d;
        return -1;
      },
      find: function (a, c, d) {
        c = this.findIndex(a, c, d);
        return c > -1 ? a[c] : null;
      },
      concatMe: function (a, c) {
        [].splice.apply(a, [a.length, 0].concat(c));
        return a;
      },
      unique: function (a, c) {
        for (var d = [], f = 0, h = a.length, i; (i = a[f]), f < h; f++)
          if (c)
            this.find(d, function (m) {
              return c(m, i);
            }) || d.push(i);
          else d.indexOf(i) == -1 && d.push(i);
        return d;
      },
      reverse: function (a) {
        for (var c = Array(a.length), d = a.length - 1, f = 0; d >= 0; d--, f++)
          c[f] = a[d];
        return c;
      },
    };
    A.string = {
      md5: function (a) {
        function c(t, s) {
          var u, E, G, D, F;
          G = t & 2147483648;
          D = s & 2147483648;
          u = t & 1073741824;
          E = s & 1073741824;
          F = (t & 1073741823) + (s & 1073741823);
          if (u & E) return F ^ 2147483648 ^ G ^ D;
          return u | E
            ? F & 1073741824
              ? F ^ 3221225472 ^ G ^ D
              : F ^ 1073741824 ^ G ^ D
            : F ^ G ^ D;
        }
        function d(t, s, u, E, G, D, F) {
          t = c(t, c(c((s & u) | (~s & E), G), F));
          return c((t << D) | (t >>> (32 - D)), s);
        }
        function f(t, s, u, E, G, D, F) {
          t = c(t, c(c((s & E) | (u & ~E), G), F));
          return c((t << D) | (t >>> (32 - D)), s);
        }
        function h(t, s, u, E, G, D, F) {
          t = c(t, c(c(s ^ u ^ E, G), F));
          return c((t << D) | (t >>> (32 - D)), s);
        }
        function i(t, s, u, E, G, D, F) {
          t = c(t, c(c(u ^ (s | ~E), G), F));
          return c((t << D) | (t >>> (32 - D)), s);
        }
        function m(t) {
          var s = "",
            u = "",
            E;
          for (E = 0; E <= 3; E++) {
            u = (t >>> (E * 8)) & 255;
            u = "0" + u.toString(16);
            s += u.substr(u.length - 2, 2);
          }
          return s;
        }
        var l = [],
          r,
          y,
          z,
          w,
          o,
          p,
          n,
          q;
        l = (function (t) {
          var s,
            u = t.length;
          s = u + 8;
          for (
            var E = ((s - (s % 64)) / 64 + 1) * 16,
              G = Array(E - 1),
              D = 0,
              F = 0;
            F < u;

          ) {
            s = (F - (F % 4)) / 4;
            D = (F % 4) * 8;
            G[s] |= t.charCodeAt(F) << D;
            F++;
          }
          s = (F - (F % 4)) / 4;
          D = (F % 4) * 8;
          G[s] |= 128 << D;
          G[E - 2] = u << 3;
          G[E - 1] = u >>> 29;
          return G;
        })(a);
        o = 1732584193;
        p = 4023233417;
        n = 2562383102;
        q = 271733878;
        for (a = 0; a < l.length; a += 16) {
          r = o;
          y = p;
          z = n;
          w = q;
          o = d(o, p, n, q, l[a + 0], 7, 3614090360);
          q = d(q, o, p, n, l[a + 1], 12, 3905402710);
          n = d(n, q, o, p, l[a + 2], 17, 606105819);
          p = d(p, n, q, o, l[a + 3], 22, 3250441966);
          o = d(o, p, n, q, l[a + 4], 7, 4118548399);
          q = d(q, o, p, n, l[a + 5], 12, 1200080426);
          n = d(n, q, o, p, l[a + 6], 17, 2821735955);
          p = d(p, n, q, o, l[a + 7], 22, 4249261313);
          o = d(o, p, n, q, l[a + 8], 7, 1770035416);
          q = d(q, o, p, n, l[a + 9], 12, 2336552879);
          n = d(n, q, o, p, l[a + 10], 17, 4294925233);
          p = d(p, n, q, o, l[a + 11], 22, 2304563134);
          o = d(o, p, n, q, l[a + 12], 7, 1804603682);
          q = d(q, o, p, n, l[a + 13], 12, 4254626195);
          n = d(n, q, o, p, l[a + 14], 17, 2792965006);
          p = d(p, n, q, o, l[a + 15], 22, 1236535329);
          o = f(o, p, n, q, l[a + 1], 5, 4129170786);
          q = f(q, o, p, n, l[a + 6], 9, 3225465664);
          n = f(n, q, o, p, l[a + 11], 14, 643717713);
          p = f(p, n, q, o, l[a + 0], 20, 3921069994);
          o = f(o, p, n, q, l[a + 5], 5, 3593408605);
          q = f(q, o, p, n, l[a + 10], 9, 38016083);
          n = f(n, q, o, p, l[a + 15], 14, 3634488961);
          p = f(p, n, q, o, l[a + 4], 20, 3889429448);
          o = f(o, p, n, q, l[a + 9], 5, 568446438);
          q = f(q, o, p, n, l[a + 14], 9, 3275163606);
          n = f(n, q, o, p, l[a + 3], 14, 4107603335);
          p = f(p, n, q, o, l[a + 8], 20, 1163531501);
          o = f(o, p, n, q, l[a + 13], 5, 2850285829);
          q = f(q, o, p, n, l[a + 2], 9, 4243563512);
          n = f(n, q, o, p, l[a + 7], 14, 1735328473);
          p = f(p, n, q, o, l[a + 12], 20, 2368359562);
          o = h(o, p, n, q, l[a + 5], 4, 4294588738);
          q = h(q, o, p, n, l[a + 8], 11, 2272392833);
          n = h(n, q, o, p, l[a + 11], 16, 1839030562);
          p = h(p, n, q, o, l[a + 14], 23, 4259657740);
          o = h(o, p, n, q, l[a + 1], 4, 2763975236);
          q = h(q, o, p, n, l[a + 4], 11, 1272893353);
          n = h(n, q, o, p, l[a + 7], 16, 4139469664);
          p = h(p, n, q, o, l[a + 10], 23, 3200236656);
          o = h(o, p, n, q, l[a + 13], 4, 681279174);
          q = h(q, o, p, n, l[a + 0], 11, 3936430074);
          n = h(n, q, o, p, l[a + 3], 16, 3572445317);
          p = h(p, n, q, o, l[a + 6], 23, 76029189);
          o = h(o, p, n, q, l[a + 9], 4, 3654602809);
          q = h(q, o, p, n, l[a + 12], 11, 3873151461);
          n = h(n, q, o, p, l[a + 15], 16, 530742520);
          p = h(p, n, q, o, l[a + 2], 23, 3299628645);
          o = i(o, p, n, q, l[a + 0], 6, 4096336452);
          q = i(q, o, p, n, l[a + 7], 10, 1126891415);
          n = i(n, q, o, p, l[a + 14], 15, 2878612391);
          p = i(p, n, q, o, l[a + 5], 21, 4237533241);
          o = i(o, p, n, q, l[a + 12], 6, 1700485571);
          q = i(q, o, p, n, l[a + 3], 10, 2399980690);
          n = i(n, q, o, p, l[a + 10], 15, 4293915773);
          p = i(p, n, q, o, l[a + 1], 21, 2240044497);
          o = i(o, p, n, q, l[a + 8], 6, 1873313359);
          q = i(q, o, p, n, l[a + 15], 10, 4264355552);
          n = i(n, q, o, p, l[a + 6], 15, 2734768916);
          p = i(p, n, q, o, l[a + 13], 21, 1309151649);
          o = i(o, p, n, q, l[a + 4], 6, 4149444226);
          q = i(q, o, p, n, l[a + 11], 10, 3174756917);
          n = i(n, q, o, p, l[a + 2], 15, 718787259);
          p = i(p, n, q, o, l[a + 9], 21, 3951481745);
          o = c(o, r);
          p = c(p, y);
          n = c(n, z);
          q = c(q, w);
        }
        return (m(o) + m(p) + m(n) + m(q)).toLowerCase();
      },
      strip: function (a) {
        return a.replace(/^\s+/, "").replace(/\s+$/, "");
      },
      trim: function (a) {
        return this.strip(a);
      },
      strip2: function (a) {
        return a.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
      },
      trim2: function (a) {
        return this.strip2(a);
      },
      makeTpl: function (a, c) {
        if (c.toTemplateReplacements) c = c.toTemplateReplacements();
        return a.replace(/(^|.|\r|\n)(#\{(.*?)\})/g, function (d, f, h, i) {
          if (c == null) return "";
          d = f || "";
          if (d == "\\") return h;
          h = c;
          i = i;
          f = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
          var m = f.exec(i);
          if (m == null) return "";
          for (; m != null; ) {
            var l = m[1][0] == "[" ? m[2].replace(/\\\\]/g, "]") : m[1];
            h = h[l];
            if (null == h || "" == m[3]) break;
            i = i.substring("[" == m[3] ? m[1].length : m[0].length);
            m = f.exec(i);
          }
          return d + (h == null ? "" : String(h));
        });
      },
      parseQuery: function (a, c) {
        var d = A.string.strip(a).match(/([^?#]*)(#.*)?$/);
        if (!d) return {};
        var f = {};
        A.each(d[1].split(c || "&"), function (h) {
          if ((h = h.split("="))[0]) {
            var i = decodeURIComponent(h.shift());
            h = h.length > 1 ? h.join("=") : h[0];
            if (h != undefined) h = decodeURIComponent(h);
            if (i in f) {
              A.isArray(f[i]) || (f[i] = [f[i]]);
              f[i].push(h);
            } else f[i] = h;
          }
        });
        return f;
      },
      toQueryString: function (a) {
        var c = function (f, h) {
            f = encodeURIComponent(f);
            h === undefined
              ? d.push(f)
              : d.push(f + "=" + (h == null ? "" : encodeURIComponent(h)));
          },
          d = [];
        A.each(a, function (f, h) {
          if (h)
            if (f && typeof f == "object")
              A.isArray(f) &&
                A.each(f, function (i) {
                  c(h, i);
                });
            else c(h, f);
        });
        return d.join("&");
      },
      escapeRegexp: function (a) {
        if (!arguments.callee.sRE)
          arguments.callee.sRE = RegExp(
            "(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)",
            "g"
          );
        return a.replace(arguments.callee.sRE, "\\$1");
      },
      stripTags: function (a) {
        return a.replace(/<\/?[^>]+>/gi, "").replace(/[<>]/g, "");
      },
      stripScripts: function (a) {
        return a.replace(
          RegExp("<script[^>]*>([\\S\\s]*?)</script>", "img"),
          ""
        );
      },
      scan: function (a, c, d) {
        if (!c.global) throw "string.scan: pattern is not global";
        for (var f; (f = c.exec(a)); ) d(f);
      },
      split: function (a, c) {
        return (a = this.strip(a || "")) ? a.split(c) : [];
      },
      truncate: function (a, c, d) {
        if (a.length <= c) return a;
        if (typeof d != "string") d = "...";
        return a.substr(0, c - d.length) + d;
      },
    };
    A.url = { isSubDomainOf: function () {} };
    A.dom = {
      build2: function () {
        var a = [],
          c = arguments,
          d,
          f,
          h = 0,
          i;
        for (c = c[0] instanceof Array ? c[0] : c; h < c.length; h++)
          if (c[h + 1] instanceof Object) {
            d = a[a.length] = document.createElement(c[h]);
            for (i in c[++h]) d.setAttribute(i, c[h][i]);
            if (c[h + 1] instanceof Array) {
              f = arguments.callee(c[++h]);
              for (i = 0; i < f.length; i++) d.appendChild(f[i]);
            }
          } else a[a.length] = document.createTextNode(c[h]);
        return a;
      },
      getSelection: function () {
        return window.getSelection
          ? window.getSelection().toString()
          : document.getSelection
          ? document.getSelection()
          : document.selection.createRange().text;
      },
      buildOne: function (a, c, d) {
        return this.build2(a, c, d)[0];
      },
      getDocumentSource: function () {
        var a = document,
          c = document.doctype,
          d = "";
        if (c) {
          d = "<!DOCTYPE html PUBLIC";
          if (c.publicId) d += ' "' + c.publicId + '"';
          if (c.systemId) d += ' "' + c.systemId + '"';
          d += ">";
        }
        a = a.documentElement;
        a = a.outerHTML
          ? a.outerHTML
          : XMLSerializer
          ? new XMLSerializer().serializeToString(a)
          : "<html>" + document.innerHTML + "</html>";
        return d + a;
      },
      isChildOf: function (a, c) {
        for (var d = a; d && (d = d.parentNode); ) if (d == c) return true;
        return false;
      },
      HTML_addCSS: function (a, c, d) {
        var f = a.createElement("style");
        f.setAttribute("type", "text/css");
        d && f.setAttribute("id", d);
        f.appendChild(a.createTextNode(c));
        (a.getElementsByTagName("head")[0] || a.body).appendChild(f);
      },
    };
    if (typeof va == "undefined") var va = {};
    va.URLParser = function (a) {
      this._fields = {
        Username: 4,
        Password: 5,
        Port: 7,
        Protocol: 2,
        Host: 6,
        Pathname: 8,
        URL: 0,
        Querystring: 9,
        Fragment: 10,
      };
      this._values = {};
      this._regex = null;
      this.version = 0.1;
      this._regex =
        /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
      for (var c in this._fields) this["get" + c] = this._makeGetter(c);
      typeof a != "undefined" && this._parse(a);
    };
    va.URLParser.prototype.setURL = function (a) {
      this._parse(a);
    };
    va.URLParser.prototype._initValues = function () {
      for (var a in this._fields) this._values[a] = "";
    };
    va.URLParser.prototype._parse = function (a) {
      this._initValues();
      a = this._regex.exec(a);
      if (!a) throw "DPURLParser::_parse -> Invalid URL";
      for (var c in this._fields)
        if (typeof a[this._fields[c]] != "undefined")
          this._values[c] = a[this._fields[c]];
    };
    va.URLParser.prototype._makeGetter = function (a) {
      return function () {
        return this._values[a];
      };
    };
    var T = function () {};
    T.extend = function (a, c) {
      var d = T.prototype.extend;
      T._prototyping = true;
      var f = new this();
      d.call(f, a);
      delete T._prototyping;
      var h = f.constructor,
        i = (f.constructor = function () {
          if (!T._prototyping)
            if (this._constructing || this.constructor == i) {
              this._constructing = true;
              h.apply(this, arguments);
              delete this._constructing;
            } else if (arguments[0] != null)
              return (arguments[0].extend || d).call(arguments[0], f);
        });
      i.ancestor = this;
      i.extend = this.extend;
      i.forEach = this.forEach;
      i.implement = this.implement;
      i.prototype = f;
      i.toString = this.toString;
      i.valueOf = function (m) {
        return m == "object" ? i : h.valueOf();
      };
      d.call(i, c);
      typeof i.init == "function" && i.init();
      return i;
    };
    T.prototype = {
      extend: function (a, c) {
        if (arguments.length > 1) {
          var d = this[a];
          if (
            d &&
            typeof c == "function" &&
            (!d.valueOf || d.valueOf() != c.valueOf()) &&
            /\bbase\b/.test(c)
          ) {
            var f = c.valueOf();
            c = function () {
              var y = this.base || T.prototype.base;
              this.base = d;
              var z = f.apply(this, arguments);
              this.base = y;
              return z;
            };
            c.valueOf = function (y) {
              return y == "object" ? c : f;
            };
            c.toString = T.toString;
          }
          this[a] = c;
        } else if (a) {
          var h = T.prototype.extend;
          if (!T._prototyping && typeof this != "function")
            h = this.extend || h;
          for (
            var i = { toSource: null },
              m = ["constructor", "toString", "valueOf"],
              l = T._prototyping ? 0 : 1;
            (r = m[l++]);

          )
            a[r] != i[r] && h.call(this, r, a[r]);
          for (var r in a) i[r] || h.call(this, r, a[r]);
        }
        return this;
      },
      base: function () {},
    };
    T = T.extend(
      {
        constructor: function (a) {
          this.extend(a);
        },
      },
      {
        ancestor: Object,
        version: "1.1",
        forEach: function (a, c, d) {
          for (var f in a)
            this.prototype[f] === undefined && c.call(d, a[f], f, a);
        },
        implement: function () {
          for (var a = 0; a < arguments.length; a++)
            typeof arguments[a] == "function"
              ? arguments[a](this.prototype)
              : this.prototype.extend(arguments[a]);
          return this;
        },
        toString: function () {
          return String(this.valueOf());
        },
      }
    );
    jQuery.Draggable = function (a, c) {
      function d(z) {
        m = false;
        i(document).bind("mousemove", f).bind("mouseup", h);
        r = z.pageX;
        y = z.pageY;
        return false;
      }
      function f(z) {
        m || l.beforeDrag(z);
        m = true;
        var w = parseInt(a.css("left")),
          o = parseInt(a.css("top")),
          p = z.pageX - r,
          n = z.pageY - y;
        l.onDrag(a, { ox: p, oy: n }) && a.css({ left: w + p, top: o + n });
        r = z.pageX;
        y = z.pageY;
        return false;
      }
      function h(z) {
        i(document).unbind("mousemove", f).unbind("mouseup", h);
        if (m) {
          l.afterDrag(z);
          return false;
        } else return true;
      }
      var i = jQuery,
        m = false;
      a = this.ele = i(a);
      a[0].diigolet_draggable && a[0].diigolet_draggable.destroy();
      a[0].diigolet_draggable = this;
      var l = (this.options = i.extend(
        {
          handle: "",
          cursor: "move",
          onDrag: function () {
            return true;
          },
          beforeDrag: function () {},
          afterDrag: function () {},
        },
        c || {}
      ));
      l.handle = l.handle ? i(l.handle, a) : a;
      l.handle.css({ cursor: l.cursor });
      var r, y;
      this.destroy = function () {
        l.handle.unbind("mousedown", d);
      };
      l.handle.bind("mousedown", d);
    };
    var kb = function (a, c) {
        function d(p) {
          var n = -1,
            q = "";
          $.each(w.multipleSeparator, function (t, s) {
            var u;
            if ((u = p.lastIndexOf(s)) > n) {
              q = s;
              n = u;
            }
          });
          return [n, q];
        }
        function f() {
          o.hide();
        }
        function h(p) {
          switch (p.keyCode) {
            case 38:
              p.preventDefault();
              m(-1);
              break;
            case 40:
              p.preventDefault();
              m(1);
              break;
            case 9:
            case 13:
              i() && p.preventDefault();
              break;
            case 32:
              if (o.is(":visible")) {
                p.stopPropagation();
                o.hide();
              }
              break;
            default:
              active = -1;
              z && clearTimeout(z);
              z = setTimeout(function () {
                if (y.val().length < w.minChars) o.hide();
                else
                  a: {
                    var n = y.val();
                    if (w.mode == "multiple") {
                      var q = d(n),
                        t = "";
                      t = q[0] > 0 ? n.substr(q[0] + 1) : n;
                      if (t.length > 0) {
                        tags = x.parseTags(t, true);
                        n = tags.pop();
                      } else break a;
                    }
                    n = n.toLowerCase();
                    q = [];
                    t = 0;
                    for (var s; (s = w.data[t]), t < w.data.length; t++)
                      s.toLowerCase().indexOf(n) == 0 && q.push(s);
                    l(n, q);
                  }
              }, w.delay);
              break;
          }
        }
        function i(p) {
          if (p !== undefined) {
            active = p;
            m(0);
          }
          p = active;
          if (!(p < 0)) {
            var n = o.find("li").eq(p).html();
            if (n.indexOf(" ") >= 0) n = '"' + n + '"';
            if (w.mode == "multiple") {
              p = y.val();
              var q = d(p);
              new_value = q[0] >= 1 ? p.substr(0, q[0] + 1) + n + q[1] : n;
            } else new_value = n;
            y.val(new_value);
            o.hide();
            w.onItemSelect &&
              setTimeout(function () {
                w.onItemSelect(n);
              }, 1);
            setTimeout(function () {
              y[0].focus();
              (function (t, s) {
                if (t.createTextRange) {
                  var u = t.createTextRange();
                  u.move("character", s);
                  u.select();
                } else if (t.selectionStart >= 0) {
                  t.focus();
                  t.setSelectionRange(s, s);
                }
              })(y[0], y.val().length);
            }, 13);
            return true;
          }
        }
        function m(p) {
          var n = o.find("li");
          if (n.size() != 0) {
            active += p;
            if (active < 0) active = n.size() - 1;
            else if (active >= n.size()) active = 0;
            n.removeClass("over").eq(active).addClass("over");
          }
        }
        function l(p, n) {
          if (n && n.length > 0) {
            n.length > 10 && n.splice(9, 99999);
            var q = (function (t) {
              for (
                var s = t.offsetLeft || 0, u = t.offsetTop || 0;
                (t = t.offsetParent);

              ) {
                s += t.offsetLeft;
                u += t.offsetTop;
              }
              if ($.browser.opera && document.compatMode != "CSS1Compat")
                u += 30;
              return { x: s + 0, y: u + 0 };
            })(y[0]);
            o.find("li").unbind();
            o.find("ul")
              .html(
                $.map(n, function (t) {
                  return "<li>" + t + "</li>";
                }).join("")
              )
              .end()
              .css({ top: q.y + y[0].offsetHeight, left: q.x })
              .show();
            o.find("li")
              .mouseover(function (t) {
                active = o.find("li").index(t.target);
                m(0);
              })
              .mousedown(function (t) {
                active = o.find("li").index(t.target);
                m(0);
                i();
                return false;
              });
          } else o.hide();
        }
        function r() {
          o.hide();
        }
        var y = $(a),
          z;
        y[0].autoCompleter && y[0].autoCompleter.destroy();
        y[0].autoCompleter = this;
        var w = (c = $.extend(
          {
            inputClass: "ac_input",
            resultsClass: "ac_results",
            minChars: 1,
            delay: 100,
            matchCase: 0,
            matchSubset: 1,
            matchContains: 0,
            mustMatch: 0,
            loadingClass: "ac_loading",
            selectFirst: false,
            selectOnly: false,
            mode: "multiple",
            multipleSeparator: " ",
          },
          c || {}
        ));
        if (typeof w.multipleSeparator == "string")
          w.multipleSeparator = w.multipleSeparator.split("");
        this.destroy = function () {
          y.unbind("keydown", h).unbind("blur", r);
          $(window).unbind("scroll", f);
          y[0].autoCompleter = null;
        };
        y.attr("autocomplete", "off")
          .addClass(w.inputClass)
          .bind("keydown", h)
          .bind("blur", r);
        $.browser.supportPositionFixed || $(window).bind("scroll", f);
        var o = $("#diigolet-ac");
        if (o.size() == 0) {
          o = $('<div id="diigolet-ac"><ul></ul></div>')
            .addClass(w.resultsClass)
            .hide()
            .css({
              position: $.browser.supportPositionFixed ? "fixed" : "absolute",
            })
            .appendTo(document.body)
            .hide();
          $.browser.ieBelow7 &&
            o.append(
              document.createElement(
                "<iframe class=\"bgiframe\" src=\"javascript:false;document.write('');\" tabindex=\"-1\" style=\"display:block; position:absolute; top: expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)  || 0) * -1) + 'px'); left:expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth) || 0) * -1) + 'px'); z-index:-1; filter:Alpha(Opacity='0'); width:expression(this.parentNode.offsetWidth + 'px'); height:expression(this.parentNode.offsetHeight + 'px')\"/>"
              )
            );
        }
      },
      Ha =
        '/* ==============reset================= */\n.diigolet,\n.diigolet a,\n.diigolet em,\n.diigolet span,\n.diigolet div,\n.diigolet dl,\n.diigolet dt,\n.diigolet dd,\n.diigolet ul,\n.diigolet ol,\n.diigolet li,\n.diigolet h1,\n.diigolet h2,\n.diigolet h3,\n.diigolet h4,\n.diigolet h5,\n.diigolet h6,\n.diigolet pre,\n.diigolet form,\n.diigolet fieldset,\n.diigolet p,\n.diigolet blockquote,\n.diigolet th,\n.diigolet td,\n.diigolet input,\n.diigolet textarea,\n.diigolet select,\n.diigolet * {\n\tbackground: transparent none;\n\tpadding: 0;\n\tmargin: 0;\n\tborder:#000 0 solid;\n\ttext-align:left;\n\ttext-decoration: none;\n\ttext-transform: none;\n\ttext-indent:0px;\n\tline-height:normal;\n\tword-break:normal;\n\tword-wrap:normal;\n\twidth:auto;\n\theight:auto;\n\tcolor:inherit;\n\tfont:inherit;\n\tfloat:none;\n\tcursor:default;\n\tposition:static;\n\n\toverflow:visible;\n\tmax-width:none;\n\tbox-shadow:none;\n\topacity:1;\n\tborder-radius:0;\n}\n.diigolet {\n\tcolor: #000000;\n\tfont:normal normal normal 13px arial,helvetica,clean,sans-serif;\n}\n\n.diigolet input[type=text],.diigolet textarea,.diigolet select,.diigolet fieldset{\n\tbackground-color:#FFF;\n\tborder:1px #999999 solid;\n\tpadding:1px;\n\tfont-size:12px;\n\tdisplay:inline; /*html dog has input display:block*/\n\tborder-radius: 2px;\n\t-webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\n}\n\n.diigolet select{\n\tpadding: 0px;\n\theight: 20px;\n}\n\n.diigolet input[type=text],.diigolet textarea {\n\tcursor:text;\n\n}\n\n.diigolet input[type=text] {\n\theight: 20px;\n}\n\n.diigolet input[type="button"],.diigolet input[type="submit"],.diigolet input[type="reset"],.diigolet input[type="file"] {\n\n\tcolor: buttontext;\n\tcursor: default;\n\tpadding: 2px 5px;\n\ttext-align: center;\n\tborder:1px solid #ccc;\n\tbackground: #fff;\n\tborder-radius: 2px;\n\tbackground-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(248, 248, 248)), to(rgb(210, 210, 210)));\n}\n\n.diigolet input[type="button"]:active,.diigolet input[type="submit"]:active,.diigolet input[type="reset"]:active,.diigolet input[type="file"]:active {\n\tbackground: #ddd;\n}\n\n.diigolet textarea {\n\t/*white-space:normal !important;*/\n\tresize: vertical !important;\n\tpadding: 2px !important;\n}\n.diigolet input.diigo-check{\n\tborder:none;\n\tvertical-align:middle;\n}\n.diigolet input.diigo-button{\n\t/*\n    background:#09f url(/images/btn_diigo_1.gif) repeat-x scroll center;\n    border-color:#EEE #4291e3 #4291e3 #eee;\n    border-style:solid;\n    border-width:1px;\n    color:#FFFFFF;\n    font-family:Verdana, Arial, Helvetica, sans-serif;\n    font-size:11px;\n    font-weight:bold;\n    margin-right:10px;\n    text-align:center;\n    */\n\tfont-size:12px !important;\n\tfont-weight:bold;\n\t/* margin-right:10px;*/\n\tpadding: 4px 8px;\n\tcursor: pointer;\n\tborder-radius: 4px;\n}\n\n.diigolet input.diigo-button#diigolet-dlgBm-btnSave {\n\twidth: 56px;\n\tcolor: white;\n\theight: 25px;\n\t-webkit-border-radius: 4px;\n\tbackground-color: rgba(237,237,237,0);\n\t-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.15);\n\tborder: solid 1px #0388dc;\n\tbackground-image: -webkit-linear-gradient(top, #4eaffa, #0492f5);\n}\n\n.diigolet input.diigo-button#diigolet-dlgBm-btnSave:hover{\n\tbackground-image: -webkit-linear-gradient(top, #349ef0, #0580d6);\n}\n\n.diigolet input.diigo-button#diigolet-dlgBm-btnSave:active{\n\tbackground-image: -webkit-linear-gradient(bottom, #4eaffa, #0492f5);\n\n}\n\n\n.diigolet input.diigo-uplist{\n\tbackground: url(./chrome/images/arrow-up.png) 50% 50% no-repeat,-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(248, 248, 248)), to(rgb(210, 210, 210)));\n\twidth: 12px;\n\tmargin-left:-16px;\n}\n.diigolet input.diigo-uplist:active{\n\tbackground:url(./chrome/images/arrow-up.png) 50% 50% no-repeat,#ddd;\n}\n\n.diigolet div.diigo-buttonswitchlist{\n\tpadding:4px 2px;\n\tborder:1px solid #ccc;\n\tposition:absolute;\n\tright:72px;\n\tbackground:#fff;\n\tz-index:100000;\n}\n\n.diigolet div.diigo-buttonswitchlist ul {\n}\n.diigolet div.diigo-buttonswitchlist ul li{\n\tpadding:2px 6px;\n}\n.diigolet div.diigo-buttonswitchlist ul li:hover{\n\tbackground:#43658F;\n\tcolor:#fff;\n\tcursor:pointer;\n}\n\n#diigoletFNSubmit{\n\twidth:50px;\n}\n\n.diigolet table{\n\tborder-collapse:collapse;border-spacing:0;width:auto;\n}\n.diigolet label{\n\tcursor:pointer !important;\n\tdisplay:inline; /*https://www.miniajax.com/*/\n\tvertical-align:middle;\n}\n.diigolet fieldset,.diigolet img{\n\tborder:0;\n}\n\n.diigolet address,.diigolet caption,.diigolet cite,.diigolet code,.diigolet dfn,.diigolet em,.diigolet strong,.diigolet th,.diigolet var{\n\tfont-style:normal;font-weight:bold;\n}\n\n.diigolet ol,.diigolet ul,.diigolet li{list-style:none;display:block;}\n\n.diigolet caption,.diigolet th {\n\ttext-align:left;\n}\n\n\n.diigolet h1,.diigolet h2,.diigolet h3,.diigolet h4,.diigolet h5,.diigolet h6{font-weight:bold;}\n\n\n.diigolet q:before,.diigolet q:after{content:\'\';}\n\n.diigolet abbr,.diigolet acronym {border:0;}\n\n\n.diigolet a:link,.diigolet a:visited,.diigolet a:hover, .diigolet a:active {\n\ttext-decoration:none;\n\tcolor:#0000FF;\n\tcursor:pointer !important; /*Safari*/\n}\n.diigolet a:hover {\n\ttext-decoration:underline;\n}\n\n/* because all elements have cursor:default*/\n.diigolet a * {\n\tcursor:inherit;\n}\n\n\n\n/*=====Common=====*/\n#diigolet-tray {\n\tposition:fixed;\n\ttop:0;\n\tleft:10;\n\twidth:16px;\n\theight:16px;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletIconv3.gif") no-repeat left -4px;\n\tz-index:2147483646;\n}\n.diigolet a.diigolet-Help:link,.diigolet a.diigolet-Help:visited{\n\tcolor:#06F;\n}\n.diigolet a.diigolet-Help:hover,.diigo a.diigolet-Help:active{\n\tcolor:#00F;\n}\n\n.diigolet label {\n\tmargin-left: 3px;\n}\n\n.diigolet span.noComments {\n\tcolor:#AAA;\n\tfont-size:10px;\n}\n\n/* ========================================Toolbar========================================= */\n#diigolet-toolbar {\n\tborder:none;\n\twidth:100%;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tz-index:2147483647;\n\tcolor:#333;\n}\n#diigolet-tb-content {\n\tpadding:3px 5px;\n\tbackground:#EFEDDE url(/javascripts/diigolet-v2/images/diigolet-toolbar-bg2.gif) repeat scroll 0%;\n}\n\n#diigolet-tb-bar{\n\t/*\theight:24px; */\n}\n#diigolet-tb-bar span,#diigolet-tb-bar div,#diigolet-tb-bar a,#diigolet-tb-bar em{\n\tline-height:24px;\n}\n\n#diigolet-tb-shadow{\n\theight:5px;\n\tbackground: transparent url(/javascripts/diigolet-v2/images/diigolet-toolbar-shadow.png) repeat-x left top;\n}\n\n* html #diigolet-tb-shadow.ie6{\n\t/*\n\t * the filter:... will cause IE6 to freeze after appending toolbar to document.body.\n\t * comment out the filter:... line, everything is OK.\n\t */\n\n\tfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale, src="/javascripts/diigolet-v2/images/diigolet-toolbar-shadow.png");\n\n\toverflow:hidden;\n\tbackground:none;\n}\n\n#diigolet-help {\n\tdisplay:none;\n\tposition:absolute;\n\ttop:29px;\n\tright:10px;\n\twidth:200px;\n\tborder:1px #ccc solid;\n\tbackground-color:#FFFFCC;\n\tpadding:6px 16px 6px 6px;\n}\n\n/* =========Toolbar buttons========= */\n.diigolet a.diigoletButton{\n\theight:24px;\n\tfloat:left;\n\tpadding-right:4px;\n\tcursor:pointer !important;/*IE*/\n}\n.diigolet a.diigoletButton:hover {\n\ttext-decoration:none;\n\tcolor:#000;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletBtn3_r.png") no-repeat right top;\n}\n.diigolet a.diigoletButton:active{\n\tbackground-position:right bottom;\n}\n\n.diigolet a.diigoletButton b{\n\tfont-weight:normal;\n\tcolor:#000;\n\tline-height:24px;\n\tfloat:left; /*IE 6*/\n\tpadding-left:4px;\n\theight:24px;\n}\n\n#diigolet-button-highlight-dropup{\n\twidth:8px;\n\theight:16px;\n\tmargin-right:4px;\n\tbackground:transparent url(\'/javascripts/diigolet-v2/images/up_arrow.gif\') no-repeat scroll left 2px;\n}\n\n#diigolet-button-highlight-dropup.mouseovered{\n\tborder-left:1px solid #888888;\n\tmargin-right:0px;\n\ttext-decoration:none;\n\twidth:11px;\n\theight:24px;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletBtn4.png") no-repeat left top !important;\n}\n\n\n#diigolet-button-highlight-dropup.mouseoveredIe{\n\tborder-left:1px solid #888888;\n\tmargin-right:1px;\n\ttext-decoration:none;\n\twidth:11px;\n\theight:24px;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletBtn4.png") no-repeat left top !important;\n}\n\n#diigolet-button-highlight-dropup.checked{\n\tborder-left:1px solid #888888;\n\tmargin-right:0px;\n\ttext-decoration:none;\n\twidth:11px;\n\theight:24px;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletBtn4_s.png") no-repeat left top !important;\n}\n\n#diigolet-button-highlight.mouseovered{\n\ttext-decoration:none;\n\tcolor:#000;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletBtn3_r.png") no-repeat right top !important;\n}\n\n#diigolet-button-highlight.mouseoveredIe{\n\ttext-decoration:none;\n\tcolor:#000;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletBtn3_r.png") no-repeat right top !important;\n}\n\n#diigolet-button-highlight.mouseovered b.outer{\n\tbackground:transparent url(\'/javascripts/diigolet-v2/images/diigoletBtn3.png\') no-repeat left top;\n}\n\n#diigolet-button-highlight.mouseoveredIe b.outer{\n\tbackground:transparent url(\'/javascripts/diigolet-v2/images/diigoletBtn3.png\') no-repeat left top;\n}\na#diigolet-button-highlight b.outer{\n\tpadding-right: 5px;\n}\n\na#diigolet-button-highlight{\n\tpadding-right: 0 !important;\n}\n\na.diigoletButton:hover b.outer{\n\tbackground:transparent url(\'/javascripts/diigolet-v2/images/diigoletBtn3.png\') no-repeat left top;\n}\na.diigoletButton:active b.outer{\n\tbackground-position:left bottom;\n}\n\n.diigolet a.diigoletButton b b{\n\tfont-size:12px;\n\tpadding-left:20px;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletIconv3.gif") no-repeat left 50%;\n}\n.diigolet a.diigoletButton:active b b{\n\tposition:relative;\n\ttop:1px;\n\tleft:1px;\n}\n\n.diigolet a.diigoletButton.diigoletDisabled{\n\tcursor:default;\n}\n.diigolet a.diigoletButton.diigoletDisabled b b{\n\tcolor:#999;\n\tposition:static;\n}\n.diigolet a.diigoletButton.diigoletDisabled:hover{\n\tbackground:none transparent;\n}\n.diigolet a.diigoletButton.diigoletDisabled:hover b.outer{\n\tbackground:none transparent;\n}\n\n.diigolet a.diigoletButton.checked{\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletBtn3_r.png") no-repeat right top;\n\tbackground-position:right bottom;\n}\n\n.diigolet a.diigoletButton.checked b.outer{\n\tbackground:transparent url(\'/javascripts/diigolet-v2/images/diigoletBtn3.png\') no-repeat left top;\n\tbackground-position:left bottom;\n}\n\n.diigolet a.diigoletButton.checked b b{\n\tposition:relative;\n\ttop:1px;\n\tleft:1px;\n}\n\n/* I don\'t know why. But keep the following line and our buttons become clickable in full area in IE 6\nIf you delete this line, only text is clickable, very strange indeed!*/\na:active {}\n\n#diigolet-tb-btnSidebar b b {\n\tbackground-position:left -24px;\n}\n#diigolet-tb-btnSidebar.toClose b b {\n\tbackground-position:left -48px;\n}\n\n#diigolet-tb-btnBookmark b b {\n\tbackground-position:left -144px;\n}\n/*bookmarked*/\n#diigolet-tb-btnBookmark.saved b b {\n\tbackground-position:left -120px;\n}\n\n#diigolet-button-highlight b b {\n\tbackground-position:left -72px;\n}\n#diigolet-button-highlight.dontShow b b { \n\tbackground-position:left -96px;\n}\n\n#diigolet-button-highlight.yellow b b {\n\tbackground-position:left -355px;\n}\n\n#diigolet-button-highlight.blue b b {\n\tbackground-position:left -375px;\n}\n\n#diigolet-button-highlight.green b b {\n\tbackground-position:left -395px;\n}\n\n#diigolet-button-highlight.pink b b {\n\tbackground-position:left -415px;\n}\n\n.diigolet .colorItem{\n\tpadding-left: 20px;\n\theight:16px;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletIconv3.gif") no-repeat left -440px;\n}\n\n#diigolet-context-yellow b,#diigolet-colorMenu-yellow b{\n\tbackground-position:left -440px;\n}\n\n#diigolet-context-blue b,#diigolet-colorMenu-blue b{\n\tbackground-position:left -460px;\n}\n\n#diigolet-context-green b,#diigolet-colorMenu-green b{\n\tbackground-position:left -480px;\n}\n\n#diigolet-context-pink b,#diigolet-colorMenu-pink b{\n\tbackground-position:left -500px;\n}\n\n#diigolet-context-yellow.colorchecked b,#diigolet-colorMenu-yellow.colorchecked b{\n\tbackground-position:left -520px ;\n}\n\n#diigolet-context-blue.colorchecked b,#diigolet-colorMenu-blue.colorchecked b{\n\tbackground-position:left -540px ;\n}\n\n#diigolet-context-green.colorchecked b,#diigolet-colorMenu-green.colorchecked b{\n\tbackground-position:left -560px ;\n}\n\n#diigolet-context-pink.colorchecked b,#diigolet-colorMenu-pink.colorchecked b{\n\tbackground-position:left -580px ;\n}\n\n#diigolet-tb-btnFloatNote b b {\n\tbackground-position:left -167px;\n}\n\n#diigolet-tb-btnTwitter b b {\n\tbackground:transparent url("https://twitter.com/favicon.ico") no-repeat left 50%;\n}\n\n#diigolet-tb-btnComment b b {\n\tbackground-position:left -192px;\n}\n\n#diigolet-tb-btnComment.commented b b {\n\tbackground-position:left -192px;\n}\n\n#diigolet-tb-btnMore b b {\n\tbackground-position:left 0px;\n}\n\n#diigolet-tb-btnSignIn b b {\n\tbackground-position:left -264px;\n}\n\n#diigolet-tb-btnHide {\n\tfloat:right;\n\theight:24px;\n\twidth: 16px;\n\tbackground:transparent url("/javascripts/diigolet-v2/images/diigoletIconv3.gif") no-repeat left -240px;\n}\n\n/*mouse over effect*/\n/*\n.diigoHighlight.id_190e5778b533dc0fa1b1660653a4f6f5 {outline: 2px dotted green !important;}\n*/\ndiv.diigoIcon{\n\tcursor:pointer !important;\n\tmargin: 0pt;\n\tpadding: 0px 0px 0px 0px;\n\tposition: absolute;\n\tdisplay:none;\n\twidth: 24px !important;\n\tz-index:2147483643;\n\theight: 23px !important;\n\tbackground: transparent url(\'/javascripts/diigolet-v2/images/edit-highlight.png\') no-repeat left;\n\t-webkit-transition:-webkit-transform 150ms ease;\n\tvertical-align: text-bottom;\n}\n\nspan.diigoHighlightCommentLocator{\n\tvertical-align: text-bottom;\n}\n\ndiv.diigoIcon span{\n\tcolor:#000000;\n\tdisplay:block;\n\tfont-family:Helvetica,Arial,sans-serif;\n\tfont-size:13px;\n\tfont-weight:700;\n\tline-height:18px;\n\ttext-align:center;\n\ttext-shadow:0 1px 1px #FFFFFF;\n\ttext-decoration:none;\n\ttext-indent:0;\n\t/*test*/display: none;\n}\n\ndiv.diigoHighlightcommented{\n\tdisplay:inline-block !important;\n}\ndiv.ImageIcon{\n\tbackground-color: transparent !important;\n}\n\ndiv.diigoIcon:hover{\n\tbackground-color: transparent !important;\n\tbackground-repeat:no-repeat !important;\n\t-webkit-transform:translate(0px,-2px);\n\n}\n\ndiv.diigoHighlightcommented.TextIcon{\n\t/*right:0px;*/\n\tbottom:0px;\n}\n\ndiv.diigoHighlightcommented.public{\n\tbackground: #FFFFFF url(\'/javascripts/diigolet-v2/images/public-annotation.png\') no-repeat left;\n}\n\ndiv.diigoHighlightcommented.private.yellow{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px 0px no-repeat;\n}\ndiv.diigoHighlightcommented.private.blue{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px -46px no-repeat;\n}\ndiv.diigoHighlightcommented.private.green{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px -92px no-repeat;\n}\ndiv.diigoHighlightcommented.private.pink{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px -138px no-repeat;\n}\n\n\ndiv.diigoHighlightcommented.group.yellow{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px -23px no-repeat;\n}\ndiv.diigoHighlightcommented.group.blue{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px -69px no-repeat;\n}\ndiv.diigoHighlightcommented.group.green{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px -115px no-repeat;\n}\ndiv.diigoHighlightcommented.group.pink{\n\tbackground:url(\'/javascripts/diigolet-v2/images/annotation-icon.png\') 0px -161px no-repeat;\n}\n\n\n/* ===========Toolbar dropup menu========== */\n#diigolet-toolbar .dropupMenu{\n\tdisplay:none;\n\tborder:1px solid #999;\n\tfont:12px arial,helvetica,clean,sans-serif;\n\tbackground-color: Menu;\n\tpadding:2px 0;\n\tz-index:2147483647;\n\tposition:absolute;\n\ttop:30px;\n\twidth:140px;\n}\n\n#diigolet-toolbar .dropupMenu a,\n#diigolet-toolbar .dropupMenu a:link,\n#diigolet-toolbar .dropupMenu a:visited,\n#diigolet-toolbar .dropupMenu a:hover,\n#diigolet-toolbar .dropupMenu a:active {\n\tdisplay:block;\n\tpadding:2px 12px;\n\tfont-weight:normal;\n\ttext-decoration:none;\n\tcolor:#000;\n\tbackground:#fff;\n\tcursor:default;\n}\n#diigolet-toolbar .dropupMenu a:hover,#diigolet-toolbar .dropupMenu a:active {\n\tcolor:#fff;\n\tbackground:#09f;\n}\n\n\n/* =======Notification======= */\n#diigolet-notify {\n\tdisplay:none;\n\tposition:absolute;\n\ttop:33px;\n\tleft:0px;\n\tborder:1px #ccc solid;\n\tbackground-color:#FFFFCC;\n\tpadding:6px 16px 6px 6px;\n\tz-index:2147483647;\n}\n#diigolet-notify.right {\n\tleft:auto;\n\tright:0px;\n\ttext-align:right;\n}\n\n\n/*=========Bookmark====================*/\n\n.diigolet .tagList{\n\tmargin:2px 0;\n\tfloat:left;\n}\n.diigolet .diigo-su-tag .tagButton{\n\tdisplay: inline-block;\n\theight: 16px;\n\tpadding: 0px 5px;\n\tline-height: 16px;\n\tbackground-color: #f2f2f2;\n\tborder-top: 1px solid rgba(0,0,0,0);\n\tborder-left: 1px solid rgba(0,0,0,0);\n\tborder-right: 1px solid #C9D7F1;\n\tborder-bottom: 1px solid #C9D7F1;\n\tcolor:#858585;\n\tborder-radius: 1px;\n\tcursor:pointer;\n\tmargin-right: 3px;\n}\n\n.diigolet .diigo-su-tag .tagButton:hover{\n\tborder-color: #82b3f8;\n}\n.diigolet .diigo-su-tag .tagButton:active{\n\n}\n.diigolet .diigo-su-tag .tagButton.inused{\n\tcolor:#3f99a1;\n}\n.diigolet .diigo-su-tag .tagButton.selected{\n\tborder-color: #82b3f8;\n}\n\n.diigolet .tagLoading a{\n\tdisplay:none;\n\tmargin-bottom:10px;\n}\n.diigolet .tagList.tagLoading .loading{\n\tbackground:url(/javascripts/diigolet-v2/images/indicator.gif) no-repeat left top;\n\theight:16px;\n\tpadding-left:22px;\n\tdisplay:block;\n}\n.diigolet .tagLoading .tagListHeader{\n\tdisplay:none;\n}\n.diigolet .tagListHeader{\n\tcursor:pointer;float:left;width: 100px;line-height:23px;\n}\n.diigolet .tagListHeader:hover\n{\n\ttext-decoration:underline;\n}\n\n.diigolet .tagList div\n{\n\tcolor:#666666!important;\n\tfont-size:12px!important;\n\tfont-weight:bold!important;\n\tpadding-right:5px!important;\n\ttext-align:left!important;\n}\n\n\n/* =======Comments======= */\n\n/* ========Twitter===========*/\n#diigolet-twitter{\n\tbackground-color:threedface;\n\tfont-family:Arial, sans-serif;\n\tfont-size:13px;\n\tcolor:windowtext;\n\tpadding: 5px 5px;\n\tmargin: 0px;\n\tleft:0;\n\ttop:30px;\n\tz-index:2147483646;\n\twidth:380px;\n\tposition:static;\n\tborder:1px #0099FF solid;\n\tborder-left-width:0;\n}\n\n#diigolet-twitter input{\n\tvertical-align:middle;\n}\n\n/*#diigolet-twitter input, textarea{\n\tfont-family:Calibri, Arial, sans-serif;\n}*/\n\n.diigolet .twitterlogo{\n\twidth:210px;\n\theight:49px;\n\tFILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale, src="https://assets3.twitter.com/images/twitter.png")\n}\n\n/* =======Forward window======= */\n#diigolet-tagForward {\n\tbackground-color: white;\n\twidth:460px;\n\tfont-family:Arial, Helvetica, sans-serif;\n\t-webkit-border-radius:0px;\n\tcursor: default;\n\tposition:static;\n\tright:5px;\n\ttop:75px;\n\tz-index:2147483646;\n\tborder:1px solid rgba(0,0,0,.25);\n\tbox-shadow: 0px 1px 5px rgba(0,0,0,.3);\n\t-webkit-user-select:none;\n\tbackground-clip: content-box;\n\t-webkit-animation: fadeinScale 200ms ease;\n\n}\n\n#diigolet-tagForward.show{\n\t-webkit-animation: fadeinScale 200ms ease;\n}\n\n#diigolet-tagForward.hide{\n\t-webkit-animation: fadeoutScale 200ms ease;\n}\n\n#diigolet-tagForward *{\n\t-webkit-box-sizing: content-box !important;\n\tbox-sizing: content-box !important;\n}\n\n#diigolet-tagForward-topBar{\n\theight:38px;\n\tvertical-align:middle;\n\tbackground-color: #f5f5f5;\n\tborder-bottom: 1px solid #ddd;\n}\n\n#diigolet-tagForward-topBar>span{\n\tline-height: 38px;\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n\tcolor: #4B4B4B;\n\tfont-size:16px;\n\tcursor:move;\n}\n\n#diigolet-tagForward-topBar .focus-research-tip{\n\tmargin-left: 3px;\n\tfont-size: 12px;\n\tdisplay: none;\n}\n\n\n#diigolet-tagForward .tabContainer{\n\ttext-align:center;\n\tmargin:5px;\n}\n#diigolet-tagForward .tab{\n\tmargin-right:8px;\n\tmargin-left:8px;\n\tpadding:0 8px 2px 8px;\n\tfont-weight:bold;\n}\n\n#diigolet-tagForward .tabContainer a:link,#diigolet-tagForward .tabContainer a:visited{\n\tpadding:4px;\n\tborder:1px #fff solid;\n\tfont-weight:bold;\n\tcolor:#06c;\n\ttext-decoration:none;\n}\n\n#diigolet-tagForward .tabContainer a.active:link,#diigolet-tagForward .tabContainer a.active:visited {\n\tborder:none;\n\tbackground-color:#09f;\n\tcolor:#fff;\n\tpadding:5px;\n}\n#diigolet-tagForward .tabContainer a:hover,#diigolet-tagForward .tabContainer a:active{\n\tborder:1px #09f solid;\n}\n\n#diigolet-tagForward div.tabContent {\n\tdisplay:none;\n}\n#diigolet-tagForward div.tabContent.active {\n\tdisplay:block;\n}\n\n#diigolet-tagForward-caption {\n\ttext-align: center; line-height: 30px;font-size:14px; font-weight:bold;\n}\n\n#diigolet-tagForward-remove {\n\tfloat: right;\n\tcolor: #ff0000;\n\tbackground:-webkit-linear-gradient(bottom,#ebebeb,#f5f5f5);\n\tmargin-top: 6px;\n\tmargin-right: 15px;\n\tcursor: pointer;\n\theight: 24px;\n\twidth: 27px;\n\tborder:1px solid #c4c4c4;\n\tborder-radius: 4px;\n\tbox-shadow: 0px 1px 0px #fff;\n}\n\n#diigolet-tagForward-remove:active{\n\tbackground:-webkit-linear-gradient(top,#ebebeb,#f5f5f5);\n}\n\n#diigolet-tagForward-remove>span{\n\tfloat:left;\n\tbackground-image: url(\'/javascripts/diigolet-v2/images/remove.png\');\n\theight: 14px;\n\twidth: 11px;\n\tmargin-top: 5px;\n\tmargin-left: 8px;\n\tcursor: pointer;\n}\n\n#diigolet-tagForward-remove:hover>span{\n\tbackground-position: 0px -14px;\n}\n\n#diigolet-Bookmark-Form{\n\tpadding: 20px 15px 0px 15px;\n}\n\n#diigolet-Bookmark-Form input[type="text"],#diigolet-Bookmark-Form textarea{\n\toutline: none;\n\tborder: none;\n\tbackground-color: white;\n\t-webkit-transition: height .1s ease-in-out;\n}\n#diigolet-Bookmark-Form input[type="text"]{\n\tline-height: 20px;\n\tmin-height: 20px;\n}\n\n#diigolet-tagForward .diigo-hr{\n\twidth:426px;\n\tborder-top:1px #ccc solid;\n\tmargin:0 auto;\n\theight:1px;\n\toverflow:hidden;\n}\n\n.diigolet .diigo-table{\n\tmargin:10px 20px;\n}\n.diigolet .diigo-table td{\n\tpadding:2px 0;\n}\n.diigolet .diigo-table th{\n\tcolor:#666;\n\tfont-weight:bold;\n\tpadding-right:5px;\n\twidth:62px;\n\ttext-align:left;\n\tfont-size:12px !important;\n}\n.diigolet .diigolet-input{\n\twidth:350px;\n\tpadding:1px;\n\tfont-size:12px !important;\n\theight: 16px !important;\n\tpadding-left: 3px !important;\n\tline-height: 16px !important;\n\toutline:none !important;\n}\n\n.diigolet .diigolet-input:focus{\n\tborder: solid 1px #3996ed;\n\t-webkit-box-shadow: 0 0 1px rgba(77,144,254,.55);\n\n}\n\n\n#Diigo-Bookmark-Description,#Diigo-Forward-PS{\n\tborder: 1px solid #d7d7d7;\n\tbackground-color: white;\n\t-webkit-transition: border 400ms ease;\n\tmin-height: 56px;\n}\n\n#Diigo-Bookmark-Description.focus{\n\tborder: 1px solid #aaa;\n}\n\n#Diigo-Bookmark-Description-Input{\n\twidth: 413px;\n\tmax-width: 413px;\n\tfont-family: Arial;\n\theight: 45px;\n\tmargin-left: 6px;\n\tmargin-top: 3px;\n\tfont-size: 12px;\n\tpadding: 2px;\n}\n\n#Diigo-Bookmark-Url {\n\tborder-left: 1px solid #DCDCDC;\n\tborder-right:1px solid #DCDCDC;\n\tbackground-color: white;\n\tposition: relative;\n\t-webkit-transform: rotateX(-90deg);\n\theight: 0px;\n\tposition: relative;\n\n\n}\n\n#Diigo-Bookmark-Url.fold{\n\t-webkit-animation: fold 400ms ease both;\n\t-webkit-animation-play-state: running;\n}\n#Diigo-Bookmark-Url.unfold{\n\t-webkit-animation: unfold 400ms ease both;\n\t-webkit-animation-play-state: running;\n\tborder-bottom: 1px solid #DCDCDC;\n\n}\n\n/*put the animaitions(unfold and fold) in screenshot.css*/\n\n#Diigo-Bookmark-Url>div#url-arrow{\n\theight: 6px;\n\twidth: 13px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/dp-arrow.png");\n\tposition: absolute;\n\tleft: 11px;\n\ttop:-6px;\n}\n#Diigo-Bookmark-Url-Input{\n\tmargin-top: 3px;\n\twidth: 412px;\n\tmargin-left: 5px;\n}\n\n#Diigo-Bookmark-Title {\n\theight: 30px;\n\tborder: 1px solid #d7d7d7;\n\tbackground-color: white;\n\t-webkit-transition: border 400ms ease;\n\tposition: relative;\n}\n\n.diigolet .diigo-alert-tip{\n\tbackground-color: rgba(255,0,0,0.8);\n\tposition: absolute;\n\tleft: 117px;\n\ttop:-29px;\n\tpadding:4px 6px;\n\tdisplay: block;\n\tfont-size: 12px;\n\tfont-weight:bold;\n\tpointer-events: none;\n\tfont-family: arial, sans-serif;\n\tcolor:white;\n\tdisplay: none;\n\tline-height: 16px;\n\n}\n\n.diigolet .diigo-alert-tip span{\n\tbackground: url(\'/javascripts/diigolet-v2/images/alert.png\') -6px -4px no-repeat;\n\ttext-indent: 17px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n.diigolet .diigo-alert-tip .diigo-alert-tip-arrow{\n\tposition:absolute;\n\tborder:5px solid;\n\tborder-top-color: transparent;\n\tborder-right-color: transparent;\n\tborder-bottom-color: rgba(255,0,0,0.8);;\n\tborder-left-color: transparent;\n\ttop:24px;\n\theight:0;\n\twidth:0;\n\tline-height:0px;\n\t-webkit-transform:rotate(180deg);\n\tleft: 91px;\n}\n\n.diigolet #Diigo-Bookmark-Url .diigo-alert-tip{\n\tleft: 136px;\n}\n\n.diigolet #Diigo-Bookmark-Url .diigo-alert-tip-arrow{\n\tleft: 71px;\n}\n\n#Diigo-Bookmark-Title.focus{\n\tborder: 1px solid #aaa;\n}\n\n#Diigo-Bookmark-Title-Input{\n\tmargin: 4px 0px 0px 0px;\n\twidth: 392px;\n\tborder: none;\n\toutline: none;\n\tfont-size: 14px;\n}\n#Diigo-Bookmark-Title #link-icon{\n\tfloat: left;\n\theight: 30px;\n\twidth: 30px;\n\tbackground: url("/javascripts/diigolet-v2/images/URL.png") 4px 0px no-repeat;\n\tcursor: pointer;\n}\n\n#Diigo-Bookmark-Title #link-icon:hover{\n\tbackground: url("/javascripts/diigolet-v2/images/URL.png") 4px -30px no-repeat;\n}\n\n#Diigo-Bookmark-Title #link-icon.unfold{\n\tbackground: url("/javascripts/diigolet-v2/images/URL.png") 4px -30px no-repeat;\n}\n\n#Diigo-Bookmark-Options{\n\n}\n\n#Diigo-Bookmark-Options .diigo-option{\n\tfont-size: 12px;\n\theight: inherit;\n\twidth: 120px;\n\tdisplay: inline-block;\n\tpadding: 13px 0px 15px 0px;\n\tcolor:#555;\n}\n\n.diigo-option:hover{\n\tbackground-position: 0 -20px;\n}\n.diigo-option:active{\n\tbackground-position: 0 -40px;\n}\n.diigo-option.active{\n\tbackground-position: 0 -40px;\n}\n\n.diigo-option .op-checkbox,#Diigo-Bookmark-checkShareExisting .op-checkbox{\n\theight: 13px;\n\twidth: 15px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tposition: relative;\n\tcursor: pointer;\n\tbackground-image: url("/javascripts/diigolet-v2/images/checkbox.png");\n}\n.diigo-option .op-label{\n\tmargin-left: 7px;\n\ttext-indent: 20px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcursor: pointer;\n\n}\n\n#Diigo-Bookmark-checkShareExisting{\n\tdisplay: none;\n}\n\n#Diigo-Bookmark-checkShareExisting .op-label{\n\tmargin-left: 7px;\n\ttext-indent: -6px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n\n#Diigo-Bookmark-Options .op-checkbox-container{\n\tdisplay: inline;\n\tcursor: pointer;\n}\n\n#Diigo-Bookmark-uploadCache{\n\tmargin-left: 20px;\n}\n\n.diigolet .op-checkbox-container:hover>.op-checkbox{\n\tbackground-position: 0 -13px;\n}\n\n.diigolet .op-checkbox-container.checked .op-checkbox{\n\tbackground-position: 0 -26px;\n}\n\n#Diigo-Bookmark-Privacy .op-label{\n\tbackground-image: url("/javascripts/diigolet-v2/images/private.png");\n\tbackground-repeat: no-repeat;\n}\n#Diigo-Bookmark-Unread .op-label{\n\tbackground-image: url("/javascripts/diigolet-v2/images/op-readlater.png");\n\tbackground-repeat: no-repeat;\n}\n#Diigo-Bookmark-uploadCache .op-label{\n\tbackground-image: url("/javascripts/diigolet-v2/images/cache.png");\n\tbackground-repeat: no-repeat;\n\tdisplay: none;\n}\n\n#Diigo-Bookmark-Url.invalid{\n\tborder: 1px solid #ff0000;\n\tmargin-top: -1px;\n}\n#Diigo-Bookmark-Url.invalid div{\n\tbackground-position: 0px -6px;\n}\n\n#Diigo-Bookmark-Title.invalid{\n\tborder: 1px solid #ff0000;\n}\n\n#Diigo-Bookmark-Tag-Wrapper{\n\tmin-height: 24px;\n\tborder: 1px solid #d7d7d7;\n\tbackground-color: white;\n\tmargin-top: 15px;\n\tposition: relative;\n\t-webkit-transition:border 400ms ease;\n\theight: 30px;\n\n}\n\n#Diigo-Bookmark-Tag-Wrapper.focus{\n\tborder: 1px solid #aaa;\n}\n#Diigo-Bookmark-Tag-Input{\n\tmargin-top: 4px;\n\tmargin-left: 2px;\n\twidth: 389px;\n}\n\n#Diigo-Bookmark-Tag{\n\theight: 30px;\n}\n\n.diigolet #Diigo-Bookmark-Tag{\n\tbox-shadow: none;\n}\n\n#Diigo-Bookmark-Tag-Wrapper.active{\n\tborder: solid 1px #3996ed;\n\t-webkit-box-shadow: 0 0 1px rgba(77,144,254,.55);\n}\n\n#Diigo-Bookmark-Tag-Cloud{\n\tborder: 1px solid #d7d7d7;\n\tborder-bottom-right-radius: 3px;\n\tborder-bottom-left-radius: 3px;\n\tdisplay: none;\n\tbackground-color: white;\n\tfont-size: 12px;\n\tmargin-top: -1px;\n}\n\n#Diigo-Bookmark-Tag-Cloud>div:first-child{\n\theight: 25px;\n\twidth: 100%;\n\tline-height: 25px;\n\tfont-weight: bold;\n\tborder-bottom: 1px solid #cccccc;\n\ttext-indent: 2px;\n\tclear: both;\n\n}\n#Diigo-Bookmark-Tag-Cloud>div:first-child a{\n\tfloat: right;\n\tmargin-right: 3px;\n\ttext-decoration: none;\n}\n#Diigo-Bookmark-Tag-Cloud>div:first-child a:hover{\n\ttext-decoration: underline;\n}\n#Diigo-Bookmark-Tag-Cloud-Container{\n\tmax-height: 180px;\n\toverflow: auto;\n\twidth: 421px;\n\tpadding: 3px 5px 5px 0px;\n}\n\n#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar{\n\twidth:6px;\n}\n\n#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar-track-piece {\n\tbackground-color: transparent;\n}\n\n#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar-thumb:vertical\n{\n\theight: 20px;\n\tbackground-color: #CCCCCC;\n}\n\n#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar-thumb:hover{\n\tbackground-color: #aaaaaa;\n}\n\n\n#Diigo-Bookmark-Tag-Wrapper.opened+#Diigo-Bookmark-Tag-Cloud{\n\tvisibility: visible;\n}\n\n#Diigo-Bookmark-Tag-Cloud ul li{\n\tdisplay: inline-block;\n}\n#Diigo-Bookmark-Tag-Cloud  .Diigo-Bookmark-Tag-item{\n\tmargin-left: 3px;\n\ttext-decoration: none;\n\tcolor: #04c;\n\tline-height: normal;\n\tdisplay: inline-block;\n\tline-height: 140%;\n\tcursor: pointer;\n\tpadding: 0px 2px;\n}\n\n#Diigo-Bookmark-checkShare{\n\tdisplay: none;\n}\n#Diigo-Bookmark-checkShareExisting{\n\tmargin-right:3px;\n}\n\n#Diigo-Bookmark-checkShare input[type=checkbox]{\n\t/*-webkit-appearance:none;*/\n\twidth:14px;\n\theight:14px;\n\tmargin:0;\n\tcursor:pointer;\n\tvertical-align:middle;\n\tbackground:#fff;\n\tborder: 1px solid #dcdcdc;\n\t-webkit-border-radius: 1px;\n\t-moz-border-radius: 1px;\n\tborder-radius: 1px;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tposition:relative !important;\n\n}\n\n/*#Diigo-Bookmark-checkShare input[type=checkbox]:checked::after {\n    content:url(/javascripts/diigolet-v2/images/checkmark.png);\n    display: block;\n    position: absolute !important;\n    top: -3px;\n    left: 1px;\n}\n\n#Diigo-Bookmark-checkShare.lowerHTML input[type=checkbox]:checked::after {\n    content:url(/javascripts/diigolet-v2/images/checkmark.png);\n    display: block;\n    position: absolute !important;\n    top: 2px;\n    left: 1px;\n}*/\n#Diigo-Bookmark-checkShare input[type=checkbox]:hover {\n\tborder-color: #c6c6c6;\n\t-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n\t-moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n\tbox-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n}\n#Diigo-Bookmark-checkShare input[type=checkbox]:active{\n\tborder-color: #c6c6c6;\n\tbackground: #ebebeb;\n}\n\n#Diigo-Bookmark-Tag-Cloud  .Diigo-Bookmark-Tag-item.selected{\n\tbackground-color: #09f;\n\tcolor: white;\n}\n\n#Diigo-Bookmark-Tag-Cloud>div:first-child {\n\theight: 20px;\n\twidth: 100%;\n\tline-height: 20px;\n\tfont-weight: bold;\n\tborder-bottom: 1px solid #cccccc;\n\ttext-indent: 2px;\n}\n\n\n#Diigo-Bookmark-Tag-Cloud  .Diigo-Bookmark-Tag-item:hover{\n\ttext-decoration: underline;\n}\n\n#Diigo-Bookmark-Tag-Eidt{\n\tfloat: right;\n\tmargin-right: 3px;\n}\n\n#Diigo-Bookmark-Tag-suggestion{\n\tmargin-top: 7px;\n}\n#diigolet-bm-tagListContainer-recommend{\n\tmargin-top: 3px;\n\tdisplay: none;\n}\n\n#Diigo-Bookmark-Tag-suggestion .diigo-su-tag{\n\tline-height: 26px;\n\tfont-size: 12px;\n\tmin-height: 26px;\n\tmargin-top: 5px;\n\tdisplay: none;\n\n}\n#Diigo-Bookmark-Tag-suggestion .diigo-su-tag a{\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: #555;\n\twidth: 93px;\n}\n\n#Diigo-Bookmark-Tag-suggestion .loading{\n\tdisplay: inline-block;\n\theight: 10px;\n\twidth: 120px;\n\tbackground: url("/javascripts/diigolet-v2/images/loading.gif");\n}\n\n#Diigo-Bookmark-Tag-suggestion .diigo-su-tag a:hover{\n\ttext-decoration: underline;\n}\n\n\n\n#Diigo-Bookmark-Tag-dropup{\n\theight: 30px;\n\twidth: 28px;\n\tbackground-image:url("/javascripts/diigolet-v2/images/dropup.png");\n\tfloat: left;\n\tcursor: pointer;\n}\n\n/*#Diigo-Bookmark-Tag-dropup.cloud{\n    -webkit-transform:rotate(180deg);\n}*/\n#Diigo-Bookmark-Tag-dropup:hover{\n\tbackground-position: 0 -30px;\n}\n\n.diigo-table .diigo-invalid-input {\n\tdisplay: none;\n\theight: 16px;\n\twidth: 16px;\n\tbackground: url("/javascripts/diigolet-v2/images/icons.png");\n\tbackground-position:-16px -80px ;\n\tmargin-left: 4px;\n}\n\n#diigo-list-group{\n\tmargin-top:17px;\n\twidth: 430px;\n\theight: 24px;\n}\n\n#diigolet-Bookmark-Form #Diigo-outliner #diigo-list-addInput{\n\twidth: 309px;\n\theight: 26px;\n\tborder: 1px solid rgb(215, 215, 215);\n\t-webkit-transition: border 400ms ease;\n\tpadding: 0px 3px;\n}\n\n#Diigo-outliner {\n\theight: 30px;\n\tmargin-bottom: 15px;\n}\n\n#Diigo-outliner>div {\n\tfloat: left;\n\theight: 20px;\n\tfont-size: 12px;\n\tcolor:#04c;\n\tfont-weight: bold;\n\tline-height: 20px;\n}\n\n#diigo-list-group>div{\n\tfloat: left;\n\theight: 20px;\n\tfont-size: 12px;\n\tcolor:#04c;\n\twidth: 200px;\n\tfont-weight: bold;\n\tline-height: 20px;\n\n}\n\n#Diigo-outliner #diigo-list-add-tip {\n\tborder-radius: 4px;\n\tpadding: 5px 14px 5px 14px;\n\tfont-size: 12px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\tbackground-color: #f2dede;\n\tborder: 1px solid #eed3d7;\n\tcolor: #b94a48;\n\tfont-weight: normal;\n\twidth: 399px;\n\tdisplay: none;\n}\n\n#Diigo-outliner #diigo-list-add-tip a {\n\tfloat: right;\n\tmargin: 0 5px;\n\tcolor: b94a48;\n\ttext-decoration: none;\n}\n\n#Diigo-outliner #diigo-list-add-tip a:hover {\n\ttext-decoration: underline;\n}\n\n#Diigo-outliner #diigo-list-add{\n\tposition: relative;\n\tdisplay: none;\n}\n\n#diigo-list-add .diigo-alert-tip{\n\tleft: 7px;\n\ttop: -29px;\n}\n\n#Diigo-outliner .diigo-alert-tip .diigo-alert-tip-arrow{\n\tleft: 43px;\n}\n\n#diigo-list-group #diigo-list-addInput{\n\twidth: 102px;\n\theight: 26px;\n\tborder: 1px solid rgb(215, 215, 215);\n\t-webkit-transition: border 400ms ease;\n\tpadding: 0px 3px;\n\tfont-weight: normal;\n\tcolor: #000000;\n\tborder-radius: 0px;\n}\n\n#diigo-list-group #diigo-list-addInput:focus{\n\tborder: 1px solid rgb(170, 170, 170);\n}\n\n#diigo-list-add>*{\n\tfloat: left;\n}\n\n#diigo-list-addBtn{\n\theight:26px;\n\tmin-width: 38px;\n\tbackground-image: -webkit-linear-gradient(top,rgb(83, 170, 240),rgb(17, 140, 239));\n\tborder: 1px solid rgb(6, 110, 193);\n\tcolor: rgb(255, 255, 255);\n\tborder-radius: 2px;\n\tline-height: 26px;\n\tfont-weight: normal;\n\tmargin-left: 6px;\n\tcursor: pointer;\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;\n\ttext-align: center;\n}\n\n#diigo-list-addBtn:not(.processing):hover{\n\tbackground-image: -webkit-linear-gradient(top,rgb(69, 162, 238),rgb(3, 123, 219));\n}\n\n#diigo-list-addBtn:not(.processing):active{\n\tbackground-image:-webkit-linear-gradient(bottom,#53aaf0,#118cef);\n}\n\n#diigo-list-addBtn .label{\n\tmargin: 8px;\n\tcursor: pointer;\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) all;\n}\n#diigo-list-addBtn .spinner{\n\tleft: 8px;\n\tmargin-left: -16px;\n\topacity: 0;\n\theight: 16px;\n\twidth: 16px;\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) all;\n\tdisplay: inline-block;\n\tposition: relative;\n\ttop: 3px;\n\tvisibility: hidden;\n}\n\n\n#diigo-list-addBtn.processing+a{\n\tdisplay: none;\n}\n\n#diigo-list-addBtn.processing .spinner{\n\topacity: 1;\n\tmargin-left: 12px;\n\tleft: -7px;\n\tvisibility: visible;\n\tbackground-image: url("/javascripts/diigolet-v2/images/addlist-processing.gif");\n}\n\n#diigo-list-addCancel{\n\tcolor: rgb(153, 153, 153);\n\tcursor: pointer;\n\tfont-weight: normal;\n\tline-height: 26px;\n\tmargin-left: 5px;\n\tfont-size: 12px;\n\tmargin-top: 2px;\n}\n\n#diigo-list-addCancel:hover{\n\ttext-decoration: underline;\n}\n\n\n\n#diigo-list-group>div>select:hover{\n\t/*border: 1px solid #9acaec;*/\n\n\tbackground-image: url("/javascripts/diigolet-v2/images/select-arrow-hover.png"), -webkit-linear-gradient(top,#fbfbfb,#f3f3f3);\n}\n#diigo-list-group>div>select.processing{\n\tbackground-image: url("/javascripts/diigolet-v2/images/loading5.gif"), -webkit-linear-gradient(top,#f5f5f5,#fff);\n}\n\n#diigo-list-group>div>select:active{\n\tbackground-image: url("/javascripts/diigolet-v2/images/select-arrow-hover.png"), -webkit-linear-gradient(top,#f5f5f5,#fff);\n}\n\n#diigo-group{\n\t/*margin-left: 26px;*/\n}\n#diigolet-bm-tagListContainer-group{\n\tdisplay: none;\n}\n#diigo-list-group>div>select, #Diigo-outliner>div>select{\n\theight: 28px;\n\twidth: 430px;\n\tdisplay: block;\n\t-webkit-appearance: none !important;\n\tborder: 1px solid #d7d7d7;\n\tbackground-position: right;\n\tbackground-repeat: no-repeat;\n\t/*box-shadow: 0 1px 1px rgba(0,0,0,0.05);*/\n\tcolor: #333;\n\t/*text-shadow: 0 1px 0 #fff;*/\n\tbackground-image: url("/javascripts/diigolet-v2/images/select-arrow.png"), -webkit-linear-gradient(top,#fff,#f5f5f5);\n\toutline: none;\n\tcursor: pointer;\n\tfont-size: 12px;\n\tpadding-right: 22px;\n\tborder-radius: 0px;\n\tfont-weight: normal;\n\tbox-sizing: border-box !important;\n\n}\n\n#Diigo-Bookmark-bottom{\n\theight:49px;\n\tpadding-top:24px;\n}\n\n#Diigo-Bookmark-bottom>div:first-child{\n\tfloat: left;\n\tmargin-top: 3px;\n\tmargin-left: 15px;\n}\n\n#diigolet-dlgBm-btnSave{\n\tdisplay:inline-block;\n\theight:28px;\n\twidth:82px;\n\tline-height:28px;\n\tbackground-image:-webkit-linear-gradient(top,#53aaf0,#118cef);\n\tfloat:right;\n\tcursor:pointer;\n\tmargin-right: 15px;\n\ttext-align: center;\n\tcolor: white;\n\tborder-radius: 2px;\n\tborder: 1px solid #066ec1;\n\tfont-size: 14px;\n}\n\n#diigolet-dlgBm-btnSave:hover{\n\tbackground-image:-webkit-linear-gradient(top,#45a2ee,#037bdb);\n}\n#diigolet-dlgBm-btnSave:active{\n\tbackground-image:-webkit-linear-gradient(bottom,#53aaf0,#118cef);\n}\n#diigolet-dlgBm-btnCancel{\n\tdisplay:inline-block;\n\tfloat:right;\n\tfont-size:14px;\n\tcolor:#999999;\n\theight:12px;\n\tcursor:pointer;\n\tmargin-top:8px;\n\tmargin-right:19px;\n}\n\n#diigolet-dlgBm-btnCancel:hover{\n\ttext-decoration:underline;\n}\n\n.diigolet .diigolet-submit{\n\twidth:140px;\n\theight:25px;\n\ttext-align:center;\n}\n\n\n#diigolet-txtPermalink {\n\tbackground-color: #eee;\n\tpadding:3px;\n\tfont-size:13px;\n}\n\n/* Cross promotion message (shown at the bottom of the bookmark dialog) */\n#diigolet-cross-promotion{\n\tfont-family: arial, helvetica, sans-serif;\n\tfont-size: 12px;\n\tpadding: 10px;\n}\n#diigolet-cross-promotion a{\n\tbackground: whiteSmoke;\n\tborder: 1px solid #CCC;\n\tcolor: #06C;\n\tdisplay: block;\n\tpadding: 3px 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\t-webkit-box-shadow: rgba(255, 255, 255, 0.6) 0px 1px 0px;\n\t-webkit-border-radius: 10px;\n\t-webkit-transition: all .25s linear;\n}\n#diigolet-cross-promotion a:hover{\n\tbackground:white;\n\ttext-decoration: none;\n\tcolor: #04c;\n}\n/* ========================================Context menu========================================= */\n.diigoletContexMenu{\n\tfont:12px arial,helvetica,clean,sans-serif;\n\tz-index:999999998;\n}\n\n#diigolet-csm #diigolet-csm-research-mode {\n\twidth: 18px;\n\theight: 18px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/focus-research-csm.png");\n\tposition: absolute;\n\ttop: -8px;\n\tleft: -9px;\n\tz-index: 1;\n\tdisplay: none;\n}\n\n#diigolet-csm.diigo-researchMode #diigolet-csm-research-mode {\n\tdisplay: block;\n}\n\n#diigolet-csm .csm-action {\n\tdisplay:block;\n\theight:40px !important;\n\twidth:40px !important;\n\tborder-radius: 1px 0px 0px 1px;\n\tz-index:100000;\n\tfloat: left;\n\tmargin: 0px !important;\n\topacity: 0.8;\n}\n\n\n#diigolet-csm #diigolet-csm-highlight{\n\topacity: 1;\n}\n\n#diigolet-csm #diigolet-csm-highlight>b{\n\theight: 16px;\n\twidth: 16px;\n\tdisplay: block;\n\tbackground: #fc6;\n\tmargin: 12px auto 0 auto;\n\tborder-radius: 50%;\n\n}\n#diigolet-csm #diigolet-csm-highlight:active{\n}\n\n#diigolet-csm #diigolet-csm-highlightAndComment{\n\n\tbackground-position: -40px 0;\n\tbackground-image:url(/javascripts/diigolet-v2/images/new_csm.png);\n}\n\n#diigolet-csm #diigolet-csm-highlightAndComment:active{\n\tbackground-image:url(/javascripts/diigolet-v2/images/new_csm.png);\n\n}\n\n#diigolet-csm #diigolet-csm-copy{\n\t/*border-width: 1px 1px 1px 0px;*/\n\t/*border-style: solid;*/\n\t/*border-color: rgba(0,0,0,.15);*/\n\t/*border-radius: 1px 0px 0px 1px;*/\n\tbackground-position: 0px 0;\n\tbackground-image:url(/javascripts/diigolet-v2/images/new_csm.png);\n}\n\n#diigolet-csm #diigolet-csm-copy:active{\n\tbackground-image:url(/javascripts/diigolet-v2/images/new_csm.png);\n}\n\n#diigolet-csm.yellow #diigolet-csm-highlight{\n\tbackground-position: 0px 0px;\n}\n#diigolet-csm.blue #diigolet-csm-highlight{\n\tbackground-position: 0px -22px;\n}\n#diigolet-csm.green #diigolet-csm-highlight{\n\tbackground-position: 0px -44px;\n}\n#diigolet-csm.pink #diigolet-csm-highlight{\n\tbackground-position: 0px -66px;\n}\n\n#diigolet-csm.yellow #diigolet-csm-highlightAndComment{\n\tbackground-position: 0px 0px;\n}\n#diigolet-csm.blue #diigolet-csm-highlightAndComment{\n\tbackground-position: 0px -22px;\n}\n#diigolet-csm.green #diigolet-csm-highlightAndComment{\n\tbackground-position: 0px -44px;\n}\n#diigolet-csm.pink #diigolet-csm-highlightAndComment{\n\tbackground-position: 0px -66px;\n}\n\n#diigolet-csm .csm-action:not(#diigolet-csm-search).editing{\n\t/*opacity: 1 !important;*/\n}\n\n\n#diigolet-csm a:visited,#diigolet-csm a:link{\n\tpadding:0px !important;\n\n}\n#diigolet-csm{\n\tz-index:100000;\n\theight:40px !important;\n\tbackground: #2a313a;\n\tborder-radius: 2px;\n\tdisplay: none;\n}\n\n#diigolet-csm.active {\n\ttransition: top 75ms ease-out,left 75ms ease-out;\n\t-webkit-animation: pop-upwards 180ms forwards linear;\n\tanimation: pop-upwards 180ms forwards linear;\n}\n\n#diigolet-csm.hideArrow::after {\n\tdisplay: none;\n}\n\n#diigolet-csm::after {\n\tcontent: \'\';\n\tdisplay: block;\n    height: 10px;\n\twidth: 10px;\n\tbackground: #2a313a;\n\ttransform: rotate(-135deg);\n\tposition: absolute;\n\tleft: 55px;\n\tbottom: -3px;\n}\n\n#diigolet-csm>div{\n\tfloat: left;\n\tposition: relative;\n}\n#diigolet-csm a:hover{\n\topacity: 1 !important;\n}\n#diigolet-csm #diigolet-csm-dropup:hover{\n\tbackground-position: 0 -44px;\n}\n#diigolet-csm #diigolet-csm-highlight:hover+a#diigolet-csm-dropup{\n\tbackground-position: 0 -22px;\n}\n\n#diigolet-csm #diigolet-csm-dropup:active{\n\tbackground-position: 0 -66px;\n}\n\n#diigolet-csm .diigolet-csm-color{\n\tposition: absolute;\n\ttop: 42px;\n\tleft: 4px;\n\twidth: 32px;\n\n\t/*padding:1px 1px 1px 1px;*/\n\tbackground-color: #2a313a;\n\t-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.35);\n\tline-height: 13px;\n\toverflow: hidden;\n\tvisibility: visible !important;\n\tz-index: -1;\n\tpadding: 7px 0;\n\tborder-radius: 2px;\n\tdisplay: none;\n\t-webkit-animation: pop-downwards 180ms forwards linear;\n\tanimation: pop-downwards 180ms forwards linear;\n\n}\n\n#diigolet-csm-highlightAndComment-wrapper .diigolet-csm-color{\n\tleft: 0px;\n}\n\n\n#diigolet-csm .diigolet-csm-color.small{\n\t/*height: 0px;*/\n\t/*width: 27px;*/\n\t/*display: block;*/\n}\n\n#diigolet-csm .diigolet-csm-coloritem{\n\tdisplay: block;\n\tcursor: pointer;\n\tpadding: 0px ;\n\theight: 14px;\n\twidth: 14px;\n\tborder-radius: 50%;\n\tmargin: 0 auto 4px auto;\n}\n\n.diigolet-csm-color.small .diigolet-csm-coloritem{\n\theight: 7px;\n\twidth: 10px;\n}\n\n\n#diigolet-csm .diigolet-csm-coloritem.yellow{\n\tbackground-color: #fc6;\n\tborder:1px solid #fc6;\n\t/*margin-right: 1px;*/\n\t/*margin-bottom: 1px;*/\n\t/*margin-left: 1px;*/\n\t/*margin-top: 1px;*/\n}\n#diigolet-csm .diigolet-csm-coloritem.blue{\n\tbackground-color: #7ccce5;\n\tborder:1px solid #7ccce5;\n\t/*margin-bottom: 1px;*/\n\t/*margin-top: 1px;*/\n}\n#diigolet-csm .diigolet-csm-coloritem.green{\n\tbackground-color: #b4db66;\n\tborder:1px solid #b4db66;\n\t/*margin-right: 1px;*/\n\t/*margin-left: 1px;*/\n\t/*margin-bottom: 1px;*/\n}\n#diigolet-csm .diigolet-csm-coloritem.pink{\n\tbackground-color: #f98baf;\n\tborder:1px solid #f98baf;\n\t/*margin-right: 0px !important;*/\n\t/*margin-bottom: 1px;*/\n}\n\n#diigolet-csm .diigolet-csm-color .diigolet-csm-coloritem:hover{\n\t/*border-color: #36c;*/\n}\n\n#diigolet-annMenu{\n\theight: 40px;\n\tbackground-color: #2a313a;\n\tpadding: 1px;\n\tposition: absolute;\n\t-webkit-user-select:none;\n    -webkit-animation: pop-upwards 180ms forwards linear;\n\tanimation: pop-upwards 180ms forwards linear;\n\tbox-sizing: content-box !important;\n\tborder-radius: 2px;\n\ttransition: top 75ms ease-out,left 75ms ease-out;\n}\n\n\n#diigolet-annMenu .diigolet-annMenu-item{\n\theight: 40px;\n\twidth: 40px;\n\tfloat: left;\n\tposition: relative;\n\tcursor: pointer;\n\t-webkit-transition: background-color 200ms ease;\n\tbox-sizing: content-box !important;\n\tbackground-image: url("/javascripts/diigolet-v2/images/new_csm.png");\n\topacity: 0.8;\n}\n\n#diigolet-annMenu .diigolet-annMenu-item *{\n\tbox-sizing: content-box !important;\n}\n\n#diigolet-annMenu .diigolet-annMenu-item>b{\n\tcursor: pointer;\n}\n\n#diigolet-annMenu .diigolet-annMenu-item:hover{\n\topacity: 1;\n}\n\n#diigolet-annMenu #diigolet-annMenu-currentColor{\n\theight: 16px;\n\twidth: 16px;\n\tmargin: 12px auto 0 auto;\n\tborder-radius: 50%;\n}\n\n#diigolet-annMenu #diigolet-annMenu-currentColor>b{\n\t/*height: 10px;*/\n\t/*width: 10px;*/\n\t/*border: 1px solid #ffffff;*/\n\t/*display: block;*/\n\t/*background-color: #fc6;*/\n\t/*cursor: pointer;*/\n}\n\n#diigolet-annMenu #diigolet-annMenu-currentColor.yellow{\n\tbackground-color: #fc6;\n}\n#diigolet-annMenu #diigolet-annMenu-currentColor.blue{\n\tbackground-color: #7ccce5;\n}\n\n#diigolet-annMenu #diigolet-annMenu-currentColor.green{\n\tbackground-color: #b4db66;\n}\n\n#diigolet-annMenu #diigolet-annMenu-currentColor.pink{\n\tbackground-color: #f98baf;\n}\n\n\n\n\n#diigolet-annMenu .diigolet-annMenu-item>b{\n\tdisplay: block;\n\theight: 20px;\n\twidth: 20px;\n}\n\n#diigolet-annMenu #diigolet-annMenu-color {\n\tbackground-image: none;\n\topacity: 1;\n}\n#diigolet-annMenu #diigolet-annMenu-color.active {\n\topacity: 1;\n}\n\n#diigolet-annMenu-add{\n\tbackground-position: -40px 0;\n}\n\n#diigolet-annMenu-share{\n\tbackground-position: -120px 0;\n}\n\n\n#diigolet-annMenu-del{\n\tbackground-position: -160px 0;\n}\n\n#diigolet-annMenu-more{\n\tdisplay: none;\n}\n\n#diigolet-annMenu-colorPicker{\n\tposition: absolute;\n\ttop: 43px;\n\tleft: 4px;\n\twidth: 32px;\n\tbackground-color: #2a313a;\n\t-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.35);\n\tline-height: 13px;\n\toverflow: hidden;\n\tvisibility: visible !important;\n\tz-index: -1;\n\tpadding: 7px 0;\n\tborder-radius: 2px;\n\tdisplay: none;\n\t-webkit-animation: pop-downwards 180ms forwards linear;\n\tanimation: pop-downwards 180ms forwards linear;\n\n}\n\n#diigolet-annMenu-colorPicker .ann-colorItem{\n\tdisplay: block;\n\tcursor: pointer;\n\tpadding: 0;\n\theight: 14px;\n\twidth: 14px;\n\tborder-radius: 50%;\n\tmargin: 0 auto 4px auto;\n}\n\n\n\n#diigolet-annMenu-colorPicker .ann-colorItem.colorchecked{\n\n\tborder: 2px inset black;\n}\n.ann-colorItem#diigolet-context-yellow{\n\tborder-color: #e9a110;\n\tbackground-color: #fc6;\n}\n.ann-colorItem#diigolet-context-blue{\n\tborder-color: #33a5c9;\n\tbackground-color: #7ccce5;\n}\n.ann-colorItem#diigolet-context-green{\n\tborder-color: #9ac83b;\n\tbackground-color: #b4db66;\n}\n.ann-colorItem#diigolet-context-pink{\n\tborder-color: #da376c;\n\tbackground-color: #f98baf;\n}\n\n#diigolet-annMenu-arrow{\n\tposition: absolute;\n\ttop:100%;\n\tleft: 33px;\n\theight: 8px;\n\twidth: 14px;\n\tbackground-image: url(/javascripts/diigolet-v2/images/ann-arrow.png);\n\tdisplay: none;\n}\n\n#diigolet-annMenu.onlyMy #diigolet-annMenu-arrow{\n\tleft: 59px;\n}\n\n#diigolet-annMenu-tip{\n\tpadding-left: 4px;\n\tborder-top: 1px solid #eee;\n\tmargin-top: 1px;\n\tcolor: #999;\n}\n\n#diigolet-annMenu-moreThings{\n\tdisplay: none;\n\tposition: absolute;\n\ttop:110%;\n\tleft: 77%;\n\tmin-width: 236px;\n\tmax-width: 236px;\n\tpadding:3px;\n\tborder: 1px solid #94bcd6;\n\tbox-shadow: 0px 1px 2px rgba(0,0,0,.15);\n\tbackground-color: #ffffff;\n\tborder-radius: 3px;\n\tfont: 12px/18px arial;\n\tcolor:#333;\n}\n.diigoletContexMenu a:link,.diigoletContexMenu a:visited {\n\tdisplay:block;\n\tpadding:2px 3px;\n\ttext-decoration:none;\n\tcolor:#000;\n\tcursor:default;\n\twhite-space:nowrap;\n}\n.diigoletContexMenu a:hover:not(.colorItem),.diigoletContexMenu a:active {\n\tcolor:#fff;\n\tbackground:#09f;\n}\n\n.diigoletContexMenu div.sep {\n\tline-height: 0;border-top: 1px solid #AAA;margin: 3px 0;\n}\n/*hack*/\n*html .diigoletContexMenu ._selection  a {\n\twidth:45px;/*IE6 Catch the Focus*/\n}\n*html .diigoletContexMenu ._highlight a {\n\twidth:90px;/*IE6 Catch the Focus*/\n}\n\n/*#diigolet-csm2 #diigolet-csm-highlight2{\n\tdisplay:inline-block;\n\theight:22px !important;\n\twidth:27px !important;\n\tbackground-image:url(/javascripts/diigolet-v2/images/highlight-large.png) !important;\n\tz-index:100000;\n\t\n}\n\n#diigolet-csm2 #diigolet-csm-search2{\n\tdisplay:inline-block;\n\theight:22px !important;\n\twidth:26px !important;\n\tbackground-image:url(/javascripts/diigolet-v2/images/search-large.png) !important;\n\tz-index:100000;\n}\n#diigolet-csm2 a:visited,#diigolet-csm2 a:link{\n\tpadding:0px !important;\n\t\n}\n#diigolet-csm2{\n\tz-index:100000;\n\theight:22px !important;\n}\n#diigolet-csm2 a:hover{\n\tbackground-position:0 -22px;\n}\n#diigolet-csm2 a:active{\n\tbackground-position:0 -44px;\n}*/\n\n/* ===============New sticky note UI================== */\n.diigolet.diigoletFN {\n\tz-index:2147483644;\n\twidth: 300px;\n\t-webkit-user-select:none;\n}\n\n#diigolet-dlg-sticky.groupNew #FN-post-form{\n\tdisplay: block;\n}\n\n#diigolet-dlg-sticky.groupNew #FN-group-content-nav{\n\tdisplay: none;\n}\n\n#diigolet-dlg-sticky.groupNew #FN-group-content{\n\tdisplay: none;\n}\n\n.diigolet.diigoletFN.onlyPrivate #diigolet-dlg-sticky-switcher{\n\tmargin-left: 29px;\n}\n\n.diigolet.diigoletFN.onlyGroup #diigolet-dlg-sticky-switcher{\n\tmargin-left: 29px;\n}\n\n#diigolet-dlg-sticky-top{\n\theight: 30px;\n\tborder-radius: 2px 2px 0px 0px;\n\tdisplay: block;\n\t/*box-shadow: 0 0 2px rgba(0,0,0,.15);*/\n\tposition: relative;\n\tz-index: 2;\n\t-webkit-transition:background-color 200ms ease;\n\tpadding-right: 5px;\n}\n\n#diigolet-dlg-sticky.yellow #diigolet-dlg-sticky-top{\n\tbackground: #f1c40f;\n}\n\n#diigolet-dlg-sticky.blue #diigolet-dlg-sticky-top{\n\tbackground: #5cc7ff;\n}\n\n#diigolet-dlg-sticky.green #diigolet-dlg-sticky-top{\n\tbackground: #47bf87;\n}\n\n#diigolet-dlg-sticky.pink #diigolet-dlg-sticky-top{\n\tbackground: #fe97bc;\n}\n\n#diigolet-dlg-sticky-content{\n\tbackground-color: #fcfbf7;\n\tborder-radius: 0px 0px 2px 2px;\n\tborder-width: 0px 1px 1px 1px;\n\tborder-color: rgba(0,0,0,.08);\n\tborder-style: solid;\n\tbox-shadow: 0px 1px 3px rgba(0,0,0,.08);\n\tposition: relative;\n\n}\n\n#diigolet-dlg-sticky-logo{\n\tfloat: left;\n\theight: 20px;\n\twidth: 20px;\n\tbackground: url("/javascripts/diigolet-v2/images/FN-logo.png") 50% 50% no-repeat;\n\tmargin: 4px 5px 0px 4px;\n}\n\n#diigolet-dlg-sticky-top>span{\n\tvertical-align: middle;\n\tline-height: 28px;\n\tfont-size: 14px;\n\tcolor: #bb6602;\n}\n\n#diigolet-dlg-sticky-close{\n\tfloat: right;\n\theight: 20px;\n\twidth: 20px;\n\tbackground: url("/javascripts/diigolet-v2/images/FN-close.png") 50% 50% no-repeat;\n\tmargin: 5px 4px 0px 0px;\n\tcursor: pointer;\n\tdisplay: none;\n}\n\n#diigolet-dlg-sticky-color{\n\tposition: relative;\n\tfloat: right;\n\tmargin: 7px 4px 0px 0px;\n\tcursor: pointer;\n\tz-index: 2;\n}\n\n#diigolet-dlg-sticky-addTab{\n\theight: 12px;\n\twidth: 21px;\n\tmargin: 9px 7px 0px 0px;\n\tdisplay: none;\n\tfloat: right;\n\tcursor: pointer;\n}\n\n\n#diigolet-dlg-sticky.onlyPrivate #diigolet-dlg-sticky-addTab{\n\tdisplay: block;\n\tbackground: url("/javascripts/diigolet-v2/images/add-tab.png") 0px 0px no-repeat;\n\n\n}\n\n#diigolet-dlg-sticky.onlyGroup #diigolet-dlg-sticky-addTab{\n\tdisplay: block;\n\tbackground: url("/javascripts/diigolet-v2/images/add-tab.png") 0px -12px no-repeat;\n}\n\n#diigolet-dlg-sticky-currentColor{\n\theight: 12px;\n\twidth: 12px;\n\tborder: 1px solid #ffffff;\n\tcursor: pointer;\n\tborder-radius: 1px;\n\t/*box-shadow: 0px 1px 1px rgba(0,0,0,.15);*/\n\n\n}\n\n#diigolet-dlg-sticky-colorPicker{\n\theight: 62px;\n\twidth: 13px;\n\tpadding: 3px 3px 3px 2px;\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\ttop: 122%;\n\tleft: -2px;\n\tdisplay: none;\n\t-webkit-animation: diigo-dropup .15s ease-in 1;\n\tbox-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n\tz-index: 3;\n}\n\n#diigolet-dlg-sticky-colorPicker .dlg-colorItem{\n\theight: 12px;\n\twidth: 12px;\n\tborder-width:  1px;\n\tborder-style: solid;\n\tdisplay: block;\n\tmargin-bottom: 2px;\n}\n\n#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="yellow"]{\n\tborder-color: #e9a110;\n\tbackground-color: #fc6;\n}\n\n#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="blue"]{\n\tborder-color: #33a5c9;\n\tbackground-color: #7ccce5;\n}\n\n#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="green"]{\n\tborder-color: #9ac83b;\n\tbackground-color: #b4db66;\n}\n\n#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="pink"]{\n\tborder-color: #da376c;\n\tbackground-color: #f98baf;\n}\n\n#diigolet-dlg-sticky-colorPicker .dlg-colorItem.colorchecked b{\n\twidth: 4px;\n\theight: 4px;\n\tbackground: #666;\n\tmargin-top: 4px;\n\tmargin-left: 4px;\n\tdisplay: block;\n}\n\n#diigolet-dlg-sticky-colorPicker .dlg-colorItem:hover{\n\tborder-color: #06f !important;\n}\n\n\n.FN-content-wrapper{\n\tdisplay: none;\n\topacity: 0;\n\t-webkit-animation:fadeIn 0.2s ease-out;\n\t/*-webkit-transition: opacity ease-out 0.2s 0.1s;*/\n}\n\n\n\n.FN-content-wrapper.private{\n\tmin-height: 120px;\n}\n\n#diigolet-dlg-sticky-content .FN-content-wrapper.private textarea{\n\tmargin: 6px 6px 0px 6px;\n\tmin-height: 104px;\n\twidth: 282px;\n\tbackground-color: #fcfbf7;\n\tborder: none;\n\toutline: none;\n\toverflow-y:visible;\n\tresize: none !important;\n\tfont-size: 12px;\n\tline-height: 18px;\n\tword-wrap: break-word;\n}\n\n#diigolet-dlg-sticky-content #FN-content-footer{\n\t/*height: 22px;*/\n\ttext-align: right;\n\tmargin-top: -5px;\n}\n\n#diigolet-dlg-sticky-content #FN-content-footer #editing{\n\theight: 30px;\n\tborder-top:1px solid #ECECE7;\n\tdisplay: none;\n}\n\n#diigolet-dlg-sticky-content #FN-content-footer #editing a{\n\tfloat: right;\n}\n\n#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-saveBtn{\n\theight: 20px;\n\twidth: 50px;\n\tborder-radius: 2px;\n\tborder: 1px solid #85a0a6;\n\tcolor: #85a0a6;\n\tfont-size: 12px;\n\ttext-align: center;\n\tline-height: 20px;\n\tmargin: 4px 4px 4px 10px;\n\t/*background-image: -webkit-linear-gradient(top,#fff,#f5f5f5);*/\n}\n\n#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-saveBtn:active{\n\tbackground: #85a0a6;\n\tcolor: #ffffff;\n}\n\n\n#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-cancelBtn{\n\ttext-decoration: none;\n\tcolor: #A3A39E;\n\tfont-size: 12px;\n\tline-height: 30px;\n}\n\n#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-cancelBtn:hover{\n\ttext-decoration: underline;\n}\n\n#diigolet-dlg-sticky-content #FN-content-footer #editDone{\n\theight: 22px;\n}\n\n#FN-private-saveBtn.notify{\n\t-webkit-animation: borderNotice 600ms ease both;\n\t-webkit-animation-iteration-count:2;\n}\n\n#FN-content-footer #FN-private-datetime{\n\tfont-family: Arial,Helvetica;\n\tfont-size: 12px;\n\tcolor: #999;\n\tline-height: 22px;\n\tmargin-right: 10px;\n\tfloat: right;\n}\n\n#FN-content-footer #FN-private-delete{\n\tdisplay: none;\n\tfloat: left;\n\tvertical-align: middle;\n\tline-height: 22px;\n\tmargin-left: 8px;\n\tcolor: #999;\n\tcursor: pointer;\n\t-webkit-transition:color 200ms ease;\n}\n\n#FN-content-footer #FN-private-delete b{\n\tdisplay: block;\n\tfloat: left;\n\theight: 12px;\n\twidth: 11px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/private-del.png");\n\tbackground-repeat: no-repeat;\n\tmargin: 5px 3px 0px 0px;\n\tcursor: pointer;\n\n}\n\n#FN-content-footer #FN-private-delete:hover{\n\tcolor: red;\n}\n\n#FN-content-footer #FN-private-delete:hover b{\n\tbackground-position: 0 -12px;\n}\n\n.FN-content-wrapper.group{\n\tmin-height: 50px;\n}\n\n.FN-radio{\n\tdisplay: none;\n}\n\n#diigolet-dlg-sticky-switcher{\n\tposition: absolute;\n\tleft: 82px;\n\ttop: -25px;\n\tz-index: 2;\n}\n\n#diigolet-dlg-sticky-switcher.onlyOneTab span{\n\tmargin-left: 28px;\n}\n\n#diigolet-dlg-sticky-switcher .FN-switcher{\n\tfloat: left;\n\t/*width: 35px;*/\n\theight: 14px;\n\ttext-align: center;\n\tfont-size: 12px;\n\tcursor: pointer;\n\tpadding: 3px 8px;\n\tcolor: #ffffff;\n\tline-height: 14px;\n\t-webkit-transition:background-color 200ms ease;\n\tborder-radius: 2px;\n\n}\n\n#diigolet-dlg-sticky-switcher .FN-switcher b{\n\theight: 12px;\n\twidth: 13px;\n\tfloat: left;\n\tbackground-image: url("/javascripts/diigolet-v2/images/tab-logo.png");\n\tbackground-repeat: no-repeat;\n\tmargin: 1px 1px 0px 0px;\n\tcursor: pointer;\n}\n\n\n#diigolet-dlg-sticky-content.private #FN-switcher-private{\n\tbackground-color: rgba(0,0,0,.12);\n}\n\n#diigolet-dlg-sticky-content #FN-switcher-private b{\n\tbackground-position: 0px 0px;\n}\n\n#diigolet-dlg-sticky-content  #FN-switcher-group b{\n\tbackground-position: 0px -12px;\n}\n#diigolet-dlg-sticky-content.group #FN-switcher-group{\n\tbackground-color: rgba(0,0,0,.12);\n}\n\n#diigolet-dlg-sticky.onlyPrivate #FN-switcher-group{\n\tdisplay: none;\n}\n#diigolet-dlg-sticky.onlyGroup #FN-switcher-private{\n\tdisplay: none;\n}\n\n#diigolet-dlg-sticky-content.private .FN-content-wrapper.private{\n\topacity: 1;\n\tdisplay: block;\n}\n\n#diigolet-dlg-sticky-content.group .FN-content-wrapper.group{\n\topacity: 1;\n\t-webkit-transition: opacity ease-out 0.2s 0.1s;\n\tdisplay: block;\n}\n\n#FN-post-form{\n\tpadding: 10px;\n\tdisplay: none;\n}\n\n#FN-post-form>div:last-child{\n\tmargin-top: 6px;\n}\n\n#FN-post-form textarea{\n\twidth: 272px;\n\tmax-width: 272px;\n\theight: 54px;\n\toutline: none;\n\tline-height: 18px;\n\tborder: 1px solid #ddd;\n}\n\n#FN-post-form textarea.notify,#FN-post-form select.notify{\n\t-webkit-animation: borderNotice 600ms ease both;\n\t-webkit-animation-iteration-count:2;\n}\n\n\n#FN-post-form button{\n\tfloat: right;\n\tmargin: 0px;\n\theight: 24px;\n\twidth: 50px;\n\ttext-align: center;\n\tbackground-image: -webkit-linear-gradient(top,#fff,#f5f5f5);\n\tborder: 1px solid #ccc;\n\tfont-size: 14px;\n\tborder-radius: 2px;\n\tcursor: pointer;\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all,10ms ease background-color;\n\toverflow: hidden;\n\tposition: relative;\n}\n\n#FN-post-form .button-label{\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;\n\tposition: relative;\n\tcursor: pointer;\n\tz-index: 3;\n}\n\n#FN-post-form .button-spinner{\n\tposition: absolute;\n\tz-index: 2;\n\tdisplay: inline-block;\n\twidth: 18px;\n\theight: 18px;\n\topacity: 0;\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;\n\tleft: 31px;\n\tmargin-left: -16px;\n\tmargin-top: -10px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/uploading.gif");\n}\n\n#FN-post-form textarea:disabled{\n\tcolor: #999;\n\tbackground-color: #eee;\n}\n\n#FN-post-form button:disabled{\n\tbackground-color: #dddddd;\n\tbackground-image: none;\n\tcursor: default;\n}\n\n\n#FN-post-form button:disabled .button-label{\n\topacity: 0;\n\ttop:16px\n}\n\n#FN-post-form button:disabled .button-spinner{\n\topacity: 1;\n\ttop:12px;\n}\n\n#FN-post-form a{\n\tfloat: right;\n\tfont-size: 12px;\n\ttext-decoration: none;\n\tcolor: #aaaaaa;\n\tmargin: 5px 12px 5px 5px;\n}\n\n#FN-post-form a:hover{\n\ttext-decoration: underline;\n}\n\n\n\n#FN-post-form.notEdit #FN-group-share{\n\tmargin-left: 67px;\n}\n\n#FN-post-form.notEdit div:first-child{\n\tdisplay: none;\n}\n\n#FN-post-form.notEdit button,#FN-post-form.notEdit a{\n\tdisplay: none;\n}\n\n\n\n/************ $group commmet item ****************/\n#FN-group-content-nav{\n\twidth: 100%;\n\theight: 25px;\n\tborder-bottom: 1px solid #eee;\n\tcolor: #333;\n\tfont-size: 12px;\n\ttext-align: center;\n\tposition: relative;\n\tz-index: 1;\n}\n\n#FN-current-group{\n\tline-height: 25px;\n\tpadding: 2px 10px;\n\tcursor: pointer;\n}\n\n#FN-current-group b{\n\theight: 0px;\n\twidth: 0px;\n\tborder-width: 5px;\n\tborder-style: solid;\n\tborder-bottom-color: transparent;\n\tborder-left-color: transparent;\n\tborder-right-color: transparent;\n\tborder-top-color: #666;\n\tdisplay: inline-block;\n\tmargin: 2px 2px 0px 6px;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n\n#FN-current-group span{\n\tcursor: pointer;\n}\n\n#FN-group-menu{\n\tmargin: 0px;\n\tposition: absolute;\n\twidth: 196px;\n\ttop: 90%;\n\tleft: 50px;\n\tbackground-color: #ffffff;\n\tborder: 1px solid rgba(0,0,0,.12);\n\ttext-align: left;\n\tbox-shadow: 0px 1px 2px rgba(0,0,0,.1);\n\t-webkit-animation: diigo-dropup .15s ease-in 1;\n\tpadding: 2px;\n\tdisplay: none;\n}\n\n#FN-group-content-nav li{\n\tlist-style: none;\n\theight: 20px;\n\twidth: 100%;\n\tline-height: 20px;\n\tfont-size: 12px;\n\tcolor: #333;\n\tcursor: pointer;\n\ttext-indent: 9px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space:nowrap;\n}\n\n#FN-group-share-new-ul{\n\tmargin-top: 2px;\n\tpadding-top: 2px;\n\tborder-top: 1px solid #cccccc;\n}\n\n#FN-group-share-new {\n\n}\n\n#FN-group-content-nav li:hover{\n\tbackground-color: #aaa;\n\tcolor: #ffffff;\n}\n\n#FN-group-content-container{\n\tmin-height: 80px;\n\tmax-height: 200px;\n\toverflow-y: auto;\n\tpadding: 0px 10px 10px 10px;\n\tmargin-top: -1px;\n}\n\n#FN-group-content-container .FN-group-comment-item{\n\tborder-top: 1px solid #eee;\n\tpadding: 5px 0px;\n\tposition: relative;\n}\n\n#FN-group-content-container .FN-group-comment-item-tbar{\n\tposition: relative;\n\tfont-size: 12px;\n}\n\n\n\n\n#FN-group-content-container .FN-group-comment-item-content{\n\tfont-size: 12px;\n\tline-height: 18px;\n}\n#FN-group-content-container .FN-group-comment-item-tbar .FN-group-comment-name{\n\ttext-decoration: none;\n\tmargin-right: 3px;\n\tcolor: #0072d6;\n\tfloat: left;\n}\n#FN-group-content-container .FN-group-comment-item-time{\n\tfont-size: 12px;\n\tcolor: #777;\n}\n\n#FN-group-content-postform{\n\tpadding: 10px;\n\tposition: relative;\n}\n\n#FN-group-content-postform textarea{\n\theight: 18px;\n\twidth: 204px;\n\tmax-width: 208px;\n\tborder: 1px solid rgb(215, 215, 215);\n\toutline: none;\n\tline-height: 18px;\n\tvertical-align: bottom;\n\t-webkit-transition: background-color .1s ease-in-out;\n}\n\n#FN-group-content-postform.active textarea{\n\theight: 36px;\n\tborder-color: #aaa;\n}\n\n#FN-group-content-postform textarea.notify{\n\t-webkit-animation: borderNotice 600ms ease both;\n\t-webkit-animation-iteration-count:2;\n}\n\n#FN-group-content-postform textarea:disabled{\n\tcolor: #999;\n\tbackground-color: #eee;\n}\n\n#FN-group-content-postform .post-action{\n\tvertical-align: bottom;\n\tdisplay: inline-block;\n\twidth: 50px;\n\tpadding: 0px 0px 0px 14px;\n}\n\n#FN-group-content-postform .post-action a{\n\tposition: relative;\n\tleft: 4px;\n\ttop: 2px;\n\tcolor: #aaa;\n\tdisplay: none;\n}\n\n#FN-group-content-postform.active .post-action a{\n\tdisplay: block;\n}\n\n#FN-group-content-postform .post-action a:hover{\n\ttext-decoration: underline;\n}\n\n#FN-group-content-postform button{\n\tmargin: 0px;\n\theight: 24px;\n\twidth: 50px;\n\ttext-align: center;\n\tbackground-image: -webkit-linear-gradient(top,#fff,#f5f5f5);\n\tborder: 1px solid #ccc;\n\tfont-size: 14px;\n\tcursor: pointer;\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all,10ms ease background-color;\n\toverflow: hidden;\n\tposition: relative;\n}\n\n\n#FN-group-content-postform .button-label{\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;\n\tposition: relative;\n\tcursor: pointer;\n\tz-index: 3;\n}\n\n#FN-group-content-postform .button-spinner{\n\tposition: absolute;\n\tz-index: 2;\n\tdisplay: inline-block;\n\twidth: 18px;\n\theight: 18px;\n\topacity: 0;\n\t-webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;\n\tleft: 31px;\n\tmargin-left: -16px;\n\tmargin-top: -10px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/uploading.gif");\n}\n\n\n#FN-group-content-postform button:disabled{\n\tbackground-color: #dddddd;\n\tbackground-image: none;\n\tcursor: default;\n}\n\n\n#FN-group-content-postform button:disabled .button-label{\n\topacity: 0;\n\ttop:16px\n}\n\n#FN-group-content-postform button:disabled .button-spinner{\n\topacity: 1;\n\ttop:12px;\n}\n\n\n#FN-group-content-container .FN-group-comment-item-delete{\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tcolor: #999;\n\tcursor: pointer;\n\tvisibility: hidden;\n\tfloat: right;\n}\n\n#FN-group-content-container .FN-group-comment-item:hover .FN-group-comment-item-delete{\n\tvisibility:visible;\n}\n\n#FN-group-content-container .FN-group-comment-item-delete:hover{\n\tcolor: red;\n}\n\n\n/************ $scroll bar ****************/\n#diigolet-dlg-sticky-content ::-webkit-scrollbar{\n\twidth:8px;\n}\n\n#diigolet-dlg-sticky-content ::-webkit-scrollbar-track-piece {\n\tbackground-color: transparent;\n}\n\n#diigolet-dlg-sticky-content ::-webkit-scrollbar-thumb:vertical\n{\n\theight: 20px;\n\tbackground-color: #CCCCCC;\n}\n\n#diigolet-dlg-sticky-content ::-webkit-scrollbar-thumb:hover{\n\tbackground-color: #aaaaaa;\n}\n\n\n/************ $select ****************/\n#diigolet-dlg-sticky-content select{\n\t-webkit-appearance: none;\n\twidth: 150px;\n\theight: 24px;\n\tborder: 1px solid #ccc;\n\tbackground-position: right;\n\tbackground-repeat: no-repeat;\n\tbackground-image: url("/javascripts/diigolet-v2/images/FN-select-arrow.png"), -webkit-linear-gradient(top,#fff,#fafafa);\n\toutline: none;\n\tcursor: pointer;\n\tfont-size: 12px;\n\tborder-radius: 2px;\n\tpadding-right: 14px;\n\n}\n\n.diigolet.diigoletFN a:link,.diigolet.diigoletFN a:visited{\n\tcolor:#06c;\n}\n.diigolet.diigoletFN a:hover,.diigolet.diigoletFN a:active{\n\tcolor:#333;\n\ttext-decoration:none;\n}\n\n.diigolet .diigoletFNL{\n\twidth:23px;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_l.png) no-repeat left top;\n}\n.diigolet .diigoletFNT{\n\theight:32px;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_t.png) no-repeat right top;\n\tcursor:move !important;\n}\n.diigolet .diigoletFNR{\n\twidth:16px;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_r.png) no-repeat left bottom;\n\toverflow:hidden;\n\tvertical-align:bottom;\n}\n.diigolet .diigoletFNB{\n\theight:34px;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_b.png) no-repeat left bottom;\n}\n/*\n.diigolet .diigoletFNR div{\n\twidth:11px;\n\theight:12px;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_h_rb.gif) no-repeat left top;\n\tposition:relative;\n\tbottom:7px;\n\tleft:-6px;\n\toverflow:hidden;\n\tcursor:se-resize !important;\n}\n*/\n.diigolet .diigoletFNTH{\n\tvertical-align:top;\n\twidth:12px;\n}\n.diigolet .diigoletFNTH div{\n\twidth:12px;\n\theight:12px;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_h_rt.gif) no-repeat right top;\n\tposition:relative;\n\ttop:5px;\n\tleft:-22px;\n\toverflow:hidden;\n\tcursor:ne-resize !important;\n}\n.diigolet .diigoletFNB{\n\tvertical-align:top;\n\toverflow:hidden;\n}\n\n/*\n.diigolet .diigoletFNB div{\n\twidth:12px;\n\theight:12px;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_h_lb.gif) no-repeat left bottom;\n\tposition:relative;\n\tbottom:0px;\n\tleft:6px;\n\toverflow:hidden;\n\tcursor:sw-resize !important;\n}*/\n\n/*Float Note on the position of right*/\n.diigolet .diigoletFNPosN .diigoletFNXjjR,.diigolet .diigoletFNPosN .diigoletFNXjjT,\n.diigolet .diigoletFNPosN .diigoletFNXjjB,.diigolet .diigoletFNPosN .diigoletFNTH div,\n.diigolet .diigoletFNPosN .diigoletFNB div{\n\tdisplay:none\n}\n\n/*Powered by*/\n/*.diigolet .diigoletFNB span{\n\tfloat:right;\n\tfont-family:Arial, Helvetica, sans-serif;\n\tfont-size:9px;\n\tcolor:#999;\n\tmargin-right:12px;\n\tline-height:9px;\n}*/\n\n/*Text Style*/\n.diigolet .diigoletFNT h1{\n\tfont:12px/19px Arial, Helvetica, sans-serif;\n\tfont-weight:bold;\n\tcolor:#666;\n\tmargin:4px 0 0 5px;\n\tpadding:0;\n}\n\n/*Action menu*/\n.diigolet .diigoletFNT div.menu{\n\tmargin:3px 21px 10px 0;\n\tbackground-color:#fff9a4;\n\tborder-right:1px solid #f2e984;\n\tborder-left:1px solid #c9b822;\n}\n\n.diigolet .diigoletFNT div.menu a{\n\tdisplay:block;\n\tline-height:19px;\n\tfloat:left;\n\tcolor:#666;\n\tpadding:0 5px;\n\tborder-right:1px solid #c9b822;\n\ttext-decoration:none;\n}\n\n.diigolet .diigoletFNT div.menu a:hover,.diigolet .diigoletFNT div.menu a:active{\n\tbackground-color:#fff587;\n\tcolor:#333;\n}\n\n.diigolet .diigoletFNT div.menu a.diigoletFNOpt{\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_updot.gif) no-repeat right top;\n\tpadding-right:14px;\n}\n\n.diigolet .diigoletFNT{\n\tfont:12px/32px Arial, Helvetica, sans-serif;\n}\n\n.diigolet .diigoletFNContent,.diigolet .diigoletFNComment{\n\tbackground-color:#fff89f;\n\tcolor:#666;\n\tfont-family:Arial, Helvetica, sans-serif;\n\tfont-size:11px;\n\toverflow:auto;\n\twidth:355px;\n\tzoom:1;\n\tborder-bottom:1px solid #E0DB9D;\n}\n\n/*.diigolet .diigoletFNContent::-webkit-scrollbar {\n    width: 9px;\n}*/\n\n/*.diigolet .diigoletFNContent::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n}\n\n.diigolet .diigoletFNContent::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n    background: rgba(255, 0, 0, 0.5); \n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n}\n\n.diigolet .diigoletFNContent::-webkit-scrollbar-thumb:window-inactive {\n\tbackground: rgba(255,0,0,0.4); \n}*/\n\n\n\n.diigolet .diigoletFNContent .diigoletFNAuthorP{\n\tfont-size:10px;\n\tfont-weight:normal;\n\tcolor:#666;\n\tmargin:0 11px 5px 0;\n\tpadding:2px 5px;\n\tline-height:100%;\n}\n.diigolet .diigoletFNContent .diigoletFNAuthorP .diigoletFNAuthor{\n\tborder-bottom:1px dotted #ccc;\n\tcolor:#06c;\n}\n.diigolet .diigoletFNContent .diigoletFNAuthorP .diigoletFNAuthor:hover,.diigoletFNContent .diigoletFNAuthorP .diigoletFNAuthor:active{\n\tborder-bottom:1px solid #ccc;\n\tcolor:#333;\n}\n.diigolet .diigoletFNContent .diigoletFNAuthorP a{\n\tcolor:#999;\n}\n.diigolet .diigoletFNContent .diigoletFNAuthorP a:hover,.diigoletFNContent .diigoletFNAuthorP a:active{\n\tcolor:#666;\n}\n.diigolet.diigoletFN blockquote{\n\t/*color:#333;\n\tfont-size:12px;\n\tpadding: 0 5px;*/\n\tdisplay: inline-block;\n}\n\n.diigolet .diigoletFNComment select,.diigolet .diigoletFNComment input,.diigolet .diigoletFNComment textarea{\n\tfont:11px/15px Verdana, Arial, Helvetica, sans-serif;\n\tmax-width: 345px;\n}\n.diigolet .diigoletFNComment p{\n\tmargin:5px 0;\n}\n\n\n.diigolet .diigoletFNTDiv{\n\theight:32px;\n\toverflow:hidden;\n}\n\n.diigolet.diigoletFN .menu {\n\tfloat:right;\n\theight:19px;\n\toverflow:hidden;\n}\n\n.diigolet .labelList{\n\t/*clear:left;*/\n\n}\n.diigolet .labelList label{\n\t/*border:1px solid #C3D9FF;\n    -moz-border-radius:2px;*/\n\tmargin-right:2px;\n\tbackground-color:#eee;\n\tcolor:#666;\n\twhite-space:nowrap;\n\tfont-weight:normal;\n\tfont-size:9px;\n}\n.diigolet .labelList span{\n\tpadding:0 2px;\n}\n.diigolet .labelList a{\n\tpadding:0 2px;\n\tbackground-color:#ffe76a;\n}\n.diigolet .labelList a:hover{\n\tcolor:#fef5c7;\n\ttext-decoration:none;\n}\n.diigolet .labelList a.del{\n\tborder:none;\n\tpadding-right:2px;\n\tfont-weight:normal;\n}\n\n.diigolet a.del{\n\tcursor:pointer;\n\tbackground: url("/javascripts/diigolet-v2/images/diigoletIconv3.gif") no-repeat left -343px;\n}\n.diigolet a.del:hover{\n\tfilter:alpha(opacity=100);\n\t-moz-opacity:1;\n\tbackground-position: 1px -342px;\n\ttext-decoration:none;\n}\n/*============Action dropup menu==============*/\n.diigolet ul.diigoletFNDropup {\n\tposition:absolute;\n\tdisplay:none;\n\tleft:10px;\n\tbackground-color:#fff89f;\n\tborder:1px solid #c9b822;\n\tz-index:2147483647; /*for safari*/\n}\n.diigolet ul.diigoletFNDropup li {\n\tpadding-left:25px;\n}\n\n\n.diigolet ul.diigoletFNDropup a:link, .diigolet ul.diigoletFNDropup a:visited {\n\tcolor:#666666;\n\tdisplay:block;\n\twidth:85px;\n\tfont:11px Arial, Helvetica, sans-serif;\n}\n\n.diigolet ul.diigoletFNDropup a:hover,.diigolet ul.diigoletFNDropup a:active{\n\tbackground-color:#fff567;\n\tcolor:#333;\n}\n\n/*Patch for IE*/\n.diigolet.diigoletFNIEPatch .diigoletFNL{\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_l.gif) no-repeat left top;\n}\n.diigolet.diigoletFNIEPatch .diigoletFNT{\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_t.gif) no-repeat right top;\n}\n.diigolet.diigoletFNIEPatch .diigoletFNR{\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_r.gif) no-repeat left bottom;\n}\n\n.diigolet.diigoletFNIEPatch .diigoletFNB{\n\tbackground:transparent url(/javascripts/diigolet-v2/images/float_note_b.gif) no-repeat left bottom;\n}\n\n.diigolet.diigoletFNIEPatch .diigoletFNT{\n\theight:23px;\n}\n.diigolet.diigoletFNIEPatch .diigoletFNTDiv{\n\theight:23px;\n}\n\n/*==edit mode==*/\n\n.diigoletFN.editing .diigoletFNComment{\n\tdisplay: block;\n}\n\n\n/*=====inline comment foot======*/\n\n.diigoFootDiv\n{\n}\n\n.personalText{\n\tcolor:#555555 !important;\n\tfont-size:10px !important;\n\tdisplay:inline-block;\n\toverflow: hidden !important;\n\ttext-overflow: ellipsis !important;\n\twhite-space: nowrap !important;\n\twidth: 343px !important;\n\tmargin-top:4px !important;\n}\n\n.footer{\n\n}\n\n.IconFeild{\n\tfloat:left !important;\n\tmargin-left:8px !important;\n\tmargin-top:5px !important;\n}\n\n.IconFeild:hover .editIcon{\n\tbackground-position:right !important;\n}\n\n/*.editIcon{\n\tcursor:pointer !important;\n\twidth: 24px !important;\n\theight: 19px !important;\n\tbackground-image: url(\'/javascripts/diigolet-v2/images/edit-highlight-2.png\') !important;\n\tbackground-attachment: no-repeat !important;\n\tbackground-color: transparent !important;\n\tbackground-position: left;\n}*/\n\n.multipalCol{\n\tpadding-top: 0px !important;\n}\n\n.singleCol{\n\tpadding-top:7px !important;\n}\n\n.myCommentSpan{\n\tmargin-left:35px !important;\n}\n\n.notMyCommentSpan{\n\tmargin-left:15px !important;\n}\n\n.footText{\n\tline-height:1.5;\n\twidth:343px !important;\n}\n\n\n/* ===============Float note icon================== */\ndiv.floatNote {\n\tposition:absolute !important;\n\twidth:34px;\n\theight:34px;\n\ttext-align:center;\n\tbackground-image:url(\'/javascripts/diigolet-v2/images/float_icon.png\') !important;\n\tbackground-repeat: no-repeat;\n\tz-index:2147483643;\n}\n\ndiv.floatNote.private.yellow{\n\tbackground-position: 0px 0px;\n}\n\ndiv.floatNote.private.blue{\n\tbackground-position: 0px -68px;\n}\ndiv.floatNote.private.green{\n\tbackground-position: 0px -136px;\n}\ndiv.floatNote.private.pink{\n\tbackground-position: 0px -204px;\n}\n\ndiv.floatNote.group.yellow{\n\tbackground-position: 0px -34px;\n}\n\ndiv.floatNote.group.blue{\n\tbackground-position: 0px -102px;\n}\ndiv.floatNote.group.green{\n\tbackground-position: 0px -170px;\n}\ndiv.floatNote.group.pink{\n\tbackground-position: 0px -238px;\n}\n\n\n\ndiv.floatNote.diigoshow{\n\t-webkit-animation: bounceIn 400ms ease both;\n\t-webkit-animation-play-state: running;\n}\n\ndiv.floatNote.diigoadd{\n\t-webkit-animation: flipInY 600ms ease both;\n\t-webkit-animation-play-state: running;\n}\n\n\ndiv.floatNote span {\n\tposition: absolute;\n\tleft: -4px;\n\ttop: -3px;\n\tdisplay: block;\n\tborder-radius: 15px;\n\tbackground-color: #666;\n\tpadding: 2px 3px;\n\tborder: 1px solid #fff;\n\theight: 8px;\n\tfont-size: 11px;\n\tcolor: #fff;\n\tline-height: 8px;\n\n}\n\nhtml div.floatNote{\n\tfilter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale, src="/javascripts/diigolet-v2/images/float_icon.png");\n\toverflow:hidden;\n\tbackground:none;\n\toverflow: visible;\n}\n\n/*==========highlight===========*/\n/*\nspan.diigolet-highlight-public {\n\tcursor: pointer; background-color: #95EB40;\n}\nspan.diigolet-highlight-private {\n\tcursor: pointer; background-color: #FDFC14;\n}\nspan.diigolet-highlight-public-withSticky {\n\tcursor: pointer; background-color: #95EB40;\n}\nspan.diigolet-highlight-private-withSticky {\n\tcursor: pointer; background-color: #8CBDEF;\t\n}\n*/\n\nem.diigoHighlight {\n\ttext-align:inherit;\n\ttext-decoration: inherit;\n\tline-height:inherit;\n\tfont:inherit;\n\tcolor:inherit;\n\tdisplay:inline;\n\tposition:relative;\n\tzoom:1;\n\tmargin: 0px;\n\tpadding: 0px;\n\ttransition: all 200ms ease;\n}\n\nem.diigoHighlight.hover {\n\tcursor: move;\n}\n\nem.diigoHighlight.hover.yellow {\n\tbackground-color: #F5F548;\n}\n\nem.diigoHighlight.hover.blue {\n\tbackground-color: #84B9EF;\n}\n\nem.diigoHighlight.hover.green {\n\tbackground-color: #A0DE60;\n}\n\nem.diigoHighlight.hover.pink {\n\tbackground-color: #F9B0B0;\n}\nem.diigoHighlight.diigoHighlightcommented {\n\t/*padding-right:25px;*/\n\tmargin-right: 25px;\n}\n\nem.diigoHighlight.mouseOvered {\n\tbackground-color: #ffc62a !important;\n}\n\nem.diigoHighlight.yellow {\n\tbackground-color: #FF9;\n}\n\nimg.diigoHighlight.yellow {/*image highlight*/\n\tcursor: pointer;\n\toutline:2px solid #FF9 !important;\n}\n\nem.diigoHighlight.blue {\n\tbackground-color: #ABD5FF;\n}\n\nimg.diigoHighlight.blue {/*image highlight*/\n\tcursor: pointer;\n\toutline:2px solid #ABD5FF !important;\n}\n\nem.diigoHighlight.green {\n\tbackground-color: #B2E57E;\n}\n\nimg.diigoHighlight.green {/*image highlight*/\n\tcursor: pointer;\n\toutline:2px solid #B2E57E !important;\n}\n\nem.diigoHighlight.pink {\n\tbackground-color: #ffcccc;\n}\n\nimg.diigoHighlight.pink {/*image highlight*/\n\tcursor: pointer;\n\toutline:2px solid #ffcccc !important;\n}\n\nimg.diigoHighlight.mouseOvered {\n\tcursor: pointer;\n\toutline:2px solid #ffc62a !important;\n}\n\n\n/*============The close button for notification message box, help box and comment box==============*/\n.diigolet .diigolet-closeBtn {\n\tposition:absolute;\n\tbackground:transparent url(/javascripts/diigolet-v2/images/close1.gif);\n\twidth:14px;\n\theight:14px;\n\ttop:2px;\n\tright:2px;\n\tcursor:pointer !important;\n}\n\n\n\n/*=========== autocomplete ============*/\n.ac_input {\n}\n.ac_results {\n\tborder:1px solid #dddddd;\n\tbackground:#ffffff none repeat scroll 0%;\n\tcursor:pointer !important;\n\tfont-size:11px !important;\n\tleft:0pt;\n\tposition:absolute;\n\twidth:392px;\n\tz-index:2147483647;\n\tborder-radius: 1px;\n}\n.ac_results ul {\n\tmargin:0;\n\tpadding:0;\n}\n.ac_results li {\n\tlist-style-image:none;\n\tlist-style-position:outside;\n\tlist-style-type:none;\n\tpadding:2px 5px;\n\tborder-radius: 1px;\n}\n.ac_results a {\n\twidth:100%;\n}\n.ac_results li.over {\n\tcolor:white;\n\tbackground:#09f  none repeat scroll 0%;\n}\n\n/*=====================Highlight pen=======================*/\n\n/*=======================gtooltip==========================*/\n#gtooltip{\n\tbackground-color: #2a2a2a;\n\tborder: 1px solid #fff;\n\tcolor: #fff;\n\tdisplay: block;\n\tfont-size: 12px !important;\n\tfont-weight:bold !important;\n\topacity: 0;\n\tpadding: 4px 6px !important;\n\tpointer-events: none;\n\tposition: absolute !important;\n\t-webkit-transition: visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;\n\t-moz-transition:visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;\n\t-o-transition: visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;\n\ttransition: visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;\n\tvisibility:hidden;\n\tfont-family: arial, sans-serif !important;\n\tz-index: 2147483647;\n\ttop:-100px;\n\tleft: -100px;\n\tline-height: 15px !important;\n\n}\n\n#gtooltip.show{\n\tvisibility: visible;\n\topacity: 1;\n\t-webkit-transition:visibility 0,opacity .13s ease-in;\n}\n#gtooltip #gtooltip-arrow{\n\tposition:absolute !important;\n\tborder:5px solid !important;\n\tborder-top-color: transparent !important;\n\tborder-right-color: transparent !important;\n\tborder-bottom-color: rgb(42, 42, 42) !important;\n\tborder-left-color: transparent !important;\n\t/*top:-10px;*/\n\theight:0 !important;\n\twidth:0 !important;\n\tline-height:0px !important;\n\n}\n#gtooltip #gtooltip-content{\n\twhite-space:nowrap !important;\n}\n\n/*=======================scrollbar marker==================*/\n.diigo-scrollmarker {\n\theight: 8px;\n\twidth: 8px;\n\tcursor: pointer;\n\toverflow: hidden;\n\tfont-size: 12px;\n\tz-index: 1000000;\n\tborder-radius: 20px;\n}\n\n/*=======================highlight share window==================*/\n#diigolet-highlight-share{\n\tbackground-color: #fcfbf7;\n\twidth: 402px;\n\tfont-family: Arial,Helvetica,sans-serif;\n\t-webkit-border-radius: 0;\n\tcursor: default;\n\tposition: absolute;\n\tz-index: 2147483646;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,.08);\n\tbackground-clip: content-box;\n\tvisibility: hidden;\n\t/*-webkit-transition: all .3s;*/\n\topacity: 0;\n\tborder-radius: 2px;\n\t/*-webkit-animation: fadeinScale 200ms ease;*/\n}\n\n#diigolet-highlight-share.show{\n\topacity: 1;\n\tvisibility: visible;\n}\n\n#diigolet-highlight-share-top{\n\theight: 30px;\n\tvertical-align: middle;\n\tbackground-color: #39baf6;\n\tline-height: 30px;\n\tpadding:0px 10px;\n\tfont-size: 14px;\n\tcolor: white;\n\ttext-align: left;\n\tborder-radius: 2px 2px 0px 0px;\n}\n\n.diigolet-question-mark {\n\theight: 12px;\n\twidth: 12px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/q-mark.png");\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: inline-block;\n\tmargin: 9px 7px 0px 6px;\n}\n\n.diigolet-question-mark-tip{\n\tpadding: 5px;\n\tposition: absolute;\n\tbottom: 139%;\n\tleft: -82px;\n\tdisplay: none;\n\twidth: 180px;\n\tcolor: #7f8d99;\n\tborder-radius: 2px;\n\tbox-shadow: 0 0 0 2px rgba(0,0,0,.2);\n\tbackground: #fff;\n\tfont: normal 12px/14px Arial, helvetica, sans-serif;\n}\n\n#diigolet-highlight-share-close{\n\tfloat: right;\n\theight: 16px;\n\twidth: 16px;\n\tbackground: url("/javascripts/diigolet-v2/images/win-close.png") 50% 50% no-repeat;\n\tmargin-top: 7px;\n\topacity: 0.5;\n\tcursor: pointer;\n\n}\n\n#diigolet-highlight-share-close:hover{\n\topacity: 1;\n}\n\n#diigolet-highlight-container{\n\tborder-radius: 0 0 2px 2px;\n\tborder-width: 0 1px 1px 1px;\n\tborder-color: rgba(0,0,0,.08);\n\tborder-style: solid;\n}\n\n#diigolet-highlight-main{\n\tpadding: 10px 10px;\n}\n\n#diigolet-highlight-share-textarea{\n\tborder: 1px solid #d7d7d7;\n\toutline: none;\n\twidth: 372px;\n\theight: 42px;\n\tmax-width: 374px;\n\tline-height: 18px;\n\t-webkit-transition: border-color 200ms ease;\n\tfont: 12px/14px Arial;\n\tmin-height: 42px;\n\tpadding: 3px 3px;\n\tresize: vertical;\n\tbox-sizing: content-box;\n}\n\n#diigolet-highlight-share-textarea:disabled{\n\tbackground-color: #eee;\n}\n\n#diigolet-highlight-share-textarea:focus{\n\tborder: 1px solid #AAAAAA;\n}\n\n.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}\n.clearfloat{zoom:1}\n\n#diigolet-highlight-footer{\n\tpadding: 0px 10px 10px 10px;\n\tposition: relative;\n}\n\n#diigolet-highlight-footer a{\n\tfloat: right;\n}\n#diigolet-highlight-share-copybtn{\n\theight: 24px;\n\twidth: 60px;\n\tline-height: 24px;\n\tcursor: pointer;\n\ttext-align: center;\n\tcolor: white;\n\tborder-radius: 2px;\n\tborder: 1px solid #066ec1;\n\tfont-size: 12px;\n\ttext-decoration: none;\n\tborder-radius: 2px;\n\tborder: 1px solid #85a0a6;\n\tcolor: #85a0a6;\n\tfont-size: 12px;\n\ttext-align: center;\n}\n\n#diigolet-highlight-share-copybtn:hover{\n\n}\n\n#diigolet-highlight-share-copybtn:active{\n\tbackground: #85a0a6;\n\tcolor: #fff;\n}\n\n#diigolet-highlight-share-cancelbtn{\n\tcolor: #999999;\n\theight: 12px;\n\tfont-size: 12px;\n\tmargin: 6px 14px 0px 0px;\n\ttext-decoration: none;\n\tborder: none !important;\n}\n\n#diigolet-highlight-share-cancelbtn:hover{\n\ttext-decoration: underline;\n}\n\n#diigolet-highlight-footer .diigolet-highlight-social-btn{\n\tfloat: left !important;\n\theight:  26px;\n\twidth: 26px;\n\tmargin-right: 12px;\n}\n\n#diigolet-highlight-share-twitter {\n\tbackground-image: url("/javascripts/diigolet-v2/images/highlight-share.png");\n}\n\n#diigolet-highlight-share-facebook {\n\tbackground-image: url("/javascripts/diigolet-v2/images/highlight-share.png");\n\tbackground-position: -26px 0px;\n}\n\n#diigolet-highlight-share-copySuccess{\n\tposition: absolute;\n\ttop:0px;\n\tright: 85px;\n\tpadding: 5px 10px;\n\tbackground: #FFF1A8;\n\tcolor: black;\n\tborder-radius: 3px;\n\tline-height: 18px;\n\tfont-size: 12px;\n\t-webkit-transition: all 0.3s;\n\topacity: 0;\n\t-webkit-transform-style: preserve-3d;\n\t-webkit-transform: rotateY(-70deg);\n\n}\n\n#diigolet-highlight-share-copySuccess.show{\n\t-webkit-transform: rotateY(0deg);\n\topacity: 1;\n}\n\n/************ orphan highlight ****************/\n#diigo-annotationList{\n\tbackground-color: #ffffff;\n\twidth: 423px;\n\tfont-family: Arial,Helvetica,sans-serif;\n\t-webkit-border-radius: 0;\n\tcursor: default;\n\tz-index: 2147483646;\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n\tbackground-clip: content-box;\n\tborder-radius: 2px;\n\tposition: fixed;\n\ttop: 52px;\n\tleft: 0px;\n\t-webkit-animation: slideInRight 200ms ease;\n\n}\n\n#diigo-annotationList-btn{\n\theight: 20px;\n\twidth: 20px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/warning-orphanHighlight.png");\n\tposition: fixed;\n\tright: 0px;\n\ttop: 55px;\n\tcursor: pointer;\n\tz-index: 1000001;\n}\n\n#diigo-annotationList-top{\n\theight: 30px;\n\tvertical-align: middle;\n\tbackground-color: #39BAF6;\n\tline-height: 30px;\n\tpadding: 0 10px;\n\tfont-size: 14px;\n\tcolor: #FFF;\n\ttext-align: left;\n\tborder-radius: 2px 2px 0 0;\n\ttext-indent: 5px;\n}\n\n#diigo-annotationList-top b {\n\theight: 12px;\n\twidth: 14px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/list-icon.png");\n\tfloat: left;\n\tmargin-top: 10px;\n\tmargin-left: -4px;\n\tdisplay: block;\n}\n\n#diigo-annotationList-close{\n\tfloat: right;\n\theight: 16px;\n\twidth: 16px;\n\tbackground: url("/javascripts/diigolet-v2/images/win-close.png") 50% 50% no-repeat;\n\tmargin-top: 7px;\n\topacity: 0.5;\n\tcursor: pointer;\n}\n\n#diigo-annotationList-close:hover{\n\topacity: 1;\n}\n\n#diigo-annotationList-toolbar {\n\theight: 30px;\n\tfont: normal 12px/30px arial, Helvetica;\n}\n\n#diigo-annotationList-toolbar span {\n\tfloat: left;\n\tcolor: #333;\n\tmargin-left: 10px;\n}\n\n#diigo-annotationList-toolbar a {\n\tfloat: right;\n\tmargin-right: 10px;\n\ttext-decoration: none;\n\tcolor: #0072d6;\n}\n\n#diigo-annotationList-box{\n\tborder-radius: 0 0 2px 2px;\n\tborder-width: 0 1px 1px 1px;\n\tborder-color: rgba(0, 0, 0, 0.08);\n\tborder-style: solid;\n\tpadding: 5px 6px 0px 6px;\n\tposition: relative;\n\tmax-height:300px;\n\toverflow: auto;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item{\n\tmargin-bottom: 8px;\n\tposition: relative;\n\tbackground-color: #f9f9f9;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-orphan .diigo-annotationList-highlight, #diigo-annotationList-box .diigo-annotationList-item.diigo-orphan .diigo-annotationList-sticky {\n\tpadding-right: 19px;\n}\n\n.diigo-annotationList-item .diigo-annotationList-orphan-warning{\n\theight: 19px;\n\twidth: 19px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/orphan-warning.png");\n\tposition: absolute;\n\ttop: 0px;\n\tright: 0px;\n\topacity: 0.65;\n}\n\n.diigo-orphan-warning {\n\theight: 15px;\n\twidth: 15px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/orphan-warning-small.png");\n\tfloat: left;\n\topacity: 0.65;\n\tmargin-right: 4px;\n\tmargin-top: 7px;\n}\n\n#diigo-annotationList-box .diigo-annotationList-highlight{\n\tpadding: 6px 6px;\n\tfont: normal 12px/14px arial, Helvetica;\n\tcolor: #333;\n\tborder-left-style: solid;\n\tborder-left-width: 4px;\n\tborder-bottom: 1px solid #eeeeee;\n\tposition: relative;\n\tword-wrap:break-word;\n\twhite-space: normal;\n\tword-break:break-all;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-yellow .diigo-annotationList-highlight{\n\tborder-left-color: #FFBA01;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-blue .diigo-annotationList-highlight{\n\tborder-left-color: #6EAAF5;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-green .diigo-annotationList-highlight{\n\tborder-left-color: #7BBD3F;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-pink .diigo-annotationList-highlight{\n\tborder-left-color: #FF9C9C;\n}\n\n#diigo-annotationList-box .diigo-annotationList-sticky{\n\tpadding: 6px 6px 6px 26px;\n\tfont: normal 12px/14px arial, Helvetica;\n\tcolor: #333;\n\tbackground-color: #f9f9f9;\n\tborder-left-style: solid;\n\tborder-left-width: 4px;\n\tborder-left-color: #DDD;\n\tborder-bottom: 1px solid #eeeeee;\n\tposition: relative;\n\tword-wrap:break-word;\n\twhite-space: normal;\n\tword-break:break-all;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-yellow .diigo-annotationList-sticky .diigo-anntationList-floatIcon{\n\tbackground-position: 0px -16px;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-blue .diigo-annotationList-sticky .diigo-anntationList-floatIcon{\n\tbackground-position: 0px -32px;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-green .diigo-annotationList-sticky .diigo-anntationList-floatIcon{\n\tbackground-position: 0px -48px;\n}\n\n#diigo-annotationList-box .diigo-annotationList-item.diigo-pink .diigo-annotationList-sticky .diigo-anntationList-floatIcon{\n\tbackground-position: 0px -64px;\n}\n\n.diigo-annotationList-item .diigo-annotationList-item-action {\n\tposition: absolute;\n\tright: 1px;\n\tbottom: 1px;\n\tfont: normal 10px/12px arial, Helvetica;\n\tdisplay: none;\n\tz-index: 10000;\n}\n.diigo-annotationList-item .diigo-annotationList-item-btn{\n\tbackground-color: rgba(0,0,0,0.3);\n\tpadding: 2px;\n\tcolor: #ffffff;\n\tcursor: pointer;\n\tz-index:1;\n\topacity: 0.8;\n\tfloat: left;\n\tmargin-left: 5px;\n}\n\n.diigo-annotationList-item .diigo-annotationList-item-btn:hover{\n\topacity: 1;\n}\n\n.diigo-annotationList-commentItem {\n\tpadding: 5px 6px;\n\tbackground-color: #f9f9f9;\n\tword-break: break-all;\n\tborder-left-style: solid;\n\tborder-left-width: 4px;\n\tborder-left-color: #DDD;\n\tborder-bottom: 1px solid #eeeeee;\n\tfont: normal 12px/14px arial, Helvetica;\n}\n\n.diigo-annotationList-item:hover .diigo-annotationList-item-action{\n\tdisplay: block;\n}\n\n.diigo-anntationList-floatIcon{\n\tbackground-image: url("/javascripts/diigolet-v2/images/float_note_icon.png");\n\theight: 16px;\n\twidth: 16px;\n\tposition: absolute;\n\tleft: 5px;\n\ttop: 5px;\n}\n\n#diigo-annotationList-main{\n\tposition: relative;\n}\n\n#diigo-annotationList-notification{\n\theight: 30px;\n\twidth: 150px;\n\tborder: 2px solid rgba(0,0,0,.15);\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tbackground: url("/javascripts/diigolet-v2/images/success.png") 5px 50% no-repeat;\n\ttext-indent: 26px;\n\tfont: normal 12px/30px arial, Helvetica;\n\tbackground-color: #ffffff;\n\tborder-radius: 2px;\n\t-webkit-transform: translate(-50%,-50%);\n\tbackground-clip: content-box;\n\tz-index: 1;\n\tdisplay: none;\n}\n\n#diigo-annotationList-noItem {\n\tpadding: 10px;\n\tfont-weight: bold;\n}\n\n.diigo-customize-scrollbar::-webkit-scrollbar{\n\twidth:6px;\n}\n\n.diigo-customize-scrollbar::-webkit-scrollbar-track-piece {\n\tbackground-color: transparent;\n}\n\n.diigo-customize-scrollbar::-webkit-scrollbar-thumb:vertical\n{\n\theight: 20px;\n\tbackground-color: #CCCCCC;\n}\n\n.diigo-customize-scrollbar::-webkit-scrollbar-thumb:hover{\n\tbackground-color: #aaaaaa;\n}\n\n.diigolet-highlight-selected {\n\t-webkit-animation: highlight 800ms ease-in-out;\n}\n\n\n/* =======template.html======= */\n/*===== Notification2 ========*/\n\n.diigolet.notice{\n\tfont: bold 13px/1.5 Helvetica, Arial, sans-serif;\n\tposition: fixed;\n\ttop: 5px;\n\tleft: 0;\n\twidth: 100%;\n\ttext-align: center;\n\tz-index: 2147483647;\n\theight: 1px;\n\t-webkit-animation: fadeIn 400ms ease;\n}\n\n.diigolet.notice>div{\n\tborder: 1px solid #fad42e;\n\tbackground: #ffeeaa;\n\tborder-radius: 5px;\n\tcolor: #000;\n\tdisplay: inline-block;\n\tpadding: 5px 10px 5px 5px;\n\t-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 1px;\n}\n.diigolet.notice>div>b{\n\tdisplay: inline-block;\n\theight: 16px;\n\twidth: 16px;\n\tmargin: 2px 3px 0 0;\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) 0 -80px no-repeat;\n\tfloat: left;\n}\n.diigolet.notice>div>p>a{\n\tfont-size:12px;\n}\n.diigolet.notice>div>p{\n\tfloat: left;\n\tmax-width: 420px;\n}\n.diigolet.notice>div.alert{\n\tbackground: #fef6f3;\n\tborder-color: #cd0a0a;\n}\n.diigolet.notice>div.alert p #retry{\n\tmargin-left: 3px;\n\ttext-decoration: underline;\n}\n.diigolet.notice>div.alert>b{\n\tbackground-position: -16px -80px;\n}\n.diigolet.notice>div.info>b{\n\tbackground-position: -32px -80px;\n}\n.diigolet.notice>div.wait>b{\n\tbackground:url(/javascripts/diigolet-v2/images/processing.gif) no-repeat scroll left 0 transparent;\n}\n\n.diigolet.notice div #close{\n\tdisplay: block;\n\theight: 12px;\n\twidth: 12px;\n\tbackground:url(/javascripts/diigolet-v2/images/close.png);\n\tfloat: right;\n\tmargin-left: 10px;\n\tmargin-top: 3px;\n}\n\n.diigolet.notice div #close:hover{\n\tbackground-position: 0 -12px;\n}\n\n/*=======================*/\n\n#diigolet-panel-panel {\n\tz-index:2147483641;\n\tdisplay: none;\n}\n\n#diigolet-panel-panel.notSignedIn .signedIn {\n\tdisplay:none;\n}\n\n#diigolet-panel-panel.signedIn .notSignedIn {\n\tdisplay:none;\n}\n\n\n#diigolet-panel-panel{\n\theight: 36px;\n\tborder-top-left-radius: 19px;\n\tborder-bottom-left-radius: 19px;\n\tfont: normal 12px/1.5 Helvetica, Arial, sans-serif;\n\tposition: fixed;\n\tleft: 5px;\n\ttop: 5px;\n\tbackground-color: #ffffff;\n\t-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;\n\twhite-space:nowrap;\n\tborder: 1px solid rgba(47,95,122,.3);\n\t-webkit-user-select:none;\n\tbackground-clip: content-box;\n\n\n\n}\n\n#diigolet-panel-panel:hover #diigolet-panel-space{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -379px 0px no-repeat;\n\topacity: 0.4;\n}\n\n#diigolet-panel-panel.fold #diigolet-panel-logo{\n\t/* -webkit-transition: left 300ms ease;*/\n\topacity: 1;\n\twidth: 28px;\n}\n\n#diigolet-panel-panel.fold #diigolet-panel-main{\n\twidth: 0px;\n\tborder-radius: 0px;\n}\n\n#diigolet-panel-panel.orphanHighlight.fold #diigolet-panel-logo {\n\tbackground-position: -84px 0px;\n}\n\n#diigolet-panel-panel.orphanHighlight.fold #diigolet-panel-logo:hover {\n\tbackground-position: -112px 0px;\n}\n\n.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}\n.clearfloat{zoom:1}\n\n#diigolet-panel-main{\n\t/*width: 151px;*/\n\theight: 36px;\n\tdisplay: inline-block;\n\tbackground-color: rgba(255,255,255,1);\n\tborder-radius: 19px 0px 0px 19px;\n\toverflow: hidden;\n\t-webkit-transition: left 100ms ease-in-out;\n\n}\n\n#diigolet-panel-logo{\n\tdisplay: inline-block;\n\twidth: 0px;\n\theight: 36px;\n\tborder-top-left-radius: 19px;\n\tborder-bottom-left-radius: 19px;\n\tbackground-image: url("/javascripts/diigolet-v2/images/di.png");\n\tbackground-position: 0px 0px;\n\tbackground-color: #ffffff;\n\topacity: 0;\n\tcursor: pointer;\n\n\n}\n\n#diigolet-panel-logo:hover{\n\tbackground-position: -28px 0px;\n}\n\n\n\n#diigolet-panel-space{\n\twidth: 12px;\n\theight: 36px;\n\tdisplay: inline-block;\n\tbackground-color: #ffffff;\n}\n\n#diigolet-panel-panel .diigolet-panel-btn{\n\theight: 36px;\n\tfloat: left;\n}\n\n#diigolet-panel-panel .diigolet-panel-btn>b{\n\theight: 36px;\n\twidth: 36px;\n\tdisplay: block;\n\tcursor: pointer;\n\tmargin: 0 auto;\n\t-webkit-transition: background-color 200ms ease;\n\n\n}\n\n#diigolet-panel-panel .diigolet-panel-btn>b:hover{\n\tbackground-color: #E7F0FF;\n}\n\n#diigolet-panel-panel .diigolet-panel-btn>b:active{\n\t-webkit-transform: scale(.9);\n}\n\n#diigolet-panel-fold{\n\theight: 36px;\n\tfloat: left;\n\tcursor: pointer;\n\twidth: 19px;\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") 0px 0px no-repeat;\n}\n\n#diigolet-panel-fold:hover{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -38px 0px no-repeat;\n}\n\n#diigolet-panel-Highlight{\n\twidth: 48px;\n}\n\n#diigolet-panel-btnHighlight{\n\twidth: 34px;\n\theight: 36px;\n\tfloat: right;\n}\n\n#diigolet-panel-btnHighlight>b{\n\theight: 36px;\n\twidth: 36px;\n\tdisplay: block;\n\tcursor: pointer;\n\t-webkit-transition: background-color 200ms ease,border-radius 200ms ease;\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -105px 0px no-repeat;\n\n}\n\n#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight>b{\n\theight: 36px;\n\twidth: 36px;\n\tmargin: 0px;\n}\n\n#diigolet-panel-Highlight:not(.pen) #diigolet-panel-btnHighlight>b:hover{\n\tbackground-color: #E7F0FF !important;\n}\n\n\n\n\n#diigolet-panel-btnHighlight>b:active{\n\t-webkit-transform: scale(.9);\n}\n\n#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight>b{\n\t/*background: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -202px 0px no-repeat;*/\n\tbackground-color: #E7F0FF;\n\t/*border-radius: 36px;*/\n\t-webkit-transform:scale(0.9);\n}\n\n/*#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight.yellow>b{\n    background: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -202px 0px no-repeat;\n    background-color: #ffb000;\n}\n\n#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight.blue>b{\n    background: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -202px 0px no-repeat;\n    background-color: #39abed;\n}\n\n#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight.green>b{\n    background: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -202px 0px no-repeat;\n    background-color: #77cc00;\n}\n\n#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight.pink>b{\n    background: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -202px -2px no-repeat;\n    background-color: #ff66bb;\n}\n\n#diigolet-panel-Highlight:not(.pen) #diigolet-panel-btnHighlight>b:hover{\n    background-color: #E7F0FF !important;\n}*/\n\n#diigolet-panel-btnHighlight.yellow>b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -73px 0px no-repeat;\n}\n\n#diigolet-panel-btnHighlight.blue>b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -105px 0px no-repeat;\n}\n\n#diigolet-panel-btnHighlight.green>b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -137px 0px no-repeat;\n}\n\n#diigolet-panel-btnHighlight.pink>b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -169px 0px no-repeat;\n}\n\n#diigolet-panel-hightlight-dropup.yellow>b{\n\tbackground-color: #ffb000;\n}\n\n#diigolet-panel-hightlight-dropup.blue>b{\n\tbackground-color: #39abed;\n}\n\n#diigolet-panel-hightlight-dropup.green>b{\n\tbackground-color: #77cc00;\n}\n\n#diigolet-panel-hightlight-dropup.pink>b{\n\tbackground-color: #ff66bb;\n}\n\n#diigolet-panel-hightlight-dropup{\n\twidth: 14px;\n\theight: 36px;\n\tfloat: right;\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -360px 0px no-repeat;\n\tcursor: pointer;\n}\n\n#diigolet-panel-hightlight-dropup:hover{\n\t/*background: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -374px 0px no-repeat;*/\n\tbackground-color: #E7F0FF;\n}\n\n#diigolet-panel-hightlight-dropup:active>b{\n\t/*-webkit-transform: scale(.85);*/\n}\n\n#diigolet-panel-hightlight-dropup>b{\n\theight: 5px;\n\twidth: 5px;\n\tborder-radius: 12px;\n\tdisplay: block;\n\tmargin-top: 16px;\n\tmargin-left: 5px;\n\tcursor: pointer;\n}\n\n#diigolet-panel-btnStickyNote{\n\twidth: 42px;\n}\n\n#diigolet-panel-btnStickyNote b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -234px -1px no-repeat;\n}\n\n#diigolet-panel-btnBookmark{\n\twidth: 42px;\n}\n\n#diigolet-panel-btnBookmark b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -296px -1px no-repeat;\n}\n\n#diigolet-panel-btnBookmark.diigo-research-mode b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -485x -1px no-repeat;\n}\n\n#diigolet-panel-btnBookmark.saved b {\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -328px -1px no-repeat;\n}\n\n#diigolet-panel-btnAnnotationList b {\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -419px -1px no-repeat;\n}\n\n#diigolet-panel-panel.orphanHighlight #diigolet-panel-btnAnnotationList b {\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -451px -1px no-repeat;\n}\n\n#diigolet-panel-orphanHighlight{\n\twidth: 46px;\n}\n\n#diigolet-panel-orphanHighlight b{\n\tbackground: url("/javascripts/diigolet-v2/images/toolbar-icon.png") -266px -1px no-repeat;\n}\n\n\n\n\n#diigolet-panel-colorPicker{\n\tdisplay: none;\n\tposition: absolute;\n\tleft: 15px;\n\ttop: 41px;\n\twidth: 91px;\n\tbackground-color: #ffffff;\n\tbox-shadow: 0 1px 4px rgba(0,0,0,.35);\n\tborder-radius: 2px;\n\tpadding: 5px 0px;\n\t-webkit-animation:diigo-dropup .15s ease-in 1;\n}\n\n#diigolet-panel-colorPicker.dropupShown{\n\tdisplay: block;\n}\n\n#diigolet-panel-colorPicker-arrow{\n\tborder: 5px solid;\n\tborder-top-color: transparent;\n\tborder-right-color: transparent;\n\tborder-bottom-color: #ffffff;\n\tborder-left-color: transparent;\n\tposition: absolute;\n\tleft: 40px;\n\ttop:-9px;\n}\n\n#diigolet-panel-colorPicker li{\n\tfont-weight: normal;\n\tdisplay: block;\n\tpadding-right: 10px !important;\n\tpadding-left: 10px !important;\n\ttext-decoration: none !important;\n\tline-height: 26px;\n\theight: 26px;\n\tcolor: #434343;\n\tmin-width: 60px;\n\twidth: 71px;\n\tbackground: none !important;\n\tborder: none !important;\n\t-webkit-transition: background-color 200ms ease;\n}\n\n#diigolet-panel-colorPicker li:hover{\n\tbackground-color: #e8e8e8 !important;\n\tcolor: #434343 !important;\n\ttext-decoration: none !important;\n}\n\n#diigolet-panel-colorPicker li span{\n\tdisplay: inline-block;\n\twidth: 12px;\n\theight: 12px;\n\tborder-radius: 7px;\n\tmargin-right: 5px;\n\tvertical-align: middle;\n\tmargin-bottom: 3px;\n}\n\n#diigolet-panel-colorPicker li span b{\n\twidth: 4px;\n\theight: 4px;\n\tbackground: #606060;\n\tmargin-top: 4px;\n\tmargin-left: 4px;\n\tborder-radius: 2px;\n}\n\n#diigolet-panel-colorPicker li.selected span b{\n\tdisplay: block;\n}\n\n#diigolet-panel-colorPicker li.yellow span{\n\tbackground:#fde200 ;\n\tborder: 1px solid #b0a224;\n}\n\n#diigolet-panel-colorPicker li.blue span{\n\tbackground:#7db3f9 ;\n\tborder: 1px solid #63799a;\n}\n\n#diigolet-panel-colorPicker li.green span{\n\tbackground:#86ca25 ;\n\tborder: 1px solid #718b49;\n}\n\n#diigolet-panel-colorPicker li.pink span{\n\tbackground:#ff9b9a ;\n\tborder: 1px solid #ae657a;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* share panel */\n.diigolet .moreActionShare b{\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) 0 -96px no-repeat;\n}\n\n#diigolet-dialog-share{\n\tbackground-color: #fcfbf7;\n\tborder-radius: 2px;\n\tfont: normal 13px/1.5 Helvetica, Arial, sans-serif;\n\tposition: fixed;\n\tleft: 5px;\n\ttop: 7px;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,.08);\n\twhite-space:nowrap;\n\twidth: 520px;\n\tz-index: 2147483646;\n}\n#diigolet-dialog-share *{\n\t/*margin: 0;\n\tpadding: 0;*/\n\twhite-space:normal;\n}\n#diigolet-dialog-share-title{\n\theight: 30px;\n\tvertical-align: middle;\n\tbackground-color: #39baf6;\n\tline-height: 30px;\n\tpadding: 0 10px;\n\tfont-size: 14px;\n\tcolor: white;\n\ttext-align: left;\n\tborder-radius: 2px 2px 0 0;\n}\n#diigolet-dialog-share-closeBtn{\n\tbackground: url(https://www.diigo.com/javascripts/webtoolbar/images/win-close.png) 50% 50% no-repeat;\n\tfloat: right;\n\theight: 16px;\n\tmargin-left: 10px;\n\twidth: 16px;\n\tmargin-top: 7px;\n}\n#diigolet-dialog-share-content{\n\tborder-radius: 0 0 2px 2px;\n\tborder-width: 1px 1px 1px 1px;\n\tborder-color: rgba(0,0,0,.08);\n\tborder-style: solid ;\n}\n\n#diigolet-share-shareToTabs{\n\tbackground-color: #fcfbf7;\n\tlist-style-type: none;\n\tpadding: 0 5px;\n\tmargin: 0;\n\theight: 30px;\n\tline-height: 30px;\n\tborder-left: 1px solid rgba(0,0,0,.08);\n\tborder-right: 1px solid rgba(0,0,0,.08);\n}\n#diigolet-share-shareToTabs li{\n\tdisplay: inline-block;\n\tline-height: 22px;\n\theight: 24px;\n\tmargin-top: 6px;\n}\n#diigolet-share-shareToTabs li a{\n\ttext-decoration: none;\n\tborder-bottom-color: #3669a8;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tcolor: #000000;\n\topacity: 0.8;\n\tdisplay: block;\n\tpadding: 0 5px;\n}\n#diigolet-share-shareToTabs a:hover{\n\topacity: 1;\n}\n#diigolet-share-shareToTabs a.current{\n\tborder-radius:2px 2px 0 0 ;\n\tborder-width: 1px 1px 0px 1px;\n\tborder-color: rgba(0,0,0,.08);\n\tborder-style: solid;\n\tborder-bottom: 1px solid #fcfbf7;\n\tcolor: #000000;\n\topacity: 1;\n\tz-index: 0;\n\tposition: relative;\n\ttop: 1px;\n\n}\n#diigolet-share-shareToTabs a.current:hover{\n\tcolor: #222;\n}\n#diigolet-share-shareToTabs li b{\n\tdisplay: inline-block;\n\twidth: 16px;\n\theight: 16px;\n\tvertical-align:text-bottom;\n\tmargin-right: 3px;\n}\n.diigolet .shareToTwitter b{\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) -16px -96px no-repeat;\n}\n.diigolet .shareToFacebook b{\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) -32px -96px no-repeat;\n}\n.diigolet .shareToGplus b{\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) -48px -96px no-repeat;\n}\n.diigolet .shareToEmail b{\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) 0 -112px no-repeat;\n}\n.diigolet .getAnnotatedLink b{\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) -16px -112px no-repeat;\n}\n.diigolet .twitterDesc{\n\tcolor: #777;\n\tfont-size: 13px;\n\tline-height: 20px;\n}\n#diigolet-twitter-saveBtn{\n\tdisplay: block;\n\tline-height: 24px;\n\tcursor: pointer;\n\ttext-align: center;\n\tcolor: white;\n\tborder-radius: 2px;\n\tborder: 1px solid #066ec1;\n\tfont-size: 12px;\n\ttext-decoration: none;\n\tborder-radius: 2px;\n\tborder: 1px solid #85a0a6;\n\tcolor: #85a0a6;\n\tfont-size: 12px;\n\ttext-align: center;\n\theight: 20px;\n\twidth: 50px;\n\tline-height: 20px;\n\tfloat: right;\n}\n\n#diigolet-twitter-saveBtn:active{\n\tbackground: #85a0a6;\n\tcolor: #fff;\n}\n\n#diigolet-twitter-cancelBtn{\n\tcolor: #999;\n\theight: 12px;\n\tfont-size: 12px;\n\tmargin: 1px 8px 0 6px;\n\ttext-decoration: none;\n\tfloat: right;\n}\n\n#diigolet-twitter-cancelBtn:hover{\n\ttext-decoration: underline;\n}\n\n#diigolet-email-saveBtn{\n\tdisplay: block;\n\tline-height: 24px;\n\tcursor: pointer;\n\ttext-align: center;\n\tcolor: white;\n\tborder-radius: 2px;\n\tborder: 1px solid #066ec1;\n\tfont-size: 12px;\n\ttext-decoration: none;\n\tborder-radius: 2px;\n\tborder: 1px solid #85a0a6;\n\tcolor: #85a0a6;\n\tfont-size: 12px;\n\ttext-align: center;\n\theight: 20px;\n\twidth: 50px;\n\tline-height: 20px;\n\tfloat: right;\n\tmargin-top: 4px;\n}\n\n#diigolet-email-saveBtn:active{\n\tbackground: #85a0a6;\n\tcolor: #fff;\n}\n\n#diigolet-email-cancelBtn{\n\tcolor: #999;\n\theight: 12px;\n\tfont-size: 12px;\n\tmargin: 6px 14px 0 0;\n\ttext-decoration: none;\n\tfloat: right;\n}\n\n#diigolet-email-cancelBtn:hover{\n\ttext-decoration: underline;\n}\n\n#diigolet-annotatedLink-saveBtn{\n\tdisplay: block;\n\tline-height: 24px;\n\tcursor: pointer;\n\ttext-align: center;\n\tcolor: white;\n\tborder-radius: 2px;\n\tborder: 1px solid #066ec1;\n\tfont-size: 12px;\n\ttext-decoration: none;\n\tborder-radius: 2px;\n\tborder: 1px solid #85a0a6;\n\tcolor: #85a0a6;\n\tfont-size: 12px;\n\ttext-align: center;\n\theight: 20px;\n\twidth: 50px;\n\tline-height: 20px;\n\tfloat: right;\n}\n\n#diigolet-annotatedLink-saveBtn:active{\n\tbackground: #85a0a6;\n\tcolor: #fff;\n}\n\n#diigolet-annotatedLink-cancelBtn{\n\tcolor: #999;\n\theight: 12px;\n\tfont-size: 12px;\n\tmargin: 2px 8px 0 6px;\n\ttext-decoration: none;\n\tfloat: right;\n}\n\n#diigolet-annotatedLink-cancelBtn:hover{\n\ttext-decoration: underline;\n}\n#diigolet-share-twitterLeftChars{\n\tcolor: #999;\n\tfloat: right;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tline-height: 20px;\n}\n#diigolet-share-twitterLeftChars.full{\n\tcolor: #F00;\n}\n#diigolet-dialog-share .inputTxt{\n\tborder: 1px solid #7F9DB9;\n\tfont: normal 12px/1.5 Arial, Helvetica, sans-serif;\n\tborder: 1px solid #d7d7d7;\n\t-webkit-transition: border-color 200ms ease;\n\toutline: none;\n}\n\n#diigolet-dialog-share .inputTxt:focus{\n\tborder: 1px solid #AAA;\n}\n#diigolet-dialog-share-twitterMsg{\n\theight: 54px;\n\twidth: 492px;\n}\n#diigolet-dialog-share .buttonRow{\n\tmargin-top: 5px;\n\ttext-align: right;\n}\n#diigolet-dialog-share .buttonRow input{\n\tmargin-left: 5px;\n\tpadding: 1px 6px;\n}\n#diigolet-dialog-share input.defaultAction{\n\tfont-weight: 700;\n}\n#diigolet-dialog-share-twitter{\n\tpadding: 10px;\n}\n#diigolet-dialog-share-facebook{\n\tpadding: 5px;\n\tfont-size:20px;\n\theight:100px;\n\tline-height:100px;\n\ttext-align:center;\n}\n\n#diigolet-dialog-share-gPlus{\n\tpadding: 5px;\n\tfont-size:20px;\n\theight:100px;\n\tline-height:100px;\n\ttext-align:center;\n}\n\n#diigolet-dialog-share-gBuzz iframe{\n\tborder: none;\n\theight: 340px;\n\twidth: 100%;\n\toverflow: hidden;\n}\n#diigolet-dialog-share-email{\n\tpadding: 10px;\n}\n\n#diigolet-dialog-share-email>table {\n\twidth: 100%;\n\tborder-width:0;\n\tmargin-bottom:5px;\n}\n#diigolet-dialog-share-email>table td {\n\tpadding:2px 0;\n}\n#diigolet-dialog-share-email label{\n\tfont-weight: 700;\n}\n#diigolet-dialog-share-email-to, #diigolet-dialog-share-email-subject{\n\twidth: 100%;\n}\n#diigolet-dialog-share-email-message{\n\theight: 72px;\n\twidth: 100%;\n}\n#diigolet-dialog-share-email-quotes-checker{\n\tfont-weight: 400!important;\n\tfloat: right;\n}\n#diigolet-dialog-share-email-quotes-checker input{\n\tmargin-right:2px;\n\tvertical-align: text-bottom;\n}\n#diigolet-dialog-share-email-quotes{\n\tborder: 1px solid #bbb;\n\tborder-radius: 3px;\n\twidth: 100%;\n\tmax-height: 150px;\n\toverflow-y: scroll;\n}\n#diigolet-aidlog-share-email-quotes-content{\n\tmargin: 5px 10px 10px 10px;\n}\n#diigolet-dialog-share-annotatedLink{\n\tpadding: 10px;\n}\n.diigolet .annotatedLinkInfo{\n\tborder: 1px solid #fad42e;\n\tbackground: #ffeeaa;\n\tborder-radius: 5px;\n\tcolor: #000;\n\tdisplay: inline-block;\n\tpadding: 0 0 0 20px!important;\n\tposition: relative;\n\tmargin-bottom: 10px!important;\n}\n.diigolet .annotatedLinkInfo b{\n\tdisplay: inline-block;\n\theight: 16px;\n\twidth: 16px;\n\tmargin-right: 3px;\n\tbackground: url(/javascripts/diigolet-v2/images/icons.png) -32px -80px no-repeat;\n\tposition: absolute;\n\tleft: 1px;\n\ttop: 1px;\n\n}\n#diigolet-dialog-share-annotatedLink-value{\n\tfont-weight: 700!important;\n\tfont-size: 13px!important;\n\tpadding:2px;\n\twidth: 496px;\n}\n#diigolet-dialog-share-annotatedLink-value.loading{\n\tcolor: #ccc;\n\tfont-style: italic;\n}\n#diigolet-dialog-share-annotatedLink-optLinks{\n\tfloat: left;\n}\n\n\n/*============== image clipper ==================*/\n#diigo-image-clipper {\n\tpadding: 3px 15px;\n\tborder-radius: 2px;\n\tbackground: rgba(0,0,0,.6);\n\tcolor: white;\n\tfont-size: 12px;\n\tline-height: 20px;\n\tcursor: pointer;\n\tdisplay: none;\n}\n\n\n\n/*============== notify copy ==================*/\n.notify-copy {\n\tfont-size: 30px;\n\tcolor: white;\n\tbackground: rgba(0,0,0,.7);\n\theight: 40px;\n\ttext-align: center;\n\tline-height: 40px;\n\tpadding: 20px 0px;\n\twidth: 200px;\n\tborder-radius: 3px;\n\tposition: fixed;\n\tvisibility: hidden;\n\tz-index: 999;\n\tmargin: auto;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\topacity: 0;\n\t-webkit-transition: all 300ms ease;\n\t-moz-transition: all 300ms ease;\n\t-ms-transition: all 300ms ease;\n\t-o-transition: all 300ms ease;\n\ttransition: all 300ms ease;\n}\n\n\n.notify-copy.show {\n\tvisibility: visible;\n\topacity: 1;\n}\n/**************Code clipper*****************/\n#diigo-code-clipper {\n\theight: 24px;\n\twidth: 24px;\n\tbackground: red;\n\tposition: absolute;\n\topacity: 0.5;\n\tcursor: pointer;\n}\n#diigo-code-clipped {\n\tposition: absolute;\n\tdisplay: inline-block;\n\tpadding: 0px 4px;\n\tfont-size: 12px;\n\tborder-radius: 2px;\n\ttext-align: center;\n\tcolor: white;\n\tbackground: rgba(0,0,0,.5);\n\tline-height: 20px;\n\tfont-family: Arial;\n}\n\n#diigo-code-clipper .clipped-area {\n\tdisplay: none;\n}\n\n#diigo-code-clipper.clipped {\n\tpointer-events: none;\n\tfont-size: 12px;\n\tdisplay: inline-block;\n\twidth: auto;\n\n}\n\n#diigo-code-clipper.clipped .clipped-area {\n\tdisplay: block;\n}\n\n#diigo-code-clipper:hover {\n\topacity: 1;\n}\n\n/**No replace area**/\n@-webkit-keyframes pop-upwards {\n\t0% {\n\t\t-webkit-transform: matrix(.97, 0, 0, 1, 0, 12);\n\t\ttransform: matrix(.97, 0, 0, 1, 0, 12);\n\t\topacity: 0\n\t}\n\n\t20% {\n\t\t-webkit-transform: matrix(.99, 0, 0, 1, 0, 2);\n\t\ttransform: matrix(.99, 0, 0, 1, 0, 2);\n\t\topacity: .7\n\t}\n\n\t40% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n\t\ttransform: matrix(1, 0, 0, 1, 0, -1);\n\t\topacity: 1\n\t}\n\n\t70% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n\n\t100% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n}\n\n\n/**For firefox can not set white-space bug**/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.diigolet textarea {\n\t\twhite-space:normal !important;\n\t\tresize: vertical !important;\n\t\tpadding: 2px !important;\n\t}\n}\n\n@keyframes pop-upwards {\n\t0% {\n\t\t-webkit-transform: matrix(.97, 0, 0, 1, 0, 12);\n\t\ttransform: matrix(.97, 0, 0, 1, 0, 12);\n\t\topacity: 0\n\t}\n\n\t20% {\n\t\t-webkit-transform: matrix(.99, 0, 0, 1, 0, 2);\n\t\ttransform: matrix(.99, 0, 0, 1, 0, 2);\n\t\topacity: .7\n\t}\n\n\t40% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n\t\ttransform: matrix(1, 0, 0, 1, 0, -1);\n\t\topacity: 1\n\t}\n\n\t70% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n\n\t100% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n}\n\n@-webkit-keyframes fadeIn{\n\t0%{opacity:0}\n\t100%{opacity:1}\n}\n/**\n * Highlight style classes\n * .a background color\n * .b underline\n * .c underline + font color\n */\n\n@media screen{\n\n\n\tbody.diigoHiPen-yellow{\n\t\tcursor:url(/javascripts/diigolet-v2/images/highlighter-orange.cur) 4 15, text !important\n\t}\n\n\tbody.diigoHiPen-blue{\n\t\tcursor:url(/javascripts/diigolet-v2/images//highlighter-blue.cur) 4 15, auto !important\n\t}\n\n\tbody.diigoHiPen-green{\n\t\tcursor:url(/javascripts/diigolet-v2/images//highlighter-green.cur) 4 15, text !important\n\t}\n\n\tbody.diigoHiPen-pink{\n\t\tcursor:url(/javascripts/diigolet-v2/images//highlighter-pink.cur) 4 15, text !important\n\t}\n}\n\n\n@-webkit-keyframes pop-downwards {\n\t0% {\n\t\t-webkit-transform: matrix(.97, 0, 0, 1, 0, -12);\n\t\ttransform: matrix(.97, 0, 0, 1, 0, -12);\n\t\topacity: 0\n\t}\n\n\t20% {\n\t\t-webkit-transform: matrix(.99, 0, 0, 1, 0, -2);\n\t\ttransform: matrix(.99, 0, 0, 1, 0, -2);\n\t\topacity: .7\n\t}\n\n\t40% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 1);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 1);\n\t\topacity: 1\n\t}\n\n\t70% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n\n\t100% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n}\n\n@keyframes pop-downwards {\n\t0% {\n\t\t-webkit-transform: matrix(.97, 0, 0, 1, 0, -12);\n\t\ttransform: matrix(.97, 0, 0, 1, 0, -12);\n\t\topacity: 0\n\t}\n\n\t20% {\n\t\t-webkit-transform: matrix(.99, 0, 0, 1, 0, -2);\n\t\ttransform: matrix(.99, 0, 0, 1, 0, -2);\n\t\topacity: .7\n\t}\n\n\t40% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 1);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 1);\n\t\topacity: 1\n\t}\n\n\t70% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n\n\t100% {\n\t\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t\ttransform: matrix(1, 0, 0, 1, 0, 0);\n\t\topacity: 1\n\t}\n}\n\n\n/* The xxx annotations button which is no longer in use\n.whatever {\n\tcolor: #000000;\n}\n\nbody .d3df table {\n\tbackground: #abd5ff url(https://www.diigo.com/javascripts/webtoolbar/images/3dfbg.gif) left center; \n\tborder: #0054a8 1px solid; \n\tcursor: pointer;\n\tborder-collapse:separate;\n\tborder-spacing: 2px 2px;\n}\n\n.d3df td.d3df-annCnt {\n\tbackground-color: #fff; \n\tborder: #7bbdff 1px solid; \n\tcolor: #333; \n\tfont-size: 9px; \n\tfont-weight: bold; \n\tmargin: 1px 1px 1px 2px; \n\tpadding: 0 2px; \n\ttext-align: right; \n\twidth: 32px;\n}\n.d3df .d3df-annCnt, .d3df .d3df-text {\n\tfont-family: \'lucida grande\',tahoma,verdana,arial,sans-serif; \n}\n\n.d3df .d3df-text {\n\tcolor: #000; \n\tfont-size: 10px; \n\tfont-weight: normal; \n\tmargin: 0; \n\tpadding: 0 8px 0 0;\n}\n\n*/\n/*======side bar========*/\n#d3df-sidebar {\n\tborder: 1px #ccc solid;\n\tz-index:99997;\n}\n\n#d3df-sidebar div.heading {\n\tpadding:3px;\n\tfont-size:13px;\n\tborder-top:1px #E8EEF7 solid;\n\tfont-weight:bold;\n\tzoom: 1; /*i hate ie*/\n}\n\n#d3df-sidebar div.popOut {\n\twidth:16px;\n\theight:16px;\n\tbackground: transparent url(https://www.diigo.com/javascripts/webtoolbar/images/popout.gif) no-repeat scroll left top; \n\tcursor:pointer;\n}\n\n#d3df-sidebar div.popOut.popIn {\n\tbackground-image:url(https://www.diigo.com/javascripts/webtoolbar/images/popin.gif);\n}\n#d3df-sidebar div.popOut.close {\n\tbackground-image:url(https://www.diigo.com/javascripts/webtoolbar/images/close1.gif);\n}\n\n\n#d3df-sidebar div.heading a.add{\n\tbackground: transparent url(https://www.diigo.com/javascripts/webtoolbar/images/diigoletIconv1.gif) no-repeat scroll left -172px; \n\tpadding-left: 18px;\n\tdisplay:block;\n\tfloat:right;\n\tfont-weight:normal;\n}\n\n#d3df-sidebar a.togglePanel {\n\tbackground: transparent url(https://www.diigo.com/images/v2/eoc.gif) no-repeat scroll left top;\n\tdisplay:block;\n\tfloat:right;\n\twidth:16px;\n\theight:16px;\n}\n#d3df-sidebar a.togglePanel.collapsed {\n\tbackground-position:left bottom;\n}\n\n/* i hate ie6 */\n#d3df-sidebar ul, #d3df-sidebar ul li {\n\tlist-style: none;\n\toverflow:hidden;\n\tzoom:1;\n}\n\n#d3df-sidebar li.highlight a.highlight{\n\toverflow:hidden;\n\theight:24px;\n\tzoom:1;\n}\n\n\n#d3df-sidebar ul.highlights li{\n\tmargin:1px;\n}\n\n#d3df-sidebar ul.comments li{\n\tmargin:1px;\n\tpadding:2px;\n}\n\n#d3df-sidebar div.noComments{\n\tfont-size: 11px;\n\ttext-align:center;\n\tpadding:15px 5px;\n}\n\n#d3df-sidebar p.commentBody, #d3df-sidebar p.commentBody a{\n\tfont-size:11px;\n}\n\n#d3df-sidebar a.avatar {\n\tfloat:left;\n\tmargin-right:3px;\n}\n\n#d3df-sidebar a.avatar img {\n\tpadding: 1px; \n\tborder: 1px #CCC solid;\n\twidth:32px;\n\theight:32px;\n}\n\n#d3df-sidebar .commentInfo {\n\tfont-size:12px;\n}\n\n#d3df-sidebar .commentInfo a{\n\tborder-bottom:1px dotted #999;\n}\n\n/*highlight*/\n#d3df-sidebar a.highlight{\n\tline-height:24px;\n\tpadding-left:18px;\n\tdisplay:block;\n\tbackground:transparent url(https://www.diigo.com/javascripts/webtoolbar/images/diigoletIconv1.gif) no-repeat scroll left -192px\n}\n\n#d3df-sidebar a.floatNote{\n\tpadding-left:16px;\n\tbackground:transparent url(https://www.diigo.com/javascripts/webtoolbar/images/diigoletIconv1.gif) no-repeat scroll left -144px\n}\n\n#d3df-sidebar a.highlight .jumpTo{\n\tline-height:24px;\n\tpadding-left:5px;\n\tfont-size:12px;\n\tfont-style:italic;\n}\n\n/*=========== colors ============*/\n/* theme default*/\n/*heading comment box */\n#d3df-sidebar.themeDefault .bgColor1 {\n\tbackground-color: #C3D9FF;\n}\n\n/*highlight*/\n#d3df-sidebar.themeDefault .bgColor2 {\n\tbackground-color:#E8EEF7;\n}\n\n/*comment*/\n#d3df-sidebar.themeDefault .bgColor3 {\n\tbackground-color:#FFF;\n}\n\n/*hint*/\n#d3df-sidebar.themeDefault .color1 {\n\tcolor: #999;\n}\n\n/*heading color*/\n#d3df-sidebar.themeDefault .color2 {\n\tcolor: #333;\n}\n\n\n\n\n\n';
    diigolet.consts = {
      HTML_TOOLBAR:
        '\n<div id="diigolet-toolbar" class="diigolet" title="Diigolet version #{DIIGOLET_VERSION}">\n\t<div id="diigolet-tb-content">\n\t\t<div id="diigolet-tb-bar">\n\t\t\t<a id="diigolet-tb-btnHide" href="#" class="_hoverAndHideDropdown" onclick="return diigolet.handle(event, \'hideToolbar\');" title="Hide the toolbar"></a>\n\t\t\t<a style="float:right; width:30px;height:24px;background:url(\'https://www.diigo.com/javascripts/webtoolbar/images/diigoletHelp.gif\') no-repeat 50% 50%" href="#" onmouseover="return diigolet.handle(event, \'showHelp\');" onclick="return diigolet.handle(event, \'showHelp\');" title="Help"></a>\n\t\t\t<a id="diigolet-tb-btnMore" href="#" class="diigoletButton hover" onclick="return false;" onmouseover="return diigolet.handle(event, \'tb_showDropDownMenu\', \'#diigolet-tb-moreMenu\')"><b class="outer"><b>Diigo</b></b></a>\n\t\t\t<a id="diigolet-tb-btnBookmark" href="#" class="diigoletButton" onclick="diigolet.handle(event, \'bookmark\');" title="Bookmark this page"><b class="outer"><b>Bookmark</b></b></a>\n\t\t\t<a id="diigolet-button-highlight" href="#" class="diigoletButton" onmouseout="diigolet.handle(event, \'outHighlight\');" onmouseover="diigolet.handle(event, \'overHighlight\');" onmousedown="this.blur();return diigolet.handle(event, \'highlight\');" onclick="return false;" title="Selected some text to highlight"><b class="outer"><b>Highlight</b></b></a>\n\t\t\t<a id="diigolet-button-highlight-dropdown" href="#" class="diigoletButton" onmouseout="diigolet.handle(event, \'outHighlight\');" onmouseover="diigolet.handle(event, \'overHighlight\');" onmousedown="this.blur();return diigolet.handle(event, \'dropDownColorMenu\');" onclick="return false;"></a>\n\t\t\t<a id="diigolet-tb-btnFloatNote" href="#" class="diigoletButton" title="Add a sticky note" onclick="diigolet.handle(event, \'addStickyNote\')"><b class="outer"><b>Floating Sticky Note</b></b></a>\n\t\t\t<a id="diigolet-tb-btnComment" href="#" class="diigoletButton" title="View comments" onclick="return diigolet.handle(event, \'tb_viewComments\')"><b class="outer"><b>Comment</b></b></a>\n\t\t<span id="diigoDivInfo" style="padding-left:25px; float:left">\n\t\t\t<span style="display:none" id="diigolet-tb-forward">Annotated <a href="#" class="_forwardPageUrl" title="Go to the original page">page</a> by <a href="#" class="_forwardUserUrl" title=""></a>.\n\t\t\t</span><span class="_info"></span></span>\n\t\t</div>\n\t\t<div id="diigolet-tb-signInMenu" class="dropdownMenu" style="left:1px;width:80px">\n\t\t\t<a href="#" title="Sign in into Diigo.com" onclick="return diigolet.handle(event, \'tb_signIn\')">Sign in</a>\n\t\t\t<a href="#{URL_DIIGO}/sign-up" title="Create a Diigo account" target="_blank">Sign up</a>\n\t\t</div>\n\t\t<div id="diigolet-tb-moreMenu" class="dropdownMenu" style="left:10px" onclick="this.style.display = \'none\'">\n\t\t\t<a href="#" class="_URL_MY_LIBRARY _diigomenu" title="My Library" target="_blank">My Library</a>\n\t\t\t<a href="#" class="_URL_MY_LIST _diigomenu" title="My lists home" target="_blank">My lists home</a>\n\t\t\t<a href="#" class="_URL_MY_GROUP _diigomenu" title="My groups home" target="_blank">My groups home</a>\n\t\t\t<a href="#" class="_URL_NETWORK _diigomenu" title="My Network" target="_blank">My Network</a>\n\t\t\t<a href="#" class="_URL_HOT_BOOKMARK _diigomenu" title="Hot Bookmark" target="_blank">Hot Bookmark</a>\n\t\t\t<div>\n\t\t\t\t<img style="height:2px;width:140px;" src="https://www.diigo.com/javascripts/webtoolbar/images/diigoletToobarSep.png"/>\n\t\t\t</div>\n\t\t\t<a href="#" title="Show/hide highlight" onclick="diigolet.handle(event, \'showHideHighlight\')">Show/hide highlight</a>\n\t\t</div>\n\t\t<div id="diigolet-tb-colorMenu" class="dropdownMenu" style="left:329px" onclick="this.style.display = \'none\'">\n\t\t\t<a href="#" id="diigolet-colorMenu-yellow" onclick="diigolet.handle(event, \'ChangeColor\', \'yellow\')"><b class="colorItem"><b>Yellow</b></b></a>\n\t\t\t<a href="#" id="diigolet-colorMenu-blue" onclick="diigolet.handle(event, \'ChangeColor\', \'blue\')"><b class="colorItem"><b>Blue</b></b></a>\n\t\t\t<a href="#" id="diigolet-colorMenu-green" onclick="diigolet.handle(event, \'ChangeColor\', \'green\')"><b class="colorItem"><b>Green</b></b></a>\n\t\t\t<a href="#" id="diigolet-colorMenu-pink" onclick="diigolet.handle(event, \'ChangeColor\', \'pink\')"><b class="colorItem"><b>Pink</b></b></a>\n\t\t</div>\n\t\t<div style="clear:both"></div>\n\t</div>\n\t<div id="diigolet-tb-shadow"></div>\n\t<div id="diigolet-help"><div class="diigolet-closeBtn" onclick="diigolet.handle(event, \'hideHelp\')"></div>\n\t\t<p>To highlight, select some text and click "Highlight" on the context menu.</p>\n\t\t<p>To add a sticky note, move your mouse over highlighted text and the click\n\t\t\t"Add Sticky Notes" on the context menu.</p>\n\t\t<p><a target="_blank" href="https://help.diigo.com/no-toolbar-simple-diigolet/use-diigolet" title="View full Help">View full help</a></p>\n\t</div>\n\t<div id="diigolet-notify" class="diigolet"><span></span></div>\n\t<div id="diigolet-annotationSummary" style="width:360px;display:none;"></div>\n</div>\n',
      HTML_TRAY:
        '\n<div id="diigolet-tray" class="diigolet" onmouseover="diigolet.handle(event, \'mouseOnBorder\');"></div>\n',
      HTML_DLG_BOOKMARK:
        '\n<div class="diigolet" id="diigolet-tagForward">\n\t<div id="diigolet-tagForward-topBar" class="_dragHandle">\n\t\t<span class="topBar-title">Save to Diigo</span>\n\t\t<span class="focus-research-tip">(focus research)</span>\n\t\t<div id="diigolet-tagForward-remove" data-gtooltip="Saved on April 24,2013"><span></span></div>\n\t</div>\n\t<div id="diigolet-Bookmark-Form">\n\t\t<div id="Diigo-outliner">\n\t\t\t<div id="diigo-list-add">\n\t\t\t\t<div class="diigo-alert-tip"><span>Name existed !</span><div class="diigo-alert-tip-arrow"></div></div>\n\t\t\t\t<input type="text" id="diigo-list-addInput">\n\t\t\t\t<div id="diigo-list-addBtn">\n\t\t\t\t\t<span class=\'label\'>Create</span>\n\t\t\t\t\t<span class="spinner"></span>\n\t\t\t\t</div>\n\t\t\t\t<a id="diigo-list-addCancel">Cancel</a>\n\t\t\t</div>\n\t\t\t<div id="diigo-list-add-tip">\n\t\t\t\tYou have reach the limit of outliner. <a href="" id="diigo-w-cancel">Cancel</a><a href="" id="diigo-w-upgrade">Upgrade</a>\n\t\t\t</div>\n\t\t\t<div id="diigo-list"><select>\n\t\t\t</select></div>\n\t\t</div>\n\t\t<div id="Diigo-Bookmark-Title">\n\t\t\t<div id="link-icon" data-gtooltip="Edit url"></div>\n\t\t\t<input type="text" id="Diigo-Bookmark-Title-Input" value="DISQUS - Elevating the discussion">\n\t\t\t<div class="diigo-alert-tip"><span>Please input a bookmark title</span><div class="diigo-alert-tip-arrow"></div></div>\n\t\t</div>\n\t\t<div id="Diigo-Bookmark-Url">\n\t\t\t<input type="text" id="Diigo-Bookmark-Url-Input" value="https://disqus.com">\n\t\t\t<div id="url-arrow"></div>\n\t\t\t<div class="diigo-alert-tip"><span>Please input a valid url</span><div class="diigo-alert-tip-arrow"></div></div>\n\t\t</div>\n\t\t<div id="Diigo-Bookmark-Options">\n\t\t\t<div id="Diigo-Bookmark-Privacy" class="diigo-option" data-gtooltip = "private"><div class="op-checkbox-container" title="Make this bookmark private"><div class="op-checkbox"></div><div class="op-label">Private</div></div></div>\n\t\t\t<div id="Diigo-Bookmark-Unread" class="diigo-option" data-gtooltip = "readlater"><div class="op-checkbox-container" title="Mark this bookmark as unread"v><div class="op-checkbox"></div><div class="op-label">Read Later</div></div></div>\n\t\t\t<div id="Diigo-Bookmark-uploadCache" class="diigo-option" data-gtooltip = "cache"><div class="op-checkbox-container" title="Upload a copy of the page"><div class="op-checkbox"></div><div class="op-label">Cache</div></div></div>\n\t\t</div>\n\t\t<div id="Diigo-Bookmark-Description">\n\t\t\t<textarea id="Diigo-Bookmark-Description-Input" placeholder="Add description"></textarea>\n\t\t</div>\n\t\t<div id="Diigo-Bookmark-Tag">\n\t\t\t<div id="Diigo-Bookmark-Tag-Wrapper">\n\t\t\t\t<span id="Diigo-Bookmark-Tag-dropdown"></span>\n\t\t\t\t<input type="text" id="Diigo-Bookmark-Tag-Input" placeholder="Input or select tags">\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="Diigo-Bookmark-Tag-suggestion">\n\t\t\t<div id="diigolet-bm-tagListContainer-recent" class="diigo-su-tag">\n\t\t\t\t<a href="javascript:void(0)" title="Select to add all">Recent Tags:</a>\n\t\t\t\t<!--put recent tags here-->\n\t\t\t</div>\n\t\t\t<div id="diigolet-bm-tagListContainer-recommend" class="diigo-su-tag">\n\t\t\t\t<a href="javascript:void(0)">Recommended:</a>\n\t\t\t\t<!--<div class="loading"></div>-->\n\t\t\t\t<!--put recommended tags here-->\n\t\t\t</div>\n\t\t\t<div id="diigolet-bm-tagListContainer-group" class="diigo-su-tag">\n\t\t\t\t<a href="javascript:void(0)">Group dictionary:</a>\n\t\t\t\t<div class="loading"></div>\n\t\t\t\t<!--put group tags here-->\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="Diigo-Bookmark-Tag-Cloud">\n\t\t\t<div>\n\t\t\t\tSelect from your top 100 tags:\n\t\t\t\t<a href="#" id="Diigo-Bookmark-Tag-Eidt" target="_blank">Edit tags &gt;&gt;</a>\n\t\t\t</div>\n\t\t\t<div id="Diigo-Bookmark-Tag-Cloud-Container">\n\t\t\t\t<!-- put tag cloud items here-->\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="diigo-list-group">\n\t\t\t<div id="diigo-group"><select>\n\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="Diigo-Bookmark-bottom">\n\t\t<div id="Diigo-Bookmark-checkShareExisting">\n\t\t\t<div class="op-checkbox-container checked">\n\t\t\t\t<div class="op-checkbox"></div>\n\t\t\t\t<div class="op-label">Share my existing annotations</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="diigolet-dlgBm-btnSave">Save</div>\n\t\t<a id="diigolet-dlgBm-btnCancel">cancel</a>\n\t</div>\n</div>\n',
      POST_TO_TWITTER:
        '\n<div id="diigolet-twitter" class="diigolet">\n\t<table width="100%" border="0" cellspacing="4" cellpadding="2">\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<img width="210px" height="49px" src="https://assets3.twitter.com/images/twitter.png"/>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><p>Share this bookmark with friends on Twitter</p></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<fieldset>\n\t\t\t\t\t<legend>Input your message</legend>\n\t\t\t\t\t<textarea id="message-editor" onkeyup="diigolet.handle(event, \'OnTwitterMsgChange\')" style="margin-top:5px;margin-bottom:5px;width:361px;height:113px;"></textarea>\n\t\t\t\t\t<span style="margin-right:5px" id="left-count">51</span>characters left\n\t\t\t\t</fieldset>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan="2" style="text-align: right;">\n\t\t\t\t<input type="button" class="diigo-button" onclick="return diigolet.handle(event, \'TwitterPost\')" value="Post"/>\n\t\t\t\t<input type="button" class="diigo-button" onclick="return diigolet.handle(event, \'TwitterCancel\')" value="Cancel" style="font-weight:normal"/>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</div>\n',
      HTML_DLG_IC:
        '\n<div id="diigolet-dlg-sticky" style="position: absolute;left: 100px;top:100px;" class="diigolet diigoletFN yellow">\n    <div id="diigolet-dlg-sticky-top" class="_dragHandle">\n        <span id="diigolet-dlg-sticky-close"></span>\n       <span id="diigolet-dlg-sticky-color">\n           <div id="diigolet-dlg-sticky-currentColor" title="change color"></div>\n           <div id="diigolet-dlg-sticky-colorPicker">\n               <b  color="yellow" id="diigolet-dlg-yellow" class="dlg-colorItem colorchecked"><b></b></b>\n               <b  color="blue" id="diigolet-dlg-blue" class="dlg-colorItem"><b></b></b>\n               <b  color="green" id="diigolet-dlg-green" class="dlg-colorItem"><b></b></b>\n               <b  color="pink" id="diigolet-dlg-pink" class="dlg-colorItem"><b></b></b>\n           </div>\n       </span>\n        <span id="diigolet-dlg-sticky-addTab"></span>\n    </div>\n    <div id="diigolet-dlg-sticky-content" class="private">\n        <div id="diigolet-dlg-sticky-switcher">\n            <span class="FN-switcher" id="FN-switcher-private"><b></b>Private</span>\n            <span class="FN-switcher" id="FN-switcher-group"><b></b>Group</span>\n        </div>\n        <div class="FN-content-wrapper private">\n            <textarea id="FN-private-editor" placeholder="Input here..."></textarea>\n            <div id="FN-content-footer">\n                <div id="editDone">\n                    <span id="FN-private-delete"><b></b></span>\n                    <span id="FN-private-datetime"></span>\n                </div>\n                <div id="editing">\n                    <a href="javascript:void(0)" id="FN-private-saveBtn">Save</a>\n                    <a href="javascript:void(0)" id="FN-private-cancelBtn">Cancel</a>\n                </div>\n            </div>\n        </div>\n        <div class="FN-content-wrapper group">\n            <!--END-FN-post-form-->\n            <div>\n                <div id="FN-group-content-nav">\n                    <span id="FN-current-group"><span>+Share to a new group</span>\n                        <b></b>\n                    </span>\n                    <div id="FN-group-menu">\n                        <ul id="FN-group-ul">\n                        </ul>\n                        <ul id="FN-group-share-new-ul">\n                            <li id="FN-group-share-new">+Share to a new group</li>\n                        </ul>\n                    </div>\n                </div>\n                <div id="FN-post-form" class="">\n                    <div>\n                        <textarea id="FN-group-post" placeholder="write a comment..."></textarea>\n                    </div>\n                    <div>\n                        <select id="FN-group-share">\n                            <option>Choose a group</option>\n                            <option>test</option>\n                        </select>\n                        <button>\n                            <span class="button-label">Post</span>\n                            <span class="button-spinner"></span>\n                        </button>\n                        <a href="javascript:void(0)">Cancel</a>\n                    </div>\n                </div>\n                <div id="FN-group-content">\n                    <div id="FN-group-content-container">\n                    </div>\n                    <div id="FN-group-content-postform">\n                        <textarea placeholder="Write a comment..."></textarea>\n                        <div class="post-action">\n                            <button>\n                                <span class="button-label">Post</span>\n                                <span class="button-spinner"></span>\n                            </button>\n                            <a href="javascript:void(0)">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n',
      HTML_SIDEBAR:
        '\n\t<div class="diigolet d3df themeDefault" id="d3df-sidebar">\n\t\t<div class="heading bgColor1 _dragHandle" style="zoom:1;border:none;">\n\t\t<a href="#{URL_DIIGO}" style="background: transparent url(https://www.diigo.com/javascripts/webtoolbar/images/diigoletIconv1.gif) no-repeat scroll left -4px; padding-left: 20px; float:left">\n\t\tDiigo</a>\n\t\t<a class="_signIn" target="_blank" href="#{DIIGO_UPLOAD_SERVER}/sign-in?f=diigolet" title="Sign in into diigo.com" style="float:left;margin-left:10px" onmousedown="return diigolet.handle(event, \'tb_signIn\')">sign in</a>\n\t\t<div style="float: right;" title="Pop out and pin" class="popOut" onclick="diigolet.devil(\'Sidebar\').popOut();"></div>\n\t\t<div style="clear:both"></div>\n\t\t</div>\n\t\t<div class="heading bgColor1 color2">\n\t\t\t<a id="d3df-togglePanelInline" class="togglePanel" href="#" onclick="diigolet.devil(\'Sidebar\').togglePanel(\'inline\');return false;"></a>\n\t\t\t<a class="add" href="#" onclick="diigolet.devil(\'Sidebar\').addInlineComment();return false;">+Add</a>\n\t\t\t<p><span class="_inlineCommentsTitle">Inline Comments</span>(<span class="_inlineCommentCount">0</span>)</p>\n\t\t</div>\n\t\t<ul id="d3df-inlineCommentBox" class="highlights  bgColor2" style="overflow:auto">\n\n\t\t</ul>\n\t\t<div class="heading bgColor1">\n\t\t<a id="d3df-togglePanelPage" class="togglePanel" href="#" onclick="diigolet.devil(\'Sidebar\').togglePanel(\'page\');return false;"></a>\n\t\t<a class="add" href="#" onclick="diigolet.devil(\'Sidebar\').showEditPageCommentBox();return false;">Add</a>\n\t\t<p>Page Comments(<span class="_pageCommentCount">0</span>)</p>\n\t\t</div>\n\t\t<div id="d3df-pageCommentBox" class=" bgColor1">\n\t\t<div class="addComment">\n\t\t\t<select id="diigolet-sb-selpc" style="margin-left:5px"></select>\n\t\t\t<textarea id="diigolet-sb-txtpc" name="txtComment" rows="4" style="margin:5px;width:90%"></textarea>\n\t\t\t<div style="margin:5px">\n\t\t\t\t<input class="diigo-button" type="button" value="Post" onclick="diigolet.devil(\'Sidebar\').addCommentSubmit()"/>\n\t\t\t\t<input class="diigo-button" type="button" value="Cancel" onclick="diigolet.devil(\'Sidebar\').showEditPageCommentBox(false);"/>\n\t\t\t</div>\n\t\t</div>\n\t\t<ul id="d3df-pageCommentList" class="comments" style="overflow:auto">\n\n\t\t</ul>\n\t\t</div>\n\t</div>\n',
      HTML_3DF_SIDEBAR_PAGE_COMMENT:
        '\n\t\t\t<li class="bgColor3"><a class="avatar" href="#{DIIGO_URL}/user/#{USER}" title="#{USER}" target="_blank">\n\t\t\t<img alt="#{USER}" src="https://resources.diigo.com/resources_mana/user_avatar?user_name=#{USER}&amp;size=48" /></a>\n\t\t\t<span class="commentInfo color1">\n\t\t\t<a href="#{DIIGO_URL}/user/#{USER}" target="_blank" class="color1">#{USER} </a>#{DATE}\n\t\t\t</span >\n\t\t\t<p class="labelList">#{LABELS_HTML}</p>\n\t\t\t<p class="commentBody color2">#{CONTENT}</p>\n\t\t\t</li>\n',
      HTML_3DF_SIDEBAR_INLINE_COMMENT:
        '\n\t\t\t<li class="bgColor3"><a class="avatar" href="#{DIIGO_URL}/user/#{USER}" title="#{USER}" target="_blank">\n\t\t\t<img alt="#{USER}" src="https://resources.diigo.com/resources_mana/user_avatar?user_name=#{USER}&amp;size=48" /></a>\n\t\t\t<span class="commentInfo color1">\n\t\t\t<a href="#{DIIGO_URL}/user/#{USER}" target="_blank" class="color1">#{USER} </a>#{DATE}\n\t\t\t</span >\n\t\t\t<p class="commentBody"><a class="color2" href="#" onclick="diigolet.devil(\'Sidebar\').jumpToHighlight(\'#{HIGHLIGHT_ID}\');return false;">#{CONTENT}</a></p>\n\t\t\t</li>\n',
      HTML_3DF_SIDEBAR_NO_COMMENTS:
        '\n\t\t\t<li class="bgColor3 color1">\n\t\t\t\t<div class="noComments">No comments yet</div>\n\t\t\t</li>\n',
      HTML_3DF_SIDEBAR_HIGHLIGHT:
        '\n\t\t<li class="highlight">\n\t\t<a class="highlight headingColor2 #{FLOAT_NOTE_CLASS}" href="#" onclick="diigolet.devil(\'Sidebar\').jumpToHighlight(\'#{ID}\');return false;">\n\t\t<span class="jumpTo color1" style="float:right">...Jump to</span>\n\t\t<em style="font-style:italic;line-height:24px;width:80%;" class="color2">#{CONTENT}</em>\n\t\t</a>\n\t\t<ul class="comments bgColor1">#{COMMENTS}\n\n\t\t</ul>\n\t\t</li>\n',
      HTML_CONTEXT_MENU:
        '\n<div id="diigolet-csm">\n\t<div id="diigolet-csm-research-mode"></div>\n\t<div id="diigolet-csm-highlight-wrapper" class="csm-btn">\n\t\t<a id="diigolet-csm-highlight" class="csm-action" href="javascript:void(0);" title="Highlight">\n\t\t\t<b></b>\n\t\t</a>\n\t\t<div class="diigolet-csm-color small hidden">\n\t\t\t<!--<a class="diigolet-csm-coloritem yellow" data-color="yellow"></a>-->\n\t\t\t<a class="diigolet-csm-coloritem blue" data-color="blue"></a>\n\t\t\t<a class="diigolet-csm-coloritem green" data-color="green"></a>\n\t\t\t<a class="diigolet-csm-coloritem pink" data-color="pink"></a>\n\t\t</div>\n\t</div>\n\t<div id="diigolet-csm-highlightAndComment-wrapper" class="csm-btn" title="Highlight and Comment">\n\t\t<a id="diigolet-csm-highlightAndComment" class="csm-action" href="javascript:void(0);">\n\t\t</a>\n\t\t<div class="diigolet-csm-color small hidden">\n\t\t\t<a class="diigolet-csm-coloritem yellow" data-color="yellow"></a>\n\t\t\t<a class="diigolet-csm-coloritem blue" data-color="blue"></a>\n\t\t\t<a class="diigolet-csm-coloritem green" data-color="green"></a>\n\t\t\t<a class="diigolet-csm-coloritem pink" data-color="pink"></a>\n\t\t</div>\n\t</div>\n\t<a id="diigolet-csm-copy" class="csm-action" href="javascript:void(0);" title="Copy">\n\t</a>\n</div>\n',
      HTML_ANN_MENU:
        '\n<div id="diigolet-annMenu" class="diigolet diigoletContexMenu">\n\t<div id="diigolet-annMenu-color" class="diigolet-annMenu-item _onlyMy" title="Change color">\n\t\t<b id="diigolet-annMenu-currentColor" title="Change color"><b></b></b>\n\t\t<div id="diigolet-annMenu-colorPicker">\n\t\t\t<b id="diigolet-context-yellow" color="yellow" class="ann-colorItem"><b></b></b>\n\t\t\t<b id="diigolet-context-blue" color="blue" class="ann-colorItem"><b></b></b>\n\t\t\t<b id="diigolet-context-green" color="green" class="ann-colorItem"><b></b></b>\n\t\t\t<b id="diigolet-context-pink" color="pink" class="ann-colorItem"><b></b></b>\n\t\t</div>\n\t</div>\n\t<div id="diigolet-annMenu-add" class="diigolet-annMenu-item" title="Add a sticky note"><b></b></div>\n\t<div id="diigolet-annMenu-share" class="diigolet-annMenu-item" title="Share"><b></b></div>\n\t<div id="diigolet-annMenu-copy" class="diigolet-annMenu-item" title="Copy"><b></b></div>\n\t<div id="diigolet-annMenu-del" class="diigolet-annMenu-item _onlyMy" title="Delete"><b></b></div>\n\t<div id="diigolet-annMenu-more" class="diigolet-annMenu-item" title="more action"><b></b></div>\n\t<div id="diigolet-annMenu-arrow"></div>\n\t<div id="diigolet-annMenu-moreThings">\n\t\t<ul>\n\t\t\t<li><a href="javascript:void(0)" id="diigolet-annMenu-My">View in My Library</a></li>\n\t\t\t<!--<li><a href="javascript:void(0)" id="diigolet-annMenu-copy-highlights">Copy this highlight</a></li>-->\n\t\t\t<li id="diigolet-annMenu-tip"></li>\n\t\t</ul>\n\t</div>\n</div>\n',
      HTML_FLOAT_NOTE:
        '\n<div class="diigolet floatNote diigoshow"><span>10</span></div>\n',
      HTML_HIGHLIGHT_SHARE_WINDOW:
        '\n<div id="diigolet-highlight-share" class="diigolet">\n\t<div id="diigolet-highlight-share-top" class="_dragHandle">\n\t\t<span>Link to this highlight</span>\n\t\t<b class="diigolet-question-mark"><b class="diigolet-question-mark-tip">The special link below will take people straight to this highlight.\n\t\t</b></b>\n\t\t<!--<div id="diigolet-highlight-share-close"></div>-->\n\t</div>\n\t<div id="diigolet-highlight-container">\n\t\t<div id="diigolet-highlight-main">\n\t\t\t<textarea name="diigolet-highlight-share" id="diigolet-highlight-share-textarea"></textarea>\n\t\t</div>\n\t\t<div id="diigolet-highlight-footer" class="clearfloat">\n\t\t\t<a href="javascript:void(0)" id="diigolet-highlight-share-copybtn">Copy</a>\n\t\t\t<a href="javascript:void(0)" id="diigolet-highlight-share-cancelbtn">Cancel</a>\n\t\t\t<a href="javascript:void(0)" id="diigolet-highlight-share-twitter" class="diigolet-highlight-social-btn" title="share to twitter"></a>\n\t\t\t<a href="javascript:void(0)" id="diigolet-highlight-share-facebook" class="diigolet-highlight-social-btn" title="share to facebook"></a>\n\t\t\t<span id="diigolet-highlight-share-copySuccess">Copied successfully!</span>\n\t\t</div>\n\t</div>\n</div>\n',
      HTML_ORPHAN_HIGHLIGHT_WINDOW:
        '\n<div id="diigo-orphanHighlight">\n\t<div id="diigo-orphanHighlight-top" class="_dragHandle">\n\t\t<span>The current page no longer contains the following highlights</span>\n\t\t<!--<b class="diigolet-question-mark"><b class="diigolet-question-mark-tip">Even if the page you did highlight before has changed, you can still see your highlights.\n        </b></b>-->\n\t\t<div id="diigo-orphanHighlight-close"></div>\n\t</div>\n\t<div id="diigo-orphanHighlight-main">\n\t\t<div id="diigo-orphanHighlight-notification">Added to clipboard</div>\n\t\t<div id="diigo-orphanHighlight-box" class="diigo-customize-scrollbar">\n\t\t</div>\n\t</div>\n</div>\n',
      HTML_ANNOTATION_LIST_WINDOW:
        '\n<div id="diigo-annotationList">\n\t<div id="diigo-annotationList-top" class="_dragHandle">\n\t\t<b></b>\n\t\t<span>Annotations</span>\n\t\t<div id="diigo-annotationList-close"></div>\n\t</div>\n\t<div id="diigo-annotationList-main">\n\t\t<div id="diigo-annotationList-notification">Added to clipboard</div>\n\t\t<div id="diigo-annotationList-box" class="diigo-customize-scrollbar">\n\t\t</div>\n\t</div>\n\t<div id="diigo-annotationList-toolbar">\n\t\t<span><b class="diigo-orphan-warning"></b> designates  highlighted text now missing from the page.</span>\n\t\t<a id="diigo-annotationList-copyall" href="#">Copy all</a>\n\t</div>\n</div>\n',
      HTML_ANN: "",
      HTML_COMMENT: "",
      HTML_DLG_SHARE:
        '\n<div id="diigolet-dialog-share" class="diigolet">\n\t<div id="diigolet-dialog-share-title" class="_dragHandle">\n\t\t<a id="diigolet-dialog-share-closeBtn" href="javascript:void(0);"></a>\n\t\t<span>Share - Diigo</span>\n\t</div>\n\t<div id="diigolet-diglog-tabs">\n\t\t<ul id="diigolet-share-shareToTabs">\n\t\t\t<li class="shareToTwitter"><a id="diigolet-share-tab-twitter" diigotab="twitter" href="javascript:void(0)"><b>&#160;</b>Twitter</a></li>\n\t\t\t<li class="shareToFacebook"><a id="diigolet-share-tab-facebook" diigotab="facebook" href="javascript:void(0)"><b>&#160;</b>Facebook</a></li>\n\t\t\t<li class="shareToGplus"><a id="diigolet-share-tab-gPlus" diigotab="gPlus" href="javascript:void(0)"><b>&#160;</b>Google+</a></li>\n\t\t\t<li class="shareToEmail"><a id="diigolet-share-tab-email" diigotab="email" href="javascript:void(0)"><b>&#160;</b>Email</a></li>\n\t\t\t<li class="getAnnotatedLink"><a id="diigolet-share-tab-annotatedLink" diigotab="annotatedLink" href="javascript:void(0)"><b>&#160;</b>Annotated Link</a></li>\n\t\t</ul>\n\t</div>\n\t<div id="diigolet-dialog-share-content">\n\t\t<div id="diigolet-dialog-share-twitter" style="display:none;">\n\t\t\t<p class="twitterDesc"><b id="diigolet-share-twitterLeftChars">20</b>Share this bookmark with friends on Twitter</p>\n                <textarea id="diigolet-dialog-share-twitterMsg" class="inputTxt">\n                FTA - Main page | FTA - Free Technology Academy https://bit.ly/d4OiXQ via www.diigo.com/~soraya\n                </textarea>\n\t\t\t<div class="buttonRow clearfloat">\n\t\t\t\t<div style="float:left">\n\t\t\t\t\t<a href="https://www.twitter.com/diigo"><img src="./images/follow-us.png" alt="Follow diigo on Twitter" align="absmiddle"/></a>\n\t\t\t\t</div>\n                    <span id="diigolet-dialog-share-twitter-signInStatus"><span id="diigolet-dialog-share-twitter-signedIn">Signed in as <span></span> <a href="#">(not you?)</a></span>\n                    <a id="diigolet-dialog-share-twitter-notSignedIn" href="#">Click here to connect to twitter</a></span>\n\t\t\t\t<!--<input type="button" value="Cancel" />\n                <input class="defaultAction diigoBtn" type="button" value="Send" />-->\n\t\t\t\t<a href="javascript:void(0)" id="diigolet-twitter-saveBtn" class="diigoBtn">Send</a>\n\t\t\t\t<a href="javascript:void(0)" id="diigolet-twitter-cancelBtn">Cancel</a>\n\t\t\t</div>\n\t\t</div><!--twitter-->\n\t\t<div id="diigolet-dialog-share-facebook" style="display:none;">\n\t\t\tPlease finish sharing in the popup window.\n\t\t</div><!--facebook-->\n\t\t<!-- <div id="diigolet-dialog-share-gBuzz" style="display:none">\n            <iframe src="https://www.google.com/reader/link?url=https://www.google.com/&title=Google">\n            </iframe>\n            <iframe name="diigolet-GR________link_bookmarklet_frame"></iframe>\n        </div> --><!--Google Buzz-->\n\t\t<div id="diigolet-dialog-share-gPlus" style="display:none;">\n\t\t\tPlease finish sharing in the popup window.\n\t\t</div><!--facebook-->\n\t\t<div id="diigolet-dialog-share-email" style="display: none">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t<tr><td style="width:60px"><label for="diigolet-dialog-share-email-to">To:</label></td>\n\t\t\t\t\t<td><input id="diigolet-dialog-share-email-to" type="text" class="inputTxt" style="display:none" diigocomment="unused"/>\n\t\t\t\t\t\t<div id="forwardTo" class="autocompleteContacts"></div></td></tr>\n\t\t\t\t<tr><td><label for="diigolet-dialog-share-email-subject">Subject:</label></td>\n\t\t\t\t\t<td><input id="diigolet-dialog-share-email-subject" type="text" class="inputTxt" /></td></tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<p>\n\t\t\t\t<label id="diigolet-dialog-share-email-quotes-checker" ><input type="checkbox" />Include Quotes</label>\n\t\t\t\t<label for="diigolet-dialog-share-email-message">Message:</label><br/>\n\t\t\t\t<textarea id="diigolet-dialog-share-email-message" class="inputTxt"></textarea>\n\t\t\t</p>\n\t\t\t<div id="diigolet-dialog-share-email-quotes">\n\t\t\t\t<div id="diigolet-aidlog-share-email-quotes-content">\n\t\t\t\t\t<strong>Quotes:</strong>\n\t\t\t\t\t<div style="border-left: 3px solid #ddd;padding-left: 5px;margin-left: 5px;margin-top: 5px;">\n\t\t\t\t\t\t<p> After a 71/2-hour summit, Obama suggested Democrats may go it alone to try to pass an overhaul. By Charles Babington Associated Press WASHINGTON - Giving no ground, President Obama and Republican leaders fought forcefully for their competing visions of </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="buttonRow clearfloat">\n\t\t\t\t<a href="javascript:void(0)" id="diigolet-email-saveBtn" class="diigoBtn">Send</a>\n\t\t\t\t<a href="javascript:void(0)" id="diigolet-email-cancelBtn">Cancel</a>\n\t\t\t</div>\n\t\t</div><!--email-->\n\t\t<div id="diigolet-dialog-share-annotatedLink" style="display:none;">\n\t\t\t<div class="annotatedLinkInfo">\n\t\t\t\t<b>&#160;</b>An Annotated Link is a special URL provided by Diigo that allows you to share the current webpage complete with highlights and sticky notes to anyone.<br/><strong>Copy the URL below </strong>and paste it into your blog, email or IM messages...\n\t\t\t</div>\n\t\t\t<p><input id="diigolet-dialog-share-annotatedLink-value" type="text" class="inputTxt" value="https://www.diigo.com/09ijt" /></p>\n\t\t\t<div class="buttonRow clearfloat">\n                    <span id="diigolet-dialog-share-annotatedLink-optLinks">\n                    <a href="javascript:void(0)" target="_blank">Preview</a><!-- - <a href="javascript:void(0)">Twitter this</a> -->\n                    </span>\n\t\t\t\t<a href="javascript:void(0)" id="diigolet-annotatedLink-saveBtn" class="diigoBtn">Copy</a>\n\t\t\t\t<a href="javascript:void(0)" id="diigolet-annotatedLink-cancelBtn">Cancel</a>\n\t\t\t</div>\n\t\t</div><!--annotated link-->\n\t</div><!--diglog content-->\n</div>\n',
      HTML_CHROME_PANEL:
        '\n<div id="diigolet-panel-panel" class="diigolet notSignedIn">\n\t<div id="diigolet-panel-logo" title="Expand the Annotation Toolbar"></div><!--\n            --><div id="diigolet-panel-main" class="clearfloat">\n\t<div id="diigolet-panel-fold" title="Collapse the Annotation Toolbar"></div>\n\t<div id="diigolet-panel-Highlight" class="diigolet-panel-btn">\n\t\t<div id="diigolet-panel-hightlight-dropdown" title="Select a highlight color">\n\t\t\t<b></b>\n\t\t</div>\n\t\t<div id="diigolet-panel-btnHighlight" title="Select text to highlight or click to turn on a highlighter pen">\n\t\t\t<b></b>\n\t\t</div>\n\t\t<ul id="diigolet-panel-colorPicker">\n\t\t\t<div id="diigolet-panel-colorPicker-arrow"></div>\n\t\t\t<li diigocolor=\'yellow\' class="yellow">\n                            <span>\n                                <b></b>\n                            </span>\n\t\t\t\tYellow\n\t\t\t</li>\n\t\t\t<li diigocolor=\'blue\' class="blue">\n                            <span>\n                                <b></b>\n                            </span>\n\t\t\t\tBlue\n\t\t\t</li>\n\t\t\t<li diigocolor=\'green\' class="green">\n                            <span>\n                                <b></b>\n                            </span>\n\t\t\t\tGreen\n\t\t\t</li>\n\t\t\t<li diigocolor=\'pink\' class="pink">\n                            <span>\n                                <b></b>\n                            </span>\n\t\t\t\tPink\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div id="diigolet-panel-btnStickyNote" class="diigolet-panel-btn" title="Add sticky note">\n\t\t<b></b>\n\t</div>\n\t<div id="diigolet-panel-btnBookmark" class="diigolet-panel-btn" title="Save to Diigo">\n\t\t<b></b>\n\t</div>\n\t<div id="diigolet-panel-btnAnnotationList" class="diigolet-panel-btn" title="Show annotations list on this page">\n\t\t<b></b>\n\t</div>\n</div><!----><div id="diigolet-panel-space"></div>\n</div>\n<!--panel-->\n',
      MSG_HIGHLIGHT_LENGTH:
        "The number of highlighted non white space characters needs to be between 5 and 2000. Please select some text and try again.",
      MSG_HOMEPAGE_RESTRICTION:
        "To minimize graffiti, highlight and sticky notes are not allowed on homepages of websites. You can still use page comments however.",
      MSG_LOADING: "Loading...",
      MSG_COMMENT_CANNOT_BE_EMPTY: "Please input content.",
      MSG_NEED_TO_SIGNIN:
        'Please <a target="_blank" href="https://secure.diigo.com/sign-in?f=diigolet" title="Sign in into diigo.com" onmousedown="return diigolet.handle(event, \'tb_signIn\')">sign in</a> first.',
      MSG_NO_COMMENTS: "There are no public comments on this page.",
      MSG_HIGHLIGHT_NOT_FOUND:
        "No corresponding text is found on the page. This page has probably been changed since you highlighted it.",
      MSG_HIGHLIGHT_TOO_LONG: "Too many words in one highlight.",
      MSG_COMMENT_TOO_LONG: "Too many words in one comment.",
      MSG_UPLOADING:
        "Uploading this page to Diigo. You can continue with your browsing.",
      DIIGO_SERVER: "https://www.diigo.com",
      DIIGO_DATA_SERVER: "https://toolbar3.diigo.com",
      DIIGO_GROUP_SERVER: "https://groups.diigo.com",
      DIIGO_UPLOAD_SERVER: "https://secure.diigo.com",
      ID_TOOLBAR: "#diigolet-toolbar",
      ID_TRAY: "#diigolet-tray",
      ID_DLG_BOOKMARK: "#diigolet-tagForward",
      ID_DLG_IC: "#diigolet-dlg-sticky",
      ID_CONTEXT_MENU: "#diigolet-contexMenu",
      ID_NOTIFY: "#diigolet-notify",
      PRIVACY_MODE_PUBLIC: 0,
      PRIVACY_MODE_PRIVATE: 2,
      PRIVACY_MODE_GROUP: 3,
      BOOKMARK_TYPE_WEBPAGE: 1,
      BOOKMARK_TYPE_IMAGE: 2,
      BOOKMARK_TYPE_FLASH: 3,
      BOOKMARK_TYPE_VIDEO: 4,
      BOOKMARK_TYPE_LIST: 10,
      ANNOTATION_TYPE_TEXT: 0,
      ANNOTATION_TYPE_IMAGE: 1,
      ANNOTATION_TYPE_FLOATNOTE: 2,
      ANNOTATION_TYPE_FLASH: 3,
      ANNOTATION_TYPE_VIDEO: 4,
      ANNOTATION_TYPE_CLIP: 5,
      ANNOTATION_TYPE_ICON: 9,
    };
    x.urls = {
      getUserBookmarksPageURL: function (a) {
        return diigolet.consts.DIIGO_SERVER + "/user/" + (a || k.user);
      },
      getCreateGroupURL: function () {
        return diigolet.consts.DIIGO_GROUP_SERVER + "/create";
      },
      getCreateListURL: function () {
        return diigolet.consts.DIIGO_SERVER + "/bookmark_list/new_list";
      },
      getGroupURL: function (a) {
        var c = diigolet.consts.DIIGO_GROUP_SERVER;
        return a ? c + "/groups/" + a : c;
      },
      getPremiumURL: function () {
        return diigolet.consts.DIIGO_SERVER + "/premium";
      },
      getGroupHome: function () {
        return diigolet.consts.DIIGO_GROUP_SERVER + "/user/" + k.user;
      },
      getListHome: function () {
        return diigolet.consts.DIIGO_SERVER + "/list/" + k.user;
      },
      getNetwork: function () {
        return diigolet.consts.DIIGO_SERVER + "/network/" + k.user;
      },
      getSignout: function () {
        return diigolet.consts.DIIGO_SERVER + "/sign-out";
      },
      getHotBookmark: function () {
        return diigolet.consts.DIIGO_SERVER + "/buzz/hot";
      },
      getSearchUrl: function (a) {
        return (
          diigolet.consts.DIIGO_SERVER +
          "/search/g?cx=!partner-pub-7625644023173335%3Agqffh9-8lvc&cof=FORID%3A11&ie=UTF-8&q=" +
          encodeURIComponent(a) +
          "&sa=Search#985"
        );
      },
      getUserHomepageURL: function (a) {
        return this.getUserProfileURL(a);
      },
      getUploadURL: function () {
        return diigolet.consts.DIIGO_UPLOAD_SERVER + "/upload/index?";
      },
      getUploadMD5Check: function () {
        return diigolet.consts.DIIGO_UPLOAD_SERVER + "/upload/before?";
      },
      getUserProfileURL: function (a) {
        a = a || k.user;
        return diigolet.consts.DIIGO_SERVER + "/profile/" + a;
      },
    };
    x.handlers = {
      tb_showDropDownMenu: function (a, c) {
        if (da()) {
          $("#diigolet-help,#diigolet-toolbar .dropdownMenu").hide();
          if (!(c == "#diigolet-tb-signInMenu" && ia())) {
            var d = $(a.target);
            d = d.add(d.parents("a")).filter(".diigoletButton");
            if ($.browser.msie) {
              tbar = $("#diigolet-toolbar");
              ra($(c).css({ left: d.offset().left, top: 25 }).show());
            } else ra($(c).css({ left: d.offset().left }).show());
          }
        }
      },
      tb_viewComments: function () {
        X.popOut({ top: 35, left: 3 });
      },
      tb_signIn: function (a) {
        if ($.browser.chrome && typeof document.webkitHidden != "undefined")
          return false;
        else if ($.browser.mozilla && typeof document.mozHidden != "undefined")
          return false;
        a.stopPropagation();
        a.preventDefault();
        ia() ? C.signOut() : C.signIn();
        $(a.target).click(function () {
          return false;
        });
        return false;
      },
      hideToolbar: function () {
        H.hide();
      },
      showHelp: function () {
        $("#diigolet-toolbar .dropdownMenu").hide();
        if ($.browser.msie && $.browser.version >= 9) {
          tbar = $("#diigolet-toolbar");
          ra(
            H.jHelpTip
              .css({ top: tbar.offset().top + tbar.height() - 5 })
              .show()
          );
        } else ra(H.jHelpTip.show(), 500);
      },
      hideHelp: function () {
        $("#diigolet-help").hide();
      },
      mouseOnBorder: function () {
        H.show();
      },
      OnTwitterMsgChange: function () {},
      bookmark: function () {
        if (da()) R.shown ? R.hide() : R.show();
      },
      readlater: function () {
        if (da())
          if (k.bookmark.unread == true)
            H.notify("This page has already been put into Reading List.", 2e3);
          else {
            k.bookmark.unread = true;
            C.saveBookmark(null, function () {});
            $("#diigolet-tb-btnReadlater b b").toggleClass("doing");
          }
      },
      overHighlight: function () {
        if (!k.isHighlightPen) {
          $("#diigolet-button-highlight").toggleClass(k.mouseClass, true);
          $("#diigolet-button-highlight-dropdown").toggleClass(
            k.mouseClass,
            true
          );
        }
      },
      outHighlight: function () {
        if (!k.isHighlightPen) {
          $("#diigolet-button-highlight").toggleClass(k.mouseClass, false);
          $("#diigolet-button-highlight-dropdown").toggleClass(
            k.mouseClass,
            false
          );
        }
      },
      dropDownColorMenu: function () {
        $("#diigolet-help,#diigolet-toolbar .dropdownMenu").hide();
        var a = $("#diigolet-button-highlight");
        $.each(k.defaultColor, function (c, d) {
          K("diigolet-colorMenu-" + d).toggleClass("colorchecked", false);
        });
        k.penColor && k.penColor.length > 0
          ? K("diigolet-colorMenu-" + k.penColor).toggleClass(
              "colorchecked",
              true
            )
          : K("diigolet-colorMenu-yellow").toggleClass("colorchecked", true);
        $.browser.msie && $.browser.version >= 9
          ? ra(
              $("#diigolet-tb-colorMenu")
                .css({
                  left: a.offset().left,
                  top: $(document).scrollTop() + 25,
                })
                .show()
            )
          : ra(
              $("#diigolet-tb-colorMenu").css({ left: a.offset().left }).show()
            );
      },
      sharetoTwitter: function (a) {
        var c = k.bookmark;
        k.permalinkURL.length <= 0 &&
        (k.pageComments.length > 0 || k.annotations.length > 0)
          ? C.makeAnnotatedLink(c.url, 3, function (d) {
              if (d.result && d.result.url) {
                k.permalinkURL = d.result.url;
                diigolet.handle(a, "diigoTwitterit");
              }
            })
          : diigolet.handle(a, "diigoTwitterit");
      },
      diigoTwitterit: function () {
        if (da()) {
          var a = k.bookmark;
          k.permalinkURL && k.permalinkURL.length > 0
            ? window.open(
                "https://twitter.com/share?url=" +
                  encodeURIComponent(k.permalinkURL) +
                  "&via=&text=" +
                  encodeURIComponent(a.getTitle()) +
                  "&related=diigo",
                "Sharer",
                "toolbar=0,status=0,width=580,height=320,chrome=yes,centerscreen"
              )
            : window.open(
                "https://twitter.com/share?url=" +
                  encodeURIComponent(a.url) +
                  "&via=Diigo&text=" +
                  encodeURIComponent(a.getTitle()) +
                  "&related=diigo",
                "Sharer",
                "toolbar=0,status=0,width=580,height=320,chrome=yes,centerscreen"
              );
        }
      },
      shareToFaceBook: function (a) {
        k.permalinkURL.length <= 0 &&
        (k.pageComments.length > 0 || k.annotations.length > 0)
          ? C.makeAnnotatedLink(bm.url, 3, function (c) {
              if (c.result && c.result.url) {
                k.permalinkURL = c.result.url;
                diigolet.handle(a, "diigoFacebook");
              }
            })
          : diigolet.handle(a, "diigoFacebook");
      },
      diigoFacebook: function () {
        if (da()) {
          var a = k.bookmark;
          k.permalinkURL && k.permalinkURL.length > 0
            ? window.open(
                "https://www.facebook.com/sharer.php?u=" +
                  encodeURIComponent(a.url) +
                  "&t=" +
                  encodeURIComponent(a.getTitle()),
                "sharer",
                "toolbar=0,status=0,width=626,height=436,chrome=yes,centerscreen"
              )
            : window.open(
                "https://www.facebook.com/sharer.php",
                "sharer",
                "toolbar=0,status=0,width=626,height=436,chrome=yes,centerscreen"
              );
        }
      },
      shareByEmail: function () {
        V.show();
      },
      getAnnotatedLink: function () {
        V.show("annotatedLink");
      },
      uploadCache: function () {
        H.notify(diigolet.consts.MSG_UPLOADING, 1e4, 2);
        var a = k.bookmark;
        C.uploadCacheCheckbf(a, 2, function (c) {
          a.batchId = c.batch_id;
          if (c.code == 2) H.notify("Upload Succeeded", 5e3, 2);
          else
            c.code == 0
              ? H.notify(
                  c.msg && c.msg.length > 0
                    ? c.msg
                    : "Your upload failed. Please try again later.",
                  1e4,
                  3
                )
              : C.uploadIndex(a.urlId, a.batchId, function () {
                  $(diigolet.consts.ID_NOTIFY).hide();
                  var d = $("#diigotlet_upload");
                  d.show();
                  setTimeout(function () {
                    d.hide();
                    d.remove();
                  }, 5e3);
                });
        });
      },
      bmOnSubmitAndClose: function () {
        R.submitAndClose();
      },
      bmCancel: function () {
        R.hide(true);
      },
      highlight: function (a, c, d) {
        if (da()) {
          a = L.checkSelection();
          if (a.ok) {
            N("[highlight] Making a text highlight");
            var f = I.add(
              {
                user: k.user,
                realName: k.realName,
                content: a.html,
                type: diigolet.consts.ANNOTATION_TYPE_TEXT,
                nth: a.nth,
              },
              {},
              c,
              d
            );
            console.log("user:" + k);
            f.type == diigolet.consts.ANNOTATION_TYPE_TEXT &&
              chrome.runtime.sendMessage({
                name: "addAnnotation",
                annotation: f,
              });
            $.browser.msie && document.selection.empty();
          } else a.pen ? diigolet.handle(true, "TogglePen") : H.notify(a.msg);
          window.parent &&
            window.parent.postMessage({ type: "highlight" }, "*");
          return f;
        }
      },
      TogglePen: function () {
        var a = (k.isHighlightPen = !k.isHighlightPen);
        N("[highlight] togglePen", a);
        U.onHighlightPenModeChanged(a);
        var c = $(document.body);
        c.removeClass(
          W(k.defaultColors, function (d) {
            return "diigoHiPen-" + d;
          }).join(" ")
        );
        a && c.addClass("diigoHiPen-" + k.penColor);
      },
      toggleAnnotationList: function () {
        za.shown ? za.hide() : za.show();
      },
      ChangeColor: function (a, c) {
        k.penColor = c;
        U.onHighlightColorChanged(c, true);
        Y.changeColor(c);
        k.isHighlightPen &&
          $(document.body)
            .removeClass(
              W(k.defaultColors, function (d) {
                return "diigoHiPen-" + d;
              }).join(" ")
            )
            .addClass("diigoHiPen-" + k.penColor);
      },
      highlightAndComment: function (a) {
        var c = x.handle(a, "highlight");
        c && c.jumpHere(false, true, a);
      },
      showHideHighlight: function () {
        k.toggleSilent();
      },
      goPremium: function () {
        window.open(x.urls.getPremiumURL(), "_blank");
      },
      addStickyNote: function () {
        !da() ||
          B.editing ||
          I.add(
            {
              user: k.user,
              realName: k.realName,
              content: "",
              type: diigolet.consts.ANNOTATION_TYPE_FLOATNOTE,
            },
            { dontSave: true }
          ).jumpHere(false, true);
      },
      hlmenu_mousedown: function () {
        return $.browser.opera;
      },
      dlgIC_del_ic: function (a, c, d) {
        B.onclick_del_ic(a, c, d);
      },
      sb_del_pc: function (a, c, d) {
        X.onclick_del_pc(a, c, d);
      },
    };
    x.handle = function (a, c) {
      a = $.event.fix(a || window.event);
      a.preventDefault();
      return x.handle2.apply(null, [c, a].concat([].slice.call(arguments, 2)));
    };
    x.handle2 = function (a) {
      var c = [].slice.call(arguments, 1);
      return x.handlers[a].apply(null, c);
    };
    var ya = false,
      Ga = false,
      k = (window.Ctx = {
        isBookmarkLoaded: false,
        isOwner: true,
        keywords: [],
        orphanHighlights: [],
        isCommented: function () {
          return this.isAnnotated();
        },
        isAnnotated: function () {
          return (
            this.bookmark.annotated ||
            this.pageComments.length > 0 ||
            this.annotations.length > 0
          );
        },
        toggleSilent: function (a) {
          a = a === undefined ? !this.silent : a;
          if (a != this.silent)
            (this.silent = a)
              ? this.unpaintAllAnnotations()
              : this.paintAllAnnotations();
        },
        launchMode: {
          normal: diigoletLaunchMode == 0,
          permalink: diigoletLaunchMode == 3,
          pagePlayer: diigoletLaunchMode == 5,
          cachePage: diigoletLaunchMode == 7,
        },
        resetData: function () {
          M(this, {
            user: "",
            userId: null,
            realName: "",
            userLevel: 0,
            isHighlightPen: false,
            penColor: "yellow",
            mouseClass: "mouseovered",
            defaultColors: ["yellow", "blue", "green", "pink"],
            contentType: this.getMIMEType(),
            signedIn: false,
            permalinkParams: null,
            permalinkURL: "",
            files: [],
            silent: false,
            bookmark: ma.fromDocument(),
            groupTagsDict: {},
            recommendedTagsLoaded: false,
            recommendedTags: [],
            selectionResult: null,
            annotations: [],
            pageComments: [],
            currentHighlight: "",
            myTags: [],
            myBmList: [],
            myContacts: [],
            myGroups: [],
          });
          if (k.launchMode.permalink)
            k.permalinkParams = {
              user: window.diigo_permalink_user,
              key: window.diigo_permalink_key,
              mode: diigo_permalink_mode,
              url: diigo_bookmark_url,
              legacy: diigo_permalink_legacy,
            };
          if (window.diigo_bookmark_url)
            this.bookmark.url = window.diigo_bookmark_url;
          if (_DIIGO_CACHE.cachePermalinkKey) k.isOwner = false;
        },
        getMIMEType: function () {
          if (document.contentType) return document.contentType;
          var a = $(document.getElementsByTagName("meta")).filter(function () {
            var c = $(this).attr("http-equiv");
            if (!c || typeof c == undefined) c = $(this).attr("httpEquiv");
            return c && c.toLowerCase() == "content-type";
          })[0];
          if (a)
            if ((a = a.getAttribute("content")) && a.indexOf("text/html") >= 0)
              return "text/html";
          return "";
        },
        reset: function () {
          this.resetData();
        },
        paintAllAnnotations: function () {
          function a(h) {
            for (
              var i = window.location.search.substring(1).split("&"), m = 0;
              m < i.length;
              m++
            ) {
              var l = i[m].split("=");
              if (l[0] == h) return l[1];
            }
            return false;
          }
          J(this.annotations, function (h) {
            h.paint();
            $(".id_" + h.id).on("dragstart", function (i) {
              i = i.originalEvent;
              console.log(this.innerText);
              var m = "";
              $(".id_" + h.id).each(function () {
                if ($(this).hasClass("diigoHighlight")) {
                  if ($(this).find(".diigoIcon").length > 0) {
                    var l = $(this).clone();
                    l.find(".diigoIcon").remove();
                    l.find(".diigoHighlightCommentLocator").remove();
                    l = $(l).html();
                  } else l = $(this).html();
                  if ($(this).parent()[0].tagName == "A")
                    l =
                      '<a href="' +
                      $(this).parent().attr("href") +
                      '">' +
                      l +
                      "</a>";
                  m += l + " ";
                }
              });
              i.dataTransfer.setData("text/plain", m);
              i.dataTransfer.setData("text/diigoHighlight", m);
              i.dataTransfer.setDragImage(ta(m), -10, -10);
            });
          });
          for (var c = $(".diigoHighlight"), d = [], f = 0; f < c.length; f++)
            d[f] = c[f].className.match(/id(\w)+/g)[0];
          c = la(d);
          for (f = 0; f <= c.length; f++)
            if ($("." + c[f]).length == 1) $("." + c[f]).scrollmarker();
            else {
              d = $("." + c[f]);
              $(d[0]).scrollmarker();
            }
          k.orphanHighlights.length != 0
            ? $("#diigolet-panel-panel").addClass("orphanHighlight")
            : $("#diigolet-panel-panel").removeClass("orphanHighlight");
          if (a("ann_id")) {
            f = "id_" + a("ann_id");
            $("#" + f).trigger("click");
          }
        },
        unpaintAllAnnotations: function () {
          J(this.annotations, function (a) {
            a.unpaint();
          });
        },
      });
    ob.mixin(k);
    var pb = {
        lastScroll: [0, 0],
        start: function () {
          function a() {
            var d = ka.scrollTop(),
              f = ka.scrollLeft(),
              h = ka.width();
            $.browser.ieBelow8
              ? H.j.css({ top: d, left: h + f - H.ie7Width })
              : H.j.css({ top: d });
            h = R.j.offset();
            R.j.css({
              left: h.left + f - c.lastScroll[0],
              top: h.top + d - c.lastScroll[1],
            });
            var i;
            if (X.floating && (i = X.j))
              i.css({
                left: parseInt(i.css("left")) + f - c.lastScroll[0],
                top: parseInt(i.css("top")) + d - c.lastScroll[1],
              });
            c.lastScroll[0] = f;
            c.lastScroll[1] = d;
          }
          var c = this;
          ka.bind("scroll", a).bind("resize", a);
          a();
        },
      },
      qb = {
        docScroll: function () {
          return [ka.scrollLeft(), ka.scrollTop()];
        },
        docSize: function () {
          return [Fa.width(), Fa.height()];
        },
      },
      rb = {
        hasCacheUpload: function () {
          return !!k.permissions.snapshot;
        },
        onPrivilegeChange: function () {
          R.refreshPremium();
        },
      },
      lb = {
        ele: null,
        shown: false,
        init: function () {},
        destroy: function () {},
        show: function (a, c) {
          if (ia()) {
            if (k.launchMode.threeDForum && c == "selection")
              c = "selection_3df";
            var d = this.ele;
            this.shown = true;
            d.find(">div").css({ display: "none" });
            d.find(
              "." +
                {
                  selection: "_selection",
                  highlight: "_highlight",
                  selection_3df: "_selection_3df",
                }[c]
            ).show();
            var f = k.currentHighlight;
            if (f && f.comments.length == 0)
              d.find("a._del")[f.user == k.user ? "show" : "hide"]();
            d.css({ left: a.pageX + 3, top: a.pageY + 3 }).show();
          }
        },
        hide: function () {
          this.shown = false;
          this.ele.hide();
        },
        create: function () {
          this.ele = $(diigolet.consts.HTML_CONTEXT_MENU)
            .css({ position: "absolute" })
            .hide()
            .appendTo(document.body)
            .hide();
        },
      };
    x.run = function () {
      var a = A.dom.getDocumentSource();
      window.diigoSourceHtml = a
        .replace(
          /<script[^>]*src=[^>]*[(diigolet.js)(diigolet_b_h_)][^>]*>([\\S\\s]*?)<\/script>/g,
          ""
        )
        .replace(/<div[^>]*id=['"]?diigoDivLoading['"]?.*<\/div>/g, "");
      window.diigoSourceText = document.body ? document.body.textContent : "";
      k.launchMode.cachePage || $("#diigoDivLoading").remove();
      k.reset();
      if ($.browser.ieBelow8) k.mouseClass = "mouseoveredIe";
      mb();
      J([H, U, X, R, B, Y, P, Xa, V, sa, sb, tb], function (c) {
        c.init();
      });
      $.browser.supportPositionFixed || pb.start();
      $.browser.ieBelow7 &&
        document.execCommand("BackgroundImageCache", false, true);
      C.loadBookmark();
      eb();
      !window.__diigolet_hidden && !k.launchMode.cachePage && H.show();
      k.launchMode.threeDForum &&
        $("#diigolet-tb-content,#diigolet-tb-shadow").hide();
      U.adjustPosition();
      window.reloadBookmark = function () {
        C.loadBookmark();
      };
    };
    x.runAway = function () {
      k.reset();
      J([R, B, X], function () {
        v.destroy();
      });
      delete window.diigolet;
    };
    var $a = {
      quoteTag: function (a) {
        a = a
          .replace(/"/g, "'")
          .replace(/\s+/g, " ")
          .replace(/^\s+|\s+$/g, "");
        if (a.match(/\s+|,/)) a = '"' + a + '"';
        return a;
      },
      parseTags: function (a, c) {
        function d() {
          if (f.length > 0) {
            h.push(f.join(""));
            f.length = 0;
          }
        }
        for (
          var f = [], h = [], i = false, m = 0, l = a.length, r;
          (r = a.charAt(m)), m < l;
          m++
        )
          if (r == '"')
            if (i) {
              i = false;
              d();
            } else i = true;
          else if (i) f.push(r);
          else /\s/.test(r) || r == "," ? d() : f.push(r);
        d();
        if (c)
          h = Pa(Qa(h), function (y) {
            return pa(y) || null;
          });
        return h;
      },
      unparseTags: function (a, c) {
        c = c || " ";
        return W(
          a,
          function (d) {
            return this.quoteTag(d);
          },
          this
        ).join(c);
      },
    };
    M(x, $a);
    var ma = T.extend({
      constructor: function (a) {
        M(
          this,
          {
            url: "",
            urlId: "",
            b_id: "",
            title: "",
            description: "",
            user: "",
            unread: false,
            mode: diigolet.consts.PRIVACY_MODE_PRIVATE,
            tags: [],
            alert: false,
            onlyInGroup: false,
            groups: [],
            lists: [],
            datetime: null,
            saved: false,
            toAddToBookmarkLists: null,
            toShareToGroups: null,
            toShareExistingAnnotations: false,
          },
          a || {}
        );
      },
      getTitle: function () {
        return pa(this.title || document.title || document.location.href);
      },
      addGroups: function (a) {
        var c = this;
        J(a, function (d) {
          var f = na(c.groups, function (h) {
            return h.name == d.name;
          });
          if (f == -1) {
            c.groups.push(d);
            k.fireEvent("bm_addGroups", [c, d.name]);
          } else if (d.user) c.groups[f].user = d.user;
        });
      },
      getGroupNamesSharedByMe: function () {
        return Pa(this.groups, function (a) {
          return a.user == k.user ? a.name : null;
        });
      },
      inList: function (a) {
        return Oa(this.lists, function (c) {
          return c.id == a;
        });
      },
    });
    ma.fromDocument = function () {
      var a = document;
      return k.launchMode.cachePage
        ? new ma({
            url: _DIIGO_CACHE.originUrl,
            title: a.title || a.location.href,
          })
        : new ma({ url: a.location.href, title: a.title || a.location.href });
    };
    var I = T.extend({
      constructor: function (a) {
        a = a || {};
        M(
          this,
          {
            id: null,
            user: "",
            mode: diigolet.consts.PRIVACY_MODE_PRIVATE,
            content: "",
            comments: [],
            saved: false,
            datetime: "",
            painted: false,
            paintedSuccessfully: false,
            type: null,
            groups: [],
            onlyInGroup: false,
            extra: {},
          },
          a
        );
        this.extra = M({ nth: 1 }, this.extra || {});
      },
      paint: function () {
        if (!(k.silent || this.extra.code == true)) {
          this.constructor.paint(this);
          this.painted = true;
        }
      },
      unpaint: function () {
        this.paintedSuccessfully && this.constructor.unpaint(this);
        this.painted = this.paintedSuccessfully = false;
      },
      del: function (a) {
        return (this.constructor.del ? this.constructor : I).del(this, a);
      },
      canDelete: function (a) {
        return this.user == k.user && this.getComments(a).length == 0;
      },
      canAddComments: function () {
        if (this.isPrivate() && this.user != k.user) return false;
        if (this.isPublic() && 0) return false;
        return true;
      },
      addGroups: function (a) {
        var c = this;
        J(a, function (d) {
          if (
            na(c.groups, function (f) {
              return f.idInGroup == d.idInGroup;
            }) == -1
          ) {
            c.groups.push(d);
            k.fireEvent("ann_add", [c, d.name]);
          }
        });
        this.paint();
      },
      getPageOffset: function () {
        var a;
        a =
          this.type == diigolet.consts.ANNOTATION_TYPE_TEXT
            ? $("em." + L.HIGHLIGHT_ID_CLASS + this.id)
            : $(
                "." +
                  L.HIGHLIGHT_TYPE_CLASS +
                  this.type +
                  "." +
                  L.HIGHLIGHT_ID_CLASS +
                  this.id
              );
        if (a.size() <= 0) return { left: 0, top: 0 };
        var c = window,
          d = { left: 0, top: 0 },
          f = 0,
          h = 0;
        a.parents("div").filter(function () {
          if (
            c.getComputedStyle(this, null).getPropertyValue("position") ==
            "relative"
          ) {
            d.left += $(this).offset().left;
            d.top += $(this).offset().top;
            f += $(this).scrollLeft();
            h += $(this).scrollTop();
          }
        });
        a = a.offset();
        if (!a) return { left: 0, top: 0 };
        return { left: a.left - d.left + f, top: a.top - d.top + h };
      },
      getComments: function (a) {
        return Da(this.comments, function (c) {
          return c.matchFilter(a);
        });
      },
      jumpHere: function (a, c, d) {
        N("[Annotation] jump here");
        if (arguments.length == 0) a = true;
        if (this.paintedSuccessfully) {
          var f =
            this.type == diigolet.consts.ANNOTATION_TYPE_TEXT
              ? $("em." + S.HIGHLIGHT_ID_CLASS + this.id)
              : this.getEle();
          if (f.size() == 0) H.notify(diigolet.consts.MSG_HIGHLIGHT_NOT_FOUND);
          else {
            if (a) {
              var h = f.eq(0).offset();
              window.scrollTo(h.left, h.top - 40);
            }
            f = f.eq(f.size() - 1);
            h = f.offset();
            e = d
              ? { pageX: d.pageX, pageY: d.pageY + f.height() }
              : { pageX: h.left, pageY: h.top + f.height() + 15 };
            B.hide();
            if (c || this.comments.length > 0)
              B.show(e, this, c ? "add" : "view");
          }
        } else H.notify(diigolet.consts.MSG_HIGHLIGHT_NOT_FOUND);
      },
      activate: function () {},
    });
    M(I, {
      add: function (a, c, d, f) {
        c = M({ dontPaint: false, dontSave: false, dontSort: false }, c || {});
        switch (a.type) {
          case diigolet.consts.ANNOTATION_TYPE_TEXT:
            d = Ia;
            break;
          case diigolet.consts.ANNOTATION_TYPE_IMAGE:
            d = ba;
            break;
          case diigolet.consts.ANNOTATION_TYPE_FLOATNOTE:
            d = Ja;
            break;
          default:
            return null;
        }
        a = new d(a);
        if (!a.saved) {
          if (!a.id) a.id = qa(a.content + a.user + k.bookmark.urlId + a.nth);
          a.extra.color = k.penColor;
          a.extra.nth = a.nth;
          a.extra.top = a.top;
          if (typeof a.code !== "undefined") a.extra.code = a.code;
          a.extra.color = f ? f : k.penColor;
        }
        k.annotations.push(a);
        if (!c.dontPaint) {
          a.paint();
          var h = "id_" + a.id;
          if ($("." + h).length != 0)
            if ($("." + h).length > 1) {
              f = $("." + h)[0];
              $(f).scrollmarker();
            } else $("." + h).scrollmarker();
          $("." + h).on("dragstart", function (i) {
            i = i.originalEvent;
            var m = "";
            $("." + h).each(function () {
              if ($(this).hasClass("diigoHighlight")) {
                if ($(this).find(".diigoIcon").length > 0) {
                  var l = $(this).clone();
                  l.find(".diigoIcon").remove();
                  l = $(l).text();
                } else l = $(this).text();
                if ($(this).parent()[0].tagName == "A")
                  l =
                    '<a href="' +
                    $(this).parent().attr("href") +
                    '"">' +
                    l +
                    "</a>";
                m += l + " ";
              }
            });
            i.dataTransfer.setData("text/plain", m);
            i.dataTransfer.setData("text/diigoHighlight", m);
            i.dataTransfer.setDragImage(ta(m), -10, -10);
          });
        }
        a.paintedSuccessfully && !c.dontSort && I.sort();
        za.j && a.type == diigolet.consts.ANNOTATION_TYPE_TEXT && za.add(a);
        !a.saved && !c.dontSave && C.addAnnotation(a);
        a.onlyInGroup || k.fireEvent("ann_add", [a]);
        a.groups &&
          J(a.groups, function (i) {
            k.fireEvent("ann_add", [a, i.name]);
          });
        return a;
      },
      del: function (a, c) {
        a = this.find(a);
        if (c) {
          var d = na(a.groups, function (f) {
            return f.name == c && f.user == k.user;
          });
          a.saved && C.deleteAnnotation(a, a.groups[d].idInGroup);
          a.groups.splice(d, 1);
          k.fireEvent("ann_del", [a, c]);
        } else {
          if (a.onlyInGroup) throw "Annotation.del: onlyInGroup!";
          a.onlyInGroup = true;
          a.mode = diigolet.consts.PRIVACY_MODE_GROUP;
          a.saved && C.deleteAnnotation(a, null);
          k.fireEvent("ann_del", [a]);
        }
        if (a.onlyInGroup && a.groups.length == 0) {
          a.unpaint();
          k.annotations.splice(k.annotations.indexOf(a), 1);
        } else a.paint();
        $("#" + ("id_" + a.id)).remove();
        chrome.runtime.sendMessage({
          name: "editItem",
          cmd: "remove",
          annotation: a,
        });
        return a;
      },
      find: function (a) {
        a = a.id || a;
        return oa(k.annotations, function (c) {
          return c.id == a;
        });
      },
      findByInlineComment: function (a) {
        var c = a.id || a;
        return oa(k.annotations, function (d) {
          return oa(d.comments, function (f) {
            return f.id == c;
          });
        });
      },
      sort: function () {
        k.annotations.sort(function (a, c) {
          if (!a.paintedSuccessfully) return 1;
          if (!c.paintedSuccessfully) return -1;
          return a.extra.top - c.extra.top > 0
            ? 1
            : a.extra.top - c.extra.top == 0
            ? a.extra.left - c.extra.left
            : -1;
        });
      },
    });
    window.addEventListener("message", function (a) {
      a = a.data;
      var c = a.data;
      a.type == "removeAnnotation" && I.find(c.ann) && I.find(c.ann).del();
    });
    var Ia = I.extend({
      constructor: function (a) {
        this.base(a || {});
      },
    });
    M(Ia, {
      paint: function (a) {
        a = I.find(a);
        (a.mode == diigolet.consts.PRIVACY_MODE_PUBLIC &&
          a.groups.length <= 0) ||
          Ba.paint(a);
      },
      unpaint: function (a) {
        a = I.find(a);
        Ba.unpaint(a);
      },
    });
    var ba = I.extend({
      constructor: function (a) {
        a = a || {};
        this.base(a);
        this.type = diigolet.consts.ANNOTATION_TYPE_IMAGE;
        this.extra = M({}, this.extra || {});
        a = k.bookmark.url;
        if (!this.content)
          if (this._focusedNode)
            this.content = Q('<img src="#{0}" title="#{1}" alt="#{2}" />', [
              ba.makeAbsUrl(this._focusedNode.src, a),
              this._focusedNode.title,
              this._focusedNode.alt,
            ]);
          else
            throw "Must specify either content or _focusedNode for image highlight";
        if (!this.extra.imageUrl)
          this.extra.imageUrl = ba.makeAbsUrl(
            (this.content.match(/<img.*?\s+src=['"]?(.*?)['"]?[\s>]/im) ||
              [])[1] || "",
            a
          );
        if (!this.extra.imageUrl) throw "invalid imageUrl";
        if (!this.saved && this._focusedNode)
          for (
            var c = ba.makeRelUrl(this.extra.imageUrl, a),
              d = ba.makeAbsUrl(this.extra.imageUrl, a),
              f = document.getElementsByTagName("img"),
              h = 0,
              i = 0,
              m = f.length,
              l;
            (l = f[i]), i < m;
            i++
          )
            if (l.src.indexOf(c) > -1 && d == ba.makeAbsUrl(l.src, a)) {
              h++;
              if (l == this._focusedNode) {
                this.extra.nth = h;
                break;
              }
            }
      },
      getEle: function () {
        var a = null;
        a = $("img." + S.HIGHLIGHT_ID_CLASS);
        if (a.size() == 0)
          for (
            var c = ba.makeRelUrl(this.extra.imageUrl, k.bookmark.url),
              d = ba.makeAbsUrl(this.extra.imageUrl, k.bookmark.url),
              f = document.getElementsByTagName("img"),
              h = 0,
              i = 0,
              m = f.length,
              l;
            (l = f[i]), i < m;
            i++
          )
            if (
              l.src.indexOf(c) > -1 &&
              d == ba.makeAbsUrl(l.src, k.bookmark.url)
            ) {
              h++;
              if (h == this.extra.nth) return $(l);
            }
        return a;
      },
    });
    M(ba, {
      paint: function (a) {
        function c(i, m) {
          $(i)
            .addClass(L.HIGHLIGHT_ICON_CLASS)
            .addClass(L.HIGHLIGHT_ID_CLASS + m.id)
            .addClass(
              L.HIGHLIGHT_TYPE_CLASS + diigolet.consts.ANNOTATION_TYPE_ICON
            )
            .addClass("ImageIcon")
            .toggleClass("public", m.isPublic() && f.length > 0)
            .toggleClass("private", m.isPrivate() && f.length > 0)
            .toggleClass("group", m.inAnyGroups() && f.length > 0)
            .toggleClass("diigoHighlightcommented", f.length > 0);
          if (f.length > 0) {
            $(i).html(
              "<span class='" +
                L.HIGHLIGHT_ID_CLASS +
                m.id +
                " " +
                L.HIGHLIGHT_ICON_CLASS +
                " " +
                L.HIGHLIGHT_TYPE_CLASS +
                diigolet.consts.ANNOTATION_TYPE_ICON +
                "'>" +
                f.length +
                "</span>"
            );
            $(i).attr("title", P.tipMsg(m));
            var l = m.getPageOffset();
            $(i).css({ left: l.left, top: l.top });
          } else {
            $(i).html("");
            $(i).attr("title", "");
          }
          return i;
        }
        a = I.find(a);
        if (
          !(
            a.mode == diigolet.consts.PRIVACY_MODE_PUBLIC &&
            a.groups.length <= 0
          )
        ) {
          var d = a.getEle();
          if (d) {
            var f = a.comments;
            d.addClass(S.HIGHLIGHT_CLASS)
              .addClass(S.HIGHLIGHT_ID_CLASS + a.id)
              .addClass(S.HIGHLIGHT_TYPE_CLASS + a.type)
              .removeClass("yellow blue green pink")
              .addClass(
                a.extra.color && a.extra.color.length > 0
                  ? a.extra.color
                  : "yellow"
              )
              .toggleClass("diigoHighlightcommented", f.length > 0);
            if (d.size() > 0) {
              var h = d.offset();
              a.extra.top = h.top;
              a.extra.left = h.left;
            }
            a.painted = true;
            a.paintedSuccessfully = d.size() > 0;
            if (
              a.type == diigolet.consts.ANNOTATION_TYPE_IMAGE &&
              $("div." + L.HIGHLIGHT_ID_CLASS + a.id).size() <= 0 &&
              d.size() > 0
            ) {
              h = $(fa.createElement("div"));
              h.insertBefore(d);
              c(h, a);
            } else c("div." + L.HIGHLIGHT_ID_CLASS + a.id, a);
          }
        }
      },
      unpaint: function (a) {
        a = I.find(a);
        var c = a.getEle();
        c &&
          c
            .removeClass(S.HIGHLIGHT_ID_CLASS + a.id)
            .removeClass(S.HIGHLIGHT_CLASS)
            .removeClass("diigoHighlightcommented")
            .removeClass("public")
            .removeClass("group");
      },
      getBaseUrl: function (a, c) {
        var d = a,
          f = d.replace(/:\/\//, "123")[(c ? "i" : "lastI") + "ndexOf"]("/");
        if (f > 0) d = d.slice(0, f);
        return d + "/";
      },
      makeRelUrl: function (a, c) {
        if (!/^[a-zA-Z]+:\/\/|^\//.test(a)) return a;
        if (a.charAt(0) == "/") a = a.replace("/", this.getBaseUrl(a, true));
        return a.replace(this.getBaseUrl(c, false), "");
      },
      makeAbsUrl: function (a, c) {
        if (a.indexOf("://") > 0) return a;
        var d = a.charAt(0) == "/";
        return this.getBaseUrl(c, d) + (d ? a.slice(1) : a);
      },
    });
    var Ja = I.extend({
      constructor: function (a) {
        a = a || {};
        this.base(a);
        this.saving = false;
        if (!this.id)
          this.id = qa(
            Math.random() + Math.random() + new Date().getTime().toString()
          );
        this.type = diigolet.consts.ANNOTATION_TYPE_FLOATNOTE;
      },
      fixExtra: function () {
        var a =
            5 *
            Da(k.annotations, function (i) {
              return i.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE;
            }).length,
          c = $(document),
          d = c.scrollTop(),
          f = c.scrollLeft(),
          h = c.height();
        c = c.width();
        this.extra = M(
          { left: a + f + 10, top: a + d + 50 },
          this.extra || {},
          { winWidth: c, winHeight: h }
        );
      },
      getEle: function () {
        return $("." + S.HIGHLIGHT_ID_CLASS + this.id);
      },
    });
    M(Ja, {
      paint: function (a) {
        N("[FloatNote] paint: called");
        a = I.find(a);
        a.fixExtra();
        if (a.painted) {
          var c = a.getEle();
          if (c) {
            c.removeClass("diigoadd yellow blue green pink").addClass(
              a.extra.color
            );
            var d = B.getCommentsInfo(a.comments);
            d == "onlyPrivate" || d == "noComment"
              ? c.removeClass("group").addClass("private")
              : c.removeClass("private").addClass("group");
            setTimeout(function () {
              (B.getCommentCount("group", a.comments) || "") > 0 &&
                c
                  .find("span")
                  .text(B.getCommentCount("group", a.comments))
                  .show();
            }, 100);
          }
        } else {
          c = $(diigolet.consts.HTML_FLOAT_NOTE)
            .addClass(S.HIGHLIGHT_CLASS)
            .addClass(S.HIGHLIGHT_ID_CLASS + a.id)
            .addClass(S.HIGHLIGHT_TYPE_CLASS + a.type)
            .css({ left: a.extra.left, top: a.extra.top })
            .appendTo(document.body);
          if (x.stickyNoteByContextMenu == true) {
            c.css({ left: x.rightClickPos.x, top: x.rightClickPos.y });
            x.stickyNoteByContextMenu = false;
          }
          c.find("span").text(B.getCommentCount("group", a.comments) || "");
          B.getCommentCount("group", a.comments) == 0 && c.find("span").hide();
          d = B.getCommentsInfo(a.comments);
          d == "onlyPrivate" || d == "noComment"
            ? c.addClass("private")
            : c.addClass("group");
          c.addClass(a.extra.color);
          this.bindEvents(a);
          a.paintedSuccessfully = true;
        }
        a.painted = true;
      },
      unpaint: function (a) {
        a = I.find(a);
        var c = a.getEle();
        if (c) {
          c.unbind().remove();
          a.painted = a.paintedSuccessfully = false;
        }
      },
      bindEvents: function (a) {
        a = I.find(a);
        var c = a.getEle();
        c.mouseout(function (d) {
          if (d.relatedTarget == this.firstChild) return false;
        });
        new $.Draggable(c, {
          cursor: "default",
          beforeDrag: function () {
            ya = true;
            k.draggingFloatNote = true;
            N("[FloatNote] before drag: cancel show");
            a.saved && !B.isEditing() && B.hide();
          },
          afterDrag: function () {
            N("[FloatNote] after drag");
            a.extra.left = parseInt(c.css("left"));
            a.extra.top = parseInt(c.css("top"));
            k.draggingFloatNote = false;
            if (a.user == k.user && a.saved) {
              C.updateExtra(a);
              I.sort();
            }
            $(".id_" + a.id).scrollmarker();
          },
        });
      },
    });
    var Ca = T.extend({
        constructor: function (a) {
          M(
            this,
            {
              id: null,
              user: "",
              mode: diigolet.consts.PRIVACY_MODE_PRIVATE,
              saved: false,
              datetime: "",
              groups: [],
              onlyInGroup: false,
            },
            a || {}
          );
          if (this.onlyInGroup && !(this.id > 0))
            this.id = Math.random().toString().substr(2);
        },
        del: function (a) {
          return this.constructor.del(this, a);
        },
        canDelete: function () {
          return k.signedIn && k.user && k.user == this.user;
        },
        addGroups: function (a) {
          var c = this;
          J(a, function (d) {
            if (
              na(c.groups, function (f) {
                return f.idInGroup == d.idInGroup;
              }) == -1
            ) {
              c.groups.push(d);
              k.fireEvent((c instanceof ja ? "pc" : "ic") + "_add", [
                c,
                d.name,
              ]);
            }
          });
        },
      }),
      ja = Ca.extend({
        constructor: function (a) {
          this.base(a);
        },
      });
    M(ja, {
      add: function (a) {
        a instanceof this || (a = new this(a));
        k.pageComments.push(a);
        if (!a.saved)
          throw "[PageComment] add: adding an unsaved comment is probably and error";
        k.fireEvent("pc_add", [a]);
        return a;
      },
      del: function (a, c) {
        a = this.find(a);
        if (c) {
          var d = na(a.groups, function (f) {
            return f.name == c && f.user == k.user;
          });
          a.saved && C.deletePageComment(a, a.groups[d].idInGroup);
          a.groups.splice(d, 1);
          k.fireEvent("pc_del", [a, c]);
        } else {
          if (a.onlyInGroup) throw "PageComment.del: onlyInGroup!";
          a.onlyInGroup = true;
          a.mode = diigolet.consts.PRIVACY_MODE_GROUP;
          a.saved && C.deletePageComment(a, null);
          k.fireEvent("pc_del", [a]);
        }
        a.onlyInGroup &&
          a.groups.length == 0 &&
          k.pageComments.splice(k.pageComments.indexOf(a), 1);
        return a;
      },
      find: function (a) {
        a = a.id || a;
        return oa(k.pageComments, function (c) {
          return c.id == a;
        });
      },
    });
    var ea = Ca.extend({
      constructor: function (a) {
        a = M({ annotationId: null }, a);
        this.base(a);
        if (!this.annotationId)
          throw "[InlineComment ctr] must specify annotationId";
      },
      getAnnotation: function () {
        if (!this.annotation) this.annotation = I.find(this.annotationId);
        return this.annotation;
      },
    });
    M(ea, {
      add: function (a) {
        a instanceof this || (a = new this(a));
        ann = a.getAnnotation();
        if (ann.getComments("_noGroups").length > 0) {
          if (
            a.mode != ann.mode &&
            a.mode != diigolet.consts.PRIVACY_MODE_GROUP
          )
            a.mode = ann.mode;
        } else if (
          a.mode != ann.mode &&
          a.mode != diigolet.consts.PRIVACY_MODE_GROUP
        ) {
          ann.mode = a.mode;
          k.fireEvent("ann_changeMode", [ann]);
        }
        ann.comments.push(a);
        ann.paintedSuccessfully && ann.paint();
        k.fireEvent("ic_add", [a]);
        return a;
      },
      edit: function (a, c) {
        var d = this.find(a);
        d.content = c;
        ann.paintedSuccessfully && ann.paint();
        k.fireEvent("ic_edit", [d]);
      },
      del: function (a, c) {
        a = this.find(a);
        N("[InlineComment.del]", a, c, a.onlyInGroup ? "onlyInGroup" : "");
        var d = function () {
          i && i();
        };
        if (c) {
          var f = na(a.groups, function (m) {
            return m.name == c && m.user == k.user;
          });
          a.saved && C.deleteInlineComment(a, a.groups[f].idInGroup, d);
          a.groups.splice(f, 1);
          k.fireEvent("ic_del", [a, c]);
        } else {
          if (a.onlyInGroup) throw "InlineComment.del: onlyInGroup!";
          a.onlyInGroup = true;
          a.mode = diigolet.consts.PRIVACY_MODE_GROUP;
          a.saved && C.deleteInlineComment(a, null, d);
          k.fireEvent("ic_del", [a]);
        }
        if (a.onlyInGroup && a.groups.length == 0) {
          var h = a.getAnnotation();
          h.comments.splice(h.comments.indexOf(a), 1);
          if (h.isPublic() && h.getComments("_smasher").length == 0) {
            h.mode = diigolet.consts.PRIVACY_MODE_PRIVATE;
            k.fireEvent("ann_changeMode", [h]);
          }
          h.paintedSuccessfully && h.paint();
          d = h.getComments(c ? c : "_smasher");
          if (
            h.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE &&
            d.length == 0
          )
            var i = function () {
              h.del(c);
            };
        }
        return a;
      },
      find: function (a) {
        a = a.id || a;
        var c = I.findByInlineComment(a);
        if (!c) return null;
        return oa(c.comments, function (d) {
          return d.id == a;
        });
      },
    });
    J([ma, I, Ca], function (a) {
      a.implement({
        isPublic: function () {
          return (
            this.mode == diigolet.consts.PRIVACY_MODE_PUBLIC &&
            !this.onlyInGroup
          );
        },
        isPrivate: function () {
          return (
            this.mode == diigolet.consts.PRIVACY_MODE_PRIVATE &&
            !this.onlyInGroup
          );
        },
        inGroup: function (c, d) {
          return Oa(this.groups, function (f) {
            return f.name == c && (d ? f.user == d : true);
          });
        },
        inAnyGroups: function () {
          return this.groups.length > 0;
        },
        matchFilter: function (c) {
          return c == "_all"
            ? this.isPublic() || this.isPrivate() || this.inAnyGroups()
            : c == "_smasher"
            ? this.isPublic() || this.isPrivate()
            : c == "_public"
            ? this.isPublic()
            : c == "_private"
            ? this.isPrivate()
            : this.inGroup(c);
        },
      });
    });
    var C = {
        transId: 0,
        callbacks: {},
        getScriptId: function (a) {
          return "diigoletScriptCall_" + a;
        },
        callback: function (a) {
          var c = a.transId,
            d = a.cmd;
          N("[WebAPI response]", d, a.code, a, a.result);
          if (!k.signedIn && (a.user || k.launchMode.cachePage)) {
            var f = _DIIGO_CACHE.originUser;
            N("onSignIn");
            k.reset();
            k.user = f;
            console.log(k.user);
            k.signedIn = true;
            k.isOwner && C.loadMyStuff();
          } else
            k.signedIn &&
              !a.user &&
              !a.batch_id &&
              !k.launchMode.cachePage &&
              Ya();
          if (d) {
            if (d == "user_loadMyStuff") a.result.user = a.user;
            this["cb_" + d] && this["cb_" + d](a);
            a.code == 1 &&
              this["cb_" + d + "_success"] &&
              this["cb_" + d + "_success"](a.result);
            a.code == 0 &&
              this["cb_" + d + "_failure"] &&
              this["cb_" + d + "_failure"](a.result);
          }
          this.callbacks[c] && this.callbacks[c](a);
          delete this.callbacks[c];
          K(this.getScriptId(c)).remove();
          if (a.code != 1) {
            H.notify("Failed", 5e3, 3);
            H.updateUsername();
          } else
            (d &&
              !oa(
                ["bm_saveBookmark", "annotation_add", "pc_add", "ic_add"],
                d
              )) ||
              H.updateUsername();
        },
        invoke: function (a, c, d) {
          var f = this.transId++;
          if (d) this.callbacks[f] = d;
          if (k.user == "") k.user = _DIIGO_CACHE.originUser;
          d = {
            cmd: a,
            v: 13,
            _nocache: Math.random(),
            json: $.toJSON(c),
            user: k.user,
            transId: f,
          };
          N("[WebAPI request]", a, c);
          if (a == "user_signIn")
            c = Q(
              diigolet.consts.DIIGO_DATA_SERVER +
                "/chappai/pv=#{pv}/ct=tb/cv=#{cv}/cmd=#{cmd}",
              { pv: 13, cv: x.version, cmd: a }
            );
          else {
            if (k.user == "") k.user = _DIIGO_CACHE.originUser;
            c = Q(
              diigolet.consts.DIIGO_DATA_SERVER +
                "/chappai/pv=#{pv}/ct=tb/cv=#{cv}/user=#{user}/cmd=#{cmd}/",
              { pv: 13, cv: x.version, user: k.user, cmd: a }
            );
          }
          this.performInvocation(c, d, null, a);
        },
        performInvocation: function (a, c, d, f) {
          var h = this;
          h.xhr = $.ajax({
            type: "POST",
            url: a,
            data: c,
            complete: function (i) {
              try {
                var m = JSON.parse(i.responseText);
              } catch (l) {
                N("[WebAPICall error parsing JSON]", l, i);
              }
              N("[WebAPI ajax response]", i.status, m);
              if (
                f == "upload_file" ||
                f == "bm_saveBookmark" ||
                f == "list_create"
              ) {
                h.status = i.status;
                h.cmd = f;
              }
              if ((h.resp = m)) if (m.code == 1) h.ok = true;
              h.callback(m);
              h.xhr = null;
            },
            error: function (i, m, l) {
              N("[WebAPI ajax error]", i, m, l);
            },
          });
        },
        invokeUpload: function (a, c) {
          var d = this.transId++;
          if (c) this.callbacks[d] = c;
          a += d;
          N("[WebAPI request upload]", a);
          var f = document.createElement("script");
          f.type = "text/javascript";
          f.id = this.getScriptId(d);
          d = a;
          d = encodeURIComponent(d);
          if (d.length > ($.browser.msie ? 2e3 : 4e3))
            H.notify("Too many words you inputted.");
          else {
            f.src = a;
            $("head,body").add(document.body)[0].appendChild(f);
          }
        },
        invokePost: function (a, c, d) {
          var f = this.transId++;
          a += f;
          N("[WebAPI request iframe post]", a);
          var h =
              "<iframe frameborder='0' scrolling='no' id='diigo_upload_iframe_" +
              f +
              "' style='width: 400px; height: 30px; margin: 0; padding: 0;' src='#' width='400px' height='30px'></iframe>",
            i = document.createElement("div");
          i.id = "diigotlet_upload";
          i.setAttribute(
            "style",
            "position: fixed; height:30px; width: 400px; top: 33px; left: " +
              H.j.offset().left +
              (H.ie7Width - 400) / 2 +
              "px; z-index: 10000000; margin: 0; padding: 0;display:none;"
          );
          i.innerHTML = h;
          $("body").append(i);
          i = document.getElementById("diigo_upload_iframe_" + f);
          h = i.contentWindow.document;
          i.addEventListener &&
            i.addEventListener(
              "load",
              function () {
                d && d("diigo_upload_iframe_" + f);
              },
              true
            );
          i = h.createElement("form");
          i.action = a;
          i.id = this.getScriptId(f);
          i.acceptCharset = "utf-8";
          i.method = "POST";
          i.display = "none";
          for (var m in c) {
            a = h.createElement("input");
            a.type = "hidden";
            a.name = m;
            a.value = c[m];
            i.appendChild(a);
          }
          h.documentElement.appendChild(i);
          i.submit();
        },
        uploadImage: function (a, c, d, f, h, i, m) {
          f = a.dataURL.slice(("data:image/" + i + ";base64,").length);
          b = atob(f);
          c = {
            type: c,
            title: a.title,
            description: "",
            mode: a.mode,
            src_url: _DIIGO_CACHE.originUrl,
            src_title: a.src_title,
            src_description: "",
            src_unread: false,
            file_type: i,
            file_name: m,
            single_item: a.single_item,
            file_md5: qa(b),
            shareit: false,
            twitterit: d,
            tags: a.tags,
            extra: h,
          };
          console.log(c);
          N(a.list, a.groups);
          if (a.list != 0 && a.list != -1) c.lists = a.list;
          if (a.groups != 0 && a.list != -1) c.groups = a.groups;
          c.file_content = f;
          a = { cmd: "upload_file", data: c, transId: 1, isInGroup: false };
          chrome.extension
            .getBackgroundPage()
            .Messenger.handlers.WebAPI({ details: a }, {}, void 0);
        },
        loadBookmark: function () {
          var a = {
            url: k.bookmark.url,
            what: "bookmarkInfo annotations pageComments",
            permalinkParams: null,
          };
          if (_DIIGO_CACHE.cachePermalinkKey)
            a.permalinkParams = {
              user: _DIIGO_CACHE.originUser,
              key: _DIIGO_CACHE.cachePermalinkKey,
              for: "cache",
            };
          this.invoke("bm_loadBookmark", a);
        },
        cb_bm_loadBookmark_success: function (a) {
          var c = k.bookmark;
          c.loaded = true;
          ga(c, a, ca("url urlId annotated groups saved b_id"));
          c.saved &&
            a.bookmarkInfo &&
            ga(
              c,
              a.bookmarkInfo,
              ca(
                "title mode tags unread alert description datetime onlyInGroup lists"
              )
            );
          k._supressEvents = true;
          if (a.pageComments) {
            k.pateComments = [];
            J(bb(a.pageComments), function (d) {
              ja.add(M({ saved: true }, d));
            });
          }
          if (a.annotations) {
            k.annotations = [];
            J(a.annotations, function (d) {
              var f = I.add(
                ga(
                  { saved: true },
                  d,
                  ca(
                    "id user realName mode type content datetime extra groups onlyInGroup"
                  )
                ),
                { dontPaint: true, dontSort: true }
              );
              J(d.comments, function (h) {
                ea.add(M({ saved: true, annotationId: f.id }, h));
              });
            });
            k.unpaintAllAnnotations();
            k.paintAllAnnotations();
            I.sort();
          }
          k._supressEvents = false;
          H.updateUI();
          k.launchMode.cachePage && $("#diigoDivLoading").remove();
          X.refresh();
          k.isBookmarkLoaded = true;
          if (!k.launchMode.cachePage)
            if (!c.saved) {
              k.bookmark = ma.fromDocument();
              C.saveBookmark(null, function () {});
            }
        },
        saveBookmark: function (a, c) {
          var d = k.bookmark,
            f = {
              url: d.url,
              mode: d.mode,
              title: d.title,
              tags: d.tags,
              description: d.description,
              unread: d.unread,
            };
          if (d.toShareToGroups) {
            f.groups = d.toShareToGroups;
            f.shareExistingAnnotations = d.toShareExistingAnnotations;
          }
          if (d.toAddToBookmarkLists) f.lists = d.toAddToBookmarkLists;
          var h;
          if (a) {
            if ((h = a.pageComment)) {
              f.pageComment = { content: h.content, mode: h.mode };
              if (h.groups) {
                f.pageComment.groups = h.groups;
                f.pageComment.justForGroups = h.justForGroups;
                f.groups = h.groups;
              }
            }
            if ((h = a.annotation)) {
              f.annotation = {
                id: h.id,
                content: h.content,
                type: h.type,
                extra: h.extra,
              };
              if (h.groups) {
                f.annotation.groups = h.groups;
                f.groups = h.groups;
              }
              if ((h = a.annotation.inlineComment)) {
                f.annotation.inlineComment = {
                  mode: h.mode,
                  content: h.content,
                };
                if (h.groups) {
                  f.annotation.inlineComment.groups = h.groups;
                  f.annotation.inlineComment.justForGroups = h.justForGroups;
                  f.groups = h.groups;
                }
              }
            }
          }
          this.invoke("bm_saveBookmark", f, c);
          d.toAddToBookmarkLists = null;
          d.toShareToGroups = null;
          d.toShareExistingAnnotations = false;
        },
        cb_bm_saveBookmark_success: function (a) {
          var c;
          c = k.bookmark;
          c.saved = true;
          c.url = a.url;
          c.urlId = a.urlId;
          c.b_id = a.b_id;
          c.datetime = a.datetime;
          c.alert = a.alert;
          a.groups && c.addGroups(a.groups);
          if ((c = a.pageComment))
            ja.add({
              id: c.id,
              user: c.user,
              realName: c.realName,
              mode: c.mode,
              datetime: c.datetime,
              content: c.content,
              userOnline: c.userOnline,
              groups: c.groups,
              onlyInGroup: c.onlyInGroup,
              saved: true,
            });
          if ((c = a.annotation)) {
            var d = I.find(c.id);
            c.groups && d.addGroups(c.groups);
            if ((c = a.annotation.inlineComment))
              ea.add({
                id: c.id,
                annotationId: c.annotationId,
                user: c.user,
                realName: c.realName,
                mode: c.mode,
                datetime: c.datetime,
                content: c.content,
                userOnline: c.userOnline,
                groups: c.groups,
                onlyInGroup: c.onlyInGroup,
                saved: true,
              });
          }
          if ((a = a.result_shareExisting)) {
            J(a.pageComments, function (f) {
              var h = ja.find(f.id);
              h && h.addGroups(f.groups);
            });
            J(a.annotations, function (f) {
              var h = I.find(f);
              if (h) {
                h.addGroups(f.groups);
                f.inlineComments &&
                  J(f.inlineComments, function (i) {
                    var m = ea.find(i.id);
                    m && m.addGroups(i.groups);
                  });
              }
            });
          }
          X.refresh("thisUrl", true);
          X.refresh("annotations", true);
          window.parent.postMessage({ type: "refreshBookmark" }, "*");
          H.updateUI();
        },
        deleteBookmark: function (a, c) {
          this.invoke("bm_deleteBookmark", { urlId: a.urlId }, c);
        },
        cb_bm_deleteBookmark_success: function () {
          var a = (k.bookmark = ma.fromDocument());
          a.loaded = true;
          k.fireEvent("bm_del", [a]);
          k.pageComments
            .filter(function (c) {
              return c.user == k.user && !c.onlyInGroup;
            })
            .forEach(function (c) {
              c.saved = false;
              ja.del(c);
            });
          k.annotations
            .filter(function (c) {
              return c.user == k.user && !c.onlyInGroup;
            })
            .forEach(function (c) {
              c.saved = false;
              c.del();
            });
          k.annotations.forEach(function (c) {
            c.comments.forEach(function (d) {
              if (d.user == k.user && !d.onlyInGroup) {
                d.saved = false;
                ea.del(d);
              }
            });
          });
          a.saved = false;
          U.updateUI();
        },
        addAnnotation: function (a) {
          var c = {
            urlId: k.bookmark.urlId,
            id: a.id,
            content: a.content,
            type: a.type,
            extra: a.extra,
            groups:
              a.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE
                ? null
                : k.bookmark.getGroupNamesSharedByMe(),
          };
          if (a._toAddInlineComment) {
            c.inlineComment = a._toAddInlineComment;
            delete a._toAddInlineComment;
          }
          k.bookmark.saved
            ? this.invoke("annotation_add", c)
            : this.saveBookmark({ annotation: c });
        },
        cb_annotation_add_success: function (a) {
          var c = I.find(a.id);
          c.saving = false;
          c.saved = true;
          c.onlyInGroup = a.onlyInGroup;
          a.groups && c.addGroups(a.groups);
          a.__bookmark_groups && k.bookmark.addGroups(a.__bookmark_groups);
          a.inlineComment && this.cb_ic_add_success(a.inlineComment);
          window.ga &&
            window.ga(
              "send",
              "event",
              "Web site text_view",
              "highlight",
              "annotation"
            );
        },
        deleteAnnotation: function (a, c) {
          var d = { urlId: k.bookmark.urlId };
          if (c) d.idInGroup = c;
          else d.id = a.id;
          this.invoke("annotation_delete", d);
        },
        addPageComment: function (a) {
          a = {
            urlId: a.urlId,
            mode: a.mode,
            content: a.content,
            justForGroups: a.justForGroups,
            groups: a.groups,
          };
          k.bookmark.saved
            ? this.invoke("pc_add", a)
            : this.saveBookmark({ pageComment: a });
        },
        makeAnnotatedLink: function (a, c, d) {
          this.invoke("share_makeAnnotatedLink", { url: a, mode: c }, d);
        },
        cb_pc_add_success: function (a) {
          ja.add({
            id: a.id,
            user: a.user,
            realName: a.realName,
            mode: a.mode,
            datetime: a.datetime,
            content: a.content,
            userOnline: a.userOnline,
            groups: a.groups,
            onlyInGroup: a.onlyInGroup,
            saved: true,
          });
          (a = a.__bookmark_groups) && k.bookmark.addGroups(a);
        },
        deletePageComment: function (a, c) {
          var d = { urlId: k.bookmark.urlId };
          if (c) d.idInGroup = c;
          else d.id = a.id;
          this.invoke("pc_delete", d);
        },
        addInlineComment: function (a) {
          a = {
            urlId: k.bookmark.urlId,
            annotationId: a.annotationId,
            mode: a.mode,
            content: a.content,
            justForGroups: a.justForGroups,
            groups: a.groups,
          };
          if (a.justForGroups) a.urlId = k.bookmark.urlId;
          this.invoke("ic_add", a);
        },
        cb_ic_add_success: function (a) {
          ea.add({
            id: a.id,
            annotationId: a.annotationId,
            user: a.user,
            realName: a.realName,
            mode: a.mode,
            datetime: a.datetime,
            datetime2: a.datetime2,
            content: a.content,
            userOnline: a.userOnline,
            groups: a.groups,
            onlyInGroup: a.onlyInGroup,
            saved: true,
          });
          a.__annotation_groups &&
            I.find(a.annotationId).addGroups(a.__annotation_groups);
          a.__bookmark_groups && k.bookmark.addGroups(a.__bookmark_groups);
        },
        deleteInlineComment: function (a, c, d) {
          var f = { urlId: k.bookmark.urlId };
          if (c) f.idInGroup = c;
          else f.id = a.id;
          this.invoke("ic_delete", f, d);
        },
        editInlineComment: function (a, c) {
          if (k.bookmark.urlId == "")
            k.bookmark.urlId = qa(window.location.href);
          this.invoke("ic_edit", {
            id: a,
            urlId: k.bookmark.urlId,
            content: c,
          });
        },
        cb_ic_edit_success: function (a) {
          ea.edit(a.id, a.content);
        },
        loadMyStuff: function () {
          this.invoke("user_loadMyStuff", {
            what: "myTags myGroups myProfile myBookmarkLists permissions myContacts",
          });
        },
        cb_user_loadMyStuff_success: function (a) {
          k.myTags = a.myTags;
          k.myGroups = a.myGroups;
          k.myBmList = a.myBookmarkLists;
          k.realName = a.myProfile.realName;
          k.permissions = a.permissions;
          k.myContacts = a.myContacts;
          k.user = a.user;
          if (a.myTagsWithCount) k.myTagsWithCount = a.myTagsWithCount;
          if (a.myList) {
            k.myBmLists = a.myList;
            k.outliners = a.outliners;
            R.updateLists();
          }
          jb();
          R.updateGroups();
          V.onMyContactsUpdate();
        },
        updateExtra: function (a) {
          this.invoke("annotation_updateExtra", {
            urlId: k.bookmark.urlId,
            id: a.id,
            idsInGroup: W(
              Da(a.groups, function (c) {
                return c.user == k.user;
              }),
              function (c) {
                return c.idInGroup;
              }
            ),
            extra: a.extra,
          });
        },
        loadRecommendedTags: function (a, c, d) {
          this.invoke("bm_loadRecommendedTags", { url: a, title: c }, d);
        },
        cb_bm_loadRecommendedTags_success: function (a) {
          k.recommendedTagsLoaded = true;
          k.recommendedTags = a.tags;
        },
        loadGroupTagsDictionary: function (a, c) {
          this.invoke("bm_loadGroupTagsDictionary", { groups: a }, c);
        },
        cb_bm_loadGroupTagsDictionary_success: function (a) {
          $.each(a, function (c, d) {
            k.groupTagsDict[c] = d;
          });
        },
        uploadCacheCheckbf: function (a, c, d) {
          a = {
            ct: "let",
            user_name: k.user,
            link_id: a.urlId,
            upload_type: c,
            type: k.contentType,
            groups: a.toShareToGroups == null ? [] : a.toShareToGroups,
            md5: qa(window.diigoSourceHtml),
          };
          posturl =
            x.urls.getUploadMD5Check() +
            x.utils.string.toQueryString(a) +
            "&transId=";
          this.invokeUpload(posturl, d);
        },
        uploadIndex: function (a, c, d) {
          a = {
            ct: "let",
            user_name: k.user,
            link_id: a,
            batch_id: c,
            upload_type: [2, 3],
          };
          posturl =
            x.urls.getUploadURL() +
            x.utils.string.toQueryString(a) +
            "&transId=";
          a = Ua(encodeURIComponent(window.diigoSourceHtml));
          c = Ua(encodeURIComponent(window.diigoSourceText));
          this.invokePost(
            posturl,
            {
              htmlType: k.contentType,
              htmlBase64Md5: qa(a),
              htmlBase64Source: a,
              htmlCharset: document.characterSet,
              textType: "text/plain",
              textBase64Md5: qa(c),
              textBase64Source: c,
              textCharset: "utf-8",
            },
            d
          );
        },
        signIn: function () {
          this.invoke("user_signIn", {});
        },
        cb_user_signIn_success: function (a) {
          if (a.signedIn) {
            var c, d;
            if (typeof document.hidden !== "undefined") {
              c = "hidden";
              d = "visibilitychange";
            } else if (typeof document.mozHidden !== "undefined") {
              c = "mozHidden";
              d = "mozvisibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
              c = "msHidden";
              d = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
              c = "webkitHidden";
              d = "webkitvisibilitychange";
            }
            typeof document.addEventListener === "undefined" ||
              typeof c === "undefined" ||
              document.removeEventListener(d, Va, false);
            C.loadBookmark();
          }
        },
        signOut: function () {
          this.invoke("user_signOut", {});
        },
        cb_user_signOut_success: function () {
          Ya();
        },
        makeAnnotatedLink: function (a, c, d) {
          this.invoke("share_makeAnnotatedLink", { url: a, mode: c }, d);
        },
        makeAnnotatedLinkWithHighlight: function (a, c, d, f) {
          this.invoke(
            "share_makeAnnotatedLink",
            { url: a, mode: c, annId: d },
            f
          );
        },
        shareBookmark: function (a, c) {
          this.invoke("share_bookmark", a, c);
        },
        cb_share_bookmark_success: function () {},
      },
      H = {
        shown: false,
        ie7Width: 0,
        j: null,
        init: function () {
          var a = this;
          a.create();
          a.j
            .find("a.diigoletButton,#diigolet-tb-btnHide")
            .bind("focus", function () {
              this.blur();
            });
          a.jHelpTip = K("diigolet-help");
          a.j
            .find(".diigoletButton,._hoverAndHideDropdown")
            .bind("mouseover", function () {
              a.jHelpTip.hide();
              var c = $(this).attr("id");
              c == "diigolet-button-highlight" ||
                c == "diigolet-button-highlight-dropdown" ||
                c == "diigolet-tb-btnShare" ||
                $(this).is(".hover") ||
                a.j.find(".dropdownMenu").hide();
            });
        },
        destroy: function () {},
        onSignIn: function () {
          this.updateUI();
        },
        onSignOut: function () {
          this.updateUI();
        },
        show: function () {
          if (!this.shown) {
            this.shown = true;
            this.j.slideDown();
            this.updateUI();
          }
        },
        hide: function () {
          if (this.shown) {
            this.shown = false;
            this.jHelpTip.hide();
            this.j.slideUp();
            k.launchMode.cachePage && k.isOwner && $("#diigolet-tray2").show();
          }
        },
        updateUsername: function (a) {
          a = a || k.user;
          $("._URL_SIGNOUT").text("Sign Out (" + a + ")");
          if (ia()) {
            this.showInfo("", false);
            $("#diigolet-btn-container").show();
          } else {
            this.showInfo(
              '<em><a target="_blank" href="' +
                diigolet.consts.DIIGO_UPLOAD_SERVER +
                '/sign-in?f=diigolet" title="Sign in into diigo.com" onmousedown="return diigolet.handle(event, \'tb_signIn\')">Sign In</a> / <a href="' +
                diigolet.consts.DIIGO_SERVER +
                '/sign-up" title="Create a Diigo account" target="_blank">Create a Diigo account now</a> (free!)</em>',
              true
            );
            $("#diigolet-btn-container").hide();
          }
        },
        updateUI: function () {
          this.updateUsername();
          $("#diigolet-tb-btnComment").toggleClass(
            "commented",
            k.isCommented()
          );
          $("#diigolet-tb-btnBookmark").toggleClass("saved", k.bookmark.saved);
          $("#diigolet-tb-btnReadlater b b")
            .removeClass("doing")
            .toggleClass("unread", k.bookmark.unread);
        },
        updatePremium: function () {
          if (k.permissions && k.permissions.premium) {
            $("#diigolet-tb-btnGoPremium").show();
            if (!$.browser.supportPositionFixed && $.browser.ieBelow8) {
              this.ie7Width += 100;
              var a = ka.scrollTop(),
                c = ka.scrollLeft(),
                d = ka.width();
              this.j.css({ top: a, left: d + c - this.ie7Width });
            }
          } else $("#diigolet-tb-btnGoPremium").hide();
        },
        create: function () {
          var a = Q(diigolet.consts.HTML_TOOLBAR, {
            DIIGOLET_VERSION: x.version,
            URL_DIIGO: diigolet.consts.DIIGO_SERVER,
          });
          try {
            var c = (this.j = $(a)
              .css({
                position: $.browser.supportPositionFixed ? "fixed" : "absolute",
              })
              .appendTo(document.body)
              .hide());
            $(
              '<div id="diigolet-tray2" class="diigolet" title="Show diigo toolbar"></div>'
            )
              .appendTo(document.body)
              .hide();
          } catch (d) {}
          setTimeout(function () {
            $("#diigolet-tb-shadow").addClass("ie6");
          }, 5e3);
          if ($.browser.opera && $.browser.operaBelow11) {
            $("#diigolet-button-highlight").hide();
            $("#diigolet-button-highlight-dropdown").hide();
          }
          $("._diigomenu").click(function (f) {
            var h;
            className = $(f.target).attr("class");
            if (className.indexOf("URL_MY_LIBRARY") >= 0)
              h = x.urls.getUserBookmarksPageURL();
            else if (className.indexOf("URL_MY_LIST") >= 0)
              h = x.urls.getListHome();
            else if (className.indexOf("URL_MY_GROUP") >= 0)
              h = x.urls.getGroupHome();
            else if (className.indexOf("URL_NETWORK") >= 0)
              h = x.urls.getNetwork();
            else if (className.indexOf("URL_HOT_BOOKMARK") >= 0)
              h = x.urls.getHotBookmark();
            else if (className.indexOf("URL_SIGNOUT") >= 0) {
              h = x.urls.getSignout();
              window.location.href = h;
              return true;
            }
            window.open(h, "_blank");
            return false;
          });
          $(diigolet.consts.ID_NOTIFY)
            .find(".diigotb-notice-close")
            .click(function () {
              $(diigolet.consts.ID_NOTIFY).hide();
            });
          if (k.launchMode.cachePage) {
            $("#diigolet-tb-btnReadlater").hide();
            $("#diigolet-tb-btnShare").hide();
            $("#diigolet-tb-btnMore").hide();
            $("#diigolet-tb-btnHide").css(
              "background",
              'transparent url("https://www.diigo.com/javascripts/webtoolbar/images/diigoletIconv3.gif") no-repeat left -244px'
            );
            $("#diigolet-tray2").click(function (f) {
              diigolet.handle(f, "mouseOnBorder");
              $(this).hide();
            });
          }
          if (k.launchMode.permalink) {
            $("#diigolet-tb-forward").show();
            $("a._forwardPageUrl", c).attr({ href: k.bookmark.url });
            a = k.permalinkParams.user;
            $("a._forwardUserUrl", c)
              .attr({
                href: a
                  ? diigolet.consts.DIIGO_SERVER + "/user/" + a
                  : diigolet.consts.DIIGO_SERVER,
              })
              .text(a || "Diigo");
            $("a._myBookmarks, a._info", c).hide();
          } else k.launchMode.sandbox && $("a._myBookmarks, a._info", c).hide();
          if ($.browser.ieBelow8) {
            c = $("#diigolet-tb-btnHide").width() + 20;
            c += ia() ? 389 : 400;
            this.ie7Width = c + 15;
          } else this.ie7Width = this.j.width();
          if (
            !ia() &&
            $.browser.chrome &&
            typeof document.webkitHidden != "undefined"
          )
            Wa();
          else
            !ia() &&
              $.browser.mozilla &&
              typeof document.mozHidden != "undefined" &&
              Wa();
        },
        showInfo: function (a, c) {
          var d = this.j;
          if (d) {
            d.find("span._info").html(a);
            d.find("#diigoDivInfo").showHide(c);
          }
        },
        notify: function (a, c, d) {
          c = c == undefined ? 5e3 : c;
          var f;
          if ($.browser.msie && $.browser.version >= 9) {
            tbar = $("#diigolet-toolbar");
            f = $(diigolet.consts.ID_NOTIFY)
              .css({ top: tbar.offset().top + tbar.height() - 5 })
              .show();
          } else f = $(diigolet.consts.ID_NOTIFY).show();
          f.removeClass("success failed info process")
            .find(".diigolet-notice-text")
            .html(a);
          f.children()
            .find(".diigolet-notice-close")
            .unbind("click")
            .click(function () {
              f.hide();
            });
          if ($.browser.ieBelow8) {
            a = f.find(".diigolet-notice-text").width() + 36 + 16 + 26;
            f.width(a);
          } else a = f.width();
          a = this.j.offset().left + (this.ie7Width - a) / 2;
          f.css({ left: a - 20 });
          if (d == 2) f.addClass("process");
          else d == 3 ? f.addClass("failed") : f.addClass("info");
          clearTimeout(f[0].timerId);
          if (c)
            f[0].timerId = setTimeout(function () {
              f.fadeOut("slow");
            }, c);
        },
      };
    H.refresh = H.updateUI;
    var U = {
      shown: false,
      j: null,
      init: function () {
        var a = this;
        a.create();
        $(window).resize(function () {
          a.adjustPosition();
        });
      },
      destroy: function () {},
      onSignIn: function () {
        this.updateUI();
        this.adjustPosition();
      },
      onSignOut: function () {
        this.updateUI();
      },
      adjustPosition: function () {
        var a = this.j,
          c = $(window),
          d = c.width();
        c = c.height();
        var f = parseInt(a.css("left")),
          h = parseInt(a.css("top"));
        f = a.outerWidth();
        var i = a.outerHeight();
        a.css("left", (f = d - f + 1));
        if (c < h + i) a.css("top", (h = c - i));
        h < 0 && a.css("top", 1);
        f < 0 && a.css("left", 1);
      },
      show: function (a) {
        var c = this;
        if (!this.shown) {
          this.shown = true;
          a == "fold" && this.j.addClass("fold");
          this.j.show();
          this.updateUI();
          Prefs.get("prefs.lastUsedColor", function (d) {
            k.penColor = d;
            U.onHighlightColorChanged(d, false);
            k.isHighlightPen &&
              $(document.body)
                .removeClass(
                  W(k.defaultColors, function (f) {
                    return "diigoHiPen-" + f;
                  }).join(" ")
                )
                .addClass("diigoHiPen-" + k.penColor);
          });
          sa.diigoImageClipMode = true;
          $(window).on("resize", function () {
            c.adjustPosition();
          });
          k.bookmark.saved == false &&
            chrome.storage.local.get(null, function (d) {
              d.researchMode === true &&
                $("#diigolet-panel-btnBookmark").addClass(
                  "diigo-research-mode"
                );
            });
        }
      },
      hide: function () {
        if (this.shown) {
          this.shown = false;
          $("#diigolet-panel-panel").hide();
          $("body").unbind("mousemove", sa.onMousmove);
          if (imageClipperDefault != true) sa.diigoImageClipMode = false;
          k.isHighlightPen = false;
          $(document.body).removeClass(
            W(k.defaultColors, function (a) {
              return "diigoHiPen-" + a;
            }).join(" ")
          );
          H.onHighlightPenModeChanged(false);
          U.onHighlightPenModeChanged(false);
          return false;
        }
      },
      remove: function () {
        if (this.j) {
          $("body").unbind("mousemove", sa.onMousmove);
          if (imageClipperDefault != true) sa.diigoImageClipMode = false;
          k.isHighlightPen = false;
          $(document.body).removeClass(
            W(k.defaultColors, function (a) {
              return "diigoHiPen-" + a;
            }).join(" ")
          );
          H.onHighlightPenModeChanged(false);
          U.onHighlightPenModeChanged(false);
          return false;
        }
      },
      updateUsername: function () {},
      updateUI: function () {
        var a = $("#diigolet-panel-btnBookmark").toggleClass(
          "saved",
          k.bookmark.saved
        );
        k.bookmark.saved && a.attr("title", "Saved. Click to reorganize");
      },
      updateStatus: function (a) {
        a
          ? $("#diigolet-panel-status").text("Saving...")
          : $("#diigolet-panel-status").text("Saved");
      },
      create: function () {
        this.j = $(diigolet.consts.HTML_CHROME_PANEL)
          .eq(0)
          .appendTo(document.body);
        var a = this;
        $("#diigolet-panel-guideToHighlight").hide();
        $("#diigolet-panel-btnHighlightContainer").addClass("signedIn");
        $("#diigolet-panel-moreBtn ul li:gt(1)").hide();
        $("#diigolet-panel-version").text("(v" + x.version + ")");
        $("#diigolet-panel-closeBtn").click(function () {
          a.hide();
          k.toggleSilent(true);
          k.isHighlightPen = false;
          $(document.body).removeClass(
            W(k.defaultColors, function (c) {
              return "diigoHiPen-" + c;
            }).join(" ")
          );
          H.onHighlightPenModeChanged(false);
          U.onHighlightPenModeChanged(false);
          return false;
        });
        $("#diigolet-panel-btnBookmark>b").click(function (c) {
          x.handle(c, "bookmark");
          return false;
        });
        $("#diigolet-panel-btnHighlight>b").on("mousedown", function (c) {
          c.preventDefault();
        });
        $("#diigolet-panel-btnHighlight>b").click(function (c) {
          c.preventDefault();
          x.handle(c, "highlight");
          return false;
        });
        $("#diigolet-panel-fold").on("click", function () {
          a.fold();
        });
        $("#diigolet-panel-logo").on("click", function () {
          a.unfold();
        });
        $("#diigolet-panel-btnStickyNote>b").click(function (c) {
          c.preventDefault();
          x.handle(c, "addStickyNote");
          return false;
        });
        $("#diigolet-panel-btnAnnotationList>b").click(function (c) {
          c.preventDefault();
          x.handle(c, "toggleAnnotationList");
        });
        $("#diigolet-panel-colorPicker li").click(function (c) {
          var d = $(this).attr("diigocolor");
          window.getSelection().toString().length !== 0
            ? x.handle(c, "highlight", "normal", d)
            : x.handle(c, "ChangeColor", d);
          c.preventDefault();
        });
        $("#diigolet-panel-btnShare").click(function () {
          V.show();
          return false;
        });
        $("#diigolet-panel-moreBtn li._signIn").click(function () {
          k.signedIn && k.user ? iWantToSignOut() : iWantToSignIn();
        });
        $("#diigolet-panel-signInToSave").click(function () {
          iWantToSignIn();
          return false;
        });
        $("#diigolet-panel-hightlight-dropdown").mousedown(function (c) {
          c.preventDefault();
        });
        $("#diigolet-panel-hightlight-dropdown").on("click", function () {
          var c = $("#diigolet-panel-colorPicker").toggleClass("dropdownShown"),
            d = function () {
              c.removeClass("dropdownShown").unbind("mouseleave", d);
              $(document.body).unbind("click", d);
            };
          c.hasClass("dropdownShown")
            ? setTimeout(function () {
                $(document.body).one("click", d);
              }, 13)
            : d();
        });
        $("#diigolet-panel-moreBtn").click(function () {
          var c = $(".optList", this).toggleClass("dropdownShown"),
            d = function () {
              c.removeClass("dropdownShown").unbind("mouseleave", d);
              $(document.body).unbind("click", d);
            };
          c.hasClass("dropdownShown")
            ? setTimeout(function () {
                $(document.body).one("click", d);
              }, 13)
            : d();
        });
        $("#diigolet-panel-feedback").click(function () {
          var c = $(".optList", this).toggleClass("dropdownShown"),
            d = function () {
              c.removeClass("dropdownShown").unbind("mouseleave", d);
              $(document.body).unbind("click", d);
            };
          c.hasClass("dropdownShown")
            ? setTimeout(function () {
                $(document.body).one("click", d);
              }, 13)
            : d();
        });
        new $.Draggable(a.j, {
          handle: "#diigolet-panel-space",
          axis: "y",
          cursor: "n-resize",
          afterDrag: function () {
            a.adjustPosition();
          },
        });
      },
      showInfo: function () {},
      notify: function () {},
      onHighlightColorChanged: function (a) {
        $("#diigolet-panel-colorPicker li").each(function () {
          var c = $(this);
          c.toggleClass("selected", c.attr("diigocolor") == a);
        });
        $("#diigolet-panel-btnHighlight")[0].className = a;
      },
      onHighlightPenModeChanged: function (a) {
        $("#diigolet-panel-Highlight").toggleClass("pen", a);
      },
      notify: function (a) {
        Aa(a);
      },
      fold: function () {
        var a = this,
          c = parseInt(this.j.css("left")),
          d = $("#diigolet-panel-main").find(".diigolet-panel-btn").length,
          f = 0;
        if (d == 3) f = 121;
        else if (d == 4) f = 161;
        this.j
          .addClass("fold")
          .animate({ left: c + f + "px" }, 150, function () {
            $("#diigolet-panel-main").css("width", "0px");
            a.adjustPosition();
          });
        k.isHighlightPen = false;
        $(document.body).removeClass(
          W(k.defaultColors, function (h) {
            return "diigoHiPen-" + h;
          }).join(" ")
        );
        U.onHighlightPenModeChanged(false);
        return false;
      },
      unfold: function () {
        var a = this,
          c = parseInt(this.j.css("left")),
          d = $("#diigolet-panel-main").find(".diigolet-panel-btn").length,
          f = 0;
        if (d == 3) f = 121;
        else if (d == 4) f = 161;
        $("#diigolet-panel-main").css("width", f + 30 + "px");
        this.j
          .removeClass("fold")
          .animate({ left: c - f + "px" }, 150, function () {
            a.adjustPosition();
          });
      },
    };
    U.refresh = U.updateUI;
    var S,
      L,
      Ba =
        (S =
        L =
          {
            HIGHLIGHT_CLASS: "diigoHighlight",
            HIGHLIGHT_ICON_CLASS: "diigoIcon",
            HIGHLIGHT_ID_CLASS: "id_",
            HIGHLIGHT_TYPE_CLASS: "type_",
            colorPen: ["yellow", "blue", "green", "pink"],
            isHighlightElement: function (a) {
              if (
                a.nodeType == 1 &&
                a.className &&
                typeof a.className == "string" &&
                (a.className.indexOf(this.HIGHLIGHT_CLASS) > -1 ||
                  a.className.indexOf(this.HIGHLIGHT_ICON_CLASS) > -1)
              ) {
                var c = { type: -1, ids: [] };
                c.type = Number(
                  a.className.match(
                    RegExp(this.HIGHLIGHT_TYPE_CLASS + "(\\d)")
                  )[1]
                );
                cb(
                  a.className,
                  RegExp(this.HIGHLIGHT_ID_CLASS + "([^\\s]+)(?:\\s|$)", "img"),
                  function (d) {
                    c.ids.push(d[1]);
                  }
                );
                c.ids = c.ids.slice(0, 1);
                return c;
              }
              return false;
            },
            tagBlackList:
              ",applet,area,base,basefont,bdo,button,frame,frameset,iframe,head,hr,img,input,link,map,meta,noframes,noscript,optgroup,option,param,script,select,style,textarea,title,",
            docHtml: "",
            docTxt: "",
            docTxtOffsetList: [],
            domSnapshot: function () {
              var a = this;
              this.docString = document.body.innerHTML;
              this.docTxt = "";
              this.docTxtOffsetList = [];
              new aa(
                document.body,
                function (c) {
                  if (c.nodeType == 3) {
                    var d = c.nodeValue.replace(/\s+/g, "");
                    if (d) {
                      a.docTxtOffsetList.push({
                        offset: a.docTxt.length,
                        node: c,
                      });
                      a.docTxt += d;
                    }
                  }
                },
                {
                  filter: function (c) {
                    return a.domSnapshotNodeFilter(c);
                  },
                }
              ).walk();
            },
            domSnapshotNodeFilter: function (a) {
              if (a.nodeType == 3) return true;
              if (a.nodeType != 1) return false;
              if (
                a.tagName &&
                this.tagBlackList.indexOf("," + a.tagName.toLowerCase() + ",") >
                  -1
              )
                return false;
              if (!a.className) return true;
              if (/(^|\s)diigoHighlight(\s|$)/.test(a.className)) return true;
              if (/(^|\s)diigolet(\s|$)/.test(a.className)) return false;
              return true;
            },
            isHighlightableNode: function (a) {
              return (
                a.nodeType == 3 ||
                (a.nodeType == 1 &&
                  L.tagBlackList.indexOf("," + a.tagName.toLowerCase() + ",") ==
                    -1)
              );
            },
            findOffset: function (a, c, d, f) {
              a = a.nodeValue;
              var h = a.replace(/\s+/g, "");
              if (d) {
                c = c.slice(0, h.length - f);
                for (h = a.length - c.length; h >= f; h--)
                  if (a.slice(h).replace(/\s+/g, "").indexOf(c) > -1) return h;
              } else {
                c = c.slice(Math.max(0, c.length - f - 1));
                for (h = f; h <= a.length; h++)
                  if (a.slice(0, h).replace(/\s+/g, "").indexOf(c) > -1)
                    return h;
              }
              return d ? a.length : 0;
            },
            seek: function (a, c) {
              c = c || 1;
              for (
                var d = this.html2txt(a), f = this.docTxt, h = 0, i = 0, m = 0;
                (h = f.indexOf(d, i)) > -1;

              ) {
                m++;
                i = h + d.length - 1;
                if (m == c) break;
              }
              if (h == -1) return null;
              f = this.docTxtOffsetList;
              var l, r, y, z, w;
              m = 0;
              for (var o, p = f.length; (o = f[m]), m < p; m++) {
                if (
                  h == o.offset ||
                  (h > o.offset && (m + 1 == f.length || h < f[m + 1].offset))
                ) {
                  l = o.node;
                  y = this.findOffset(o.node, d, 1, h - o.offset);
                }
                if (
                  i == o.offset ||
                  (i > o.offset && (m + 1 == f.length || i < f[m + 1].offset))
                ) {
                  r = o.node;
                  z = this.findOffset(o.node, d, 0, i - o.offset);
                  break;
                }
              }
              if (l && r) {
                h = function (n, q) {
                  for (; (n = n.parentNode); ) if (n == q) return true;
                  return false;
                };
                for (f = l; (f = f.parentNode); )
                  if (h(r, f)) {
                    w = f;
                    break;
                  }
                if (!w) return null;
              }
              return l && r
                ? {
                    startNode: l,
                    endNode: r,
                    startOffset: y,
                    endOffset: z,
                    endIndex: i,
                    commonAncestor: w,
                    txt: d,
                  }
                : null;
            },
            paint: function (a) {
              function c(s, u) {
                $(s)
                  .addClass(L.HIGHLIGHT_CLASS)
                  .addClass(m)
                  .addClass(L.HIGHLIGHT_TYPE_CLASS + u.type)
                  .removeClass("yellow blue green pink")
                  .addClass(
                    u.extra.color && u.extra.color.length > 0
                      ? u.extra.color
                      : "yellow"
                  )
                  .attr("draggable", "true");
                return s;
              }
              function d(s) {
                var u = $(s.parentNode);
                u.hasClass(L.HIGHLIGHT_CLASS)
                  ? u.addClass(m)
                  : $(s).wrap(c(fa.createElement("em"), i));
              }
              function f(s, u) {
                $(s)
                  .addClass(L.HIGHLIGHT_ICON_CLASS)
                  .addClass(m)
                  .addClass(
                    L.HIGHLIGHT_TYPE_CLASS +
                      diigolet.consts.ANNOTATION_TYPE_ICON
                  )
                  .addClass("TextIcon")
                  .toggleClass("public", u.isPublic() && l.length > 0)
                  .toggleClass("private", u.isPrivate() && l.length > 0)
                  .toggleClass(
                    "group",
                    u.inAnyGroups() &&
                      l.length > 0 &&
                      (B.getCommentsInfo(u.comments) == "onlyGroup" ||
                        B.getCommentsInfo(u.comments) == "both")
                  )
                  .toggleClass("diigoHighlightcommented", l.length > 0)
                  .removeClass("diigoadd yellow blue green pink")
                  .addClass(u.extra.color)
                  .css({ bottom: "0px" });
                if (l.length > 0) {
                  $(s).html(
                    "<span class='" +
                      m +
                      " " +
                      L.HIGHLIGHT_ICON_CLASS +
                      " " +
                      L.HIGHLIGHT_TYPE_CLASS +
                      diigolet.consts.ANNOTATION_TYPE_ICON +
                      "'>" +
                      l.length +
                      "</span>"
                  );
                  $(s).attr("title", P.tipMsg(u));
                  h.adjustIconBg(u);
                } else {
                  $(s).html("");
                  $(s).attr("title", "");
                }
                return s;
              }
              var h = this,
                i = I.find(a),
                m = L.HIGHLIGHT_ID_CLASS + i.id,
                l = i.comments;
              if (i.paintedSuccessfully) {
                c("em." + m, i);
                f("div." + m, i);
                $("em." + m)
                  .filter(":last")
                  .toggleClass("diigoHighlightcommented", l.length > 0);
              } else {
                i.painted = true;
                this.domSnapshot();
                var r = this.seek(i.content, i.extra.nth);
                if (r) {
                  i.prettyTxt = this.html2txt_pretty(i.content);
                  if (r.startNode === r.endNode) {
                    if (r.endOffset <= r.startOffset)
                      r.startOffset = r.endOffset - r.txt.length;
                    a = r.startNode.splitText(r.startOffset);
                    r = a.splitText(r.endOffset - r.startOffset);
                    d(r.previousSibling || a);
                  } else {
                    var y = r.startNode.splitText(r.startOffset),
                      z = r.endNode.splitText(r.endOffset).previousSibling,
                      w = false,
                      o = [],
                      p = 0,
                      n = i.prettyTxt.replace(/\s/g, "").length;
                    new aa(
                      r.commonAncestor,
                      function (s) {
                        if (!w && s === y) w = true;
                        if (w)
                          if (h.isTextNode(s)) {
                            var u = s.nodeValue.replace(/(^\s+|\s+$)/g, "");
                            if (u.length > 0) {
                              o.push(s);
                              p += u.replace(/\s/g, "").length;
                            }
                          }
                        if (w && (s === z || ($.browser.msie && p >= n))) {
                          w = false;
                          throw aa.$end;
                        }
                      },
                      { filter: this.isHighlightableNode }
                    ).walk();
                    J(o, function (s) {
                      d(s);
                    });
                  }
                  a = $("em." + m);
                  i.paintedSuccessfully = a.size() > 0;
                  if (
                    i.type == diigolet.consts.ANNOTATION_TYPE_TEXT &&
                    $("div." + m).size() <= 0 &&
                    a.size() > 0
                  ) {
                    r = $(fa.createElement("div"));
                    var q = $(fa.createElement("span"));
                    q.addClass("diigoHighlightCommentLocator");
                    var t = a.filter(":last");
                    t.toggleClass("diigoHighlightcommented", l.length > 0);
                    q.appendTo(t);
                    r.appendTo(q);
                    f(r, i);
                  }
                  if (a.size() > 0) {
                    a = a.offset();
                    i.extra.top = a.top + $(".ss-content").scrollTop();
                    i.extra.left = a.left;
                  }
                  this.adjustColor(i);
                  return i.paintedSuccessfully;
                }
              }
            },
            adjustIconBg: function (a) {
              var c = window,
                d;
              try {
                $("em." + L.HIGHLIGHT_ID_CLASS + a.id)
                  .parents()
                  .filter(function () {
                    var h = c
                      .getComputedStyle(this, null)
                      .getPropertyValue("background-color");
                    if (h != "transparent") {
                      d = h;
                      throw "end";
                    }
                    return false;
                  });
              } catch (f) {}
              $(
                "div.diigoIcon.diigoHighlightcommented.private." +
                  L.HIGHLIGHT_ID_CLASS +
                  a.id
              ).attr("style", "background-color:" + d + " !important");
            },
            adjustColor: function (a) {
              function c(d) {
                var f = d.r / 255,
                  h = d.g / 255;
                d = d.b / 255;
                return (
                  0.2126 *
                    (f <= 0.03928
                      ? f / 12.92
                      : Math.pow((f + 0.055) / 1.055, 2.4)) +
                  0.7152 *
                    (h <= 0.03928
                      ? h / 12.92
                      : Math.pow((h + 0.055) / 1.055, 2.4)) +
                  0.0722 *
                    (d <= 0.03928
                      ? d / 12.92
                      : Math.pow((d + 0.055) / 1.055, 2.4))
                );
              }
              a = I.find(a);
              $("em." + L.HIGHLIGHT_ID_CLASS + a.id).each(function (d, f) {
                var h = $(f),
                  i = Ta(h.css("backgroundColor")),
                  m = Ta(h.css("color"));
                var l = c(m),
                  r = c(i);
                if (l > r) {
                  m = l;
                  l = r;
                } else {
                  m = r;
                  l = l;
                }
                i =
                  (m + 0.05) / (l + 0.05) > 2.5
                    ? null
                    : c(i) > 0.5
                    ? "#000000"
                    : "#FFFFFF";
                i && h.css("color", i);
              });
            },
            unpaint: function (a) {
              a = I.find(a).id;
              var c = L.HIGHLIGHT_ID_CLASS + a;
              $("em." + c).each(function (d, f) {
                var h = $(f);
                h.removeClass(c);
                h.find("div.diigoIcon." + c).remove();
                for (var i; (i = f.firstChild); )
                  f.parentNode.insertBefore(i, f);
                h.remove();
              });
            },
            isTextNode: function (a) {
              return a.nodeType == 3;
            },
            isTextSelected: function () {
              return window.getSelection
                ? pa(String(window.getSelection())).length > 0
                : $.browser.msie
                ? document.selection.type == "Text" &&
                  pa(document.selection.createRange().text).length > 0
                : false;
            },
            getSelection: function () {
              var a = "";
              if (window.getSelection) a = pa(String(window.getSelection()));
              else if ($.browser.msie)
                a =
                  document.selection.type == "Text" &&
                  pa(document.selection.createRange().text);
              return a;
            },
            checkSelection: function () {
              var a,
                c = { ok: false, txt: "", html: "", msg: "", pen: false },
                d = null;
              if (!this.isTextSelected()) {
                c.msg = diigolet.consts.MSG_HIGHLIGHT_LENGTH;
                c.pen = true;
                return c;
              }
              if (window.getSelection) {
                a = window.getSelection();
                if (a.removeAllRanges) {
                  c.html = this.range2html((a = a.getRangeAt(0)));
                  d = a.endContainer;
                } else c.html = String(a);
              } else
                c.html = $.browser.msie
                  ? this.range2html(document.selection.createRange())
                  : document.getSelection();
              c.txt = this.html2txt(c.html);
              if (Ra(c.html)) {
                c.msg = diigolet.consts.MSG_HIGHLIGHT_TOO_LONG;
                c.pen = false;
                return c;
              }
              if (c.txt.length < 5 || c.txt.length > 2e3) {
                c.msg = diigolet.consts.MSG_HIGHLIGHT_LENGTH;
                c.pen = false;
                return c;
              }
              if (
                $("<div></div>")
                  .html(c.html)
                  .find(".diigoHighlight,.diigolet")
                  .size() > 0
              ) {
                c.msg = "Selection cannot be highlighted.";
                return c;
              }
              c.ok = true;
              if (d) {
                var f = this,
                  h = "";
                a = 0;
                new aa(
                  document.body,
                  function (m) {
                    if (m.nodeType == 3) {
                      var l = m.nodeValue.replace(/\s+/g, "");
                      if (l) h += l;
                    }
                    if (m == d) throw aa.$end;
                  },
                  {
                    filter: function (m) {
                      return f.domSnapshotNodeFilter(m);
                    },
                  }
                ).walk();
                var i = 0;
                for (i = 0; (i = h.indexOf(c.txt, i)) > -1; ) {
                  a++;
                  i = i + c.txt.length - 1;
                }
                c.nth = a;
              } else c.nth = 1;
              return c;
            },
            range2html: function (a) {
              return this.stripScripts(
                a.htmlText == undefined
                  ? $("<div></div>").append(a.cloneContents()).html()
                  : a.htmlText
              );
            },
            stripScripts: function (a) {
              return a.replace(
                RegExp("(?:<script.*?>)((\n|\r|.)*?)(?:</script>)", "img"),
                ""
              );
            },
            html2txt: function (a) {
              a = $("<div></div>")
                .html(this.stripScripts(a))
                .appendTo(document.body)
                .hide();
              var c = this,
                d = "";
              new aa(
                a[0],
                function (f) {
                  if (f.nodeType == 3) d += f.nodeValue;
                },
                {
                  filter: function (f) {
                    return (
                      f.nodeType == 3 ||
                      (f.nodeType == 1 &&
                        c.tagBlackList.indexOf(
                          "," + f.tagName.toLowerCase() + ","
                        ) == -1)
                    );
                  },
                }
              ).walk();
              a.remove();
              return d.replace(/\s+/g, "");
            },
            html2txt_pretty: function (a) {
              a = $("<div></div>")
                .html(this.stripScripts(a))
                .appendTo(document.body);
              var c;
              if (
                window.getSelection &&
                window.getSelection().removeAllRanges
              ) {
                c = document.createRange();
                c.setStart(a[0], 0);
                c.setEnd(a[0], a[0].childNodes.length);
                c = this.range2txt(c);
              } else if ($.browser.msie) {
                a.hide().appendTo(document.body);
                c = document.body.createTextRange();
                c.moveToElementText(a[0]);
                c = this.range2txt(c);
              } else c = this.node2txt(a[0]);
              a.remove();
              return c;
            },
            node2txt: function (a) {
              var c = "",
                d = 3;
              new aa(a, function (f) {
                if (
                  f.nodeType == 3 &&
                  $(f).parents("script,style,noscript").size() == 0
                )
                  c += (d == 3 ? "" : "\n") + f.nodeValue;
                d = f.nodeType;
              }).walk();
              return this.normalizeTxt(c);
            },
            range2txt: function (a) {
              if (window.getSelection) {
                var c = window.getSelection();
                c.removeAllRanges ? c.removeAllRanges() : c.collapse();
                c.addRange(a);
                a = c.toString();
                c.removeAllRanges ? c.removeAllRanges() : c.collapse();
              } else if ($.browser.msie) a = a.text;
              else {
                a = "";
                alert("Browser not supported!");
              }
              return this.normalizeTxt(a);
            },
            normalizeTxt: function (a) {
              return xa(pa(a), /\s+/, function (c) {
                return c[0].match(/[\r\n]/) ? "\n" : " ";
              }).replace(/[\r\n]+/g, "\n");
            },
          });
    aa.$end = Error("end walking");
    aa.prototype.walk = function () {
      this._walk(this.node, this.func);
    };
    aa.prototype._walk = function (a, c) {
      var d = this.options;
      if (!this.end)
        if (d.filter(a)) {
          try {
            c(a);
          } catch (f) {
            if (f === aa.$end) {
              this.end = true;
              return;
            }
            throw f;
          }
          for (a = d.reverse ? a.lastChild : a.firstChild; a; ) {
            this._walk(a, c);
            a = d.reverse ? a.previousSibling : a.nextSibling;
          }
        }
    };
    var B = {
      j: null,
      shown: false,
      showMode: "view",
      dragging: false,
      backupContent: "",
      editInterval: null,
      tempObj: {},
      saveInterval: null,
      privateEditing: false,
      filterMode: "_all",
      ann: null,
      init: function () {
        if ($("#diigolet-dlg-sticky").length === 0) {
          var a = this;
          a.create();
          a.groupEditor.init();
          setTimeout(function () {
            a.j
              .bind("mouseleave", function () {
                a.scheduleHide();
              })
              .bind("mouseenter", function () {
                a.dragging || k.draggingFloatNote || a.cancelHide();
              });
          }, 13);
          $(".IconFeild")
            .mouseover(function () {
              a.showActionDropdown();
            })
            .click(function () {
              return false;
            });
          K("diigolet-dlg-sticky-close").click(function () {
            if (a.privateEditing) {
              var c = $("#FN-private-saveBtn");
              c.addClass("notify");
              setTimeout(function () {
                c.removeClass("notify");
              }, 600);
            } else {
              a.hide();
              return false;
            }
          });
          $(".FN-switcher").on("click", function (c) {
            if (
              c.target.id == "FN-switcher-private" ||
              c.target.parentNode.id == "FN-switcher-private"
            )
              a.switchTab("private");
            else if (
              c.target.id == "FN-switcher-group" ||
              c.target.parentNode.id == "FN-switcher-group"
            )
              a.switchTab("group");
          });
          $("#diigolet-dlg-sticky-addTab").on("click", function () {
            if (
              !(
                $("#FN-group-content-postform")
                  .find("button")
                  .prop("disabled") == true ||
                $("#FN-group-post").prop("disabled") == true
              )
            )
              if (a.j.hasClass("onlyPrivate")) {
                if ($("#FN-content-footer").find("#editing").is(":visible"))
                  if ($("#FN-private-editor").val().match(/^\s*$/)) {
                    $("#FN-private-editor").val(a.backupContent);
                    a.privateEditOn(false);
                    a.privateEditing = false;
                    a.j.removeClass("onlyPrivate").addClass("groupNew");
                    a.switchTab("group");
                  } else {
                    var c = $("#FN-private-saveBtn");
                    c.addClass("notify");
                    setTimeout(function () {
                      c.removeClass("notify");
                    }, 600);
                  }
                else {
                  a.j.removeClass("onlyPrivate").addClass("groupNew");
                  a.switchTab("group");
                }
                $("#FN-current-group")
                  .find("span")
                  .text("+Share to a new group");
              } else {
                a.j.removeClass("onlyGroup");
                a.switchTab("private");
                var d = document.querySelector("#FN-private-editor");
                Ka.init(d, 200);
              }
          });
          $("#diigolet-dlg-sticky-currentColor").on("click", function (c) {
            c.stopPropagation();
            $("#diigolet-dlg-sticky-colorPicker").toggle();
          });
          $("#FN-current-group").on("click", function (c) {
            c.stopPropagation();
            $("#FN-group-content-postform").find("button").prop("disabled") ==
              true ||
              $("#FN-group-post").prop("disabled") == true ||
              $("#FN-group-menu").toggle();
          });
          $(document).on("click", function () {
            $("#diigolet-dlg-sticky-colorPicker").hide();
            $("#FN-group-menu").hide();
          });
          $("#diigolet-dlg-sticky-color")
            .find(".dlg-colorItem")
            .on("click", function () {
              var c = $(this).attr("color");
              a.updateColor(c, "click");
            });
          $("#FN-group-menu").on("click", "li", function (c) {
            if (c.target.id == "FN-group-share-new") {
              a.j.addClass("groupNew");
              var d = $("#FN-group-share").empty();
              d.append(
                A.dom.buildOne("option", { value: 0 }, ["Choose a group"])
              );
              d.append(
                A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
              );
              J(k.myGroups, function (f) {
                $("#FN-group-ul").find('li[data-dgroupname="' + f.name + '"]')
                  .length == 0 &&
                  d.append(
                    A.dom.buildOne("option", { value: f.name }, [f.displayName])
                  );
              });
              $("#FN-current-group").find("span").text("+Share to a new group");
              $("#FN-group-post").focus();
            } else {
              c = {
                name: $(this).attr("data-dGroupName"),
                displayName: $(this).text(),
              };
              a.j.removeClass("groupNew");
              a.switchGroup(c);
            }
          });
          $("#FN-group-share")
            .empty()
            .unbind()
            .change(function () {
              $("#FN-post-form").removeClass("notEdit");
            });
          $("#FN-post-form")
            .find("button")
            .on("click", function () {
              a.shareToNewGroup();
            });
          $("#FN-post-form")
            .find("a")
            .on("click", function () {
              if (
                $("#FN-group-content-container").find(
                  ".FN-group-content-section"
                ).length > 0
              ) {
                a.j.removeClass("groupNew");
                $("#FN-group-ul").find("li").eq(0).trigger("click");
                $("#FN-group-post").val("");
                $("#FN-group-share").val(0);
              } else a.hide();
            });
          $("#FN-group-content-container").on(
            "click",
            ".FN-group-comment-item-delete",
            function () {
              var c = $(this).parent().parent().attr("data-cid"),
                d = $("#FN-current-group").find("span").attr("data-group");
              x.handle(event, "dlgIC_del_ic", c, d);
            }
          );
          $("#FN-private-delete").on("click", function (c) {
            var d = $(this).attr("data-cid");
            x.handle(c, "dlgIC_del_ic", d);
            if (a.j.hasClass("onlyPrivate")) {
              a.ann.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE &&
                a.ann.unpaint();
              a.hide();
            }
          });
          $("#FN-private-editor")
            .on("input propertychange", function () {
              var c = $("#FN-private-editor").val();
              if (a.backupContent != c) {
                a.privateEditing = true;
                a.privateEditOn(true);
              }
            })
            .focus(function () {
              a.backupContent = $("#FN-private-editor").val();
            });
          $("#FN-private-saveBtn").on("click", function () {
            if (!$("#FN-private-editor").val().match(/^\s*$/)) {
              a.ann.onlyInGroup ||
              !a.ann.saved ||
              a.getCommentCount("private", a.ann.comments) == 0
                ? a.addPrivateComment()
                : a.uploadPrivateComment();
              a.privateEditOn(false);
              a.privateEditing = false;
            }
          });
          $("#FN-private-cancelBtn").on("click", function () {
            $("#FN-private-editor").val(a.backupContent);
            a.privateEditOn(false);
            a.privateEditing = false;
            a.hide();
          });
          $("#FN-group-content-postform")
            .find("textarea")
            .focus(function () {
              $("#FN-group-content-postform").addClass("active");
            });
          $("#FN-group-content-postform")
            .find("a")
            .on("click", function () {
              $("#FN-group-content-postform").removeClass("active");
              $("#FN-group-content-postform").find("textarea").val("");
            });
          k.addEventListener("ic_add", a);
          k.addEventListener("ic_del", a);
          k.addEventListener("ann_del", a);
          k.addEventListener("ic_edit", a);
          new $.Draggable(a.j, { handle: "._dragHandle" });
        }
      },
      destroy: function () {},
      create: function () {
        this.j = $(diigolet.consts.HTML_DLG_IC)
          .css({ position: "absolute" })
          .appendTo(fa.body)
          .hide();
        $.browser.ieBelow7 && this.j.addClass("diigoletFNIEPatch");
      },
      updateColor: function (a, c) {
        $("#diigolet-dlg-sticky-color")
          .find(".dlg-colorItem")
          .removeClass("colorchecked");
        this.j.removeClass("yellow blue green pink").addClass(a);
        $("#diigolet-dlg-" + a).addClass("colorchecked");
        if (c == "click") {
          if (!this.ann.extra || this.ann.extra == "undefined")
            this.ann.extra = { color: a };
          else this.ann.extra.color = a;
          C.updateExtra(this.ann);
          this.ann.paint();
          var d = "id_" + this.ann.id;
          if ($("." + d).length > 1) {
            d = $("." + d)[0];
            $(d).scrollmarker();
          } else $("." + d).scrollmarker();
          chrome.runtime.sendMessage({
            name: "editItem",
            cmd: "changeColor",
            annotation: this.ann,
          });
        }
      },
      showEditSticky: function () {
        this.groupEditor.show();
      },
      show: function (a, c, d, f) {
        return this.show_(a.pageX, a.pageY, c, d, f);
      },
      show_: function (a, c, d, f, h) {
        var i = this;
        i.ann = d;
        i.updateColor(d.extra.color || "yellow");
        f = f || "view";
        i.cancelHide();
        i.cancelShow();
        N("[IC] showing...");
        i.j.find("ul.diigoletFNDropdown").hide();
        if (f === undefined) f = i.showMode;
        else i.showMode = f;
        var m = i.getCommentsInfo(d.comments);
        if (m == "onlyPrivate") {
          i.switchTab("private");
          i.j.removeClass("onlyGroup").addClass("onlyPrivate");
        } else if (m == "onlyGroup") {
          i.switchTab("group");
          i.j.removeClass("onlyPrivate").addClass("onlyGroup");
        } else if (m == "both") {
          i.j.removeClass("onlyPrivate onlyGroup");
          i.switchTab("private");
        }
        Y.hide();
        P.j && P.hide();
        var l = i.j.toggleClass("editing", f != "view");
        l.find("._menuItem_deleteSticky").showHide(d.canDelete(i.filterMode));
        setTimeout(function () {
          i.refreshComments();
          var r = i.getGroups(d.comments);
          if (r.length > 0) {
            $("#FN-current-group>span").text(r[0].displayName);
            i.switchGroup(r[0]);
          }
          r = P.tipMsg(i.ann);
          i.j.find("span.personalText").text(r);
          i.j.find("span.personalText").attr("title", r);
          if (r.length > 80) {
            $(".footText").addClass("multipalCol");
            $(".footText").removeClass("singleCol");
          } else {
            $(".footText").addClass("singleCol");
            $(".footText").removeClass("multipalCol");
          }
          if (d.user == k.user) {
            $(".IconFeild").show().hide();
            $(".footText").addClass("myCommentSpan");
            $(".footText").removeClass("notMyCommentSpan");
          } else {
            $(".IconFeild").hide();
            $(".footText").addClass("notMyCommentSpan");
            $(".footText").removeClass("myCommentSpan");
          }
          (i.shown && f != "view") || i.updatePos({ pageX: a, pageY: c });
          l.show();
          i.shown = true;
          if (f === "add") {
            $("#FN-private-editor").focus();
            i.switchTab("private");
            i.j
              .removeClass("onlyGroup")
              .addClass("onlyPrivate")
              .addClass("groupNew");
            $("#FN-group-ul").empty();
            $("#FN-current-group").find("span").text("+Share to a new group");
            i.privateEditing = true;
            i.privateEditOn(true);
          }
          $("#diigolet-dlg-sticky-color").show();
          r = document.querySelector("#FN-private-editor");
          Ka.init(r, 200);
          if (i.ifMoreThanOnePrivateComment(d.comments)) {
            r = $("#FN-private-editor").val();
            i.mergePrivateComments(r);
          }
          var y = $("#FN-group-share").empty();
          y.append(A.dom.buildOne("option", { value: 0 }, ["Choose a group"]));
          y.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          J(k.myGroups, function (z) {
            $("#FN-group-ul").find('li[data-dgroupname="' + z.name + '"]')
              .length == 0 &&
              y.append(
                A.dom.buildOne("option", { value: z.name }, [z.displayName])
              );
          });
          i.j.hasClass("onlyPrivate")
            ? $("#diigolet-dlg-sticky-addTab").attr("title", "Add a group note")
            : $("#diigolet-dlg-sticky-addTab").attr(
                "title",
                "Add a private note"
              );
        }, h);
      },
      mergePrivateComments: function (a) {
        for (var c = this.ann, d = c.comments.length, f = [], h = 0; h < d; h++)
          c.comments[h].mode === diigolet.consts.PRIVACY_MODE_PRIVATE &&
            f.push(c.comments[h].id);
        a = { annotationId: c.id, mode: 2, content: a };
        if (c.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE && !c.saved) {
          c._toAddInlineComment = a;
          c.saving = true;
          C.addAnnotation(c);
        } else if (c.type == diigolet.consts.ANNOTATION_TYPE_TEXT && !c.saved) {
          c._toAddInlineComment = a;
          c.saving = true;
          C.addAnnotation(c);
        } else C.addInlineComment(a);
        setTimeout(function () {
          for (var i = 0; i < f.length; i++) {
            var m = ea.find(f[i]),
              l = m.getAnnotation();
            l.comments.splice(l.comments.indexOf(m), 1);
            C.deleteInlineComment(m);
          }
        }, 200);
      },
      shareToNewGroup: function () {
        var a = $("#FN-post-form"),
          c = a.find("textarea"),
          d = c.val(),
          f = a.find("select"),
          h = f.val();
        if (d.match(/^\s*$/)) {
          c.addClass("notify");
          setTimeout(function () {
            c.removeClass("notify");
          }, 600);
        } else if (h == 0 || h == -1) {
          f.addClass("notify");
          setTimeout(function () {
            f.removeClass("notify");
          }, 600);
        } else {
          d = { annotationId: B.ann.id, mode: void 0, content: d };
          if (h) {
            d.justForGroups = true;
            d.groups = [h];
          }
          h = I.find(d.annotationId);
          if (h.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE && !h.saved) {
            h._toAddInlineComment = d;
            h.saving = true;
            C.addAnnotation(h);
          } else if (
            h.type == diigolet.consts.ANNOTATION_TYPE_TEXT &&
            !h.saved
          ) {
            h._toAddInlineComment = d;
            h.saving = true;
            C.addAnnotation(h);
          } else C.addInlineComment(d);
          a.find("button").prop("disabled", true);
          a.find("textarea").prop("disabled", true);
        }
      },
      addPrivateComment: function () {
        var a = $("#FN-private-editor").val();
        if (!a.match(/^\s*$/)) {
          a = {
            annotationId: B.ann.id,
            mode: diigolet.consts.PRIVACY_MODE_PRIVATE,
            content: a,
          };
          var c = I.find(a.annotationId);
          if (
            c.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE &&
            (!c.saved || c.onlyInGroup)
          ) {
            c._toAddInlineComment = a;
            c.saving = true;
            C.addAnnotation(c);
          } else if (
            c.type == diigolet.consts.ANNOTATION_TYPE_TEXT &&
            (!c.saved || c.onlyInGroup)
          ) {
            c._toAddInlineComment = a;
            c.saving = true;
            C.addAnnotation(c);
          } else C.addInlineComment(a);
        }
      },
      hide: function () {
        this.cancelHide();
        this.cancelShow();
        if (this.shown) {
          this.reSetIcWindow();
          this.j.hide();
          this.shown = false;
          var a = this.ann;
          a.activate(false);
          a &&
            a.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE &&
            !a.saved &&
            !a.saving &&
            !a.deleted &&
            a.del();
          this.ann = null;
          this.backupContent = "";
        }
      },
      reSetIcWindow: function () {
        $("#diigolet-dlg-sticky-colorPicker").hide();
        $("#FN-private-editor").blur();
        $("#FN-private-editor").val("");
        $("#FN-private-datetime").text("");
        $("#FN-private-delete").hide();
        this.switchTab("private");
        $("#FN-group-menu").hide();
        $("#FN-group-content-postform").find("textarea").val("");
        this.j.removeClass("groupNew");
        $("#FN-group-content-postform")
          .find("textarea,button")
          .prop("disabled", false);
        $("#FN-post-form").find("textarea,button").prop("disabled", false);
        $("#FN-group-post").val("");
        $("#FN-group-ul").empty();
        $("#FN-group-content-container").empty();
      },
      showActionDropdown: function () {
        var a = this.j.find("div.IconFeild").offset(),
          c = K("diigolet-annMenu");
        c.find("#diigolet-annMenu-add").hide();
        c.find("#diigolet-annMenu-del").hide();
        c.find("#diigolet-annMenu-tip").hide();
        var d = (P.ann = this.ann);
        if (d.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE) {
          c.find("._onlyMy").hide();
          c.find("#diigolet-annMenu-My").show();
        } else {
          c.find("._onlyMy").show();
          $.each(k.defaultColors, function (f, h) {
            K("diigolet-context-" + h).toggleClass("colorchecked", false);
          });
          d.extra && d.extra.color && d.extra.color.length > 0
            ? K("diigolet-context-" + d.extra.color).toggleClass(
                "colorchecked",
                true
              )
            : K("diigolet-context-yellow").toggleClass("colorchecked", true);
        }
        c.find("#diigolet-annMenu-tip-before").hide();
        c.css({ top: a.top + 20, left: a.left });
        ra(c.show(), 13);
      },
      uploadPrivateComment: function () {
        var a = $("#FN-private-editor").val(),
          c = $("#FN-private-delete").attr("data-cid");
        a != this.backupContent && C.editInlineComment(c, a);
      },
      switchGroup: function (a) {
        $("#FN-group-content-container")
          .find(".FN-group-content-section")
          .hide();
        $('.FN-group-content-section[data-dgroup="' + a.name + '"]').show();
        $("#FN-current-group")
          .find("span")
          .text(a.displayName)
          .attr("data-group", a.name);
      },
      switchTab: function (a) {
        var c = $("#diigolet-dlg-sticky-content");
        if (a === "private") c.removeClass("group").addClass("private");
        else {
          c.removeClass("private").addClass("group");
          $("#FN-group-post").focus();
        }
      },
      privateEditOn: function (a) {
        if (a === true)
          $("#FN-content-footer")
            .find("#editDone")
            .hide()
            .end()
            .find("#editing")
            .show();
        else
          a === false &&
            $("#FN-content-footer")
              .find("#editing")
              .hide()
              .end()
              .find("#editDone")
              .show();
      },
      refreshComments: function () {
        var a = this.ann.getComments(this.filterMode);
        this.updatePrivateComments(a);
        this.updateGroupComments(a);
      },
      showNoComments: function () {
        this.ann.getComments(this.filterMode).length == 0 &&
          this.j
            .find("div.diigoletFNContent")
            .html(
              '<span class="noComments">There are no sticky notes yet.</span>'
            );
      },
      updatePos: function (a) {
        this.j.css("display") == "none" &&
          this.j.css({ left: -999, top: -999, display: "block" });
        var c = this.ann,
          d = this.j.find("div.diigoletFNContent");
        d.css({ height: "" });
        d.height() > 214 ? d.height(214) : d.css({ height: "" });
        var f =
          c.type != 2 ? a.pageX - 8 : parseInt(c.getEle().css("left")) + 20;
        a = c.type != 2 ? a.pageY - 8 : parseInt(c.getEle().css("top")) + 20;
        d = this.j;
        c = $(document).scrollLeft();
        var h = $(document).scrollTop(),
          i = c + $(window).width() - d.width() - 10,
          m = h + $(window).height() - d.height() - 10;
        if (f > i) f = i;
        if (f < c) f = c;
        if (a > m) a = m;
        if (a < h) a = h;
        d.css({ left: f, top: a });
      },
    };
    M(B, {
      showDelay: 200,
      showTimer: null,
      hideDelay: 300,
      hideTimer: null,
      cancelShow: function () {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      },
      cancelHide: function () {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      },
      aboutToShow: function () {
        return this.shown || this.showTimer;
      },
      aboutToHide: function () {
        return !this.shown || this.hideTimer;
      },
      scheduleShow: function (a, c) {
        var d = this,
          f = { pageX: a.pageX - 10, pageY: a.pageY - 10 };
        d.cancelHide();
        d.cancelShow();
        d.showTimer = setTimeout(function () {
          d.show(f, c);
        }, d.showDelay);
      },
      scheduleHide: function () {
        var a = this;
        if (!(a.dragging || k.draggingFloatNote || a.isEditing())) {
          a.cancelHide();
          a.cancelShow();
          a.hideTimer = setTimeout(function () {
            a.hide();
          }, a.hideDelay);
        }
      },
    });
    M(B, {
      eleId_ic: function (a) {
        return "diigolet-dlgIC-ic_" + a.id;
      },
      _labelsHtml: function (a) {
        var c = this.filterMode,
          d = "",
          f = "";
        if (a.canDelete())
          f =
            '<a href="javascript:void(0)" class="del"><img diigoonclick="#{ONCLICK}" title="Delete" src="https://www.diigo.com/client/ietoolbar/spacer.gif" style="width:12px;height:12px;cursor:pointer" alt="" /></a>';
        if (a.isPublic() && (c == "_all" || c == "_public") && a.user == k.user)
          d += '<label class="_public"><span>Public</span>DEL</label>'.replace(
            "DEL",
            ua(f, {
              ONCLICK: "diigolet.handle(event, 'dlgIC_del_ic', '" + a.id + "')",
            })
          );
        if (a.isPrivate() && (c == "_all" || c == "_private"))
          d +=
            '<label class="_private"><span>Private</span>DEL</label>'.replace(
              "DEL",
              ua(f, {
                ONCLICK:
                  "diigolet.handle(event, 'dlgIC_del_ic', '" + a.id + "')",
              })
            );
        J(a.groups, function (h) {
          if (c == h.name || c == "_all")
            d += ua(
              '<label class="_#{GROUP_NAME}"><a href="#{GROUP_URL}" class="link">#{GROUP_DISPLAY_NAME}</a>#{DEL}</label>',
              {
                GROUP_NAME: h.name,
                GROUP_DISPLAY_NAME: h.displayName,
                GROUP_URL: x.urls.getGroupURL(h.name),
                DEL: ua(f, {
                  ONCLICK:
                    "diigolet.handle(event, 'dlgIC_del_ic', '" +
                    a.id +
                    "', '" +
                    h.name +
                    "')",
                }),
              }
            );
        });
        return d;
      },
      addInlineComment: function (a) {
        if (a.mode == diigolet.consts.PRIVACY_MODE_PRIVATE) {
          /minute|day|hour/.test(a.datetime)
            ? $("#FN-private-datetime").text("")
            : $("#FN-private-datetime").text(a.datetime.replace("on ", ""));
          $("#FN-private-delete").attr("data-cid", a.id).show();
        } else {
          var c = a.groups[0].name,
            d = a.groups[0].displayName;
          a = this.generateGroupItem(a);
          if (this.j.hasClass("groupNew")) {
            $("#FN-group-content-container").append(
              '<div class="FN-group-content-section" data-dgroup="' +
                c +
                '"></div>'
            );
            $("#FN-group-ul").append(
              '<li data-dGroupName="' + c + '" title="' + d + '">' + d + "</li>"
            );
            this.j.removeClass("groupNew");
            this.switchGroup({ name: c, displayName: d });
            $("#FN-group-post").val("");
            $("#FN-post-form").find("button,textarea").prop("disabled", false);
            $("#FN-group-share").val(0);
            this.ann.paint();
          } else {
            $("#FN-group-content-container")[0].scrollTop = $(
              "#FN-group-content-container"
            )[0].scrollHeight;
            B.groupEditor.remove();
          }
          $('.FN-group-content-section[data-dgroup="' + c + '"]').append(a);
        }
      },
      editInlineComment: function (a) {
        /minute|day|hour/.test(a.datetime)
          ? $("#FN-private-datetime").text("")
          : $("#FN-private-datetime").text(a.datetime.replace("on ", ""));
      },
      getCommentsInfo: function (a) {
        var c = 0,
          d = 0,
          f = a.length,
          h;
        for (h = 0; h < f; h++)
          if (a[h].mode == diigolet.consts.PRIVACY_MODE_PRIVATE) c++;
          else a[h].mode == diigolet.consts.PRIVACY_MODE_GROUP && d++;
        return c == 0 && d == 0
          ? "noComment"
          : c > 0 && d == 0
          ? "onlyPrivate"
          : c == 0 && d > 0
          ? "onlyGroup"
          : "both";
      },
      ifMoreThanOnePrivateComment: function (a) {
        var c = 0,
          d = a.length,
          f;
        if (d === 0) return false;
        for (f = 0; f < d; f++)
          a[f].mode == diigolet.consts.PRIVACY_MODE_PRIVATE && c++;
        return c > 1 ? true : false;
      },
      updatePrivateComments: function (a) {
        var c = a.length,
          d = "",
          f = "",
          h,
          i = this.getCommentCount("private", a),
          m;
        if (i >= 1)
          for (m = 0; m < c; m++) {
            if (a[m].mode === diigolet.consts.PRIVACY_MODE_PRIVATE) {
              d += a[m].content.replace(/\n$/, "");
              if (i > 1) d += "[" + a[m].datetime + "]\n";
              f = a[m].datetime;
              h = a[m].id;
            }
          }
        else if (i == 0) return;
        d = d.replace(/<br \/>/g, "\n");
        $("#FN-private-editor").val(d);
        this.backupContent = d;
        if (f != "" && h) {
          /minute|day|hour/.test(f) ||
            $("#FN-private-datetime").text(f.replace("on ", ""));
          $("#FN-private-delete").attr("data-cid", h).show();
        }
      },
      updateGroupComments: function (a) {
        var c = {},
          d = "",
          f = [];
        if (a.length != 0) {
          for (var h = 0; h < a.length; h++)
            if (a[h].mode === 3) {
              f.push(a[h]);
              for (var i = 0; i < a[h].groups.length; i++)
                c[a[h].groups[i].name] = a[h].groups[i].displayName;
            }
          a = $("#FN-group-ul").empty();
          for (g in c) {
            a.append(
              '<li data-dGroupName="' +
                g +
                '" title="' +
                c[g] +
                '">' +
                c[g] +
                "</li>"
            );
            d +=
              '<div class="FN-group-content-section" data-dgroup="' +
              g +
              '"></div>';
          }
          $("#FN-group-content-container").empty().append(d);
          for (c = 0; c < f.length; c++) {
            d = f[c].groups;
            for (a = 0; a < d.length; a++) {
              h = this.generateGroupItem(f[c]);
              $(
                '.FN-group-content-section[data-dgroup="' + d[a].name + '"]'
              ).append(h);
            }
          }
        }
      },
      generateGroupItem: function (a) {
        return ua(
          '<div class="FN-group-comment-item" data-cid="#{ID}"><div class="FN-group-comment-item-tbar"><a href="#" class="FN-group-comment-name">#{USERNAME}</a><span class="FN-group-comment-item-time">#{DATETIME}</span>#{DELETE}</div><div class="FN-group-comment-item-content">#{CONTENT}</div></div>',
          {
            ID: a.id,
            USERNAME: a.realName,
            CONTENT: a.content,
            DATETIME: a.datetime,
            DELETE:
              k.user == a.user
                ? '<a class="FN-group-comment-item-delete">delete</a>'
                : "",
          }
        );
      },
      getGroups: function (a) {
        for (var c = [], d = 0; d < a.length; d++)
          if (a[d].mode == diigolet.consts.PRIVACY_MODE_GROUP)
            for (var f = 0; f < a[d].groups.length; f++) {
              var h = {};
              h.displayName = a[d].groups[f].displayName;
              h.name = a[d].groups[f].name;
              c.push(h);
            }
        a = c.concat();
        for (c = 0; c < a.length; ++c)
          for (d = c + 1; d < a.length; ++d)
            JSON.stringify(a[c]) === JSON.stringify(a[d]) && a.splice(d--, 1);
        return (c = a);
      },
      getCommentCount: function (a, c) {
        var d = c.length,
          f = 0,
          h;
        if (a === "private") var i = diigolet.consts.PRIVACY_MODE_PRIVATE;
        else if (a === "group") i = diigolet.consts.PRIVACY_MODE_GROUP;
        for (h = 0; h < d; h++) c[h].mode === i && f++;
        return f;
      },
      privateCommentAddSuccessful: function () {},
      removeInlineComment: function (a, c) {
        if ($("#diigolet-dlg-sticky-content").hasClass("private")) {
          this.switchTab("group");
          this.j.removeClass("onlyPrivate").addClass("onlyGroup");
          $("#FN-private-editor").val("");
          $("#FN-private-delete").hide();
          $("#FN-private-datetime").text("");
        }
        $('.FN-group-comment-item[data-cid="' + a.id + '"]').remove();
        if (
          $('.FN-group-content-section[data-dgroup="' + c + '"]').find(
            ".FN-group-comment-item"
          ).length == 0
        ) {
          $('.FN-group-content-section[data-dgroup="' + c + '"]').remove();
          $("#FN-group-ul")
            .find('li[data-dgroupname="' + c + '"]')
            .remove();
        }
        if (
          $("#FN-group-content-container").find(".FN-group-content-section")
            .length == 0
        ) {
          this.j.removeClass("onlyGroup").addClass("onlyPrivate");
          this.switchTab("private");
        }
        $("#FN-group-ul").find("li").length != 0 &&
          $("#FN-group-ul").find("li").trigger("click");
      },
      onclick_del_ic: function (a, c, d) {
        ea.del(c, d);
        if (a) {
          a.stopPropagation();
          a.preventDefault();
        }
      },
      onic_add: function (a, c) {
        this.addInlineComment(a, c);
        chrome.runtime.sendMessage({
          name: "editItem",
          cmd: "addInlineComment",
          annotation: {
            id: a.id,
            content: a.content,
            annotationId: a.annotationId,
          },
        });
      },
      onic_del: function (a, c) {
        this.removeInlineComment(a, c);
        chrome.runtime.sendMessage({
          name: "editItem",
          cmd: "delInlineComment",
          annotation: {
            id: a.id,
            content: a.content,
            annotationId: a.annotationId,
          },
        });
      },
      onann_del: function (a) {
        if (a == this.ann)
          if (a.comments.length == 0) {
            a.deleted = true;
            this.hide();
          }
      },
      onic_edit: function (a) {
        this.editInlineComment(a);
        chrome.runtime.sendMessage({
          name: "editItem",
          cmd: "updateStickyNote",
          annotation: {
            id: a.id,
            content: a.content,
            annotationId: a.annotationId,
          },
        });
      },
    });
    M(B, {
      NO_PUBLIC_STICKY_NOTES_ALLOWED: true,
      isEditing: function () {
        return (
          $("#FN-group-content-postform").find("textarea").val() != "" ||
          $("#FN-group-post").val() != "" ||
          this.ifChooseGroup() ||
          this.privateEditing ||
          $("#FN-group-content-postform").hasClass("active")
        );
      },
      ifChooseGroup: function () {
        var a = $("#FN-group-share").val();
        return a != null && a != 0 && a != -1;
      },
      groupEditor: {
        jEdit: null,
        init: function () {
          var a = this;
          a.jEdit = B.j.find("#FN-group-content-postform");
          a.jEdit.find("button").click(function () {
            a.submitGroupComment();
          });
          a.jEdit.find("textarea").keypress(function (c) {
            c.keyCode == 13 && c.ctrlKey && a.submitGroupComment();
          });
        },
        submitGroupComment: function () {
          var a = this,
            c = a.jEdit.find("textarea").val();
          if (c) {
            var d = $("#FN-current-group").find("span").attr("data-group");
            c = { annotationId: B.ann.id, mode: void 0, content: c };
            if (d) {
              c.justForGroups = true;
              c.groups = [d];
            }
            d = I.find(c.annotationId);
            if (
              d.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE &&
              !d.saved
            ) {
              d._toAddInlineComment = c;
              d.saving = true;
              C.addAnnotation(d);
            } else if (
              d.type == diigolet.consts.ANNOTATION_TYPE_TEXT &&
              !d.saved
            ) {
              d._toAddInlineComment = c;
              d.saving = true;
              C.addAnnotation(d);
            } else C.addInlineComment(c);
            $("#FN-group-content-postform")
              .find("textarea,button")
              .prop("disabled", true);
          } else {
            a.jEdit.find("textarea").addClass("notify");
            setTimeout(function () {
              a.jEdit.find("textarea").removeClass("notify");
            }, 600);
          }
        },
        remove: function () {
          if (this.jEdit[0].parentNode) {
            $("#FN-group-content-postform")
              .find("textarea,button")
              .prop("disabled", false);
            this.jEdit.find("textarea").val("");
            this.jEdit.removeClass("active");
          }
        },
        show: function () {
          var a = $(".diigoletFNPriSlct").empty(),
            c = B.ann,
            d = B.filterMode;
          if (
            (d == "_all" || d == "_public") &&
            (c ? true : true) &&
            (c ? !c.onlyInGroup && c.getComments("_private").length == 0 : true)
          )
            B.NO_PUBLIC_STICKY_NOTES_ALLOWED ||
              a.append('<option value="_public">Public</option>');
          if (
            (d == "_all" || d == "_private") &&
            (c ? !c.onlyInGroup && c.getComments("_public").length == 0 : true)
          )
            a.append('<option value="_private">Private</option>');
          J(k.myGroups, function (h) {
            if (
              (d == "_all" || d == h.name) &&
              (c && (c.user != k.user || c.onlyInGroup)
                ? c.inGroup(h.name)
                : true)
            )
              a.append(
                A.dom.buildOne("option", { value: h.name }, [h.displayName])
              );
          });
          d == "_all" && c && c.isPrivate() && a.val("_private");
          if (a.find("option").length == 0)
            B.j.find(".diigoletFNComment").hide();
          else {
            B.j.find(".diigoletFNComment").show();
            var f = this.jEdit.find("textarea").val("");
            setTimeout(function () {
              f.focus();
            }, 500);
            B.j.find("._stickyTitle").html("Add Sticky Note");
          }
        },
      },
    });
    var R = {
        tagListNames: "recent recommend group".split(" "),
        shown: false,
        ele: null,
        init: function () {
          this.create();
        },
        destroy: function () {},
        show: function (a, c) {
          if (!(!ia() || (this.shown && this.j.is(":visible")))) {
            this.shown = true;
            B.hide();
            this.j.show();
            var d = this;
            if (k.recommendedTagsLoaded)
              d.showRecommendedTags(k.recommendedTags);
            else {
              d.showTagList("recommend", null);
              var f = k.bookmark,
                h = f.getTitle();
              h += k.googleSearchSentence;
              C.loadRecommendedTags(f.url, h, function () {
                d.showRecommendedTags(k.recommendedTags);
              });
            }
            a && c
              ? this.syncData("saveLink", true, a, c)
              : this.syncData("data->form", true);
            d.refreshPremium();
            $("#Diigo-Bookmark-uploadCache")
              .find(".op-checkbox-container")
              .removeClass("checked");
            $("#Diigo-Bookmark-Tag-Input").focus();
            d.showPromotionMessage();
            /https:\/\/www.hnsearch.com\/search/.test(window.location.href) &&
              $(
                "#Diigo-Bookmark-Url,#Diigo-Bookmark-Title,#Diigo-Bookmark-Description,#Diigo-Bookmark-Tag"
              ).bind("focus", function () {
                $(window).unbind("keypress");
                var i = this;
                $(window).bind("keypress", function (m) {
                  m.preventDefault();
                  var l = $(i).val();
                  $(i)
                    .focus()
                    .val(l + String.fromCharCode(m.charCode));
                });
              });
          }
        },
        showPromotionMessage: function () {},
        _tagContainerIdForTagListName: function (a) {
          return "#diigolet-bm-tagListContainer-" + a;
        },
        showTagList: function (a, c) {
          var d = this,
            f = $(d._tagContainerIdForTagListName(a));
          if (a == "group") {
            f.show();
            f.find(".tagButton").remove();
          } else if (a == "recommend" && f.find(".tagButton").length > 0)
            return;
          if (c)
            if (c.length == 0) f.hide();
            else {
              a == "group" && f.find(".loading").hide();
              var h = k.bookmark,
                i = k.myTags;
              f.find(".tagButton").remove();
              J(c, function (m) {
                var l = $(
                  A.dom.buildOne(
                    "div",
                    {
                      id:
                        "diigolet-tag-" + a + "-" + d.escapeTagForElementId(m),
                      class: "tagButton",
                      tag: m,
                    },
                    [m]
                  )
                ).appendTo(f.show());
                l.toggleClass(
                  "selected",
                  $.inArray(m, h.tags) >= 0
                ).toggleClass("inused", $.inArray(m, i) >= 0);
                l.click(function () {
                  d.toggleTag(m);
                  return false;
                });
              });
            }
        },
        showRecommendedTags: function (a) {
          this.showTagList("recommend", a);
        },
        escapeTagForElementId: function (a) {
          return encodeURIComponent(a).replace(/[.%:]/g, "");
        },
        toggleTag: function (a, c) {
          var d = $("#Diigo-Bookmark-Tag-Input"),
            f = x.parseTags(d.val(), true),
            h = $.inArray(a, f);
          if (c === undefined) h >= 0 ? f.splice(h, 1) : f.push(a);
          else if (c) h == -1 && f.push(a);
          else h >= 0 && f.splice(h, 1);
          f = x.unparseTags(f);
          if (f.length) f += " ";
          d.val(f);
          this.placeCursorAtLast(d[0]);
          this.updateTagStates();
        },
        updateTagStates: function () {
          var a = this,
            c = $("#Diigo-Bookmark-Tag-Input"),
            d = x.parseTags(c.val(), true);
          $("#Diigo-Bookmark-Tag-Cloud")
            .find(".Diigo-Bookmark-Tag-item")
            .each(function () {
              var f = $(this),
                h = f.text();
              $.inArray(h, d) != -1
                ? f.addClass("selected")
                : f.removeClass("selected");
            });
          a.tagListNames.forEach(function (f) {
            $(a._tagContainerIdForTagListName(f))
              .find("div.tagButton")
              .each(function () {
                var h = $(this),
                  i = h.attr("tag");
                $.inArray(i, d) != -1
                  ? h.addClass("selected")
                  : h.removeClass("selected");
              });
          });
        },
        showGroupTags: function () {
          var a = this;
          a.showTagList("group", null);
          var c = null,
            d = $("#diigo-group").find("select").val();
          if (d != -1) c = d;
          c
            ? C.loadGroupTagsDictionary([c], function () {
                a.showTagList("group", k.groupTagsDict[c]);
              })
            : a.showTagList("group", []);
        },
        selectAllTags: function (a) {
          var c = this;
          $(c._tagContainerIdForTagListName(a))
            .find(".tagButton")
            .each(function () {
              c.toggleTag($(this).addClass("selected").text(), true);
            });
        },
        placeCursorAtLast: function (a) {
          var c = this,
            d = a.value.length;
          setTimeout(function () {
            c.placeInputCursor(a, d);
          }, 13);
        },
        placeInputCursor: function (a, c) {
          a.focus();
          if (a.createTextRange) {
            var d = a.createTextRange();
            d.move("character", c);
            d.select();
          } else if (a.selectionStart >= 0) {
            a.focus();
            a.setSelectionRange(c, c);
          }
        },
        hide: function (a) {
          if (this.shown) {
            this.shown = false;
            $("#diigolet-tagForward").hide();
            $("#Diigo-Bookmark-Url").removeClass("fold").removeClass("unfold");
            a || this.syncData("form->data");
          }
        },
        remove: function () {
          this.j && this.j.remove();
        },
        create: function () {
          var a = this;
          a.j = new db(diigolet.consts.HTML_DLG_BOOKMARK)
            .css({
              position: $.browser.supportPositionFixed ? "fixed" : "absolute",
            })
            .hide()
            .appendTo(fa.body)
            .hide();
          $("#diigolet-bm-tagListContainer-recent")
            .find("a")
            .on("click", function () {
              a.selectAllTags("recent");
            });
          $("#diigolet-dlgBm-btnSave").click(function (d) {
            a.j.data("data-ifSaveLink") == true
              ? a.saveThisLink()
              : x.handle(d, "bmOnSubmitAndClose", "bookmark");
          });
          $("#diigolet-dlgBm-btnSaveandmore").click(function (d) {
            x.handle(d, "bmOnSubmitAndClose", "bookmark");
            d = encodeURIComponent($("#Diigo-Bookmark-Title").val());
            var f = encodeURIComponent($("#Diigo-Bookmark-Url").val()),
              h = encodeURIComponent($("#Diigo-Bookmark-Tag").val());
            window.open(
              DIIGO_SERVER +
                "/toolbar/saved?t=" +
                d +
                "&url=" +
                f +
                "&tags=" +
                h
            );
          });
          var c = navigator.userAgent.toLowerCase();
          (c.indexOf("macintosh") != -1 || c.indexOf("mac os x") != -1) &&
            $("#list-group select").css("text-indent", "7px");
          $("#Diigo-Bookmark-Title")
            .find("#link-icon")
            .on("click", function () {
              var d = $("#Diigo-Bookmark-Url");
              d.hasClass("unfold")
                ? d.addClass("fold").removeClass("unfold")
                : d.addClass("unfold").removeClass("fold");
            })
            .Gtooltip({ position: "top" });
          $("#Diigo-Bookmark-Title-Input,#Diigo-Bookmark-Url-Input")
            .on("focus", function () {
              $(this).parent().find(".diigo-alert-tip").hide();
            })
            .on("input", function () {
              $(this).parent().find(".diigo-alert-tip").hide();
            });
          $("#Diigo-Bookmark-Options,#Diigo-Bookmark-checkShareExisting")
            .find(".op-checkbox-container")
            .on("click", function () {
              $(this).toggleClass("checked");
            });
          $(
            "#Diigo-Bookmark-Title-Input,#Diigo-Bookmark-Description-Input,#Diigo-Bookmark-Tag-Input"
          )
            .on("focus", function () {
              $(this).parent().addClass("focus");
            })
            .on("blur", function () {
              $(this).parent().removeClass("focus");
            });
          $("#diigolet-tagForward-remove").Gtooltip();
          $("#Diigo-Bookmark-Tag-Input").bind("input", function () {
            a.updateTagStates();
          });
          $("#Diigo-Bookmark-Tag-dropdown").on("click", function () {
            $(this).toggleClass("cloud");
            if ($("#Diigo-Bookmark-Tag-Cloud").css("display") == "none") {
              $("#Diigo-Bookmark-Tag-suggestion").hide();
              $("#Diigo-Bookmark-Tag-Cloud").show();
            } else {
              $("#Diigo-Bookmark-Tag-suggestion").show();
              $("#Diigo-Bookmark-Tag-Cloud").hide();
            }
          });
          $("#diigolet-dlgBm-btnCancel").click(function (d) {
            x.handle(d, "bmCancel");
          });
          a.j.css({
            left: $(window).width() - a.j.outerWidth() - 5,
            right: "",
          });
          new $.Draggable(a.j, {
            handle: "._dragHandle",
            afterDrag: function () {
              a.adjustPosition();
            },
          });
          a.j.bind("keydown", function (d) {
            if (d.keyCode == 13) {
              if (d.target.tagName.toLowerCase() != "textarea" || d.ctrlKey)
                x.handle(d, "bmOnSubmitAndClose", "bookmark");
            } else d.keyCode == 27 && x.handle(d, "bmCancel");
          });
          $("#diigo-list-addInput").on("focus", function () {
            $("#diigo-list-add .diigo-alert-tip").hide();
          });
          $("#diigo-w-upgrade").on("click", function (d) {
            d.preventDefault();
            window.open("https://www.diigo.com/premium");
            $("#diigo-list-add-tip").hide();
            $("#diigo-list").show();
          });
          $("#diigo-w-cancel").on("click", function (d) {
            d.preventDefault();
            $("#diigo-list-add-tip").hide();
            $("#diigo-list").show();
          });
          $("#diigo-list-addBtn").on("click", function () {
            if (!$(this).hasClass("processing")) {
              var d = $("#diigo-list-addInput").val(),
                f = $("#diigo-list-add .diigo-alert-tip"),
                h = [],
                i = k.myBmLists.length,
                m;
              for (m = 0; m < i; m++) h.push(k.myBmLists[m].title);
              if (d.match(/^\s*$/)) f.show().find("span").text("Input a name");
              else if ($.inArray(d, h) !== -1)
                f.show().find("span").text("Name existed !");
              else {
                $(this).addClass("processing");
                C.createList(d);
              }
            }
          });
          $("#diigo-list-addCancel").on("click", function () {
            $("#diigo-list-add .diigo-alert-tip").hide();
            $("#diigo-list-add").hide();
            $("#diigo-list").show();
            $("#diigo-list-addInput").val("");
          });
          $("#diigolet-tagForward-remove").click(function (d) {
            d.preventDefault();
            if (
              !k.isAnnotated() ||
              confirm(
                "Removing this as a bookmark will also remove your annotations on this page. Do you want to continue?"
              )
            ) {
              C.deleteBookmark(k.bookmark);
              a.hide();
              U.hide();
            }
          });
        },
        adjustPosition: function () {
          var a = this.j,
            c = $(window),
            d = c.width();
          c = c.height();
          var f = parseInt(a.css("left")),
            h = parseInt(a.css("top"));
          a.outerWidth();
          a.outerHeight();
          if (d < f + 100) a.css("left", (f = d - 100));
          if (c < h + 100) a.css("top", (h = c - 100));
          h < -10 && a.css("top", -10);
          f < -150 && a.css("left", -150);
        },
        isURL: function (a) {
          return /^(https|http|ftp|rtsp|mms)+:\/\//.test(a) ? true : false;
        },
        buildTagCloud: function (a, c) {
          document.getElementById("Diigo-Bookmark-Tag-Eidt").href =
            "https://www.diigo.com/cloud/" + k.user;
          if (k.myTagsWithCount.length == 0) {
            var d = document.getElementById(a),
              f = document.createElement("span");
            f.id = "no-tag";
            f.innerHTML = "No tags";
            d.appendChild(f);
          } else if (
            !($("#Diigo-Bookmark-Tag-Cloud-Container").find("a").length > 0)
          ) {
            var h = this,
              i = nb();
            d = i.topTags;
            var m = i.maxCount;
            f = i.a;
            var l = i.b,
              r = i.c,
              y = d.length;
            i = document.createDocumentFragment();
            for (var z = 0; z < y; z++) {
              var w = document.createElement("a");
              w.className = c;
              w.href = "#";
              w.innerText = d[z].name;
              var o = d[z].count;
              if (o == m) {
                w.style.fontSize = "20px";
                w.style.fontWeight = "bold";
              }
              f.forEach(function (p) {
                if (o == p) {
                  w.style.fontSize = "18px";
                  w.style.fontWeight = "bold";
                }
              });
              l.forEach(function (p) {
                if (o == p) {
                  w.style.fontSize = "16px";
                  w.style.fontWeight = "bold";
                }
              });
              r.forEach(function (p) {
                if (o == p) {
                  w.style.fontSize = "16px";
                  w.style.fontWeight = "regular";
                }
              });
              i.appendChild(w);
              w.addEventListener("click", function (p) {
                p.preventDefault();
                h.toggleTag(this.innerText);
              });
            }
            d = document.getElementById(a);
            d.appendChild(i);
          }
        },
        syncData: function (a, c, d, f) {
          var h = this,
            i = k.bookmark;
          if (a == "data->form") {
            $("#diigolet-tagForward-remove")
              .toggle(i.saved)
              .attr(
                "data-gtooltip",
                "Saved " + i.datetime + ". Click to remove"
              );
            this.j.data("data-ifSaveLink", false);
            i.saved == true &&
              $("#diigolet-tagForward-topBar")
                .find(".topBar-title")
                .text("Edit bookmark");
            $("#Diigo-Bookmark-Url-Input").val(i.url);
            if (c || i.saved) {
              $("#Diigo-Bookmark-Title-Input").val(i.getTitle());
              a = x.unparseTags(i.tags);
              $("#Diigo-Bookmark-Tag-Input").val(a + " ");
              i.mode == 2
                ? $("#Diigo-Bookmark-Privacy")
                    .find(".op-checkbox-container")
                    .addClass("checked")
                : $("#Diigo-Bookmark-Privacy")
                    .find(".op-checkbox-container")
                    .removeClass("checked");
              i.unread == true
                ? $("#Diigo-Bookmark-Unread")
                    .find(".op-checkbox-container")
                    .addClass("checked")
                : $("#Diigo-Bookmark-Unread")
                    .find(".op-checkbox-container")
                    .removeClass("checked");
            }
            $("#Diigo-Bookmark-uploadCache").show();
            h.buildTagCloud(
              "Diigo-Bookmark-Tag-Cloud-Container",
              "Diigo-Bookmark-Tag-item"
            );
            h.updateTagStates();
            a = $("#Diigo-Bookmark-Description-Input");
            c = A.dom.getSelection();
            if (ha(a.val()))
              if (ha(i.description)) ha(c) || a.val('"' + c + '"');
              else a.val(i.description);
            else {
              a.val("");
              i.saved && !ha(i.description) && a.val(i.description);
            }
            h.updateGroups();
            h.updateLists();
            i.saved == false
              ? chrome.storage.local.get(null, function (m) {
                  if (m.researchMode == true) {
                    $("#diigolet-tagForward-topBar")
                      .find(".focus-research-tip")
                      .show();
                    h.fillReasearchModeData(m);
                  } else $("#diigolet-tagForward-topBar").find(".focus-research-tip").hide();
                })
              : $(".focus-research-tip").remove();
          } else if (a == "form->data") {
            i.url = $("#Diigo-Bookmark-Url-Input").val();
            i.title = $("#Diigo-Bookmark-Title-Input").val();
            i.tags = x.parseTags($("#Diigo-Bookmark-Tag-Input").val(), true);
            i.mode = $("#Diigo-Bookmark-Privacy")
              .find(".op-checkbox-container")
              .hasClass("checked")
              ? diigolet.consts.PRIVACY_MODE_PRIVATE
              : diigolet.consts.PRIVACY_MODE_PUBLIC;
            i.unread = $("#Diigo-Bookmark-Unread")
              .find(".op-checkbox-container")
              .hasClass("checked");
            i.description = $("#Diigo-Bookmark-Description-Input").val();
            a = $("#diigo-group").find("select").val();
            if (a == "-1" || a == "-2" || a == "0") i.toShareToGroups = [];
            else {
              i.toShareToGroups = [a];
              i.toShareExistingAnnotations = $(
                "#Diigo-Bookmark-checkShareExisting"
              )
                .find(".op-checkbox-container")
                .hasClass("checked");
            }
            a = $("#diigo-list").find("select").val();
            i.toAddToBookmarkLists =
              a == "-1" || a == "-2" || a == "0" ? [] : [a];
          } else if (a == "saveLink") {
            this.j.data("data-ifSaveLink", true);
            if (d && f) {
              $("#Diigo-Bookmark-Url-Input").val(f);
              $("#Diigo-Bookmark-Title-Input").val(d);
              $("#diigolet-tagForward-topBar>span").text("Save to Diigo");
            }
            $("#Diigo-Bookmark-Description-Input").val("");
            $("#Diigo-Bookmark-Tag-Input").val("");
            x.Messenger.send({ name: "initialData" }, function (m) {
              m.preloadedPrefs["prefs.bookmark.privateByDefault"] == "true"
                ? $("#Diigo-Bookmark-Privacy")
                    .find(".op-checkbox-container")
                    .addClass("checked")
                : $("#Diigo-Bookmark-Privacy")
                    .find(".op-checkbox-container")
                    .removeClass("checked");
            });
            $("#Diigo-Bookmark-uploadCache").hide();
            h.buildTagCloud(
              "Diigo-Bookmark-Tag-Cloud-Container",
              "Diigo-Bookmark-Tag-item"
            );
            h.updateTagStates();
            h.updateGroups(true);
            h.updateLists(true);
          }
        },
        fillReasearchModeData: function (a) {
          a = a.researchModeData;
          a["private"]
            ? $("#Diigo-Bookmark-Privacy")
                .find(".op-checkbox-container")
                .addClass("checked")
            : $("#Diigo-Bookmark-Privacy")
                .find(".op-checkbox-container")
                .removeClass("checked");
          a.unread &&
            $("#Diigo-Bookmark-Unreadr")
              .find(".op-checkbox-container")
              .addClass("checked");
          $("#Diigo-Bookmark-Description-Input").val(a.description);
          var c = $a.unparseTags(a.tags);
          $("#Diigo-Bookmark-Tag-Input").val(c);
          this.updateTagStates();
          a.shareLists.length &&
            $("#diigo-list").find("select").val(a.shareLists[0]);
          a.shareGroups.length &&
            $("#diigo-group").find("select").val(a.shareGroups[0]);
        },
        updateLists: function (a) {
          j = $("#diigo-list")
            .find("select")
            .empty()
            .unbind()
            .removeClass("processing");
          j.append(
            A.dom.buildOne("option", { value: 0 }, ["Add to an Outliner"])
          );
          j.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(
            A.dom.buildOne("option", { value: -2 }, ["Create an Outliner..."])
          ).appendTo(j);
          j.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          J(k.outliners, function (c) {
            a
              ? j.append(A.dom.buildOne("option", { value: c.id }, [c.title]))
              : j.append(
                  A.dom.buildOne("option", { value: c.id }, [
                    c.title + (k.bookmark.inList(c.id) ? " (added)" : ""),
                  ])
                );
          });
          j.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          if (k.myBmLists.length) {
            j.append(
              A.dom.buildOne("option", { value: -8 }, ["Add to a List"])
            );
            j.append(
              A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
            );
            J(k.myBmLists, function (c) {
              a
                ? j.append(A.dom.buildOne("option", { value: c.id }, [c.title]))
                : j.append(
                    A.dom.buildOne("option", { value: c.id }, [
                      c.title + (k.bookmark.inList(c.id) ? " (added)" : ""),
                    ])
                  );
            });
          }
          j.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(A.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(j);
          j.change(function () {
            var c = j.val();
            if (c == -2) {
              if (k.permissions.createOutliner === true) {
                $("#diigo-list").hide();
                $("#diigo-list-add").show();
                $("#diigo-list-addInput").focus();
              } else {
                $("#diigo-list-add-tip").show();
                $("#diigo-list").hide();
              }
              j.val(0);
            } else if (c == -3) {
              $(this).addClass("processing");
              C.loadMyStuff("myGroups myBookmarkLists");
              j.val(-1);
            }
          });
          j.val(0).change();
        },
        updateGroups: function (a) {
          var c = this,
            d = $("#diigo-group")
              .find("select")
              .empty()
              .unbind()
              .removeClass("processing");
          d.append(
            A.dom.buildOne("option", { value: 0 }, ["Share to a group"])
          );
          d.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(
            A.dom.buildOne("option", { value: -2 }, ["Create a Group..."])
          ).appendTo(d);
          d.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          J(k.myGroups, function (f) {
            a
              ? d.append(
                  A.dom.buildOne("option", { value: f.name }, [f.displayName])
                )
              : d.append(
                  A.dom.buildOne("option", { value: f.name }, [
                    f.displayName +
                      (k.bookmark.inGroup(f.name) ? " (shared)" : ""),
                  ])
                );
          });
          d.append(
            A.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(A.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(d);
          d.change(function () {
            var f = d.val();
            if (f == -2) {
              x.openURL(x.urls.getCreateGroupURL());
              d.val(-1);
            } else if (f == -3) {
              $(this).addClass("processing");
              C.loadMyStuff("myGroups myBookmarkLists");
              d.val(0);
            } else if (f != -1)
              if (f != 0) {
                c.afterGroupSelectionChange();
                c.showGroupTags();
              }
          });
          d.val(0).change();
        },
        afterGroupSelectionChange: function () {
          var a =
            $("#diigo-group").find("select").val() != "-1" &&
            $("#diigo-group").find("select").val() != "0";
          K("Diigo-Bookmark-checkShareExisting").showHide(a && k.isAnnotated());
        },
        submitAndClose: function () {
          var a = true,
            c = "",
            d = $("#Diigo-Bookmark-Url-Input").val();
          if ($("#Diigo-Bookmark-Title-Input").val().match(/^\s*$/)) {
            a = false;
            c = "Please input bookmark title.";
            $("#Diigo-Bookmark-Title").find(".diigo-alert-tip").show();
          }
          if (!this.isURL(d) || d.match(/^\s*$/))
            if (a == true) {
              a = false;
              c = "Please input a valid url.";
              $("#Diigo-Bookmark-Url").find(".diigo-alert-tip").show();
            }
          if (a) {
            this.syncData("form->data");
            var f = function () {};
            $("#Diigo-Bookmark-uploadCache")
              .find(".op-checkbox-container")
              .hasClass("checked") &&
              (function (h) {
                f = function () {
                  N("[DlgBookmark] bookmark saved. will upload cache");
                  CachePage.uploadCache({ groups: h });
                };
              })(k.bookmark.toShareToGroups);
            C.saveBookmark(null, f, "showbar");
            x.ready = true;
            this.hide();
            $("#Diigo-Bookmark-checkShareExisting")
              .find(".op-checkbox-container")
              .removeClass("checked");
          }
        },
        saveThisLink: function () {
          var a = {},
            c = true,
            d = $("#Diigo-Bookmark-Url-Input").val();
          if ($("#Diigo-Bookmark-Title-Input").val().match(/^\s*$/)) {
            c = false;
            $("#Diigo-Bookmark-Title").find(".diigo-alert-tip").show();
          }
          if (!this.isURL(d) || d.match(/^\s*$/))
            if (c == true) {
              c = false;
              $("#Diigo-Bookmark-Url").find(".diigo-alert-tip").show();
            }
          if (c) {
            a.url = $("#Diigo-Bookmark-Url-Input").val();
            a.title = $("#Diigo-Bookmark-Title-Input").val();
            a.tags = x.parseTags($("#Diigo-Bookmark-Tag-Input").val(), true);
            a.mode = $("#Diigo-Bookmark-Privacy")
              .find(".op-checkbox-container")
              .hasClass("checked")
              ? diigolet.consts.PRIVACY_MODE_PRIVATE
              : diigolet.consts.PRIVACY_MODE_PUBLIC;
            a.unread = $("#Diigo-Bookmark-Unread")
              .find(".op-checkbox-container")
              .hasClass("checked");
            a.description = $("#Diigo-Bookmark-Description-Input").val();
            c = $("#diigo-list").find("select").val();
            a.lists = c == "-1" || c == "-2" || c == "0" ? [] : [c];
            c = $("#diigo-group").find("select").val();
            a.groups = c == "-1" || c == "-2" || c == "0" ? [] : [c];
            a.shareExistingAnnotations = false;
            chrome.extension.sendRequest({ name: "saveThisLink", data: a });
            this.hide(true);
          }
        },
        bookmarkLoaded: function () {
          var a = this;
          if (a.shown) {
            a.syncData("data->form");
            J(k.bookmark.tags, function (c) {
              a.toggleTag(c, true);
            });
          }
        },
        refreshPremium: function () {
          var a = $("#Diigo-Bookmark-uploadCache"),
            c = a.next("label");
          if (rb.hasCacheUpload()) {
            a.removeAttr("disabled");
            c.attr("title", "Upload a copy of the page");
          } else {
            a.attr("disabled", "disabled").attr("checked", false);
            c.attr(
              "title",
              "Upload a copy of the page (Quota exceeded. Go premium to re-enable.)"
            );
          }
        },
      },
      X = (x.Sidebar = {
        j: null,
        floating: false,
        container: null,
        init: function () {
          this.create();
          k.addEventListener("ic_add", this);
          k.addEventListener("ic_del", this);
          k.addEventListener("pc_add", this);
          k.addEventListener("pc_del", this);
          k.addEventListener("ann_add", this);
          k.addEventListener("ann_del", this);
        },
        destroy: function () {},
        create: function () {
          var a = Q(diigolet.consts.HTML_SIDEBAR, {
            URL_DIIGO: diigolet.consts.DIIGO_SERVER,
          });
          this.container = $(
            k.launchMode.threeDForum
              ? "#diigo-3dforum"
              : "#diigolet-annotationSummary"
          );
          a = this.j = $(a).appendTo(this.container);
          a.find("div.addComment").hide();
          if (!k.launchMode.threeDForum) {
            a.find("span._inlineCommentsTitle").text("Sticky Notes");
            a.find("a.add").eq(0).hide();
            a.find("div.popOut").addClass("close");
          }
        },
        onSignIn: function () {
          this.j.find("a._signIn").hide();
        },
        onSignOut: function () {},
        togglePanel: function (a, c) {
          var d = $(
              {
                inline: "#d3df-togglePanelInline",
                page: "#d3df-togglePanelPage",
              }[a]
            ),
            f = $(
              {
                inline: "#d3df-inlineCommentBox",
                page: "#d3df-pageCommentBox",
              }[a]
            ),
            h = !d.is(".collapsed");
          c = c !== undefined ? c : !h;
          if (c != h) {
            d.toggleClass("collapsed", !c);
            f[c ? "slideDown" : "slideUp"]();
          }
        },
        popOut: function (a) {
          var c = this.j.find("div.popOut"),
            d = c.is(".popIn");
          c.toggleClass("popIn", !d);
          c.attr("title", d ? "Pop out and pin" : "Pop in");
          k.launchMode.threeDForum || c.attr("title", "close");
          c = this.j;
          if (d) {
            c.appendTo(this.container)
              .css({ position: "static", left: "", top: "", width: "" })
              .find("._dragHandle")
              .css({ cursor: "" });
            c[0].diigolet_draggable.destroy();
          } else {
            var f = a || c.offset();
            c.css({
              position: "absolute",
              left: f.left,
              top: f.top,
              width: 260,
            }).appendTo(document.body);
            if ($.browser.supportPositionFixed)
              if (a) c.css({ position: "fixed" });
              else {
                a = qb.docScroll();
                c.css({
                  position: "fixed",
                  left: f.left - a[0],
                  top: f.top - a[1],
                });
              }
            new $.Draggable(c, { handle: "._dragHandle" });
            k.toggleSilent(false);
          }
          this.floating = !d;
          this.adjustSize();
        },
        showEditPageCommentBox: function (a) {
          if (da()) {
            a = a !== undefined ? a : true;
            $("#d3df-sidebar div.addComment")[a ? "show" : "hide"]();
            this.togglePanel("page", true);
            K("diigolet-sb-txtpc").val("");
            var c = K("diigolet-sb-selpc").empty();
            c.append('<option value="_public">Public</option>');
            c.append('<option value="_private">Private</option>');
            J(k.myGroups, function (d) {
              c.append(
                A.dom.buildOne("option", { value: d.name }, [d.displayName])
              );
            });
            c.val("_private");
          } else C.signIn();
        },
        refresh: function () {
          this.refreshComments();
        },
        refreshComments: function () {
          this.refreshPageComments();
          this.refreshInlineComments();
        },
        refreshPageComments: function () {
          var a = this,
            c = "";
          J(k.pageComments, function (d) {
            c += Q(diigolet.consts.HTML_3DF_SIDEBAR_PAGE_COMMENT, {
              USER: d.user,
              CONTENT: d.content,
              DIIGO_URL: diigolet.consts.DIIGO_SERVER,
              DATE: d.datetime,
              LABELS_HTML: a._labelsHtml(d),
            });
          });
          $("#d3df-pageCommentList").html(
            c || diigolet.consts.HTML_3DF_SIDEBAR_NO_COMMENTS
          );
          this.j.find("._pageCommentCount").text(k.pageComments.length + "");
          this.adjustSize();
        },
        refreshInlineComments: function () {
          I.sort();
          var a = "",
            c,
            d,
            f = 0;
          J(k.annotations, function (i) {
            if (i.type == 0 || i.type == 2 || i.type == 1) {
              d = "";
              J(i.comments, function (m) {
                f++;
                d += Q(diigolet.consts.HTML_3DF_SIDEBAR_INLINE_COMMENT, {
                  HIGHLIGHT_ID: i.id,
                  USER: m.user,
                  CONTENT: m.content,
                  DIIGO_URL: diigolet.consts.DIIGO_SERVER,
                  DATE: m.datetime,
                });
              });
              c = Q(diigolet.consts.HTML_3DF_SIDEBAR_HIGHLIGHT, {
                ID: i.id,
                FLOAT_NOTE_CLASS: i.type == 2 ? "floatNote" : "",
                CONTENT: i.prettyTxt || Ba.html2txt_pretty(i.content),
                COMMENTS: d,
              });
              a += c;
            }
          });
          var h = diigolet.consts.HTML_3DF_SIDEBAR_NO_COMMENTS;
          k.launchMode.threeDForum ||
            (h = h.replace("No comments", "No sticky notes"));
          $("#d3df-inlineCommentBox").html(a || h);
          this.j.find("._inlineCommentCount").text(f + "");
          this.adjustSize();
        },
        adjustSize: function () {
          $("#d3df-inlineCommentBox,#d3df-pageCommentList").each(function () {
            var a = $(this);
            a.height("").height(a.height() > 180 ? 180 : "");
          });
        },
        addCommentSubmit: function () {
          var a = K("diigolet-sb-txtpc").val();
          if (a.length <= 0 || a.length > 500)
            alert("Comment length should < 500 characters");
          else if (Ra(a)) H.notify(diigolet.consts.MSG_COMMENT_TOO_LONG);
          else {
            var c = K("diigolet-sb-selpc").val(),
              d,
              f;
            if (c == "_private") d = 2;
            else if (c == "_public") d = 0;
            else f = c;
            a = { urlId: k.bookmark.urlId, mode: d, content: a };
            if (f) {
              a.justForGroups = true;
              a.groups = [f];
            }
            C.addPageComment(a);
            this.showEditPageCommentBox(false);
          }
        },
        jumpToHighlight: function (a) {
          k.toggleSilent(false);
          (a = I.find(a)) && a.jumpHere(true, false);
        },
        onpc_del: function () {
          var a = this;
          setTimeout(function () {
            a.refreshPageComments();
          }, 100);
        },
        onpc_add: function () {
          this.refreshPageComments();
        },
        onic_add: function () {
          this.refreshInlineComments();
        },
        onic_del: function () {
          var a = this;
          setTimeout(function () {
            a.refreshInlineComments();
          }, 100);
        },
        onann_add: function () {
          this.refreshInlineComments();
        },
        onann_changeMode: function () {
          this.refreshInlineComments();
        },
        onann_del: function () {
          var a = this;
          setTimeout(function () {
            a.refreshInlineComments();
          }, 100);
        },
      });
    M(X, {
      filterMode: "_all",
      _labelsHtml: function (a) {
        var c = a.annotationId ? "ic" : "pc",
          d = this.filterMode,
          f = "",
          h = a.canDelete()
            ? '<a href="javascript:void(0)" class="del" onclick="#{ONCLICK};"><img title="Delete" src="chrome://diigose/skin/pageImage/spacer.gif" style="width:12px;height:12px;cursor:pointer" alt="" /></a>'
            : "";
        if (a.isPublic() && (d == "_all" || d == "_public") && a.user == k.user)
          f += '<label class="_public"><span>Public</span>DEL</label>'.replace(
            "DEL",
            Q(h, {
              ONCLICK: Q("diigolet.handle(event, 'sb_del_#{0}', '#{1}')", [
                c,
                a.id,
              ]),
            })
          );
        if (a.isPrivate() && (d == "_all" || d == "_private"))
          f +=
            '<label class="_private"><span>Private</span>DEL</label>'.replace(
              "DEL",
              Q(h, {
                ONCLICK: Q("diigolet.handle(event, 'sb_del_#{0}', '#{1}')", [
                  c,
                  a.id,
                ]),
              })
            );
        J(a.groups, function (i) {
          if (d == i.name || d == "_all")
            f += Q(
              '<label class="_#{GROUP_NAME}"><a href="#{GROUP_URL}" class="link">#{GROUP_DISPLAY_NAME}</a>#{DEL}</label>',
              {
                GROUP_NAME: i.name,
                GROUP_DISPLAY_NAME: i.displayName,
                GROUP_URL: x.urls.getGroupURL(i.name),
                DEL: Q(h, {
                  ONCLICK: Q(
                    "diigolet.handle(event, 'sb_del_#{0}', '#{1}', '#{2}')",
                    [c, a.id, i.name]
                  ),
                }),
              }
            );
        });
        return f;
      },
      onclick_del_pc: function (a, c, d) {
        ja.del(c, d);
      },
    });
    var Y = {
        j: null,
        direction: "normal",
        shown: false,
        copyClient: null,
        init: function () {
          this.create();
        },
        create: function () {
          this.j = $(diigolet.consts.HTML_CONTEXT_MENU)
            .css({ position: "absolute" })
            .appendTo(fa.body);
          var a = $("#diigolet-csm-highlight"),
            c = $("#diigolet-csm-highlightAndComment");
          a.click(function (h) {
            if (window.getSelection().toString() != "") {
              x.handle(h, "highlight");
              return false;
            }
          });
          this.j.find(".diigolet-csm-coloritem").click(function (h) {
            var i = $(this).data("color");
            $(this).parent().parent().attr("id");
            x.handle(h, "highlight", "normal", i);
            return false;
          });
          c.click(function (h) {
            if (window.getSelection().toString() != "") {
              x.handle(h, "highlightAndComment", "normal");
              return false;
            }
          });
          var d, f;
          this.j.find(".csm-btn").hover(
            function () {
              var h = $(this).find(".csm-action"),
                i = h.attr("id");
              if (i == "diigolet-csm-highlight") {
                f != null && clearTimeout(f);
                d = setTimeout(function () {
                  h.parent().find(".diigolet-csm-color").show();
                }, 500);
              } else if (i == "diigolet-csm-highlightAndComment") return;
              h.addClass("editing");
            },
            function () {
              var h = $(this).find(".csm-action"),
                i = h.attr("id");
              if (i == "diigolet-csm-highlight") {
                d != null && clearTimeout(d);
                f = setTimeout(function () {
                  h.parent().find(".diigolet-csm-color").hide();
                  h.removeClass("editing");
                }, 500);
              } else
                i == "diigolet-csm-highlightAndComment" &&
                  setTimeout(function () {
                    h.parent().find(".diigolet-csm-color").hide();
                    h.removeClass("editing");
                  }, 350);
            }
          );
          $("#diigolet-csm .diigolet-csm-color").mousedown(function (h) {
            h.preventDefault();
            h.stopPropagation();
          });
          $("#diigolet-csm-search").click(function () {
            var h = window.getSelection().toString();
            window.open(
              "https://www.diigo.com/search/g?q=" +
                encodeURIComponent(h) +
                "&sa=Search"
            );
            return false;
          });
          a = document.getElementById("diigolet-csm-copy");
          $(a)
            .off("click")
            .on("click", function () {
              var h = window.getSelection().toString();
              Za(h);
            });
        },
        changeColor: function (a) {
          document.getElementById("diigolet-csm").className = a;
        },
        show: function () {
          var a = document.createRange();
          new Date().getTime();
          Math.random().toString().substr(2);
          var c = window.getSelection();
          if (c.toString().length > 0) {
            a.setStart(c.focusNode, c.focusOffset);
            a.setEnd(c.focusNode, c.focusOffset);
            a.collapse(false);
            c = c.getRangeAt(0).getClientRects();
            var d = Array.prototype.map.call(c, function (h) {
              return h.left;
            });
            a = Array.prototype.map.call(c, function (h) {
              return h.right;
            });
            if (c[0].top < 50) {
              c = c[0].top + $(window).scrollTop();
              this.j.addClass("hideArrow");
            } else c = c[0].top + $(window).scrollTop() - 50;
            d = Math.min.apply(null, d);
            a = Math.max.apply(null, a);
            this.j
              .css({ left: d + (a - d) / 2 - 60, top: c })
              .show()
              .addClass("active");
            var f = this.j;
            setTimeout(function () {
              window.getSelection().toString().length == 0 && f.hide();
            }, 0);
            this.shown = true;
          }
          this.copyClient &&
            this.copyClient.setText(window.getSelection().toString());
        },
        hide: function () {
          this.j.hide().removeClass("active").removeClass("hideArrow");
          $("#diigolet-csm .diigolet-csm-color").hide();
          this.shown = false;
        },
      },
      P = {
        j: null,
        ann: null,
        p: null,
        tempAnnId: null,
        copyClient: null,
        copyText: "",
        showDelay: 0,
        showTimer: null,
        hideDelay: 350,
        hideTimer: null,
        shown: false,
        cancelShow: function () {
          clearTimeout(this.showTimer);
          this.showTimer = null;
        },
        cancelHide: function () {
          clearTimeout(this.hideTimer);
          this.hideTimer = null;
        },
        aboutToShow: function () {
          return this.shown || this.showTimer;
        },
        aboutToHide: function () {
          return !this.shown || this.hideTimer;
        },
        scheduleShow: function (a, c) {
          var d = this;
          if (!B.isEditing()) {
            var f = $(a.target).offset(),
              h = $(a.target).width(),
              i = {
                pageX: a.pageX,
                pageY: a.pageY,
                offsetTop: f.top,
                offsetLeft: f.left,
                width: h,
              };
            d.cancelHide();
            d.cancelShow();
            d.showTimer = setTimeout(function () {
              d.show(i, c);
            }, d.showDelay);
          }
        },
        scheduleHide: function () {
          var a = this;
          a.cancelHide();
          a.cancelShow();
          a.hideTimer = setTimeout(function () {
            a.hide();
          }, a.hideDelay);
        },
        init: function () {
          var a = this;
          a.create();
          setTimeout(function () {
            a.j
              .bind("mouseleave", function () {
                a.scheduleHide();
                if (a.p) {
                  a.p.scheduleHide();
                  a.p.scheduleToggleEdit(false);
                }
              })
              .bind("mousemove", function () {
                a.cancelHide();
                if (a.p) {
                  a.p.cancelHide();
                  a.p.cancelToggleEdit();
                }
              })
              .bind("mouseenter", function () {
                a.cancelHide();
                if (a.p) {
                  a.p.cancelHide();
                  a.p.cancelToggleEdit();
                }
              });
          }, 13);
          K("diigolet-annMenu-add").click(function (c) {
            if (da()) {
              B.show_(c.pageX, c.pageY, a.ann, "add");
              c.preventDefault();
              return false;
            }
          });
          K("diigolet-annMenu-share").on("click", function (c) {
            var d =
              c.pageX + 402 > $(window).width()
                ? $(window).width() - 404
                : c.pageX;
            ub.show(a.ann, d, c.pageY);
            a.hide();
          });
          document.getElementById("diigolet-annMenu-copy");
          $("#diigolet-annMenu-copy").on("click", function () {
            Za(a.copyText);
            $(this).parent().hide();
          });
          K("diigolet-annMenu-My").click(function () {
            window.open(x.urls.getUserBookmarksPageURL());
            return false;
          });
          $("#diigolet-annMenu-color").on("click", function (c) {
            c.preventDefault();
            $(this).addClass("active");
            $("#diigolet-annMenu-colorPicker").toggle();
            return false;
          });
          $("#diigolet-annMenu-more").on("click", function (c) {
            c.preventDefault();
            $("#diigolet-annMenu-moreThings").toggle();
            return false;
          });
          $(
            "#diigolet-context-yellow,#diigolet-context-blue,#diigolet-context-green,#diigolet-context-pink"
          ).click(function () {
            var c = $(this).attr("color");
            if (!a.ann.extra || a.ann.extra == "undefined")
              a.ann.extra = { color: c };
            else a.ann.extra.color = c;
            C.updateExtra(a.ann);
            a.ann.paint();
            var d = "id_" + a.ann.id;
            if ($("." + d).length > 1) {
              d = $("." + d)[0];
              $(d).scrollmarker();
            } else $("." + d).scrollmarker();
            chrome.runtime.sendMessage({
              name: "editItem",
              cmd: "changeColor",
              annotation: a.ann,
            });
            $(".ann-colorItem").removeClass("colorchecked");
            K("diigolet-annMenu-currentColor")
              .removeClass("yellow blue green pink")
              .addClass(c);
            $("#diigolet-context-" + c).addClass("colorchecked");
            return false;
          });
          K("diigolet-annMenu-del").click(function (c) {
            var d = a.ann;
            d.onlyInGroup || d.del();
            J(
              W(d.groups, function (f) {
                return f.name;
              }),
              function (f) {
                d.del(f);
              }
            );
            a.hide();
            c.preventDefault();
            return false;
          });
          K("diigolet-annMenu-copy-highlights").click(function (c) {
            x.Messenger.send({
              name: "copy",
              details: { html: a.ann.content },
            });
            a.hide();
            c.preventDefault();
            return false;
          });
        },
        create: function () {
          this.j = $(diigolet.consts.HTML_ANN_MENU)
            .css({ position: "absolute" })
            .hide()
            .appendTo(fa.body)
            .hide();
        },
        show: function (a, c) {
          if (c.id != this.tempAnnId) {
            this.cancelHide();
            this.cancelShow();
            Y.shown && Y.hide();
            this.ann = c;
            this.buildMenu();
            this.j
              .css({
                left:
                  curcorX + 100 > $(window).width()
                    ? $(window).width() - 212
                    : this.j.hasClass("onlyMy")
                    ? curcorX - 100
                    : curcorX - 31,
                top: curcorY - 65,
              })
              .show();
            this.shown = true;
            this.tempAnnId = c.id;
            var d = "";
            $(".id_" + c.id).each(function () {
              if ($(this).hasClass("diigoHighlight")) {
                if ($(this).find(".diigoIcon").length > 0) {
                  var f = $(this).clone();
                  f.find(".diigoIcon").remove();
                  f = $(f).html();
                } else f = $(this).html();
                if ($(this).parent()[0].tagName == "A")
                  f =
                    '<a href="' +
                    $(this).parent().attr("href") +
                    '">' +
                    f +
                    "</a>";
                d += f + " ";
              }
            });
            this.copyText = d;
            if (this.copyClient) {
              console.log(d);
              this.copyClient.setData("text/plain", d);
            }
          }
        },
        hide: function () {
          this.cancelHide();
          this.cancelShow();
          this.shown = false;
          this.j.hide();
          $("#diigolet-annMenu-colorPicker").hide();
          $("#diigolet-annMenu-color").removeClass("active");
          $("#diigolet-annMenu-moreThings").hide();
          this.tempAnnId = null;
        },
        buildMenu: function () {
          var a = this.ann;
          K("diigolet-annMenu-del").showHide(a.canDelete());
          if (a.user == k.user) {
            $("._onlyMy").show();
            this.j.addClass("onlyMy");
          } else {
            $("._onlyMy").hide();
            this.j.removeClass("onlyMy");
          }
          $.each(k.defaultColors, function (c, d) {
            K("diigolet-context-" + d).toggleClass("colorchecked", false);
          });
          if (a.extra && a.extra.color && a.extra.color.length > 0) {
            K("diigolet-annMenu-currentColor")
              .removeClass("yellow blue green pink")
              .addClass(a.extra.color);
            K("diigolet-context-" + a.extra.color).toggleClass(
              "colorchecked",
              true
            );
          } else K("diigolet-context-yellow").toggleClass("colorchecked", true);
          K("diigolet-annMenu-tip-before").show();
          K("diigolet-annMenu-tip").show();
          K("diigolet-annMenu-tip").html(this.tipMsg(a));
        },
        tipMsg: function (a) {
          var c = "#{MODE} #{WHAT} by #{REALNAME}",
            d = { REALNAME: a.realName };
          d.WHAT =
            a.type == x.ANNOTATION_TYPE_FLOATNOTE
              ? "floating sticky note"
              : "highlight";
          d.MODE = a.isPublic()
            ? "Public"
            : a.isPrivate()
            ? "Personal"
            : "Group";
          if (a.inAnyGroups()) {
            c += ", shared to group #{GROUPS}";
            a = Qa(
              W(a.groups, function (f) {
                return f.displayName;
              })
            );
            d.GROUPS =
              a.length == 1
                ? a[0]
                : a.slice(0, a.length - 1).join(", ") +
                  " and " +
                  a[a.length - 1];
          }
          return ua(c, d);
        },
      },
      Z = {
        j: null,
        ann: null,
        showDelay: 200,
        showTimer: null,
        hideDelay: 300,
        hideTimer: null,
        editDelay: 350,
        editTimer: null,
        shown: false,
        cancelShow: function () {
          clearTimeout(this.showTimer);
          this.showTimer = null;
        },
        cancelHide: function () {
          clearTimeout(this.hideTimer);
          this.hideTimer = null;
        },
        aboutToShow: function () {
          return this.shown || this.showTimer;
        },
        aboutToHide: function () {
          return !this.shown || this.hideTimer;
        },
        scheduleShow: function (a, c) {
          var d = this,
            f = { screenX: a.screenX, screenY: a.screenY };
          d.cancelHide();
          d.cancelShow();
          d.showTimer = setTimeout(function () {
            d.show(f, c);
          }, d.showDelay);
        },
        scheduleHide: function () {
          var a = this;
          a.cancelHide();
          a.cancelShow();
          a.hideTimer = setTimeout(function () {
            a.hide();
          }, a.hideDelay);
        },
        hideCallback: function () {
          this.shown = false;
          this.ann = null;
          P.aboutToShow() && P.scheduleHide();
        },
        showMenu: function (a, c, d) {
          c.cancelHide();
          c.cancelToggleEdit();
          if (c.ann)
            if (c.ann.comments.length == 0)
              try {
                var f = P.ann != c.ann;
                P.p = c;
                f || !P.shown || d ? P.scheduleShow(a, c.ann) : P.cancelHide();
              } catch (h) {
                throw h;
              }
            else {
              f = B.ann != c.ann;
              B.isEditing() ||
                ((f || !B.shown) && !d
                  ? B.scheduleShow(a, c.ann)
                  : B.cancelHide());
            }
        },
        reset: function (a) {
          var c = this;
          this.removeEditMode();
          this.hide();
          this.ann = a;
          this.j = $("div." + L.HIGHLIGHT_ID_CLASS + a.id)
            .bind("mouseout", function () {
              c.scheduleHide();
            })
            .bind("click", function (d) {
              c.showMenu(d, c, true);
            })
            .bind("mousemove", function (d) {
              c.showMenu(d, c, false);
            });
        },
        show: function (a, c) {
          Y.shown && Y.hide();
          if (c.comments.length <= 0)
            if (c.type == diigolet.consts.ANNOTATION_TYPE_TEXT)
              this.j.css({ top: -23 });
            else {
              var d = c.getPageOffset();
              this.j.css({ left: d.left, top: d.top });
            }
          this.j.show();
          this.shown = true;
        },
        scheduleToggleEdit: function (a) {
          try {
            var c = this;
            if (!(this.ann == null || this.ann.comments.length <= 0))
              if (a) {
                c.j = $("div." + L.HIGHLIGHT_ID_CLASS + c.ann.id);
                c.j.toggleClass("edit", true);
              } else {
                c.cancelToggleEdit();
                c.editTimer = setTimeout(function () {
                  c.removeEditMode();
                }, c.editDelay);
              }
          } catch (d) {}
        },
        removeEditMode: function () {
          if (this.ann && this.ann.comments.length > 0) {
            this.j.toggleClass("edit", false);
            this.ann = null;
          }
        },
        cancelToggleEdit: function () {
          clearTimeout(this.editTimer);
          this.editTimer = null;
        },
        hide: function () {
          this.cancelHide();
          this.cancelShow();
          this.shown = false;
        },
      },
      Xa = {
        j: null,
        init: function () {
          var a = this;
          if (!a.inited) {
            a.inited = true;
            a.create();
            ca("info alert OK wait").forEach(function (c) {
              a["notify" + c[0].toUpperCase() + c.substr(1)] = function (d, f) {
                return a.notify(d, c, f);
              };
            });
          }
        },
        create: function () {
          (this.j = $(diigolet.consts.HTML_NOTICE)
            .eq(0)
            .appendTo(document.body)
            .hide())
            .children()
            .eq(0)
            .siblings()
            .remove();
        },
        destroy: function () {
          this.j.remove();
        },
        hide: function () {
          this.j.hide();
        },
        notify: function (a, c, d) {
          d = d || {};
          var f = this.j;
          d = d.timeout == undefined ? 4e3 : d.timeout;
          f.children("div:first").attr("class", c).children("p:first").html(a);
          f.show();
          f.children("div:first")
            .children("p:first")
            .children("a")
            .click(function () {
              window.open(
                "https://www.diigo.com/sign-in?referInfo=" +
                  encodeURIComponent("/images/diigo-logo.png#SIGNED_IN")
              );
            });
          f.children("div:first")
            .children("span:first")
            .click(function () {
              f.fadeOut();
            });
          if (f[0].timerId) {
            clearTimeout(f[0].timerId);
            f[0].timerId = null;
          }
          if (d)
            f[0].timerId = setTimeout(function () {
              f.fadeOut("slow");
            }, d);
        },
      },
      ab = {
        j: null,
        k: null,
        shown: false,
        init: function () {
          this.create();
        },
        create: function () {
          this.j = $(
            '<div id="diigo-premium-warning"><div id="diigo-premium-warning-content"><div id="diigo-premium-warning-main"><div id="diigo-premium-warning-icon"></div><div id="diigo-premium-warning-text"><p><b>Screen captures</b> ran out of free plan.</p><p>Please support us with a <a href="https://www.diigo.com/premium"target="_blank">premium plan</a>.</p></div></div><div id="diigo-premium-warning-bottom"><div id="diigo-go-premium"class="diigo-premium-warning-btn"></div><div id="diigo-premium-warning-cancel"class="diigo-premium-warning-btn"></div></div></div></div>'
          )
            .eq(0)
            .appendTo(document.body.parentNode)
            .hide();
          this.k = $('<div id="diigo-premium-warning-wrapper"></div>')
            .eq(0)
            .appendTo(document.body.parentNode)
            .hide();
        },
        destroy: function () {
          this.k.remove();
          this.j.remove();
          this.shown = false;
        },
        show: function (a) {
          var c = this;
          if (c.shown != true) {
            var d = document.body.scrollWidth;
            c.k
              .css("height", document.body.scrollHeight)
              .css("width", d)
              .show();
            $("#diigo-premium-warning-text p b").text(a);
            a = (window.screen.availHeight - 356) / 2 + document.body.scrollTop;
            this.j
              .css("left", (window.screen.availWidth - 356) / 2 + "px")
              .css("top", a + "px");
            c.j.show();
            c.shown = true;
            $("#diigo-go-premium").click(function () {
              window.open("https://www.diigo.com/premium");
            });
            $("#diigo-premium-warning-cancel").click(function () {
              c.destroy();
            });
          }
        },
      },
      La = {};
    La.Class = {
      create: function (a, c) {
        function d() {
          this.initialize.apply(this, arguments);
        }
        if (arguments.length == 1 && typeof a != "function") {
          c = a;
          a = null;
        }
        d.superclass = a;
        d.subclasses = [];
        if (a) {
          var f = function () {};
          f.prototype = a.prototype;
          d.prototype = new f();
          a.subclasses.push(d);
        }
        c && La.Class.extend(d, c);
        if (!d.prototype.initialize) d.prototype.initialize = function () {};
        return (d.prototype.constructor = d);
      },
      extend: function (a, c) {
        var d = a.superclass && a.superclass.prototype;
        for (var f in c) {
          var h = c[f];
          if (
            d &&
            typeof h == "function" &&
            A.func.argumentNames(h)[0] == "$super"
          ) {
            var i = h;
            h = A.extend(
              A.func.wrap(
                (function (m) {
                  return function () {
                    return d[m].apply(this, arguments);
                  };
                })(f),
                i
              ),
              {
                valueOf: function () {
                  return i;
                },
                toString: function () {
                  return i.toString();
                },
              }
            );
          }
          a.prototype[f] = h;
        }
        return a;
      },
    };
    var O = La.Class.create({
      initialize: function (a) {
        var c = this;
        if (a.maxRecipients) {
          c.maxRecipients = a.maxRecipients;
          c.maxRecipientsTipTemp = "MAX Recipients " + c.maxRecipients;
        }
        c.scanType = a.scanType || "all";
        c.maxHeight = a.maxHeight || 200;
        c.width = a.width || 414;
        c.recItemsId = [];
        c.tipTemp = "Start typing a friend's name or email address.";
        c.recBox = $(a.rec);
        c.recBox.css({
          font: "12px verdana",
          padding: "0 0 2px 2px",
          width: c.width,
        });
        if (!c.recInput) {
          c.recInput = $('<input class="recInput" maxlength=255/>');
          c.recBox.append(c.recInput);
          c.recInputSizer = $('<div class="recInputSizer"/>');
          c.recBox.append(c.recInputSizer);
          var d = $("<div />");
          d.css({ clear: "both" });
          c.recBox.append(d);
        }
        c.setContacts(a.contacts, true);
        if (!c.tip) {
          c.tip = $("<div />");
          c.tip.css({ width: c.recBox.width() - 2 + "px" });
          c.recBox.parent().append(c.tip);
          c.tip.hide();
        }
        if (!c.contactList) {
          c.contactList = $("<div class='accList'/>");
          c.contactList.css({ width: c.recBox.width() - 2 + "px" });
          c.contactListInner = $("<div />");
          c.contactListInner.css({
            position: "relative",
            overflow: "auto",
            padding: "2px",
          });
          c.contactList.append(c.contactListInner);
          c.recBox.parent().append(c.contactList);
          c.contactList.hide();
        }
        c.recBox.click(function () {
          c.recInput.css({ visibility: "visible" });
          c.recInput.trigger("focus");
        });
        c.recBox.reset = function () {
          c.recInput.trigger("blur");
          c.recBox.find(".recItem").each(function () {
            $(this).remove();
          });
          c.recItemsId.length = 0;
        };
        c.recInput.focus(function () {
          c.showTip();
          c.recInput.reset();
          c.currentItem = -1;
        });
        c.recInput.reset = function () {
          c.recInput.val("");
          var f = O.getTextSize(c.recInput.val(), c.recInputSizer);
          c.recInput.css({ width: f + 30 + "px", visibility: "visible" });
        };
        c.recInput.blur(function () {
          c.wrapItem();
          c.hideTip();
          c.recInput.css({ visibility: "hidden" });
          setTimeout(function () {
            c.hideContacts();
          }, 300);
        });
        c.recInput.keydown(function (f) {
          var h;
          if (window.event) h = window.event.keyCode;
          else if (f) h = f.which;
          switch (h) {
            case 9:
            case 40:
              c.hoverItem(c.currentItem + 1);
              return false;
            case 38:
              c.hoverItem(c.currentItem - 1);
              return false;
            case 8:
              if (c.recInput.val() == "" && c.recInput.prev()) {
                f = c.recInput.prev().attr("cIndex");
                $("#recItemRemove_" + f).trigger("click");
              }
              break;
            case 13:
              c.wrapItem();
              c.recInput.reset();
              c.hideContacts();
              c.showTip();
              return false;
            case 32:
              c.wrapItem();
              c.recInput.reset();
              c.hideContacts();
              c.showTip();
              return false;
          }
          f = O.getTextSize(c.recInput.val(), c.recInputSizer);
          if (f > c.recBox.width() - 50) f = c.recBox.width() - 50;
          c.recInput.css({ width: f + 30 + "px" });
        });
        c.recInput.keyup(function (f) {
          f = f.keyCode;
          if ((f <= 105 && f >= 48) || f == 8) c.scanContacts();
        });
      },
      clearAll: function () {
        this.recBox.reset();
      },
      setContacts: function (a, c) {
        c || this.clearAll();
        a = $.parseJSON($.toJSON(a));
        O.contacts = a;
        O.contactListsID = [];
        for (var d = 0; d < O.contacts.length; d++)
          O.contacts[d].type == "list" && O.contactListsID.push(d);
      },
      showNotice: function () {
        this.tip.attr({ class: "accNotice" });
        this.tip.html(this.maxRecipientsTipTemp);
        this.tip.css({ width: this.recBox.width() - 2 + "px" });
        this.tip.show();
      },
      showTip: function () {
        this.tip.attr({ class: "accTip" });
        this.tip.html(this.tipTemp);
        this.tip.css({ width: this.recBox.width() - 2 + "px" });
        this.tip.show();
      },
      hideTip: function () {
        this.tip.hide();
      },
      scanContacts: function () {
        this.match = [];
        var a = this.recInput.val().replace(/\s+/g, "&");
        if (a.length <= 0) {
          this.hideContacts();
          return false;
        }
        a = RegExp("&" + a, "i");
        for (var c = 0; c < O.contacts.length; c++) {
          var d = "",
            f = O.contacts[c];
          if (!(this.scanType != "all" && this.scanType != f.type)) {
            switch (f.type) {
              case "list":
                d =
                  "&" + f.extra.title.replace(/\s+/, "&") + "&" + f.extra.note;
                break;
              case "friend":
                d = "&" + f.extra.real_name.replace(/\s+/, "&") + "&" + f.id;
                break;
              case "user":
                d = "&" + f.id.replace(/\s+/, "&") + "&" + f.extra.email;
                break;
              case "email":
                d = "&" + f.id;
                break;
            }
            a.test(d) && this.match.push(c);
          }
        }
        this.match.length > 0 ? this.showContacts() : this.hideContacts();
      },
      showContacts: function () {
        this.recInput.val();
        this.contactListInner.html("");
        this.contactListInner.css({
          height: "auto",
          width: this.recBox.width() - 6 + "px",
        });
        for (var a = this, c = 0; c < this.match.length; c++) {
          var d = this.match[c],
            f = O.contacts[d],
            h = $("<div id=cI_" + c + ' class="cItem"/>');
          switch (f.type) {
            case "list":
              h.html(
                "<b><i>list</i>" + this.h(f.extra.title) + "</b>" + f.extra.note
              );
              break;
            case "friend":
              str =
                "<b>" +
                this.h(f.extra.real_name) +
                "</b><span class='extraDesc'>(";
              if (f.id) str += this.h(f.id) + " on Diigo";
              if (f.extra.location) str += ", " + f.extra.location;
              if (f.extra.sex) str += " " + f.extra.sex;
              str += ")</span>";
              h.html(str);
              break;
            case "user":
              h.html("<b>" + this.h(f.extra.email) + "</b>");
              break;
            case "email":
              h.html("<b>" + this.h(f.id) + "</b>");
              break;
          }
          h.attr("cIndex", d);
          h.bind("mouseover", { index: c }, function (i) {
            a.hoverItem(i.data.index);
          });
          h.bind("mouseout", { index: c }, function (i) {
            a.outItem(i.data.index);
          });
          h.click(function () {
            a.wrapItem();
          });
          this.contactListInner.append(h);
        }
        this.contactList.show();
        this.contactListInner.height() > this.maxHeight &&
          this.contactListInner.css({ height: this.maxHeight + "px" });
        this.hoverItem(0);
      },
      hideContacts: function () {
        this.contactList.hide();
        this.currentItem = -1;
      },
      h: function (a) {
        if (a.length <= 0) return "";
        var c = this.recInput.val();
        return a.replace(
          eval("/" + c + "/i"),
          "<span class='keywordStrong'>" + c + "</span>"
        );
      },
      hoverItem: function (a) {
        this.currentItem >= 0 && this.outItem(this.currentItem);
        this.currentItem =
          a > this.match.length - 1 ? this.match.length - 1 : a < -1 ? -1 : a;
        var c = $("#cI_" + this.currentItem);
        if (c[0]) {
          c[0].className += " hover";
          if (this.currentItem == 0) {
            this.contactListInner[0].scrollTop = 0;
            return false;
          }
          if (this.currentItem == this.match.length - 1) {
            this.contactListInner[0].scrollTop = 2e3;
            return false;
          }
          a = this.contactListInner[0].scrollTop;
          var d = a + this.contactListInner.height(),
            f = c.offset().top;
          c = f + c.height();
          if (f < a) this.contactListInner[0].scrollTop -= a - f;
          else if (c > d) this.contactListInner[0].scrollTop += c - d;
        }
      },
      outItem: function (a) {
        if (this.currentItem >= 0) {
          var c = $("#cI_" + this.currentItem);
          if (c[0]) c[0].className = c[0].className.replace(/\s?hover/gi, "");
        }
        this.currentItem = -1;
        a = $("#cI_" + a);
        if (a[0]) a[0].className = a[0].className.replace(/\s?hover/gi, "");
      },
      wrapItem: function (a) {
        if (typeof a == "undefined") {
          a = this.recInput.val();
          if (a.length <= 0) {
            this.currentItem = -1;
            return false;
          }
          if (this.currentItem == -1) {
            emailR = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            emailR.test(a)
              ? O.contacts.push({ type: "email", id: a })
              : O.contacts.push({
                  type: "friend",
                  id: a,
                  extra: { real_name: a },
                });
            a = O.contacts.length - 1;
          } else a = $("#cI_" + this.currentItem).attr("cIndex");
        }
        var c = O.contacts[a];
        if (this.recItemsId.indexOf(a) != -1) {
          this.hideContacts();
          this.recBox.trigger("click");
          return false;
        }
        if (this.maxRecipients && this.recItemsId.length > this.maxRecipients) {
          this.hideContacts();
          this.showNotice();
          return false;
        }
        var d = "";
        if (c)
          switch (c.type) {
            case "list":
              d = "<i>list</i>" + c.extra.title;
              break;
            case "friend":
              d = c.extra.real_name;
              break;
            case "user":
              d = c.extra.email;
              break;
            case "email":
              d = c.id;
              break;
          }
        c = $('<span class="recItem" id="recItem_' + a + '"></span>').html(d);
        d = $(
          '<a class="recItemRemove" href="javascript:void(0);" id="recItemRemove_' +
            a +
            '"></a>'
        ).html("x");
        c.append(d);
        c.attr("cIndex", a);
        c.insertBefore(this.recInput);
        var f = this;
        $("#recItemRemove_" + a).bind("click", { index: a }, function (h) {
          f.removeRecItem(h.data.index);
        });
        this.recBox.trigger("click");
        this.recItemsId.push(a);
      },
      removeRecItem: function (a) {
        $("#recItem_" + a).remove();
        this.recItemsId = this.recItemsId.slice(a, 1);
        this.recBox.trigger("click");
      },
      getRecItems: function () {
        if (!this.recItemsId || this.recItemsId.length == 0) return null;
        else {
          for (
            var a = [], c = [], d = [], f = 0;
            f < this.recItemsId.length;
            f++
          ) {
            var h = O.contacts[this.recItemsId[f]];
            switch (h.type) {
              case "friend":
                a.push(h.id);
                break;
              case "list":
                d.push(h.id);
                break;
              case "user":
                c.push(h.extra.email);
                break;
              case "email":
                c.push(h.id);
                break;
            }
          }
          return { friends: a, emails: c, lists: d };
        }
      },
      setDefault: function (a) {
        this.wrapItem(a);
      },
      getRecOriItems: function () {
        if (!this.recItemsId || this.recItemsId.length == 0) return null;
        else {
          for (var a = [], c = 0; c < this.recItemsId.length; c++)
            a.push(O.contacts[this.recItemsId[c]]);
          return a;
        }
      },
    });
    O.getTextSize = function (a, c) {
      c.innerHTML = a.replace(/ /g, "&nbsp;");
      return c.offsetWidth > 500 ? 500 : c.offsetWidth;
    };
    var Ma = {
        cache: {},
        get2: function (a, c, d) {
          var f = this,
            h;
          if ((h = f.cache[c])) {
            d && d(h);
            return h;
          } else
            C.makeAnnotatedLink(a, c, function (i) {
              if (d) d((f.cache[c] = i.result.url));
            });
        },
        get: function (a, c) {
          return this.get2(a, 3, c);
        },
      },
      V = {
        shown: false,
        j: null,
        tabs: {},
        init: function () {
          var a = this;
          a.create();
          $(window).resize(function () {
            a.shown && a.adjustPosition();
          });
          J(a.tabs, function (c) {
            c.init();
          });
        },
        destroy: function () {},
        onSignIn: function () {
          this.updateUI();
        },
        onSignOut: function () {
          this.hide();
        },
        adjustPosition: function () {
          var a = this.j,
            c = $(window),
            d = c.width();
          c = c.height();
          var f = parseInt(a.css("left")),
            h = parseInt(a.css("top")),
            i = a.outerWidth(),
            m = a.outerHeight();
          if (d < f + i) a.css("left", (f = d - i));
          if (c < h + m) a.css("top", (h = c - m));
          h < 0 && a.css("top", 1);
          f < 0 && a.css("left", 1);
        },
        show: function (a) {
          if (!this.shown) {
            this.shown = true;
            this.j.show();
            this.adjustPosition();
            this.changeTab(a ? a : "email");
          }
        },
        hide: function () {
          if (this.shown) {
            this.shown = false;
            this.j.hide();
            J(this.tabs, function (a) {
              a.shown = false;
            });
          }
        },
        updateUsername: function () {},
        updateUI: function () {},
        create: function () {
          var a = this,
            c = (a.j = $(diigolet.consts.HTML_DLG_SHARE)
              .eq(0)
              .appendTo(document.body)
              .hide());
          $("#diigolet-dialog-share-closeBtn").click(function () {
            a.hide();
          });
          c.css("left", ($(window).width() - c.outerWidth()) / 2);
          $("#diigolet-share-shareToTabs li a").click(function () {
            a.changeTab($(this).attr("diigotab"));
          });
          new $.Draggable(c, {
            handle: "._dragHandle",
            afterDrag: function () {
              a.adjustPosition();
            },
          });
        },
        changeTab: function (a) {
          if (this.tab) {
            $("#diigolet-share-tab-" + this.tab).removeClass("current");
            $("#diigolet-dialog-share-" + this.tab).hide();
          }
          $("#diigolet-share-tab-" + a).addClass("current");
          $("#diigolet-dialog-share-" + a).show();
          this.tab = a;
          this.tabs[a].show();
        },
      };
    V.tabs.email = {
      init: function () {
        var a = this;
        a.j = $("#diigolet-dialog-share-email");
        a.jCheckQuotes = $("#diigolet-dialog-share-email-quotes-checker>input");
        a.jTxtTo = $("#diigolet-dialog-share-email-to");
        a.jSubject = $("#diigolet-dialog-share-email-subject");
        a.jTxtMsg = $("#diigolet-dialog-share-email-message");
        a.jQuotes = $("#diigolet-aidlog-share-email-quotes-content");
        a.j.find("input[type=button][value=Cancel]").click(function () {
          V.hide();
        });
        a.j.find("input[type=button][value=Send]").click(function () {
          a.trySend();
        });
        a.pikuInited = false;
        a.jCheckQuotes.attr("checked", "checked").change(function () {
          if ($(this).is(":checked")) {
            a.preview();
            a.j.find("#diigolet-dialog-share-email-quotes").show();
          } else a.j.find("#diigolet-dialog-share-email-quotes").hide();
        });
      },
      show: function () {
        this.jTxtTo[0].focus();
        this.jSubject.val(k.bookmark.getTitle());
        this.preview();
        this.jQuotes.parent().show();
        if (!this.pikuInited) {
          this.initAutocompleteContacts();
          this.pikuInited = true;
        }
      },
      preview: function () {
        var a = this;
        a.jQuotes.html(a.composeMessage());
        k.pageComments.length > 0 || k.annotations.length > 0
          ? Ma.get(k.bookmark.url, function (c) {
              a.updateURL(c);
            })
          : a.updateURL(k.bookmark.url);
      },
      updateURL: function (a) {
        N("[Share] updating annotated link", a);
        this.jQuotes.find("a.diigoAnnotatedLink").attr("href", a);
      },
      composeMessage: function (a) {
        var c = "";
        if (a) c += "<p>" + a + "</p>";
        a =
          k.pageComments.length > 0 || k.annotations.length > 0
            ? Ma.get(k.bookmark.url) || "DIIGO_PERMALINK"
            : k.bookmark.url;
        a = Q(
          '<p><a class="diigoAnnotatedLink" href="#{1}" title="#{0}">#{0}</a></p>',
          [k.bookmark.getTitle(), a]
        );
        c +=
          '<p><strong>Quotes:</strong></p><blockquote style="border-left: 2px solid #eee; padding-left: 1em; margin-left: 1em;">' +
          a +
          x.AnnotationFormatter.format({ mode: 1, includePageComments: true }) +
          "</blockquote>";
        return c;
      },
      trySend: function () {
        var a = A.string.strip(this.jSubject.val());
        if (!a) {
          H.notify("Please input subject", undefined, 3);
          return false;
        }
        a = {
          toAllFriends: false,
          toUsers: [],
          toEmails: [],
          toLists: [],
          mode: 2,
          subject: a,
          body: this.composeMessage(A.string.stripTags(this.jTxtMsg.val())),
        };
        if (this.jCheckQuotes.is(":checked")) a.bookmarkUrl = k.bookmark.url;
        var c = this.piku.getRecItems();
        if (!c) {
          H.notify("Please input recipients", undefined, 3);
          return false;
        }
        a.toUsers = c.friends;
        a.toEmails = c.emails;
        a.toLists = c.lists;
        k.myContacts = $.parseJSON($.toJSON(O.contacts));
        C.shareBookmark(a, function (d) {
          d.code == 1
            ? H.notify("Message sent")
            : H.notify("Message sent failed", undefined, 3);
        });
        H.notify("Sending Message...");
        V.hide();
        return true;
      },
      getMessageBody: function () {
        return this.jTxtMsg.val();
      },
    };
    DlgShare_piku = {
      onMyContactsUpdate: function () {
        this.piku && this.piku.setContacts(k.myContacts);
      },
      initAutocompleteContacts: function () {
        this.piku = new O({
          rec: "#forwardTo",
          contacts: k.myContacts,
          maxRecipients: 20,
          width: "100%",
          maxHeight: 180,
          scanType: "all",
        });
      },
    };
    M(V.tabs.email, DlgShare_piku);
    V.onMyContactsUpdate = function () {
      V.tabs.email.onMyContactsUpdate();
    };
    x.AnnotationFormatter = {
      format: function (a) {
        a = M({ mode: 3, includePageComments: false }, a || {});
        var c = (a.mode & 2) == 2,
          d = (a.mode & 1) == 1;
        N(
          "[AnnotationFormatter] format mode:",
          a.mode,
          "includeOthers",
          c,
          "includePrivate",
          d
        );
        var f = "";
        if (a.includePageComments)
          f +=
            "<ul>" +
            $.map(
              $(k.pageComments).filter(function (h) {
                return (
                  (c ? true : h.user == k.user) &&
                  (d ? true : h.mode != PRIVACY_MODE_PRIVATE)
                );
              }),
              function (h) {
                return (
                  '<li style="line-height:150%;margin-bottom:.6em;">' +
                  A.string.stripTags(h.content) +
                  "</li>"
                );
              }
            ).join("\n") +
            "</ul>";
        f +=
          "<ul>" +
          $.map(
            $(k.annotations).filter(function (h) {
              return (
                (c ? true : h.user == k.user) &&
                (d ? true : h.mode != PRIVACY_MODE_PRIVATE)
              );
            }),
            function (h) {
              var i = "";
              if (h.type == diigolet.consts.ANNOTATION_TYPE_TEXT)
                i = A.string.stripTags(h.content);
              else if (h.type == diigolet.consts.ANNOTATION_TYPE_IMAGE)
                i = A.string.makeTpl(
                  '<img src="#{0}" title="#{1}" alt="#{1}">(image)',
                  [h.extra.imageUrl, ""]
                );
              else if (h.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE)
                i =
                  '<img src="https://www.diigo.com/images/v2/float_note.gif" />(floating sticky note)';
              else if (h.type == diigolet.consts.ANNOTATION_TYPE_FLASH)
                i = "(flash movie)" + h.content;
              else if (h.type == diigolet.consts.ANNOTATION_TYPE_VIDEO)
                i = "(video)" + h.content;
              return A.string.makeTpl(
                '<li style="line-height:150%;margin-bottom:.6em;">#{0} #{1} #{2}</li>',
                [
                  i,
                  h.groups ? "" : "",
                  "<ul>" +
                    $.map(
                      $(h.comments).filter(function (m) {
                        return (
                          (c ? true : m.user == k.user) &&
                          (d ? true : m.mode != PRIVACY_MODE_PRIVATE)
                        );
                      }),
                      function (m) {
                        return (
                          '<li style="line-height:150%;margin-bottom:.6em;">' +
                          A.string.stripTags(m.content) +
                          A.string.makeTpl(
                            ' <span style="font-size:11px;color:#aaa">comment by <a href="#{0}">#{1}</a></span>',
                            [x.urls.getUserHomepageURL(m.user), m.realName]
                          ) +
                          "</li>"
                        );
                      }
                    ).join("\n") +
                    "</ul>",
                ]
              );
            }
          ).join("\n") +
          "</ul>";
        return f;
      },
    };
    V.tabs.annotatedLink = {
      init: function () {
        this.j = $("#diigolet-dialog-share-annotatedLink");
        this.j.find("input[type=button][value=Cancel]").click(function () {
          V.hide();
        });
        this.jInput = $("#diigolet-dialog-share-annotatedLink-value").focus(
          function () {
            var a = this;
            setTimeout(function () {
              a.select();
            }, 13);
          }
        );
      },
      show: function () {
        var a = this;
        a.shown = true;
        a.jInput = $("#diigolet-dialog-share-annotatedLink-value")
          .addClass("loading")
          .val("Loading...");
        Ma.get(k.bookmark.url, function (c) {
          a.jInput.removeClass("loading").val(c);
          $("#diigolet-dialog-share-annotatedLink-optLinks a:first").attr(
            "href",
            c
          );
        });
      },
    };
    jQuery.Draggable = function (a, c) {
      function d(z) {
        m = false;
        i(document).bind("mousemove", f).bind("mouseup", h);
        r = z.pageX;
        y = z.pageY;
        return false;
      }
      function f(z) {
        m || l.beforeDrag(z);
        if (!z.undraggable) {
          m = true;
          var w = parseInt(a.css("left")),
            o = parseInt(a.css("top")),
            p = z.pageX - r,
            n = z.pageY - y;
          if (l.axis == "y") p = 0;
          else if (l.axis == "x") n = 0;
          a.css({ left: w + p, top: o + n });
          l.onDrag(w, o, p, n);
          r = z.pageX;
          y = z.pageY;
          return false;
        }
      }
      function h(z) {
        i(document).unbind("mousemove", f).unbind("mouseup", h);
        if (m) {
          l.afterDrag(z);
          return false;
        } else return true;
      }
      var i = jQuery,
        m = false;
      a = this.ele = i(a);
      a[0]._draggable && a[0]._draggable.destroy();
      a[0]._draggable = this;
      var l = (this.options = i.extend(
        {
          handle: "",
          cursor: "move",
          axis: "",
          onDrag: function () {
            return true;
          },
          beforeDrag: function () {},
          afterDrag: function () {},
        },
        c || {}
      ));
      l.handle = l.handle ? i(l.handle, a) : a;
      l.handle.css({ cursor: l.cursor });
      var r, y;
      this.destroy = function () {
        l.handle.unbind("mousedown", d);
      };
      l.handle.bind("mousedown", d);
    };
    (function (a) {
      a.fn.autoGrowInput = function (c) {
        c = a.extend({ maxWidth: 1e3, minWidth: 0, comfortZone: 70 }, c);
        this.filter("input:text").each(function () {
          var d = c.minWidth || a(this).width(),
            f = "",
            h = a(this),
            i = a("<tester/>").css({
              position: "absolute",
              top: -9999,
              left: -9999,
              width: "auto",
              fontSize: h.css("fontSize"),
              fontFamily: h.css("fontFamily"),
              fontWeight: h.css("fontWeight"),
              letterSpacing: h.css("letterSpacing"),
              whiteSpace: "nowrap",
            });
          i.insertAfter(h);
          a(this).bind("keyup keydown blur update", function () {
            if (f !== (f = h.val())) {
              var m = f
                .replace(/&/g, "&amp;")
                .replace(/\s/g, "&nbsp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
              i.html(m);
              m = i.width();
              m = m + c.comfortZone >= d ? m + c.comfortZone : d;
              var l = h.width();
              ((m < l && m >= d) || (m > d && m < c.maxWidth)) && h.width(m);
            }
          });
        });
        return this;
      };
    })(jQuery);
    (function (a) {
      var c, d;
      a.fn.Gtooltip = function (f) {
        var h = {
          fontSize: 12,
          bgColor: "black",
          fColor: "white",
          position: "bottom",
          content: "",
        };
        return this.each(function () {
          function i() {
            y.text(l.data("gtooltip"));
            var w;
            w = l.offset().left;
            var o = l.offset().top,
              p = l.width(),
              n = l.height(),
              q = r.width(),
              t = r.height(),
              s,
              u,
              E,
              G,
              D = navigator.userAgent.toLowerCase();
            D =
              D.indexOf("macintosh") != -1 ||
              D.indexOf("mac os x") != -1 ||
              D.indexOf("linux") != -1
                ? true
                : false;
            switch (m.position) {
              case "bottom":
                G = D ? -9 : -10;
                s = parseInt((q + 2) / 2);
                u = w - parseInt((q + 14 - p) / 2);
                E = o + n + 5;
                break;
              case "top":
                G = D ? 22 : 23;
                s = parseInt((q + 2) / 2);
                u = w - parseInt((q + 14 - p) / 2);
                E = o - t - 15;
                break;
            }
            if (u <= 0) {
              u = w;
              s = (p - 10) / 2;
            } else if (u >= window.innerWidth - q) {
              u = w + p - q - 12;
              s = w - u + (p - 10) / 2;
            }
            w = { atop: G, aleft: s, left: w, tleft: u, ttop: E };
            r.css("left", w.tleft).css("top", w.ttop);
            z.css({ left: w.aleft, top: w.atop });
            if (m.position == "top")
              z.css("-webkit-transform", "rotate(180deg)");
            else
              m.position == "bottom" &&
                z.css("-webkit-transform", "rotate(360deg)");
            r.addClass("show");
          }
          var m = a.extend(h, f || {}),
            l = a(this),
            r,
            y,
            z;
          if (a("#gtooltip").length == 0) {
            r = a('<div id="gtooltip"></div>').appendTo(a("body"));
            y = a('<div id="gtooltip-content"></div>').appendTo(r);
            z = a('<div id="gtooltip-arrow"></div>').appendTo(r);
          } else {
            r = a("#gtooltip");
            y = a("#gtooltip-content");
            z = a("#gtooltip-arrow");
          }
          l.hover(
            function () {
              if (r.hasClass("show")) {
                clearTimeout(d);
                i();
              } else
                c = setTimeout(function () {
                  i();
                }, 350);
            },
            function () {
              c != null && clearTimeout(c);
              d = setTimeout(function () {
                r.removeClass("show");
              }, 100);
            }
          ).on("click", function () {
            c != null && clearTimeout(c);
            r.hasClass("show") && r.removeClass("show");
          });
        });
      };
    })(jQuery);
    (function (a) {
      typeof define === "function" && define.amd
        ? define(["jquery"], a)
        : a(jQuery);
    })(function (a) {
      function c(f) {
        return a.isFunction(f) || typeof f == "object"
          ? f
          : { top: f, left: f };
      }
      var d = (a.scrollTo = function (f, h, i) {
        return a(window).scrollTo(f, h, i);
      });
      d.defaults = {
        axis: "xy",
        duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1,
        limit: true,
      };
      d.window = function () {
        return a(window)._scrollable();
      };
      a.fn._scrollable = function () {
        return this.map(function () {
          if (
            !(
              !this.nodeName ||
              a.inArray(this.nodeName.toLowerCase(), [
                "iframe",
                "#document",
                "html",
                "body",
              ]) != -1
            )
          )
            return this;
          var f =
            (this.contentWindow || this).document || this.ownerDocument || this;
          return /webkit/i.test(navigator.userAgent) ||
            f.compatMode == "BackCompat"
            ? f.body
            : f.documentElement;
        });
      };
      a.fn.scrollTo = function (f, h, i) {
        if (typeof h == "object") {
          i = h;
          h = 0;
        }
        if (typeof i == "function") i = { onAfter: i };
        if (f == "max") f = 9e9;
        i = a.extend({}, d.defaults, i);
        h = h || i.duration;
        i.queue = i.queue && i.axis.length > 1;
        if (i.queue) h /= 2;
        i.offset = c(i.offset);
        i.over = c(i.over);
        return this._scrollable()
          .each(function () {
            function m(n) {
              r.animate(
                w,
                h,
                i.easing,
                n &&
                  function () {
                    n.call(this, y, i);
                  }
              );
            }
            if (f != null) {
              var l = this,
                r = a(l),
                y = f,
                z,
                w = {},
                o = r.is("html,body");
              switch (typeof y) {
                case "number":
                case "string":
                  if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(y)) {
                    y = c(y);
                    break;
                  }
                  y = a(y, this);
                  if (!y.length) return;
                case "object":
                  if (y.is || y.style) z = (y = a(y)).offset();
              }
              var p = (a.isFunction(i.offset) && i.offset(l, y)) || i.offset;
              a.each(i.axis.split(""), function (n, q) {
                var t = q == "x" ? "Left" : "Top",
                  s = t.toLowerCase(),
                  u = "scroll" + t,
                  E = l[u],
                  G = d.max(l, q);
                if (z) {
                  w[u] = z[s] + (o ? 0 : E - r.offset()[s]);
                  if (i.margin) {
                    w[u] -= parseInt(y.css("margin" + t)) || 0;
                    w[u] -= parseInt(y.css("border" + t + "Width")) || 0;
                  }
                  w[u] += p[s] || 0;
                  if (i.over[s])
                    w[u] += y[q == "x" ? "width" : "height"]() * i.over[s];
                } else {
                  t = y[s];
                  w[u] =
                    t.slice && t.slice(-1) == "%"
                      ? (parseFloat(t) / 100) * G
                      : t;
                }
                if (i.limit && /^\d+$/.test(w[u]))
                  w[u] = w[u] <= 0 ? 0 : Math.min(w[u], G);
                if (!n && i.queue) {
                  E != w[u] && m(i.onAfterFirst);
                  delete w[u];
                }
              });
              m(i.onAfter);
            }
          })
          .end();
      };
      d.max = function (f, h) {
        var i = h == "x" ? "Width" : "Height",
          m = "scroll" + i;
        if (!a(f).is("html,body")) return f[m] - a(f)[i.toLowerCase()]();
        i = "client" + i;
        var l = f.ownerDocument.documentElement,
          r = f.ownerDocument.body;
        return Math.max(l[m], r[m]) - Math.min(l[i], r[i]);
      };
      return d;
    });
    (function (a) {
      a.fn.scrollmarker = function (c) {
        return this.each(function () {
          new a.scrollmarker(this, c);
        });
      };
      a.scrollmarker = function (c, d) {
        this.options = d || {};
        this.marker = null;
        this.place = a(c);
        this.place.data("scrollmarker", this);
        this.init();
      };
      a.scrollmarker.fn = a.scrollmarker.prototype = { scrollmarker: "0.0.1" };
      a.scrollmarker.fn.extend = a.scrollmarker.extend = a.extend;
      a.scrollmarker.fn.extend({
        init: function () {
          var c = this,
            d = this.place.attr("class").match(/id_([\w]+)/)
              ? this.place.attr("class").match(/id_([\w]+)/)[0]
              : "";
          a("#" + d).length != 0 && a("#" + d).remove();
          this.marker = a('<div class="diigo-scrollmarker"></div>')
            .attr("id", d)
            .appendTo(a("body"))
            .click(function () {
              c.locate();
            })
            .addClass(
              this.options.markerClass || this.place.data("scrollmarker-class")
            );
          if (this.place.hasClass("blue"))
            this.marker.css("background-color", "#0087f7");
          else if (this.place.hasClass("green"))
            this.marker.css("background-color", "#00a256");
          else
            this.place.hasClass("pink")
              ? this.marker.css("background-color", "#ff3399")
              : this.marker.css("background-color", "#ffb000");
          a(window).resize(function () {
            c.position();
          });
          this.position();
        },
        position: function () {
          var c = a(".ss-content").scrollTop() + this.place.position().top;
          this.marker.height();
          var d = a("#main").height(),
            f = a(window).height(),
            h = navigator.userAgent.toLowerCase();
          c =
            h.indexOf("macintosh") != -1 || h.indexOf("mac os x") != -1
              ? (c / d) * f
              : (c / d) * (f - 34) + 17;
          if (c < 50) c = 50;
          this.marker.css({ position: "fixed", top: c, right: 0 });
        },
        locate: function () {
          console.log(this.place.offset().top - 50, this.place.position());
          var c = a(".ss-content");
          c.scrollTo(
            this.place.position().top + c.scrollTop() - 50,
            300,
            function () {}
          );
          var d = this.place[0].className.match(/(id_.*)\stype/)[1];
          a("." + d).addClass("diigolet-highlight-selected");
          setTimeout(function () {
            a("." + d).removeClass("diigolet-highlight-selected");
          }, 800);
        },
        remove: function () {
          this.marker.remove();
          delete this.marker;
          this.place.data("scrollmarker", null);
          delete this.place;
        },
      });
    })(jQuery);
    var Ka = (function () {
        var a = {};
        a.init = function (c, d) {
          if (c.attributes["data-autoTextarea"] !== true) {
            var f = this;
            this.minHeight = parseFloat(getComputedStyle(c).height);
            if (!!this.minHeight != false) {
              if (d) this.maxHeight = d;
              c.addEventListener("input", function () {
                f.adjustHeight(c, d);
              });
              c.addEventListener("propertychange", function () {
                f.adjustHeight(c, d);
              });
              c.addEventListener("focus", function () {
                f.adjustHeight(c, d);
              });
              c.attributes["data-autoTextarea"] = true;
            }
          }
        };
        a.adjustHeight = function (c, d) {
          if (typeof d == "undefined") d = this.maxHeight;
          var f =
            parseFloat(getComputedStyle(c).paddingTop) +
            parseFloat(getComputedStyle(c).paddingBottom);
          if (c._length !== c.value.length) {
            c._length = c.value.length;
            c.style.height = this.minHeight + "px";
            if (c.scrollHeight > this.minHeight) {
              if (d && c.scrollHeight > d) {
                f = d - f;
                c.style.overflowY = "auto";
              } else {
                f = c.scrollHeight - f;
                c.style.overflowY = "hidden";
              }
              c.style.height = f + "px";
            }
          }
        };
        return a;
      })(),
      ub = (function (a) {
        var c = diigolet.consts.HTML_HIGHLIGHT_SHARE_WINDOW,
          d = {};
        d.enabled = false;
        d.init = function () {
          var f = this;
          f.create();
          f.textarea = document.getElementById(
            "diigolet-highlight-share-textarea"
          );
          a.init(f.textarea, 500);
          $("#diigolet-highlight-share-close").on("click", function () {
            f.hide();
          });
          $("#diigolet-highlight-footer").on("click", "a", function (h) {
            if (f.enable) {
              h = h.target.id;
              if (h === "diigolet-highlight-share-copybtn") {
                h = f.editor.val();
                x.Messenger.send({ name: "copy", details: { text: h } });
                f.tip.addClass("show");
                setTimeout(function () {
                  f.tip.removeClass("show");
                }, 1500);
              } else if (h === "diigolet-highlight-share-cancelbtn") f.hide();
              else if (h === "diigolet-highlight-share-twitter")
                window.open(
                  "https://twitter.com/intent/tweet?text=" +
                    encodeURIComponent(f.editor.val()) +
                    " @diigo",
                  "sharer",
                  "toolbar=1,status=0,resizable=1,scrollbars=1,width=700,height=453"
                );
              else if (h === "diigolet-highlight-share-facebook") {
                h = encodeURIComponent(document.title);
                var i = encodeURIComponent(f.ann.prettyTxt),
                  m = encodeURIComponent(f.url);
                window.open(
                  "https://www.facebook.com/sharer.php?s=100&p[title]=" +
                    h +
                    '&p[summary]="' +
                    i +
                    '"&p[url]=' +
                    m +
                    "&p[images][0]=https://www.diigo.com/images/v6/logo.png",
                  "sharer",
                  "toolbar=1,status=0,resizable=1,scrollbars=1,width=700,height=453"
                );
              }
            }
          });
          $("#diigolet-highlight-share-top")
            .find(".diigolet-question-mark")
            .hover(
              function () {
                $(this).find(".diigolet-question-mark-tip").fadeIn();
              },
              function () {
                $(this).find(".diigolet-question-mark-tip").fadeOut();
              }
            );
        };
        d.create = function () {
          this.j = $(c).eq(0).appendTo(document.body);
          this.editor = this.j.find("#diigolet-highlight-share-textarea");
          this.tip = this.j.find("#diigolet-highlight-share-copySuccess");
          var f = document.getElementById("diigolet-highlight-share");
          $.Draggable(f, { handle: "._dragHandle" });
        };
        d.show = function (f, h, i) {
          var m = this;
          m.ann = f;
          this.j || m.init();
          m.j.css({ top: i, left: h });
          m.j.addClass("show");
          m.disable();
          C.makeAnnotatedLinkWithHighlight(
            k.bookmark.url,
            3,
            f.id,
            function (l) {
              m.build(f.prettyTxt, l.result.url);
            }
          );
        };
        d.build = function (f, h) {
          this.enable();
          this.url = h;
          content = '"' + f + '"\n ' + h;
          this.j.find("#diigolet-highlight-share-textarea").val(content);
          a.adjustHeight(this.textarea);
        };
        d.disable = function () {
          this.enabled = false;
          this.j
            .find("#diigolet-highlight-share-textarea")
            .val("Loading......")
            .prop("disabled", true);
        };
        d.enable = function () {
          this.enabled = true;
          this.j
            .find("#diigolet-highlight-share-textarea")
            .prop("disabled", false);
        };
        d.hide = function () {
          this.j.removeClass("show");
        };
        return d;
      })(Ka),
      za = {
        j: null,
        k: null,
        shown: false,
        init: function () {
          var a = this;
          this.j = $(diigolet.consts.HTML_ANNOTATION_LIST_WINDOW)
            .appendTo($("body"))
            .hide();
          for (var c = k.annotations, d = 0; d < c.length; d++) a.add(c[d]);
          if (
            $("#diigo-annotationList-box").find(".diigo-annotationList-item")
              .length === 0
          ) {
            $("#diigo-annotationList-box").append(
              '<div id="diigo-annotationList-noItem">You have no annotations yet. Create a highlight or sticky note to see it here.</div>'
            );
            $("#diigo-annotationList-toolbar").toggle(
              $("#diigo-annotationList-box").find(".diigo-annotationList-item")
                .length > 0
            );
          }
          k.orphanHighlights.length === 0 &&
            $("#diigo-annotationList-toolbar")
              .find("span")
              .toggle(k.orphanHighlights.length > 0);
          $("#diigo-annotationList-close").on("click", function () {
            a.hide();
          });
          $("#diigo-annotationList-copyall").on("click", function (f) {
            f.preventDefault();
            f = x.AnnotationFormatter.format({ mode: 1, onlyPrivate: true });
            x.Messenger.send({ name: "copy", details: { html: f } });
            $("#diigo-annotationList-notification")
              .fadeIn()
              .delay(1e3)
              .fadeOut();
          });
          new $.Draggable(a.j, { handle: "._dragHandle" });
        },
        add: function (a) {
          function c(h) {
            var i = $(".id_" + h)[0];
            $(document).scrollTo($(i).offset().top - 50, 300, function () {
              $(i).addClass("diigolet-highlight-selected");
              setTimeout(function () {
                $(i).removeClass("diigolet-highlight-selected");
              }, 800);
            });
          }
          var d = null;
          if (a.onlyInGroup == false && a.user == k.user)
            if (a.type == diigolet.consts.ANNOTATION_TYPE_TEXT) {
              d = a.extra.color;
              d = $(
                '<div class="diigo-annotationList-item diigo-' +
                  d +
                  '" data-ann-id="' +
                  a.id +
                  '"><div class="diigo-annotationList-highlight"><span class="diigo-annotationList-item-content"></span><div class="diigo-annotationList-item-action"><div class="diigo-annotationList-item-copy diigo-annotationList-item-btn" title="Copy this highlight">Copy</div><div class="diigo-annotationList-item-delete diigo-annotationList-item-btn" title="Delete this highlight">Delete</div></div></div><div class="diigo-annotationList-commentContainer"></div></div>'
              );
              d.find(".diigo-annotationList-item-content").html(
                S.html2txt_pretty(a.content)
              );
              if (this.isOrphanHighlight(a)) {
                d.addClass("diigo-orphan");
                d.append(
                  '<div class="diigo-annotationList-orphan-warning"></div>'
                );
              }
              if (a.comments.length) {
                var f = d.find(".diigo-annotationList-commentContainer");
                a.comments.forEach(function (h) {
                  $(
                    '<div class="diigo-annotationList-commentItem" data-cid="' +
                      h.id +
                      '">' +
                      h.content +
                      "</div>"
                  ).appendTo(f);
                });
                d.append(f);
              }
              d.appendTo($("#diigo-annotationList-box"));
              d.find(".diigo-annotationList-item-copy").on(
                "click",
                function (h) {
                  h.stopPropagation();
                  var i = $(this)
                    .parent()
                    .find(".diigo-annotationList-item-content")
                    .text();
                  $(this)
                    .parent()
                    .parent()
                    .find(".diigo-annotationList-commentItem")
                    .each(function () {
                      i += "\n" + $(this).text();
                    });
                  x.Messenger.send({ name: "copy", details: { text: i } });
                  $("#diigo-annotationList-notification")
                    .fadeIn()
                    .delay(1e3)
                    .fadeOut();
                }
              );
              d.find(".diigo-annotationList-item-delete").on(
                "click",
                function (h) {
                  h.stopPropagation();
                  a.onlyInGroup || a.del();
                  J(
                    W(a.groups, function (i) {
                      return i.name;
                    }),
                    function (i) {
                      a.del(i);
                    }
                  );
                }
              );
              d.on("click", function () {
                c(a.id);
              });
            } else if (a.type == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE) {
              d = a.extra.color;
              d = $(
                '<div class="diigo-annotationList-item diigo-' +
                  d +
                  '" data-ann-id="' +
                  a.id +
                  '"><div class="diigo-annotationList-sticky"><div class="diigo-anntationList-floatIcon"></div><span class="diigo-annotationList-item-content"></span><div class="diigo-annotationList-item-action"><div class="diigo-annotationList-item-copy" title="Copy this highlight">Copy</div><div class="diigo-annotationList-item-delete diigo-annotationList-item-btn" title="Delete this highlight">Delete</div></div></div></div>'
              );
              d.find(".diigo-annotationList-item-content").html(
                a.comments[0].content
              );
              d.appendTo($("#diigo-annotationList-box"));
              d.find(".diigo-annotationList-item-copy").on(
                "click",
                function (h) {
                  h.stopPropagation();
                  h = $(this)
                    .parent()
                    .find(".diigo-annotationList-item-content")
                    .text();
                  x.Messenger.send({ name: "copy", details: { text: h } });
                  $("#diigo-annotationList-notification")
                    .fadeIn()
                    .delay(1e3)
                    .fadeOut();
                }
              );
              d.find(".diigo-annotationList-item-delete").on(
                "click",
                function (h) {
                  h.stopPropagation();
                  a.onlyInGroup || a.del();
                  J(
                    W(a.groups, function (i) {
                      return i.name;
                    }),
                    function (i) {
                      a.del(i);
                    }
                  );
                }
              );
              d.on("click", function () {
                c(a.id);
              });
            }
        },
        show: function () {
          this.j || this.init();
          this.j.css({
            left: $(window).width() - this.j.outerWidth() - 10 + "px",
            top: "78px",
          });
          this.j.show();
          this.shown = true;
        },
        hide: function () {
          this.j.hide();
          this.shown = false;
        },
        isOrphanHighlight: function (a) {
          return k.orphanHighlights.some(function (c) {
            return c.id == a.id;
          });
        },
        editItem: function (a, c, d) {
          if (this.j) {
            var f = c
              ? this.j.find('[data-ann-id="' + c.id + '"]')
              : this.j.find('[data-ann-id="' + d.annotationId + '"]');
            if (f)
              switch (a) {
                case "remove":
                  f.remove();
                  $("#diigo-annotationList-box").find(
                    ".diigo-annotationList-item"
                  ).length === 0 &&
                    $("#diigo-annotationList-box").append(
                      '<div id="diigo-annotationList-noItem">You have no annotations yet. Create a highlight or sticky note to see it here.</div>'
                    );
                  break;
                case "changeColor":
                  f.removeClass(
                    "diigo-yellow diigo-blue diigo-green diigo-pink"
                  ).addClass("diigo-" + c.extra.color);
                  break;
                case "updateStickyNote":
                  c = I.find(d.annotationId);
                  a = c.type;
                  if (a == diigolet.consts.ANNOTATION_TYPE_TEXT)
                    f.find(".diigo-anntationList-commentItem").text(d.content);
                  else
                    a == diigolet.consts.ANNOTATION_TYPE_FLOATNOTE &&
                      f
                        .find(".diigo-annotationList-item-content")
                        .text(d.content);
                  break;
                case "addInlineComment":
                  $("#diigo-annotationList-noItem").remove();
                  $(
                    '<div class="diigo-annotationList-commentItem" data-cid="' +
                      d.id +
                      '">' +
                      d.content +
                      "</div>"
                  ).appendTo(f.find(".diigo-annotationList-commentContainer"));
                  break;
                case "delInlineComment":
                  f.find(".diigo-annotationList-commentContainer")
                    .find(
                      '.diigo-annotationList-commentItem[data-cid="' +
                        d.id +
                        '"]'
                    )
                    .remove();
                  break;
                default:
              }
          }
        },
      },
      sa = {
        diigoImageClipMode: false,
        imageSrc: "",
        imageTop: 0,
        shown: false,
        init: function () {
          this.create();
        },
        create: function () {
          var a = this;
          if (!($("#diigo-image-clipper").length > 0)) {
            var c = document.createElement("div");
            c.id = "diigo-image-clipper";
            c.innerHTML = "Clip";
            document.body.appendChild(c);
            $(c).css("position", "absolute");
            a.bindMouseOver();
            $(c).on("click", function () {
              a.attachToBookmarkOnClick();
            });
            var d;
            $("#diigo-image-menu")
              .bind("mouseenter", function () {
                d != null && clearTimeout(d);
                $("#diigo-image-menu").animate({ width: "63px" }, 200);
              })
              .bind("mouseleave", function () {
                d = setTimeout(function () {
                  $("#diigo-image-menu").animate({ width: "18px" }, 200);
                }, 500);
              });
          }
        },
        bindMouseOver: function () {
          var a = this,
            c;
          $(document).bind("mousemove", function (d) {
            if (d.target.tagName == "IMG") {
              a.imageSrc = d.target.src;
              a.imageTop = $(d.target).offset().top;
              console.log(d.target.src);
              d = d.target;
              var f = $(d).offset().left,
                h = $(d).offset().top,
                i = $(d).width(),
                m = $(d).height();
              if (a.shown == false)
                if (i >= 200 || m >= 200) {
                  c =
                    h + m > document.body.scrollTop + window.innerHeight
                      ? setTimeout(function () {
                          $("#diigo-image-clipper")
                            .css("top", h + 3 + "px")
                            .css("left", f + i - 55 + "px")
                            .show();
                        }, 350)
                      : setTimeout(function () {
                          $("#diigo-image-clipper")
                            .css("top", h + m - 29 + "px")
                            .css("left", f + i - 55 + "px")
                            .show();
                        }, 350);
                  a.shown = true;
                }
            } else if (d.target.tagName == "AREA") {
              d = $('img[usemap="#' + d.target.parentNode.name + '"]');
              a.imageSrc = d[0].src;
              f = d.offset().left;
              h = d.offset().top;
              i = d.width();
              m = d.height();
              if (i >= 200 || m >= 200)
                h + m > document.body.scrollTop + window.innerHeight
                  ? $("#diigo-image-clipper")
                      .css("top", h + 3 + "px")
                      .css("left", f + i - 55 + "px")
                      .show()
                  : $("#diigo-image-clipper")
                      .css("top", h + m - 29 + "px")
                      .css("left", f + i - 55 + "px")
                      .show();
            } else if (d.target.id != "diigo-image-clipper") {
              c != null && clearTimeout(c);
              if (a.shown == true) {
                $("#diigo-image-menu").css("width", "18px");
                $("#diigo-image-clipper").hide();
                a.shown = false;
              }
            }
          });
        },
        saveAndTagOnClick: function () {
          if (da())
            if (!k.permissions.premium || k.permissions.image)
              chrome.extension.sendRequest({
                name: "saveImageToDiigo",
                details: { srcUrl: sa.imageSrc },
                Type: "tag",
              });
            else {
              ab.init();
              ab.show("Save images");
            }
        },
        attachToBookmarkOnClick: function () {
          this.saveImage(this.imageSrc);
        },
        saveImage: function (a) {
          var c = this;
          if (/data:image\/.*;base64/.test(a)) {
            var d = a.match(/data:image\/(.*);base64/)[1];
            this.uploadImage({ data: a, type: "attach", dtype: d });
          } else {
            var f = document.createElement("IMG");
            f.src = a;
            f.onload = function () {
              var h = document.createElement("canvas");
              h.width = f.width;
              h.height = f.height;
              h.getContext("2d").drawImage(f, 0, 0);
              h = h.toDataURL();
              c.uploadImage(
                { data: h, type: "attacth", dtype: "png" },
                { top: c.imageTop }
              );
            };
          }
        },
        uploadImage: function (a, c) {
          var d = window.location.href;
          C.uploadImage(
            {
              dataURL: a.data,
              title: document.title,
              tags: [],
              mode: 2,
              src_url: d,
              src_title: document.title,
              single_item: false,
            },
            "image",
            false,
            d,
            c,
            a.dtype,
            "",
            true
          );
        },
      },
      sb = {
        j: null,
        init: function () {
          this.j = $('<div class="notify-copy">Copied!</div>').appendTo(
            $("body")
          );
        },
        show: function () {
          var a = this;
          this.j.addClass("show");
          setTimeout(function () {
            a.hide();
          }, 1e3);
        },
        hide: function () {
          this.j.removeClass("show");
        },
      },
      tb = {
        j: null,
        k: null,
        init: function () {
          this.j || this.create();
        },
        create: function () {
          this.j = $('<div id="diigo-code-clipper"></div>')
            .appendTo("body")
            .hide();
          this.k = $('<div id="diigo-code-clipped">Clipped</div>')
            .appendTo("body")
            .hide();
          this.bindEvents();
        },
        bindEvents: function () {
          var a = this;
          $(document.body).on("mouseenter", "pre", function () {
            console.log("sdfs");
            var c = $(this).offset().left,
              d = $(this).offset().top,
              f = $(this).outerWidth(),
              h = $(this).outerHeight();
            d =
              d + h > fa.body.scrollTop + window.innerHeight
                ? d + 5
                : d + h - 29;
            if ($(this).attr("data-diigo-clip") == "true") {
              d += 4;
              a.k
                .css("top", d + "px")
                .css("left", c + f - 57 + "px")
                .show();
            } else
              a.j
                .css("top", d + "px")
                .css("left", c + f - 29 + "px")
                .show();
            a.block = this;
          });
          $(document.body).on("mouseleave", "pre", function (c) {
            if (
              !(
                c.relatedTarget &&
                (c.relatedTarget.id == "diigo-code-clipper" ||
                  c.relatedTarget.id == "diigo-code-clipped")
              )
            ) {
              a.j.hide();
              a.k.hide();
            }
          });
          this.j.on("click", function () {
            var c = {
              user: k.user,
              realName: k.realName,
              content: a.block.outerHTML,
              type: diigolet.consts.ANNOTATION_TYPE_TEXT,
              nth: 1,
              code: true,
              top: $(a.block).offset().top,
            };
            c = I.add(c, {}, diigolet.consts.ANNOTATION_TYPE_TEXT);
            $(a.block).attr("data-diigo-clip", "true");
            a.j.hide();
            console.log(c);
          });
        },
      },
      fa = document,
      ka = $(window),
      Fa = $(fa);
    x.$ = $;
    diigolet.loaded = true;
    window.runDiigolet = function () {
      window.diigoletLaunchMode = 7;
      diigolet.run();
    };
  })();
}
