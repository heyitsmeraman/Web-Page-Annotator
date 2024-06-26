var AutoComplete = function (x, l) {
  function o(a) {
    var b = -1,
      c = "";
    $.each(g.multipleSeparator, function (d, h) {
      var i;
      if ((i = a.lastIndexOf(h)) > b) {
        c = h;
        b = i;
      }
    });
    return [b, c];
  }
  function p() {
    e.hide();
  }
  function q(a) {
    if (!m)
      switch (a.keyCode) {
        case 38:
          a.preventDefault();
          k(-1);
          g.moveToSelect == true && r();
          break;
        case 40:
          a.preventDefault();
          k(1);
          g.moveToSelect == true && r();
          break;
        case 9:
        case 13:
          if (g.moveToSelect) e.hide();
          else if (e.is(":visible")) {
            s() ? e.hide() : k(1);
            a.preventDefault();
            a.stopPropagation();
          }
          break;
        case 27:
          if (e.is(":visible")) {
            a.preventDefault();
            a.stopPropagation();
            e.hide();
          }
          break;
        case 32:
          if (e.is(":visible")) {
            a.stopPropagation();
            e.hide();
          }
          t = f.val();
          break;
        default:
          j = -1;
          n && clearTimeout(n);
          n = setTimeout(function () {
            f.val().length < g.minChars ? e.hide() : y(f.val());
          }, g.delay);
          break;
      }
  }
  function r() {
    var a = e.find("li").eq(j).html();
    f.val(a);
  }
  function s(a) {
    if (a !== undefined) {
      j = a;
      k(0);
    }
    a = j;
    if (!(a < 0)) {
      var b = e.find("li").eq(a).text();
      if (b.indexOf(" ") >= 0) b = '"' + b + '"';
      if (g.mode == "multiple") {
        a = f.val();
        var c = o(a);
        new_value = c[0] >= 1 ? a.substr(0, c[0] + 1) + b + c[1] : b + " ";
      } else new_value = b;
      f.val(new_value);
      f.trigger("input");
      e.hide();
      g.onItemSelect &&
        setTimeout(function () {
          g.onItemSelect(b);
        }, 1);
      setTimeout(function () {
        f[0].focus();
        (function (d, h) {
          if (d.createTextRange) {
            var i = d.createTextRange();
            i.move("character", h);
            i.select();
          } else if (d.selectionStart >= 0) {
            d.focus();
            d.setSelectionRange(h, h);
          }
        })(f[0], f.val().length);
      }, 13);
      return true;
    }
  }
  function k(a) {
    var b = e.find("li");
    if (b.size() != 0) {
      j += a;
      if (j < 0) j = b.size() - 1;
      else if (j >= b.size()) j = 0;
      b.removeClass("over").eq(j).addClass("over");
    }
  }
  function y(a) {
    if (g.mode == "multiple") {
      var b = o(a),
        c = "";
      c = b[0] > 0 ? a.substr(b[0] + 1) : a;
      u =
        a.substring(0, b[0]) == ""
          ? a.substring(0, b[0])
          : a.substring(0, b[0]) + " ";
      if (c.length > 0) {
        tags = ParseTags.parseTags(c, true);
        a = tags.pop();
      } else {
        a = c;
        e.hide();
        return;
      }
    }
    var d = a.toLowerCase();
    a = d;
    b = [];
    var h = [];
    if (g.moveToSelect == true) if (a.indexOf("#") == 0) a = a.slice(1);
    c = 0;
    for (var i; (i = g.data[c]), c < g.data.length; c++)
      if (i.toLowerCase().indexOf(a) == 0)
        d.indexOf("#") == 0 ? b.push("#" + i) : b.push(i);
      else if (
        i.toLowerCase().indexOf(a) != 0 &&
        i.toLowerCase().indexOf(a) != -1
      )
        d.indexOf("#") == 0 ? h.push("#" + i) : h.push(i);
    h.sort(function (z, A) {
      return z.indexOf(a) <= A.indexOf(a) ? -1 : 1;
    });
    b = b.concat(h);
    d = [];
    for (c = 0; c < b.length; c++) {
      if (b[c].indexOf("#") != -1 && b[c].indexOf(" ") != -1) {
        h = b[c].slice(1);
        h = '#"' + h + '"';
      } else h = b[c];
      d.push(u + h);
    }
    g.moveToSelect ? v(a, d) : v(a, b);
  }
  function v(a, b) {
    if (b && b.length > 0) {
      b.length > 7 && b.splice(7, 99999);
      var c = (function (d) {
        for (
          var h = d.offsetLeft || 0, i = d.offsetTop || 0;
          (d = d.offsetParent);

        ) {
          h += d.offsetLeft;
          i += d.offsetTop;
        }
        if ($.browser.opera && document.compatMode != "CSS1Compat") i += 30;
        return { x: h + 0, y: i + 0 };
      })(f[0]);
      e.find("li").unbind();
      e.find("ul")
        .html(
          $.map(b, function (d) {
            return "<li>" + d + "</li>";
          }).join("")
        )
        .end()
        .css({
          top: g.moveToSelect
            ? c.y + f[0].offsetHeight - 4
            : c.y + f[0].offsetHeight + 3,
          left: c.x,
        })
        .show();
      e.find("li")
        .mouseover(function (d) {
          j = e.find("li").index(d.target);
          k(0);
        })
        .mousedown(function (d) {
          j = e.find("li").index(d.target);
          k(0);
          s();
          return false;
        });
    } else e.hide();
  }
  function w() {
    e.hide();
  }
  var f = $(x),
    n,
    j = -1,
    t = null,
    u = null,
    m = false;
  f[0].autoCompleter && f[0].autoCompleter.destroy();
  f[0].autoCompleter = this;
  var g = (l = $.extend(
    {
      inputClass: "ac_input",
      moveToSelect: false,
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
    l || {}
  ));
  if (typeof g.multipleSeparator == "string")
    g.multipleSeparator = g.multipleSeparator.split("");
  this.destroy = function () {
    f.unbind("keydown", q).unbind("blur", w);
    f.on("input", function () {
      t = f.val();
    });
    $(window).unbind("scroll", p);
    f[0].autoCompleter = null;
  };
  this.disable = function () {
    m = true;
  };
  this.enable = function () {
    m = false;
  };
  f.attr("autocomplete", "off")
    .addClass(g.inputClass)
    .bind("keydown", q)
    .bind("blur", w)
    .bind("click", function () {
      setTimeout(function () {
        f.val() == "" && e.hide();
      }, 100);
    });
  $.browser.supportPositionFixed || $(window).bind("scroll", p);
  var e = $("#" + l.id);
  if (e.size() == 0) {
    e = $('<div id="' + l.id + '"><ul></ul></div>')
      .addClass(g.resultsClass)
      .hide()
      .css({ position: $.browser.supportPositionFixed ? "fixed" : "absolute" })
      .appendTo(document.body)
      .hide();
    $.browser.ieBelow7 &&
      e.append(
        document.createElement(
          "<iframe class=\"bgiframe\" src=\"javascript:false;document.write('');\" tabindex=\"-1\" style=\"display:block; position:absolute; top: expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)  || 0) * -1) + 'px'); left:expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth) || 0) * -1) + 'px'); z-index:-1; filter:Alpha(Opacity='0'); width:expression(this.parentNode.offsetWidth + 'px'); height:expression(this.parentNode.offsetHeight + 'px')\"/>"
        )
      );
  }
};
