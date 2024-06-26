(function () {
  if (!window.ComboSearch)
    window.ComboSearch = {
      showResult: function (c) {
        var g = this;
        $(function () {
          g._showResult(c);
        });
      },
      _showResult: function (c) {
        function g(a, d) {
          var b = a.replace(/[\.\$\^\{\[\(\|\)\*\+\?\\]/gi, "\\$1");
          b = RegExp("(" + b + ")", "ig");
          return d.replace(b, '<span style="font-weight:bold">$1</span>');
        }
        function m(a, d) {
          var b = document.createElement("div"),
            e = a.url.match(/:\/\/([\w | .]+)/)[1];
          e = g(d, e);
          var f = g(d, a.title);
          b.className = "result-item";
          b.setAttribute("data-url", a.url);
          b.innerHTML =
            '<div class="result-item-top"><a target="_blank" class="result-item-title" href="' +
            a.url +
            '">' +
            f +
            '</a></div><div class="result-item-bottom"><span class="result-item-url">' +
            e +
            "</span></div>";
          if (a.tags != "no_tag") {
            e = a.tags.split(",");
            for (f = 0; f < e.length; f++)
              $(b)
                .find(".result-item-bottom")
                .append('<div class="diigo-tag">' + e[f] + "</div>");
          }
          return b;
        }
        $("#diigoComboSearch").length > 0 && $("#diigoComboSearch").remove();
        var h = c.results,
          i = c.key,
          j = c.total;
        c = c.element;
        var k = $("#diigoComboSearch"),
          l = chrome.extension.getURL("");
        k.length ||
          (k = $(
            '<div id="diigoComboSearch"><div id="diigoComboSearch-top"><div id="diigoComboSearch-close"></div><ul id="diigoComboSearch-close-action" class="diigoComboSearch-close-action"><li class="diigoComboSearch-close-t">Dismiss for now</li><li class="diigoComboSearch-close-f">Disable forever</li><li class="diigoComboSearch-tip">Enabled by Diigo Web Collector</li></ul></div><div id="diigoComboSearch-main"></div><div id="diigoComboSearch-footer"><a target="_blank"></a></a></div></div>'
          ).prependTo($(c)));
        chrome.runtime.sendMessage({ name: "getSearchPref" }, function (a) {
          if (a == true) {
            $("#diigoComboSearch-main").empty();
            $("#diigoComboSearch-footer").empty();
            $("#diigoComboSearch-title").remove();
            a = document.createDocumentFragment();
            for (var d = h.length > 10 ? 10 : h.length, b = 0; b < d; b++) {
              var e = m(h[b], i);
              a.appendChild(e);
            }
            (d = document.getElementById("diigoComboSearch-main")) &&
              d.appendChild(a);
            $("#diigoComboSearch-top").prepend(
              '<span id="diigoComboSearch-title"><img src="' +
                l +
                'img/diigo-logo.png"/>Results from your Diigo Library <span style="font-size: 12px;">(Premium feature)</span></span>'
            );
            $("#diigoComboSearch-footer").append(
              '<a id="diigoComboSearch-viewAllLink" href="https://www.diigo.com/search?adSScope=my&what=' +
                i +
                '&snapshot=no" target="_blank">View all ' +
                j +
                " items</a>"
            );
          } else {
            $("#diigoComboSearch-top").prepend(
              '<span id="diigoComboSearch-title"><img src="' +
                l +
                'img/diigo-logo.png"/><a href="https://www.diigo.com/search?adSScope=my&what=' +
                i +
                '&snapshot=no" target="_blank"><strong>' +
                j +
                " items</strong> found in your Diigo Library &#187;</a></span>"
            );
            $(
              '<div id="diigoComboSearch-goPremium">If you want to see results from your Diigo library here, <a id="go-to-option">go to options</a> to enable.</div>'
            ).appendTo($("#diigoComboSearch-footer"));
            $("#go-to-option").on("click", function () {
              chrome.runtime.sendMessage({
                name: "createTab",
                details: { url: "/options.html#search" },
              });
            });
          }
        });
        $("#diigoComboSearch")
          .off("click")
          .on("click", ".result-item", function () {
            $(this).data("url");
          })
          .on("click", ".diigo-tag", function (a) {
            a.stopPropagation();
            a = a.target;
            a =
              "https://www.diigo.com/search?adSScope=my&what=%23" +
              (/\s/.test($(a).text()) ? '"' + $(a).text() + '"' : $(a).text()) +
              "&snapshot=no";
            window.open(a);
          });
        $("#diigoComboSearch-close")
          .off("click")
          .on("click", function (a) {
            a.stopPropagation();
            $(this).parent().find("#diigoComboSearch-close-action").show();
          });
        $(document).on("click", function () {
          $("#diigoComboSearch-close-action").hide();
        });
        $("#diigoComboSearch-close-action").on("click", "li", function () {
          if ($(this).hasClass("diigoComboSearch-close-t"))
            $("#diigoComboSearch").hide();
          else if ($(this).hasClass("diigoComboSearch-close-f")) {
            $("#diigoComboSearch").hide();
            chrome.runtime.sendMessage({ name: "closeComboSearch" });
          }
        });
      },
    };
})();
