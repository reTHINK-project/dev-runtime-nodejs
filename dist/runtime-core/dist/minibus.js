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

// Distribution file for minibus.js
// version: 0.5.1
// Last build: Wed Jul 13 2016 18:18:37 GMT+0100 (WEST)

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.minibus = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
    }, { "core-js/library/fn/object/create": 11 }], 2: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
    }, { "core-js/library/fn/object/define-property": 12 }], 3: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
    }, { "core-js/library/fn/object/get-prototype-of": 13 }], 4: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
    }, { "core-js/library/fn/object/set-prototype-of": 14 }], 5: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
    }, { "core-js/library/fn/symbol": 15 }], 6: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      exports.default = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
    }, {}], 7: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      var _defineProperty = require("../core-js/object/define-property");

      var _defineProperty2 = _interopRequireDefault(_defineProperty);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            (0, _defineProperty2.default)(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
    }, { "../core-js/object/define-property": 2 }], 8: [function (require, module, exports) {
      "use strict";

      var _Object$create = require("babel-runtime/core-js/object/create")["default"];

      var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

      exports["default"] = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
        }

        subClass.prototype = _Object$create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      };

      exports.__esModule = true;
    }, { "babel-runtime/core-js/object/create": 1, "babel-runtime/core-js/object/set-prototype-of": 4 }], 9: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      var _typeof2 = require("../helpers/typeof");

      var _typeof3 = _interopRequireDefault(_typeof2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = function (self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
      };
    }, { "../helpers/typeof": 10 }], 10: [function (require, module, exports) {
      "use strict";

      var _Symbol = require("babel-runtime/core-js/symbol")["default"];

      exports["default"] = function (obj) {
        return obj && obj.constructor === _Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
      };

      exports.__esModule = true;
    }, { "babel-runtime/core-js/symbol": 5 }], 11: [function (require, module, exports) {
      var $ = require('../../modules/$');
      module.exports = function create(P, D) {
        return $.create(P, D);
      };
    }, { "../../modules/$": 33 }], 12: [function (require, module, exports) {
      var $ = require('../../modules/$');
      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
    }, { "../../modules/$": 33 }], 13: [function (require, module, exports) {
      require('../../modules/es6.object.get-prototype-of');
      module.exports = require('../../modules/$.core').Object.getPrototypeOf;
    }, { "../../modules/$.core": 19, "../../modules/es6.object.get-prototype-of": 46 }], 14: [function (require, module, exports) {
      require('../../modules/es6.object.set-prototype-of');
      module.exports = require('../../modules/$.core').Object.setPrototypeOf;
    }, { "../../modules/$.core": 19, "../../modules/es6.object.set-prototype-of": 47 }], 15: [function (require, module, exports) {
      require('../../modules/es6.symbol');
      require('../../modules/es6.object.to-string');
      module.exports = require('../../modules/$.core').Symbol;
    }, { "../../modules/$.core": 19, "../../modules/es6.object.to-string": 48, "../../modules/es6.symbol": 49 }], 16: [function (require, module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
    }, {}], 17: [function (require, module, exports) {
      var isObject = require('./$.is-object');
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
    }, { "./$.is-object": 32 }], 18: [function (require, module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
    }, {}], 19: [function (require, module, exports) {
      var core = module.exports = { version: '1.2.6' };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    }, {}], 20: [function (require, module, exports) {
      // optional / simple context binding
      var aFunction = require('./$.a-function');
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function () /* ...args */{
          return fn.apply(that, arguments);
        };
      };
    }, { "./$.a-function": 16 }], 21: [function (require, module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    }, {}], 22: [function (require, module, exports) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !require('./$.fails')(function () {
        return Object.defineProperty({}, 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });
    }, { "./$.fails": 25 }], 23: [function (require, module, exports) {
      // all enumerable object keys, includes symbols
      var $ = require('./$');
      module.exports = function (it) {
        var keys = $.getKeys(it),
            getSymbols = $.getSymbols;
        if (getSymbols) {
          var symbols = getSymbols(it),
              isEnum = $.isEnum,
              i = 0,
              key;
          while (symbols.length > i) {
            if (isEnum.call(it, key = symbols[i++])) keys.push(key);
          }
        }
        return keys;
      };
    }, { "./$": 33 }], 24: [function (require, module, exports) {
      var global = require('./$.global'),
          core = require('./$.core'),
          ctx = require('./$.ctx'),
          PROTOTYPE = 'prototype';

      var $export = function $export(type, name, source) {
        var IS_FORCED = type & $export.F,
            IS_GLOBAL = type & $export.G,
            IS_STATIC = type & $export.S,
            IS_PROTO = type & $export.P,
            IS_BIND = type & $export.B,
            IS_WRAP = type & $export.W,
            exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
            target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
            key,
            own,
            out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue;
          // export native or passed
          out = own ? target[key] : source[key];
          // prevent global pollution for namespaces
          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
          // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global)
          // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function F(param) {
              return this instanceof C ? new C(param) : C(param);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
            // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      };
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      module.exports = $export;
    }, { "./$.core": 19, "./$.ctx": 20, "./$.global": 27 }], 25: [function (require, module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }, {}], 26: [function (require, module, exports) {
      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      var toIObject = require('./$.to-iobject'),
          getNames = require('./$').getNames,
          toString = {}.toString;

      var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function getWindowNames(it) {
        try {
          return getNames(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.get = function getOwnPropertyNames(it) {
        if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
        return getNames(toIObject(it));
      };
    }, { "./$": 33, "./$.to-iobject": 42 }], 27: [function (require, module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    }, {}], 28: [function (require, module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
    }, {}], 29: [function (require, module, exports) {
      var $ = require('./$'),
          createDesc = require('./$.property-desc');
      module.exports = require('./$.descriptors') ? function (object, key, value) {
        return $.setDesc(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    }, { "./$": 33, "./$.descriptors": 22, "./$.property-desc": 37 }], 30: [function (require, module, exports) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = require('./$.cof');
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
    }, { "./$.cof": 18 }], 31: [function (require, module, exports) {
      // 7.2.2 IsArray(argument)
      var cof = require('./$.cof');
      module.exports = Array.isArray || function (arg) {
        return cof(arg) == 'Array';
      };
    }, { "./$.cof": 18 }], 32: [function (require, module, exports) {
      module.exports = function (it) {
        return (typeof it === "undefined" ? "undefined" : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
      };
    }, {}], 33: [function (require, module, exports) {
      var $Object = Object;
      module.exports = {
        create: $Object.create,
        getProto: $Object.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: $Object.getOwnPropertyDescriptor,
        setDesc: $Object.defineProperty,
        setDescs: $Object.defineProperties,
        getKeys: $Object.keys,
        getNames: $Object.getOwnPropertyNames,
        getSymbols: $Object.getOwnPropertySymbols,
        each: [].forEach
      };
    }, {}], 34: [function (require, module, exports) {
      var $ = require('./$'),
          toIObject = require('./$.to-iobject');
      module.exports = function (object, el) {
        var O = toIObject(object),
            keys = $.getKeys(O),
            length = keys.length,
            index = 0,
            key;
        while (length > index) {
          if (O[key = keys[index++]] === el) return key;
        }
      };
    }, { "./$": 33, "./$.to-iobject": 42 }], 35: [function (require, module, exports) {
      module.exports = true;
    }, {}], 36: [function (require, module, exports) {
      // most Object methods by ES6 should accept primitives
      var $export = require('./$.export'),
          core = require('./$.core'),
          fails = require('./$.fails');
      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };
    }, { "./$.core": 19, "./$.export": 24, "./$.fails": 25 }], 37: [function (require, module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
    }, {}], 38: [function (require, module, exports) {
      module.exports = require('./$.hide');
    }, { "./$.hide": 29 }], 39: [function (require, module, exports) {
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      var getDesc = require('./$').getDesc,
          isObject = require('./$.is-object'),
          anObject = require('./$.an-object');
      var check = function check(O, proto) {
        anObject(O);
        if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
      };
      module.exports = {
        set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function (test, buggy, set) {
          try {
            set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
        check: check
      };
    }, { "./$": 33, "./$.an-object": 17, "./$.ctx": 20, "./$.is-object": 32 }], 40: [function (require, module, exports) {
      var def = require('./$').setDesc,
          has = require('./$.has'),
          TAG = require('./$.wks')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
      };
    }, { "./$": 33, "./$.has": 28, "./$.wks": 45 }], 41: [function (require, module, exports) {
      var global = require('./$.global'),
          SHARED = '__core-js_shared__',
          store = global[SHARED] || (global[SHARED] = {});
      module.exports = function (key) {
        return store[key] || (store[key] = {});
      };
    }, { "./$.global": 27 }], 42: [function (require, module, exports) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = require('./$.iobject'),
          defined = require('./$.defined');
      module.exports = function (it) {
        return IObject(defined(it));
      };
    }, { "./$.defined": 21, "./$.iobject": 30 }], 43: [function (require, module, exports) {
      // 7.1.13 ToObject(argument)
      var defined = require('./$.defined');
      module.exports = function (it) {
        return Object(defined(it));
      };
    }, { "./$.defined": 21 }], 44: [function (require, module, exports) {
      var id = 0,
          px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
    }, {}], 45: [function (require, module, exports) {
      var store = require('./$.shared')('wks'),
          uid = require('./$.uid'),
          _Symbol2 = require('./$.global').Symbol;
      module.exports = function (name) {
        return store[name] || (store[name] = _Symbol2 && _Symbol2[name] || (_Symbol2 || uid)('Symbol.' + name));
      };
    }, { "./$.global": 27, "./$.shared": 41, "./$.uid": 44 }], 46: [function (require, module, exports) {
      // 19.1.2.9 Object.getPrototypeOf(O)
      var toObject = require('./$.to-object');

      require('./$.object-sap')('getPrototypeOf', function ($getPrototypeOf) {
        return function getPrototypeOf(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    }, { "./$.object-sap": 36, "./$.to-object": 43 }], 47: [function (require, module, exports) {
      // 19.1.3.19 Object.setPrototypeOf(O, proto)
      var $export = require('./$.export');
      $export($export.S, 'Object', { setPrototypeOf: require('./$.set-proto').set });
    }, { "./$.export": 24, "./$.set-proto": 39 }], 48: [function (require, module, exports) {}, {}], 49: [function (require, module, exports) {
      'use strict';
      // ECMAScript 6 symbols shim

      var $ = require('./$'),
          global = require('./$.global'),
          has = require('./$.has'),
          DESCRIPTORS = require('./$.descriptors'),
          $export = require('./$.export'),
          redefine = require('./$.redefine'),
          $fails = require('./$.fails'),
          shared = require('./$.shared'),
          setToStringTag = require('./$.set-to-string-tag'),
          uid = require('./$.uid'),
          wks = require('./$.wks'),
          keyOf = require('./$.keyof'),
          $names = require('./$.get-names'),
          enumKeys = require('./$.enum-keys'),
          isArray = require('./$.is-array'),
          anObject = require('./$.an-object'),
          toIObject = require('./$.to-iobject'),
          createDesc = require('./$.property-desc'),
          getDesc = $.getDesc,
          setDesc = $.setDesc,
          _create = $.create,
          getNames = $names.get,
          $Symbol = global.Symbol,
          $JSON = global.JSON,
          _stringify = $JSON && $JSON.stringify,
          setter = false,
          HIDDEN = wks('_hidden'),
          isEnum = $.isEnum,
          SymbolRegistry = shared('symbol-registry'),
          AllSymbols = shared('symbols'),
          useNative = typeof $Symbol == 'function',
          ObjectProto = Object.prototype;

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      var setSymbolDesc = DESCRIPTORS && $fails(function () {
        return _create(setDesc({}, 'a', {
          get: function get() {
            return setDesc(this, 'a', { value: 7 }).a;
          }
        })).a != 7;
      }) ? function (it, key, D) {
        var protoDesc = getDesc(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        setDesc(it, key, D);
        if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
      } : setDesc;

      var wrap = function wrap(tag) {
        var sym = AllSymbols[tag] = _create($Symbol.prototype);
        sym._k = tag;
        DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
          configurable: true,
          set: function set(value) {
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          }
        });
        return sym;
      };

      var isSymbol = function isSymbol(it) {
        return (typeof it === "undefined" ? "undefined" : _typeof(it)) == 'symbol';
      };

      var $defineProperty = function defineProperty(it, key, D) {
        if (D && has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, { enumerable: createDesc(0, false) });
          }return setSymbolDesc(it, key, D);
        }return setDesc(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P)),
            i = 0,
            l = keys.length,
            key;
        while (l > i) {
          $defineProperty(it, key = keys[i++], P[key]);
        }return it;
      };
      var $create = function create(it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key);
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        var D = getDesc(it = toIObject(it), key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = getNames(toIObject(it)),
            result = [],
            i = 0,
            key;
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
        }return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var names = getNames(toIObject(it)),
            result = [],
            i = 0,
            key;
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
        }return result;
      };
      var $stringify = function stringify(it) {
        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        var args = [it],
            i = 1,
            $$ = arguments,
            replacer,
            $replacer;
        while ($$.length > i) {
          args.push($$[i++]);
        }replacer = args[1];
        if (typeof replacer == 'function') $replacer = replacer;
        if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
          if ($replacer) value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      };
      var buggyJSON = $fails(function () {
        var S = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        // WebKit converts symbol values to JSON as null
        // V8 throws on boxed symbols
        return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
      });

      // 19.4.1.1 Symbol([description])
      if (!useNative) {
        $Symbol = function _Symbol3() {
          if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
          return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
        };
        redefine($Symbol.prototype, 'toString', function toString() {
          return this._k;
        });

        isSymbol = function isSymbol(it) {
          return it instanceof $Symbol;
        };

        $.create = $create;
        $.isEnum = $propertyIsEnumerable;
        $.getDesc = $getOwnPropertyDescriptor;
        $.setDesc = $defineProperty;
        $.setDescs = $defineProperties;
        $.getNames = $names.get = $getOwnPropertyNames;
        $.getSymbols = $getOwnPropertySymbols;

        if (DESCRIPTORS && !require('./$.library')) {
          redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
        }
      }

      var symbolStatics = {
        // 19.4.2.1 Symbol.for(key)
        'for': function _for(key) {
          return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(key) {
          return keyOf(SymbolRegistry, key);
        },
        useSetter: function useSetter() {
          setter = true;
        },
        useSimple: function useSimple() {
          setter = false;
        }
      };
      // 19.4.2.2 Symbol.hasInstance
      // 19.4.2.3 Symbol.isConcatSpreadable
      // 19.4.2.4 Symbol.iterator
      // 19.4.2.6 Symbol.match
      // 19.4.2.8 Symbol.replace
      // 19.4.2.9 Symbol.search
      // 19.4.2.10 Symbol.species
      // 19.4.2.11 Symbol.split
      // 19.4.2.12 Symbol.toPrimitive
      // 19.4.2.13 Symbol.toStringTag
      // 19.4.2.14 Symbol.unscopables
      $.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function (it) {
        var sym = wks(it);
        symbolStatics[it] = useNative ? sym : wrap(sym);
      });

      setter = true;

      $export($export.G + $export.W, { Symbol: $Symbol });

      $export($export.S, 'Symbol', symbolStatics);

      $export($export.S + $export.F * !useNative, 'Object', {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      });

      // 24.3.2 JSON.stringify(value [, replacer [, space]])
      $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', { stringify: $stringify });

      // 19.4.3.5 Symbol.prototype[@@toStringTag]
      setToStringTag($Symbol, 'Symbol');
      // 20.2.1.9 Math[@@toStringTag]
      setToStringTag(Math, 'Math', true);
      // 24.3.3 JSON[@@toStringTag]
      setToStringTag(global.JSON, 'JSON', true);
    }, { "./$": 33, "./$.an-object": 17, "./$.descriptors": 22, "./$.enum-keys": 23, "./$.export": 24, "./$.fails": 25, "./$.get-names": 26, "./$.global": 27, "./$.has": 28, "./$.is-array": 31, "./$.keyof": 34, "./$.library": 35, "./$.property-desc": 37, "./$.redefine": 38, "./$.set-to-string-tag": 40, "./$.shared": 41, "./$.to-iobject": 42, "./$.uid": 44, "./$.wks": 45 }], 50: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require('babel-runtime/helpers/createClass');

      var _createClass3 = _interopRequireDefault(_createClass2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

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

      /**
      * @author micaelpedrosa@gmail.com
      * Minimal interface and implementation to send and receive messages. It can be reused in many type of components.
      * Components that need a message system should receive this class as a dependency or extend it.
      * Extensions should implement the following private methods: _onPostMessage and _registerExternalListener
      */

      var Bus = function () {
        /* private
        _msgId: number;
        _subscriptions: <url: MsgListener[]>
         _responseTimeOut: number
        _responseCallbacks: <url+id: (msg) => void>
         */

        function Bus() {
          (0, _classCallCheck3.default)(this, Bus);

          var _this = this;
          _this._msgId = 0;
          _this._subscriptions = {};

          _this._responseTimeOut = 5000; //default to 3s
          _this._responseCallbacks = {};

          _this._registerExternalListener();
        }

        /**
        * Register listener to receive message when "msg.to === url".
        * Special url "*" for default listener is accepted to intercept all messages.
        * @param {URL} url Address to intercept, tha is in the message "to"
        * @param {Listener} listener listener
        * @return {MsgListener} instance of MsgListener
        */

        (0, _createClass3.default)(Bus, [{
          key: 'addListener',
          value: function addListener(url, listener) {
            var _this = this;

            var item = new MsgListener(_this._subscriptions, url, listener);
            var itemList = _this._subscriptions[url];
            if (!itemList) {
              itemList = [];
              _this._subscriptions[url] = itemList;
            }

            itemList.push(item);
            return item;
          }

          /**
           * Manually add a response listener. Only one listener per message ID should exist.
           * ATENTION, there is no timeout for this listener.
           * The listener should be removed with a removeResponseListener, failing to do this will result in a unreleased memory problem.
           * @param {URL} url Origin address of the message sent, "msg.from".
           * @param {number} msgId Message ID that is returned from the postMessage.
           * @param {Function} responseListener Callback function for the response
           */

        }, {
          key: 'addResponseListener',
          value: function addResponseListener(url, msgId, responseListener) {
            this._responseCallbacks[url + msgId] = responseListener;
          }

          /**
           * Remove the response listener.
           * @param {URL} url Origin address of the message sent, "msg.from".
           * @param {number} msgId  Message ID that is returned from the postMessage
           */

        }, {
          key: 'removeResponseListener',
          value: function removeResponseListener(url, msgId) {
            delete this._responseCallbacks[url + msgId];
          }

          /**
           * Remove all existent listeners for the URL
           * @param  {URL} url Address registered
           */

        }, {
          key: 'removeAllListenersOf',
          value: function removeAllListenersOf(url) {
            delete this._subscriptions[url];
          }

          /**
           * Helper method to bind listeners (in both directions) into other MiniBus target.
           * @param  {URL} outUrl Outbound URL, register listener for url in direction "this -> target"
           * @param  {URL} inUrl Inbound URL, register listener for url in direction "target -> this"
           * @param  {MiniBus} target The other target MiniBus
           * @return {Bound} an object that contains the properties [thisListener, targetListener] and the unbind method.
           */

        }, {
          key: 'bind',
          value: function bind(outUrl, inUrl, target) {
            var _this2 = this;

            var _this = this;

            var thisListn = _this.addListener(outUrl, function (msg) {
              target.postMessage(msg);
            });

            var targetListn = target.addListener(inUrl, function (msg) {
              _this.postMessage(msg);
            });

            return {
              thisListener: thisListn,
              targetListener: targetListn,
              unbind: function unbind() {
                _this2.thisListener.remove();
                _this2.targetListener.remove();
              }
            };
          }

          //publish on default listeners

        }, {
          key: '_publishOnDefault',
          value: function _publishOnDefault(msg) {
            //is there any "*" (default) listeners?
            var itemList = this._subscriptions['*'];
            if (itemList) {
              this._publishOn(itemList, msg);
            }
          }

          //publish on a subscription list.

        }, {
          key: '_publishOn',
          value: function _publishOn(itemList, msg) {
            itemList.forEach(function (sub) {
              sub._callback(msg);
            });
          }
        }, {
          key: '_responseCallback',
          value: function _responseCallback(inMsg, responseCallback) {
            var _this = this;

            //automatic management of response handlers
            if (responseCallback) {
              (function () {
                var responseId = inMsg.from + inMsg.id;
                _this._responseCallbacks[responseId] = responseCallback;

                setTimeout(function () {
                  var responseFun = _this._responseCallbacks[responseId];
                  delete _this._responseCallbacks[responseId];

                  if (responseFun) {
                    var errorMsg = {
                      id: inMsg.id, type: 'response',
                      body: { code: 408, desc: 'Response timeout!', value: inMsg }
                    };

                    responseFun(errorMsg);
                  }
                }, _this._responseTimeOut);
              })();
            }
          }
        }, {
          key: '_onResponse',
          value: function _onResponse(msg) {
            var _this = this;

            if (msg.type === 'response') {
              var responseId = msg.to + msg.id;
              var responseFun = _this._responseCallbacks[responseId];

              //if it's a provisional response, don't delete response listener
              if (msg.body.code >= 200) {
                delete _this._responseCallbacks[responseId];
              }

              if (responseFun) {
                responseFun(msg);
                return true;
              }
            }

            return false;
          }

          //receive messages from external interface

        }, {
          key: '_onMessage',
          value: function _onMessage(msg) {
            var _this = this;

            if (!_this._onResponse(msg)) {
              var itemList = _this._subscriptions[msg.to];
              if (itemList) {
                _this._publishOn(itemList, msg);
              } else {
                _this._publishOnDefault(msg);
              }
            }
          }
        }, {
          key: '_genId',
          value: function _genId(inMsg) {
            //TODO: how do we manage message ID's? Should it be a global runtime counter, or per URL address?
            //Global counter will not work, because there will be multiple MiniBus instances!
            //Per URL, can be a lot of data to maintain!
            //Maybe a counter per MiniBus instance. This is the assumed solution for now.
            if (!inMsg.id || inMsg.id === 0) {
              this._msgId++;
              inMsg.id = this._msgId;
            }
          }

          /**
          * Send messages to local listeners, or if not exists to external listeners.
          * It's has an optional mechanism for automatic management of response handlers.
          * The response handler will be unregistered after receiving the response, or after response timeout (default to 3s).
          * @param  {Message} msg Message to send. Message ID is automatically added to the message.
          * @param  {Function} responseCallback Optional parameter, if the developer what's automatic response management.
          * @return {number} Returns the message ID, in case it should be needed for manual management of the response handler.
          */

        }, {
          key: 'postMessage',
          value: function postMessage(inMsg, responseCallback) {}

          /**
           * Not public available, used by the class extension implementation, to process messages from the public "postMessage" without a registered listener.
           * Used to send the message to an external interface, like a WebWorker, IFrame, etc.
           * @param  {Message.Message} msg Message
           */

        }, {
          key: '_onPostMessage',
          value: function _onPostMessage(msg) {} /*implementation will send message to external system*/

          /**
           * Not public available, used by the class extension implementation, to process all messages that enter the MiniBus from an external interface, like a WebWorker, IFrame, etc.
           * This method is called one time in the constructor to register external listeners.
           * The implementation will probably call the "_onMessage" method to publish in the local listeners.
           * DO NOT call "postMessage", there is a danger that the message enters in a cycle!
           */

        }, {
          key: '_registerExternalListener',
          value: function _registerExternalListener() {/*implementation will register external listener and call "this._onMessage(msg)" */}
        }]);
        return Bus;
      }();

      var MsgListener = function () {
        /* private
        _subscriptions: <string: MsgListener[]>;
        _url: string;
        _callback: (msg) => void;
        */

        function MsgListener(subscriptions, url, callback) {
          (0, _classCallCheck3.default)(this, MsgListener);

          var _this = this;

          _this._subscriptions = subscriptions;
          _this._url = url;
          _this._callback = callback;
        }

        (0, _createClass3.default)(MsgListener, [{
          key: 'remove',

          /**
           * Remove this listener from the Bus
           */
          value: function remove() {
            var _this = this;

            var subs = _this._subscriptions[_this._url];
            if (subs) {
              var index = subs.indexOf(_this);
              subs.splice(index, 1);

              //if there are no listeners, remove the subscription entirely.
              if (subs.length === 0) {
                delete _this._subscriptions[_this._url];
              }
            }
          }
        }, {
          key: 'url',
          get: function get() {
            return this._url;
          }
        }]);
        return MsgListener;
      }();

      exports.default = Bus;
      module.exports = exports['default'];
    }, { "babel-runtime/helpers/classCallCheck": 6, "babel-runtime/helpers/createClass": 7 }], 51: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

      var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

      var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require('babel-runtime/helpers/createClass');

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

      var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

      var _inherits2 = require('babel-runtime/helpers/inherits');

      var _inherits3 = _interopRequireDefault(_inherits2);

      var _Bus2 = require('./Bus');

      var _Bus3 = _interopRequireDefault(_Bus2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
      * @author micaelpedrosa@gmail.com
      * Message BUS Interface is an extension of the Bus
      * It is used mainly in the internal sandbox routing.
      */

      var MiniBus = function (_Bus) {
        (0, _inherits3.default)(MiniBus, _Bus);

        function MiniBus() {
          (0, _classCallCheck3.default)(this, MiniBus);
          return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MiniBus).call(this));
        }

        /**
         * Post a message for routing. Message is routed directly to the external routing _onPostMessage.
         * @param  {Message} inMsg            JSON with mandatory Message structure {id, type, from, to}
         * @param  {Callback} responseCallback Optional callback if a response is expected from the request. A response will be always sent, even if it is a "Timeout".
         * @return {number}                  the Message id
         */

        (0, _createClass3.default)(MiniBus, [{
          key: 'postMessage',
          value: function postMessage(inMsg, responseCallback) {
            var _this = this;

            _this._genId(inMsg);
            _this._responseCallback(inMsg, responseCallback);

            //always send to external (to core MessageBus)
            _this._onPostMessage(inMsg);

            return inMsg.id;
          }

          //internal method used when a message is received by an external routing system

        }, {
          key: '_onMessage',
          value: function _onMessage(msg) {
            var _this = this;

            if (!_this._onResponse(msg)) {
              var itemList = _this._subscriptions[msg.to];
              if (itemList) {
                _this._publishOn(itemList, msg);
                if (!msg.to.startsWith('hyperty')) {
                  _this._publishOnDefault(msg);
                }
              } else {
                _this._publishOnDefault(msg);
              }
            }
          }
        }]);
        return MiniBus;
      }(_Bus3.default); /**
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

      exports.default = MiniBus;
      module.exports = exports['default'];
    }, { "./Bus": 50, "babel-runtime/core-js/object/get-prototype-of": 3, "babel-runtime/helpers/classCallCheck": 6, "babel-runtime/helpers/createClass": 7, "babel-runtime/helpers/inherits": 8, "babel-runtime/helpers/possibleConstructorReturn": 9 }], 52: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _MiniBus = require('./bus/MiniBus');

      var _MiniBus2 = _interopRequireDefault(_MiniBus);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _MiniBus2.default; /**
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

      module.exports = exports['default'];
    }, { "./bus/MiniBus": 51 }] }, {}, [52])(52);
});