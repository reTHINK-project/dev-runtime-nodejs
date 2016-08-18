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
// Last build: Mon Aug 15 2016 18:04:35 GMT+0100 (WEST)

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.PolicyEngine = e();
  }
}(function () {
  var e;return function t(e, r, n) {
    function o(s, c) {
      if (!r[s]) {
        if (!e[s]) {
          var u = "function" == typeof require && require;if (!c && u) return u(s, !0);if (i) return i(s, !0);var a = new Error("Cannot find module '" + s + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var l = r[s] = { exports: {} };e[s][0].call(l.exports, function (t) {
          var r = e[s][1][t];return o(r ? r : t);
        }, l, l.exports, t, e, r, n);
      }return r[s].exports;
    }for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) {
      o(n[s]);
    }return o;
  }({ 1: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/json/stringify"), __esModule: !0 };
    }, { "core-js/library/fn/json/stringify": 17 }], 2: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/create"), __esModule: !0 };
    }, { "core-js/library/fn/object/create": 18 }], 3: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/define-property"), __esModule: !0 };
    }, { "core-js/library/fn/object/define-property": 19 }], 4: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/get-own-property-descriptor"), __esModule: !0 };
    }, { "core-js/library/fn/object/get-own-property-descriptor": 20 }], 5: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/get-prototype-of"), __esModule: !0 };
    }, { "core-js/library/fn/object/get-prototype-of": 21 }], 6: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/keys"), __esModule: !0 };
    }, { "core-js/library/fn/object/keys": 22 }], 7: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/object/set-prototype-of"), __esModule: !0 };
    }, { "core-js/library/fn/object/set-prototype-of": 23 }], 8: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/promise"), __esModule: !0 };
    }, { "core-js/library/fn/promise": 24 }], 9: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/symbol"), __esModule: !0 };
    }, { "core-js/library/fn/symbol": 25 }], 10: [function (e, t, r) {
      t.exports = { "default": e("core-js/library/fn/symbol/iterator"), __esModule: !0 };
    }, { "core-js/library/fn/symbol/iterator": 26 }], 11: [function (e, t, r) {
      "use strict";
      r.__esModule = !0, r["default"] = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      };
    }, {}], 12: [function (e, t, r) {
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
    }, { "../core-js/object/define-property": 3 }], 13: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var o = e("../core-js/object/get-prototype-of"),
          i = n(o),
          s = e("../core-js/object/get-own-property-descriptor"),
          c = n(s);r["default"] = function u(e, t, r) {
        null === e && (e = Function.prototype);var n = (0, c["default"])(e, t);if (void 0 === n) {
          var o = (0, i["default"])(e);return null === o ? void 0 : u(o, t, r);
        }if ("value" in n) return n.value;var s = n.get;if (void 0 !== s) return s.call(r);
      };
    }, { "../core-js/object/get-own-property-descriptor": 4, "../core-js/object/get-prototype-of": 5 }], 14: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var o = e("../core-js/object/set-prototype-of"),
          i = n(o),
          s = e("../core-js/object/create"),
          c = n(s),
          u = e("../helpers/typeof"),
          a = n(u);r["default"] = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, a["default"])(t)));e.prototype = (0, c["default"])(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (i["default"] ? (0, i["default"])(e, t) : e.__proto__ = t);
      };
    }, { "../core-js/object/create": 2, "../core-js/object/set-prototype-of": 7, "../helpers/typeof": 16 }], 15: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var o = e("../helpers/typeof"),
          i = n(o);r["default"] = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, i["default"])(t)) && "function" != typeof t ? e : t;
      };
    }, { "../helpers/typeof": 16 }], 16: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var o = e("../core-js/symbol/iterator"),
          i = n(o),
          s = e("../core-js/symbol"),
          c = n(s),
          u = "function" == typeof c["default"] && "symbol" == _typeof(i["default"]) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof c["default"] && e.constructor === c["default"] ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      };r["default"] = "function" == typeof c["default"] && "symbol" === u(i["default"]) ? function (e) {
        return "undefined" == typeof e ? "undefined" : u(e);
      } : function (e) {
        return e && "function" == typeof c["default"] && e.constructor === c["default"] ? "symbol" : "undefined" == typeof e ? "undefined" : u(e);
      };
    }, { "../core-js/symbol": 9, "../core-js/symbol/iterator": 10 }], 17: [function (e, t, r) {
      var n = e("../../modules/_core"),
          o = n.JSON || (n.JSON = { stringify: JSON.stringify });t.exports = function (e) {
        return o.stringify.apply(o, arguments);
      };
    }, { "../../modules/_core": 34 }], 18: [function (e, t, r) {
      e("../../modules/es6.object.create");var n = e("../../modules/_core").Object;t.exports = function (e, t) {
        return n.create(e, t);
      };
    }, { "../../modules/_core": 34, "../../modules/es6.object.create": 99 }], 19: [function (e, t, r) {
      e("../../modules/es6.object.define-property");var n = e("../../modules/_core").Object;t.exports = function (e, t, r) {
        return n.defineProperty(e, t, r);
      };
    }, { "../../modules/_core": 34, "../../modules/es6.object.define-property": 100 }], 20: [function (e, t, r) {
      e("../../modules/es6.object.get-own-property-descriptor");var n = e("../../modules/_core").Object;t.exports = function (e, t) {
        return n.getOwnPropertyDescriptor(e, t);
      };
    }, { "../../modules/_core": 34, "../../modules/es6.object.get-own-property-descriptor": 101 }], 21: [function (e, t, r) {
      e("../../modules/es6.object.get-prototype-of"), t.exports = e("../../modules/_core").Object.getPrototypeOf;
    }, { "../../modules/_core": 34, "../../modules/es6.object.get-prototype-of": 102 }], 22: [function (e, t, r) {
      e("../../modules/es6.object.keys"), t.exports = e("../../modules/_core").Object.keys;
    }, { "../../modules/_core": 34, "../../modules/es6.object.keys": 103 }], 23: [function (e, t, r) {
      e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/_core").Object.setPrototypeOf;
    }, { "../../modules/_core": 34, "../../modules/es6.object.set-prototype-of": 104 }], 24: [function (e, t, r) {
      e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.promise"), t.exports = e("../modules/_core").Promise;
    }, { "../modules/_core": 34, "../modules/es6.object.to-string": 105, "../modules/es6.promise": 106, "../modules/es6.string.iterator": 107, "../modules/web.dom.iterable": 111 }], 25: [function (e, t, r) {
      e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), e("../../modules/es7.symbol.async-iterator"), e("../../modules/es7.symbol.observable"), t.exports = e("../../modules/_core").Symbol;
    }, { "../../modules/_core": 34, "../../modules/es6.object.to-string": 105, "../../modules/es6.symbol": 108, "../../modules/es7.symbol.async-iterator": 109, "../../modules/es7.symbol.observable": 110 }], 26: [function (e, t, r) {
      e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/_wks-ext").f("iterator");
    }, { "../../modules/_wks-ext": 95, "../../modules/es6.string.iterator": 107, "../../modules/web.dom.iterable": 111 }], 27: [function (e, t, r) {
      t.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
      };
    }, {}], 28: [function (e, t, r) {
      t.exports = function () {};
    }, {}], 29: [function (e, t, r) {
      t.exports = function (e, t, r, n) {
        if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(r + ": incorrect invocation!");return e;
      };
    }, {}], 30: [function (e, t, r) {
      var n = e("./_is-object");t.exports = function (e) {
        if (!n(e)) throw TypeError(e + " is not an object!");return e;
      };
    }, { "./_is-object": 53 }], 31: [function (e, t, r) {
      var n = e("./_to-iobject"),
          o = e("./_to-length"),
          i = e("./_to-index");t.exports = function (e) {
        return function (t, r, s) {
          var c,
              u = n(t),
              a = o(u.length),
              l = i(s, a);if (e && r != r) {
            for (; a > l;) {
              if (c = u[l++], c != c) return !0;
            }
          } else for (; a > l; l++) {
            if ((e || l in u) && u[l] === r) return e || l || 0;
          }return !e && -1;
        };
      };
    }, { "./_to-index": 87, "./_to-iobject": 89, "./_to-length": 90 }], 32: [function (e, t, r) {
      var n = e("./_cof"),
          o = e("./_wks")("toStringTag"),
          i = "Arguments" == n(function () {
        return arguments;
      }()),
          s = function s(e, t) {
        try {
          return e[t];
        } catch (r) {}
      };t.exports = function (e) {
        var t, r, c;return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = s(t = Object(e), o)) ? r : i ? n(t) : "Object" == (c = n(t)) && "function" == typeof t.callee ? "Arguments" : c;
      };
    }, { "./_cof": 33, "./_wks": 96 }], 33: [function (e, t, r) {
      var n = {}.toString;t.exports = function (e) {
        return n.call(e).slice(8, -1);
      };
    }, {}], 34: [function (e, t, r) {
      var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
    }, {}], 35: [function (e, t, r) {
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
    }, { "./_a-function": 27 }], 36: [function (e, t, r) {
      t.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);return e;
      };
    }, {}], 37: [function (e, t, r) {
      t.exports = !e("./_fails")(function () {
        return 7 != Object.defineProperty({}, "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, { "./_fails": 42 }], 38: [function (e, t, r) {
      var n = e("./_is-object"),
          o = e("./_global").document,
          i = n(o) && n(o.createElement);t.exports = function (e) {
        return i ? o.createElement(e) : {};
      };
    }, { "./_global": 44, "./_is-object": 53 }], 39: [function (e, t, r) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {}], 40: [function (e, t, r) {
      var n = e("./_object-keys"),
          o = e("./_object-gops"),
          i = e("./_object-pie");t.exports = function (e) {
        var t = n(e),
            r = o.f;if (r) for (var s, c = r(e), u = i.f, a = 0; c.length > a;) {
          u.call(e, s = c[a++]) && t.push(s);
        }return t;
      };
    }, { "./_object-gops": 70, "./_object-keys": 73, "./_object-pie": 74 }], 41: [function (e, t, r) {
      var n = e("./_global"),
          o = e("./_core"),
          i = e("./_ctx"),
          s = e("./_hide"),
          c = "prototype",
          u = function u(e, t, r) {
        var a,
            l,
            f,
            p = e & u.F,
            d = e & u.G,
            h = e & u.S,
            y = e & u.P,
            _ = e & u.B,
            b = e & u.W,
            v = d ? o : o[t] || (o[t] = {}),
            m = v[c],
            g = d ? n : h ? n[t] : (n[t] || {})[c];d && (r = t);for (a in r) {
          l = !p && g && void 0 !== g[a], l && a in v || (f = l ? g[a] : r[a], v[a] = d && "function" != typeof g[a] ? r[a] : _ && l ? i(f, n) : b && g[a] == f ? function (e) {
            var t = function t(_t, r, n) {
              if (this instanceof e) {
                switch (arguments.length) {case 0:
                    return new e();case 1:
                    return new e(_t);case 2:
                    return new e(_t, r);}return new e(_t, r, n);
              }return e.apply(this, arguments);
            };return t[c] = e[c], t;
          }(f) : y && "function" == typeof f ? i(Function.call, f) : f, y && ((v.virtual || (v.virtual = {}))[a] = f, e & u.R && m && !m[a] && s(m, a, f)));
        }
      };u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
    }, { "./_core": 34, "./_ctx": 35, "./_global": 44, "./_hide": 46 }], 42: [function (e, t, r) {
      t.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    }, {}], 43: [function (e, t, r) {
      var n = e("./_ctx"),
          o = e("./_iter-call"),
          i = e("./_is-array-iter"),
          s = e("./_an-object"),
          c = e("./_to-length"),
          u = e("./core.get-iterator-method"),
          a = {},
          l = {},
          r = t.exports = function (e, t, r, f, p) {
        var d,
            h,
            y,
            _,
            b = p ? function () {
          return e;
        } : u(e),
            v = n(r, f, t ? 2 : 1),
            m = 0;if ("function" != typeof b) throw TypeError(e + " is not iterable!");if (i(b)) {
          for (d = c(e.length); d > m; m++) {
            if (_ = t ? v(s(h = e[m])[0], h[1]) : v(e[m]), _ === a || _ === l) return _;
          }
        } else for (y = b.call(e); !(h = y.next()).done;) {
          if (_ = o(y, v, h.value, t), _ === a || _ === l) return _;
        }
      };r.BREAK = a, r.RETURN = l;
    }, { "./_an-object": 30, "./_ctx": 35, "./_is-array-iter": 51, "./_iter-call": 54, "./_to-length": 90, "./core.get-iterator-method": 97 }], 44: [function (e, t, r) {
      var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
    }, {}], 45: [function (e, t, r) {
      var n = {}.hasOwnProperty;t.exports = function (e, t) {
        return n.call(e, t);
      };
    }, {}], 46: [function (e, t, r) {
      var n = e("./_object-dp"),
          o = e("./_property-desc");t.exports = e("./_descriptors") ? function (e, t, r) {
        return n.f(e, t, o(1, r));
      } : function (e, t, r) {
        return e[t] = r, e;
      };
    }, { "./_descriptors": 37, "./_object-dp": 65, "./_property-desc": 76 }], 47: [function (e, t, r) {
      t.exports = e("./_global").document && document.documentElement;
    }, { "./_global": 44 }], 48: [function (e, t, r) {
      t.exports = !e("./_descriptors") && !e("./_fails")(function () {
        return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, { "./_descriptors": 37, "./_dom-create": 38, "./_fails": 42 }], 49: [function (e, t, r) {
      t.exports = function (e, t, r) {
        var n = void 0 === r;switch (t.length) {case 0:
            return n ? e() : e.call(r);case 1:
            return n ? e(t[0]) : e.call(r, t[0]);case 2:
            return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);case 3:
            return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);case 4:
            return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);}return e.apply(r, t);
      };
    }, {}], 50: [function (e, t, r) {
      var n = e("./_cof");t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == n(e) ? e.split("") : Object(e);
      };
    }, { "./_cof": 33 }], 51: [function (e, t, r) {
      var n = e("./_iterators"),
          o = e("./_wks")("iterator"),
          i = Array.prototype;t.exports = function (e) {
        return void 0 !== e && (n.Array === e || i[o] === e);
      };
    }, { "./_iterators": 59, "./_wks": 96 }], 52: [function (e, t, r) {
      var n = e("./_cof");t.exports = Array.isArray || function (e) {
        return "Array" == n(e);
      };
    }, { "./_cof": 33 }], 53: [function (e, t, r) {
      t.exports = function (e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e;
      };
    }, {}], 54: [function (e, t, r) {
      var n = e("./_an-object");t.exports = function (e, t, r, o) {
        try {
          return o ? t(n(r)[0], r[1]) : t(r);
        } catch (i) {
          var s = e["return"];throw void 0 !== s && n(s.call(e)), i;
        }
      };
    }, { "./_an-object": 30 }], 55: [function (e, t, r) {
      "use strict";
      var n = e("./_object-create"),
          o = e("./_property-desc"),
          i = e("./_set-to-string-tag"),
          s = {};e("./_hide")(s, e("./_wks")("iterator"), function () {
        return this;
      }), t.exports = function (e, t, r) {
        e.prototype = n(s, { next: o(1, r) }), i(e, t + " Iterator");
      };
    }, { "./_hide": 46, "./_object-create": 64, "./_property-desc": 76, "./_set-to-string-tag": 81, "./_wks": 96 }], 56: [function (e, t, r) {
      "use strict";
      var n = e("./_library"),
          o = e("./_export"),
          i = e("./_redefine"),
          s = e("./_hide"),
          c = e("./_has"),
          u = e("./_iterators"),
          a = e("./_iter-create"),
          l = e("./_set-to-string-tag"),
          f = e("./_object-gpo"),
          p = e("./_wks")("iterator"),
          d = !([].keys && "next" in [].keys()),
          h = "@@iterator",
          y = "keys",
          _ = "values",
          b = function b() {
        return this;
      };t.exports = function (e, t, r, v, m, g, j) {
        a(r, t, v);var w,
            k,
            x,
            S = function S(e) {
          if (!d && e in E) return E[e];switch (e) {case y:
              return function () {
                return new r(this, e);
              };case _:
              return function () {
                return new r(this, e);
              };}return function () {
            return new r(this, e);
          };
        },
            P = t + " Iterator",
            O = m == _,
            C = !1,
            E = e.prototype,
            M = E[p] || E[h] || m && E[m],
            R = M || S(m),
            A = m ? O ? S("entries") : R : void 0,
            U = "Array" == t ? E.entries || M : M;if (U && (x = f(U.call(new e())), x !== Object.prototype && (l(x, P, !0), n || c(x, p) || s(x, p, b))), O && M && M.name !== _ && (C = !0, R = function R() {
          return M.call(this);
        }), n && !j || !d && !C && E[p] || s(E, p, R), u[t] = R, u[P] = b, m) if (w = { values: O ? R : S(_), keys: g ? R : S(y), entries: A }, j) for (k in w) {
          k in E || i(E, k, w[k]);
        } else o(o.P + o.F * (d || C), t, w);return w;
      };
    }, { "./_export": 41, "./_has": 45, "./_hide": 46, "./_iter-create": 55, "./_iterators": 59, "./_library": 61, "./_object-gpo": 71, "./_redefine": 78, "./_set-to-string-tag": 81, "./_wks": 96 }], 57: [function (e, t, r) {
      var n = e("./_wks")("iterator"),
          o = !1;try {
        var i = [7][n]();i["return"] = function () {
          o = !0;
        }, Array.from(i, function () {
          throw 2;
        });
      } catch (s) {}t.exports = function (e, t) {
        if (!t && !o) return !1;var r = !1;try {
          var i = [7],
              s = i[n]();s.next = function () {
            return { done: r = !0 };
          }, i[n] = function () {
            return s;
          }, e(i);
        } catch (c) {}return r;
      };
    }, { "./_wks": 96 }], 58: [function (e, t, r) {
      t.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    }, {}], 59: [function (e, t, r) {
      t.exports = {};
    }, {}], 60: [function (e, t, r) {
      var n = e("./_object-keys"),
          o = e("./_to-iobject");t.exports = function (e, t) {
        for (var r, i = o(e), s = n(i), c = s.length, u = 0; c > u;) {
          if (i[r = s[u++]] === t) return r;
        }
      };
    }, { "./_object-keys": 73, "./_to-iobject": 89 }], 61: [function (e, t, r) {
      t.exports = !0;
    }, {}], 62: [function (e, t, r) {
      var n = e("./_uid")("meta"),
          o = e("./_is-object"),
          i = e("./_has"),
          s = e("./_object-dp").f,
          c = 0,
          u = Object.isExtensible || function () {
        return !0;
      },
          a = !e("./_fails")(function () {
        return u(Object.preventExtensions({}));
      }),
          l = function l(e) {
        s(e, n, { value: { i: "O" + ++c, w: {} } });
      },
          f = function f(e, t) {
        if (!o(e)) return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : ("string" == typeof e ? "S" : "P") + e;if (!i(e, n)) {
          if (!u(e)) return "F";if (!t) return "E";l(e);
        }return e[n].i;
      },
          p = function p(e, t) {
        if (!i(e, n)) {
          if (!u(e)) return !0;if (!t) return !1;l(e);
        }return e[n].w;
      },
          d = function d(e) {
        return a && h.NEED && u(e) && !i(e, n) && l(e), e;
      },
          h = t.exports = { KEY: n, NEED: !1, fastKey: f, getWeak: p, onFreeze: d };
    }, { "./_fails": 42, "./_has": 45, "./_is-object": 53, "./_object-dp": 65, "./_uid": 93 }], 63: [function (e, t, r) {
      var n = e("./_global"),
          o = e("./_task").set,
          i = n.MutationObserver || n.WebKitMutationObserver,
          s = n.process,
          c = n.Promise,
          u = "process" == e("./_cof")(s);t.exports = function () {
        var e,
            t,
            r,
            a = function a() {
          var n, o;for (u && (n = s.domain) && n.exit(); e;) {
            o = e.fn, e = e.next;try {
              o();
            } catch (i) {
              throw e ? r() : t = void 0, i;
            }
          }t = void 0, n && n.enter();
        };if (u) r = function r() {
          s.nextTick(a);
        };else if (i) {
          var l = !0,
              f = document.createTextNode("");new i(a).observe(f, { characterData: !0 }), r = function r() {
            f.data = l = !l;
          };
        } else if (c && c.resolve) {
          var p = c.resolve();r = function r() {
            p.then(a);
          };
        } else r = function r() {
          o.call(n, a);
        };return function (n) {
          var o = { fn: n, next: void 0 };t && (t.next = o), e || (e = o, r()), t = o;
        };
      };
    }, { "./_cof": 33, "./_global": 44, "./_task": 86 }], 64: [function (e, t, r) {
      var n = e("./_an-object"),
          o = e("./_object-dps"),
          i = e("./_enum-bug-keys"),
          s = e("./_shared-key")("IE_PROTO"),
          c = function c() {},
          u = "prototype",
          _a = function a() {
        var t,
            r = e("./_dom-create")("iframe"),
            n = i.length,
            o = ">";for (r.style.display = "none", e("./_html").appendChild(r), r.src = "javascript:", t = r.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + o), t.close(), _a = t.F; n--;) {
          delete _a[u][i[n]];
        }return _a();
      };t.exports = Object.create || function (e, t) {
        var r;return null !== e ? (c[u] = n(e), r = new c(), c[u] = null, r[s] = e) : r = _a(), void 0 === t ? r : o(r, t);
      };
    }, { "./_an-object": 30, "./_dom-create": 38, "./_enum-bug-keys": 39, "./_html": 47, "./_object-dps": 66, "./_shared-key": 82 }], 65: [function (e, t, r) {
      var n = e("./_an-object"),
          o = e("./_ie8-dom-define"),
          i = e("./_to-primitive"),
          s = Object.defineProperty;r.f = e("./_descriptors") ? Object.defineProperty : function (e, t, r) {
        if (n(e), t = i(t, !0), n(r), o) try {
          return s(e, t, r);
        } catch (c) {}if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");return "value" in r && (e[t] = r.value), e;
      };
    }, { "./_an-object": 30, "./_descriptors": 37, "./_ie8-dom-define": 48, "./_to-primitive": 92 }], 66: [function (e, t, r) {
      var n = e("./_object-dp"),
          o = e("./_an-object"),
          i = e("./_object-keys");t.exports = e("./_descriptors") ? Object.defineProperties : function (e, t) {
        o(e);for (var r, s = i(t), c = s.length, u = 0; c > u;) {
          n.f(e, r = s[u++], t[r]);
        }return e;
      };
    }, { "./_an-object": 30, "./_descriptors": 37, "./_object-dp": 65, "./_object-keys": 73 }], 67: [function (e, t, r) {
      var n = e("./_object-pie"),
          o = e("./_property-desc"),
          i = e("./_to-iobject"),
          s = e("./_to-primitive"),
          c = e("./_has"),
          u = e("./_ie8-dom-define"),
          a = Object.getOwnPropertyDescriptor;r.f = e("./_descriptors") ? a : function (e, t) {
        if (e = i(e), t = s(t, !0), u) try {
          return a(e, t);
        } catch (r) {}if (c(e, t)) return o(!n.f.call(e, t), e[t]);
      };
    }, { "./_descriptors": 37, "./_has": 45, "./_ie8-dom-define": 48, "./_object-pie": 74, "./_property-desc": 76, "./_to-iobject": 89, "./_to-primitive": 92 }], 68: [function (e, t, r) {
      var n = e("./_to-iobject"),
          o = e("./_object-gopn").f,
          i = {}.toString,
          s = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          c = function c(e) {
        try {
          return o(e);
        } catch (t) {
          return s.slice();
        }
      };t.exports.f = function (e) {
        return s && "[object Window]" == i.call(e) ? c(e) : o(n(e));
      };
    }, { "./_object-gopn": 69, "./_to-iobject": 89 }], 69: [function (e, t, r) {
      var n = e("./_object-keys-internal"),
          o = e("./_enum-bug-keys").concat("length", "prototype");r.f = Object.getOwnPropertyNames || function (e) {
        return n(e, o);
      };
    }, { "./_enum-bug-keys": 39, "./_object-keys-internal": 72 }], 70: [function (e, t, r) {
      r.f = Object.getOwnPropertySymbols;
    }, {}], 71: [function (e, t, r) {
      var n = e("./_has"),
          o = e("./_to-object"),
          i = e("./_shared-key")("IE_PROTO"),
          s = Object.prototype;t.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), n(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
      };
    }, { "./_has": 45, "./_shared-key": 82, "./_to-object": 91 }], 72: [function (e, t, r) {
      var n = e("./_has"),
          o = e("./_to-iobject"),
          i = e("./_array-includes")(!1),
          s = e("./_shared-key")("IE_PROTO");t.exports = function (e, t) {
        var r,
            c = o(e),
            u = 0,
            a = [];for (r in c) {
          r != s && n(c, r) && a.push(r);
        }for (; t.length > u;) {
          n(c, r = t[u++]) && (~i(a, r) || a.push(r));
        }return a;
      };
    }, { "./_array-includes": 31, "./_has": 45, "./_shared-key": 82, "./_to-iobject": 89 }], 73: [function (e, t, r) {
      var n = e("./_object-keys-internal"),
          o = e("./_enum-bug-keys");t.exports = Object.keys || function (e) {
        return n(e, o);
      };
    }, { "./_enum-bug-keys": 39, "./_object-keys-internal": 72 }], 74: [function (e, t, r) {
      r.f = {}.propertyIsEnumerable;
    }, {}], 75: [function (e, t, r) {
      var n = e("./_export"),
          o = e("./_core"),
          i = e("./_fails");t.exports = function (e, t) {
        var r = (o.Object || {})[e] || Object[e],
            s = {};s[e] = t(r), n(n.S + n.F * i(function () {
          r(1);
        }), "Object", s);
      };
    }, { "./_core": 34, "./_export": 41, "./_fails": 42 }], 76: [function (e, t, r) {
      t.exports = function (e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
    }, {}], 77: [function (e, t, r) {
      var n = e("./_hide");t.exports = function (e, t, r) {
        for (var o in t) {
          r && e[o] ? e[o] = t[o] : n(e, o, t[o]);
        }return e;
      };
    }, { "./_hide": 46 }], 78: [function (e, t, r) {
      t.exports = e("./_hide");
    }, { "./_hide": 46 }], 79: [function (e, t, r) {
      var n = e("./_is-object"),
          o = e("./_an-object"),
          i = function i(e, t) {
        if (o(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
      };t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, r, n) {
          try {
            n = e("./_ctx")(Function.call, e("./_object-gopd").f(Object.prototype, "__proto__").set, 2), n(t, []), r = !(t instanceof Array);
          } catch (o) {
            r = !0;
          }return function (e, t) {
            return i(e, t), r ? e.__proto__ = t : n(e, t), e;
          };
        }({}, !1) : void 0), check: i };
    }, { "./_an-object": 30, "./_ctx": 35, "./_is-object": 53, "./_object-gopd": 67 }], 80: [function (e, t, r) {
      "use strict";
      var n = e("./_global"),
          o = e("./_core"),
          i = e("./_object-dp"),
          s = e("./_descriptors"),
          c = e("./_wks")("species");t.exports = function (e) {
        var t = "function" == typeof o[e] ? o[e] : n[e];s && t && !t[c] && i.f(t, c, { configurable: !0, get: function get() {
            return this;
          } });
      };
    }, { "./_core": 34, "./_descriptors": 37, "./_global": 44, "./_object-dp": 65, "./_wks": 96 }], 81: [function (e, t, r) {
      var n = e("./_object-dp").f,
          o = e("./_has"),
          i = e("./_wks")("toStringTag");t.exports = function (e, t, r) {
        e && !o(e = r ? e : e.prototype, i) && n(e, i, { configurable: !0, value: t });
      };
    }, { "./_has": 45, "./_object-dp": 65, "./_wks": 96 }], 82: [function (e, t, r) {
      var n = e("./_shared")("keys"),
          o = e("./_uid");t.exports = function (e) {
        return n[e] || (n[e] = o(e));
      };
    }, { "./_shared": 83, "./_uid": 93 }], 83: [function (e, t, r) {
      var n = e("./_global"),
          o = "__core-js_shared__",
          i = n[o] || (n[o] = {});t.exports = function (e) {
        return i[e] || (i[e] = {});
      };
    }, { "./_global": 44 }], 84: [function (e, t, r) {
      var n = e("./_an-object"),
          o = e("./_a-function"),
          i = e("./_wks")("species");t.exports = function (e, t) {
        var r,
            s = n(e).constructor;return void 0 === s || void 0 == (r = n(s)[i]) ? t : o(r);
      };
    }, { "./_a-function": 27, "./_an-object": 30, "./_wks": 96 }], 85: [function (e, t, r) {
      var n = e("./_to-integer"),
          o = e("./_defined");t.exports = function (e) {
        return function (t, r) {
          var i,
              s,
              c = String(o(t)),
              u = n(r),
              a = c.length;return u < 0 || u >= a ? e ? "" : void 0 : (i = c.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === a || (s = c.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? c.charAt(u) : i : e ? c.slice(u, u + 2) : (i - 55296 << 10) + (s - 56320) + 65536);
        };
      };
    }, { "./_defined": 36, "./_to-integer": 88 }], 86: [function (e, t, r) {
      var n,
          o,
          i,
          s = e("./_ctx"),
          c = e("./_invoke"),
          u = e("./_html"),
          a = e("./_dom-create"),
          l = e("./_global"),
          f = l.process,
          p = l.setImmediate,
          d = l.clearImmediate,
          h = l.MessageChannel,
          y = 0,
          _ = {},
          b = "onreadystatechange",
          v = function v() {
        var e = +this;if (_.hasOwnProperty(e)) {
          var t = _[e];delete _[e], t();
        }
      },
          m = function m(e) {
        v.call(e.data);
      };p && d || (p = function p(e) {
        for (var t = [], r = 1; arguments.length > r;) {
          t.push(arguments[r++]);
        }return _[++y] = function () {
          c("function" == typeof e ? e : Function(e), t);
        }, n(y), y;
      }, d = function d(e) {
        delete _[e];
      }, "process" == e("./_cof")(f) ? n = function n(e) {
        f.nextTick(s(v, e, 1));
      } : h ? (o = new h(), i = o.port2, o.port1.onmessage = m, n = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function n(e) {
        l.postMessage(e + "", "*");
      }, l.addEventListener("message", m, !1)) : n = b in a("script") ? function (e) {
        u.appendChild(a("script"))[b] = function () {
          u.removeChild(this), v.call(e);
        };
      } : function (e) {
        setTimeout(s(v, e, 1), 0);
      }), t.exports = { set: p, clear: d };
    }, { "./_cof": 33, "./_ctx": 35, "./_dom-create": 38, "./_global": 44, "./_html": 47, "./_invoke": 49 }], 87: [function (e, t, r) {
      var n = e("./_to-integer"),
          o = Math.max,
          i = Math.min;t.exports = function (e, t) {
        return e = n(e), e < 0 ? o(e + t, 0) : i(e, t);
      };
    }, { "./_to-integer": 88 }], 88: [function (e, t, r) {
      var n = Math.ceil,
          o = Math.floor;t.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e);
      };
    }, {}], 89: [function (e, t, r) {
      var n = e("./_iobject"),
          o = e("./_defined");t.exports = function (e) {
        return n(o(e));
      };
    }, { "./_defined": 36, "./_iobject": 50 }], 90: [function (e, t, r) {
      var n = e("./_to-integer"),
          o = Math.min;t.exports = function (e) {
        return e > 0 ? o(n(e), 9007199254740991) : 0;
      };
    }, { "./_to-integer": 88 }], 91: [function (e, t, r) {
      var n = e("./_defined");t.exports = function (e) {
        return Object(n(e));
      };
    }, { "./_defined": 36 }], 92: [function (e, t, r) {
      var n = e("./_is-object");t.exports = function (e, t) {
        if (!n(e)) return e;var r, o;if (t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;if ("function" == typeof (r = e.valueOf) && !n(o = r.call(e))) return o;if (!t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;throw TypeError("Can't convert object to primitive value");
      };
    }, { "./_is-object": 53 }], 93: [function (e, t, r) {
      var n = 0,
          o = Math.random();t.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36));
      };
    }, {}], 94: [function (e, t, r) {
      var n = e("./_global"),
          o = e("./_core"),
          i = e("./_library"),
          s = e("./_wks-ext"),
          c = e("./_object-dp").f;t.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});"_" == e.charAt(0) || e in t || c(t, e, { value: s.f(e) });
      };
    }, { "./_core": 34, "./_global": 44, "./_library": 61, "./_object-dp": 65, "./_wks-ext": 95 }], 95: [function (e, t, r) {
      r.f = e("./_wks");
    }, { "./_wks": 96 }], 96: [function (e, t, r) {
      var n = e("./_shared")("wks"),
          o = e("./_uid"),
          i = e("./_global").Symbol,
          s = "function" == typeof i,
          c = t.exports = function (e) {
        return n[e] || (n[e] = s && i[e] || (s ? i : o)("Symbol." + e));
      };c.store = n;
    }, { "./_global": 44, "./_shared": 83, "./_uid": 93 }], 97: [function (e, t, r) {
      var n = e("./_classof"),
          o = e("./_wks")("iterator"),
          i = e("./_iterators");t.exports = e("./_core").getIteratorMethod = function (e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[n(e)];
      };
    }, { "./_classof": 32, "./_core": 34, "./_iterators": 59, "./_wks": 96 }], 98: [function (e, t, r) {
      "use strict";
      var n = e("./_add-to-unscopables"),
          o = e("./_iter-step"),
          i = e("./_iterators"),
          s = e("./_to-iobject");t.exports = e("./_iter-define")(Array, "Array", function (e, t) {
        this._t = s(e), this._i = 0, this._k = t;
      }, function () {
        var e = this._t,
            t = this._k,
            r = this._i++;return !e || r >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, r) : "values" == t ? o(0, e[r]) : o(0, [r, e[r]]);
      }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries");
    }, { "./_add-to-unscopables": 28, "./_iter-define": 56, "./_iter-step": 58, "./_iterators": 59, "./_to-iobject": 89 }], 99: [function (e, t, r) {
      var n = e("./_export");n(n.S, "Object", { create: e("./_object-create") });
    }, { "./_export": 41, "./_object-create": 64 }], 100: [function (e, t, r) {
      var n = e("./_export");n(n.S + n.F * !e("./_descriptors"), "Object", { defineProperty: e("./_object-dp").f });
    }, { "./_descriptors": 37, "./_export": 41, "./_object-dp": 65 }], 101: [function (e, t, r) {
      var n = e("./_to-iobject"),
          o = e("./_object-gopd").f;e("./_object-sap")("getOwnPropertyDescriptor", function () {
        return function (e, t) {
          return o(n(e), t);
        };
      });
    }, { "./_object-gopd": 67, "./_object-sap": 75, "./_to-iobject": 89 }], 102: [function (e, t, r) {
      var n = e("./_to-object"),
          o = e("./_object-gpo");e("./_object-sap")("getPrototypeOf", function () {
        return function (e) {
          return o(n(e));
        };
      });
    }, { "./_object-gpo": 71, "./_object-sap": 75, "./_to-object": 91 }], 103: [function (e, t, r) {
      var n = e("./_to-object"),
          o = e("./_object-keys");e("./_object-sap")("keys", function () {
        return function (e) {
          return o(n(e));
        };
      });
    }, { "./_object-keys": 73, "./_object-sap": 75, "./_to-object": 91 }], 104: [function (e, t, r) {
      var n = e("./_export");n(n.S, "Object", { setPrototypeOf: e("./_set-proto").set });
    }, { "./_export": 41, "./_set-proto": 79 }], 105: [function (e, t, r) {}, {}], 106: [function (e, t, r) {
      "use strict";
      var n,
          o,
          i,
          s = e("./_library"),
          c = e("./_global"),
          u = e("./_ctx"),
          a = e("./_classof"),
          l = e("./_export"),
          f = e("./_is-object"),
          p = (e("./_an-object"), e("./_a-function")),
          d = e("./_an-instance"),
          h = e("./_for-of"),
          y = (e("./_set-proto").set, e("./_species-constructor")),
          _ = e("./_task").set,
          b = e("./_microtask")(),
          v = "Promise",
          m = c.TypeError,
          g = c.process,
          _j = c[v],
          g = c.process,
          w = "process" == a(g),
          k = function k() {},
          x = !!function () {
        try {
          var t = _j.resolve(1),
              r = (t.constructor = {})[e("./_wks")("species")] = function (e) {
            e(k, k);
          };return (w || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof r;
        } catch (n) {}
      }(),
          S = function S(e, t) {
        return e === t || e === _j && t === i;
      },
          P = function P(e) {
        var t;return !(!f(e) || "function" != typeof (t = e.then)) && t;
      },
          O = function O(e) {
        return S(_j, e) ? new C(e) : new o(e);
      },
          C = o = function o(e) {
        var t, r;this.promise = new e(function (e, n) {
          if (void 0 !== t || void 0 !== r) throw m("Bad Promise constructor");t = e, r = n;
        }), this.resolve = p(t), this.reject = p(r);
      },
          E = function E(e) {
        try {
          e();
        } catch (t) {
          return { error: t };
        }
      },
          M = function M(e, t) {
        if (!e._n) {
          e._n = !0;var r = e._c;b(function () {
            for (var n = e._v, o = 1 == e._s, i = 0, s = function s(t) {
              var r,
                  i,
                  s = o ? t.ok : t.fail,
                  c = t.resolve,
                  u = t.reject,
                  a = t.domain;try {
                s ? (o || (2 == e._h && U(e), e._h = 1), s === !0 ? r = n : (a && a.enter(), r = s(n), a && a.exit()), r === t.promise ? u(m("Promise-chain cycle")) : (i = P(r)) ? i.call(r, c, u) : c(r)) : u(n);
              } catch (l) {
                u(l);
              }
            }; r.length > i;) {
              s(r[i++]);
            }e._c = [], e._n = !1, t && !e._h && R(e);
          });
        }
      },
          R = function R(e) {
        _.call(c, function () {
          var t,
              r,
              n,
              o = e._v;if (A(e) && (t = E(function () {
            w ? g.emit("unhandledRejection", o, e) : (r = c.onunhandledrejection) ? r({ promise: e, reason: o }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", o);
          }), e._h = w || A(e) ? 2 : 1), e._a = void 0, t) throw t.error;
        });
      },
          A = function A(e) {
        if (1 == e._h) return !1;for (var t, r = e._a || e._c, n = 0; r.length > n;) {
          if (t = r[n++], t.fail || !A(t.promise)) return !1;
        }return !0;
      },
          U = function U(e) {
        _.call(c, function () {
          var t;w ? g.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
          I = function I(e) {
        var t = this;t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), M(t, !0));
      },
          N = function N(e) {
        var t,
            r = this;if (!r._d) {
          r._d = !0, r = r._w || r;try {
            if (r === e) throw m("Promise can't be resolved itself");(t = P(e)) ? b(function () {
              var n = { _w: r, _d: !1 };try {
                t.call(e, u(N, n, 1), u(I, n, 1));
              } catch (o) {
                I.call(n, o);
              }
            }) : (r._v = e, r._s = 1, M(r, !1));
          } catch (n) {
            I.call({ _w: r, _d: !1 }, n);
          }
        }
      };x || (_j = function j(e) {
        d(this, _j, v, "_h"), p(e), n.call(this);try {
          e(u(N, this, 1), u(I, this, 1));
        } catch (t) {
          I.call(this, t);
        }
      }, n = function n(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }, n.prototype = e("./_redefine-all")(_j.prototype, { then: function then(e, t) {
          var r = O(y(this, _j));return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = w ? g.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && M(this, !1), r.promise;
        }, "catch": function _catch(e) {
          return this.then(void 0, e);
        } }), C = function C() {
        var e = new n();this.promise = e, this.resolve = u(N, e, 1), this.reject = u(I, e, 1);
      }), l(l.G + l.W + l.F * !x, { Promise: _j }), e("./_set-to-string-tag")(_j, v), e("./_set-species")(v), i = e("./_core")[v], l(l.S + l.F * !x, v, { reject: function reject(e) {
          var t = O(this),
              r = t.reject;return r(e), t.promise;
        } }), l(l.S + l.F * (s || !x), v, { resolve: function resolve(e) {
          if (e instanceof _j && S(e.constructor, this)) return e;var t = O(this),
              r = t.resolve;return r(e), t.promise;
        } }), l(l.S + l.F * !(x && e("./_iter-detect")(function (e) {
        _j.all(e)["catch"](k);
      })), v, { all: function all(e) {
          var t = this,
              r = O(t),
              n = r.resolve,
              o = r.reject,
              i = E(function () {
            var r = [],
                i = 0,
                s = 1;h(e, !1, function (e) {
              var c = i++,
                  u = !1;r.push(void 0), s++, t.resolve(e).then(function (e) {
                u || (u = !0, r[c] = e, --s || n(r));
              }, o);
            }), --s || n(r);
          });return i && o(i.error), r.promise;
        }, race: function race(e) {
          var t = this,
              r = O(t),
              n = r.reject,
              o = E(function () {
            h(e, !1, function (e) {
              t.resolve(e).then(r.resolve, n);
            });
          });return o && n(o.error), r.promise;
        } });
    }, { "./_a-function": 27, "./_an-instance": 29, "./_an-object": 30, "./_classof": 32, "./_core": 34, "./_ctx": 35, "./_export": 41, "./_for-of": 43, "./_global": 44, "./_is-object": 53, "./_iter-detect": 57, "./_library": 61, "./_microtask": 63, "./_redefine-all": 77, "./_set-proto": 79, "./_set-species": 80, "./_set-to-string-tag": 81, "./_species-constructor": 84, "./_task": 86, "./_wks": 96 }], 107: [function (e, t, r) {
      "use strict";
      var n = e("./_string-at")(!0);e("./_iter-define")(String, "String", function (e) {
        this._t = String(e), this._i = 0;
      }, function () {
        var e,
            t = this._t,
            r = this._i;return r >= t.length ? { value: void 0, done: !0 } : (e = n(t, r), this._i += e.length, { value: e, done: !1 });
      });
    }, { "./_iter-define": 56, "./_string-at": 85 }], 108: [function (e, t, r) {
      "use strict";
      var n = e("./_global"),
          o = e("./_has"),
          i = e("./_descriptors"),
          s = e("./_export"),
          c = e("./_redefine"),
          u = e("./_meta").KEY,
          a = e("./_fails"),
          l = e("./_shared"),
          f = e("./_set-to-string-tag"),
          p = e("./_uid"),
          d = e("./_wks"),
          h = e("./_wks-ext"),
          y = e("./_wks-define"),
          _ = e("./_keyof"),
          b = e("./_enum-keys"),
          v = e("./_is-array"),
          m = e("./_an-object"),
          g = e("./_to-iobject"),
          j = e("./_to-primitive"),
          w = e("./_property-desc"),
          k = e("./_object-create"),
          x = e("./_object-gopn-ext"),
          S = e("./_object-gopd"),
          P = e("./_object-dp"),
          O = e("./_object-keys"),
          C = S.f,
          E = P.f,
          M = x.f,
          _R = n.Symbol,
          A = n.JSON,
          U = A && A.stringify,
          I = "prototype",
          N = d("_hidden"),
          L = d("toPrimitive"),
          F = {}.propertyIsEnumerable,
          T = l("symbol-registry"),
          D = l("symbols"),
          G = l("op-symbols"),
          K = Object[I],
          H = "function" == typeof _R,
          B = n.QObject,
          J = !B || !B[I] || !B[I].findChild,
          W = i && a(function () {
        return 7 != k(E({}, "a", { get: function get() {
            return E(this, "a", { value: 7 }).a;
          } })).a;
      }) ? function (e, t, r) {
        var n = C(K, t);n && delete K[t], E(e, t, r), n && e !== K && E(K, t, n);
      } : E,
          z = function z(e) {
        var t = D[e] = k(_R[I]);return t._k = e, t;
      },
          V = H && "symbol" == _typeof(_R.iterator) ? function (e) {
        return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      } : function (e) {
        return e instanceof _R;
      },
          Y = function Y(e, t, r) {
        return e === K && Y(G, t, r), m(e), t = j(t, !0), m(r), o(D, t) ? (r.enumerable ? (o(e, N) && e[N][t] && (e[N][t] = !1), r = k(r, { enumerable: w(0, !1) })) : (o(e, N) || E(e, N, w(1, {})), e[N][t] = !0), W(e, t, r)) : E(e, t, r);
      },
          q = function q(e, t) {
        m(e);for (var r, n = b(t = g(t)), o = 0, i = n.length; i > o;) {
          Y(e, r = n[o++], t[r]);
        }return e;
      },
          Q = function Q(e, t) {
        return void 0 === t ? k(e) : q(k(e), t);
      },
          Z = function Z(e) {
        var t = F.call(this, e = j(e, !0));return !(this === K && o(D, e) && !o(G, e)) && (!(t || !o(this, e) || !o(D, e) || o(this, N) && this[N][e]) || t);
      },
          $ = function $(e, t) {
        if (e = g(e), t = j(t, !0), e !== K || !o(D, t) || o(G, t)) {
          var r = C(e, t);return !r || !o(D, t) || o(e, N) && e[N][t] || (r.enumerable = !0), r;
        }
      },
          X = function X(e) {
        for (var t, r = M(g(e)), n = [], i = 0; r.length > i;) {
          o(D, t = r[i++]) || t == N || t == u || n.push(t);
        }return n;
      },
          ee = function ee(e) {
        for (var t, r = e === K, n = M(r ? G : g(e)), i = [], s = 0; n.length > s;) {
          !o(D, t = n[s++]) || r && !o(K, t) || i.push(D[t]);
        }return i;
      };H || (_R = function R() {
        if (this instanceof _R) throw TypeError("Symbol is not a constructor!");var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function t(r) {
          this === K && t.call(G, r), o(this, N) && o(this[N], e) && (this[N][e] = !1), W(this, e, w(1, r));
        };return i && J && W(K, e, { configurable: !0, set: t }), z(e);
      }, c(_R[I], "toString", function () {
        return this._k;
      }), S.f = $, P.f = Y, e("./_object-gopn").f = x.f = X, e("./_object-pie").f = Z, e("./_object-gops").f = ee, i && !e("./_library") && c(K, "propertyIsEnumerable", Z, !0), h.f = function (e) {
        return z(d(e));
      }), s(s.G + s.W + s.F * !H, { Symbol: _R });for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; te.length > re;) {
        d(te[re++]);
      }for (var te = O(d.store), re = 0; te.length > re;) {
        y(te[re++]);
      }s(s.S + s.F * !H, "Symbol", { "for": function _for(e) {
          return o(T, e += "") ? T[e] : T[e] = _R(e);
        }, keyFor: function keyFor(e) {
          if (V(e)) return _(T, e);throw TypeError(e + " is not a symbol!");
        }, useSetter: function useSetter() {
          J = !0;
        }, useSimple: function useSimple() {
          J = !1;
        } }), s(s.S + s.F * !H, "Object", { create: Q, defineProperty: Y, defineProperties: q, getOwnPropertyDescriptor: $, getOwnPropertyNames: X, getOwnPropertySymbols: ee }), A && s(s.S + s.F * (!H || a(function () {
        var e = _R();return "[null]" != U([e]) || "{}" != U({ a: e }) || "{}" != U(Object(e));
      })), "JSON", { stringify: function stringify(e) {
          if (void 0 !== e && !V(e)) {
            for (var t, r, n = [e], o = 1; arguments.length > o;) {
              n.push(arguments[o++]);
            }return t = n[1], "function" == typeof t && (r = t), !r && v(t) || (t = function t(e, _t2) {
              if (r && (_t2 = r.call(this, e, _t2)), !V(_t2)) return _t2;
            }), n[1] = t, U.apply(A, n);
          }
        } }), _R[I][L] || e("./_hide")(_R[I], L, _R[I].valueOf), f(_R, "Symbol"), f(Math, "Math", !0), f(n.JSON, "JSON", !0);
    }, { "./_an-object": 30, "./_descriptors": 37, "./_enum-keys": 40, "./_export": 41, "./_fails": 42, "./_global": 44, "./_has": 45, "./_hide": 46, "./_is-array": 52, "./_keyof": 60, "./_library": 61, "./_meta": 62, "./_object-create": 64, "./_object-dp": 65, "./_object-gopd": 67, "./_object-gopn": 69, "./_object-gopn-ext": 68, "./_object-gops": 70, "./_object-keys": 73, "./_object-pie": 74, "./_property-desc": 76, "./_redefine": 78, "./_set-to-string-tag": 81, "./_shared": 83, "./_to-iobject": 89, "./_to-primitive": 92, "./_uid": 93, "./_wks": 96, "./_wks-define": 94, "./_wks-ext": 95 }], 109: [function (e, t, r) {
      e("./_wks-define")("asyncIterator");
    }, { "./_wks-define": 94 }], 110: [function (e, t, r) {
      e("./_wks-define")("observable");
    }, { "./_wks-define": 94 }], 111: [function (e, t, r) {
      e("./es6.array.iterator");for (var n = e("./_global"), o = e("./_hide"), i = e("./_iterators"), s = e("./_wks")("toStringTag"), c = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
        var a = c[u],
            l = n[a],
            f = l && l.prototype;f && !f[s] && o(f, s, a), i[a] = i.Array;
      }
    }, { "./_global": 44, "./_hide": 46, "./_iterators": 59, "./_wks": 96, "./es6.array.iterator": 98 }], 112: [function (e, t, r) {
      function n() {
        p && l && (p = !1, l.length ? f = l.concat(f) : d = -1, f.length && o());
      }function o() {
        if (!p) {
          var e = c(n);p = !0;for (var t = f.length; t;) {
            for (l = f, f = []; ++d < t;) {
              l && l[d].run();
            }d = -1, t = f.length;
          }l = null, p = !1, u(e);
        }
      }function i(e, t) {
        this.fun = e, this.array = t;
      }function s() {}var c,
          u,
          a = t.exports = {};!function () {
        try {
          c = setTimeout;
        } catch (e) {
          c = function c() {
            throw new Error("setTimeout is not defined");
          };
        }try {
          u = clearTimeout;
        } catch (e) {
          u = function u() {
            throw new Error("clearTimeout is not defined");
          };
        }
      }();var l,
          f = [],
          p = !1,
          d = -1;a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
          t[r - 1] = arguments[r];
        }f.push(new i(e, t)), 1 !== f.length || p || c(o, 0);
      }, i.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = s, a.addListener = s, a.once = s, a.off = s, a.removeListener = s, a.removeAllListeners = s, a.emit = s, a.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function () {
        return "/";
      }, a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function () {
        return 0;
      };
    }, {}], 113: [function (t, r, n) {
      (function (o, i) {
        !function (t) {
          if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "undefined" != typeof r) r.exports = t();else if ("function" == typeof e && e.amd) e([], t);else {
            var o;o = "undefined" != typeof window ? window : "undefined" != typeof i ? i : "undefined" != typeof self ? self : this, o.PersistenceManager = t();
          }
        }(function () {
          return function e(r, n, o) {
            function i(c, u) {
              if (!n[c]) {
                if (!r[c]) {
                  var a = "function" == typeof t && t;if (!u && a) return a(c, !0);if (s) return s(c, !0);var l = new Error("Cannot find module '" + c + "'");throw l.code = "MODULE_NOT_FOUND", l;
                }var f = n[c] = { exports: {} };r[c][0].call(f.exports, function (e) {
                  var t = r[c][1][e];return i(t ? t : e);
                }, f, f.exports, e, r, n, o);
              }return n[c].exports;
            }for (var s = "function" == typeof t && t, c = 0; c < o.length; c++) {
              i(o[c]);
            }return i;
          }({ 1: [function (e, t, r) {
              t.exports = { "default": e("core-js/library/fn/json/stringify"), __esModule: !0 };
            }, { "core-js/library/fn/json/stringify": 2 }], 2: [function (e, t, r) {
              var n = e("../../modules/_core"),
                  o = n.JSON || (n.JSON = { stringify: JSON.stringify });t.exports = function (e) {
                return o.stringify.apply(o, arguments);
              };
            }, { "../../modules/_core": 3 }], 3: [function (e, t, r) {
              var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
            }, {}], 4: [function (e, t, r) {
              "use strict";
              function n(e) {
                if (null === e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return e;if (e instanceof Object) var t = { __proto__: e.__proto__ };else var t = Object.create(null);return Object.getOwnPropertyNames(e).forEach(function (r) {
                  Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                }), t;
              }var o = e("fs");t.exports = n(o);
            }, { fs: void 0 }], 5: [function (e, t, r) {
              function n() {}function i(e) {
                function t(e, t, r) {
                  function n(e, t, r) {
                    return v(e, t, function (o) {
                      !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? ("function" == typeof r && r.apply(this, arguments), c()) : s([n, [e, t, r]]);
                    });
                  }return "function" == typeof t && (r = t, t = null), n(e, t, r);
                }function r(e, t, r, n) {
                  function o(e, t, r, n) {
                    return m(e, t, r, function (i) {
                      !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? ("function" == typeof n && n.apply(this, arguments), c()) : s([o, [e, t, r, n]]);
                    });
                  }return "function" == typeof r && (n = r, r = null), o(e, t, r, n);
                }function n(e, t, r, n) {
                  function o(e, t, r, n) {
                    return g(e, t, r, function (i) {
                      !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? ("function" == typeof n && n.apply(this, arguments), c()) : s([o, [e, t, r, n]]);
                    });
                  }return "function" == typeof r && (n = r, r = null), o(e, t, r, n);
                }function u(e, t) {
                  function r() {
                    return j(e, function (n, o) {
                      o && o.sort && o.sort(), !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? ("function" == typeof t && t.apply(this, arguments), c()) : s([r, [e, t]]);
                    });
                  }return r(e, t);
                }function f(e, t) {
                  return this instanceof f ? (k.apply(this, arguments), this) : f.apply(Object.create(f.prototype), arguments);
                }function p() {
                  var e = this;b(e.path, e.flags, e.mode, function (t, r) {
                    t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = r, e.emit("open", r), e.read());
                  });
                }function d(e, t) {
                  return this instanceof d ? (x.apply(this, arguments), this) : d.apply(Object.create(d.prototype), arguments);
                }function h() {
                  var e = this;b(e.path, e.flags, e.mode, function (t, r) {
                    t ? (e.destroy(), e.emit("error", t)) : (e.fd = r, e.emit("open", r));
                  });
                }function y(e, t) {
                  return new f(e, t);
                }function _(e, t) {
                  return new d(e, t);
                }function b(e, t, r, n) {
                  function o(e, t, r, n) {
                    return S(e, t, r, function (i, u) {
                      !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? ("function" == typeof n && n.apply(this, arguments), c()) : s([o, [e, t, r, n]]);
                    });
                  }return "function" == typeof r && (n = r, r = null), o(e, t, r, n);
                }a(e), e.gracefulify = i, e.FileReadStream = f, e.FileWriteStream = d, e.createReadStream = y, e.createWriteStream = _;var v = e.readFile;e.readFile = t;var m = e.writeFile;e.writeFile = r;var g = e.appendFile;g && (e.appendFile = n);var j = e.readdir;if (e.readdir = u, "v0.8" === o.version.substr(0, 4)) {
                  var w = l(e);f = w.ReadStream, d = w.WriteStream;
                }var k = e.ReadStream;f.prototype = Object.create(k.prototype), f.prototype.open = p;var x = e.WriteStream;d.prototype = Object.create(x.prototype), d.prototype.open = h, e.ReadStream = f, e.WriteStream = d;var S = e.open;return e.open = b, e;
              }function s(e) {
                d("ENQUEUE", e[0].name, e[1]), f.push(e);
              }function c() {
                var e = f.shift();e && (d("RETRY", e[0].name, e[1]), e[0].apply(null, e[1]));
              }var u = e("fs"),
                  a = e("./polyfills.js"),
                  l = e("./legacy-streams.js"),
                  f = [],
                  p = e("util"),
                  d = n;p.debuglog ? d = p.debuglog("gfs4") : /\bgfs4\b/i.test(o.env.NODE_DEBUG || "") && (d = function d() {
                var e = p.format.apply(p, arguments);e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e);
              }), /\bgfs4\b/i.test(o.env.NODE_DEBUG || "") && o.on("exit", function () {
                d(f), e("assert").equal(f.length, 0);
              }), t.exports = i(e("./fs.js")), o.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && (t.exports = i(u)), t.exports.close = u.close = function (e) {
                return function (t, r) {
                  return e.call(u, t, function (e) {
                    e || c(), "function" == typeof r && r.apply(this, arguments);
                  });
                };
              }(u.close), t.exports.closeSync = u.closeSync = function (e) {
                return function (t) {
                  var r = e.apply(u, arguments);return c(), r;
                };
              }(u.closeSync);
            }, { "./fs.js": 4, "./legacy-streams.js": 6, "./polyfills.js": 7, assert: void 0, fs: void 0, util: void 0 }], 6: [function (e, t, r) {
              function n(e) {
                function t(r, n) {
                  if (!(this instanceof t)) return new t(r, n);i.call(this);var s = this;this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, n = n || {};for (var c = Object.keys(n), u = 0, a = c.length; u < a; u++) {
                    var l = c[u];this[l] = n[l];
                  }if (this.encoding && this.setEncoding(this.encoding), void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");if (void 0 === this.end) this.end = 1 / 0;else if ("number" != typeof this.end) throw TypeError("end must be a Number");if (this.start > this.end) throw new Error("start must be <= end");this.pos = this.start;
                  }return null !== this.fd ? void o.nextTick(function () {
                    s._read();
                  }) : void e.open(this.path, this.flags, this.mode, function (e, t) {
                    return e ? (s.emit("error", e), void (s.readable = !1)) : (s.fd = t, s.emit("open", t), void s._read());
                  });
                }function r(t, n) {
                  if (!(this instanceof r)) return new r(t, n);i.call(this), this.path = t, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, n = n || {};for (var o = Object.keys(n), s = 0, c = o.length; s < c; s++) {
                    var u = o[s];this[u] = n[u];
                  }if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");if (this.start < 0) throw new Error("start must be >= zero");this.pos = this.start;
                  }this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
                }return { ReadStream: t, WriteStream: r };
              }var i = e("stream").Stream;t.exports = n;
            }, { stream: void 0 }], 7: [function (e, t, r) {
              function n(e) {
                f.hasOwnProperty("O_SYMLINK") && o.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && i(e), e.lutimes || s(e), e.chown = c(e.chown), e.fchown = c(e.fchown), e.lchown = c(e.lchown), e.chmod = c(e.chmod), e.fchmod = c(e.fchmod), e.lchmod = c(e.lchmod), e.chownSync = u(e.chownSync), e.fchownSync = u(e.fchownSync), e.lchownSync = u(e.lchownSync), e.chmodSync = c(e.chmodSync), e.fchmodSync = c(e.fchmodSync), e.lchmodSync = c(e.lchmodSync), e.lchmod || (e.lchmod = function (e, t, r) {
                  o.nextTick(r);
                }, e.lchmodSync = function () {}), e.lchown || (e.lchown = function (e, t, r, n) {
                  o.nextTick(n);
                }, e.lchownSync = function () {}), "win32" === o.platform && (e.rename = function (e) {
                  return function (t, r, n) {
                    var o = Date.now();e(t, r, function i(s) {
                      return s && ("EACCES" === s.code || "EPERM" === s.code) && Date.now() - o < 1e3 ? e(t, r, i) : void (n && n(s));
                    });
                  };
                }(e.rename)), e.read = function (t) {
                  return function (r, n, o, i, s, c) {
                    var _u;if (c && "function" == typeof c) {
                      var a = 0;_u = function u(l, f, p) {
                        return l && "EAGAIN" === l.code && a < 10 ? (a++, t.call(e, r, n, o, i, s, _u)) : void c.apply(this, arguments);
                      };
                    }return t.call(e, r, n, o, i, s, _u);
                  };
                }(e.read), e.readSync = function (t) {
                  return function (r, n, o, i, s) {
                    for (var c = 0;;) {
                      try {
                        return t.call(e, r, n, o, i, s);
                      } catch (u) {
                        if ("EAGAIN" === u.code && c < 10) {
                          c++;continue;
                        }throw u;
                      }
                    }
                  };
                }(e.readSync);
              }function i(e) {
                e.lchmod = function (t, r, n) {
                  n = n || noop, e.open(t, f.O_WRONLY | f.O_SYMLINK, r, function (t, o) {
                    return t ? void n(t) : void e.fchmod(o, r, function (t) {
                      e.close(o, function (e) {
                        n(t || e);
                      });
                    });
                  });
                }, e.lchmodSync = function (t, r) {
                  var n,
                      o = e.openSync(t, f.O_WRONLY | f.O_SYMLINK, r),
                      i = !0;try {
                    n = e.fchmodSync(o, r), i = !1;
                  } finally {
                    if (i) try {
                      e.closeSync(o);
                    } catch (s) {} else e.closeSync(o);
                  }return n;
                };
              }function s(e) {
                f.hasOwnProperty("O_SYMLINK") ? (e.lutimes = function (t, r, n, o) {
                  e.open(t, f.O_SYMLINK, function (t, i) {
                    return o = o || noop, t ? o(t) : void e.futimes(i, r, n, function (t) {
                      e.close(i, function (e) {
                        return o(t || e);
                      });
                    });
                  });
                }, e.lutimesSync = function (t, r, n) {
                  var o,
                      i = e.openSync(t, f.O_SYMLINK),
                      s = !0;try {
                    o = e.futimesSync(i, r, n), s = !1;
                  } finally {
                    if (s) try {
                      e.closeSync(i);
                    } catch (c) {} else e.closeSync(i);
                  }return o;
                }) : (e.lutimes = function (e, t, r, n) {
                  o.nextTick(n);
                }, e.lutimesSync = function () {});
              }function c(e) {
                return e ? function (t, r, n, o) {
                  return e.call(l, t, r, n, function (e, t) {
                    a(e) && (e = null), o(e, t);
                  });
                } : e;
              }function u(e) {
                return e ? function (t, r, n) {
                  try {
                    return e.call(l, t, r, n);
                  } catch (o) {
                    if (!a(o)) throw o;
                  }
                } : e;
              }function a(e) {
                if (!e) return !0;if ("ENOSYS" === e.code) return !0;var t = !o.getuid || 0 !== o.getuid();return !(!t || "EINVAL" !== e.code && "EPERM" !== e.code);
              }var l = e("./fs.js"),
                  f = e("constants"),
                  p = o.cwd,
                  d = null;o.cwd = function () {
                return d || (d = p.call(o)), d;
              };try {
                o.cwd();
              } catch (h) {}var y = o.chdir;o.chdir = function (e) {
                d = null, y.call(o, e);
              }, t.exports = n;
            }, { "./fs.js": 4, constants: void 0 }], 8: [function (e, t, r) {
              !function () {
                function e(t, n) {
                  var o = this instanceof e ? this : r;if (o.reset(n), "string" == typeof t && t.length > 0 && o.hash(t), o !== this) return o;
                }var r;e.prototype.hash = function (e) {
                  var t, r, n, o, i;switch (i = e.length, this.len += i, r = this.k1, n = 0, this.rem) {case 0:
                      r ^= i > n ? 65535 & e.charCodeAt(n++) : 0;case 1:
                      r ^= i > n ? (65535 & e.charCodeAt(n++)) << 8 : 0;case 2:
                      r ^= i > n ? (65535 & e.charCodeAt(n++)) << 16 : 0;case 3:
                      r ^= i > n ? (255 & e.charCodeAt(n)) << 24 : 0, r ^= i > n ? (65280 & e.charCodeAt(n++)) >> 8 : 0;}if (this.rem = i + this.rem & 3, i -= this.rem, i > 0) {
                    for (t = this.h1; r = 11601 * r + 3432906752 * (65535 & r) & 4294967295, r = r << 15 | r >>> 17, r = 13715 * r + 461832192 * (65535 & r) & 4294967295, t ^= r, t = t << 13 | t >>> 19, t = 5 * t + 3864292196 & 4294967295, !(n >= i);) {
                      r = 65535 & e.charCodeAt(n++) ^ (65535 & e.charCodeAt(n++)) << 8 ^ (65535 & e.charCodeAt(n++)) << 16, o = e.charCodeAt(n++), r ^= (255 & o) << 24 ^ (65280 & o) >> 8;
                    }switch (r = 0, this.rem) {case 3:
                        r ^= (65535 & e.charCodeAt(n + 2)) << 16;case 2:
                        r ^= (65535 & e.charCodeAt(n + 1)) << 8;case 1:
                        r ^= 65535 & e.charCodeAt(n);}this.h1 = t;
                  }return this.k1 = r, this;
                }, e.prototype.result = function () {
                  var e, t;return e = this.k1, t = this.h1, e > 0 && (e = 11601 * e + 3432906752 * (65535 & e) & 4294967295, e = e << 15 | e >>> 17, e = 13715 * e + 461832192 * (65535 & e) & 4294967295, t ^= e), t ^= this.len, t ^= t >>> 16, t = 51819 * t + 2246770688 * (65535 & t) & 4294967295, t ^= t >>> 13, t = 44597 * t + 3266445312 * (65535 & t) & 4294967295, t ^= t >>> 16, t >>> 0;
                }, e.prototype.reset = function (e) {
                  return this.h1 = "number" == typeof e ? e : 0, this.rem = this.k1 = this.len = 0, this;
                }, r = new e(), "undefined" != typeof t ? t.exports = e : this.MurmurHash3 = e;
              }();
            }, {}], 9: [function (e, t, r) {
              (function () {
                var t,
                    n,
                    i,
                    s,
                    c,
                    u,
                    a,
                    l,
                    f,
                    p,
                    d,
                    h,
                    y,
                    _,
                    b = function b(e, t) {
                  function r() {
                    this.constructor = e;
                  }for (var n in t) {
                    v.call(t, n) && (e[n] = t[n]);
                  }return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
                },
                    v = {}.hasOwnProperty;y = e("path"), h = e("fs"), d = e("events"), _ = e("write-file-atomic").sync, n = "---.EMPTY_STRING.---", a = function a(e) {
                  var t, r, n, o, i;for (o = h.readdirSync(e), i = [], t = 0, r = o.length; t < r; t++) {
                    n = o[t], i.push(f(y.join(e, n)));
                  }return i;
                }, f = function f(e) {
                  return h.statSync(e).isDirectory() ? (a(e), h.rmdirSync(e)) : h.unlinkSync(e);
                }, l = function l(e) {
                  var t;return t = "" === e ? n : e.toString();
                }, c = function (e) {
                  function t(e) {
                    this.message = null != e ? e : "Unknown error.", null != Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name;
                  }return b(t, e), t.prototype.toString = function () {
                    return this.name + ": " + this.message;
                  }, t;
                }(Error), u = function () {
                  function e(e, t, r, n, o) {
                    this.key = e, this.oldValue = t, this.newValue = r, this.url = n, this.storageArea = null != o ? o : "localStorage";
                  }return e;
                }(), s = function () {
                  function e(t, r) {
                    if (this.key = t, this.index = r, !(this instanceof e)) return new e(this.key, this.index);
                  }return e;
                }(), p = function p() {
                  var e;return e = function e() {}, e.prototype = Object.create(null), new e();
                }, i = function (e) {
                  function t(e, n) {
                    return this._location = e, this.quota = null != n ? n : 5242880, this instanceof t ? (this._location = y.resolve(this._location), null != r[this._location] ? r[this._location] : (this.length = 0, this._bytesInUse = 0, this._keys = [], this._metaKeyMap = p(), this._eventUrl = "pid:" + o.pid, this._init(), this._QUOTA_EXCEEDED_ERR = c, r[this._location] = this, r[this._location])) : new t(this._location, this.quota);
                  }var r;return b(t, e), r = {}, t.prototype._init = function () {
                    var e, t, r, n, o, i, c, u;try {
                      if (u = h.statSync(this._location), null != u && !u.isDirectory()) throw new Error("A file exists at the location '" + this._location + "' when trying to create/open localStorage");for (this._bytesInUse = 0, this.length = 0, r = h.readdirSync(this._location), o = n = 0, c = r.length; n < c; o = ++n) {
                        i = r[o], t = decodeURIComponent(i), this._keys.push(t), e = new s(i, o), this._metaKeyMap[t] = e, u = this._getStat(i), null != (null != u ? u.size : void 0) && (e.size = u.size, this._bytesInUse += u.size);
                      }this.length = r.length;
                    } catch (a) {
                      h.mkdirSync(this._location);
                    }
                  }, t.prototype.setItem = function (e, t) {
                    var r, n, o, i, a, f, p, h, b, v;if (a = d.EventEmitter.listenerCount(this, "storage"), h = null, a && (h = this.getItem(e)), e = l(e), r = encodeURIComponent(e), i = y.join(this._location, r), b = t.toString(), v = b.length, f = this._metaKeyMap[e], o = !!f, p = o ? f.size : 0, this._bytesInUse - p + v > this.quota) throw new c();if (_(i, b, "utf8"), o || (f = new s(r, this._keys.push(e) - 1), f.size = v, this._metaKeyMap[e] = f, this.length += 1, this._bytesInUse += v), a) return n = new u(e, h, t, this._eventUrl), this.emit("storage", n);
                  }, t.prototype.getItem = function (e) {
                    var t, r;return e = l(e), r = this._metaKeyMap[e], r ? (t = y.join(this._location, r.key), h.readFileSync(t, "utf8")) : null;
                  }, t.prototype._getStat = function (e) {
                    var t;e = l(e), t = y.join(this._location, encodeURIComponent(e));try {
                      return h.statSync(t);
                    } catch (r) {
                      return null;
                    }
                  }, t.prototype.removeItem = function (e) {
                    var t, r, n, o, i, s, c, a, p;if (e = l(e), s = this._metaKeyMap[e]) {
                      n = d.EventEmitter.listenerCount(this, "storage"), c = null, n && (c = this.getItem(e)), delete this._metaKeyMap[e], this.length -= 1, this._bytesInUse -= s.size, r = y.join(this._location, s.key), this._keys.splice(s.index, 1), a = this._metaKeyMap;for (o in a) {
                        p = a[o], i = this._metaKeyMap[o], i.index > s.index && (i.index -= 1);
                      }if (f(r), n) return t = new u(e, c, null, this._eventUrl), this.emit("storage", t);
                    }
                  }, t.prototype.key = function (e) {
                    return this._keys[e];
                  }, t.prototype.clear = function () {
                    var e;if (a(this._location), this._metaKeyMap = p(), this._keys = [], this.length = 0, this._bytesInUse = 0, d.EventEmitter.listenerCount(this, "storage")) return e = new u(null, null, null, this._eventUrl), this.emit("storage", e);
                  }, t.prototype._getBytesInUse = function () {
                    return this._bytesInUse;
                  }, t.prototype._deleteLocation = function () {
                    return delete r[this._location], f(this._location), this._metaKeyMap = {}, this._keys = [], this.length = 0, this._bytesInUse = 0;
                  }, t;
                }(d.EventEmitter), t = function (e) {
                  function t() {
                    return t.__super__.constructor.apply(this, arguments);
                  }return b(t, e), t.prototype.setItem = function (e, r) {
                    var n;return n = JSON.stringify(r), t.__super__.setItem.call(this, e, n);
                  }, t.prototype.getItem = function (e) {
                    return JSON.parse(t.__super__.getItem.call(this, e));
                  }, t;
                }(i), r.LocalStorage = i, r.JSONStorage = t, r.QUOTA_EXCEEDED_ERR = c;
              }).call(this);
            }, { events: void 0, fs: void 0, path: void 0, "write-file-atomic": 14 }], 10: [function (e, t, r) {
              function n() {
                function e(l) {
                  l && !c && (c = l);for (var f = arguments.length, p = 1; p < f; p++) {
                    void 0 !== arguments[p] && (s[p - 1] = (s[p - 1] || []).concat(arguments[p]));
                  }if (r.length > u) {
                    var d = r.slice(u);a += (r.length - u) * i, u = r.length, o.nextTick(function () {
                      d.forEach(function (r) {
                        t.forEach(function (t) {
                          t(r, e);
                        });
                      });
                    });
                  }0 === --a && n.apply(null, [c].concat(s));
                }var t = Array.prototype.slice.call(arguments),
                    r = t.shift() || [],
                    n = t.pop();if ("function" != typeof n) throw new Error("No callback provided to asyncMap");if (!r) return n(null, []);Array.isArray(r) || (r = [r]);var i = t.length,
                    s = [],
                    c = null,
                    u = r.length,
                    a = u * i;return a ? void r.forEach(function (r) {
                  t.forEach(function (t) {
                    t(r, e);
                  });
                }) : n(null, []);
              }t.exports = n;
            }, {}], 11: [function (e, t, r) {
              function n() {
                var e,
                    t = Array.prototype.slice.call(arguments),
                    r = null;return "object" == _typeof(t[0]) ? (r = t.shift(), e = t.shift(), "string" == typeof e && (e = r[e])) : e = t.shift(), function (n) {
                  e.apply(r, t.concat(n));
                };
              }t.exports = n;
            }, {}], 12: [function (e, t, r) {
              function n(e, t) {
                var r = [];!function i(s, c) {
                  return s >= c ? t(null, r) : (Array.isArray(e[s]) && (e[s] = o.apply(null, e[s].map(function (e) {
                    return e === n.first ? r[0] : e === n.last ? r[r.length - 1] : e;
                  }))), e[s] ? void e[s](function (e, n) {
                    return e ? t(e, r) : (void 0 !== n && (r = r.concat(n)), void i(s + 1, c));
                  }) : i(s + 1, c));
                }(0, e.length);
              }t.exports = n;var o = e("./bind-actor.js");n.first = {}, n.last = {};
            }, { "./bind-actor.js": 11 }], 13: [function (e, t, r) {
              r.asyncMap = e("./async-map"), r.bindActor = e("./bind-actor"), r.chain = e("./chain");
            }, { "./async-map": 10, "./bind-actor": 11, "./chain": 12 }], 14: [function (e, t, r) {
              (function (r) {
                "use strict";
                function n() {
                  for (var e = new c(), t = 0; t < arguments.length; ++t) {
                    e.hash("" + arguments[t]);
                  }return e.result();
                }var i = e("graceful-fs"),
                    s = e("slide").chain,
                    c = e("imurmurhash"),
                    u = 0,
                    a = function a(e) {
                  return e + "." + n(r, o.pid, ++u);
                };t.exports = function (e, t, r, n) {
                  r instanceof Function && (n = r, r = null), r || (r = {});var o = a(e);s([[i, i.writeFile, o, t, r], r.chown && [i, i.chown, o, r.chown.uid, r.chown.gid], [i, i.rename, o, e]], function (e) {
                    e ? i.unlink(o, function () {
                      n(e);
                    }) : n();
                  });
                }, t.exports.sync = function (e, t, r) {
                  r || (r = {});var n = a(e);try {
                    i.writeFileSync(n, t, r), r.chown && i.chownSync(n, r.chown.uid, r.chown.gid), i.renameSync(n, e);
                  } catch (o) {
                    try {
                      i.unlinkSync(n);
                    } catch (s) {}throw o;
                  }
                };
              }).call(this, "/home/vsilva/pt-inovacao/rethink-project/dev-service-framework/node_modules/write-file-atomic/index.js");
            }, { "graceful-fs": 5, imurmurhash: 8, slide: 13 }], 15: [function (e, t, r) {
              "use strict";
              function n(e) {
                return e && e.__esModule ? e : { "default": e };
              }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/core-js/json/stringify"),
                  i = n(o),
                  s = e("./universal-localstorage"),
                  c = n(s),
                  u = { set: function set(e, t, r) {
                  c["default"].setItem(e, (0, i["default"])({ version: t, value: r }));
                }, get: function get(e) {
                  try {
                    return JSON.parse(c["default"].getItem(e)).value;
                  } catch (t) {}
                }, getVersion: function getVersion(e) {
                  try {
                    return JSON.parse(c["default"].getItem(e)).version;
                  } catch (t) {}
                }, "delete": function _delete(e) {
                  c["default"].removeItem(e);
                } };r["default"] = u, t.exports = r["default"];
            }, { "./universal-localstorage": 17, "babel-runtime/core-js/json/stringify": 1 }], 16: [function (e, t, r) {
              "use strict";
              function n(e) {
                return e && e.__esModule ? e : { "default": e };
              }var o = e("babel-runtime/core-js/json/stringify"),
                  i = n(o);"undefined" != typeof window.localStorage && "undefined" != typeof window.sessionStorage || function () {
                var e = function e(_e) {
                  function t(e, t, r) {
                    var n, o;r ? (n = new Date(), n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3), o = "; expires=" + n.toGMTString()) : o = "", document.cookie = e + "=" + t + o + "; path=/";
                  }function r(e) {
                    var t,
                        r,
                        n = e + "=",
                        o = document.cookie.split(";");for (t = 0; t < o.length; t++) {
                      for (r = o[t]; " " == r.charAt(0);) {
                        r = r.substring(1, r.length);
                      }if (0 == r.indexOf(n)) return r.substring(n.length, r.length);
                    }return null;
                  }function n(r) {
                    r = (0, i["default"])(r), "session" == _e ? window.name = r : t("localStorage", r, 365);
                  }function o() {
                    "session" == _e ? window.name = "" : t("localStorage", "", 365);
                  }function s() {
                    var t = "session" == _e ? window.name : r("localStorage");return t ? JSON.parse(t) : {};
                  }var c = s();return { length: 0, clear: function clear() {
                      c = {}, this.length = 0, o();
                    }, getItem: function getItem(e) {
                      return void 0 === c[e] ? null : c[e];
                    }, key: function key(e) {
                      var t = 0;for (var r in c) {
                        if (t == e) return r;t++;
                      }return null;
                    }, removeItem: function removeItem(e) {
                      delete c[e], this.length--, n(c);
                    }, setItem: function setItem(e, t) {
                      c[e] = t + "", this.length++, n(c);
                    } };
                };"undefined" == typeof window.localStorage && (window.localStorage = new e("local")), "undefined" == typeof window.sessionStorage && (window.sessionStorage = new e("session"));
              }();
            }, { "babel-runtime/core-js/json/stringify": 1 }], 17: [function (e, t, r) {
              "use strict";
              Object.defineProperty(r, "__esModule", { value: !0 });var n = void 0;if ("undefined" == typeof window) {
                var o = e("node-localstorage").LocalStorage;n = new o("./uls-scratch");
              } else n = "undefined" == typeof window.localStorage || "undefined" == typeof window.sessionStorage ? e("./rem-localstorage") : window.localStorage;r["default"] = n, t.exports = r["default"];
            }, { "./rem-localstorage": 16, "node-localstorage": 9 }] }, {}, [15])(15);
        });
      }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { _process: 112 }], 114: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = function c() {
        (0, i["default"])(this, c);
      };r["default"] = s, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 11 }], 115: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = function () {
        function e() {
          (0, i["default"])(this, e);
        }return (0, c["default"])(e, [{ key: "and", value: function value(e) {
            return e[0] && e[1];
          } }, { key: "between", value: function value(e) {
            var t = parseInt(e[0][0]),
                r = parseInt(e[0][1]),
                n = e[1];return r < t && (n = n < t ? n += 2400 : n, r += 2400), n > t && n < r;
          } }, { key: "equals", value: function value(e) {
            return "*" == e[0] || e[0] == e[1];
          } }, { key: "in", value: function value(e) {
            return e[0].indexOf(e[1]) > -1;
          } }, { key: "not", value: function value(e) {
            return !e[0];
          } }, { key: "or", value: function value(e) {
            return e[0] || e[1];
          } }]), e;
      }();r["default"] = u, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 116: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = e("./Operators"),
          a = n(u),
          l = e("./context/RuntimeCoreCtx"),
          f = n(l),
          p = function () {
        function e(t) {
          (0, i["default"])(this, e), this.context = t, this.operators = new a["default"]();
        }return (0, c["default"])(e, [{ key: "applyPolicies", value: function value(e, t) {
            var r = this.evaluateSPPolicy(e, t.serviceProviderPolicy);return this.context instanceof f["default"] && (r || "Not Applicable" === r) && (r = this.evaluateUserPolicy(e, t.userPolicy)), r;
          } }, { key: "evaluateSPPolicy", value: function value(e, t) {
            var r = void 0;return r = t ? t.evaluate(this.context, e) : "Not Applicable";
          } }, { key: "evaluateUserPolicy", value: function value(e, t) {
            var r = void 0;if (void 0 !== t) {
              var n = this.context.userPolicies[t];r = n ? n.evaluate(this.context, e) : "Not Applicable";
            } else r = "Not Applicable";return r;
          } }, { key: "context", get: function get() {
            return this._context;
          }, set: function set(e) {
            this._context = e;
          } }, { key: "operators", get: function get() {
            return this._operators;
          }, set: function set(e) {
            this._operators = e;
          } }]), e;
      }();r["default"] = p, t.exports = r["default"];
    }, { "./Operators": 115, "./context/RuntimeCoreCtx": 127, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 117: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = function () {
        function e(t) {
          (0, i["default"])(this, e), this.context = t;
        }return (0, c["default"])(e, [{ key: "enforcePolicies", value: function value(e, t, r) {
            var n = void 0;t.userPolicy && (n = this.context.userPolicies[t.userPolicy], n && n.enforceActions(this.context, e, r)), n = this.context.serviceProviderPolicy, n && n.enforceActions(this.context, e, r);
          } }]), e;
      }();r["default"] = u, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 118: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = e("./combiningAlgorithms/DenyOverrides"),
          a = n(u),
          l = e("./combiningAlgorithms/FirstApplicable"),
          f = n(l),
          p = function () {
        function e(t, r, n, o) {
          (0, i["default"])(this, e), this.actions = n, this.key = t, this.rules = r, this.combiningAlgorithm = o;
        }return (0, c["default"])(e, [{ key: "enforceActions", value: function value(e, t, r) {
            for (var n in this.actions) {
              e[this.actions[n]](t, r);
            }
          } }, { key: "evaluate", value: function value(e, t) {
            var r = [];for (var n in this.rules) {
              r.push(this.rules[n].evaluate(e, t));
            }return this.combiningAlgorithm.evaluate(r);
          } }, { key: "combiningAlgorithm", get: function get() {
            return this._combiningAlgorithm;
          }, set: function set(e) {
            if ("denyOverrides" === e) this._combiningAlgorithm = new a["default"]();else {
              if ("firstApplicable" !== e) throw Error("Unknown algorithm: " + e);this._combiningAlgorithm = new f["default"]();
            }
          } }]), e;
      }();r["default"] = p, t.exports = r["default"];
    }, { "./combiningAlgorithms/DenyOverrides": 121, "./combiningAlgorithms/FirstApplicable": 122, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 119: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = e("./PEP"),
          a = n(u),
          l = e("./PDP"),
          f = n(l),
          p = e("./policies/UserPolicy"),
          d = n(p),
          h = function () {
        function e(t) {
          (0, i["default"])(this, e), this.context = t, t.policyEngine = this, t.loadActivePolicy(), t.loadGroups(), t.loadSPPolicies(), t.loadUserPolicies(), this.pdp = new f["default"](t), this.pep = new a["default"](t);
        }return (0, c["default"])(e, [{ key: "addPolicy", value: function value(e, t, r) {
            if ("SERVICE_PROVIDER" === e) this.context.serviceProviderPolicies[t] = r, this.context.savePolicies(e);else {
              if ("USER" !== e) throw Error("Unknown policy source: " + e);r || (r = new d["default"](t, [], [])), this.context.userPolicies[t] = r, this.context.savePolicies(e);
            }
          } }, { key: "removePolicy", value: function value(e, t) {
            if ("*" === e) this.context.serviceProviderPolicies = {}, this.context.userPolicies = {}, this.context.activeUserPolicy = void 0;else if ("SERVICE_PROVIDER" === e) delete this.context.serviceProviderPolicies[t];else {
              if ("USER" !== e) throw Error("Unknown policy source: " + e);delete this.context.userPolicies[t], t === this.context.activeUserPolicy && (this.context.activeUserPolicy = void 0);
            }this.context.savePolicies("USER"), this.context.savePolicies("SERVICE_PROVIDER"), this.context.saveActivePolicy();
          } }, { key: "removeRule", value: function value(e, t) {
            delete this.context.userPolicies[e][t.scope][t.target][t.condition];
          } }, { key: "authorise", value: function value(e) {
            var t = this;return t.context.authorise(e);
          } }, { key: "getGroupsNames", value: function value() {
            var e = this.context.groups,
                t = [];if (void 0 !== e) for (var r in e) {
              t.push(r);
            }return t;
          } }, { key: "getGroup", value: function value(e) {
            var t = this.context.groups,
                r = [];return void 0 !== t[e] && (r = t[e]), r;
          } }, { key: "createGroup", value: function value(e) {
            this.context.groups[e] = [], this.context.saveGroups();
          } }, { key: "deleteGroup", value: function value(e) {
            delete this.context.groups[e], this.context.saveGroups();
          } }, { key: "addToGroup", value: function value(e, t) {
            var r = this.context.groups;if (void 0 === r[e]) throw Error('Group "' + e + '" does not exist!');r[e].indexOf(t) === -1 && (r[e].push(t), this.context.saveGroups());
          } }, { key: "removeFromGroup", value: function value(e, t) {
            var r = this.context.groups[e];r.splice(r.indexOf(t), 1), this.context.saveGroups();
          } }]), e;
      }();r["default"] = h, t.exports = r["default"];
    }, { "./PDP": 116, "./PEP": 117, "./policies/UserPolicy": 128, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 120: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = e("../utils/utils"),
          a = e("./Operators"),
          l = n(a),
          f = function () {
        function e(t, r, n, o, s) {
          (0, i["default"])(this, e), this.operators = new l["default"](), this.authorise = t, this.condition = r, this.priority = n, this.scope = o, this.target = s;
        }return (0, c["default"])(e, [{ key: "evaluate", value: function value(e, t) {
            var r = void 0;switch (this.scope) {case "global":
                break;case "hyperty":
                if ((0, u.isDataObjectURL)(t.from)) {
                  var n = e.runtimeRegistry.getReporterURLSynchonous((0, u.removePathFromURL)(t.from));void 0 !== n && (r = e.runtimeRegistry.getHypertyName(n));
                } else "hyperty" === t.from.split("://")[0] && (r = e.runtimeRegistry.getHypertyName((0, u.removePathFromURL)(t.from)));if (r === this.target) break;if ((0, u.isDataObjectURL)(t.to)) {
                  var o = e.runtimeRegistry.getReporterURLSynchonous((0, u.removePathFromURL)(t.to));void 0 !== o && (r = e.runtimeRegistry.getHypertyName(o));
                } else "hyperty" === t.to.split("://")[0] && (r = e.runtimeRegistry.getHypertyName((0, u.removePathFromURL)(t.to)));if (r === this.target) break;return "Not Applicable";case "user":
                var i = void 0;if ((0, u.isDataObjectURL)(t.from)) {
                  var s = e.runtimeRegistry.getReporterURLSynchonous((0, u.removePathFromURL)(t.from));i = e.runtimeRegistry.getHypertyOwner(s);
                } else "hyperty" === t.from.split("://")[0] && (i = e.runtimeRegistry.getHypertyOwner((0, u.removePathFromURL)(t.from)));if (void 0 !== i && (i = (0, u.getUserEmailFromURL)(i)), i === this.target) break;if ((0, u.isDataObjectURL)(t.to)) {
                  var c = e.runtimeRegistry.getReporterURLSynchonous((0, u.removePathFromURL)(t.to));i = e.runtimeRegistry.getHypertyOwner(c), void 0 !== i && (i = (0, u.getUserEmailFromURL)(i));
                } else "hyperty" === t.to.split("://")[0] && (i = e.runtimeRegistry.getHypertyOwner((0, u.removePathFromURL)(t.to)), void 0 !== i && (i = (0, u.getUserEmailFromURL)(i)));if (i === this.target) break;return "Not Applicable";}return this.condition.isApplicable(e, t, this.scope, this.target) ? this.authorise : "Not Applicable";
          } }]), e;
      }();r["default"] = f, t.exports = r["default"];
    }, { "../utils/utils": 129, "./Operators": 115, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 121: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/core-js/object/get-prototype-of"),
          i = n(o),
          s = e("babel-runtime/helpers/classCallCheck"),
          c = n(s),
          u = e("babel-runtime/helpers/createClass"),
          a = n(u),
          l = e("babel-runtime/helpers/possibleConstructorReturn"),
          f = n(l),
          p = e("babel-runtime/helpers/inherits"),
          d = n(p),
          h = e("../CombiningAlgorithm"),
          y = n(h),
          _ = function (e) {
        function t() {
          return (0, c["default"])(this, t), (0, f["default"])(this, (0, i["default"])(t).apply(this, arguments));
        }return (0, d["default"])(t, e), (0, a["default"])(t, [{ key: "evaluate", value: function value(e) {
            return e.indexOf(!1) === -1 && (e.indexOf(!0) !== -1 || "Not Applicable");
          } }]), t;
      }(y["default"]);r["default"] = _, t.exports = r["default"];
    }, { "../CombiningAlgorithm": 114, "babel-runtime/core-js/object/get-prototype-of": 5, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12, "babel-runtime/helpers/inherits": 14, "babel-runtime/helpers/possibleConstructorReturn": 15 }], 122: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/core-js/object/get-prototype-of"),
          i = n(o),
          s = e("babel-runtime/helpers/classCallCheck"),
          c = n(s),
          u = e("babel-runtime/helpers/createClass"),
          a = n(u),
          l = e("babel-runtime/helpers/possibleConstructorReturn"),
          f = n(l),
          p = e("babel-runtime/helpers/inherits"),
          d = n(p),
          h = e("../CombiningAlgorithm"),
          y = n(h),
          _ = function (e) {
        function t() {
          return (0, c["default"])(this, t), (0, f["default"])(this, (0, i["default"])(t).apply(this, arguments));
        }return (0, d["default"])(t, e), (0, a["default"])(t, [{ key: "evaluate", value: function value(e) {
            for (var t in e) {
              if ("Not Applicable" !== e[t]) return e[t];
            }return "Not Applicable";
          } }]), t;
      }(y["default"]);r["default"] = _, t.exports = r["default"];
    }, { "../CombiningAlgorithm": 114, "babel-runtime/core-js/object/get-prototype-of": 5, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12, "babel-runtime/helpers/inherits": 14, "babel-runtime/helpers/possibleConstructorReturn": 15 }], 123: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = e("./Condition"),
          a = n(u),
          l = e("../Operators"),
          f = n(l),
          p = e("./SubscriptionCondition"),
          d = n(p),
          h = function () {
        function e(t) {
          (0, i["default"])(this, e), this.operators = new f["default"](), this.condition = t;
        }return (0, c["default"])(e, [{ key: "isApplicable", value: function value(e, t, r, n, o, i, s) {
            for (o || (o = this.condition[0], i = this.condition[1], s = this.condition[2]); !(i instanceof a["default"]) & !(i instanceof d["default"]) & "boolean" != typeof i;) {
              i = this.isApplicable(e, t, r, n, i[0], i[1], i[2]);
            }if (void 0 !== s) for (; !(s instanceof a["default"]) & !(s instanceof d["default"]) & "boolean" != typeof s;) {
              s = this.isApplicable(e, t, r, n, s[0], s[1], s[2]);
            }var c = "boolean" == typeof i ? i : i.isApplicable(e, t, r, n),
                u = void 0;return void 0 !== s && (u = "boolean" == typeof s ? s : s.isApplicable(e, t, r, n)), this.operators[o]([c, u]);
          } }]), e;
      }();r["default"] = h, t.exports = r["default"];
    }, { "../Operators": 115, "./Condition": 124, "./SubscriptionCondition": 125, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 124: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = e("../Operators"),
          a = n(u),
          l = function () {
        function e(t, r, n) {
          (0, i["default"])(this, e), this.attribute = t, this.operator = r, this.params = n, this.operators = new a["default"]();
        }return (0, c["default"])(e, [{ key: "isApplicable", value: function value(e, t) {
            e[this.attribute] = { message: t };var r = e[this.attribute],
                n = void 0;if ("in" === this.operator) if ("preauthorised" === this.params) {
              var o = t.to.split("/");o.pop(), o = o[0] + "//" + o[2], n = e.runtimeRegistry.getPreAuthSubscribers(o);
            } else n = e.policyEngine.getGroup(this.params);return n ? this.operators[this.operator]([n, r]) : this.operators[this.operator]([this.params, r]);
          } }]), e;
      }();r["default"] = l, t.exports = r["default"];
    }, { "../Operators": 115, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 125: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/core-js/object/get-prototype-of"),
          i = n(o),
          s = e("babel-runtime/helpers/classCallCheck"),
          c = n(s),
          u = e("babel-runtime/helpers/createClass"),
          a = n(u),
          l = e("babel-runtime/helpers/possibleConstructorReturn"),
          f = n(l),
          p = e("babel-runtime/helpers/get"),
          d = n(p),
          h = e("babel-runtime/helpers/inherits"),
          y = n(h),
          _ = e("./Condition"),
          b = n(_),
          v = function (e) {
        function t(e, r, n) {
          return (0, c["default"])(this, t), (0, f["default"])(this, (0, i["default"])(t).call(this, e, r, n));
        }return (0, y["default"])(t, e), (0, a["default"])(t, [{ key: "isApplicable", value: function value(e, r, n, o) {
            var s = "subscribe" === r.type,
                c = e.isFromRemoteSM(r.from);return !!(s & c) && (0, d["default"])((0, i["default"])(t.prototype), "isApplicable", this).call(this, e, r);
          } }]), t;
      }(b["default"]);r["default"] = v, t.exports = r["default"];
    }, { "./Condition": 124, "babel-runtime/core-js/object/get-prototype-of": 5, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12, "babel-runtime/helpers/get": 13, "babel-runtime/helpers/inherits": 14, "babel-runtime/helpers/possibleConstructorReturn": 15 }], 126: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/helpers/classCallCheck"),
          i = n(o),
          s = e("babel-runtime/helpers/createClass"),
          c = n(s),
          u = e("../../utils/utils"),
          a = function () {
        function e() {
          (0, i["default"])(this, e), this.defaultBehavior = !0, this.groups = {};
        }return (0, c["default"])(e, [{ key: "defaultBehavior", get: function get() {
            return this._defaultBehavior;
          }, set: function set(e) {
            this._defaultBehavior = e;
          } }, { key: "date", set: function set(e) {
            var t = new Date(),
                r = String(t.getDate());1 === r.length && (r = "0" + r);var n = String(t.getMonth() + 1);1 === n.length && (n = "0" + n), this._date = r + "/" + n + "/" + t.getFullYear();
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
      }();r["default"] = a, t.exports = r["default"];
    }, { "../../utils/utils": 129, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12 }], 127: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/core-js/promise"),
          i = n(o),
          s = e("babel-runtime/core-js/object/get-prototype-of"),
          c = n(s),
          u = e("babel-runtime/helpers/classCallCheck"),
          a = n(u),
          l = e("babel-runtime/helpers/createClass"),
          f = n(l),
          p = e("babel-runtime/helpers/possibleConstructorReturn"),
          d = n(p),
          h = e("babel-runtime/helpers/inherits"),
          y = n(h),
          _ = e("./CommonCtx"),
          b = n(_),
          v = e("../conditions/Condition"),
          m = n(v),
          g = e("../../utils/utils"),
          j = e("service-framework/dist/PersistenceManager"),
          w = n(j),
          k = e("../Rule"),
          x = n(k),
          S = e("../policies/UserPolicy"),
          P = n(S),
          O = e("../conditions/SubscriptionCondition"),
          C = n(O),
          E = function (e) {
        function t(e, r) {
          (0, a["default"])(this, t);var n = (0, d["default"])(this, (0, c["default"])(t).call(this));return n.idModule = e, n.runtimeRegistry = r, n.activeUserPolicy = void 0, n.serviceProviderPolicies = {}, n.userPolicies = {}, n;
        }return (0, y["default"])(t, e), (0, f["default"])(t, [{ key: "authorise", value: function value(e) {
            var t = this;return new i["default"](function (r, n) {
              console.log("--- Policy Engine ---"), console.log(e), e.body = e.body || {};var o = void 0,
                  i = t._isToVerify(e),
                  s = t._isIncomingMessage(e),
                  c = t._isToCypherModule(e);if (i) {
                if (s) {
                  if (c) t.decrypt(e).then(function (e) {
                    var i = { serviceProviderPolicy: t.getServiceProviderPolicy(e, s), userPolicy: t.activeUserPolicy };if (o = t.policyEngine.pdp.applyPolicies(e, i), t.policyEngine.pep.enforcePolicies(e, i, o), "Not Applicable" === o && (o = t.defaultBehavior, e.body.auth = !1), o) {
                      var c = "subscribe" === e.type,
                          u = t.isFromRemoteSM(e.from);c & u && (t.registerSubscriber(e), t.doMutualAuthentication(e)), e.body.auth = void 0 === e.body.auth || e.body.auth, r(e);
                    } else n("Message blocked");
                  }, function (e) {
                    n(e);
                  });else {
                    var u = { serviceProviderPolicy: t.getServiceProviderPolicy(e, s), userPolicy: t.activeUserPolicy };if (o = t.policyEngine.pdp.applyPolicies(e, u), t.policyEngine.pep.enforcePolicies(e, u, o), "Not Applicable" === o && (o = t.defaultBehavior, e.body.auth = !1), o) {
                      var a = "subscribe" === e.type,
                          l = t.isFromRemoteSM(e.from);a & l && (t.registerSubscriber(e), t.doMutualAuthentication(e)), e.body.auth = void 0 === e.body.auth || e.body.auth, r(e);
                    } else n("Message blocked");
                  }
                } else {
                  var f = t._isToSetID(e);if (f) t._getIdentity(e).then(function (i) {
                    e.body.identity = i;var u = { serviceProviderPolicy: t.getServiceProviderPolicy(e, s), userPolicy: t.activeUserPolicy };o = t.policyEngine.pdp.applyPolicies(e, u), t.policyEngine.pep.enforcePolicies(e, u, o), "Not Applicable" === o && (o = t.defaultBehavior, e.body.auth = !1), o ? (e.body.auth = void 0 === e.body.auth || e.body.auth, c ? t.encrypt(e).then(function (e) {
                      r(e);
                    }, function (e) {
                      n(e);
                    }) : r(e)) : n("Message blocked");
                  }, function (e) {
                    n(e);
                  });else {
                    var p = { serviceProviderPolicy: t.getServiceProviderPolicy(e, s), userPolicy: t.activeUserPolicy };o = t.policyEngine.pdp.applyPolicies(e, p), t.policyEngine.pep.enforcePolicies(e, p, o), "Not Applicable" === o && (o = t.defaultBehavior, e.body.auth = !1), o ? (e.body.auth = void 0 === e.body.auth || e.body.auth, r(e)) : n("Message blocked");
                  }
                }
              } else o = t.defaultBehavior, e.body.auth = !1, o ? r(e) : n("Message blocked");
            });
          } }, { key: "decrypt", value: function value(e) {
            var t = this;return new i["default"](function (r, n) {
              t.idModule.decryptMessage(e).then(function (e) {
                r(e);
              }, function (e) {
                n(e);
              });
            });
          } }, { key: "doMutualAuthentication", value: function value(e) {
            var t = e.to.split("/"),
                r = t.indexOf("subscription"),
                n = r !== -1,
                o = this.isFromRemoteSM(e.from);if (n & o) {
              t.pop();var i = t[0] + "//" + t[2] + "/" + t[3];t.length > 4 && (i = t[0] + "//" + t[2] + "/" + t[3] + "/" + t[4]), this.idModule.doMutualAuthentication(i, e.body.subscriber);
            }
          } }, { key: "encrypt", value: function value(e) {
            var t = this;return new i["default"](function (r, n) {
              t.idModule.encryptMessage(e).then(function (e) {
                r(e);
              }, function (e) {
                n(e);
              });
            });
          } }, { key: "getMyEmails", value: function value() {
            var e = this.idModule.getIdentities(),
                t = [];for (var r in e) {
              t.push((0, g.getUserEmailFromURL)(e[r].identity));
            }return t;
          } }, { key: "getMyHyperties", value: function value() {
            var e = this.runtimeRegistry.hypertiesList,
                t = [];for (var r in e) {
              var n = e[r].objectName;t.indexOf(n) === -1 && t.push(n);
            }return t;
          } }, { key: "getServiceProviderPolicy", value: function value(e, t) {
            var r = void 0;if (t) {
              var n = this.runtimeRegistry.getHypertyName(e.to);r = this.serviceProviderPolicies[n];
            } else {
              var o = this.runtimeRegistry.getHypertyName(e.from);r = this.serviceProviderPolicies[o];
            }return r;
          } }, { key: "isFromRemoteSM", value: function value(e) {
            var t = e.split("://");return "runtime" === t[0] && e !== this.runtimeRegistry.runtimeURL + "/sm";
          } }, { key: "_isToSetID", value: function value(e) {
            var t = ["domain-idp", "runtime", "domain"],
                r = e.from.split("://"),
                n = r[0];return t.indexOf(n) === -1;
          } }, { key: "_isIncomingMessage", value: function value(e) {
            return !!e.body.identity;
          } }, { key: "getURL", value: function value(e) {
            var t = e.split("/");return t[0] + "//" + t[2] + "/" + t[3];
          } }, { key: "_getIdentity", value: function value(e) {
            return "update" === e.type ? this.idModule.getIdentityOfHyperty(e.body.source) : "response" === e.type && void 0 !== e.body.source ? this.idModule.getIdentityOfHyperty(e.body.source) : "hyperty" === (0, g.divideURL)(e.from).type ? this.idModule.getIdentityOfHyperty(e.from) : this.idModule.getIdentityOfHyperty(this.getURL(e.from));
          } }, { key: "_isToVerify", value: function value(e) {
            var t = ["domain-idp", "hyperty-runtime", "runtime", "domain"],
                r = e.from.split("://"),
                n = r[0],
                o = e.to.split("://"),
                i = o[0];return n !== e.from && i !== e.to && (t.indexOf(n) === -1 || t.indexOf(i) === -1);
          } }, { key: "_isToCypherModule", value: function value(e) {
            var t = "create" === e.type,
                r = "hyperty" === (0, g.divideURL)(e.from).type,
                n = "hyperty" === (0, g.divideURL)(e.to).type,
                o = (0, g.isDataObjectURL)(e.to),
                i = "handshake" === e.type;return t && r && n || t && r && o || i;
          } }, { key: "loadActivePolicy", value: function value() {
            this.activeUserPolicy = w["default"].get("rethink:activePolicy");
          } }, { key: "loadGroups", value: function value() {
            var e = w["default"].get("rethink:groups");void 0 != e && (this.groups = e);
          } }, { key: "loadSPPolicies", value: function value() {
            var e = w["default"].get("rethink:spPolicies");void 0 !== e && (this.serviceProviderPolicies = e);
          } }, { key: "loadUserPolicies", value: function value() {
            var e = w["default"].get("rethink:userPolicies");if (void 0 !== e) for (var t in e) {
              var r = [],
                  n = e[t].rules;for (var o in n) {
                var i = void 0;i = "subscription" === n[o].condition.attribute ? new C["default"](n[o].condition.attribute, n[o].condition.operator, n[o].condition.params) : new m["default"](n[o].condition.attribute, n[o].condition.operator, n[o].condition.params), r.push(new x["default"](n[o].authorise, i, n[o].priority, n[o].scope, n[o].target));
              }this.userPolicies[t] = new P["default"](e[t].key, r, e[t].actions, e[t].combiningAlgorithm);
            }
          } }, { key: "registerSubscriber", value: function value(e) {
            var t = e.to.split("/"),
                r = t.indexOf("subscription"),
                n = r !== -1,
                o = this.isFromRemoteSM(e.from);if (n & o) {
              t.pop();var i = t[0] + "//" + t[2] + "/" + t[3];t.length > 4 && (i = t[0] + "//" + t[2] + "/" + t[3] + "/" + t[4]), this.runtimeRegistry.registerSubscriber(i, e.body.subscriber);
            }
          } }, { key: "_getLastComponentOfURL", value: function value(e) {
            var t = e.split("/");return t[t.length - 1];
          } }, { key: "saveActivePolicy", value: function value() {
            w["default"].set("rethink:activePolicy", 0, this.activeUserPolicy);
          } }, { key: "saveGroups", value: function value() {
            w["default"].set("rethink:groups", 0, this.groups);
          } }, { key: "savePolicies", value: function value(e) {
            switch (e) {case "USER":
                w["default"].set("rethink:userPolicies", 0, this.userPolicies);break;case "SERVICE_PROVIDER":
                w["default"].set("rethink:spPolicies", 0, this.serviceProviderPolicies);}
          } }, { key: "dataObjectScheme", get: function get() {
            return this._dataObjectScheme;
          }, set: function set(e) {
            var t = e.message.from;(0, g.isDataObjectURL)(t) ? this._dataObjectScheme = (0, g.divideURL)(t).type : this._dataObjectScheme = void 0;
          } }, { key: "subscription", get: function get() {
            return this._subscription;
          }, set: function set(e) {
            this._subscription = e.message.body.subscriber;
          } }]), t;
      }(b["default"]);r["default"] = E, t.exports = r["default"];
    }, { "../../utils/utils": 129, "../Rule": 120, "../conditions/Condition": 124, "../conditions/SubscriptionCondition": 125, "../policies/UserPolicy": 128, "./CommonCtx": 126, "babel-runtime/core-js/object/get-prototype-of": 5, "babel-runtime/core-js/promise": 8, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12, "babel-runtime/helpers/inherits": 14, "babel-runtime/helpers/possibleConstructorReturn": 15, "service-framework/dist/PersistenceManager": 113 }], 128: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var o = e("babel-runtime/core-js/object/get-prototype-of"),
          i = n(o),
          s = e("babel-runtime/helpers/classCallCheck"),
          c = n(s),
          u = e("babel-runtime/helpers/createClass"),
          a = n(u),
          l = e("babel-runtime/helpers/possibleConstructorReturn"),
          f = n(l),
          p = e("babel-runtime/helpers/inherits"),
          d = n(p),
          h = e("../conditions/AdvancedCondition"),
          y = n(h),
          _ = e("../conditions/Condition"),
          b = n(_),
          v = e("../Policy"),
          m = n(v),
          g = e("../Rule"),
          j = n(g),
          w = e("../conditions/SubscriptionCondition"),
          k = n(w),
          x = function (e) {
        function t(e, r, n, o) {
          return (0, c["default"])(this, t), o || (o = "denyOverrides"), (0, f["default"])(this, (0, i["default"])(t).call(this, e, r, n, o));
        }return (0, d["default"])(t, e), (0, a["default"])(t, [{ key: "createRule", value: function value(e, t, r, n, o, i) {
            if (!(r instanceof b["default"])) switch (e) {case "advanced":
                r = new y["default"](r);case "simple":
                r = new b["default"](r[0], r[1], r[2]);break;case "subscription":
                r = new k["default"](r[0], r[1], r[2]);}void 0 === i && (i = this.getLastPriority() + 1);var s = new j["default"](t, r, i, n, o);this.rules.push(s);
          } }, { key: "deleteRule", value: function value(e) {
            var t = this.rules.indexOf(e);this.rules.splice(t, 1);
          } }, { key: "getLastPriority", value: function value() {
            var e = [];if (0 !== this.rules.length) {
              for (var t in this.rules) {
                e.push(this.rules[t].priority);
              }return Math.max.apply(Math, e);
            }return -1;
          } }, { key: "getRuleByPriority", value: function value(e) {
            for (var t in this.rules) {
              if (this.rules[t].priority == e) return this.rules[t];
            }throw Error("Rule with priority " + e + " does not exist!");
          } }, { key: "hasSubscriptionRule", value: function value() {
            for (var e in this.rules) {
              if ("global" === this.rules[e].scope) {
                if (this.rules[e].condition instanceof k["default"]) return !0;if (this.rules[e].condition instanceof y["default"]) for (var t in this.rules[e].condition.condition) {
                  if (this.rules[e].condition.condition[t] instanceof k["default"]) return !0;
                }
              }
            }return !1;
          } }, { key: "sortRules", value: function value() {
            return this.rules.sort(function (e, t) {
              var r = e.priority,
                  n = t.priority;return r < n ? -1 : r > n ? 1 : 0;
            });
          } }]), t;
      }(m["default"]);r["default"] = x, t.exports = r["default"];
    }, { "../Policy": 118, "../Rule": 120, "../conditions/AdvancedCondition": 123, "../conditions/Condition": 124, "../conditions/SubscriptionCondition": 125, "babel-runtime/core-js/object/get-prototype-of": 5, "babel-runtime/helpers/classCallCheck": 11, "babel-runtime/helpers/createClass": 12, "babel-runtime/helpers/inherits": 14, "babel-runtime/helpers/possibleConstructorReturn": 15 }], 129: [function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }function o(e) {
        if (!e) throw Error("URL is needed to split");var t = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,
            r = "$1,$2,$3",
            n = e.replace(t, r).split(",");n[0] === e && (n[0] = "https", n[1] = e);var o = { type: n[0], domain: n[1], identity: n[2] };return o;
      }function i(e) {
        var t = e.indexOf("@"),
            r = { username: e.substring(0, t), domain: e.substring(t + 1, e.length) };return r;
      }function s(e) {
        return !((0, _["default"])(e).length > 0);
      }function c(e) {
        if (e) return JSON.parse((0, h["default"])(e));
      }function u(e) {
        var t = e.split("/");return t[0] + "//" + t[2] + "/" + t[3];
      }function a(e) {
        var t = e.indexOf("@");return "user://" + e.substring(t + 1, e.length) + "/" + e.substring(0, t);
      }function l(e) {
        var t = o(e);return t.identity.replace("/", "") + "@" + t.domain;
      }function f(e) {
        if ("user://" === e.substring(0, 7)) {
          var t = o(e);if (t.domain && t.identity) return e;throw "userURL with wrong format";
        }return a(e);
      }function p(e) {
        var t = ["domain-idp", "runtime", "domain", "hyperty"],
            r = e.split("://"),
            n = r[0];return t.indexOf(n) === -1;
      }Object.defineProperty(r, "__esModule", { value: !0 });var d = e("babel-runtime/core-js/json/stringify"),
          h = n(d),
          y = e("babel-runtime/core-js/object/keys"),
          _ = n(y);r.divideURL = o, r.divideEmail = i, r.emptyObject = s, r.deepClone = c, r.removePathFromURL = u, r.getUserURLFromEmail = a, r.getUserEmailFromURL = l, r.convertToUserURL = f, r.isDataObjectURL = p;
    }, { "babel-runtime/core-js/json/stringify": 1, "babel-runtime/core-js/object/keys": 6 }] }, {}, [119])(119);
});
//# sourceMappingURL=PolicyEngine.js.map