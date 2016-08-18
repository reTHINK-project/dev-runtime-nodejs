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
// Last build: Mon Aug 15 2016 18:04:37 GMT+0100 (WEST)

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.MessageNodeCtx = e();
  }
}(function () {
  return function e(t, r, o) {
    function n(s, c) {
      if (!r[s]) {
        if (!t[s]) {
          var u = "function" == typeof require && require;if (!c && u) return u(s, !0);if (i) return i(s, !0);var f = new Error("Cannot find module '" + s + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var a = r[s] = { exports: {} };t[s][0].call(a.exports, function (e) {
          var r = t[s][1][e];return n(r ? r : e);
        }, a, a.exports, e, t, r, o);
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
          f = o(u);r["default"] = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, f["default"])(t)));e.prototype = (0, c["default"])(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (i["default"] ? (0, i["default"])(e, t) : e.__proto__ = t);
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
              f = n(u.length),
              a = i(s, f);if (e && r != r) {
            for (; f > a;) {
              if (c = u[a++], c != c) return !0;
            }
          } else for (; f > a; a++) {
            if ((e || a in u) && u[a] === r) return e || a || 0;
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
            r = n.f;if (r) for (var s, c = r(e), u = i.f, f = 0; c.length > f;) {
          u.call(e, s = c[f++]) && t.push(s);
        }return t;
      };
    }, { "./_object-gops": 57, "./_object-keys": 60, "./_object-pie": 61 }], 34: [function (e, t, r) {
      var o = e("./_global"),
          n = e("./_core"),
          i = e("./_ctx"),
          s = e("./_hide"),
          c = "prototype",
          u = function u(e, t, r) {
        var f,
            a,
            l,
            _ = e & u.F,
            p = e & u.G,
            d = e & u.S,
            b = e & u.P,
            y = e & u.B,
            j = e & u.W,
            h = p ? n : n[t] || (n[t] = {}),
            v = h[c],
            m = p ? o : d ? o[t] : (o[t] || {})[c];p && (r = t);for (f in r) {
          a = !_ && m && void 0 !== m[f], a && f in h || (l = a ? m[f] : r[f], h[f] = p && "function" != typeof m[f] ? r[f] : y && a ? i(l, o) : j && m[f] == l ? function (e) {
            var t = function t(_t, r, o) {
              if (this instanceof e) {
                switch (arguments.length) {case 0:
                    return new e();case 1:
                    return new e(_t);case 2:
                    return new e(_t, r);}return new e(_t, r, o);
              }return e.apply(this, arguments);
            };return t[c] = e[c], t;
          }(l) : b && "function" == typeof l ? i(Function.call, l) : l, b && ((h.virtual || (h.virtual = {}))[f] = l, e & u.R && v && !v[f] && s(v, f, l)));
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
          f = e("./_iter-create"),
          a = e("./_set-to-string-tag"),
          l = e("./_object-gpo"),
          _ = e("./_wks")("iterator"),
          p = !([].keys && "next" in [].keys()),
          d = "@@iterator",
          b = "keys",
          y = "values",
          j = function j() {
        return this;
      };t.exports = function (e, t, r, h, v, m, g) {
        f(r, t, h);var x,
            k,
            w,
            O = function O(e) {
          if (!p && e in E) return E[e];switch (e) {case b:
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
            P = v == y,
            M = !1,
            E = e.prototype,
            C = E[_] || E[d] || v && E[v],
            F = C || O(v),
            A = v ? P ? O("entries") : F : void 0,
            N = "Array" == t ? E.entries || C : C;if (N && (w = l(N.call(new e())), w !== Object.prototype && (a(w, S, !0), o || c(w, _) || s(w, _, j))), P && C && C.name !== y && (M = !0, F = function F() {
          return C.call(this);
        }), o && !g || !p && !M && E[_] || s(E, _, F), u[t] = F, u[S] = j, v) if (x = { values: P ? F : O(y), keys: m ? F : O(b), entries: A }, g) for (k in x) {
          k in E || i(E, k, x[k]);
        } else n(n.P + n.F * (p || M), t, x);return x;
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
          f = !e("./_fails")(function () {
        return u(Object.preventExtensions({}));
      }),
          a = function a(e) {
        s(e, o, { value: { i: "O" + ++c, w: {} } });
      },
          l = function l(e, t) {
        if (!n(e)) return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : ("string" == typeof e ? "S" : "P") + e;if (!i(e, o)) {
          if (!u(e)) return "F";if (!t) return "E";a(e);
        }return e[o].i;
      },
          _ = function _(e, t) {
        if (!i(e, o)) {
          if (!u(e)) return !0;if (!t) return !1;a(e);
        }return e[o].w;
      },
          p = function p(e) {
        return f && d.NEED && u(e) && !i(e, o) && a(e), e;
      },
          d = t.exports = { KEY: o, NEED: !1, fastKey: l, getWeak: _, onFreeze: p };
    }, { "./_fails": 35, "./_has": 37, "./_is-object": 43, "./_object-dp": 52, "./_uid": 76 }], 51: [function (e, t, r) {
      var o = e("./_an-object"),
          n = e("./_object-dps"),
          i = e("./_enum-bug-keys"),
          s = e("./_shared-key")("IE_PROTO"),
          c = function c() {},
          u = "prototype",
          _f = function f() {
        var t,
            r = e("./_dom-create")("iframe"),
            o = i.length,
            n = ">";for (r.style.display = "none", e("./_html").appendChild(r), r.src = "javascript:", t = r.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + n), t.close(), _f = t.F; o--;) {
          delete _f[u][i[o]];
        }return _f();
      };t.exports = Object.create || function (e, t) {
        var r;return null !== e ? (c[u] = o(e), r = new c(), c[u] = null, r[s] = e) : r = _f(), void 0 === t ? r : n(r, t);
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
          f = Object.getOwnPropertyDescriptor;r.f = e("./_descriptors") ? f : function (e, t) {
        if (e = i(e), t = s(t, !0), u) try {
          return f(e, t);
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
            f = [];for (r in c) {
          r != s && o(c, r) && f.push(r);
        }for (; t.length > u;) {
          o(c, r = t[u++]) && (~i(f, r) || f.push(r));
        }return f;
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
              f = c.length;return u < 0 || u >= f ? e ? "" : void 0 : (i = c.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === f || (s = c.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? c.charAt(u) : i : e ? c.slice(u, u + 2) : (i - 55296 << 10) + (s - 56320) + 65536);
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
          f = e("./_fails"),
          a = e("./_shared"),
          l = e("./_set-to-string-tag"),
          _ = e("./_uid"),
          p = e("./_wks"),
          d = e("./_wks-ext"),
          b = e("./_wks-define"),
          y = e("./_keyof"),
          j = e("./_enum-keys"),
          h = e("./_is-array"),
          v = e("./_an-object"),
          m = e("./_to-iobject"),
          g = e("./_to-primitive"),
          x = e("./_property-desc"),
          k = e("./_object-create"),
          w = e("./_object-gopn-ext"),
          O = e("./_object-gopd"),
          S = e("./_object-dp"),
          P = e("./_object-keys"),
          M = O.f,
          E = S.f,
          C = w.f,
          _F = o.Symbol,
          A = o.JSON,
          N = A && A.stringify,
          T = "prototype",
          R = p("_hidden"),
          L = p("toPrimitive"),
          U = {}.propertyIsEnumerable,
          D = a("symbol-registry"),
          I = a("symbols"),
          B = a("op-symbols"),
          J = Object[T],
          W = "function" == typeof _F,
          z = o.QObject,
          q = !z || !z[T] || !z[T].findChild,
          G = i && f(function () {
        return 7 != k(E({}, "a", { get: function get() {
            return E(this, "a", { value: 7 }).a;
          } })).a;
      }) ? function (e, t, r) {
        var o = M(J, t);o && delete J[t], E(e, t, r), o && e !== J && E(J, t, o);
      } : E,
          K = function K(e) {
        var t = I[e] = k(_F[T]);return t._k = e, t;
      },
          Y = W && "symbol" == _typeof(_F.iterator) ? function (e) {
        return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      } : function (e) {
        return e instanceof _F;
      },
          Z = function Z(e, t, r) {
        return e === J && Z(B, t, r), v(e), t = g(t, !0), v(r), n(I, t) ? (r.enumerable ? (n(e, R) && e[R][t] && (e[R][t] = !1), r = k(r, { enumerable: x(0, !1) })) : (n(e, R) || E(e, R, x(1, {})), e[R][t] = !0), G(e, t, r)) : E(e, t, r);
      },
          $ = function $(e, t) {
        v(e);for (var r, o = j(t = m(t)), n = 0, i = o.length; i > n;) {
          Z(e, r = o[n++], t[r]);
        }return e;
      },
          V = function V(e, t) {
        return void 0 === t ? k(e) : $(k(e), t);
      },
          H = function H(e) {
        var t = U.call(this, e = g(e, !0));return !(this === J && n(I, e) && !n(B, e)) && (!(t || !n(this, e) || !n(I, e) || n(this, R) && this[R][e]) || t);
      },
          Q = function Q(e, t) {
        if (e = m(e), t = g(t, !0), e !== J || !n(I, t) || n(B, t)) {
          var r = M(e, t);return !r || !n(I, t) || n(e, R) && e[R][t] || (r.enumerable = !0), r;
        }
      },
          X = function X(e) {
        for (var t, r = C(m(e)), o = [], i = 0; r.length > i;) {
          n(I, t = r[i++]) || t == R || t == u || o.push(t);
        }return o;
      },
          ee = function ee(e) {
        for (var t, r = e === J, o = C(r ? B : m(e)), i = [], s = 0; o.length > s;) {
          !n(I, t = o[s++]) || r && !n(J, t) || i.push(I[t]);
        }return i;
      };W || (_F = function F() {
        if (this instanceof _F) throw TypeError("Symbol is not a constructor!");var e = _(arguments.length > 0 ? arguments[0] : void 0),
            t = function t(r) {
          this === J && t.call(B, r), n(this, R) && n(this[R], e) && (this[R][e] = !1), G(this, e, x(1, r));
        };return i && q && G(J, e, { configurable: !0, set: t }), K(e);
      }, c(_F[T], "toString", function () {
        return this._k;
      }), O.f = Q, S.f = Z, e("./_object-gopn").f = w.f = X, e("./_object-pie").f = H, e("./_object-gops").f = ee, i && !e("./_library") && c(J, "propertyIsEnumerable", H, !0), d.f = function (e) {
        return K(p(e));
      }), s(s.G + s.W + s.F * !W, { Symbol: _F });for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; te.length > re;) {
        p(te[re++]);
      }for (var te = P(p.store), re = 0; te.length > re;) {
        b(te[re++]);
      }s(s.S + s.F * !W, "Symbol", { "for": function _for(e) {
          return n(D, e += "") ? D[e] : D[e] = _F(e);
        }, keyFor: function keyFor(e) {
          if (Y(e)) return y(D, e);throw TypeError(e + " is not a symbol!");
        }, useSetter: function useSetter() {
          q = !0;
        }, useSimple: function useSimple() {
          q = !1;
        } }), s(s.S + s.F * !W, "Object", { create: V, defineProperty: Z, defineProperties: $, getOwnPropertyDescriptor: Q, getOwnPropertyNames: X, getOwnPropertySymbols: ee }), A && s(s.S + s.F * (!W || f(function () {
        var e = _F();return "[null]" != N([e]) || "{}" != N({ a: e }) || "{}" != N(Object(e));
      })), "JSON", { stringify: function stringify(e) {
          if (void 0 !== e && !Y(e)) {
            for (var t, r, o = [e], n = 1; arguments.length > n;) {
              o.push(arguments[n++]);
            }return t = o[1], "function" == typeof t && (r = t), !r && h(t) || (t = function t(e, _t2) {
              if (r && (_t2 = r.call(this, e, _t2)), !Y(_t2)) return _t2;
            }), o[1] = t, N.apply(A, o);
          }
        } }), _F[T][L] || e("./_hide")(_F[T], L, _F[T].valueOf), l(_F, "Symbol"), l(Math, "Math", !0), l(o.JSON, "JSON", !0);
    }, { "./_an-object": 24, "./_descriptors": 30, "./_enum-keys": 33, "./_export": 34, "./_fails": 35, "./_global": 36, "./_has": 37, "./_hide": 38, "./_is-array": 42, "./_keyof": 48, "./_library": 49, "./_meta": 50, "./_object-create": 51, "./_object-dp": 52, "./_object-gopd": 54, "./_object-gopn": 56, "./_object-gopn-ext": 55, "./_object-gops": 57, "./_object-keys": 60, "./_object-pie": 61, "./_property-desc": 63, "./_redefine": 64, "./_set-to-string-tag": 66, "./_shared": 68, "./_to-iobject": 72, "./_to-primitive": 75, "./_uid": 76, "./_wks": 79, "./_wks-define": 77, "./_wks-ext": 78 }], 89: [function (e, t, r) {
      e("./_wks-define")("asyncIterator");
    }, { "./_wks-define": 77 }], 90: [function (e, t, r) {
      e("./_wks-define")("observable");
    }, { "./_wks-define": 77 }], 91: [function (e, t, r) {
      e("./es6.array.iterator");for (var o = e("./_global"), n = e("./_hide"), i = e("./_iterators"), s = e("./_wks")("toStringTag"), c = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
        var f = c[u],
            a = o[f],
            l = a && a.prototype;l && !l[s] && n(l, s, f), i[f] = i.Array;
      }
    }, { "./_global": 36, "./_hide": 38, "./_iterators": 47, "./_wks": 79, "./es6.array.iterator": 80 }], 92: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = e("babel-runtime/helpers/classCallCheck"),
          i = o(n),
          s = e("babel-runtime/helpers/createClass"),
          c = o(s),
          u = e("../../utils/utils"),
          f = function () {
        function e() {
          (0, i["default"])(this, e), this.defaultBehavior = !0, this.groups = {};
        }return (0, c["default"])(e, [{ key: "defaultBehavior", get: function get() {
            return this._defaultBehavior;
          }, set: function set(e) {
            this._defaultBehavior = e;
          } }, { key: "date", set: function set(e) {
            var t = new Date(),
                r = String(t.getDate());1 === r.length && (r = "0" + r);var o = String(t.getMonth() + 1);1 === o.length && (o = "0" + o), this._date = r + "/" + o + "/" + t.getFullYear();
          }, get: function get() {
            return this._date;
          } }, { key: "domain", set: function set(e) {
            void 0 !== e.message.body.identity && (this._domain = (0, u.divideEmail)(e.message.body.identity.userProfile.username).domain);
          }, get: function get() {
            return this._domain;
          } }, { key: "source", set: function set(e) {
            void 0 !== e.message.body.identity && (this._source = e.message.body.identity.userProfile.username);
          }, get: function get() {
            var e = this;return e._source;
          } }, { key: "time", set: function set(e) {
            e = new Date();var t = String(e.getMinutes());1 === t.length && (t = "0" + t), this._time = parseInt(String(e.getHours()) + t);
          }, get: function get() {
            var e = this;return e._time;
          } }, { key: "weekday", set: function set(e) {
            this._weekday = String(new Date().getDay());
          }, get: function get() {
            return this._weekday;
          } }]), e;
      }();r["default"] = f, t.exports = r["default"];
    }, { "../../utils/utils": 94, "babel-runtime/helpers/classCallCheck": 9, "babel-runtime/helpers/createClass": 10 }], 93: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = e("babel-runtime/core-js/object/keys"),
          i = o(n),
          s = e("babel-runtime/core-js/object/get-prototype-of"),
          c = o(s),
          u = e("babel-runtime/helpers/classCallCheck"),
          f = o(u),
          a = e("babel-runtime/helpers/createClass"),
          l = o(a),
          _ = e("babel-runtime/helpers/possibleConstructorReturn"),
          p = o(_),
          d = e("babel-runtime/helpers/inherits"),
          b = o(d),
          y = e("./CommonCtx"),
          j = o(y),
          h = function (e) {
        function t() {
          (0, f["default"])(this, t);var e = (0, p["default"])(this, (0, c["default"])(t).call(this));return e.serviceProviderPolicies = {}, e;
        }return (0, b["default"])(t, e), (0, l["default"])(t, [{ key: "authorise", value: function value(e) {
            console.log("--- Policy Engine ---"), console.log(e);var t = this,
                r = void 0,
                o = t._isToVerify(e);if (o) {
              var n = { serviceProviderPolicy: t.getServiceProviderPolicy(e) };return r = t.policyEngine.pdp.applyPolicies(e, n), "Not Applicable" === r && (r = t.defaultBehavior), !!r;
            }return r = t.defaultBehavior, !!r;
          } }, { key: "loadActivePolicy", value: function value() {} }, { key: "loadGroups", value: function value() {} }, { key: "loadSPPolicies", value: function value() {} }, { key: "loadUserPolicies", value: function value() {} }, { key: "getServiceProviderPolicy", value: function value() {
            var e = void 0;if (0 !== (0, i["default"])(this.serviceProviderPolicies).length) for (var t in this.serviceProviderPolicies) {
              e = this.serviceProviderPolicies[t];
            }return e;
          } }, { key: "_isToVerify", value: function value() {
            return !0;
          } }, { key: "saveActivePolicy", value: function value() {} }, { key: "savePolicies", value: function value() {} }]), t;
      }(j["default"]);r["default"] = h, t.exports = r["default"];
    }, { "./CommonCtx": 92, "babel-runtime/core-js/object/get-prototype-of": 4, "babel-runtime/core-js/object/keys": 5, "babel-runtime/helpers/classCallCheck": 9, "babel-runtime/helpers/createClass": 10, "babel-runtime/helpers/inherits": 11, "babel-runtime/helpers/possibleConstructorReturn": 12 }], 94: [function (e, t, r) {
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
        return !((0, y["default"])(e).length > 0);
      }function c(e) {
        if (e) return JSON.parse((0, d["default"])(e));
      }function u(e) {
        var t = e.split("/");return t[0] + "//" + t[2] + "/" + t[3];
      }function f(e) {
        var t = e.indexOf("@");return "user://" + e.substring(t + 1, e.length) + "/" + e.substring(0, t);
      }function a(e) {
        var t = n(e);return t.identity.replace("/", "") + "@" + t.domain;
      }function l(e) {
        if ("user://" === e.substring(0, 7)) {
          var t = n(e);if (t.domain && t.identity) return e;throw "userURL with wrong format";
        }return f(e);
      }function _(e) {
        var t = ["domain-idp", "runtime", "domain", "hyperty"],
            r = e.split("://"),
            o = r[0];return t.indexOf(o) === -1;
      }Object.defineProperty(r, "__esModule", { value: !0 });var p = e("babel-runtime/core-js/json/stringify"),
          d = o(p),
          b = e("babel-runtime/core-js/object/keys"),
          y = o(b);r.divideURL = n, r.divideEmail = i, r.emptyObject = s, r.deepClone = c, r.removePathFromURL = u, r.getUserURLFromEmail = f, r.getUserEmailFromURL = a, r.convertToUserURL = l, r.isDataObjectURL = _;
    }, { "babel-runtime/core-js/json/stringify": 1, "babel-runtime/core-js/object/keys": 5 }] }, {}, [93])(93);
});
//# sourceMappingURL=MessageNodeCtx.js.map