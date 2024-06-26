var popCtx = { groupTagsDict: {} },
  username,
  inResearchMode = false,
  ac,
  GlobalData = null,
  _url = getParameterByName("url"),
  _title = getParameterByName("title");
function isInResearchMode() {
  return $("#op-focus").prop("checked");
}
function sendMessage(a) {
  window.parent.postMessage(a, "*");
}
chrome.runtime.sendMessage({ name: "initialData" }, function (a) {
  GlobalData = a.globalData;
  initBookmarkWindow();
  sendMessage({ type: "ifbookmark" });
});
window.addEventListener("message", receiveMessage, false);
function receiveMessage(a) {
  a = a.data;
  switch (a.type) {
    case "sendCtx":
      popCtx = $.extend(popCtx, a.data);
      objectToform(popCtx);
      break;
    case "sendRetags":
      showTags("recommended", a.data);
      break;
    case "updateGroupTag":
      popCtx.groupTagsDict = a.data;
      a = $("#diigobm-group").find(".content").attr("data-id");
      showTags("group", popCtx.groupTagsDict[a]);
      break;
    case "listCreateSuccessAndUpdateLists":
      updateLists({ list: a.lists, outliners: a.outliners });
      a = a.newlist;
      var b = $("#diigobm-list");
      b.find(".content").text(a.title).attr("data-id", a.id);
      b.removeClass("focused");
      b.find(".add-box").hide().find("input").val("");
      b.find(".search-box").show();
      break;
    case "listCreateFailureAndUpdateLists":
      $("#diigobm-list-addBtn").parent().removeClass("processing");
      break;
  }
}
chrome.runtime.onMessage.addListener(function (a) {
  if (a.name == "updateLists") updateLists(a.data);
  else if (a.name == "updateGroups") updateGroups(a.data);
  else if (a.name == "listCreateSuccessAndUpdateLists") {
    updateLists({ list: a.lists, outliners: a.outliners });
    a = a.newlist;
    var b = $("#diigobm-list");
    b.find(".content").text(a.title).attr("data-id", a.id);
    b.removeClass("focused");
    b.find(".add-box").hide().find("input").val("");
    b.find(".search-box").show();
  } else
    a.name == "listCreateFailureAndUpdateLists" &&
      $("#diigobm-list-addBtn").parent().removeClass("processing");
});
$("#tag-edit").on("click", function () {
  chrome.tabs.create({ url: "https://www.diigo.com/cloud/" + username });
});
$("#remove").on("click", function () {
  sendMessage({ type: "qdeletebookmark" });
});
$("#show-url")
  .on("click", function () {
    $("#diigobm-url-input").toggle();
  })
  .Gtooltip({ position: "top" });
$("#tag-cloud-icon")
  .on("click", function () {
    $("#tag-cloud").toggle();
  })
  .Gtooltip({ positon: "top" });
$("#diigo-acache-field").on("click", function () {
  sendMessage({ type: "showMHTMLinfo" });
});
function triggerEvent(a, b) {
  var d = new Event(b);
  a.dispatchEvent || (a = a[0]);
  a.dispatchEvent(d);
}
function inList(a) {
  return some(popCtx.bm.lists, function (b) {
    return b.id == a;
  });
}
function inOutliner(a) {
  return some(popCtx.bm.outliners, function (b) {
    return b.id == a;
  });
}
function inGroup(a) {
  return some(popCtx.bm.groups, function (b) {
    return b.name == a;
  });
}
function getParameterByName(a, b) {
  if (!b) b = window.location.href;
  a = a.replace(/[\[\]]/g, "\\$&");
  var d = RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(b);
  if (!d) return null;
  if (!d[2]) return "";
  return decodeURIComponent(d[2].replace(/\+/g, " "));
}
function toggleTag(a, b) {
  var d = $("#diigobm-tag-input"),
    e = ParseTags.parseTags(d.val(), true),
    g = $.inArray(a, e);
  if (b === undefined) g >= 0 ? e.splice(g, 1) : e.push(a);
  else if (b) g == -1 && e.push(a);
  else g >= 0 && e.splice(g, 1);
  e = ParseTags.unparseTags(e);
  if (e.length) e += " ";
  d.val(e);
  placeCursorAtLast(d[0]);
  updateTagStatus();
}
function updateTagStatus() {
  var a = $("#diigobm-tag-input"),
    b = ParseTags.parseTags(a.val(), true);
  $("#tag-cloud-container")
    .find(".Diigo-Bookmark-Tag-item")
    .each(function () {
      var d = $(this),
        e = d.text();
      $.inArray(e, b) != -1
        ? d.addClass("selected")
        : d.removeClass("selected");
    });
  $("#diigobm-recent-tag, #diigobm-recommend-tag, #diigobm-group-tag")
    .find(".diigo-tag")
    .each(function () {
      var d = $(this),
        e = d.text();
      $.inArray(e, b) != -1
        ? d.addClass("selected")
        : d.removeClass("selected");
    });
}
function placeCursorAtLast(a) {
  var b = a.value.length;
  setTimeout(function () {
    placeInputCursor(a, b);
  }, 13);
}
function placeInputCursor(a, b) {
  a.focus();
  if (a.createTextRange) {
    var d = a.createTextRange();
    d.move("character", b);
    d.select();
  } else if (a.selectionStart >= 0) {
    a.focus();
    a.setSelectionRange(b, b);
  }
}
function showTags(a, b) {
  if (a == "recommended") {
    b = b.filter(function (f) {
      return $.inArray(f, popCtx.mytag) >= 0;
    });
    b = popCtx.lastUsedTags.concat(b);
    if (b.length == 0) return;
    else $("#diigobm-recommend-tag").show();
  }
  for (var d = document.createDocumentFragment(), e = 0; e < b.length; e++) {
    var g = document.createElement("div");
    g.className = "diigo-tag";
    g.innerText = b[e];
    $(g).toggleClass("selected", $.inArray(b[e], popCtx.bm.tags) >= 0);
    d.appendChild(g);
  }
  if (a == "recommended") $(d).appendTo($("#diigobm-recommend-tag"));
  else if (a == "group") {
    $("#diigobm-group-tag").find(".loading").hide();
    $("#diigobm-group-tag").find(".diigo-tag").remove();
    $(d).appendTo($("#diigobm-group-tag"));
  }
}
function isURL(a) {
  return /^(https|http|ftp|rtsp|mms)+:\/\//.test(a) ? true : false;
}
function formToObject() {
  var a = true,
    b = $("#diigobm-url-input").val();
  if ($("#diigobm-title-input").val().match(/^\s*$/)) {
    a = false;
    $("#diigobm-title").find(".diigo-alert-tip").show();
  }
  if (!isURL(b) || b.match(/^\s*$/))
    if (a == true) {
      a = false;
      $("#diigobm-url").find(".diigo-alert-tip").show();
    }
  if (a != false) {
    a = {};
    a.title = $("#diigobm-title-input").val();
    if (a.title.match(/^\s*$/)) a.title = popCtx.bm.title;
    a.url = $("#diigobm-url-input").val();
    if (a.url.match(/^\s*$/) || !isURL(a.url)) a.url = popCtx.bm.url;
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
    chrome.runtime.sendMessage({
      name: "saveBookmarkFromBookmarkWin",
      data: {
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
      },
    });
    setTimeout(function () {
      sendMessage({ type: "closeWin" });
    }, 500);
  }
}
function getTagScale(a) {
  var b = [];
  a.sort(function (c, h) {
    return c.count <= h.count ? 1 : -1;
  });
  a = a.slice(0, 101);
  var d = a[0].count,
    e = a.length;
  a.sort(function (c, h) {
    return c.name.toLowerCase() <= h.name.toLowerCase() ? -1 : 1;
  });
  for (var g = 0; g < e; g++) b[g] = a[g].count;
  b = arrayUnique(b);
  e = b.length;
  b.sort(function (c, h) {
    return c < h ? 1 : -1;
  });
  var f = Math.ceil(e / 10);
  e = b.slice(1, 1 + f);
  g = b.slice(1 + f, 1 + 2 * f);
  b = b.slice(1 + 2 * f, 1 + 3 * f);
  return { topTags: a, maxCount: d, first: e, second: g, third: b };
}
function updateBookmark(a) {
  if (inResearchMode !== true)
    if (a.generated == true) {
      var b = a.bm;
      a.unread === true &&
        $("#read-later").addClass("unread").text("Mark as Read");
      $("#onload").hide();
      if (b.saved == true) {
        $("#remove").show();
        $("#remove").attr(
          "data-gtooltip",
          "Saved " + b.datetime + ". Click to remove"
        );
        $("#bookmark-save").text("Edit").addClass("saved");
        $("#cached")
          .show()
          .unbind("click")
          .bind("click", function () {
            getSelectedTab(function (d) {
              var e =
                "https://www.diigo.com/cached?url=" + encodeURIComponent(d.url);
              chrome.tabs.create({ url: e, index: d.index + 1 });
            });
          });
      }
      if (b != undefined) {
        $("#diigobm-title-input").val(b.title).trigger("input");
        triggerEvent($("#diigobm-title-input"), "change");
        $("#diigobm-url-input").val(b.url);
      } else {
        $("#diigobm-title-input").val(window.parent.document.title);
        $("#diigobm-url-input").val(tab.url);
      }
      b.mode == 2 && $("#op-private").prop("checked", true);
      b.unread == true && $("#op-readlater").prop("checked", true);
      a = ParseTags.unparseTags(b.tags);
      blank(a) || $("#diigobm-tag-input").val(a + " ");
    }
}
function initBookmarkWindow(a) {
  $("#research-mode-notification").hide();
  if (a) {
    $("#top-bar")
      .find("span")
      .text("Focused Research")
      .end()
      .find("div")
      .hide();
    $("#diigobm-title,#diigobm-url,#op-cache,#diigobm-recommend-tag").hide();
    chrome.storage.local.get("isShowResearchTip", function (c) {
      if (
        typeof c.isShowResearchTip === "undefined" ||
        c.isShowResearchTip != false
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
    var c = $("#diigobm-url");
    if (b) c.toggleClass("mac-unfold");
    else
      c.hasClass("unfold")
        ? c.addClass("fold").removeClass("unfold")
        : c.addClass("unfold").removeClass("fold");
  });
  autoTextarea.init(document.getElementById("diigobm-title-input"), 40);
  autoTextarea.init(document.getElementById("diigobm-des-input"), 80);
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
  $("#recommend-tag").on("click", function (c) {
    c.preventDefault();
    $("#diigobm-recommend-tag")
      .find(".diigo-tag")
      .each(function () {
        $(this).trigger("click");
      });
  });
  $("#diigobm-recent-tag").on("click", "a", function () {
    $("#diigobm-recent-tag")
      .find(".diigo-tag")
      .each(function () {
        toggleTag($(this).addClass("selected").text(), true);
      });
  });
  $("#diigobm-options,#Diigo-Bookmark-checkShareExisting").on(
    "click",
    ".op-checkbox-container",
    function () {
      $(this).toggleClass("checked");
    }
  );
  $("#bm-main").on("keydown", function (c) {
    if (c.keyCode == 13)
      c.target.id == "diigobm-tag-input" &&
        !$("#diigolet-ac").is(":visible") &&
        formToObject();
    else if (c.keyCode == 83 && (c.ctrlKey || c.metaKey)) {
      c.preventDefault();
      formToObject();
    } else c.keyCode == 27 && window.close();
  });
  $("#op-cache").find(".op-checkbox-container").removeClass("checked");
  $("#remove").Gtooltip();
  $("#close")
    .Gtooltip()
    .on("click", function () {
      sendMessage({ type: "closeWin" });
    });
  a = [];
  var d = popCtx.myTagsWithCount
    ? popCtx.myTagsWithCount
    : GlobalData.myTagsWithCount;
  d.sort(function (c, h) {
    return c.count <= h.count ? 1 : -1;
  });
  for (var e = d.length, g = 0; g < e; g++) a[g] = d[g].name;
  a = {
    resultsClass: "diigolet ac_results",
    data: a,
    mode: "multiple",
    multipleSeparator: " ,",
    id: "diigolet-ac",
  };
  try {
    new AutoComplete("#diigobm-tag-input", a);
  } catch (f) {
    debug(f);
  }
  $("#diigobm-tag-input").bind("input", function () {
    updateTagStatus();
  });
  $("#diigobm-list-addInput").on("focus", function () {
    $("#diigobm-list-add .diigo-alert-tip").hide();
  });
  $("#close-upgrade-info").on("click", function () {
    $("#upgrade-info").hide();
  });
  $("#diigobm-list-addBtn").on("click", function () {
    if (!$(this).parent().hasClass("processing"))
      if (GlobalData.permissions.createOutliner) {
        var c = $("#diigobm-list-addInput").val(),
          h = $("#diigobm-list-add .diigo-alert-tip"),
          i = [],
          k = popCtx.lists.length,
          j;
        for (j = 0; j < k; j++) i.push(popCtx.lists[j].title);
        if (c.match(/^\s*$/)) {
          h.show().find("span").text("Input a name");
          $("#diigobm-list-addInput").focus();
        } else if ($.inArray(c, i) !== -1)
          h.show().find("span").text("Name existed !");
        else {
          $(this).parent().addClass("processing");
          sendMessage({ type: "createList", data: c });
        }
      } else $("#upgrade-info").show();
  });
  $("#diigobm-list-addCancel").on("click", function () {
    $("#diigobm-list-add .diigo-alert-tip").hide();
    $("#diigobm-list-add").hide();
    $("#diigobm-list").show();
    $("#diigobm-list-addInput").val("");
  });
  $("#w-upgrade").on("click", function (c) {
    c.preventDefault();
    googleEvent(
      "Chrome extension",
      "Click upgrade from outliner creation",
      "outliner"
    );
    chrome.tabs.create({ url: "https://www.diigo.com/premium?f=outliner" });
    $("#diigobm-list-add-tip").hide();
    $("#diigobm-list").show();
  });
  $("#w-cancel").on("click", function (c) {
    c.preventDefault();
    $("#diigobm-list-add-tip").hide();
    $("#diigobm-list").show();
  });
  $("#diigobm-recent-tag,#diigobm-recommend-tag,#diigobm-group-tag").on(
    "click",
    "div",
    function (c) {
      /diigo\-tag/.test(c.target.className) && toggleTag($(this).text());
    }
  );
  $("#diigobm-saveBtn").on("click", function () {
    isInResearchMode() ? saveResearchMode(formToObject) : formToObject();
  });
  $("#bottom").on("click", function (c) {
    switch (c.target.id) {
      case "diigobm-saveBtn":
        isInResearchMode() ? saveResearchMode(formToObject) : formToObject();
        break;
      case "diigobm-cancelBtn":
        window.close();
        break;
    }
  });
  $("#diigobm-tag-input").focus();
  $("#refresh-outliner,#refresh-group").on("click", function () {
    $(this).addClass("processing");
    sendMessage({ type: "refreshMyStuff" });
  });
}
function saveResearchMode(a) {
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
function objectToform(a) {
  var b = a.bm;
  a.generated === true && $("#onload").hide();
  if (b.saved == true) {
    $("#remove").show();
    $("#top-bar").find(".top-bar-title").text("Edit bookmark");
  }
  $("#remove").attr(
    "data-gtooltip",
    "Saved " + b.datetime + ". Click to remove"
  );
  if (b != undefined) {
    $("#diigobm-title-input").val(b.title);
    triggerEvent($("#diigobm-title-input"), "change");
    $("#diigobm-url-input").val(b.url);
    _title && $("#diigobm-title-input").val(_title);
    _url && $("#diigobm-url-input").val(_url);
  } else
    chrome.tabs.getSelected(function (g) {
      $("#diigobm-title-input").val(g.title);
      triggerEvent($("#diigobm-title-input"), "change");
      $("#diigobm-url-input").val(g.url);
    });
  b.mode == 2 && $("#op-private").prop("checked", true);
  b.saved == false &&
    localStorage["prefs.bookmark.privateByDefault"] == "true" &&
    $("#op-private").prop("checked", true);
  if (
    b.unread == true ||
    (b.saved == false &&
      localStorage["prefs.bookmark.unreadByDefault"] == "true")
  )
    $("#op-readlater").prop("checked", true);
  if (b.description.length > 0) {
    $("#diigobm-des-input").text(b.description).trigger("change");
    triggerEvent($("#diigobm-des-input"), "change");
  } else if (a.selection) {
    $("#diigobm-des-input").text('"' + a.selection + '"');
    triggerEvent($("#diigobm-des-input"), "change");
  }
  var d = ParseTags.unparseTags(b.tags);
  blank(d) || $("#diigobm-tag-input").val(d + " ");
  updateLists({ list: a.lists, outliners: a.outliners }, false);
  updateGroups(a.groups, false);
  updateTagStatus();
  $("#diigobm-recommend-tag").find(".diigo-tag").length == 0 &&
    sendMessage({ type: "getRecommendedTags" });
  buildTagCloud(a.myTagsWithCount);
  chrome.storage.local.get(null, function (g) {
    console.log(g);
    if (g.researchMode === true) {
      inResearchMode = true;
      $("#op-focus").prop("checked", true);
      $("#top-bar").find(".focus-research-tip").show();
      b.saved === false && fillReasearchModeData(g, b.mode);
    }
  });
  if (
    localStorage.openedOutlinerId &&
    localStorage["prefs.outlinerIcon"] == "true"
  ) {
    a = localStorage.openedOutlinerId;
    d = $("#diigobm-list");
    var e = d.find(".menu-item[data-id=" + a + "]").text();
    d.find(".content").text(e).attr("data-id", a).end().addClass("inputed");
  }
}
function updateTagStatus() {
  var a = $("#diigobm-tag-input"),
    b = ParseTags.parseTags(a.val(), true);
  $("#tag-cloud-container")
    .find(".Diigo-Bookmark-Tag-item")
    .each(function () {
      var d = $(this),
        e = d.text();
      $.inArray(e, b) != -1
        ? d.addClass("selected")
        : d.removeClass("selected");
    });
  $("#diigobm-recent-tag, #diigobm-recommend-tag, #diigobm-group-tag")
    .find(".diigo-tag")
    .each(function () {
      var d = $(this),
        e = d.text();
      $.inArray(e, b) != -1
        ? d.addClass("selected")
        : d.removeClass("selected");
    });
}
function updateLists(a, b) {
  $("#refresh-outliner").removeClass("processing");
  var d = a.list,
    e = a.outliners,
    g = $("#diigobm-list").find(".item-container");
  g.empty();
  if (e.length) {
    $('<div class="menu-title">Outliners</div>').appendTo(g);
    forEach(e, function (c) {
      var h = inOutliner(c.id) ? c.title + " (added)" : c.title;
      $(
        '<div class="menu-item" data-id="' + c.id + '">' + h + "</div>"
      ).appendTo(g);
    });
  }
  if (d.length) {
    $('<div class="menu-title">Lists</div>').appendTo(g);
    forEach(d, function (c) {
      var h = inList(c.id) ? c.title + " (added)" : c.title;
      $(
        '<div class="menu-item" data-id="' + c.id + '">' + h + "</div>"
      ).appendTo(g);
    });
  }
  var f = $("#diigobm-list")
    .find("select")
    .empty()
    .unbind()
    .removeClass("processing");
  f.append(Utils.dom.buildOne("option", { value: 0 }, ["Add to an Outliner"]));
  f.append(Utils.dom.buildOne("option", { value: -1 }, [Array(20).join("-")]));
  $(
    Utils.dom.buildOne("option", { value: -2 }, ["Create an Outliner..."])
  ).appendTo(f);
  f.append(Utils.dom.buildOne("option", { value: -1 }, [Array(20).join("-")]));
  forEach(e, function (c) {
    b
      ? f.append(Utils.dom.buildOne("option", { value: c.id }, [c.title]))
      : f.append(
          Utils.dom.buildOne("option", { value: c.id }, [
            c.title + (inList(c.id) ? " (added)" : ""),
          ])
        );
  });
  f.append(Utils.dom.buildOne("option", { value: -1 }, [Array(20).join("-")]));
  if (d.length) {
    f.append(Utils.dom.buildOne("option", { value: -8 }, ["Add to a List"]));
    f.append(
      Utils.dom.buildOne("option", { value: -1 }, [Array(20).join("-")])
    );
    forEach(d, function (c) {
      b
        ? f.append(Utils.dom.buildOne("option", { value: c.id }, [c.title]))
        : f.append(
            Utils.dom.buildOne("option", { value: c.id }, [
              c.title + (inList(c.id) ? " (added)" : ""),
            ])
          );
    });
  }
  f.append(Utils.dom.buildOne("option", { value: -1 }, [Array(20).join("-")]));
  $(Utils.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(f);
  f.change(function () {
    var c = f.val();
    if (c == -2) {
      if (GlobalData.permissions.createOutliner === true) {
        $("#diigobm-list-add").show();
        $("#diigobm-list").hide();
        $("#diigobm-list-addInput").focus();
      } else {
        $("#diigobm-list-add-tip").show();
        $("#diigobm-list").hide();
      }
      f.val(0);
      f.remvoeClass("selected");
    } else if (c == -3) {
      $(this).addClass("processing");
      chrome.tabs.getSelected(null, function (h) {
        chrome.tabs.sendMessage(h.id, { name: "refreshMyStuff" });
      });
      f.val(-1);
    }
  });
  f.val(0).change();
}
function updateGroups(a, b) {
  $("#refresh-group").removeClass("processing");
  var d = a.filter(function (c) {
      return c.access_mode < 5;
    }),
    e = a.filter(function (c) {
      return c.access_mode >= 5;
    }),
    g = $("#diigobm-group").find(".item-container");
  g.empty();
  if (e.length) {
    $('<div class="menu-title">Teams</div>').appendTo(g);
    forEach(e, function (c) {
      var h = inGroup(c.name) ? c.displayName + " (shared)" : c.displayName;
      $('<div class="menu-item" data-id="' + c.name + '">' + h + "</div>")
        .on("click", function () {
          var i = c.name;
          if (popCtx.groupTagsDict[i] != undefined)
            showTags("group", popCtx.groupTagsDict[i]);
          else {
            $("#diigobm-group-tag").show();
            sendMessage({ type: "loadGroupTagsDictionary", groupName: i });
          }
        })
        .appendTo(g);
    });
  }
  if (d.length) {
    $('<div class="menu-title">Groups</div>').appendTo(g);
    forEach(d, function (c) {
      var h = inGroup(c.name) ? c.displayName + " (shared)" : c.displayName;
      $('<div class="menu-item" data-id="' + c.name + '">' + h + "</div>")
        .on("click", function () {
          var i = c.name;
          if (popCtx.groupTagsDict[i] != undefined)
            showTags("group", popCtx.groupTagsDict[i]);
          else {
            $("#diigobm-group-tag").show();
            sendMessage({ type: "loadGroupTagsDictionary", groupName: i });
          }
        })
        .appendTo(g);
    });
  }
  var f = $("#diigobm-group")
    .find("select")
    .empty()
    .unbind()
    .removeClass("processing");
  if (e.length > 0) {
    f.append(Utils.dom.buildOne("option", { value: 0 }, ["Share to a Team"]));
    f.append(
      Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
    );
    forEach(e, function (c) {
      b
        ? f.append(
            Utils.dom.buildOne("option", { value: c.name }, [c.displayName])
          )
        : f.append(
            Utils.dom.buildOne("option", { value: c.name }, [
              c.displayName + (inGroup(c.name) ? " (shared)" : ""),
            ])
          );
    });
    f.append(
      Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")])
    );
  }
  f.append(Utils.dom.buildOne("option", { value: 0 }, ["Share to a Group"]));
  f.append(Utils.dom.buildOne("option", { value: -1 }, [Array(20).join("-")]));
  $(
    Utils.dom.buildOne("option", { value: -2 }, ["Create a Group..."])
  ).appendTo(f);
  f.append(Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")]));
  forEach(d, function (c) {
    b
      ? f.append(
          Utils.dom.buildOne("option", { value: c.name }, [c.displayName])
        )
      : f.append(
          Utils.dom.buildOne("option", { value: c.name }, [
            c.displayName + (inGroup(c.name) ? " (shared)" : ""),
          ])
        );
  });
  f.append(Utils.dom.buildOne("option", { value: -5 }, [Array(20).join("-")]));
  $(Utils.dom.buildOne("option", { value: -3 }, ["Refresh"])).appendTo(f);
  f.change(function () {
    var c = f.val();
    if (c == -2) {
      chrome.tabs.create({ url: "https://groups.diigo.com/create" });
      f.val(-1);
    } else if (c == -3) {
      $(this).addClass("processing");
      chrome.tabs.getSelected(null, function (h) {
        chrome.tabs.sendMessage(h.id, { name: "refreshMyStuff" });
      });
      f.val(-1);
    }
    if (c != 0 && c != -1 && c != -2 && c != -3) {
      $("#diigosc-group-tag").show();
      popCtx.isAnnotated && $("#bottom").find("div:first-child").show();
      $("#Diigo-Bookmark-checkShareExisting").show();
      if (popCtx.groupTagsDict[c] != undefined)
        showTags("group", popCtx.groupTagsDict[c]);
      else {
        $("#diigobm-group-tag").show();
        chrome.tabs.getSelected(null, function (h) {
          chrome.tabs.sendMessage(h.id, {
            name: "loadGroupTagsDictionary",
            groupName: c,
          });
        });
      }
    }
  });
  f.val(0).change();
}
function fillReasearchModeData(a, b) {
  var d = a.researchModeData;
  d._private === true || b == 2
    ? $("#op-private").prop("checked", true)
    : $("#op-private").prop("checked", false);
  d.unread === true && $("#op-readlater").prop("checked", true);
  d.cache && d.cache === true && $("#op-cache").prop("checked", true);
  var e = ParseTags.unparseTags(d.tags);
  $("#diigobm-tag-input").val(e);
  updateTagStatus();
  if (d.outliner) {
    var g = $("#diigobm-list");
    e = g.find(".menu-item[data-id=" + d.outliner + "]").text();
    g.find(".content")
      .text(e)
      .attr("data-id", d.outliner)
      .end()
      .addClass("inputed");
  }
  if (d.group) {
    g = $("#diigobm-group");
    e = g.find(".menu-item[data-id=" + d.group + "]").text();
    g.find(".content")
      .text(e)
      .attr("data-id", d.group)
      .end()
      .addClass("inputed");
  }
}
function buildTagCloud(a) {
  if (a.length == 0) {
    var b = document.getElementById("tag-cloud-container");
    a = document.createElement("div");
    a.id = "no-tag";
    a.innerHTML = "You haven't create any tags yet,:)";
    b.appendChild(a);
  } else if (!($("#tag-cloud-container").find("a").length > 0)) {
    var d = getTagScale(a);
    b = d.topTags;
    var e = d.maxCount;
    a = d.first;
    var g = d.second,
      f = d.third,
      c = b.length;
    d = document.createDocumentFragment();
    for (var h = 0; h < c; h++) {
      var i = document.createElement("a");
      i.className = "Diigo-Bookmark-Tag-item";
      i.href = "#";
      i.innerText = b[h].name;
      var k = b[h].count;
      if (k == e) {
        i.style.fontSize = "20px";
        i.style.fontWeight = "bold";
      }
      a.forEach(function (j) {
        if (k == j) {
          i.style.fontSize = "18px";
          i.style.fontWeight = "bold";
        }
      });
      g.forEach(function (j) {
        if (k == j) {
          i.style.fontSize = "16px";
          i.style.fontWeight = "bold";
        }
      });
      f.forEach(function (j) {
        if (k == j) {
          i.style.fontSize = "16px";
          i.style.fontWeight = "regular";
        }
      });
      d.appendChild(i);
    }
    b = document.getElementById("tag-cloud-container");
    b.appendChild(d);
    $("#tag-cloud-container").on("click", "a", function (j) {
      /Diigo\-Bookmark\-Tag\-item/.test(j.target.className) &&
        toggleTag($(this).text());
    });
    updateTagStatus();
  }
}
