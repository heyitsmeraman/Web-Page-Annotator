var Utils = {
    dump: function () {
      window.diigolet.debug &&
        window.console &&
        console.log.apply(console, [].slice.call(arguments));
    },
    fork: function (a) {
      setTimeout(function () {
        a();
      }, 13);
    },
  },
  diigoUtils = Utils;
Utils.lang = {
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
  hasOwnProperty: function (a, b) {
    if (Object.prototype.hasOwnProperty) return a.hasOwnProperty(b);
    return !this.isUndefined(a[b]) && a.constructor.prototype[b] !== a[b];
  },
  extend: function () {
    for (
      var a = [].slice.call(arguments), b = a.shift(), g = 0, i = a.length, j;
      (j = a[g]), g < i;
      g++
    )
      for (var k in j) b[k] = j[k];
    return b;
  },
  protectiveExtend: function (a, b) {
    for (var g in b) if (a[g] !== undefined) a[g] = b[g];
  },
  extendFiltered: function () {
    for (
      var a = [].slice.call(arguments),
        b = a.shift(),
        g = a.pop(),
        i = 0,
        j = a.length,
        k;
      (k = a[i]), i < j;
      i++
    )
      for (var q in k) {
        var h = g(q);
        if (h) b[h === true ? q : h] = k[q];
      }
    return b;
  },
  toArray: function (a) {
    return [].slice.call(a);
  },
  toBoolean: function (a) {
    return !a ? false : a != "false" && a != "0";
  },
  each: function (a, b, g) {
    if (a.forEach) a.forEach(b, g);
    else for (var i in a) b.call(g, a[i], i);
  },
};
Utils.lang.extend(Utils, Utils.lang);
Utils.array = {
  findIndex: function (a, b, g) {
    g = g = g || 0;
    for (var i = a.length, j; (j = a[g]), g < i; g++) if (b(j)) return g;
    return -1;
  },
  find: function (a, b, g) {
    b = this.findIndex(a, b, g);
    return b > -1 ? a[b] : null;
  },
  concatMe: function (a, b) {
    [].splice.apply(a, [a.length, 0].concat(b));
    return a;
  },
  unique: function (a, b) {
    for (var g = [], i = 0, j = a.length, k; (k = a[i]), i < j; i++)
      if (b)
        this.find(g, function (q) {
          return b(q, k);
        }) || g.push(k);
      else g.indexOf(k) == -1 && g.push(k);
    return g;
  },
  reverse: function (a) {
    for (var b = Array(a.length), g = a.length - 1, i = 0; g >= 0; g--, i++)
      b[i] = a[g];
    return b;
  },
};
Utils.string = {
  md5: function (a) {
    function b(l, m) {
      var o, r, s, p, n;
      s = l & 2147483648;
      p = m & 2147483648;
      o = l & 1073741824;
      r = m & 1073741824;
      n = (l & 1073741823) + (m & 1073741823);
      if (o & r) return n ^ 2147483648 ^ s ^ p;
      return o | r
        ? n & 1073741824
          ? n ^ 3221225472 ^ s ^ p
          : n ^ 1073741824 ^ s ^ p
        : n ^ s ^ p;
    }
    function g(l, m, o, r, s, p, n) {
      l = b(l, b(b((m & o) | (~m & r), s), n));
      return b((l << p) | (l >>> (32 - p)), m);
    }
    function i(l, m, o, r, s, p, n) {
      l = b(l, b(b((m & r) | (o & ~r), s), n));
      return b((l << p) | (l >>> (32 - p)), m);
    }
    function j(l, m, o, r, s, p, n) {
      l = b(l, b(b(m ^ o ^ r, s), n));
      return b((l << p) | (l >>> (32 - p)), m);
    }
    function k(l, m, o, r, s, p, n) {
      l = b(l, b(b(o ^ (m | ~r), s), n));
      return b((l << p) | (l >>> (32 - p)), m);
    }
    function q(l) {
      var m = "",
        o = "",
        r;
      for (r = 0; r <= 3; r++) {
        o = (l >>> (r * 8)) & 255;
        o = "0" + o.toString(16);
        m += o.substr(o.length - 2, 2);
      }
      return m;
    }
    var h = [],
      t,
      u,
      v,
      w,
      c,
      d,
      e,
      f;
    h = (function (l) {
      var m,
        o = l.length;
      m = o + 8;
      for (
        var r = ((m - (m % 64)) / 64 + 1) * 16, s = Array(r - 1), p = 0, n = 0;
        n < o;

      ) {
        m = (n - (n % 4)) / 4;
        p = (n % 4) * 8;
        s[m] |= l.charCodeAt(n) << p;
        n++;
      }
      m = (n - (n % 4)) / 4;
      p = (n % 4) * 8;
      s[m] |= 128 << p;
      s[r - 2] = o << 3;
      s[r - 1] = o >>> 29;
      return s;
    })(a);
    c = 1732584193;
    d = 4023233417;
    e = 2562383102;
    f = 271733878;
    for (a = 0; a < h.length; a += 16) {
      t = c;
      u = d;
      v = e;
      w = f;
      c = g(c, d, e, f, h[a + 0], 7, 3614090360);
      f = g(f, c, d, e, h[a + 1], 12, 3905402710);
      e = g(e, f, c, d, h[a + 2], 17, 606105819);
      d = g(d, e, f, c, h[a + 3], 22, 3250441966);
      c = g(c, d, e, f, h[a + 4], 7, 4118548399);
      f = g(f, c, d, e, h[a + 5], 12, 1200080426);
      e = g(e, f, c, d, h[a + 6], 17, 2821735955);
      d = g(d, e, f, c, h[a + 7], 22, 4249261313);
      c = g(c, d, e, f, h[a + 8], 7, 1770035416);
      f = g(f, c, d, e, h[a + 9], 12, 2336552879);
      e = g(e, f, c, d, h[a + 10], 17, 4294925233);
      d = g(d, e, f, c, h[a + 11], 22, 2304563134);
      c = g(c, d, e, f, h[a + 12], 7, 1804603682);
      f = g(f, c, d, e, h[a + 13], 12, 4254626195);
      e = g(e, f, c, d, h[a + 14], 17, 2792965006);
      d = g(d, e, f, c, h[a + 15], 22, 1236535329);
      c = i(c, d, e, f, h[a + 1], 5, 4129170786);
      f = i(f, c, d, e, h[a + 6], 9, 3225465664);
      e = i(e, f, c, d, h[a + 11], 14, 643717713);
      d = i(d, e, f, c, h[a + 0], 20, 3921069994);
      c = i(c, d, e, f, h[a + 5], 5, 3593408605);
      f = i(f, c, d, e, h[a + 10], 9, 38016083);
      e = i(e, f, c, d, h[a + 15], 14, 3634488961);
      d = i(d, e, f, c, h[a + 4], 20, 3889429448);
      c = i(c, d, e, f, h[a + 9], 5, 568446438);
      f = i(f, c, d, e, h[a + 14], 9, 3275163606);
      e = i(e, f, c, d, h[a + 3], 14, 4107603335);
      d = i(d, e, f, c, h[a + 8], 20, 1163531501);
      c = i(c, d, e, f, h[a + 13], 5, 2850285829);
      f = i(f, c, d, e, h[a + 2], 9, 4243563512);
      e = i(e, f, c, d, h[a + 7], 14, 1735328473);
      d = i(d, e, f, c, h[a + 12], 20, 2368359562);
      c = j(c, d, e, f, h[a + 5], 4, 4294588738);
      f = j(f, c, d, e, h[a + 8], 11, 2272392833);
      e = j(e, f, c, d, h[a + 11], 16, 1839030562);
      d = j(d, e, f, c, h[a + 14], 23, 4259657740);
      c = j(c, d, e, f, h[a + 1], 4, 2763975236);
      f = j(f, c, d, e, h[a + 4], 11, 1272893353);
      e = j(e, f, c, d, h[a + 7], 16, 4139469664);
      d = j(d, e, f, c, h[a + 10], 23, 3200236656);
      c = j(c, d, e, f, h[a + 13], 4, 681279174);
      f = j(f, c, d, e, h[a + 0], 11, 3936430074);
      e = j(e, f, c, d, h[a + 3], 16, 3572445317);
      d = j(d, e, f, c, h[a + 6], 23, 76029189);
      c = j(c, d, e, f, h[a + 9], 4, 3654602809);
      f = j(f, c, d, e, h[a + 12], 11, 3873151461);
      e = j(e, f, c, d, h[a + 15], 16, 530742520);
      d = j(d, e, f, c, h[a + 2], 23, 3299628645);
      c = k(c, d, e, f, h[a + 0], 6, 4096336452);
      f = k(f, c, d, e, h[a + 7], 10, 1126891415);
      e = k(e, f, c, d, h[a + 14], 15, 2878612391);
      d = k(d, e, f, c, h[a + 5], 21, 4237533241);
      c = k(c, d, e, f, h[a + 12], 6, 1700485571);
      f = k(f, c, d, e, h[a + 3], 10, 2399980690);
      e = k(e, f, c, d, h[a + 10], 15, 4293915773);
      d = k(d, e, f, c, h[a + 1], 21, 2240044497);
      c = k(c, d, e, f, h[a + 8], 6, 1873313359);
      f = k(f, c, d, e, h[a + 15], 10, 4264355552);
      e = k(e, f, c, d, h[a + 6], 15, 2734768916);
      d = k(d, e, f, c, h[a + 13], 21, 1309151649);
      c = k(c, d, e, f, h[a + 4], 6, 4149444226);
      f = k(f, c, d, e, h[a + 11], 10, 3174756917);
      e = k(e, f, c, d, h[a + 2], 15, 718787259);
      d = k(d, e, f, c, h[a + 9], 21, 3951481745);
      c = b(c, t);
      d = b(d, u);
      e = b(e, v);
      f = b(f, w);
    }
    return (q(c) + q(d) + q(e) + q(f)).toLowerCase();
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
  evalTpl: function (a, b) {
    if (b.toTemplateReplacements) b = b.toTemplateReplacements();
    return a.replace(/(^|.|\r|\n)(#\{(.*?)\})/g, function (g, i, j, k) {
      if (b == null) return "";
      g = i || "";
      if (g == "\\") return j;
      j = b;
      k = k;
      i = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
      var q = i.exec(k);
      if (q == null) return "";
      for (; q != null; ) {
        var h = q[1][0] == "[" ? q[2].replace(/\\\\]/g, "]") : q[1];
        j = j[h];
        if (null == j || "" == q[3]) break;
        k = k.substring("[" == q[3] ? q[1].length : q[0].length);
        q = i.exec(k);
      }
      return g + (j == null ? "" : String(j));
    });
  },
  parseQuery: function (a, b) {
    var g = Utils.string.strip(a).match(/([^?#]*)(#.*)?$/);
    if (!g) return {};
    var i = {};
    Utils.each(g[1].split(b || "&"), function (j) {
      if ((j = j.split("="))[0]) {
        var k = decodeURIComponent(j.shift());
        j = j.length > 1 ? j.join("=") : j[0];
        if (j != undefined) j = decodeURIComponent(j);
        if (k in i) {
          Utils.isArray(i[k]) || (i[k] = [i[k]]);
          i[k].push(j);
        } else i[k] = j;
      }
    });
    return i;
  },
  toQueryString: function (a) {
    var b = function (i, j) {
        i = encodeURIComponent(i);
        j === undefined
          ? g.push(i)
          : g.push(i + "=" + (j == null ? "" : encodeURIComponent(j)));
      },
      g = [];
    Utils.each(a, function (i, j) {
      if (j)
        if (i && typeof i == "object")
          Utils.isArray(i) &&
            Utils.each(i, function (k) {
              b(j, k);
            });
        else b(j, i);
    });
    return g.join("&");
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
    return a.replace(RegExp("<script[^>]*>([\\S\\s]*?)</script>", "img"), "");
  },
  scan: function (a, b, g) {
    if (!b.global) throw "string.scan: pattern is not global";
    for (var i; (i = b.exec(a)); ) g(i);
  },
  split: function (a, b) {
    return (a = this.strip(a || "")) ? a.split(b) : [];
  },
  truncate: function (a, b, g) {
    if (a.length <= b) return a;
    if (typeof g != "string") g = "...";
    return a.substr(0, b - g.length) + g;
  },
};
Utils.url = { isSubDomainOf: function () {} };
Utils.dom = {
  build2: function () {
    var a = [],
      b = arguments,
      g,
      i,
      j = 0,
      k;
    for (b = b[0] instanceof Array ? b[0] : b; j < b.length; j++)
      if (b[j + 1] instanceof Object) {
        g = a[a.length] = document.createElement(b[j]);
        for (k in b[++j]) g.setAttribute(k, b[j][k]);
        if (b[j + 1] instanceof Array) {
          i = arguments.callee(b[++j]);
          for (k = 0; k < i.length; k++) g.appendChild(i[k]);
        }
      } else a[a.length] = document.createTextNode(b[j]);
    return a;
  },
  buildOne: function (a, b, g) {
    return this.build2(a, b, g)[0];
  },
  isChildOf: function (a, b) {
    for (var g = a; g && (g = g.parentNode); ) if (g == b) return true;
    return false;
  },
  HTML_addCSS: function (a, b, g) {
    var i = a.createElement("style");
    i.setAttribute("type", "text/css");
    g && i.setAttribute("id", g);
    i.appendChild(a.createTextNode(b));
    (a.getElementsByTagName("head")[0] || a.body).appendChild(i);
  },
};
function parseColor(a) {
  var b = {
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
  return b[a]
    ? { r: b[a][0], g: b[a][1], b: b[a][2] }
    : (result =
        /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(
          a
        ))
    ? { r: parseInt(result[1]), g: parseInt(result[2]), b: parseInt(result[3]) }
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
    : (result = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(a))
    ? {
        r: parseInt("0x" + result[1]),
        g: parseInt("0x" + result[2]),
        b: parseInt("0x" + result[3]),
      }
    : { r: 255, g: 255, b: 255 };
}
function normalizeUrl(a) {
  a = a.trim();
  if (a.lastIndexOf("#") > 0) a = a.substr(0, a.lastIndexOf("#"));
  if (a.slice(-1) == "/") a = a.slice(0, -1);
  return a;
}
function parseDomain(a) {
  /^[^:\/?#]+:\/\//.test(a) || (a = "https://" + a);
  return a
    .match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)[4]
    .toLowerCase()
    .trim();
}
function isHomePage() {
  var a = window.location.pathname.toLowerCase();
  if (!a || a == "/") return true;
  return (a = a.match(/^\/([^\.]+)\.(.*)$/)) && a.length == 3
    ? $.inArray(a[1], ["default", "index", "home"]) > -1 &&
        $.inArray(a[2], [
          "htm",
          "html",
          "shtml",
          "php",
          "jsp",
          "asp",
          "aspx",
          "cfm",
        ]) > -1
    : false;
}
