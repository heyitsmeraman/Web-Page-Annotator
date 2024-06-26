var D = window.D || {},
  newClickVersion = "3.3.91";
function getSelectedTab(a) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (b) {
    a(b[0]);
  });
}
ram
var doc_html = "",
  readerData = {};
D.useConfig = function (a) {
  D.config = {
    cn: {
      TOOLBAR_SERVER: "https://toolbar3.diigo.cn",
      UPLOAD_SERVER: "https://www.diigo.cn",
      DOMAIN: "diigo.cn",
    },
    www: {
      TOOLBAR_SERVER: "https://toolbar3.diigo.com",
      UPLOAD_SERVER: "https://www.diigo.com",
      DOMAIN: "diigo.com",
    },
    preview: {
      TOOLBAR_SERVER: "https://preview.diigo.com",
      UPLOAD_SERVER: "https://preview.diigo.com",
      DOMAIN: "diigo.com",
    },
  }[{ dev: "cn", dev1: "preview", dev2: "www" }[a] || a];
  if (/dev/.test(a)) D.config.dontUseGA = true;
};
var GlobalData;
function resetGlobalData() {
  GlobalData = {
    signedIn: false,
    user: "",
    userId: null,
    realName: "",
    userLevel: 0,
    myTags: [],
    myTagsWithCount: [],
    myBmLists: [],
    myGroups: [],
    myContacts: [],
    permissions: {
      capture: true,
      image: true,
      premium: true,
      snapshot: true,
      highlight: true,
    },
  };
}
var SignInManager = (D.SignInManager = {
    checkSignInCookie: function (a) {
      var b = this;
      chrome.cookies.get(
        { url: "https://www.diigo.com", name: "diigoandlogincookie" },
        function (c) {
          if (c) var d = c.value.split("-.-")[1];
          b.onUsernameSeen(d);
          a && a();
        }
      );
    },
    onUsernameSeen: function (a) {
      if (a)
        if (this.isSignedIn()) {
          if (a != GlobalData.user) {
            this._onSignOut();
            this._onSignIn(a);
          }
        } else this._onSignIn(a);
      else this.isSignedIn() && this._onSignOut();
    },
    isSignedIn: function () {
      return GlobalData.user && GlobalData.signedIn;
    },
    isUserInfoLoaded: function () {
      return this.isSignedIn() && GlobalData.username;
    },
    _onSignIn: function (a) {
      debug("[SignInManager] _onSignIn", a);
      GlobalData.user = a;
      GlobalData.signedIn = true;
      this.loadMyStuff();
      EventMachine.needToReload();
      forEachWebTab(function (b) {
        Messenger.send(b.id, {
          name: "signIn",
          details: { user: a },
          fromTabId: null,
        });
      });
      CrossPromotion.userChanged();
    },
    _onSignOut: function () {
      debug("[SignInManager] _onSignOut", GlobalData.user);
      resetGlobalData();
      chrome.storage.local.remove(["researchModeData", "researchMode"]);
      Preloader.cleanUpAllTabData();
      forEachWebTab(function (a) {
        Messenger.send(a.id, { name: "signOut", fromTabId: null });
      });
    },
    loadMyStuff: function () {
      debug("[SignInManager] loadMyStuff", GlobalData.user);
      new WebAPICall().invoke(
        "user_loadMyStuff",
        {
          what: "myTags myGroups myProfile myBookmarkLists myContacts permissions",
        },
        {
          user: GlobalData.user,
          transId: null,
          complete: function (a) {
            if (a.resp) {
              GlobalData.permissions = a.resp.result.permissions;
              if (
                typeof localStorage["prefs.directlyShowSearchResults"] ===
                  "undefined" &&
                typeof localStorage["prefs.shortcutAnnotate"] !== "undefined"
              )
                if (GlobalData.permissions.autoShowAnnotation) {
                  localStorage["prefs.comboSearch"] = "true";
                  localStorage["prefs.directlyShowSearchResults"] = "true";
                } else
                  localStorage["prefs.directlyShowSearchResults"] = "false";
              var b = a.resp.result.permissions.autoShowAnnotation;
              if (typeof b !== "undefined" && b == false)
                if (localStorage.free_trial_count) {
                  if (
                    localStorage.free_trial_count &&
                    localStorage.free_trial_count >= 100
                  ) {
                    Prefs.set({ "prefs.autoload": false });
                    Prefs.set({ free_trial: false });
                  }
                } else {
                  Prefs.set({ "prefs.autoload": true });
                  Prefs.set({ free_trial: true });
                }
              forEachWebTab(function (c) {
                Messenger.send(c.id, {
                  name: "myStuffLoaded",
                  details: a.resp.result,
                  fromTabId: null,
                });
              });
            }
          },
        }
      );
    },
  }),
  Preloader = (D.Preloader = {
    table: {},
    init: function () {},
    onTabRemoved: function (a) {
      this.cleanUpTabData(a);
    },
    onTabUpdated: function (a, b, c) {
      var d = this;
      if (b.status == "loading") {
        d.table[a] && d.cleanUpTabData(a);
        if (SignInManager.isSignedIn()) {
          b = c.url;
          if (isURLApplicable(b)) {
            var e = new WebAPICall();
            d.table[a] = { api: e, loading: true };
            debug("[Preloader]", "loading for", a, b);
            e.invoke(
              "bm_loadBookmark",
              { url: b, what: "bookmarkInfo annotations pageComments" },
              {
                user: GlobalData.user,
                complete: function (f) {
                  d.table[a].loading = false;
                  if (!f.cancelled)
                    if ((f = f.resp) && f.code == 1) {
                      d.table[a].result = f.result;
                      d.user = f.user;
                      f.result.saved && d.updateBrowserActionIcon(c.id, true);
                      Messenger.send(a, { name: "refreshBookmarkInfo" });
                      Prefs.get("prefs.autoload") == "true" &&
                        d.hasPrivateAnnotation(f.result.annotations, f.user) &&
                        sendRunCommand(a, { type: "autoshow" });
                    }
                },
              }
            );
          }
        }
      } else if (b.status == "complete")
        if (d.table[a]) {
          if (d.table[a].loading != true) {
            b = d.table[a].result;
            Prefs.get("prefs.autoload") == "true" &&
              d.hasPrivateAnnotation(b.annotations, d.user) &&
              sendRunCommand(a, { type: "autoshow" });
          }
        } else console.log(d.table[a]);
    },
    hasPrivateAnnotation: function (a, b) {
      var c = 0,
        d;
      for (d = 0; d < a.length; d++)
        if (a[d].user == b || a[d].onlyInGroup == true) c++;
      return c == 0 ? false : true;
    },
    cleanUpAllTabData: function () {
      for (var a in this.table) this.cleanUpTabData(a);
    },
    cleanUpTabData: function (a) {
      if (this.table[a]) {
        debug("[Preloader] cleaning up", a);
        this.table[a].api.cancel();
        delete this.table[a];
      }
    },
    preloadedResultForTab: function (a) {
      if (this.table[a]) return this.table[a].result;
      return null;
    },
    isPreloadingForTab: function (a) {
      return (a = this.table[a]) && a.loading;
    },
    updateBrowserActionIcon: function (a, b) {
      chrome.browserAction.setIcon({
        tabId: a,
        path: "img/" + (b ? "logo-19-bookmarked.png" : "logo-19.png"),
      });
    },
  });
function isURLApplicable(a, b) {
  var c = parseUri(a),
    d = c.path;
  if (!/^https?$/i.test(c.protocol)) return false;
  if (/\.?diigo\./i.test(c.host))
    if (/^\/annotated\//i.test(d)) return false;
    else if (
      /(player|slides?)\.diigo\./i.test(c.host) &&
      /^\/(list|feed)/i.test(d)
    )
      return false;
    else if (/^\/bookmark\//i.test(d)) return false;
    else if (/^\/user\//i.test(d)) return false;
    else if (/^\/cached/i.test(d)) return false;
    else {
      if (/^\/item\/pdf/i.test(d)) return b ? true : false;
    }
  else if (/^https?:\/\/chrome\.google\.com\/(extensions|webstore)/i.test(a))
    return false;
  return true;
}
var WebAPI = {
  saveBookmark: function (a, b) {
    this.webCall("bm_saveBookmark", a, b);
  },
  createPdfItem: function (a, b) {
    this.webCall("pdf_createItem", a, b);
  },
  refreshStuff: function (a) {
    this.webCall(
      "user_loadMyStuff",
      {
        what: "myTags myGroups myProfile myBookmarkLists myContacts permissions",
      },
      null,
      a
    );
  },
  deleteBookmark: function (a) {
    this.webCall("bm_deleteBookmark", a);
  },
  createList: function (a, b) {
    this.webCall("list_create", { title: a, mode: 2 }, null, b);
  },
  mhtml_upload_done: function (a, b) {
    this.webCall("mhtml_upload_done", a, null, b);
  },
  webCall: function (a, b, c, d) {
    var e = new WebAPICall();
    c != "saveLink" &&
      chrome.browserAction.setIcon({
        tabId: b.tabId,
        path: "/img/doing-icon.png",
      });
    e.invoke(a, b, {
      user: GlobalData.user,
      complete: function (f) {
        console.log(f.status, f.resp);
        if (f)
          if (f.resp.code == 1) {
            if (c != "saveLink") {
              var g =
                "img/" +
                (a == "bm_saveBookmark" || a == "pdf_createItem"
                  ? "logo-19-bookmarked.png"
                  : "logo-19.png");
              console.log("save success", f.resp);
              chrome.browserAction.setIcon({ tabId: b.tabId, path: g });
              if (a == "bm_saveBookmark" || a == "bm_deleteBookmark")
                chrome.tabs.sendMessage(b.tabId, {
                  name: "saveBookmarkSuccess",
                  data: f.resp.result,
                  ctx: b,
                });
              else
                a == "mhtml_upload_done" &&
                  chrome.tabs.sendMessage(b.tabId, {
                    name: "saveMHTMLSuccess",
                    result: f.resp.result,
                  });
            }
            if (d)
              if (a == "list_create") {
                GlobalData.outliners.push(f.resp.result.list);
                GlobalData.outliners.sort(function (h, i) {
                  return h.title > i.title ? 1 : -1;
                });
                console.log(a, d);
                d({
                  outliners: GlobalData.outliners,
                  lists: GlobalData.myBmLists,
                  newOutliner: f.resp.result.list,
                });
              } else if (a == "user_loadMyStuff") {
                extend(GlobalData, f.resp.result);
                d({
                  outliners: GlobalData.outliners,
                  lists: GlobalData.myBmLists,
                  groups: GlobalData.myGroups,
                });
              } else d();
          }
      },
    });
  },
};
function updateTabTable(a, b) {
  var c = Preloader.table[b.tabId].result;
  console.log(c);
  var d = c.bookmarkInfo || {};
  c.saved = true;
  c.url = b.url;
  d.description = b.description;
  d.title = b.title;
  d.unread = b.unread;
  d.mode = b.mode;
  d.tags = b.tags;
}
var Messenger = {
  send: function (a, b, c) {
    debug("bg send msg to", a, b.name, b);
    chrome.tabs.sendMessage(a, b, c);
  },
  onMessage: function (a, b, c) {
    debug("bg recv msg from", b.tab && b.tab.id, a.name, a, b);
    this.handlers[a.name] && this.handlers[a.name](a, b, c);
  },
  handlers: {
    showToolbar: function (a) {
      console.log("show toolbar");
      showToolbar(a.type, a.tabId);
    },
    newtip: function () {
      chrome.browserAction.setBadgeText({ text: "" });
      window.open(
        "https://www.diigo.com/extension/chrome/new.html?v=" + D.version
      );
    },
    annotateAfterSaving: function (a) {
      localStorage["prefs.annotateAfterSaving"] =
        a.data == true ? "true" : "false";
    },
    capture: function (a) {
      chrome.tabs.captureVisibleTab({ format: "png" }, function (b) {
        getSelectedTab(function (c) {
          console.log("send dataURL", a);
          chrome.tabs.sendMessage(c.id, {
            name: "dataURL",
            dataURL: b,
            cw: a.cw,
            ch: a.ch,
            ct: a.ct,
            cl: a.cl,
            target: a.target,
          });
        });
      });
    },
    captureVideo: function (a, b, c) {
      var d = a.scale;
      console.log(d);
      chrome.tabs.captureVisibleTab({ format: "png" }, function (e) {
        var f = document.createElement("canvas"),
          g = f.getContext("2d");
        $(f).attr("width", d.width).attr("height", d.height);
        document.body.appendChild(f);
        var h = new Image();
        h.src = e;
        h.onload = function () {
          g.drawImage(
            h,
            d.left,
            d.top,
            d.width,
            d.height,
            0,
            0,
            d.width,
            d.height
          );
          var i = f.toDataURL();
          console.log(i);
          c(i);
          $(f).remove();
        };
      });
    },
    WebAPI: function (a, b, c) {
      var d = a.details;
      console.log(d.cmd);
      new WebAPICall().invoke(d.cmd, d.data, {
        user: GlobalData.user,
        transId: d.transId,
        isInGroup: d.isInGroup,
        complete: function (e) {
          console.log(d.cmd, e.status, e.resp, c);
          e && c({ status: e.status, resp: e.resp, cmd: e.cmd });
        },
      });
    },
    ifSignIn: function () {
      chrome.cookies.get(
        { url: "https://www.diigo.com", name: "diigoandlogincookie" },
        function (a) {
          a &&
            getSelectedTab(function (b) {
              chrome.tabs.sendMessage(b.id, { name: "SignedIn" });
            });
        }
      );
    },
    doHighlight: function () {
      var a = parseInt(localStorage.free_trial_count);
      a += 1;
      localStorage.free_trial_count = a;
    },
    getLastFocusedWindow: function () {
      getSelectedTab(function (a) {
        console.log("tab", a);
        a.openerTabId &&
          chrome.tabs.get(a.openerTabId, function (b) {
            var c,
              d = RegExp(
                "https?://(?:.+\\.)?google\\.[a-z]{2,3}(?:\\.[a-z]{2})?(?:\\:[0-9]+)?/(?:advanced_)?search.*(([?&]q=)([^&]+))"
              ),
              e = RegExp(
                "https?://(?:.+\\.)?google\\.[a-z]{2,3}(?:\\.[a-z]{2})?(?:\\:[0-9]+)?/(?:webhp[^#]*)?(#((?:.+&)?q=)([^&]+)(.*)&fp=[^&]+)"
              );
            if (d.test(b.url) || e.test(b.url)) {
              debug("it's a google search");
              b = decodeURIComponent(b.url);
              d = RegExp("[&|?]q=(.*?)(&|$|#)", "g");
              b = b.match(d);
              d = b.length;
              for (e = 0; e < d; e++) c = b[e].match(/[&|?]q=(.*?)(&|$|#)/i)[1];
            }
            chrome.tabs.sendMessage(a.id, {
              name: "googleSearchRecommend",
              googleSearchKeyWord: c,
            });
          });
      });
    },
    listCreateSuccess: function (a, b) {
      GlobalData.outliners.push(a.data);
      chrome.tabs.query({}, function (c) {
        c.forEach(function (d) {
          if (d.url === "https://www.diigo.com/outliner")
            chrome.tabs.executeScript(
              d.id,
              { code: "window.postMessage({action: 'refreshPage'}, '*');" },
              function () {
                console.log(d, "notify update list");
              }
            );
          else
            d.id !== b.tab.id &&
              chrome.tabs.sendMessage(d.id, { name: "refreshOutliner" });
        });
      });
    },
    updateGlobalData: function (a, b) {
      var c = {},
        d = a.details;
      for (var e in d) if (d[e] != GlobalData[e]) c[e] = GlobalData[e] = d[e];
      forEachWebTab(function (f) {
        Messenger.send(f.id, {
          name: "globalDataChanged",
          details: { changes: c },
          fromTabId: b.tab.id,
        });
      });
    },
    updatePermission: function (a, b) {
      var c = a.data;
      switch (a.type) {
        case "highlight":
          GlobalData.permissions.annPermission = c;
          break;
        case "image":
          GlobalData.permissions.imagePermission = c;
          break;
        case "pdf":
          GlobalData.permissions.pdfPermission = c;
          break;
      }
      forEachWebTab(function (d) {
        Messenger.send(d.id, {
          name: "globalDataChanged",
          details: { changes: { permissions: GlobalData.permissions } },
          fromTabId: b.tab.id,
        });
      });
    },
    initialData: function (a, b, c) {
      c({
        extensionID: D.extensionID,
        globalData: GlobalData,
        preloadedPrefs: Prefs.get(Prefs.prefsToPreload),
        tabId: b.tab.id,
        version: D.version,
        loadBookmarkResult: Preloader.preloadedResultForTab(b.tab.id),
        shouldLoadBookmarkByMyself: !Preloader.isPreloadingForTab(b.tab.id),
        shoudLoadMyStuff: !GlobalData.realName || EventMachine.needToReload(),
      });
    },
    mytags: function (a, b, c) {
      c(GlobalData.myTags);
    },
    bookmarkChanged: function (a, b) {
      D.Preloader.updateBrowserActionIcon(b.tab.id, a.details.saved);
    },
    updateBrowserActionIconToDoing: function (a, b) {
      chrome.browserAction.setIcon({
        tabId: b.tab.id,
        path: "/img/doing-icon.png",
      });
    },
    saveImageToDiigo: function (a, b) {
      D.saveImageToDiigo(a.details, b.tab, a.Type);
    },
    uploadImageToDiigo: function (a, b) {
      D.saveImageToDiigo(a.src, b.tab, a.type);
    },
    checkIn: function () {},
    activateMeAfterSignIn: function (a, b) {
      D.activateTheTabIdAfterSignIn = b.tab.id;
    },
    createTab: function (a, b) {
      chrome.tabs.create({ url: a.details.url, index: b.tab.index + 1 });
    },
    closeTab: function (a, b) {
      setTimeout(function () {
        chrome.tabs.remove(b.tab.id);
      }, 600);
    },
    saveThisLink: function (a) {
      WebAPI.saveBookmark(a.data, "saveLink");
    },
    saveBookmarkFromBookmarkWin: function (a, b) {
      a.data.tabId = b.tab.id;
      WebAPI.saveBookmark(a.data);
    },
    openWindow: function (a) {
      a = a.details;
      window.open(a.url, a.name, a.features);
    },
    getPrefs: function (a, b, c) {
      a = Prefs.get(a.details.keys);
      c(a);
    },
    setPrefs: function (a, b, c) {
      a = Prefs.set(a.details.data, null, b.tab.id);
      c && c(a);
    },
    getUserData: function (a, b, c) {
      a = Prefs.getUserData(a.details.keys);
      c(a);
    },
    setUserData: function (a, b, c) {
      a = Prefs.setUserData(a.details.data, b.tab.id);
      c && c(a);
    },
    twitterGrabPin: function (a, b) {
      TwitterOAuth.getAccessToken(a.details.pin, b.tab.id);
    },
    twitterCheckAuthentication: function (a, b, c) {
      c(TwitterOAuth.checkAuthentication());
    },
    twitterSend: function (a, b, c) {
      TwitterOAuth.updateStatus(a.details, c);
    },
    twitterChangeUser: function (a, b) {
      D.switchToTabIdAfterTwitterOauth = b.tab.id;
      TwitterOAuth.changeUser();
    },
    twitterConnect: function (a, b) {
      D.switchToTabIdAfterTwitterOauth = b.tab.id;
      TwitterOAuth.changeUser();
    },
    shortenUrl: function (a, b, c) {
      var d = a.details.url;
      debug("[bit.ly short url] making", d);
      $.ajax({
        url:
          "https://api.bit.ly/shorten?version=2.0.1&login=diigo&apiKey=R_051efe0ca04a325db066155db77c2d08&longUrl=" +
          encodeURIComponent(d),
        timeout: 1e4,
        type: "GET",
        complete: function (e, f) {
          if (f == "success") {
            try {
              var g = JSON.parse(e.responseText);
            } catch (h) {
              error("error parsing json from bit.ly", e.responseText);
              c(d);
              return;
            }
            if (g.statusCode == "OK") {
              d = g.results[d].shortUrl;
              debug("[bit.ly url] success", d);
            } else error("[bit.ly url] failure", g);
          } else error("[bit.ly url] failure", e);
          c(d);
        },
      });
    },
    uploadCache: function (a, b) {
      var c = a.details;
      new CachePage({
        urlMD5: c.urlMD5,
        text: c.text,
        html: c.html,
        groups: c.groups,
        tabId: b.tab.id,
        username: GlobalData.user,
        ispdf: c.ispdf,
        pdfurl: c.pdfurl,
      }).start();
    },
    googleEvent: function (a) {
      if (window.ga) {
        a = a.msg;
        window.ga("send", "event", a.eventType, a.action, a.label);
      }
    },
    pickPromotionMessage: function (a, b, c) {
      c(CrossPromotion.pickMessage());
    },
    promotionMessageClicked: function (a) {
      CrossPromotion.messageClicked(a.details.id);
    },
    searchDiigoGoogle: function (a, b) {
      D.searchDiigoGoogle(a.details.text, b.tab);
    },
    copy: function (a) {
      function b(d) {
        var e = document.createElement("textarea");
        document.body.appendChild(e);
        e.value = d;
        e.select();
        document.execCommand("copy");
        document.body.removeChild(e);
      }
      function c(d) {
        var e = document.createElement(e);
        e.innerHTML = d;
        document.body.appendChild(e);
        d = window.getSelection();
        d.removeAllRanges();
        d.selectAllChildren(e);
        document.execCommand("copy");
        d.removeAllRanges();
        document.body.removeChild(e);
      }
      a = a.details;
      if (a.text) b(a.text);
      else a.html && c(a.html);
    },
    changeColor: function (a) {
      localStorage["prefs.lastUsedColor"] = a.color;
    },
    closeComboSearch: function () {
      localStorage["prefs.comboSearch"] = "false";
    },
    getSearchPref: function (a, b, c) {
      c(
        localStorage["prefs.directlyShowSearchResults"] == "true" &&
          GlobalData.permissions.autoShowAnnotation
      );
    },
    openPdf: function (a) {
      a.url.substring(a.url.length - 4) == ".pdf"
        ? chrome.tabs.create({ url: "/pdf/viewer.html?file=" + a.url })
        : chrome.tabs.create({ url: "/pdf/viewer.html" });
    },
    doc_html: function (a, b) {
      chrome.tabs.sendRequest(b.tab.id, { name: "doc_html", data: a });
    },
    openReader: function (a, b) {
      readerData.uri = a.data.uri;
      readerData.body = a.data.body;
      readerData.title = a.data.title;
      chrome.tabs.update(b.tab.id, { url: "/reader.html" });
    },
    refreshBookmark: function (a, b) {
      var c = b.tab.id,
        d = b.tab,
        e = b.tab.url;
      new WebAPICall().invoke(
        "bm_loadBookmark",
        { url: e, what: "bookmarkInfo annotations pageComments" },
        {
          user: GlobalData.user,
          complete: function (f) {
            Preloader.table[c].loading = false;
            if (!f.cancelled)
              if ((f = f.resp) && f.code == 1) {
                Preloader.table[c].result = f.result;
                Preloader.user = f.user;
                f.result.saved && Preloader.updateBrowserActionIcon(d.id, true);
                Messenger.send(c, { name: "refreshBookmark" });
              }
          },
        }
      );
    },
    importKindle: function (a, b) {
      $.ajax({
        type: "POST",
        url: D.config.UPLOAD_SERVER + "/import_all/kindle",
        data: { toolbar_data: JSON.stringify(a.data) },
        success: function () {
          chrome.tabs.sendMessage(b.tab.id, {
            name: "kindleImportSuccess",
            title: a.data.title,
          });
        },
        error: function (c) {
          console.log(c);
          chrome.tabs.sendMessage(b.tab.id, {
            name: "kindleImportFailed",
            title: a.data.title,
          });
        },
      });
    },
    importMHTML: function (a, b) {
      var c = a.details;
      chrome.tabs.sendMessage(b.tab.id, {
        name: "updateNoticeAndToolboar",
        status: "hidden",
      });
      chrome.pageCapture.saveAsMHTML({ tabId: b.tab.id }, function (d) {
        chrome.tabs.sendMessage(b.tab.id, {
          name: "updateNoticeAndToolboar",
          status: "show",
        });
        if (c.mhtml_upload_url) {
          var e = new XMLHttpRequest();
          e.open("PUT", c.mhtml_upload_url, true);
          e.onreadystatechange = function () {
            if (e.readyState == 4)
              if (e.status == 200) {
                e.responseText.replace(/[\r\n]/g, "");
                WebAPI.mhtml_upload_done({
                  link_id: c.link_id,
                  charset: c.charset,
                  tabId: b.tab.id,
                });
              }
          };
          try {
            e.send(d);
          } catch (f) {
            console.log(f);
          }
        }
      });
    },
    addAnnotation: function (a, b) {
      a.annotation &&
        chrome.tabs.sendMessage(b.tab.id, {
          name: "addAnnotation",
          annotation: a.annotation,
        });
    },
    editItem: function (a, b) {
      a.annotation &&
        a.cmd &&
        chrome.tabs.sendMessage(b.tab.id, {
          name: "editItem",
          annotation: a.annotation,
          cmd: a.cmd,
        });
    },
    sample: function () {},
  },
};
function getAllTabs(a) {
  chrome.windows.getAll({ populate: true }, function (b) {
    var c = [];
    b.forEach(function (d) {
      d.tabs.forEach(function (e) {
        c.push(e);
      });
    });
    a(c);
  });
}
function forEachWebTab(a) {
  forEachTab(a, function (b) {
    return /^https?:\/\//.test(b.url);
  });
}
function forEachTab(a, b) {
  getAllTabs(function (c) {
    c.forEach(function (d) {
      if (!b || b(d)) a(d);
    });
  });
}
function broadcastMessage(a) {
  chrome.windows.getAll({ populate: true }, function (b) {
    b.forEach(function (c) {
      c.tabs.forEach(function (d) {
        Messenger.send(d.id, a);
      });
    });
  });
}
function executeContentScripts(a, b, c) {
  function d() {
    if (e < b.length) {
      debug("executing " + b[e]);
      chrome.tabs.executeScript(a, { file: b[e++] }, d);
    } else c && c();
  }
  var e = 0;
  d();
}
function getExtensionVersion() {
  return chrome.runtime.getManifest().version;
}
function sendRunCommand(a, b) {
  Messenger.send(a, {
    name: "run",
    details: extend(
      { extensionID: D.extensionID, version: D.version, logLevel: D.logLevel },
      b || {}
    ),
  });
}
function showWindow() {
  getSelectedTab(function (a) {
    chrome.tabs.sendMessage(a.id, { name: "showWindow" });
  });
}
function showToolbar(a, b) {
  if (typeof b != "undefined") {
    chrome.tabs.executeScript(b, { file: "js/checkTab.js" }, function () {
      debug("executeScript callback");
    });
    EventMachine.onActivate();
    sendRunCommand(b, { userClick: true, type: a });
  } else
    getSelectedTab(function (c) {
      if (/^https?:\/\/chrome\.google\.com\/(extensions|webstore)/i.test(c.url))
        alert(chrome.i18n.getMessage("alertGallery"));
      else if (isURLApplicable(c.url)) {
        chrome.tabs.executeScript(
          c.id,
          { file: "js/checkTab.js" },
          function () {
            debug("executeScript callback");
          }
        );
        EventMachine.onActivate();
        sendRunCommand(c.id, { userClick: true, type: a });
      } else alert(chrome.i18n.getMessage("alertUnsupportedPage"));
    });
}
function init() {
  D.logLevel = localStorage.logLevel || "never";
  D.version = getExtensionVersion();
  localStorage.version &&
    localStorage.newClickVersion != newClickVersion &&
    chrome.browserAction.setBadgeText({ text: "New" });
  if (localStorage.version != D.version)
    if (
      localStorage.version &&
      Upgrader.isVersionBefore(localStorage.version, "3.3.30")
    ) {
      localStorage["prefs.autoload"] = "true";
      localStorage["prefs.autoloadBookmarkStatus"] = "true";
    }
  D.extensionID = chrome.extension.getURL("").match(/:\/\/(\w+)\//)[1];
  Upgrader.check();
  Prefs.setDefaultPrefs();
  resetGlobalData();
  SignInManager.checkSignInCookie();
  TwitterOAuth.init();
  EventMachine.init();
  D.Preloader.init();
  ContextMenu.init();
  ComboSearch.init();
  CrossPromotion.init();
  chrome.runtime.onMessage.addListener(function (a, b, c) {
    console.log("[request name]", a.name);
    if (
      !(
        a.name == "sendCtx" ||
        a.name == "saved" ||
        a.name == "sendRetags" ||
        a.name == "updateGroups" ||
        a.name == "updateLists"
      )
    ) {
      Messenger.onMessage(a, b, c);
      return true;
    }
  });
  chrome.tabs.onUpdated.addListener(function (a, b, c) {
    b.url == "https://www.diigo.com/chrome_diigo_extension_done" &&
      chrome.tabs.remove(c.id);
    /https:\/\/www.diigo.com\/user\/(.*)\?from=extension/.test(c.url) &&
      b.status == "complete" &&
      chrome.tabs.sendMessage(a, { name: "showTutorial" });
    /https:\/\/www.diigo.com/.test(c.url);
    if (
      b.status == "complete" &&
      /diigo\.(com|cn)\/images\/diigo-logo.png#SIGNED_IN/i.test(c.url)
    ) {
      debug("[Sign in tab opened by extension detected!]", a, b, c);
      chrome.tabs.remove(a);
      chrome.tabs.update(D.activateTheTabIdAfterSignIn, { selected: true });
      localStorage.gcc_login_send ||
        chrome.cookies.get(
          { url: "https://www.diigo.com", name: "diigoandlogincookie" },
          function (d) {
            if (d) {
              console.log("111");
              if (!localStorage.gcc_login_send) {
                sendAnalysisData({ gcc_cookie_login_ext_chrome: 1 });
                localStorage.gcc_login_send = "true";
              }
            }
          }
        );
    }
    EventMachine.onTabUpdated(a, b, c);
    SignInManager.checkSignInCookie(function () {
      Prefs.get("prefs.autoloadBookmarkStatus") === "true" &&
        Preloader.onTabUpdated(a, b, c);
      if (Prefs.get("prefs.comboSearch") === "true") {
        var d = Prefs.get("prefs.SearchO") === "true" ? true : false;
        ComboSearch.onTabUpdated(a, b, c, d);
      }
      Prefs.get("prefs.SearchO") === "true" && Prefs.get("prefs.comboSearch");
    });
  });
  chrome.tabs.onRemoved.addListener(function (a) {
    Preloader.onTabRemoved(a);
  });
}
var Prefs = {
    prefsToPreload: "prefs.bookmark.privateByDefault".split(" "),
    _observers: [],
    observeChanges: function (a) {
      this._observers.push(a);
    },
    _notifyChanges: function (a) {
      for (var b = 0, c = this._observers.length; b < c; b++)
        this._observers[b].call(null, a);
    },
    setDefaultPrefs: function () {
      function a(c, d) {
        if (b.get(c) === null) {
          var e = {};
          e[c] = d;
          Prefs.set(e);
        }
      }
      var b = this;
      a("prefs.contextMenu", true);
      a("prefs.autoload", true);
      a("prefs.autoloadBookmarkStatus", true);
      a("prefs.comboSearch", true);
      a("prefs.SearchO", true);
      a("prefs.annotateAfterSaving", false);
      a("prefs.autoShowHighlightIcon", true);
      a("prefs.lastUsedColor", "yellow");
      a("prefs.autoImageClipper", false);
      a("prefs.shortcutReadlater", true);
      a("prefs.shortcutOpenOutlinerSidebar", true);
      a("prefs.shortcutOpenOutlinerSidebarCtrl", true);
      a("prefs.shortcutOpenOutlinerSidebarAlt", true);
      a("prefs.shortcutBookmark", true);
      a("prefs.shortcutAnnotate", true);
      a("prefs.shortcutReadlaterCtrl", true);
      a("prefs.shortcutReadlaterAlt", true);
      a("prefs.shortcutBookmarkCtrl", true);
      a("prefs.shortcutBookmarkAlt", true);
      a("prefs.shortcutAnnotateCtrl", true);
      a("prefs.shortcutAnnotateAlt", true);
      a("prefs.autoCloseReadLater", true);
      a("prefs.shortcutAnnotateArticle", true);
      a("prefs.shortcutAnnotatePDF", true);
      a("prefs.shortcutAnnotateScreenshot", true);
      a("prefs.shortcutAnnotateArticleCtrl", true);
      a("prefs.shortcutAnnotatePDFCtrl", true);
      a("prefs.shortcutAnnotateScreenshotCtrl", true);
      a("prefs.shortcutAnnotateArticleAlt", true);
      a("prefs.shortcutAnnotatePDFAlt", true);
      a("prefs.shortcutAnnotateScreenshotAlt", true);
      a("prefs.shortcutBookmarkKey", "D");
      a("prefs.shortcutReadlaterKey", "R");
      a("prefs.shortcutOpenOutlinerSidebarKey", "O");
      a("prefs.shortcutAnnotateKey", "A");
      a("prefs.shortcutAnnotateArticleKey", "T");
      a("prefs.shortcutAnnotatePDFKey", "P");
      a("prefs.shortcutAnnotateScreenshotKey", "S");
      a("free_trial_count", 0);
      a("isPdfTipClicked", false);
      a("search_type", "meta");
      a("prefs.showPdfButton", true);
      a("prefs.showVideoCapture", true);
      a("prefs.bookmark.privateByDefault", true);
      a("lastSearch", JSON.stringify({ tab: "recent", key: "" }));
    },
    prefixForUser: function () {
      var a = GlobalData.user;
      if (!a || a.length == 0) throw "Invalid user";
      return "user." + a + ".";
    },
    get: function (a, b) {
      b = b || "";
      if ($.isArray(a)) {
        var c = {};
        a.forEach(function (d) {
          c[d] = localStorage.getItem(b + d);
        });
        return c;
      } else return this.get([a], b)[a];
    },
    setObject: function (a, b) {
      b = b || "";
      var c = {};
      forEach(a, function (d, e) {
        var f = b + e;
        debug("[prefs] set", f, d);
        d = String(d);
        if (localStorage.getItem(f) != d) {
          localStorage.setItem(f, d);
          c[f] = d;
        }
      });
      return c;
    },
    set: function (a, b, c) {
      var d = this.setObject(a, b);
      if (!$.isEmptyObject(d)) {
        forEachWebTab(function (e) {
          Messenger.send(e.id, {
            name: "prefsChanged",
            details: { data: d },
            fromTabId: c,
          });
        });
        this._notifyChanges(d);
      }
      return d;
    },
    remove: function (a, b) {
      b = b || "";
      if ($.isArray(a)) {
        var c = {};
        a.forEach(function (d) {
          c[d] = localStorage.removeItem(b + d);
        });
        return c;
      } else return this.remove([a], b)[a];
    },
    getUserData: function (a) {
      return this.get(a, this.prefixForUser());
    },
    setUserData: function (a, b) {
      return this.set(a, this.prefixForUser(), b);
    },
    removeUserData: function (a) {
      return this.remove(a, this.prefixForUser());
    },
  },
  EventMachine = (D.EventMachine = {
    _locationCounter: 0,
    _activationCounter: 0,
    _lastReloadTime: new Date(),
    _shouldReload: false,
    init: function () {},
    onTabUpdated: function (a, b, c) {
      b.status == "complete" && this.changeLocation(c.url);
    },
    onActivate: function () {
      this._activationCounter++;
      if (this._activationCounter >= 5) {
        debug("[EventMachine] onActivate 5 times");
        this._shouldReload = true;
        this._activationCounter = 0;
      }
    },
    needToReload: function () {
      if (
        (new Date().getTime() - this._lastReloadTime.getTime()) / 1e3 / 60 >
        15
      ) {
        debug("[EventMachine] 15 mins");
        this._shouldReload = true;
      }
      if (this._shouldReload) {
        this._shouldReload = false;
        this._locationCounter = this._activationCounter = 0;
        this._lastReloadTime = new Date();
        return true;
      } else return false;
    },
    changeLocation: function () {
      var a = ++this._locationCounter;
      if (a % 20 == 0) {
        debug("[EventMachine] changeLocation 20 times");
        this._shouldReload = true;
      }
      if (a > 16777215) this._locationCounter = 0;
    },
  }),
  ContextMenu = {
    init: function () {
      var a = this;
      this.createContextMenu();
      Prefs.observeChanges(function (b) {
        b["prefs.contextMenu"] !== undefined && a.createContextMenu();
      });
    },
    createContextMenu: function () {
      var a = chrome.contextMenus.create({
        title: "Save image to Diigo",
        contexts: ["image"],
      });
      chrome.contextMenus.create({
        title: "Tag as a stand-alone image",
        contexts: ["image"],
        parentId: a,
        onclick: function (b, c) {
          D.saveImageToDiigo(b, c, "tag");
        },
      });
      chrome.contextMenus.create({
        title: "Attach it to the bookmark",
        contexts: ["image"],
        parentId: a,
        onclick: function (b, c) {
          D.saveImageToDiigo(b, c, "attach");
        },
      });
      chrome.contextMenus.create({
        title: "Save to Diigo",
        contexts: ["link"],
        onclick: function (b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", b.linkUrl, true);
          d.onreadystatechange = function () {
            if (d.readyState == 4) {
              if (d.status == 200) {
                var e = d.responseText.replace(/[\r\n]/g, "");
                try {
                  var f = e.match(/<title>(.*)<\/title>/)[1].trim();
                } catch (g) {
                  f = null;
                }
              } else f = null;
              chrome.tabs.sendMessage(c.id, {
                name: "showWindow",
                data: { linkTitle: f, url: b.linkUrl },
              });
            }
          };
          d.send();
        },
      });
      a = chrome.contextMenus.create({ title: "Diigo" });
      chrome.contextMenus.create({
        title: "Save Bookmark",
        parentId: a,
        onclick: function () {
          showWindow();
        },
      });
      chrome.contextMenus.create({
        title: "Annotate Article",
        parentId: a,
        onclick: function (b, c) {
          chrome.tabs.executeScript(
            c.id,
            { file: "js/checkTab.js" },
            function () {}
          );
          chrome.tabs.sendMessage(c.id, { name: "annotate" });
        },
      });
      chrome.contextMenus.create({
        title: "Annotate PDF",
        parentId: a,
        onclick: function () {
          chrome.tabs.create({ url: "/pdf/viewer.html" });
        },
      });
      chrome.contextMenus.create({
        title: "Annotate Screenshot",
        parentId: a,
        onclick: function (b, c) {
          chrome.tabs.executeScript(
            c.id,
            { file: "js/checkTab.js" },
            function () {}
          );
          chrome.tabs.sendMessage(c.id, { name: "screenshot" });
        },
      });
      chrome.contextMenus.create({
        title: "Read Later",
        parentId: a,
        onclick: function (b, c) {
          chrome.tabs.sendMessage(c.id, { name: "readlater" });
        },
      });
      chrome.contextMenus.create({
        title: "Sticky note",
        parentId: a,
        onclick: function () {
          showToolbar("stickynote");
        },
      });
      a = chrome.contextMenus.create({
        title: "Diigo",
        contexts: ["selection"],
      });
      chrome.contextMenus.create({
        title: "Highlight",
        contexts: ["selection"],
        parentId: a,
        onclick: function (b, c) {
          showToolbar("highlight");
          chrome.tabs.sendMessage(c.id, { name: "contextmenuHighlight" });
        },
      });
      chrome.contextMenus.create({
        title: "Search Diigo+Google for selection",
        parentId: a,
        contexts: ["selection"],
        onclick: function (b, c) {
          D.searchDiigoGoogle(b.selectionText, c);
        },
      });
    },
    removeContextMenu: function () {
      chrome.contextMenus.removeAll();
    },
  };
D.searchDiigoGoogle = function (a, b) {
  if (a && a.length > 0) {
    var c = {
      url:
        "https://www.diigo.com/search/g?q=" +
        encodeURIComponent(a) +
        "&sa=Search",
    };
    if (b) c.index = b.index + 1;
    chrome.tabs.create(c);
  }
};
D.saveImageToDiigo = function (a, b, c) {
  if (/data:image\/.*;base64/.test(a.srcUrl)) {
    var d = a.srcUrl.match(/data:image\/(.*);base64/)[1];
    chrome.tabs.sendMessage(b.id, {
      name: "saveImageToDiigo",
      data: a.srcUrl,
      type: c,
      dtype: d,
      image_src: a,
    });
  } else {
    d = new XMLHttpRequest();
    d.open("GET", a.srcUrl, true);
    d.responseType = "blob";
    d.onload = function () {
      if (this.status == 200) {
        var e = new Blob([this.response], { type: this.response.type }),
          f = this.response.type.slice(6),
          g = new FileReader();
        g.onload = function () {
          chrome.tabs.sendMessage(b.id, {
            name: "saveImageToDiigo",
            data: g.result,
            type: c,
            dtype: f,
            image_src: a,
          });
        };
        g.readAsDataURL(e);
      }
    };
    d.send();
  }
};
var WebAPICall = function (a) {
  this.context = a;
};
WebAPICall.prototype = {
  invoke: function (a, b, c) {
    this.callOptions = c;
    var d = c.transId || WebAPICall.transIdStepper++,
      e = c.user;
    d = {
      cmd: a,
      v: 13,
      _nocache: Math.random(),
      json: JSON.stringify(b),
      user: e,
      transId: d,
    };
    debug("[WebAPICall]", a, b);
    if (c.isInGroup) {
      d = { cmd: a, extra: b.extra, image: b.file_content };
      e = b.src_url;
    } else {
      b = D.config.TOOLBAR_SERVER;
      e =
        a == "user_signIn"
          ? evalTpl(b + "/chappai/pv=#{pv}/ct=tb/cv=#{cv}/cmd=#{cmd}", {
              pv: 13,
              cv: D.version,
              cmd: a,
            })
          : evalTpl(
              b + "/chappai/pv=#{pv}/ct=tb/cv=#{cv}/user=#{user}/cmd=#{cmd}/",
              { pv: 13, cv: D.version, user: e, cmd: a }
            );
    }
    this.performInvocation(e, d, c, a);
  },
  cancel: function () {
    this.cancelled = true;
    if (this.xhr) {
      this.xhr.abort();
      this.xhr = null;
    }
  },
  performInvocation: function (a, b, c, d) {
    var e = this;
    e.xhr = $.ajax({
      type: "POST",
      url: a,
      data: b,
      complete: function (f) {
        try {
          var g = JSON.parse(f.responseText);
        } catch (h) {
          debug("[WebAPICall error parsing JSON]", h, f);
        }
        debug("[WebAPI ajax response]", f.status, g);
        if (
          d == "upload_file" ||
          d == "bm_saveBookmark" ||
          d == "list_create"
        ) {
          e.status = f.status;
          e.cmd = d;
        }
        if ((e.resp = g)) {
          if (g.code == 1) e.ok = true;
          g.user && SignInManager.onUsernameSeen(g.user);
        }
        c.complete(e, g);
        e.xhr = null;
      },
      error: function (f, g, h) {
        debug("[WebAPI ajax error]", f, g, h);
      },
    });
  },
};
var WebAPICall_Static = {
  transIdStepper: 1,
  _baseUrl: null,
  setup: function (a) {
    this._baseUrl = a.baseUrl;
  },
};
extend(WebAPICall, WebAPICall_Static);
var Upgrader = {
  check: function () {
    var a = D.version,
      b = Prefs.get("version") || "0";
    this.compareVersion(a, b) > 0 && this.upgrade(b);
  },
  upgrade: function (a) {
    debug("Performing upgrade from", a, "to", D.version);
    this.isVersionBefore(a, "1.6.2.4") &&
      Prefs.set({ "prefs.autoloadBookmarkStatus": true });
    Prefs.set({ version: D.version });
  },
  compareVersion: function (a, b) {
    function c(e) {
      if (/[^\d.]/.test(e)) throw "version must be in formatted like 1.2.4";
      return e.split(".").map(function (f) {
        return parseInt(f, 10);
      });
    }
    if (a === b) return 0;
    a = c(a);
    b = c(b);
    for (var d = 0; d < a.length && d < b.length; d++)
      if (a[d] != b[d]) return a[d] > b[d] ? 1 : -1;
    if (a.length == b.length) return 0;
    return a.length > b.length ? 1 : -1;
  },
  isVersionBefore: function (a, b, c) {
    try {
      if (c === undefined) c = false;
      var d = this.compareVersion(a, b);
      if (c && d == 0) return true;
      return d < 0;
    } catch (e) {
      return false;
    }
  },
};
function sendAnalysisData(a) {
  $.post("https://www.diigo.com/stats", JSON.stringify(a), function () {});
}
$(document).ready(init);
typeof browser == "undefined" &&
  chrome.runtime.onInstalled.addListener(function (a) {
    if (a.reason == "install") {
      var b = chrome.runtime.getManifest();
      chrome.cookies.getAll({ url: "https://www.diigo.com" }, function (c) {
        sendAnalysisData({
          gcc_cookie_installed_ext_chrome: 1,
          gcc_cookie_ext_chrome_version: b.version,
          gcc_cookie_ext_chrome_last_version: localStorage.version || "none",
          gcc_cookie_visited_diigo: c.length > 0 ? 1 : 0,
        });
      });
      chrome.tabs.query(
        { url: "https://www.diigo.com/common/install" },
        function (c) {
          for (var d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            chrome.cookies.get(
              { url: "https://www.diigo.com", name: "diigoandlogincookie" },
              function (g) {
                if (g)
                  (username = g.value.split("-.-")[1]) &&
                    chrome.tabs.update(f.id, {
                      url:
                        "https://www.diigo.com/user/" +
                        username +
                        "?from=extension",
                    });
              }
            );
          }
        }
      );
    }
  });
