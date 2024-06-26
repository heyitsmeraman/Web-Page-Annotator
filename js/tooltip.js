(function (b) {
  b.fn.Gtooltip = function (d) {
    var g = {
      fontSize: 12,
      bgColor: "black",
      fColor: "white",
      position: "bottom",
      content: "",
    };
    d = d || g;
    var c = b(this);
    if (b("#gtooltip").length == 0) {
      var a = b(
        '<div id="gtooltip"><div id="gtooltip-arrow"></div><div id="gtooltip-content">' +
          d.content +
          "</div></div>"
      );
      b("body").append(a);
      a.find("#gtooltip-arrow").css("left", (a.width() + 8) / 2);
    }
    c.hover(
      function () {
        var h = c.offset().left,
          e = c.offset().top,
          f = c.width(),
          i = c.height();
        f = (f - a.width() - 18) / 2;
        e = e + i + 5;
        a.css("left", h + f).css("top", e);
        a.css("visibility", "visible");
      },
      function () {
        a.css("visibility", "hidden");
      }
    );
  };
})(jQuery);
