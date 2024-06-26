window.diigolet == undefined &&
  (function () {
    function Bb(a) {
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
        var l = h + a[i] + " ";
        if (d.measureText(l).width > 300 && i > 0) {
          d.fillText(h, 10, f);
          h = a[i] + " ";
          f += 24;
        } else h = l;
      }
      d.fillText(h, 10, f);
      d = document.createElement("img");
      d.src = c.toDataURL();
      return d;
    }
    function Cb(a) {
      return a.replace(/\n$/, "");
    }
    function Db(a) {
      a = a.concat();
      for (var c = 0; c < a.length; ++c)
        for (var d = c + 1; d < a.length; ++d)
          JSON.stringify(a[c]) === JSON.stringify(a[d]) && a.splice(d--, 1);
      return a;
    }
    function db(a) {
      a = a.concat();
      for (var c = 0; c < a.length; ++c)
        for (var d = c + 1; d < a.length; ++d)
          a[c] === a[d] && a.splice(d--, 1);
      return a;
    }
    function Db(a) {
      a = a.concat();
      for (var c = 0; c < a.length; ++c)
        for (var d = c + 1; d < a.length; ++d)
          JSON.stringify(a[c]) === JSON.stringify(a[d]) && a.splice(d--, 1);
      return a;
    }
    function Cb(a) {
      return a.replace(/\n$/, "");
    }
    function I() {
      var a = Array.prototype.slice.call(arguments);
      a.unshift("[Diigolet]");
      if (x.logLevel != "never")
        try {
          var c = Eb.indexOf("debug"),
            d = Eb.indexOf(x.logLevel);
          c > -1 &&
            d > -1 &&
            c >= d &&
            window.console &&
            console.log.apply(console, a);
        } catch (f) {}
    }
    function Zb() {
      var a = Array.prototype.slice.call(arguments);
      a.unshift("[Diigolet]");
      console.log(a, "info");
    }
    function W() {
      for (
        var a = [].slice.call(arguments), c = a.shift(), d = 0, f = a.length, h;
        (h = a[d]), d < f;
        d++
      )
        for (var i in h) c[i] = h[i];
      return c;
    }
    function Ya(a, c, d) {
      for (var f = 0, h = d.length, i; (i = d[f]), f < h; f++) a[i] = c[i];
      return a;
    }
    function Va(a, c) {
      c = c || " ";
      return a.split(c);
    }
    function M(a, c, d) {
      if (a.length !== undefined)
        for (var f = 0, h = a.length; f < h; f++) c.call(d, a[f], f);
      else for (f in a) c.call(d, a[f], f);
    }
    function eb(a, c, d) {
      for (var f = [], h = 0, i = a.length; h < i; h++)
        c.call(d, a[h], h) && f.push(a[h]);
      return f;
    }
    function pa(a, c, d) {
      for (var f = a.length, h = Array(f), i = 0; i < f; i++)
        h[i] = c.call(d, a[i], i);
      return h;
    }
    function Fb(a, c, d) {
      for (var f = 0, h = a.length; f < h; f++)
        if (c.call(d, a[f], f)) return true;
      return false;
    }
    function Gb(a, c, d) {
      for (var f = a.length, h = [], i, l = 0; l < f; l++) {
        i = c.call(d, a[l], l);
        i !== null && h.push(i);
      }
      return h;
    }
    function Ia(a, c, d) {
      d = d || 0;
      var f = typeof c == "function";
      d = d;
      for (var h = a.length, i; (i = a[d]), d < h; d++)
        if (f ? c(i) : i == c) return d;
      return -1;
    }
    function Pa(a, c, d) {
      c = Ia(a, c, d);
      return c > -1 ? a[c] : null;
    }
    function Hb(a, c) {
      for (var d = [], f = 0, h = a.length, i; (i = a[f]), f < h; f++)
        if (c)
          Pa(d, function (l) {
            return c(l, i);
          }) || d.push(i);
        else d.indexOf(i) == -1 && d.push(i);
      return d;
    }
    function $b(a) {
      for (var c = Array(a.length), d = a.length - 1, f = 0; d >= 0; d--, f++)
        c[f] = a[d];
      return c;
    }
    function Qa(a) {
      a = a.replace(/^\s\s*/, "");
      for (var c = /\s/, d = a.length; c.test(a.charAt(--d)); );
      return a.slice(0, d + 1);
    }
    function ac(a, c, d) {
      if (!c.global) throw "string.scan: pattern is not global";
      for (var f; (f = c.exec(a)); ) d(f);
    }
    function fb(a, c, d) {
      var f = "";
      a = a;
      for (var h; a.length > 0; )
        if ((h = a.match(c))) {
          f += a.slice(0, h.index);
          f = f;
          var i = d(h);
          f = f + (i == null ? "" : String(i));
          a = a.slice(h.index + h[0].length);
        } else {
          f += a;
          a = "";
        }
      return f;
    }
    function Y(a, c) {
      return fb(a, bc, function (d) {
        if (c == null) return "";
        var f = d[1] || "";
        if (f == "\\") return d[2];
        var h = c,
          i = d[3],
          l = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
        d = l.exec(i);
        if (d == null) return f;
        for (; d != null; ) {
          var m = d[1].indexOf("[") === 0 ? fb(d[2], "\\\\]", "]") : d[1];
          h = h[m];
          if (null == h || "" == d[3]) break;
          i = i.substring("[" == d[3] ? d[1].length : d[0].length);
          d = l.exec(i);
        }
        return f + (h == null ? "" : String(h));
      });
    }
    function cc(a) {
      return $(a);
    }
    function Q(a) {
      return $("#" + a);
    }
    function Za(a) {
      return !a || a.length == 0 || (a.match ? !!a.match(/^\s*$/) : true);
    }
    function gb(a) {
      var c = gb.options;
      a = c.parser[c.strictMode ? "strict" : "loose"].exec(a);
      for (var d = {}, f = 14; f--; ) d[c.key[f]] = a[f] || "";
      d[c.q.name] = {};
      d[c.key[12]].replace(c.q.parser, function (h, i, l) {
        if (i) d[c.q.name][i] = l;
      });
      return d;
    }
    function Ja(a) {
      function c(u, s) {
        var w, y, B, C, F;
        B = u & 2147483648;
        C = s & 2147483648;
        w = u & 1073741824;
        y = s & 1073741824;
        F = (u & 1073741823) + (s & 1073741823);
        if (w & y) return F ^ 2147483648 ^ B ^ C;
        return w | y
          ? F & 1073741824
            ? F ^ 3221225472 ^ B ^ C
            : F ^ 1073741824 ^ B ^ C
          : F ^ B ^ C;
      }
      function d(u, s, w, y, B, C, F) {
        u = c(u, c(c((s & w) | (~s & y), B), F));
        return c((u << C) | (u >>> (32 - C)), s);
      }
      function f(u, s, w, y, B, C, F) {
        u = c(u, c(c((s & y) | (w & ~y), B), F));
        return c((u << C) | (u >>> (32 - C)), s);
      }
      function h(u, s, w, y, B, C, F) {
        u = c(u, c(c(s ^ w ^ y, B), F));
        return c((u << C) | (u >>> (32 - C)), s);
      }
      function i(u, s, w, y, B, C, F) {
        u = c(u, c(c(w ^ (s | ~y), B), F));
        return c((u << C) | (u >>> (32 - C)), s);
      }
      function l(u) {
        var s = "",
          w = "",
          y;
        for (y = 0; y <= 3; y++) {
          w = (u >>> (y * 8)) & 255;
          w = "0" + w.toString(16);
          s += w.substr(w.length - 2, 2);
        }
        return s;
      }
      var m = [],
        t,
        D,
        A,
        G,
        q,
        o,
        r,
        n;
      m = (function (u) {
        var s,
          w = u.length;
        s = w + 8;
        for (
          var y = ((s - (s % 64)) / 64 + 1) * 16,
            B = Array(y - 1),
            C = 0,
            F = 0;
          F < w;

        ) {
          s = (F - (F % 4)) / 4;
          C = (F % 4) * 8;
          B[s] |= u.charCodeAt(F) << C;
          F++;
        }
        s = (F - (F % 4)) / 4;
        C = (F % 4) * 8;
        B[s] |= 128 << C;
        B[y - 2] = w << 3;
        B[y - 1] = w >>> 29;
        return B;
      })(a);
      q = 1732584193;
      o = 4023233417;
      r = 2562383102;
      n = 271733878;
      for (a = 0; a < m.length; a += 16) {
        t = q;
        D = o;
        A = r;
        G = n;
        q = d(q, o, r, n, m[a + 0], 7, 3614090360);
        n = d(n, q, o, r, m[a + 1], 12, 3905402710);
        r = d(r, n, q, o, m[a + 2], 17, 606105819);
        o = d(o, r, n, q, m[a + 3], 22, 3250441966);
        q = d(q, o, r, n, m[a + 4], 7, 4118548399);
        n = d(n, q, o, r, m[a + 5], 12, 1200080426);
        r = d(r, n, q, o, m[a + 6], 17, 2821735955);
        o = d(o, r, n, q, m[a + 7], 22, 4249261313);
        q = d(q, o, r, n, m[a + 8], 7, 1770035416);
        n = d(n, q, o, r, m[a + 9], 12, 2336552879);
        r = d(r, n, q, o, m[a + 10], 17, 4294925233);
        o = d(o, r, n, q, m[a + 11], 22, 2304563134);
        q = d(q, o, r, n, m[a + 12], 7, 1804603682);
        n = d(n, q, o, r, m[a + 13], 12, 4254626195);
        r = d(r, n, q, o, m[a + 14], 17, 2792965006);
        o = d(o, r, n, q, m[a + 15], 22, 1236535329);
        q = f(q, o, r, n, m[a + 1], 5, 4129170786);
        n = f(n, q, o, r, m[a + 6], 9, 3225465664);
        r = f(r, n, q, o, m[a + 11], 14, 643717713);
        o = f(o, r, n, q, m[a + 0], 20, 3921069994);
        q = f(q, o, r, n, m[a + 5], 5, 3593408605);
        n = f(n, q, o, r, m[a + 10], 9, 38016083);
        r = f(r, n, q, o, m[a + 15], 14, 3634488961);
        o = f(o, r, n, q, m[a + 4], 20, 3889429448);
        q = f(q, o, r, n, m[a + 9], 5, 568446438);
        n = f(n, q, o, r, m[a + 14], 9, 3275163606);
        r = f(r, n, q, o, m[a + 3], 14, 4107603335);
        o = f(o, r, n, q, m[a + 8], 20, 1163531501);
        q = f(q, o, r, n, m[a + 13], 5, 2850285829);
        n = f(n, q, o, r, m[a + 2], 9, 4243563512);
        r = f(r, n, q, o, m[a + 7], 14, 1735328473);
        o = f(o, r, n, q, m[a + 12], 20, 2368359562);
        q = h(q, o, r, n, m[a + 5], 4, 4294588738);
        n = h(n, q, o, r, m[a + 8], 11, 2272392833);
        r = h(r, n, q, o, m[a + 11], 16, 1839030562);
        o = h(o, r, n, q, m[a + 14], 23, 4259657740);
        q = h(q, o, r, n, m[a + 1], 4, 2763975236);
        n = h(n, q, o, r, m[a + 4], 11, 1272893353);
        r = h(r, n, q, o, m[a + 7], 16, 4139469664);
        o = h(o, r, n, q, m[a + 10], 23, 3200236656);
        q = h(q, o, r, n, m[a + 13], 4, 681279174);
        n = h(n, q, o, r, m[a + 0], 11, 3936430074);
        r = h(r, n, q, o, m[a + 3], 16, 3572445317);
        o = h(o, r, n, q, m[a + 6], 23, 76029189);
        q = h(q, o, r, n, m[a + 9], 4, 3654602809);
        n = h(n, q, o, r, m[a + 12], 11, 3873151461);
        r = h(r, n, q, o, m[a + 15], 16, 530742520);
        o = h(o, r, n, q, m[a + 2], 23, 3299628645);
        q = i(q, o, r, n, m[a + 0], 6, 4096336452);
        n = i(n, q, o, r, m[a + 7], 10, 1126891415);
        r = i(r, n, q, o, m[a + 14], 15, 2878612391);
        o = i(o, r, n, q, m[a + 5], 21, 4237533241);
        q = i(q, o, r, n, m[a + 12], 6, 1700485571);
        n = i(n, q, o, r, m[a + 3], 10, 2399980690);
        r = i(r, n, q, o, m[a + 10], 15, 4293915773);
        o = i(o, r, n, q, m[a + 1], 21, 2240044497);
        q = i(q, o, r, n, m[a + 8], 6, 1873313359);
        n = i(n, q, o, r, m[a + 15], 10, 4264355552);
        r = i(r, n, q, o, m[a + 6], 15, 2734768916);
        o = i(o, r, n, q, m[a + 13], 21, 1309151649);
        q = i(q, o, r, n, m[a + 4], 6, 4149444226);
        n = i(n, q, o, r, m[a + 11], 10, 3174756917);
        r = i(r, n, q, o, m[a + 2], 15, 718787259);
        o = i(o, r, n, q, m[a + 9], 21, 3951481745);
        q = c(q, t);
        o = c(o, D);
        r = c(r, A);
        n = c(n, G);
      }
      return (l(q) + l(o) + l(r) + l(n)).toLowerCase();
    }
    function xa(a) {
      var c = "lhidgfaliccjjbgkabchckabpdamkphg";
      c = RegExp(c, "g");
      hb = hb.replace(c, a);
      Ib = Ib.replace(c, a);
      ib = ib.replace(c, a);
      Jb = Jb.replace(c, a);
      jb = jb.replace(c, a);
      kb = kb.replace(c, a);
      $a = $a.replace(c, a);
      lb = lb.replace(c, a);
      mb = mb.replace(c, a);
      Kb = Kb.replace(c, a);
      Lb = Lb.replace(c, a);
      nb = nb.replace(c, a);
      ob = ob.replace(c, a);
      pb = pb.replace(c, a);
      qb = qb.replace(c, a);
    }
    function Ka(a, c) {
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
    function rb() {
      M([U, H, da, ga, Z, La, J, L, R], function (a) {
        if (a.j) {
          var c = (function (d) {
            return function () {
              Ra = d.clickedOn = true;
            };
          })(a);
          a.j
            .unbind(".pay4sin")
            .bind("mouseup.pay4sin", c)
            .bind("mousedown.pay4sin", c)
            .bind("keydown.pay4sin", function (d) {
              d.stopPropagation();
            });
        }
      });
      sb.mousedown(function (a) {
        if (a.target.tagName == "INPUT" || a.target.tagName == "TEXTAREA")
          tb = true;
        else if (
          a.target.id == "diigolet-csm-dropdown" ||
          a.target.className == "diigolet-csm-coloritem" ||
          a.target.parentNode.id == "diigolet-panel-btnHighlight"
        )
          Ra = true;
        window.getSelection();
        mousedownTop = a.pageY;
        mousedownLeft = a.pageX;
      })
        .mouseup(dc)
        .mouseover(ec)
        .mouseout(fc)
        .mousemove(function (a) {
          window.curcorX = a.pageX;
          window.curcorY = a.pageY;
        });
      $(document.body).click(function (a) {
        var c = $(a.target);
        if (c.hasClass("_diigoLink")) {
          ub(c.attr("diigolink"));
          a.preventDefault();
        }
      });
    }
    function ub(a) {
      var c;
      if (a == "myLibrary") c = x.urls.getUserBookmarksPageURL();
      else if (a == "signIn")
        c =
          x.urls.getSignInURL() +
          "?referInfo=" +
          encodeURIComponent("/images/diigo-logo.png#SIGNED_IN");
      else if (a == "signOut") c = x.urls.getSignOutURL();
      else if (a == "feedback") c = x.urls.getFeedbackURL();
      else if (a == "followOnTwitter") c = x.urls.getFollowOnTwitterURL();
      else if (a == "rating") c = x.urls.getRatingURL();
      c && x.openURL(c);
    }
    function Mb() {
      var a = [];
      k.myTagsWithCount.sort(function (h, i) {
        return h.count <= i.count ? 1 : -1;
      });
      for (var c = k.myTagsWithCount.length, d = 0; d < c; d++)
        a[d] = k.myTagsWithCount[d].name;
      a = {
        resultsClass: "diigolet ac_results",
        data: a,
        mode: "multiple",
        multipleSeparator: " ,",
        onItemSelect: function () {
          U.clickedOn = true;
        },
        id: "diigolet-ac",
      };
      try {
        new Nb("#Diigo-Bookmark-Tag-Input", a);
      } catch (f) {
        I(f);
      }
    }
    function ec(a, c) {
      if (!k.draggingFloatNote) {
        var d = ha.isHighlightElement(a.target);
        if (d) {
          c = N.find(d.ids[0]);
          c.activate(true);
          if (d.type == ia || d.type == Wa) {
            Ca.reset(c);
            Z.scheduleShow(a, c);
            ma.showed &&
              $(".diigoHighlight.id_" + c.id)
                .addClass("hover")
                .attr("draggable", true);
          } else if (d.type == fa || d.type == ANNOTATION_TYPE_ICON) {
            Ca.removeEditMode();
            Ca.ann = null;
            var f = H.ann != c;
            if (!H.isEditing())
              if (f || !H.shown) {
                H.shown && H.hide();
                H.scheduleShow(a, c);
              } else H.cancelHide();
          }
          if (c.comments.length > 0 && (d.type == ia || d.type == Wa)) {
            Ca.reset(c);
            Ca.scheduleToggleEdit(true);
          }
        }
      }
    }
    function fc(a, c) {
      if (!k.draggingFloatNote) {
        var d = ha.isHighlightElement(a.target);
        if (d) {
          c = N.find(d.ids[0]);
          c.activate(false);
          $(".diigoHighlight.id_" + c.id).removeClass("hover");
          H.aboutToShow() && !H.isEditing() && H.scheduleHide();
          Ca.aboutToShow() && c.comments.length <= 0 && Ca.scheduleHide();
          Ca.scheduleToggleEdit(false);
          Z.scheduleHide();
        }
      }
    }
    function dc(a) {
      da.clickedOn || $("#diigolet-toolbar .dropdownMenu").hide();
      H.shown && !H.clickedOn && !H.isEditing() && H.hide();
      if (!tb && !Ra && ab.isTextSelected())
        k.isHighlightPen
          ? diigolet.handle(a, "highlight")
          : K.get("prefs.autoShowHighlightIcon", function (c) {
              if (c === "true") {
                ga.direction = a.pageX < mousedownLeft ? "reverse" : "normal";
                ga.show(a, "selection");
              }
            });
      else ga.hide();
      da.clickedOn =
        U.clickedOn =
        gc.clickedOn =
        H.clickedOn =
        J.clickedOn =
        Ra =
        tb =
          false;
    }
    function qa() {
      return k.signedIn || (k.notify(Da, 1e3), false);
    }
    function Xa() {
      Mb();
      J.onSignIn();
    }
    function Ob() {
      I("onSignOut");
      k.unpaintAllAnnotations();
      k.reset();
      La.onSignOut();
      da.onSignOut();
      J.onSignOut();
    }
    function Pb() {
      ub("signIn");
      O.send({ name: "activateMeAfterSignIn" });
    }
    function na() {
      var a = (document.body.id = document.body.id || "dummybodyid");
      if (!/^[a-zA-Z]/.test(a)) document.body.id = a = "a" + a;
      a = (function (i) {
        var l = /[^\-_a-z0-9U+00A1-]/g;
        if (l.test(i))
          return i.replace(l, function (m) {
            return "\\" + m.charCodeAt(0).toString(16) + " ";
          });
        return i;
      })(a);
      for (var c = "", d, f, h = /([^{}@]*)({[^{}]*})/g; (d = h.exec(qb)); ) {
        f = d[1];
        d = d[2].replace(/\r\n/g, "\n");
        c +=
          $.map(f.split(","), function (i) {
            if (/(^|\s)body([\s.\[#]|$)/.test(i))
              return i.replace("body", "body#" + a);
            if (/(^|\s)html(\s|$)/.test(i))
              return i.replace("html", "html body#" + a);
            return "body#" + a + " " + i.replace(/^\s+/m, "");
          }).join(",") +
          d +
          "\n";
      }
      if ($("head").find('style[id="diigolet-chrome-css"]').length == 0)
        document.createStyleSheet
          ? (document.createStyleSheet().cssText = c)
          : $("head")
              .add(document.body)
              .eq(0)
              .append(
                $(document.createElement("style"))
                  .attr({ type: "text/css", id: "diigolet-chrome-css" })
                  .text(c)
              );
    }
    function Ma(a, c) {
      var d = gb(a),
        f = d.path;
      if (!/^https?$/i.test(d.protocol) && !/^ftp?$/i.test(d.protocol))
        return false;
      if (/\.?diigo\./i.test(d.host))
        if (/^\/annotated\//i.test(f)) return false;
        else if (
          /(player|slides?)\.diigo\./i.test(d.host) &&
          /^\/(list|feed)/i.test(f)
        )
          return false;
        else if (/^\/bookmark\//i.test(f)) return false;
        else if (/^\/cached/i.test(f)) return false;
        else if (/^\/text_view/i.test(f)) return false;
        else if (/^\/site\/text_view/i.test(f)) return false;
        else if (/^\/item\/pdf/i.test(f)) return c ? true : false;
        else {
          if (/^\/outliner\//i.test(f)) return false;
        }
      else if (
        /^https?:\/\/chrome\.google\.com\/(extensions|webstore)/i.test(a)
      )
        return false;
      return true;
    }
    function hc(a) {
      var c = [];
      $.each(a, function (d, f) {
        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(f));
      });
      return c.join("&");
    }
    function sa(a, c, d) {
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
    function Qb() {
      if ($("#diigolet-csm").length == 0) {
        L.init();
        xa(chrome.runtime.id);
        na();
        H.init();
        ga.init();
        rb();
      }
    }
    function oa(a) {
      if (a == "true") return true;
      else if (a == "false") return false;
    }
    function Sa(a) {
      $("#diigo-bookmark-frame")[0].contentWindow.postMessage(a, "*");
    }
    function Na(a) {
      $("#diigo-screenshot-frame")[0].contentWindow.postMessage(a, "*");
    }
    function Rb() {
      var a = [];
      k.myTagsWithCount.sort(function (l, m) {
        return l.count <= m.count ? 1 : -1;
      });
      var c = k.myTagsWithCount.slice(0, 101),
        d = c[0].count,
        f = c.length;
      c.sort(function (l, m) {
        return l.name.toLowerCase() <= m.name.toLowerCase() ? -1 : 1;
      });
      for (var h = 0; h < f; h++) a[h] = c[h].count;
      a = db(a);
      f = a.length;
      a.sort(function (l, m) {
        return l < m ? 1 : -1;
      });
      var i = Math.ceil(f / 10);
      f = a.slice(1, 1 + i);
      h = a.slice(1 + i, 1 + 2 * i);
      a = a.slice(1 + 2 * i, 1 + 3 * i);
      return { topTags: c, maxCount: d, a: f, b: h, c: a };
    }
    function Sb() {
      var a = window.location.href;
      return a.substring(a.length - 4) == ".pdf" &&
        $('embed[type="application/pdf"]').length > 0
        ? true
        : false;
    }
    var x = (window.diigolet = {
      debug: false,
      logLevel: "never",
      version: "3.4.8",
      show: function () {
        da.show();
        J.show();
      },
      callback: function () {
        z.callback.apply(z, arguments);
      },
      devil: function (a) {
        return eval(a);
      },
    });
    window.diigoletrocks = function () {
      x.logLevel = "debug";
      window.d = window.D = x;
      window.dj = $;
      window.devil = window.e = x.devil;
      window.Bookmark = ra;
      window.Annotation = N;
      window.TextHighlight = bb;
      window.ImageHighlight = ta;
      window.FloatNote = vb;
      window.Comment = cb;
      window.PageComment = ya;
      window.InlineComment = va;
      window.Ctx = k;
      window.Toolbar = da;
      window.DlgBookmark = U;
      window.DlgIC = H;
      window.Utils = E;
    };
    $.browser.ieBelow7 = $.browser.msie && $.browser.version < 7;
    $.browser.ieBelow8 = $.browser.msie && $.browser.version < 8;
    $.browser.supportPositionFixed =
      !$.browser.msie || ($.browser.version >= 7 && $.boxModel);
    $.fn.extend({
      showHide: function (a) {
        return a ? this.show() : this.hide();
      },
    });
    (function (a) {
      a.toJSON = JSON.stringify;
      a.parseJSON = JSON.parse;
    })(jQuery);
    var E = {
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
      Ea = E;
    E.lang = {
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
          for (var l in i) {
            var m = d(l);
            if (m) c[m === true ? l : m] = i[l];
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
    E.lang.extend(E, E.lang);
    E.array = {
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
            this.find(d, function (l) {
              return c(l, i);
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
    E.string = {
      md5: function (a) {
        function c(u, s) {
          var w, y, B, C, F;
          B = u & 2147483648;
          C = s & 2147483648;
          w = u & 1073741824;
          y = s & 1073741824;
          F = (u & 1073741823) + (s & 1073741823);
          if (w & y) return F ^ 2147483648 ^ B ^ C;
          return w | y
            ? F & 1073741824
              ? F ^ 3221225472 ^ B ^ C
              : F ^ 1073741824 ^ B ^ C
            : F ^ B ^ C;
        }
        function d(u, s, w, y, B, C, F) {
          u = c(u, c(c((s & w) | (~s & y), B), F));
          return c((u << C) | (u >>> (32 - C)), s);
        }
        function f(u, s, w, y, B, C, F) {
          u = c(u, c(c((s & y) | (w & ~y), B), F));
          return c((u << C) | (u >>> (32 - C)), s);
        }
        function h(u, s, w, y, B, C, F) {
          u = c(u, c(c(s ^ w ^ y, B), F));
          return c((u << C) | (u >>> (32 - C)), s);
        }
        function i(u, s, w, y, B, C, F) {
          u = c(u, c(c(w ^ (s | ~y), B), F));
          return c((u << C) | (u >>> (32 - C)), s);
        }
        function l(u) {
          var s = "",
            w = "",
            y;
          for (y = 0; y <= 3; y++) {
            w = (u >>> (y * 8)) & 255;
            w = "0" + w.toString(16);
            s += w.substr(w.length - 2, 2);
          }
          return s;
        }
        var m = [],
          t,
          D,
          A,
          G,
          q,
          o,
          r,
          n;
        m = (function (u) {
          var s,
            w = u.length;
          s = w + 8;
          for (
            var y = ((s - (s % 64)) / 64 + 1) * 16,
              B = Array(y - 1),
              C = 0,
              F = 0;
            F < w;

          ) {
            s = (F - (F % 4)) / 4;
            C = (F % 4) * 8;
            B[s] |= u.charCodeAt(F) << C;
            F++;
          }
          s = (F - (F % 4)) / 4;
          C = (F % 4) * 8;
          B[s] |= 128 << C;
          B[y - 2] = w << 3;
          B[y - 1] = w >>> 29;
          return B;
        })(a);
        q = 1732584193;
        o = 4023233417;
        r = 2562383102;
        n = 271733878;
        for (a = 0; a < m.length; a += 16) {
          t = q;
          D = o;
          A = r;
          G = n;
          q = d(q, o, r, n, m[a + 0], 7, 3614090360);
          n = d(n, q, o, r, m[a + 1], 12, 3905402710);
          r = d(r, n, q, o, m[a + 2], 17, 606105819);
          o = d(o, r, n, q, m[a + 3], 22, 3250441966);
          q = d(q, o, r, n, m[a + 4], 7, 4118548399);
          n = d(n, q, o, r, m[a + 5], 12, 1200080426);
          r = d(r, n, q, o, m[a + 6], 17, 2821735955);
          o = d(o, r, n, q, m[a + 7], 22, 4249261313);
          q = d(q, o, r, n, m[a + 8], 7, 1770035416);
          n = d(n, q, o, r, m[a + 9], 12, 2336552879);
          r = d(r, n, q, o, m[a + 10], 17, 4294925233);
          o = d(o, r, n, q, m[a + 11], 22, 2304563134);
          q = d(q, o, r, n, m[a + 12], 7, 1804603682);
          n = d(n, q, o, r, m[a + 13], 12, 4254626195);
          r = d(r, n, q, o, m[a + 14], 17, 2792965006);
          o = d(o, r, n, q, m[a + 15], 22, 1236535329);
          q = f(q, o, r, n, m[a + 1], 5, 4129170786);
          n = f(n, q, o, r, m[a + 6], 9, 3225465664);
          r = f(r, n, q, o, m[a + 11], 14, 643717713);
          o = f(o, r, n, q, m[a + 0], 20, 3921069994);
          q = f(q, o, r, n, m[a + 5], 5, 3593408605);
          n = f(n, q, o, r, m[a + 10], 9, 38016083);
          r = f(r, n, q, o, m[a + 15], 14, 3634488961);
          o = f(o, r, n, q, m[a + 4], 20, 3889429448);
          q = f(q, o, r, n, m[a + 9], 5, 568446438);
          n = f(n, q, o, r, m[a + 14], 9, 3275163606);
          r = f(r, n, q, o, m[a + 3], 14, 4107603335);
          o = f(o, r, n, q, m[a + 8], 20, 1163531501);
          q = f(q, o, r, n, m[a + 13], 5, 2850285829);
          n = f(n, q, o, r, m[a + 2], 9, 4243563512);
          r = f(r, n, q, o, m[a + 7], 14, 1735328473);
          o = f(o, r, n, q, m[a + 12], 20, 2368359562);
          q = h(q, o, r, n, m[a + 5], 4, 4294588738);
          n = h(n, q, o, r, m[a + 8], 11, 2272392833);
          r = h(r, n, q, o, m[a + 11], 16, 1839030562);
          o = h(o, r, n, q, m[a + 14], 23, 4259657740);
          q = h(q, o, r, n, m[a + 1], 4, 2763975236);
          n = h(n, q, o, r, m[a + 4], 11, 1272893353);
          r = h(r, n, q, o, m[a + 7], 16, 4139469664);
          o = h(o, r, n, q, m[a + 10], 23, 3200236656);
          q = h(q, o, r, n, m[a + 13], 4, 681279174);
          n = h(n, q, o, r, m[a + 0], 11, 3936430074);
          r = h(r, n, q, o, m[a + 3], 16, 3572445317);
          o = h(o, r, n, q, m[a + 6], 23, 76029189);
          q = h(q, o, r, n, m[a + 9], 4, 3654602809);
          n = h(n, q, o, r, m[a + 12], 11, 3873151461);
          r = h(r, n, q, o, m[a + 15], 16, 530742520);
          o = h(o, r, n, q, m[a + 2], 23, 3299628645);
          q = i(q, o, r, n, m[a + 0], 6, 4096336452);
          n = i(n, q, o, r, m[a + 7], 10, 1126891415);
          r = i(r, n, q, o, m[a + 14], 15, 2878612391);
          o = i(o, r, n, q, m[a + 5], 21, 4237533241);
          q = i(q, o, r, n, m[a + 12], 6, 1700485571);
          n = i(n, q, o, r, m[a + 3], 10, 2399980690);
          r = i(r, n, q, o, m[a + 10], 15, 4293915773);
          o = i(o, r, n, q, m[a + 1], 21, 2240044497);
          q = i(q, o, r, n, m[a + 8], 6, 1873313359);
          n = i(n, q, o, r, m[a + 15], 10, 4264355552);
          r = i(r, n, q, o, m[a + 6], 15, 2734768916);
          o = i(o, r, n, q, m[a + 13], 21, 1309151649);
          q = i(q, o, r, n, m[a + 4], 6, 4149444226);
          n = i(n, q, o, r, m[a + 11], 10, 3174756917);
          r = i(r, n, q, o, m[a + 2], 15, 718787259);
          o = i(o, r, n, q, m[a + 9], 21, 3951481745);
          q = c(q, t);
          o = c(o, D);
          r = c(r, A);
          n = c(n, G);
        }
        return (l(q) + l(o) + l(r) + l(n)).toLowerCase();
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
      evalTpl: function (a, c) {
        if (c.toTemplateReplacements) c = c.toTemplateReplacements();
        return a.replace(/(^|.|\r|\n)(#\{(.*?)\})/g, function (d, f, h, i) {
          if (c == null) return "";
          d = f || "";
          if (d == "\\") return h;
          h = c;
          i = i;
          f = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
          var l = f.exec(i);
          if (l == null) return "";
          for (; l != null; ) {
            var m = l[1][0] == "[" ? l[2].replace(/\\\\]/g, "]") : l[1];
            h = h[m];
            if (null == h || "" == l[3]) break;
            i = i.substring("[" == l[3] ? l[1].length : l[0].length);
            l = f.exec(i);
          }
          return d + (h == null ? "" : String(h));
        });
      },
      parseQuery: function (a, c) {
        var d = E.string.strip(a).match(/([^?#]*)(#.*)?$/);
        if (!d) return {};
        var f = {};
        E.each(d[1].split(c || "&"), function (h) {
          if ((h = h.split("="))[0]) {
            var i = decodeURIComponent(h.shift());
            h = h.length > 1 ? h.join("=") : h[0];
            if (h != undefined) h = decodeURIComponent(h);
            if (i in f) {
              E.isArray(f[i]) || (f[i] = [f[i]]);
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
        E.each(a, function (f, h) {
          if (h)
            if (f && typeof f == "object")
              E.isArray(f) &&
                E.each(f, function (i) {
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
    E.url = { isSubDomainOf: function () {} };
    E.dom = {
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
      buildOne: function (a, c, d) {
        return this.build2(a, c, d)[0];
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
    var Eb = ["debug", "info", "error"];
    if (!Array.prototype.indexOf)
      Array.prototype.indexOf = function (a, c) {
        var d = this.length,
          f = Number(c) || 0;
        f = f < 0 ? Math.ceil(f) : Math.floor(f);
        if (f < 0) f += d;
        for (; f < d; f++) if (f in this && this[f] === a) return f;
        return -1;
      };
    var bc = /(^|.|\r|\n)(#\{(.*?)\})/;
    E = {
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
      dom: {
        build: function () {
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
        buildOne: function (a, c, d) {
          return this.build(a, c, d)[0];
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
    };
    var wb = {
      mixin: function (a) {
        Ya(
          a,
          this,
          Va("addEventListener removeEventListener fireEvent _resetEvents")
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
        this._events = {};
      },
      fireEvent: function (a, c) {
        if (!this._supressEvents) {
          I("[event]", a);
          var d = this._events[a];
          if (d)
            for (var f = 0, h, i = d.length; (h = d[f]), f < i; f++)
              (typeof h == "function" ? h : h["on" + a]).apply(h, c);
        }
      },
    };
    if (typeof Ta == "undefined") var Ta = {};
    Ta.URLParser = function (a) {
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
    Ta.URLParser.prototype.setURL = function (a) {
      this._parse(a);
    };
    Ta.URLParser.prototype._initValues = function () {
      for (var a in this._fields) this._values[a] = "";
    };
    Ta.URLParser.prototype._parse = function (a) {
      this._initValues();
      a = this._regex.exec(a);
      if (!a) throw "DPURLParser::_parse -> Invalid URL";
      for (var c in this._fields)
        if (typeof a[this._fields[c]] != "undefined")
          this._values[c] = a[this._fields[c]];
    };
    Ta.URLParser.prototype._makeGetter = function (a) {
      return function () {
        return this._values[a];
      };
    };
    gb.options = {
      strictMode: false,
      key: [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
      ],
      q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
      parser: {
        strict:
          /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:
          /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      },
    };
    var ja = function () {};
    ja.extend = function (a, c) {
      var d = ja.prototype.extend;
      ja._prototyping = true;
      var f = new this();
      d.call(f, a);
      delete ja._prototyping;
      var h = f.constructor,
        i = (f.constructor = function () {
          if (!ja._prototyping)
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
      i.valueOf = function (l) {
        return l == "object" ? i : h.valueOf();
      };
      d.call(i, c);
      typeof i.init == "function" && i.init();
      return i;
    };
    ja.prototype = {
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
              var D = this.base || ja.prototype.base;
              this.base = d;
              var A = f.apply(this, arguments);
              this.base = D;
              return A;
            };
            c.valueOf = function (D) {
              return D == "object" ? c : f;
            };
            c.toString = ja.toString;
          }
          this[a] = c;
        } else if (a) {
          var h = ja.prototype.extend;
          if (!ja._prototyping && typeof this != "function")
            h = this.extend || h;
          for (
            var i = { toSource: null },
              l = ["constructor", "toString", "valueOf"],
              m = ja._prototyping ? 0 : 1;
            (t = l[m++]);

          )
            a[t] != i[t] && h.call(this, t, a[t]);
          for (var t in a) i[t] || h.call(this, t, a[t]);
        }
        return this;
      },
      base: function () {},
    };
    ja = ja.extend(
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
      function d(A) {
        if (A.button == 0) {
          l = false;
          i(document).bind("mousemove", f).bind("mouseup", h);
          t = A.pageX;
          D = A.pageY;
          return false;
        }
      }
      function f(A) {
        l || m.beforeDrag(A);
        l = true;
        var G = parseInt(a.css("left")),
          q = parseInt(a.css("top")),
          o = A.pageX - t,
          r = A.pageY - D;
        m.onDrag(a, { ox: o, oy: r }) && a.css({ left: G + o, top: q + r });
        t = A.pageX;
        D = A.pageY;
        return false;
      }
      function h(A) {
        i(document).unbind("mousemove", f).unbind("mouseup", h);
        if (l) {
          m.afterDrag(A);
          return false;
        } else return true;
      }
      var i = jQuery,
        l = false;
      a = this.ele = i(a);
      a[0]._draggable && a[0]._draggable.destroy();
      a[0]._draggable = this;
      var m = (this.options = i.extend(
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
      m.handle = m.handle ? i(m.handle, a) : a;
      m.handle.css({ cursor: m.cursor });
      var t, D;
      this.destroy = function () {
        m.handle.unbind("mousedown", d);
      };
      m.handle.bind("mousedown", d);
    };
    var Nb = function (a, c) {
        function d(n) {
          var u = -1,
            s = "";
          $.each(o.multipleSeparator, function (w, y) {
            var B;
            if ((B = n.lastIndexOf(y)) > u) {
              s = y;
              u = B;
            }
          });
          return [u, s];
        }
        function f() {
          r.hide();
        }
        function h(n) {
          switch (n.keyCode) {
            case 38:
              n.preventDefault();
              l(-1);
              break;
            case 40:
              n.preventDefault();
              l(1);
              break;
            case 9:
            case 13:
              if (r.is(":visible")) {
                i() ? r.hide() : l(1);
                n.preventDefault();
                n.stopPropagation();
              }
              break;
            case 27:
              if (r.is(":visible")) {
                n.preventDefault();
                n.stopPropagation();
                r.hide();
              }
              break;
            case 32:
              if (r.is(":visible")) {
                n.stopPropagation();
                r.hide();
              }
              break;
            default:
              q = -1;
              G && clearTimeout(G);
              G = setTimeout(function () {
                A.val().length < o.minChars ? r.hide() : m(A.val());
              }, o.delay);
              break;
          }
        }
        function i(n) {
          if (n !== undefined) {
            q = n;
            l(0);
          }
          n = q;
          if (!(n < 0)) {
            var u = r.find("li").eq(n).text();
            if (u.indexOf(" ") >= 0) u = '"' + u + '"';
            if (o.mode == "multiple") {
              n = A.val();
              var s = d(n);
              new_value =
                s[0] >= 1 ? n.substr(0, s[0] + 1) + u + s[1] : u + " ";
            } else new_value = u;
            A.val(new_value);
            A.trigger("input");
            r.hide();
            o.onItemSelect &&
              setTimeout(function () {
                o.onItemSelect(u);
              }, 1);
            setTimeout(function () {
              A[0].focus();
              (function (w, y) {
                if (w.createTextRange) {
                  var B = w.createTextRange();
                  B.move("character", y);
                  B.select();
                } else if (w.selectionStart >= 0) {
                  w.focus();
                  w.setSelectionRange(y, y);
                }
              })(A[0], A.val().length);
            }, 13);
            return true;
          }
        }
        function l(n) {
          var u = r.find("li");
          if (u.size() != 0) {
            q += n;
            if (q < 0) q = u.size() - 1;
            else if (q >= u.size()) q = 0;
            u.removeClass("over").eq(q).addClass("over");
          }
        }
        function m(n) {
          if (o.mode == "multiple") {
            var u = d(n),
              s = "";
            s = u[0] > 0 ? n.substr(u[0] + 1) : n;
            if (s.length > 0) {
              tags = x.parseTags(s, true);
              n = tags.pop();
            } else {
              n = s;
              r.hide();
              return;
            }
          }
          n = n.toLowerCase();
          u = [];
          s = [];
          for (var w = 0, y; (y = o.data[w]), w < o.data.length; w++)
            if (y.toLowerCase().indexOf(n) == 0) u.push(y);
            else
              y.toLowerCase().indexOf(n) != 0 &&
                y.toLowerCase().indexOf(n) != -1 &&
                s.push(y);
          s.sort(function (B, C) {
            return B.indexOf(n) <= C.indexOf(n) ? -1 : 1;
          });
          u = u.concat(s);
          t(n, u);
        }
        function t(n, u) {
          if (u && u.length > 0) {
            u.length > 8 && u.splice(7, 99999);
            var s = (function (w) {
              for (
                var y = w.offsetLeft || 0, B = w.offsetTop || 0;
                (w = w.offsetParent);

              ) {
                y += w.offsetLeft;
                B += w.offsetTop;
              }
              if ($.browser.opera && document.compatMode != "CSS1Compat")
                B += 30;
              return { x: y + 0, y: B + 0 };
            })(A[0]);
            r.find("li").unbind();
            r.find("ul")
              .html(
                $.map(u, function (w) {
                  return "<li>" + w + "</li>";
                }).join("")
              )
              .end()
              .css({ top: s.y + A[0].offsetHeight, left: s.x })
              .show();
            r.find("li")
              .mouseover(function (w) {
                q = r.find("li").index(w.target);
                l(0);
              })
              .mousedown(function (w) {
                q = r.find("li").index(w.target);
                l(0);
                i();
                return false;
              });
          } else r.hide();
        }
        function D() {
          r.hide();
        }
        var A = $(a),
          G,
          q = -1;
        A[0].autoCompleter && A[0].autoCompleter.destroy();
        A[0].autoCompleter = this;
        var o = (c = $.extend(
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
        if (typeof o.multipleSeparator == "string")
          o.multipleSeparator = o.multipleSeparator.split("");
        this.destroy = function () {
          A.unbind("keydown", h).unbind("blur", D);
          $(window).unbind("scroll", f);
          A[0].autoCompleter = null;
        };
        A.attr("autocomplete", "off")
          .addClass(o.inputClass)
          .bind("keydown", h)
          .bind("blur", D);
        $.browser.supportPositionFixed || $(window).bind("scroll", f);
        var r = $("#" + c.id);
        if (r.size() == 0) {
          r = $('<div id="' + c.id + '"><ul></ul></div>')
            .addClass(o.resultsClass)
            .hide()
            .css({
              position: $.browser.supportPositionFixed ? "fixed" : "absolute",
            })
            .appendTo(document.body)
            .hide();
          $.browser.ieBelow7 &&
            r.append(
              document.createElement(
                "<iframe class=\"bgiframe\" src=\"javascript:false;document.write('');\" tabindex=\"-1\" style=\"display:block; position:absolute; top: expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)  || 0) * -1) + 'px'); left:expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth) || 0) * -1) + 'px'); z-index:-1; filter:Alpha(Opacity='0'); width:expression(this.parentNode.offsetWidth + 'px'); height:expression(this.parentNode.offsetHeight + 'px')\"/>"
              )
            );
        }
      },
      hb =
        '<div id="diigolet-toolbar" class="diigolet" title="Diigolet version #{DIIGOLET_VERSION}"><div id="diigolet-tb-content"><div id="diigolet-tb-bar"><a id="diigolet-tb-btnHide" href="#" class="_hoverAndHideDropdown" onclick="return diigolet.handle(event, \'hideToolbar\');" title="Hide the toolbar"></a><a style="\n              float: right;\n              width: 30px;\n              height: 24px;\n              background: url(\'chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletHelp.gif\')\n                no-repeat 50% 50%;\n            " href="#" onmouseover="return diigolet.handle(event, \'showHelp\');" onclick="return diigolet.handle(event, \'showHelp\');" title="Help"></a><a id="diigolet-tb-btnMore" href="#" class="diigoletButton hover" onclick="return false;" onmouseover="return diigolet.handle(event, \'tb_showDropDownMenu\', \'#diigolet-tb-moreMenu\')"><b class="outer"><b>Diigo</b></b></a\n          ><a id="diigolet-tb-btnBookmark" href="#" class="diigoletButton" onclick="diigolet.handle(event, \'bookmark\');" title="Bookmark this page"><b class="outer"><b>Bookmark</b></b></a\n          ><a id="diigolet-button-highlight" href="#" class="diigoletButton" onmouseout="diigolet.handle(event, \'outHighlight\');" onmouseover="diigolet.handle(event, \'overHighlight\');" onmousedown="this.blur();return diigolet.handle(event, \'highlight\');" onclick="return false;" title="Selected some text to highlight"><b class="outer"><b>Highlight</b></b></a\n          ><a id="diigolet-button-highlight-dropdown" href="#" class="diigoletButton" onmouseout="diigolet.handle(event, \'outHighlight\');" onmouseover="diigolet.handle(event, \'overHighlight\');" onmousedown="this.blur();return diigolet.handle(event, \'dropDownColorMenu\');" onclick="return false;"></a><a id="diigolet-tb-btnFloatNote" href="#" class="diigoletButton" title="Add a sticky note" onclick="diigolet.handle(event, \'addStickyNote\')"><b class="outer"><b>Floating Sticky Note</b></b></a\n          ><a id="diigolet-tb-btnComment" href="#" class="diigoletButton" title="View comments" onclick="return diigolet.handle(event, \'tb_viewComments\')"><b class="outer"><b>Comment</b></b></a\n          ><span id="diigoDivInfo" style="padding-left: 25px; float: left"><span style="display: none" id="diigolet-tb-forward">Annotated\n              <a href="#" class="_forwardPageUrl" title="Go to the original page">page</a\n              >\n              by <a href="#" class="_forwardUserUrl" title=""></a>. </span\n            ><span class="_info"></span\n          ></span></div><div id="diigolet-tb-signInMenu" class="dropdownMenu" style="left: 1px; width: 80px"><a href="#" title="Sign in into Diigo.com" onclick="return diigolet.handle(event, \'tb_signIn\')">Sign in</a\n          ><a href="#{URL_DIIGO}/sign-up" title="Create a Diigo account" target="_blank">Sign up</a\n          ></div><div id="diigolet-tb-moreMenu" class="dropdownMenu" style="left: 10px" onclick="this.style.display = \'none\'"><a href="#" class="_URL_MY_LIBRARY _diigomenu" title="My Library" target="_blank">My Library</a\n          ><a href="#" class="_URL_MY_LIST _diigomenu" title="My lists home" target="_blank">My lists home</a\n          ><a href="#" class="_URL_MY_GROUP _diigomenu" title="My groups home" target="_blank">My groups home</a\n          ><a href="#" class="_URL_NETWORK _diigomenu" title="My Network" target="_blank">My Network</a\n          ><a href="#" class="_URL_HOT_BOOKMARK _diigomenu" title="Hot Bookmark" target="_blank">Hot Bookmark</a\n          ><div><img style="height: 2px; width: 140px" src="chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletToobarSep.png"\n            /></div><a href="#" title="Show/hide highlight" onclick="diigolet.handle(event, \'showHideHighlight\')">Show/hide highlight</a\n          ></div><div id="diigolet-tb-colorMenu" class="dropdownMenu" style="left: 329px" onclick="this.style.display = \'none\'"><a href="#" id="diigolet-colorMenu-yellow" onclick="diigolet.handle(event, \'ChangeColor\', \'yellow\')"><b class="colorItem"><b>Yellow</b></b></a\n          ><a href="#" id="diigolet-colorMenu-blue" onclick="diigolet.handle(event, \'ChangeColor\', \'blue\')"><b class="colorItem"><b>Blue</b></b></a\n          ><a href="#" id="diigolet-colorMenu-green" onclick="diigolet.handle(event, \'ChangeColor\', \'green\')"><b class="colorItem"><b>Green</b></b></a\n          ><a href="#" id="diigolet-colorMenu-pink" onclick="diigolet.handle(event, \'ChangeColor\', \'pink\')"><b class="colorItem"><b>Pink</b></b></a\n          ></div><div style="clear: both"></div></div><div id="diigolet-tb-shadow"></div><div id="diigolet-help"><div class="diigolet-closeBtn" onclick="diigolet.handle(event, \'hideHelp\')"></div><p>\n          To highlight, select some text and click "Highlight" on the context\n          menu.\n        </p><p>\n          To add a sticky note, move your mouse over highlighted text and the\n          click "Add Sticky Notes" on the context menu.\n        </p><p><a target="_blank" href="https://help.diigo.com/no-toolbar-simple-diigolet/use-diigolet" title="View full Help">View full help</a\n          ></p></div><div id="diigolet-notify" class="diigolet"><span></span></div><div id="diigolet-annotationSummary" style="width: 360px; display: none"></div></div>\n',
      Ib =
        '<div id="diigolet-tray" class="diigolet" onmouseover="diigolet.handle(event, \'mouseOnBorder\');"></div>\n',
      ib =
        '<div class="diigolet" id="diigolet-tagForward"><div id="diigolet-tagForward-topBar" class="_dragHandle"><span class="topBar-title">Save to Diigo</span><span class="focus-research-tip">(focus research)</span><div id="diigolet-tagForward-remove"\n          data-gtooltip="Saved on April 24,2013"><span></span></div></div><div id="diigolet-Bookmark-Form"><div id="Diigo-outliner"><div id="diigo-list-add"><div class="diigo-alert-tip"><span>Name existed !</span><div class="diigo-alert-tip-arrow"></div></div><input type="text" id="diigo-list-addInput" /><div id="diigo-list-addBtn"><span class="label">Create</span><span class="spinner"></span></div><a id="diigo-list-addCancel">Cancel</a></div><div id="diigo-list-add-tip">\n            You have reach the limit of outliner.\n            <a href="" id="diigo-w-cancel">Cancel</a\n            ><a href="" id="diigo-w-upgrade">Upgrade</a></div><div id="diigo-list"><select></select></div></div><div id="Diigo-Bookmark-Title"><div id="link-icon" data-gtooltip="Edit url"></div><input type="text" id="Diigo-Bookmark-Title-Input" value="DISQUS - Elevating the discussion"\n          /><div class="diigo-alert-tip"><span>Please input a bookmark title</span><div class="diigo-alert-tip-arrow"></div></div></div><div id="Diigo-Bookmark-Url"><input type="text" id="Diigo-Bookmark-Url-Input" value="https://disqus.com"\n          /><div id="url-arrow"></div><div class="diigo-alert-tip"><span>Please input a valid url</span><div class="diigo-alert-tip-arrow"></div></div></div><div id="Diigo-Bookmark-Options"><div id="Diigo-Bookmark-Privacy" class="diigo-option"\n            data-gtooltip="private"><div class="op-checkbox-container" title="Make this bookmark private"><div class="op-checkbox"></div><div class="op-label">Private</div></div></div><div id="Diigo-Bookmark-Unread" class="diigo-option"\n            data-gtooltip="readlater"><div class="op-checkbox-container" title="Mark this bookmark as unread"\n              v\n            ><div class="op-checkbox"></div><div class="op-label">Read Later</div></div></div><div id="Diigo-Bookmark-uploadCache" class="diigo-option"\n            data-gtooltip="cache"><div class="op-checkbox-container" title="Upload a copy of the page"><div class="op-checkbox"></div><div class="op-label">Cache</div></div></div></div><div id="Diigo-Bookmark-Description"><textarea id="Diigo-Bookmark-Description-Input" placeholder="Add description"></textarea></div><div id="Diigo-Bookmark-Tag"><div id="Diigo-Bookmark-Tag-Wrapper"><span id="Diigo-Bookmark-Tag-dropdown"></span><input type="text" id="Diigo-Bookmark-Tag-Input" placeholder="Input or select tags"\n            /></div></div><div id="Diigo-Bookmark-Tag-suggestion"><div id="diigolet-bm-tagListContainer-recent" class="diigo-su-tag"><a href="javascript:void(0)" title="Select to add all">Recent Tags:</a\n            ></div><div id="diigolet-bm-tagListContainer-recommend" class="diigo-su-tag"><a href="javascript:void(0)">Recommended:</a><!--<div class="loading"></div>--></div><div id="diigolet-bm-tagListContainer-group" class="diigo-su-tag"><a href="javascript:void(0)">Group dictionary:</a><div class="loading"></div></div></div><div id="Diigo-Bookmark-Tag-Cloud"><div>\n            Select from your top 100 tags:\n            <a href="#" id="Diigo-Bookmark-Tag-Eidt" target="_blank">Edit tags &gt;&gt;</a\n            ></div><div id="Diigo-Bookmark-Tag-Cloud-Container"></div></div><div id="diigo-list-group"><div id="diigo-group"><select></select></div></div></div><div id="Diigo-Bookmark-bottom"><div id="Diigo-Bookmark-checkShareExisting"><div class="op-checkbox-container checked"><div class="op-checkbox"></div><div class="op-label">Share my existing annotations</div></div></div><div id="diigolet-dlgBm-btnSave">Save</div><a id="diigolet-dlgBm-btnCancel">cancel</a></div></div>\n',
      Jb =
        '<div id="diigolet-twitter" class="diigolet"><table width="100%" border="0" cellspacing="4" cellpadding="2"><tr><td><img width="210px" height="49px" src="https://assets3.twitter.com/images/twitter.png"\n            /></td></tr><tr><td><p>Share this bookmark with friends on Twitter</p></td></tr><tr><td><fieldset><legend>Input your message</legend><textarea id="message-editor" onkeyup="diigolet.handle(event, \'OnTwitterMsgChange\')" style="\n                  margin-top: 5px;\n                  margin-bottom: 5px;\n                  width: 361px;\n                  height: 113px;\n                "></textarea><span style="margin-right: 5px" id="left-count">51</span\n              >characters left\n            </fieldset></td></tr><tr><td colspan="2" style="text-align: right"><input type="button" class="diigo-button" onclick="return diigolet.handle(event, \'TwitterPost\')" value="Post"\n            /><input type="button" class="diigo-button" onclick="return diigolet.handle(event, \'TwitterCancel\')" value="Cancel" style="font-weight: normal"\n            /></td></tr></table></div>\n',
      jb =
        '<div id="diigolet-dlg-sticky" style="position: absolute;left: 100px;top:100px;" class="diigolet diigoletFN yellow"><div id="diigolet-dlg-sticky-top" class="_dragHandle"><span id="diigolet-dlg-sticky-close"></span><span id="diigolet-dlg-sticky-color"><div id="diigolet-dlg-sticky-currentColor" title="change color"></div><div id="diigolet-dlg-sticky-colorPicker"><b color="yellow" id="diigolet-dlg-yellow" class="dlg-colorItem colorchecked"><b></b></b><b color="blue" id="diigolet-dlg-blue" class="dlg-colorItem"><b></b></b><b color="green" id="diigolet-dlg-green" class="dlg-colorItem"><b></b></b><b color="pink" id="diigolet-dlg-pink" class="dlg-colorItem"><b></b></b></div></span><span id="diigolet-dlg-sticky-addTab"></span></div><div id="diigolet-dlg-sticky-content" class="private"><div id="diigolet-dlg-sticky-switcher"><span class="FN-switcher" id="FN-switcher-private"><b></b>Private</span><span class="FN-switcher" id="FN-switcher-group"><b></b>Group</span></div><div class="FN-content-wrapper private"><textarea id="FN-private-editor" placeholder="Input here..."></textarea><div id="FN-content-footer"><div id="editDone"><span id="FN-private-delete"><b></b></span><span id="FN-private-datetime"></span></div><div id="editing"><a href="javascript:void(0)" id="FN-private-saveBtn">Save</a><a href="javascript:void(0)" id="FN-private-cancelBtn">Cancel</a></div></div></div><div class="FN-content-wrapper group"><div><div id="FN-group-content-nav"><span id="FN-current-group"><span>+Share to a new group</span><b></b></span><div id="FN-group-menu"><ul id="FN-group-ul"></ul><ul id="FN-group-share-new-ul"><li id="FN-group-share-new">+Share to a new group</li></ul></div></div><div id="FN-post-form" class=""><div><textarea id="FN-group-post" placeholder="write a comment..."></textarea></div><div><select id="FN-group-share"><option>Choose a group</option><option>test</option></select><button><span class="button-label">Post</span><span class="button-spinner"></span></button><a href="javascript:void(0)">Cancel</a></div></div><div id="FN-group-content"><div id="FN-group-content-container"></div><div id="FN-group-content-postform"><textarea placeholder="Write a comment..."></textarea><div class="post-action"><button><span class="button-label">Post</span><span class="button-spinner"></span></button><a href="javascript:void(0)">Cancel</a></div></div></div></div></div></div></div>\n',
      ob =
        '<div id="diigolet-dialog-share" class="diigolet"><div id="diigolet-dialog-share-title" class="_dragHandle"><a id="diigolet-dialog-share-closeBtn" href="javascript:void(0);"></a><span>Share - Diigo</span></div><div id="diigolet-diglog-tabs"><ul id="diigolet-share-shareToTabs"><li class="shareToTwitter"><a id="diigolet-share-tab-twitter" diigotab="twitter" href="javascript:void(0)"><b>&#160;</b>Twitter</a></li><li class="shareToFacebook"><a id="diigolet-share-tab-facebook" diigotab="facebook" href="javascript:void(0)"><b>&#160;</b>Facebook</a></li><li class="shareToGplus"><a id="diigolet-share-tab-gPlus" diigotab="gPlus" href="javascript:void(0)"><b>&#160;</b>Google+</a></li><li class="shareToEmail"><a id="diigolet-share-tab-email" diigotab="email" href="javascript:void(0)"><b>&#160;</b>Email</a></li><li class="getAnnotatedLink"><a id="diigolet-share-tab-annotatedLink" diigotab="annotatedLink" href="javascript:void(0)"><b>&#160;</b>Annotated Link</a></li></ul></div><div id="diigolet-dialog-share-content"><div id="diigolet-dialog-share-twitter" style="display:none;"><p class="twitterDesc"><b id="diigolet-share-twitterLeftChars">20</b>Share this bookmark with friends on Twitter</p><textarea id="diigolet-dialog-share-twitterMsg" class="inputTxt">\n                FTA - Main page | FTA - Free Technology Academy http://bit.ly/d4OiXQ via www.diigo.com/~soraya\n                </textarea><div class="buttonRow clearfloat"><div style="float:left"><a href="https://www.twitter.com/diigo"><img src="chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/follow-us.png" alt="Follow diigo on Twitter" align="absmiddle"/></a></div><span id="diigolet-dialog-share-twitter-signInStatus"><span id="diigolet-dialog-share-twitter-signedIn">Signed in as <span></span><a href="#">(not you?)</a></span><a id="diigolet-dialog-share-twitter-notSignedIn" href="#">Click here to connect to twitter</a></span><!--<input type="button" value="Cancel" /><input class="defaultAction diigoBtn" type="button" value="Send" />--><a href="javascript:void(0)" id="diigolet-twitter-saveBtn" class="diigoBtn">Send</a><a href="javascript:void(0)" id="diigolet-twitter-cancelBtn">Cancel</a></div></div><div id="diigolet-dialog-share-facebook" style="display:none;">\n                Please finish sharing in the popup window.\n            </div><div id="diigolet-dialog-share-gPlus" style="display:none;">\n                Please finish sharing in the popup window.\n            </div><div id="diigolet-dialog-share-email" style="display: none"><table><tbody><tr><td style="width:60px"><label for="diigolet-dialog-share-email-to">To:</label></td><td><input id="diigolet-dialog-share-email-to" type="text" class="inputTxt" style="display:none" diigocomment="unused"/><div id="forwardTo" class="autocompleteContacts"></div></td></tr><tr><td><label for="diigolet-dialog-share-email-subject">Subject:</label></td><td><input id="diigolet-dialog-share-email-subject" type="text" class="inputTxt" /></td></tr></tbody></table><p><label id="diigolet-dialog-share-email-quotes-checker"><input type="checkbox" />Include Quotes</label><label for="diigolet-dialog-share-email-message">Message:</label><br/><textarea id="diigolet-dialog-share-email-message" class="inputTxt"></textarea></p><div id="diigolet-dialog-share-email-quotes"><div id="diigolet-aidlog-share-email-quotes-content"><strong>Quotes:</strong><div style="border-left: 3px solid #ddd;padding-left: 5px;margin-left: 5px;margin-top: 5px;"><p> After a 71/2-hour summit, Obama suggested Democrats may go it alone to try to pass an overhaul. By Charles Babington Associated Press WASHINGTON - Giving no ground, President Obama and Republican leaders fought forcefully for their competing visions of </p></div></div></div><div class="buttonRow clearfloat"><a href="javascript:void(0)" id="diigolet-email-saveBtn" class="diigoBtn">Send</a><a href="javascript:void(0)" id="diigolet-email-cancelBtn">Cancel</a></div></div><div id="diigolet-dialog-share-annotatedLink" style="display:none;"><div class="annotatedLinkInfo"><b>&#160;</b>An Annotated Link is a special URL provided by Diigo that allows you to share the current webpage complete with highlights and sticky notes to anyone.<br/><strong>Copy the URL below </strong>and paste it into your blog, email or IM messages...\n        \t\t\t</div><p><input id="diigolet-dialog-share-annotatedLink-value" type="text" class="inputTxt" value="https://www.diigo.com/09ijt" /></p><div class="buttonRow clearfloat"><span id="diigolet-dialog-share-annotatedLink-optLinks"><a href="javascript:void(0)" target="_blank">Preview</a></span><a href="javascript:void(0)" id="diigolet-annotatedLink-saveBtn" class="diigoBtn">Copy</a><a href="javascript:void(0)" id="diigolet-annotatedLink-cancelBtn">Cancel</a></div></div></div></div>\n',
      kb =
        '<div class="diigolet d3df themeDefault" id="d3df-sidebar"><div class="heading bgColor1 _dragHandle" style="zoom: 1; border: none"><a href="#{URL_DIIGO}" style="\n              background: transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv1.gif)\n                no-repeat scroll left -4px;\n              padding-left: 20px;\n              float: left;\n            ">\n            Diigo</a\n          ><a class="_signIn" href="#" title="Sign in into Diigo.com" style="float: left; margin-left: 10px" onclick="return diigolet.handle(event, \'tb_signIn\')">sign in</a\n          ><div style="float: right" title="Pop out and pin" class="popOut" onclick="diigolet.devil(\'Sidebar\').popOut();"></div><div style="clear: both"></div></div><div class="heading bgColor1 color2"><a id="d3df-togglePanelInline" class="togglePanel" href="#" onclick="diigolet.devil(\'Sidebar\').togglePanel(\'inline\');return false;"></a><a class="add" href="#" onclick="diigolet.devil(\'Sidebar\').addInlineComment();return false;">+Add</a\n          ><p><span class="_inlineCommentsTitle">Inline Comments</span>(<span class="_inlineCommentCount">0</span\n            >)\n          </p></div><ul id="d3df-inlineCommentBox" class="highlights bgColor2" style="overflow: auto">\n</ul><div class="heading bgColor1"><a id="d3df-togglePanelPage" class="togglePanel" href="#" onclick="diigolet.devil(\'Sidebar\').togglePanel(\'page\');return false;"></a><a class="add" href="#" onclick="diigolet.devil(\'Sidebar\').showEditPageCommentBox();return false;">Add</a\n          ><p>Page Comments(<span class="_pageCommentCount">0</span>)</p></div><div id="d3df-pageCommentBox" class="bgColor1"><div class="addComment"><select id="diigolet-sb-selpc" style="margin-left: 5px"></select><textarea id="diigolet-sb-txtpc" name="txtComment" rows="4" style="margin: 5px; width: 90%"></textarea><div style="margin: 5px"><input class="diigo-button" type="button" value="Post" onclick="diigolet.devil(\'Sidebar\').addCommentSubmit()"\n              /><input class="diigo-button" type="button" value="Cancel" onclick="diigolet.devil(\'Sidebar\').showEditPageCommentBox(false);"\n              /></div></div><ul id="d3df-pageCommentList" class="comments" style="overflow: auto">\n</ul></div></div>\n',
      $a =
        '<div id="diigolet-csm"><div id="diigolet-csm-research-mode"></div><div id="diigolet-csm-highlight-wrapper" class="csm-btn"><a id="diigolet-csm-highlight" class="csm-action" title="Highlight" href="javascript:void(0);"></a><div class="diigolet-csm-color small hidden"><a class="diigolet-csm-coloritem yellow" data-color="yellow"></a><a class="diigolet-csm-coloritem blue" data-color="blue"></a><a class="diigolet-csm-coloritem green" data-color="green"></a><a class="diigolet-csm-coloritem pink" data-color="pink"></a></div></div><div id="diigolet-csm-highlightAndComment-wrapper" class="csm-btn"><a id="diigolet-csm-highlightAndComment" class="csm-action" title="Highlight & Sticky note" href="javascript:void(0);"></a><div class="diigolet-csm-color small hidden"><a class="diigolet-csm-coloritem yellow" data-color="yellow"></a><a class="diigolet-csm-coloritem blue" data-color="blue"></a><a class="diigolet-csm-coloritem green" data-color="green"></a><a class="diigolet-csm-coloritem pink" data-color="pink"></a></div></div><a id="diigolet-csm-search" class="csm-action" title="Search in Google" href="javascript:void(0);"></a></div>\n',
      lb =
        '<div id="diigolet-annMenu" class="diigolet diigoletContexMenu"><div id="diigolet-annMenu-color" class="diigolet-annMenu-item _onlyMy"><b id="diigolet-annMenu-currentColor" title="change color"><b></b></b><div id="diigolet-annMenu-colorPicker"><b id="diigolet-context-yellow" color="yellow" class="ann-colorItem"><b></b\n          ></b><b id="diigolet-context-blue" color="blue" class="ann-colorItem"><b></b\n          ></b><b id="diigolet-context-green" color="green" class="ann-colorItem"><b></b\n          ></b><b id="diigolet-context-pink" color="pink" class="ann-colorItem"><b></b\n          ></b></div></div><div id="diigolet-annMenu-add" class="diigolet-annMenu-item" title="add a sticky note"><b></b></div><div id="diigolet-annMenu-share" class="diigolet-annMenu-item" title="share"><b></b></div><div id="diigolet-annMenu-del" class="diigolet-annMenu-item _onlyMy" title="delete"><b></b></div><div id="diigolet-annMenu-more" class="diigolet-annMenu-item" title="more action"><b></b></div><div id="diigolet-annMenu-arrow"></div><div id="diigolet-annMenu-moreThings"><ul><li><a href="javascript:void(0)" id="diigolet-annMenu-My">View in My Library</a\n            ></li><!--<li><a href="javascript:void(0)" id="diigolet-annMenu-copy-highlights">Copy this highlight</a></li>--><li id="diigolet-annMenu-tip"></li></ul></div></div>\n',
      mb = '<div class="diigolet floatNote diigoshow"><span>10</span></div>\n',
      Kb = "",
      Lb = "",
      nb =
        '<div id="diigolet-panel-panel" class="diigolet notSignedIn"><div id="diigolet-panel-logo" title="Expand the Annotation Toolbar"></div><div id="diigolet-panel-main" class="clearfloat"><div id="diigolet-panel-fold" title="Collapse the Annotation Toolbar"></div><div id="diigolet-panel-Highlight" class="diigolet-panel-btn"><div id="diigolet-panel-hightlight-dropdown" title="Select a highlight color"><b></b></div><div id="diigolet-panel-btnHighlight" title="Select text to highlight or click to turn on a highlighter pen"><b></b></div><ul id="diigolet-panel-colorPicker"><div id="diigolet-panel-colorPicker-arrow"></div><li diigocolor=\'yellow\' class="yellow"><span><b></b></span>\n                            Yellow\n                        </li><li diigocolor=\'blue\' class="blue"><span><b></b></span>\n                            Blue\n                        </li><li diigocolor=\'green\' class="green"><span><b></b></span>\n                            Green\n                        </li><li diigocolor=\'pink\' class="pink"><span><b></b></span>\n                            Pink\n                        </li></ul></div><div id="diigolet-panel-btnStickyNote" class="diigolet-panel-btn" title="Add sticky note"><b></b></div><div id="diigolet-panel-btnBookmark" class="diigolet-panel-btn" title="Save to Diigo"><b></b></div><div id="diigolet-panel-btnAnnotationList" class="diigolet-panel-btn" title="Show annotations list on this page"><b></b></div></div><!----><div id="diigolet-panel-space"></div></div>\n',
      pb =
        '<div class="diigolet notice" id="diigolet-notice" style="display:block;"><div><b>&#160;</b><p>Ok, done!</p><span id="close"></span></div><div class="info"><b>&#160;</b><p>Information</p></div><div class="alert"><b>&#160;</b><p>The value run-in is special, because it can make the generated box\u2019s formatting either block or inline. A run-in box that doesn\u2019t contain a block box, and is followed by a sibling block box in the normal document flow, becomes the first inline box of the sibling block box (unless the sibling is or contains a run-in).</p></div><div class="wait"><b>&#160;</b><p>Please wait...</p></div></div>\n',
      qb =
        '.diigolet,.diigolet a,.diigolet em,.diigolet span,.diigolet div,.diigolet dl,.diigolet dt,.diigolet dd,.diigolet ul,.diigolet ol,.diigolet li,.diigolet h1,.diigolet h2,.diigolet h3,.diigolet h4,.diigolet h5,.diigolet h6,.diigolet pre,.diigolet form,.diigolet fieldset,.diigolet p,.diigolet blockquote,.diigolet th,.diigolet td,.diigolet input,.diigolet textarea,.diigolet select,.diigolet *{background:transparent none;padding:0;margin:0;flex-direction:row;border:#000 0 solid;text-align:left;text-decoration:none;text-transform:none;text-indent:0;line-height:normal;word-break:normal;word-wrap:normal;width:auto;height:auto;color:inherit;font:inherit;float:none;cursor:default;position:static;overflow:visible;max-width:none;box-shadow:none;opacity:1;border-radius:0;}.diigolet{color:#000;font:normal normal normal 13px arial,helvetica,clean,sans-serif;}.diigolet input[type="text"],.diigolet textarea,.diigolet select,.diigolet fieldset{background-color:#fff;border:1px #999 solid;padding:1px;font-size:12px;display:inline;border-radius:2px;-webkit-transition:border linear .2s,box-shadow linear .2s;}.diigolet select{padding:0;height:20px;}.diigolet input[type="text"],.diigolet textarea{cursor:text;}.diigolet input[type="text"]{height:20px;}.diigolet input[type="button"],.diigolet input[type="submit"],.diigolet input[type="reset"],.diigolet input[type="file"]{color:buttontext;cursor:default;padding:2px 5px;text-align:center;border:1px solid #ccc;background:#fff;border-radius:2px;background-image:-webkit-gradient(linear,0% 0,0% 100%,from(#f8f8f8),to(#d2d2d2));}.diigolet input[type="button"]:active,.diigolet input[type="submit"]:active,.diigolet input[type="reset"]:active,.diigolet input[type="file"]:active{background:#ddd;}.diigolet textarea{white-space:normal!important;resize:vertical!important;padding:2px!important;}.diigolet input.diigo-check{border:none;vertical-align:middle;}.diigolet input.diigo-button{font-size:12px!important;font-weight:bold;padding:4px 8px;cursor:pointer;border-radius:4px;}.diigolet input.diigo-button#diigolet-dlgBm-btnSave{width:56px;color:white;height:25px;-webkit-border-radius:4px;background-color:rgba(237,237,237,0);-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.15);border:solid 1px #0388dc;background-image:-webkit-linear-gradient(top,#4eaffa,#0492f5);}.diigolet input.diigo-button#diigolet-dlgBm-btnSave:hover{background-image:-webkit-linear-gradient(top,#349ef0,#0580d6);}.diigolet input.diigo-button#diigolet-dlgBm-btnSave:active{background-image:-webkit-linear-gradient(bottom,#4eaffa,#0492f5);}.diigolet input.diigo-downlist{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/arrow-down.png) 50% 50% no-repeat,-webkit-gradient(linear,0% 0,0% 100%,from(#f8f8f8),to(#d2d2d2));width:12px;margin-left:-16px;}.diigolet input.diigo-downlist:active{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/arrow-down.png) 50% 50% no-repeat,#ddd;}.diigolet div.diigo-buttonswitchlist{padding:4px 2px;border:1px solid #ccc;position:absolute;right:72px;background:#fff;z-index:100000;}.diigolet div.diigo-buttonswitchlist ul li{padding:2px 6px;}.diigolet div.diigo-buttonswitchlist ul li:hover{background:#43658f;color:#fff;cursor:pointer;}#diigoletFNSubmit{width:50px;}.diigolet table{border-collapse:collapse;border-spacing:0;width:auto;}.diigolet label{cursor:pointer!important;display:inline;vertical-align:middle;}.diigolet fieldset,.diigolet img{border:0;}.diigolet address,.diigolet caption,.diigolet cite,.diigolet code,.diigolet dfn,.diigolet em,.diigolet strong,.diigolet th,.diigolet var{font-style:normal;font-weight:bold;}.diigolet ol,.diigolet ul,.diigolet li{list-style:none;display:block;}.diigolet caption,.diigolet th{text-align:left;}.diigolet h1,.diigolet h2,.diigolet h3,.diigolet h4,.diigolet h5,.diigolet h6{font-weight:bold;}.diigolet q:before,.diigolet q:after{content:"";}.diigolet abbr,.diigolet acronym{border:0;}.diigolet a:link,.diigolet a:visited,.diigolet a:hover,.diigolet a:active{text-decoration:none;color:#00f;cursor:pointer!important;}.diigolet a:hover{text-decoration:underline;}.diigolet a *{cursor:inherit;}#diigolet-tray{position:fixed;top:0;left:10;width:16px;height:16px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv3.gif") no-repeat left -4px;z-index:2147483646;}.diigolet a.diigolet-Help:link,.diigolet a.diigolet-Help:visited{color:#06f;}.diigolet a.diigolet-Help:hover,.diigo a.diigolet-Help:active{color:#00f;}.diigolet label{margin-left:3px;}.diigolet span.noComments{color:#aaa;font-size:10px;}#diigolet-toolbar{border:none;width:100%;position:absolute;top:0;left:0;z-index:2147483647;color:#333;}#diigolet-tb-content{padding:3px 5px;background:#efedde url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigolet-toolbar-bg2.gif) repeat scroll 0;}#diigolet-tb-bar span,#diigolet-tb-bar div,#diigolet-tb-bar a,#diigolet-tb-bar em{line-height:24px;}#diigolet-tb-shadow{height:5px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigolet-toolbar-shadow.png) repeat-x left top;}* html #diigolet-tb-shadow.ie6{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigolet-toolbar-shadow.png");overflow:hidden;background:none;}#diigolet-help{display:none;position:absolute;top:29px;right:10px;width:200px;border:1px #ccc solid;background-color:#ffc;padding:6px 16px 6px 6px;}.diigolet a.diigoletButton{height:24px;float:left;padding-right:4px;cursor:pointer!important;}.diigolet a.diigoletButton:hover{text-decoration:none;color:#000;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3_r.png") no-repeat right top;}.diigolet a.diigoletButton:active{background-position:right bottom;}.diigolet a.diigoletButton b{font-weight:normal;color:#000;line-height:24px;float:left;padding-left:4px;height:24px;}#diigolet-button-highlight-dropdown{width:8px;height:16px;margin-right:4px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/down_arrow.gif") no-repeat scroll left 2px;}#diigolet-button-highlight-dropdown.mouseovered{border-left:1px solid #888;margin-right:0;text-decoration:none;width:11px;height:24px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn4.png") no-repeat left top!important;}#diigolet-button-highlight-dropdown.mouseoveredIe{border-left:1px solid #888;margin-right:1px;text-decoration:none;width:11px;height:24px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn4.png") no-repeat left top!important;}#diigolet-button-highlight-dropdown.checked{border-left:1px solid #888;margin-right:0;text-decoration:none;width:11px;height:24px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn4_s.png") no-repeat left top!important;}#diigolet-button-highlight.mouseovered{text-decoration:none;color:#000;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3_r.png") no-repeat right top!important;}#diigolet-button-highlight.mouseoveredIe{text-decoration:none;color:#000;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3_r.png") no-repeat right top!important;}#diigolet-button-highlight.mouseovered b.outer{background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3.png") no-repeat left top;}#diigolet-button-highlight.mouseoveredIe b.outer{background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3.png") no-repeat left top;}a#diigolet-button-highlight b.outer{padding-right:5px;}a#diigolet-button-highlight{padding-right:0!important;}a.diigoletButton:hover b.outer{background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3.png") no-repeat left top;}a.diigoletButton:active b.outer{background-position:left bottom;}.diigolet a.diigoletButton b b{font-size:12px;padding-left:20px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv3.gif") no-repeat left 50%;}.diigolet a.diigoletButton:active b b{position:relative;top:1px;left:1px;}.diigolet a.diigoletButton.diigoletDisabled{cursor:default;}.diigolet a.diigoletButton.diigoletDisabled b b{color:#999;position:static;}.diigolet a.diigoletButton.diigoletDisabled:hover{background:none transparent;}.diigolet a.diigoletButton.diigoletDisabled:hover b.outer{background:none transparent;}.diigolet a.diigoletButton.checked{background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3_r.png") no-repeat right top;background-position:right bottom;}.diigolet a.diigoletButton.checked b.outer{background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletBtn3.png") no-repeat left top;background-position:left bottom;}.diigolet a.diigoletButton.checked b b{position:relative;top:1px;left:1px;}#diigolet-tb-btnSidebar b b{background-position:left -24px;}#diigolet-tb-btnSidebar.toClose b b{background-position:left -48px;}#diigolet-tb-btnBookmark b b{background-position:left -144px;}#diigolet-tb-btnBookmark.saved b b{background-position:left -120px;}#diigolet-button-highlight b b{background-position:left -72px;}#diigolet-button-highlight.dontShow b b{background-position:left -96px;}#diigolet-button-highlight.yellow b b{background-position:left -355px;}#diigolet-button-highlight.blue b b{background-position:left -375px;}#diigolet-button-highlight.green b b{background-position:left -395px;}#diigolet-button-highlight.pink b b{background-position:left -415px;}.diigolet .colorItem{padding-left:20px;height:16px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv3.gif") no-repeat left -440px;}#diigolet-context-yellow b,#diigolet-colorMenu-yellow b{background-position:left -440px;}#diigolet-context-blue b,#diigolet-colorMenu-blue b{background-position:left -460px;}#diigolet-context-green b,#diigolet-colorMenu-green b{background-position:left -480px;}#diigolet-context-pink b,#diigolet-colorMenu-pink b{background-position:left -500px;}#diigolet-context-yellow.colorchecked b,#diigolet-colorMenu-yellow.colorchecked b{background-position:left -520px;}#diigolet-context-blue.colorchecked b,#diigolet-colorMenu-blue.colorchecked b{background-position:left -540px;}#diigolet-context-green.colorchecked b,#diigolet-colorMenu-green.colorchecked b{background-position:left -560px;}#diigolet-context-pink.colorchecked b,#diigolet-colorMenu-pink.colorchecked b{background-position:left -580px;}#diigolet-tb-btnFloatNote b b{background-position:left -167px;}#diigolet-tb-btnTwitter b b{background:transparent url("https://twitter.com/favicon.ico") no-repeat left 50%;}#diigolet-tb-btnComment b b{background-position:left -192px;}#diigolet-tb-btnComment.commented b b{background-position:left -192px;}#diigolet-tb-btnMore b b{background-position:left 0;}#diigolet-tb-btnSignIn b b{background-position:left -264px;}#diigolet-tb-btnHide{float:right;height:24px;width:16px;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv3.gif") no-repeat left -240px;}div.diigoIcon{cursor:pointer!important;margin:0;padding:0;position:absolute;display:none;width:24px!important;z-index:2147483643;height:23px!important;background:transparent url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/edit-highlight.png") no-repeat left;-webkit-transition:-webkit-transform 150ms ease;vertical-align:text-bottom;}span.diigoHighlightCommentLocator{vertical-align:text-bottom;line-height:0;}div.diigoIcon span{color:#000;display:block;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;line-height:18px;text-align:center;text-shadow:0 1px 1px #fff;text-decoration:none;text-indent:0;display:none;}div.diigoHighlightcommented{display:inline-block!important;}div.ImageIcon{background-color:transparent!important;}div.diigoIcon:hover{background-color:transparent!important;background-repeat:no-repeat!important;-webkit-transform:translate(0px,-2px);}div.diigoHighlightcommented.TextIcon{bottom:0;}div.diigoHighlightcommented.public{background:#fff url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/public-annotation.png") no-repeat left;}div.diigoHighlightcommented.private.yellow{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 0 no-repeat;}div.diigoHighlightcommented.private.blue{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 -46px no-repeat;}div.diigoHighlightcommented.private.green{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 -92px no-repeat;}div.diigoHighlightcommented.private.pink{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 -138px no-repeat;}div.diigoHighlightcommented.group.yellow{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 -23px no-repeat;}div.diigoHighlightcommented.group.blue{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 -69px no-repeat;}div.diigoHighlightcommented.group.green{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 -115px no-repeat;}div.diigoHighlightcommented.group.pink{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/annotation-icon.png") 0 -161px no-repeat;}#diigolet-toolbar .dropdownMenu{display:none;border:1px solid #999;font:12px arial,helvetica,clean,sans-serif;background-color:Menu;padding:2px 0;z-index:2147483647;position:absolute;top:30px;width:140px;}#diigolet-toolbar .dropdownMenu a,#diigolet-toolbar .dropdownMenu a:link,#diigolet-toolbar .dropdownMenu a:visited,#diigolet-toolbar .dropdownMenu a:hover,#diigolet-toolbar .dropdownMenu a:active{display:block;padding:2px 12px;font-weight:normal;text-decoration:none;color:#000;background:#fff;cursor:default;}#diigolet-toolbar .dropdownMenu a:hover,#diigolet-toolbar .dropdownMenu a:active{color:#fff;background:#09f;}#diigolet-notify{display:none;position:absolute;top:33px;left:0;border:1px #ccc solid;background-color:#ffc;padding:6px 16px 6px 6px;z-index:2147483647;}#diigolet-notify.right{left:auto;right:0;text-align:right;}.diigolet .tagList{margin:2px 0;float:left;}.diigolet .diigo-su-tag .tagButton{display:inline-block;height:16px;padding:0 5px;line-height:16px;background-color:#f2f2f2;border-top:1px solid rgba(0,0,0,0);border-left:1px solid rgba(0,0,0,0);border-right:1px solid #c9d7f1;border-bottom:1px solid #c9d7f1;color:#858585;border-radius:1px;cursor:pointer;margin-right:3px;}.diigolet .diigo-su-tag .tagButton:hover{border-color:#82b3f8;}.diigolet .diigo-su-tag .tagButton.inused{color:#3f99a1;}.diigolet .diigo-su-tag .tagButton.selected{border-color:#82b3f8;}.diigolet .tagLoading a{display:none;margin-bottom:10px;}.diigolet .tagList.tagLoading .loading{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/indicator.gif) no-repeat left top;height:16px;padding-left:22px;display:block;}.diigolet .tagLoading .tagListHeader{display:none;}.diigolet .tagListHeader{cursor:pointer;float:left;width:100px;line-height:23px;}.diigolet .tagListHeader:hover{text-decoration:underline;}.diigolet .tagList div{color:#666!important;font-size:12px!important;font-weight:bold!important;padding-right:5px!important;text-align:left!important;}#diigolet-twitter{background-color:threedface;font-family:Arial,sans-serif;font-size:13px;color:windowtext;padding:5px 5px;margin:0;left:0;top:30px;z-index:2147483646;width:380px;position:static;border:1px #09f solid;border-left-width:0;}#diigolet-twitter input{vertical-align:middle;}.diigolet .twitterlogo{width:210px;height:49px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="https://assets3.twitter.com/images/twitter.png");}#diigolet-tagForward{background-color:white;width:460px;font-family:Arial,Helvetica,sans-serif;-webkit-border-radius:0;cursor:default;position:static;right:5px;top:75px;z-index:2147483646;border:1px solid rgba(0,0,0,0.25);box-shadow:0 1px 5px rgba(0,0,0,0.3);-webkit-user-select:none;background-clip:content-box;-webkit-animation:fadeinScale 200ms ease;}#diigolet-tagForward.show{-webkit-animation:fadeinScale 200ms ease;}#diigolet-tagForward.hide{-webkit-animation:fadeoutScale 200ms ease;}#diigolet-tagForward *{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;}#diigolet-tagForward-topBar{height:38px;vertical-align:middle;background-color:#f5f5f5;border-bottom:1px solid #ddd;}#diigolet-tagForward-topBar>span{line-height:38px;display:inline-block;margin-left:15px;color:#4b4b4b;font-size:16px;cursor:move;}#diigolet-tagForward-topBar .focus-research-tip{margin-left:3px;font-size:12px;display:none;}#diigolet-tagForward .tabContainer{text-align:center;margin:5px;}#diigolet-tagForward .tab{margin-right:8px;margin-left:8px;padding:0 8px 2px 8px;font-weight:bold;}#diigolet-tagForward .tabContainer a:link,#diigolet-tagForward .tabContainer a:visited{padding:4px;border:1px #fff solid;font-weight:bold;color:#06c;text-decoration:none;}#diigolet-tagForward .tabContainer a.active:link,#diigolet-tagForward .tabContainer a.active:visited{border:none;background-color:#09f;color:#fff;padding:5px;}#diigolet-tagForward .tabContainer a:hover,#diigolet-tagForward .tabContainer a:active{border:1px #09f solid;}#diigolet-tagForward div.tabContent{display:none;}#diigolet-tagForward div.tabContent.active{display:block;}#diigolet-tagForward-caption{text-align:center;line-height:30px;font-size:14px;font-weight:bold;}#diigolet-tagForward-remove{float:right;color:#f00;background:-webkit-linear-gradient(bottom,#ebebeb,#f5f5f5);margin-top:6px;margin-right:15px;cursor:pointer;height:24px;width:27px;border:1px solid #c4c4c4;border-radius:4px;box-shadow:0 1px 0 #fff;}#diigolet-tagForward-remove:active{background:-webkit-linear-gradient(top,#ebebeb,#f5f5f5);}#diigolet-tagForward-remove>span{float:left;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/remove.png");height:14px;width:11px;margin-top:5px;margin-left:8px;cursor:pointer;}#diigolet-tagForward-remove:hover>span{background-position:0 -14px;}#diigolet-Bookmark-Form{padding:20px 15px 0 15px;}#diigolet-Bookmark-Form input[type="text"],#diigolet-Bookmark-Form textarea{outline:none;border:none;background-color:white;-webkit-transition:height .1s ease-in-out;}#diigolet-Bookmark-Form input[type="text"]{line-height:20px;min-height:20px;}#diigolet-tagForward .diigo-hr{width:426px;border-top:1px #ccc solid;margin:0 auto;height:1px;overflow:hidden;}.diigolet .diigo-table{margin:10px 20px;}.diigolet .diigo-table td{padding:2px 0;}.diigolet .diigo-table th{color:#666;font-weight:bold;padding-right:5px;width:62px;text-align:left;font-size:12px!important;}.diigolet .diigolet-input{width:350px;padding:1px;font-size:12px!important;height:16px!important;padding-left:3px!important;line-height:16px!important;outline:none!important;}.diigolet .diigolet-input:focus{border:solid 1px #3996ed;-webkit-box-shadow:0 0 1px rgba(77,144,254,0.55);}#Diigo-Bookmark-Description,#Diigo-Forward-PS{border:1px solid #d7d7d7;background-color:white;-webkit-transition:border 400ms ease;min-height:56px;}#Diigo-Bookmark-Description.focus{border:1px solid #aaa;}#Diigo-Bookmark-Description-Input{width:413px;max-width:413px;font-family:Arial;height:45px;margin-left:6px;margin-top:3px;font-size:12px;padding:2px;}#Diigo-Bookmark-Url{border-left:1px solid #dcdcdc;border-right:1px solid #dcdcdc;background-color:white;position:relative;-webkit-transform:rotateX(-90deg);height:0;position:relative;}#Diigo-Bookmark-Url.fold{-webkit-animation:fold 400ms ease both;-webkit-animation-play-state:running;}#Diigo-Bookmark-Url.unfold{-webkit-animation:unfold 400ms ease both;-webkit-animation-play-state:running;border-bottom:1px solid #dcdcdc;}#Diigo-Bookmark-Url>div#url-arrow{height:6px;width:13px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/dp-arrow.png");position:absolute;left:11px;top:-6px;}#Diigo-Bookmark-Url-Input{margin-top:3px;width:412px;margin-left:5px;}#Diigo-Bookmark-Title{height:30px;border:1px solid #d7d7d7;background-color:white;-webkit-transition:border 400ms ease;position:relative;}.diigolet .diigo-alert-tip{background-color:rgba(255,0,0,0.8);position:absolute;left:117px;top:-29px;padding:4px 6px;display:block;font-size:12px;font-weight:bold;pointer-events:none;font-family:arial,sans-serif;color:white;display:none;line-height:16px;}.diigolet .diigo-alert-tip span{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/alert.png") -6px -4px no-repeat;text-indent:17px;display:inline-block;vertical-align:middle;}.diigolet .diigo-alert-tip .diigo-alert-tip-arrow{position:absolute;border:5px solid;border-top-color:transparent;border-right-color:transparent;border-bottom-color:rgba(255,0,0,0.8);border-left-color:transparent;top:24px;height:0;width:0;line-height:0;-webkit-transform:rotate(180deg);left:91px;}.diigolet #Diigo-Bookmark-Url .diigo-alert-tip{left:136px;}.diigolet #Diigo-Bookmark-Url .diigo-alert-tip-arrow{left:71px;}#Diigo-Bookmark-Title.focus{border:1px solid #aaa;}#Diigo-Bookmark-Title-Input{margin:4px 0 0 0;width:392px;border:none;outline:none;font-size:14px;}#Diigo-Bookmark-Title #link-icon{float:left;height:30px;width:30px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/URL.png") 4px 0 no-repeat;cursor:pointer;}#Diigo-Bookmark-Title #link-icon:hover{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/URL.png") 4px -30px no-repeat;}#Diigo-Bookmark-Title #link-icon.unfold{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/URL.png") 4px -30px no-repeat;}#Diigo-Bookmark-Options .diigo-option{font-size:12px;height:inherit;width:120px;display:inline-block;padding:13px 0 15px 0;color:#555;}.diigo-option:hover{background-position:0 -20px;}.diigo-option:active{background-position:0 -40px;}.diigo-option.active{background-position:0 -40px;}.diigo-option .op-checkbox,#Diigo-Bookmark-checkShareExisting .op-checkbox{height:13px;width:15px;display:inline-block;vertical-align:middle;position:relative;cursor:pointer;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/checkbox.png");}.diigo-option .op-label{margin-left:7px;text-indent:20px;display:inline-block;vertical-align:middle;cursor:pointer;}#Diigo-Bookmark-checkShareExisting{display:none;}#Diigo-Bookmark-checkShareExisting .op-label{margin-left:7px;text-indent:-6px;display:inline-block;vertical-align:middle;cursor:pointer;}#Diigo-Bookmark-Options .op-checkbox-container{display:inline;cursor:pointer;}#Diigo-Bookmark-uploadCache{margin-left:20px;}.diigolet .op-checkbox-container:hover>.op-checkbox{background-position:0 -13px;}.diigolet .op-checkbox-container.checked .op-checkbox{background-position:0 -26px;}#Diigo-Bookmark-Privacy .op-label{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/private.png");background-repeat:no-repeat;}#Diigo-Bookmark-Unread .op-label{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/op-readlater.png");background-repeat:no-repeat;}#Diigo-Bookmark-uploadCache .op-label{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/cache.png");background-repeat:no-repeat;}#Diigo-Bookmark-Url.invalid{border:1px solid #f00;margin-top:-1px;}#Diigo-Bookmark-Url.invalid div{background-position:0 -6px;}#Diigo-Bookmark-Title.invalid{border:1px solid #f00;}#Diigo-Bookmark-Tag-Wrapper{min-height:24px;border:1px solid #d7d7d7;background-color:white;margin-top:15px;position:relative;-webkit-transition:border 400ms ease;height:30px;}#Diigo-Bookmark-Tag-Wrapper.focus{border:1px solid #aaa;}#Diigo-Bookmark-Tag-Input{margin-top:4px;margin-left:2px;width:389px;}#Diigo-Bookmark-Tag{height:30px;}.diigolet #Diigo-Bookmark-Tag{box-shadow:none;}#Diigo-Bookmark-Tag-Wrapper.active{border:solid 1px #3996ed;-webkit-box-shadow:0 0 1px rgba(77,144,254,0.55);}#Diigo-Bookmark-Tag-Cloud{border:1px solid #d7d7d7;border-bottom-right-radius:3px;border-bottom-left-radius:3px;display:none;background-color:white;font-size:12px;margin-top:-1px;}#Diigo-Bookmark-Tag-Cloud>div:first-child{height:25px;width:100%;line-height:25px;font-weight:bold;border-bottom:1px solid #ccc;text-indent:2px;clear:both;}#Diigo-Bookmark-Tag-Cloud>div:first-child a{float:right;margin-right:3px;text-decoration:none;}#Diigo-Bookmark-Tag-Cloud>div:first-child a:hover{text-decoration:underline;}#Diigo-Bookmark-Tag-Cloud-Container{max-height:180px;overflow:auto;width:421px;padding:3px 5px 5px 0;}#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar{width:6px;}#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar-track-piece{background-color:transparent;}#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar-thumb:vertical{height:20px;background-color:#ccc;}#Diigo-Bookmark-Tag-Cloud-Container::-webkit-scrollbar-thumb:hover{background-color:#aaa;}#Diigo-Bookmark-Tag-Wrapper.opened+#Diigo-Bookmark-Tag-Cloud{visibility:visible;}#Diigo-Bookmark-Tag-Cloud ul li{display:inline-block;}#Diigo-Bookmark-Tag-Cloud .Diigo-Bookmark-Tag-item{margin-left:3px;text-decoration:none;color:#04c;line-height:normal;display:inline-block;line-height:140%;cursor:pointer;padding:0 2px;}#Diigo-Bookmark-checkShare{display:none;}#Diigo-Bookmark-checkShareExisting{margin-right:3px;}#Diigo-Bookmark-checkShare input[type="checkbox"]{width:14px;height:14px;margin:0;cursor:pointer;vertical-align:middle;background:#fff;border:1px solid #dcdcdc;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative!important;}#Diigo-Bookmark-checkShare input[type="checkbox"]:hover{border-color:#c6c6c6;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.1);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.1);}#Diigo-Bookmark-checkShare input[type="checkbox"]:active{border-color:#c6c6c6;background:#ebebeb;}#Diigo-Bookmark-Tag-Cloud .Diigo-Bookmark-Tag-item.selected{background-color:#09f;color:white;}#Diigo-Bookmark-Tag-Cloud>div:first-child{height:20px;width:100%;line-height:20px;font-weight:bold;border-bottom:1px solid #ccc;text-indent:2px;}#Diigo-Bookmark-Tag-Cloud .Diigo-Bookmark-Tag-item:hover{text-decoration:underline;}#Diigo-Bookmark-Tag-Eidt{float:right;margin-right:3px;}#Diigo-Bookmark-Tag-suggestion{margin-top:7px;}#diigolet-bm-tagListContainer-recommend{margin-top:3px;display:none;}#Diigo-Bookmark-Tag-suggestion .diigo-su-tag{line-height:26px;font-size:12px;min-height:26px;margin-top:5px;}#Diigo-Bookmark-Tag-suggestion .diigo-su-tag a{display:inline-block;text-decoration:none;color:#555;width:93px;}#Diigo-Bookmark-Tag-suggestion .loading{display:inline-block;height:10px;width:120px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/loading.gif");}#Diigo-Bookmark-Tag-suggestion .diigo-su-tag a:hover{text-decoration:underline;}#Diigo-Bookmark-Tag-dropdown{height:30px;width:28px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/dropdown.png");float:left;cursor:pointer;}#Diigo-Bookmark-Tag-dropdown:hover{background-position:0 -30px;}.diigo-table .diigo-invalid-input{display:none;height:16px;width:16px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/icons.png");background-position:-16px -80px;margin-left:4px;}#diigo-list-group{margin-top:17px;width:430px;height:24px;}#diigolet-Bookmark-Form #Diigo-outliner #diigo-list-addInput{width:309px;height:26px;border:1px solid #d7d7d7;-webkit-transition:border 400ms ease;padding:0 3px;}#Diigo-outliner{height:30px;margin-bottom:15px;}#Diigo-outliner>div{float:left;height:20px;font-size:12px;color:#04c;font-weight:bold;line-height:20px;}#diigo-list-group>div{float:left;height:20px;font-size:12px;color:#04c;width:200px;font-weight:bold;line-height:20px;}#Diigo-outliner #diigo-list-add-tip{border-radius:4px;padding:5px 14px 5px 14px;font-size:12px;text-shadow:0 1px 0 rgba(255,255,255,0.5);background-color:#f2dede;border:1px solid #eed3d7;color:#b94a48;font-weight:normal;width:399px;display:none;}#Diigo-outliner #diigo-list-add-tip a{float:right;margin:0 5px;color:b94a48;text-decoration:none;}#Diigo-outliner #diigo-list-add-tip a:hover{text-decoration:underline;}#Diigo-outliner #diigo-list-add{position:relative;display:none;}#diigo-list-add .diigo-alert-tip{left:7px;top:-29px;}#Diigo-outliner .diigo-alert-tip .diigo-alert-tip-arrow{left:43px;}#diigo-list-group #diigo-list-addInput{width:102px;height:26px;border:1px solid #d7d7d7;-webkit-transition:border 400ms ease;padding:0 3px;font-weight:normal;color:#000;border-radius:0;}#diigo-list-group #diigo-list-addInput:focus{border:1px solid #aaa;}#diigo-list-add>*{float:left;}#diigo-list-addBtn{height:26px;min-width:38px;background-image:-webkit-linear-gradient(top,#53aaf0,#118cef);border:1px solid #066ec1;color:#fff;border-radius:2px;line-height:26px;font-weight:normal;margin-left:6px;cursor:pointer;-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all;text-align:center;}#diigo-list-addBtn:not(.processing):hover{background-image:-webkit-linear-gradient(top,#45a2ee,#037bdb);}#diigo-list-addBtn:not(.processing):active{background-image:-webkit-linear-gradient(bottom,#53aaf0,#118cef);}#diigo-list-addBtn .label{margin:8px;cursor:pointer;-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all;}#diigo-list-addBtn .spinner{left:8px;margin-left:-16px;opacity:0;height:16px;width:16px;-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all;display:inline-block;position:relative;top:3px;visibility:hidden;}#diigo-list-addBtn.processing+a{display:none;}#diigo-list-addBtn.processing .spinner{opacity:1;margin-left:12px;left:-7px;visibility:visible;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/addlist-processing.gif");}#diigo-list-addCancel{color:#999;cursor:pointer;font-weight:normal;line-height:26px;margin-left:5px;font-size:12px;margin-top:2px;}#diigo-list-addCancel:hover{text-decoration:underline;}#diigo-list-group>div>select:hover{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/select-arrow-hover.png"),-webkit-linear-gradient(top,#fbfbfb,#f3f3f3);}#diigo-list-group>div>select.processing{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/loading5.gif"),-webkit-linear-gradient(top,#f5f5f5,#fff);}#diigo-list-group>div>select:active{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/select-arrow-hover.png"),-webkit-linear-gradient(top,#f5f5f5,#fff);}#diigolet-bm-tagListContainer-group{display:none;}#diigo-list-group>div>select,#Diigo-outliner>div>select{height:28px;width:430px;display:block;-webkit-appearance:none!important;border:1px solid #d7d7d7;background-position:right;background-repeat:no-repeat;color:#333;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/popup-image/select-arrow.png"),-webkit-linear-gradient(top,#fff,#f5f5f5);outline:none;cursor:pointer;font-size:12px;padding-right:22px;border-radius:0;font-weight:normal;box-sizing:border-box!important;}#Diigo-Bookmark-bottom{height:49px;padding-top:24px;}#Diigo-Bookmark-bottom>div:first-child{float:left;margin-top:3px;margin-left:15px;}#diigolet-dlgBm-btnSave{display:inline-block;height:28px;width:82px;line-height:28px;background-image:-webkit-linear-gradient(top,#53aaf0,#118cef);float:right;cursor:pointer;margin-right:15px;text-align:center;color:white;border-radius:2px;border:1px solid #066ec1;font-size:14px;}#diigolet-dlgBm-btnSave:hover{background-image:-webkit-linear-gradient(top,#45a2ee,#037bdb);}#diigolet-dlgBm-btnSave:active{background-image:-webkit-linear-gradient(bottom,#53aaf0,#118cef);}#diigolet-dlgBm-btnCancel{display:inline-block;float:right;font-size:14px;color:#999;height:12px;cursor:pointer;margin-top:8px;margin-right:19px;}#diigolet-dlgBm-btnCancel:hover{text-decoration:underline;}.diigolet .diigolet-submit{width:140px;height:25px;text-align:center;}#diigolet-txtPermalink{background-color:#eee;padding:3px;font-size:13px;}#diigolet-cross-promotion{font-family:arial,helvetica,sans-serif;font-size:12px;padding:10px;}#diigolet-cross-promotion a{background:whiteSmoke;border:1px solid #ccc;color:#06c;display:block;padding:3px 10px;text-align:center;text-decoration:none;-webkit-box-shadow:rgba(255,255,255,0.6) 0 1px 0;-webkit-border-radius:10px;-webkit-transition:all .25s linear;}#diigolet-cross-promotion a:hover{background:white;text-decoration:none;color:#04c;}.diigoletContexMenu{font:12px arial,helvetica,clean,sans-serif;z-index:2147483645;}#diigolet-csm #diigolet-csm-research-mode{width:18px;height:18px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/focus-research-csm.png");position:absolute;top:-8px;left:-9px;z-index:1;display:none;}#diigolet-csm.diigo-researchMode #diigolet-csm-research-mode{display:block;}#diigolet-csm .csm-action{display:block;height:22px!important;width:27px!important;border:1px solid rgba(0,0,0,0.15);border-radius:1px 0 0 1px;opacity:.9;z-index:100000;float:left;margin:0!important;}#diigolet-csm #diigolet-csm-highlight{background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/highlight-csm.png),-webkit-linear-gradient(#fff,#f5f5f5);}#diigolet-csm #diigolet-csm-highlight:active{background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/highlight-csm.png),-webkit-linear-gradient(#f2f2f2,#fff);}#diigolet-csm #diigolet-csm-highlightAndComment{border-width:1px 1px 1px 0;border-style:solid;border-color:rgba(0,0,0,0.15);border-radius:1px 0 0 1px;background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/stickynote-csm.png),-webkit-linear-gradient(#fff,#f5f5f5);}#diigolet-csm #diigolet-csm-highlightAndComment:active{background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/stickynote-csm.png),-webkit-linear-gradient(#f2f2f2,#fff);}#diigolet-csm #diigolet-csm-search{border-width:1px 1px 1px 0;border-style:solid;border-color:rgba(0,0,0,0.15);border-radius:1px 0 0 1px;background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/search-csm.png),-webkit-linear-gradient(#fff,#f5f5f5);}#diigolet-csm #diigolet-csm-search:active{background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/search-csm.png),-webkit-linear-gradient(#f2f2f2,#fff);}#diigolet-csm.yellow #diigolet-csm-highlight{background-position:0 0;}#diigolet-csm.blue #diigolet-csm-highlight{background-position:0 -22px;}#diigolet-csm.green #diigolet-csm-highlight{background-position:0 -44px;}#diigolet-csm.pink #diigolet-csm-highlight{background-position:0 -66px;}#diigolet-csm.yellow #diigolet-csm-highlightAndComment{background-position:0 0;}#diigolet-csm.blue #diigolet-csm-highlightAndComment{background-position:0 -22px;}#diigolet-csm.green #diigolet-csm-highlightAndComment{background-position:0 -44px;}#diigolet-csm.pink #diigolet-csm-highlightAndComment{background-position:0 -66px;}#diigolet-csm .csm-action:not(#diigolet-csm-search).editing{opacity:1!important;}#diigolet-csm a:visited,#diigolet-csm a:link{padding:0!important;}#diigolet-csm{z-index:100000;height:22px!important;flex-direction:row;}#diigolet-csm>div{float:left;position:relative;}#diigolet-csm a:hover{opacity:1!important;}#diigolet-csm #diigolet-csm-dropdown:hover{background-position:0 -44px;}#diigolet-csm #diigolet-csm-highlight:hover+a#diigolet-csm-dropdown{background-position:0 -22px;}#diigolet-csm #diigolet-csm-dropdown:active{background-position:0 -66px;}#diigolet-csm .diigolet-csm-color{position:absolute;top:23px;left:1px;background-color:white;-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.35);line-height:13px;overflow:hidden;height:0;visibility:visible!important;z-index:-1;display:block!important;}#diigolet-csm-highlightAndComment-wrapper .diigolet-csm-color{left:0;}#diigolet-csm .diigolet-csm-color.hidden{height:0;}#diigolet-csm .diigolet-csm-color.small{height:0;width:27px;display:block;}#diigolet-csm .diigolet-csm-coloritem{float:left;display:block;cursor:pointer;padding:0;margin:0;}.diigolet-csm-color.small .diigolet-csm-coloritem{height:7px;width:10px;}#diigolet-csm .diigolet-csm-coloritem.yellow{background-color:#fc6;border:1px solid #fc6;margin-right:1px;margin-bottom:1px;margin-left:1px;margin-top:1px;}#diigolet-csm .diigolet-csm-coloritem.blue{background-color:#7ccce5;border:1px solid #7ccce5;margin-bottom:1px;margin-top:1px;}#diigolet-csm .diigolet-csm-coloritem.green{background-color:#b4db66;border:1px solid #b4db66;margin-right:1px;margin-left:1px;margin-bottom:1px;}#diigolet-csm .diigolet-csm-coloritem.pink{background-color:#f98baf;border:1px solid #f98baf;margin-right:0!important;margin-bottom:1px;}#diigolet-csm .diigolet-csm-color .diigolet-csm-coloritem:hover{border-color:#36c;}#diigolet-annMenu{height:26px;border-top:2px solid #43b4ea;border-radius:2px;background-color:#fff;padding:1px;position:absolute;box-shadow:-1px 0 0 rgba(0,0,0,0.1),1px 0 0 rgba(0,0,0,0.1),0px 1px 1px rgba(0,0,0,0.2);-webkit-user-select:none;-webkit-animation:fadeIn 130ms ease-in;box-sizing:content-box!important;}#diigolet-annMenu .diigolet-annMenu-item{height:20px;width:20px;float:left;padding:1px;position:relative;cursor:pointer;-webkit-transition:background-color 200ms ease;border-radius:3px;padding:3px;box-sizing:content-box!important;}#diigolet-annMenu .diigolet-annMenu-item *{box-sizing:content-box!important;}#diigolet-annMenu .diigolet-annMenu-item>b{cursor:pointer;}#diigolet-annMenu .diigolet-annMenu-item:hover{background-color:#d8f2ff;}#diigolet-annMenu #diigolet-annMenu-currentColor{height:12px;width:12px;border:1px solid #289fe4;margin:3px 0 0 2px;}#diigolet-annMenu #diigolet-annMenu-currentColor>b{height:10px;width:10px;border:1px solid #fff;display:block;background-color:#fc6;cursor:pointer;}#diigolet-annMenu #diigolet-annMenu-currentColor.yellow>b{background-color:#fc6;}#diigolet-annMenu #diigolet-annMenu-currentColor.blue>b{background-color:#7ccce5;}#diigolet-annMenu #diigolet-annMenu-currentColor.green>b{background-color:#b4db66;}#diigolet-annMenu #diigolet-annMenu-currentColor.pink>b{background-color:#f98baf;}#diigolet-annMenu .diigolet-annMenu-item>b{display:block;height:20px;width:20px;}#diigolet-annMenu-add>b{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/ann-add.png");}#diigolet-annMenu-share>b{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/ann-share.png");}#diigolet-annMenu-del>b{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/ann-del.png");}#diigolet-annMenu-more>b{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/ann-more.png");}#diigolet-annMenu-colorPicker{height:62px;width:14px;border:1px solid #96bbd5;padding:3px 2px;background-color:#fff;position:relative;top:3px;left:-1px;display:none;-webkit-animation:diigo-dropdown .15s ease-in 1;flex-direction:column;}#diigolet-annMenu-colorPicker .ann-colorItem{height:12px;width:12px;border-width:1px;border-style:solid;display:block;margin-bottom:2px;}#diigolet-annMenu-colorPicker .ann-colorItem:hover{border-color:#06f!important;}#diigolet-annMenu-colorPicker .ann-colorItem.colorchecked b{width:4px;height:4px;background:#666;margin-top:4px;margin-left:4px;display:block;}.ann-colorItem#diigolet-context-yellow{border-color:#e9a110;background-color:#fc6;}.ann-colorItem#diigolet-context-blue{border-color:#33a5c9;background-color:#7ccce5;}.ann-colorItem#diigolet-context-green{border-color:#9ac83b;background-color:#b4db66;}.ann-colorItem#diigolet-context-pink{border-color:#da376c;background-color:#f98baf;}#diigolet-annMenu-arrow{position:absolute;top:100%;left:33px;height:8px;width:14px;background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/ann-arrow.png);}#diigolet-annMenu.onlyMy #diigolet-annMenu-arrow{left:59px;}#diigolet-annMenu-tip{padding-left:4px;border-top:1px solid #eee;margin-top:1px;color:#999;}#diigolet-annMenu-moreThings{display:none;position:absolute;top:110%;left:77%;min-width:236px;max-width:236px;padding:3px;border:1px solid #94bcd6;box-shadow:0 1px 2px rgba(0,0,0,0.15);background-color:#fff;border-radius:3px;font:12px/18px arial;color:#333;}.diigoletContexMenu a:link,.diigoletContexMenu a:visited{display:block;padding:2px 3px;text-decoration:none;color:#000;cursor:default;white-space:nowrap;}.diigoletContexMenu a:hover:not(.colorItem),.diigoletContexMenu a:active{color:#fff;background:#09f;}.diigoletContexMenu div.sep{line-height:0;border-top:1px solid #aaa;margin:3px 0;}*html .diigoletContexMenu ._selection a{width:45px;}*html .diigoletContexMenu ._highlight a{width:90px;}.diigolet.diigoletFN{z-index:2147483644;width:300px;-webkit-user-select:none;}.diigolet.diigoletFN *{flex-direction:row;}#diigolet-dlg-sticky.groupNew #FN-post-form{display:block;}#diigolet-dlg-sticky.groupNew #FN-group-content-nav{display:none;}#diigolet-dlg-sticky.groupNew #FN-group-content{display:none;}.diigolet.diigoletFN.onlyPrivate #diigolet-dlg-sticky-switcher{margin-left:29px;}.diigolet.diigoletFN.onlyGroup #diigolet-dlg-sticky-switcher{margin-left:29px;}#diigolet-dlg-sticky-top{height:30px;border-radius:2px 2px 0 0;position:relative;z-index:2;-webkit-transition:background-color 200ms ease;padding-right:5px;display:block;}#diigolet-dlg-sticky.yellow #diigolet-dlg-sticky-top{background:#f1c40f;}#diigolet-dlg-sticky.blue #diigolet-dlg-sticky-top{background:#5cc7ff;}#diigolet-dlg-sticky.green #diigolet-dlg-sticky-top{background:#47bf87;}#diigolet-dlg-sticky.pink #diigolet-dlg-sticky-top{background:#fe97bc;}#diigolet-dlg-sticky-content{background-color:#fcfbf7;border-radius:0 0 2px 2px;border-width:0 1px 1px 1px;border-color:rgba(0,0,0,0.08);border-style:solid;box-shadow:0 1px 3px rgba(0,0,0,0.08);position:relative;}#diigolet-dlg-sticky-logo{float:left;height:20px;width:20px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/FN-logo.png") 50% 50% no-repeat;margin:4px 5px 0 4px;}#diigolet-dlg-sticky-top>span{vertical-align:middle;line-height:28px;font-size:14px;color:#bb6602;}#diigolet-dlg-sticky-close{float:right;height:20px;width:20px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/FN-close.png") 50% 50% no-repeat;margin:5px 4px 0 0;cursor:pointer;display:none;}#diigolet-dlg-sticky-color{position:relative;float:right;margin:9px 4px 0 0;cursor:pointer;z-index:2;}#diigolet-dlg-sticky-addTab{height:12px;width:21px;margin:9px 7px 0 0;display:none;float:right;cursor:pointer;}#diigolet-dlg-sticky.onlyPrivate #diigolet-dlg-sticky-addTab{display:block;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/add-tab.png") 0 0 no-repeat;}#diigolet-dlg-sticky.onlyGroup #diigolet-dlg-sticky-addTab{display:block;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/add-tab.png") 0 -12px no-repeat;}#diigolet-dlg-sticky-currentColor{height:12px;width:12px;border:1px solid #fff;cursor:pointer;border-radius:1px;}#diigolet-dlg-sticky-colorPicker{height:62px;width:13px;padding:3px 3px 3px 2px;background-color:#fff;position:absolute;top:122%;display:none;-webkit-animation:diigo-dropdown .15s ease-in 1;box-shadow:0 1px 1px rgba(0,0,0,0.25);z-index:3;flex-direction:column;}#diigolet-dlg-sticky-colorPicker .dlg-colorItem{height:12px;width:12px;border-width:1px;border-style:solid;display:block;margin-bottom:2px;margin-left:-1px;}#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="yellow"]{border-color:#e9a110;background-color:#fc6;}#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="blue"]{border-color:#33a5c9;background-color:#7ccce5;}#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="green"]{border-color:#9ac83b;background-color:#b4db66;}#diigolet-dlg-sticky-colorPicker .dlg-colorItem[color="pink"]{border-color:#da376c;background-color:#f98baf;}#diigolet-dlg-sticky-colorPicker .dlg-colorItem.colorchecked b{width:4px;height:4px;background:#666;margin-top:3px;margin-left:3px;display:block;}#diigolet-dlg-sticky-colorPicker .dlg-colorItem:hover{border-color:#06f!important;}.FN-content-wrapper{display:none;opacity:0;-webkit-animation:fadeIn .2s ease-out;}@-webkit-keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}.FN-content-wrapper.private{min-height:120px;}#diigolet-dlg-sticky-content .FN-content-wrapper.private textarea{margin:6px 6px 0 6px;min-height:104px;width:282px;background-color:#fcfbf7!important;border:none;outline:none;overflow-y:visible;resize:none!important;font-size:12px;line-height:18px;word-wrap:break-word;}#diigolet-dlg-sticky-content #FN-content-footer{text-align:right;margin-top:-5px;}#diigolet-dlg-sticky-content #FN-content-footer #editing{height:30px;border-top:1px solid #ecece7;display:none;}#diigolet-dlg-sticky-content #FN-content-footer #editing a{float:right;}#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-saveBtn{height:20px;width:50px;border-radius:2px;border:1px solid #85a0a6;color:#85a0a6;font-size:12px;text-align:center;line-height:20px;margin:4px 4px 4px 10px;}#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-saveBtn:active{background:#85a0a6;color:#fff;}#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-cancelBtn{text-decoration:none;color:#a3a39e;font-size:12px;line-height:30px;}#diigolet-dlg-sticky-content #FN-content-footer #editing #FN-private-cancelBtn:hover{text-decoration:underline;}#diigolet-dlg-sticky-content #FN-content-footer #editDone{height:22px;}#FN-private-saveBtn.notify{-webkit-animation:borderNotice 600ms ease both;-webkit-animation-iteration-count:2;}#FN-content-footer #FN-private-datetime{font-family:Arial,Helvetica;font-size:12px;color:#999;line-height:22px;margin-right:10px;float:right;}#FN-content-footer #FN-private-delete{display:none;float:left;vertical-align:middle;line-height:22px;margin-left:8px;color:#999;cursor:pointer;-webkit-transition:color 200ms ease;}#FN-content-footer #FN-private-delete b{display:block;float:left;height:12px;width:11px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/private-del.png");background-repeat:no-repeat;margin:5px 3px 0 0;cursor:pointer;}#FN-content-footer #FN-private-delete:hover{color:red;}#FN-content-footer #FN-private-delete:hover b{background-position:0 -12px;}.FN-content-wrapper.group{min-height:50px;}.FN-radio{display:none;}#diigolet-dlg-sticky-switcher{position:absolute;left:82px;top:-25px;z-index:2;}#diigolet-dlg-sticky-switcher.onlyOneTab span{margin-left:28px;}#diigolet-dlg-sticky-switcher .FN-switcher{float:left;height:18px;text-align:center;font-size:12px;cursor:pointer;padding:3px 8px;color:#fff;line-height:14px;-webkit-transition:background-color 200ms ease;border-radius:2px;}#diigolet-dlg-sticky-switcher .FN-switcher b{height:12px;width:13px;float:left;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/tab-logo.png");background-repeat:no-repeat;margin:1px 1px 0 0;cursor:pointer;}#diigolet-dlg-sticky-content.private #FN-switcher-private{background-color:rgba(0,0,0,0.12);}#diigolet-dlg-sticky-content #FN-switcher-private b{background-position:0 0;}#diigolet-dlg-sticky-content #FN-switcher-group b{background-position:0 -12px;}#diigolet-dlg-sticky-content.group #FN-switcher-group{background-color:rgba(0,0,0,0.12);}#diigolet-dlg-sticky.onlyPrivate #FN-switcher-group{display:none;}#diigolet-dlg-sticky.onlyGroup #FN-switcher-private{display:none;}#diigolet-dlg-sticky-content.private .FN-content-wrapper.private{opacity:1;display:block;}#diigolet-dlg-sticky-content.group .FN-content-wrapper.group{opacity:1;-webkit-transition:opacity ease-out .2s .1s;display:block;}#FN-post-form{padding:10px;display:none;}#FN-post-form>div:last-child{margin-top:6px;}#FN-post-form textarea{width:272px;max-width:272px;height:54px;outline:none;line-height:18px;border:1px solid #ddd;}#FN-post-form textarea.notify,#FN-post-form select.notify{-webkit-animation:borderNotice 600ms ease both;-webkit-animation-iteration-count:2;}#FN-post-form button{float:right;margin:0;height:24px;width:50px;text-align:center;background-image:-webkit-linear-gradient(top,#fff,#f5f5f5);border:1px solid #ccc;font-size:14px;border-radius:2px;cursor:pointer;-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all,10ms ease background-color;overflow:hidden;position:relative;}#FN-post-form .button-label{-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all;position:relative;cursor:pointer;z-index:3;}#FN-post-form .button-spinner{position:absolute;z-index:2;display:inline-block;width:18px;height:18px;opacity:0;-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all;left:31px;margin-left:-16px;margin-top:-10px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/uploading.gif");}#FN-post-form textarea:disabled{color:#999;background-color:#eee;}#FN-post-form button:disabled{background-color:#ddd;background-image:none;cursor:default;}#FN-post-form button:disabled .button-label{opacity:0;top:16px;}#FN-post-form button:disabled .button-spinner{opacity:1;top:12px;}#FN-post-form a{float:right;font-size:12px;text-decoration:none;color:#aaa;margin:5px 12px 5px 5px;}#FN-post-form a:hover{text-decoration:underline;}#FN-post-form.notEdit #FN-group-share{margin-left:67px;}#FN-post-form.notEdit div:first-child{display:none;}#FN-post-form.notEdit button,#FN-post-form.notEdit a{display:none;}#FN-group-content-nav{width:100%;height:25px;border-bottom:1px solid #eee;color:#333;font-size:12px;text-align:center;position:relative;z-index:1;}#FN-current-group{line-height:25px;padding:2px 10px;cursor:pointer;}#FN-current-group b{height:0;width:0;border-width:5px;border-style:solid;border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;border-top-color:#666;display:inline-block;margin:2px 2px 0 6px;vertical-align:middle;cursor:pointer;}#FN-current-group span{cursor:pointer;}#FN-group-menu{margin:0;position:absolute;width:196px;top:90%;left:50px;background-color:#fff;border:1px solid rgba(0,0,0,0.12);text-align:left;box-shadow:0 1px 2px rgba(0,0,0,0.1);-webkit-animation:diigo-dropdown .15s ease-in 1;padding:2px;display:none;}#FN-group-content-nav li{list-style:none;height:20px;width:100%;line-height:20px;font-size:12px;color:#333;cursor:pointer;text-indent:9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}#FN-group-share-new-ul{margin-top:2px;padding-top:2px;border-top:1px solid #ccc;}#FN-group-content-nav li:hover{background-color:#aaa;color:#fff;}#FN-group-content-container{min-height:80px;max-height:200px;overflow-y:auto;padding:0 10px 10px 10px;margin-top:-1px;}#FN-group-content-container .FN-group-comment-item{border-top:1px solid #eee;padding:5px 0;position:relative;}#FN-group-content-container .FN-group-comment-item-tbar{position:relative;font-size:12px;}#FN-group-content-container .FN-group-comment-item-content{font-size:12px;line-height:18px;}#FN-group-content-container .FN-group-comment-item-tbar .FN-group-comment-name{text-decoration:none;margin-right:3px;color:#0072d6;float:left;}#FN-group-content-container .FN-group-comment-item-time{font-size:12px;color:#777;}#FN-group-content-postform{padding:10px;position:relative;}#FN-group-content-postform textarea{height:18px;width:204px;max-width:208px;border:1px solid #d7d7d7;outline:none;line-height:18px;vertical-align:bottom;-webkit-transition:background-color .1s ease-in-out;}#FN-group-content-postform.active textarea{height:36px;border-color:#aaa;}#FN-group-content-postform textarea.notify{-webkit-animation:borderNotice 600ms ease both;-webkit-animation-iteration-count:2;}#FN-group-content-postform textarea:disabled{color:#999;background-color:#eee;}#FN-group-content-postform .post-action{vertical-align:bottom;display:inline-block;width:50px;padding:0 0 0 14px;}#FN-group-content-postform .post-action a{position:relative;left:4px;top:2px;color:#aaa;display:none;}#FN-group-content-postform.active .post-action a{display:block;}#FN-group-content-postform .post-action a:hover{text-decoration:underline;}#FN-group-content-postform button{margin:0;height:24px;width:50px;text-align:center;background-image:-webkit-linear-gradient(top,#fff,#f5f5f5);border:1px solid #ccc;font-size:14px;cursor:pointer;-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all,10ms ease background-color;overflow:hidden;position:relative;}#FN-group-content-postform .button-label{-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all;position:relative;cursor:pointer;z-index:3;}#FN-group-content-postform .button-spinner{position:absolute;z-index:2;display:inline-block;width:18px;height:18px;opacity:0;-webkit-transition:.3s cubic-bezier(0.175,0.885,0.32,1.275) all;left:31px;margin-left:-16px;margin-top:-10px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/uploading.gif");}#FN-group-content-postform button:disabled{background-color:#ddd;background-image:none;cursor:default;}#FN-group-content-postform button:disabled .button-label{opacity:0;top:16px;}#FN-group-content-postform button:disabled .button-spinner{opacity:1;top:12px;}#FN-group-content-container .FN-group-comment-item-delete{text-decoration:none;font-size:12px;color:#999;cursor:pointer;visibility:hidden;float:right;}#FN-group-content-container .FN-group-comment-item:hover .FN-group-comment-item-delete{visibility:visible;}#FN-group-content-container .FN-group-comment-item-delete:hover{color:red;}#diigolet-dlg-sticky-content ::-webkit-scrollbar{width:8px;}#diigolet-dlg-sticky-content ::-webkit-scrollbar-track-piece{background-color:transparent;}#diigolet-dlg-sticky-content ::-webkit-scrollbar-thumb:vertical{height:20px;background-color:#ccc;}#diigolet-dlg-sticky-content ::-webkit-scrollbar-thumb:hover{background-color:#aaa;}#diigolet-dlg-sticky-content select{-webkit-appearance:none;width:150px;height:24px;border:1px solid #ccc;background-position:right;background-repeat:no-repeat;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/FN-select-arrow.png"),-webkit-linear-gradient(top,#fff,#fafafa);outline:none;cursor:pointer;font-size:12px;border-radius:2px;padding-right:14px;}.diigolet.diigoletFN a:link,.diigolet.diigoletFN a:visited{color:#06c;}.diigolet.diigoletFN a:hover,.diigolet.diigoletFN a:active{color:#333;text-decoration:none;}.diigolet .diigoletFNL{width:23px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_l.png) no-repeat left top;}.diigolet .diigoletFNT{height:32px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_t.png) no-repeat right top;cursor:move!important;}.diigolet .diigoletFNR{width:16px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_r.png) no-repeat left bottom;overflow:hidden;vertical-align:bottom;}.diigolet .diigoletFNB{height:34px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_b.png) no-repeat left bottom;}.diigolet .diigoletFNTH{vertical-align:top;width:12px;}.diigolet .diigoletFNTH div{width:12px;height:12px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_h_rt.gif) no-repeat right top;position:relative;top:5px;left:-22px;overflow:hidden;cursor:ne-resize!important;}.diigolet .diigoletFNB{vertical-align:top;overflow:hidden;}.diigolet .diigoletFNPosN .diigoletFNXjjR,.diigolet .diigoletFNPosN .diigoletFNXjjT,.diigolet .diigoletFNPosN .diigoletFNXjjB,.diigolet .diigoletFNPosN .diigoletFNTH div,.diigolet .diigoletFNPosN .diigoletFNB div{display:none;}.diigolet .diigoletFNT h1{font:12px/19px Arial,Helvetica,sans-serif;font-weight:bold;color:#666;margin:4px 0 0 5px;padding:0;}.diigolet .diigoletFNT div.menu{margin:3px 21px 10px 0;background-color:#fff9a4;border-right:1px solid #f2e984;border-left:1px solid #c9b822;}.diigolet .diigoletFNT div.menu a{display:block;line-height:19px;float:left;color:#666;padding:0 5px;border-right:1px solid #c9b822;text-decoration:none;}.diigolet .diigoletFNT div.menu a:hover,.diigolet .diigoletFNT div.menu a:active{background-color:#fff587;color:#333;}.diigolet .diigoletFNT div.menu a.diigoletFNOpt{background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_downdot.gif) no-repeat right top;padding-right:14px;}.diigolet .diigoletFNT{font:12px/32px Arial,Helvetica,sans-serif;}.diigolet .diigoletFNContent,.diigolet .diigoletFNComment{background-color:#fff89f;color:#666;font-family:Arial,Helvetica,sans-serif;font-size:11px;overflow:auto;width:355px;zoom:1;border-bottom:1px solid #e0db9d;}.diigolet .diigoletFNContent .diigoletFNAuthorP{font-size:10px;font-weight:normal;color:#666;margin:0 11px 5px 0;padding:2px 5px;line-height:100%;}.diigolet .diigoletFNContent .diigoletFNAuthorP .diigoletFNAuthor{border-bottom:1px dotted #ccc;color:#06c;}.diigolet .diigoletFNContent .diigoletFNAuthorP .diigoletFNAuthor:hover,.diigoletFNContent .diigoletFNAuthorP .diigoletFNAuthor:active{border-bottom:1px solid #ccc;color:#333;}.diigolet .diigoletFNContent .diigoletFNAuthorP a{color:#999;}.diigolet .diigoletFNContent .diigoletFNAuthorP a:hover,.diigoletFNContent .diigoletFNAuthorP a:active{color:#666;}.diigolet.diigoletFN blockquote{display:inline-block;}.diigolet .diigoletFNComment select,.diigolet .diigoletFNComment input,.diigolet .diigoletFNComment textarea{font:11px/15px Verdana,Arial,Helvetica,sans-serif;max-width:345px;}.diigolet .diigoletFNComment p{margin:5px 0;}.diigolet .diigoletFNTDiv{height:32px;overflow:hidden;}.diigolet.diigoletFN .menu{float:right;height:19px;overflow:hidden;}.diigolet .labelList label{margin-right:2px;background-color:#eee;color:#666;white-space:nowrap;font-weight:normal;font-size:9px;}.diigolet .labelList span{padding:0 2px;}.diigolet .labelList a{padding:0 2px;background-color:#ffe76a;}.diigolet .labelList a:hover{color:#fef5c7;text-decoration:none;}.diigolet .labelList a.del{border:none;padding-right:2px;font-weight:normal;}.diigolet a.del{cursor:pointer;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv3.gif") no-repeat left -343px;}.diigolet a.del:hover{filter:alpha(opacity=100);-moz-opacity:1;background-position:1px -342px;text-decoration:none;}.diigolet ul.diigoletFNDropdown{position:absolute;display:none;left:10px;background-color:#fff89f;border:1px solid #c9b822;z-index:2147483647;}.diigolet ul.diigoletFNDropdown li{padding-left:25px;}.diigolet ul.diigoletFNDropdown a:link,.diigolet ul.diigoletFNDropdown a:visited{color:#666;display:block;width:85px;font:11px Arial,Helvetica,sans-serif;}.diigolet ul.diigoletFNDropdown a:hover,.diigolet ul.diigoletFNDropdown a:active{background-color:#fff567;color:#333;}.diigolet.diigoletFNIEPatch .diigoletFNL{background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_l.gif) no-repeat left top;}.diigolet.diigoletFNIEPatch .diigoletFNT{background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_t.gif) no-repeat right top;}.diigolet.diigoletFNIEPatch .diigoletFNR{background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_r.gif) no-repeat left bottom;}.diigolet.diigoletFNIEPatch .diigoletFNB{background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_b.gif) no-repeat left bottom;}.diigolet.diigoletFNIEPatch .diigoletFNT{height:23px;}.diigolet.diigoletFNIEPatch .diigoletFNTDiv{height:23px;}.diigoletFN.editing .diigoletFNComment{display:block;}.personalText{color:#555!important;font-size:10px!important;display:inline-block;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;width:343px!important;margin-top:4px!important;}.IconFeild{float:left!important;margin-left:8px!important;margin-top:5px!important;}.IconFeild:hover .editIcon{background-position:right!important;}.multipalCol{padding-top:0!important;}.singleCol{padding-top:7px!important;}.myCommentSpan{margin-left:35px!important;}.notMyCommentSpan{margin-left:15px!important;}.footText{line-height:1.5;width:343px!important;}div.floatNote{position:absolute!important;width:34px;height:34px;text-align:center;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_icon.png")!important;background-repeat:no-repeat;z-index:2147483643;}div.floatNote.private.yellow{background-position:0 0;}div.floatNote.private.blue{background-position:0 -68px;}div.floatNote.private.green{background-position:0 -136px;}div.floatNote.private.pink{background-position:0 -204px;}div.floatNote.group.yellow{background-position:0 -34px;}div.floatNote.group.blue{background-position:0 -102px;}div.floatNote.group.green{background-position:0 -170px;}div.floatNote.group.pink{background-position:0 -238px;}div.floatNote.diigoshow{-webkit-animation:bounceIn 400ms ease both;-webkit-animation-play-state:running;}div.floatNote.diigoadd{-webkit-animation:flipInY 600ms ease both;-webkit-animation-play-state:running;}div.floatNote span{position:absolute;left:-4px;top:-3px;display:block;border-radius:15px;background-color:#666;padding:2px 3px;border:1px solid #fff;height:8px;font-size:11px;color:#fff;line-height:8px;}html div.floatNote{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_icon.png");overflow:hidden;background:none;overflow:visible;}em.diigoHighlight{text-align:inherit;text-decoration:inherit;line-height:inherit;font:inherit;color:inherit;display:inline;position:relative;zoom:1;margin:0;padding:0;}em.diigoHighlight.hover{cursor:move;}em.diigoHighlight.hover.yellow{background-color:#f5f548;}em.diigoHighlight.hover.blue{background-color:#84b9ef;}em.diigoHighlight.hover.green{background-color:#a0de60;}em.diigoHighlight.hover.pink{background-color:#f9b0b0;}em.diigoHighlight.diigoHighlightcommented{margin-right:25px;}em.diigoHighlight.mouseOvered{background-color:#ffc62a!important;}em.diigoHighlight.yellow{background-color:#ff9;}img.diigoHighlight.yellow{cursor:pointer;outline:2px solid #ff9!important;}em.diigoHighlight.blue{background-color:#abd5ff;}img.diigoHighlight.blue{cursor:pointer;outline:2px solid #abd5ff!important;}em.diigoHighlight.green{background-color:#b2e57e;}img.diigoHighlight.green{cursor:pointer;outline:2px solid #b2e57e!important;}em.diigoHighlight.pink{background-color:#fcc;}img.diigoHighlight.pink{cursor:pointer;outline:2px solid #fcc!important;}img.diigoHighlight.mouseOvered{cursor:pointer;outline:2px solid #ffc62a!important;}.diigolet .diigolet-closeBtn{position:absolute;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/close1.gif);width:14px;height:14px;top:2px;right:2px;cursor:pointer!important;}.ac_results{border:1px solid #ddd;background:#fff none repeat scroll 0;cursor:pointer!important;font-size:11px!important;left:0;position:absolute;width:392px;z-index:2147483647;border-radius:1px;}.ac_results ul{margin:0;padding:0;}.ac_results li{list-style-image:none;list-style-position:outside;list-style-type:none;padding:2px 5px;border-radius:1px;}.ac_results a{width:100%;}.ac_results li.over{color:white;background:#09f none repeat scroll 0;}#gtooltip{background-color:#2a2a2a;border:1px solid #fff;color:#fff;display:block;font-size:12px!important;font-weight:bold!important;opacity:0;padding:4px 6px!important;pointer-events:none;position:absolute!important;-webkit-transition:visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;-moz-transition:visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;-o-transition:visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;transition:visibility .13s,opacity .13s ease-out,left 0 linear .13s,top 0 linear .13s;visibility:hidden;font-family:arial,sans-serif!important;z-index:2147483647;top:-100px;left:-100px;line-height:15px!important;}#gtooltip.show{visibility:visible;opacity:1;-webkit-transition:visibility 0,opacity .13s ease-in;}#gtooltip #gtooltip-arrow{position:absolute!important;border:5px solid!important;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:#2a2a2a!important;border-left-color:transparent!important;height:0!important;width:0!important;line-height:0!important;}#gtooltip #gtooltip-content{white-space:nowrap!important;}.diigo-scrollmarker{height:10px;width:10px;cursor:pointer;overflow:hidden;font-size:12px;z-index:1000000;}.diigo-scrollmarker .inner{height:0;width:0;border-width:5px;border-style:solid;position:relative;right:-4px;}.diigo-scrollmarker.yellow .inner{border-color:transparent transparent transparent #ffb000;}.diigo-scrollmarker.blue .inner{border-color:transparent transparent transparent #0087f7;}.diigo-scrollmarker.green .inner{border-color:transparent transparent transparent #00a256;}.diigo-scrollmarker.pink .inner{border-color:transparent transparent transparent #f39;}#diigolet-highlight-share{background-color:#fcfbf7;width:402px;font-family:Arial,Helvetica,sans-serif;-webkit-border-radius:0;cursor:default;position:absolute;z-index:2147483646;box-shadow:0 1px 3px rgba(0,0,0,0.08);background-clip:content-box;visibility:hidden;opacity:0;border-radius:2px;display:block;}#diigolet-highlight-share.show{opacity:1;visibility:visible;}#diigolet-highlight-share-top{height:30px;vertical-align:middle;background-color:#39baf6;line-height:30px;padding:0 10px;font-size:14px;color:white;text-align:left;border-radius:2px 2px 0 0;}.diigolet-question-mark{height:12px;width:12px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/q-mark.png");cursor:pointer;position:relative;display:inline-block;margin:9px 7px 0 6px;}.diigolet-question-mark-tip{padding:5px;position:absolute;bottom:139%;left:-82px;display:none;width:180px;color:#7f8d99;border-radius:2px;box-shadow:0 0 0 2px rgba(0,0,0,0.2);background:#fff;font:normal 12px/14px Arial,helvetica,sans-serif;}#diigolet-highlight-share-close{float:right;height:16px;width:16px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/win-close.png") 50% 50% no-repeat;margin-top:7px;opacity:.5;cursor:pointer;}#diigolet-highlight-share-close:hover{opacity:1;}#diigolet-highlight-container{border-radius:0 0 2px 2px;border-width:0 1px 1px 1px;border-color:rgba(0,0,0,0.08);border-style:solid;display:block;}#diigolet-highlight-main{padding:10px 10px;}#diigolet-highlight-share-textarea{border:1px solid #d7d7d7;outline:none;width:372px;height:42px;max-width:374px;line-height:18px;-webkit-transition:border-color 200ms ease;font:12px/14px Arial;min-height:42px;padding:3px 3px;resize:vertical;box-sizing:content-box;}#diigolet-highlight-share-textarea:disabled{background-color:#eee;}#diigolet-highlight-share-textarea:focus{border:1px solid #aaa;}.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0;}.clearfloat{zoom:1;}#diigolet-highlight-footer{padding:0 10px 10px 10px;position:relative;display:block;}#diigolet-highlight-footer a{float:right;}#diigolet-highlight-share-copybtn{height:24px;width:60px;line-height:24px;cursor:pointer;text-align:center;color:white;border-radius:2px;border:1px solid #066ec1;font-size:12px;text-decoration:none;border-radius:2px;border:1px solid #85a0a6;color:#85a0a6;font-size:12px;text-align:center;}#diigolet-highlight-share-copybtn:active{background:#85a0a6;color:#fff;}#diigolet-highlight-share-cancelbtn{color:#999;height:12px;font-size:12px;margin:6px 14px 0 0;text-decoration:none;border:none!important;}#diigolet-highlight-share-cancelbtn:hover{text-decoration:underline;}#diigolet-highlight-footer .diigolet-highlight-social-btn{float:left!important;height:26px;width:26px;margin-right:12px;}#diigolet-highlight-share-twitter{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/highlight-share.png");}#diigolet-highlight-share-facebook{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/highlight-share.png");background-position:-26px 0;}#diigolet-highlight-share-copySuccess{position:absolute;top:0;right:85px;padding:5px 10px;background:#fff1a8;color:black;border-radius:3px;line-height:18px;font-size:12px;-webkit-transition:all .3s;opacity:0;-webkit-transform-style:preserve-3d;-webkit-transform:rotateY(-70deg);}#diigolet-highlight-share-copySuccess.show{-webkit-transform:rotateY(0deg);opacity:1;}#diigo-annotationList{background-color:#fff;width:423px;font-family:Arial,Helvetica,sans-serif;-webkit-border-radius:0;cursor:default;z-index:2147483646;box-shadow:0 1px 3px rgba(0,0,0,0.08);background-clip:content-box;border-radius:2px;position:fixed;top:52px;left:0;-webkit-animation:slideInRight 200ms ease;}#diigo-annotationList-btn{height:20px;width:20px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/warning-orphanHighlight.png");position:fixed;right:0;top:55px;cursor:pointer;z-index:1000001;}#diigo-annotationList-top{height:30px;vertical-align:middle;background-color:#39baf6;line-height:30px;padding:0 10px;font-size:14px;color:#fff;text-align:left;border-radius:2px 2px 0 0;text-indent:5px;display:block;}#diigo-annotationList-top b{height:12px;width:14px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/list-icon.png");float:left;margin-top:10px;margin-left:-4px;display:block;}#diigo-annotationList-close{float:right;height:16px;width:16px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/win-close.png") 50% 50% no-repeat;margin-top:7px;opacity:.5;cursor:pointer;}#diigo-annotationList-close:hover{opacity:1;}#diigo-annotationList-toolbar{height:30px;font:normal 12px/30px arial,Helvetica;display:block;}#diigo-annotationList-toolbar span{float:left;color:#333;margin-left:10px;}#diigo-annotationList-toolbar a{float:right;margin-right:10px;text-decoration:none;color:#0072d6;}#diigo-annotationList-box{border-radius:0 0 2px 2px;border-width:0 1px 1px 1px;border-color:rgba(0,0,0,0.08);border-style:solid;padding:5px 6px 0 6px;position:relative;max-height:300px;overflow:auto;}#diigo-annotationList-box .diigo-annotationList-item{margin-bottom:8px;position:relative;background-color:#f9f9f9;}#diigo-annotationList-box .diigo-annotationList-item.diigo-orphan .diigo-annotationList-highlight,#diigo-annotationList-box .diigo-annotationList-item.diigo-orphan .diigo-annotationList-sticky{padding-right:19px;}.diigo-annotationList-item .diigo-annotationList-orphan-warning{height:19px;width:19px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/orphan-warning.png");position:absolute;top:0;right:0;opacity:.65;}.diigo-orphan-warning{height:15px;width:15px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/orphan-warning-small.png");float:left;opacity:.65;margin-right:4px;margin-top:7px;}#diigo-annotationList-box .diigo-annotationList-highlight{padding:6px 6px;font:normal 12px/14px arial,Helvetica;color:#333;border-left-style:solid;border-left-width:4px;border-bottom:1px solid #eee;position:relative;word-wrap:break-word;white-space:normal;word-break:break-all;}#diigo-annotationList-box .diigo-annotationList-item.diigo-yellow .diigo-annotationList-highlight{border-left-color:#ffba01;}#diigo-annotationList-box .diigo-annotationList-item.diigo-blue .diigo-annotationList-highlight{border-left-color:#6eaaf5;}#diigo-annotationList-box .diigo-annotationList-item.diigo-green .diigo-annotationList-highlight{border-left-color:#7bbd3f;}#diigo-annotationList-box .diigo-annotationList-item.diigo-pink .diigo-annotationList-highlight{border-left-color:#ff9c9c;}#diigo-annotationList-box .diigo-annotationList-sticky{padding:6px 6px 6px 26px;font:normal 12px/14px arial,Helvetica;color:#333;background-color:#f9f9f9;border-left-style:solid;border-left-width:4px;border-left-color:#ddd;border-bottom:1px solid #eee;position:relative;word-wrap:break-word;white-space:normal;word-break:break-all;}#diigo-annotationList-box .diigo-annotationList-item.diigo-yellow .diigo-annotationList-sticky .diigo-anntationList-floatIcon{background-position:0 -16px;}#diigo-annotationList-box .diigo-annotationList-item.diigo-blue .diigo-annotationList-sticky .diigo-anntationList-floatIcon{background-position:0 -32px;}#diigo-annotationList-box .diigo-annotationList-item.diigo-green .diigo-annotationList-sticky .diigo-anntationList-floatIcon{background-position:0 -48px;}#diigo-annotationList-box .diigo-annotationList-item.diigo-pink .diigo-annotationList-sticky .diigo-anntationList-floatIcon{background-position:0 -64px;}.diigo-annotationList-item .diigo-annotationList-item-action{position:absolute;right:1px;bottom:1px;font:normal 10px/12px arial,Helvetica;display:none;z-index:10000;}.diigo-annotationList-item .diigo-annotationList-item-btn{background-color:rgba(0,0,0,0.3);padding:2px;color:#fff;cursor:pointer;z-index:1;opacity:.8;float:left;margin-left:5px;}.diigo-annotationList-item .diigo-annotationList-item-btn:hover{opacity:1;}.diigo-annotationList-commentItem{padding:5px 6px;background-color:#f9f9f9;word-break:break-all;border-left-style:solid;border-left-width:4px;border-left-color:#ddd;border-bottom:1px solid #eee;font:normal 12px/14px arial,Helvetica;}.diigo-annotationList-item:hover .diigo-annotationList-item-action{display:block;}.diigo-anntationList-floatIcon{background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/float_note_icon.png");height:16px;width:16px;position:absolute;left:5px;top:5px;}#diigo-annotationList-main{position:relative;}#diigo-annotationList-notification{height:30px;width:150px;border:2px solid rgba(0,0,0,0.15);position:absolute;left:50%;top:50%;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/success.png") 5px 50% no-repeat;text-indent:26px;font:normal 12px/30px arial,Helvetica;background-color:#fff;border-radius:2px;-webkit-transform:translate(-50%,-50%);background-clip:content-box;z-index:1;display:none;}#diigo-annotationList-noItem{padding:10px;font-weight:bold;}.diigo-customize-scrollbar::-webkit-scrollbar{width:6px;}.diigo-customize-scrollbar::-webkit-scrollbar-track-piece{background-color:transparent;}.diigo-customize-scrollbar::-webkit-scrollbar-thumb:vertical{height:20px;background-color:#ccc;}.diigo-customize-scrollbar::-webkit-scrollbar-thumb:hover{background-color:#aaa;}.diigolet-highlight-selected{-webkit-animation:highlight 800ms ease-in-out;}#diigo-ext-tutorial-wrapper{position:fixed;bottom:0;right:0;left:0;top:0;background:rgba(0,0,0,0.8);text-align:center;font-family:arial,Helvetica;z-index:10000;font-size:16px!important;visibility:hidden;opacity:0;transition:opacity .2s linear;}#diigo-ext-tutorial-wrapper.active{visibility:visible;opacity:1;}#diigo-ext-tutorial-panel{display:inline-block;width:805px;height:664px;border-radius:5px;background:white;vertical-align:middle;position:relative;transform:scale(0.95);transition:transform .2s linear;}#diigo-ext-tutorial-wrapper.active #diigo-ext-tutorial-panel{transform:scale(1);}#diigo-ext-tutorial-panel .diigo-ext-tutorial-btn{display:block;height:36px;width:36px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/back_icon.png");position:absolute;top:300px;transition:transfrom 200ms ease;}#diigo-ext-tutorial-panel .diigo-ext-tutorial-btn:active{transform:scale(0.95);}#diigo-ext-tutorial-panel #diigo-ext-tutorial-prev{left:-64px;display:none;}#diigo-ext-tutorial-panel #diigo-ext-tutorial-next{-webkit-transform:rotate(180deg);right:-64px;}#diigo-ext-tutorial-panel #diigo-ext-tutorial-next:active{transform:scale(0.95) rotate(180deg);}#diigo-ext-tutorial-panel #diigo-ext-tutorial-close{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/close_icon.png");right:-64px;display:none;}#diigo-ext-tutorial-banner{height:169px;border-radius:5px 5px 0 0;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/bg.png"),#4e8df7;color:white;position:relative;overflow:hidden;}#diigo-ext-tutorial-banner-text{height:65px;position:relative;top:38px;transform:translate3d(0,-80px,0);opacity:0;transition:transform .5s cubic-bezier(0.77,0,0.175,1) .2s,opacity .5s cubic-bezier(0.77,0,0.175,1) .2s;}#diigo-ext-tutorial-banner-text>div{font-size:19px;}#diigo-ext-tutorial-banner-text span{line-height:47px;font-size:24px;font-weight:600;}#diigo-ext-tutorial-wrapper::after{display:inline-block;height:100%;margin-left:-0.05em;content:"";vertical-align:middle;}#diigo-ext-tutorial-container{height:495px;border-radius:0 0 5px 5px;position:relative;}.diigo-ext-tutorial-slide{visibility:hidden;opacity:0;position:absolute;left:0;right:0;transition:opacity 600ms ease-in-out;}#diigo-ext-tutorial-wrapper.active .diigo-ext-tutorial-slide.active{visibility:visible;opacity:1;}.diigo-ext-tutorial-slide .left,.diigo-ext-tutorial-slide .right{float:left;}.diigo-ext-tutorial-slide .left{width:350px;}.diigo-ext-tutorial-slide .right{width:400px;text-align:left;color:#757575;}.diigo-ext-tutorial-slide .right>div{width:360px;line-height:20px;}#diigo-tutorial-image1{height:347px;width:297px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/save.png");margin:22px 0 0 83px;}#diigo-tutorial-image2{height:421px;width:186px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/screenshot.png");margin:22px 0 0 83px;}#diigo-tutorial-image3{height:312px;width:537px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/highlighted.png");margin:75px 0 0 25px;}.diigo-ext-tutorial-3 .left{width:581px;}.diigo-ext-tutorial-3 .right{width:auto;}.diigo-ext-tutorial-3 .right>div{width:194px;}#diigo-tutorial-image4{height:302px;width:261px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/outliner.png");margin:83px 0 0 62px;}.diigo-ext-tutorial-4 .left{width:350px;}.diigo-ext-tutorial-4 .right{width:auto;}.diigo-ext-tutorial-4 .right>div{width:375px;}#diigo-ext-tutorial-elem1{position:absolute;left:138px;bottom:0;height:80px;width:74px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/spaceman.png");transform:translate3d(0,80px,0);transition:transform 600ms cubic-bezier(0.77,0,0.175,1);}#diigo-ext-tutorial-elem2{position:absolute;right:97px;bottom:79px;height:48px;width:48px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/moon.png");transform:scale(0);transition:transform .5s cubic-bezier(0.77,0,0.175,1);}#diigo-ext-tutorial-elem3{position:absolute;right:97px;bottom:-34px;height:118px;width:125px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/img/tutorial/rocket.png");transform:translate3d(100px,84px,0);transition:transform .5s cubic-bezier(0.77,0,0.175,1);}#diigo-ext-tutorial-wrapper.active.step4 #diigo-ext-tutorial-elem1,#diigo-ext-tutorial-wrapper.active.step4 #diigo-ext-tutorial-elem2,#diigo-ext-tutorial-wrapper.active.step4 #diigo-ext-tutorial-elem3{transform:translate3d(0,0,0);transform:scale(1);}#diigo-ext-tutorial-wrapper.active.step2 #diigo-ext-tutorial-elem1{transform:translate3d(0,0,0);}#diigo-ext-tutorial-wrapper.active.step3 #diigo-ext-tutorial-elem2,#diigo-ext-tutorial-wrapper.active.step3 #diigo-ext-tutorial-elem1{transform:translate3d(0,0,0);}#diigo-ext-tutorial-wrapper.active #diigo-ext-tutorial-banner-text{transform:translate3d(0,0,0);opacity:1;}#diigo-code-clipper{height:24px;width:24px;background:red;position:absolute;opacity:.5;cursor:pointer;}#diigo-code-clipped{position:absolute;display:inline-block;padding:0 4px;font-size:12px;border-radius:2px;text-align:center;color:white;background:rgba(0,0,0,0.5);}#diigo-code-clipper .clipped-area{display:none;}#diigo-code-clipper.clipped{pointer-events:none;font-size:12px;display:inline-block;width:auto;}#diigo-code-clipper.clipped .clipped-area{display:block;}#diigo-code-clipper:hover{opacity:1;}#d3df-sidebar{border:1px #ccc solid;z-index:99997;}#d3df-sidebar div.heading{padding:3px;font-size:13px;border-top:1px #E8EEF7 solid;font-weight:bold;zoom:1;}#d3df-sidebar div.popOut{width:16px;height:16px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/popout.gif) no-repeat scroll left top;cursor:pointer;}#d3df-sidebar div.popOut.popIn{background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/popin.gif);}#d3df-sidebar div.popOut.close{background-image:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/close1.gif);}#d3df-sidebar div.heading a.add{background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv1.gif) no-repeat scroll left -172px;padding-left:18px;display:block;float:right;font-weight:normal;}#d3df-sidebar a.togglePanel{background:transparent url(https://www.diigo.com/images/v2/eoc.gif) no-repeat scroll left top;display:block;float:right;width:16px;height:16px;}#d3df-sidebar a.togglePanel.collapsed{background-position:left bottom;}#d3df-sidebar ul,#d3df-sidebar ul li{list-style:none;overflow:hidden;zoom:1;}#d3df-sidebar li.highlight a.highlight{overflow:hidden;height:24px;zoom:1;}#d3df-sidebar ul.highlights li{margin:1px;}#d3df-sidebar ul.comments li{margin:1px;padding:2px;}#d3df-sidebar div.noComments{font-size:11px;text-align:center;padding:15px 5px;}#d3df-sidebar p.commentBody,#d3df-sidebar p.commentBody a{font-size:11px;}#d3df-sidebar a.avatar{float:left;margin-right:3px;}#d3df-sidebar a.avatar img{padding:1px;border:1px #CCC solid;width:32px;height:32px;}#d3df-sidebar .commentInfo{font-size:12px;}#d3df-sidebar .commentInfo a{border-bottom:1px dotted #999;}#d3df-sidebar a.highlight{line-height:24px;padding-left:18px;display:block;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv1.gif) no-repeat scroll left -192px;}#d3df-sidebar a.floatNote{padding-left:16px;background:transparent url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/diigoletIconv1.gif) no-repeat scroll left -144px;}#d3df-sidebar a.highlight .jumpTo{line-height:24px;padding-left:5px;font-size:12px;font-style:italic;}#d3df-sidebar.themeDefault .bgColor1{background-color:#C3D9FF;}#d3df-sidebar.themeDefault .bgColor2{background-color:#E8EEF7;}#d3df-sidebar.themeDefault .bgColor3{background-color:#FFF;}#d3df-sidebar.themeDefault .color1{color:#999;}#d3df-sidebar.themeDefault .color2{color:#333;}@media screen{body.diigoHiPen-yellow{cursor:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/highlighter-orange.cur) 4 15,text!important;}body.diigoHiPen-blue{cursor:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/highlighter-blue.cur) 4 15,auto!important;}body.diigoHiPen-green{cursor:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/highlighter-green.cur) 4 15,text!important;}body.diigoHiPen-pink{cursor:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/ietoolbar-images/highlighter-pink.cur) 4 15,text!important;}}.diigolet.notice{font:bold 13px/1.5 Helvetica,Arial,sans-serif;position:fixed;top:5px;left:0;width:100%;text-align:center;z-index:2147483647;height:1px;-webkit-animation:fadeIn 400ms ease;}.diigolet.notice>div{border:1px solid #fad42e;background:#fea;border-radius:5px;color:#000;display:inline-block;padding:5px 10px 5px 5px;-webkit-box-shadow:rgba(0,0,0,0.3) 0 1px 1px;}.diigolet.notice>div>b{display:inline-block;height:16px;width:16px;margin:2px 3px 0 0;background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) 0 -80px no-repeat;float:left;}.diigolet.notice>div>p>a{font-size:12px;}.diigolet.notice>div>p{float:left;max-width:420px;}.diigolet.notice>div.alert{background:#fef6f3;border-color:#cd0a0a;}.diigolet.notice>div.alert p #retry{margin-left:3px;text-decoration:underline;}.diigolet.notice>div.alert>b{background-position:-16px -80px;}.diigolet.notice>div.info>b{background-position:-32px -80px;}.diigolet.notice>div.wait>b{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/processing.gif) no-repeat scroll left 0 transparent;}.diigolet.notice div #close{display:block;height:12px;width:12px;background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/close.png);float:right;margin-left:10px;margin-top:3px;}.diigolet.notice div #close:hover{background-position:0 -12px;}#diigolet-panel-panel{z-index:2147483641;}#diigolet-panel-panel.notSignedIn .signedIn{display:none;}#diigolet-panel-panel.signedIn .notSignedIn{display:none;}#diigolet-panel-panel{height:36px;border-top-left-radius:19px;border-bottom-left-radius:19px;font:normal 12px/1.5 Helvetica,Arial,sans-serif;position:fixed;left:5px;top:5px;background-color:#fff;white-space:nowrap;border:1px solid #ccc;-webkit-user-select:none;background-clip:content-box;box-shadow:0 2px 10px rgba(0,0,0,.2);}#diigolet-panel-panel:hover #diigolet-panel-space{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -379px 0 no-repeat;opacity:.4;}#diigolet-panel-panel.fold #diigolet-panel-logo{opacity:1;width:28px;}#diigolet-panel-panel.fold #diigolet-panel-main{width:0;border-radius:0;}#diigolet-panel-panel.orphanHighlight.fold #diigolet-panel-logo{background-position:-84px 0;}#diigolet-panel-panel.orphanHighlight.fold #diigolet-panel-logo:hover{background-position:-112px 0;}.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0;}.clearfloat{zoom:1;}#diigolet-panel-main{height:36px;display:inline-block;background-color:rgba(255,255,255,1);border-radius:19px 0 0 19px;overflow:hidden;-webkit-transition:left 100ms ease-in-out;}#diigolet-panel-logo{display:inline-block;width:0;height:36px;border-top-left-radius:19px;border-bottom-left-radius:19px;background-image:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/di.png");background-position:0 0;background-color:#fff;opacity:0;cursor:pointer;}#diigolet-panel-logo:hover{background-position:-28px 0;}#diigolet-panel-space{width:12px;height:36px;display:inline-block;background-color:#fff;}#diigolet-panel-panel .diigolet-panel-btn{height:36px;float:left;}#diigolet-panel-panel .diigolet-panel-btn>b{height:36px;width:36px;display:block;cursor:pointer;margin:0 auto;-webkit-transition:background-color 200ms ease;}#diigolet-panel-panel .diigolet-panel-btn>b:hover{background-color:#E7F0FF;}#diigolet-panel-panel .diigolet-panel-btn>b:active{-webkit-transform:scale(.9);}#diigolet-panel-fold{height:36px;float:left;cursor:pointer;width:19px;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") 0 0 no-repeat;}#diigolet-panel-fold:hover{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -38px 0 no-repeat;}#diigolet-panel-Highlight{width:48px;}#diigolet-panel-btnHighlight{width:34px;height:36px;float:right;}#diigolet-panel-btnHighlight>b{height:36px;width:36px;display:block;cursor:pointer;-webkit-transition:background-color 200ms ease,border-radius 200ms ease;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -105px 0 no-repeat;}#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight>b{height:36px;width:36px;margin:0;}#diigolet-panel-Highlight:not(.pen) #diigolet-panel-btnHighlight>b:hover{background-color:#E7F0FF!important;}#diigolet-panel-btnHighlight>b:active{-webkit-transform:scale(.9);}#diigolet-panel-Highlight.pen #diigolet-panel-btnHighlight>b{background-color:#E7F0FF;-webkit-transform:scale(0.9);}#diigolet-panel-btnHighlight.yellow>b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -73px 0 no-repeat;}#diigolet-panel-btnHighlight.blue>b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -105px 0 no-repeat;}#diigolet-panel-btnHighlight.green>b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -137px 0 no-repeat;}#diigolet-panel-btnHighlight.pink>b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -169px 0 no-repeat;}#diigolet-panel-hightlight-dropdown.yellow>b{background-color:#ffb000;}#diigolet-panel-hightlight-dropdown.blue>b{background-color:#39abed;}#diigolet-panel-hightlight-dropdown.green>b{background-color:#7c0;}#diigolet-panel-hightlight-dropdown.pink>b{background-color:#f6b;}#diigolet-panel-hightlight-dropdown{width:14px;height:36px;float:right;background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -360px 0 no-repeat;cursor:pointer;}#diigolet-panel-hightlight-dropdown:hover{background-color:#E7F0FF;}#diigolet-panel-hightlight-dropdown>b{height:5px;width:5px;border-radius:12px;display:block;margin-top:16px;margin-left:5px;cursor:pointer;}#diigolet-panel-btnStickyNote{width:42px;}#diigolet-panel-btnStickyNote b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -234px -1px no-repeat;}#diigolet-panel-btnBookmark{width:42px;}#diigolet-panel-btnBookmark b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -296px -1px no-repeat;}#diigolet-panel-btnBookmark.diigo-research-mode b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -485x -1px no-repeat;}#diigolet-panel-btnBookmark.saved b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -328px -1px no-repeat;}#diigolet-panel-btnAnnotationList b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -419px -1px no-repeat;}#diigolet-panel-panel.orphanHighlight #diigolet-panel-btnAnnotationList b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -451px -1px no-repeat;}#diigolet-panel-orphanHighlight{width:46px;}#diigolet-panel-orphanHighlight b{background:url("chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/toolbar-icon.png") -266px -1px no-repeat;}#diigolet-panel-colorPicker{display:none;position:absolute;left:15px;top:41px;width:91px;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.35);border-radius:2px;padding:5px 0;-webkit-animation:diigo-dropdown .15s ease-in 1;}#diigolet-panel-colorPicker.dropdownShown{display:block;}#diigolet-panel-colorPicker-arrow{border:5px solid;border-top-color:transparent;border-right-color:transparent;border-bottom-color:#fff;border-left-color:transparent;position:absolute;left:40px;top:-9px;}#diigolet-panel-colorPicker li{font-weight:normal;display:block;padding-right:10px!important;padding-left:10px!important;text-decoration:none!important;line-height:26px;height:26px;color:#434343;min-width:60px;width:71px;background:none!important;border:none!important;-webkit-transition:background-color 200ms ease;}#diigolet-panel-colorPicker li:hover{background-color:#e8e8e8!important;color:#434343!important;text-decoration:none!important;}#diigolet-panel-colorPicker li span{display:inline-block;width:12px;height:12px;border-radius:7px;margin-right:5px;vertical-align:middle;margin-bottom:3px;}#diigolet-panel-colorPicker li span b{width:4px;height:4px;background:#606060;margin-top:4px;margin-left:4px;border-radius:2px;}#diigolet-panel-colorPicker li.selected span b{display:block;}#diigolet-panel-colorPicker li.yellow span{background:#fde200;border:1px solid #b0a224;}#diigolet-panel-colorPicker li.blue span{background:#7db3f9;border:1px solid #63799a;}#diigolet-panel-colorPicker li.green span{background:#86ca25;border:1px solid #718b49;}#diigolet-panel-colorPicker li.pink span{background:#ff9b9a;border:1px solid #ae657a;}.diigolet .moreActionShare b{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) 0 -96px no-repeat;}#diigolet-dialog-share{background-color:#fcfbf7;border-radius:2px;font:normal 13px/1.5 Helvetica,Arial,sans-serif;position:fixed;left:5px;top:7px;box-shadow:0 1px 3px rgba(0,0,0,.08);white-space:nowrap;width:520px;z-index:2147483646;display:block;}#diigolet-dialog-share *{white-space:normal;}#diigolet-dialog-share-title{height:30px;vertical-align:middle;background-color:#39baf6;line-height:30px;padding:0 10px;font-size:14px;color:white;text-align:left;border-radius:2px 2px 0 0;display:block;}#diigolet-dialog-share-closeBtn{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/images/win-close.png) 50% 50% no-repeat;float:right;height:16px;margin-left:10px;width:16px;margin-top:7px;}#diigolet-dialog-share-content{border-radius:0 0 2px 2px;border-width:1px 1px 1px 1px;border-color:rgba(0,0,0,.08);border-style:solid;display:block;}#diigolet-dialog-share-social{padding:10px;}#diigolet-dialog-share-social .social-item{height:50px;width:100px;border-radius:3px;background:red;margin:10px 20px 10px 0;display:block;float:left;}#diigolet-share-shareToTabs{background-color:#fcfbf7;list-style-type:none;padding:0 5px;margin:0;height:30px;line-height:30px;border-left:1px solid rgba(0,0,0,.08);border-right:1px solid rgba(0,0,0,.08);}#diigolet-share-shareToTabs li{display:inline-block;line-height:22px;height:24px;margin-top:6px;}#diigolet-share-shareToTabs li a{text-decoration:none;border-bottom-color:#3669a8;border-top-left-radius:5px;border-top-right-radius:5px;color:#000;opacity:.8;display:block;padding:0 5px;}#diigolet-share-shareToTabs a:hover{opacity:1;}#diigolet-share-shareToTabs a.current{border-radius:2px 2px 0 0;border-width:1px 1px 0 1px;border-color:rgba(0,0,0,.08);border-style:solid;border-bottom:1px solid #fcfbf7;color:#000;opacity:1;z-index:0;position:relative;top:1px;}#diigolet-share-shareToTabs a.current:hover{color:#222;}#diigolet-share-shareToTabs li b{display:inline-block;width:16px;height:16px;vertical-align:text-bottom;margin-right:3px;}.diigolet .shareToTwitter b{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) -16px -96px no-repeat;}.diigolet .shareToFacebook b{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) -32px -96px no-repeat;}.diigolet .shareToGplus b{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) -48px -96px no-repeat;}.diigolet .shareToEmail b{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) 0 -112px no-repeat;}.diigolet .getAnnotatedLink b{background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) -16px -112px no-repeat;}.diigolet .twitterDesc{color:#777;font-size:13px;line-height:20px;}#diigolet-twitter-saveBtn{display:block;line-height:24px;cursor:pointer;text-align:center;color:white;border-radius:2px;border:1px solid #066ec1;font-size:12px;text-decoration:none;border-radius:2px;border:1px solid #85a0a6;color:#85a0a6;font-size:12px;text-align:center;height:20px;width:50px;line-height:20px;float:right;}#diigolet-twitter-saveBtn:active{background:#85a0a6;color:#fff;}#diigolet-twitter-cancelBtn{color:#999;height:12px;font-size:12px;margin:1px 8px 0 6px;text-decoration:none;float:right;}#diigolet-twitter-cancelBtn:hover{text-decoration:underline;}#diigolet-email-saveBtn{display:block;line-height:24px;cursor:pointer;text-align:center;color:white;border-radius:2px;border:1px solid #066ec1;font-size:12px;text-decoration:none;border-radius:2px;border:1px solid #85a0a6;color:#85a0a6;font-size:12px;text-align:center;height:20px;width:50px;line-height:20px;float:right;margin-top:4px;}#diigolet-email-saveBtn:active{background:#85a0a6;color:#fff;}#diigolet-email-cancelBtn{color:#999;height:12px;font-size:12px;margin:6px 14px 0 0;text-decoration:none;float:right;}#diigolet-email-cancelBtn:hover{text-decoration:underline;}#diigolet-annotatedLink-saveBtn{display:block;line-height:24px;cursor:pointer;text-align:center;color:white;border-radius:2px;border:1px solid #066ec1;font-size:12px;text-decoration:none;border-radius:2px;border:1px solid #85a0a6;color:#85a0a6;font-size:12px;text-align:center;height:20px;width:50px;line-height:20px;float:right;}#diigolet-annotatedLink-saveBtn:active{background:#85a0a6;color:#fff;}#diigolet-annotatedLink-cancelBtn{color:#999;height:12px;font-size:12px;margin:2px 8px 0 6px;text-decoration:none;float:right;}#diigolet-annotatedLink-cancelBtn:hover{text-decoration:underline;}#diigolet-share-twitterLeftChars{color:#999;float:right;font-size:20px;font-weight:700;line-height:20px;}#diigolet-share-twitterLeftChars.full{color:#F00;}#diigolet-dialog-share .inputTxt{border:1px solid #7F9DB9;font:normal 12px/1.5 Arial,Helvetica,sans-serif;border:1px solid #d7d7d7;-webkit-transition:border-color 200ms ease;outline:none;}#diigolet-dialog-share .inputTxt:focus{border:1px solid #AAA;}#diigolet-dialog-share-twitterMsg{height:54px;width:492px;}#diigolet-dialog-share .buttonRow{margin-top:5px;text-align:right;display:block;}#diigolet-dialog-share .buttonRow input{margin-left:5px;padding:1px 6px;}#diigolet-dialog-share input.defaultAction{font-weight:700;}#diigolet-dialog-share-twitter{padding:10px;display:block;}#diigolet-dialog-share-facebook{padding:5px;font-size:20px;height:100px;line-height:100px;text-align:center;}#diigolet-dialog-share-gPlus{padding:5px;font-size:20px;height:100px;line-height:100px;text-align:center;}#diigolet-dialog-share-gBuzz iframe{border:none;height:340px;width:100%;overflow:hidden;}#diigolet-dialog-share-email{padding:10px;display:block;}#diigolet-dialog-share-email>table{width:100%;border-width:0;margin-bottom:5px;}#diigolet-dialog-share-email>table td{padding:2px 0;}#diigolet-dialog-share-email label{font-weight:700;}#diigolet-dialog-share-email-to,#diigolet-dialog-share-email-subject{width:100%;}#diigolet-dialog-share-email-message{height:72px;width:100%;}#diigolet-dialog-share-email-quotes-checker{font-weight:400!important;float:right;}#diigolet-dialog-share-email-quotes-checker input{margin-right:2px;vertical-align:text-bottom;}#diigolet-dialog-share-email-quotes{border:1px solid #bbb;border-radius:3px;width:100%;max-height:150px;overflow-y:scroll;}#diigolet-aidlog-share-email-quotes-content{margin:5px 10px 10px 10px;}#diigolet-dialog-share-annotatedLink{padding:10px;display:block;}.diigolet .annotatedLinkInfo{border:1px solid #fad42e;background:#fea;border-radius:5px;color:#000;display:inline-block;padding:0 0 0 20px!important;position:relative;margin-bottom:10px!important;}.diigolet .annotatedLinkInfo b{display:inline-block;height:16px;width:16px;margin-right:3px;background:url(chrome-extension://lhidgfaliccjjbgkabchckabpdamkphg/diigolet/chrome-panel-images/icons.png) -32px -80px no-repeat;position:absolute;left:1px;top:1px;}#diigolet-dialog-share-annotatedLink-value{font-weight:700!important;font-size:13px!important;padding:2px;width:496px;}#diigolet-dialog-share-annotatedLink-value.loading{color:#ccc;font-style:italic;}#diigolet-dialog-share-annotatedLink-optLinks{float:left;}.diigolet .autocompleteContacts{border:1px solid #d9d9d9;border-top-color:#999;border-left-color:#999;width:380px;}.diigolet .recInput{font:12px verdana;border-width:0;float:left;margin:2px;padding-top:2px;}.diigolet .recItem{border:1px solid #7B9EBD;padding:0 2px;background-color:#F0F5FE;float:left;margin:2px 2px 0 0;}.diigolet .recInputSizer{position:absolute;visibility:hidden;left:0;bottom:0;font:11px verdana;}.diigolet .accTip{position:absolute;border:1px solid #ddd;border-top:none;background-color:#f5f5f5;font-size:11px;color:#777;text-align:left;padding:2px 0;text-indent:5px;z-index:8998;}.diigolet .accNotice{position:absolute;border:1px solid #ffd324;border-top:none;background-color:#fff6bf;font-size:11px;color:#600;text-align:left;padding:2px 0;text-indent:5px;z-index:8999;}.diigolet .accList{position:absolute;border:1px solid #999;border-top:none;background-color:#fff;font:10px verdana;color:#777;text-align:left;z-index:9000;line-height:18px;}.diigolet .accList .cItem{border-bottom:1px solid #ddd;background-color:#fff;cursor:pointer;padding:2px;color:#333;}.diigolet .accList .cItem b{font-size:11px;font-weight:normal;color:#000;}.diigolet .accList .cItem i,.recItem i{font-size:7pt;color:#090;font-style:normal;margin-right:2px;}.diigolet .accList div strong{background-color:#FFFADB;padding:0 2px;}.diigolet .accList div.hover{background-color:#E0ECFF;text-decoration:none;}.diigolet .recItem a{color:#999;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;line-height:16px;margin:0 1px 0 3px;}.diigolet .recItem a:hover{color:#333;text-decoration:none;}.diigolet .cItem span.extraDesc{float:none;font-weight:normal;color:#777;margin-left:10px;font-style:italic;}.diigolet .cItem span.extraDesc .keywordStrong{color:#000;font-style:italic;background-color:#fff;}.diigolet .cItem span.keywordStrong{float:none;font-weight:bold;}',
      Da =
        'Please <a href="#" title="Sign in into Diigo.com" id="signIn">sign in</a> first.',
      ia = 0,
      Wa = 1,
      fa = 2;
    ANNOTATION_TYPE_ICON = 9;
    x.urls = {
      getUserBookmarksPageURL: function (a) {
        return "https://www.diigo.com/user/" + (a || k.user);
      },
      getCreateGroupURL: function () {
        return "https://groups.diigo.com/create";
      },
      getCreateListURL: function () {
        return "https://www.diigo.com/bookmark_list/new_list";
      },
      getGroupURL: function (a) {
        return a
          ? "https://groups.diigo.com/groups/" + a
          : "https://groups.diigo.com";
      },
      getGroupHome: function () {
        return "https://groups.diigo.com/user/" + k.user;
      },
      getListHome: function () {
        return "https://www.diigo.com/list/" + k.user;
      },
      getNetwork: function () {
        return "https://www.diigo.com/network/" + k.user;
      },
      getHotBookmark: function () {
        return "https://www.diigo.com/buzz/hot";
      },
      getUserHomepageURL: function (a) {
        return this.getUserProfileURL(a);
      },
      getUserProfileURL: function (a) {
        a = a || k.user;
        return "https://www.diigo.com/profile/" + a;
      },
      getSignOutURL: function () {
        return "https://www.diigo.com/sign-out";
      },
      getSignInURL: function () {
        return "https://www.diigo.com/sign-in";
      },
      getFeedbackURL: function () {
        return "https://www.diigo.com/common/feedback";
      },
      getFollowOnTwitterURL: function () {
        return "https://www.twitter.com/diigo";
      },
      getRatingURL: function () {
        return "https://chrome.google.com/extensions/detail/oojbgadfejifecebmdnhhkbhdjaphole";
      },
    };
    x.handlers = {
      tb_showDropDownMenu: function (a, c) {
        $("#diigolet-help,#diigolet-toolbar .dropdownMenu").hide();
        if (!(c == "#diigolet-tb-signInMenu" && k.signedIn)) {
          var d = $(a.target);
          d = d.add(d.parents("a")).filter(".diigoletButton");
          if ($.browser.msie && $.browser.version >= 9) {
            tbar = $("#diigolet-toolbar");
            Ka(
              $(c)
                .css({
                  left: d.offset().left,
                  top: $(document).scrollTop() + 25,
                })
                .show()
            );
          } else Ka($(c).css({ left: d.offset().left }).show());
        }
      },
      tb_viewComments: function () {
        La.popOut({ top: 35, left: 3 });
      },
      tb_signIn: function () {
        k.signedIn ? z.signOut() : z.signIn();
      },
      hideToolbar: function () {
        da.hide();
      },
      showHelp: function () {
        $("#diigolet-toolbar .dropdownMenu").hide();
        if ($.browser.msie && $.browser.version >= 9) {
          tbar = $("#diigolet-toolbar");
          Ka(
            da.jHelpTip
              .css({ top: tbar.offset().top + tbar.height() - 5 })
              .show()
          );
        } else Ka(da.jHelpTip.show(), 500);
      },
      hideHelp: function () {
        $("#diigolet-help").hide();
      },
      mouseOnBorder: function () {
        da.show();
      },
      OnTwitterMsgChange: function () {},
      bookmark: function () {
        if (qa()) za.shown ? za.close() : za.show();
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
        $.each(k.defaultColors, function (c, d) {
          Q("diigolet-colorMenu-" + d).toggleClass("colorchecked", false);
        });
        k.penColor && k.penColor.length > 0
          ? Q("diigolet-colorMenu-" + k.penColor).toggleClass(
              "colorchecked",
              true
            )
          : Q("diigolet-colorMenu-yellow").toggleClass("colorchecked", true);
        $.browser.msie && $.browser.version >= 9
          ? Ka(
              $("#diigolet-tb-colorMenu")
                .css({
                  left: a.offset().left,
                  top: $(document).scrollTop() + 25,
                })
                .show()
            )
          : Ka(
              $("#diigolet-tb-colorMenu").css({ left: a.offset().left }).show()
            );
      },
      diigoTwitterit: function () {
        qa();
      },
      bmOnSubmitAndClose: function () {
        U.submitAndClose();
      },
      bmCancel: function () {
        U.hide(true);
      },
      highlight: function (a, c, d) {
        if (qa()) {
          a = S.checkSelection();
          I("[highlight]", a);
          if (a.ok) {
            I("[highlight] Making a text highlight");
            var f = N.add(
              {
                user: k.user,
                realName: k.realName,
                content: a.html,
                type: ia,
                nth: a.nth,
              },
              {},
              c,
              d
            );
            $.browser.msie && document.selection.empty();
          } else a.pen ? diigolet.handle(true, "TogglePen") : k.notify(a.msg);
          chrome.runtime.sendMessage({ name: "doHighlight" });
          if (
            typeof k.permissions.annPermission !== "undefined" &&
            !k.permissions.annPermission.annotationPermission
          ) {
            ca.init();
            ca.show("highlight");
          }
          return f;
        }
      },
      TogglePen: function () {
        var a = (k.isHighlightPen = !k.isHighlightPen);
        I("[highlight] togglePen", a);
        da.onHighlightPenModeChanged(a);
        J.onHighlightPenModeChanged(a);
        var c = $(document.body);
        c.removeClass(
          pa(k.defaultColors, function (d) {
            return "diigoHiPen-" + d;
          }).join(" ")
        );
        a && c.addClass("diigoHiPen-" + k.penColor);
      },
      toggleAnnotationList: function () {
        aa.shown ? aa.hide() : aa.show();
      },
      ChangeColor: function (a, c) {
        k.penColor = c;
        J.onHighlightColorChanged(c, true);
        ga.changeColor(c);
        da.onHighlightColorChanged(c);
        chrome.runtime.sendMessage({ name: "changeColor", color: c });
        k.isHighlightPen &&
          $(document.body)
            .removeClass(
              pa(k.defaultColors, function (d) {
                return "diigoHiPen-" + d;
              }).join(" ")
            )
            .addClass("diigoHiPen-" + k.penColor);
      },
      highlightAndComment: function (a, c, d) {
        (a = x.handle(a, "highlight", c, d)) && a.jumpHere(false, true);
      },
      showHideHighlight: function () {
        k.toggleSilent();
      },
      addStickyNote: function () {
        !qa() ||
          H.isEditing() ||
          N.add(
            { user: k.user, realName: k.realName, content: "", type: fa },
            { dontSave: true }
          ).jumpHere(false, true);
      },
      hlmenu_mousedown: function () {
        return $.browser.opera;
      },
      dlgIC_del_ic: function (a, c, d) {
        H.onclick_del_ic(a, c, d);
      },
      sb_del_pc: function (a, c, d) {
        La.onclick_del_pc(a, c, d);
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
    var ra = ja.extend({
      constructor: function (a) {
        W(
          this,
          {
            url: "",
            urlId: "",
            b_id: "",
            title: "",
            description: "",
            user: "",
            unread: false,
            mode: 0,
            tags: [],
            alert: false,
            onlyInGroup: false,
            groups: [],
            lists: [],
            outliners: [],
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
        return Qa(this.title || document.title || document.location.href);
      },
      addGroups: function (a) {
        var c = this;
        M(a, function (d) {
          var f = Ia(c.groups, function (h) {
            return h.name == d.name;
          });
          if (f == -1) {
            c.groups.push(d);
            k.fireEvent("bm_addGroups", [c, d.name]);
          } else if (d.user) c.groups[f].user = d.user;
        });
      },
      getGroupNamesSharedByMe: function () {
        return Gb(this.groups, function (a) {
          return a.user == k.user ? a.name : null;
        });
      },
      inList: function (a) {
        return Fb(this.lists, function (c) {
          return c.id == a;
        });
      },
    });
    ra.fromDocument = function () {
      var a = document;
      return new ra({
        url: a.location.href,
        title: a.title || a.location.href,
        mode: K.getFromCache("prefs.bookmark.privateByDefault", "b") ? 2 : 0,
      });
    };
    ra.readlater = function () {
      var a = document;
      return new ra({
        url: a.location.href,
        title: a.title || a.location.href,
        mode: K.getFromCache("prefs.bookmark.privateByDefault", "b") ? 2 : 0,
        unread: true,
      });
    };
    var Ra = false,
      tb = false,
      xb;
    x.openURL = function (a) {
      O.send({ name: "createTab", details: { url: a } });
    };
    var k = {
      generated: false,
      chromeTabId: null,
      isSignedIn: false,
      autoLoad: false,
      keywords: [],
      orphanHighlights: [],
      googleSearchSentence: "",
      autoShowHighlightIcon: false,
      chromeExtensionID: null,
      user: "",
      userId: null,
      realName: "",
      userLevel: 0,
      isHighlightPen: false,
      penColor: "yellow",
      mouseClass: "mouseovered",
      defaultColors: ["yellow", "blue", "green", "pink"],
      signedIn: false,
      launchMode: {
        normal: diigoletLaunchMode == 0,
        permalink: diigoletLaunchMode == 3,
        pagePlayer: diigoletLaunchMode == 5,
      },
      permalinkParams: null,
      silent: false,
      bookmark: new ra(),
      groupTagsDict: {},
      recommendedTagsLoaded: false,
      recommendedTags: [],
      selectionResult: null,
      annotations: [],
      pageComments: [],
      currentHighlight: "",
      myTags: [],
      myTagsWithCount: [],
      myBmLists: [],
      myGroups: [],
      myContacts: [],
      permissions: {
        capture: true,
        image: true,
        highlight: true,
        premium: true,
        snapshot: true,
      },
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
          if ((this.silent = a)) {
            this.unpaintAllAnnotations();
            $(".diigo-scrollmarker").hide();
          } else {
            this.paintAllAnnotations();
            $(".diigo-scrollmarker").show();
          }
      },
      notify: function (a, c) {
        I(a);
        L.notifyInfo(a, { timeout: c });
      },
      resetData: function (a) {
        this.bookmark = ra.fromDocument();
        if (a) {
          this.chromeExtensionID = a.extensionID;
          this.chromeTabId = a.tabId;
          W(this, a.globalData);
        }
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
      },
      reset: function (a) {
        this.resetData(a);
      },
      paintAllAnnotations: function () {
        M(this.annotations, function (f) {
          if (f.user == k.user || f.onlyInGroup) {
            f.paint();
            $(".id_" + f.id).on("dragstart", function (h) {
              h = h.originalEvent;
              var i = "";
              $(".id_" + f.id).each(function () {
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
                  i += l + " ";
                }
              });
              h.dataTransfer.setData("text/plain", i);
              h.dataTransfer.setData("text/diigoHighlight", i);
              h.dataTransfer.setDragImage(Bb(i), -10, -10);
            });
          }
        });
        for (var a = $(".diigoHighlight"), c = [], d = 0; d < a.length; d++)
          c[d] = a[d].className.match(/id(\w)+/g)[0];
        a = db(c);
        for (d = 0; d <= a.length; d++)
          if ($("." + a[d]).length == 1) $("." + a[d]).scrollmarker();
          else {
            c = $("." + a[d]);
            $(c[0]).scrollmarker();
          }
        k.orphanHighlights.length != 0
          ? $("#diigolet-panel-panel").addClass("orphanHighlight")
          : $("#diigolet-panel-panel").removeClass("orphanHighlight");
      },
      unpaintAllAnnotations: function () {
        M(this.annotations, function (a) {
          a.unpaint();
        });
      },
    };
    wb.mixin(k);
    var ic = {
        docScroll: function () {
          return [Tb.scrollLeft(), Tb.scrollTop()];
        },
        docSize: function () {
          return [sb.width(), sb.height()];
        },
      },
      gc = {
        ele: null,
        shown: false,
        init: function () {},
        destroy: function () {},
        show: function (a, c) {
          if (k.signedIn) {
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
          this.ele = $($a)
            .css({ position: "absolute" })
            .hide()
            .appendTo(document.body)
            .hide();
        },
      };
    x.run = function (a, c) {
      K.updateCache(a.preloadedPrefs);
      na();
      $("#diigolet-panel-panel").length == 0 &&
        M([J, U, H, Z, L, R, wa], function (d) {
          d.init();
        });
      c && c == "autoshow" ? J.show("fold") : J.show();
      if (k.signedIn) {
        I("aaaa");
        Xa();
      }
      if (k.generated == false) {
        k.reset(a);
        if (k.signedIn) {
          Xa();
          a.shoudLoadMyStuff && z.loadMyStuff();
        }
        if (a.loadBookmarkResult) {
          I("[bookmark info already loaded]", a.loadBookmarkResult);
          z.cb_bm_loadBookmark_success(a.loadBookmarkResult, "showbar");
        } else
          a.shouldLoadBookmarkByMyself &&
            k.signedIn &&
            z.loadBookmark("showbar");
      } else {
        k.unpaintAllAnnotations();
        k.paintAllAnnotations();
        N.sort();
        J.adjustPosition();
      }
      if ($("#diigolet-csm").length == 0) {
        ga.init();
        rb();
      }
      M([U, H, da, ga, Z, La, J, L, R], function (d) {
        if (d.j) {
          var f = (function (h) {
            return function () {
              Ra = h.clickedOn = true;
            };
          })(d);
          d.j
            .unbind(".pay4sin")
            .bind("mouseup.pay4sin", f)
            .bind("mousedown.pay4sin", f)
            .bind("keydown.pay4sin", function (h) {
              h.stopPropagation();
            });
        }
      });
      Ub.afterRun();
      if (c && c == "stickynote") {
        x.stickyNoteByContextMenu = true;
        x.handlers.addStickyNote();
      }
    };
    x.chromeRun = function (a, c) {
      function d() {
        if (!$.isReady) {
          var f = chrome.i18n.getMessage("pageStillLoading");
          if (document.body) {
            na();
            na = function () {};
            L.init();
            L.notify(f, "info", { timeout: 3e3 });
          } else {
            I("body is null. will retry");
            setTimeout(d, 500);
          }
        }
      }
      xa(a.extensionID);
      if (
        (function () {
          var f = window.location.href;
          return f.substring(f.length - 4) == ".pdf" &&
            $('embed[type="application/pdf"]').length > 0
            ? true
            : false;
        })()
      )
        x.chromeActuallyRun(c);
      else if (x.started) $.isReady || d();
      else {
        x.started = true;
        if (a.logLevel) x.logLevel = a.logLevel;
        if (Ma(window.location.href))
          if (window.top != window.self) I("[BUG] I don't run in a frame");
          else {
            if (!$.isReady) {
              I("DOM not ready.");
              a.userClick && d();
            }
            $(function () {
              I("DOM is ready.");
              x.chromeActuallyRun(c);
            });
          }
        else alert(chrome.i18n.getMessage("alertUnsupportedPage"));
      }
    };
    x.chromeActuallyRun = function (a) {
      Aa.makeSnapshot();
      x.Messenger.send({ name: "initialData" }, function (c) {
        I("initialData", c);
        x.run(c, a);
        x.ready = true;
      });
    };
    x.runAway = function () {
      k.reset();
      M([U, H, La], function () {
        v.destroy();
      });
      delete window.diigolet;
    };
    var Fa = {
        hasCacheUpload: function () {
          return !!k.permissions.snapshot;
        },
        onPrivilegeChange: function () {
          U.refreshPremium();
        },
      },
      Aa = {
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
        removeDiigoStuffFromHtml: function (a) {
          a = a.replace(
            /<style[^<>]*id="diigolet-chrome-css"(?:.|\s)*?<\/style>/,
            ""
          );
          a = a.replace(/<div[^<>]*id="diigolet-notice"(?:.|\s)*?<\/div>/, "");
          a = a.replace(/ id="dummybodyid"/, "");
          /"diigo/i.test(a) && I("html still contains diigo");
          return a;
        },
        makeSnapshot: function () {
          this.html = this.removeDiigoStuffFromHtml(this.getDocumentSource());
          this.text = document.body.innerText;
          if ($("embed").attr("type") == "application/pdf") {
            this.ispdf = true;
            this.pdfurl = $("embed").attr("src");
          }
        },
        uploadCache: function (a) {
          if (Fa.hasCacheUpload()) {
            x.Messenger.send({
              name: "uploadCache",
              details: {
                text: this.text,
                html: this.html,
                urlMD5: k.bookmark.urlId,
                groups: a.groups,
                ispdf: this.ispdf,
                pdfurl: this.pdfurl,
              },
            });
            L.notifyWait(chrome.i18n.getMessage("upload_uploading"), {
              timeout: 8e3,
            });
          } else {
            ca.init();
            ca.show("cache");
          }
        },
        uploadDidFail: function (a) {
          a = a || {};
          if (a.overQuota) {
            k.permissions.snapshot = false;
            x.Messenger.send({
              name: "updateGlobalData",
              details: { permissions: k.permissions },
            });
            Fa.onPrivilegeChange();
          }
          L.notifyAlert(a.msg || chrome.i18n.getMessage("upload_error"), {
            timeout: 8e3,
          });
        },
        uploadDidSucceed: function () {
          L.notifyOK(chrome.i18n.getMessage("upload_success"));
        },
      },
      Vb = {
        uploadMHTML: function (a) {
          if (Fa.hasCacheUpload())
            x.Messenger.send({
              name: "importMHTML",
              details: {
                link_id: a.link_id,
                mhtml_upload_url: a.mhtml_upload_url,
                charset: document.charset,
                blob: this.blob,
                tabid: a.tabid,
              },
            });
          else {
            ca.init();
            ca.show("acache");
          }
        },
        uploadDidSucceed: function (a) {
          (a = a.visit_url)
            ? L.notifyOK(
                "Upload succeeded! <a href=" +
                  a +
                  ' target="_blank">check it out</a>'
              )
            : L.notifyOK(chrome.i18n.getMessage("upload_success"));
        },
      },
      Ub = {
        afterRun: function () {
          this.fixOpenTracker();
        },
        fixOpenTracker: function () {
          $("script[src*=opentracker]").length &&
            window.addEventListener(
              "mousedown",
              function (a) {
                a = $(a.target);
                a.is("a") || (a = a.parents("a").eq(0));
                a.is("[href*=javascript:void]") &&
                  a.parents(".diigolet").length &&
                  a.attr("href", "javascript:void('ot_evt(')");
              },
              true
            );
        },
      };
    $(document).ready(function () {
      $(document).on("click", "#screenshot, #text-screenshot", function () {
        ka.initSelectedCapture();
      });
      $("#screenshot").click(function () {
        k.permissions.pdfPermission.pdfPermission
          ? ka.initSelectedCapture()
          : diigoModal.show("upgrade");
      });
      $("#text-screenshot").click(function () {
        ka.initSelectedCapture();
      });
      $('<div id="diigo-chrome-installed"></div>')
        .appendTo(document.body)
        .hide();
      $("#installDiigoChromeExtension").hide();
    });
    window.Ctx = k;
    var Wb = {
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
          var f = [], h = [], i = false, l = 0, m = a.length, t;
          (t = a.charAt(l)), l < m;
          l++
        )
          if (t == '"')
            if (i) {
              i = false;
              d();
            } else i = true;
          else if (i) f.push(t);
          else /\s/.test(t) || t == "," ? d() : f.push(t);
        d();
        if (c)
          h = Gb(Hb(h), function (D) {
            return Qa(D) || null;
          });
        return h;
      },
      unparseTags: function (a, c) {
        c = c || " ";
        return pa(
          a,
          function (d) {
            return this.quoteTag(d);
          },
          this
        ).join(c);
      },
    };
    W(x, Wb);
    var N = ja.extend({
      constructor: function (a) {
        a = a || {};
        W(
          this,
          {
            id: null,
            user: "",
            mode: 2,
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
        this.extra = W({ nth: 1 }, this.extra || {});
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
        return (this.constructor.del ? this.constructor : N).del(this, a);
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
        M(a, function (d) {
          if (
            Ia(c.groups, function (f) {
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
          this.type == ia
            ? $("em." + S.HIGHLIGHT_ID_CLASS + this.id)
            : $(
                "." +
                  S.HIGHLIGHT_TYPE_CLASS +
                  this.type +
                  "." +
                  S.HIGHLIGHT_ID_CLASS +
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
        return eb(this.comments, function (c) {
          return c.matchFilter(a);
        });
      },
      jumpHere: function (a, c) {
        I("[Annotation] jump here");
        if (arguments.length == 0) a = true;
        if (this.paintedSuccessfully) {
          var d =
            this.type == ia
              ? $("em." + ha.HIGHLIGHT_ID_CLASS + this.id)
              : this.getEle();
          if (d.size() == 0)
            k.notify(
              "No corresponding text is found on the page. This page has probably been changed since you highlighted it."
            );
          else {
            if (a) {
              var f = d.eq(0).offset();
              window.scrollTo(f.left, f.top - 40);
            }
            d = d.eq(d.size() - 1);
            f = d.offset();
            e = { pageX: f.left, pageY: f.top + d.height() + 15 };
            H.hide();
            if (c || this.comments.length > 0)
              H.show(e, this, c ? "add" : "view", 400);
          }
        } else
          k.notify(
            "No corresponding text is found on the page. This page has probably been changed since you highlighted it."
          );
      },
      activate: function () {},
    });
    W(N, {
      add: function (a, c, d, f) {
        I("[Annotation] add", a, c);
        c = W({ dontPaint: false, dontSave: false, dontSort: false }, c || {});
        var h;
        switch (a.type) {
          case ia:
            h = bb;
            break;
          case Wa:
            h = ta;
            break;
          case fa:
            h = vb;
            break;
          case 4:
            h = bb;
            break;
          default:
            return null;
        }
        a = new h(a);
        I("[Annotation] add: new ctor(ann) returned");
        if (!a.saved) {
          if (!a.id) {
            if (!k.bookmark.urlId) k.bookmark.urlId = Ja(window.location.href);
            a.id =
              d == "video"
                ? Ja(a.content)
                : Ja(a.content + a.user + k.bookmark.urlId + a.nth);
          }
          a.extra.nth = a.nth;
          if (typeof a.code !== "undefined") a.extra.code = a.code;
          a.extra.color = f ? f : k.penColor;
        }
        k.annotations.push(a);
        if (!c.dontPaint) {
          a.paint();
          var i = "id_" + a.id;
          if ($("." + i).length != 0)
            if ($("." + i).length > 1) {
              f = $("." + i)[0];
              $(f).scrollmarker();
            } else $("." + i).scrollmarker();
          $("." + i).on("dragstart", function (l) {
            l = l.originalEvent;
            var m = "";
            $("." + i).each(function () {
              if ($(this).hasClass("diigoHighlight")) {
                if ($(this).find(".diigoIcon").length > 0) {
                  var t = $(this).clone();
                  t.find(".diigoIcon").remove();
                  t = $(t).text();
                } else t = $(this).text();
                if ($(this).parent()[0].tagName == "A")
                  t =
                    '<a href="' +
                    $(this).parent().attr("href") +
                    '"">' +
                    t +
                    "</a>";
                m += t + " ";
              }
            });
            l.dataTransfer.setData("text/plain", m);
            l.dataTransfer.setData("text/diigoHighlight", m);
            l.dataTransfer.setDragImage(Bb(m), -10, -10);
          });
          aa.j && a.type == ia && aa.add(a);
        }
        a.paintedSuccessfully && !c.dontSort && N.sort();
        if (!a.saved && !c.dontSave) {
          I("save to server");
          z.addAnnotation(a, d);
        }
        a.onlyInGroup || k.fireEvent("ann_add", [a]);
        a.groups &&
          M(a.groups, function (l) {
            k.fireEvent("ann_add", [a, l.name]);
          });
        return a;
      },
      del: function (a, c) {
        a = this.find(a);
        if (c) {
          var d = Ia(a.groups, function (f) {
            return f.name == c && f.user == k.user;
          });
          a.saved && z.deleteAnnotation(a, a.groups[d].idInGroup);
          a.groups.splice(d, 1);
          k.fireEvent("ann_del", [a, c]);
        } else {
          if (a.onlyInGroup) throw "Annotation.del: onlyInGroup!";
          a.onlyInGroup = true;
          a.mode = 3;
          a.saved && z.deleteAnnotation(a, null);
          k.fireEvent("ann_del", [a]);
        }
        if (a.onlyInGroup && a.groups.length == 0) {
          a.unpaint();
          k.annotations.splice(k.annotations.indexOf(a), 1);
        } else a.paint();
        $("#" + ("id_" + a.id)).remove();
        aa.editItem("remove", a);
        return a;
      },
      find: function (a) {
        a = a.id || a;
        return Pa(k.annotations, function (c) {
          return c.id == a;
        });
      },
      findByInlineComment: function (a) {
        var c = a.id || a;
        return Pa(k.annotations, function (d) {
          return Pa(d.comments, function (f) {
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
    var bb = N.extend({
      constructor: function (a) {
        this.base(a || {});
      },
    });
    W(bb, {
      paint: function (a) {
        a = N.find(a);
        ab.paint(a);
      },
      unpaint: function (a) {
        a = N.find(a);
        ab.unpaint(a);
      },
    });
    var ta = N.extend({
      constructor: function (a) {
        a = a || {};
        this.base(a);
        this.type = Wa;
        this.extra = W({}, this.extra || {});
        a = k.bookmark.url;
        if (!this.content)
          if (this._focusedNode)
            this.content = Y('<img src="#{0}" title="#{1}" alt="#{2}" />', [
              ta.makeAbsUrl(this._focusedNode.src, a),
              this._focusedNode.title,
              this._focusedNode.alt,
            ]);
          else
            throw "Must specify either content or _focusedNode for image highlight";
        if (!this.extra.imageUrl)
          this.extra.imageUrl = ta.makeAbsUrl(
            (this.content.match(/<img.*?\s+src=['"]?(.*?)['"]?[\s>]/im) ||
              [])[1] || "",
            a
          );
        if (!this.extra.imageUrl) throw "invalid imageUrl";
        if (!this.saved && this._focusedNode)
          for (
            var c = ta.makeRelUrl(this.extra.imageUrl, a),
              d = ta.makeAbsUrl(this.extra.imageUrl, a),
              f = document.getElementsByTagName("img"),
              h = 0,
              i = 0,
              l = f.length,
              m;
            (m = f[i]), i < l;
            i++
          )
            if (m.src.indexOf(c) > -1 && d == ta.makeAbsUrl(m.src, a)) {
              h++;
              if (m == this._focusedNode) {
                this.extra.nth = h;
                break;
              }
            }
      },
      getEle: function () {
        var a = null;
        a = $("img." + ha.HIGHLIGHT_ID_CLASS);
        if (a.size() == 0)
          for (
            var c = ta.makeRelUrl(this.extra.imageUrl, k.bookmark.url),
              d = ta.makeAbsUrl(this.extra.imageUrl, k.bookmark.url),
              f = document.getElementsByTagName("img"),
              h = 0,
              i = 0,
              l = f.length,
              m;
            (m = f[i]), i < l;
            i++
          )
            if (
              m.src.indexOf(c) > -1 &&
              d == ta.makeAbsUrl(m.src, k.bookmark.url)
            ) {
              h++;
              if (h == this.extra.nth) return $(m);
            }
        return a;
      },
    });
    W(ta, {
      paint: function (a) {
        function c(i, l) {
          $(i)
            .addClass(S.HIGHLIGHT_ICON_CLASS)
            .addClass(S.HIGHLIGHT_ID_CLASS + l.id)
            .addClass(S.HIGHLIGHT_TYPE_CLASS + ANNOTATION_TYPE_ICON)
            .addClass("ImageIcon")
            .toggleClass("public", l.isPublic() && f.length > 0)
            .toggleClass("private", l.isPrivate() && f.length > 0)
            .toggleClass("group", l.inAnyGroups() && f.length > 0)
            .toggleClass("diigoHighlightcommented", f.length > 0);
          if (f.length > 0) {
            $(i).html(
              "<span class='" +
                S.HIGHLIGHT_ID_CLASS +
                l.id +
                " " +
                S.HIGHLIGHT_ICON_CLASS +
                " " +
                S.HIGHLIGHT_TYPE_CLASS +
                ANNOTATION_TYPE_ICON +
                "'>" +
                f.length +
                "</span>"
            );
            $(i).attr("title", Z.tipMsg(l));
            var m = l.getPageOffset();
            $(i).css({ left: m.left, top: m.top });
          } else {
            $(i).html("");
            $(i).attr("title", "");
          }
          return i;
        }
        a = N.find(a);
        var d = a.getEle();
        if (d) {
          var f = a.comments;
          d.addClass(ha.HIGHLIGHT_CLASS)
            .addClass(ha.HIGHLIGHT_ID_CLASS + a.id)
            .addClass(ha.HIGHLIGHT_TYPE_CLASS + a.type)
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
            $("div." + S.HIGHLIGHT_ID_CLASS + a.id).size() <= 0 &&
            d.size() > 0
          ) {
            h = $(Ba.createElement("div"));
            h.insertBefore(d);
            c(h, a);
          } else c("div." + S.HIGHLIGHT_ID_CLASS + a.id, a);
        }
      },
      unpaint: function (a) {
        a = N.find(a);
        var c = a.getEle();
        c &&
          c
            .removeClass(ha.HIGHLIGHT_ID_CLASS + a.id)
            .removeClass(ha.HIGHLIGHT_CLASS)
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
    var vb = N.extend({
      constructor: function (a) {
        a = a || {};
        this.base(a);
        this.saving = false;
        if (!this.id)
          this.id = Ja(
            Math.random() + Math.random() + new Date().getTime().toString()
          );
        this.type = fa;
      },
      fixExtra: function () {
        var a =
            5 *
            eb(k.annotations, function (i) {
              return i.type == fa;
            }).length,
          c = $(document),
          d = c.scrollTop(),
          f = c.scrollLeft(),
          h = c.height();
        c = c.width();
        this.extra = W(
          { left: a + f + 10, top: a + d + 50 },
          this.extra || {},
          { winWidth: c, winHeight: h }
        );
      },
      getEle: function () {
        return $("." + ha.HIGHLIGHT_ID_CLASS + this.id);
      },
    });
    W(vb, {
      paint: function (a) {
        I("[FloatNote] paint: called");
        a = N.find(a);
        a.fixExtra();
        if (a.painted) {
          var c = a.getEle();
          if (c) {
            c.removeClass("diigoadd yellow blue green pink").addClass(
              a.extra.color
            );
            var d = H.getCommentsInfo(a.comments);
            d == "onlyPrivate" || d == "noComment"
              ? c.removeClass("group").addClass("private")
              : c.removeClass("private").addClass("group");
            setTimeout(function () {
              (H.getCommentCount("group", a.comments) || "") > 0 &&
                c
                  .find("span")
                  .text(H.getCommentCount("group", a.comments))
                  .show();
            }, 100);
          }
        } else {
          c = $(mb)
            .addClass(ha.HIGHLIGHT_CLASS)
            .addClass(ha.HIGHLIGHT_ID_CLASS + a.id)
            .addClass(ha.HIGHLIGHT_TYPE_CLASS + a.type)
            .css({ left: a.extra.left, top: a.extra.top })
            .appendTo(document.body);
          if (x.stickyNoteByContextMenu == true) {
            c.css({ left: x.rightClickPos.x, top: x.rightClickPos.y });
            x.stickyNoteByContextMenu = false;
          }
          c.find("span").text(H.getCommentCount("group", a.comments) || "");
          H.getCommentCount("group", a.comments) == 0 && c.find("span").hide();
          d = H.getCommentsInfo(a.comments);
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
        a = N.find(a);
        var c = a.getEle();
        if (c) {
          c.unbind().remove();
          a.painted = a.paintedSuccessfully = false;
        }
      },
      bindEvents: function (a) {
        a = N.find(a);
        var c = a.getEle();
        c.mouseout(function (d) {
          if (d.relatedTarget == this.firstChild) return false;
        });
        new $.Draggable(c, {
          cursor: "default",
          beforeDrag: function () {
            Ra = true;
            k.draggingFloatNote = true;
            I("[FloatNote] before drag: cancel show");
            a.saved && !H.isEditing() && H.hide();
          },
          afterDrag: function () {
            I("[FloatNote] after drag");
            a.extra.left = parseInt(c.css("left"));
            a.extra.top = parseInt(c.css("top"));
            k.draggingFloatNote = false;
            if (a.user == k.user && a.saved) {
              z.updateExtra(a);
              N.sort();
            }
            $(".id_" + a.id).scrollmarker();
          },
        });
      },
    });
    var cb = ja.extend({
        constructor: function (a) {
          W(
            this,
            {
              id: null,
              user: "",
              mode: 2,
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
          M(a, function (d) {
            if (
              Ia(c.groups, function (f) {
                return f.idInGroup == d.idInGroup;
              }) == -1
            ) {
              c.groups.push(d);
              k.fireEvent((c instanceof ya ? "pc" : "ic") + "_add", [
                c,
                d.name,
              ]);
            }
          });
        },
      }),
      ya = cb.extend({
        constructor: function (a) {
          this.base(a);
        },
      });
    W(ya, {
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
          var d = Ia(a.groups, function (f) {
            return f.name == c && f.user == k.user;
          });
          a.saved && z.deletePageComment(a, a.groups[d].idInGroup);
          a.groups.splice(d, 1);
          k.fireEvent("pc_del", [a, c]);
        } else {
          if (a.onlyInGroup) throw "PageComment.del: onlyInGroup!";
          a.onlyInGroup = true;
          a.mode = 3;
          a.saved && z.deletePageComment(a, null);
          k.fireEvent("pc_del", [a]);
        }
        a.onlyInGroup &&
          a.groups.length == 0 &&
          k.pageComments.splice(k.pageComments.indexOf(a), 1);
        return a;
      },
      find: function (a) {
        a = a.id || a;
        return Pa(k.pageComments, function (c) {
          return c.id == a;
        });
      },
    });
    var va = cb.extend({
      constructor: function (a) {
        a = W({ annotationId: null }, a);
        this.base(a);
        if (!this.annotationId)
          throw "[InlineComment ctr] must specify annotationId";
      },
      getAnnotation: function () {
        if (!this.annotation) this.annotation = N.find(this.annotationId);
        return this.annotation;
      },
    });
    W(va, {
      add: function (a) {
        a instanceof this || (a = new this(a));
        ann = a.getAnnotation();
        if (ann.getComments("_noGroups").length > 0) {
          if (a.mode != ann.mode && a.mode != 3) a.mode = ann.mode;
        } else if (a.mode != ann.mode && a.mode != 3) {
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
        I("[InlineComment.del]", a, c, a.onlyInGroup ? "onlyInGroup" : "");
        var d = function () {
          i && i();
        };
        if (c) {
          var f = Ia(a.groups, function (l) {
            return l.name == c && l.user == k.user;
          });
          a.saved && z.deleteInlineComment(a, a.groups[f].idInGroup, d);
          a.groups.splice(f, 1);
          k.fireEvent("ic_del", [a, c]);
        } else {
          if (a.onlyInGroup) throw "InlineComment.del: onlyInGroup!";
          a.onlyInGroup = true;
          a.mode = 3;
          a.saved && z.deleteInlineComment(a, null, d);
          k.fireEvent("ic_del", [a]);
        }
        if (a.onlyInGroup && a.groups.length == 0) {
          var h = a.getAnnotation();
          h.comments.splice(h.comments.indexOf(a), 1);
          if (h.isPublic() && h.getComments("_smasher").length == 0) {
            h.mode = 2;
            k.fireEvent("ann_changeMode", [h]);
          }
          h.paintedSuccessfully && h.paint();
          d = h.getComments(c ? c : "_smasher");
          if (h.type == fa && d.length == 0)
            var i = function () {
              h.del(c);
            };
        }
        return a;
      },
      find: function (a) {
        a = a.id || a;
        var c = N.findByInlineComment(a);
        if (!c) return null;
        return Pa(c.comments, function (d) {
          return d.id == a;
        });
      },
    });
    M([ra, N, cb], function (a) {
      a.implement({
        isPublic: function () {
          return this.mode == 0 && !this.onlyInGroup;
        },
        isPrivate: function () {
          return this.mode == 2 && !this.onlyInGroup;
        },
        inGroup: function (c, d) {
          return Fb(this.groups, function (f) {
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
    var z = {
        count: 3,
        transId: 1,
        callbacks: {},
        callback: function (a, c, d, f) {
          if (a) {
            var h = a.transId,
              i = a.cmd;
            I("[WebAPI response]", i, a.code, a, a.result);
          }
          if (a) {
            this["cb_" + i] && this["cb_" + i](a);
            a.code == 1 &&
              this["cb_" + i + "_success"] &&
              this["cb_" + i + "_success"](a.result, f);
            a.code == 0 &&
              this["cb_" + i + "_failure"] &&
              this["cb_" + i + "_failure"](a.result, a.status, f);
          }
          if ((c == 0 || c == 500) && this["cb_" + d + "_failure"])
            this["cb_" + d + "_failure"](c, f);
          this.callbacks[h] && this.callbacks[h](a.result);
          delete this.callbacks[h];
        },
        invoke: function (a, c, d, f) {
          var h = this.transId++;
          if (d) this.callbacks[h] = d;
          I("[WebAPI request]", a, c);
          var i = this;
          x.Messenger.send(
            {
              name: "WebAPI",
              details: {
                cmd: a,
                data: c,
                transId: h,
                isInGroup: /group.diigo.(.*)\/item\/pdf/.test(
                  window.location.href
                ),
              },
            },
            function (l) {
              i.callback(l.resp, l.status, l.cmd, f);
            }
          );
        },
        createList: function (a) {
          this.invoke("list_create", { title: a, mode: 2 });
        },
        cb_list_create_success: function (a) {
          k.outliners.push(a.list);
          k.outliners.sort(function (c, d) {
            return c.title > d.title ? 1 : -1;
          });
          chrome.runtime.sendMessage({
            name: "listCreateSuccess",
            data: a.list,
          });
          if (U.shown) {
            U.updateLists();
            $("#diigo-list")
              .find("select")
              .find("option[value=" + a.list.id + "]")
              .attr("selected", true);
            $("#diigo-list-addBtn").removeClass("processing");
            $("#diigo-list-addInput").val("");
            $("#diigo-list-add").hide();
            $("#diigo-list").show();
          }
          if ($("#diigosc-savepopup").length > 0) {
            ka.updateLists();
            $("#diigosc-lists")
              .find("option[value=" + a.list.id + "]")
              .attr("selected", true);
            $("#diigosc-list-addBtn").removeClass("processing");
            $("#diigosc-list-addInput").val("");
            $("#diigosc-list-add").hide();
            $("#diigosc-lists-and-groups").find("select").show();
          }
          chrome.runtime.sendMessage({
            name: "listCreateSuccessAndUpdateLists",
            lists: k.myBmLists,
            newlist: a.list,
            outliners: k.outliners,
          });
          Sa({
            type: "listCreateSuccessAndUpdateLists",
            lists: k.myBmLists,
            newlist: a.list,
            outliners: k.outliners,
          });
        },
        cb_list_create_failure: function (a) {
          if (a == 500)
            L.notifyAlert(chrome.i18n.getMessage("server_error"), {
              timeout: 0,
            });
          else
            a == 0 &&
              L.notifyAlert(chrome.i18n.getMessage("network_error"), {
                timeout: 0,
              });
          U.shown && $("#diigo-list-addBtn").removeClass("processing");
          $("#diigosc-savepopup").length > 0 &&
            $("#diigosc-list-addBtn").removeClass("processing");
          chrome.runtime.sendMessage({
            name: "listCreateFailureAndUpdateLists",
          });
          Sa({ type: "listCreateFailureAndUpdateLists" });
        },
        uploadImage: function (a, c, d, f, h, i, l, m, t) {
          f = a.dataURL.slice(("data:image/" + i + ";base64,").length);
          var D = c == "outliner";
          if (D) c = "image";
          b = atob(f);
          c = {
            type: c,
            title: a.title,
            description: "",
            mode: a.mode,
            src_url: a.src_url,
            src_title: a.src_title,
            src_description: "",
            src_unread: false,
            file_type: i,
            file_name: l,
            single_item: a.single_item,
            file_md5: Ja(b),
            shareit: false,
            twitterit: d,
            tags: a.tags,
            extra: h,
          };
          I(a.list, a.groups);
          if (a.list != 0 && a.list != -1) c.lists = a.list;
          if (a.groups != 0 && a.list != -1) c.groups = a.groups;
          d = function (A) {
            if (D) {
              ma.port.postMessage({
                type: "upload-image-done",
                resp: A,
                image_src: a.image_src,
              });
              yb.hide();
            }
          };
          if (typeof t !== "undefined") {
            d = k.bookmark;
            c.mode = t["private"] ? (d.mode = 2) : (d.mode = 0);
            c.unread = t.unread ? (d.unread = true) : (d.unread = false);
            c.description = d.description = t.description;
            c.tags = d.tags = t.tags;
            c.lists = d.toAddToBookmarkLists = t.shareLists || [t.outliner];
            c.groups = d.toShareToGroups = t.shareGroups || [t.group];
            d = function () {
              L.notifyOK("Bookmark saved in research mode.");
            };
          }
          c.file_content = f;
          this.invoke("upload_file", c, d, m);
        },
        cb_upload_file_success: function (a, c) {
          ma.opened || L.notifyOK(chrome.i18n.getMessage("upload_success"));
          z.loadMyStuff("permissions");
          if (k.generated == false)
            O.send({ name: "initialData" }, function (f) {
              K.updateCache(f.preloadedPrefs);
              k.reset(f);
              k.signedIn && f.shoudLoadMyStuff && z.loadMyStuff();
              if (c) f.loadBookmarkResult.saved = true;
              if (f.loadBookmarkResult) {
                I("[bookmark info already loaded]", f.loadBookmarkResult);
                z.cb_bm_loadBookmark_success(f.loadBookmarkResult);
              } else f.shouldLoadBookmarkByMyself && k.signedIn && z.loadBookmark();
            });
          else if (c && k.bookmark.saved == false) {
            var d = k.bookmark;
            d.saved = true;
            d.url = a.src_url;
            d.urlId = a.src_urlId;
            d.datetime = a.datetime;
            O.send({ name: "bookmarkChanged", details: { saved: true } });
            J.shown && J.updateUI();
          }
        },
        cb_upload_file_failure: function (a) {
          if (a == 500)
            L.notifyAlert(chrome.i18n.getMessage("server_error"), {
              timeout: 0,
            });
          else
            a == 0 &&
              L.notifyAlert(chrome.i18n.getMessage("network_error"), {
                timeout: 0,
              });
        },
        loadBookmark: function (a) {
          var c = {
            url: k.bookmark.url,
            what: "bookmarkInfo annotations pageComments",
            permalinkParams: k.launchMode.permalink ? k.permalinkParams : null,
          };
          if (c.permalinkParams) c.url = c.permalinkParams.url;
          callback = function () {};
          this.invoke("bm_loadBookmark", c, callback, a);
        },
        cb_bm_loadBookmark_success: function (a, c) {
          var d = k.bookmark;
          if (k.generated == false) {
            d.loaded = true;
            Ya(d, a, Va("url urlId annotated groups saved b_id"));
            d.saved &&
              a.bookmarkInfo &&
              Ya(
                d,
                a.bookmarkInfo,
                Va(
                  "title mode tags unread alert description datetime onlyInGroup lists outliners"
                )
              );
            k._supressEvents = true;
            a.pageComments &&
              M($b(a.pageComments), function (f) {
                ya.add(W({ saved: true }, f));
              });
            if (a.annotations) {
              k.annotations = [];
              M(a.annotations, function (f) {
                var h = N.add(
                  Ya(
                    { saved: true },
                    f,
                    Va(
                      "id user realName mode type content datetime extra groups onlyInGroup"
                    )
                  ),
                  { dontPaint: true, dontSort: true }
                );
                M(f.comments, function (i) {
                  va.add(W({ saved: true, annotationId: h.id }, i));
                });
              });
            }
            k.generated = true;
            O.handlers.getCtx();
          }
          k.unpaintAllAnnotations();
          window.Ctx = k;
          if (c == "showbar") {
            k.paintAllAnnotations();
            N.sort();
          }
          k._supressEvents = false;
          c == "showbar" && J.updateUI();
          U.bookmarkLoaded();
          c != "prepareCtx" &&
            O.send({ name: "bookmarkChanged", details: { saved: d.saved } });
          k.bookmark.saved == true &&
            chrome.runtime.sendMessage({ name: "saved" });
        },
        saveBookmark: function (a, c, d, f) {
          x.Messenger.send({ name: "updateBrowserActionIconToDoing" });
          var h = k.bookmark,
            i = {
              url: h.url,
              mode: h.mode,
              title: h.title,
              tags: h.tags,
              description: h.description,
              unread: h.unread,
              groups: h.toShareToGroups,
              shareExistingAnnotations: h.toShareExistingAnnotations,
              lists: h.toAddToBookmarkLists,
            };
          if (!h.url) {
            i.url = window.location.href;
            i.title = document.title;
          }
          var l;
          if (a) {
            if ((l = a.pageComment)) {
              i.pageComment = {
                content: l.content,
                mode: l.mode,
                groups: l.groups,
                justForGroups: l.justForGroups,
              };
              i.groups = l.groups;
            }
            if ((l = a.annotation)) {
              i.annotation = {
                id: l.id,
                content: l.content,
                type: l.type,
                groups: l.groups,
                extra: l.extra,
              };
              i.groups = l.groups;
              if ((l = a.annotation.inlineComment)) {
                i.annotation.inlineComment = {
                  mode: l.mode,
                  content: l.content,
                  groups: l.groups,
                  justForGroups: l.justForGroups,
                };
                i.groups = l.groups;
              }
            }
            if (a.mode) i.mode = a.mode;
            if (a.unread) i.unread = a.unread;
          }
          if (typeof f != "undefined") {
            i.mode = f._private === true ? (h.mode = 2) : (h.mode = 0);
            i.unread =
              f.unread === true ? (h.unread = true) : (h.unread = false);
            i.description = h.description = f.description;
            i.tags = h.tags = f.tags;
            i.lists = h.toAddToBookmarkLists = f.shareLists || [f.outliner];
            i.groups = h.toShareToGroups = f.shareGroups || [f.group];
          }
          this.invoke("bm_saveBookmark", i, c, d);
          h.toAddToBookmarkLists = null;
          h.toShareToGroups = null;
          h.toShareExistingAnnotations = false;
        },
        cb_bm_saveBookmark_success: function (a, c, d) {
          function f(m) {
            var t = m.split("-");
            m = parseInt(t[2]).toString(36);
            var D = parseInt(t[0]).toString(36);
            t = parseInt(t[1]).toString(36);
            return D + "/" + t + "/" + m;
          }
          this.count = 3;
          var h,
            i = k.bookmark;
          i.saved = true;
          i.url = a.url;
          i.urlId = a.urlId;
          i.b_id = a.b_id;
          i.datetime = a.datetime;
          i.alert = a.alert;
          if (a.groups.length > 0) {
            i.addGroups(a.groups);
            if ((h = a.groups[0].access_mode) && (h == 5 || h == 6)) {
              h =
                "https://team.diigo.com/site/text_view/" +
                f(a.groups[0].idInGroup);
              k.notify(
                'Site archived in Teams. <br><a target="_blank" id="team_url" href="' +
                  h +
                  '">Click here to go directly to the team clean reader page.</a>',
                3e4
              );
            }
          }
          a.lists &&
            a.lists.forEach(function (m) {
              i.lists.push(m);
            });
          if ((h = a.pageComment))
            ya.add({
              id: h.id,
              user: h.user,
              realName: h.realName,
              mode: h.mode,
              datetime: h.datetime,
              content: h.content,
              userOnline: h.userOnline,
              groups: h.groups,
              onlyInGroup: h.onlyInGroup,
              saved: true,
            });
          if ((h = a.annotation)) {
            var l = N.find(h.id);
            l.saved = true;
            h.groups && l.addGroups(h.groups);
            if ((h = a.annotation.inlineComment))
              va.add({
                id: h.id,
                annotationId: h.annotationId,
                user: h.user,
                realName: h.realName,
                mode: h.mode,
                datetime: h.datetime,
                content: h.content,
                userOnline: h.userOnline,
                groups: h.groups,
                onlyInGroup: h.onlyInGroup,
                saved: true,
              });
          }
          if ((h = a.result_shareExisting)) {
            M(h.pageComments, function (m) {
              var t = ya.find(m.id);
              t && t.addGroups(m.groups);
            });
            M(h.annotations, function (m) {
              var t = N.find(m);
              if (t) {
                t.addGroups(m.groups);
                m.inlineComments &&
                  M(m.inlineComments, function (D) {
                    var A = va.find(D.id);
                    A && A.addGroups(D.groups);
                  });
              }
            });
          }
          J.shown && J.updateUI();
          i.saved &&
            O.send({ name: "bookmarkChanged", details: { saved: true } });
          if (c == "qsave") {
            k.generated = true;
            chrome.runtime.sendMessage({
              name: "showToolbar",
              type: "qsave",
              tabId: d,
            });
            chrome.runtime.sendMessage({ name: "popupclose" });
          } else if (c == "showbar") {
            J.show();
            k.toggleSilent(false);
            k.unpaintAllAnnotations();
            k.paintAllAnnotations();
            N.sort();
          } else if (c == "readlater")
            K.get("prefs.autoCloseReadLater", function (m) {
              m == "true" && chrome.runtime.sendMessage({ name: "closeTab" });
            });
          else if (c == "video")
            if (a.annotation) {
              c = a.annotation.id;
              $("." + c)
                .addClass("success")
                .find("#diigo-video-loading-text")
                .text("Success!");
              $("." + c)
                .delay(800)
                .fadeOut(function () {
                  var m = $(this).data("diigo-target");
                  $(m).attr("diigo-clipping", "false");
                  $(this).remove();
                });
            } else {
              $("#diigo-video-collector-loading")
                .addClass("success")
                .find("#diigo-video-loading-text")
                .text("Success!");
              $("#diigo-video-collector-loading")
                .delay(800)
                .fadeOut(function () {
                  var m = $("#diigo-video-collector-loading").data(
                    "diigo-target"
                  );
                  $(m).attr("diigo-clipping", "false");
                  $(this).remove();
                });
            }
          if (a.annotation && a.annotation.annPermission) {
            k.permissions.annPermission = a.annotation.annPermission;
            chrome.runtime.sendMessage({
              name: "updatePermission",
              type: "highlight",
              data: a.annotation.annPermission,
            });
          }
        },
        cb_bm_saveBookmark_failure: function (a, c) {
          if (this.count > 0) {
            this.saveBookmark(null, function () {}, c);
            this.count -= 1;
          } else {
            if (a == 500)
              L.notifyAlert(chrome.i18n.getMessage("bookmark_server_error"), {
                timeout: 0,
              });
            else
              a == 0 &&
                L.notifyAlert(
                  chrome.i18n.getMessage("bookmark_network_error"),
                  { timeout: 0 }
                );
            $(".diigolet.notice>div.alert p #retry").unbind("click");
            $(".diigolet.notice>div.alert p #retry").click(function (d) {
              d.preventDefault();
              z.saveBookmark(null, function () {}, c);
              L.hide();
            });
            O.send({
              name: "bookmarkChanged",
              details: { saved: k.bookmark.saved },
            });
          }
        },
        deleteBookmark: function (a, c) {
          a.urlId || alert("a");
          this.invoke("bm_deleteBookmark", { urlId: a.urlId }, c);
        },
        cb_bm_deleteBookmark_success: function (a) {
          var c = (k.bookmark = ra.fromDocument());
          c.loaded = true;
          k.fireEvent("bm_del", [c]);
          k.pageComments
            .filter(function (d) {
              return d.user == k.user && !d.onlyInGroup;
            })
            .forEach(function (d) {
              d.saved = false;
              ya.del(d);
            });
          k.annotations
            .filter(function (d) {
              return d.user == k.user && !d.onlyInGroup;
            })
            .forEach(function (d) {
              d.saved = false;
              d.del();
            });
          k.annotations.forEach(function (d) {
            d.comments.forEach(function (f) {
              if (f.user == k.user && !f.onlyInGroup) {
                f.saved = false;
                va.del(f);
              }
            });
          });
          J.shown && J.updateUI();
          O.send({ name: "bookmarkChanged", details: { saved: false } });
          if (a.annPermission) {
            k.permissions.annPermission = a.annPermission;
            chrome.runtime.sendMessage({
              name: "updatePermission",
              type: "highlight",
              data: a.annPermission,
            });
          }
        },
        addAnnotation: function (a, c) {
          var d = {
            urlId: k.bookmark.urlId,
            id: a.id,
            content: a.content,
            type: a.type,
            extra: a.extra,
            groups: a.type == fa ? null : k.bookmark.getGroupNamesSharedByMe(),
          };
          if (a._toAddInlineComment) {
            d.inlineComment = a._toAddInlineComment;
            delete a._toAddInlineComment;
          }
          if (k.bookmark.saved) {
            c == "small" && chrome.runtime.sendMessage({ name: "showToolbar" });
            h = function () {};
            this.invoke("annotation_add", d, h, c);
          } else {
            var f = this,
              h = function () {};
            chrome.storage.local.get(null, function (i) {
              if (i.researchMode) {
                h = function () {
                  L.notifyOK("Bookmark saved using remembered settings.");
                };
                c == "video"
                  ? f.saveBookmark(
                      { annotation: d },
                      h,
                      "video",
                      i.researchModeData
                    )
                  : f.saveBookmark(
                      { annotation: d },
                      h,
                      "qsave",
                      i.researchModeData
                    );
              } else if (c == "video")
                f.saveBookmark({ annotation: d }, h, "video");
              else {
                var l = { annotation: d };
                K.get(
                  [
                    "prefs.bookmark.privateByDefault",
                    "prefs.bookmark.unreadByDefault",
                  ],
                  function (m) {
                    if (m["prefs.bookmark.privateByDefault"] == "true")
                      l.mode = 2;
                    if (m["prefs.bookmark.unreadByDefault"] == "true")
                      l.unread = true;
                    f.saveBookmark(l, h, "qsave");
                  }
                );
              }
            });
          }
        },
        cb_annotation_add_success: function (a, c) {
          I(c, a);
          if (c == "video") {
            $("." + a.id)
              .addClass("success")
              .find("#diigo-video-loading-text")
              .text("Success!");
            $("." + a.id)
              .delay(800)
              .fadeOut(function () {
                var f = $(this).data("diigo-target");
                $(f).attr("diigo-clipping", "false");
                $(this).remove();
              });
          }
          var d = N.find(a.id);
          d.saving = false;
          d.saved = true;
          d.onlyInGroup = a.onlyInGroup;
          a.groups && d.addGroups(a.groups);
          a.__bookmark_groups && k.bookmark.addGroups(a.__bookmark_groups);
          a.inlineComment && this.cb_ic_add_success(a.inlineComment);
          if (a.annPermission) {
            k.permissions.annPermission = a.annPermission;
            chrome.runtime.sendMessage({
              name: "updatePermission",
              type: "highlight",
              data: a.annPermission,
            });
          }
          aa.j && d.type == fa && aa.add(d);
        },
        deleteAnnotation: function (a, c) {
          var d = { urlId: k.bookmark.urlId };
          if (c) d.idInGroup = c;
          else d.id = a.id;
          this.invoke("annotation_delete", d);
        },
        cb_annotation_delete_success: function (a) {
          if (a.annPermission) {
            k.permissions.annPermission = a.annPermission;
            chrome.runtime.sendMessage({
              name: "updatePermission",
              type: "highlight",
              data: a.annPermission,
            });
          }
        },
        cb_annotation_add_failure: function (a, c) {
          c == "video" &&
            $("." + a.id)
              .addClass("fail")
              .find("#diigo-video-loading-text")
              .html('Failed!<a href="#">Retry</a>');
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
        cb_pc_add_success: function (a) {
          ya.add({
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
          if (k.bookmark.urlId == "")
            k.bookmark.urlId = Ja(window.location.href);
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
          va.add({
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
            N.find(a.annotationId).addGroups(a.__annotation_groups);
          a.__bookmark_groups && k.bookmark.addGroups(a.__bookmark_groups);
        },
        deleteInlineComment: function (a, c, d) {
          var f = { urlId: k.bookmark.urlId };
          if (c) f.idInGroup = c;
          else f.id = a.id;
          this.invoke("ic_delete", f, d);
        },
        cb_ic_delete_success: function () {},
        editInlineComment: function (a, c) {
          if (k.bookmark.urlId == "")
            k.bookmark.urlId = Ja(window.location.href);
          this.invoke("ic_edit", {
            id: a,
            urlId: k.bookmark.urlId,
            content: c,
          });
        },
        cb_ic_edit_success: function (a) {
          va.edit(a.id, a.content);
        },
        loadMyStuff: function (a) {
          a =
            a ||
            "myTags myGroups myProfile myBookmarkLists myContacts permissions";
          this.invoke("user_loadMyStuff", { what: a });
        },
        cb_user_loadMyStuff_success: function (a) {
          if (a.myTags) k.myTags = a.myTags;
          if (a.myTagsWithCount) k.myTagsWithCount = a.myTagsWithCount;
          if (a.myGroups) {
            k.myGroups = a.myGroups;
            U.updateGroups();
            chrome.runtime.sendMessage({
              name: "updateGroups",
              data: a.myGroups,
            });
          }
          if (a.myList) {
            k.myBmLists = a.myList;
            k.outliners = a.outliners;
            U.updateLists();
            chrome.runtime.sendMessage({
              name: "updateLists",
              data: { list: a.myList, outliners: a.outliners },
            });
          }
          if (a.myProfile) k.realName = a.myProfile.realName;
          if (a.myContacts) {
            k.myContacts = a.myContacts;
            R.onMyContactsUpdate();
          }
          if (a.permissions) {
            k.permissions = a.permissions;
            Fa.onPrivilegeChange();
          }
          x.Messenger.send({
            name: "updateGlobalData",
            details: {
              myTags: k.myTags,
              myTagsWithCount: k.myTagsWithCount,
              myGroups: k.myGroups,
              myBmLists: k.myBmLists,
              outliners: k.outliners,
              realName: k.realName,
              myContacts: k.myContacts,
              permissions: k.permissions,
            },
          });
        },
        updateExtra: function (a) {
          this.invoke("annotation_updateExtra", {
            urlId: k.bookmark.urlId,
            id: a.id,
            idsInGroup: pa(
              eb(a.groups, function (c) {
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
          chrome.runtime.sendMessage({
            name: "updateGroupTag",
            data: k.groupTagsDict,
          });
        },
        signIn: function () {
          this.invoke("user_signIn", {});
        },
        cb_user_signIn_success: function (a) {
          a.signedIn && z.loadBookmark();
        },
        signOut: function () {
          this.invoke("user_signOut", {});
        },
        cb_user_signOut_success: function () {
          Ob();
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
      da = {
        shown: false,
        j: null,
        init: function () {
          var a = this;
          a.create();
          a.j
            .find("a.diigoletButton,#diigolet-tb-btnHide")
            .bind("focus", function () {
              this.blur();
            });
          a.jHelpTip = Q("diigolet-help");
          a.j
            .find(".diigoletButton,._hoverAndHideDropdown")
            .bind("mouseover", function () {
              a.jHelpTip.hide();
              var c = $(this).attr("id");
              c == "diigolet-button-highlight" ||
                c == "diigolet-button-highlight-dropdown" ||
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
          }
        },
        hide: function () {
          if (this.shown) {
            this.shown = false;
            this.jHelpTip.hide();
            this.j.slideUp();
          }
        },
        updateUsername: function (a) {
          a = a || k.user;
          $("a#diigolet-tb-btnMyBookmarks").attr({
            href: x.urls.getUserBookmarksPageURL(a),
          });
          this.showInfo(
            k.signedIn
              ? "<em>Welcome " + a + "</em>"
              : '<em><a href="#" title="Sign in into Diigo.com" onclick="return diigolet.handle(event, \'tb_signIn\')">Sign in</a> to add annotations or <a href="https://www.diigo.com/sign-up" title="Create a Diigo account" target="_blank">Create a Diigo account now</a> (free!)</em>',
            null
          );
        },
        updateUI: function () {
          !k.signedIn
            ? $("#diigolet-tb-btnSignIn b b").show()
            : $("#diigolet-tb-btnSignIn b b").hide();
          $("#diigolet-tb-btnMyBookmarks").hide();
          this.updateUsername();
          $("#diigolet-tb-btnComment").toggleClass(
            "commented",
            k.isCommented()
          );
          $("#diigolet-tb-btnBookmark").toggleClass("saved", k.bookmark.saved);
        },
        create: function () {
          var a = Y(hb, {
            DIIGOLET_VERSION: x.version,
            URL_DIIGO: "https://www.diigo.com",
          });
          try {
            var c = (this.j = $(a)
              .css({
                position: $.browser.supportPositionFixed ? "fixed" : "absolute",
              })
              .appendTo(document.body)
              .hide());
          } catch (d) {}
          setTimeout(function () {
            $("#diigolet-tb-shadow").addClass("ie6");
          }, 5e3);
          this.showInfo("Loading...", null);
          if ($.browser.opera) {
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
            x.openURL(h);
            return false;
          });
          if (k.launchMode.permalink) {
            $("#diigolet-tb-forward").show();
            $("a._forwardPageUrl", c).attr({ href: k.bookmark.url });
            a = k.permalinkParams.user;
            $("a._forwardUserUrl", c)
              .attr({
                href: a
                  ? "https://www.diigo.com/user/" + a
                  : "https://www.diigo.com",
              })
              .text(a || "Diigo");
            $("a._myBookmarks, a._info", c).hide();
          } else k.launchMode.sandbox && $("a._myBookmarks, a._info", c).hide();
        },
        showInfo: function (a, c) {
          var d = this;
          this.j.find("span._info").html(a);
          c != null &&
            setTimeout(function () {
              d.updateUsername();
            }, c);
        },
        notify: function (a, c, d) {
          c = c == undefined ? 4e3 : c;
          var f;
          if ($.browser.msie && $.browser.version >= 9) {
            tbar = $("#diigolet-toolbar");
            f = $("#diigolet-notify")
              .css({ top: tbar.offset().top + tbar.height() - 5 })
              .show();
          } else f = $("#diigolet-notify").show();
          f.find("span").html(a);
          f.toggleClass("right", d == 1);
          clearTimeout(f[0].timerId);
          if (c)
            f[0].timerId = setTimeout(function () {
              f.fadeOut("slow");
            }, c);
        },
        onHighlightPenModeChanged: function (a) {
          $("#diigolet-button-highlight")
            .find("b b")
            .text(a ? "Highlighter" : "Highlight")
            .end()
            .add("#diigolet-button-highlight-dropdown")
            .toggleClass("checked", a)
            .toggleClass(k.mouseClass, !a);
        },
        onHighlightColorChanged: function (a) {
          $("#diigolet-button-highlight")
            .removeClass(k.defaultColors.join(" "))
            .addClass(a);
          M(k.defaultColors, function (c) {
            $("#diigolet-colorMenu-" + c).removeClass("colorchecked");
          });
          $("#diigolet-colorMenu-" + a).addClass("colorchecked");
        },
      };
    da.refresh = da.updateUI;
    var J = {
      shown: false,
      j: null,
      init: function () {
        var a = this;
        this.j || a.create();
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
          K.get("prefs.lastUsedColor", function (d) {
            k.penColor = d;
            J.onHighlightColorChanged(d, false);
            k.isHighlightPen &&
              $(document.body)
                .removeClass(
                  pa(k.defaultColors, function (f) {
                    return "diigoHiPen-" + f;
                  }).join(" ")
                )
                .addClass("diigoHiPen-" + k.penColor);
          });
          wa.diigoImageClipMode = true;
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
          $("#FN-private-editor").is(":visible") &&
            setTimeout(function () {
              $("#FN-private-editor").focus();
            }, 0);
        }
      },
      hide: function () {
        if (this.shown) {
          this.shown = false;
          $("#diigolet-panel-panel").hide();
          $("body").unbind("mousemove", wa.onMousmove);
          if (xb != true) wa.diigoImageClipMode = false;
          k.isHighlightPen = false;
          $(document.body).removeClass(
            pa(k.defaultColors, function (a) {
              return "diigoHiPen-" + a;
            }).join(" ")
          );
          da.onHighlightPenModeChanged(false);
          J.onHighlightPenModeChanged(false);
          return false;
        }
      },
      remove: function () {
        if (this.j) {
          $("body").unbind("mousemove", wa.onMousmove);
          if (xb != true) wa.diigoImageClipMode = false;
          k.isHighlightPen = false;
          $(document.body).removeClass(
            pa(k.defaultColors, function (a) {
              return "diigoHiPen-" + a;
            }).join(" ")
          );
          da.onHighlightPenModeChanged(false);
          J.onHighlightPenModeChanged(false);
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
        this.j = $(nb).eq(0).appendTo(document.body);
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
            pa(k.defaultColors, function (c) {
              return "diigoHiPen-" + c;
            }).join(" ")
          );
          da.onHighlightPenModeChanged(false);
          J.onHighlightPenModeChanged(false);
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
          R.show();
          return false;
        });
        $("#diigolet-panel-moreBtn li._signIn").click(function () {
          k.signedIn && k.user ? ub("signOut") : Pb();
        });
        $("#diigolet-panel-signInToSave").click(function () {
          Pb();
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
        Zb(a);
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
          pa(k.defaultColors, function (h) {
            return "diigoHiPen-" + h;
          }).join(" ")
        );
        da.onHighlightPenModeChanged(false);
        J.onHighlightPenModeChanged(false);
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
    J.refresh = J.updateUI;
    var ha,
      S,
      ab =
        (ha =
        S =
          {
            HIGHLIGHT_CLASS: "diigoHighlight",
            HIGHLIGHT_ICON_CLASS: "diigoIcon",
            HIGHLIGHT_ID_CLASS: "id_",
            HIGHLIGHT_TYPE_CLASS: "type_",
            isHighlightElement: function (a) {
              try {
                if (
                  a.nodeType == 1 &&
                  a.className &&
                  (a.className.indexOf(this.HIGHLIGHT_CLASS) > -1 ||
                    a.className.indexOf(this.HIGHLIGHT_ICON_CLASS) > -1)
                ) {
                  var c = { type: -1, ids: [] };
                  c.type = Number(
                    a.className.match(
                      RegExp(this.HIGHLIGHT_TYPE_CLASS + "(\\d)")
                    )[1]
                  );
                  ac(
                    a.className,
                    RegExp(
                      this.HIGHLIGHT_ID_CLASS + "([^\\s]+)(?:\\s|$)",
                      "img"
                    ),
                    function (f) {
                      c.ids.push(f[1]);
                    }
                  );
                  c.ids = c.ids.slice(0, 1);
                  return c;
                }
                return false;
              } catch (d) {
                I(d);
              }
            },
            tagBlackList:
              ",applet,area,base,basefont,bdo,button,frame,frameset,iframe,head,hr,img,input,link,map,meta,noframes,noscript,optgroup,option,param,script,select,style,textarea,title,",
            docHtml: "",
            docTxt: "",
            docTxtOffsetList: [],
            domSnapshot: function () {
              var a = this;
              a.docTxt = "";
              a.docTxtOffsetList = [];
              var c = false;
              new sa(
                document.body,
                function (d) {
                  if (d.nodeType == 3) {
                    var f = d.nodeValue.replace(/\s+/gm, " ");
                    if (f.length != 0)
                      if (/^\s$/m.test(f)) {
                        if (!c) {
                          a.docTxt += " ";
                          c = true;
                        }
                      } else {
                        if (c) f = f.replace(/^\s+/m, "");
                        a.docTxtOffsetList.push({
                          offset: a.docTxt.length,
                          node: d,
                          length: f.length,
                        });
                        a.docTxt += f;
                        c = /\s$/m.test(f);
                      }
                  }
                },
                {
                  filter: function (d) {
                    return a.domSnapshotNodeFilter(d);
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
                  S.tagBlackList.indexOf("," + a.tagName.toLowerCase() + ",") ==
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
            findOffset2: function (a, c, d, f, h) {
              var i = {};
              if (d == h) {
                var l = d.node.nodeValue;
                for (c = c - d.offset; c < l.length; c++)
                  if (l.slice(c).replace(/\s+/gm, " ").indexOf(a) == 0) {
                    i.startOffset = c;
                    break;
                  }
                if (i.startOffset !== undefined)
                  for (c = i.startOffset + a.length; c <= l.length; c++)
                    if (
                      l
                        .slice(i.startOffset, c)
                        .replace(/\s+/gm, " ")
                        .indexOf(a) > -1
                    ) {
                      i.endOffset = c;
                      break;
                    }
              } else {
                l = d.node.nodeValue;
                var m = a.slice(0, d.offset + d.length - c);
                for (c = c - d.offset; c <= l.length - m.length; c++)
                  if (l.slice(c).replace(/\s+/gm, " ").indexOf(m) == 0) {
                    i.startOffset = c;
                    break;
                  }
                if (i.startOffset !== undefined) {
                  l = h.node.nodeValue;
                  m = a.slice(a.length - (f - h.offset + 1));
                  for (c = f - h.offset + 1; c <= l.length; c++)
                    if (l.slice(0, c).replace(/\s+/gm, " ").indexOf(m) > -1) {
                      i.endOffset = c;
                      break;
                    }
                }
              }
              return i;
            },
            findOccurrences: function (a, c, d) {
              for (
                var f = [], h = 0, i = 0, l = 0;
                (h = c.indexOf(a, i)) > -1;

              ) {
                l++;
                i = h + 1;
                f.push(h);
                if (d != undefined && l >= d) break;
              }
              return f;
            },
            seek: function (a, c) {
              c = c || 1;
              var d = this.html2txt(a),
                f = -1,
                h = 0,
                i = this.findOccurrences(d, this.docTxt, c);
              if (i.length >= c) f = i[c - 1];
              else if (i.length > 0) f = i[i.length - 1];
              if (f == -1) return null;
              h = f + d.length - 1;
              for (
                var l = this.docTxtOffsetList,
                  m,
                  t,
                  D,
                  A,
                  G,
                  q = undefined,
                  o = 0,
                  r = l.length;
                (i = l[o]), o < r;
                o++
              ) {
                if (
                  f == i.offset ||
                  (f > i.offset && (o + 1 == l.length || f < l[o + 1].offset))
                ) {
                  m = i.node;
                  q = i;
                }
                if (
                  h == i.offset ||
                  (h > i.offset && (o + 1 == l.length || h < l[o + 1].offset))
                ) {
                  t = i.node;
                  D = i;
                  A = this.findOffset2(d, f, q, h, D);
                  D = A.startOffset;
                  A = A.endOffset;
                  break;
                }
              }
              if (m && t) {
                f = function (n, u) {
                  for (; (n = n.parentNode); ) if (n == u) return true;
                  return false;
                };
                for (q = m; (q = q.parentNode); )
                  if (f(t, q)) {
                    G = q;
                    break;
                  }
                if (!G) return null;
              }
              return m && t
                ? {
                    startNode: m,
                    endNode: t,
                    startOffset: D,
                    endOffset: A,
                    endIndex: h,
                    commonAncestor: G,
                    txt: d,
                  }
                : null;
            },
            paint: function (a) {
              function c(n, u) {
                $(n)
                  .addClass(S.HIGHLIGHT_CLASS)
                  .addClass(l)
                  .addClass(S.HIGHLIGHT_TYPE_CLASS + u.type)
                  .removeClass("yellow blue green pink")
                  .addClass(
                    u.extra.color && u.extra.color.length > 0
                      ? u.extra.color
                      : "yellow"
                  );
                return n;
              }
              function d(n) {
                var u = $(n.parentNode);
                u.hasClass(S.HIGHLIGHT_CLASS)
                  ? u.addClass(l)
                  : $(n).wrap(c(Ba.createElement("em"), i));
              }
              function f(n, u) {
                $(n)
                  .addClass(S.HIGHLIGHT_ICON_CLASS)
                  .addClass(l)
                  .addClass(S.HIGHLIGHT_TYPE_CLASS + ANNOTATION_TYPE_ICON)
                  .addClass("TextIcon")
                  .toggleClass("public", u.isPublic() && m.length > 0)
                  .toggleClass("private", u.isPrivate() && m.length > 0)
                  .toggleClass(
                    "group",
                    u.inAnyGroups() &&
                      m.length > 0 &&
                      (H.getCommentsInfo(u.comments) == "onlyGroup" ||
                        H.getCommentsInfo(u.comments) == "both")
                  )
                  .toggleClass("diigoHighlightcommented", m.length > 0)
                  .removeClass("diigoadd yellow blue green pink")
                  .addClass(u.extra.color)
                  .css({ bottom: "0px" });
                if (m.length > 0) {
                  $(n).html(
                    "<span class='" +
                      l +
                      " " +
                      S.HIGHLIGHT_ICON_CLASS +
                      " " +
                      S.HIGHLIGHT_TYPE_CLASS +
                      ANNOTATION_TYPE_ICON +
                      "'>" +
                      m.length +
                      "</span>"
                  );
                  $(n).attr("title", Z.tipMsg(u));
                  h.adjustIconBg(u);
                } else {
                  $(n).html("");
                  $(n).attr("title", "");
                }
                return n;
              }
              var h = this,
                i = N.find(a),
                l = S.HIGHLIGHT_ID_CLASS + i.id,
                m = i.comments;
              if (i.paintedSuccessfully) {
                c("em." + l, i);
                f("div." + l, i);
                $("em." + l)
                  .filter(":last")
                  .toggleClass("diigoHighlightcommented", m.length > 0);
              } else {
                i.painted = true;
                this.domSnapshot();
                var t = this.seek(i.content, i.extra.nth);
                if (t) {
                  i.prettyTxt = this.html2txt_pretty(i.content);
                  if (t.startNode === t.endNode) {
                    if (t.endOffset <= t.startOffset)
                      t.startOffset = t.endOffset - t.txt.length;
                    a = t.startNode.splitText(t.startOffset);
                    t = a.splitText(t.endOffset - t.startOffset);
                    d(t.previousSibling || a);
                  } else {
                    var D = t.startNode.splitText(t.startOffset),
                      A = t.endNode.splitText(t.endOffset).previousSibling,
                      G = false,
                      q = [];
                    new sa(
                      t.commonAncestor,
                      function (n) {
                        if (!G && n === D) G = true;
                        G &&
                          n.nodeType == 3 &&
                          n.nodeValue.replace(/(^\s+|\s+$)/gm, "").length > 0 &&
                          q.push(n);
                        if (G && n === A) {
                          G = false;
                          throw sa.$end;
                        }
                      },
                      { filter: this.isHighlightableNode }
                    ).walk();
                    M(q, function (n) {
                      d(n);
                    });
                  }
                  a = $("em." + l);
                  i.paintedSuccessfully = a.size() > 0;
                  if (
                    i.type == ia &&
                    $("div." + l).size() <= 0 &&
                    a.size() > 0
                  ) {
                    t = $(Ba.createElement("div"));
                    var o = $(Ba.createElement("span"));
                    o.addClass("diigoHighlightCommentLocator");
                    var r = a.filter(":last");
                    r.toggleClass("diigoHighlightcommented", m.length > 0);
                    o.appendTo(r);
                    t.appendTo(o);
                    f(t, i);
                  }
                  if (a.size() > 0) {
                    a = a.offset();
                    i.extra.top = a.top;
                    i.extra.left = a.left;
                  }
                  this.adjustColor(i);
                  return i.paintedSuccessfully;
                } else i.onlyInGroup || k.orphanHighlights.push(i);
              }
            },
            adjustIconBg: function (a) {
              var c = window,
                d;
              try {
                $("em." + S.HIGHLIGHT_ID_CLASS + a.id)
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
                  S.HIGHLIGHT_ID_CLASS +
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
              a = N.find(a);
              $("em." + S.HIGHLIGHT_ID_CLASS + a.id).each(function (d, f) {
                var h = $(f),
                  i = E.parseColor(h.css("backgroundColor")),
                  l = E.parseColor(h.css("color"));
                var m = c(l),
                  t = c(i);
                if (m > t) {
                  l = m;
                  m = t;
                } else {
                  l = t;
                  m = m;
                }
                i =
                  (l + 0.05) / (m + 0.05) > 2.5
                    ? null
                    : c(i) > 0.5
                    ? "#000000"
                    : "#FFFFFF";
                i && h.css("color", i);
              });
            },
            unpaint: function (a) {
              a = N.find(a).id;
              var c = S.HIGHLIGHT_ID_CLASS + a;
              $("em." + c).each(function (d, f) {
                var h = $(f);
                h.removeClass(c);
                h.find("div.diigoIcon." + c).remove();
                for (var i; (i = f.firstChild); )
                  f.parentNode.insertBefore(i, f);
                h.remove();
              });
            },
            isTextSelected: function () {
              return window.getSelection
                ? Qa(String(window.getSelection())).length > 0
                : $.browser.msie
                ? document.selection.type == "Text" &&
                  Qa(document.selection.createRange().text).length > 0
                : false;
            },
            checkSelection: function () {
              var a,
                c,
                d = { ok: false, txt: "", html: "", msg: "", pen: false },
                f = null;
              if (!this.isTextSelected()) {
                d.msg =
                  "The number of highlighted non white space characters needs to be between 5 and 2000. Please select some text and try again.";
                d.pen = true;
                return d;
              }
              if (window.getSelection) {
                a = window.getSelection();
                if (a.removeAllRanges) {
                  d.html = this.range2html((c = a.getRangeAt(0)));
                  if (
                    !(function (l) {
                      if (l.collapsed) return false;
                      l = [l.startContainer, l.endContainer];
                      for (var m = 0; m < l.length; m++) {
                        var t = $(l[m]);
                        if (
                          t.is(".diigoHighlight,.diigolet") ||
                          t.parents(".diigoHighlight,.diigolet").length > 0
                        )
                          return false;
                      }
                      return true;
                    })(c)
                  ) {
                    I(
                      "[H] checkRange returned false. selection not highlightable"
                    );
                    d.msg = "Selection cannot be highlighted.";
                    return d;
                  }
                  f = c.endContainer;
                } else d.html = String(a);
              } else
                d.html = $.browser.msie
                  ? this.range2html(document.selection.createRange())
                  : document.getSelection();
              d.txt = this.html2txt(d.html);
              if (d.txt.length > 3e3) {
                d.msg =
                  "The number of highlighted non white space characters needs to be between 5 and 2000. Please select some text and try again.";
                return d;
              }
              if (
                $("<div></div>")
                  .html(d.html)
                  .find(".diigoHighlight,.diigolet")
                  .size() > 0
              ) {
                d.msg = "Selection cannot be highlighted.";
                return d;
              }
              d.ok = true;
              if (f) {
                var h = this,
                  i = "";
                new sa(
                  document.body,
                  function (l) {
                    if (l.nodeType == 3) {
                      var m = l.nodeValue;
                      if (l == f) m = m.slice(0, c.endOffset);
                      i += m;
                    }
                    if (l == f) throw sa.$end;
                  },
                  {
                    filter: function (l) {
                      return h.domSnapshotNodeFilter(l);
                    },
                  }
                ).walk();
                i = i.replace(/\s+/gm, " ");
                a = h.findOccurrences(d.txt, i);
                d.nth = a.length;
              } else d.nth = 1;
              return d;
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
              a = $("<div></div>").html(this.stripScripts(a));
              var c = this,
                d = "";
              new sa(
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
              return d.replace(/\s+/gm, " ").replace(/^\s|\s$/gm, "");
            },
            html2txt_pretty: function (a) {
              a = $("<div></div>")
                .html(this.stripScripts(a))
                .appendTo(document.body);
              var c, d;
              if (
                window.getSelection &&
                window.getSelection().removeAllRanges
              ) {
                c = document.createRange();
                c.selectNode(a[0]);
                d = this.range2txt(c);
                c.detach();
              } else if ($.browser.msie) {
                a.hide().appendTo(document.body);
                c = document.body.createTextRange();
                c.moveToElementText(a[0]);
                d = this.range2txt(c);
              } else d = this.node2txt(a[0]);
              a.remove();
              return d;
            },
            node2txt: function (a) {
              var c = "",
                d = 3;
              new sa(a, function (f) {
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
              return fb(Qa(a), /\s+/, function (c) {
                return c[0].match(/[\r\n]/) ? "\n" : " ";
              }).replace(/[\r\n]+/g, "\n");
            },
          });
    sa.$end = Error("end walking");
    sa.prototype.walk = function () {
      this._walk(this.node, this.func);
    };
    sa.prototype._walk = function (a, c) {
      var d = this.options;
      if (!this.end)
        if (d.filter(a)) {
          try {
            c(a);
          } catch (f) {
            if (f === sa.$end) {
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
    var H = {
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
                a.dragging ||
                  k.draggingFloatNote ||
                  a.isEditing() ||
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
          Q("diigolet-dlg-sticky-close").click(function () {
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
                    $("#FN-private-cancelBtn").trigger("click");
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
                zb.init(d, 200);
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
                E.dom.buildOne("option", { value: 0 }, ["Choose a group"])
              );
              d.append(
                E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
              );
              M(k.myGroups, function (f) {
                $("#FN-group-ul").find('li[data-dgroupname="' + f.name + '"]')
                  .length == 0 &&
                  d.append(
                    E.dom.buildOne("option", { value: f.name }, [f.displayName])
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
              a.ann.type == fa && a.ann.unpaint();
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
          $("#FN-private-editor").on("keydown", function (c) {
            if (c.which == 83 && (c.ctrlKey || c.metaKey)) {
              c.preventDefault();
              $("#FN-private-saveBtn").trigger("click");
            }
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
        this.j = $(jb).css({ position: "absolute" }).appendTo(Ba.body).hide();
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
          z.updateExtra(this.ann);
          this.ann.paint();
          var d = "id_" + this.ann.id;
          if ($("." + d).length > 1) {
            d = $("." + d)[0];
            $(d).scrollmarker();
          } else $("." + d).scrollmarker();
          aa.editItem("changeColor", this.ann);
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
        I("[IC] showing...");
        i.j.find("ul.diigoletFNDropdown").hide();
        if (f === undefined) f = i.showMode;
        else i.showMode = f;
        var l = i.getCommentsInfo(d.comments);
        if (l == "onlyPrivate") {
          i.switchTab("private");
          i.j.removeClass("onlyGroup").addClass("onlyPrivate");
        } else if (l == "onlyGroup") {
          i.switchTab("group");
          i.j.removeClass("onlyPrivate").addClass("onlyGroup");
        } else if (l == "both") {
          i.j.removeClass("onlyPrivate onlyGroup");
          i.switchTab("private");
        }
        ga.hide();
        Z.j && Z.hide();
        var m = i.j.toggleClass("editing", f != "view");
        m.find("._menuItem_deleteSticky").showHide(d.canDelete(i.filterMode));
        setTimeout(function () {
          i.refreshComments();
          var t = i.getGroups(d.comments);
          if (t.length > 0) {
            $("#FN-current-group>span").text(t[0].displayName);
            i.switchGroup(t[0]);
          }
          t = Z.tipMsg(i.ann);
          i.j.find("span.personalText").text(t);
          i.j.find("span.personalText").attr("title", t);
          if (t.length > 80) {
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
          m.show();
          i.shown = true;
          if (f === "add") {
            J.shown && $("#FN-private-editor").focus();
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
          t = document.querySelector("#FN-private-editor");
          zb.init(t, 200);
          if (i.ifMoreThanOnePrivateComment(d.comments)) {
            t = $("#FN-private-editor").val();
            i.mergePrivateComments(t);
          }
          var D = $("#FN-group-share").empty();
          D.append(E.dom.buildOne("option", { value: 0 }, ["Choose a group"]));
          D.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          M(k.myGroups, function (A) {
            $("#FN-group-ul").find('li[data-dgroupname="' + A.name + '"]')
              .length == 0 &&
              D.append(
                E.dom.buildOne("option", { value: A.name }, [A.displayName])
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
          c.comments[h].mode === 2 && f.push(c.comments[h].id);
        a = { annotationId: c.id, mode: 2, content: a };
        if (c.type == fa && !c.saved) {
          c._toAddInlineComment = a;
          c.saving = true;
          z.addAnnotation(c);
        } else if (c.type == ia && !c.saved) {
          c._toAddInlineComment = a;
          c.saving = true;
          z.addAnnotation(c);
        } else z.addInlineComment(a);
        setTimeout(function () {
          for (var i = 0; i < f.length; i++) {
            var l = va.find(f[i]),
              m = l.getAnnotation();
            m.comments.splice(m.comments.indexOf(l), 1);
            z.deleteInlineComment(l);
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
          d = { annotationId: H.ann.id, mode: void 0, content: d };
          if (h) {
            d.justForGroups = true;
            d.groups = [h];
          }
          h = N.find(d.annotationId);
          if (h.type == fa && !h.saved) {
            h._toAddInlineComment = d;
            h.saving = true;
            z.addAnnotation(h);
          } else if (h.type == ia && !h.saved) {
            h._toAddInlineComment = d;
            h.saving = true;
            z.addAnnotation(h);
          } else z.addInlineComment(d);
          a.find("button").prop("disabled", true);
          a.find("textarea").prop("disabled", true);
        }
      },
      addPrivateComment: function () {
        var a = $("#FN-private-editor").val();
        if (!a.match(/^\s*$/)) {
          a = { annotationId: H.ann.id, mode: 2, content: a };
          var c = N.find(a.annotationId);
          if (c.type == fa && (!c.saved || c.onlyInGroup)) {
            c._toAddInlineComment = a;
            c.saving = true;
            z.addAnnotation(c);
          } else if (c.type == ia && (!c.saved || c.onlyInGroup)) {
            c._toAddInlineComment = a;
            c.saving = true;
            z.addAnnotation(c);
          } else z.addInlineComment(a);
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
          a && a.type == fa && !a.saved && !a.saving && !a.deleted && a.del();
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
          c = Q("diigolet-annMenu");
        c.find("#diigolet-annMenu-add").hide();
        c.find("#diigolet-annMenu-del").hide();
        c.find("#diigolet-annMenu-tip").hide();
        var d = (Z.ann = this.ann);
        if (d.type == fa) {
          c.find("._onlyMy").hide();
          c.find("#diigolet-annMenu-My").show();
        } else {
          c.find("._onlyMy").show();
          $.each(k.defaultColors, function (f, h) {
            Q("diigolet-context-" + h).toggleClass("colorchecked", false);
          });
          d.extra && d.extra.color && d.extra.color.length > 0
            ? Q("diigolet-context-" + d.extra.color).toggleClass(
                "colorchecked",
                true
              )
            : Q("diigolet-context-yellow").toggleClass("colorchecked", true);
        }
        c.find("#diigolet-annMenu-tip-before").hide();
        c.css({ top: a.top + 20, left: a.left });
        Ka(c.show(), 13);
      },
      uploadPrivateComment: function () {
        var a = $("#FN-private-editor").val(),
          c = $("#FN-private-delete").attr("data-cid");
        a != this.backupContent && z.editInlineComment(c, a);
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
          l = h + $(window).height() - d.height() - 10;
        if (f > i) f = i;
        if (f < c) f = c;
        if (a > l) a = l;
        if (a < h) a = h;
        d.css({ left: f, top: a });
      },
    };
    W(H, {
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
        a.cancelHide();
        a.cancelShow();
        a.hideTimer = setTimeout(function () {
          a.hide();
        }, a.hideDelay);
      },
    });
    W(H, {
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
            Y(f, {
              ONCLICK: "diigolet.handle(event, 'dlgIC_del_ic', '" + a.id + "')",
            })
          );
        if (a.isPrivate() && (c == "_all" || c == "_private"))
          d +=
            '<label class="_private"><span>Private</span>DEL</label>'.replace(
              "DEL",
              Y(f, {
                ONCLICK:
                  "diigolet.handle(event, 'dlgIC_del_ic', '" + a.id + "')",
              })
            );
        M(a.groups, function (h) {
          if (c == h.name || c == "_all")
            d += Y(
              '<label class="_#{GROUP_NAME}"><a href="#{GROUP_URL}" class="link">#{GROUP_DISPLAY_NAME}</a>#{DEL}</label>',
              {
                GROUP_NAME: h.name,
                GROUP_DISPLAY_NAME: h.displayName,
                GROUP_URL: x.urls.getGroupURL(h.name),
                DEL: Y(f, {
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
        if (a.mode == 2) {
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
            H.groupEditor.remove();
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
          if (a[h].mode == 2) c++;
          else a[h].mode == 3 && d++;
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
        for (f = 0; f < d; f++) a[f].mode == 2 && c++;
        return c > 1 ? true : false;
      },
      updatePrivateComments: function (a) {
        var c = a.length,
          d = "",
          f = "",
          h,
          i = this.getCommentCount("private", a),
          l;
        if (i >= 1)
          for (l = 0; l < c; l++) {
            if (a[l].mode === 2) {
              d += Cb(a[l].content);
              if (i > 1) d += "[" + a[l].datetime + "]\n";
              f = a[l].datetime;
              h = a[l].id;
            }
          }
        else if (i == 0) return;
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
        var c = a.realName.trim() ? a.realName : a.user;
        return Y(
          '<div class="FN-group-comment-item" data-cid="#{ID}"><div class="FN-group-comment-item-tbar"><a href="#" class="FN-group-comment-name">#{USERNAME}</a><span class="FN-group-comment-item-time">#{DATETIME}</span>#{DELETE}</div><div class="FN-group-comment-item-content">#{CONTENT}</div></div>',
          {
            ID: a.id,
            USERNAME: c,
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
          if (a[d].mode == 3)
            for (var f = 0; f < a[d].groups.length; f++) {
              var h = {};
              h.displayName = a[d].groups[f].displayName;
              h.name = a[d].groups[f].name;
              c.push(h);
            }
        return (c = Db(c));
      },
      getCommentCount: function (a, c) {
        var d = c.length,
          f = 0,
          h;
        if (a === "private") var i = 2;
        else if (a === "group") i = 3;
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
        va.del(c, d);
        if (a) {
          a.stopPropagation();
          a.preventDefault();
        }
      },
      onic_add: function (a, c) {
        this.addInlineComment(a, c);
        aa.editItem("addInlineComment", null, a);
      },
      onic_del: function (a, c) {
        this.removeInlineComment(a, c);
        aa.editItem("delInlineComment", null, a);
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
        aa.editItem("updateStickyNote", null, a);
      },
    });
    W(H, {
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
          a.jEdit = H.j.find("#FN-group-content-postform");
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
            c = { annotationId: H.ann.id, mode: void 0, content: c };
            if (d) {
              c.justForGroups = true;
              c.groups = [d];
            }
            d = N.find(c.annotationId);
            if (d.type == fa && !d.saved) {
              d._toAddInlineComment = c;
              d.saving = true;
              z.addAnnotation(d);
            } else if (d.type == ia && !d.saved) {
              d._toAddInlineComment = c;
              d.saving = true;
              z.addAnnotation(d);
            } else z.addInlineComment(c);
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
            c = H.ann,
            d = H.filterMode;
          if (
            (d == "_all" || d == "_public") &&
            (c ? true : true) &&
            (c ? !c.onlyInGroup && c.getComments("_private").length == 0 : true)
          )
            H.NO_PUBLIC_STICKY_NOTES_ALLOWED ||
              a.append('<option value="_public">Public</option>');
          if (
            (d == "_all" || d == "_private") &&
            (c ? !c.onlyInGroup && c.getComments("_public").length == 0 : true)
          )
            a.append('<option value="_private">Private</option>');
          M(k.myGroups, function (h) {
            if (
              (d == "_all" || d == h.name) &&
              (c && (c.user != k.user || c.onlyInGroup)
                ? c.inGroup(h.name)
                : true)
            )
              a.append(
                E.dom.buildOne("option", { value: h.name }, [h.displayName])
              );
          });
          d == "_all" && c && c.isPrivate() && a.val("_private");
          if (a.find("option").length == 0)
            H.j.find(".diigoletFNComment").hide();
          else {
            H.j.find(".diigoletFNComment").show();
            var f = this.jEdit.find("textarea").val("");
            setTimeout(function () {
              f.focus();
            }, 500);
            H.j.find("._stickyTitle").html("Add Sticky Note");
          }
        },
      },
    });
    var U = {
        tagListNames: "recent recommend group".split(" "),
        shown: false,
        ele: null,
        init: function () {
          this.create();
        },
        destroy: function () {},
        show: function (a, c) {
          if (!(!k.signedIn || (this.shown && this.j.is(":visible")))) {
            this.shown = true;
            H.hide();
            this.j.show();
            var d = this;
            if (k.recommendedTagsLoaded)
              d.showRecommendedTags(k.recommendedTags);
            else {
              d.showTagList("recommend", null);
              var f = k.bookmark,
                h = f.getTitle();
              h += k.googleSearchSentence;
              z.loadRecommendedTags(f.url, h, function () {
                I(k.keywords);
                if (k.keywords.length > 0)
                  k.recommendedTags = db(
                    $.merge(k.keywords, k.recommendedTags)
                  );
                d.showRecommendedTags(k.recommendedTags);
              });
            }
            K.getUserData("tagsUsedLastTime", function (i) {
              i = i ? JSON.parse(i) : [];
              d.showTagList("recent", i);
            });
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
                $(window).bind("keypress", function (l) {
                  l.preventDefault();
                  var m = $(i).val();
                  $(i)
                    .focus()
                    .val(m + String.fromCharCode(l.charCode));
                });
              });
          }
        },
        showPromotionMessage: function () {
          var a = this;
          x.Messenger.send({ name: "pickPromotionMessage" }, function (c) {
            if (a.shown && c) {
              var d = $("#diigolet-cross-promotion");
              d.empty()
                .append(
                  $("<a>", {
                    href: c.url,
                    target: "_blank",
                    html: c.content,
                  }).click(function () {
                    d.hide();
                    x.Messenger.send({
                      name: "promotionMessageClicked",
                      details: { id: c.id },
                    });
                  })
                )
                .show();
            }
          });
        },
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
              M(c, function (l) {
                var m = $(
                  E.dom.buildOne(
                    "div",
                    {
                      id:
                        "diigolet-tag-" + a + "-" + d.escapeTagForElementId(l),
                      class: "tagButton",
                      tag: l,
                    },
                    [l]
                  )
                ).appendTo(f.show());
                m.toggleClass(
                  "selected",
                  $.inArray(l, h.tags) >= 0
                ).toggleClass("inused", $.inArray(l, i) >= 0);
                m.click(function () {
                  d.toggleTag(l);
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
            ? z.loadGroupTagsDictionary([c], function () {
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
          a.j = new cc(ib)
            .css({
              position: $.browser.supportPositionFixed ? "fixed" : "absolute",
            })
            .hide()
            .appendTo(Ba.body)
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
              "https://www.diigo.com/toolbar/saved?t=" +
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
                l;
              for (l = 0; l < i; l++) h.push(k.myBmLists[l].title);
              if (d.match(/^\s*$/)) f.show().find("span").text("Input a name");
              else if ($.inArray(d, h) !== -1)
                f.show().find("span").text("Name existed !");
              else {
                $(this).addClass("processing");
                z.createList(d);
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
              z.deleteBookmark(k.bookmark);
              a.hide();
              J.hide();
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
              i = Rb();
            d = i.topTags;
            var l = i.maxCount;
            f = i.a;
            var m = i.b,
              t = i.c,
              D = d.length;
            i = document.createDocumentFragment();
            for (var A = 0; A < D; A++) {
              var G = document.createElement("a");
              G.className = c;
              G.href = "#";
              G.innerText = d[A].name;
              var q = d[A].count;
              if (q == l) {
                G.style.fontSize = "20px";
                G.style.fontWeight = "bold";
              }
              f.forEach(function (o) {
                if (q == o) {
                  G.style.fontSize = "18px";
                  G.style.fontWeight = "bold";
                }
              });
              m.forEach(function (o) {
                if (q == o) {
                  G.style.fontSize = "16px";
                  G.style.fontWeight = "bold";
                }
              });
              t.forEach(function (o) {
                if (q == o) {
                  G.style.fontSize = "16px";
                  G.style.fontWeight = "regular";
                }
              });
              i.appendChild(G);
              G.addEventListener("click", function (o) {
                o.preventDefault();
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
            c = E.dom.getSelection();
            if (Za(a.val()))
              if (Za(i.description)) Za(c) || a.val('"' + c + '"');
              else a.val(i.description);
            else {
              a.val("");
              i.saved && !Za(i.description) && a.val(i.description);
            }
            h.updateGroups();
            h.updateLists();
            i.saved == false
              ? chrome.storage.local.get(null, function (l) {
                  if (l.researchMode == true) {
                    $("#diigolet-tagForward-topBar")
                      .find(".focus-research-tip")
                      .show();
                    h.fillReasearchModeData(l);
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
              ? 2
              : 0;
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
            x.Messenger.send({ name: "initialData" }, function (l) {
              l.preloadedPrefs["prefs.bookmark.privateByDefault"] == "true"
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
          var c = Wb.unparseTags(a.tags);
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
            E.dom.buildOne("option", { value: 0 }, ["Add to an Outliner"])
          );
          j.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(
            E.dom.buildOne("option", { value: -2 }, ["Create an Outliner..."])
          ).appendTo(j);
          j.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          M(k.outliners, function (c) {
            a
              ? j.append(E.dom.buildOne("option", { value: c.id }, [c.title]))
              : j.append(
                  E.dom.buildOne("option", { value: c.id }, [
                    c.title + (k.bookmark.inList(c.id) ? " (added)" : ""),
                  ])
                );
          });
          j.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          if (k.myBmLists.length) {
            j.append(
              E.dom.buildOne("option", { value: -8 }, ["Add to a List"])
            );
            j.append(
              E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
            );
            M(k.myBmLists, function (c) {
              a
                ? j.append(E.dom.buildOne("option", { value: c.id }, [c.title]))
                : j.append(
                    E.dom.buildOne("option", { value: c.id }, [
                      c.title + (k.bookmark.inList(c.id) ? " (added)" : ""),
                    ])
                  );
            });
          }
          j.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(E.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(j);
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
              z.loadMyStuff("myGroups myBookmarkLists");
              j.val(-1);
            }
          });
          j.val(0).change();
        },
        updateGroups: function (a) {
          var c = this,
            d = k.myGroups.filter(function (i) {
              return i.access_mode < 5;
            }),
            f = k.myGroups.filter(function (i) {
              return i.access_mode >= 5;
            }),
            h = $("#diigo-group")
              .find("select")
              .empty()
              .unbind()
              .removeClass("processing");
          if (f.length > 0) {
            h.append(
              E.dom.buildOne("option", { value: 0 }, ["Share to a Team"])
            );
            h.append(
              E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
            );
            M(f, function (i) {
              a
                ? h.append(
                    E.dom.buildOne("option", { value: i.name }, [i.displayName])
                  )
                : h.append(
                    E.dom.buildOne("option", { value: i.name }, [
                      i.displayName +
                        (k.bookmark.inGroup(i.name) ? " (shared)" : ""),
                    ])
                  );
            });
            h.append(
              E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
            );
          }
          h.append(
            E.dom.buildOne("option", { value: 0 }, ["Share to a group"])
          );
          h.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(
            E.dom.buildOne("option", { value: -2 }, ["Create a Group..."])
          ).appendTo(h);
          h.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          M(d, function (i) {
            a
              ? h.append(
                  E.dom.buildOne("option", { value: i.name }, [i.displayName])
                )
              : h.append(
                  E.dom.buildOne("option", { value: i.name }, [
                    i.displayName +
                      (k.bookmark.inGroup(i.name) ? " (shared)" : ""),
                  ])
                );
          });
          h.append(
            E.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
          );
          $(E.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(h);
          h.change(function () {
            var i = h.val();
            if (i == -2) {
              x.openURL(x.urls.getCreateGroupURL());
              h.val(-1);
            } else if (i == -3) {
              $(this).addClass("processing");
              z.loadMyStuff("myGroups myBookmarkLists");
              h.val(0);
            } else if (i != -1)
              if (i != 0) {
                c.afterGroupSelectionChange();
                c.showGroupTags();
              }
          });
          h.val(0).change();
        },
        afterGroupSelectionChange: function () {
          var a =
            $("#diigo-group").find("select").val() != "-1" &&
            $("#diigo-group").find("select").val() != "0";
          Q("Diigo-Bookmark-checkShareExisting").showHide(a && k.isAnnotated());
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
            a = k.bookmark.tags;
            a.length > 0 &&
              K.setUserData({
                tagsUsedLastTime: JSON.stringify(a.slice(0, 8)),
              });
            var f = function () {};
            $("#Diigo-Bookmark-uploadCache")
              .find(".op-checkbox-container")
              .hasClass("checked") &&
              (function (h) {
                f = function () {
                  I("[DlgBookmark] bookmark saved. will upload cache");
                  Aa.uploadCache({ groups: h });
                };
              })(k.bookmark.toShareToGroups);
            z.saveBookmark(null, f, "showbar");
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
              ? 2
              : 0;
            a.unread = $("#Diigo-Bookmark-Unread")
              .find(".op-checkbox-container")
              .hasClass("checked");
            a.description = $("#Diigo-Bookmark-Description-Input").val();
            c = $("#diigo-list").find("select").val();
            a.lists = c == "-1" || c == "-2" || c == "0" ? [] : [c];
            c = $("#diigo-group").find("select").val();
            a.groups = c == "-1" || c == "-2" || c == "0" ? [] : [c];
            a.shareExistingAnnotations = false;
            chrome.runtime.sendMessage({ name: "saveThisLink", data: a });
            this.hide(true);
          }
        },
        bookmarkLoaded: function () {
          var a = this;
          if (a.shown) {
            a.syncData("data->form");
            M(k.bookmark.tags, function (c) {
              a.toggleTag(c, true);
            });
          }
        },
        refreshPremium: function () {
          var a = $("#Diigo-Bookmark-uploadCache"),
            c = a.next("label");
          if (Fa.hasCacheUpload()) {
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
      La = {
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
          var a = Y(kb, { URL_DIIGO: "https://www.diigo.com" });
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
            c[0].draggable.destroy();
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
                a = ic.docScroll();
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
          if (qa()) {
            a = a !== undefined ? a : true;
            $("#d3df-sidebar div.addComment")[a ? "show" : "hide"]();
            this.togglePanel("page", true);
            Q("diigolet-sb-txtpc").val("");
            var c = Q("diigolet-sb-selpc").empty();
            c.append('<option value="_public">Public</option>');
            c.append('<option value="_private">Private</option>');
            M(k.myGroups, function (d) {
              c.append(
                E.dom.buildOne("option", { value: d.name }, [d.displayName])
              );
            });
            c.val("_private");
          } else z.signIn();
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
          M(k.pageComments, function (d) {
            c += Y(
              '<li class="bgColor3"><a class="avatar" href="#{DIIGO_URL}/user/#{USER}" title="#{USER}" target="_blank"><img alt="#{USER}" src="https://resources.diigo.com/resources_mana/user_avatar?user_name=#{USER}&amp;size=48"\n              /></a><span class="commentInfo color1"><a href="#{DIIGO_URL}/user/#{USER}" target="_blank" class="color1">#{USER} </a\n                >#{DATE}\n              </span><p class="labelList">#{LABELS_HTML}</p><p class="commentBody color2">#{CONTENT}</p></li>\n',
              {
                USER: d.user,
                CONTENT: E.content2Html(d.content),
                DIIGO_URL: "https://www.diigo.com",
                DATE: d.datetime,
                LABELS_HTML: a._labelsHtml(d),
              }
            );
          });
          $("#d3df-pageCommentList").html(
            c ||
              '<li class="bgColor3 color1"><div class="noComments">No comments yet</div></li>\n'
          );
          this.j.find("._pageCommentCount").text(k.pageComments.length + "");
          this.adjustSize();
        },
        refreshInlineComments: function () {
          N.sort();
          var a = "",
            c,
            d,
            f = 0;
          M(k.annotations, function (i) {
            if (i.type == 0 || i.type == 2 || i.type == 1) {
              d = "";
              M(i.comments, function (l) {
                f++;
                d += Y(
                  '<li class="bgColor3"><a class="avatar" href="#{DIIGO_URL}/user/#{USER}" title="#{USER}" target="_blank"><img alt="#{USER}" src="https://resources.diigo.com/resources_mana/user_avatar?user_name=#{USER}&amp;size=48"\n                /></a><span class="commentInfo color1"><a href="#{DIIGO_URL}/user/#{USER}" target="_blank" class="color1">#{USER} </a\n                  >#{DATE}\n                </span><p class="commentBody"><a class="color2" href="#" onclick="diigolet.devil(\'Sidebar\').jumpToHighlight(\'#{HIGHLIGHT_ID}\');return false;">#{CONTENT}</a\n                  ></p></li>\n',
                  {
                    HIGHLIGHT_ID: i.id,
                    USER: l.user,
                    CONTENT: E.content2Html(l.content),
                    DIIGO_URL: "https://www.diigo.com",
                    DATE: l.datetime,
                  }
                );
              });
              c = Y(
                '<li class="highlight"><a class="highlight headingColor2 #{FLOAT_NOTE_CLASS}" href="#" onclick="diigolet.devil(\'Sidebar\').jumpToHighlight(\'#{ID}\');return false;"><span class="jumpTo color1" style="float: right">...Jump to</span><em style="font-style: italic; line-height: 24px; width: 80%" class="color2">#{CONTENT}</em\n              ></a><ul class="comments bgColor1">\n              #{COMMENTS}\n</ul></li>\n',
                {
                  ID: i.id,
                  FLOAT_NOTE_CLASS: i.type == 2 ? "floatNote" : "",
                  CONTENT: E.content2Html(
                    i.prettyTxt || ab.html2txt_pretty(i.content)
                  ),
                  COMMENTS: d,
                }
              );
              a += c;
            }
          });
          var h =
            '<li class="bgColor3 color1"><div class="noComments">No comments yet</div></li>\n';
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
          var a = Q("diigolet-sb-txtpc").val();
          if (a.length <= 0 || a.length > 500)
            alert("Comment length should < 500 characters");
          else {
            var c = Q("diigolet-sb-selpc").val(),
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
            z.addPageComment(a);
            this.showEditPageCommentBox(false);
          }
        },
        jumpToHighlight: function (a) {
          k.toggleSilent(false);
          (a = N.find(a)) && a.jumpHere(true, false);
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
      };
    W(La, {
      filterMode: "_all",
      _labelsHtml: function (a) {
        var c = a.annotationId ? "ic" : "pc",
          d = this.filterMode,
          f = "",
          h = a.canDelete()
            ? '<a href="javascript:void(0)" class="del" onclick="#{ONCLICK};"><img title="Delete" src="https://www.diigo.com/client/ietoolbar/spacer.gif" style="width:12px;height:12px;cursor:pointer" alt="" /></a>'
            : "";
        if (a.isPublic() && (d == "_all" || d == "_public") && a.user == k.user)
          f += '<label class="_public"><span>Public</span>DEL</label>'.replace(
            "DEL",
            Y(h, {
              ONCLICK: Y("diigolet.handle(event, 'sb_del_#{0}', '#{1}')", [
                c,
                a.id,
              ]),
            })
          );
        if (a.isPrivate() && (d == "_all" || d == "_private"))
          f +=
            '<label class="_private"><span>Private</span>DEL</label>'.replace(
              "DEL",
              Y(h, {
                ONCLICK: Y("diigolet.handle(event, 'sb_del_#{0}', '#{1}')", [
                  c,
                  a.id,
                ]),
              })
            );
        M(a.groups, function (i) {
          if (d == i.name || d == "_all")
            f += Y(
              '<label class="_#{GROUP_NAME}"><a href="#{GROUP_URL}" class="link">#{GROUP_DISPLAY_NAME}</a>#{DEL}</label>',
              {
                GROUP_NAME: i.name,
                GROUP_DISPLAY_NAME: i.displayName,
                GROUP_URL: x.urls.getGroupURL(i.name),
                DEL: Y(h, {
                  ONCLICK: Y(
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
        ya.del(c, d);
      },
    });
    var ga = {
        j: null,
        direction: "normal",
        shown: false,
        init: function () {
          this.j || this.create();
        },
        create: function () {
          this.j = $($a)
            .css({ position: "absolute" })
            .hide()
            .appendTo(Ba.body)
            .hide();
          var a = $("#diigolet-csm-highlight"),
            c = $("#diigolet-csm-highlightAndComment");
          K.get("prefs.lastUsedColor", function (l) {
            $("#diigolet-csm").addClass(l);
          });
          a.click(function (l) {
            window.getSelection().toString() != "" &&
              O.send({ name: "initialData" }, function (m) {
                if (k.generated == false) {
                  K.updateCache(m.preloadedPrefs);
                  k.reset(m);
                  k.signedIn && m.shoudLoadMyStuff && z.loadMyStuff();
                  if (m.loadBookmarkResult) {
                    I("[bookmark info already loaded]", m.loadBookmarkResult);
                    z.cb_bm_loadBookmark_success(
                      m.loadBookmarkResult,
                      "prepareCtx"
                    );
                  } else
                    m.shouldLoadBookmarkByMyself &&
                      k.signedIn &&
                      z.loadBookmark();
                }
                if (m.globalData.user == "") k.notify(Da, 1e3);
                else {
                  K.get("prefs.lastUsedColor", function (t) {
                    J.shown
                      ? x.handle(l, "highlight", "normal", t)
                      : x.handle(l, "highlight", "small", t);
                  });
                  return false;
                }
              });
          });
          this.j.find(".diigolet-csm-coloritem").click(function (l) {
            var m = $(this).data("color"),
              t = $(this).parent().parent().attr("id");
            O.send({ name: "initialData" }, function (D) {
              if (k.generated == false) {
                K.updateCache(D.preloadedPrefs);
                k.reset(D);
                k.signedIn && D.shoudLoadMyStuff && z.loadMyStuff();
                if (D.loadBookmarkResult) {
                  I("[bookmark info already loaded]", D.loadBookmarkResult);
                  z.cb_bm_loadBookmark_success(
                    D.loadBookmarkResult,
                    "prepareCtx"
                  );
                } else
                  D.shouldLoadBookmarkByMyself &&
                    k.signedIn &&
                    z.loadBookmark();
              }
              if (D.globalData.user == "") k.notify(Da, 1e3);
              else {
                if (J.shown)
                  if (t == "diigolet-csm-highlight-wrapper")
                    x.handle(l, "highlight", "normal", m);
                  else
                    t == "diigolet-csm-highlightAndComment-wrapper" &&
                      x.handle(l, "highlightAndComment", "normal", m);
                else if (t == "diigolet-csm-highlight-wrapper")
                  x.handle(l, "highlight", "small", m);
                else
                  t == "diigolet-csm-highlightAndComment-wrapper" &&
                    x.handle(l, "highlightAndComment", "small", m);
                return false;
              }
            });
          });
          c.click(function (l) {
            window.getSelection().toString() != "" &&
              O.send({ name: "initialData" }, function (m) {
                if (k.generated == false) {
                  K.updateCache(m.preloadedPrefs);
                  k.reset(m);
                  k.signedIn && m.shoudLoadMyStuff && z.loadMyStuff();
                  if (m.loadBookmarkResult) {
                    I("[bookmark info already loaded]", m.loadBookmarkResult);
                    z.cb_bm_loadBookmark_success(
                      m.loadBookmarkResult,
                      "prepareCtx"
                    );
                  } else
                    m.shouldLoadBookmarkByMyself &&
                      k.signedIn &&
                      z.loadBookmark();
                }
                if (m.globalData.user == "") k.notify(Da, 1e3);
                else {
                  K.get("prefs.lastUsedColor", function (t) {
                    J.shown
                      ? x.handle(l, "highlightAndComment", "normal", t)
                      : x.handle(l, "highlightAndComment", "small", t);
                    return false;
                  });
                  return false;
                }
              });
          });
          var d, f, h, i;
          this.j.find(".csm-btn").hover(
            function () {
              var l = $(this).find(".csm-action"),
                m = l.attr("id");
              if (m == "diigolet-csm-highlight") {
                h != null && clearTimeout(h);
                d = setTimeout(function () {
                  l.parent()
                    .find(".diigolet-csm-color")
                    .animate({ height: 21 }, 200);
                  l.parent()
                    .find(".diigolet-csm-coloritem")
                    .animate({ height: 7 }, 200);
                }, 500);
              } else if (m == "diigolet-csm-highlightAndComment") {
                i != null && clearTimeout(i);
                f = setTimeout(function () {
                  l.parent()
                    .find(".diigolet-csm-color")
                    .animate({ height: 21 }, 200);
                  l.parent()
                    .find(".diigolet-csm-coloritem")
                    .animate({ height: 7 }, 200);
                }, 500);
              }
              l.addClass("editing");
            },
            function () {
              var l = $(this).find(".csm-action"),
                m = l.attr("id");
              if (m == "diigolet-csm-highlight") {
                d != null && clearTimeout(d);
                h = setTimeout(function () {
                  l.parent()
                    .find(".diigolet-csm-color")
                    .animate({ height: 0 }, 200);
                  l.parent()
                    .find(".diigolet-csm-coloritem")
                    .animate({ height: 0 }, 200);
                  l.removeClass("editing");
                }, 500);
              } else if (m == "diigolet-csm-highlightAndComment") {
                f != null && clearTimeout(f);
                i = setTimeout(function () {
                  l.parent()
                    .find(".diigolet-csm-color")
                    .animate({ height: 0 }, 200);
                  l.parent()
                    .find(".diigolet-csm-coloritem")
                    .animate({ height: 0 }, 200);
                  l.removeClass("editing");
                }, 350);
              }
            }
          );
          $("#diigolet-csm .diigolet-csm-color").mousedown(function (l) {
            l.preventDefault();
            l.stopPropagation();
          });
          $("#diigolet-csm-search").click(function () {
            var l = window.getSelection().toString();
            x.Messenger.send({
              name: "searchDiigoGoogle",
              details: { text: l },
            });
            return false;
          });
        },
        changeColor: function (a) {
          document.getElementById("diigolet-csm").className = a;
        },
        show: function (a) {
          var c = this;
          document.createRange();
          new Date().getTime();
          Math.random().toString().substr(2);
          if (window.getSelection().toString().length > 0) {
            this.j
              .show()
              .css({ left: a.pageX + 3, top: a.pageY + 3 })
              .show();
            chrome.storage.local.get(null, function (d) {
              d.researchMode === true && k.bookmark.saved === false
                ? c.j.addClass("diigo-researchMode")
                : c.j.removeClass("diigo-researchMode");
            });
            this.shown = true;
          }
        },
        hide: function () {
          this.j.hide();
          $("#diigolet-csm .diigolet-csm-color").animate({ height: 0 }, 200);
          $("#diigolet-csm .diigolet-csm-coloritem").animate(
            { height: 0 },
            200
          );
          this.shown = false;
        },
      },
      Z = {
        j: null,
        ann: null,
        p: null,
        tempAnnId: null,
        showDelay: 350,
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
          var d = this,
            f = $(a.target).offset(),
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
          Q("diigolet-annMenu-add").click(function (c) {
            if (qa()) {
              H.show_(c.pageX, c.pageY, a.ann, "add");
              c.preventDefault();
              return false;
            }
          });
          Q("diigolet-annMenu-share").on("click", function (c) {
            jc.show(a.ann, c.pageX, c.pageY);
            a.hide();
          });
          Q("diigolet-annMenu-My").click(function () {
            x.openURL(x.urls.getUserBookmarksPageURL());
            return false;
          });
          $("#diigolet-annMenu-color").on("click", function (c) {
            c.preventDefault();
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
            z.updateExtra(a.ann);
            a.ann.paint();
            var d = "id_" + a.ann.id;
            if ($("." + d).length > 1) {
              d = $("." + d)[0];
              $(d).scrollmarker();
            } else $("." + d).scrollmarker();
            aa.editItem("changeColor", a.ann);
            $(".ann-colorItem").removeClass("colorchecked");
            Q("diigolet-annMenu-currentColor")
              .removeClass("yellow blue green pink")
              .addClass(c);
            $("#diigolet-context-" + c).addClass("colorchecked");
            return false;
          });
          Q("diigolet-annMenu-del").click(function (c) {
            var d = a.ann;
            d.onlyInGroup || d.del();
            M(
              pa(d.groups, function (f) {
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
          Q("diigolet-annMenu-copy-highlights").click(function (c) {
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
          this.j = $(lb)
            .css({ position: "absolute" })
            .hide()
            .appendTo(Ba.body)
            .hide();
        },
        show: function (a, c) {
          if (c.id != this.tempAnnId) {
            this.cancelHide();
            this.cancelShow();
            ga.shown && ga.hide();
            this.ann = c;
            this.buildMenu();
            this.j.hasClass("onlyMy")
              ? this.j.css({ left: curcorX - 55, top: curcorY - 35 }).show()
              : this.j.css({ left: curcorX - 31, top: curcorY - 35 }).show();
            this.shown = true;
            this.tempAnnId = c.id;
          }
        },
        hide: function () {
          this.cancelHide();
          this.cancelShow();
          this.shown = false;
          this.j.hide();
          $("#diigolet-annMenu-colorPicker").hide();
          $("#diigolet-annMenu-moreThings").hide();
          this.tempAnnId = null;
        },
        buildMenu: function () {
          var a = this.ann;
          Q("diigolet-annMenu-del").showHide(a.canDelete());
          if (a.user == k.user) {
            $("._onlyMy").show();
            this.j.addClass("onlyMy");
          } else {
            $("._onlyMy").hide();
            this.j.removeClass("onlyMy");
          }
          $.each(k.defaultColors, function (c, d) {
            Q("diigolet-context-" + d).toggleClass("colorchecked", false);
          });
          if (a.extra && a.extra.color && a.extra.color.length > 0) {
            Q("diigolet-annMenu-currentColor")
              .removeClass("yellow blue green pink")
              .addClass(a.extra.color);
            Q("diigolet-context-" + a.extra.color).toggleClass(
              "colorchecked",
              true
            );
          } else Q("diigolet-context-yellow").toggleClass("colorchecked", true);
          Q("diigolet-annMenu-tip-before").show();
          Q("diigolet-annMenu-tip").show();
          Q("diigolet-annMenu-tip").html(this.tipMsg(a));
        },
        tipMsg: function (a) {
          var c = "#{MODE} #{WHAT} by #{REALNAME}",
            d = { REALNAME: a.realName.trim() ? a.realName : a.user };
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
            a = Hb(
              pa(a.groups, function (f) {
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
          return Y(c, d);
        },
      },
      Ca = {
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
          Z.aboutToShow() && Z.scheduleHide();
        },
        showMenu: function (a, c, d) {
          c.cancelHide();
          c.cancelToggleEdit();
          if (c.ann)
            if (c.ann.comments.length == 0)
              try {
                var f = Z.ann != c.ann;
                Z.p = c;
                f || !Z.shown || d ? Z.scheduleShow(a, c.ann) : Z.cancelHide();
              } catch (h) {
                throw h;
              }
            else {
              f = H.ann != c.ann;
              H.isEditing() ||
                ((f || !H.shown) && !d
                  ? H.scheduleShow(a, c.ann)
                  : H.cancelHide());
            }
        },
        reset: function (a) {
          var c = this;
          this.removeEditMode();
          this.hide();
          this.ann = a;
          this.j = $("div." + S.HIGHLIGHT_ID_CLASS + a.id)
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
          ga.shown && ga.hide();
          if (c.comments.length <= 0)
            if (c.type == ia) this.j.css({ top: -23 });
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
                c.j = $("div." + S.HIGHLIGHT_ID_CLASS + c.ann.id);
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
      yb = {
        j: null,
        k: null,
        v: null,
        init: function () {
          this.j || this.create();
        },
        create: function () {
          this.j = $(
            '<div id="diigo-video-capture"><div id="diigo-video-capture-container"><div id="diigo-video-capture-logo"></div>Capture</div></div>'
          )
            .appendTo("body")
            .hide();
          this.k = $(
            '<div id="diigo-video-capture-wrapper"><div id="diigo-video-capture-wrapper-tip">Drag to outliner or <span id="diigo-video-capture-upload">Upload</span></div><div id="diigo-video-capture-wrapper-close">Close</div></div>'
          ).appendTo("body");
          this.bindEvents();
        },
        hide: function () {
          if (this.k && this.v[0]) {
            this.k.find("img").remove();
            this.k.removeClass("show");
            this.v[0].play();
          }
        },
        isSupported: function (a) {
          return /youtube|aol|yahoo|myspace|vimeo|dailymotion|56\.com|youku|tudou|stupidvideos|metacafe/.test(
            a.toLowerCase()
          )
            ? true
            : false;
        },
        showView: function (a, c) {
          var d = this;
          d.k.find("#diigo-video-capture-loading").remove();
          var f = d.v.offset().left,
            h = d.v.offset().top,
            i = d.v.width(),
            l = d.v.height();
          d.k.css({ left: f, top: h, width: i, height: l });
          if (a == "loading") {
            $(
              '<div id="diigo-video-capture-loading">Processing ...</div>'
            ).appendTo(d.k);
            d.k.addClass("show");
            d.k.find("#diigo-video-capture-wrapper-tip").hide();
          } else if (a == "done") {
            var m = $('<img class="diigo-video-capture-temp-img" />').css({
              left: 0,
              top: 0,
              width: d.v.width(),
            });
            m.appendTo(d.k);
            m.on("load", function () {
              $(this).addClass("animation");
              var t = Math.floor(i * 0.8),
                D = Math.floor((i - t) / 2);
              setTimeout(function () {
                m.css({ left: D, top: 20, width: t, opacity: 1 });
                d.k.addClass("show");
                d.k.find("#diigo-video-capture-wrapper-tip").show();
              }, 0);
            });
            m.attr("src", c);
          }
        },
        bindEvents: function () {
          var a = this;
          $(document)
            .on("mouseenter", "video", function () {
              if (!a.v) a.v = $(this);
              var c = a.v.offset().left,
                d = a.v.offset().top;
              a.v.width();
              K.get("prefs.showVideoCapture", function (f) {
                f === "true" &&
                  a.j.css({ left: c + 5 + "px", top: d + 5 + "px" }).show();
              });
            })
            .on("mouseleave", "video", function (c) {
              (c.relatedTarget &&
                c.relatedTarget.id == "diigo-video-capture") ||
                a.j.hide();
            });
          a.k
            .find("#diigo-video-capture-wrapper-close")
            .on("click", function () {
              a.k.find("img").remove();
              a.k.removeClass("show").css("top", "-1000px");
              a.v[0].play();
            });
          a.k.find("#diigo-video-capture-upload").on("click", function () {
            chrome.runtime.sendMessage({
              name: "uploadImageToDiigo",
              src: { srcUrl: a.k.find("img").attr("src") },
              type: "attach",
            });
            a.hide();
          });
          a.j.on("click", function () {
            a.v[0].pause();
            try {
              var c = document.createElement("canvas"),
                d = c.getContext("2d");
              c.width = a.v.width();
              c.height = a.v.height();
              d.drawImage(a.v[0], 0, 0, c.width, c.height);
              var f = c.toDataURL();
              a.showView("done", f);
            } catch (h) {
              console.log(h);
              c = document.createElement("canvas");
              d = c.getContext("2d");
              c.width = a.v.width();
              c.height = a.v.height();
              var i = document.createElement("video");
              i.width = a.v.width();
              i.height = a.v.height();
              i.crossOrigin = "Anonymous";
              i.src = a.v[0].currentSrc;
              i.currentTime = a.v[0].currentTime;
              a.showView("loading");
              i.addEventListener("canplay", function () {
                d.drawImage(i, 0, 0, c.width, c.height);
                var l = c.toDataURL();
                a.showView("done", l);
                i = null;
              });
            }
          });
        },
      };
    wb = {
      init: function () {
        this.buildButton();
        this.bindEvent();
      },
      bindEvent: function () {
        var a = this,
          c = document.getElementById("annotations");
        c &&
          new MutationObserver(function (d) {
            d.forEach(function (f) {
              f.target.id == "kp-notebook-annotations-pane" && a.onBookChange();
            });
          }).observe(c, {
            attributes: true,
            subtree: true,
            childList: true,
            characterData: true,
          });
      },
      onBookChange: function () {
        console.log("Book changed!");
        this.buildButton();
      },
      buildButton: function () {
        var a = this,
          c = $("#kp-notebook-highlights-count").parent(),
          d = $('<div id="diigo-import-btn">Import to Diigo</div>');
        if (c.find("#diigo-import-btn").length == 0) {
          c.append(d);
          d.on("click", function () {
            if (k.permissions.importKindle) {
              var f = a.getBookInfo();
              console.log(f);
              L.init();
              L.notifyWait("Importing your book ...");
              chrome.runtime.sendMessage({ name: "importKindle", data: f });
            } else {
              ca.init();
              ca.show("kindle");
            }
          });
        }
      },
      getBookInfo: function () {
        var a = $("h3.kp-notebook-metadata").text(),
          c = $("h3.kp-notebook-metadata").next(".kp-notebook-metadata").text(),
          d = [];
        $("#kp-notebook-annotations>div.a-row.a-spacing-base").each(
          function () {
            var f = $(this),
              h = {},
              i = f.find("#annotationHighlightHeader").text().toLowerCase();
            h.content = f.find("#highlight").text();
            h.note = f.find("#note").text();
            if (h.content) {
              if (
                i &&
                i.match(/(.*)\s(highlight|surlignement)/) &&
                i.match(/(page|location|emplacement):\s(.*)/)
              ) {
                h.color = i.match(/(.*)\s(highlight|surlignement)/)[1];
                h.page = i.match(/page:\s(.*)/)
                  ? i.match(/page:\s(.*)/)[1]
                  : "";
                h.location = i.match(/location:\s(.*)/)
                  ? i.match(/location:\s(.*)/)[1]
                  : "";
                h.emplacement = i.match(/emplacement:\s(.*)/)
                  ? i.match(/emplacement:\s(.*)/)[1]
                  : "";
              } else {
                h.color = "yellow";
                h.location = "0";
              }
              d.push(h);
            }
          }
        );
        return { title: a, author: c, annotations: d };
      },
    };
    var kc = [
      "screenshot",
      "qsavebookmark",
      "readlater",
      "qdeletebookmark",
      "ifbookmark",
      "getCtx",
      "saveImageToDiigo",
      "prepareCtx",
      "createList",
      "contextmenuHighlight",
      "SignedIn",
      "bookmarkLoaded",
      "share",
      "refreshBookmarkInfo",
      "googleSearchRecommend",
      "annotate",
      "showTutorial",
      "toggleOutlinerSidebar",
      "openOutliner",
      "closeOutliner",
      "showOutlinerIcon",
      "hideOutlinerIcon",
      "addAnnotation",
      "getRecommendedTags",
      "editItem",
    ];
    chrome.runtime.onMessage.addListener(function (a, c, d) {
      if (k.chromeExtensionID == c.id || a.name == "run")
        (a.fromTabId && k.chromeTabId == a.fromTabId) ||
          x.Messenger.onMessage(a, d);
      else $.inArray(a.name, kc) !== -1 && x.Messenger.onMessage(a, d);
    });
    var O = (x.Messenger = {
        noop: function () {},
        send: function (a, c) {
          a.tabId = k.chromeTabId;
          chrome.runtime.sendMessage(a, c || this.noop);
        },
        onMessage: function (a, c) {
          a.name != "dataURL" &&
            this.handlers[a.name] &&
            this.handlers[a.name](a, c);
        },
        handlers: {
          run: function (a) {
            var c = a.details.type;
            if (Sb())
              c !== "autoshow" &&
                chrome.runtime.sendMessage({
                  name: "openPdf",
                  url: window.location.href,
                });
            else if (x.version != a.details.version) {
              a = navigator.platform.match(/Mac/) ? "\u2318?+ R" : "F5";
              alert(
                chrome.i18n.getMessage("refreshAfterUpdate", [
                  chrome.i18n.getMessage("extName"),
                  a,
                ])
              );
            } else if (x.ready && c != "autoshow")
              if (J.shown)
                if (c == "stickynote") {
                  x.stickyNoteByContextMenu = true;
                  x.handlers.addStickyNote();
                } else {
                  if (c != "highlight")
                    if (c != "qsave") {
                      J.hide();
                      k.toggleSilent(true);
                    }
                }
              else {
                J.show();
                k.toggleSilent(false);
                if (c == "stickynote") {
                  x.stickyNoteByContextMenu = true;
                  x.handlers.addStickyNote(true);
                } else c == "highlight" && x.handlers.highlight();
              }
            else x.chromeRun(a.details, a.details.type);
          },
          signIn: function (a) {
            a = a.details;
            try {
              var c = a.user;
              I(
                "onSignIn",
                c || "username unknown",
                "will loadMyStuff: ",
                false
              );
              k.bookmark.loaded || z.loadBookmark();
              k.reset();
              k.user = c;
              k.signedIn = true;
              Xa();
            } catch (d) {}
          },
          signOut: function () {
            Ob();
          },
          notifyError: function (a) {
            if (a.code == 0)
              L.notifyAlert(chrome.i18n.getMessage("network_error"), {
                timeout: 0,
              });
            else
              a.code == 500 &&
                L.notifyAlert(chrome.i18n.getMessage("server_error"), {
                  timeout: 0,
                });
            O.send({
              name: "bookmarkChanged",
              details: { saved: k.bookmark.saved },
            });
          },
          checkVersion: function () {
            O.send({ name: "initialData" }, function (a) {
              if (x.version != a.version) {
                a = navigator.platform.match(/Mac/) ? "\u2318?+ R" : "F5";
                alert(
                  chrome.i18n.getMessage("refreshAfterUpdate", [
                    chrome.i18n.getMessage("extName"),
                    a,
                  ])
                );
              }
            });
          },
          saveBookmarkSuccess: function (a) {
            var c = k.bookmark,
              d = a.ctx;
            c.title = d.title;
            c.tags = d.tags;
            c.mode = d.mode;
            c.unread = d.unread;
            c.description = d.description;
            c = d.tags;
            c.length > 0 &&
              K.setUserData({
                tagsUsedLastTime: JSON.stringify(c.slice(0, 8)),
              });
            z.cb_bm_saveBookmark_success(a.data, "qsave", a.ctx.tabId);
            if (d.cache) {
              $("#diigolet-notice").css("opacity", "0");
              $("#diigolet-panel-panel").css("opacity", "0");
              Vb.uploadMHTML({
                mhtml_upload_url: a.data.mhtml_upload_url,
                link_id: a.data.link_id,
                tabid: a.ctx.tabId,
              });
              setTimeout(function () {
                Aa.uploadCache({ groups: d.groups });
              }, 200);
            }
          },
          globalDataChanged: function (a) {
            a = a.details.changes;
            W(k, a);
            a.myTags && Mb();
            a.myGroups && U.updateGroups();
            a.myBmLists && U.updateLists();
            a.myContacts && R.onMyContactsUpdate();
            a.permissions && Fa.onPrivilegeChange();
          },
          bookmarkLoaded: function (a) {
            k.bookmark.loaded || z.cb_bm_loadBookmark_success(a.details);
          },
          prepareCtx: function () {
            O.send({ name: "initialData" }, function (a) {
              K.updateCache(a.preloadedPrefs);
              k.reset(a);
              k.signedIn && a.shoudLoadMyStuff && z.loadMyStuff();
              if (a.loadBookmarkResult) {
                I("[bookmark info already loaded]", a.loadBookmarkResult);
                z.cb_bm_loadBookmark_success(
                  a.loadBookmarkResult,
                  "prepareCtx"
                );
              } else a.shouldLoadBookmarkByMyself && k.signedIn && z.loadBookmark();
            });
          },
          myStuffLoaded: function (a) {
            z.cb_user_loadMyStuff_success(a.details);
          },
          twitterSignIn: function (a) {
            R.tabs.twitter.onTwitterSignIn(a.details);
          },
          twitterSignOut: function () {
            R.tabs.twitter.onTwitterSignOut();
          },
          prefsChanged: function (a) {
            K.updateCache(a.details);
          },
          uploadDidSucceed: function (a) {
            Aa.uploadDidSucceed(a.details);
          },
          uploadDidFail: function (a) {
            Aa.uploadDidFail(a.details);
          },
          example: function (a) {
            R.tabs.twitter.onTwitterSignIn(a.details);
          },
          screenshot: function () {
            ka.initSelectedCapture();
          },
          qsavebookmark: function () {
            k.bookmark = ra.fromDocument();
            z.saveBookmark(null, function () {}, "qsave");
          },
          savebookmark: function (a) {
            x.Messenger.send({ name: "updateBrowserActionIconToDoing" });
            var c = a.data;
            k.bookmark.description = c.description;
            k.bookmark.mode = c.mode;
            k.bookmark.toShareToGroups = c.shareGroups;
            k.bookmark.toAddToBookmarkLists = c.shareLists;
            k.bookmark.toShareExistingAnnotations = c.shareAnnotations;
            k.bookmark.tags = c.tags;
            c.tags.length > 0 &&
              K.setUserData({
                tagsUsedLastTime: JSON.stringify(c.tags.slice(0, 8)),
              });
            k.bookmark.title = c.title;
            k.bookmark.url = c.url;
            k.bookmark.unread = c.unread;
            var d = function () {};
            a.cache &&
              (function (f) {
                d = function () {
                  I("[DlgBookmark] bookmark saved. will upload cache");
                  Aa.uploadCache({ groups: f });
                };
              })(k.bookmark.toShareToGroups);
            z.saveBookmark(null, d, "qsave");
          },
          readlater: function (a) {
            if (qa()) {
              a = a.ifUnread;
              if (k.bookmark) k.bookmark.unread = a ? false : true;
              else k.bookmark = ra.readlater();
              a = function () {};
              k.bookmark.unread == true
                ? z.saveBookmark(null, a, "readlater")
                : z.saveBookmark(null, a);
            }
          },
          annotate: function () {
            Xb.open();
          },
          toggleOutlinerSidebar: function () {
            ma.toggle();
          },
          openOutliner: function () {
            ma.open();
          },
          closeOutliner: function () {
            ma.close(true);
          },
          showOutlinerIcon: function () {
            ma.showIcon();
          },
          hideOutlinerIcon: function () {
            ma.hideIcon();
          },
          share: function () {
            Ma(window.location.href)
              ? O.send({ name: "initialData" }, function (a) {
                  xa(a.extensionID);
                  if (x.version != a.version) {
                    a = navigator.platform.match(/Mac/) ? "\u2318?+ R" : "F5";
                    alert(
                      chrome.i18n.getMessage("refreshAfterUpdate", [
                        chrome.i18n.getMessage("extName"),
                        a,
                      ])
                    );
                  } else {
                    L.init();
                    na();
                    R.init();
                    R.show();
                  }
                })
              : alert(chrome.i18n.getMessage("alertUnsupportedPage"));
          },
          contextmenuHighlight: function () {
            qa() &&
              O.send({ name: "initialData" }, function (a) {
                if (k.generated == false) {
                  K.updateCache(a.preloadedPrefs);
                  k.reset(a);
                  k.signedIn && a.shoudLoadMyStuff && z.loadMyStuff();
                  if (a.loadBookmarkResult) {
                    I("[bookmark info already loaded]", a.loadBookmarkResult);
                    z.cb_bm_loadBookmark_success(
                      a.loadBookmarkResult,
                      "prepareCtx"
                    );
                  } else
                    a.shouldLoadBookmarkByMyself &&
                      k.signedIn &&
                      z.loadBookmark();
                }
                if (a.globalData.user == "") k.notify(Da, 1e3);
                else {
                  x.handlers.highlight();
                  return false;
                }
              });
          },
          contextmenuStickynote: function () {
            qa() && x.handlers.addStickyNote();
          },
          refreshBookmarkInfo: function () {
            O.send({ name: "initialData" }, function (a) {
              k.generated = false;
              K.get("prefs.autoload", function (c) {
                c == "true"
                  ? z.cb_bm_loadBookmark_success(
                      a.loadBookmarkResult,
                      "showbar"
                    )
                  : z.cb_bm_loadBookmark_success(a.loadBookmarkResult);
                setTimeout(function () {
                  if (!k.bookmark.saved)
                    k.bookmark.title = document.title
                      ? document.title
                      : window.location.href;
                }, 100);
                if ($("#diigolet-panel-panel").length > 0) {
                  J.updateUI();
                  U.hide();
                  U.syncData("data->form");
                }
                if ($("#diigo-orphanHighlight").length > 0) {
                  $("#diigo-orphanHighlight").remove();
                  Yb.init();
                }
              });
            });
          },
          refreshBookmark: function () {
            window.Ctx = k;
            O.send({ name: "initialData" }, function (a) {
              k.generated = false;
              if (k.bookmark.saved) {
                z.cb_bm_loadBookmark_success(a.loadBookmarkResult, "showbar");
                if (!k.bookmark.saved)
                  k.bookmark.title = document.title
                    ? document.title
                    : window.location.href;
                if ($("#diigolet-panel-panel").length > 0) {
                  J.updateUI();
                  U.syncData("data->form");
                }
                if ($("#diigo-orphanHighlight").length > 0) {
                  $("#diigo-orphanHighlight").remove();
                  Yb.init();
                }
              } else x.run(a, "autoshow");
            });
          },
          researchModeWin: function () {
            researchModeWin.show();
          },
          googleSearchRecommend: function (a) {
            a = a.googleSearchKeyWord;
            I(a);
            if (a != undefined) {
              if (/\+/.test(a)) {
                a = a.split("+");
                if (a.length > 5) k.googleSearchSentence = a.join(" ");
                else k.keywords = a;
              } else if (/\s/.test(a)) {
                a = a.split(" ");
                if (a.length > 5) k.googleSearchSentence = a.join(" ");
                else k.keywords = a;
              } else k.keywords.push(a);
              I(k.keywords);
            }
          },
          createList: function (a) {
            z.createList(a.data);
          },
          refreshOutliner: function () {
            chrome.runtime.sendMessage({ name: "initialData" }, function (a) {
              k.myBmLists = a.globalData.myBmLists;
              k.outliners = a.globalData.outliners;
            });
          },
          refreshMyStuff: function () {
            z.loadMyStuff("myGroups myBookmarkLists");
          },
          loadGroupTagsDictionary: function (a) {
            z.loadGroupTagsDictionary([a.groupName]);
          },
          makeSnapshot: function () {
            Aa.makeSnapshot();
          },
          showWindow: function (a) {
            if (Ma(window.location.href)) {
              if (qa()) {
                if ("data" in a)
                  var c =
                      a.data.linkTitle == null
                        ? x.templinkTitle
                        : a.data.linkTitle,
                    d = a.data.url;
                if ($("#diigolet-panel-panel").length == 0) {
                  L.init();
                  na();
                  O.send({ name: "initialData" }, function (f) {
                    if (x.version != f.version) {
                      f = navigator.platform.match(/Mac/) ? "\u2318?+ R" : "F5";
                      alert(
                        chrome.i18n.getMessage("refreshAfterUpdate", [
                          chrome.i18n.getMessage("extName"),
                          f,
                        ])
                      );
                    } else if (x.version == f.version) {
                      xa(f.extensionID);
                      K.updateCache(f.preloadedPrefs);
                      Aa.makeSnapshot();
                      na();
                      M([J, U, H, ga, Z, R], function (h) {
                        h.init();
                      });
                      J.show();
                      J.hide();
                      za.show(c, d);
                    }
                  });
                } else za.show(c, d);
              }
            } else alert(chrome.i18n.getMessage("alertUnsupportedPage"));
          },
          qdeletebookmark: function () {
            if (
              !k.isAnnotated() ||
              confirm(
                "Removing this as a bookmark will also remove your annotations on this page. Do you want to continue?"
              )
            ) {
              z.deleteBookmark(k.bookmark);
              U.hide();
              J.hide();
            }
          },
          saveImageToDiigo: function (a) {
            if (a.data !== undefined)
              if (Ma(window.location.href))
                if (
                  typeof k.permissions.imagePermission !== "undefined" &&
                  !k.permissions.imagePermission.imagePermission
                ) {
                  ca.init();
                  ca.show("image");
                } else {
                  if (qa()) {
                    var c = a.data,
                      d = k.bookmark.title ? k.bookmark.title : document.title,
                      f = k.bookmark.url
                        ? k.bookmark.url
                        : window.location.href,
                      h = [],
                      i = k.bookmark.title ? k.bookmark.title : document.title,
                      l = a.dtype;
                    if (a.type == "tag") ka.showSavePupop("image", c, l);
                    else if (a.type == "attach" || a.type == "outliner") {
                      var m = {
                        dataURL: c,
                        title: d,
                        tags: h,
                        mode: 2,
                        src_url: f,
                        src_title: i,
                        single_item: false,
                      };
                      if (a.image_src) m.image_src = a.image_src;
                      var t = a.type == "outliner" ? "outliner" : "image";
                      chrome.storage.local.get(null, function (D) {
                        D.researchMode === true && k.bookmark.saved === false
                          ? z.uploadImage(
                              m,
                              t,
                              false,
                              f,
                              {},
                              l,
                              "",
                              true,
                              D.researchModeData
                            )
                          : z.uploadImage(m, t, false, f, {}, l, "", true);
                        xa(chrome.runtime.id);
                        na();
                        if (a.type != "outliner") {
                          L.init();
                          L.notifyWait(
                            chrome.i18n.getMessage("uploadimage_uploading")
                          );
                        }
                      });
                    }
                  }
                }
              else alert(chrome.i18n.getMessage("alertUnsupportedPage"));
          },
          showTutorial: function () {
            lc.show();
          },
          ifbookmark: function () {
            O.send({ name: "initialData" }, function (a) {
              K.updateCache(a.preloadedPrefs);
              if (k.generated != true) {
                k.reset(a);
                k.signedIn && a.shoudLoadMyStuff && z.loadMyStuff();
                if (a.loadBookmarkResult) {
                  I("[bookmark info already loaded]", a.loadBookmarkResult);
                  z.cb_bm_loadBookmark_success(a.loadBookmarkResult);
                } else
                  a.shouldLoadBookmarkByMyself &&
                    k.signedIn &&
                    z.loadBookmark();
              }
              chrome.runtime.sendMessage({
                name: "isSaved",
                data: { saved: k.bookmark.saved, unread: k.bookmark.unread },
              });
              var c = k.bookmark,
                d = window.getSelection().toString();
              K.getUserData("tagsUsedLastTime", function (f) {
                f = f ? JSON.parse(f) : [];
                chrome.runtime.sendMessage({
                  name: "sendCtx",
                  data: {
                    generated: k.generated,
                    bm: c,
                    lists: k.myBmLists,
                    outliners: k.outliners,
                    groups: k.myGroups,
                    mytag: k.myTags,
                    myTagsWithCount: k.myTagsWithCount,
                    permissions: k.permissions,
                    selection: d,
                    lastUsedTags: f,
                    isAnnotated: k.annotations.length > 0,
                  },
                });
              });
            });
          },
          getCtx: function () {
            var a = k.bookmark,
              c = window.getSelection().toString();
            K.getUserData("tagsUsedLastTime", function (d) {
              d = d ? JSON.parse(d) : [];
              chrome.runtime.sendMessage({
                name: "sendCtx",
                data: {
                  generated: k.generated,
                  bm: a,
                  lists: k.myBmLists,
                  groups: k.myGroups,
                  outliners: k.outliners,
                  mytag: k.myTags,
                  myTagsWithCount: k.myTagsWithCount,
                  permissions: k.permissions,
                  selection: c,
                  lastUsedTags: d,
                  isAnnotated: k.annotations.length > 0,
                },
              });
            });
          },
          getRecommendedTags: function () {
            if (k.recommendedTagsLoaded)
              chrome.runtime.sendMessage({
                name: "sendRetags",
                data: k.recommendedTags,
              });
            else {
              var a = k.bookmark;
              z.loadRecommendedTags(a.url, a.getTitle(), function () {
                chrome.runtime.sendMessage({
                  name: "sendRetags",
                  data: k.recommendedTags,
                });
              });
            }
          },
          getGroupTags: function (a) {
            var c = a.groupName;
            k.groupTagsDict[c]
              ? chrome.runtime.sendMessage({
                  name: "sendGtags",
                  data: k.groupTagsDict[c],
                })
              : z.loadGroupTagsDictionary([c], function () {
                  chrome.runtime.sendMessage({
                    name: "sendGtags",
                    data: k.groupTagsDict[c],
                  });
                });
          },
          redirect: function (a) {
            window.location.href = a.url;
          },
          isOutlinerSidebarOpened: function (a, c) {
            c({ opened: ma.opened, outlinerId: ma.outlinerId });
          },
          kindleImportSuccess: function (a) {
            L.notifyInfo('Import <b>"' + a.title + '"</b> successfully!');
          },
          kindleImportFailed: function (a) {
            L.notifyAlert('Import <b>"' + a.title + '"</b> failed!');
          },
          updateNoticeAndToolboar: function (a) {
            if (a && a.status)
              if ("hidden" == a.status) {
                $("#diigolet-notice").css("opacity", "0");
                $("#diigolet-panel-panel").css("opacity", "0");
              } else {
                $("#diigolet-notice").css("opacity", "1");
                $("#diigolet-panel-panel").css("opacity", "1");
              }
          },
          addAnnotation: function (a) {
            if (a.annotation) {
              (aa && aa.j) || aa.init();
              aa.add(a.annotation);
            }
          },
          saveMHTMLSuccess: function (a) {
            Vb.uploadDidSucceed(a.result);
          },
          editItem: function (a) {
            if (a.annotation)
              if (aa && aa.j)
                a.cmd == "remove" || a.cmd == "changeColor"
                  ? aa.editItem(a.cmd, a.annotation)
                  : aa.editItem(a.cmd, null, a.annotation);
          },
          showMHTMLinfo: function () {
            if (!Fa.hasCacheUpload()) {
              ca.init();
              ca.show("acache");
            }
          },
          getMhtml: function () {},
        },
      }),
      K = {
        cache: {},
        updateCache: function (a) {
          var c = this;
          M(a, function (d, f) {
            c.cache[f] = d;
          });
        },
        getFromCache: function (a, c) {
          var d = this.cache[a];
          if (c == "b") d = d == "true";
          else if (c == "n") d = Number(d);
          return d;
        },
        get: function (a, c) {
          O.send({ name: "getPrefs", details: { keys: a } }, c);
        },
        set: function (a, c) {
          O.send({ name: "setPrefs", details: { data: a } }, c);
        },
        getUserData: function (a, c) {
          O.send({ name: "getUserData", details: { keys: a } }, c);
        },
        setUserData: function (a, c) {
          O.send({ name: "setUserData", details: { data: a } }, c);
        },
      };
    K.get("prefs.autoloadBookmarkStatus", function (a) {
      if (a == "true") {
        k.autoLoad = true;
        O.send({ name: "initialData" }, function (c) {
          K.updateCache(c.preloadedPrefs);
          k.reset(c);
          k.signedIn && c.shoudLoadMyStuff && z.loadMyStuff();
          if (c.loadBookmarkResult) {
            I("[bookmark info already loaded]", c.loadBookmarkResult);
            z.cb_bm_loadBookmark_success(c.loadBookmarkResult, "prepareCtx");
          } else c.shouldLoadBookmarkByMyself && k.signedIn && z.loadBookmark();
        });
      } else
        O.send({ name: "initialData" }, function (c) {
          k.user = c.globalData.user;
          k.realName = c.globalData.realName;
        });
    });
    O.send({ name: "getLastFocusedWindow" });
    K.get("prefs.autoImageClipper", function (a) {
      if (window.location.hostname != "maps.google.com")
        if (a == "true")
          if (Ma(window.location.href)) {
            L.init();
            xa(chrome.runtime.id);
            na();
            wa.init();
            xb = wa.diigoImageClipMode = true;
          }
    });
    yb.init();
    /https:\/\/[\S]*\.amazon\.[\S]*\/notebook/.test(window.location.href) &&
      wb.init();
    K.get("prefs.autoShowHighlightIcon", function (a) {
      I(window.location.hostname);
      if (
        !(
          window.location.hostname == "mail.google.com" ||
          window.location.hostname == "docs.google.com"
        )
      )
        if (a == "true") {
          k.autoShowHighlightIcon = true;
          if (Ma(window.location.href))
            if (k.autoShowHighlightIcon == true) {
              Qb();
              $(document).ready(function () {
                Qb();
              });
            }
        }
    });
    $(document).bind("keydown", function (a) {
      K.get(
        [
          "prefs.shortcutBookmark",
          "prefs.shortcutBookmarkCtrl",
          "prefs.shortcutBookmarkAlt",
          "prefs.shortcutBookmarkKey",
          "prefs.shortcutReadlater",
          "prefs.shortcutReadlaterCtrl",
          "prefs.shortcutReadlaterAlt",
          "prefs.shortcutReadlaterKey",
          "prefs.shortcutAnnotate",
          "prefs.shortcutAnnotateCtrl",
          "prefs.shortcutAnnotateAlt",
          "prefs.shortcutAnnotateKey",
          "prefs.shortcutAnnotateArticle",
          "prefs.shortcutAnnotateArticleCtrl",
          "prefs.shortcutAnnotateArticleAlt",
          "prefs.shortcutAnnotateArticleKey",
          "prefs.shortcutAnnotatePDF",
          "prefs.shortcutAnnotatePDFCtrl",
          "prefs.shortcutAnnotatePDFAlt",
          "prefs.shortcutAnnotatePDFKey",
          "prefs.shortcutAnnotateScreenshot",
          "prefs.shortcutAnnotateScreenshotCtrl",
          "prefs.shortcutAnnotateScreenshotAlt",
          "prefs.shortcutAnnotateScreenshotKey",
          "prefs.shortcutOpenOutlinerSidebar",
          "prefs.shortcutOpenOutlinerSidebarCtrl",
          "prefs.shortcutOpenOutlinerSidebarAlt",
          "prefs.shortcutOpenOutlinerSidebarKey",
        ],
        function (c) {
          if (c)
            if (
              c["prefs.shortcutBookmark"] == "true" &&
              oa(c["prefs.shortcutBookmarkCtrl"]) == a.ctrlKey &&
              oa(c["prefs.shortcutBookmarkAlt"]) == a.altKey &&
              String.fromCharCode(a.keyCode) == c["prefs.shortcutBookmarkKey"]
            )
              O.send({ name: "initialData" }, function (d) {
                if (x.version != d.version) {
                  d = navigator.platform.match(/Mac/) ? "\u2318?+ R" : "F5";
                  alert(
                    chrome.i18n.getMessage("refreshAfterUpdate", [
                      chrome.i18n.getMessage("extName"),
                      d,
                    ])
                  );
                } else {
                  L.init();
                  na();
                  if (d.globalData.user == "") k.notify(Da, 1e3);
                  else {
                    k.generated == false &&
                      z.cb_bm_loadBookmark_success(
                        d.loadBookmarkResult,
                        "prepareCtx"
                      );
                    K.updateCache(d.preloadedPrefs);
                    Aa.makeSnapshot();
                    $("#diigolet-panel-panel").length == 0 &&
                      M([J, U, H, ga, Z, R], function (f) {
                        f.init();
                      });
                    za.show();
                    x.ready = true;
                    Xa();
                  }
                }
              });
            else if (
              c["prefs.shortcutReadlater"] == "true" &&
              oa(c["prefs.shortcutReadlaterCtrl"]) == a.ctrlKey &&
              oa(c["prefs.shortcutReadlaterAlt"]) == a.altKey &&
              String.fromCharCode(a.keyCode) == c["prefs.shortcutReadlaterKey"]
            )
              O.send({ name: "initialData" }, function (d) {
                if (x.version != d.version) {
                  d = navigator.platform.match(/Mac/) ? "\u2318?+ R" : "F5";
                  alert(
                    chrome.i18n.getMessage("refreshAfterUpdate", [
                      chrome.i18n.getMessage("extName"),
                      d,
                    ])
                  );
                } else {
                  L.init();
                  na();
                  if (d.globalData.user == "") k.notify(Da, 1e3);
                  else {
                    k.generated == false &&
                      z.cb_bm_loadBookmark_success(
                        d.loadBookmarkResult,
                        "prepareCtx"
                      );
                    if (k.bookmark) k.bookmark.unread = true;
                    else k.bookmark = ra.readlater();
                    z.saveBookmark(null, function () {}, "readlater");
                  }
                }
              });
            else if (
              c["prefs.shortcutAnnotate"] == "true" &&
              oa(c["prefs.shortcutAnnotateCtrl"]) == a.ctrlKey &&
              oa(c["prefs.shortcutAnnotateAlt"]) == a.altKey &&
              String.fromCharCode(a.keyCode) == c["prefs.shortcutAnnotateKey"]
            )
              O.send({ name: "initialData" }, function (d) {
                if (x.version != d.version) {
                  d = navigator.platform.match(/Mac/) ? "\u2318?+ R" : "F5";
                  alert(
                    chrome.i18n.getMessage("refreshAfterUpdate", [
                      chrome.i18n.getMessage("extName"),
                      d,
                    ])
                  );
                } else {
                  L.init();
                  xa(chrome.runtime.id);
                  na();
                  if (d.globalData.user == "") k.notify(Da, 1e3);
                  else {
                    k.generated == false &&
                      z.cb_bm_loadBookmark_success(
                        d.loadBookmarkResult,
                        "prepareCtx"
                      );
                    if ($("#diigolet-panel-panel").length == 0) {
                      M([J, U, H, ga, Z, R], function (f) {
                        f.init();
                      });
                      J.show();
                      rb();
                      Ub.afterRun();
                      x.ready = true;
                      Xa();
                    } else {
                      J.show();
                      k.toggleSilent(false);
                    }
                    k.unpaintAllAnnotations();
                    k.paintAllAnnotations();
                    N.sort();
                    J.adjustPosition();
                  }
                }
              });
            else if (
              c["prefs.shortcutAnnotateArticle"] == "true" &&
              oa(c["prefs.shortcutAnnotateArticleCtrl"]) == a.ctrlKey &&
              oa(c["prefs.shortcutAnnotateArticleAlt"]) == a.altKey &&
              String.fromCharCode(a.keyCode) ==
                c["prefs.shortcutAnnotateArticleKey"]
            )
              Xb.open();
            else if (
              c["prefs.shortcutAnnotatePDF"] == "true" &&
              oa(c["prefs.shortcutAnnotatePDFCtrl"]) == a.ctrlKey &&
              oa(c["prefs.shortcutAnnotatePDFAlt"]) == a.altKey &&
              String.fromCharCode(a.keyCode) ==
                c["prefs.shortcutAnnotatePDFKey"]
            )
              chrome.runtime.sendMessage({
                name: "openPdf",
                url: window.location.href,
              });
            else if (
              c["prefs.shortcutAnnotateScreenshot"] == "true" &&
              oa(c["prefs.shortcutAnnotateScreenshotCtrl"]) == a.ctrlKey &&
              oa(c["prefs.shortcutAnnotateScreenshotAlt"]) == a.altKey &&
              String.fromCharCode(a.keyCode) ==
                c["prefs.shortcutAnnotateScreenshotKey"]
            )
              ka.initSelectedCapture();
            else
              c["prefs.shortcutOpenOutlinerSidebar"] == "true" &&
                oa(c["prefs.shortcutOpenOutlinerSidebarCtrl"]) == a.ctrlKey &&
                oa(c["prefs.shortcutOpenOutlinerSidebarAlt"]) == a.altKey &&
                String.fromCharCode(a.keyCode) ==
                  c["prefs.shortcutOpenOutlinerSidebarKey"] &&
                ma.toggle();
        }
      );
    });
    $(document).on("mousedown", "a", function (a) {
      if (a.which == 3) x.templinkTitle = $(a.target).text();
    });
    $(document).on("mousedown", function (a) {
      if (a.which == 3) x.rightClickPos = { x: a.pageX, y: a.pageY };
    });
    K.get("prefs.outlinerIcon", function (a) {
      a == "true" && ma.init();
    });
    window.addEventListener(
      "message",
      function (a) {
        switch (a.data.type) {
          case "ifbookmark":
            O.send({ name: "initialData" }, function (c) {
              K.updateCache(c.preloadedPrefs);
              if (k.generated != true) {
                k.reset(c);
                k.signedIn && c.shoudLoadMyStuff && z.loadMyStuff();
                if (c.loadBookmarkResult) {
                  I("[bookmark info already loaded]", c.loadBookmarkResult);
                  z.cb_bm_loadBookmark_success(c.loadBookmarkResult);
                } else
                  c.shouldLoadBookmarkByMyself &&
                    k.signedIn &&
                    z.loadBookmark();
              }
              var d = k.bookmark,
                f = window.getSelection().toString();
              K.getUserData("tagsUsedLastTime", function (h) {
                h = h ? JSON.parse(h) : [];
                Sa({
                  type: "sendCtx",
                  data: {
                    generated: k.generated,
                    bm: d,
                    lists: k.myBmLists,
                    outliners: k.outliners,
                    groups: k.myGroups,
                    mytag: k.myTags,
                    myTagsWithCount: k.myTagsWithCount,
                    permissions: k.permissions,
                    selection: f,
                    lastUsedTags: h,
                    isAnnotated: k.annotations.length > 0,
                  },
                });
              });
            });
            break;
          case "getRecommendedTags":
            if (k.recommendedTagsLoaded)
              Sa({ type: "sendRetags", data: k.recommendedTags });
            else {
              a = k.bookmark;
              z.loadRecommendedTags(a.url, a.getTitle(), function () {
                Sa({ type: "sendRetags", data: k.recommendedTags });
              });
            }
            break;
          case "closeWin":
            za.close();
            break;
          case "qdeletebookmark":
            if (
              !k.isAnnotated() ||
              confirm(
                "Removing this as a bookmark will also remove your annotations on this page. Do you want to continue?"
              )
            ) {
              z.deleteBookmark(k.bookmark);
              za.close();
              J.hide();
            }
            break;
          case "loadGroupTagsDictionary":
            z.loadGroupTagsDictionary([a.data.groupName], function (c) {
              Sa({ type: "updateGroupTag", data: c });
            });
            break;
          case "onload":
            if (/(.*).diigo.com/.test(window.location.href)) return;
            if (a.data.outlinerId) {
              K.set({ openedOutlinerId: a.data.outlinerId });
              ma.outlinerId = a.data.outlinerId;
            } else {
              K.set({ openedOutlinerId: "" });
              ma.outlinerId = null;
            }
            K.set({ "prefs.outlinerFrameUrl": a.data.url });
            break;
          case "start-upload-image":
            chrome.runtime.sendMessage({
              name: "uploadImageToDiigo",
              src: a.data.src,
              type: "outliner",
            });
            yb.hide();
            break;
          case "showMHTMLinfo":
            if (!Fa.hasCacheUpload()) {
              ca.init();
              ca.show("acache");
              za.close();
              return;
            }
            break;
          case "createList":
            z.createList(a.data.data);
            break;
        }
      },
      false
    );
    var L = {
        j: null,
        init: function () {
          var a = this;
          if (!a.inited) {
            a.inited = true;
            a.create();
            Va("info alert OK wait").forEach(function (c) {
              a["notify" + c[0].toUpperCase() + c.substr(1)] = function (d, f) {
                return a.notify(d, c, f);
              };
            });
          }
        },
        create: function () {
          (this.j = $(pb).eq(0).appendTo(document.body).hide())
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
              !$(this).attr("id") == "team_url" &&
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
      ca = {
        j: null,
        shown: false,
        init: function () {
          this.create();
        },
        create: function () {
          if (this.shown != true)
            this.j = $(
              '<div id="diigo-premium-warning-wrapper"> <div id="diigo-premium-warning"><div id="diigo-premium-close">+</div><div id="diigo-premium-warning-content"><div id="diigo-premium-warning-top"><div id="diigo-premium-warning-icon">!</div><div id="diigo-new-feature"></div><span id="diigo-premium-warning-title"></span></div><div id="diigo-premium-warning-main"><div id="diigo-premium-warning-text"></div></div><div id="diigo-premium-warning-bottom"><div id="diigo-premium-upgrade">Upgrade Now!</div></div></div></div></div>'
            )
              .eq(0)
              .appendTo(document.body.parentNode)
              .hide();
        },
        destroy: function () {
          this.j.remove();
          this.shown = false;
        },
        show: function (a) {
          var c = this,
            d = k.permissions,
            f = d.servicePlanName;
          switch (a) {
            case "image":
              var h =
                '<span class="num red">' +
                d.imagePermission.imageUsedCount +
                "</span>";
              d =
                '<span class="num green">' +
                d.imagePermission.imageQuota +
                "</span>";
              h =
                "Your image number is over quota: " +
                d +
                " images for " +
                f +
                " Plan, you have " +
                h +
                " images.";
              var i = "Over Quota";
              break;
            case "highlight":
              h =
                '<span class="num red">' +
                d.annPermission.annotationUsedCount +
                "</span>";
              d =
                '<span class="num green">' +
                d.annPermission.annotationQuota +
                "</span>";
              h =
                "Your highlight number is over quota: " +
                d +
                " highlights for " +
                f +
                " Plan, you have " +
                h +
                " highlights.";
              i = "Over Quota";
              break;
            case "cache":
              h =
                "This feature is not available on your current plan. Please upgrade your plan to gain access to this feature.";
              i = "Feature Not Available";
              break;
            case "kindle":
              h =
                "This feature is not available on your current plan. Please upgrade your plan to gain access to this feature.";
              i = "Feature Not Available";
              break;
            case "acache":
              h =
                "\u201cAdvanced Cache\u201d feature will help you backup the page completely. It packs all HTML, CSS, Images of the page together into one single file.   Even webpages that are password-protected, like webpages in your school library, can be saved.";
              i = "Advanced Cache";
              break;
          }
          c.j.find("#diigo-premium-warning-title").text(i);
          c.j.find("#diigo-premium-warning-text").html(h);
          if ("acache" == a) {
            $("#diigo-premium-upgrade").text("Upgrade to unlock it now!");
            $("#diigo-new-feature").show();
            $("#diigo-premium-warning-icon").hide();
            a = "cache";
          } else {
            $("#diigo-premium-upgrade").text("Upgrade Now!");
            $("#diigo-new-feature").hide();
            $("#diigo-premium-warning-icon").show();
          }
          if (c.shown != true) {
            c.j.show();
            c.shown = true;
            c.j.find("#diigo-premium-upgrade").click(function () {
              chrome.runtime.sendMessage({
                name: "googleEvent",
                msg: {
                  eventType: "Chrome extension",
                  action: "Click upgrade from over quota",
                  label: a,
                },
              });
              window.open("https://www.diigo.com/premium?f=chrome_ext_oq_" + a);
            });
            c.j.find("#diigo-premium-close").click(function () {
              c.destroy();
            });
          }
        },
      },
      Ab = {};
    Ab.Class = {
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
        c && Ab.Class.extend(d, c);
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
            E.func.argumentNames(h)[0] == "$super"
          ) {
            var i = h;
            h = E.extend(
              E.func.wrap(
                (function (l) {
                  return function () {
                    return d[l].apply(this, arguments);
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
    var ea = Ab.Class.create({
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
          var f = ea.getTextSize(c.recInput.val(), c.recInputSizer);
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
          f = ea.getTextSize(c.recInput.val(), c.recInputSizer);
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
        a = JSON.parse(JSON.stringify(a));
        ea.contacts = a;
        ea.contactListsID = [];
        for (var d = 0; d < ea.contacts.length; d++)
          ea.contacts[d].type == "list" && ea.contactListsID.push(d);
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
        for (var c = 0; c < ea.contacts.length; c++) {
          var d = "",
            f = ea.contacts[c];
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
            f = ea.contacts[d],
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
              ? ea.contacts.push({ type: "email", id: a })
              : ea.contacts.push({
                  type: "friend",
                  id: a,
                  extra: { real_name: a },
                });
            a = ea.contacts.length - 1;
          } else a = $("#cI_" + this.currentItem).attr("cIndex");
        }
        var c = ea.contacts[a];
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
            var h = ea.contacts[this.recItemsId[f]];
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
            a.push(ea.contacts[this.recItemsId[c]]);
          return a;
        }
      },
    });
    ea.getTextSize = function (a, c) {
      c.innerHTML = a.replace(/ /g, "&nbsp;");
      return c.offsetWidth > 500 ? 500 : c.offsetWidth;
    };
    var Ga = {
        cache: {},
        get2: function (a, c, d) {
          var f = this,
            h;
          if ((h = f.cache[c])) {
            d && d(h);
            return h;
          } else
            z.makeAnnotatedLink(a, c, function (i) {
              if (d) d((f.cache[c] = i.url));
            });
        },
        get: function (a, c) {
          return this.get2(a, 3, c);
        },
      },
      R = {
        shown: false,
        j: null,
        tabs: {},
        init: function () {
          if (!($("#diigolet-dialog-share").length > 0)) {
            var a = this;
            a.create();
            $(window).resize(function () {
              a.shown && a.adjustPosition();
            });
            M(a.tabs, function (c) {
              c.init();
            });
          }
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
            l = a.outerHeight();
          if (d < f + i) a.css("left", (f = d - i));
          if (c < h + l) a.css("top", (h = c - l));
          h < 0 && a.css("top", 1);
          f < 0 && a.css("left", 1);
        },
        show: function () {
          var a = this;
          a.shown ||
            K.get("share.lastOpenedTab", function (c) {
              a.shown = true;
              a.j.show();
              a.adjustPosition();
              a.changeTab(c || "twitter");
            });
        },
        hide: function () {
          if (this.shown) {
            this.shown = false;
            this.j.hide();
            M(this.tabs, function (a) {
              a.shown = false;
            });
          }
        },
        updateUsername: function () {},
        updateUI: function () {},
        create: function () {
          var a = this,
            c = (a.j = $(ob).eq(0).appendTo(document.body).hide());
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
          K.set({ "share.lastOpenedTab": a });
        },
      };
    R.tabs.twitter = {
      connectedToTwitter: false,
      init: function () {
        var a = this;
        a.j = $("#diigolet-dialog-share-twitter");
        a.jMsg = $("#diigolet-dialog-share-twitterMsg")
          .val("")
          .bind("input", $.proxy(a.updateCountDown, a));
        a.j.find("#diigolet-twitter-cancelBtn").click(function () {
          R.hide();
        });
        a.j.find("#diigolet-twitter-saveBtn").click(function () {
          a.trySend();
        });
        $("#diigolet-dialog-share-twitter-signedIn>a").click(function () {
          O.send({ name: "twitterChangeUser" });
          return false;
        });
        $("#diigolet-dialog-share-twitter-notSignedIn").click(function () {
          O.send({ name: "twitterConnect" });
          return false;
        });
      },
      show: function () {
        var a = this;
        if (!a.shown) {
          a.shown = true;
          a.jMsg.val("Preparing for your tweet. Please wait...");
          a.defaultMsg();
          O.send({ name: "twitterCheckAuthentication" }, function (c) {
            a.updateTwitterSignInStatus(c);
          });
        }
      },
      updateTwitterSignInStatus: function (a) {
        this.connectedToTwitter = !!a;
        $("#diigolet-dialog-share-twitter-signedIn").toggle(!!a);
        $("#diigolet-dialog-share-twitter-notSignedIn").toggle(!a);
        a &&
          $("#diigolet-dialog-share-twitter-signedIn>span").text(a.screen_name);
      },
      updateCountDown: function () {
        var a = 140 - this.jMsg[0].value.length;
        $("#diigolet-share-twitterLeftChars")
          .text(a)
          .toggleClass("full", a <= 0);
      },
      defaultMsg: function () {
        function a(l) {
          c.shortenUrl(l, function (m) {
            c.jMsg.val(c.composeMessage(f, m, h));
            c.updateCountDown();
          });
        }
        var c = this,
          d = k.bookmark,
          f = d.title,
          h = d.description,
          i = d.url;
        k.pageComments.length > 0 || k.annotations.length > 0
          ? Ga.get(d.url, function (l) {
              c.jMsg.val(c.composeMessage(f, l, h));
              c.updateCountDown();
            })
          : a(i);
        c.updateCountDown();
      },
      composeMessage: function (a, c) {
        return a + " " + c;
      },
      shortenUrl: function (a, c) {
        O.send({ name: "shortenUrl", details: { url: a } }, c);
      },
      trySend: function () {
        if (!this.connectedToTwitter) {
          (function (c) {
            c = $(c);
            for (var d = 0; d < 3; d++) c.fadeOut(150).fadeIn(150);
          })("#diigolet-dialog-share-twitter-notSignedIn");
          return false;
        }
        var a = Qa(this.jMsg.val());
        if (a.length > 140) {
          alert("Your message is too long!");
          return false;
        } else if (a.length == 0) {
          alert("Please input message!");
          return false;
        }
        L.notifyInfo("Sending your tweet...");
        O.send({ name: "twitterSend", details: { status: a } }, function (c) {
          I(c);
          c && c.id
            ? L.notifyOK("Your tweet is sent!")
            : L.notifyAlert("An error has occurred. Your tweet was not sent.");
        });
      },
      onTwitterSignIn: function (a) {
        this.updateTwitterSignInStatus(a);
      },
      onTwitterSignOut: function () {
        this.updateTwitterSignInStatus(null);
      },
    };
    R.tabs.facebook = {
      init: function () {},
      show: function () {
        Ga.get(k.bookmark.url, function () {
          var a = k.bookmark.getTitle();
          O.send({
            name: "openWindow",
            details: {
              url:
                "https://www.facebook.com/sharer.php?src=bm&v=4&i=1267884404&" +
                hc({ u: k.bookmark.url, t: a }),
              name: "sharer",
              features: "toolbar=0,status=0,resizable=1,width=626,height=436",
            },
          });
        });
      },
    };
    R.tabs.gPlus = {
      init: function () {},
      show: function () {
        Ga.get(k.bookmark.url, function (a) {
          O.send({
            name: "openWindow",
            details: {
              url: "https://plus.google.com/share?url=" + a,
              name: "sharer",
              features:
                "toolbar=1,status=0,resizable=1,scrollbars=1,width=700,height=453",
            },
          });
        });
      },
    };
    R.tabs.gBuzz_viaGoogleReaderDeprecated = {
      init: function () {
        this.jframe = $("#diigolet-dialog-share-gBuzz>iframe");
      },
      show: function () {
        function a() {
          var d = window.getSelection();
          if (d.rangeCount > 0) {
            var f = document.createElement("div");
            f.appendChild(d.getRangeAt(0).cloneContents());
            return f.innerHTML;
          }
          return "";
        }
        function c(d) {
          var f = k.bookmark.getTitle(),
            h = {
              url: k.bookmark.url,
              title: f,
              srcUrl: x.urls.getUserBookmarksPageURL(),
              srcTitle: "Diigo",
              snippet: "",
            };
          if (d) h.snippet += x.AnnotationFormatter.format({ mode: 1 });
          h.snippet += a() + "<br/>";
          if (d)
            h.snippet += Y(
              '<a style="padding-left:2em;" title="#{0}" href="#{1}">#{2}</a><br />',
              [f, d, "View the annotated version on Diigo"]
            );
          var i = $(
            '<form action="https://www.google.com/reader/link" method="POST" accept-charset="utf-8"></form>'
          )
            .attr({ target: "diigolet-GR________link_bookmarklet_frame" })
            .appendTo(document.body);
          $.each(h, function (l, m) {
            var t = document.createElement("input");
            $(t).attr({ type: "hidden", name: l, value: m }).appendTo(i);
          });
          i.submit().remove();
        }
        this.jframe.attr(
          "src",
          chrome.extension.getURL("share-gbuzz-loading.html")
        );
        k.pageComments.length > 0 || k.annotations.length > 0
          ? Ga.get(k.bookmark.url, function (d) {
              c(d);
            })
          : c(null);
      },
    };
    R.tabs.gBuzz = {
      init: function () {
        this.jframe = $("#diigolet-dialog-share-gBuzz>iframe");
      },
      show: function () {
        function a() {
          var d = window.getSelection();
          if (d.rangeCount > 0) {
            var f = document.createElement("div");
            f.appendChild(d.getRangeAt(0).cloneContents());
            return f.innerHTML;
          }
          return "";
        }
        function c(d) {
          var f = k.bookmark.getTitle(),
            h = {
              url: k.bookmark.url,
              title: f,
              srcUrl: x.urls.getUserBookmarksPageURL(),
              srcTitle: "Diigo",
              snippet: "",
            };
          if (d) h.snippet += x.AnnotationFormatter.format({ mode: 1 });
          h.snippet += a() + "<br/>";
          if (d)
            h.snippet += Y(
              '<a style="padding-left:2em;" title="#{0}" href="#{1}">#{2}</a><br />',
              [f, d, "View the annotated version on Diigo"]
            );
          var i = $(
            '<form action="https://www.google.com/reader/link" method="POST" accept-charset="utf-8"></form>'
          )
            .attr({ target: "diigolet-GR________link_bookmarklet_frame" })
            .appendTo(document.body);
          $.each(h, function (l, m) {
            var t = document.createElement("input");
            $(t).attr({ type: "hidden", name: l, value: m }).appendTo(i);
          });
          i.submit().remove();
        }
        this.jframe.attr(
          "src",
          chrome.extension.getURL("share-gbuzz-loading.html")
        );
        k.pageComments.length > 0 || k.annotations.length > 0
          ? Ga.get(k.bookmark.url, function (d) {
              c(d);
            })
          : c(null);
      },
    };
    R.tabs.email = {
      init: function () {
        var a = this;
        a.j = $("#diigolet-dialog-share-email");
        a.jCheckQuotes = $("#diigolet-dialog-share-email-quotes-checker>input");
        a.jTxtTo = $("#diigolet-dialog-share-email-to");
        a.jSubject = $("#diigolet-dialog-share-email-subject");
        a.jTxtMsg = $("#diigolet-dialog-share-email-message");
        a.jQuotes = $("#diigolet-aidlog-share-email-quotes-content");
        a.j.find("#diigolet-email-cancelBtn").click(function () {
          R.hide();
        });
        a.j.find("#diigolet-email-saveBtn").click(function () {
          a.trySend();
        });
        a.jCheckQuotes.attr("checked", "checked").change(function () {
          if ($(this).is(":checked")) {
            a.preview();
            a.jQuotes.parent().show();
          } else a.jQuotes.parent().hide();
        });
      },
      show: function () {
        this.jTxtTo[0].focus();
        this.jSubject.val(k.bookmark.getTitle());
        this.jCheckQuotes.change();
        if (!this.pikuInited) {
          this.initAutocompleteContacts();
          this.pikuInited = true;
        }
      },
      preview: function () {
        var a = this,
          c = a.jCheckQuotes.is(":checked");
        a.jQuotes.html(c ? a.composeMessage() : "");
        if (c)
          k.pageComments.length > 0 || k.annotations.length > 0
            ? Ga.get(k.bookmark.url, function (d) {
                a.updateURL(d);
              })
            : a.updateURL(k.bookmark.url);
      },
      updateURL: function (a) {
        I("[Share] updating annotated link", a);
        this.jQuotes.find("a.diigoAnnotatedLink").attr("href", a);
      },
      composeMessage: function (a) {
        var c = "";
        if (a) c += "<p>" + a + "</p>";
        if (!this.jCheckQuotes.is(":checked")) return c;
        a =
          k.pageComments.length > 0 || k.annotations.length > 0
            ? Ga.get(k.bookmark.url) || "DIIGO_PERMALINK"
            : k.bookmark.url;
        a = Y(
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
        var a = Ea.string.strip(this.jSubject.val());
        if (!a) {
          L.notifyAlert("Please input subject");
          return false;
        }
        a = {
          toAllFriends: false,
          toUsers: [],
          toEmails: [],
          toLists: [],
          mode: 2,
          subject: a,
          body: this.composeMessage(Ea.string.stripTags(this.jTxtMsg.val())),
        };
        if (this.jCheckQuotes.is(":checked")) a.bookmarkUrl = k.bookmark.url;
        var c = this.piku.getRecItems();
        if (!c) {
          L.notifyAlert("Please input recipients");
          return false;
        }
        a.toUsers = c.friends;
        a.toEmails = c.emails;
        a.toLists = c.lists;
        k.myContacts = JSON.parse(JSON.stringify(ea.contacts));
        x.Messenger.send({
          name: "updateGlobalData",
          details: { myContacts: k.myContacts },
        });
        z.shareBookmark(a, function (d) {
          if (d.code == 1) {
            L.notifyOK("Message sent");
            R.hide();
          } else L.notifyAlert("Message not sent");
        });
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
        this.piku = new ea({
          rec: "#forwardTo",
          contacts: k.myContacts,
          maxRecipients: 20,
          width: "100%",
          maxHeight: 180,
          scanType: "all",
        });
      },
    };
    W(R.tabs.email, DlgShare_piku);
    R.onMyContactsUpdate = function () {
      R.tabs.email.onMyContactsUpdate();
    };
    x.AnnotationFormatter = {
      format: function (a) {
        a = W(
          { mode: 3, includePageComments: false, onlyPrivate: false },
          a || {}
        );
        var c = (a.mode & 2) == 2,
          d = (a.mode & 1) == 1;
        I(
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
            k.pageComments
              .filter(function (h) {
                return (
                  (c ? true : h.user == k.user) && (d ? true : h.mode != 2)
                );
              })
              .map(function (h) {
                return (
                  '<li style="line-height:150%;margin-bottom:.6em;">' +
                  Ea.string.stripTags(h.content) +
                  "</li>"
                );
              })
              .join("\n") +
            "</ul>";
        f +=
          "<ul>" +
          k.annotations
            .filter(function (h) {
              return a.onlyPrivate == true
                ? h.user == k.user && h.onlyInGroup == false
                : (c ? true : h.user == k.user) && (d ? true : h.mode != 2);
            })
            .map(function (h) {
              var i = "";
              if (h.type == ia) i = Ea.string.stripTags(h.content);
              else if (h.type == Wa)
                i = Ea.string.evalTpl(
                  '<img src="#{0}" title="#{1}" alt="#{1}">(image)',
                  [h.extra.imageUrl, ""]
                );
              else if (h.type == fa)
                i =
                  '<img src="https://www.diigo.com/images/v2/float_note.gif" />(floating sticky note)';
              else if (h.type == 3) i = "(flash movie)" + h.content;
              else if (h.type == 4) i = "(video)" + h.content;
              return Ea.string.evalTpl(
                '<li style="line-height:150%;margin-bottom:.6em;">#{0} #{1} #{2}</li>',
                [
                  i,
                  h.groups ? "" : "",
                  "<ul>" +
                    h.comments
                      .filter(function (l) {
                        return (
                          (c ? true : l.user == k.user) &&
                          (d ? true : l.mode != 2)
                        );
                      })
                      .map(function (l) {
                        return (
                          '<li style="line-height:150%;margin-bottom:.6em;">' +
                          Ea.string.stripTags(l.content) +
                          Ea.string.evalTpl(
                            ' <span style="font-size:11px;color:#aaa">comment by <a href="#{0}">#{1}</a></span>',
                            [x.urls.getUserHomepageURL(l.user), l.realName]
                          ) +
                          "</li>"
                        );
                      })
                      .join("\n") +
                    "</ul>",
                ]
              );
            })
            .join("\n") +
          "</ul>";
        return f;
      },
    };
    R.tabs.annotatedLink = {
      init: function () {
        this.j = $("#diigolet-dialog-share-annotatedLink");
        this.j.find("#diigolet-annotatedLink-cancelBtn").click(function () {
          R.hide();
        });
        this.j.find("#diigolet-annotatedLink-saveBtn").click(function () {
          var a = $("#diigolet-dialog-share-annotatedLink-value").val();
          x.Messenger.send({ name: "copy", details: { text: a } });
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
          .val(chrome.i18n.getMessage("share_loadingAnnotatedLink"));
        Ga.get(k.bookmark.url, function (c) {
          a.jInput.removeClass("loading").val(c);
          $("#diigolet-dialog-share-annotatedLink-optLinks a:first").attr(
            "href",
            c
          );
        });
      },
    };
    var ka = {
      editMode: false,
      drawColor: "red",
      fontSize: 14,
      actions: [],
      reTagShown: false,
      luTagShown: false,
      initTool: "",
      initSelectedCapture: function () {
        function a(s) {
          o = document.getElementById("draw-canvas");
          r = o.getContext("2d");
          n = document.getElementById("bgcanvas");
          u = n.getContext("2d");
          if (s == "diigosc-text-btn") {
            $("#diigosc-colorpanel").addClass("text-mode");
            $("#bgcanvas").css("cursor", "text");
          } else if ($("#diigosc-colorpanel").hasClass("text-mode")) {
            $("#diigosc-colorpanel").removeClass("text-mode");
            $("#bgcanvas").css("cursor", "crosshair");
          }
          if (t.editMode == true)
            if (s == "diigosc-tag-btn") Na({ type: "saveWithTag" });
            else
              s == "diigosc-attach-btn"
                ? Na({ type: "saveAttach" })
                : t.diigoscDraw(s);
          else {
            var w = $("#diigolet_screenshot_center").width(),
              y = $("#diigolet_screenshot_center").height(),
              B = $("#diigolet_screenshot_center").offset().top,
              C = $("#diigolet_screenshot_center").offset().left;
            if ($("#diigosc-savepanel").hasClass("up")) {
              $("#diigosc-editpanel").hide();
              setTimeout(function () {
                chrome.runtime.sendMessage({
                  name: "capture",
                  target: s,
                  cw: w,
                  ch: y,
                  ct: B,
                  cl: C,
                });
              }, 50);
            } else
              chrome.runtime.sendMessage({
                name: "capture",
                target: s,
                cw: w,
                ch: y,
                ct: B,
                cl: C,
              });
          }
        }
        function c(s) {
          h(q, "left", s.pageX + 5 + "px");
          h(q, "top", s.pageY + 5 + "px");
        }
        function d(s) {
          if (s.button == 0) {
            wrapper.removeEventListener("mousemove", c, false);
            h(q, "display", "none");
            s.preventDefault();
            var w = s.pageX,
              y = s.pageY,
              B,
              C,
              F = document.getElementById("diigolet_screenshot_size"),
              la = document.getElementById("diigosc-editpanel"),
              ba = function (P) {
                h(wrapper, "background-color", "rgba(0,0,0,0)");
                C = P.pageX - w;
                B = P.pageY - y;
                F.children[0].textContent = Math.abs(C) + " X " + Math.abs(B);
                i(w, y, C, B);
                l(w, y, C, B);
              },
              T = function (P) {
                if (
                  (P.pageX - w == 0 || P.pageY - y == 0) &&
                  $("#diigolet_screenshot_center").width() == 0
                ) {
                  h(wrapper, "background-color", "rgba(0,0,0,0)");
                  F.children[0].textContent =
                    Math.abs(200) + " X " + Math.abs(200);
                  i(w - 100, y - 100, 200, 200);
                  l(w - 100, y - 100, 200, 200);
                }
                wrapper.removeEventListener("mousedown", d, false);
                wrapper.removeEventListener("mousemove", ba, false);
                wrapper.removeEventListener("mouseup", T, false);
                h(
                  document.getElementById("diigosc-editpanel"),
                  "display",
                  "block"
                );
                h(F, "display", "block");
                f();
                P = -(195 - C) / 2;
                C < 190 ? h(la, "right", P + "px") : h(la, "right", "0px");
                m();
              };
            wrapper.addEventListener("mousemove", ba, false);
            wrapper.addEventListener("mouseup", T, false);
          }
        }
        function f() {
          var s = $("#diigolet_screenshot_center").offset().top - 30,
            w = $("#diigolet_screenshot_center").offset().left,
            y = $("#diigolet_screenshot_center").width(),
            B = $("#diigolet_screenshot_center").height(),
            C =
              $("#diigolet_screenshot_center").offset().top -
              document.scrollingElement.scrollTop;
          if (
            document.scrollingElement.scrollTop +
              window.innerHeight -
              $("#diigolet_screenshot_center").offset().top -
              B >
            93
          ) {
            B = $("#diigolet_screenshot_center").offset().top + B + 6;
            if ($("#diigosc-colorpanel").hasClass("up")) {
              $("#diigosc-colorpanel").removeClass("up");
              $("#diigosc-savepanel").removeClass("up");
            }
          } else {
            B =
              C > 93
                ? $("#diigolet_screenshot_center").offset().top - 36
                : s + B;
            $("#diigosc-colorpanel").addClass("up");
            $("#diigosc-savepanel").addClass("up");
          }
          y = w + (y - 248);
          h(
            document.getElementById("diigolet_screenshot_size"),
            "left",
            w + "px"
          );
          h(
            document.getElementById("diigolet_screenshot_size"),
            "top",
            s + "px"
          );
          h(document.getElementById("diigosc-editpanel"), "left", y + "px");
          h(document.getElementById("diigosc-editpanel"), "top", B + "px");
        }
        function h(s, w, y) {
          s.style.setProperty(w, y);
        }
        function i(s, w, y, B) {
          var C = document.documentElement.scrollHeight,
            F = document.documentElement.scrollWidth,
            la = y >= 0 ? s + y : s,
            ba = B >= 0 ? w : w + B,
            T = y >= 0 ? F - s - y : F - s;
          w = B >= 0 ? w + B : w;
          s = y >= 0 ? F - s : F - s - y;
          y = C - w;
          F = F - s;
          C = C - ba;
          B = document.getElementById("diigolet_screenshot_top");
          var P = document.getElementById("diigolet_screenshot_right"),
            V = document.getElementById("diigolet_screenshot_bottom"),
            X = document.getElementById("diigolet_screenshot_left");
          h(B, "width", la + "px");
          h(B, "height", ba + "px");
          h(P, "width", T + "px");
          h(P, "height", w + "px");
          h(V, "width", s + "px");
          h(V, "height", y + "px");
          h(X, "width", F + "px");
          h(X, "height", C + "px");
        }
        function l(s, w, y, B) {
          s = y >= 0 ? s : s + y;
          w = B >= 0 ? w : w + B;
          var C = document.getElementById("diigolet_screenshot_center");
          h(C, "width", Math.abs(y) + "px");
          h(C, "height", Math.abs(B) + "px");
          h(C, "top", w + "px");
          h(C, "left", s + "px");
        }
        function m() {
          var s = document.getElementById("diigolet_screenshot_center");
          dragresize = new DragResize("dragresize", {
            maxLeft: document.documentElement.scrollWidth - 5,
            maxTop: document.documentElement.scrollTop + window.innerHeight,
            minTop: document.documentElement.scrollTop,
          });
          var w = document.getElementById("diigolet_screenshot_size");
          document.getElementById("diigosc-editpanel");
          dragresize.isElement = function (y) {
            if (y.className && y.className.indexOf("drsElement") > -1)
              return true;
          };
          dragresize.isHandle = function (y) {
            if (y.className && y.className.indexOf("drsMoveHandle") > -1)
              return true;
          };
          dragresize.ondragmove = function () {
            var y = dragresize.elmX,
              B = dragresize.elmY,
              C = dragresize.elmW,
              F = dragresize.elmH;
            w.children[0].textContent = Math.abs(C) + " X " + Math.abs(F);
            i(y, B, C, F);
            l(y, B, C, F);
            f();
          };
          dragresize.apply(wrapper);
          dragresize.select(s);
        }
        if (!($("#diigosc-all").length > 0)) {
          if (!Ma(window.location.href, true))
            if (
              !/chrome-extension:\/\/.*\/pdf\/viewer.html/.test(
                window.location.href
              )
            ) {
              alert(chrome.i18n.getMessage("alertUnsupportedPage"));
              return;
            }
          if (
            typeof k.permissions.imagePermission !== "undefined" &&
            !k.permissions.imagePermission.imagePermission
          ) {
            ca.init();
            ca.show("image");
          } else if (!($("#diigosc-all").length > 0)) {
            var t = this,
              D =
                '<div id="diigosc-sc" ondragstart="return false;" ondrop="return false;"><iframe id="diigo-screenshot-frame" src="' +
                chrome.extension.getURL("") +
                'screenshot-frame.html"></iframe><canvas id="bgcanvas"height="0"width="0"></canvas><canvas id="draw-canvas"height="0"width="0"></canvas><span id="diigosc-select-tip"style="display:none">Click and drag to select</span><div id="diigolet_screenshot_wrapper"><div id="diigolet_screenshot_top"></div><div id="diigolet_screenshot_right"></div><div id="diigolet_screenshot_bottom"></div><div id="diigolet_screenshot_left"></div><div id="diigolet_screenshot_center"class="drsElement drsMoveHandle"></div><div id="diigolet_screenshot_size"style="min-width:70px;"><span>0 X 0</span></div><div id="diigosc-editpanel"><div id="diigosc-rect"class="diigosc-editpanel-btn"title="rectangle"><div id="diigosc-rect-btn"></div></div><div id="diigosc-round"class="diigosc-editpanel-btn"title="ellipse"><div id="diigosc-round-btn"></div></div><div id="diigosc-text"class="diigosc-editpanel-btn"title="text"><div id="diigosc-text-btn"></div></div><div id="diigosc-arrow"class="diigosc-editpanel-btn"title="arrow"><div id="diigosc-arrow-btn"></div></div><div id="diigosc-sep"class="diigosc-editpanel-btn"></div><div id="diigosc-undo"class="diigosc-editpanel-btn"title="undo"><div id="diigosc-undo-btn"class="disable"></div></div><div id="diigosc-sep"class="diigosc-editpanel-btn"></div><div id="diigosc-cancel"class="diigosc-editpanel-btn"title="cancel"><div id="diigosc-cancel-btn"></div></div><div id="diigosc-save"class="diigosc-editpanel-btn"title="save"><div id="diigosc-save-btn"></div></div><div id="diigosc-colorpanel"><div id="diigosc-triangle"></div><div id="colorpanel"><div id="current-color"><div class="capture-red"></div></div><div class="color-cell"><div class="capture-black"></div></div><div class="color-cell"><div class="capture-gray"></div></div><div class="color-cell"><div class="capture-red"></div></div><div class="color-cell"><div class="capture-orange"></div></div><div class="color-cell"><div class="capture-yellow"></div></div><div class="color-cell"><div class="capture-green"></div></div><div class="color-cell"><div class="capture-white"></div></div><div class="color-cell"><div class="capture-light-gray"></div></div><div class="color-cell"><div class="capture-cyan"></div></div><div class="color-cell"><div class="capture-blue"></div></div><div class="color-cell"><div class="capture-purple"></div></div><div class="color-cell"><div class="capture-pink"></div></div></div><div id="fontSize"><div id="sep"></div><div class="font-cell"id="small"></div><div class="font-cell current" id="middle"></div><div class="font-cell"id="large"></div></div></div><div id="diigosc-savepanel"><div id="diigosc-triangle"></div><div id="diigosc-tag-btn" class="diigosc-savepanel-btn">Tag as a stand-alone image</div><div id="diigosc-attach-btn" class="diigosc-savepanel-btn">Attach it to the bookmark</div></div></div>';
            docH = document.documentElement.scrollHeight;
            docW = document.documentElement.scrollWidth;
            if (!document.getElementById("diigolet_screenshot_wrapper")) {
              var A = document.createElement("div");
              document.body.parentNode.appendChild(A);
              A.innerHTML += D;
              A.id = "diigosc-all";
              var G = $(window).scrollTop();
              $("html").css("overflow", "hidden");
              J.shown && J.adjustPosition();
              $(window).bind("scroll", function () {
                $(window).scrollTop(G);
                return false;
              });
            }
            $("body").addClass("unselectable");
            wrapper = document.getElementById("diigolet_screenshot_wrapper");
            h(wrapper, "display", "none");
            h(wrapper, "width", document.documentElement.scrollWidth + "px");
            h(wrapper, "height", document.documentElement.scrollHeight + "px");
            h(wrapper, "display", "block");
            document.body.addEventListener(
              "keydown",
              function (s) {
                s.keyCode == 27 && t.removeSelected();
              },
              false
            );
            wrapper.addEventListener("mousedown", d, false);
            var q = document.getElementById("diigosc-select-tip");
            q.style.display = "block";
            wrapper.addEventListener("mousemove", c, false);
            var o, r, n, u;
            $(".diigosc-editpanel-btn div").bind("click", function (s) {
              function w() {
                $("#diigosc-savepanel").length > 0 &&
                  $("#diigosc-savepanel").hide();
              }
              s = s.target.id;
              if (s != "diigosc-undo-btn") {
                $(".diigosc-editpanel-btn").removeClass("selected");
                $(this).parent().addClass("selected");
              }
              switch (s) {
                case "diigosc-rect-btn":
                  w();
                  $("#diigosc-colorpanel").show().addClass("run");
                  $("#diigosc-triangle").css("left", "15px");
                  a(s);
                  t.initTool = "rect";
                  Oa.changeTool(t.initTool);
                  break;
                case "diigosc-round-btn":
                  w();
                  $("#diigosc-colorpanel").show().addClass("run");
                  $("#diigosc-triangle").css("left", "44px");
                  a(s);
                  t.initTool = "ellipse";
                  Oa.changeTool(t.initTool);
                  break;
                case "diigosc-text-btn":
                  w();
                  $("#diigosc-colorpanel").show().addClass("run");
                  $("#diigosc-triangle").css("left", "75px");
                  a(s);
                  t.initTool = "text";
                  Oa.changeTool(t.initTool);
                  break;
                case "diigosc-arrow-btn":
                  w();
                  $("#diigosc-colorpanel").show().addClass("run");
                  $("#diigosc-triangle").css("left", "105px");
                  a(s);
                  t.initTool = "big_head_arrow";
                  Oa.changeTool(t.initTool);
                  break;
                case "diigosc-undo-btn":
                  if ($("#diigosc-undo-btn").hasClass("disable")) return;
                  else {
                    Oa.undo();
                    t.undo();
                  }
                  break;
                case "diigosc-cancel-btn":
                  t.removeSelected();
                  break;
                case "diigosc-save-btn":
                  $("#diigosc-colorpanel").length > 0 &&
                    $("#diigosc-colorpanel").hide();
                  $("#diigosc-savepanel").show().addClass("play");
                  break;
              }
            });
            $("#diigosc-savepanel .diigosc-savepanel-btn").click(function (s) {
              a(s.target.id);
            });
            $(".color-cell div").click(function (s) {
              s = $(s.target).attr("class").substring(8);
              switch (s) {
                case "red":
                  s = "#fe0000";
                  break;
                case "black":
                  s = "#000000";
                  break;
                case "gray":
                  s = "#7f7f7f";
                  break;
                case "orange":
                  s = "#fe9800";
                  break;
                case "yellow":
                  s = "#fefe00";
                  break;
                case "green":
                  s = "#00FF00";
                  break;
                case "white":
                  s = "#ffffff";
                  break;
                case "light-gray":
                  s = "#bfbfbf";
                  break;
                case "cyan":
                  s = "#00fefe";
                  break;
                case "blue":
                  s = "#0000fe";
                  break;
                case "purple":
                  s = "#9800fe";
                  break;
                case "pink":
                  s = "#febfca";
                  break;
              }
              t.drawColor = s;
              Oa.changeColor(t.drawColor);
              $("#current-color div").css("background-color", s);
            });
            $("#fontSize .font-cell").click(function (s) {
              s = s.target.id;
              $(".text-mode #fontSize .current").removeClass("current");
              $(this).addClass("current");
              switch (s) {
                case "small":
                  t.fontSize = 14;
                  break;
                case "middle":
                  t.fontSize = 24;
                  break;
                case "large":
                  t.fontSize = 36;
                  break;
              }
              Oa.changeFontSize(t.fontSize);
            });
          }
        }
      },
      removeSelected: function () {
        document.body.removeEventListener(
          "keydown",
          this.selectedKeyDown,
          false
        );
        this.reInit();
        $("#diigosc-privatecheck").find(".op-checkbox-container").off("click");
        $("#diigosc-all").empty().remove();
        $("#diigosc-savepopup-all").empty().remove();
        this.editMode = false;
        $("html").css("overflow", "auto");
        $(window).unbind("scroll");
        $("body").removeClass("unselectable");
      },
      reInit: function () {
        this.editMode = false;
        this.drawColor = "red";
        this.fontSize = 14;
        this.actions = [];
        this.luTagShown = this.reTagShown = false;
      },
      diigoscDraw: function (a) {
        function c(t) {
          function D() {
            I("newLine");
            $('<input class="diigosc-textinput"></input>')
              .appendTo("#diigosc-sc")
              .css({
                top: q + "px",
                left: o + "px",
                width: "20px",
                color: f.drawColor,
                "font-size": f.fontSize + "px",
              })
              .focus()
              .autoGrowInput({ comfortZone: 20, minWidth: 20, maxWidth: maxW })
              .keydown(function (r) {
                if (
                  ($(this).width() + 10 > maxW && r.keyCode >= 48) ||
                  (parseInt($(this).css("top")) - startT + 38 > maxH &&
                    r.keyCode == 13)
                )
                  return false;
                var n = r.target,
                  u = r.keyCode;
                I(u);
                if (u == 13) {
                  q += 18;
                  D();
                }
                if (u == 8)
                  if (!n.value) {
                    $(n)
                      .prev()
                      .prev()
                      .focus()
                      .end()
                      .end()
                      .next()
                      .remove()
                      .end()
                      .remove();
                    q -= 18;
                  }
                u == 38 && $(n).prev().prev().focus();
                u == 40 && $(n).next().next().focus();
                r.stopPropagation();
              });
          }
          var A = $("#bgcanvas").width(),
            G = $("#bgcanvas").height();
          f.saveText();
          var q = (startT = t.y - 10),
            o = t.x;
          maxW = A - (o - offsetX);
          maxH = G - (q - offsetY);
          textFlag == 1 && D();
          if (textFlag == 2) textFlag = 1;
        }
        function d(t, D) {
          function A(o, r) {
            function n() {
              l.clearRect(0, 0, F, la);
              l.beginPath();
              (function (ba, T, P, V) {
                var X = (P / 2) * 0.5522848,
                  ua = (V / 2) * 0.5522848,
                  Ha = ba + P,
                  Ua = T + V;
                P = ba + P / 2;
                V = T + V / 2;
                l.moveTo(ba, V);
                l.bezierCurveTo(ba, V - ua, P - X, T, P, T);
                l.bezierCurveTo(P + X, T, Ha, V - ua, Ha, V);
                l.bezierCurveTo(Ha, V + ua, P + X, Ua, P, Ua);
                l.bezierCurveTo(P - X, Ua, ba, V + ua, ba, V);
                l.closePath();
              })(s, s, F - 2 * s, la - 2 * s);
              l.stroke();
            }
            function u() {
              l.clearRect(0, 0, F, la);
              l.beginPath();
              var ba = G < w ? s : F - s,
                T = q < y ? s : la - s,
                P = F - ba,
                V = la - T;
              l.moveTo(ba, T);
              l.lineTo(P, V);
              l.stroke();
              (function (X) {
                l.beginPath();
                l.moveTo(X[0][0], X[0][1]);
                for (p in X) p > 0 && l.lineTo(X[p][0], X[p][1]);
                l.lineTo(X[0][0], X[0][1]);
                l.fill();
              })(
                (function (X, ua, Ha) {
                  var Ua = [];
                  for (p in X) Ua.push([X[p][0] + ua, X[p][1] + Ha]);
                  return Ua;
                })(
                  (function (X, ua) {
                    var Ha = [];
                    for (p in X)
                      Ha.push([
                        X[p][0] * Math.cos(ua) - X[p][1] * Math.sin(ua),
                        X[p][0] * Math.sin(ua) + X[p][1] * Math.cos(ua),
                      ]);
                    return Ha;
                  })(
                    [
                      [4, 0],
                      [-10, -5.5],
                      [-10, 5.5],
                    ],
                    Math.atan2(V - T, P - ba)
                  ),
                  P,
                  V
                )
              );
            }
            var s = 4,
              w = o,
              y = r,
              B = Math.min(w, G) - s,
              C = Math.min(y, q) - s,
              F = Math.abs(w - G) + 2 * s,
              la = Math.abs(y - q) + 2 * s;
            $("#draw-canvas")
              .css({ left: B + "px", top: C + "px", cursor: "crosshair" })
              .attr({ width: F, height: la });
            l.strokeStyle = f.drawColor;
            l.fillStyle = f.drawColor;
            l.lineWidth = s;
            switch (t) {
              case "diigosc-rect-btn":
                l.clearRect(0, 0, F, la);
                l.strokeRect(s, s, F - 2 * s, la - 2 * s);
                break;
              case "diigosc-round-btn":
                n();
                break;
              case "diigosc-arrow-btn":
                u();
                break;
            }
          }
          var G = D.x,
            q = D.y;
          $(this)
            .mousemove(function (o) {
              o.preventDefault();
              A(o.pageX, o.pageY);
            })
            .mouseup(function () {
              $(this).unbind("mousemove  mouseup");
              $("#draw-canvas").unbind("mousedown");
              var o = document.getElementById("draw-canvas");
              f.editMode == true && o.width * o.height != 0 && f.enableUndo();
              $.Draggable(o);
            });
        }
        var f = this;
        textFlag = 1;
        var h = document.getElementById("bgcanvas"),
          i = document.getElementById("draw-canvas"),
          l = i.getContext("2d"),
          m = h.getContext("2d");
        h = document.getElementById("bgcanvas");
        offsetX = h.offsetLeft;
        offsetY = h.offsetTop;
        $("#draw-canvas").unbind("mousedown");
        $("#bgcanvas")
          .unbind()
          .click(function (t) {
            a == "diigosc-text-btn" && c({ x: t.pageX, y: t.pageY });
          })
          .mousedown(function (t) {
            if (i.width * i.height != 0) {
              f.saveAction({ type: "draw" });
              m.drawImage(
                i,
                parseInt($(i).css("left")) - offsetX,
                parseInt($(i).css("top")) - offsetY
              );
            } else f.actions.length == 0 && f.saveAction({ type: "draw" });
            $("#draw-canvas").attr({ width: 0, height: 0 });
            switch (a) {
              case "diigosc-text-btn":
                break;
              default:
                d(a, { x: t.pageX, y: t.pageY });
                break;
            }
          });
      },
      saveText: function () {
        var a = this,
          c = $("#diigosc-sc").find('input[class="diigosc-textinput"]');
        if (c.length) {
          var d = "";
          c.each(function () {
            d += this.value;
          });
          if (d) {
            a.enableUndo();
            a.saveAction({ type: "draw" });
            textFlag = 2;
            c.each(function () {
              var f = this.value;
              if (f) {
                var h = parseInt($(this).css("left")),
                  i = parseInt($(this).css("top")),
                  l = document.getElementById("bgcanvas").getContext("2d");
                l.font =
                  "bold " + a.fontSize + "px/18px Arial,Helvetica,sans-serif";
                l.fillStyle = $(this).css("color");
                l.fillText(f, h - offsetX, i + 18 - offsetY);
              }
              $(this).next().remove().end().remove();
            });
          }
        }
      },
      undo: function () {
        var a = document.getElementById("draw-canvas");
        a.getContext("2d");
        var c = document.getElementById("bgcanvas").getContext("2d");
        if (this.actions.length != 0)
          if (a.width * a.height != 0) {
            $(a).attr({ width: 0, height: 0 });
            this.actions.length == 1 && this.disableUndo();
          } else {
            a = this.actions.pop();
            this.actions.length == 1 && this.disableUndo();
            c.putImageData(a.data, 0, 0);
          }
      },
      enableUndo: function () {
        $("#diigosc-undo div").removeClass("disable").addClass("enable");
      },
      disableUndo: function () {
        $("#diigosc-undo div").removeClass("enable").addClass("disable");
      },
      saveAction: function (a) {
        var c = document.getElementById("bgcanvas");
        document.getElementById("draw-canvas").getContext("2d");
        var d = c.getContext("2d"),
          f = c.width;
        c = c.height;
        switch (a.type) {
          case "draw":
            this.actions.push({
              type: "draw",
              data: d.getImageData(0, 0, f, c),
            });
            break;
        }
      },
      showSavePupop: function (a, c, d) {
        function f() {
          var n = $("#diigosc-lists").empty().unbind();
          n.append(
            E.dom.buildOne("option", { value: 0 }, ["Add to an Outliner"])
          );
          n.append(
            E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
          );
          $(
            E.dom.buildOne("option", { value: -2 }, ["Create an Outliner..."])
          ).appendTo(n);
          n.append(
            E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
          );
          M(k.outliners, function (u) {
            n.append(E.dom.buildOne("option", { value: u.id }, [u.title]));
          });
          n.append(
            E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
          );
          if (k.myBmLists.length) {
            n.append(
              E.dom.buildOne("option", { value: -8 }, ["Add to a List"])
            );
            n.append(
              E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
            );
            M(k.myBmLists, function (u) {
              n.append(E.dom.buildOne("option", { value: u.id }, [u.title]));
            });
          }
          n.append(
            E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
          );
          $(E.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(n);
          n.change(function () {
            var u = n.val();
            if (u == -2) {
              if (k.permissions.createOutliner === true) {
                $("#diigosc-lists-and-groups").find("select").hide();
                $("#diigosc-list-add").show().find("input").focus();
              } else {
                $("#diigosc-list-add-tip").show();
                $("#diigosc-lists-and-groups").find("select").hide();
              }
              n.val(0);
            } else if (u == -3) {
              z.loadMyStuff("myGroups myBookmarkLists");
              n.val(0);
            }
          });
          n.val(0).change();
        }
        function h() {
          var n = $("#diigosc-groups").empty().unbind();
          n.append(
            E.dom.buildOne("option", { value: 0 }, ["Share to a Group"])
          );
          n.append(
            E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
          );
          $(
            E.dom.buildOne("option", { value: -2 }, ["Create a Group..."])
          ).appendTo(n);
          n.append(
            E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
          );
          M(k.myGroups, function (u) {
            n.append(
              E.dom.buildOne("option", { value: u.name }, [u.displayName])
            );
          });
          n.append(
            E.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
          );
          $(
            E.dom.buildOne("option", { value: -2 }, ["Create a Group..."])
          ).appendTo(n);
          $(E.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(n);
          n.change(function () {
            var u = n.val();
            if (u == -2) {
              x.openURL(x.urls.getCreateGroupURL());
              n.val(-1);
            } else if (u == -3) {
              z.loadMyStuff("myGroups myBookmarkLists");
              n.val(-1);
            }
            if (u != 0 && u != -1 && u != -2 && u != -3) {
              $("#diigosc-group-tag").show();
              k.groupTagsDict[u]
                ? i("group", k.groupTagsDict[u])
                : z.loadGroupTagsDictionary([u], function () {
                    i("group", k.groupTagsDict[u]);
                  });
            }
          });
          n.val(0).change();
        }
        function i(n, u) {
          if (n == "recommended")
            $("#diigosc-recommended-tag .diigo-tags-container .loading").hide();
          else if (n == "group") {
            $("#diigosc-group-tag .diigo-tags-container .loading").hide();
            $("#diigosc-group-tag .diigo-tags-container").empty();
          }
          var s = u.length;
          s == 0 && $("#diigosc-" + n + "-tag").hide();
          for (var w = 0; w < s; w++) {
            var y = document.createElement("div");
            y.className = "diigo-tag";
            y.title = u[w];
            y.textContent = u[w];
            $("#diigosc-" + n + "-tag .diigo-tags-container").append(y);
            $(y).click(function () {
              var B = $(this).text();
              $(this).toggleClass("selected");
              l(B);
            });
          }
        }
        function l(n, u) {
          var s = $("#diigosc-tag-input"),
            w = x.parseTags(s.val(), true),
            y = $.inArray(n, w);
          if (u === undefined) y >= 0 ? w.splice(y, 1) : w.push(n);
          else if (u) y == -1 && w.push(n);
          else y >= 0 && w.splice(y, 1);
          w = x.unparseTags(w);
          if (w.length) w += " ";
          s.val(w);
          D(s[0]);
          m();
        }
        function m() {
          var n = $("#diigosc-tag-input"),
            u = x.parseTags(n.val(), true);
          $("#diigosc-tag-cloud")
            .find(".diigosc-tag-cloud-item")
            .each(function () {
              var s = $(this),
                w = s.text();
              $.inArray(w, u) != -1
                ? s.addClass("selected")
                : s.removeClass("selected");
            });
          $(
            "#diigosc-last-used-tag .diigo-tags-container,#diigosc-recommended-tag .diigo-tags-container"
          )
            .find(".diigo-tag")
            .each(function () {
              var s = $(this),
                w = s.text();
              $.inArray(w, u) != -1
                ? s.addClass("selected")
                : s.removeClass("selected");
            });
        }
        function t(n, u) {
          document.getElementById("diigosc-tag-edit").href =
            "https://www.diigo.com/cloud/" + k.user;
          if (k.myTagsWithCount.length == 0) {
            var s = document.getElementById(n),
              w = document.createElement("span");
            w.id = "no-tag";
            w.textContent = "No tags";
            s.appendChild(w);
          } else {
            var y = Rb();
            s = y.topTags;
            var B = y.maxCount;
            w = y.a;
            var C = y.b,
              F = y.c,
              la = s.length;
            y = document.createDocumentFragment();
            for (var ba = 0; ba < la; ba++) {
              var T = document.createElement("a");
              T.className = u;
              T.href = "#";
              T.innerText = s[ba].name;
              var P = s[ba].count;
              if (P == B) {
                T.style.fontSize = "20px";
                T.style.fontWeight = "bold";
              }
              w.forEach(function (V) {
                if (P == V) {
                  T.style.fontSize = "18px";
                  T.style.fontWeight = "bold";
                }
              });
              C.forEach(function (V) {
                if (P == V) {
                  T.style.fontSize = "16px";
                  T.style.fontWeight = "bold";
                }
              });
              F.forEach(function (V) {
                if (P == V) {
                  T.style.fontSize = "16px";
                  T.style.fontWeight = "regular";
                }
              });
              y.appendChild(T);
              T.addEventListener("click", function (V) {
                V.preventDefault();
                l(this.innerText);
              });
            }
            s = document.getElementById(n);
            s.appendChild(y);
          }
        }
        function D(n) {
          var u = n.value.length;
          setTimeout(function () {
            n.focus();
            if (n.createTextRange) {
              var s = n.createTextRange();
              s.move("character", u);
              s.select();
            } else if (n.selectionStart >= 0) {
              n.focus();
              n.setSelectionRange(u, u);
            }
          }, 13);
        }
        var A = this;
        chrome.extension.getURL("");
        if (a == "screenshot") {
          var G = document.getElementById("bgcanvas"),
            q = document.getElementById("draw-canvas");
          q.getContext("2d");
          var o = G.getContext("2d");
          G = $("#bgcanvas").offset();
          offsetX = G.left;
          offsetY = G.top;
          G = document.getElementById("bgcanvas");
          q = document.getElementById("draw-canvas");
          A.saveText();
          if (q.width * q.height != 0) {
            A.saveAction({ type: "draw" });
            o.drawImage(
              q,
              parseInt($(q).css("left")) - offsetX,
              parseInt($(q).css("top")) - offsetY
            );
            $(q).attr({ width: 0, height: 0 });
          }
        }
        ka.updateLists = f;
        $("#diigosc-sc").hide();
        if ($("#diigosc-savepopup-all").length > 0) {
          $("#diigosc-savepopup-all").show();
          $("#diigosc-savepopup").fadeIn();
        } else {
          var r = document.createElement("div");
          r.id = "diigosc-savepopup-all";
          $.parseHTML(
            '<div id="diigosc-savepopup-wrapper"></div><div id="diigosc-savepopup"style="display:none;"><div id="diigosc-content"><div id="diigosc-content-top"class="_dragHandle"><div id="diigosc-icon"></div>Save to Diigo</div><div id="diigosc-content-middle"><div id="diigosc-container"><div id="diigosc-thumbnail"><img src=""><div id="diigosc-reedit"></div></div><div id="diigosc-forms"><div id="diigosc-title"><input type="text"id="diigosc-title-input"><span id="diigosc-tag-permission"></span></div><div id="diigosc-tags"><div id="diigosc-tag-input-wrapper"><div id="diigosc-tag-input-dropdown"></div><input id="diigosc-tag-input"type="text"placeholder="Input or select tags"></div><div id="diigosc-tag-cloud"><div>Select from your top 100 tags:</div><div id="diigosc-tag-cloud-container"></div><div><a id="diigosc-tag-edit"href=""target="_blank">Edit tags>></a></div></div></div><div id="diigosc-last-used-tag"><div title="Click to select all"id="diigosc-lu-tag"class="tagListHeader">Recent Use:</div><div class="diigo-tags-container"></div></div><div id="diigosc-recommended-tag"><div id="diigosc-re-tag"class="tagListHeader">Recommended:</div><div class="diigo-tags-container"><div class="loading"></div></div></div><div id="diigosc-group-tag"><div title="Click to select all"id="diigosc-gr-tag"class="tagListHeader">Group dictionary:</div><div class="diigo-tags-container"><div class="loading"></div></div></div><div id="diigosc-lists-and-groups"><div id="diigosc-list-add-tip">You have reach the limit of outliner. <a href="" id="diigosc-w-cancel">Cancel</a><a href="" id="diigosc-w-upgrade">Upgrade</a></div><div id="diigosc-list-add"><div class="diigo-alert-tip"><span>Name existed!</span><div class="diigo-alert-tip-arrow"></div></div><input type="text"id="diigosc-list-addInput"><div id="diigosc-list-addBtn"><span class="label">Create</span><span class="spinner"></span></div><a id="diigosc-list-addCancel">Cancel</a></div><select id="diigosc-lists"style="width:146px"><option value="-1">Add to a List</option></select><select id="diigosc-groups"style="width:146px"><option value="-1">Share to a Group</option></select></div></div></div></div><div id="diigosc-content-bottom"><div id="diigosc-privatecheck"><div class="op-checkbox-container"title="Make this image private"><div class="op-checkbox"></div><div class="op-label">Private</div></div></div><a href="javascript:void(0)">cancel</a><div id="diigosc-saveBtn">Save</div></div></div></div></div>'
          ).forEach(function (n) {
            r.appendChild(n);
          });
          document.body.parentNode.appendChild(r);
          o = [];
          k.myTagsWithCount.sort(function (n, u) {
            return n.count < u.count ? 1 : -1;
          });
          G = k.myTagsWithCount.length;
          for (q = 0; q < G; q++) o[q] = k.myTagsWithCount[q].name;
          I(o);
          new Nb("#diigosc-tag-input", {
            resultsClass: "diigosc ac_results2",
            data: o,
            mode: "multiple",
            multipleSeparator: " ,",
            onItemSelect: function () {
              U.clickedOn = true;
            },
            id: "diigsc-ac",
          });
          t("diigosc-tag-cloud-container", "diigosc-tag-cloud-item");
          $("#diigosc-savepopup-all").show();
          $("#diigosc-savepopup-wrapper")
            .css("width", document.documentElement.scrollWidth + "px")
            .css("height", document.documentElement.scrollHeight + "px");
          $("#diigosc-savepopup").fadeIn("fast");
        }
        o = (document.documentElement.clientWidth - 514) / 2;
        $("#diigosc-savepopup").css("left", o + "px");
        o = document.getElementById("diigosc-savepopup");
        $.Draggable(o, { handle: "._dragHandle" });
        $("#diigosc-savepopup").css(
          "top",
          document.documentElement.scrollTop + "px"
        );
        o = document.documentElement.scrollTop + 150;
        $("#diigosc-savepopup").animate({ top: o + "px", opacity: 1 }, 300);
        $("#diigosc-thumbnail img").attr("src", c);
        (function () {
          var n = document.title,
            u = window.location.href;
          $("#diigosc-title-input").val(n);
          O.send({ name: "initialData" }, function (s) {
            s.preloadedPrefs["prefs.bookmark.privateByDefault"] == "true" &&
              $("#diigosc-privatecheck")
                .find(".op-checkbox-container")
                .addClass("checked");
          });
          $("#diigosc-privatecheck")
            .find(".op-checkbox-container")
            .on("click", function () {
              $(this).toggleClass("checked");
            });
          $("#diigosc-lu-tag").on("click", function () {
            $("#diigosc-last-used-tag")
              .find(".diigo-tag")
              .each(function () {
                l($(this).addClass("selected").text(), true);
              });
          });
          f();
          h();
          K.getUserData("tagsUsedLastTime", function (s) {
            s = s ? JSON.parse(s) : [];
            if (A.luTagShown == false) {
              i("last-used", s);
              A.luTagShown = true;
            }
          });
          if (A.reTagShown == false)
            if (k.recommendedTagsLoaded) {
              i("recommended", k.recommendedTags);
              A.reTagShown = true;
            } else
              z.loadRecommendedTags(u, n, function () {
                i("recommended", k.recommendedTags);
                A.reTagShown = true;
              });
        })();
        a == "image" && $("#diigosc-reedit").hide();
        $("#diigosc-title-input")
          .blur(function () {
            $(this).val().length == 0 &&
              $(this).val("Title is needed!").css("color", "red");
          })
          .focus(function () {
            $(this).val() == "Title is needed!" &&
              $(this).val("").css("color", "black");
          });
        $("#diigosc-tag-input")
          .focus(function () {
            $(this).parent().addClass("active");
          })
          .blur(function () {
            $(this).parent().removeClass("active");
          })
          .bind("input", m);
        $("#diigosc-tag-input-dropdown").click(function (n) {
          n.stopPropagation();
          $(this).parent().toggleClass("opened");
        });
        $("#diigosc-tag-cloud").click(function (n) {
          n.stopPropagation();
        });
        $(document).bind("click", function () {
          $("#diigosc-tag-input-wrapper").removeClass("opened");
        });
        $("#diigosc-content-bottom")
          .find("a")
          .click(function () {
            A.removeSelected();
          });
        $("#diigosc-reedit").click(function () {
          $("#diigosc-savepopup-all,#diigosc-savepopup").hide();
          $("#diigosc-sc").fadeIn();
          $("#diigosc-tag-input-dropdown").unbind("click");
          $("#diigosc-privatecheck")
            .find(".op-checkbox-container")
            .off("click");
        });
        $("#diigosc-lu-tag").click(function () {
          for (
            var n = $("#diigosc-last-used-tag")
                .find(".diigo-tags-container")
                .find(".diigo-tag"),
              u = n.length,
              s = 0;
            s < u;
            s++
          )
            $("#myTags").tagit("createTag", n[s].title);
        });
        $("#diigosc-re-tag").click(function () {
          for (
            var n = $("#diigosc-recommended-tag")
                .find(".diigo-tags-container")
                .find(".diigo-tag"),
              u = n.length,
              s = 0;
            s < u;
            s++
          )
            $("#myTags").tagit("createTag", n[s].title);
        });
        $("#diigosc-list-addInput").on("focus", function () {
          $("#diigosc-list-add .diigo-alert-tip").hide();
        });
        $("#diigosc-w-upgrade").on("click", function (n) {
          n.preventDefault();
          window.open("https://www.diigo.com/premium");
          $("#diigosc-list-add-tip").hide();
          $("#diigosc-lists-and-groups").find("select").show();
        });
        $("#diigosc-w-cancel").on("click", function (n) {
          n.preventDefault();
          $("#diigosc-list-add-tip").hide();
          $("#diigosc-lists-and-groups").find("select").show();
        });
        $("#diigosc-list-addBtn").on("click", function () {
          if (!$(this).hasClass("processing")) {
            var n = $("#diigosc-list-addInput").val(),
              u = $("#diigosc-list-add .diigo-alert-tip"),
              s = [],
              w = k.myBmLists.length,
              y;
            for (y = 0; y < w; y++) s.push(k.myBmLists[y].title);
            if (n.match(/^\s*$/)) u.show().find("span").text("Input a name");
            else if ($.inArray(n, s) !== -1)
              u.show().find("span").text("Name existed !");
            else {
              $(this).addClass("processing");
              z.createList(n);
            }
          }
        });
        $("#diigosc-list-addCancel").on("click", function () {
          $("#diigosc-list-add .diigo-alert-tip").hide();
          $("#diigosc-list-add").hide();
          $("#diigosc-lists-and-groups").find("select").show();
          $("#diigosc-list-addInput").val("");
        });
        $("#diigosc-saveBtn").click(function () {
          var n = $("#diigosc-title-input").val();
          n == "" && $("#diigosc-title-input").trigger("blur");
          if (!(n.length == 0 || n == "Title is needed!")) {
            var u = x.parseTags($("#diigosc-tag-input").val(), true);
            u.length > 0 &&
              K.setUserData({
                tagsUsedLastTime: JSON.stringify(u.slice(0, 8)),
              });
            var s = $("#diigosc-lists").val(),
              w = $("#diigosc-groups").val(),
              y = window.location.href;
            if (typeof DiigoData !== "undefined") y = DiigoData.bookmark.url;
            var B = document.title,
              C = $("#diigosc-privatecheck")
                .find(".op-checkbox-container")
                .hasClass("checked")
                ? 2
                : 0;
            n = {
              dataURL:
                a == "screenshot"
                  ? $("#diigosc-thumbnail").find("img").attr("src")
                  : c,
              title: n,
              tags: u,
              mode: C,
              src_url: y,
              src_title: B,
              single_item: true,
              list: s,
              groups: w,
            };
            I(n);
            a == "screenshot"
              ? z.uploadImage(n, "capture", false, y, {}, "png", "", false)
              : z.uploadImage(n, "image", false, y, {}, d, "", false);
            xa(chrome.runtime.id);
            na();
            L.init();
            L.notifyWait(chrome.i18n.getMessage("uploadimage_uploading"), {
              timeout: 0,
            });
            A.reInit();
            A.removeSelected();
          }
        });
      },
      attachToBookmark: function (a) {
        var c = this;
        if (!a) {
          var d = document.getElementById("bgcanvas"),
            f = document.getElementById("draw-canvas");
          f.getContext("2d");
          var h = d.getContext("2d");
          d = $("#bgcanvas").offset();
          offsetX = d.left;
          offsetY = d.top;
          d = document.getElementById("bgcanvas");
          f = document.getElementById("draw-canvas");
          c.saveText();
          if (f.width * f.height != 0) {
            c.saveAction({ type: "draw" });
            h.drawImage(
              f,
              parseInt($(f).css("left")) - offsetX,
              parseInt($(f).css("top")) - offsetY
            );
            $(f).attr({ width: 0, height: 0 });
          }
        }
        h = k.bookmark.title ? k.bookmark.title : document.title;
        var i = k.bookmark.url ? k.bookmark.url : window.location.href;
        if ($(".displayBookmark").length > 0) {
          d = $("iframe[name=article]").contents()[0];
          i = $(d).find(".original_link a").attr("href");
        }
        var l = {
          dataURL: a,
          title: h,
          tags: k.bookmark.tags ? k.bookmark.tags : [],
          mode: 2,
          src_url: i,
          src_title: k.bookmark.title ? k.bookmark.title : document.title,
          single_item: false,
        };
        if (k.bookmark.groups.length > 0) {
          var m = [];
          k.bookmark.groups.forEach(function (t) {
            m.push(t.name);
          });
          l.groups = m;
        }
        chrome.storage.local.get(null, function (t) {
          var D = $(".displayPDF").find("iframe").contents()[0];
          if (D) {
            if ($(D).find("#extension-data")) {
              var A = $(D).find("#extension-data").attr("saved"),
                G = $(D).find("#extension-data").attr("url");
              D = D.title;
              if (A == "true") {
                l.src_url = G.replace(/preview/, "www");
                l.src_title = l.title = D;
                z.uploadImage(l, "capture", false, i, {}, "png", "", true);
              }
            }
          } else if (
            typeof DiigoData !== "undefined" &&
            !DiigoData.bookmark.saved
          )
            diigoNetwork.pdfCreateItem({}, DiigoData, function () {
              if (DiigoData) l.src_url = DiigoData.bookmark.server_url;
              t.researchMode === true && k.bookmark.saved === false
                ? z.uploadImage(
                    l,
                    "capture",
                    false,
                    i,
                    {},
                    "png",
                    "",
                    true,
                    t.researchModeData
                  )
                : z.uploadImage(l, "capture", false, i, {}, "png", "", true);
            });
          else {
            if (typeof DiigoData !== "undefined")
              l.src_url = DiigoData.bookmark.server_url;
            t.researchMode === true && k.bookmark.saved === false
              ? z.uploadImage(
                  l,
                  "capture",
                  false,
                  i,
                  {},
                  "png",
                  "",
                  true,
                  t.researchModeData
                )
              : z.uploadImage(l, "capture", false, i, {}, "png", "", true);
          }
          xa(chrome.runtime.id);
          na();
          L.init();
          L.notifyWait(chrome.i18n.getMessage("uploadimage_uploading"), {
            timeout: 0,
          });
          c.reInit();
          c.removeSelected();
        });
      },
    };
    chrome.runtime.onMessage.addListener(function (a) {
      if (a.name == "dataURL") {
        var c = a.cw,
          d = a.ch,
          f = a.ct,
          h = a.cl;
        $("#bgcanvas").attr("width", c);
        $("#bgcanvas").attr("height", d);
        $("#bgcanvas").css("top", f + "px");
        $("#bgcanvas").css("left", h + "px");
        ka.editMode = true;
        var i = document.getElementById("bgcanvas"),
          l = i.getContext("2d"),
          m = document.createElement("img");
        document.getElementById("diigolet_screenshot_center");
        var t = f - document.documentElement.scrollTop,
          D = h - document.documentElement.scrollLeft;
        m.onload = function () {
          l.drawImage(
            m,
            D * window.devicePixelRatio,
            t * window.devicePixelRatio,
            c * window.devicePixelRatio,
            d * window.devicePixelRatio,
            0,
            0,
            c,
            d
          );
          $("#diigolet_screenshot_center").hide();
          $("#diigosc-editpanel").show();
          $("#diigolet_screenshot_wrapper>div").css(
            "background-color",
            "rgba(0,0,0,0.7)"
          );
          var A = i.toDataURL();
          Na({ type: "init", dataUrl: A, initTool: ka.initTool });
          $("#diigo-screenshot-frame")
            .css({
              top: f + "px",
              left: h + "px",
              width: c + "px",
              height: d + "px",
            })
            .show();
          if (a.target == "diigosc-tag-btn") ka.showSavePupop("screenshot", A);
          else a.target == "diigosc-attach-btn" && ka.attachToBookmark(A);
        };
        m.src = a.dataURL;
      }
    });
    window.addEventListener("message", function (a) {
      switch (a.data.type) {
        case "canUndo":
          a.data.canUndo ? ka.enableUndo() : ka.disableUndo();
          break;
        case "saveWithTag":
          ka.showSavePupop("screenshot", a.data.dataURL);
          break;
        case "saveAttach":
          ka.attachToBookmark(a.data.dataURL);
      }
    });
    var Oa = {
      changeTool: function (a) {
        Na({ type: "changeTool", tool: a });
      },
      changeColor: function (a) {
        Na({ type: "changeColor", color: a });
      },
      changeFontSize: function (a) {
        Na({ type: "changeFontSize", size: a });
      },
      undo: function () {
        Na({ type: "undo" });
      },
    };
    jQuery.Draggable = function (a, c) {
      function d(A) {
        l = false;
        i(document).bind("mousemove", f).bind("mouseup", h);
        t = A.pageX;
        D = A.pageY;
        return false;
      }
      function f(A) {
        l || m.beforeDrag(A);
        if (!A.undraggable) {
          l = true;
          var G = parseInt(a.css("left")),
            q = parseInt(a.css("top")),
            o = A.pageX - t,
            r = A.pageY - D;
          if (m.axis == "y") o = 0;
          else if (m.axis == "x") r = 0;
          a.css({ left: G + o, top: q + r });
          m.onDrag(G, q, o, r);
          t = A.pageX;
          D = A.pageY;
          return false;
        }
      }
      function h(A) {
        i(document).unbind("mousemove", f).unbind("mouseup", h);
        if (l) {
          m.afterDrag(A);
          return false;
        } else return true;
      }
      var i = jQuery,
        l = false;
      a = this.ele = i(a);
      a[0]._draggable && a[0]._draggable.destroy();
      a[0]._draggable = this;
      var m = (this.options = i.extend(
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
      m.handle = m.handle ? i(m.handle, a) : a;
      m.handle.css({ cursor: m.cursor });
      var t, D;
      this.destroy = function () {
        m.handle.unbind("mousedown", d);
      };
      m.handle.bind("mousedown", d);
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
              var l = f
                .replace(/&/g, "&amp;")
                .replace(/\s/g, "&nbsp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
              i.html(l);
              l = i.width();
              l = l + c.comfortZone >= d ? l + c.comfortZone : d;
              var m = h.width();
              ((l < m && l >= d) || (l > d && l < c.maxWidth)) && h.width(l);
            }
          });
        });
        return this;
      };
    })(jQuery);
    var wa = {
      diigoImageClipMode: false,
      imageSrc: "",
      shown: false,
      init: function () {
        this.create();
      },
      create: function () {
        var a = this;
        if (!($("#diigo-image-clipper").length > 0)) {
          var c = document.createElement("div");
          c.id = "diigo-image-clipper";
          c.innerHTML =
            '<div id="diigo-image-menu"><div id="diigo-logo"></div><div id="diigo-save-and-tag"class="diigo-action" title="Tag as a stand-alone item"></div><!----><div id="diigo-attach"class="diigo-action" title="Attach it to the page URL"></div></div>';
          document.body.parentNode.appendChild(c);
          $(c).css("position", "absolute");
          a.bindMouseOver();
          $("#diigo-save-and-tag").click(function () {
            a.saveAndTagOnClick();
          });
          $("#diigo-attach").click(function () {
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
            if (a.diigoImageClipMode) {
              a.imageSrc = d.target.src;
              d = d.target;
              var f = $(d).offset().left,
                h = $(d).offset().top,
                i = $(d).width(),
                l = $(d).height();
              if (a.shown == false)
                if (i >= 200 || l >= 200) {
                  c =
                    h + l > document.body.scrollTop + window.innerHeight
                      ? setTimeout(function () {
                          $("#diigo-image-clipper")
                            .css("top", h + "px")
                            .css("left", f + i - 22 + "px")
                            .show();
                        }, 350)
                      : setTimeout(function () {
                          $("#diigo-image-clipper")
                            .css("top", h + l - 24 + "px")
                            .css("left", f + i - 22 + "px")
                            .show();
                        }, 350);
                  a.shown = true;
                }
            }
          } else if (d.target.tagName == "AREA") {
            d = $('img[usemap="#' + d.target.parentNode.name + '"]');
            a.imageSrc = d[0].src;
            f = d.offset().left;
            h = d.offset().top;
            i = d.width();
            l = d.height();
            if (i >= 200 || l >= 200)
              h + l > document.body.scrollTop + window.innerHeight
                ? $("#diigo-image-clipper")
                    .css("top", h + "px")
                    .css("left", f + i - 22 + "px")
                    .show()
                : $("#diigo-image-clipper")
                    .css("top", h + l - 24 + "px")
                    .css("left", f + i - 22 + "px")
                    .show();
          } else if (
            !(
              d.target.id == "diigo-save-and-tag" ||
              d.target.id == "diigo-attach" ||
              d.target.id == "diigo-image-menu" ||
              d.target.id == "diigo-logo"
            )
          ) {
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
        if (qa())
          if (
            typeof k.permissions.imagePermission !== "undefined" &&
            !k.permissions.imagePermission.imagePermission
          ) {
            ca.init();
            ca.show("image");
          } else
            chrome.runtime.sendMessage({
              name: "saveImageToDiigo",
              details: { srcUrl: wa.imageSrc },
              Type: "tag",
            });
      },
      attachToBookmarkOnClick: function () {
        if (qa())
          if (
            typeof k.permissions.imagePermission !== "undefined" &&
            !k.permissions.imagePermission.imagePermission
          ) {
            ca.init();
            ca.show("image");
          } else
            chrome.runtime.sendMessage({
              name: "saveImageToDiigo",
              details: { srcUrl: wa.imageSrc },
              Type: "attach",
            });
      },
    };
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
            D.text(m.data("gtooltip"));
            var G;
            G = m.offset().left;
            var q = m.offset().top,
              o = m.width(),
              r = m.height(),
              n = t.width(),
              u = t.height(),
              s,
              w,
              y,
              B,
              C = navigator.userAgent.toLowerCase();
            C =
              C.indexOf("macintosh") != -1 ||
              C.indexOf("mac os x") != -1 ||
              C.indexOf("linux") != -1
                ? true
                : false;
            switch (l.position) {
              case "bottom":
                B = C ? -9 : -10;
                s = parseInt((n + 2) / 2);
                w = G - parseInt((n + 14 - o) / 2);
                y = q + r + 5;
                break;
              case "top":
                B = C ? 22 : 23;
                s = parseInt((n + 2) / 2);
                w = G - parseInt((n + 14 - o) / 2);
                y = q - u - 15;
                break;
            }
            if (w <= 0) {
              w = G;
              s = (o - 10) / 2;
            } else if (w >= window.innerWidth - n) {
              w = G + o - n - 12;
              s = G - w + (o - 10) / 2;
            }
            G = { atop: B, aleft: s, left: G, tleft: w, ttop: y };
            t.css("left", G.tleft).css("top", G.ttop);
            A.css({ left: G.aleft, top: G.atop });
            if (l.position == "top")
              A.css("-webkit-transform", "rotate(180deg)");
            else
              l.position == "bottom" &&
                A.css("-webkit-transform", "rotate(360deg)");
            t.addClass("show");
          }
          var l = a.extend(h, f || {}),
            m = a(this),
            t,
            D,
            A;
          if (a("#gtooltip").length == 0) {
            t = a('<div id="gtooltip"></div>').appendTo(a("body"));
            D = a('<div id="gtooltip-content"></div>').appendTo(t);
            A = a('<div id="gtooltip-arrow"></div>').appendTo(t);
          } else {
            t = a("#gtooltip");
            D = a("#gtooltip-content");
            A = a("#gtooltip-arrow");
          }
          m.hover(
            function () {
              if (t.hasClass("show")) {
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
                t.removeClass("show");
              }, 100);
            }
          ).on("click", function () {
            c != null && clearTimeout(c);
            t.hasClass("show") && t.removeClass("show");
          });
        });
      };
    })(jQuery);
    (function (a) {
      if (typeof define === "function" && define.amd) define(["jquery"], a);
      else if (typeof module !== "undefined" && module.exports)
        module.exports = a(require("jquery"));
      else a(jQuery);
    })(function (a) {
      function c(h) {
        return (
          !h.nodeName ||
          a.inArray(h.nodeName.toLowerCase(), [
            "iframe",
            "#document",
            "html",
            "body",
          ]) !== -1
        );
      }
      function d(h) {
        return a.isFunction(h) || a.isPlainObject(h) ? h : { top: h, left: h };
      }
      var f = (a.scrollTo = function (h, i, l) {
        return a(window).scrollTo(h, i, l);
      });
      f.defaults = { axis: "xy", duration: 0, limit: true };
      a.fn.scrollTo = function (h, i, l) {
        if (typeof i === "object") {
          l = i;
          i = 0;
        }
        if (typeof l === "function") l = { onAfter: l };
        if (h === "max") h = 9e9;
        l = a.extend({}, f.defaults, l);
        i = i || l.duration;
        var m = l.queue && l.axis.length > 1;
        if (m) i /= 2;
        l.offset = d(l.offset);
        l.over = d(l.over);
        return this.each(function () {
          function t(u) {
            var s = a.extend({}, l, {
              queue: true,
              duration: i,
              complete:
                u &&
                function () {
                  u.call(A, q, l);
                },
            });
            G.animate(o, s);
          }
          if (h !== null) {
            var D = c(this),
              A = D ? this.contentWindow || window : this,
              G = a(A),
              q = h,
              o = {},
              r;
            switch (typeof q) {
              case "number":
              case "string":
                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(q)) {
                  q = d(q);
                  break;
                }
                q = D ? a(q) : a(q, A);
              case "object":
                if (q.length === 0) return;
                if (q.is || q.style) r = (q = a(q)).offset();
            }
            var n = (a.isFunction(l.offset) && l.offset(A, q)) || l.offset;
            a.each(l.axis.split(""), function (u, s) {
              var w = s === "x" ? "Left" : "Top",
                y = w.toLowerCase(),
                B = "scroll" + w,
                C = G[B](),
                F = f.max(A, s);
              if (r) {
                o[B] = r[y] + (D ? 0 : C - G.offset()[y]);
                if (l.margin) {
                  o[B] -= parseInt(q.css("margin" + w), 10) || 0;
                  o[B] -= parseInt(q.css("border" + w + "Width"), 10) || 0;
                }
                o[B] += n[y] || 0;
                if (l.over[y])
                  o[B] += q[s === "x" ? "width" : "height"]() * l.over[y];
              } else {
                w = q[y];
                o[B] =
                  w.slice && w.slice(-1) === "%"
                    ? (parseFloat(w) / 100) * F
                    : w;
              }
              if (l.limit && /^\d+$/.test(o[B]))
                o[B] = o[B] <= 0 ? 0 : Math.min(o[B], F);
              if (!u && l.axis.length > 1)
                if (C === o[B]) o = {};
                else if (m) {
                  t(l.onAfterFirst);
                  o = {};
                }
            });
            t(l.onAfter);
          }
        });
      };
      f.max = function (h, i) {
        var l = i === "x" ? "Width" : "Height",
          m = "scroll" + l;
        if (!c(h)) return h[m] - a(h)[l.toLowerCase()]();
        l = "client" + l;
        var t = h.ownerDocument || h.document,
          D = t.documentElement;
        t = t.body;
        return Math.max(D[m], t[m]) - Math.min(D[l], t[l]);
      };
      a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
        get: function (h) {
          return a(h.elem)[h.prop]();
        },
        set: function (h) {
          var i = this.get(h);
          if (h.options.interrupt && h._last && h._last !== i)
            return a(h.elem).stop();
          var l = Math.round(h.now);
          if (i !== l) {
            a(h.elem)[h.prop](l);
            h._last = this.get(h);
          }
        },
      };
      return f;
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
            d = this.place.attr("class").match(/id_([\w]+)/)[0];
          a("#" + d).length != 0 && a("#" + d).remove();
          this.marker = a(
            '<div class="diigo-scrollmarker" title="Diigo highlight marker"><div class="inner"></div></div>'
          )
            .attr("id", d)
            .appendTo(a("body"))
            .click(function () {
              c.locate();
            })
            .addClass(
              this.options.markerClass || this.place.data("scrollmarker-class")
            );
          if (this.place.hasClass("blue")) this.marker.addClass("blue");
          else if (this.place.hasClass("green")) this.marker.addClass("green");
          else
            this.place.hasClass("pink")
              ? this.marker.addClass("pink")
              : this.marker.addClass("yellow");
          a(window).resize(function () {
            c.position();
          });
          this.position();
        },
        position: function () {
          var c = this.place.offset().top;
          this.marker.height();
          var d = a(document).height(),
            f = a(window).height();
          navigator.userAgent.toLowerCase();
          if (navigator.platform.indexOf("Mac") > -1) {
            c = (c / d) * f;
            d = 16;
          } else {
            c = (c / d) * (f - 34) + 17;
            d = 0;
          }
          if (c < 50) c = 50;
          this.marker.css({ position: "fixed", top: c, right: d });
        },
        locate: function () {
          var c = this;
          a(document).scrollTo(this.place.offset().top - 50, 300, function () {
            var d = c.place[0].className.match(/(id_.*)\stype/)[1];
            a("." + d).addClass("diigolet-highlight-selected");
            setTimeout(function () {
              a("." + d).removeClass("diigolet-highlight-selected");
            }, 800);
          });
        },
        remove: function () {
          this.marker.remove();
          delete this.marker;
          this.place.data("scrollmarker", null);
          delete this.place;
        },
      });
    })(jQuery);
    var zb = (function () {
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
      jc = (function (a) {
        var c = {};
        c.enabled = false;
        c.init = function () {
          var d = this;
          d.create();
          d.textarea = document.getElementById(
            "diigolet-highlight-share-textarea"
          );
          a.init(d.textarea, 500);
          $("#diigolet-highlight-share-close").on("click", function () {
            d.hide();
          });
          $("#diigolet-highlight-footer").on("click", "a", function (f) {
            if (d.enable) {
              f = f.target.id;
              if (f === "diigolet-highlight-share-copybtn") {
                f = d.editor.val();
                x.Messenger.send({ name: "copy", details: { text: f } });
                d.tip.addClass("show");
                setTimeout(function () {
                  d.tip.removeClass("show");
                }, 1500);
              } else if (f === "diigolet-highlight-share-cancelbtn") d.hide();
              else if (f === "diigolet-highlight-share-twitter")
                O.send({
                  name: "openWindow",
                  details: {
                    url:
                      "https://twitter.com/intent/tweet?text=" +
                      encodeURIComponent(d.editor.val()) +
                      " @diigo",
                    name: "sharer",
                    features:
                      "toolbar=1,status=0,resizable=1,scrollbars=1,width=700,height=453",
                  },
                });
              else if (f === "diigolet-highlight-share-facebook") {
                f = encodeURIComponent(document.title);
                var h = encodeURIComponent(d.ann.prettyTxt),
                  i = encodeURIComponent(d.url);
                O.send({
                  name: "openWindow",
                  details: {
                    url:
                      "https://www.facebook.com/sharer.php?s=100&p[title]=" +
                      f +
                      '&p[summary]="' +
                      h +
                      '"&p[url]=' +
                      i +
                      "&p[images][0]=https://www.diigo.com/images/v6/logo.png",
                    name: "sharer",
                    features:
                      "toolbar=1,status=0,resizable=1,scrollbars=1,width=700,height=453",
                  },
                });
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
        c.create = function () {
          this.j = $(
            '<div id="diigolet-highlight-share" class="diigolet"><div id="diigolet-highlight-share-top" class="_dragHandle"><span>Link to this highlight</span><b class="diigolet-question-mark"><b class="diigolet-question-mark-tip">The special link below will take people straight to this highlight.\n          </b></b\n        ><!--<div id="diigolet-highlight-share-close"></div>--></div><div id="diigolet-highlight-container"><div id="diigolet-highlight-main"><textarea name="diigolet-highlight-share" id="diigolet-highlight-share-textarea"></textarea></div><div id="diigolet-highlight-footer" class="clearfloat"><a href="javascript:void(0)" id="diigolet-highlight-share-copybtn">Copy</a\n          ><a href="javascript:void(0)" id="diigolet-highlight-share-cancelbtn">Cancel</a\n          ><a href="javascript:void(0)" id="diigolet-highlight-share-twitter" class="diigolet-highlight-social-btn" title="share to twitter"></a><a href="javascript:void(0)" id="diigolet-highlight-share-facebook" class="diigolet-highlight-social-btn" title="share to facebook"></a><span id="diigolet-highlight-share-copySuccess">Copied successfully!</span\n          ></div></div></div>\n'
          )
            .eq(0)
            .appendTo(document.body);
          this.editor = this.j.find("#diigolet-highlight-share-textarea");
          this.tip = this.j.find("#diigolet-highlight-share-copySuccess");
          var d = document.getElementById("diigolet-highlight-share");
          $.Draggable(d, { handle: "._dragHandle" });
        };
        c.show = function (d, f, h) {
          var i = this;
          i.ann = d;
          this.j || i.init();
          i.j.css({ top: h, left: f });
          i.j.addClass("show");
          i.disable();
          z.makeAnnotatedLinkWithHighlight(
            k.bookmark.url,
            3,
            d.id,
            function (l) {
              i.build(d.prettyTxt, l.url);
            }
          );
        };
        c.build = function (d, f) {
          this.enable();
          this.url = f;
          content = '"' + d + '"\n ' + f;
          this.j.find("#diigolet-highlight-share-textarea").val(content);
          a.adjustHeight(this.textarea);
        };
        c.disable = function () {
          this.enabled = false;
          this.j
            .find("#diigolet-highlight-share-textarea")
            .val("Loading......")
            .prop("disabled", true);
        };
        c.enable = function () {
          this.enabled = true;
          this.j
            .find("#diigolet-highlight-share-textarea")
            .prop("disabled", false);
        };
        c.hide = function () {
          this.j.removeClass("show");
        };
        return c;
      })(zb),
      Yb = {
        j: null,
        k: null,
        init: function () {
          var a = this;
          this.j = $(
            '<div id="diigo-orphanHighlight"><div id="diigo-orphanHighlight-top" class="_dragHandle"><span\n          >The current page no longer contains the following highlights</span\n        ><!--<b class="diigolet-question-mark"><b class="diigolet-question-mark-tip">Even if the page you did highlight before has changed, you can still see your highlights.\n        </b></b>--><div id="diigo-orphanHighlight-close"></div></div><div id="diigo-orphanHighlight-main"><div id="diigo-orphanHighlight-notification">Added to clipboard</div><div id="diigo-orphanHighlight-box" class="diigo-customize-scrollbar"></div></div></div>\n'
          )
            .appendTo($("body"))
            .hide();
          this.k = $(
            '<div id="diigo-orphanHighlight-btn" title="Orphan highlights"></div>'
          )
            .appendTo($("body"))
            .on("click", function () {
              a.show();
            });
          for (var c = k.orphanHighlights, d = 0; d < c.length; d++)
            a.add(c[d]);
          $("#diigo-orphanHighlight-close").on("click", function () {
            a.hide();
          });
          new $.Draggable(a.j, { handle: "._dragHandle" });
        },
        add: function (a) {
          var c = $(
            '<div class="diigo-orphanHighlight-item diigo-' +
              a.extra.color +
              '"><span class="diigo-orphanHighlight-item-content"></span><div class="diigo-orphanHighlight-item-copy" title="Copy this highlight">Copy</div></div>'
          );
          c.find(".diigo-orphanHighlight-item-content").html(a.content);
          c.appendTo($("#diigo-orphanHighlight-box"));
          c.find(".diigo-orphanHighlight-item-copy").on("click", function () {
            var d = $(this)
              .parent()
              .find(".diigo-orphanHighlight-item-content")
              .text();
            x.Messenger.send({ name: "copy", details: { text: d } });
            $("#diigo-orphanHighlight-notification")
              .fadeIn()
              .delay(1e3)
              .fadeOut();
          });
          $("#diigo-orphanHighlight-top")
            .find(".diigolet-question-mark")
            .hover(
              function () {
                $(this).find(".diigolet-question-mark-tip").fadeIn();
              },
              function () {
                $(this).find(".diigolet-question-mark-tip").fadeOut();
              }
            );
        },
        show: function () {
          this.j.css({
            left: $(window).width() - this.j.outerWidth() - 10 + "px",
            top: "78px",
          });
          this.j.show();
        },
        hide: function () {
          this.j.hide();
        },
      },
      aa = {
        j: null,
        k: null,
        shown: false,
        init: function () {
          var a = this;
          this.j = $(
            '<div id="diigo-annotationList"><div id="diigo-annotationList-top" class="_dragHandle"><b></b><span>Annotations</span><div id="diigo-annotationList-close"></div></div><div id="diigo-annotationList-main"><div id="diigo-annotationList-notification">Added to clipboard</div><div id="diigo-annotationList-box" class="diigo-customize-scrollbar"></div></div><div id="diigo-annotationList-toolbar"><span\n          ><b class="diigo-orphan-warning"></b> Some highlighted text now\n          missing on this page.</span\n        ><a id="diigo-annotationList-copyall" href="#">Copy all</a></div></div>\n'
          )
            .appendTo($("body"))
            .hide();
          for (var c = k.annotations, d = 0; d < c.length; d++) a.add(c[d]);
          a.updatecontent();
          k.orphanHighlights.length === 0 &&
            $("#diigo-annotationList-toolbar")
              .find("span")
              .toggle(k.orphanHighlights.length > 0);
          $("#diigo-annotationList-close").on("click", function () {
            a.hide();
          });
          $("#diigo-annotationList-copyall").on("click", function (f) {
            f.preventDefault();
            var h = x.AnnotationFormatter.format({
              mode: 1,
              onlyPrivate: true,
            });
            z.makeAnnotatedLink(k.bookmark.url, 3, function (i) {
              i &&
                i.url &&
                x.Messenger.send({
                  name: "copy",
                  details: { html: '"' + h + '"\n ' + i.url },
                });
            });
            $("#diigo-annotationList-notification")
              .fadeIn()
              .delay(1e3)
              .fadeOut();
          });
          new $.Draggable(a.j, { handle: "._dragHandle" });
        },
        add: function (a) {
          function c(i) {
            var l = $(".id_" + i)[0];
            $(document).scrollTo($(l).offset().top - 50, 300, function () {
              $(l).addClass("diigolet-highlight-selected");
              setTimeout(function () {
                $(l).removeClass("diigolet-highlight-selected");
              }, 800);
            });
          }
          var d = null;
          if (a.onlyInGroup == false && a.user == k.user) {
            $("#diigo-annotationList-noItem").remove();
            if (a.type == ia) {
              d = a.extra.color;
              d = $(
                '<div class="diigo-annotationList-item diigo-' +
                  d +
                  '" data-ann-id="' +
                  a.id +
                  '"><div class="diigo-annotationList-highlight"><span class="diigo-annotationList-item-content"></span><div class="diigo-annotationList-item-action"><div class="diigo-annotationList-item-copy diigo-annotationList-item-btn" title="Copy this highlight">Copy</div><div class="diigo-annotationList-item-delete diigo-annotationList-item-btn" title="Delete this highlight">Delete</div></div></div><div class="diigo-annotationList-commentContainer"></div></div>'
              );
              d.find(".diigo-annotationList-item-content").text(
                ha.html2txt_pretty(a.content)
              );
              console.log(ha.html2txt_pretty(a.content));
              if (this.isOrphanHighlight(a)) {
                d.addClass("diigo-orphan");
                d.append(
                  '<div class="diigo-annotationList-orphan-warning"></div>'
                );
              }
              if (a.comments.length) {
                var f = d.find(".diigo-annotationList-commentContainer");
                a.comments.forEach(function (i) {
                  $(
                    '<div class="diigo-annotationList-commentItem" data-cid="' +
                      i.id +
                      '">' +
                      i.content +
                      "</div>"
                  ).appendTo(f);
                });
                d.append(f);
              }
              d.appendTo($("#diigo-annotationList-box"));
              d.find(".diigo-annotationList-item-copy").on(
                "click",
                function (i) {
                  i.stopPropagation();
                  var l = $(this)
                    .parent()
                    .parent()
                    .find(".diigo-annotationList-item-content")
                    .text();
                  $(this)
                    .parent()
                    .parent()
                    .find(".diigo-annotationList-commentItem")
                    .each(function () {
                      l += "\n" + $(this).text();
                    });
                  z.makeAnnotatedLink(k.bookmark.url, 3, function (m) {
                    m &&
                      m.url &&
                      x.Messenger.send({
                        name: "copy",
                        details: { text: '"' + l + '"\n ' + m.url },
                      });
                  });
                  $("#diigo-annotationList-notification")
                    .fadeIn()
                    .delay(1e3)
                    .fadeOut();
                }
              );
              var h = this;
              d.find(".diigo-annotationList-item-delete").on(
                "click",
                function (i) {
                  i.stopPropagation();
                  if (!a.onlyInGroup) {
                    N.find(a.id) ? N.find(a.id).del() : h.editItem("remove", a);
                    document
                      .getElementById("diigo-reader-frame")
                      .contentWindow.postMessage(
                        { type: "removeAnnotation", data: { ann: a.id } },
                        "*"
                      );
                  }
                  M(
                    pa(a.groups, function (l) {
                      return l.name;
                    }),
                    function (l) {
                      a.del(l);
                    }
                  );
                }
              );
              d.on("click", function () {
                c(a.id);
              });
            } else if (a.type == fa) {
              d = a.extra.color;
              d = $(
                '<div class="diigo-annotationList-item diigo-' +
                  d +
                  '" data-ann-id="' +
                  a.id +
                  '"><div class="diigo-annotationList-sticky"><div class="diigo-anntationList-floatIcon"></div><span class="diigo-annotationList-item-content"></span><div class="diigo-annotationList-item-action"><div class="diigo-annotationList-item-copy" title="Copy this highlight">Copy</div><div class="diigo-annotationList-item-delete diigo-annotationList-item-btn" title="Delete this highlight">Delete</div></div></div></div>'
              );
              d.find(".diigo-annotationList-item-content").html(
                $("<div>").text(a.comments[0].content).html()
              );
              d.appendTo($("#diigo-annotationList-box"));
              d.find(".diigo-annotationList-item-copy").on(
                "click",
                function (i) {
                  i.stopPropagation();
                  i = $(this)
                    .parent()
                    .find(".diigo-annotationList-item-content")
                    .text();
                  x.Messenger.send({ name: "copy", details: { text: i } });
                  $("#diigo-annotationList-notification")
                    .fadeIn()
                    .delay(1e3)
                    .fadeOut();
                }
              );
              h = this;
              d.find(".diigo-annotationList-item-delete").on(
                "click",
                function (i) {
                  i.stopPropagation();
                  if (!a.onlyInGroup) {
                    N.find(a.id) ? N.find(a.id).del() : h.editItem("remove", a);
                    document
                      .getElementById("diigo-reader-frame")
                      .contentWindow.postMessage(
                        { type: "removeAnnotation", data: { ann: a.id } },
                        "*"
                      );
                  }
                  M(
                    pa(a.groups, function (l) {
                      return l.name;
                    }),
                    function (l) {
                      a.del(l);
                    }
                  );
                }
              );
              d.on("click", function () {
                c(a.id);
              });
            }
            this.updatecontent();
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
        updatecontent: function () {
          $("#diigo-annotationList-box").find(".diigo-annotationList-item")
            .length === 0 &&
            $("#diigo-annotationList-box").append(
              '<div id="diigo-annotationList-noItem">You have no annotations yet. Create a highlight or sticky note to see it here.</div>'
            );
          $("#diigo-annotationList-toolbar").toggle(
            $("#diigo-annotationList-box").find(".diigo-annotationList-item")
              .length > 0
          );
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
            if (f && f.length > 0)
              switch (a) {
                case "remove":
                  f.remove();
                  $("#diigo-annotationList-box").find(
                    ".diigo-annotationList-item"
                  ).length === 0 && this.updatecontent();
                  break;
                case "changeColor":
                  f.removeClass(
                    "diigo-yellow diigo-blue diigo-green diigo-pink"
                  ).addClass("diigo-" + c.extra.color);
                  break;
                case "updateStickyNote":
                  c = N.find(d.annotationId);
                  a = c.type;
                  if (a == ia)
                    f.find(".diigo-annotationList-commentItem").text(d.content);
                  else
                    a == fa &&
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
      };
    setTimeout(function () {
      Sb() &&
        K.get("prefs.showPdfButton", function (a) {
          if (a === "true") {
            a = document.createElement("div");
            a.id = "diigo-pdf";
            a.innerHTML =
              '<div id="diigo-enter-pdf"></div><div id="diigo-pdfbtn-tip"><div id="diigo-i-know"></div></div><div id="diigo-pdf-premium"><div>You have reached the limit of your current plan. To continue using this feature, please upgrade your plan. </div><a id="diigo-pdf-go-premium" target="_blank" href="https://www.diigo.com/premium">Upgrade Now!</a><a href="#" id="diigo-pdf-cancel">cancel</a></div>';
            $(document.body.parentNode).append(a);
            $("#diigo-i-know").click(function () {
              $(this).parent().hide();
              K.set({ isPdfTipClicked: "true" });
            });
            K.get("isPdfTipClicked", function (c) {
              c === "true" && $("#diigo-pdfbtn-tip").hide();
            });
            $("embed").bind("click", function () {
              document.body.scrollTop == 0
                ? $("#diigo-enter-pdf").show()
                : $("#diigo-pdf").hide();
            });
            $("#diigo-pdf-cancel").on("click", function (c) {
              c.preventDefault();
              $(this).parent().hide();
            });
            $("#diigo-enter-pdf").on("click", function () {
              k.permissions.pdf
                ? chrome.runtime.sendMessage({
                    name: "openPdf",
                    url: window.location.href,
                  })
                : $("#diigo-pdf-premium").show();
            });
          }
        });
    }, 1e3);
    var lc = {
        j: null,
        step: 1,
        init: function () {
          var a = this;
          this.j = $(
            '<div id="diigo-ext-tutorial-wrapper" class="step1"><div id="diigo-ext-tutorial-panel"><div id="diigo-ext-tutorial-banner"><div id="diigo-ext-tutorial-elem1"></div><div id="diigo-ext-tutorial-elem2"></div><div id="diigo-ext-tutorial-elem3"></div><div id="diigo-ext-tutorial-banner-text"><span>Congratulations!</span><div>You are on the path to better learning.</div></div></div><div id="diigo-ext-tutorial-container"><div class="diigo-ext-tutorial-slide diigo-ext-tutorial-1 active"><div class="left"><div id="diigo-tutorial-image1"></div></div><div class="right"><div style="height: 212px; margin-top: 22px"><div style="position: relative; top: 85px">\n                  Found a link you like? Keep it by selecting "Save" at the top\n                  right of our extension menu.\n                </div></div><div style="height: 212px; margin-top: 22px"><div style="position: relative; top: 70px">\n                  Add a description and reference with tags for easy future\n                  retrieval.\n                </div></div></div></div><div class="diigo-ext-tutorial-slide diigo-ext-tutorial-2"><div class="left"><div id="diigo-tutorial-image2"></div></div><div class="right"><div style="height: 212px; margin-top: 22px"><div style="position: relative; top: 85px">\n                  Capture images you want to keep or share by selecting the\n                  "Screenshot" option in our extension menu.\n                </div></div><div style="height: 212px; margin-top: 22px"><div style="position: relative; top: 50px">\n                  Then select the portion of the page you want to capture. You\n                  will have the option of adding text, arrows, squares, etc. You\n                  can also label your images with tags to find them later on.\n                </div></div></div></div><div class="diigo-ext-tutorial-slide diigo-ext-tutorial-3"><div class="left"><div id="diigo-tutorial-image3"></div></div><div class="right"><div style="height: 312px; margin-top: 75px"><div style="position: relative; top: 85px">\n                  Highlight important or interesting parts of any website\n                  directly on the page. You can also add sticky notes directly\n                  to the page to mark important sections or reminders.\n                </div></div></div></div><div class="diigo-ext-tutorial-slide diigo-ext-tutorial-4"><div class="left"><div id="diigo-tutorial-image4"></div></div><div class="right"><div style="height: 312px; margin-top: 83px"><div style="position: relative; top: 103px">\n                  Once you have enough saved links with similar tags, you can\n                  structure your links through Outliner. This is the most\n                  efficient way to organize your links and share them with\n                  friends, classmates, or colleagues.\n                </div></div></div></div></div><a href="#" id="diigo-ext-tutorial-next" class="diigo-ext-tutorial-btn"></a><a href="#" id="diigo-ext-tutorial-prev" class="diigo-ext-tutorial-btn"></a><a href="#" id="diigo-ext-tutorial-close" class="diigo-ext-tutorial-btn"></a></div></div>\n'
          ).appendTo($("body"));
          this.j.find("#diigo-ext-tutorial-next").on("click", function (c) {
            c.preventDefault();
            a.next();
          });
          this.j.find("#diigo-ext-tutorial-prev").on("click", function (c) {
            c.preventDefault();
            a.prev();
          });
          this.j.find("#diigo-ext-tutorial-close").on("click", function (c) {
            c.preventDefault();
            a.hide();
          });
        },
        show: function () {
          var a = this;
          this.j || this.init();
          setTimeout(function () {
            a.j.addClass("active");
          }, 0);
        },
        hide: function () {
          this.j.removeClass("active");
          this.reset();
        },
        next: function () {
          if (!(this.step >= 4)) {
            this.step++;
            this.switchP(this.step);
          }
        },
        prev: function () {
          if (this.step !== 1) {
            this.step--;
            this.switchP(this.step);
          }
        },
        switchP: function (a) {
          this.j.removeClass("step1 step2 step3 step4").addClass("step" + a);
          this.j.find("#diigo-ext-tutorial-next").toggle(this.step < 4);
          this.j.find("#diigo-ext-tutorial-prev").toggle(this.step > 1);
          this.j.find("#diigo-ext-tutorial-close").toggle(this.step === 4);
          this.j.find(".diigo-ext-tutorial-slide").removeClass("active");
          this.j.find(".diigo-ext-tutorial-" + a).addClass("active");
        },
        reset: function () {
          this.step = 1;
          this.switchP(this.step);
        },
      },
      Xb = {
        j: null,
        init: function () {
          var a = this;
          if (!this.j)
            this.j = $(
              '<div id="diigo-reader"><div id="diigo-showannotationList"></div><div id="diigo-reader-close"></div><div id="diigo-reader-loading"><div class="loader"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div><iframe id="diigo-reader-frame" src="" frameborder="0"></iframe><iframe id="diigo-process-frame" src="" frameborder="0"></iframe></div>\n'
            ).appendTo("body");
          this.j.find("#diigo-reader-close").on("click", function () {
            a.close();
          });
          this.j.find("#diigo-showannotationList").on("click", function (c) {
            c.preventDefault();
            x.handle(c, "toggleAnnotationList");
          });
          $(document).on("dragstart", function () {
            a.j.find("#diigo-ghost").show();
          });
          $(document).on("dragend", function () {
            a.j.find("#diigo-ghost").hide();
          });
          this.j.find("#diigo-ghost").on("dragover", function (c) {
            console.log("e", c.originalEvent);
            a.j
              .find("#diigo-reader-frame")[0]
              .contentWindow.postMessage(
                { type: "event", data: { e: c.originalEvent } },
                "*"
              );
          });
          window.addEventListener("message", function (c) {
            c = c.data;
            if (c.type == "processStart") {
              c = document.location;
              c = {
                spec: c.href,
                host: c.host,
                prePath: c.protocol + "//" + c.host,
                scheme: c.protocol.substr(0, c.protocol.indexOf(":")),
                pathBase:
                  c.protocol +
                  "//" +
                  c.host +
                  c.pathname.substr(0, c.pathname.lastIndexOf("/") + 1),
              };
              a.j
                .find("#diigo-reader-frame")[0]
                .contentWindow.postMessage(
                  {
                    type: "doc_html",
                    data: {
                      html: document.body.innerHTML,
                      uri: c,
                      title: document.title,
                    },
                  },
                  "*"
                );
            } else if (c.type == "processFinish") a.hideLoading();
            else if (c.type == "refreshBookmark")
              chrome.runtime.sendMessage({ name: "refreshBookmark" });
            else c.type == "processFailed" && a.close();
          });
        },
        open: function () {
          var a = this;
          this.j || this.init();
          a.j.addClass("show");
          $(document.body).css("overflow", "hidden");
          setTimeout(function () {
            a.j
              .find("#diigo-reader-frame")
              .attr("src", chrome.extension.getURL("") + "reader.html");
          }, 300);
        },
        hideLoading: function () {
          this.j.find("#diigo-reader-loading").fadeOut();
        },
        reset: function () {
          this.j.find("#diigo-reader-loading").show();
        },
        close: function () {
          var a = this;
          this.j.removeClass("show");
          setTimeout(function () {
            a.reset();
          }, 500);
          $(document.body).css("overflow", "auto");
          chrome.runtime.sendMessage({ name: "refreshBookmark" });
        },
      },
      ma = (window.OutlinerFrame = {
        j: null,
        k: null,
        port: null,
        opened: false,
        showed: false,
        outlinerId: null,
        init: function () {
          window.CSP = true;
          var a = this;
          if (!this.j)
            this.j = $(
              '<div id="diigo-outliner-frame"><div id="diigo-outliner-toggle-btn"><div class="expand" title="Expand outliner sidebar"></div><div class="collapse" title="Collapse outliner sidebar"></div></div><div id="diigo-ghost"><input type="text" /></div><!--<div id="diigo-outliner-frame-close"></div>--><iframe id="diigo-outliner-iframe" src="" frameborder="0"></iframe></div>\n'
            ).appendTo("body");
          $(document).on("dragstart", function () {
            a.j.find("#diigo-ghost").show();
          });
          $(document).on("dragend", function () {
            setTimeout(function () {
              a.j.find("#diigo-ghost").hide().find("input").val("");
            }, 100);
          });
          this.j.find("#diigo-outliner-toggle-btn").on("click", function () {
            a.toggleSidebar();
          });
          this.j
            .find("#diigo-ghost")
            .on("dragover", function (c) {
              a.port.postMessage({
                type: "dragover-event",
                pos: {
                  x: c.originalEvent.clientX - $(a.j).offset().left,
                  y: c.originalEvent.clientY,
                },
              });
            })
            .on("dragleave", function () {
              a.port.postMessage({ type: "dragleave-event" });
            })
            .on("drop", function (c) {
              var d = {
                type: "drop-event",
                text: c.originalEvent.dataTransfer.getData("text/plain"),
                url: window.location.href,
                pos: {
                  x: c.originalEvent.clientX - $(a.j).offset().left,
                  y: c.originalEvent.clientY,
                },
              };
              if (
                c.originalEvent.dataTransfer.getData("text/html") &&
                $(c.originalEvent.dataTransfer.getData("text/html"))[0]
                  .tagName === "IMG"
              ) {
                d.imgSrc = $(
                  c.originalEvent.dataTransfer.getData("text/html")
                ).attr("src");
                d.title = document.title;
                d.originSrc = window.location.href;
              } else if (
                c.originalEvent.dataTransfer.getData("text/html") &&
                $(c.originalEvent.dataTransfer.getData("text/html"))[0]
                  .tagName == "META"
              )
                if (
                  $(c.originalEvent.dataTransfer.getData("text/html"))[1]
                    .tagName == "IMG"
                ) {
                  d.imgSrc = $(
                    c.originalEvent.dataTransfer.getData("text/html")
                  )[1].src;
                  d.title = document.title;
                  d.originSrc = window.location.href;
                }
              a.port.postMessage(d);
              return false;
            });
          window.addEventListener("message", function (c) {
            if (c.data.type == "port") a.port = c.ports[0];
            else
              c.data.type == "outliner" &&
                a.j.find("iframe").attr("src", c.data.url);
          });
          this.detectCSP();
        },
        detectCSP: function () {
          var a = document.createElement("iframe");
          a.style.display = "none";
          a.setAttribute(
            "src",
            "https://www.diigo.com/asset/images/logo_s2.png"
          );
          a.setAttribute("onload", 'document.body.classList.add("noCSP")');
          document.body.appendChild(a);
        },
        open: function () {
          var a = this;
          this.j || this.init();
          a.j.addClass("show");
          a.j.find("#diigo-outliner-toggle-btn").show();
          $(document.body).addClass("diigo-outliner-mode");
          setTimeout(function () {
            a.j.find("#diigo-outliner-iframe").attr("src") == "" &&
              K.get("prefs.outlinerFrameUrl", function (c) {
                c || (c = "https://www.diigo.com/outliner/index");
                if ($(document.body).hasClass("noCSP")) {
                  if (/csp=true/.test(c)) c = c.replace(/[\?&]csp=true/i, "");
                } else if (c == "https://www.diigo.com/outliner/index")
                  c += "?csp=true";
                else /csp=true/.test(c) || (c += "&csp=true");
                a.j.find("#diigo-outliner-iframe").attr("src", c);
              });
          }, 300);
          a.opened = true;
          a.showed = true;
        },
        changeHighlight: function () {},
        toggle: function () {
          this.opened ? this.close() : this.open();
        },
        toggleSidebar: function () {
          if (this.j.hasClass("show")) {
            this.j.removeClass("show");
            $(document.body).removeClass("diigo-outliner-mode");
            $(".diigoHighlight").attr("draggable", false);
            this.showed = false;
          } else {
            this.j.addClass("show");
            $(document.body).addClass("diigo-outliner-mode");
            this.showed = true;
          }
        },
        showIcon: function () {
          this.j || this.init();
          this.k.show();
        },
        hideIcon: function () {
          this.k && this.k.hide();
        },
        hideLoading: function () {
          this.j.find("#diigo-reader-loading").fadeOut();
        },
        reset: function () {
          this.j.find("#diigo-reader-loading").show();
        },
        close: function () {
          this.j.removeClass("show");
          this.j.find("#diigo-outliner-toggle-btn").hide();
          $(document.body).removeClass("diigo-outliner-mode");
          this.showed = this.opened = false;
          K.set({ openedOutlinerId: "" });
          this.outlinerId = null;
        },
      }),
      za = {
        j: null,
        init: function () {
          this.j = $('<iframe id="diigo-bookmark-frame"></iframe>')
            .appendTo("body")
            .hide();
        },
        show: function (a, c) {
          this.j || this.init();
          var d = chrome.extension.getURL("") + "bookmark-window.html";
          if (c) d = d + "?title=" + a + "&url=" + c;
          this.j.show().attr("src", d);
        },
        close: function () {
          this.j.remove();
          this.j = null;
        },
      },
      Ba = document,
      Tb = $(window),
      sb = $(Ba);
    x.$ = $;
    diigolet.loaded = true;
  })();
