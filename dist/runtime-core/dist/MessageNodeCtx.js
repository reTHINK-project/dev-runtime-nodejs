"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for MessageNodeCtx.js 
// version: 0.5.1
// Last build: Mon Jul 25 2016 09:11:49 GMT+0100 (WEST)

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.MessageNodeCtx = e();
  }
}(function () {
  return function e(t, r, o) {
    function n(s, c) {
      if (!r[s]) {
        if (!t[s]) {
          var u = "function" == typeof require && require;if (!c && u) return u(s, !0);if (i) return i(s, !0);var a = new Error("Cannot find module '" + s + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var f = r[s] = { exports: {} };t[s][0].call(f.exports, function (e) {
          var r = t[s][1][e];return n(r ? r : e);
        }, f, f.exports, e, t, r, o);
      }return r[s].exports;
    }for (var i = "function" == typeof require && require, s = 0; s < o.length; s++) {
      n(o[s]);
    }return n;
  }({ 1: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/json/stringify"), __esModule: !0 };
    }, { "core-js/library/fn/json/stringify": 14 }], 2: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/create"), __esModule: !0 };
    }, { "core-js/library/fn/object/create": 15 }], 3: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/define-property"), __esModule: !0 };
    }, { "core-js/library/fn/object/define-property": 16 }], 4: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/get-prototype-of"), __esModule: !0 };
    }, { "core-js/library/fn/object/get-prototype-of": 17 }], 5: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/keys"), __esModule: !0 };
    }, { "core-js/library/fn/object/keys": 18 }], 6: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/set-prototype-of"), __esModule: !0 };
    }, { "core-js/library/fn/object/set-prototype-of": 19 }], 7: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/symbol"), __esModule: !0 };
    }, { "core-js/library/fn/symbol": 20 }], 8: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/symbol/iterator"), __esModule: !0 };
    }, { "core-js/library/fn/symbol/iterator": 21 }], 9: [function (e, t, r) {
      "use strict";
      r.__esModule = !0, r["default"] = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      };
    }, {}], 10: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var n = e("../core-js/object/define-property"),
          i = o(n);r["default"] = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, i["default"])(e, o.key, o);
          }
        }return function (t, r, o) {
          return r && e(t.prototype, r), o && e(t, o), t;
        };
      }();
    }, { "../core-js/object/define-property": 3 }], 11: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var n = e("../core-js/object/set-prototype-of"),
          i = o(n),
          s = e("../core-js/object/create"),
          c = o(s),
          u = e("../helpers/typeof"),
          a = o(u);r["default"] = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, a["default"])(t)));e.prototype = (0, c["default"])(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (i["default"] ? (0, i["default"])(e, t) : e.__proto__ = t);
      };
    }, { "../core-js/object/create": 2, "../core-js/object/set-prototype-of": 6, "../helpers/typeof": 13 }], 12: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var n = e("../helpers/typeof"),
          i = o(n);r["default"] = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, i["default"])(t)) && "function" != typeof t ? e : t;
      };
    }, { "../helpers/typeof": 13 }], 13: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var n = e("../core-js/symbol/iterator"),
          i = o(n),
          s = e("../core-js/symbol"),
          c = o(s),
          u = "function" == typeof c["default"] && "symbol" == _typeof(i["default"]) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof c["default"] && e.constructor === c["default"] ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      };r["default"] = "function" == typeof c["default"] && "symbol" === u(i["default"]) ? function (e) {
        return "undefined" == typeof e ? "undefined" : u(e);
      } : function (e) {
        return e && "function" == typeof c["default"] && e.constructor === c["default"] ? "symbol" : "undefined" == typeof e ? "undefined" : u(e);
      };
    }, { "../core-js/symbol": 7, "../core-js/symbol/iterator": 8 }], 14: [function (e, t, r) {
      var o = e("../../modules/_core"),
          n = o.JSON || (o.JSON = { stringify: JSON.stringify });t.exports = function (e) {
        return n.stringify.apply(n, arguments);
      };
    }, { "../../modules/_core": 27 }], 15: [function (e, t, r) {
      e("../../modules/es6.object.create");var o = e("../../modules/_core").Object;t.exports = function (e, t) {
        return o.create(e, t);
      };
    }, { "../../modules/_core": 27, "../../modules/es6.object.create": 81 }], 16: [function (e, t, r) {
      e("../../modules/es6.object.define-property");var o = e("../../modules/_core").Object;t.exports = function (e, t, r) {
        return o.defineProperty(e, t, r);
      };
    }, { "../../modules/_core": 27, "../../modules/es6.object.define-property": 82 }], 17: [function (e, t, r) {
      e("../../modules/es6.object.get-prototype-of"), t.exports = e("../../modules/_core").Object.getPrototypeOf;
    }, { "../../modules/_core": 27, "../../modules/es6.object.get-prototype-of": 83 }], 18: [function (e, t, r) {
      e("../../modules/es6.object.keys"), t.exports = e("../../modules/_core").Object.keys;
    }, { "../../modules/_core": 27, "../../modules/es6.object.keys": 84 }], 19: [function (e, t, r) {
      e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/_core").Object.setPrototypeOf;
    }, { "../../modules/_core": 27, "../../modules/es6.object.set-prototype-of": 85 }], 20: [function (e, t, r) {
      e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), e("../../modules/es7.symbol.async-iterator"), e("../../modules/es7.symbol.observable"), t.exports = e("../../modules/_core").Symbol;
    }, { "../../modules/_core": 27, "../../modules/es6.object.to-string": 86, "../../modules/es6.symbol": 88, "../../modules/es7.symbol.async-iterator": 89, "../../modules/es7.symbol.observable": 90 }], 21: [function (e, t, r) {
      e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/_wks-ext").f("iterator");
    }, { "../../modules/_wks-ext": 78, "../../modules/es6.string.iterator": 87, "../../modules/web.dom.iterable": 91 }], 22: [function (e, t, r) {
      t.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
      };
    }, {}], 23: [function (e, t, r) {
      t.exports = function () {};
    }, {}], 24: [function (e, t, r) {
      var o = e("./_is-object");t.exports = function (e) {
        if (!o(e)) throw TypeError(e + " is not an object!");return e;
      };
    }, { "./_is-object": 43 }], 25: [function (e, t, r) {
      var o = e("./_to-iobject"),
          n = e("./_to-length"),
          i = e("./_to-index");t.exports = function (e) {
        return function (t, r, s) {
          var c,
              u = o(t),
              a = n(u.length),
              f = i(s, a);if (e && r != r) {
            for (; a > f;) {
              if (c = u[f++], c != c) return !0;
            }
          } else for (; a > f; f++) {
            if ((e || f in u) && u[f] === r) return e || f || 0;
          }return !e && -1;
        };
      };
    }, { "./_to-index": 70, "./_to-iobject": 72, "./_to-length": 73 }], 26: [function (e, t, r) {
      var o = {}.toString;t.exports = function (e) {
        return o.call(e).slice(8, -1);
      };
    }, {}], 27: [function (e, t, r) {
      var o = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = o);
    }, {}], 28: [function (e, t, r) {
      var o = e("./_a-function");t.exports = function (e, t, r) {
        if (o(e), void 0 === t) return e;switch (r) {case 1:
            return function (r) {
              return e.call(t, r);
            };case 2:
            return function (r, o) {
              return e.call(t, r, o);
            };case 3:
            return function (r, o, n) {
              return e.call(t, r, o, n);
            };}return function () {
          return e.apply(t, arguments);
        };
      };
    }, { "./_a-function": 22 }], 29: [function (e, t, r) {
      t.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);return e;
      };
    }, {}], 30: [function (e, t, r) {
      t.exports = !e("./_fails")(function () {
        return 7 != Object.defineProperty({}, "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, { "./_fails": 35 }], 31: [function (e, t, r) {
      var o = e("./_is-object"),
          n = e("./_global").document,
          i = o(n) && o(n.createElement);t.exports = function (e) {
        return i ? n.createElement(e) : {};
      };
    }, { "./_global": 36, "./_is-object": 43 }], 32: [function (e, t, r) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {}], 33: [function (e, t, r) {
      var o = e("./_object-keys"),
          n = e("./_object-gops"),
          i = e("./_object-pie");t.exports = function (e) {
        var t = o(e),
            r = n.f;if (r) for (var s, c = r(e), u = i.f, a = 0; c.length > a;) {
          u.call(e, s = c[a++]) && t.push(s);
        }return t;
      };
    }, { "./_object-gops": 57, "./_object-keys": 60, "./_object-pie": 61 }], 34: [function (e, t, r) {
      var o = e("./_global"),
          n = e("./_core"),
          i = e("./_ctx"),
          s = e("./_hide"),
          c = "prototype",
          u = function u(e, t, r) {
        var a,
            f,
            l,
            p = e & u.F,
            _ = e & u.G,
            d = e & u.S,
            b = e & u.P,
            y = e & u.B,
            h = e & u.W,
            m = _ ? n : n[t] || (n[t] = {}),
            j = m[c],
            g = _ ? o : d ? o[t] : (o[t] || {})[c];_ && (r = t);for (a in r) {
          f = !p && g && void 0 !== g[a], f && a in m || (l = f ? g[a] : r[a], m[a] = _ && "function" != typeof g[a] ? r[a] : y && f ? i(l, o) : h && g[a] == l ? function (e) {
            var t = function t(_t, r, o) {
              if (this instanceof e) {
                switch (arguments.length) {case 0:
                    return new e();case 1:
                    return new e(_t);case 2:
                    return new e(_t, r);}return new e(_t, r, o);
              }return e.apply(this, arguments);
            };return t[c] = e[c], t;
          }(l) : b && "function" == typeof l ? i(Function.call, l) : l, b && ((m.virtual || (m.virtual = {}))[a] = l, e & u.R && j && !j[a] && s(j, a, l)));
        }
      };u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
    }, { "./_core": 27, "./_ctx": 28, "./_global": 36, "./_hide": 38 }], 35: [function (e, t, r) {
      t.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    }, {}], 36: [function (e, t, r) {
      var o = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = o);
    }, {}], 37: [function (e, t, r) {
      var o = {}.hasOwnProperty;t.exports = function (e, t) {
        return o.call(e, t);
      };
    }, {}], 38: [function (e, t, r) {
      var o = e("./_object-dp"),
          n = e("./_property-desc");t.exports = e("./_descriptors") ? function (e, t, r) {
        return o.f(e, t, n(1, r));
      } : function (e, t, r) {
        return e[t] = r, e;
      };
    }, { "./_descriptors": 30, "./_object-dp": 52, "./_property-desc": 63 }], 39: [function (e, t, r) {
      t.exports = e("./_global").document && document.documentElement;
    }, { "./_global": 36 }], 40: [function (e, t, r) {
      t.exports = !e("./_descriptors") && !e("./_fails")(function () {
        return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, { "./_descriptors": 30, "./_dom-create": 31, "./_fails": 35 }], 41: [function (e, t, r) {
      var o = e("./_cof");t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == o(e) ? e.split("") : Object(e);
      };
    }, { "./_cof": 26 }], 42: [function (e, t, r) {
      var o = e("./_cof");t.exports = Array.isArray || function (e) {
        return "Array" == o(e);
      };
    }, { "./_cof": 26 }], 43: [function (e, t, r) {
      t.exports = function (e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e;
      };
    }, {}], 44: [function (e, t, r) {
      "use strict";
      var o = e("./_object-create"),
          n = e("./_property-desc"),
          i = e("./_set-to-string-tag"),
          s = {};e("./_hide")(s, e("./_wks")("iterator"), function () {
        return this;
      }), t.exports = function (e, t, r) {
        e.prototype = o(s, { next: n(1, r) }), i(e, t + " Iterator");
      };
    }, { "./_hide": 38, "./_object-create": 51, "./_property-desc": 63, "./_set-to-string-tag": 66, "./_wks": 79 }], 45: [function (e, t, r) {
      "use strict";
      var o = e("./_library"),
          n = e("./_export"),
          i = e("./_redefine"),
          s = e("./_hide"),
          c = e("./_has"),
          u = e("./_iterators"),
          a = e("./_iter-create"),
          f = e("./_set-to-string-tag"),
          l = e("./_object-gpo"),
          p = e("./_wks")("iterator"),
          _ = !([].keys && "next" in [].keys()),
          d = "@@iterator",
          b = "keys",
          y = "values",
          h = function h() {
        return this;
      };t.exports = function (e, t, r, m, j, g, v) {
        a(r, t, m);var w,
            x,
            k,
            O = function O(e) {
          if (!_ && e in T) return T[e];switch (e) {case b:
              return function () {
                return new r(this, e);
              };case y:
              return function () {
                return new r(this, e);
              };}return function () {
            return new r(this, e);
          };
        },
            P = t + " Iterator",
            S = j == y,
            E = !1,
            T = e.prototype,
            C = T[p] || T[d] || j && T[j],
            M = C || O(j),
            A = j ? S ? O("entries") : M : void 0,
            D = "Array" == t ? T.entries || C : C;if (D && (k = l(D.call(new e())), k !== Object.prototype && (f(k, P, !0), o || c(k, p) || s(k, p, h))), S && C && C.name !== y && (E = !0, M = function M() {
          return C.call(this);
        }), o && !v || !_ && !E && T[p] || s(T, p, M), u[t] = M, u[P] = h, j) if (w = { values: S ? M : O(y), keys: g ? M : O(b), entries: A }, v) for (x in w) {
          x in T || i(T, x, w[x]);
        } else n(n.P + n.F * (_ || E), t, w);return w;
      };
    }, { "./_export": 34, "./_has": 37, "./_hide": 38, "./_iter-create": 44, "./_iterators": 47, "./_library": 49, "./_object-gpo": 58, "./_redefine": 64, "./_set-to-string-tag": 66, "./_wks": 79 }], 46: [function (e, t, r) {
      t.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    }, {}], 47: [function (e, t, r) {
      t.exports = {};
    }, {}], 48: [function (e, t, r) {
      var o = e("./_object-keys"),
          n = e("./_to-iobject");t.exports = function (e, t) {
        for (var r, i = n(e), s = o(i), c = s.length, u = 0; c > u;) {
          if (i[r = s[u++]] === t) return r;
        }
      };
    }, { "./_object-keys": 60, "./_to-iobject": 72 }], 49: [function (e, t, r) {
      t.exports = !0;
    }, {}], 50: [function (e, t, r) {
      var o = e("./_uid")("meta"),
          n = e("./_is-object"),
          i = e("./_has"),
          s = e("./_object-dp").f,
          c = 0,
          u = Object.isExtensible || function () {
        return !0;
      },
          a = !e("./_fails")(function () {
        return u(Object.preventExtensions({}));
      }),
          f = function f(e) {
        s(e, o, { value: { i: "O" + ++c, w: {} } });
      },
          l = function l(e, t) {
        if (!n(e)) return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : ("string" == typeof e ? "S" : "P") + e;if (!i(e, o)) {
          if (!u(e)) return "F";if (!t) return "E";f(e);
        }return e[o].i;
      },
          p = function p(e, t) {
        if (!i(e, o)) {
          if (!u(e)) return !0;if (!t) return !1;f(e);
        }return e[o].w;
      },
          _ = function _(e) {
        return a && d.NEED && u(e) && !i(e, o) && f(e), e;
      },
          d = t.exports = { KEY: o, NEED: !1, fastKey: l, getWeak: p, onFreeze: _ };
    }, { "./_fails": 35, "./_has": 37, "./_is-object": 43, "./_object-dp": 52, "./_uid": 76 }], 51: [function (e, t, r) {
      var o = e("./_an-object"),
          n = e("./_object-dps"),
          i = e("./_enum-bug-keys"),
          s = e("./_shared-key")("IE_PROTO"),
          c = function c() {},
          u = "prototype",
          _a = function a() {
        var t,
            r = e("./_dom-create")("iframe"),
            o = i.length,
            n = ">";for (r.style.display = "none", e("./_html").appendChild(r), r.src = "javascript:", t = r.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + n), t.close(), _a = t.F; o--;) {
          delete _a[u][i[o]];
        }return _a();
      };t.exports = Object.create || function (e, t) {
        var r;return null !== e ? (c[u] = o(e), r = new c(), c[u] = null, r[s] = e) : r = _a(), void 0 === t ? r : n(r, t);
      };
    }, { "./_an-object": 24, "./_dom-create": 31, "./_enum-bug-keys": 32, "./_html": 39, "./_object-dps": 53, "./_shared-key": 67 }], 52: [function (e, t, r) {
      var o = e("./_an-object"),
          n = e("./_ie8-dom-define"),
          i = e("./_to-primitive"),
          s = Object.defineProperty;r.f = e("./_descriptors") ? Object.defineProperty : function (e, t, r) {
        if (o(e), t = i(t, !0), o(r), n) try {
          return s(e, t, r);
        } catch (c) {}if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");return "value" in r && (e[t] = r.value), e;
      };
    }, { "./_an-object": 24, "./_descriptors": 30, "./_ie8-dom-define": 40, "./_to-primitive": 75 }], 53: [function (e, t, r) {
      var o = e("./_object-dp"),
          n = e("./_an-object"),
          i = e("./_object-keys");t.exports = e("./_descriptors") ? Object.defineProperties : function (e, t) {
        n(e);for (var r, s = i(t), c = s.length, u = 0; c > u;) {
          o.f(e, r = s[u++], t[r]);
        }return e;
      };
    }, { "./_an-object": 24, "./_descriptors": 30, "./_object-dp": 52, "./_object-keys": 60 }], 54: [function (e, t, r) {
      var o = e("./_object-pie"),
          n = e("./_property-desc"),
          i = e("./_to-iobject"),
          s = e("./_to-primitive"),
          c = e("./_has"),
          u = e("./_ie8-dom-define"),
          a = Object.getOwnPropertyDescriptor;r.f = e("./_descriptors") ? a : function (e, t) {
        if (e = i(e), t = s(t, !0), u) try {
          return a(e, t);
        } catch (r) {}if (c(e, t)) return n(!o.f.call(e, t), e[t]);
      };
    }, { "./_descriptors": 30, "./_has": 37, "./_ie8-dom-define": 40, "./_object-pie": 61, "./_property-desc": 63, "./_to-iobject": 72, "./_to-primitive": 75 }], 55: [function (e, t, r) {
      var o = e("./_to-iobject"),
          n = e("./_object-gopn").f,
          i = {}.toString,
          s = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          c = function c(e) {
        try {
          return n(e);
        } catch (t) {
          return s.slice();
        }
      };t.exports.f = function (e) {
        return s && "[object Window]" == i.call(e) ? c(e) : n(o(e));
      };
    }, { "./_object-gopn": 56, "./_to-iobject": 72 }], 56: [function (e, t, r) {
      var o = e("./_object-keys-internal"),
          n = e("./_enum-bug-keys").concat("length", "prototype");r.f = Object.getOwnPropertyNames || function (e) {
        return o(e, n);
      };
    }, { "./_enum-bug-keys": 32, "./_object-keys-internal": 59 }], 57: [function (e, t, r) {
      r.f = Object.getOwnPropertySymbols;
    }, {}], 58: [function (e, t, r) {
      var o = e("./_has"),
          n = e("./_to-object"),
          i = e("./_shared-key")("IE_PROTO"),
          s = Object.prototype;t.exports = Object.getPrototypeOf || function (e) {
        return e = n(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
      };
    }, { "./_has": 37, "./_shared-key": 67, "./_to-object": 74 }], 59: [function (e, t, r) {
      var o = e("./_has"),
          n = e("./_to-iobject"),
          i = e("./_array-includes")(!1),
          s = e("./_shared-key")("IE_PROTO");t.exports = function (e, t) {
        var r,
            c = n(e),
            u = 0,
            a = [];for (r in c) {
          r != s && o(c, r) && a.push(r);
        }for (; t.length > u;) {
          o(c, r = t[u++]) && (~i(a, r) || a.push(r));
        }return a;
      };
    }, { "./_array-includes": 25, "./_has": 37, "./_shared-key": 67, "./_to-iobject": 72 }], 60: [function (e, t, r) {
      var o = e("./_object-keys-internal"),
          n = e("./_enum-bug-keys");t.exports = Object.keys || function (e) {
        return o(e, n);
      };
    }, { "./_enum-bug-keys": 32, "./_object-keys-internal": 59 }], 61: [function (e, t, r) {
      r.f = {}.propertyIsEnumerable;
    }, {}], 62: [function (e, t, r) {
      var o = e("./_export"),
          n = e("./_core"),
          i = e("./_fails");t.exports = function (e, t) {
        var r = (n.Object || {})[e] || Object[e],
            s = {};s[e] = t(r), o(o.S + o.F * i(function () {
          r(1);
        }), "Object", s);
      };
    }, { "./_core": 27, "./_export": 34, "./_fails": 35 }], 63: [function (e, t, r) {
      t.exports = function (e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
    }, {}], 64: [function (e, t, r) {
      t.exports = e("./_hide");
    }, { "./_hide": 38 }], 65: [function (e, t, r) {
      var o = e("./_is-object"),
          n = e("./_an-object"),
          i = function i(e, t) {
        if (n(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
      };t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, r, o) {
          try {
            o = e("./_ctx")(Function.call, e("./_object-gopd").f(Object.prototype, "__proto__").set, 2), o(t, []), r = !(t instanceof Array);
          } catch (n) {
            r = !0;
          }return function (e, t) {
            return i(e, t), r ? e.__proto__ = t : o(e, t), e;
          };
        }({}, !1) : void 0), check: i };
    }, { "./_an-object": 24, "./_ctx": 28, "./_is-object": 43, "./_object-gopd": 54 }], 66: [function (e, t, r) {
      var o = e("./_object-dp").f,
          n = e("./_has"),
          i = e("./_wks")("toStringTag");t.exports = function (e, t, r) {
        e && !n(e = r ? e : e.prototype, i) && o(e, i, { configurable: !0, value: t });
      };
    }, { "./_has": 37, "./_object-dp": 52, "./_wks": 79 }], 67: [function (e, t, r) {
      var o = e("./_shared")("keys"),
          n = e("./_uid");t.exports = function (e) {
        return o[e] || (o[e] = n(e));
      };
    }, { "./_shared": 68, "./_uid": 76 }], 68: [function (e, t, r) {
      var o = e("./_global"),
          n = "__core-js_shared__",
          i = o[n] || (o[n] = {});t.exports = function (e) {
        return i[e] || (i[e] = {});
      };
    }, { "./_global": 36 }], 69: [function (e, t, r) {
      var o = e("./_to-integer"),
          n = e("./_defined");t.exports = function (e) {
        return function (t, r) {
          var i,
              s,
              c = String(n(t)),
              u = o(r),
              a = c.length;return u < 0 || u >= a ? e ? "" : void 0 : (i = c.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === a || (s = c.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? c.charAt(u) : i : e ? c.slice(u, u + 2) : (i - 55296 << 10) + (s - 56320) + 65536);
        };
      };
    }, { "./_defined": 29, "./_to-integer": 71 }], 70: [function (e, t, r) {
      var o = e("./_to-integer"),
          n = Math.max,
          i = Math.min;t.exports = function (e, t) {
        return e = o(e), e < 0 ? n(e + t, 0) : i(e, t);
      };
    }, { "./_to-integer": 71 }], 71: [function (e, t, r) {
      var o = Math.ceil,
          n = Math.floor;t.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : o)(e);
      };
    }, {}], 72: [function (e, t, r) {
      var o = e("./_iobject"),
          n = e("./_defined");t.exports = function (e) {
        return o(n(e));
      };
    }, { "./_defined": 29, "./_iobject": 41 }], 73: [function (e, t, r) {
      var o = e("./_to-integer"),
          n = Math.min;t.exports = function (e) {
        return e > 0 ? n(o(e), 9007199254740991) : 0;
      };
    }, { "./_to-integer": 71 }], 74: [function (e, t, r) {
      var o = e("./_defined");t.exports = function (e) {
        return Object(o(e));
      };
    }, { "./_defined": 29 }], 75: [function (e, t, r) {
      var o = e("./_is-object");t.exports = function (e, t) {
        if (!o(e)) return e;var r, n;if (t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;if ("function" == typeof (r = e.valueOf) && !o(n = r.call(e))) return n;if (!t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;throw TypeError("Can't convert object to primitive value");
      };
    }, { "./_is-object": 43 }], 76: [function (e, t, r) {
      var o = 0,
          n = Math.random();t.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++o + n).toString(36));
      };
    }, {}], 77: [function (e, t, r) {
      var o = e("./_global"),
          n = e("./_core"),
          i = e("./_library"),
          s = e("./_wks-ext"),
          c = e("./_object-dp").f;t.exports = function (e) {
        var t = n.Symbol || (n.Symbol = i ? {} : o.Symbol || {});"_" == e.charAt(0) || e in t || c(t, e, { value: s.f(e) });
      };
    }, { "./_core": 27, "./_global": 36, "./_library": 49, "./_object-dp": 52, "./_wks-ext": 78 }], 78: [function (e, t, r) {
      r.f = e("./_wks");
    }, { "./_wks": 79 }], 79: [function (e, t, r) {
      var o = e("./_shared")("wks"),
          n = e("./_uid"),
          i = e("./_global").Symbol,
          s = "function" == typeof i,
          c = t.exports = function (e) {
        return o[e] || (o[e] = s && i[e] || (s ? i : n)("Symbol." + e));
      };c.store = o;
    }, { "./_global": 36, "./_shared": 68, "./_uid": 76 }], 80: [function (e, t, r) {
      "use strict";
      var o = e("./_add-to-unscopables"),
          n = e("./_iter-step"),
          i = e("./_iterators"),
          s = e("./_to-iobject");t.exports = e("./_iter-define")(Array, "Array", function (e, t) {
        this._t = s(e), this._i = 0, this._k = t;
      }, function () {
        var e = this._t,
            t = this._k,
            r = this._i++;return !e || r >= e.length ? (this._t = void 0, n(1)) : "keys" == t ? n(0, r) : "values" == t ? n(0, e[r]) : n(0, [r, e[r]]);
      }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
    }, { "./_add-to-unscopables": 23, "./_iter-define": 45, "./_iter-step": 46, "./_iterators": 47, "./_to-iobject": 72 }], 81: [function (e, t, r) {
      var o = e("./_export");o(o.S, "Object", { create: e("./_object-create") });
    }, { "./_export": 34, "./_object-create": 51 }], 82: [function (e, t, r) {
      var o = e("./_export");o(o.S + o.F * !e("./_descriptors"), "Object", { defineProperty: e("./_object-dp").f });
    }, { "./_descriptors": 30, "./_export": 34, "./_object-dp": 52 }], 83: [function (e, t, r) {
      var o = e("./_to-object"),
          n = e("./_object-gpo");e("./_object-sap")("getPrototypeOf", function () {
        return function (e) {
          return n(o(e));
        };
      });
    }, { "./_object-gpo": 58, "./_object-sap": 62, "./_to-object": 74 }], 84: [function (e, t, r) {
      var o = e("./_to-object"),
          n = e("./_object-keys");e("./_object-sap")("keys", function () {
        return function (e) {
          return n(o(e));
        };
      });
    }, { "./_object-keys": 60, "./_object-sap": 62, "./_to-object": 74 }], 85: [function (e, t, r) {
      var o = e("./_export");o(o.S, "Object", { setPrototypeOf: e("./_set-proto").set });
    }, { "./_export": 34, "./_set-proto": 65 }], 86: [function (e, t, r) {}, {}], 87: [function (e, t, r) {
      "use strict";
      var o = e("./_string-at")(!0);e("./_iter-define")(String, "String", function (e) {
        this._t = String(e), this._i = 0;
      }, function () {
        var e,
            t = this._t,
            r = this._i;return r >= t.length ? { value: void 0, done: !0 } : (e = o(t, r), this._i += e.length, { value: e, done: !1 });
      });
    }, { "./_iter-define": 45, "./_string-at": 69 }], 88: [function (e, t, r) {
      "use strict";
      var o = e("./_global"),
          n = e("./_has"),
          i = e("./_descriptors"),
          s = e("./_export"),
          c = e("./_redefine"),
          u = e("./_meta").KEY,
          a = e("./_fails"),
          f = e("./_shared"),
          l = e("./_set-to-string-tag"),
          p = e("./_uid"),
          _ = e("./_wks"),
          d = e("./_wks-ext"),
          b = e("./_wks-define"),
          y = e("./_keyof"),
          h = e("./_enum-keys"),
          m = e("./_is-array"),
          j = e("./_an-object"),
          g = e("./_to-iobject"),
          v = e("./_to-primitive"),
          w = e("./_property-desc"),
          x = e("./_object-create"),
          k = e("./_object-gopn-ext"),
          O = e("./_object-gopd"),
          P = e("./_object-dp"),
          S = e("./_object-keys"),
          E = O.f,
          T = P.f,
          C = k.f,
          _M = o.Symbol,
          A = o.JSON,
          D = A && A.stringify,
          F = "prototype",
          N = _("_hidden"),
          R = _("toPrimitive"),
          L = {}.propertyIsEnumerable,
          I = f("symbol-registry"),
          U = f("symbols"),
          J = f("op-symbols"),
          V = Object[F],
          W = "function" == typeof _M,
          z = o.QObject,
          q = !z || !z[F] || !z[F].findChild,
          G = i && a(function () {
        return 7 != x(T({}, "a", { get: function get() {
            return T(this, "a", { value: 7 }).a;
          } })).a;
      }) ? function (e, t, r) {
        var o = E(V, t);o && delete V[t], T(e, t, r), o && e !== V && T(V, t, o);
      } : T,
          K = function K(e) {
        var t = U[e] = x(_M[F]);return t._k = e, t;
      },
          Y = W && "symbol" == _typeof(_M.iterator) ? function (e) {
        return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      } : function (e) {
        return e instanceof _M;
      },
          Z = function Z(e, t, r) {
        return e === V && Z(J, t, r), j(e), t = v(t, !0), j(r), n(U, t) ? (r.enumerable ? (n(e, N) && e[N][t] && (e[N][t] = !1), r = x(r, { enumerable: w(0, !1) })) : (n(e, N) || T(e, N, w(1, {})), e[N][t] = !0), G(e, t, r)) : T(e, t, r);
      },
          $ = function $(e, t) {
        j(e);for (var r, o = h(t = g(t)), n = 0, i = o.length; i > n;) {
          Z(e, r = o[n++], t[r]);
        }return e;
      },
          B = function B(e, t) {
        return void 0 === t ? x(e) : $(x(e), t);
      },
          H = function H(e) {
        var t = L.call(this, e = v(e, !0));return !(this === V && n(U, e) && !n(J, e)) && (!(t || !n(this, e) || !n(U, e) || n(this, N) && this[N][e]) || t);
      },
          Q = function Q(e, t) {
        if (e = g(e), t = v(t, !0), e !== V || !n(U, t) || n(J, t)) {
          var r = E(e, t);return !r || !n(U, t) || n(e, N) && e[N][t] || (r.enumerable = !0), r;
        }
      },
          X = function X(e) {
        for (var t, r = C(g(e)), o = [], i = 0; r.length > i;) {
          n(U, t = r[i++]) || t == N || t == u || o.push(t);
        }return o;
      },
          ee = function ee(e) {
        for (var t, r = e === V, o = C(r ? J : g(e)), i = [], s = 0; o.length > s;) {
          !n(U, t = o[s++]) || r && !n(V, t) || i.push(U[t]);
        }return i;
      };W || (_M = function M() {
        if (this instanceof _M) throw TypeError("Symbol is not a constructor!");var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function t(r) {
          this === V && t.call(J, r), n(this, N) && n(this[N], e) && (this[N][e] = !1), G(this, e, w(1, r));
        };return i && q && G(V, e, { configurable: !0, set: t }), K(e);
      }, c(_M[F], "toString", function () {
        return this._k;
      }), O.f = Q, P.f = Z, e("./_object-gopn").f = k.f = X, e("./_object-pie").f = H, e("./_object-gops").f = ee, i && !e("./_library") && c(V, "propertyIsEnumerable", H, !0), d.f = function (e) {
        return K(_(e));
      }), s(s.G + s.W + s.F * !W, { Symbol: _M });for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; te.length > re;) {
        _(te[re++]);
      }for (var te = S(_.store), re = 0; te.length > re;) {
        b(te[re++]);
      }s(s.S + s.F * !W, "Symbol", { "for": function _for(e) {
          return n(I, e += "") ? I[e] : I[e] = _M(e);
        }, keyFor: function keyFor(e) {
          if (Y(e)) return y(I, e);throw TypeError(e + " is not a symbol!");
        }, useSetter: function useSetter() {
          q = !0;
        }, useSimple: function useSimple() {
          q = !1;
        } }), s(s.S + s.F * !W, "Object", { create: B, defineProperty: Z, defineProperties: $, getOwnPropertyDescriptor: Q, getOwnPropertyNames: X, getOwnPropertySymbols: ee }), A && s(s.S + s.F * (!W || a(function () {
        var e = _M();return "[null]" != D([e]) || "{}" != D({ a: e }) || "{}" != D(Object(e));
      })), "JSON", { stringify: function stringify(e) {
          if (void 0 !== e && !Y(e)) {
            for (var t, r, o = [e], n = 1; arguments.length > n;) {
              o.push(arguments[n++]);
            }return t = o[1], "function" == typeof t && (r = t), !r && m(t) || (t = function t(e, _t2) {
              if (r && (_t2 = r.call(this, e, _t2)), !Y(_t2)) return _t2;
            }), o[1] = t, D.apply(A, o);
          }
        } }), _M[F][R] || e("./_hide")(_M[F], R, _M[F].valueOf), l(_M, "Symbol"), l(Math, "Math", !0), l(o.JSON, "JSON", !0);
    }, { "./_an-object": 24, "./_descriptors": 30, "./_enum-keys": 33, "./_export": 34, "./_fails": 35, "./_global": 36, "./_has": 37, "./_hide": 38, "./_is-array": 42, "./_keyof": 48, "./_library": 49, "./_meta": 50, "./_object-create": 51, "./_object-dp": 52, "./_object-gopd": 54, "./_object-gopn": 56, "./_object-gopn-ext": 55, "./_object-gops": 57, "./_object-keys": 60, "./_object-pie": 61, "./_property-desc": 63, "./_redefine": 64, "./_set-to-string-tag": 66, "./_shared": 68, "./_to-iobject": 72, "./_to-primitive": 75, "./_uid": 76, "./_wks": 79, "./_wks-define": 77, "./_wks-ext": 78 }], 89: [function (e, t, r) {
      e("./_wks-define")("asyncIterator");
    }, { "./_wks-define": 77 }], 90: [function (e, t, r) {
      e("./_wks-define")("observable");
    }, { "./_wks-define": 77 }], 91: [function (e, t, r) {
      e("./es6.array.iterator");for (var o = e("./_global"), n = e("./_hide"), i = e("./_iterators"), s = e("./_wks")("toStringTag"), c = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
        var a = c[u],
            f = o[a],
            l = f && f.prototype;l && !l[s] && n(l, s, a), i[a] = i.Array;
      }
    }, { "./_global": 36, "./_hide": 38, "./_iterators": 47, "./_wks": 79, "./es6.array.iterator": 80 }], 92: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = e("babel-runtime/helpers/classCallCheck"),
          i = o(n),
          s = e("babel-runtime/helpers/createClass"),
          c = o(s),
          u = function () {
        function e() {
          if ((0, i["default"])(this, e), this.constructor === e) throw new TypeError("Can not construct abstract class.");if (this.constructor === e.prototype.constructor) throw new TypeError("Please implement abstract method constructor.");
        }return (0, c["default"])(e, null, [{ key: "loadPolicies", value: function value() {
            throw this === e ? new TypeError("Can not call static abstract method loadPolicies.") : this.loadPolicies === e.loadPolicies ? new TypeError("Please implement static abstract method loadPolicies.") : new TypeError("Do not call static abstract method loadPolicies from child.");
          } }, { key: "addSubscriptionPolicy", value: function value() {
            throw this === e ? new TypeError("Can not call static abstract method addSubscriptionPolicy.") : this.addSubscriptionPolicy === e.addSubscriptionPolicy ? new TypeError("Please implement static abstract method addSubscriptionPolicy.") : new TypeError("Do not call static abstract method addSubscriptionPolicy from child.");
          } }, { key: "isToVerify", value: function value() {
            throw this === e ? new TypeError("Can not call static abstract method isToVerify.") : this.isToVerify === e.isToVerify ? new TypeError("Please implement static abstract method isToVerify.") : new TypeError("Do not call static abstract method isToVerify from child.");
          } }, { key: "getApplicablePolicies", value: function value() {
            throw this === e ? new TypeError("Can not call static abstract method getApplicablePolicies.") : this.getApplicablePolicies === e.getApplicablePolicies ? new TypeError("Please implement static abstract method getApplicablePolicies.") : new TypeError("Do not call static abstract method getApplicablePolicies from child.");
          } }, { key: "applyPolicies", value: function value() {
            throw this === e ? new TypeError("Can not call static abstract method applyPolicies.") : this.applyPolicies === e.applyPolicies ? new TypeError("Please implement static abstract method applyPolicies.") : new TypeError("Do not call static abstract method applyPolicies from child.");
          } }, { key: "authorise", value: function value() {
            throw this === e ? new TypeError("Can not call static abstract method authorise.") : this.authorise === e.authorise ? new TypeError("Please implement static abstract method authorise.") : new TypeError("Do not call static abstract method authorise from child.");
          } }]), e;
      }();r["default"] = u, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 9, "babel-runtime/helpers/createClass": 10 }], 93: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = e("babel-runtime/core-js/object/get-prototype-of"),
          i = o(n),
          s = e("babel-runtime/helpers/classCallCheck"),
          c = o(s),
          u = e("babel-runtime/helpers/createClass"),
          a = o(u),
          f = e("babel-runtime/helpers/possibleConstructorReturn"),
          l = o(f),
          p = e("babel-runtime/helpers/inherits"),
          _ = o(p),
          d = e("../Context"),
          b = o(d),
          y = e("../../utils/utils"),
          h = function (e) {
        function t() {
          (0, c["default"])(this, t);var e = (0, l["default"])(this, (0, i["default"])(t).call(this)),
              r = e;return r.policies = r.loadPolicies(), r.groups = {}, e;
        }return (0, _["default"])(t, e), (0, a["default"])(t, [{ key: "applyPolicies", value: function value(e) {
            var t = this,
                r = [!0, []],
                o = t.getApplicablePolicies(e);return r = t.pdp.evaluate(e, o), e.body.auth = 0 !== o.length, t.pep.enforce(r), { message: e, policiesResult: r };
          } }, { key: "_getDate", value: function value() {
            var e = new Date(),
                t = String(e.getDate());1 === t.length && (t = "0" + t);var r = String(e.getMonth() + 1);return 1 === r.length && (r = "0" + r), t + "/" + r + "/" + e.getFullYear();
          } }, { key: "_getList", value: function value(e, t) {
            var r = this,
                o = r.groups,
                n = [];return void 0 !== o[e] && void 0 !== o[e][t] && (n = o[e][t]), n;
          } }, { key: "_getTime", value: function value() {
            var e = new Date(),
                t = String(e.getMinutes());return 1 === t.length && (t = "0" + t), parseInt(String(e.getHours()) + t);
          } }, { key: "_getWeekDay", value: function value() {
            return String(new Date().getDay());
          } }, { key: "date", set: function set(e) {
            var t = this;e.message || (t._dateAttribute = "string" == typeof e ? e : t._getDate());
          }, get: function get() {
            var e = this;return e._dateAttribute;
          } }, { key: "domain", set: function set(e) {
            var t = this;t._domainAttribute = (0, y.divideEmail)(e.message.body.identity.userProfile.username).domain;
          }, get: function get() {
            var e = this;return e._domainAttribute;
          } }, { key: "source", set: function set(e) {
            var t = this;t._sourceAttribute = e.message.body.identity.userProfile.username;
          }, get: function get() {
            var e = this;return e._sourceAttribute;
          } }, { key: "time", set: function set(e) {
            var t = this;e.message || (t._timeAttribute = e ? e : t._getTime());
          }, get: function get() {
            var e = this;return e._timeAttribute;
          } }, { key: "weekday", set: function set(e) {
            var t = this;e.message || (t._weekdayAttribute = e ? e : t._getWeekDay());
          }, get: function get() {
            var e = this;return e._weekdayAttribute;
          } }]), t;
      }(b["default"]);r["default"] = h, t.exports = r["default"];
    }, { "../../utils/utils": 95, "../Context": 92, "babel-runtime/core-js/object/get-prototype-of": 4, "babel-runtime/helpers/classCallCheck": 9, "babel-runtime/helpers/createClass": 10, "babel-runtime/helpers/inherits": 11, "babel-runtime/helpers/possibleConstructorReturn": 12 }], 94: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = e("babel-runtime/core-js/object/get-prototype-of"),
          i = o(n),
          s = e("babel-runtime/helpers/classCallCheck"),
          c = o(s),
          u = e("babel-runtime/helpers/createClass"),
          a = o(u),
          f = e("babel-runtime/helpers/possibleConstructorReturn"),
          l = o(f),
          p = e("babel-runtime/helpers/inherits"),
          _ = o(p),
          d = e("./CommonCtx"),
          b = o(d),
          y = function (e) {
        function t() {
          return (0, c["default"])(this, t), (0, l["default"])(this, (0, i["default"])(t).call(this));
        }return (0, _["default"])(t, e), (0, a["default"])(t, [{ key: "loadPolicies", value: function value() {
            return {};
          } }, { key: "getApplicablePolicies", value: function value() {
            var e = this,
                t = e.policies,
                r = [];for (var o in t) {
              r.push.apply(r, t[o]);
            }return r;
          } }, { key: "authorise", value: function value(e) {
            var t = this;e.body = e.body || {};var r = void 0,
                o = t.isToVerify(e);if (o) {
              r = t.applyPolicies(e);var n = r.policiesResult[0];return n;
            }return !0;
          } }, { key: "isToVerify", value: function value() {
            return !0;
          } }, { key: "group", set: function set(e) {
            var t = this;t.groupAttribute = t._getList(e.scope, e.group);
          }, get: function get() {
            var e = this;return e.groupAttribute;
          } }]), t;
      }(b["default"]);r["default"] = y, t.exports = r["default"];
    }, { "./CommonCtx": 93, "babel-runtime/core-js/object/get-prototype-of": 4, "babel-runtime/helpers/classCallCheck": 9, "babel-runtime/helpers/createClass": 10, "babel-runtime/helpers/inherits": 11, "babel-runtime/helpers/possibleConstructorReturn": 12 }], 95: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }function n(e) {
        if (!e) throw Error("URL is needed to split");var t = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,
            r = "$1,$2,$3",
            o = e.replace(t, r).split(",");o[0] === e && (o[0] = "https", o[1] = e);var n = { type: o[0], domain: o[1], identity: o[2] };return n;
      }function i(e) {
        var t = e.indexOf("@"),
            r = { username: e.substring(0, t), domain: e.substring(t + 1, e.length) };return r;
      }function s(e) {
        return !((0, b["default"])(e).length > 0);
      }function c(e) {
        if (e) return JSON.parse((0, _["default"])(e));
      }function u(e) {
        var t = e.indexOf("@");return "user://" + e.substring(t + 1, e.length) + "/" + e.substring(0, t);
      }function a(e) {
        var t = n(e);return t.identity.replace("/", "") + "@" + t.domain;
      }function f(e) {
        if ("user://" === e.substring(0, 7)) {
          var t = n(e);if (t.domain && t.identity) return e;throw "userURL with wrong format";
        }return u(e);
      }function l(e) {
        var t = ["domain-idp", "runtime", "domain", "hyperty"],
            r = e.split("://"),
            o = r[0];return t.indexOf(o) === -1;
      }Object.defineProperty(r, "__esModule", { value: !0 });var p = e("babel-runtime/core-js/json/stringify"),
          _ = o(p),
          d = e("babel-runtime/core-js/object/keys"),
          b = o(d);r.divideURL = n, r.divideEmail = i, r.emptyObject = s, r.deepClone = c, r.getUserURLFromEmail = u, r.getUserEmailFromURL = a, r.convertToUserURL = f, r.isDataObjectURL = l;
    }, { "babel-runtime/core-js/json/stringify": 1, "babel-runtime/core-js/object/keys": 5 }] }, {}, [94])(94);
});
//# sourceMappingURL=MessageNodeCtx.js.map