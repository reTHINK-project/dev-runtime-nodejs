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
// Last build: Wed Jul 13 2016 18:18:44 GMT+0100 (WEST)

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
    }g.MessageNodeCtx = f();
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
      module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
    }, { "core-js/library/fn/json/stringify": 13 }], 2: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
    }, { "core-js/library/fn/object/create": 14 }], 3: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
    }, { "core-js/library/fn/object/define-property": 15 }], 4: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
    }, { "core-js/library/fn/object/get-prototype-of": 16 }], 5: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
    }, { "core-js/library/fn/object/keys": 17 }], 6: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
    }, { "core-js/library/fn/object/set-prototype-of": 18 }], 7: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
    }, { "core-js/library/fn/symbol": 19 }], 8: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      exports.default = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
    }, {}], 9: [function (require, module, exports) {
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
    }, { "../core-js/object/define-property": 3 }], 10: [function (require, module, exports) {
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
    }, { "babel-runtime/core-js/object/create": 2, "babel-runtime/core-js/object/set-prototype-of": 6 }], 11: [function (require, module, exports) {
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
    }, { "../helpers/typeof": 12 }], 12: [function (require, module, exports) {
      "use strict";

      var _Symbol = require("babel-runtime/core-js/symbol")["default"];

      exports["default"] = function (obj) {
        return obj && obj.constructor === _Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
      };

      exports.__esModule = true;
    }, { "babel-runtime/core-js/symbol": 7 }], 13: [function (require, module, exports) {
      var core = require('../../modules/$.core');
      module.exports = function stringify(it) {
        // eslint-disable-line no-unused-vars
        return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
      };
    }, { "../../modules/$.core": 23 }], 14: [function (require, module, exports) {
      var $ = require('../../modules/$');
      module.exports = function create(P, D) {
        return $.create(P, D);
      };
    }, { "../../modules/$": 37 }], 15: [function (require, module, exports) {
      var $ = require('../../modules/$');
      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
    }, { "../../modules/$": 37 }], 16: [function (require, module, exports) {
      require('../../modules/es6.object.get-prototype-of');
      module.exports = require('../../modules/$.core').Object.getPrototypeOf;
    }, { "../../modules/$.core": 23, "../../modules/es6.object.get-prototype-of": 50 }], 17: [function (require, module, exports) {
      require('../../modules/es6.object.keys');
      module.exports = require('../../modules/$.core').Object.keys;
    }, { "../../modules/$.core": 23, "../../modules/es6.object.keys": 51 }], 18: [function (require, module, exports) {
      require('../../modules/es6.object.set-prototype-of');
      module.exports = require('../../modules/$.core').Object.setPrototypeOf;
    }, { "../../modules/$.core": 23, "../../modules/es6.object.set-prototype-of": 52 }], 19: [function (require, module, exports) {
      require('../../modules/es6.symbol');
      require('../../modules/es6.object.to-string');
      module.exports = require('../../modules/$.core').Symbol;
    }, { "../../modules/$.core": 23, "../../modules/es6.object.to-string": 53, "../../modules/es6.symbol": 54 }], 20: [function (require, module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
    }, {}], 21: [function (require, module, exports) {
      var isObject = require('./$.is-object');
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
    }, { "./$.is-object": 36 }], 22: [function (require, module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
    }, {}], 23: [function (require, module, exports) {
      var core = module.exports = { version: '1.2.6' };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    }, {}], 24: [function (require, module, exports) {
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
    }, { "./$.a-function": 20 }], 25: [function (require, module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    }, {}], 26: [function (require, module, exports) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !require('./$.fails')(function () {
        return Object.defineProperty({}, 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });
    }, { "./$.fails": 29 }], 27: [function (require, module, exports) {
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
    }, { "./$": 37 }], 28: [function (require, module, exports) {
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
    }, { "./$.core": 23, "./$.ctx": 24, "./$.global": 31 }], 29: [function (require, module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }, {}], 30: [function (require, module, exports) {
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
    }, { "./$": 37, "./$.to-iobject": 46 }], 31: [function (require, module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    }, {}], 32: [function (require, module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
    }, {}], 33: [function (require, module, exports) {
      var $ = require('./$'),
          createDesc = require('./$.property-desc');
      module.exports = require('./$.descriptors') ? function (object, key, value) {
        return $.setDesc(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    }, { "./$": 37, "./$.descriptors": 26, "./$.property-desc": 41 }], 34: [function (require, module, exports) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = require('./$.cof');
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
    }, { "./$.cof": 22 }], 35: [function (require, module, exports) {
      // 7.2.2 IsArray(argument)
      var cof = require('./$.cof');
      module.exports = Array.isArray || function (arg) {
        return cof(arg) == 'Array';
      };
    }, { "./$.cof": 22 }], 36: [function (require, module, exports) {
      module.exports = function (it) {
        return (typeof it === "undefined" ? "undefined" : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
      };
    }, {}], 37: [function (require, module, exports) {
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
    }, {}], 38: [function (require, module, exports) {
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
    }, { "./$": 37, "./$.to-iobject": 46 }], 39: [function (require, module, exports) {
      module.exports = true;
    }, {}], 40: [function (require, module, exports) {
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
    }, { "./$.core": 23, "./$.export": 28, "./$.fails": 29 }], 41: [function (require, module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
    }, {}], 42: [function (require, module, exports) {
      module.exports = require('./$.hide');
    }, { "./$.hide": 33 }], 43: [function (require, module, exports) {
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
    }, { "./$": 37, "./$.an-object": 21, "./$.ctx": 24, "./$.is-object": 36 }], 44: [function (require, module, exports) {
      var def = require('./$').setDesc,
          has = require('./$.has'),
          TAG = require('./$.wks')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
      };
    }, { "./$": 37, "./$.has": 32, "./$.wks": 49 }], 45: [function (require, module, exports) {
      var global = require('./$.global'),
          SHARED = '__core-js_shared__',
          store = global[SHARED] || (global[SHARED] = {});
      module.exports = function (key) {
        return store[key] || (store[key] = {});
      };
    }, { "./$.global": 31 }], 46: [function (require, module, exports) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = require('./$.iobject'),
          defined = require('./$.defined');
      module.exports = function (it) {
        return IObject(defined(it));
      };
    }, { "./$.defined": 25, "./$.iobject": 34 }], 47: [function (require, module, exports) {
      // 7.1.13 ToObject(argument)
      var defined = require('./$.defined');
      module.exports = function (it) {
        return Object(defined(it));
      };
    }, { "./$.defined": 25 }], 48: [function (require, module, exports) {
      var id = 0,
          px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
    }, {}], 49: [function (require, module, exports) {
      var store = require('./$.shared')('wks'),
          uid = require('./$.uid'),
          _Symbol2 = require('./$.global').Symbol;
      module.exports = function (name) {
        return store[name] || (store[name] = _Symbol2 && _Symbol2[name] || (_Symbol2 || uid)('Symbol.' + name));
      };
    }, { "./$.global": 31, "./$.shared": 45, "./$.uid": 48 }], 50: [function (require, module, exports) {
      // 19.1.2.9 Object.getPrototypeOf(O)
      var toObject = require('./$.to-object');

      require('./$.object-sap')('getPrototypeOf', function ($getPrototypeOf) {
        return function getPrototypeOf(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    }, { "./$.object-sap": 40, "./$.to-object": 47 }], 51: [function (require, module, exports) {
      // 19.1.2.14 Object.keys(O)
      var toObject = require('./$.to-object');

      require('./$.object-sap')('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
    }, { "./$.object-sap": 40, "./$.to-object": 47 }], 52: [function (require, module, exports) {
      // 19.1.3.19 Object.setPrototypeOf(O, proto)
      var $export = require('./$.export');
      $export($export.S, 'Object', { setPrototypeOf: require('./$.set-proto').set });
    }, { "./$.export": 28, "./$.set-proto": 43 }], 53: [function (require, module, exports) {}, {}], 54: [function (require, module, exports) {
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
    }, { "./$": 37, "./$.an-object": 21, "./$.descriptors": 26, "./$.enum-keys": 27, "./$.export": 28, "./$.fails": 29, "./$.get-names": 30, "./$.global": 31, "./$.has": 32, "./$.is-array": 35, "./$.keyof": 38, "./$.library": 39, "./$.property-desc": 41, "./$.redefine": 42, "./$.set-to-string-tag": 44, "./$.shared": 45, "./$.to-iobject": 46, "./$.uid": 48, "./$.wks": 49 }], 55: [function (require, module, exports) {
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

      var Context = function () {
        function Context() {
          (0, _classCallCheck3.default)(this, Context);

          if (this.constructor === Context) {
            throw new TypeError('Can not construct abstract class.');
          }
          if (this.constructor === Context.prototype.constructor) {
            throw new TypeError('Please implement abstract method constructor.');
          }
        }

        (0, _createClass3.default)(Context, null, [{
          key: 'loadPolicies',
          value: function loadPolicies() {
            if (this === Context) {
              throw new TypeError('Can not call static abstract method loadPolicies.');
            } else if (this.loadPolicies === Context.loadPolicies) {
              throw new TypeError('Please implement static abstract method loadPolicies.');
            } else {
              throw new TypeError('Do not call static abstract method loadPolicies from child.');
            }
          }
        }, {
          key: 'addSubscriptionPolicy',
          value: function addSubscriptionPolicy() {
            if (this === Context) {
              throw new TypeError('Can not call static abstract method addSubscriptionPolicy.');
            } else if (this.addSubscriptionPolicy === Context.addSubscriptionPolicy) {
              throw new TypeError('Please implement static abstract method addSubscriptionPolicy.');
            } else {
              throw new TypeError('Do not call static abstract method addSubscriptionPolicy from child.');
            }
          }
        }, {
          key: 'isToVerify',
          value: function isToVerify() {
            if (this === Context) {
              throw new TypeError('Can not call static abstract method isToVerify.');
            } else if (this.isToVerify === Context.isToVerify) {
              throw new TypeError('Please implement static abstract method isToVerify.');
            } else {
              throw new TypeError('Do not call static abstract method isToVerify from child.');
            }
          }
        }, {
          key: 'getApplicablePolicies',
          value: function getApplicablePolicies() {
            if (this === Context) {
              throw new TypeError('Can not call static abstract method getApplicablePolicies.');
            } else if (this.getApplicablePolicies === Context.getApplicablePolicies) {
              throw new TypeError('Please implement static abstract method getApplicablePolicies.');
            } else {
              throw new TypeError('Do not call static abstract method getApplicablePolicies from child.');
            }
          }
        }, {
          key: 'applyPolicies',
          value: function applyPolicies() {
            if (this === Context) {
              throw new TypeError('Can not call static abstract method applyPolicies.');
            } else if (this.applyPolicies === Context.applyPolicies) {
              throw new TypeError('Please implement static abstract method applyPolicies.');
            } else {
              throw new TypeError('Do not call static abstract method applyPolicies from child.');
            }
          }
        }, {
          key: 'authorise',
          value: function authorise() {
            if (this === Context) {
              throw new TypeError('Can not call static abstract method authorise.');
            } else if (this.authorise === Context.authorise) {
              throw new TypeError('Please implement static abstract method authorise.');
            } else {
              throw new TypeError('Do not call static abstract method authorise from child.');
            }
          }
        }]);
        return Context;
      }();

      exports.default = Context;
      module.exports = exports['default'];
    }, { "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9 }], 56: [function (require, module, exports) {
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

      var _Context2 = require('../Context');

      var _Context3 = _interopRequireDefault(_Context2);

      var _utils = require('../../utils/utils');

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      //import persistenceManager from '../../persistence/PersistenceManager';

      var CommonCtx = function (_Context) {
        (0, _inherits3.default)(CommonCtx, _Context);

        function CommonCtx() {
          (0, _classCallCheck3.default)(this, CommonCtx);

          var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CommonCtx).call(this));

          var _this = _this2;
          _this.policies = _this.loadPolicies();
          _this.groups = {};
          return _this2;
        }

        (0, _createClass3.default)(CommonCtx, [{
          key: 'applyPolicies',
          value: function applyPolicies(message) {
            var _this = this;
            var policiesResult = [true, []];
            var applicablePolicies = _this.getApplicablePolicies(message);
            policiesResult = _this.pdp.evaluate(message, applicablePolicies);
            message.body.auth = applicablePolicies.length !== 0;
            _this.pep.enforce(policiesResult);
            return { message: message, policiesResult: policiesResult };
          }
        }, {
          key: '_getDate',
          value: function _getDate() {
            var date = new Date();
            var day = String(date.getDate());
            if (day.length === 1) {
              day = '0' + day;
            }

            var month = String(date.getMonth() + 1);
            if (month.length === 1) {
              month = '0' + month;
            }

            return day + '/' + month + '/' + date.getFullYear();
          }
        }, {
          key: '_getList',
          value: function _getList(scope, groupName) {
            var _this = this;
            var myGroups = _this.groups;
            var members = [];
            if (myGroups[scope] !== undefined && myGroups[scope][groupName] !== undefined) {
              members = myGroups[scope][groupName];
            }
            return members;
          }
        }, {
          key: '_getTime',
          value: function _getTime() {
            var now = new Date();
            var minutes = String(now.getMinutes());
            if (minutes.length === 1) {
              minutes = '0' + minutes;
            }
            return parseInt(String(now.getHours()) + minutes);
          }
        }, {
          key: '_getWeekDay',
          value: function _getWeekDay() {
            return String(new Date().getDay());
          }
        }, {
          key: 'date',
          set: function set(now) {
            var _this = this;
            if (!now.message) {
              _this._dateAttribute = typeof now === 'string' ? now : _this._getDate();
            }
          },
          get: function get() {
            var _this = this;
            return _this._dateAttribute;
          }
        }, {
          key: 'domain',
          set: function set(params) {
            var _this = this;
            _this._domainAttribute = (0, _utils.divideEmail)(params.message.body.identity.userProfile.username).domain;
          },
          get: function get() {
            var _this = this;
            return _this._domainAttribute;
          }
        }, {
          key: 'source',
          set: function set(params) {
            var _this = this;
            _this._sourceAttribute = params.message.body.identity.userProfile.username;
          },
          get: function get() {
            var _this = this;
            return _this._sourceAttribute;
          }
        }, {
          key: 'time',
          set: function set(now) {
            var _this = this;
            if (!now.message) {
              _this._timeAttribute = now ? now : _this._getTime();
            }
          },
          get: function get() {
            var _this = this;
            return _this._timeAttribute;
          }
        }, {
          key: 'weekday',
          set: function set(now) {
            var _this = this;
            if (!now.message) {
              _this._weekdayAttribute = now ? now : _this._getWeekDay();
            }
          },
          get: function get() {
            var _this = this;
            return _this._weekdayAttribute;
          }
        }]);
        return CommonCtx;
      }(_Context3.default);

      exports.default = CommonCtx;
      module.exports = exports['default'];
    }, { "../../utils/utils": 58, "../Context": 55, "babel-runtime/core-js/object/get-prototype-of": 4, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9, "babel-runtime/helpers/inherits": 10, "babel-runtime/helpers/possibleConstructorReturn": 11 }], 57: [function (require, module, exports) {
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

      var _CommonCtx2 = require('./CommonCtx');

      var _CommonCtx3 = _interopRequireDefault(_CommonCtx2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var MessageNodeCtx = function (_CommonCtx) {
        (0, _inherits3.default)(MessageNodeCtx, _CommonCtx);

        function MessageNodeCtx() {
          (0, _classCallCheck3.default)(this, MessageNodeCtx);
          return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MessageNodeCtx).call(this));
        }

        (0, _createClass3.default)(MessageNodeCtx, [{
          key: 'loadPolicies',
          value: function loadPolicies() {
            return {};
          }

          /**
          * Returns the policies associated with a scope.
          * @param   {String} scope
          * @return  {Array}  policies
          */

          //TODO: can policies depend on the hyperty name? Domain Registry interaction

        }, {
          key: 'getApplicablePolicies',
          value: function getApplicablePolicies() {
            var _this = this;
            var myPolicies = _this.policies;
            var policies = [];

            for (var i in myPolicies) {
              policies.push.apply(policies, myPolicies[i]);
            }

            return policies;
          }
        }, {
          key: 'authorise',
          value: function authorise(message) {
            var _this = this;
            message.body = message.body || {};
            var result = void 0;

            var isToVerify = _this.isToVerify(message);
            if (isToVerify) {

              result = _this.applyPolicies(message);
              var messageAccepted = result.policiesResult[0];
              return messageAccepted;
            } else {
              return true;
            }
          }

          //TODO: verify if scheme is not 'runtime', 'hyperty-runtime' or 'domain'

        }, {
          key: 'isToVerify',
          value: function isToVerify() {
            return true;
          }
        }, {
          key: 'group',
          set: function set(params) {
            var _this = this;
            _this.groupAttribute = _this._getList(params.scope, params.group);
          },
          get: function get() {
            var _this = this;
            return _this.groupAttribute;
          }
        }]);
        return MessageNodeCtx;
      }(_CommonCtx3.default);

      exports.default = MessageNodeCtx;
      module.exports = exports['default'];
    }, { "./CommonCtx": 56, "babel-runtime/core-js/object/get-prototype-of": 4, "babel-runtime/helpers/classCallCheck": 8, "babel-runtime/helpers/createClass": 9, "babel-runtime/helpers/inherits": 10, "babel-runtime/helpers/possibleConstructorReturn": 11 }], 58: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _stringify = require('babel-runtime/core-js/json/stringify');

      var _stringify2 = _interopRequireDefault(_stringify);

      var _keys = require('babel-runtime/core-js/object/keys');

      var _keys2 = _interopRequireDefault(_keys);

      exports.divideURL = divideURL;
      exports.divideEmail = divideEmail;
      exports.emptyObject = emptyObject;
      exports.deepClone = deepClone;
      exports.getUserURLFromEmail = getUserURLFromEmail;
      exports.getUserEmailFromURL = getUserEmailFromURL;
      exports.convertToUserURL = convertToUserURL;
      exports.isDataObjectURL = isDataObjectURL;

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
       * Support module with some functions will be useful
       * @module utils
       */

      /**
       * @typedef divideURL
       * @type Object
       * @property {string} type The type of URL
       * @property {string} domain The domain of URL
       * @property {string} identity The identity of URL
       */

      /**
       * Divide an url in type, domain and identity
       * @param  {URL.URL} url - url address
       * @return {divideURL} the result of divideURL
       */
      function divideURL(url) {

        if (!url) throw Error('URL is needed to split');

        // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
        var re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
        var subst = '$1,$2,$3';
        var parts = url.replace(re, subst).split(',');

        // If the url has no protocol, the default protocol set is https
        if (parts[0] === url) {
          parts[0] = 'https';
          parts[1] = url;
        }

        var result = {
          type: parts[0],
          domain: parts[1],
          identity: parts[2]
        };

        return result;
      }

      function divideEmail(email) {
        var indexOfAt = email.indexOf('@');

        var result = {
          username: email.substring(0, indexOfAt),
          domain: email.substring(indexOfAt + 1, email.length)
        };

        return result;
      }

      /**
       * Check if an Object is empty
       * @param  {Object} object Object to be checked
       * @return {Boolean}       status of Object, empty or not (true|false);
       */
      function emptyObject(object) {
        return (0, _keys2.default)(object).length > 0 ? false : true;
      }

      /**
       * Make a COPY of the original data
       * @param  {Object}  obj - object to be cloned
       * @return {Object}
       */
      function deepClone(obj) {
        //TODO: simple but inefficient JSON deep clone...
        if (obj) return JSON.parse((0, _stringify2.default)(obj));
      }

      /**
       * Obtains the user URL that corresponds to a given email
       * @param  {string} userEmail The user email
       * @return {URL.URL} userURL The user URL
       */
      function getUserURLFromEmail(userEmail) {
        var indexOfAt = userEmail.indexOf('@');
        return 'user://' + userEmail.substring(indexOfAt + 1, userEmail.length) + '/' + userEmail.substring(0, indexOfAt);
      }

      /**
       * Obtains the user email that corresponds to a given URL
       * @param  {URL.URL} userURL The user URL
       * @return {string} userEmail The user email
       */
      function getUserEmailFromURL(userURL) {
        var url = divideURL(userURL);
        return url.identity.replace('/', '') + '@' + url.domain; // identity field has '/exampleID' instead of 'exampleID'
      }

      /**
       * Check if the user identifier is already in the URL format, if not, convert to URL format
       * @param  {string}   identifier  user identifier
       * @return {string}   userURL    the user URL
       */
      function convertToUserURL(identifier) {

        // check if the identifier is already in the url format
        if (identifier.substring(0, 7) === 'user://') {
          var dividedURL = divideURL(identifier);

          //check if the url is well formated
          if (dividedURL.domain && dividedURL.identity) {
            return identifier;
          } else {
            throw 'userURL with wrong format';
          }

          //if not, convert the user email to URL format
        } else {
          return getUserURLFromEmail(identifier);
        }
      }

      function isDataObjectURL(url) {
        var schemasToIgnore = ['domain-idp', 'runtime', 'domain', 'hyperty'];
        var splitURL = url.split('://');
        var urlSchema = splitURL[0];

        return schemasToIgnore.indexOf(urlSchema) === -1;
      }
    }, { "babel-runtime/core-js/json/stringify": 1, "babel-runtime/core-js/object/keys": 5 }] }, {}, [57])(57);
});