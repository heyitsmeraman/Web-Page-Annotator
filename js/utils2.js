var logLevels = ["debug", "info", "error"];
function log(a, c) {
  try {
    var b = logLevels.indexOf(c),
      d = logLevels.indexOf(D.logLevel);
    b > -1 &&
      d > -1 &&
      b >= d &&
      window.console &&
      console.log.apply(console, a);
  } catch (e) {}
}
function getOffset(a) {
  for (var c = 0, b = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); ) {
    c += a.offsetLeft;
    b += a.offsetTop;
    a = a.offsetParent;
  }
  return { left: c, top: b };
}
function arrayUnique(a) {
  a = a.concat();
  for (var c = 0; c < a.length; ++c)
    for (var b = c + 1; b < a.length; ++b) a[c] === a[b] && a.splice(b--, 1);
  return a;
}
function removeFromArray(a, c) {
  for (var b = c.length, d = 0; d < b; d++) c[d] === a && c.splice(d, 1);
  return c;
}
function debug() {
  var a = Array.prototype.slice.call(arguments);
  a.unshift("[Diigolet]");
  log(a, "debug");
}
function info() {
  var a = Array.prototype.slice.call(arguments);
  a.unshift("[Diigolet]");
  console.log(a, "info");
}
function error() {
  var a = Array.prototype.slice.call(arguments);
  a.unshift("[Diigolet Error!!!]");
  console.log(a, "error");
}
function assert(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift("[Diigolet Assertion failed!!!]");
  a || console.log(c, "error");
}
function extend() {
  for (
    var a = [].slice.call(arguments), c = a.shift(), b = 0, d = a.length, e;
    (e = a[b]), b < d;
    b++
  )
    for (var f in e) c[f] = e[f];
  return c;
}
function extendThese(a, c, b) {
  for (var d = 0, e = b.length, f; (f = b[d]), d < e; d++) a[f] = c[f];
  return a;
}
function $w(a, c) {
  c = c || " ";
  return a.split(c);
}
function forEach(a, c, b) {
  if (a.length !== undefined)
    for (var d = 0, e = a.length; d < e; d++) c.call(b, a[d], d);
  else for (d in a) c.call(b, a[d], d);
}
function filter(a, c, b) {
  for (var d = [], e = 0, f = a.length; e < f; e++)
    c.call(b, a[e], e) && d.push(a[e]);
  return d;
}
function map(a, c, b) {
  for (var d = a.length, e = Array(d), f = 0; f < d; f++)
    e[f] = c.call(b, a[f], f);
  return e;
}
function some(a, c, b) {
  for (var d = 0, e = a.length; d < e; d++) if (c.call(b, a[d], d)) return true;
  return false;
}
function map2(a, c, b) {
  for (var d = a.length, e = [], f, g = 0; g < d; g++) {
    f = c.call(b, a[g], g);
    f !== null && e.push(f);
  }
  return e;
}
function findIndex(a, c, b) {
  b = b || 0;
  var d = typeof c == "function";
  b = b;
  for (var e = a.length, f; (f = a[b]), b < e; b++)
    if (d ? c(f) : f == c) return b;
  return -1;
}
function find(a, c, b) {
  c = findIndex(a, c, b);
  return c > -1 ? a[c] : null;
}
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = function (a, c) {
    var b = this.length,
      d = Number(c) || 0;
    d = d < 0 ? Math.ceil(d) : Math.floor(d);
    if (d < 0) d += b;
    for (; d < b; d++) if (d in this && this[d] === a) return d;
    return -1;
  };
function unique(a, c) {
  for (var b = [], d = 0, e = a.length, f; (f = a[d]), d < e; d++)
    if (c)
      find(b, function (g) {
        return c(g, f);
      }) || b.push(f);
    else b.indexOf(f) == -1 && b.push(f);
  return b;
}
function reverse(a) {
  for (var c = Array(a.length), b = a.length - 1, d = 0; b >= 0; b--, d++)
    c[d] = a[b];
  return c;
}
function trim(a) {
  a = a.replace(/^\s\s*/, "");
  for (var c = /\s/, b = a.length; c.test(a.charAt(--b)); );
  return a.slice(0, b + 1);
}
function scan(a, c, b) {
  if (!c.global) throw "string.scan: pattern is not global";
  for (var d; (d = c.exec(a)); ) b(d);
}
function parseDomain(a) {
  /^[^:\/?#]+:\/\//.test(a) || (a = "https://" + a);
  a = a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
  return trim(a[4].toLowerCase());
}
function str_interpret(a) {
  return a == null ? "" : String(a);
}
function gsub(a, c, b) {
  var d = "";
  a = a;
  for (var e; a.length > 0; )
    if ((e = a.match(c))) {
      d += a.slice(0, e.index);
      d += str_interpret(b(e));
      a = a.slice(e.index + e[0].length);
    } else {
      d += a;
      a = "";
    }
  return d;
}
var tplPattern = /(^|.|\r|\n)(#\{(.*?)\})/;
function evalTpl(a, c) {
  return gsub(a, tplPattern, function (b) {
    if (c == null) return "";
    var d = b[1] || "";
    if (d == "\\") return b[2];
    var e = c,
      f = b[3],
      g = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
    b = g.exec(f);
    if (b == null) return d;
    for (; b != null; ) {
      var h = b[1].indexOf("[") === 0 ? gsub(b[2], "\\\\]", "]") : b[1];
      e = e[h];
      if (null == e || "" == b[3]) break;
      f = f.substring("[" == b[3] ? b[1].length : b[0].length);
      b = g.exec(f);
    }
    return d + str_interpret(e);
  });
}
function $html(a) {
  return $(a);
}
function $id(a) {
  return $("#" + a);
}
function blank(a) {
  return !a || a.length == 0 || (a.match ? !!a.match(/^\s*$/) : true);
}
function nonblank(a) {
  return blank(a) ? null : a;
}
var Utils = {
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
        : (result = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(
            a
          ))
        ? {
            r: parseInt("0x" + result[1]),
            g: parseInt("0x" + result[2]),
            b: parseInt("0x" + result[3]),
          }
        : { r: 255, g: 255, b: 255 };
    },
    dom: {
      build: function () {
        var a = [],
          c = arguments,
          b,
          d,
          e = 0,
          f;
        for (c = c[0] instanceof Array ? c[0] : c; e < c.length; e++)
          if (c[e + 1] instanceof Object) {
            b = a[a.length] = document.createElement(c[e]);
            for (f in c[++e]) b.setAttribute(f, c[e][f]);
            if (c[e + 1] instanceof Array) {
              d = arguments.callee(c[++e]);
              for (f = 0; f < d.length; f++) b.appendChild(d[f]);
            }
          } else a[a.length] = document.createTextNode(c[e]);
        return a;
      },
      buildOne: function (a, c, b) {
        return this.build(a, c, b)[0];
      },
      getSelection: function () {
        return window.getSelection
          ? window.getSelection().toString()
          : document.getSelection
          ? document.getSelection()
          : document.selection.createRange().text;
      },
    },
    content2Html: function (a) {
      return this.safeHtml(a).replace(/\n/g, "<br/>");
    },
    safeHtml: function (a) {
      return a
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    },
  },
  IEventDispatcher = {
    mixin: function (a) {
      extendThese(
        a,
        this,
        $w("addEventListener removeEventListener fireEvent _resetEvents")
      );
      a._resetEvents();
    },
    addEventListener: function (a, c) {
      this._events[a] || (this._events[a] = []);
      var b = this._events[a];
      b.indexOf(c) == -1 && b.push(c);
    },
    removeEventListener: function (a, c) {
      var b = this._events[a];
      if (b)
        if (arguments.length == 2) {
          var d = b.indexOf(c);
          d > -1 && b.splice(d);
        } else delete this._events[a];
    },
    _resetEvents: function () {
      this._supressEvents = false;
      this._events = {};
    },
    fireEvent: function (a, c) {
      if (!this._supressEvents) {
        debug("[event]", a);
        var b = this._events[a];
        if (b)
          for (var d = 0, e, f = b.length; (e = b[d]), d < f; d++)
            (typeof e == "function" ? e : e["on" + a]).apply(e, c);
      }
    },
  };
