// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/images/avatar-michelle.jpg":[function(require,module,exports) {
module.exports = "/avatar-michelle.013df1b2.jpg";
},{}],"src/images/icon-facebook.svg":[function(require,module,exports) {
module.exports = "/icon-facebook.09221842.svg";
},{}],"src/images/icon-twitter.svg":[function(require,module,exports) {
module.exports = "/icon-twitter.b344e66e.svg";
},{}],"src/images/icon-pinterest.svg":[function(require,module,exports) {
module.exports = "/icon-pinterest.e8e18a07.svg";
},{}],"src/js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socialIconsData = exports.profileData = void 0;
var _avatarMichelle = _interopRequireDefault(require("../images/avatar-michelle.jpg"));
var _iconFacebook = _interopRequireDefault(require("../images/icon-facebook.svg"));
var _iconTwitter = _interopRequireDefault(require("../images/icon-twitter.svg"));
var _iconPinterest = _interopRequireDefault(require("../images/icon-pinterest.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var socialIconsData = exports.socialIconsData = [{
  icon: _iconFacebook.default,
  attribute: "Facebook icon"
}, {
  icon: _iconTwitter.default,
  attribute: "Twitter icon"
}, {
  icon: _iconPinterest.default,
  attribute: "Pinterest icon"
}];
var profileData = exports.profileData = [{
  picture: _avatarMichelle.default,
  attribute: "Michelle avatar"
}];
},{"../images/avatar-michelle.jpg":"src/images/avatar-michelle.jpg","../images/icon-facebook.svg":"src/images/icon-facebook.svg","../images/icon-twitter.svg":"src/images/icon-twitter.svg","../images/icon-pinterest.svg":"src/images/icon-pinterest.svg"}],"src/images/icon-share.svg":[function(require,module,exports) {
module.exports = "/icon-share.c9ffa87c.svg";
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");
var _iconShare = _interopRequireDefault(require("../images/icon-share.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener("click", function (e) {
  var shareMobileLight = document.getElementById("share-mobile-light");
  var shareMobileDark = document.getElementById("share-mobile-dark");
  var shareDesktopDark = document.getElementById("share-desktop-dark");
  if (e.target.id === "share-btn-mobile-light") {
    shareMobileLight.classList.add("hide");
    shareMobileDark.classList.remove("hide");
  } else if (e.target.id === "share-btn-mobile-dark") {
    shareMobileLight.classList.remove("hide");
    shareMobileDark.classList.add("hide");
  } else if (e.target.id === "share-btn-desktop-light") {
    shareDesktopDark.classList.toggle("hide");
  }
});
var getInfosHtml = function getInfosHtml() {
  return "\n        <img\n            class=\"article-component__avatar\"\n            src=".concat(_data.profileData[0].picture, "\n            alt=").concat(_data.profileData[0].attribute, "\n        />\n        <div class=\"article-component__texts-wrapper\">\n            <p class=\"article-component__name\">Michelle Appleton</p>\n            <p class=\"article-component__date\">28 Jun 2020</p>\n        </div>\n    ");
};
var getSocialIconHtml = function getSocialIconHtml() {
  var socialIconHtml = "";
  _data.socialIconsData.forEach(function (item) {
    socialIconHtml += "\n            <img\n                class=\"social-media-icon\"\n                src=".concat(item.icon, "\n                alt=\"").concat(item.attribute, "\"\n            />\n        ");
  });
  return socialIconHtml;
};
var getInfosDekstopDarkHtml = function getInfosDekstopDarkHtml() {
  return "\n        <p class=\"article-component__share-text\">share</p>\n        <div class=\"social-icons-wrapper\">\n            ".concat(getSocialIconHtml(), "\n        </div>\n    ");
};
var getInfosMobileLightHtml = function getInfosMobileLightHtml() {
  return "\n        ".concat(getInfosHtml(), "\n        <div\n            class=\"article-component__share-icon-wrapper share-icon-wrapper--light light--mobile\" id=\"share-btn-mobile-light\"\n        >\n            <img\n                class=\"article-component__share-icon\"\n                src=").concat(_iconShare.default, "\n                alt=\"Share icon\"\n            />\n        </div>\n    ");
};
var getInfosDesktopLightHtml = function getInfosDesktopLightHtml() {
  return "\n        ".concat(getInfosHtml(), "\n        <div class=\"article-component__infos-primary-container\">\n            <div\n                class=\"article-component__infos-container infos--dark desktop--dark hide\"\n                id=\"share-desktop-dark\"\n            >\n                ").concat(getInfosDekstopDarkHtml(), "\n            </div>\n            <div\n                class=\"article-component__share-icon-wrapper share-icon-wrapper--light light--dekstop\" id=\"share-btn-desktop-light\"\n            >\n                <img\n                    class=\"article-component__share-icon\"\n                    src=").concat(_iconShare.default, "\n                    alt=\"Share icon\"\n                />\n            </div>\n        </div>\n    ");
};
var getInfosMobileDarkHtml = function getInfosMobileDarkHtml() {
  return "\n        <p class=\"article-component__share-text\">share</p>\n        <div class=\"social-icons-wrapper\">\n            ".concat(getSocialIconHtml(), "\n        </div>\n        <div\n            class=\"article-component__share-icon-wrapper share-icon-wrapper--dark\"\n            id=\"share-btn-mobile-dark\"\n        >\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"13\" class=\"article-component__share-icon\">\n                <path\n                    fill=\"#FFFFFF\"\n                    d=\"M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z\"\n                />\n            </svg>\n        </div>\n    ");
};
var render = function render() {
  document.getElementById("share-mobile-light").innerHTML = getInfosMobileLightHtml();
  document.getElementById("share-mobile-dark").innerHTML = getInfosMobileDarkHtml();
  document.getElementById("share-desktop-light").innerHTML = getInfosDesktopLightHtml();
};
render();
},{"./data":"src/js/data.js","../images/icon-share.svg":"src/images/icon-share.svg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52361" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map