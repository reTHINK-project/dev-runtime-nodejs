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

// Distribution file for PolicyEngine.js 
// version: 0.5.1
// Last build: Mon Jul 25 2016 09:11:47 GMT+0100 (WEST)

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.PolicyEngine = e();
  }
}(function () {
  return function e(t, r, n) {
    function o(u, s) {
      if (!r[u]) {
        if (!t[u]) {
          var c = "function" == typeof require && require;if (!s && c) return c(u, !0);if (i) return i(u, !0);var a = new Error("Cannot find module '" + u + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var f = r[u] = { exports: {} };t[u][0].call(f.exports, function (e) {
          var r = t[u][1][e];return o(r ? r : e);
        }, f, f.exports, e, t, r, n);
      }return r[u].exports;
    }for (var i = "function" == typeof require && require, u = 0; u < n.length; u++) {
      o(n[u]);
    }return o;
  }({ 1: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/define-property"), __esModule: !0 };
    }, { "core-js/library/fn/object/define-property": 7 }], 2: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/symbol"), __esModule: !0 };
    }, { "core-js/library/fn/symbol": 8 }], 3: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/symbol/iterator"), __esModule: !0 };
    }, { "core-js/library/fn/symbol/iterator": 9 }], 4: [function (e, t, r) {
      "use strict";
      r.__esModule = !0, r["default"] = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      };
    }, {}], 5: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var o = e("../core-js/object/define-property"),
          i = n(o);r["default"] = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i["default"])(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }();
    }, { "../core-js/object/define-property": 1 }], 6: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var o = e("../core-js/symbol/iterator"),
          i = n(o),
          u = e("../core-js/symbol"),
          s = n(u),
          c = "function" == typeof s["default"] && "symbol" == _typeof(i["default"]) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof s["default"] && e.constructor === s["default"] ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      };r["default"] = "function" == typeof s["default"] && "symbol" === c(i["default"]) ? function (e) {
        return "undefined" == typeof e ? "undefined" : c(e);
      } : function (e) {
        return e && "function" == typeof s["default"] && e.constructor === s["default"] ? "symbol" : "undefined" == typeof e ? "undefined" : c(e);
      };
    }, { "../core-js/symbol": 2, "../core-js/symbol/iterator": 3 }], 7: [function (e, t, r) {
      e("../../modules/es6.object.define-property");var n = e("../../modules/_core").Object;t.exports = function (e, t, r) {
        return n.defineProperty(e, t, r);
      };
    }, { "../../modules/_core": 15, "../../modules/es6.object.define-property": 67 }], 8: [function (e, t, r) {
      e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), e("../../modules/es7.symbol.async-iterator"), e("../../modules/es7.symbol.observable"), t.exports = e("../../modules/_core").Symbol;
    }, { "../../modules/_core": 15, "../../modules/es6.object.to-string": 68, "../../modules/es6.symbol": 70, "../../modules/es7.symbol.async-iterator": 71, "../../modules/es7.symbol.observable": 72 }], 9: [function (e, t, r) {
      e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/_wks-ext").f("iterator");
    }, { "../../modules/_wks-ext": 64, "../../modules/es6.string.iterator": 69, "../../modules/web.dom.iterable": 73 }], 10: [function (e, t, r) {
      t.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
      };
    }, {}], 11: [function (e, t, r) {
      t.exports = function () {};
    }, {}], 12: [function (e, t, r) {
      var n = e("./_is-object");t.exports = function (e) {
        if (!n(e)) throw TypeError(e + " is not an object!");return e;
      };
    }, { "./_is-object": 31 }], 13: [function (e, t, r) {
      var n = e("./_to-iobject"),
          o = e("./_to-length"),
          i = e("./_to-index");t.exports = function (e) {
        return function (t, r, u) {
          var s,
              c = n(t),
              a = o(c.length),
              f = i(u, a);if (e && r != r) {
            for (; a > f;) {
              if (s = c[f++], s != s) return !0;
            }
          } else for (; a > f; f++) {
            if ((e || f in c) && c[f] === r) return e || f || 0;
          }return !e && -1;
        };
      };
    }, { "./_to-index": 56, "./_to-iobject": 58, "./_to-length": 59 }], 14: [function (e, t, r) {
      var n = {}.toString;t.exports = function (e) {
        return n.call(e).slice(8, -1);
      };
    }, {}], 15: [function (e, t, r) {
      var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
    }, {}], 16: [function (e, t, r) {
      var n = e("./_a-function");t.exports = function (e, t, r) {
        if (n(e), void 0 === t) return e;switch (r) {case 1:
            return function (r) {
              return e.call(t, r);
            };case 2:
            return function (r, n) {
              return e.call(t, r, n);
            };case 3:
            return function (r, n, o) {
              return e.call(t, r, n, o);
            };}return function () {
          return e.apply(t, arguments);
        };
      };
    }, { "./_a-function": 10 }], 17: [function (e, t, r) {
      t.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);return e;
      };
    }, {}], 18: [function (e, t, r) {
      t.exports = !e("./_fails")(function () {
        return 7 != Object.defineProperty({}, "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, { "./_fails": 23 }], 19: [function (e, t, r) {
      var n = e("./_is-object"),
          o = e("./_global").document,
          i = n(o) && n(o.createElement);t.exports = function (e) {
        return i ? o.createElement(e) : {};
      };
    }, { "./_global": 24, "./_is-object": 31 }], 20: [function (e, t, r) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {}], 21: [function (e, t, r) {
      var n = e("./_object-keys"),
          o = e("./_object-gops"),
          i = e("./_object-pie");t.exports = function (e) {
        var t = n(e),
            r = o.f;if (r) for (var u, s = r(e), c = i.f, a = 0; s.length > a;) {
          c.call(e, u = s[a++]) && t.push(u);
        }return t;
      };
    }, { "./_object-gops": 45, "./_object-keys": 48, "./_object-pie": 49 }], 22: [function (e, t, r) {
      var n = e("./_global"),
          o = e("./_core"),
          i = e("./_ctx"),
          u = e("./_hide"),
          s = "prototype",
          c = function c(e, t, r) {
        var a,
            f,
            l,
            p = e & c.F,
            d = e & c.G,
            _ = e & c.S,
            b = e & c.P,
            y = e & c.B,
            v = e & c.W,
            h = d ? o : o[t] || (o[t] = {}),
            m = h[s],
            j = d ? n : _ ? n[t] : (n[t] || {})[s];d && (r = t);for (a in r) {
          f = !p && j && void 0 !== j[a], f && a in h || (l = f ? j[a] : r[a], h[a] = d && "function" != typeof j[a] ? r[a] : y && f ? i(l, n) : v && j[a] == l ? function (e) {
            var t = function t(_t, r, n) {
              if (this instanceof e) {
                switch (arguments.length) {case 0:
                    return new e();case 1:
                    return new e(_t);case 2:
                    return new e(_t, r);}return new e(_t, r, n);
              }return e.apply(this, arguments);
            };return t[s] = e[s], t;
          }(l) : b && "function" == typeof l ? i(Function.call, l) : l, b && ((h.virtual || (h.virtual = {}))[a] = l, e & c.R && m && !m[a] && u(m, a, l)));
        }
      };c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
    }, { "./_core": 15, "./_ctx": 16, "./_global": 24, "./_hide": 26 }], 23: [function (e, t, r) {
      t.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    }, {}], 24: [function (e, t, r) {
      var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
    }, {}], 25: [function (e, t, r) {
      var n = {}.hasOwnProperty;t.exports = function (e, t) {
        return n.call(e, t);
      };
    }, {}], 26: [function (e, t, r) {
      var n = e("./_object-dp"),
          o = e("./_property-desc");t.exports = e("./_descriptors") ? function (e, t, r) {
        return n.f(e, t, o(1, r));
      } : function (e, t, r) {
        return e[t] = r, e;
      };
    }, { "./_descriptors": 18, "./_object-dp": 40, "./_property-desc": 50 }], 27: [function (e, t, r) {
      t.exports = e("./_global").document && document.documentElement;
    }, { "./_global": 24 }], 28: [function (e, t, r) {
      t.exports = !e("./_descriptors") && !e("./_fails")(function () {
        return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, { "./_descriptors": 18, "./_dom-create": 19, "./_fails": 23 }], 29: [function (e, t, r) {
      var n = e("./_cof");t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == n(e) ? e.split("") : Object(e);
      };
    }, { "./_cof": 14 }], 30: [function (e, t, r) {
      var n = e("./_cof");t.exports = Array.isArray || function (e) {
        return "Array" == n(e);
      };
    }, { "./_cof": 14 }], 31: [function (e, t, r) {
      t.exports = function (e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e;
      };
    }, {}], 32: [function (e, t, r) {
      "use strict";
      var n = e("./_object-create"),
          o = e("./_property-desc"),
          i = e("./_set-to-string-tag"),
          u = {};e("./_hide")(u, e("./_wks")("iterator"), function () {
        return this;
      }), t.exports = function (e, t, r) {
        e.prototype = n(u, { next: o(1, r) }), i(e, t + " Iterator");
      };
    }, { "./_hide": 26, "./_object-create": 39, "./_property-desc": 50, "./_set-to-string-tag": 52, "./_wks": 65 }], 33: [function (e, t, r) {
      "use strict";
      var n = e("./_library"),
          o = e("./_export"),
          i = e("./_redefine"),
          u = e("./_hide"),
          s = e("./_has"),
          c = e("./_iterators"),
          a = e("./_iter-create"),
          f = e("./_set-to-string-tag"),
          l = e("./_object-gpo"),
          p = e("./_wks")("iterator"),
          d = !([].keys && "next" in [].keys()),
          _ = "@@iterator",
          b = "keys",
          y = "values",
          v = function v() {
        return this;
      };t.exports = function (e, t, r, h, m, j, g) {
        a(r, t, h);var x,
            k,
            w,
            O = function O(e) {
          if (!d && e in E) return E[e];switch (e) {case b:
              return function () {
                return new r(this, e);
              };case y:
              return function () {
                return new r(this, e);
              };}return function () {
            return new r(this, e);
          };
        },
            S = t + " Iterator",
            P = m == y,
            C = !1,
            E = e.prototype,
            M = E[p] || E[_] || m && E[m],
            A = M || O(m),
            T = m ? P ? O("entries") : A : void 0,
            F = "Array" == t ? E.entries || M : M;if (F && (w = l(F.call(new e())), w !== Object.prototype && (f(w, S, !0), n || s(w, p) || u(w, p, v))), P && M && M.name !== y && (C = !0, A = function A() {
          return M.call(this);
        }), n && !g || !d && !C && E[p] || u(E, p, A), c[t] = A, c[S] = v, m) if (x = { values: P ? A : O(y), keys: j ? A : O(b), entries: T }, g) for (k in x) {
          k in E || i(E, k, x[k]);
        } else o(o.P + o.F * (d || C), t, x);return x;
      };
    }, { "./_export": 22, "./_has": 25, "./_hide": 26, "./_iter-create": 32, "./_iterators": 35, "./_library": 37, "./_object-gpo": 46, "./_redefine": 51, "./_set-to-string-tag": 52, "./_wks": 65 }], 34: [function (e, t, r) {
      t.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    }, {}], 35: [function (e, t, r) {
      t.exports = {};
    }, {}], 36: [function (e, t, r) {
      var n = e("./_object-keys"),
          o = e("./_to-iobject");t.exports = function (e, t) {
        for (var r, i = o(e), u = n(i), s = u.length, c = 0; s > c;) {
          if (i[r = u[c++]] === t) return r;
        }
      };
    }, { "./_object-keys": 48, "./_to-iobject": 58 }], 37: [function (e, t, r) {
      t.exports = !0;
    }, {}], 38: [function (e, t, r) {
      var n = e("./_uid")("meta"),
          o = e("./_is-object"),
          i = e("./_has"),
          u = e("./_object-dp").f,
          s = 0,
          c = Object.isExtensible || function () {
        return !0;
      },
          a = !e("./_fails")(function () {
        return c(Object.preventExtensions({}));
      }),
          f = function f(e) {
        u(e, n, { value: { i: "O" + ++s, w: {} } });
      },
          l = function l(e, t) {
        if (!o(e)) return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : ("string" == typeof e ? "S" : "P") + e;if (!i(e, n)) {
          if (!c(e)) return "F";if (!t) return "E";f(e);
        }return e[n].i;
      },
          p = function p(e, t) {
        if (!i(e, n)) {
          if (!c(e)) return !0;if (!t) return !1;f(e);
        }return e[n].w;
      },
          d = function d(e) {
        return a && _.NEED && c(e) && !i(e, n) && f(e), e;
      },
          _ = t.exports = { KEY: n, NEED: !1, fastKey: l, getWeak: p, onFreeze: d };
    }, { "./_fails": 23, "./_has": 25, "./_is-object": 31, "./_object-dp": 40, "./_uid": 62 }], 39: [function (e, t, r) {
      var n = e("./_an-object"),
          o = e("./_object-dps"),
          i = e("./_enum-bug-keys"),
          u = e("./_shared-key")("IE_PROTO"),
          s = function s() {},
          c = "prototype",
          _a = function a() {
        var t,
            r = e("./_dom-create")("iframe"),
            n = i.length,
            o = ">";for (r.style.display = "none", e("./_html").appendChild(r), r.src = "javascript:", t = r.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + o), t.close(), _a = t.F; n--;) {
          delete _a[c][i[n]];
        }return _a();
      };t.exports = Object.create || function (e, t) {
        var r;return null !== e ? (s[c] = n(e), r = new s(), s[c] = null, r[u] = e) : r = _a(), void 0 === t ? r : o(r, t);
      };
    }, { "./_an-object": 12, "./_dom-create": 19, "./_enum-bug-keys": 20, "./_html": 27, "./_object-dps": 41, "./_shared-key": 53 }], 40: [function (e, t, r) {
      var n = e("./_an-object"),
          o = e("./_ie8-dom-define"),
          i = e("./_to-primitive"),
          u = Object.defineProperty;r.f = e("./_descriptors") ? Object.defineProperty : function (e, t, r) {
        if (n(e), t = i(t, !0), n(r), o) try {
          return u(e, t, r);
        } catch (s) {}if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");return "value" in r && (e[t] = r.value), e;
      };
    }, { "./_an-object": 12, "./_descriptors": 18, "./_ie8-dom-define": 28, "./_to-primitive": 61 }], 41: [function (e, t, r) {
      var n = e("./_object-dp"),
          o = e("./_an-object"),
          i = e("./_object-keys");t.exports = e("./_descriptors") ? Object.defineProperties : function (e, t) {
        o(e);for (var r, u = i(t), s = u.length, c = 0; s > c;) {
          n.f(e, r = u[c++], t[r]);
        }return e;
      };
    }, { "./_an-object": 12, "./_descriptors": 18, "./_object-dp": 40, "./_object-keys": 48 }], 42: [function (e, t, r) {
      var n = e("./_object-pie"),
          o = e("./_property-desc"),
          i = e("./_to-iobject"),
          u = e("./_to-primitive"),
          s = e("./_has"),
          c = e("./_ie8-dom-define"),
          a = Object.getOwnPropertyDescriptor;r.f = e("./_descriptors") ? a : function (e, t) {
        if (e = i(e), t = u(t, !0), c) try {
          return a(e, t);
        } catch (r) {}if (s(e, t)) return o(!n.f.call(e, t), e[t]);
      };
    }, { "./_descriptors": 18, "./_has": 25, "./_ie8-dom-define": 28, "./_object-pie": 49, "./_property-desc": 50, "./_to-iobject": 58, "./_to-primitive": 61 }], 43: [function (e, t, r) {
      var n = e("./_to-iobject"),
          o = e("./_object-gopn").f,
          i = {}.toString,
          u = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          s = function s(e) {
        try {
          return o(e);
        } catch (t) {
          return u.slice();
        }
      };t.exports.f = function (e) {
        return u && "[object Window]" == i.call(e) ? s(e) : o(n(e));
      };
    }, { "./_object-gopn": 44, "./_to-iobject": 58 }], 44: [function (e, t, r) {
      var n = e("./_object-keys-internal"),
          o = e("./_enum-bug-keys").concat("length", "prototype");r.f = Object.getOwnPropertyNames || function (e) {
        return n(e, o);
      };
    }, { "./_enum-bug-keys": 20, "./_object-keys-internal": 47 }], 45: [function (e, t, r) {
      r.f = Object.getOwnPropertySymbols;
    }, {}], 46: [function (e, t, r) {
      var n = e("./_has"),
          o = e("./_to-object"),
          i = e("./_shared-key")("IE_PROTO"),
          u = Object.prototype;t.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), n(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
      };
    }, { "./_has": 25, "./_shared-key": 53, "./_to-object": 60 }], 47: [function (e, t, r) {
      var n = e("./_has"),
          o = e("./_to-iobject"),
          i = e("./_array-includes")(!1),
          u = e("./_shared-key")("IE_PROTO");t.exports = function (e, t) {
        var r,
            s = o(e),
            c = 0,
            a = [];for (r in s) {
          r != u && n(s, r) && a.push(r);
        }for (; t.length > c;) {
          n(s, r = t[c++]) && (~i(a, r) || a.push(r));
        }return a;
      };
    }, { "./_array-includes": 13, "./_has": 25, "./_shared-key": 53, "./_to-iobject": 58 }], 48: [function (e, t, r) {
      var n = e("./_object-keys-internal"),
          o = e("./_enum-bug-keys");t.exports = Object.keys || function (e) {
        return n(e, o);
      };
    }, { "./_enum-bug-keys": 20, "./_object-keys-internal": 47 }], 49: [function (e, t, r) {
      r.f = {}.propertyIsEnumerable;
    }, {}], 50: [function (e, t, r) {
      t.exports = function (e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
    }, {}], 51: [function (e, t, r) {
      t.exports = e("./_hide");
    }, { "./_hide": 26 }], 52: [function (e, t, r) {
      var n = e("./_object-dp").f,
          o = e("./_has"),
          i = e("./_wks")("toStringTag");t.exports = function (e, t, r) {
        e && !o(e = r ? e : e.prototype, i) && n(e, i, { configurable: !0, value: t });
      };
    }, { "./_has": 25, "./_object-dp": 40, "./_wks": 65 }], 53: [function (e, t, r) {
      var n = e("./_shared")("keys"),
          o = e("./_uid");t.exports = function (e) {
        return n[e] || (n[e] = o(e));
      };
    }, { "./_shared": 54, "./_uid": 62 }], 54: [function (e, t, r) {
      var n = e("./_global"),
          o = "__core-js_shared__",
          i = n[o] || (n[o] = {});t.exports = function (e) {
        return i[e] || (i[e] = {});
      };
    }, { "./_global": 24 }], 55: [function (e, t, r) {
      var n = e("./_to-integer"),
          o = e("./_defined");t.exports = function (e) {
        return function (t, r) {
          var i,
              u,
              s = String(o(t)),
              c = n(r),
              a = s.length;return c < 0 || c >= a ? e ? "" : void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === a || (u = s.charCodeAt(c + 1)) < 56320 || u > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : (i - 55296 << 10) + (u - 56320) + 65536);
        };
      };
    }, { "./_defined": 17, "./_to-integer": 57 }], 56: [function (e, t, r) {
      var n = e("./_to-integer"),
          o = Math.max,
          i = Math.min;t.exports = function (e, t) {
        return e = n(e), e < 0 ? o(e + t, 0) : i(e, t);
      };
    }, { "./_to-integer": 57 }], 57: [function (e, t, r) {
      var n = Math.ceil,
          o = Math.floor;t.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e);
      };
    }, {}], 58: [function (e, t, r) {
      var n = e("./_iobject"),
          o = e("./_defined");t.exports = function (e) {
        return n(o(e));
      };
    }, { "./_defined": 17, "./_iobject": 29 }], 59: [function (e, t, r) {
      var n = e("./_to-integer"),
          o = Math.min;t.exports = function (e) {
        return e > 0 ? o(n(e), 9007199254740991) : 0;
      };
    }, { "./_to-integer": 57 }], 60: [function (e, t, r) {
      var n = e("./_defined");t.exports = function (e) {
        return Object(n(e));
      };
    }, { "./_defined": 17 }], 61: [function (e, t, r) {
      var n = e("./_is-object");t.exports = function (e, t) {
        if (!n(e)) return e;var r, o;if (t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;if ("function" == typeof (r = e.valueOf) && !n(o = r.call(e))) return o;if (!t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;throw TypeError("Can't convert object to primitive value");
      };
    }, { "./_is-object": 31 }], 62: [function (e, t, r) {
      var n = 0,
          o = Math.random();t.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36));
      };
    }, {}], 63: [function (e, t, r) {
      var n = e("./_global"),
          o = e("./_core"),
          i = e("./_library"),
          u = e("./_wks-ext"),
          s = e("./_object-dp").f;t.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});"_" == e.charAt(0) || e in t || s(t, e, { value: u.f(e) });
      };
    }, { "./_core": 15, "./_global": 24, "./_library": 37, "./_object-dp": 40, "./_wks-ext": 64 }], 64: [function (e, t, r) {
      r.f = e("./_wks");
    }, { "./_wks": 65 }], 65: [function (e, t, r) {
      var n = e("./_shared")("wks"),
          o = e("./_uid"),
          i = e("./_global").Symbol,
          u = "function" == typeof i,
          s = t.exports = function (e) {
        return n[e] || (n[e] = u && i[e] || (u ? i : o)("Symbol." + e));
      };s.store = n;
    }, { "./_global": 24, "./_shared": 54, "./_uid": 62 }], 66: [function (e, t, r) {
      "use strict";
      var n = e("./_add-to-unscopables"),
          o = e("./_iter-step"),
          i = e("./_iterators"),
          u = e("./_to-iobject");t.exports = e("./_iter-define")(Array, "Array", function (e, t) {
        this._t = u(e), this._i = 0, this._k = t;
      }, function () {
        var e = this._t,
            t = this._k,
            r = this._i++;return !e || r >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, r) : "values" == t ? o(0, e[r]) : o(0, [r, e[r]]);
      }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries");
    }, { "./_add-to-unscopables": 11, "./_iter-define": 33, "./_iter-step": 34, "./_iterators": 35, "./_to-iobject": 58 }], 67: [function (e, t, r) {
      var n = e("./_export");n(n.S + n.F * !e("./_descriptors"), "Object", { defineProperty: e("./_object-dp").f });
    }, { "./_descriptors": 18, "./_export": 22, "./_object-dp": 40 }], 68: [function (e, t, r) {}, {}], 69: [function (e, t, r) {
      "use strict";
      var n = e("./_string-at")(!0);e("./_iter-define")(String, "String", function (e) {
        this._t = String(e), this._i = 0;
      }, function () {
        var e,
            t = this._t,
            r = this._i;return r >= t.length ? { value: void 0, done: !0 } : (e = n(t, r), this._i += e.length, { value: e, done: !1 });
      });
    }, { "./_iter-define": 33, "./_string-at": 55 }], 70: [function (e, t, r) {
      "use strict";
      var n = e("./_global"),
          o = e("./_has"),
          i = e("./_descriptors"),
          u = e("./_export"),
          s = e("./_redefine"),
          c = e("./_meta").KEY,
          a = e("./_fails"),
          f = e("./_shared"),
          l = e("./_set-to-string-tag"),
          p = e("./_uid"),
          d = e("./_wks"),
          _ = e("./_wks-ext"),
          b = e("./_wks-define"),
          y = e("./_keyof"),
          v = e("./_enum-keys"),
          h = e("./_is-array"),
          m = e("./_an-object"),
          j = e("./_to-iobject"),
          g = e("./_to-primitive"),
          x = e("./_property-desc"),
          k = e("./_object-create"),
          w = e("./_object-gopn-ext"),
          O = e("./_object-gopd"),
          S = e("./_object-dp"),
          P = e("./_object-keys"),
          C = O.f,
          E = S.f,
          M = w.f,
          _A = n.Symbol,
          T = n.JSON,
          F = T && T.stringify,
          N = "prototype",
          I = d("_hidden"),
          L = d("toPrimitive"),
          D = {}.propertyIsEnumerable,
          q = f("symbol-registry"),
          G = f("symbols"),
          R = f("op-symbols"),
          W = Object[N],
          B = "function" == typeof _A,
          J = n.QObject,
          K = !J || !J[N] || !J[N].findChild,
          U = i && a(function () {
        return 7 != k(E({}, "a", { get: function get() {
            return E(this, "a", { value: 7 }).a;
          } })).a;
      }) ? function (e, t, r) {
        var n = C(W, t);n && delete W[t], E(e, t, r), n && e !== W && E(W, t, n);
      } : E,
          z = function z(e) {
        var t = G[e] = k(_A[N]);return t._k = e, t;
      },
          Y = B && "symbol" == _typeof(_A.iterator) ? function (e) {
        return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      } : function (e) {
        return e instanceof _A;
      },
          Q = function Q(e, t, r) {
        return e === W && Q(R, t, r), m(e), t = g(t, !0), m(r), o(G, t) ? (r.enumerable ? (o(e, I) && e[I][t] && (e[I][t] = !1), r = k(r, { enumerable: x(0, !1) })) : (o(e, I) || E(e, I, x(1, {})), e[I][t] = !0), U(e, t, r)) : E(e, t, r);
      },
          H = function H(e, t) {
        m(e);for (var r, n = v(t = j(t)), o = 0, i = n.length; i > o;) {
          Q(e, r = n[o++], t[r]);
        }return e;
      },
          V = function V(e, t) {
        return void 0 === t ? k(e) : H(k(e), t);
      },
          X = function X(e) {
        var t = D.call(this, e = g(e, !0));return !(this === W && o(G, e) && !o(R, e)) && (!(t || !o(this, e) || !o(G, e) || o(this, I) && this[I][e]) || t);
      },
          Z = function Z(e, t) {
        if (e = j(e), t = g(t, !0), e !== W || !o(G, t) || o(R, t)) {
          var r = C(e, t);return !r || !o(G, t) || o(e, I) && e[I][t] || (r.enumerable = !0), r;
        }
      },
          $ = function $(e) {
        for (var t, r = M(j(e)), n = [], i = 0; r.length > i;) {
          o(G, t = r[i++]) || t == I || t == c || n.push(t);
        }return n;
      },
          ee = function ee(e) {
        for (var t, r = e === W, n = M(r ? R : j(e)), i = [], u = 0; n.length > u;) {
          !o(G, t = n[u++]) || r && !o(W, t) || i.push(G[t]);
        }return i;
      };B || (_A = function A() {
        if (this instanceof _A) throw TypeError("Symbol is not a constructor!");var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function t(r) {
          this === W && t.call(R, r), o(this, I) && o(this[I], e) && (this[I][e] = !1), U(this, e, x(1, r));
        };return i && K && U(W, e, { configurable: !0, set: t }), z(e);
      }, s(_A[N], "toString", function () {
        return this._k;
      }), O.f = Z, S.f = Q, e("./_object-gopn").f = w.f = $, e("./_object-pie").f = X, e("./_object-gops").f = ee, i && !e("./_library") && s(W, "propertyIsEnumerable", X, !0), _.f = function (e) {
        return z(d(e));
      }), u(u.G + u.W + u.F * !B, { Symbol: _A });for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; te.length > re;) {
        d(te[re++]);
      }for (var te = P(d.store), re = 0; te.length > re;) {
        b(te[re++]);
      }u(u.S + u.F * !B, "Symbol", { "for": function _for(e) {
          return o(q, e += "") ? q[e] : q[e] = _A(e);
        }, keyFor: function keyFor(e) {
          if (Y(e)) return y(q, e);throw TypeError(e + " is not a symbol!");
        }, useSetter: function useSetter() {
          K = !0;
        }, useSimple: function useSimple() {
          K = !1;
        } }), u(u.S + u.F * !B, "Object", { create: V, defineProperty: Q, defineProperties: H, getOwnPropertyDescriptor: Z, getOwnPropertyNames: $, getOwnPropertySymbols: ee }), T && u(u.S + u.F * (!B || a(function () {
        var e = _A();return "[null]" != F([e]) || "{}" != F({ a: e }) || "{}" != F(Object(e));
      })), "JSON", { stringify: function stringify(e) {
          if (void 0 !== e && !Y(e)) {
            for (var t, r, n = [e], o = 1; arguments.length > o;) {
              n.push(arguments[o++]);
            }return t = n[1], "function" == typeof t && (r = t), !r && h(t) || (t = function t(e, _t2) {
              if (r && (_t2 = r.call(this, e, _t2)), !Y(_t2)) return _t2;
            }), n[1] = t, F.apply(T, n);
          }
        } }), _A[N][L] || e("./_hide")(_A[N], L, _A[N].valueOf), l(_A, "Symbol"), l(Math, "Math", !0), l(n.JSON, "JSON", !0);
    }, { "./_an-object": 12, "./_descriptors": 18, "./_enum-keys": 21, "./_export": 22, "./_fails": 23, "./_global": 24, "./_has": 25, "./_hide": 26, "./_is-array": 30, "./_keyof": 36, "./_library": 37, "./_meta": 38, "./_object-create": 39, "./_object-dp": 40, "./_object-gopd": 42, "./_object-gopn": 44, "./_object-gopn-ext": 43, "./_object-gops": 45, "./_object-keys": 48, "./_object-pie": 49, "./_property-desc": 50, "./_redefine": 51, "./_set-to-string-tag": 52, "./_shared": 54, "./_to-iobject": 58, "./_to-primitive": 61, "./_uid": 62, "./_wks": 65, "./_wks-define": 63, "./_wks-ext": 64 }], 71: [function (e, t, r) {
      e("./_wks-define")("asyncIterator");
    }, { "./_wks-define": 63 }], 72: [function (e, t, r) {
      e("./_wks-define")("observable");
    }, { "./_wks-define": 63 }], 73: [function (e, t, r) {
      e("./es6.array.iterator");for (var n = e("./_global"), o = e("./_hide"), i = e("./_iterators"), u = e("./_wks")("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var a = s[c],
            f = n[a],
            l = f && f.prototype;l && !l[u] && o(l, u, a), i[a] = i.Array;
      }
    }, { "./_global": 24, "./_hide": 26, "./_iterators": 35, "./_wks": 65, "./es6.array.iterator": 66 }], 74: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          u = e("babel-runtime/helpers/createClass"),
          s = n(u),
          c = function () {
        function e() {
          (0, i["default"])(this, e);var t = this;t.operators = t.setOperators();
        }return (0, s["default"])(e, [{ key: "setOperators", value: function value() {
            var e = this,
                t = { between: function between(t) {
                return e.isBetween(t[0][0], t[0][1], t[1]);
              }, "in": function _in(e) {
                return e[0].indexOf(e[1]) > -1;
              }, equals: function equals(e) {
                return "*" === e[0][0] || e[0][0] === e[1];
              }, or: function or(e) {
                return e[0] || e[1];
              }, and: function and(e) {
                return e[0] && e[1];
              }, not: function not(e) {
                return !e[0];
              } };return t;
          } }, { key: "isBetween", value: function value(e, t, r) {
            return e = parseInt(e), t = parseInt(t), t < e && (r = r < e ? r += 2400 : r, t += 2400), r > e && r < t;
          } }]), e;
      }();r["default"] = c, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 4, "babel-runtime/helpers/createClass": 5 }], 75: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/typeof"),
          i = n(o),
          u = e("babel-runtime/helpers/classCallCheck"),
          s = n(u),
          c = e("babel-runtime/helpers/createClass"),
          a = n(c),
          f = e("./Operators"),
          l = n(f),
          p = function () {
        function e(t) {
          (0, s["default"])(this, e);var r = this;r.context = t, r.operators = new l["default"](t);
        }return (0, a["default"])(e, [{ key: "evaluate", value: function value(e, t) {
            var r = this,
                n = [!0],
                o = [];for (var u in t) {
              var s = t[u],
                  c = s.condition,
                  a = !1;if (a = "object" === ("undefined" == typeof c ? "undefined" : (0, i["default"])(c)) ? r.verifiesAdvancedCondition(c[0], c[1], c[2], s.scope, e) : r.verifiesSimpleCondition(c, s.scope, e), a && n.push(s.authorise), s.actions !== []) for (var f in s.actions) {
                var l = { method: s.actions[f].method, params: e };o.push(l);
              }
            }var p = n.indexOf(!1) === -1;return [p, o];
          } }, { key: "verifiesSimpleCondition", value: function value(e, t, r) {
            var n = this,
                o = e.split(" "),
                i = o[0],
                u = o[1],
                s = void 0;"in" === u ? (n.context.group = { scope: t, group: o[2], destination: r.to }, s = n.context.group) : s = o.slice(2), n.context[i] = { message: r };var c = n.context[i];return n.operators.operators[u]([s, c]);
          } }, { key: "verifiesAdvancedCondition", value: function value(e, t, r, n, o) {
            for (var u = this; "object" === ("undefined" == typeof t ? "undefined" : (0, i["default"])(t));) {
              t = u.verifiesAdvancedCondition(t[0], t[1], t[2], n, o);
            }if (void 0 !== r) for (; "object" === ("undefined" == typeof r ? "undefined" : (0, i["default"])(r));) {
              r = u.verifiesAdvancedCondition(r[0], r[1], r[2], n, o);
            }var s = "boolean" == typeof t ? t : u.verifiesSimpleCondition(t, n, o),
                c = void 0;return void 0 !== r && (c = "boolean" == typeof r ? r : u.verifiesSimpleCondition(r, n, o)), u.operators.operators[e]([s, c]);
          } }]), e;
      }();r["default"] = p, t.exports = r["default"];
    }, { "./Operators": 74, "babel-runtime/helpers/classCallCheck": 4, "babel-runtime/helpers/createClass": 5, "babel-runtime/helpers/typeof": 6 }], 76: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          u = e("babel-runtime/helpers/createClass"),
          s = n(u),
          c = function () {
        function e(t) {
          (0, i["default"])(this, e);var r = this;r.context = t;
        }return (0, s["default"])(e, [{ key: "enforce", value: function value(e) {
            var t = this,
                r = e[0],
                n = e[1];for (var o in n) {
              t.context[n[o].method](n[o].params, r);
            }
          } }]), e;
      }();r["default"] = c, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 4, "babel-runtime/helpers/createClass": 5 }], 77: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/typeof"),
          i = n(o),
          u = e("babel-runtime/helpers/classCallCheck"),
          s = n(u),
          c = e("babel-runtime/helpers/createClass"),
          a = n(c),
          f = e("./PEP"),
          l = n(f),
          p = e("./PDP"),
          d = n(p),
          _ = function () {
        function e(t) {
          (0, s["default"])(this, e);var r = this;r.context = t, r.context.pdp = new d["default"](t), r.context.pep = new l["default"](t);
        }return (0, a["default"])(e, [{ key: "addPolicies", value: function value(e) {
            var t = this,
                r = t.context.policies;void 0 === r && (r = {});for (var n in e) {
              var o = e[n],
                  i = o.scope;void 0 === r[i] && (r[i] = []);for (var u in r[i]) {
                var s = r[i][u];if (s.condition === o.condition) {
                  t.removePolicies(e[n].condition);break;
                }
              }r[i].push(e[n]);
            }t.context.policies = r;
          } }, { key: "removePolicies", value: function value(e, t) {
            var r = this,
                n = r.context.policies;if ("*" !== e) {
              if (e in n) {
                if ("*" !== t) {
                  var o = n[e],
                      u = "undefined" == typeof t ? "undefined" : (0, i["default"])(t);for (var s in o) {
                    var c = (0, i["default"])(o[s].condition);if (u === c) if ("string" === u) {
                      if (o[s].condition === t) {
                        o.splice(s, 1);break;
                      }
                    } else r.areEqualArrays(o[s].condition, t) && o.splice(s, 1);
                  }
                } else delete n[e];r.context.policies = n;
              }
            } else r.context.policies = {};
          } }, { key: "areEqualArrays", value: function value(e, t) {
            if (e.length !== t.length) return !1;for (var r = e.length, n = 0; n < r; n++) {
              if (e[n] instanceof Array && t[n] instanceof Array) {
                if (!e[n].equals(t[n])) return !1;
              } else if (e[n] !== t[n]) return !1;
            }return !0;
          } }, { key: "authorise", value: function value(e) {
            var t = this;return t.context.authorise(e);
          } }, { key: "getGroupsNames", value: function value(e) {
            var t = this,
                r = t.context.groups,
                n = [];if (r[e] !== {}) for (var o in r[e]) {
              n.push(o);
            }return n;
          } }, { key: "getList", value: function value(e, t) {
            var r = this,
                n = r.context.groups,
                o = [];return void 0 !== n[e] && void 0 !== n[e][t] && (o = n[e][t]), o;
          } }, { key: "createList", value: function value(e, t, r) {
            var n = this,
                o = n.context.groups;void 0 === o[e] && (o[e] = {}), o[e][r] = [];var i = { authorise: !1, condition: t + " in " + r, scope: e, actions: [] };return n.addPolicies([i]), o;
          } }, { key: "deleteGroup", value: function value(e, t) {
            var r = this,
                n = r.context.groups;delete n[e][t];var o = r.context.policies,
                i = o[e];for (var u in i) {
              var s = i[u].condition.split(" ");s.shift();var c = s.join(" ");if (c === t) {
                delete i[u];break;
              }
            }
          } }, { key: "addToList", value: function value(e, t, r, n) {
            var o = this,
                i = o.context.groups;void 0 === i[e] && (i[e] = {}), void 0 === i[e][r] && (i = o.createList(e, t, r)), i[e][r].indexOf(n) === -1 && i[e][r].push(n);
          } }, { key: "removeFromGroup", value: function value(e, t, r) {
            var n = this,
                o = n.context.groups,
                i = o[e][t];for (var u in i) {
              if (i[u] === r) {
                i.splice(u, 1);break;
              }
            }
          } }, { key: "getTimeslots", value: function value() {
            var e = this,
                t = e.context.policies.user,
                r = [];for (var n in t) {
              "time" === t[n].condition.split(" ")[0] && r.push(t[n].condition);
            }return r;
          } }, { key: "getTimeslotById", value: function value(e) {
            var t = this,
                r = t.context.policies.user;for (var n in r) {
              if (r[n].condition === e) return r[n];
            }
          } }]), e;
      }();r["default"] = _, t.exports = r["default"];
    }, { "./PDP": 75, "./PEP": 76, "babel-runtime/helpers/classCallCheck": 4, "babel-runtime/helpers/createClass": 5, "babel-runtime/helpers/typeof": 6 }] }, {}, [77])(77);
});
//# sourceMappingURL=PolicyEngine.js.map