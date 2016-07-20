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
// Last build: Wed Jul 13 2016 18:18:42 GMT+0100 (WEST)

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
    }g.PolicyEngine = f();
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
      module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
    }, { "core-js/library/fn/object/define-property": 6 }], 2: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
    }, { "core-js/library/fn/symbol": 7 }], 3: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      exports.default = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
    }, {}], 4: [function (require, module, exports) {
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
    }, { "../core-js/object/define-property": 1 }], 5: [function (require, module, exports) {
      "use strict";

      var _Symbol = require("babel-runtime/core-js/symbol")["default"];

      exports["default"] = function (obj) {
        return obj && obj.constructor === _Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
      };

      exports.__esModule = true;
    }, { "babel-runtime/core-js/symbol": 2 }], 6: [function (require, module, exports) {
      var $ = require('../../modules/$');
      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
    }, { "../../modules/$": 25 }], 7: [function (require, module, exports) {
      require('../../modules/es6.symbol');
      require('../../modules/es6.object.to-string');
      module.exports = require('../../modules/$.core').Symbol;
    }, { "../../modules/$.core": 11, "../../modules/es6.object.to-string": 35, "../../modules/es6.symbol": 36 }], 8: [function (require, module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
    }, {}], 9: [function (require, module, exports) {
      var isObject = require('./$.is-object');
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
    }, { "./$.is-object": 24 }], 10: [function (require, module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
    }, {}], 11: [function (require, module, exports) {
      var core = module.exports = { version: '1.2.6' };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    }, {}], 12: [function (require, module, exports) {
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
    }, { "./$.a-function": 8 }], 13: [function (require, module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    }, {}], 14: [function (require, module, exports) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !require('./$.fails')(function () {
        return Object.defineProperty({}, 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });
    }, { "./$.fails": 17 }], 15: [function (require, module, exports) {
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
    }, { "./$": 25 }], 16: [function (require, module, exports) {
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
    }, { "./$.core": 11, "./$.ctx": 12, "./$.global": 19 }], 17: [function (require, module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }, {}], 18: [function (require, module, exports) {
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
    }, { "./$": 25, "./$.to-iobject": 32 }], 19: [function (require, module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    }, {}], 20: [function (require, module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
    }, {}], 21: [function (require, module, exports) {
      var $ = require('./$'),
          createDesc = require('./$.property-desc');
      module.exports = require('./$.descriptors') ? function (object, key, value) {
        return $.setDesc(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    }, { "./$": 25, "./$.descriptors": 14, "./$.property-desc": 28 }], 22: [function (require, module, exports) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = require('./$.cof');
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
    }, { "./$.cof": 10 }], 23: [function (require, module, exports) {
      // 7.2.2 IsArray(argument)
      var cof = require('./$.cof');
      module.exports = Array.isArray || function (arg) {
        return cof(arg) == 'Array';
      };
    }, { "./$.cof": 10 }], 24: [function (require, module, exports) {
      module.exports = function (it) {
        return (typeof it === "undefined" ? "undefined" : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
      };
    }, {}], 25: [function (require, module, exports) {
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
    }, {}], 26: [function (require, module, exports) {
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
    }, { "./$": 25, "./$.to-iobject": 32 }], 27: [function (require, module, exports) {
      module.exports = true;
    }, {}], 28: [function (require, module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
    }, {}], 29: [function (require, module, exports) {
      module.exports = require('./$.hide');
    }, { "./$.hide": 21 }], 30: [function (require, module, exports) {
      var def = require('./$').setDesc,
          has = require('./$.has'),
          TAG = require('./$.wks')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
      };
    }, { "./$": 25, "./$.has": 20, "./$.wks": 34 }], 31: [function (require, module, exports) {
      var global = require('./$.global'),
          SHARED = '__core-js_shared__',
          store = global[SHARED] || (global[SHARED] = {});
      module.exports = function (key) {
        return store[key] || (store[key] = {});
      };
    }, { "./$.global": 19 }], 32: [function (require, module, exports) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = require('./$.iobject'),
          defined = require('./$.defined');
      module.exports = function (it) {
        return IObject(defined(it));
      };
    }, { "./$.defined": 13, "./$.iobject": 22 }], 33: [function (require, module, exports) {
      var id = 0,
          px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
    }, {}], 34: [function (require, module, exports) {
      var store = require('./$.shared')('wks'),
          uid = require('./$.uid'),
          _Symbol2 = require('./$.global').Symbol;
      module.exports = function (name) {
        return store[name] || (store[name] = _Symbol2 && _Symbol2[name] || (_Symbol2 || uid)('Symbol.' + name));
      };
    }, { "./$.global": 19, "./$.shared": 31, "./$.uid": 33 }], 35: [function (require, module, exports) {}, {}], 36: [function (require, module, exports) {
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
    }, { "./$": 25, "./$.an-object": 9, "./$.descriptors": 14, "./$.enum-keys": 15, "./$.export": 16, "./$.fails": 17, "./$.get-names": 18, "./$.global": 19, "./$.has": 20, "./$.is-array": 23, "./$.keyof": 26, "./$.library": 27, "./$.property-desc": 28, "./$.redefine": 29, "./$.set-to-string-tag": 30, "./$.shared": 31, "./$.to-iobject": 32, "./$.uid": 33, "./$.wks": 34 }], 37: [function (require, module, exports) {
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

      var Operators = function () {
        function Operators() {
          (0, _classCallCheck3.default)(this, Operators);

          var _this = this;
          _this.operators = _this.setOperators();
        }

        (0, _createClass3.default)(Operators, [{
          key: 'setOperators',
          value: function setOperators() {
            var _this = this;
            var operators = {
              between: function between(params) {
                return _this.isBetween(params[0][0], params[0][1], params[1]);
              },
              in: function _in(params) {
                return params[0].indexOf(params[1]) > -1;
              },
              equals: function equals(params) {
                return params[0][0] === '*' || params[0][0] === params[1];
              },

              or: function or(params) {
                return params[0] || params[1];
              },
              and: function and(params) {
                return params[0] && params[1];
              },
              not: function not(params) {
                return !params[0];
              }
            };
            return operators;
          }

          /**
          * Verifies if the current time is between the given start and end times.
          * @param {Number}     start
          * @param {Number}     end
          * @return {Boolean}   boolean
          */

        }, {
          key: 'isBetween',
          value: function isBetween(start, end, now) {
            start = parseInt(start);
            end = parseInt(end);

            if (end < start) {
              now = now < start ? now += 2400 : now;
              end += 2400;
            }

            return now > start && now < end;
          }
        }]);
        return Operators;
      }();

      exports.default = Operators;
      module.exports = exports['default'];
    }, { "babel-runtime/helpers/classCallCheck": 3, "babel-runtime/helpers/createClass": 4 }], 38: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof2 = require('babel-runtime/helpers/typeof');

      var _typeof3 = _interopRequireDefault(_typeof2);

      var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require('babel-runtime/helpers/createClass');

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _Operators = require('./Operators');

      var _Operators2 = _interopRequireDefault(_Operators);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
      * The Policy Decision Point (PDP) decides if a message is to be authorised by checking a set of
      * policies. The resource to be verified is specified in the first word of the 'condition' field of
      * a Policy object. The implementation that verifies if the message is compliant with a policy is
      * specified in a hashtable to allow dynamic definition of the implementation, providing
      * extensibility to the Policy Engine functionalities.
      */

      var PDP = function () {

        /**
        * This method is invoked by the Policy Engine and instantiates the Policy Decision Point. It
        * initialises or loads from the Persistence Manager the object 'myGroups' to store the user's
        * groups.
        * @param  {Registry}    muchruntimeRegistry
        */

        function PDP(context) {
          (0, _classCallCheck3.default)(this, PDP);

          var _this = this;
          _this.context = context;
          _this.operators = new _Operators2.default(context);
        }

        /**
        * Verifies if the given message is compliant with the given policies. If one of the policies
        * evaluates to 'false', then the message is not authorised. Returns the final authorisation
        * decision and a set of actions that policies may require.
        * @param {Message}  message
        * @param {URL}      hypertyToVerify
        * @param {Array}    policies
        * @return {Array}   [authDecision, actions]
        */

        (0, _createClass3.default)(PDP, [{
          key: 'evaluate',
          value: function evaluate(message, policies) {
            var _this = this;
            var results = [true];
            var actions = [];
            for (var i in policies) {
              var policy = policies[i];
              var condition = policy.condition;
              var verifiesCondition = false;
              if ((typeof condition === 'undefined' ? 'undefined' : (0, _typeof3.default)(condition)) === 'object') {
                verifiesCondition = _this.verifiesAdvancedCondition(condition[0], condition[1], condition[2], policy.scope, message);
              } else {
                verifiesCondition = _this.verifiesSimpleCondition(condition, policy.scope, message);
              }

              if (verifiesCondition) {
                results.push(policy.authorise);
              }
              if (policy.actions !== []) {
                for (var _i in policy.actions) {
                  var newAction = {
                    method: policy.actions[_i].method,
                    params: message
                  };
                  actions.push(newAction);
                }
              }
            }

            var authDecision = results.indexOf(false) === -1;
            return [authDecision, actions];
          }
        }, {
          key: 'verifiesSimpleCondition',
          value: function verifiesSimpleCondition(condition, scope, message) {
            var _this = this;
            var splitCondition = condition.split(' ');
            var variable = splitCondition[0];
            var operator = splitCondition[1];

            var params = void 0;
            if (operator === 'in') {
              _this.context.group = { scope: scope, group: splitCondition[2], destination: message.to };
              params = _this.context.group;
            } else {
              params = splitCondition.slice(2);
            }
            _this.context[variable] = { message: message };
            var value = _this.context[variable];
            return _this.operators.operators[operator]([params, value]);
          }
        }, {
          key: 'verifiesAdvancedCondition',
          value: function verifiesAdvancedCondition(operator, left, right, scope, message) {
            var _this = this;
            while ((typeof left === 'undefined' ? 'undefined' : (0, _typeof3.default)(left)) === 'object') {
              left = _this.verifiesAdvancedCondition(left[0], left[1], left[2], scope, message);
            }
            if (right !== undefined) {
              while ((typeof right === 'undefined' ? 'undefined' : (0, _typeof3.default)(right)) === 'object') {
                right = _this.verifiesAdvancedCondition(right[0], right[1], right[2], scope, message);
              }
            }

            var resultLeft = typeof left === 'boolean' ? left : _this.verifiesSimpleCondition(left, scope, message);

            var resultRight = void 0;
            if (right !== undefined) {
              resultRight = typeof right === 'boolean' ? right : _this.verifiesSimpleCondition(right, scope, message);
            }

            return _this.operators.operators[operator]([resultLeft, resultRight]);
          }
        }]);
        return PDP;
      }();

      exports.default = PDP;
      module.exports = exports['default'];
    }, { "./Operators": 37, "babel-runtime/helpers/classCallCheck": 3, "babel-runtime/helpers/createClass": 4, "babel-runtime/helpers/typeof": 5 }], 39: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var PEP = function () {
        function PEP(context) {
          (0, _classCallCheck3.default)(this, PEP);

          var _this = this;
          _this.context = context;
        }

        (0, _createClass3.default)(PEP, [{
          key: "enforce",
          value: function enforce(result) {
            var _this = this;
            var authDecision = result[0];
            var actions = result[1];

            for (var i in actions) {
              _this.context[actions[i].method](actions[i].params, authDecision);
            }
          }

          /*sendAutomaticMessage() {}
           forwardToID() {}
           forwardToHyperty() {}*/

        }]);
        return PEP;
      }();

      exports.default = PEP;
      module.exports = exports['default'];
    }, { "babel-runtime/helpers/classCallCheck": 3, "babel-runtime/helpers/createClass": 4 }], 40: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof2 = require('babel-runtime/helpers/typeof');

      var _typeof3 = _interopRequireDefault(_typeof2);

      var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require('babel-runtime/helpers/createClass');

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _PEP = require('./PEP');

      var _PEP2 = _interopRequireDefault(_PEP);

      var _PDP = require('./PDP');

      var _PDP2 = _interopRequireDefault(_PDP);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
      * The Policy Engine intercepts all the messages sent through the Message Bus and applies the
      * policies defined by the service provider and the user.
      */
      //jshint browser:true, jquery: true

      //import persistenceManager from 'service-framework/dist/PersistenceManager';

      var PolicyEngine = function () {

        /**
        * This method is invoked by the RuntimeUA and instantiates the Policy Engine. A Policy Decision
        * Point (PDP) and a Policy Enforcement Point (PEP) are initialised for the evaluation of policies
        * and the enforcement of additional actions, respectively.
        * @param  {IdentityModule}    identityModule
        * @param  {Registry}          runtimeRegistry
        */

        function PolicyEngine(context) {
          (0, _classCallCheck3.default)(this, PolicyEngine);

          var _this = this;
          _this.context = context;
          _this.context.pdp = new _PDP2.default(context);
          _this.context.pep = new _PEP2.default(context);
        }

        /**
        * Associates the given policies with a scope. The possible scopes are 'global', 'hyperty' and
        * 'user'.
        * @param  {Policy[]}  policies
        * @param  {String}    scope
        */

        (0, _createClass3.default)(PolicyEngine, [{
          key: 'addPolicies',
          value: function addPolicies(newPolicies) {
            var _this = this;

            var myPolicies = _this.context.policies;
            if (myPolicies === undefined) {
              myPolicies = {};
            }

            for (var i in newPolicies) {
              var newPolicy = newPolicies[i];
              var scope = newPolicy.scope;
              if (myPolicies[scope] === undefined) {
                myPolicies[scope] = [];
              }
              for (var j in myPolicies[scope]) {
                var existingPolicy = myPolicies[scope][j];
                if (existingPolicy.condition === newPolicy.condition) {
                  _this.removePolicies(newPolicies[i].condition);
                  break;
                }
              }
              myPolicies[scope].push(newPolicies[i]);
            }

            _this.context.policies = myPolicies;
          }

          /**
          * Removes the policy with the given ID from the given scope. If policyID is '*', removes all policies associated with the given scope.
          * @param  {String}  policyID
          * @param  {String}  scope
          */

        }, {
          key: 'removePolicies',
          value: function removePolicies(scope, condition) {
            var _this = this;
            var myPolicies = _this.context.policies;

            if (scope !== '*') {

              if (scope in myPolicies) {
                if (condition !== '*') {
                  var policies = myPolicies[scope];
                  var typeOfCondition = typeof condition === 'undefined' ? 'undefined' : (0, _typeof3.default)(condition);
                  for (var i in policies) {
                    var typeOfPolicyCondition = (0, _typeof3.default)(policies[i].condition);
                    if (typeOfCondition === typeOfPolicyCondition) {
                      if (typeOfCondition === 'string') {
                        if (policies[i].condition === condition) {
                          policies.splice(i, 1);
                          break;
                        }
                      } else {
                        //typeof condition = object (advanced policy)
                        if (_this.areEqualArrays(policies[i].condition, condition)) {
                          policies.splice(i, 1);
                        }
                      }
                    }
                  }
                } else {
                  delete myPolicies[scope];
                }

                _this.context.policies = myPolicies;
              }
            } else {
              _this.context.policies = {};
            }
          }
        }, {
          key: 'areEqualArrays',
          value: function areEqualArrays(array1, array2) {
            if (array1.length !== array2.length) {
              return false;
            }

            var numElements = array1.length;
            for (var i = 0; i < numElements; i++) {
              if (array1[i] instanceof Array && array2[i] instanceof Array) {
                if (!array1[i].equals(array2[i])) {
                  return false;
                }
              } else if (array1[i] !== array2[i]) {
                return false;
              }
            }
            return true;
          }

          /**
          * This method is executed when a message is intercepted in the Message Bus. The first step is the
          * assignment of the identity associated with the message. The second step is the evaluation of the
          * applicable policies in order to obtain an authorisation decision: if a policy evaluates to
          * false, then the message is unauthorised. The third step is the enforcement of the actions that
          * policies may require. Finally, the message is stamped as authorised or not and is returned to
          * the Message Bus, where it will be forwarded or blocked.
          * @param  {Message}  message
          */

        }, {
          key: 'authorise',
          value: function authorise(message) {
            var _this = this;
            return _this.context.authorise(message);
          }
        }, {
          key: 'getGroupsNames',
          value: function getGroupsNames(scope) {
            var _this = this;
            var myGroups = _this.context.groups;
            var groupsNames = [];
            if (myGroups[scope] !== {}) {
              for (var groupName in myGroups[scope]) {
                groupsNames.push(groupName);
              }
            }
            return groupsNames;
          }

          /**
          * Retrieves the group with the given group name from the PDP.
          * @param  {String}  groupName
          * @return {Array}   group
          */

        }, {
          key: 'getList',
          value: function getList(scope, groupName) {
            var _this = this;
            var myGroups = _this.context.groups;
            var members = [];
            if (myGroups[scope] !== undefined && myGroups[scope][groupName] !== undefined) {
              members = myGroups[scope][groupName];
            }
            return members;
          }

          /**
          * Creates a group with the given name.
          * @param  {String}  groupName
          */

        }, {
          key: 'createList',
          value: function createList(scope, type, groupName) {
            var _this = this;

            var myGroups = _this.context.groups;
            if (myGroups[scope] === undefined) {
              myGroups[scope] = {};
            }
            myGroups[scope][groupName] = [];

            var policy = {
              authorise: false,
              condition: type + ' in ' + groupName,
              scope: scope,
              actions: []
            };
            _this.addPolicies([policy]);

            return myGroups;
          }
        }, {
          key: 'deleteGroup',
          value: function deleteGroup(scope, groupName) {
            var _this = this;

            var myGroups = _this.context.groups;
            delete myGroups[scope][groupName];

            var myPolicies = _this.context.policies;

            var policies = myPolicies[scope];
            for (var i in policies) {
              var condition = policies[i].condition.split(' ');
              condition.shift();
              var groupInPolicy = condition.join(' ');
              if (groupInPolicy === groupName) {
                delete policies[i];
                break;
              }
            }
          }

          /**
          * Adds the given user email to the group with the given name.
          * @param  {String}  userEmail
          * @param  {String}  groupName
          */

        }, {
          key: 'addToList',
          value: function addToList(scope, type, groupName, userEmail) {
            var _this = this;

            var myGroups = _this.context.groups;
            if (myGroups[scope] === undefined) {
              myGroups[scope] = {};
            }
            if (myGroups[scope][groupName] === undefined) {
              myGroups = _this.createList(scope, type, groupName);
            }
            if (myGroups[scope][groupName].indexOf(userEmail) === -1) {
              myGroups[scope][groupName].push(userEmail);
            }
          }

          /**
          * Removes the given user email from the group with the given name.
          * @param  {String}  userEmail
          * @param  {String}  groupName
          */

        }, {
          key: 'removeFromGroup',
          value: function removeFromGroup(scope, groupName, userEmail) {
            var _this = this;

            var myGroups = _this.context.groups;
            var group = myGroups[scope][groupName];

            for (var i in group) {
              if (group[i] === userEmail) {
                group.splice(i, 1);
                break;
              }
            }
          }
        }, {
          key: 'getTimeslots',
          value: function getTimeslots() {
            var _this = this;
            var policies = _this.context.policies.user;
            var timeRestrictions = [];
            for (var i in policies) {
              if (policies[i].condition.split(' ')[0] === 'time') {
                timeRestrictions.push(policies[i].condition);
              }
            }
            return timeRestrictions;
          }
        }, {
          key: 'getTimeslotById',
          value: function getTimeslotById(condition) {
            var _this = this;
            var policies = _this.context.policies.user;
            for (var i in policies) {
              if (policies[i].condition === condition) {
                return policies[i];
              }
            }
          }
        }]);
        return PolicyEngine;
      }();

      exports.default = PolicyEngine;
      module.exports = exports['default'];
    }, { "./PDP": 38, "./PEP": 39, "babel-runtime/helpers/classCallCheck": 3, "babel-runtime/helpers/createClass": 4, "babel-runtime/helpers/typeof": 5 }] }, {}, [40])(40);
});