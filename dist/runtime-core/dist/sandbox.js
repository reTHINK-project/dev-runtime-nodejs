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

// Distribution file for sandbox.js
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
    }g.sandbox = f();
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
    }, { "core-js/library/fn/object/create": 12 }], 2: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
    }, { "core-js/library/fn/object/define-property": 13 }], 3: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
    }, { "core-js/library/fn/object/get-prototype-of": 14 }], 4: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
    }, { "core-js/library/fn/object/set-prototype-of": 15 }], 5: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
    }, { "core-js/library/fn/promise": 16 }], 6: [function (require, module, exports) {
      module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
    }, { "core-js/library/fn/symbol": 17 }], 7: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      exports.default = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
    }, {}], 8: [function (require, module, exports) {
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
    }, { "../core-js/object/define-property": 2 }], 9: [function (require, module, exports) {
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
    }, { "babel-runtime/core-js/object/create": 1, "babel-runtime/core-js/object/set-prototype-of": 4 }], 10: [function (require, module, exports) {
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
    }, { "../helpers/typeof": 11 }], 11: [function (require, module, exports) {
      "use strict";

      var _Symbol = require("babel-runtime/core-js/symbol")["default"];

      exports["default"] = function (obj) {
        return obj && obj.constructor === _Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
      };

      exports.__esModule = true;
    }, { "babel-runtime/core-js/symbol": 6 }], 12: [function (require, module, exports) {
      var $ = require('../../modules/$');
      module.exports = function create(P, D) {
        return $.create(P, D);
      };
    }, { "../../modules/$": 48 }], 13: [function (require, module, exports) {
      var $ = require('../../modules/$');
      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
    }, { "../../modules/$": 48 }], 14: [function (require, module, exports) {
      require('../../modules/es6.object.get-prototype-of');
      module.exports = require('../../modules/$.core').Object.getPrototypeOf;
    }, { "../../modules/$.core": 23, "../../modules/es6.object.get-prototype-of": 73 }], 15: [function (require, module, exports) {
      require('../../modules/es6.object.set-prototype-of');
      module.exports = require('../../modules/$.core').Object.setPrototypeOf;
    }, { "../../modules/$.core": 23, "../../modules/es6.object.set-prototype-of": 74 }], 16: [function (require, module, exports) {
      require('../modules/es6.object.to-string');
      require('../modules/es6.string.iterator');
      require('../modules/web.dom.iterable');
      require('../modules/es6.promise');
      module.exports = require('../modules/$.core').Promise;
    }, { "../modules/$.core": 23, "../modules/es6.object.to-string": 75, "../modules/es6.promise": 76, "../modules/es6.string.iterator": 77, "../modules/web.dom.iterable": 79 }], 17: [function (require, module, exports) {
      require('../../modules/es6.symbol');
      require('../../modules/es6.object.to-string');
      module.exports = require('../../modules/$.core').Symbol;
    }, { "../../modules/$.core": 23, "../../modules/es6.object.to-string": 75, "../../modules/es6.symbol": 78 }], 18: [function (require, module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
    }, {}], 19: [function (require, module, exports) {
      module.exports = function () {/* empty */};
    }, {}], 20: [function (require, module, exports) {
      var isObject = require('./$.is-object');
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
    }, { "./$.is-object": 41 }], 21: [function (require, module, exports) {
      // getting tag from 19.1.3.6 Object.prototype.toString()
      var cof = require('./$.cof'),
          TAG = require('./$.wks')('toStringTag')
      // ES3 wrong here
      ,
          ARG = cof(function () {
        return arguments;
      }()) == 'Arguments';

      module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
        // builtinTag case
        : ARG ? cof(O)
        // ES3 arguments fallback
        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
      };
    }, { "./$.cof": 22, "./$.wks": 70 }], 22: [function (require, module, exports) {
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
    }, { "./$.a-function": 18 }], 25: [function (require, module, exports) {
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
    }, { "./$.fails": 30 }], 27: [function (require, module, exports) {
      var isObject = require('./$.is-object'),
          document = require('./$.global').document
      // in old IE typeof document.createElement is 'object'
      ,
          is = isObject(document) && isObject(document.createElement);
      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };
    }, { "./$.global": 33, "./$.is-object": 41 }], 28: [function (require, module, exports) {
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
    }, { "./$": 48 }], 29: [function (require, module, exports) {
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
    }, { "./$.core": 23, "./$.ctx": 24, "./$.global": 33 }], 30: [function (require, module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }, {}], 31: [function (require, module, exports) {
      var ctx = require('./$.ctx'),
          call = require('./$.iter-call'),
          isArrayIter = require('./$.is-array-iter'),
          anObject = require('./$.an-object'),
          toLength = require('./$.to-length'),
          getIterFn = require('./core.get-iterator-method');
      module.exports = function (iterable, entries, fn, that) {
        var iterFn = getIterFn(iterable),
            f = ctx(fn, that, entries ? 2 : 1),
            index = 0,
            length,
            step,
            iterator;
        if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
        // fast case for arrays with default iterator
        if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
          entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
          call(iterator, f, step.value, entries);
        }
      };
    }, { "./$.an-object": 20, "./$.ctx": 24, "./$.is-array-iter": 39, "./$.iter-call": 42, "./$.to-length": 67, "./core.get-iterator-method": 71 }], 32: [function (require, module, exports) {
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
    }, { "./$": 48, "./$.to-iobject": 66 }], 33: [function (require, module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    }, {}], 34: [function (require, module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
    }, {}], 35: [function (require, module, exports) {
      var $ = require('./$'),
          createDesc = require('./$.property-desc');
      module.exports = require('./$.descriptors') ? function (object, key, value) {
        return $.setDesc(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    }, { "./$": 48, "./$.descriptors": 26, "./$.property-desc": 53 }], 36: [function (require, module, exports) {
      module.exports = require('./$.global').document && document.documentElement;
    }, { "./$.global": 33 }], 37: [function (require, module, exports) {
      // fast apply, http://jsperf.lnkit.com/fast-apply/5
      module.exports = function (fn, args, that) {
        var un = that === undefined;
        switch (args.length) {
          case 0:
            return un ? fn() : fn.call(that);
          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
          case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
          case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
        }return fn.apply(that, args);
      };
    }, {}], 38: [function (require, module, exports) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = require('./$.cof');
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
    }, { "./$.cof": 22 }], 39: [function (require, module, exports) {
      // check on default Array iterator
      var Iterators = require('./$.iterators'),
          ITERATOR = require('./$.wks')('iterator'),
          ArrayProto = Array.prototype;

      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
      };
    }, { "./$.iterators": 47, "./$.wks": 70 }], 40: [function (require, module, exports) {
      // 7.2.2 IsArray(argument)
      var cof = require('./$.cof');
      module.exports = Array.isArray || function (arg) {
        return cof(arg) == 'Array';
      };
    }, { "./$.cof": 22 }], 41: [function (require, module, exports) {
      module.exports = function (it) {
        return (typeof it === "undefined" ? "undefined" : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
      };
    }, {}], 42: [function (require, module, exports) {
      // call something on iterator step with safe closing on error
      var anObject = require('./$.an-object');
      module.exports = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
          var ret = iterator['return'];
          if (ret !== undefined) anObject(ret.call(iterator));
          throw e;
        }
      };
    }, { "./$.an-object": 20 }], 43: [function (require, module, exports) {
      'use strict';

      var $ = require('./$'),
          descriptor = require('./$.property-desc'),
          setToStringTag = require('./$.set-to-string-tag'),
          IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function () {
        return this;
      });

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
        setToStringTag(Constructor, NAME + ' Iterator');
      };
    }, { "./$": 48, "./$.hide": 35, "./$.property-desc": 53, "./$.set-to-string-tag": 59, "./$.wks": 70 }], 44: [function (require, module, exports) {
      'use strict';

      var LIBRARY = require('./$.library'),
          $export = require('./$.export'),
          redefine = require('./$.redefine'),
          hide = require('./$.hide'),
          has = require('./$.has'),
          Iterators = require('./$.iterators'),
          $iterCreate = require('./$.iter-create'),
          setToStringTag = require('./$.set-to-string-tag'),
          getProto = require('./$').getProto,
          ITERATOR = require('./$.wks')('iterator'),
          BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
      ,
          FF_ITERATOR = '@@iterator',
          KEYS = 'keys',
          VALUES = 'values';

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function getMethod(kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + ' Iterator',
            DEF_VALUES = DEFAULT == VALUES,
            VALUES_BUG = false,
            proto = Base.prototype,
            $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
            $default = $native || getMethod(DEFAULT),
            methods,
            key;
        // Fix native
        if ($native) {
          var IteratorPrototype = getProto($default.call(new Base()));
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true);
          // FF fix
          if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        // Plug for library
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: !DEF_VALUES ? $default : getMethod('entries')
          };
          if (FORCED) for (key in methods) {
            if (!(key in proto)) redefine(proto, key, methods[key]);
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }
        return methods;
      };
    }, { "./$": 48, "./$.export": 29, "./$.has": 34, "./$.hide": 35, "./$.iter-create": 43, "./$.iterators": 47, "./$.library": 50, "./$.redefine": 55, "./$.set-to-string-tag": 59, "./$.wks": 70 }], 45: [function (require, module, exports) {
      var ITERATOR = require('./$.wks')('iterator'),
          SAFE_CLOSING = false;

      try {
        var riter = [7][ITERATOR]();
        riter['return'] = function () {
          SAFE_CLOSING = true;
        };
        Array.from(riter, function () {
          throw 2;
        });
      } catch (e) {/* empty */}

      module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
          var arr = [7],
              iter = arr[ITERATOR]();
          iter.next = function () {
            safe = true;
          };
          arr[ITERATOR] = function () {
            return iter;
          };
          exec(arr);
        } catch (e) {/* empty */}
        return safe;
      };
    }, { "./$.wks": 70 }], 46: [function (require, module, exports) {
      module.exports = function (done, value) {
        return { value: value, done: !!done };
      };
    }, {}], 47: [function (require, module, exports) {
      module.exports = {};
    }, {}], 48: [function (require, module, exports) {
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
    }, {}], 49: [function (require, module, exports) {
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
    }, { "./$": 48, "./$.to-iobject": 66 }], 50: [function (require, module, exports) {
      module.exports = true;
    }, {}], 51: [function (require, module, exports) {
      var global = require('./$.global'),
          macrotask = require('./$.task').set,
          Observer = global.MutationObserver || global.WebKitMutationObserver,
          process = global.process,
          Promise = global.Promise,
          isNode = require('./$.cof')(process) == 'process',
          head,
          last,
          notify;

      var flush = function flush() {
        var parent, domain, fn;
        if (isNode && (parent = process.domain)) {
          process.domain = null;
          parent.exit();
        }
        while (head) {
          domain = head.domain;
          fn = head.fn;
          if (domain) domain.enter();
          fn(); // <- currently we use it only for Promise - try / catch not required
          if (domain) domain.exit();
          head = head.next;
        }last = undefined;
        if (parent) parent.enter();
      };

      // Node.js
      if (isNode) {
        notify = function notify() {
          process.nextTick(flush);
        };
        // browsers with MutationObserver
      } else if (Observer) {
        var toggle = 1,
            node = document.createTextNode('');
        new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
        notify = function notify() {
          node.data = toggle = -toggle;
        };
        // environments with maybe non-completely correct, but existent Promise
      } else if (Promise && Promise.resolve) {
        notify = function notify() {
          Promise.resolve().then(flush);
        };
        // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout
      } else {
        notify = function notify() {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush);
        };
      }

      module.exports = function asap(fn) {
        var task = { fn: fn, next: undefined, domain: isNode && process.domain };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        }last = task;
      };
    }, { "./$.cof": 22, "./$.global": 33, "./$.task": 64 }], 52: [function (require, module, exports) {
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
    }, { "./$.core": 23, "./$.export": 29, "./$.fails": 30 }], 53: [function (require, module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
    }, {}], 54: [function (require, module, exports) {
      var redefine = require('./$.redefine');
      module.exports = function (target, src) {
        for (var key in src) {
          redefine(target, key, src[key]);
        }return target;
      };
    }, { "./$.redefine": 55 }], 55: [function (require, module, exports) {
      module.exports = require('./$.hide');
    }, { "./$.hide": 35 }], 56: [function (require, module, exports) {
      // 7.2.9 SameValue(x, y)
      module.exports = Object.is || function is(x, y) {
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
    }, {}], 57: [function (require, module, exports) {
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
    }, { "./$": 48, "./$.an-object": 20, "./$.ctx": 24, "./$.is-object": 41 }], 58: [function (require, module, exports) {
      'use strict';

      var core = require('./$.core'),
          $ = require('./$'),
          DESCRIPTORS = require('./$.descriptors'),
          SPECIES = require('./$.wks')('species');

      module.exports = function (KEY) {
        var C = core[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      };
    }, { "./$": 48, "./$.core": 23, "./$.descriptors": 26, "./$.wks": 70 }], 59: [function (require, module, exports) {
      var def = require('./$').setDesc,
          has = require('./$.has'),
          TAG = require('./$.wks')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
      };
    }, { "./$": 48, "./$.has": 34, "./$.wks": 70 }], 60: [function (require, module, exports) {
      var global = require('./$.global'),
          SHARED = '__core-js_shared__',
          store = global[SHARED] || (global[SHARED] = {});
      module.exports = function (key) {
        return store[key] || (store[key] = {});
      };
    }, { "./$.global": 33 }], 61: [function (require, module, exports) {
      // 7.3.20 SpeciesConstructor(O, defaultConstructor)
      var anObject = require('./$.an-object'),
          aFunction = require('./$.a-function'),
          SPECIES = require('./$.wks')('species');
      module.exports = function (O, D) {
        var C = anObject(O).constructor,
            S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
      };
    }, { "./$.a-function": 18, "./$.an-object": 20, "./$.wks": 70 }], 62: [function (require, module, exports) {
      module.exports = function (it, Constructor, name) {
        if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
        return it;
      };
    }, {}], 63: [function (require, module, exports) {
      var toInteger = require('./$.to-integer'),
          defined = require('./$.defined');
      // true  -> String#at
      // false -> String#codePointAt
      module.exports = function (TO_STRING) {
        return function (that, pos) {
          var s = String(defined(that)),
              i = toInteger(pos),
              l = s.length,
              a,
              b;
          if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      };
    }, { "./$.defined": 25, "./$.to-integer": 65 }], 64: [function (require, module, exports) {
      var ctx = require('./$.ctx'),
          invoke = require('./$.invoke'),
          html = require('./$.html'),
          cel = require('./$.dom-create'),
          global = require('./$.global'),
          process = global.process,
          setTask = global.setImmediate,
          clearTask = global.clearImmediate,
          MessageChannel = global.MessageChannel,
          counter = 0,
          queue = {},
          ONREADYSTATECHANGE = 'onreadystatechange',
          defer,
          channel,
          port;
      var run = function run() {
        var id = +this;
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var listner = function listner(event) {
        run.call(event.data);
      };
      // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          var args = [],
              i = 1;
          while (arguments.length > i) {
            args.push(arguments[i++]);
          }queue[++counter] = function () {
            invoke(typeof fn == 'function' ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        // Node.js 0.8-
        if (require('./$.cof')(process) == 'process') {
          defer = function defer(id) {
            process.nextTick(ctx(run, id, 1));
          };
          // Browsers with MessageChannel, includes WebWorkers
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listner;
          defer = ctx(port.postMessage, port, 1);
          // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
          defer = function defer(id) {
            global.postMessage(id + '', '*');
          };
          global.addEventListener('message', listner, false);
          // IE8-
        } else if (ONREADYSTATECHANGE in cel('script')) {
          defer = function defer(id) {
            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run.call(id);
            };
          };
          // Rest old browsers
        } else {
          defer = function defer(id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }
      module.exports = {
        set: setTask,
        clear: clearTask
      };
    }, { "./$.cof": 22, "./$.ctx": 24, "./$.dom-create": 27, "./$.global": 33, "./$.html": 36, "./$.invoke": 37 }], 65: [function (require, module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil,
          floor = Math.floor;
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    }, {}], 66: [function (require, module, exports) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = require('./$.iobject'),
          defined = require('./$.defined');
      module.exports = function (it) {
        return IObject(defined(it));
      };
    }, { "./$.defined": 25, "./$.iobject": 38 }], 67: [function (require, module, exports) {
      // 7.1.15 ToLength
      var toInteger = require('./$.to-integer'),
          min = Math.min;
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };
    }, { "./$.to-integer": 65 }], 68: [function (require, module, exports) {
      // 7.1.13 ToObject(argument)
      var defined = require('./$.defined');
      module.exports = function (it) {
        return Object(defined(it));
      };
    }, { "./$.defined": 25 }], 69: [function (require, module, exports) {
      var id = 0,
          px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
    }, {}], 70: [function (require, module, exports) {
      var store = require('./$.shared')('wks'),
          uid = require('./$.uid'),
          _Symbol2 = require('./$.global').Symbol;
      module.exports = function (name) {
        return store[name] || (store[name] = _Symbol2 && _Symbol2[name] || (_Symbol2 || uid)('Symbol.' + name));
      };
    }, { "./$.global": 33, "./$.shared": 60, "./$.uid": 69 }], 71: [function (require, module, exports) {
      var classof = require('./$.classof'),
          ITERATOR = require('./$.wks')('iterator'),
          Iterators = require('./$.iterators');
      module.exports = require('./$.core').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
      };
    }, { "./$.classof": 21, "./$.core": 23, "./$.iterators": 47, "./$.wks": 70 }], 72: [function (require, module, exports) {
      'use strict';

      var addToUnscopables = require('./$.add-to-unscopables'),
          step = require('./$.iter-step'),
          Iterators = require('./$.iterators'),
          toIObject = require('./$.to-iobject');

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = require('./$.iter-define')(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated); // target
        this._i = 0; // next index
        this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t,
            kind = this._k,
            index = this._i++;
        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values');

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array;

      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
    }, { "./$.add-to-unscopables": 19, "./$.iter-define": 44, "./$.iter-step": 46, "./$.iterators": 47, "./$.to-iobject": 66 }], 73: [function (require, module, exports) {
      // 19.1.2.9 Object.getPrototypeOf(O)
      var toObject = require('./$.to-object');

      require('./$.object-sap')('getPrototypeOf', function ($getPrototypeOf) {
        return function getPrototypeOf(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    }, { "./$.object-sap": 52, "./$.to-object": 68 }], 74: [function (require, module, exports) {
      // 19.1.3.19 Object.setPrototypeOf(O, proto)
      var $export = require('./$.export');
      $export($export.S, 'Object', { setPrototypeOf: require('./$.set-proto').set });
    }, { "./$.export": 29, "./$.set-proto": 57 }], 75: [function (require, module, exports) {}, {}], 76: [function (require, module, exports) {
      'use strict';

      var $ = require('./$'),
          LIBRARY = require('./$.library'),
          global = require('./$.global'),
          ctx = require('./$.ctx'),
          classof = require('./$.classof'),
          $export = require('./$.export'),
          isObject = require('./$.is-object'),
          anObject = require('./$.an-object'),
          aFunction = require('./$.a-function'),
          strictNew = require('./$.strict-new'),
          forOf = require('./$.for-of'),
          setProto = require('./$.set-proto').set,
          same = require('./$.same-value'),
          SPECIES = require('./$.wks')('species'),
          speciesConstructor = require('./$.species-constructor'),
          asap = require('./$.microtask'),
          PROMISE = 'Promise',
          process = global.process,
          isNode = classof(process) == 'process',
          P = global[PROMISE],
          Wrapper;

      var testResolve = function testResolve(sub) {
        var test = new P(function () {});
        if (sub) test.constructor = Object;
        return P.resolve(test) === test;
      };

      var USE_NATIVE = function () {
        var works = false;
        function P2(x) {
          var self = new P(x);
          setProto(self, P2.prototype);
          return self;
        }
        try {
          works = P && P.resolve && testResolve();
          setProto(P2, P);
          P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
          // actual Firefox has broken subclass support, test that
          if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
            works = false;
          }
          // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
          if (works && require('./$.descriptors')) {
            var thenableThenGotten = false;
            P.resolve($.setDesc({}, 'then', {
              get: function get() {
                thenableThenGotten = true;
              }
            }));
            works = thenableThenGotten;
          }
        } catch (e) {
          works = false;
        }
        return works;
      }();

      // helpers
      var sameConstructor = function sameConstructor(a, b) {
        // library wrapper special case
        if (LIBRARY && a === P && b === Wrapper) return true;
        return same(a, b);
      };
      var getConstructor = function getConstructor(C) {
        var S = anObject(C)[SPECIES];
        return S != undefined ? S : C;
      };
      var isThenable = function isThenable(it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };
      var PromiseCapability = function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve), this.reject = aFunction(reject);
      };
      var perform = function perform(exec) {
        try {
          exec();
        } catch (e) {
          return { error: e };
        }
      };
      var notify = function notify(record, isReject) {
        if (record.n) return;
        record.n = true;
        var chain = record.c;
        asap(function () {
          var value = record.v,
              ok = record.s == 1,
              i = 0;
          var run = function run(reaction) {
            var handler = ok ? reaction.ok : reaction.fail,
                resolve = reaction.resolve,
                reject = reaction.reject,
                result,
                then;
            try {
              if (handler) {
                if (!ok) record.h = true;
                result = handler === true ? value : handler(value);
                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (e) {
              reject(e);
            }
          };
          while (chain.length > i) {
            run(chain[i++]);
          } // variable length - can't use forEach
          chain.length = 0;
          record.n = false;
          if (isReject) setTimeout(function () {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({ promise: promise, reason: value });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }record.a = undefined;
          }, 1);
        });
      };
      var isUnhandled = function isUnhandled(promise) {
        var record = promise._d,
            chain = record.a || record.c,
            i = 0,
            reaction;
        if (record.h) return false;
        while (chain.length > i) {
          reaction = chain[i++];
          if (reaction.fail || !isUnhandled(reaction.promise)) return false;
        }return true;
      };
      var $reject = function $reject(value) {
        var record = this;
        if (record.d) return;
        record.d = true;
        record = record.r || record; // unwrap
        record.v = value;
        record.s = 2;
        record.a = record.c.slice();
        notify(record, true);
      };
      var $resolve = function $resolve(value) {
        var record = this,
            then;
        if (record.d) return;
        record.d = true;
        record = record.r || record; // unwrap
        try {
          if (record.p === value) throw TypeError("Promise can't be resolved itself");
          if (then = isThenable(value)) {
            asap(function () {
              var wrapper = { r: record, d: false }; // wrap
              try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            record.v = value;
            record.s = 1;
            notify(record, false);
          }
        } catch (e) {
          $reject.call({ r: record, d: false }, e); // wrap
        }
      };

      // constructor polyfill
      if (!USE_NATIVE) {
        // 25.4.3.1 Promise(executor)
        P = function Promise(executor) {
          aFunction(executor);
          var record = this._d = {
            p: strictNew(this, P, PROMISE), // <- promise
            c: [], // <- awaiting reactions
            a: undefined, // <- checked in isUnhandled reactions
            s: 0, // <- state
            d: false, // <- done
            v: undefined, // <- value
            h: false, // <- handled rejection
            n: false // <- notify
          };
          try {
            executor(ctx($resolve, record, 1), ctx($reject, record, 1));
          } catch (err) {
            $reject.call(record, err);
          }
        };
        require('./$.redefine-all')(P.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            var reaction = new PromiseCapability(speciesConstructor(this, P)),
                promise = reaction.promise,
                record = this._d;
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            record.c.push(reaction);
            if (record.a) record.a.push(reaction);
            if (record.s) notify(record, false);
            return promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
      require('./$.set-to-string-tag')(P, PROMISE);
      require('./$.set-species')(PROMISE);
      Wrapper = require('./$.core')[PROMISE];

      // statics
      $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          var capability = new PromiseCapability(this),
              $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        }
      });
      $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          // instanceof instead of internal slot check because we should fix it without replacement native Promise core
          if (x instanceof P && sameConstructor(x.constructor, this)) return x;
          var capability = new PromiseCapability(this),
              $$resolve = capability.resolve;
          $$resolve(x);
          return capability.promise;
        }
      });
      $export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function (iter) {
        P.all(iter)['catch'](function () {});
      })), PROMISE, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all(iterable) {
          var C = getConstructor(this),
              capability = new PromiseCapability(C),
              resolve = capability.resolve,
              reject = capability.reject,
              values = [];
          var abrupt = perform(function () {
            forOf(iterable, false, values.push, values);
            var remaining = values.length,
                results = Array(remaining);
            if (remaining) $.each.call(values, function (promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });else resolve(results);
          });
          if (abrupt) reject(abrupt.error);
          return capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(iterable) {
          var C = getConstructor(this),
              capability = new PromiseCapability(C),
              reject = capability.reject;
          var abrupt = perform(function () {
            forOf(iterable, false, function (promise) {
              C.resolve(promise).then(capability.resolve, reject);
            });
          });
          if (abrupt) reject(abrupt.error);
          return capability.promise;
        }
      });
    }, { "./$": 48, "./$.a-function": 18, "./$.an-object": 20, "./$.classof": 21, "./$.core": 23, "./$.ctx": 24, "./$.descriptors": 26, "./$.export": 29, "./$.for-of": 31, "./$.global": 33, "./$.is-object": 41, "./$.iter-detect": 45, "./$.library": 50, "./$.microtask": 51, "./$.redefine-all": 54, "./$.same-value": 56, "./$.set-proto": 57, "./$.set-species": 58, "./$.set-to-string-tag": 59, "./$.species-constructor": 61, "./$.strict-new": 62, "./$.wks": 70 }], 77: [function (require, module, exports) {
      'use strict';

      var $at = require('./$.string-at')(true);

      // 21.1.3.27 String.prototype[@@iterator]()
      require('./$.iter-define')(String, 'String', function (iterated) {
        this._t = String(iterated); // target
        this._i = 0; // next index
        // 21.1.5.2.1 %StringIteratorPrototype%.next()
      }, function () {
        var O = this._t,
            index = this._i,
            point;
        if (index >= O.length) return { value: undefined, done: true };
        point = $at(O, index);
        this._i += point.length;
        return { value: point, done: false };
      });
    }, { "./$.iter-define": 44, "./$.string-at": 63 }], 78: [function (require, module, exports) {
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
    }, { "./$": 48, "./$.an-object": 20, "./$.descriptors": 26, "./$.enum-keys": 28, "./$.export": 29, "./$.fails": 30, "./$.get-names": 32, "./$.global": 33, "./$.has": 34, "./$.is-array": 40, "./$.keyof": 49, "./$.library": 50, "./$.property-desc": 53, "./$.redefine": 55, "./$.set-to-string-tag": 59, "./$.shared": 60, "./$.to-iobject": 66, "./$.uid": 69, "./$.wks": 70 }], 79: [function (require, module, exports) {
      require('./es6.array.iterator');
      var Iterators = require('./$.iterators');
      Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
    }, { "./$.iterators": 47, "./es6.array.iterator": 72 }], 80: [function (require, module, exports) {
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
    }, { "babel-runtime/helpers/classCallCheck": 7, "babel-runtime/helpers/createClass": 8 }], 81: [function (require, module, exports) {
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
    }, { "./Bus": 80, "babel-runtime/core-js/object/get-prototype-of": 3, "babel-runtime/helpers/classCallCheck": 7, "babel-runtime/helpers/createClass": 8, "babel-runtime/helpers/inherits": 9, "babel-runtime/helpers/possibleConstructorReturn": 10 }], 82: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SandboxRegistry = exports.SandboxType = exports.Sandbox = undefined;

      var _Sandbox = require('./sandbox/Sandbox');

      var _Sandbox2 = _interopRequireDefault(_Sandbox);

      var _SandboxRegistry = require('./sandbox/SandboxRegistry');

      var _SandboxRegistry2 = _interopRequireDefault(_SandboxRegistry);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.Sandbox = _Sandbox2.default;
      exports.SandboxType = _Sandbox.SandboxType;
      exports.SandboxRegistry = _SandboxRegistry2.default; /**
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
    }, { "./sandbox/Sandbox": 83, "./sandbox/SandboxRegistry": 84 }], 83: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SandboxType = undefined;

      var _promise = require('babel-runtime/core-js/promise');

      var _promise2 = _interopRequireDefault(_promise);

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

      var _SandboxRegistry = require('../sandbox/SandboxRegistry');

      var _SandboxRegistry2 = _interopRequireDefault(_SandboxRegistry);

      var _MiniBus2 = require('../bus/MiniBus');

      var _MiniBus3 = _interopRequireDefault(_MiniBus2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // import MessageFactory from '../../resources/MessageFactory';

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
      var SandboxType = exports.SandboxType = { APP: 'app', NORMAL: 'normal' };

      /**
       * @author micaelpedrosa@gmail.com
       * Base class to implement external sandbox component
       */

      var Sandbox = function (_MiniBus) {
        (0, _inherits3.default)(Sandbox, _MiniBus);

        function Sandbox() {
          (0, _classCallCheck3.default)(this, Sandbox);

          var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sandbox).call(this));

          var _this = _this2;

          // Add Message Factory
          // let messageFactory = new MessageFactory();
          // _this.messageFactory = messageFactory;
          return _this2;
        }

        /**
         * Deploy an instance of the component into the sandbox.
         * @param  {string} componentSourceCode Component source code (Hyperty, ProtoStub, etc)
         * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
         * @param  {Config} configuration Config parameters of the component
         * @return {Promise<string>} return deployed if successful, or any other string with an error
         */

        (0, _createClass3.default)(Sandbox, [{
          key: 'deployComponent',
          value: function deployComponent(componentSourceCode, componentURL, configuration) {

            var _this = this;

            // let messageFactory = _this.messageFactory;

            return new _promise2.default(function (resolve, reject) {
              //FLOW-OUT: deploy message for the internal SandboxRegistry -> _onDeploy
              var deployMessage = {
                type: 'create', from: _SandboxRegistry2.default.ExternalDeployAddress, to: _SandboxRegistry2.default.InternalDeployAddress,
                body: { url: componentURL, sourceCode: componentSourceCode, config: configuration }
              };

              //send message into the sandbox internals and wait for reply
              _this.postMessage(deployMessage, function (reply) {
                if (reply.body.code === 200) {
                  //is this response complaint with the spec?
                  resolve('deployed');
                } else {
                  reject(reply.body.desc);
                }
              });
            });
          }

          /**
           * Remove the instance of a previously deployed component.
           * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
           * @return {Promise<string>} return undeployed if successful, or any other string with an error
           */

        }, {
          key: 'removeComponent',
          value: function removeComponent(componentURL) {
            var _this = this;

            return new _promise2.default(function (resolve, reject) {
              //FLOW-OUT: un-deploy message for the internal SandboxRegistry -> _onRemove
              var removeMessage = {
                type: 'delete', from: _SandboxRegistry2.default.ExternalDeployAddress, to: _SandboxRegistry2.default.InternalDeployAddress,
                body: { url: componentURL }
              };

              //send message into the sandbox internals and wait for reply
              _this.postMessage(removeMessage, function (reply) {
                if (reply.body.code === 200) {
                  //is this response complaint with the spec?
                  resolve('undeployed');
                } else {
                  reject(reply.body.desc);
                }
              });
            });
          }
        }]);
        return Sandbox;
      }(_MiniBus3.default);

      exports.default = Sandbox;
    }, { "../bus/MiniBus": 81, "../sandbox/SandboxRegistry": 84, "babel-runtime/core-js/object/get-prototype-of": 3, "babel-runtime/core-js/promise": 5, "babel-runtime/helpers/classCallCheck": 7, "babel-runtime/helpers/createClass": 8, "babel-runtime/helpers/inherits": 9, "babel-runtime/helpers/possibleConstructorReturn": 10 }], 84: [function (require, module, exports) {
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
       * Base class to implement internal deploy manager of components.
       */

      // import MessageFactory from '../../resources/MessageFactory';

      /**
       * @author micaelpedrosa@gmail.com
       * Internal component registry of all sandboxes.
       * Process internal request's for component deploy.
       */

      var SandboxRegistry = function () {
        /* private
        _components: <url: instance>
        */

        function SandboxRegistry(bus) {
          (0, _classCallCheck3.default)(this, SandboxRegistry);

          var _this = this;

          _this._bus = bus;
          _this._components = {};

          // Add Message Factory
          // let messageFactory = new MessageFactory();
          // _this.messageFactory = messageFactory;

          bus.addListener(SandboxRegistry.InternalDeployAddress, function (msg) {
            //console.log('SandboxRegistry-RCV: ', msg);
            // let responseMsg = {
            //   id: msg.id, type: 'response', from: SandboxRegistry.InternalDeployAddress, to: SandboxRegistry.ExternalDeployAddress
            // };

            switch (msg.type) {
              case 'create':
                _this._onDeploy(msg);break;
              case 'delete':
                _this._onRemove(msg);break;
            }
          });
        }

        (0, _createClass3.default)(SandboxRegistry, [{
          key: '_responseMsg',
          value: function _responseMsg(msg, code, value) {

            var _this = this;

            // let messageFactory = _this.messageFactory;

            //FLOW-OUT: generic response message to external Sandbox (deploy and un-deploy responses)
            var responseMsg = {
              id: msg.id, type: 'response', from: SandboxRegistry.InternalDeployAddress, to: SandboxRegistry.ExternalDeployAddress
            };

            // Chanege the origin message, because the response;
            // msg.from = SandboxRegistry.InternalDeployAddress;
            // msg.to = SandboxRegistry.ExternalDeployAddress;

            var body = {};
            if (code) body.code = code;
            if (value) body.desc = value;

            responseMsg.body = body;

            // return messageFactory.createResponse(msg, code, value);
            return responseMsg;
          }

          //FLOW-IN: message from the runtime core Sandbox -> deployComponent

        }, {
          key: '_onDeploy',
          value: function _onDeploy(msg) {
            var _this = this;
            var config = msg.body.config;
            var componentURL = msg.body.url;
            var sourceCode = msg.body.sourceCode;
            var responseCode = void 0;
            var responseDesc = void 0;

            if (!_this._components.hasOwnProperty(componentURL)) {
              try {
                _this._components[componentURL] = _this._create(componentURL, sourceCode, config);
                responseCode = 200;
              } catch (error) {
                responseCode = 500;
                responseDesc = error;
              }
            } else {
              responseCode = 500;
              responseDesc = 'Instance ' + componentURL + ' already exist!';
            }

            // Create response message with MessageFactory
            var responseMsg = _this._responseMsg(msg, responseCode, responseDesc);
            _this._bus.postMessage(responseMsg);
          }

          //FLOW-IN: message from the runtime core Sandbox -> removeComponent

        }, {
          key: '_onRemove',
          value: function _onRemove(msg) {
            var _this = this;
            var componentURL = msg.body.url;
            var responseCode = void 0;
            var responseDesc = void 0;

            if (_this._components.hasOwnProperty(componentURL)) {
              //remove component from the pool and all listeners
              delete _this._components[componentURL];
              _this._bus.removeAllListenersOf(componentURL);
              responseCode = 200;
            } else {
              responseCode = 500;
              responseDesc = 'Instance ' + componentURL + ' doesn\'t exist!';
            }

            var responseMsg = _this._responseMsg(msg, responseCode, responseDesc);

            _this._bus.postMessage(responseMsg);
          }

          /**
           * This method should be implemented by the internal sandbox code.
           * @param  {ComponentURL} url URL used for the instance
           * @param  {string} sourceCode Code of the component
           * @param  {Config} config Configuration parameters
           * @return {Object} Returns instance of the component or throw an error "throw 'error message'"
           */

        }, {
          key: '_create',
          value: function _create(url, sourceCode, config) {
            //implementation specific
            /* example code:
              eval(sourceCode);
              return activate(url, _this._bus, config);
            */
          }
        }, {
          key: 'components',
          get: function get() {
            return this._components;
          }
        }]);
        return SandboxRegistry;
      }();

      SandboxRegistry.ExternalDeployAddress = 'hyperty-runtime://sandbox/external';
      SandboxRegistry.InternalDeployAddress = 'hyperty-runtime://sandbox/internal';

      exports.default = SandboxRegistry;
      module.exports = exports['default'];
    }, { "babel-runtime/helpers/classCallCheck": 7, "babel-runtime/helpers/createClass": 8 }] }, {}, [82])(82);
});