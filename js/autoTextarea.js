var autoTextarea = (function () {
  var d = {};
  d.init = function (a, b) {
    if (a.attributes["data-autoTextarea"] !== true) {
      var c = this;
      a.setAttribute("data-minHeight", parseFloat(getComputedStyle(a).height));
      if (b) this.maxHeight = b;
      a.addEventListener("input", function () {
        c.adjustHeight(a, b);
      });
      a.addEventListener("propertychange", function () {
        c.adjustHeight(a, b);
      });
      a.addEventListener("focus", function () {
        c.adjustHeight(a, b);
      });
      a.addEventListener("change", function () {
        c.adjustHeight(a, b);
      });
      a.attributes["data-autoTextarea"] = true;
    }
  };
  d.adjustHeight = function (a, b) {
    var c = parseFloat(a.getAttribute("data-minHeight"));
    if (typeof b == "undefined") b = this.maxHeight;
    var e =
      parseFloat(getComputedStyle(a).paddingTop) +
      parseFloat(getComputedStyle(a).paddingBottom);
    if (a._length !== a.value.length) {
      a._length = a.value.length;
      a.style.height = c + "px";
      if (a.scrollHeight > c) {
        if (b && a.scrollHeight > b) {
          c = b - e;
          a.style.overflowY = "auto";
        } else {
          c = a.scrollHeight - e;
          a.style.overflowY = "hidden";
        }
        a.style.height = c + "px";
      }
    }
  };
  return d;
})();
