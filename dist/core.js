// version: 0.1.0
// date: Fri Oct 27 2017 16:35:18 GMT+0100 (WEST)
// licence: 
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


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("node-webcrypto-ossl"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else if(typeof define === 'function' && define.amd)
		define("core", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "node-fetch", "urijs", "atob", "dexie", "fake-indexeddb", "fake-indexeddb/lib/FDBKeyRange", "indexeddbshim", "node-localstorage", "node-webcrypto-ossl", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("node-webcrypto-ossl"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else
		root["core"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["node-fetch"], root["urijs"], root["atob"], root["dexie"], root["fake-indexeddb"], root["fake-indexeddb/lib/FDBKeyRange"], root["indexeddbshim"], root["node-localstorage"], root["node-webcrypto-ossl"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("runtime-core/dist/minibus");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("runtime-core/dist/sandbox");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("eval");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var methods = { GET: 'get', POST: 'post' };

var fetch = __webpack_require__(9);

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);

    var _this = this;
    console.log('Node http Request');
    Object.keys(methods).forEach(function (method) {
      _this[methods[method]] = function (url, options) {
        return new Promise(function (resolve, reject) {
          _this.makeLocalRequest(method, url, options).then(function (result) {
            resolve(result);
          }).catch(function (reason) {
            reject(reason);
          });
        });
      };
    });
  }

  /**
   * handling request methods
   * @returns {text<string>}
   **/


  _createClass(Request, [{
    key: 'makeLocalRequest',
    value: function makeLocalRequest(method, url, options) {
      var _this = this;
      console.log('HTTPS Request:'.yellow, method, url, options);

      return new Promise(function (resolve, reject) {
        var urlMap = _this.mapProtocol(url);

        console.log('Mapped url is '.yellow, urlMap, 'method is:'.green, method);
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

        if (method === 'GET') {
          // handle GET method
          fetch(urlMap).then(function (res) {
            console.log('statusCode is: '.green, res.status);
            return res.text();
          }).then(function (body) {
            resolve(body.toString('utf8'));
          }).catch(function (err) {
            console.error('Error occured on GET method of url:'.red, urlMap, ' reason :'.red, err);
          });
        } else if (method === 'POST') {
          var postOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'cache-control': 'no-cache'
            },
            body: options && options.body ? options.body : {}
          };

          console.log('PostOptions:', postOptions);

          fetch(urlMap, postOptions).then(function (res) {
            console.log('statusCode is: '.green, res.status);
            return res.text();
          }).then(function (body) {
            resolve(body.toString('utf8'));
          }).catch(function (error) {
            console.error('Error occured on POST method of url:', urlMap, 'with options:', options, 'reason :', error);
          });
        }
      });
    }

    /**
     * @returns {variable<string>}
     **/

  }, {
    key: 'mapProtocol',
    value: function mapProtocol(url) {
      var protocolmap = {
        'localhost://': 'https://',
        'undefined://': 'https://',
        'hyperty-catalogue://': 'https://',
        'https://': 'https://',
        'http://': 'https://'
      };

      var foundProtocol = false;
      for (var protocol in protocolmap) {
        if (url.slice(0, protocol.length) === protocol) {
          url = protocolmap[protocol] + url.slice(protocol.length, url.length);
          foundProtocol = true;
          break;
        }
      }

      if (!foundProtocol) {
        throw new Error('Invalid protocol of url: ' + url);
      }
      return url;
    }
  }]);

  return Request;
}();

exports.default = Request;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

// TODO: import and extend the class of the service-framework
// service-framework/dist/RuntimeCapabilities;

var RuntimeCapabilities = function () {
  function RuntimeCapabilities(storageManager) {
    _classCallCheck(this, RuntimeCapabilities);

    if (!storageManager) throw new Error('The Runtime Capabilities need the storageManager');
    this.storageManager = storageManager;
  }

  /**
   * Returns as a promise RuntimeCapabilities json object with all available capabilities of the runtime.
   * If it was not yet persisted in the Storage Manager it collects all required info from the platform and saves in the storage manager.
   * @returns {Promise<object>}
   */


  _createClass(RuntimeCapabilities, [{
    key: 'getRuntimeCapabilities',
    value: function getRuntimeCapabilities() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        Promise.all([_this._getEnvironment()]).then(function (result) {

          var capabilities = {};
          console.log('this._getEnvironment()s: ', _this._getEnvironment());

          result.forEach(function (capability) {
            Object.assign(capabilities, capability);
          });

          console.log('capabilities: ', capabilities);
          _this.storageManager.set('capabilities', '1', capabilities);

          resolve(capabilities);
        }).catch(function (error) {
          reject(error);
        });
      });
    }

    /**
     * returns as a promise a boolean according to available capabilities.
     * @returns {Promise<boolean>}
     */

  }, {
    key: 'isAvailable',
    value: function isAvailable(capability) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.storageManager.get('capabilities').then(function (capabilities) {
          console.log('Capability ' + capability + ' is available? ', capabilities.hasOwnProperty(capability) && capabilities[capability]);
          if (capabilities.hasOwnProperty(capability) && capabilities[capability]) {
            resolve(true);
          } else {
            resolve(false);
          }
        }).catch(function (error) {
          console.error('Error has occured while checking capability, reason:', error);
          reject(error);
        });
      });
    }

    /**
     * it refreshes previously collected capabilities and updates the storage manager
     */

  }, {
    key: 'update',
    value: function update() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.getRuntimeCapabilities().then(resolve).catch(reject);
      });
    }

    // TODO: organize the code in separated files

  }, {
    key: '_getEnvironment',
    value: function _getEnvironment() {
      // TODO: this should be more effective and check the environment
      try {
        return {
          node: !!!(window && navigator)
        };
      } catch (error) {
        return {
          node: true
        };
      }
    }
  }]);

  return RuntimeCapabilities;
}();

exports.default = RuntimeCapabilities;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sandbox = __webpack_require__(1);

var _minibus = __webpack_require__(0);

var _minibus2 = _interopRequireDefault(_minibus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SandboxApp = function (_Sandbox) {
  _inherits(SandboxApp, _Sandbox);

  function SandboxApp() {
    _classCallCheck(this, SandboxApp);

    console.log('---------------------- Sandbox App -----------------------'.green);

    var _this = _possibleConstructorReturn(this, (SandboxApp.__proto__ || Object.getPrototypeOf(SandboxApp)).call(this));

    _this.type = _sandbox.SandboxType.NORMAL;
    process.on('message', function (msg) {
      // console.log('SandboxApp Received message  is :\n'.green);
      if (msg.hasOwnProperty('to') && msg.to.startsWith('core:')) return;

      _this._onMessage(msg);
    });
    return _this;
  }

  _createClass(SandboxApp, [{
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      console.log('SandboxApp postMessage message: '.green);
      process.send(msg);
    }
  }]);

  return SandboxApp;
}(_sandbox.Sandbox);

exports.default = SandboxApp;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sandbox = __webpack_require__(1);

var _minibus = __webpack_require__(0);

var _minibus2 = _interopRequireDefault(_minibus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


var child = __webpack_require__(3);
var colors = __webpack_require__(4);

var SandboxWorker = function (_Sandbox) {
  _inherits(SandboxWorker, _Sandbox);

  function SandboxWorker(script) {
    _classCallCheck(this, SandboxWorker);

    var _this2 = _possibleConstructorReturn(this, (SandboxWorker.__proto__ || Object.getPrototypeOf(SandboxWorker)).call(this, script));

    console.log('-------------------------------------------- in Sandbox Worker ----------------------------------'.red);
    _this2.type = _sandbox.SandboxType.NORMAL;
    var _this = _this2;
    _this2.worker = child.fork(script);
    if (!!_this2.worker) {
      _this2.worker.on('message', function (e) {
        _this._onMessage(e);
      });
      _this2.worker.send('');
    } else {
      throw new Error('Your environment does not support worker \n', e);
    }

    _this2.worker.on('exit', function (msg) {
      console.log('child process exit SandboxWorker stopped');
      _this2.worker.exit();
      _this2.worker.kill();
    });

    _this2.worker.on('error', function (msg) {
      console.log('child process error  SandboxWorker stopped');
      _this2.worker.exit();
      _this2.worker.kill();
    });
    return _this2;
  }

  _createClass(SandboxWorker, [{
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      this.worker.send(msg);
    }
  }]);

  return SandboxWorker;
}(_sandbox.Sandbox);

exports.default = SandboxWorker;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SandboxWorker = __webpack_require__(8);

var _SandboxWorker2 = _interopRequireDefault(_SandboxWorker);

var _SandboxApp = __webpack_require__(7);

var _SandboxApp2 = _interopRequireDefault(_SandboxApp);

var _Request = __webpack_require__(5);

var _Request2 = _interopRequireDefault(_Request);

var _atob2 = __webpack_require__(13);

var _atob3 = _interopRequireDefault(_atob2);

var _StorageManager = __webpack_require__(22);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _RuntimeCatalogue = __webpack_require__(21);

var _PersistenceManager = __webpack_require__(20);

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _nodeLocalstorage = __webpack_require__(18);

var _dexie = __webpack_require__(14);

var _dexie2 = _interopRequireDefault(_dexie);

var _indexeddbshim = __webpack_require__(17);

var _indexeddbshim2 = _interopRequireDefault(_indexeddbshim);

var _RuntimeCapabilities = __webpack_require__(6);

var _RuntimeCapabilities2 = _interopRequireDefault(_RuntimeCapabilities);

var _nodeWebcryptoOssl = __webpack_require__(19);

var _nodeWebcryptoOssl2 = _interopRequireDefault(_nodeWebcryptoOssl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dexie2.default.dependencies.indexedDB = __webpack_require__(15);
_dexie2.default.dependencies.IDBKeyRange = __webpack_require__(16);

var createStorageManager = function createStorageManager() {
  var indexeddB = {};
  var indexedDB = indexeddB.indexedDB,
      IDBKeyRange = indexeddB.IDBKeyRange;

  var storageName = 'cache';

  var db = new _dexie2.default(storageName);

  _storageManager = new _StorageManager2.default(db, storageName);
  return _storageManager;
};

var _storageManager = createStorageManager();

var RuntimeFactory = Object.create({
  createSandbox: function createSandbox(capabilities) {
    var _this = this;

    return new Promise(function (resolve, reject) {

      var capability = 'node';
      var SandboxCapabilities = {};

      _this.capabilitiesManager.isAvailable(capability).then(function (result) {
        if (result) {
          SandboxCapabilities = { "node": true };
          resolve(new _SandboxWorker2.default('../dist/ContextServiceProvider.js'));
        } else {}
      }).catch(function (reason) {
        console.error('[createSandbox ], Error occured while creating Sandbox, reason : ', reason);
        reject(reason);
      });
    });
  },
  createAppSandbox: function createAppSandbox() {
    return new _SandboxApp2.default('../dist/ContextApp.js');
  },
  createHttpRequest: function createHttpRequest() {
    var request = new _Request2.default();
    return request;
  },
  atob: function atob(b64) {
    return (0, _atob3.default)(b64);
  },
  persistenceManager: function persistenceManager() {
    var localStorage = new _nodeLocalstorage.LocalStorage('./scratch');
    return new _PersistenceManager2.default(localStorage);
  },
  storageManager: function storageManager() {
    return _storageManager;
  },
  createRuntimeCatalogue: function createRuntimeCatalogue() {
    this.catalogue = new _RuntimeCatalogue.RuntimeCatalogue(this);
    return this.catalogue;
  },
  runtimeCapabilities: function runtimeCapabilities() {
    this.capabilitiesManager = new _RuntimeCapabilities2.default(_storageManager);
    return this.capabilitiesManager;
  },
  createWebcrypto: function createWebcrypto() {
    return new _nodeWebcryptoOssl2.default();
  }
});

exports.default = RuntimeFactory;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("atob");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("dexie");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fake-indexeddb");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("fake-indexeddb/lib/FDBKeyRange");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("indexeddbshim");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-localstorage");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("node-webcrypto-ossl");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/PersistenceManager");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/RuntimeCatalogue");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/StorageManager");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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
 * Node.js child process (simultaneously is a parent process of ContextServiceProvider sandbox)
 * used as an isolated sandbox to load the Hyperty runtime aka coreRuntime
 **/


var _urijs = __webpack_require__(10);

var _urijs2 = _interopRequireDefault(_urijs);

var _RuntimeFactory = __webpack_require__(12);

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

var _eval2 = __webpack_require__(2);

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domain = void 0;
var runtimeDescriptor = void 0;

var catalogue = _RuntimeFactory2.default.createRuntimeCatalogue();

// returnHyperty givent the runtimeHypertyURL,
// Sends message ='loadedHyperty' to the the parent process RuntimeNode throught IPC channel

function returnHyperty(hyperty) {
  process.send({ to: 'runtime:loadedHyperty', body: hyperty });
}

// while loading the protocolStub search hyperty in the runtime registry
function searchHyperty(runtime, descriptor) {
  var hyperty = undefined;
  var index = 0;
  while (!hyperty && index < runtime.registry.hypertiesList.length) {
    if (runtime.registry.hypertiesList[index].descriptor === descriptor) hyperty = runtime.registry.hypertiesList[index];
    index++;
  }
  console.log('Hyeprty founded!'.green);
  return hyperty;
}

// Install runtime on the core Sandbox
function runtimeReady(runtime) {
  // coreRuntime global EventListener for anty incoming message
  process.on('message', function (msg) {
    if (msg.to === 'core:loadHyperty') {
      var descriptor = msg.body.descriptor;
      var hyperty = searchHyperty(runtime, descriptor);
      if (hyperty) {
        returnHyperty({ runtimeHypertyURL: hyperty.hypertyURL });
      } else {
        runtime.loadHyperty(descriptor).then(returnHyperty).catch(function (error) {
          console.error('Error while loading Hyperty, reason: ', error);
        });
      }
    } else if (msg.to === 'core:loadStub') {
      runtime.loadStub(msg.body.domain);
    }
  }, false);
  console.log('--> sending to Main process RuntimeNode'.orange);
  process.send({ to: 'runtime:installed', body: {} });
}

process.on('message', function (msg) {
  if (msg.do === 'install runtime core') {
    var runtimeURL = msg.body.runtimeURL;
    domain = msg.body.domain;
    // Gets RuntimeDescriptor from the runtime catalogue
    catalogue.getRuntimeDescriptor(runtimeURL).then(function (descriptor) {
      runtimeDescriptor = descriptor;
      if (descriptor.sourcePackageURL === '/sourcePackage') {
        return descriptor.sourcePackage;
      } else {
        return catalogue.getSourcePackageFromURL(descriptor.sourcePackageURL);
      }
    }).then(function (sourcePackage) {
      var RuntimeUA = (0, _eval3.default)(sourcePackage.sourceCode, true);
      var runtime = new RuntimeUA(runtimeDescriptor, _RuntimeFactory2.default, domain);
      runtime.init().then(function () {
        runtimeReady(runtime);
      }).catch(function (reason) {
        console.log('Error init', reason);
      });
    }).catch(function (reason) {
      console.error('Error getting the RuntimeDescriptor from the service framework catalogue, reason: ', reason);
    });
  }
});

// coreRuntime Process  error handling
process.on('warning', function (warning) {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.stack);
});

process.on('exit', function (msg) {
  console.log('child process core exited');
  process.exit();
  process.kill();
});

process.on('error', function (msg) {
  console.warn('child process error core stopped');
  process.exit();
  process.kill();
});

process.on('SIGINT', function () {
  console.warn('Received SIGINT. all Node Sub-Process are exited');
  process.exit();
  process.kill();
}); // to catch crtl-c

process.on('SIGTERM', function () {
  console.warn('Received SIGTERM. core Press Control-D to exit.');
  process.exit();
  process.kill();
}); // to catch kill

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4YTMzNTE5NDg4NjA0ZTczMjcxNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVyaWpzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZXhpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JlLmpzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiZmV0Y2giLCJyZXF1aXJlIiwiUmVxdWVzdCIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibWV0aG9kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWFrZUxvY2FsUmVxdWVzdCIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInJlYXNvbiIsInllbGxvdyIsInVybE1hcCIsIm1hcFByb3RvY29sIiwiZ3JlZW4iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInJlcyIsInN0YXR1cyIsInRleHQiLCJib2R5IiwidG9TdHJpbmciLCJlcnIiLCJlcnJvciIsInJlZCIsInBvc3RPcHRpb25zIiwiaGVhZGVycyIsInByb3RvY29sbWFwIiwiZm91bmRQcm90b2NvbCIsInByb3RvY29sIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciIsIlJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJzdG9yYWdlTWFuYWdlciIsImFsbCIsIl9nZXRFbnZpcm9ubWVudCIsImNhcGFiaWxpdGllcyIsImNhcGFiaWxpdHkiLCJhc3NpZ24iLCJzZXQiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJub2RlIiwid2luZG93IiwibmF2aWdhdG9yIiwiU2FuZGJveEFwcCIsInR5cGUiLCJOT1JNQUwiLCJvbiIsIm1zZyIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJzZW5kIiwiY2hpbGQiLCJjb2xvcnMiLCJTYW5kYm94V29ya2VyIiwic2NyaXB0Iiwid29ya2VyIiwiZm9yayIsImUiLCJleGl0Iiwia2lsbCIsImRlcGVuZGVuY2llcyIsImluZGV4ZWREQiIsIklEQktleVJhbmdlIiwiY3JlYXRlU3RvcmFnZU1hbmFnZXIiLCJpbmRleGVkZEIiLCJzdG9yYWdlTmFtZSIsImRiIiwiUnVudGltZUZhY3RvcnkiLCJjcmVhdGUiLCJjcmVhdGVTYW5kYm94IiwiU2FuZGJveENhcGFiaWxpdGllcyIsImNhcGFiaWxpdGllc01hbmFnZXIiLCJpc0F2YWlsYWJsZSIsImNyZWF0ZUFwcFNhbmRib3giLCJjcmVhdGVIdHRwUmVxdWVzdCIsInJlcXVlc3QiLCJhdG9iIiwiYjY0IiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlUnVudGltZUNhdGFsb2d1ZSIsImNhdGFsb2d1ZSIsInJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJjcmVhdGVXZWJjcnlwdG8iLCJkb21haW4iLCJydW50aW1lRGVzY3JpcHRvciIsInJldHVybkh5cGVydHkiLCJoeXBlcnR5Iiwic2VhcmNoSHlwZXJ0eSIsInJ1bnRpbWUiLCJkZXNjcmlwdG9yIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJyZWdpc3RyeSIsImh5cGVydGllc0xpc3QiLCJydW50aW1lUmVhZHkiLCJydW50aW1lSHlwZXJ0eVVSTCIsImh5cGVydHlVUkwiLCJsb2FkSHlwZXJ0eSIsImxvYWRTdHViIiwib3JhbmdlIiwiZG8iLCJydW50aW1lVVJMIiwiZ2V0UnVudGltZURlc2NyaXB0b3IiLCJzb3VyY2VQYWNrYWdlVVJMIiwic291cmNlUGFja2FnZSIsImdldFNvdXJjZVBhY2thZ2VGcm9tVVJMIiwiUnVudGltZVVBIiwic291cmNlQ29kZSIsImluaXQiLCJ3YXJuaW5nIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFiO0FBQ0F0RyxVQUFRaUQsSUFBUjtBQUNBakQsVUFBUWtELElBQVI7QUFDRCxDQUpELEUsQ0FJSSxnQiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNvcmVcIiwgW1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiLCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiwgXCJldmFsXCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcIm5vZGUtZmV0Y2hcIiwgXCJ1cmlqc1wiLCBcImF0b2JcIiwgXCJkZXhpZVwiLCBcImZha2UtaW5kZXhlZGRiXCIsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIsIFwiaW5kZXhlZGRic2hpbVwiLCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIsIFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcIm5vZGUtd2ViY3J5cHRvLW9zc2xcIl0sIHJvb3RbXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGEzMzUxOTQ4ODYwNGU3MzI3MTYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2YWxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbG9yc1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmNvbnN0IG1ldGhvZHMgPSB7R0VUOiAnZ2V0JywgUE9TVDogJ3Bvc3QnfTtcblxubGV0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG5cbmNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgY29uc29sZS5sb2coJ05vZGUgaHR0cCBSZXF1ZXN0Jyk7XG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICBfdGhpc1ttZXRob2RzW21ldGhvZF1dID0gKHVybCwgb3B0aW9ucykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIF90aGlzLm1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVhc29uKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogaGFuZGxpbmcgcmVxdWVzdCBtZXRob2RzXG4gICAqIEByZXR1cm5zIHt0ZXh0PHN0cmluZz59XG4gICAqKi9cbiAgbWFrZUxvY2FsUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykge1xuICAgIGxldCBfdGhpcyA9dGhpc1xuICAgIGNvbnNvbGUubG9nKCdIVFRQUyBSZXF1ZXN0OicueWVsbG93LCBtZXRob2QsIHVybCwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgdXJsTWFwID0gX3RoaXMubWFwUHJvdG9jb2wodXJsKTtcblxuICAgICAgY29uc29sZS5sb2coJ01hcHBlZCB1cmwgaXMgJy55ZWxsb3csIHVybE1hcCwnbWV0aG9kIGlzOicuZ3JlZW4sIG1ldGhvZCk7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEID0gJzAnXG5cbiAgICAgIGlmKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgLy8gaGFuZGxlIEdFVCBtZXRob2RcbiAgICAgICAgZmV0Y2godXJsTWFwKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbiAgICAgICAgfSkudGhlbigoYm9keSk9PiB7XG4gICAgICAgICAgcmVzb2x2ZShib2R5LnRvU3RyaW5nKCd1dGY4JykpXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIEdFVCBtZXRob2Qgb2YgdXJsOicucmVkICwgdXJsTWFwLCAnIHJlYXNvbiA6Jy5yZWQsIGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2UgaWYobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgbGV0IHBvc3RPcHRpb25zID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBvcHRpb25zICYmIG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IHt9XG4gICAgICAgIH07XG5cblx0Y29uc29sZS5sb2coJ1Bvc3RPcHRpb25zOicsIHBvc3RPcHRpb25zKTtcblxuICAgICAgICBmZXRjaCh1cmxNYXAsIHBvc3RPcHRpb25zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbiAgICAgICAgfSkudGhlbigoYm9keSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIFBPU1QgbWV0aG9kIG9mIHVybDonLHVybE1hcCwgJ3dpdGggb3B0aW9uczonLCBvcHRpb25zLCAncmVhc29uIDonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAvKipcbiAgKiBAcmV0dXJucyB7dmFyaWFibGU8c3RyaW5nPn1cbiAgKiovXG4gIG1hcFByb3RvY29sKHVybCkge1xuICAgIGxldCBwcm90b2NvbG1hcCA9IHtcbiAgICAgICdsb2NhbGhvc3Q6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ3VuZGVmaW5lZDovLyc6ICdodHRwczovLycsXG4gICAgICAnaHlwZXJ0eS1jYXRhbG9ndWU6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHBzOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwOi8vJzogJ2h0dHBzOi8vJ1xuICAgIH1cblxuICAgIGxldCBmb3VuZFByb3RvY29sID0gZmFsc2VcbiAgICBmb3IgKGxldCBwcm90b2NvbCBpbiBwcm90b2NvbG1hcCkge1xuICAgICAgaWYgKHVybC5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpID09PSBwcm90b2NvbCkge1xuICAgICAgICB1cmwgPSBwcm90b2NvbG1hcFtwcm90b2NvbF0gKyB1cmwuc2xpY2UocHJvdG9jb2wubGVuZ3RoLCB1cmwubGVuZ3RoKVxuICAgICAgICBmb3VuZFByb3RvY29sID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmRQcm90b2NvbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHByb3RvY29sIG9mIHVybDogJyArIHVybClcbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVxdWVzdC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gVE9ETzogaW1wb3J0IGFuZCBleHRlbmQgdGhlIGNsYXNzIG9mIHRoZSBzZXJ2aWNlLWZyYW1ld29ya1xuLy8gc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5jbGFzcyBSdW50aW1lQ2FwYWJpbGl0aWVzIHtcblxuICAgY29uc3RydWN0b3Ioc3RvcmFnZU1hbmFnZXIpIHtcbiAgICBpZiAoIXN0b3JhZ2VNYW5hZ2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBSdW50aW1lIENhcGFiaWxpdGllcyBuZWVkIHRoZSBzdG9yYWdlTWFuYWdlcicpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIgPSBzdG9yYWdlTWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFzIGEgcHJvbWlzZSBSdW50aW1lQ2FwYWJpbGl0aWVzIGpzb24gb2JqZWN0IHdpdGggYWxsIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMgb2YgdGhlIHJ1bnRpbWUuXG4gICAqIElmIGl0IHdhcyBub3QgeWV0IHBlcnNpc3RlZCBpbiB0aGUgU3RvcmFnZSBNYW5hZ2VyIGl0IGNvbGxlY3RzIGFsbCByZXF1aXJlZCBpbmZvIGZyb20gdGhlIHBsYXRmb3JtIGFuZCBzYXZlcyBpbiB0aGUgc3RvcmFnZSBtYW5hZ2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fVxuICAgKi9cbiAgZ2V0UnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuX2dldEVudmlyb25tZW50KCldKS50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0aWVzID0ge307XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLl9nZXRFbnZpcm9ubWVudCgpczogJywgdGhpcy5fZ2V0RW52aXJvbm1lbnQoKSk7XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKGNhcGFiaWxpdHkpID0+IHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGNhcGFiaWxpdGllcywgY2FwYWJpbGl0eSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXBhYmlsaXRpZXM6ICcsIGNhcGFiaWxpdGllcyk7XG4gICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KCdjYXBhYmlsaXRpZXMnLCAnMScsIGNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgcmVzb2x2ZShjYXBhYmlsaXRpZXMpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFzIGEgcHJvbWlzZSBhIGJvb2xlYW4gYWNjb3JkaW5nIHRvIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5nZXQoJ2NhcGFiaWxpdGllcycpLnRoZW4oKGNhcGFiaWxpdGllcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FwYWJpbGl0eSAnICsgY2FwYWJpbGl0eSArICcgaXMgYXZhaWxhYmxlPyAnLCBjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKTtcbiAgICAgICAgaWYgKGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgY2hlY2tpbmcgY2FwYWJpbGl0eSwgcmVhc29uOicsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGl0IHJlZnJlc2hlcyBwcmV2aW91c2x5IGNvbGxlY3RlZCBjYXBhYmlsaXRpZXMgYW5kIHVwZGF0ZXMgdGhlIHN0b3JhZ2UgbWFuYWdlclxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBvcmdhbml6ZSB0aGUgY29kZSBpbiBzZXBhcmF0ZWQgZmlsZXNcbiAgX2dldEVudmlyb25tZW50KCkge1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIG1vcmUgZWZmZWN0aXZlIGFuZCBjaGVjayB0aGUgZW52aXJvbm1lbnRcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogISEhKHdpbmRvdyAmJiBuYXZpZ2F0b3IpXG4gICAgICB9O1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVDYXBhYmlsaXRpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUNhcGFiaWxpdGllcy5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qXG4qL1xuXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94VHlwZSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZGJveEFwcCBleHRlbmRzIFNhbmRib3gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTYW5kYm94IEFwcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScuZ3JlZW4pO1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgcHJvY2Vzcy5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdTYW5kYm94QXBwIFJlY2VpdmVkIG1lc3NhZ2UgIGlzIDpcXG4nLmdyZWVuKTtcbiAgICAgIGlmIChtc2cuaGFzT3duUHJvcGVydHkoJ3RvJykgJiYgbXNnLnRvLnN0YXJ0c1dpdGgoJ2NvcmU6JykpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdGhpcy5fb25NZXNzYWdlKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBwb3N0TWVzc2FnZSBtZXNzYWdlOiAnLmdyZWVuKTtcbiAgICBwcm9jZXNzLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NhbmRib3hBcHAuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94VHlwZSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5sZXQgY2hpbGQgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG5sZXQgY29sb3JzID0gcmVxdWlyZSgnY29sb3JzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hXb3JrZXIgZXh0ZW5kcyBTYW5kYm94e1xuICBjb25zdHJ1Y3RvcihzY3JpcHQpIHtcbiAgICBzdXBlcihzY3JpcHQpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbiBTYW5kYm94IFdvcmtlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJy5yZWQpO1xuICAgIHRoaXMudHlwZSA9IFNhbmRib3hUeXBlLk5PUk1BTDtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMud29ya2VyID0gY2hpbGQuZm9yayhzY3JpcHQpO1xuICAgIGlmICghIXRoaXMud29ya2VyKSB7XG4gICAgICB0aGlzLndvcmtlci5vbignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgIF90aGlzLl9vbk1lc3NhZ2UoZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMud29ya2VyLnNlbmQoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCB3b3JrZXIgXFxuJywgZSk7XG4gICAgfVxuXG4gICAgdGhpcy53b3JrZXIub24oJ2V4aXQnLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBleGl0IFNhbmRib3hXb3JrZXIgc3RvcHBlZCcpO1xuICAgICAgdGhpcy53b3JrZXIuZXhpdCgpO1xuICAgICAgdGhpcy53b3JrZXIua2lsbCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53b3JrZXIub24oJ2Vycm9yJywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXJyb3IgIFNhbmRib3hXb3JrZXIgc3RvcHBlZCcpO1xuICAgICAgdGhpcy53b3JrZXIuZXhpdCgpO1xuICAgICAgdGhpcy53b3JrZXIua2lsbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uUG9zdE1lc3NhZ2UobXNnKSB7XG4gICAgdGhpcy53b3JrZXIuc2VuZChtc2cpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveFdvcmtlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVyaWpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXJpanNcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTYW5kYm94V29ya2VyIGZyb20gJy4vU2FuZGJveFdvcmtlcic7XG5pbXBvcnQgU2FuZGJveEFwcCBmcm9tICcuL1NhbmRib3hBcHAnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9SZXF1ZXN0JztcbmltcG9ydCBhdG9iIGZyb20gJ2F0b2InO1xuXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlcic7XG5pbXBvcnQgeyBSdW50aW1lQ2F0YWxvZ3VlIH0gZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlJztcbmltcG9ydCBQZXJzaXN0ZW5jZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXInO1xuXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICdub2RlLWxvY2Fsc3RvcmFnZSc7XG5cbmltcG9ydCBEZXhpZSBmcm9tICdkZXhpZSc7XG5EZXhpZS5kZXBlbmRlbmNpZXMuaW5kZXhlZERCID0gcmVxdWlyZSgnZmFrZS1pbmRleGVkZGInKVxuRGV4aWUuZGVwZW5kZW5jaWVzLklEQktleVJhbmdlID0gcmVxdWlyZSgnZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlJylcblxuaW1wb3J0IHNldEdsb2JhbFZhcnMgZnJvbSAnaW5kZXhlZGRic2hpbSc7XG5cbmltcG9ydCBSdW50aW1lQ2FwYWJpbGl0aWVzIGZyb20gJy4vUnVudGltZUNhcGFiaWxpdGllcyc7XG5cbmltcG9ydCBXZWJDcnlwdG8gZnJvbSAnbm9kZS13ZWJjcnlwdG8tb3NzbCc7XG5cblxubGV0IGNyZWF0ZVN0b3JhZ2VNYW5hZ2VyID0gKCkgPT4ge1xuICBsZXQgaW5kZXhlZGRCID0ge307XG4gIGxldCB7aW5kZXhlZERCLCBJREJLZXlSYW5nZSB9ID0gaW5kZXhlZGRCO1xuICBsZXQgc3RvcmFnZU5hbWUgPSAnY2FjaGUnO1xuXG4gIGNvbnN0IGRiID0gbmV3IERleGllKHN0b3JhZ2VOYW1lKTtcblxuICBzdG9yYWdlTWFuYWdlciA9IG5ldyBTdG9yYWdlTWFuYWdlcihkYiwgc3RvcmFnZU5hbWUpO1xuICByZXR1cm4gc3RvcmFnZU1hbmFnZXI7XG59O1xuXG5sZXQgc3RvcmFnZU1hbmFnZXIgPSBjcmVhdGVTdG9yYWdlTWFuYWdlcigpO1xuXG5sZXQgUnVudGltZUZhY3RvcnkgPSBPYmplY3QuY3JlYXRlKHtcbiAgICBjcmVhdGVTYW5kYm94KGNhcGFiaWxpdGllcykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpICA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdHkgPSAnbm9kZSc7XG4gICAgICAgIGxldCBTYW5kYm94Q2FwYWJpbGl0aWVzID0ge307XG5cbiAgICAgICAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyLmlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgU2FuZGJveENhcGFiaWxpdGllcyA9IHsgXCJub2RlXCI6IHRydWUgfTtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IFNhbmRib3hXb3JrZXIoICcuLi9kaXN0L0NvbnRleHRTZXJ2aWNlUHJvdmlkZXIuanMnKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgICAgfVxuICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbY3JlYXRlU2FuZGJveCBdLCBFcnJvciBvY2N1cmVkIHdoaWxlIGNyZWF0aW5nIFNhbmRib3gsIHJlYXNvbiA6ICcsIHJlYXNvbik7XG4gICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBcHBTYW5kYm94KCkge1xuICAgICAgcmV0dXJuIG5ldyBTYW5kYm94QXBwKCAnLi4vZGlzdC9Db250ZXh0QXBwLmpzJyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUh0dHBSZXF1ZXN0KCkge1xuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSxcblxuICAgIGF0b2IoYjY0KSB7XG4gICAgICByZXR1cm4gYXRvYihiNjQpO1xuICAgIH0sXG5cbiAgICBwZXJzaXN0ZW5jZU1hbmFnZXIoKSB7XG4gICAgICBsZXQgbG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgnLi9zY3JhdGNoJyk7XG4gICAgICByZXR1cm4gbmV3IFBlcnNpc3RlbmNlTWFuYWdlcihsb2NhbFN0b3JhZ2UpO1xuICAgIH0sXG5cbiAgICBzdG9yYWdlTWFuYWdlcigpIHtcbiAgICAgIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlUnVudGltZUNhdGFsb2d1ZSgpIHtcbiAgICAgIHRoaXMuY2F0YWxvZ3VlID0gbmV3IFJ1bnRpbWVDYXRhbG9ndWUodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5jYXRhbG9ndWU7XG4gICAgfSxcblxuICAgIHJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIgPSBuZXcgUnVudGltZUNhcGFiaWxpdGllcyhzdG9yYWdlTWFuYWdlcik7XG4gICAgICByZXR1cm4gIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlV2ViY3J5cHRvKCkge1xuICAgICAgcmV0dXJuIG5ldyBXZWJDcnlwdG8oKTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lRmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lRmFjdG9yeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF0b2JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhdG9iXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGV4aWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZXhpZVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmFrZS1pbmRleGVkZGJcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1sb2NhbHN0b3JhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXdlYmNyeXB0by1vc3NsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbi8qKlxuICogTm9kZS5qcyBjaGlsZCBwcm9jZXNzIChzaW11bHRhbmVvdXNseSBpcyBhIHBhcmVudCBwcm9jZXNzIG9mIENvbnRleHRTZXJ2aWNlUHJvdmlkZXIgc2FuZGJveClcbiAqIHVzZWQgYXMgYW4gaXNvbGF0ZWQgc2FuZGJveCB0byBsb2FkIHRoZSBIeXBlcnR5IHJ1bnRpbWUgYWthIGNvcmVSdW50aW1lXG4gKiovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0IFJ1bnRpbWVGYWN0b3J5IGZyb20gJy4vUnVudGltZUZhY3RvcnknO1xuaW1wb3J0IF9ldmFsIGZyb20gJ2V2YWwnO1xuXG5cblxubGV0IGRvbWFpbjtcbmxldCBydW50aW1lRGVzY3JpcHRvcjtcblxubGV0IGNhdGFsb2d1ZSA9IFJ1bnRpbWVGYWN0b3J5LmNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUoKTtcblxuLy8gcmV0dXJuSHlwZXJ0eSBnaXZlbnQgdGhlIHJ1bnRpbWVIeXBlcnR5VVJMLFxuLy8gU2VuZHMgbWVzc2FnZSA9J2xvYWRlZEh5cGVydHknIHRvIHRoZSB0aGUgcGFyZW50IHByb2Nlc3MgUnVudGltZU5vZGUgdGhyb3VnaHQgSVBDIGNoYW5uZWxcblxuZnVuY3Rpb24gcmV0dXJuSHlwZXJ0eShoeXBlcnR5KSB7IFxuICBwcm9jZXNzLnNlbmQoe3RvOidydW50aW1lOmxvYWRlZEh5cGVydHknLCBib2R5OiBoeXBlcnR5fSk7XG59XG5cbi8vIHdoaWxlIGxvYWRpbmcgdGhlIHByb3RvY29sU3R1YiBzZWFyY2ggaHlwZXJ0eSBpbiB0aGUgcnVudGltZSByZWdpc3RyeVxuZnVuY3Rpb24gc2VhcmNoSHlwZXJ0eShydW50aW1lLCBkZXNjcmlwdG9yKSB7XG4gIGxldCBoeXBlcnR5ID0gdW5kZWZpbmVkO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoIWh5cGVydHkgJiYgaW5kZXggPCBydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3QubGVuZ3RoKSB7XG4gICAgaWYgKHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF0uZGVzY3JpcHRvciA9PT0gZGVzY3JpcHRvcilcbiAgICAgICAgaHlwZXJ0eSA9IHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF07XG4gICAgaW5kZXgrKztcbiAgfVxuICBjb25zb2xlLmxvZygnSHllcHJ0eSBmb3VuZGVkIScuZ3JlZW4pO1xuICByZXR1cm4gaHlwZXJ0eTtcbn1cblxuLy8gSW5zdGFsbCBydW50aW1lIG9uIHRoZSBjb3JlIFNhbmRib3hcbmZ1bmN0aW9uIHJ1bnRpbWVSZWFkeShydW50aW1lKSB7XG4gIC8vIGNvcmVSdW50aW1lIGdsb2JhbCBFdmVudExpc3RlbmVyIGZvciBhbnR5IGluY29taW5nIG1lc3NhZ2VcbiAgcHJvY2Vzcy5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICBpZiAobXNnLnRvID09PSAnY29yZTpsb2FkSHlwZXJ0eScpIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gbXNnLmJvZHkuZGVzY3JpcHRvcjtcbiAgICAgIGxldCBoeXBlcnR5ID0gc2VhcmNoSHlwZXJ0eShydW50aW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgIGlmIChoeXBlcnR5KSB7XG4gICAgICAgIHJldHVybkh5cGVydHkoe3J1bnRpbWVIeXBlcnR5VVJMOiBoeXBlcnR5Lmh5cGVydHlVUkx9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bnRpbWUubG9hZEh5cGVydHkoZGVzY3JpcHRvcikudGhlbihyZXR1cm5IeXBlcnR5KS5jYXRjaCgoZXJyb3IpPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIGxvYWRpbmcgSHlwZXJ0eSwgcmVhc29uOiAnLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXNnLnRvID09PSAnY29yZTpsb2FkU3R1YicpIHtcbiAgICAgIHJ1bnRpbWUubG9hZFN0dWIobXNnLmJvZHkuZG9tYWluKTtcbiAgICB9XG4gIH0sIGZhbHNlKTtcbiAgY29uc29sZS5sb2coJy0tPiBzZW5kaW5nIHRvIE1haW4gcHJvY2VzcyBSdW50aW1lTm9kZScub3JhbmdlKTtcbiAgcHJvY2Vzcy5zZW5kKHt0bzoncnVudGltZTppbnN0YWxsZWQnLCBib2R5Ont9fSk7XG59XG5cblxuXG5wcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgaWYgKG1zZy5kbyA9PT0gJ2luc3RhbGwgcnVudGltZSBjb3JlJykgeyAgICBcbiAgICAgICBsZXQgcnVudGltZVVSTCA9IG1zZy5ib2R5LnJ1bnRpbWVVUkw7XG4gICAgICAgZG9tYWluID0gbXNnLmJvZHkuZG9tYWluO1xuICAgICAgIC8vIEdldHMgUnVudGltZURlc2NyaXB0b3IgZnJvbSB0aGUgcnVudGltZSBjYXRhbG9ndWVcbiAgICAgIGNhdGFsb2d1ZS5nZXRSdW50aW1lRGVzY3JpcHRvcihydW50aW1lVVJMKS50aGVuKChkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgIHJ1bnRpbWVEZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCA9PT0gJy9zb3VyY2VQYWNrYWdlJykge1xuICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGFsb2d1ZS5nZXRTb3VyY2VQYWNrYWdlRnJvbVVSTChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwpO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKChzb3VyY2VQYWNrYWdlKSA9PiB7XG4gICAgICAgICAgbGV0IFJ1bnRpbWVVQSA9IF9ldmFsKHNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSwgdHJ1ZSk7XG4gICAgICAgICAgbGV0IHJ1bnRpbWUgPSBuZXcgUnVudGltZVVBKHJ1bnRpbWVEZXNjcmlwdG9yLCBSdW50aW1lRmFjdG9yeSwgZG9tYWluKTtcbiAgICAgICAgICBydW50aW1lLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJ1bnRpbWVSZWFkeShydW50aW1lKTtcbiAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW5pdCcsIHJlYXNvbik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgdGhlIFJ1bnRpbWVEZXNjcmlwdG9yIGZyb20gdGhlIHNlcnZpY2UgZnJhbWV3b3JrIGNhdGFsb2d1ZSwgcmVhc29uOiAnLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vIGNvcmVSdW50aW1lIFByb2Nlc3MgIGVycm9yIGhhbmRsaW5nXG5wcm9jZXNzLm9uKCd3YXJuaW5nJywgKHdhcm5pbmcpID0+IHtcbiAgY29uc29sZS53YXJuKHdhcm5pbmcubmFtZSk7XG4gIGNvbnNvbGUud2Fybih3YXJuaW5nLm1lc3NhZ2UpO1xuICBjb25zb2xlLndhcm4od2FybmluZy5zdGFjayk7XG59KTtcblxucHJvY2Vzcy5vbignZXhpdCcsIChtc2cpID0+IHtcbiAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGNvcmUgZXhpdGVkJyk7XG4gICBwcm9jZXNzLmV4aXQoKTtcbiAgIHByb2Nlc3Mua2lsbCgpO1xufSk7XG5cbnByb2Nlc3Mub24oJ2Vycm9yJywgKG1zZykgPT4ge1xuICBjb25zb2xlLndhcm4oJ2NoaWxkIHByb2Nlc3MgZXJyb3IgY29yZSBzdG9wcGVkJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCAoKSA9PiB7XG4gIGNvbnNvbGUud2FybignUmVjZWl2ZWQgU0lHSU5ULiBhbGwgTm9kZSBTdWItUHJvY2VzcyBhcmUgZXhpdGVkJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pOyAvLyB0byBjYXRjaCBjcnRsLWNcblxucHJvY2Vzcy5vbignU0lHVEVSTScsICgpID0+IHtcbiAgY29uc29sZS53YXJuKCdSZWNlaXZlZCBTSUdURVJNLiBjb3JlIFByZXNzIENvbnRyb2wtRCB0byBleGl0LicpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTsgLy8gdG8gY2F0Y2gga2lsbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9