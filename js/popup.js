var Bg = chrome.extension.getBackgroundPage(),
  permissions = Bg.GlobalData ? Bg.GlobalData.permissions || {} : {};
function getSelectedTab(n) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (m) {
    n(m[0]);
  });
}
function googleEvent(n, m, x) {
  Bg.ga && Bg.ga("send", "event", n, m, x);
}
getSelectedTab(function (n) {
  chrome.tabs.sendMessage(n.id, { name: "checkVersion" });
});
var popCtx;
function isInResearchMode() {
  return $("#op-focus").prop("checked");
}
$(document).ready(function () {
  function n(a) {
    var b = /\.?diigo\./i.test(a);
    console.log("isDiigoURL", b);
    if (b) if (/\/item\/pdf/i.test(a)) return false;
    if (/^https?:\/\/chrome\.google\.com\/(extensions|webstore)/i.test(a))
      return false;
    return true;
  }
  function m(a, b) {
    var c = new Event(b);
    a.dispatchEvent || (a = a[0]);
    a.dispatchEvent(c);
  }
  function x(a, b) {
    if (y !== true) {
      console.log("updateBookmark", a);
      if (a.generated == true) {
        var c = a.bm;
        a.unread === true &&
          $("#read-later").addClass("unread").text("Mark as Read");
        $("#onload").hide();
        if (c.saved == true) {
          $("#remove").show();
          $("#remove").attr(
            "data-gtooltip",
            "Saved " + c.datetime + ". Click to remove"
          );
          $("#bookmark-save").text("Edit").addClass("saved");
          $("#cached")
            .show()
            .unbind("click")
            .bind("click", function () {
              getSelectedTab(function (d) {
                var f =
                  "https://www.diigo.com/cached?url=" +
                  encodeURIComponent(d.url);
                chrome.tabs.create({ url: f, index: d.index + 1 });
              });
            });
        }
        if (c != undefined) {
          console.log(b);
          c.saved != true && b
            ? $("#diigobm-title-input").val(b).trigger("input")
            : $("#diigobm-title-input").val(c.title).trigger("input");
          m($("#diigobm-title-input"), "change");
          $("#diigobm-url-input").val(c.url);
        } else
          getSelectedTab(function (d) {
            $("#diigobm-title-input").val(d.title);
            $("#diigobm-url-input").val(d.url);
          });
        c.mode == 2 && $("#op-private").prop("checked", true);
        c.unread == true && $("#op-readlater").prop("checked", true);
        c = ParseTags.unparseTags(c.tags);
        console.log(c);
        blank(c) || $("#diigobm-tag-input").val(c + " ");
      }
    }
  }
  function z(a, b) {
    var c = $("#diigobm-tag-input"),
      d = ParseTags.parseTags(c.val(), true),
      f = $.inArray(a, d);
    if (b === undefined) f >= 0 ? d.splice(f, 1) : d.push(a);
    else if (b) f == -1 && d.push(a);
    else f >= 0 && d.splice(f, 1);
    d = ParseTags.unparseTags(d);
    if (d.length) d += " ";
    c.val(d);
    O(c[0]);
    s();
  }
  function s() {
    var a = $("#diigobm-tag-input"),
      b = ParseTags.parseTags(a.val(), true);
    $("#tag-cloud-container")
      .find(".Diigo-Bookmark-Tag-item")
      .each(function () {
        var c = $(this),
          d = c.text();
        $.inArray(d, b) != -1
          ? c.addClass("selected")
          : c.removeClass("selected");
      });
    $("#diigobm-recent-tag, #diigobm-recommend-tag, #diigobm-group-tag")
      .find(".diigo-tag")
      .each(function () {
        var c = $(this),
          d = c.text();
        console.log(d, b);
        $.inArray(d, b) != -1
          ? c.addClass("selected")
          : c.removeClass("selected");
      });
  }
  function O(a) {
    var b = a.value.length;
    setTimeout(function () {
      a.focus();
      if (a.createTextRange) {
        var c = a.createTextRange();
        c.move("character", b);
        c.select();
      } else if (a.selectionStart >= 0) {
        a.focus();
        a.setSelectionRange(b, b);
      }
    }, 13);
  }
  function q(a, b) {
    if (a == "recommended") {
      b = b.filter(function (g) {
        return $.inArray(g, popCtx.mytag) >= 0;
      });
      b = popCtx.lastUsedTags.concat(b);
      if (b.length == 0) return;
      else $("#diigobm-recommend-tag").show();
      b = arrayUnique(b);
    }
    for (var c = document.createDocumentFragment(), d = 0; d < b.length; d++) {
      var f = document.createElement("div");
      f.className = "diigo-tag";
      f.innerText = b[d];
      $(f).toggleClass("selected", $.inArray(b[d], popCtx.bm.tags) >= 0);
      c.appendChild(f);
    }
    if (a == "recommended") $(c).appendTo($("#diigobm-recommend-tag"));
    else if (a == "group") {
      $("#diigobm-group-tag").find(".loading").hide();
      $("#diigobm-group-tag").find(".diigo-tag").remove();
      $(c).appendTo($("#diigobm-group-tag"));
    }
  }
  function P(a) {
    return some(popCtx.bm.lists, function (b) {
      return b.id == a;
    });
  }
  function Q(a) {
    return some(popCtx.bm.outliners, function (b) {
      return b.id == a;
    });
  }
  function t(a) {
    return some(popCtx.bm.groups, function (b) {
      return b.name == a;
    });
  }
  function G(a) {
    return /^(https|http|ftp|rtsp|mms)+:\/\//.test(a) ? true : false;
  }
  function r() {
    var a = true,
      b = $("#diigobm-url-input").val();
    if ($("#diigobm-title-input").val().match(/^\s*$/)) {
      a = false;
      $("#diigobm-title").find(".diigo-alert-tip").show();
    }
    if (!G(b) || b.match(/^\s*$/))
      if (a == true) {
        a = false;
        $("#diigobm-url").find(".diigo-alert-tip").show();
      }
    if (a != false) {
      a = {};
      a.title = $("#diigobm-title-input").val();
      if (a.title.match(/^\s*$/)) a.title = popCtx.bm.title;
      a.url = $("#diigobm-url-input").val();
      if (a.url.match(/^\s*$/) || !G(a.url)) a.url = popCtx.bm.url;
      a.description = $("#diigobm-des-input").val();
      a.tags = ParseTags.parseTags($("#diigobm-tag-input").val(), true);
      a.mode = $("#op-private").prop("checked") ? 2 : 0;
      a.unread = $("#op-readlater").prop("checked") ? true : false;
      b = $("#diigobm-list").find(".content").attr("data-id");
      a.shareLists = b ? [b] : [];
      b = $("#diigobm-group").find(".content").attr("data-id");
      a.shareGroups = b ? [b] : [];
      a.shareAnnotations = $("#Diigo-Bookmark-checkShareExisting")
        .find(".op-checkbox-container")
        .hasClass("checked")
        ? true
        : false;
      a.cache = $("#op-cache").prop("checked") ? true : false;
      var c = {
        url: a.url,
        mode: a.mode,
        title: a.title,
        tags: a.tags,
        description: a.description,
        unread: a.unread,
        urlId: popCtx.bm.urlId,
        cache: a.cache,
        groups: a.shareGroups,
        shareExistingAnnotations: a.shareAnnotations,
        lists: a.shareLists,
      };
      getSelectedTab(function (d) {
        c.tabId = d.id;
        j.WebAPI.saveBookmark(c);
        window.close();
      });
    }
  }
  function R(a) {
    var b = [];
    a.sort(function (e, h) {
      return e.count <= h.count ? 1 : -1;
    });
    a = a.slice(0, 101);
    var c = a[0].count,
      d = a.length;
    a.sort(function (e, h) {
      return e.name.toLowerCase() <= h.name.toLowerCase() ? -1 : 1;
    });
    for (var f = 0; f < d; f++) b[f] = a[f].count;
    b = arrayUnique(b);
    d = b.length;
    b.sort(function (e, h) {
      return e < h ? 1 : -1;
    });
    var g = Math.ceil(d / 10);
    d = b.slice(1, 1 + g);
    f = b.slice(1 + g, 1 + 2 * g);
    b = b.slice(1 + 2 * g, 1 + 3 * g);
    return { topTags: a, maxCount: c, first: d, second: f, third: b };
  }
  function H(a) {
    if (a.length == 0) {
      var b = document.getElementById("tag-cloud-container");
      a = document.createElement("div");
      a.id = "no-tag";
      a.innerHTML = "You haven't create any tags yet,:)";
      b.appendChild(a);
    } else if (!($("#tag-cloud-container").find("a").length > 0)) {
      var c = R(a);
      b = c.topTags;
      var d = c.maxCount;
      a = c.first;
      var f = c.second,
        g = c.third,
        e = b.length;
      c = document.createDocumentFragment();
      for (var h = 0; h < e; h++) {
        var i = document.createElement("a");
        i.className = "Diigo-Bookmark-Tag-item";
        i.href = "#";
        i.innerText = b[h].name;
        var l = b[h].count;
        if (l == d) {
          i.style.fontSize = "20px";
          i.style.fontWeight = "bold";
        }
        a.forEach(function (k) {
          if (l == k) {
            i.style.fontSize = "18px";
            i.style.fontWeight = "bold";
          }
        });
        f.forEach(function (k) {
          if (l == k) {
            i.style.fontSize = "16px";
            i.style.fontWeight = "bold";
          }
        });
        g.forEach(function (k) {
          if (l == k) {
            i.style.fontSize = "16px";
            i.style.fontWeight = "regular";
          }
        });
        c.appendChild(i);
      }
      b = document.getElementById("tag-cloud-container");
      b.appendChild(c);
      $("#tag-cloud-container").on("click", "a", function (k) {
        /Diigo\-Bookmark\-Tag\-item/.test(k.target.className) &&
          z($(this).text());
      });
      s();
    }
  }
  function u(a) {
    $("#refresh-outliner").removeClass("processing");
    var b = a.list;
    a = a.outliners;
    var c = $("#diigobm-list").find(".item-container");
    c.empty();
    if (a.length) {
      $('<div class="menu-title">Outliners</div>').appendTo(c);
      forEach(a, function (d) {
        var f = Q(d.id) ? d.title + " (added)" : d.title;
        $(
          '<div class="menu-item" data-id="' + d.id + '">' + f + "</div>"
        ).appendTo(c);
      });
    }
    if (b.length) {
      $('<div class="menu-title">Lists</div>').appendTo(c);
      forEach(b, function (d) {
        var f = P(d.id) ? d.title + " (added)" : d.title;
        $(
          '<div class="menu-item" data-id="' + d.id + '">' + f + "</div>"
        ).appendTo(c);
      });
    }
  }
  function A(a, b) {
    $("#refresh-group").removeClass("processing");
    var c = a.filter(function (e) {
        return e.access_mode < 5;
      }),
      d = a.filter(function (e) {
        console.log(e.access_mode);
        return e.access_mode >= 5;
      }),
      f = $("#diigobm-group").find(".item-container");
    f.empty();
    if (d.length) {
      $('<div class="menu-title">Teams</div>').appendTo(f);
      forEach(d, function (e) {
        var h = t(e.name) ? e.displayName + " (shared)" : e.displayName;
        $('<div class="menu-item" data-id="' + e.name + '">' + h + "</div>")
          .on("click", function () {
            console.log("Click");
            var i = e.name;
            if (popCtx.groupTagsDict[i] != undefined)
              q("group", popCtx.groupTagsDict[i]);
            else {
              $("#diigobm-group-tag").show();
              getSelectedTab(function (l) {
                chrome.tabs.sendMessage(l.id, {
                  name: "loadGroupTagsDictionary",
                  groupName: i,
                });
              });
            }
          })
          .appendTo(f);
      });
    }
    if (c.length) {
      $('<div class="menu-title">Groups</div>').appendTo(f);
      forEach(c, function (e) {
        var h = t(e.name) ? e.displayName + " (shared)" : e.displayName;
        $('<div class="menu-item" data-id="' + e.name + '">' + h + "</div>")
          .on("click", function () {
            console.log("Click");
            var i = e.name;
            if (popCtx.groupTagsDict[i] != undefined)
              q("group", popCtx.groupTagsDict[i]);
            else {
              $("#diigobm-group-tag").show();
              getSelectedTab(function (l) {
                chrome.tabs.sendMessage(l.id, {
                  name: "loadGroupTagsDictionary",
                  groupName: i,
                });
              });
            }
          })
          .appendTo(f);
      });
    }
    var g = $("#diigobm-group")
      .find("select")
      .empty()
      .unbind()
      .removeClass("processing");
    if (d.length > 0) {
      g.append(Utils.dom.buildOne("option", { value: 0 }, ["Share to a Team"]));
      g.append(
        Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
      );
      forEach(d, function (e) {
        b
          ? g.append(
              Utils.dom.buildOne("option", { value: e.name }, [e.displayName])
            )
          : g.append(
              Utils.dom.buildOne("option", { value: e.name }, [
                e.displayName + (t(e.name) ? " (shared)" : ""),
              ])
            );
      });
      g.append(
        Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
      );
    }
    g.append(Utils.dom.buildOne("option", { value: 0 }, ["Share to a Group"]));
    g.append(
      Utils.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
    );
    $(
      Utils.dom.buildOne("option", { value: -2 }, ["Create a Group..."])
    ).appendTo(g);
    g.append(
      Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
    );
    forEach(c, function (e) {
      b
        ? g.append(
            Utils.dom.buildOne("option", { value: e.name }, [e.displayName])
          )
        : g.append(
            Utils.dom.buildOne("option", { value: e.name }, [
              e.displayName + (t(e.name) ? " (shared)" : ""),
            ])
          );
    });
    g.append(
      Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
    );
    $(Utils.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(g);
    g.change(function () {
      var e = g.val();
      if (e == -2) {
        chrome.tabs.create({ url: "https://groups.diigo.com/create" });
        g.val(-1);
      } else if (e == -3) {
        $(this).addClass("processing");
        chrome.tabs.getSelected(null, function (h) {
          chrome.tabs.sendMessage(h.id, { name: "refreshMyStuff" });
        });
        g.val(-1);
      }
      if (e != 0 && e != -1 && e != -2 && e != -3) {
        $("#diigosc-group-tag").show();
        popCtx.isAnnotated && $("#bottom").find("div:first-child").show();
        $("#Diigo-Bookmark-checkShareExisting").show();
        console.log(popCtx);
        if (popCtx.groupTagsDict[e] != undefined)
          q("group", popCtx.groupTagsDict[e]);
        else {
          $("#diigobm-group-tag").show();
          chrome.tabs.getSelected(null, function (h) {
            chrome.tabs.sendMessage(h.id, {
              name: "loadGroupTagsDictionary",
              groupName: e,
            });
          });
        }
      }
    });
    g.val(0).change();
  }
  function I(a, b) {
    console.log(a);
    var c = a.bm;
    a.generated === true && $("#onload").hide();
    if (c.saved == true) {
      $("#remove").show();
      $("#top-bar").find(".top-bar-title").text("Edit bookmark");
    }
    $("#remove").attr(
      "data-gtooltip",
      "Saved " + c.datetime + ". Click to remove"
    );
    if (c != undefined) {
      c.saved != true && b != undefined
        ? $("#diigobm-title-input").val(b)
        : $("#diigobm-title-input").val(c.title);
      m($("#diigobm-title-input"), "change");
      $("#diigobm-url-input").val(c.url);
    } else
      chrome.tabs.getSelected(function (e) {
        $("#diigobm-title-input").val(e.title);
        m($("#diigobm-title-input"), "change");
        $("#diigobm-url-input").val(e.url);
      });
    c.mode == 2 && $("#op-private").prop("checked", true);
    if (c.saved == false) {
      localStorage["prefs.bookmark.privateByDefault"] == "true" &&
        $("#op-private").prop("checked", true);
      localStorage["prefs.bookmark.unreadByDefault"] == "true" &&
        $("#op-readlater").prop("checked", true);
    }
    c.unread == true && $("#op-readlater").prop("checked", true);
    if (c.description && c.description.length > 0) {
      $("#diigobm-des-input").text(c.description).trigger("change");
      m($("#diigobm-des-input"), "change");
    } else if (a.selection) {
      $("#diigobm-des-input").text('"' + a.selection + '"');
      m($("#diigobm-des-input"), "change");
    }
    var d = ParseTags.unparseTags(c.tags);
    console.log(d);
    blank(d) || $("#diigobm-tag-input").val(d + " ");
    u({ list: a.lists, outliners: a.outliners }, false);
    A(a.groups, false);
    s();
    $("#diigobm-recommend-tag").find(".diigo-tag").length == 0 &&
      getSelectedTab(function (e) {
        chrome.tabs.sendMessage(e.id, { name: "getRecommendedTags" });
      });
    H(a.myTagsWithCount);
    chrome.storage.local.get(null, function (e) {
      console.log(e);
      if (e.researchMode === true) {
        y = true;
        $("#op-focus").prop("checked", true);
        $("#top-bar").find(".focus-research-tip").show();
        c.saved === false && J(e, c.mode);
      }
    });
    if (
      localStorage.openedOutlinerId &&
      localStorage["prefs.outlinerIcon"] == "true"
    ) {
      d = localStorage.openedOutlinerId;
      var f = $("#diigobm-list"),
        g = f.find(".menu-item[data-id=" + d + "]").text();
      f.find(".content").text(g).attr("data-id", d).end().addClass("inputed");
    }
  }
  function B(a, b) {
    $("#search-type").removeClass("meta full").addClass(a);
    b || (localStorage.search_type = a);
    a === "meta" ? C.enable() : C.disable();
    $("#search-input").val() != "" && D($("#search-input").val());
  }
  function K() {
    $("#search-input")
      .on("keydown", function (f) {
        if (f.which == 13) {
          f = $("#search-input").val();
          D(f);
        }
      })
      .focus();
    $("#search-btn").on("click", function () {
      var f = $("#search-input").val();
      D(f);
    });
    $("#search-type").on("click", function (f) {
      f.stopPropagation();
      $("#search-type-switcher").show();
    });
    $("#search-type-switcher").on("click", "li", function () {
      $(this).hasClass("meta") ? B("meta") : B("full");
    });
    $(document).on("click", function () {
      $("#search-type-switcher").hide();
    });
    $("#viewAllLink").on("click", function () {
      var f = $(this).attr("data-href");
      chrome.tabs.create({ url: f });
    });
    $("#recent-result-tab").on("click", ".result-link", function () {
      $(".result-link").removeClass("current");
      $(this).addClass("current");
      E($(this).attr("id"));
    });
    $("#recent-result-iframe").load(function () {
      $("#recent-result-tab-loading").hide();
    });
    $("#search-result-iframe").load(function () {
      $("#search-result-main").show();
      $("#search-result-loading").hide();
    });
    $("#backLink")
      .off("click")
      .on("click", function () {
        F("recent");
      });
    var a = JSON.parse(localStorage.lastSearch);
    if (a.tab == "recent") L("recent");
    else a.tab == "search" && L("search", a.key);
    a = j.GlobalData.myTags;
    for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
    b = removeFromArray("no_tag", b);
    console.log(b);
    a = {
      resultsClass: "diigolet ac_results ac_search",
      data: b,
      mode: "multiple",
      multipleSeparator: " ,",
      id: "diigolet-ac",
      moveToSelect: true,
    };
    try {
      C = new AutoComplete("#search-input", a);
    } catch (d) {
      debug(d);
    }
    B(localStorage.search_type, true);
  }
  function E(a) {
    $("#recent-result-tab-loading").show();
    if (a == "recentTab")
      $("#recent-result-iframe").attr({
        src: "https://www.diigo.com/chrome/items",
      });
    else
      a == "unreadTab" &&
        $("#recent-result-iframe").attr({
          src: "https://www.diigo.com/chrome/items?read=no",
        });
  }
  function F(a) {
    if (a === "recent") {
      $("#search-input").val("");
      $("#recent-result").addClass("current rotateSlideIn-r");
      $("#search-result").addClass("rotateSlideOut-r");
      E("recentTab");
      localStorage.lastSearch = JSON.stringify({ tab: "recent", key: "null" });
      setTimeout(function () {
        $(".tab").removeClass("rotateSlideIn-r rotateSlideOut-r");
        $("#search-result").removeClass("current");
      }, 1e3);
    } else if (a === "search") {
      $("#search-result").addClass("current rotateSlideIn-l");
      $("#recent-result").addClass("rotateSlideOut-l");
      setTimeout(function () {
        $(".tab").removeClass("rotateSlideIn-l rotateSlideOut-l");
        $("#recent-result").removeClass("current");
      }, 1e3);
    }
  }
  function L(a, b) {
    if (a == "recent") {
      $("#recent-result").addClass("current");
      $("#search-result").removeClass("current");
      E("recentTab");
    } else if (a == "search") {
      $("#recent-result").removeClass("current");
      $("#search-result").addClass("current");
      $("#search-result-main").hide();
      $("#search-result-loading").show();
      $("#search-input").val(b);
      if (localStorage.search_type === "meta") {
        var c =
          "https://www.diigo.com/chrome/meta?what=" + encodeURIComponent(b);
        $("#viewAllLink").attr(
          "data-href",
          "https://www.diigo.com/search?adSScope=my&what=" +
            encodeURIComponent(b)
        );
      } else {
        c =
          "https://www.diigo.com/chrome/fulltext?what=" + encodeURIComponent(b);
        $("#viewAllLink").attr(
          "data-href",
          "https://www.diigo.com/search?adSScope=my&what=" +
            encodeURIComponent(b) +
            "&snapshot=yes"
        );
      }
      $("#search-result-iframe").attr({ src: c });
    }
  }
  function D(a) {
    if (a == "") $("#recent-result").hasClass("current") || F("recent");
    else {
      $("#search-result").hasClass("current") || F("search");
      localStorage.lastSearch = JSON.stringify({ tab: "search", key: a });
      $("#search-result-main").hide();
      $("#search-result-loading").show();
      if (localStorage.search_type === "meta") {
        var b =
          "https://www.diigo.com/chrome/meta?what=" + encodeURIComponent(a);
        $("#viewAllLink").attr(
          "data-href",
          "https://www.diigo.com/search?adSScope=my&what=" +
            encodeURIComponent(a)
        );
      } else {
        b =
          "https://www.diigo.com/chrome/fulltext?what=" + encodeURIComponent(a);
        $("#viewAllLink").attr(
          "data-href",
          "https://www.diigo.com/search?adSScope=my&what=" +
            encodeURIComponent(a) +
            "&snapshot=yes"
        );
      }
      $("#search-result-iframe").attr({ src: b });
      googleEvent("Chrome extension", "do popup search", "search");
    }
  }
  function M(a) {
    var b = a.groups ? a.groups : j.GlobalData.myGroups;
    u(
      {
        list: a.lists ? a.lists : j.GlobalData.myBmLists,
        outliners: a.outliners ? a.outliners : j.GlobalData.outliners,
      },
      true
    );
    A(b, true);
    b = a.lastUsedTags ? a.lastUsedTags : [];
    if ($("#diigobm-recent-tag").find(".diigo-tag").length == 0)
      if (b.length > 0) {
        for (
          var c = document.createDocumentFragment(), d = 0;
          d < b.length;
          d++
        ) {
          var f = document.createElement("div");
          f.className = "diigo-tag";
          f.innerText = b[d];
          c.appendChild(f);
        }
        $("#diigobm-recent-tag").append(c);
      } else $("#diigobm-recent-tag").hide();
    H(a.myTagsWithCount ? a.myTagsWithCount : j.GlobalData.myTagsWithCount);
    chrome.storage.local.get("researchModeData", function (g) {
      if (g.researchModeData) J(g);
      else {
        $("#op-private").prop("checked", false);
        $("#op-readlater").prop("checked", false);
        $("#diigobm-tag-input").val("");
        $("#diigobm-list").find("select").val(0);
        $("#diigobm-group").find("select").val(0);
      }
    });
  }
  function J(a, b) {
    var c = a.researchModeData;
    c._private === true || b == 2
      ? $("#op-private").prop("checked", true)
      : $("#op-private").prop("checked", false);
    c.unread === true && $("#op-readlater").prop("checked", true);
    c.cache && c.cache === true && $("#op-cache").prop("checked", true);
    var d = ParseTags.unparseTags(c.tags);
    $("#diigobm-tag-input").val(d);
    s();
    if (c.outliner) {
      var f = $("#diigobm-list");
      d = f.find(".menu-item[data-id=" + c.outliner + "]").text();
      f.find(".content")
        .text(d)
        .attr("data-id", c.outliner)
        .end()
        .addClass("inputed");
    }
    if (c.group) {
      f = $("#diigobm-group");
      d = f.find(".menu-item[data-id=" + c.group + "]").text();
      f.find(".content")
        .text(d)
        .attr("data-id", c.group)
        .end()
        .addClass("inputed");
    }
  }
  function N(a) {
    var b = {};
    b.tags = ParseTags.parseTags($("#diigobm-tag-input").val(), true);
    b._private = $("#op-private").prop("checked") ? true : false;
    b.unread = $("#op-readlater").prop("checked") ? true : false;
    b.cache = $("#op-cache").prop("checked") ? true : false;
    b.outliner = $("#diigobm-list").find(".content").attr("data-id");
    b.group = $("#diigobm-group").find(".content").attr("data-id");
    console.log(b);
    chrome.storage.local.set({ researchModeData: b }, function () {
      a && a();
    });
  }
  function v(a) {
    $("#research-mode-notification").hide();
    if (a) {
      $("#top-bar")
        .find("span")
        .text("Focused Research")
        .end()
        .find("div")
        .hide();
      $("#diigobm-title,#diigobm-url,#op-cache,#diigobm-recommend-tag").hide();
      chrome.storage.local.get("isShowResearchTip", function (e) {
        console.log(e);
        if (
          typeof e.isShowResearchTip === "undefined" ||
          e.isShowResearchTip != false
        )
          $("#research-mode-notification").show();
      });
      $("#research-mode-close-notify").on("click", function () {
        $("#research-mode-notification").hide();
        chrome.storage.local.set({ isShowResearhTip: false });
      });
    }
    a = navigator.userAgent.toLowerCase();
    var b = a.indexOf("macintosh") != -1 || a.indexOf("mac os x") != -1;
    if (b) {
      $("#diigobm-url").addClass("mac");
      $("#list-group select").css("text-indent", "7px");
    } else $("#diigobm-url").addClass("win");
    $("#link-icon").on("click", function () {
      var e = $("#diigobm-url");
      if (b) e.toggleClass("mac-unfold");
      else
        e.hasClass("unfold")
          ? e.addClass("fold").removeClass("unfold")
          : e.addClass("unfold").removeClass("fold");
    });
    autoTextarea.init(document.getElementById("diigobm-title-input"), 40);
    autoTextarea.init(document.getElementById("diigobm-des-input"), 80);
    $("#diigobm-title-input").on("keydown", function (e) {
      e.which == 40 && $("#diigobm-des-input").focus();
    });
    $("#diigobm-des-input").on("keydown", function (e) {
      e.which == 38 && $("#diigobm-title-input").focus();
    });
    $("#recommend-tag").on("click", function (e) {
      e.preventDefault();
      $("#diigobm-recommend-tag").find(".diigo-tag").trigger("click");
    });
    $("#op-focus").on("change", function () {
      var e = $(this).prop("checked");
      chrome.storage.local.set({ researchMode: e });
    });
    $("#diigobm-tag-dropdown").on("click", function () {
      $(this).toggleClass("cloud");
      if ($("#tag-cloud").css("display") == "none") {
        $("#tag-suggestion").hide();
        $("#tag-cloud").show();
      } else {
        $("#tag-suggestion").show();
        $("#tag-cloud").hide();
      }
    });
    $("#diigobm-recent-tag").on("click", "a", function () {
      $("#diigobm-recent-tag")
        .find(".diigo-tag")
        .each(function () {
          z($(this).addClass("selected").text(), true);
        });
    });
    $("#diigobm-options,#Diigo-Bookmark-checkShareExisting").on(
      "click",
      ".op-checkbox-container",
      function () {
        $(this).toggleClass("checked");
      }
    );
    $("#bm-main").on("keydown", function (e) {
      if (e.keyCode == 13)
        e.target.id == "diigobm-tag-input" &&
          !$("#diigolet-ac").is(":visible") &&
          r();
      else if (e.keyCode == 83 && (e.ctrlKey || e.metaKey)) r();
      else e.keyCode == 27 && window.close();
    });
    $("#op-cache").find(".op-checkbox-container").removeClass("checked");
    $("#remove").Gtooltip();
    a = [];
    var c = popCtx.myTagsWithCount
      ? popCtx.myTagsWithCount
      : j.GlobalData.myTagsWithCount;
    c.sort(function (e, h) {
      return e.count <= h.count ? 1 : -1;
    });
    for (var d = c.length, f = 0; f < d; f++) a[f] = c[f].name;
    a = {
      resultsClass: "diigolet ac_results",
      data: a,
      mode: "multiple",
      multipleSeparator: " ,",
      id: "diigolet-ac",
    };
    try {
      new AutoComplete("#diigobm-tag-input", a);
    } catch (g) {
      debug(g);
    }
    $("#diigobm-tag-input").bind("input", function () {
      s();
    });
    $("#diigobm-list-addInput").on("focus", function () {
      $("#diigobm-list-add .diigo-alert-tip").hide();
    });
    $("#close-upgrade-info").on("click", function () {
      $("#upgrade-info").hide();
    });
    $("#btn-upgrade-info").on("click", function () {
      chrome.tabs.create({ url: "https://www.diigo.com/premium?f=outliner" });
    });
    $("#diigobm-list-addBtn").on("click", function () {
      console.log("click");
      if (!$(this).parent().hasClass("processing"))
        if (j.GlobalData.permissions.createOutliner) {
          var e = $("#diigobm-list-addInput").val(),
            h = $("#diigobm-list-add .diigo-alert-tip"),
            i = [],
            l = popCtx.lists.length,
            k;
          for (k = 0; k < l; k++) i.push(popCtx.lists[k].title);
          if (e.match(/^\s*$/)) {
            h.show().find("span").text("Input a name");
            $("#diigobm-list-addInput").focus();
          } else if ($.inArray(e, i) !== -1)
            h.show().find("span").text("Name existed !");
          else {
            $(this).parent().addClass("processing");
            getSelectedTab(function (S) {
              chrome.tabs.sendMessage(S.id, { name: "createList", data: e });
            });
          }
        } else $("#upgrade-info").show();
    });
    $("#diigobm-list-addCancel").on("click", function () {
      $("#diigobm-list-add .diigo-alert-tip").hide();
      $("#diigobm-list-add").hide();
      $("#diigobm-list").show();
      $("#diigobm-list-addInput").val("");
    });
    $("#w-upgrade").on("click", function (e) {
      e.preventDefault();
      googleEvent(
        "Chrome extension",
        "Click upgrade from outliner creation",
        "outliner"
      );
      chrome.tabs.create({ url: "https://www.diigo.com/premium?f=outliner" });
      $("#diigobm-list-add-tip").hide();
      $("#diigobm-list").show();
    });
    $("#w-cancel").on("click", function (e) {
      e.preventDefault();
      $("#diigobm-list-add-tip").hide();
      $("#diigobm-list").show();
    });
    $("#diigobm-recent-tag,#diigobm-recommend-tag,#diigobm-group-tag").on(
      "click",
      "div",
      function (e) {
        /diigo\-tag/.test(e.target.className) && z($(this).text());
      }
    );
    $("#diigobm-saveBtn").on("click", function () {
      isInResearchMode() ? N(r) : r();
    });
    $("#bottom").on("click", function (e) {
      switch (e.target.id) {
        case "diigobm-saveBtn":
          isInResearchMode() ? N(r) : r();
          break;
        case "diigobm-cancelBtn":
          window.close();
          break;
      }
    });
    $("#diigobm-tag-input").focus();
    $("#refresh-outliner,#refresh-group").on("click", function () {
      $(this).addClass("processing");
      getSelectedTab(function (e) {
        chrome.tabs.sendMessage(e.id, { name: "refreshMyStuff" });
      });
    });
  }
  function o(a) {
    chrome.tabs.executeScript(a, { file: "js/checkTab.js" }, function () {
      debug("executeScript callback");
    });
  }
  popCtx = { groupTagsDict: {} };
  var p,
    y = false,
    C,
    j = chrome.extension.getBackgroundPage();
  if (localStorage["prefs.shortcutOpenOutlinerSidebar"] == "true") {
    $("#toggle-outliner").addClass("shortcut");
    var w = "";
    if (localStorage["prefs.shortcutOpenOutlinerSidebarCtrl"] == "true")
      w += "Ctrl + ";
    if (localStorage["prefs.shortcutOpenOutlinerSidebarAlt"] == "true")
      w += "Alt + ";
    w += localStorage["prefs.shortcutOpenOutlinerSidebarKey"];
    $(".shortcut-tip").text(w);
  } else $("#toggle-outliner").removeClass("shortcut");
  chrome.storage.local.get("researchMode", function (a) {
    $("#research-mode-checkbox").prop("checked", a ? a.researchMode : false);
  });
  chrome.cookies.get(
    { url: "https://www.diigo.com", name: "diigoandlogincookie" },
    function (a) {
      if (a) {
        if (!localStorage.gcc_login_send) {
          console.log("111");
          if (localStorage.gcc_login_send) return;
          j.sendAnalysisData({ gcc_cookie_login_ext_chrome: 1 });
          localStorage.gcc_login_send = "true";
        }
        if ((p = a.value.split("-.-")[1])) {
          $("#sign-out-btn")
            .find("span")
            .text("Sign Out (" + p + ")");
          $("#userInfo")
            .find(".username")
            .text(p)
            .attr("title", p)
            .on("click", function () {});
        }
        console.timeEnd("cookie");
        permissions.servicePlanName &&
          permissions.servicePlanName == "Free" &&
          $("#userInfo").find(".upgrade").show();
        console.log(permissions);
        if (permissions.snapshot) $("#diigo-acache-field").hide();
        else {
          $("#diigo-acache-field").show();
          $("#op-cache")[0].disabled = true;
          $("#op-cache").parent().addClass("disabled");
        }
        $("[data-link]").click(function () {
          var b,
            c = $(this).attr("data-link");
          if (c != "more")
            if (c === "tutorial")
              getSelectedTab(function (d) {
                chrome.tabs.sendMessage(d.id, { name: "showTutorial" });
                window.close();
              });
            else {
              switch (c) {
                case "home":
                  b = "https://www.diigo.com/user/" + p;
                  break;
                case "rating":
                  b =
                    "https://chrome.google.com/webstore/detail/diigo-web-collector-captu/pnhplgjpclknigjpccbcnmicgcieojbh/reviews";
                  break;
                case "unread":
                  b =
                    "https://www.diigo.com/user/" +
                    p +
                    "?type=bookmark&read=no";
                  break;
                case "my-outliner":
                  b = "https://www.diigo.com/outliner";
                  break;
                case "my-groups":
                  b = "https://groups.diigo.com/user/" + p;
                  break;
                case "option":
                  b = chrome.extension.getURL("") + "options.html";
                  break;
                case "changelog":
                  b =
                    "https://blog.diigo.com/2017/08/22/introduce-a-new-way-to-retain-knowledge-from-books/";
                  break;
                case "sign-out-btn":
                  b = "https://www.diigo.com/sign-out";
                  break;
                case "upgrade":
                  b = "https://www.diigo.com/premium?f=chrome_ext_menu";
                  googleEvent(
                    "Chrome extension",
                    "Click upgrade from main menu",
                    "Name"
                  );
                  j.sendAnalysisData({
                    gcc_cookie_ad_click_from_extension_old: 1,
                  });
                  break;
                case "feedback":
                  b = "/feedback.html";
                  break;
              }
              c == "feedback"
                ? getSelectedTab(function (d) {
                    b = b + "?refer=" + encodeURIComponent(d.url);
                    chrome.tabs.create({ url: b, index: d.index + 1 });
                  })
                : getSelectedTab(function (d) {
                    if (c == "diigo-acache") {
                      console.log("diigo-acache1");
                      chrome.tabs.sendMessage(d.id, { name: "showMHTMLinfo" });
                      window.close();
                    } else chrome.tabs.create({ url: b, index: d.index + 1 });
                  });
            }
        });
        localStorage.rating ||
          $("#rating")
            .show()
            .on("click", function () {
              $(this).hide();
              localStorage.rating = true;
            });
        getSelectedTab(function (b) {
          var c = b.url,
            d = c.match(/https?:\/\/*\/*/gi);
          console.log(n(c));
          if (d == null || !n(c))
            $("ul")
              .find("li")
              .not("#annotate-pdf")
              .addClass("disabled")
              .off("click");
          else {
            chrome.tabs.sendMessage(b.id, { name: "ifbookmark" });
            chrome.tabs.sendMessage(
              b.id,
              { name: "isOutlinerSidebarOpened" },
              function (f) {
                f &&
                  f.opened &&
                  $("#toggle-outliner")
                    .find(".content")
                    .text("Close outliner sidebar");
              }
            );
            console.log("ifbookmark");
          }
        });
      } else {
        $("#main").hide();
        $("#sign-in").show();
      }
    }
  );
  chrome.runtime.onMessage.addListener(function (a, b) {
    if (a.name == "isSaved") {
      var c = a.data;
      if (c.saved === true) {
        $("#save-bookmark")
          .find("span")
          .text("Edit Bookmark")
          .end()
          .addClass("saved");
        $("#cached")
          .show()
          .bind("click", function () {
            getSelectedTab(function (f) {
              var g =
                "https://www.diigo.com/cached?url=" + encodeURIComponent(f.url);
              chrome.tabs.create({ url: g, index: f.index + 1 });
            });
          });
      }
      c.unread === true && $("#read-later").addClass("unread");
    } else if (a.name == "sendCtx") {
      console.log("sendCtx", a.data);
      getSelectedTab(function (f) {
        console.log(b.tab.id, f.id, b);
        if (b.tab.id == f.id) {
          popCtx = $.extend(popCtx, a.data);
          x(a.data, f.title);
        }
      });
    } else if (a.name == "sendRetags") {
      console.log(a.data);
      q("recommended", a.data);
    } else if (a.name == "sendGtags") {
      console.log(a.data);
      q("group", a.data);
    } else if (a.name == "popupclose") window.close();
    else if (a.name == "shownew") window.close();
    else if (a.name == "updateLists") u(a.data);
    else if (a.name == "updateGroups") A(a.data);
    else if (a.name == "updateGroupTag") {
      popCtx.groupTagsDict = a.data;
      c = $("#diigobm-group").find(".content").attr("data-id");
      console.log(c);
      q("group", popCtx.groupTagsDict[c]);
    } else if (a.name == "listCreateSuccessAndUpdateLists") {
      u({ list: a.lists, outliners: a.outliners });
      c = a.newlist;
      var d = $("#diigobm-list");
      d.find(".content").text(c.title).attr("data-id", c.id);
      d.removeClass("focused");
      d.find(".add-box").hide().find("input").val("");
      d.find(".search-box").show();
    } else
      a.name == "listCreateFailureAndUpdateLists" &&
        $("#diigobm-list-addBtn").parent().removeClass("processing");
  });
  $("#sign-in-btn").click(function () {
    window.open(
      "https://www.diigo.com/sign-in?referInfo=" +
        encodeURIComponent("/images/diigo-logo.png#SIGNED_IN")
    );
  });
  $("#sign-up-btn").click(function () {
    var a =
      "https://www.diigo.com/account/thirdparty/openid?openid_url=https://www.google.com/accounts/o8/id&redirect_url=" +
      encodeURIComponent("https://www.diigo.com/chrome_diigo_extension_done") +
      "&request_from=chrome_diigo_extension";
    window.open(a);
  });
  $("#bookmark").on("click", "div", function (a) {
    switch (a.target.id) {
      case "bookmark-save":
        getSelectedTab(function (b) {
          var c = b.url.substring(b.url.length - 4) == ".pdf",
            d = popCtx.permissions.pdfPermission.pdfPermission;
          if (c && d && 0)
            chrome.tabs.create({
              url: "/pdf/viewer.html?file=" + b.url + "&save=true",
            });
          else {
            o(b.id);
            $("#main").hide();
            $("#bm-main").show();
            chrome.tabs.sendMessage(b.id, { name: "makeSnapshot" });
            chrome.tabs.sendMessage(b.id, { name: "getMhtml", tabId: b.id });
            v(false);
            I(popCtx, b.title);
          }
        });
        break;
      case "bookmark-annotate":
        chrome.runtime.sendMessage({ name: "showToolbar" });
        window.close();
        break;
    }
  });
  $("#bookmark-annotate").hover(
    function () {
      $(this).parent().addClass("annotate-hover");
    },
    function () {
      $(this).parent().removeClass("annotate-hover");
    }
  );
  $("#bookmark-save").hover(
    function () {
      $(this).parent().addClass("tag-hover");
    },
    function () {
      $(this).parent().removeClass("tag-hover");
    }
  );
  $("li").on("click", "b", function () {
    $(this).parent().trigger("click");
  });
  $("#toggle-outliner").on("click", function () {
    getSelectedTab(function (a) {
      chrome.tabs.executeScript(
        a.id,
        { file: "js/checkTab.js" },
        function () {}
      );
      chrome.tabs.sendMessage(a.id, { name: "toggleOutlinerSidebar" });
      setTimeout(function () {
        window.close();
      });
    });
  });
  $("#save-bookmark").on("click", function () {
    $(this).hasClass("disabled") ||
      chrome.tabs.getSelected(null, function (a) {
        a.url.substring(a.url.length - 4);
        o(a.id);
        $("#main").hide();
        $("#bm-main").show();
        chrome.tabs.getSelected(null, function (b) {
          chrome.tabs.sendMessage(b.id, { name: "makeSnapshot" });
          chrome.tabs.sendMessage(b.id, { name: "getMhtml", tabId: b.id });
        });
        v();
        I(popCtx, a.title);
      });
  });
  $("ul").on("click", "li", function (a) {
    a = a.target.id;
    var b = $(this).parent().hasClass("disabled");
    switch (a) {
      case "annotate-article":
        getSelectedTab(function (c) {
          chrome.tabs.executeScript(
            c.id,
            { file: "js/checkTab.js" },
            function () {}
          );
          chrome.tabs.sendMessage(c.id, { name: "annotate" });
        });
        window.close();
        break;
      case "read-later":
        getSelectedTab(function (c) {
          o(c.id);
          var d = $("#read-later").hasClass("unread") ? true : false;
          chrome.tabs.sendMessage(c.id, { name: "readlater", ifUnread: d });
          console.log("readlater");
          window.close();
        });
        break;
      case "screenshot":
        if (b) return;
        getSelectedTab(function (c) {
          o(c.id);
          chrome.tabs.sendMessage(c.id, { name: "screenshot" });
          window.close();
          console.log("send");
        });
        break;
      case "annotate-image":
        if (b) return;
        chrome.tabs.getSelected(null, function (c) {
          o(c.id);
          chrome.tabs.sendMessage(c.id, { name: "screenshot" });
          window.close();
          console.log("send");
        });
        break;
      case "screenshot-visible":
        chrome.extension.sendRequest({ action: "visible" });
        window.close();
        break;
      case "screenshot-selected":
        chrome.extension.sendRequest({ action: "selected" });
        window.close();
        break;
      case "screenshot-entire":
        chrome.extension.sendRequest({ action: "entire" });
        window.close();
        break;
      case "annotate-pdf":
        chrome.tabs.getSelected(null, function (c) {
          c.url.substring(c.url.length - 4) == ".pdf"
            ? chrome.tabs.create({ url: "/pdf/viewer.html?file=" + c.url })
            : chrome.tabs.create({ url: "/pdf/viewer.html" });
        });
        break;
      case "share":
        if (b) return;
        getSelectedTab(function (c) {
          o(c.id);
          chrome.tabs.sendMessage(c.id, { name: "share" });
          window.close();
        });
        break;
      case "research-mode":
        if (b) return;
        $("#main").hide();
        $("#bm-main").show();
        y = true;
        v(true);
        M(popCtx);
        break;
      case "search":
        $("#main").hide();
        $("#search-main").show();
        K();
        googleEvent("Chrome extension", "click popup search", "search");
        window.addEventListener(
          "message",
          function (c) {
            console.log(c.data);
            var d = c.data.action;
            if (d == "openUrl") {
              var f = c.data.url;
              chrome.tabs.getSelected(null, function () {
                c.data.ctrl
                  ? chrome.tabs.create({ url: f, active: false })
                  : chrome.tabs.create({ url: f });
              });
            } else if (d == "searchTag") {
              d =
                c.data.tag.indexOf(" ") != -1
                  ? '#"' + c.data.tag + '"'
                  : "#" + c.data.tag;
              $("#search-input").val(d);
              $("#search-btn").trigger("click");
            }
          },
          false
        );
        break;
    }
  });
  $("#search").on("click", function () {
    $("#main").hide();
    $("#search-main").show();
    K();
    googleEvent("Chrome extension", "click popup search", "search");
    window.addEventListener(
      "message",
      function (a) {
        console.log(a.data);
        var b = a.data.action;
        if (b == "openUrl") {
          var c = a.data.url;
          chrome.tabs.getSelected(null, function () {
            a.data.ctrl
              ? chrome.tabs.create({ url: c, active: false })
              : chrome.tabs.create({ url: c });
          });
        } else if (b == "searchTag") {
          b =
            a.data.tag.indexOf(" ") != -1
              ? '#"' + a.data.tag + '"'
              : "#" + a.data.tag;
          $("#search-input").val(b);
          $("#search-btn").trigger("click");
        }
      },
      false
    );
  });
  $("#share").on("click", function () {
    $(this).hasClass("disbaled") ||
      getSelectedTab(function (a) {
        o(a.id);
        chrome.tabs.sendMessage(a.id, { name: "share" });
        window.close();
      });
  });
  $("#read-later").on("click", function () {
    $(this).hasClass("disbaled") ||
      getSelectedTab(function (a) {
        o(a.id);
        var b = $("#read-later").hasClass("unread") ? true : false;
        chrome.tabs.sendMessage(a.id, { name: "readlater", ifUnread: b });
        console.log("readlater");
        window.close();
      });
  });
  $("#action #more").on("click", function () {
    $(this).parents(".bottom-area").toggleClass("unfold");
  });
  $("#screenshot-main")
    .find(".back")
    .on("click", function () {
      $("#screenshot-main").hide();
      $("#main").show();
    });
  $("#tag-edit").on("click", function () {
    chrome.tabs.create({ url: "https://www.diigo.com/cloud/" + p });
  });
  $("#remove").on("click", function () {
    chrome.tabs.getSelected(null, function (a) {
      chrome.tabs.sendMessage(a.id, { name: "qdeletebookmark" });
      window.close();
    });
  });
  $("#show-url")
    .on("click", function () {
      $("#diigobm-url-input").toggle();
    })
    .Gtooltip({ position: "top" });
  $("#tag-cloud-icon").on("click", function () {
    $("#tag-cloud").toggle();
  });
  $("#research-mode-checkbox").on("change", function () {
    if ($(this).prop("checked"))
      if (!j.GlobalData.permissions.autoShowAnnotation) {
        $(this).prop("checked", false);
        chrome.tabs.create({ url: "researchMode.html" });
        return;
      }
    chrome.storage.local.set({ researchMode: $(this).prop("checked") });
    $(this).prop("checked") &&
      chrome.storage.local.get("researchModeData", function (a) {
        if (typeof a.researchModeData === "undefined") {
          $(this).prop("checked", false);
          $("#main").hide();
          $("#bm-main").show();
          v(true);
          M(popCtx);
        }
      });
  });
});
