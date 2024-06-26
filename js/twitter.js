var TwitterOAuth = {
  URL_OAUTH_BASE: "https://api.twitter.com/oauth/",
  URL_API_BASE: "https://api.twitter.com/1.1/",
  comsuerKey: "jPjTPeXVlxhx5Zqw3uTmGw",
  consumerSecret: "eLOSDUs7aHHn4p1ocSYz2xRUVNUfkDSjtf2DQlKUY",
  init: function () {
    var a = this;
    a.reset();
    a.tabUpdatededListener = function () {
      return a.onTabUpdated.apply(a, [].slice.call(arguments));
    };
  },
  onTabUpdated: function (a, b, c) {
    if (
      !(
        !this.oauthPinTab ||
        this.oauthPinTab.id != a ||
        b.status != "complete" ||
        !/twitter.com\/oauth\/authorize$/.test(c.url)
      )
    ) {
      debug("[Twitter OAuth PIN tab completed loading]");
      this.grabPin();
    }
  },
  makeRequest: function (a) {
    var b = this,
      c = {
        method: a.method || "POST",
        action: (a.oauth ? b.URL_OAUTH_BASE : b.URL_API_BASE) + a.url,
        parameters: {
          oauth_signature_method: "HMAC-SHA1",
          oauth_consumer_key: b.comsuerKey,
        },
      },
      e = {
        consumerSecret: b.consumerSecret,
        tokenSecret: b.oauth_token_secret,
      };
    b.oauth_token && OAuth.setParameter(c, "oauth_token", b.oauth_token);
    if (a.params) for (var f in a.params) OAuth.setParameter(c, f, a.params[f]);
    OAuth.completeRequest(c, e);
    $.ajax({
      type: c.method,
      url: c.action,
      timeout: 6e4,
      data: OAuth.getParameterMap(c.parameters),
      complete: function (d, g) {
        debug("oauth complete", g, d);
      },
      success: function (d, g, h) {
        debug("oauth success", d, g, h);
        a.successCallback && a.successCallback.call(b, d);
      },
      error: function (d, g, h) {
        debug("oauth error", d, g, h);
        a.errorCallback && a.errorCallback.call(b, d, g, h);
      },
    });
  },
  getRequestToken: function () {
    var a = this;
    a.reset();
    a.makeRequest({
      url: "request_token",
      oauth: true,
      method: "GET",
      successCallback: function (b) {
        var c = OAuth.getParameterMap(b);
        if (
          !"oauth_token oauth_token_secret".split(" ").every(function (e) {
            return !!c[e];
          })
        ) {
          error("[oauth request token error]. data not correct", b);
          return null;
        }
        a.oauth_token = c.oauth_token;
        a.oauth_token_secret = c.oauth_token_secret;
        chrome.tabs.create(
          {
            url: a.URL_OAUTH_BASE + "authorize?oauth_token=" + a.oauth_token,
            selected: true,
          },
          function (e) {
            a.oauthPinTab = e;
            chrome.tabs.onUpdated.addListener(a.tabUpdatededListener);
          }
        );
      },
      errorCallback: function (b, c, e) {
        error("[oauth request_token] failed", b, c, e);
        this.reset();
      },
    });
  },
  getAccessToken: function (a, b) {
    var c = this;
    debug("[oauth] got pin", a);
    if (a) {
      chrome.tabs.remove(b);
      chrome.tabs.update(D.switchToTabIdAfterTwitterOauth, { selected: true });
      c.makeRequest({
        url: "access_token",
        method: "POST",
        oauth: true,
        params: { oauth_verifier: a },
        successCallback: function (e) {
          var f = OAuth.getParameterMap(e);
          if (
            "oauth_token oauth_token_secret user_id screen_name"
              .split(" ")
              .every(function (d) {
                return !!f[d];
              })
          ) {
            c.oauth_token = f.oauth_token;
            c.oauth_token_secret = f.oauth_token_secret;
            c.user_id = f.user_id;
            c.screen_name = f.screen_name;
            c.authenticated = true;
            c.storeOauthInfo();
            forEachWebTab(function (d) {
              Messenger.send(d.id, {
                name: "twitterSignIn",
                details: { screen_name: c.screen_name },
              });
            });
          } else {
            error("[oauth access_token] failed", e);
            c.reset();
          }
        },
        errorCallback: function (e, f, d) {
          error("[oauth access_token] failed", e, f, d);
          this.reset();
        },
      });
    } else {
      alert("Authentication with twitter failed!");
      c.reset();
    }
  },
  grabPin: function () {
    var a = this;
    setTimeout(function () {
      chrome.tabs.executeScript(a.oauthPinTab.id, {
        file: "js/twitterGrabPin.js",
      });
    }, 500);
    chrome.tabs.onUpdated.removeListener(a.tabUpdatededListener);
  },
  reset: function () {
    this.oauthPinTab = this.oauth_token_secret = this.oauth_token = null;
    chrome.tabs.onUpdated.removeListener(this.tabUpdatededListener);
  },
  changeUser: function () {
    this.reset();
    this.clearStoredOauthInfo();
    forEachWebTab(function (a) {
      Messenger.send(a.id, { name: "twitterSignOut", details: {} });
    });
    this.getRequestToken();
  },
  storeOauthInfo: function () {
    Prefs.setUserData({
      twitterOauth: this.rot13(
        btoa(
          JSON.stringify({
            oauth_token: this.oauth_token,
            oauth_token_secret: this.oauth_token_secret,
            user_id: this.user_id,
            screen_name: this.screen_name,
          })
        )
      ),
    });
  },
  rot13: function (a) {
    return a.replace(/[a-zA-Z]/g, function (b) {
      return String.fromCharCode(
        (b <= "Z" ? 90 : 122) >= (b = b.charCodeAt(0) + 13) ? b : b - 26
      );
    });
  },
  loadOauthInfo: function () {
    var a = Prefs.getUserData("twitterOauth");
    if (a)
      try {
        a = JSON.parse(atob(this.rot13(a)));
        if (
          !"oauth_token oauth_token_secret user_id screen_name"
            .split(" ")
            .every(function (c) {
              return !!a[c];
            })
        ) {
          error("error loading oauth info from storage. data not correct", a);
          return null;
        }
        this.oauth_token = a.oauth_token;
        this.oauth_token_secret = a.oauth_token_secret;
        this.user_id = a.user_id;
        this.screen_name = a.screen_name;
        return a;
      } catch (b) {
        error("error loading oauth info from storage", b);
      }
    return null;
  },
  clearStoredOauthInfo: function () {
    Prefs.removeUserData("twitterOauth");
  },
  checkAuthentication: function () {
    return (
      (this.oauth_token || this.loadOauthInfo()) && {
        screen_name: this.screen_name,
      }
    );
  },
  API_statuses_home_timeline: function () {
    this.makeRequest({
      url: "statuses/home_timeline.json",
      method: "GET",
      params: { count: 3 },
      successCallback: function (a) {
        debug("[twitter home timeline]", a);
      },
    });
  },
  API_friendships_exists: function () {
    this.makeRequest({
      url: "friendships/exists.json",
      method: "GET",
      params: { user_a: this.screen_name, user_b: "diigo" },
      successCallback: function (a) {
        debug("[twitter friendships_exists]", a);
      },
    });
  },
  updateStatus: function (a, b) {
    this.API_statuses_update(a, b);
  },
  API_statuses_update: function (a, b) {
    this.makeRequest({
      url: "statuses/update.json",
      method: "POST",
      params: { status: a.status },
      successCallback: function (c) {
        debug("[twitter statuses_update]", c);
        b(c);
      },
      errorCallback: function () {
        b(null);
      },
    });
  },
};
$(function () {});
