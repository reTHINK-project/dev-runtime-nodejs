'use strict';

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol ? 'symbol' : typeof obj; };

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

// Distribution file for sandbox.js
// version: 0.5.1
// Last build: Mon Jul 25 2016 09:11:14 GMT+0100 (WEST)

!function(e) {
  if ('object' == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module) module.exports = e();else if ('function' == typeof define && define.amd) define([], e);else {
    var t;t = 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this, t.sandbox = e();
  }
}(function() {
  return function e(t, r, o) {
    function n(s, c) {
      if (!r[s]) {
        if (!t[s]) {
          var u = 'function' == typeof require && require;if (!c && u) return u(s, !0);if (i) return i(s, !0);var a = new Error('Cannot find module \'' + s + '\'');throw a.code = 'MODULE_NOT_FOUND', a;
        }var f = r[s] = { exports: {} };t[s][0].call(f.exports, function(e) {
          var r = t[s][1][e];return n(r ? r : e);
        }, f, f.exports, e, t, r, o);
      }return r[s].exports;
    }for (var i = 'function' == typeof require && require, s = 0; s < o.length; s++) {
      n(o[s]);
    }return n;
  }({ 1: [function(e, t, r) {
      t.exports = { default: e('core-js/library/fn/object/create'), __esModule: !0 };
    }, { 'core-js/library/fn/object/create': 13 }], 2: [function(e, t, r) {
      t.exports = { default: e('core-js/library/fn/object/define-property'), __esModule: !0 };
    }, { 'core-js/library/fn/object/define-property': 14 }], 3: [function(e, t, r) {
      t.exports = { default: e('core-js/library/fn/object/get-prototype-of'), __esModule: !0 };
    }, { 'core-js/library/fn/object/get-prototype-of': 15 }], 4: [function(e, t, r) {
      t.exports = { default: e('core-js/library/fn/object/set-prototype-of'), __esModule: !0 };
    }, { 'core-js/library/fn/object/set-prototype-of': 16 }], 5: [function(e, t, r) {
      t.exports = { default: e('core-js/library/fn/promise'), __esModule: !0 };
    }, { 'core-js/library/fn/promise': 17 }], 6: [function(e, t, r) {
      t.exports = { default: e('core-js/library/fn/symbol'), __esModule: !0 };
    }, { 'core-js/library/fn/symbol': 18 }], 7: [function(e, t, r) {
      t.exports = { default: e('core-js/library/fn/symbol/iterator'), __esModule: !0 };
    }, { 'core-js/library/fn/symbol/iterator': 19 }], 8: [function(e, t, r) {
      'use strict';
      r.__esModule = !0, r['default'] = function(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      };
    }, {}], 9: [function(e, t, r) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }r.__esModule = !0;var n = e('../core-js/object/define-property'),
          i = o(n);r['default'] = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), (0, i['default'])(e, o.key, o);
          }
        }return function(t, r, o) {
          return r && e(t.prototype, r), o && e(t, o), t;
        };
      }();
    }, { '../core-js/object/define-property': 2 }], 10: [function(e, t, r) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }r.__esModule = !0;var n = e('../core-js/object/set-prototype-of'),
          i = o(n),
          s = e('../core-js/object/create'),
          c = o(s),
          u = e('../helpers/typeof'),
          a = o(u);r['default'] = function(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + ('undefined' == typeof t ? 'undefined' : (0, a['default'])(t)));e.prototype = (0, c['default'])(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (i['default'] ? (0, i['default'])(e, t) : e.__proto__ = t);
      };
    }, { '../core-js/object/create': 1, '../core-js/object/set-prototype-of': 4, '../helpers/typeof': 12 }], 11: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }r.__esModule = !0;var n = e("../helpers/typeof"),
          i = o(n);r["default"] = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, i["default"])(t)) && "function" != typeof t ? e : t;
      };
    }, { "../helpers/typeof": 12 }], 12: [function (e, t, r) {
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
    }, { "../core-js/symbol": 6, "../core-js/symbol/iterator": 7 }], 13: [function (e, t, r) {
      e("../../modules/es6.object.create");var o = e("../../modules/_core").Object;t.exports = function (e, t) {
        return o.create(e, t);
      };
    }, { "../../modules/_core": 27, "../../modules/es6.object.create": 92 }], 14: [function (e, t, r) {
      e("../../modules/es6.object.define-property");var o = e("../../modules/_core").Object;t.exports = function (e, t, r) {
        return o.defineProperty(e, t, r);
      };
    }, { "../../modules/_core": 27, "../../modules/es6.object.define-property": 93 }], 15: [function (e, t, r) {
      e("../../modules/es6.object.get-prototype-of"), t.exports = e("../../modules/_core").Object.getPrototypeOf;
    }, { "../../modules/_core": 27, "../../modules/es6.object.get-prototype-of": 94 }], 16: [function (e, t, r) {
      e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/_core").Object.setPrototypeOf;
    }, { "../../modules/_core": 27, "../../modules/es6.object.set-prototype-of": 95 }], 17: [function (e, t, r) {
      e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.promise"), t.exports = e("../modules/_core").Promise;
    }, { "../modules/_core": 27, "../modules/es6.object.to-string": 96, "../modules/es6.promise": 97, "../modules/es6.string.iterator": 98, "../modules/web.dom.iterable": 102 }], 18: [function (e, t, r) {
      e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), e("../../modules/es7.symbol.async-iterator"), e("../../modules/es7.symbol.observable"), t.exports = e("../../modules/_core").Symbol;
    }, { "../../modules/_core": 27, "../../modules/es6.object.to-string": 96, "../../modules/es6.symbol": 99, "../../modules/es7.symbol.async-iterator": 100, "../../modules/es7.symbol.observable": 101 }], 19: [function (e, t, r) {
      e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/_wks-ext").f("iterator");
    }, { "../../modules/_wks-ext": 88, "../../modules/es6.string.iterator": 98, "../../modules/web.dom.iterable": 102 }], 20: [function (e, t, r) {
      t.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
      };
    }, {}], 21: [function (e, t, r) {
      t.exports = function () {};
    }, {}], 22: [function (e, t, r) {
      t.exports = function (e, t, r, o) {
        if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(r + ": incorrect invocation!");return e;
      };
    }, {}], 23: [function (e, t, r) {
      var o = e("./_is-object");t.exports = function (e) {
        if (!o(e)) throw TypeError(e + " is not an object!");return e;
      };
    }, { "./_is-object": 46 }], 24: [function (e, t, r) {
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
    }, { "./_to-index": 80, "./_to-iobject": 82, "./_to-length": 83 }], 25: [function (e, t, r) {
      var o = e("./_cof"),
          n = e("./_wks")("toStringTag"),
          i = "Arguments" == o(function () {
        return arguments;
      }()),
          s = function s(e, t) {
        try {
          return e[t];
        } catch (r) {}
      };t.exports = function (e) {
        var t, r, c;return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = s(t = Object(e), n)) ? r : i ? o(t) : "Object" == (c = o(t)) && "function" == typeof t.callee ? "Arguments" : c;
      };
    }, { "./_cof": 26, "./_wks": 89 }], 26: [function (e, t, r) {
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
    }, { "./_a-function": 20 }], 29: [function (e, t, r) {
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
    }, { "./_global": 37, "./_is-object": 46 }], 32: [function (e, t, r) {
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
    }, { "./_object-gops": 63, "./_object-keys": 66, "./_object-pie": 67 }], 34: [function (e, t, r) {
      var o = e("./_global"),
          n = e("./_core"),
          i = e("./_ctx"),
          s = e("./_hide"),
          c = "prototype",
          u = function u(e, t, r) {
        var a,
            f,
            l,
            _ = e & u.F,
            p = e & u.G,
            d = e & u.S,
            b = e & u.P,
            y = e & u.B,
            h = e & u.W,
            v = p ? n : n[t] || (n[t] = {}),
            m = v[c],
            j = p ? o : d ? o[t] : (o[t] || {})[c];p && (r = t);for (a in r) {
          f = !_ && j && void 0 !== j[a], f && a in v || (l = f ? j[a] : r[a], v[a] = p && "function" != typeof j[a] ? r[a] : y && f ? i(l, o) : h && j[a] == l ? function (e) {
            var t = function t(_t, r, o) {
              if (this instanceof e) {
                switch (arguments.length) {case 0:
                    return new e();case 1:
                    return new e(_t);case 2:
                    return new e(_t, r);}return new e(_t, r, o);
              }return e.apply(this, arguments);
            };return t[c] = e[c], t;
          }(l) : b && "function" == typeof l ? i(Function.call, l) : l, b && ((v.virtual || (v.virtual = {}))[a] = l, e & u.R && m && !m[a] && s(m, a, l)));
        }
      };u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
    }, { "./_core": 27, "./_ctx": 28, "./_global": 37, "./_hide": 39 }], 35: [function (e, t, r) {
      t.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    }, {}], 36: [function (e, t, r) {
      var o = e("./_ctx"),
          n = e("./_iter-call"),
          i = e("./_is-array-iter"),
          s = e("./_an-object"),
          c = e("./_to-length"),
          u = e("./core.get-iterator-method"),
          a = {},
          f = {},
          r = t.exports = function (e, t, r, l, _) {
        var p,
            d,
            b,
            y,
            h = _ ? function () {
          return e;
        } : u(e),
            v = o(r, l, t ? 2 : 1),
            m = 0;if ("function" != typeof h) throw TypeError(e + " is not iterable!");if (i(h)) {
          for (p = c(e.length); p > m; m++) {
            if (y = t ? v(s(d = e[m])[0], d[1]) : v(e[m]), y === a || y === f) return y;
          }
        } else for (b = h.call(e); !(d = b.next()).done;) {
          if (y = n(b, v, d.value, t), y === a || y === f) return y;
        }
      };r.BREAK = a, r.RETURN = f;
    }, { "./_an-object": 23, "./_ctx": 28, "./_is-array-iter": 44, "./_iter-call": 47, "./_to-length": 83, "./core.get-iterator-method": 90 }], 37: [function (e, t, r) {
      var o = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = o);
    }, {}], 38: [function (e, t, r) {
      var o = {}.hasOwnProperty;t.exports = function (e, t) {
        return o.call(e, t);
      };
    }, {}], 39: [function (e, t, r) {
      var o = e("./_object-dp"),
          n = e("./_property-desc");t.exports = e("./_descriptors") ? function (e, t, r) {
        return o.f(e, t, n(1, r));
      } : function (e, t, r) {
        return e[t] = r, e;
      };
    }, { "./_descriptors": 30, "./_object-dp": 58, "./_property-desc": 69 }], 40: [function (e, t, r) {
      t.exports = e("./_global").document && document.documentElement;
    }, { "./_global": 37 }], 41: [function (e, t, r) {
      t.exports = !e("./_descriptors") && !e("./_fails")(function () {
        return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, { "./_descriptors": 30, "./_dom-create": 31, "./_fails": 35 }], 42: [function (e, t, r) {
      t.exports = function (e, t, r) {
        var o = void 0 === r;switch (t.length) {case 0:
            return o ? e() : e.call(r);case 1:
            return o ? e(t[0]) : e.call(r, t[0]);case 2:
            return o ? e(t[0], t[1]) : e.call(r, t[0], t[1]);case 3:
            return o ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);case 4:
            return o ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);}return e.apply(r, t);
      };
    }, {}], 43: [function (e, t, r) {
      var o = e("./_cof");t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == o(e) ? e.split("") : Object(e);
      };
    }, { "./_cof": 26 }], 44: [function (e, t, r) {
      var o = e("./_iterators"),
          n = e("./_wks")("iterator"),
          i = Array.prototype;t.exports = function (e) {
        return void 0 !== e && (o.Array === e || i[n] === e);
      };
    }, { "./_iterators": 52, "./_wks": 89 }], 45: [function (e, t, r) {
      var o = e("./_cof");t.exports = Array.isArray || function (e) {
        return "Array" == o(e);
      };
    }, { "./_cof": 26 }], 46: [function (e, t, r) {
      t.exports = function (e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e;
      };
    }, {}], 47: [function (e, t, r) {
      var o = e("./_an-object");t.exports = function (e, t, r, n) {
        try {
          return n ? t(o(r)[0], r[1]) : t(r);
        } catch (i) {
          var s = e["return"];throw void 0 !== s && o(s.call(e)), i;
        }
      };
    }, { "./_an-object": 23 }], 48: [function (e, t, r) {
      "use strict";
      var o = e("./_object-create"),
          n = e("./_property-desc"),
          i = e("./_set-to-string-tag"),
          s = {};e("./_hide")(s, e("./_wks")("iterator"), function () {
        return this;
      }), t.exports = function (e, t, r) {
        e.prototype = o(s, { next: n(1, r) }), i(e, t + " Iterator");
      };
    }, { "./_hide": 39, "./_object-create": 57, "./_property-desc": 69, "./_set-to-string-tag": 74, "./_wks": 89 }], 49: [function (e, t, r) {
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
          _ = e("./_wks")("iterator"),
          p = !([].keys && "next" in [].keys()),
          d = "@@iterator",
          b = "keys",
          y = "values",
          h = function h() {
        return this;
      };t.exports = function (e, t, r, v, m, j, g) {
        a(r, t, v);var x,
            k,
            w,
            O = function O(e) {
          if (!p && e in P) return P[e];switch (e) {case b:
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
            M = m == y,
            C = !1,
            P = e.prototype,
            E = P[_] || P[d] || m && P[m],
            T = E || O(m),
            A = m ? M ? O("entries") : T : void 0,
            R = "Array" == t ? P.entries || E : E;if (R && (w = l(R.call(new e())), w !== Object.prototype && (f(w, S, !0), o || c(w, _) || s(w, _, h))), M && E && E.name !== y && (C = !0, T = function T() {
          return E.call(this);
        }), o && !g || !p && !C && P[_] || s(P, _, T), u[t] = T, u[S] = h, m) if (x = { values: M ? T : O(y), keys: j ? T : O(b), entries: A }, g) for (k in x) {
          k in P || i(P, k, x[k]);
        } else n(n.P + n.F * (p || C), t, x);return x;
      };
    }, { "./_export": 34, "./_has": 38, "./_hide": 39, "./_iter-create": 48, "./_iterators": 52, "./_library": 54, "./_object-gpo": 64, "./_redefine": 71, "./_set-to-string-tag": 74, "./_wks": 89 }], 50: [function (e, t, r) {
      var o = e("./_wks")("iterator"),
          n = !1;try {
        var i = [7][o]();i["return"] = function () {
          n = !0;
        }, Array.from(i, function () {
          throw 2;
        });
      } catch (s) {}t.exports = function (e, t) {
        if (!t && !n) return !1;var r = !1;try {
          var i = [7],
              s = i[o]();s.next = function () {
            return { done: r = !0 };
          }, i[o] = function () {
            return s;
          }, e(i);
        } catch (c) {}return r;
      };
    }, { "./_wks": 89 }], 51: [function (e, t, r) {
      t.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    }, {}], 52: [function (e, t, r) {
      t.exports = {};
    }, {}], 53: [function (e, t, r) {
      var o = e("./_object-keys"),
          n = e("./_to-iobject");t.exports = function (e, t) {
        for (var r, i = n(e), s = o(i), c = s.length, u = 0; c > u;) {
          if (i[r = s[u++]] === t) return r;
        }
      };
    }, { "./_object-keys": 66, "./_to-iobject": 82 }], 54: [function (e, t, r) {
      t.exports = !0;
    }, {}], 55: [function (e, t, r) {
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
          _ = function _(e, t) {
        if (!i(e, o)) {
          if (!u(e)) return !0;if (!t) return !1;f(e);
        }return e[o].w;
      },
          p = function p(e) {
        return a && d.NEED && u(e) && !i(e, o) && f(e), e;
      },
          d = t.exports = { KEY: o, NEED: !1, fastKey: l, getWeak: _, onFreeze: p };
    }, { "./_fails": 35, "./_has": 38, "./_is-object": 46, "./_object-dp": 58, "./_uid": 86 }], 56: [function (e, t, r) {
      var o = e("./_global"),
          n = e("./_task").set,
          i = o.MutationObserver || o.WebKitMutationObserver,
          s = o.process,
          c = o.Promise,
          u = "process" == e("./_cof")(s);t.exports = function () {
        var e,
            t,
            r,
            a = function a() {
          var o, n;for (u && (o = s.domain) && o.exit(); e;) {
            n = e.fn, e = e.next;try {
              n();
            } catch (i) {
              throw e ? r() : t = void 0, i;
            }
          }t = void 0, o && o.enter();
        };if (u) r = function r() {
          s.nextTick(a);
        };else if (i) {
          var f = !0,
              l = document.createTextNode("");new i(a).observe(l, { characterData: !0 }), r = function r() {
            l.data = f = !f;
          };
        } else if (c && c.resolve) {
          var _ = c.resolve();r = function r() {
            _.then(a);
          };
        } else r = function r() {
          n.call(o, a);
        };return function (o) {
          var n = { fn: o, next: void 0 };t && (t.next = n), e || (e = n, r()), t = n;
        };
      };
    }, { "./_cof": 26, "./_global": 37, "./_task": 79 }], 57: [function (e, t, r) {
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
    }, { "./_an-object": 23, "./_dom-create": 31, "./_enum-bug-keys": 32, "./_html": 40, "./_object-dps": 59, "./_shared-key": 75 }], 58: [function (e, t, r) {
      var o = e("./_an-object"),
          n = e("./_ie8-dom-define"),
          i = e("./_to-primitive"),
          s = Object.defineProperty;r.f = e("./_descriptors") ? Object.defineProperty : function (e, t, r) {
        if (o(e), t = i(t, !0), o(r), n) try {
          return s(e, t, r);
        } catch (c) {}if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");return "value" in r && (e[t] = r.value), e;
      };
    }, { "./_an-object": 23, "./_descriptors": 30, "./_ie8-dom-define": 41, "./_to-primitive": 85 }], 59: [function (e, t, r) {
      var o = e("./_object-dp"),
          n = e("./_an-object"),
          i = e("./_object-keys");t.exports = e("./_descriptors") ? Object.defineProperties : function (e, t) {
        n(e);for (var r, s = i(t), c = s.length, u = 0; c > u;) {
          o.f(e, r = s[u++], t[r]);
        }return e;
      };
    }, { "./_an-object": 23, "./_descriptors": 30, "./_object-dp": 58, "./_object-keys": 66 }], 60: [function (e, t, r) {
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
    }, { "./_descriptors": 30, "./_has": 38, "./_ie8-dom-define": 41, "./_object-pie": 67, "./_property-desc": 69, "./_to-iobject": 82, "./_to-primitive": 85 }], 61: [function (e, t, r) {
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
    }, { "./_object-gopn": 62, "./_to-iobject": 82 }], 62: [function (e, t, r) {
      var o = e("./_object-keys-internal"),
          n = e("./_enum-bug-keys").concat("length", "prototype");r.f = Object.getOwnPropertyNames || function (e) {
        return o(e, n);
      };
    }, { "./_enum-bug-keys": 32, "./_object-keys-internal": 65 }], 63: [function (e, t, r) {
      r.f = Object.getOwnPropertySymbols;
    }, {}], 64: [function (e, t, r) {
      var o = e("./_has"),
          n = e("./_to-object"),
          i = e("./_shared-key")("IE_PROTO"),
          s = Object.prototype;t.exports = Object.getPrototypeOf || function (e) {
        return e = n(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
      };
    }, { "./_has": 38, "./_shared-key": 75, "./_to-object": 84 }], 65: [function (e, t, r) {
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
    }, { "./_array-includes": 24, "./_has": 38, "./_shared-key": 75, "./_to-iobject": 82 }], 66: [function (e, t, r) {
      var o = e("./_object-keys-internal"),
          n = e("./_enum-bug-keys");t.exports = Object.keys || function (e) {
        return o(e, n);
      };
    }, { "./_enum-bug-keys": 32, "./_object-keys-internal": 65 }], 67: [function (e, t, r) {
      r.f = {}.propertyIsEnumerable;
    }, {}], 68: [function (e, t, r) {
      var o = e("./_export"),
          n = e("./_core"),
          i = e("./_fails");t.exports = function (e, t) {
        var r = (n.Object || {})[e] || Object[e],
            s = {};s[e] = t(r), o(o.S + o.F * i(function () {
          r(1);
        }), "Object", s);
      };
    }, { "./_core": 27, "./_export": 34, "./_fails": 35 }], 69: [function (e, t, r) {
      t.exports = function (e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
    }, {}], 70: [function (e, t, r) {
      var o = e("./_hide");t.exports = function (e, t, r) {
        for (var n in t) {
          r && e[n] ? e[n] = t[n] : o(e, n, t[n]);
        }return e;
      };
    }, { "./_hide": 39 }], 71: [function (e, t, r) {
      t.exports = e("./_hide");
    }, { "./_hide": 39 }], 72: [function (e, t, r) {
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
    }, { "./_an-object": 23, "./_ctx": 28, "./_is-object": 46, "./_object-gopd": 60 }], 73: [function (e, t, r) {
      "use strict";
      var o = e("./_global"),
          n = e("./_core"),
          i = e("./_object-dp"),
          s = e("./_descriptors"),
          c = e("./_wks")("species");t.exports = function (e) {
        var t = "function" == typeof n[e] ? n[e] : o[e];s && t && !t[c] && i.f(t, c, { configurable: !0, get: function get() {
            return this;
          } });
      };
    }, { "./_core": 27, "./_descriptors": 30, "./_global": 37, "./_object-dp": 58, "./_wks": 89 }], 74: [function (e, t, r) {
      var o = e("./_object-dp").f,
          n = e("./_has"),
          i = e("./_wks")("toStringTag");t.exports = function (e, t, r) {
        e && !n(e = r ? e : e.prototype, i) && o(e, i, { configurable: !0, value: t });
      };
    }, { "./_has": 38, "./_object-dp": 58, "./_wks": 89 }], 75: [function (e, t, r) {
      var o = e("./_shared")("keys"),
          n = e("./_uid");t.exports = function (e) {
        return o[e] || (o[e] = n(e));
      };
    }, { "./_shared": 76, "./_uid": 86 }], 76: [function (e, t, r) {
      var o = e("./_global"),
          n = "__core-js_shared__",
          i = o[n] || (o[n] = {});t.exports = function (e) {
        return i[e] || (i[e] = {});
      };
    }, { "./_global": 37 }], 77: [function (e, t, r) {
      var o = e("./_an-object"),
          n = e("./_a-function"),
          i = e("./_wks")("species");t.exports = function (e, t) {
        var r,
            s = o(e).constructor;return void 0 === s || void 0 == (r = o(s)[i]) ? t : n(r);
      };
    }, { "./_a-function": 20, "./_an-object": 23, "./_wks": 89 }], 78: [function (e, t, r) {
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
    }, { "./_defined": 29, "./_to-integer": 81 }], 79: [function (e, t, r) {
      var o,
          n,
          i,
          s = e("./_ctx"),
          c = e("./_invoke"),
          u = e("./_html"),
          a = e("./_dom-create"),
          f = e("./_global"),
          l = f.process,
          _ = f.setImmediate,
          p = f.clearImmediate,
          d = f.MessageChannel,
          b = 0,
          y = {},
          h = "onreadystatechange",
          v = function v() {
        var e = +this;if (y.hasOwnProperty(e)) {
          var t = y[e];delete y[e], t();
        }
      },
          m = function m(e) {
        v.call(e.data);
      };_ && p || (_ = function _(e) {
        for (var t = [], r = 1; arguments.length > r;) {
          t.push(arguments[r++]);
        }return y[++b] = function () {
          c("function" == typeof e ? e : Function(e), t);
        }, o(b), b;
      }, p = function p(e) {
        delete y[e];
      }, "process" == e("./_cof")(l) ? o = function o(e) {
        l.nextTick(s(v, e, 1));
      } : d ? (n = new d(), i = n.port2, n.port1.onmessage = m, o = s(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (o = function o(e) {
        f.postMessage(e + "", "*");
      }, f.addEventListener("message", m, !1)) : o = h in a("script") ? function (e) {
        u.appendChild(a("script"))[h] = function () {
          u.removeChild(this), v.call(e);
        };
      } : function (e) {
        setTimeout(s(v, e, 1), 0);
      }), t.exports = { set: _, clear: p };
    }, { "./_cof": 26, "./_ctx": 28, "./_dom-create": 31, "./_global": 37, "./_html": 40, "./_invoke": 42 }], 80: [function (e, t, r) {
      var o = e("./_to-integer"),
          n = Math.max,
          i = Math.min;t.exports = function (e, t) {
        return e = o(e), e < 0 ? n(e + t, 0) : i(e, t);
      };
    }, { "./_to-integer": 81 }], 81: [function (e, t, r) {
      var o = Math.ceil,
          n = Math.floor;t.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : o)(e);
      };
    }, {}], 82: [function (e, t, r) {
      var o = e("./_iobject"),
          n = e("./_defined");t.exports = function (e) {
        return o(n(e));
      };
    }, { "./_defined": 29, "./_iobject": 43 }], 83: [function (e, t, r) {
      var o = e("./_to-integer"),
          n = Math.min;t.exports = function (e) {
        return e > 0 ? n(o(e), 9007199254740991) : 0;
      };
    }, { "./_to-integer": 81 }], 84: [function (e, t, r) {
      var o = e("./_defined");t.exports = function (e) {
        return Object(o(e));
      };
    }, { "./_defined": 29 }], 85: [function (e, t, r) {
      var o = e("./_is-object");t.exports = function (e, t) {
        if (!o(e)) return e;var r, n;if (t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;if ("function" == typeof (r = e.valueOf) && !o(n = r.call(e))) return n;if (!t && "function" == typeof (r = e.toString) && !o(n = r.call(e))) return n;throw TypeError("Can't convert object to primitive value");
      };
    }, { "./_is-object": 46 }], 86: [function (e, t, r) {
      var o = 0,
          n = Math.random();t.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++o + n).toString(36));
      };
    }, {}], 87: [function (e, t, r) {
      var o = e("./_global"),
          n = e("./_core"),
          i = e("./_library"),
          s = e("./_wks-ext"),
          c = e("./_object-dp").f;t.exports = function (e) {
        var t = n.Symbol || (n.Symbol = i ? {} : o.Symbol || {});"_" == e.charAt(0) || e in t || c(t, e, { value: s.f(e) });
      };
    }, { "./_core": 27, "./_global": 37, "./_library": 54, "./_object-dp": 58, "./_wks-ext": 88 }], 88: [function (e, t, r) {
      r.f = e("./_wks");
    }, { "./_wks": 89 }], 89: [function (e, t, r) {
      var o = e("./_shared")("wks"),
          n = e("./_uid"),
          i = e("./_global").Symbol,
          s = "function" == typeof i,
          c = t.exports = function (e) {
        return o[e] || (o[e] = s && i[e] || (s ? i : n)("Symbol." + e));
      };c.store = o;
    }, { "./_global": 37, "./_shared": 76, "./_uid": 86 }], 90: [function (e, t, r) {
      var o = e("./_classof"),
          n = e("./_wks")("iterator"),
          i = e("./_iterators");t.exports = e("./_core").getIteratorMethod = function (e) {
        if (void 0 != e) return e[n] || e["@@iterator"] || i[o(e)];
      };
    }, { "./_classof": 25, "./_core": 27, "./_iterators": 52, "./_wks": 89 }], 91: [function (e, t, r) {
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
    }, { "./_add-to-unscopables": 21, "./_iter-define": 49, "./_iter-step": 51, "./_iterators": 52, "./_to-iobject": 82 }], 92: [function (e, t, r) {
      var o = e("./_export");o(o.S, "Object", { create: e("./_object-create") });
    }, { "./_export": 34, "./_object-create": 57 }], 93: [function (e, t, r) {
      var o = e("./_export");o(o.S + o.F * !e("./_descriptors"), "Object", { defineProperty: e("./_object-dp").f });
    }, { "./_descriptors": 30, "./_export": 34, "./_object-dp": 58 }], 94: [function (e, t, r) {
      var o = e("./_to-object"),
          n = e("./_object-gpo");e("./_object-sap")("getPrototypeOf", function () {
        return function (e) {
          return n(o(e));
        };
      });
    }, { "./_object-gpo": 64, "./_object-sap": 68, "./_to-object": 84 }], 95: [function (e, t, r) {
      var o = e("./_export");o(o.S, "Object", { setPrototypeOf: e("./_set-proto").set });
    }, { "./_export": 34, "./_set-proto": 72 }], 96: [function (e, t, r) {}, {}], 97: [function (e, t, r) {
      "use strict";
      var o,
          n,
          i,
          s = e("./_library"),
          c = e("./_global"),
          u = e("./_ctx"),
          a = e("./_classof"),
          f = e("./_export"),
          l = e("./_is-object"),
          _ = (e("./_an-object"), e("./_a-function")),
          p = e("./_an-instance"),
          d = e("./_for-of"),
          b = (e("./_set-proto").set, e("./_species-constructor")),
          y = e("./_task").set,
          h = e("./_microtask")(),
          v = "Promise",
          m = c.TypeError,
          j = c.process,
          _g = c[v],
          j = c.process,
          x = "process" == a(j),
          k = function k() {},
          w = !!function () {
        try {
          var t = _g.resolve(1),
              r = (t.constructor = {})[e("./_wks")("species")] = function (e) {
            e(k, k);
          };return (x || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof r;
        } catch (o) {}
      }(),
          O = function O(e, t) {
        return e === t || e === _g && t === i;
      },
          S = function S(e) {
        var t;return !(!l(e) || "function" != typeof (t = e.then)) && t;
      },
          M = function M(e) {
        return O(_g, e) ? new C(e) : new n(e);
      },
          C = n = function n(e) {
        var t, r;this.promise = new e(function (e, o) {
          if (void 0 !== t || void 0 !== r) throw m("Bad Promise constructor");t = e, r = o;
        }), this.resolve = _(t), this.reject = _(r);
      },
          P = function P(e) {
        try {
          e();
        } catch (t) {
          return { error: t };
        }
      },
          E = function E(e, t) {
        if (!e._n) {
          e._n = !0;var r = e._c;h(function () {
            for (var o = e._v, n = 1 == e._s, i = 0, s = function s(t) {
              var r,
                  i,
                  s = n ? t.ok : t.fail,
                  c = t.resolve,
                  u = t.reject,
                  a = t.domain;try {
                s ? (n || (2 == e._h && R(e), e._h = 1), s === !0 ? r = o : (a && a.enter(), r = s(o), a && a.exit()), r === t.promise ? u(m("Promise-chain cycle")) : (i = S(r)) ? i.call(r, c, u) : c(r)) : u(o);
              } catch (f) {
                u(f);
              }
            }; r.length > i;) {
              s(r[i++]);
            }e._c = [], e._n = !1, t && !e._h && T(e);
          });
        }
      },
          T = function T(e) {
        y.call(c, function () {
          var t,
              r,
              o,
              n = e._v;if (A(e) && (t = P(function () {
            x ? j.emit("unhandledRejection", n, e) : (r = c.onunhandledrejection) ? r({ promise: e, reason: n }) : (o = c.console) && o.error && o.error("Unhandled promise rejection", n);
          }), e._h = x || A(e) ? 2 : 1), e._a = void 0, t) throw t.error;
        });
      },
          A = function A(e) {
        if (1 == e._h) return !1;for (var t, r = e._a || e._c, o = 0; r.length > o;) {
          if (t = r[o++], t.fail || !A(t.promise)) return !1;
        }return !0;
      },
          R = function R(e) {
        y.call(c, function () {
          var t;x ? j.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
          I = function I(e) {
        var t = this;t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), E(t, !0));
      },
          L = function L(e) {
        var t,
            r = this;if (!r._d) {
          r._d = !0, r = r._w || r;try {
            if (r === e) throw m("Promise can't be resolved itself");(t = S(e)) ? h(function () {
              var o = { _w: r, _d: !1 };try {
                t.call(e, u(L, o, 1), u(I, o, 1));
              } catch (n) {
                I.call(o, n);
              }
            }) : (r._v = e, r._s = 1, E(r, !1));
          } catch (o) {
            I.call({ _w: r, _d: !1 }, o);
          }
        }
      };w || (_g = function g(e) {
        p(this, _g, v, "_h"), _(e), o.call(this);try {
          e(u(L, this, 1), u(I, this, 1));
        } catch (t) {
          I.call(this, t);
        }
      }, o = function o(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }, o.prototype = e("./_redefine-all")(_g.prototype, { then: function then(e, t) {
          var r = M(b(this, _g));return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = x ? j.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && E(this, !1), r.promise;
        }, "catch": function _catch(e) {
          return this.then(void 0, e);
        } }), C = function C() {
        var e = new o();this.promise = e, this.resolve = u(L, e, 1), this.reject = u(I, e, 1);
      }), f(f.G + f.W + f.F * !w, { Promise: _g }), e("./_set-to-string-tag")(_g, v), e("./_set-species")(v), i = e("./_core")[v], f(f.S + f.F * !w, v, { reject: function reject(e) {
          var t = M(this),
              r = t.reject;return r(e), t.promise;
        } }), f(f.S + f.F * (s || !w), v, { resolve: function resolve(e) {
          if (e instanceof _g && O(e.constructor, this)) return e;var t = M(this),
              r = t.resolve;return r(e), t.promise;
        } }), f(f.S + f.F * !(w && e("./_iter-detect")(function (e) {
        _g.all(e)["catch"](k);
      })), v, { all: function all(e) {
          var t = this,
              r = M(t),
              o = r.resolve,
              n = r.reject,
              i = P(function () {
            var r = [],
                i = 0,
                s = 1;d(e, !1, function (e) {
              var c = i++,
                  u = !1;r.push(void 0), s++, t.resolve(e).then(function (e) {
                u || (u = !0, r[c] = e, --s || o(r));
              }, n);
            }), --s || o(r);
          });return i && n(i.error), r.promise;
        }, race: function race(e) {
          var t = this,
              r = M(t),
              o = r.reject,
              n = P(function () {
            d(e, !1, function (e) {
              t.resolve(e).then(r.resolve, o);
            });
          });return n && o(n.error), r.promise;
        } });
    }, { "./_a-function": 20, "./_an-instance": 22, "./_an-object": 23, "./_classof": 25, "./_core": 27, "./_ctx": 28, "./_export": 34, "./_for-of": 36, "./_global": 37, "./_is-object": 46, "./_iter-detect": 50, "./_library": 54, "./_microtask": 56, "./_redefine-all": 70, "./_set-proto": 72, "./_set-species": 73, "./_set-to-string-tag": 74, "./_species-constructor": 77, "./_task": 79, "./_wks": 89 }], 98: [function (e, t, r) {
      "use strict";
      var o = e("./_string-at")(!0);e("./_iter-define")(String, "String", function (e) {
        this._t = String(e), this._i = 0;
      }, function () {
        var e,
            t = this._t,
            r = this._i;return r >= t.length ? { value: void 0, done: !0 } : (e = o(t, r), this._i += e.length, { value: e, done: !1 });
      });
    }, { "./_iter-define": 49, "./_string-at": 78 }], 99: [function (e, t, r) {
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
          _ = e("./_uid"),
          p = e("./_wks"),
          d = e("./_wks-ext"),
          b = e("./_wks-define"),
          y = e("./_keyof"),
          h = e("./_enum-keys"),
          v = e("./_is-array"),
          m = e("./_an-object"),
          j = e("./_to-iobject"),
          g = e("./_to-primitive"),
          x = e("./_property-desc"),
          k = e("./_object-create"),
          w = e("./_object-gopn-ext"),
          O = e("./_object-gopd"),
          S = e("./_object-dp"),
          M = e("./_object-keys"),
          C = O.f,
          P = S.f,
          E = w.f,
          _T = o.Symbol,
          A = o.JSON,
          R = A && A.stringify,
          I = "prototype",
          L = p("_hidden"),
          D = p("toPrimitive"),
          F = {}.propertyIsEnumerable,
          N = f("symbol-registry"),
          W = f("symbols"),
          B = f("op-symbols"),
          U = Object[I],
          K = "function" == typeof _T,
          q = o.QObject,
          G = !q || !q[I] || !q[I].findChild,
          J = i && a(function () {
        return 7 != k(P({}, "a", { get: function get() {
            return P(this, "a", { value: 7 }).a;
          } })).a;
      }) ? function (e, t, r) {
        var o = C(U, t);o && delete U[t], P(e, t, r), o && e !== U && P(U, t, o);
      } : P,
          z = function z(e) {
        var t = W[e] = k(_T[I]);return t._k = e, t;
      },
          Y = K && "symbol" == _typeof(_T.iterator) ? function (e) {
        return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      } : function (e) {
        return e instanceof _T;
      },
          H = function H(e, t, r) {
        return e === U && H(B, t, r), m(e), t = g(t, !0), m(r), n(W, t) ? (r.enumerable ? (n(e, L) && e[L][t] && (e[L][t] = !1), r = k(r, { enumerable: x(0, !1) })) : (n(e, L) || P(e, L, x(1, {})), e[L][t] = !0), J(e, t, r)) : P(e, t, r);
      },
          Q = function Q(e, t) {
        m(e);for (var r, o = h(t = j(t)), n = 0, i = o.length; i > n;) {
          H(e, r = o[n++], t[r]);
        }return e;
      },
          V = function V(e, t) {
        return void 0 === t ? k(e) : Q(k(e), t);
      },
          X = function X(e) {
        var t = F.call(this, e = g(e, !0));return !(this === U && n(W, e) && !n(B, e)) && (!(t || !n(this, e) || !n(W, e) || n(this, L) && this[L][e]) || t);
      },
          Z = function Z(e, t) {
        if (e = j(e), t = g(t, !0), e !== U || !n(W, t) || n(B, t)) {
          var r = C(e, t);return !r || !n(W, t) || n(e, L) && e[L][t] || (r.enumerable = !0), r;
        }
      },
          $ = function $(e) {
        for (var t, r = E(j(e)), o = [], i = 0; r.length > i;) {
          n(W, t = r[i++]) || t == L || t == u || o.push(t);
        }return o;
      },
          ee = function ee(e) {
        for (var t, r = e === U, o = E(r ? B : j(e)), i = [], s = 0; o.length > s;) {
          !n(W, t = o[s++]) || r && !n(U, t) || i.push(W[t]);
        }return i;
      };K || (_T = function T() {
        if (this instanceof _T) throw TypeError("Symbol is not a constructor!");var e = _(arguments.length > 0 ? arguments[0] : void 0),
            t = function t(r) {
          this === U && t.call(B, r), n(this, L) && n(this[L], e) && (this[L][e] = !1), J(this, e, x(1, r));
        };return i && G && J(U, e, { configurable: !0, set: t }), z(e);
      }, c(_T[I], "toString", function () {
        return this._k;
      }), O.f = Z, S.f = H, e("./_object-gopn").f = w.f = $, e("./_object-pie").f = X, e("./_object-gops").f = ee, i && !e("./_library") && c(U, "propertyIsEnumerable", X, !0), d.f = function (e) {
        return z(p(e));
      }), s(s.G + s.W + s.F * !K, { Symbol: _T });for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; te.length > re;) {
        p(te[re++]);
      }for (var te = M(p.store), re = 0; te.length > re;) {
        b(te[re++]);
      }s(s.S + s.F * !K, "Symbol", { "for": function _for(e) {
          return n(N, e += "") ? N[e] : N[e] = _T(e);
        }, keyFor: function keyFor(e) {
          if (Y(e)) return y(N, e);throw TypeError(e + " is not a symbol!");
        }, useSetter: function useSetter() {
          G = !0;
        }, useSimple: function useSimple() {
          G = !1;
        } }), s(s.S + s.F * !K, "Object", { create: V, defineProperty: H, defineProperties: Q, getOwnPropertyDescriptor: Z, getOwnPropertyNames: $, getOwnPropertySymbols: ee }), A && s(s.S + s.F * (!K || a(function () {
        var e = _T();return "[null]" != R([e]) || "{}" != R({ a: e }) || "{}" != R(Object(e));
      })), "JSON", { stringify: function stringify(e) {
          if (void 0 !== e && !Y(e)) {
            for (var t, r, o = [e], n = 1; arguments.length > n;) {
              o.push(arguments[n++]);
            }return t = o[1], "function" == typeof t && (r = t), !r && v(t) || (t = function t(e, _t2) {
              if (r && (_t2 = r.call(this, e, _t2)), !Y(_t2)) return _t2;
            }), o[1] = t, R.apply(A, o);
          }
        } }), _T[I][D] || e("./_hide")(_T[I], D, _T[I].valueOf), l(_T, "Symbol"), l(Math, "Math", !0), l(o.JSON, "JSON", !0);
    }, { "./_an-object": 23, "./_descriptors": 30, "./_enum-keys": 33, "./_export": 34, "./_fails": 35, "./_global": 37, "./_has": 38, "./_hide": 39, "./_is-array": 45, "./_keyof": 53, "./_library": 54, "./_meta": 55, "./_object-create": 57, "./_object-dp": 58, "./_object-gopd": 60, "./_object-gopn": 62, "./_object-gopn-ext": 61, "./_object-gops": 63, "./_object-keys": 66, "./_object-pie": 67, "./_property-desc": 69, "./_redefine": 71, "./_set-to-string-tag": 74, "./_shared": 76, "./_to-iobject": 82, "./_to-primitive": 85, "./_uid": 86, "./_wks": 89, "./_wks-define": 87, "./_wks-ext": 88 }], 100: [function (e, t, r) {
      e("./_wks-define")("asyncIterator");
    }, { "./_wks-define": 87 }], 101: [function (e, t, r) {
      e("./_wks-define")("observable");
    }, { "./_wks-define": 87 }], 102: [function (e, t, r) {
      e("./es6.array.iterator");for (var o = e("./_global"), n = e("./_hide"), i = e("./_iterators"), s = e("./_wks")("toStringTag"), c = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
        var a = c[u],
            f = o[a],
            l = f && f.prototype;l && !l[s] && n(l, s, a), i[a] = i.Array;
      }
    }, { "./_global": 37, "./_hide": 39, "./_iterators": 52, "./_wks": 89, "./es6.array.iterator": 91 }], 103: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = e("babel-runtime/helpers/classCallCheck"),
          i = o(n),
          s = e("babel-runtime/helpers/createClass"),
          c = o(s),
          u = function () {
        function e() {
          (0, i["default"])(this, e);var t = this;t._msgId = 0, t._subscriptions = {}, t._responseTimeOut = 5e3, t._responseCallbacks = {}, t._registerExternalListener();
        }return (0, c["default"])(e, [{ key: "addListener", value: function value(e, t) {
            var r = this,
                o = new a(r._subscriptions, e, t),
                n = r._subscriptions[e];return n || (n = [], r._subscriptions[e] = n), n.push(o), o;
          } }, { key: "addResponseListener", value: function value(e, t, r) {
            this._responseCallbacks[e + t] = r;
          } }, { key: "removeResponseListener", value: function value(e, t) {
            delete this._responseCallbacks[e + t];
          } }, { key: "removeAllListenersOf", value: function value(e) {
            delete this._subscriptions[e];
          } }, { key: "bind", value: function value(e, t, r) {
            var o = this,
                n = this,
                i = n.addListener(e, function (e) {
              r.postMessage(e);
            }),
                s = r.addListener(t, function (e) {
              n.postMessage(e);
            });return { thisListener: i, targetListener: s, unbind: function unbind() {
                o.thisListener.remove(), o.targetListener.remove();
              } };
          } }, { key: "_publishOnDefault", value: function value(e) {
            var t = this._subscriptions["*"];t && this._publishOn(t, e);
          } }, { key: "_publishOn", value: function value(e, t) {
            e.forEach(function (e) {
              e._callback(t);
            });
          } }, { key: "_responseCallback", value: function value(e, t) {
            var r = this;t && !function () {
              var o = e.from + e.id;r._responseCallbacks[o] = t, setTimeout(function () {
                var t = r._responseCallbacks[o];if (delete r._responseCallbacks[o], t) {
                  var n = { id: e.id, type: "response", body: { code: 408, desc: "Response timeout!", value: e } };t(n);
                }
              }, r._responseTimeOut);
            }();
          } }, { key: "_onResponse", value: function value(e) {
            var t = this;if ("response" === e.type) {
              var r = e.to + e.id,
                  o = t._responseCallbacks[r];if (e.body.code >= 200 && delete t._responseCallbacks[r], o) return o(e), !0;
            }return !1;
          } }, { key: "_onMessage", value: function value(e) {
            var t = this;if (!t._onResponse(e)) {
              var r = t._subscriptions[e.to];r ? t._publishOn(r, e) : t._publishOnDefault(e);
            }
          } }, { key: "_genId", value: function value(e) {
            e.id && 0 !== e.id || (this._msgId++, e.id = this._msgId);
          } }, { key: "postMessage", value: function value(e, t) {} }, { key: "_onPostMessage", value: function value(e) {} }, { key: "_registerExternalListener", value: function value() {} }]), e;
      }(),
          a = function () {
        function e(t, r, o) {
          (0, i["default"])(this, e);var n = this;n._subscriptions = t, n._url = r, n._callback = o;
        }return (0, c["default"])(e, [{ key: "remove", value: function value() {
            var e = this,
                t = e._subscriptions[e._url];if (t) {
              var r = t.indexOf(e);t.splice(r, 1), 0 === t.length && delete e._subscriptions[e._url];
            }
          } }, { key: "url", get: function get() {
            return this._url;
          } }]), e;
      }();r["default"] = u, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 104: [function (e, t, r) {
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
          _ = e("babel-runtime/helpers/inherits"),
          p = o(_),
          d = e("./Bus"),
          b = o(d),
          y = function (e) {
        function t() {
          return (0, c["default"])(this, t), (0, l["default"])(this, (0, i["default"])(t).call(this));
        }return (0, p["default"])(t, e), (0, a["default"])(t, [{ key: "postMessage", value: function value(e, t) {
            var r = this;return r._genId(e), r._responseCallback(e, t), r._onPostMessage(e), e.id;
          } }, { key: "_onMessage", value: function value(e) {
            var t = this;if (!t._onResponse(e)) {
              var r = t._subscriptions[e.to];r ? (t._publishOn(r, e), e.to.startsWith("hyperty") || t._publishOnDefault(e)) : t._publishOnDefault(e);
            }
          } }]), t;
      }(b["default"]);r["default"] = y, t.exports = r["default"];
    }, { "./Bus": 103, "babel-runtime/core-js/object/get-prototype-of": 3, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9, "babel-runtime/helpers/inherits": 10, "babel-runtime/helpers/possibleConstructorReturn": 11 }], 105: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 }), r.SandboxRegistry = r.SandboxType = r.Sandbox = void 0;var n = e("./sandbox/Sandbox"),
          i = o(n),
          s = e("./sandbox/SandboxRegistry"),
          c = o(s);r.Sandbox = i["default"], r.SandboxType = n.SandboxType, r.SandboxRegistry = c["default"];
    }, { "./sandbox/Sandbox": 106, "./sandbox/SandboxRegistry": 107 }], 106: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 }), r.SandboxType = void 0;var n = e("babel-runtime/core-js/promise"),
          i = o(n),
          s = e("babel-runtime/core-js/object/get-prototype-of"),
          c = o(s),
          u = e("babel-runtime/helpers/classCallCheck"),
          a = o(u),
          f = e("babel-runtime/helpers/createClass"),
          l = o(f),
          _ = e("babel-runtime/helpers/possibleConstructorReturn"),
          p = o(_),
          d = e("babel-runtime/helpers/inherits"),
          b = o(d),
          y = e("../sandbox/SandboxRegistry"),
          h = o(y),
          v = e("../bus/MiniBus"),
          m = o(v),
          j = (r.SandboxType = { APP: "app", NORMAL: "normal" }, function (e) {
        function t() {
          (0, a["default"])(this, t);var e = (0, p["default"])(this, (0, c["default"])(t).call(this));return e;
        }return (0, b["default"])(t, e), (0, l["default"])(t, [{ key: "deployComponent", value: function value(e, t, r) {
            var o = this;return new i["default"](function (n, i) {
              var s = { type: "create", from: h["default"].ExternalDeployAddress, to: h["default"].InternalDeployAddress, body: { url: t, sourceCode: e, config: r } };o.postMessage(s, function (e) {
                200 === e.body.code ? n("deployed") : i(e.body.desc);
              });
            });
          } }, { key: "removeComponent", value: function value(e) {
            var t = this;return new i["default"](function (r, o) {
              var n = { type: "delete", from: h["default"].ExternalDeployAddress, to: h["default"].InternalDeployAddress, body: { url: e } };t.postMessage(n, function (e) {
                200 === e.body.code ? r("undeployed") : o(e.body.desc);
              });
            });
          } }]), t;
      }(m["default"]));r["default"] = j;
    }, { "../bus/MiniBus": 104, "../sandbox/SandboxRegistry": 107, "babel-runtime/core-js/object/get-prototype-of": 3, "babel-runtime/core-js/promise": 5, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9, "babel-runtime/helpers/inherits": 10, "babel-runtime/helpers/possibleConstructorReturn": 11 }], 107: [function (e, t, r) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { "default": e };
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = e("babel-runtime/helpers/classCallCheck"),
          i = o(n),
          s = e("babel-runtime/helpers/createClass"),
          c = o(s),
          u = function () {
        function e(t) {
          (0, i["default"])(this, e);var r = this;r._bus = t, r._components = {}, t.addListener(e.InternalDeployAddress, function (e) {
            switch (e.type) {case "create":
                r._onDeploy(e);break;case "delete":
                r._onRemove(e);}
          });
        }return (0, c["default"])(e, [{ key: "_responseMsg", value: function value(t, r, o) {
            var n = { id: t.id, type: "response", from: e.InternalDeployAddress, to: e.ExternalDeployAddress },
                i = {};return r && (i.code = r), o && (i.desc = o), n.body = i, n;
          } }, { key: "_onDeploy", value: function value(e) {
            var t = this,
                r = e.body.config,
                o = e.body.url,
                n = e.body.sourceCode,
                i = void 0,
                s = void 0;if (t._components.hasOwnProperty(o)) i = 500, s = "Instance " + o + " already exist!";else try {
              t._components[o] = t._create(o, n, r), i = 200;
            } catch (c) {
              i = 500, s = c;
            }var u = t._responseMsg(e, i, s);t._bus.postMessage(u);
          } }, { key: "_onRemove", value: function value(e) {
            var t = this,
                r = e.body.url,
                o = void 0,
                n = void 0;t._components.hasOwnProperty(r) ? (delete t._components[r], t._bus.removeAllListenersOf(r), o = 200) : (o = 500, n = "Instance " + r + " doesn't exist!");var i = t._responseMsg(e, o, n);t._bus.postMessage(i);
          } }, { key: "_create", value: function value(e, t, r) {} }, { key: "components", get: function get() {
            return this._components;
          } }]), e;
      }();u.ExternalDeployAddress = "hyperty-runtime://sandbox/external", u.InternalDeployAddress = "hyperty-runtime://sandbox/internal", r["default"] = u, t.exports = r["default"];
    }, { "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }] }, {}, [105])(105);
});
//# sourceMappingURL=sandbox.js.map
