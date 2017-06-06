// version: 0.1.0
// date: Tue Jun 06 2017 14:53:19 GMT+0200 (CEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"), require("fs"));
	else if(typeof define === 'function' && define.amd)
		define("core", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "node-fetch", "urijs", "atob", "dexie", "fake-indexeddb", "fake-indexeddb/lib/FDBKeyRange", "indexeddbshim", "node-localstorage", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager", "fs"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"), require("fs"));
	else
		root["core"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["node-fetch"], root["urijs"], root["atob"], root["dexie"], root["fake-indexeddb"], root["fake-indexeddb/lib/FDBKeyRange"], root["indexeddbshim"], root["node-localstorage"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"], root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_23__) {
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
            /*          headers: {
                        'Content-Type': 'application/json',
                        'cache-control': 'no-cache',
                      },*/
            body: options && options.body ? options.body : null
          };

          fetch(urlMap, postOptions).then(function (res) {
            console.log('statusCode is: '.green, res.status);
            return res.text();
          }).then(function (body) {
            resolve(body.toString('utf8'));
          }).catch(function (error) {
            console.error('Error occured on POST method of url:', urlMap, 'with options:', options, 'reason :', err);
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

var _StorageManager = __webpack_require__(21);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _RuntimeCatalogue = __webpack_require__(20);

var _PersistenceManager = __webpack_require__(19);

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _nodeLocalstorage = __webpack_require__(18);

var _dexie = __webpack_require__(14);

var _dexie2 = _interopRequireDefault(_dexie);

var _indexeddbshim = __webpack_require__(17);

var _indexeddbshim2 = _interopRequireDefault(_indexeddbshim);

var _RuntimeCapabilities = __webpack_require__(6);

var _RuntimeCapabilities2 = _interopRequireDefault(_RuntimeCapabilities);

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

module.exports = require("service-framework/dist/PersistenceManager");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/RuntimeCatalogue");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/StorageManager");

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
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


var _urijs = __webpack_require__(10);

var _urijs2 = _interopRequireDefault(_urijs);

var _RuntimeFactory = __webpack_require__(12);

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

var _eval2 = __webpack_require__(2);

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = __webpack_require__(23);

// //FIXME https://github.com/reTHINK-project/dev-service-framework/issues/46


var domain = void 0;
var runtimeDescriptor = void 0;

var catalogue = _RuntimeFactory2.default.createRuntimeCatalogue();

// returnHyperty givent the runtimeHypertyURL,
// Sends message ='loadedHyperty' to the the parent process RuntimeNode throught IPC channel

function returnHyperty(hyperty) {
  process.send({ to: 'runtime:loadedHyperty', body: hyperty });
}

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

process.on('exit', function (msg) {
  console.log('child process core exited');
  process.exit();
  process.kill();
});

process.on('error', function (msg) {
  console.log('child process error core stopped');
  process.exit();
  process.kill();
});

process.on('SIGINT', function () {
  console.log('Received SIGINT. all Node Sub-Process are exited');
  process.exit();
  process.kill();
}); // to catch crtl-c

process.on('SIGTERM', function () {
  console.log('Received SIGTERM. core Press Control-D to exit.');
  process.exit();
  process.kill();
}); // to catch kill

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1MjlkZjRhMGM4ZjAwZTczMWY0NSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVyaWpzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZXhpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiR0VUIiwiUE9TVCIsImZldGNoIiwicmVxdWlyZSIsIlJlcXVlc3QiLCJfdGhpcyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm1ldGhvZCIsInVybCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1ha2VMb2NhbFJlcXVlc3QiLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJyZWFzb24iLCJ5ZWxsb3ciLCJ1cmxNYXAiLCJtYXBQcm90b2NvbCIsImdyZWVuIiwicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJyZXMiLCJzdGF0dXMiLCJ0ZXh0IiwiYm9keSIsInRvU3RyaW5nIiwiZXJyIiwiZXJyb3IiLCJyZWQiLCJwb3N0T3B0aW9ucyIsInByb3RvY29sbWFwIiwiZm91bmRQcm90b2NvbCIsInByb3RvY29sIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciIsIlJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJzdG9yYWdlTWFuYWdlciIsImFsbCIsIl9nZXRFbnZpcm9ubWVudCIsImNhcGFiaWxpdGllcyIsImNhcGFiaWxpdHkiLCJhc3NpZ24iLCJzZXQiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJub2RlIiwid2luZG93IiwibmF2aWdhdG9yIiwiU2FuZGJveEFwcCIsInR5cGUiLCJOT1JNQUwiLCJvbiIsIm1zZyIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJzZW5kIiwiY2hpbGQiLCJjb2xvcnMiLCJTYW5kYm94V29ya2VyIiwic2NyaXB0Iiwid29ya2VyIiwiZm9yayIsImUiLCJleGl0Iiwia2lsbCIsImRlcGVuZGVuY2llcyIsImluZGV4ZWREQiIsIklEQktleVJhbmdlIiwiY3JlYXRlU3RvcmFnZU1hbmFnZXIiLCJpbmRleGVkZEIiLCJzdG9yYWdlTmFtZSIsImRiIiwiUnVudGltZUZhY3RvcnkiLCJjcmVhdGUiLCJjcmVhdGVTYW5kYm94IiwiU2FuZGJveENhcGFiaWxpdGllcyIsImNhcGFiaWxpdGllc01hbmFnZXIiLCJpc0F2YWlsYWJsZSIsImNyZWF0ZUFwcFNhbmRib3giLCJjcmVhdGVIdHRwUmVxdWVzdCIsInJlcXVlc3QiLCJhdG9iIiwiYjY0IiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlUnVudGltZUNhdGFsb2d1ZSIsImNhdGFsb2d1ZSIsInJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJmcyIsImRvbWFpbiIsInJ1bnRpbWVEZXNjcmlwdG9yIiwicmV0dXJuSHlwZXJ0eSIsImh5cGVydHkiLCJzZWFyY2hIeXBlcnR5IiwicnVudGltZSIsImRlc2NyaXB0b3IiLCJ1bmRlZmluZWQiLCJpbmRleCIsInJlZ2lzdHJ5IiwiaHlwZXJ0aWVzTGlzdCIsInJ1bnRpbWVSZWFkeSIsInJ1bnRpbWVIeXBlcnR5VVJMIiwiaHlwZXJ0eVVSTCIsImxvYWRIeXBlcnR5IiwibG9hZFN0dWIiLCJvcmFuZ2UiLCJkbyIsInJ1bnRpbWVVUkwiLCJnZXRSdW50aW1lRGVzY3JpcHRvciIsInNvdXJjZVBhY2thZ2VVUkwiLCJzb3VyY2VQYWNrYWdlIiwiZ2V0U291cmNlUGFja2FnZUZyb21VUkwiLCJSdW50aW1lVUEiLCJzb3VyY2VDb2RlIiwiaW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFRNkIsS0FBUixDQUFjLG9GQUFkLEVBQW9HZCxNQUFwRztBQUNELEtBakJEO0FBa0JEO0FBQ0osQ0F4QkQ7O0FBMkJBSyxRQUFRbUMsRUFBUixDQUFXLE1BQVgsRUFBbUIsVUFBU0MsR0FBVCxFQUFjO0FBQzlCeEQsVUFBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRixDQUpEOztBQU1BakQsUUFBUW1DLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVNDLEdBQVQsRUFBYztBQUNoQ3hELFVBQVFDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBbUIsVUFBUWdELElBQVI7QUFDQWhELFVBQVFpRCxJQUFSO0FBQ0QsQ0FKRDs7QUFPQWpELFFBQVFtQyxFQUFSLENBQVcsUUFBWCxFQUFxQixZQUFNO0FBQ3pCdkQsVUFBUUMsR0FBUixDQUFZLGtEQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSTs7QUFFSmpELFFBQVFtQyxFQUFSLENBQVcsU0FBWCxFQUFzQixZQUFNO0FBQzFCdkQsVUFBUUMsR0FBUixDQUFZLGlEQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSSxnQiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwiZnNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjb3JlXCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiZXZhbFwiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJjb2xvcnNcIiwgXCJub2RlLWZldGNoXCIsIFwidXJpanNcIiwgXCJhdG9iXCIsIFwiZGV4aWVcIiwgXCJmYWtlLWluZGV4ZWRkYlwiLCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiLCBcImluZGV4ZWRkYnNoaW1cIiwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiLCBcImZzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiYXRvYlwiKSwgcmVxdWlyZShcImRleGllXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiksIHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpLCByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJmc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSwgcm9vdFtcImZzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUyOWRmNGEwYzhmMDBlNzMxZjQ1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmFsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5jb25zdCBtZXRob2RzID0ge0dFVDogJ2dldCcsIFBPU1Q6ICdwb3N0J307XG5cbmxldCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpO1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgX3RoaXNbbWV0aG9kc1ttZXRob2RdXSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBfdGhpcy5tYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsaW5nIHJlcXVlc3QgbWV0aG9kc1xuICAgKiBAcmV0dXJucyB7dGV4dDxzdHJpbmc+fVxuICAgKiovXG4gIG1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgX3RoaXMgPXRoaXNcbiAgICBjb25zb2xlLmxvZygnSFRUUFMgUmVxdWVzdDonLnllbGxvdywgbWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNYXBwZWQgdXJsIGlzICcueWVsbG93LCB1cmxNYXAsJ21ldGhvZCBpczonLmdyZWVuLCBtZXRob2QpO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xuXG4gICAgICBpZihtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBHRVQgbWV0aG9kXG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBHRVQgbWV0aG9kIG9mIHVybDonLnJlZCAsIHVybE1hcCwgJyByZWFzb24gOicucmVkLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGxldCBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8qICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGJvZHk6IG9wdGlvbnMgJiYgb3B0aW9ucy5ib2R5ID8gb3B0aW9ucy5ib2R5IDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKHVybE1hcCwgcG9zdE9wdGlvbnMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuICAgICAgICB9KS50aGVuKChib2R5KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShib2R5LnRvU3RyaW5nKCd1dGY4JykpXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gUE9TVCBtZXRob2Qgb2YgdXJsOicsdXJsTWFwLCAnd2l0aCBvcHRpb25zOicsIG9wdGlvbnMsICdyZWFzb24gOicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAvKipcbiAgKiBAcmV0dXJucyB7dmFyaWFibGU8c3RyaW5nPn1cbiAgKiovXG4gIG1hcFByb3RvY29sKHVybCkge1xuICAgIGxldCBwcm90b2NvbG1hcCA9IHtcbiAgICAgICdsb2NhbGhvc3Q6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ3VuZGVmaW5lZDovLyc6ICdodHRwczovLycsXG4gICAgICAnaHlwZXJ0eS1jYXRhbG9ndWU6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHBzOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwOi8vJzogJ2h0dHBzOi8vJ1xuICAgIH1cblxuICAgIGxldCBmb3VuZFByb3RvY29sID0gZmFsc2VcbiAgICBmb3IgKGxldCBwcm90b2NvbCBpbiBwcm90b2NvbG1hcCkge1xuICAgICAgaWYgKHVybC5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpID09PSBwcm90b2NvbCkge1xuICAgICAgICB1cmwgPSBwcm90b2NvbG1hcFtwcm90b2NvbF0gKyB1cmwuc2xpY2UocHJvdG9jb2wubGVuZ3RoLCB1cmwubGVuZ3RoKVxuICAgICAgICBmb3VuZFByb3RvY29sID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmRQcm90b2NvbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHByb3RvY29sIG9mIHVybDogJyArIHVybClcbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vIFRPRE86IGltcG9ydCBhbmQgZXh0ZW5kIHRoZSBjbGFzcyBvZiB0aGUgc2VydmljZS1mcmFtZXdvcmtcbi8vIHNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhcGFiaWxpdGllcztcblxuY2xhc3MgUnVudGltZUNhcGFiaWxpdGllcyB7XG5cbiAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VNYW5hZ2VyKSB7XG4gICAgaWYgKCFzdG9yYWdlTWFuYWdlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgUnVudGltZSBDYXBhYmlsaXRpZXMgbmVlZCB0aGUgc3RvcmFnZU1hbmFnZXInKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhcyBhIHByb21pc2UgUnVudGltZUNhcGFiaWxpdGllcyBqc29uIG9iamVjdCB3aXRoIGFsbCBhdmFpbGFibGUgY2FwYWJpbGl0aWVzIG9mIHRoZSBydW50aW1lLlxuICAgKiBJZiBpdCB3YXMgbm90IHlldCBwZXJzaXN0ZWQgaW4gdGhlIFN0b3JhZ2UgTWFuYWdlciBpdCBjb2xsZWN0cyBhbGwgcmVxdWlyZWQgaW5mbyBmcm9tIHRoZSBwbGF0Zm9ybSBhbmQgc2F2ZXMgaW4gdGhlIHN0b3JhZ2UgbWFuYWdlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbiAgICovXG4gIGdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLl9nZXRFbnZpcm9ubWVudCgpXSkudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdGllcyA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5fZ2V0RW52aXJvbm1lbnQoKXM6ICcsIHRoaXMuX2dldEVudmlyb25tZW50KCkpO1xuXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChjYXBhYmlsaXR5KSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihjYXBhYmlsaXRpZXMsIGNhcGFiaWxpdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2FwYWJpbGl0aWVzOiAnLCBjYXBhYmlsaXRpZXMpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLnNldCgnY2FwYWJpbGl0aWVzJywgJzEnLCBjYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgIHJlc29sdmUoY2FwYWJpbGl0aWVzKTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhcyBhIHByb21pc2UgYSBib29sZWFuIGFjY29yZGluZyB0byBhdmFpbGFibGUgY2FwYWJpbGl0aWVzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIGlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KCdjYXBhYmlsaXRpZXMnKS50aGVuKChjYXBhYmlsaXRpZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhcGFiaWxpdHkgJyArIGNhcGFiaWxpdHkgKyAnIGlzIGF2YWlsYWJsZT8gJywgY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSk7XG4gICAgICAgIGlmIChjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhcyBvY2N1cmVkIHdoaWxlIGNoZWNraW5nIGNhcGFiaWxpdHksIHJlYXNvbjonLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpdCByZWZyZXNoZXMgcHJldmlvdXNseSBjb2xsZWN0ZWQgY2FwYWJpbGl0aWVzIGFuZCB1cGRhdGVzIHRoZSBzdG9yYWdlIG1hbmFnZXJcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVE9ETzogb3JnYW5pemUgdGhlIGNvZGUgaW4gc2VwYXJhdGVkIGZpbGVzXG4gIF9nZXRFbnZpcm9ubWVudCgpIHtcbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSBtb3JlIGVmZmVjdGl2ZSBhbmQgY2hlY2sgdGhlIGVudmlyb25tZW50XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6ICEhISh3aW5kb3cgJiYgbmF2aWdhdG9yKVxuICAgICAgfTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbipcbiovXG5cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hUeXBlIH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94QXBwIGV4dGVuZHMgU2FuZGJveCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNhbmRib3ggQXBwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJy5ncmVlbik7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9IFNhbmRib3hUeXBlLk5PUk1BTDtcbiAgICBwcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1NhbmRib3hBcHAgUmVjZWl2ZWQgbWVzc2FnZSAgaXMgOlxcbicuZ3JlZW4pO1xuICAgICAgaWYgKG1zZy5oYXNPd25Qcm9wZXJ0eSgndG8nKSAmJiBtc2cudG8uc3RhcnRzV2l0aCgnY29yZTonKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB0aGlzLl9vbk1lc3NhZ2UobXNnKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIGNvbnNvbGUubG9nKCdTYW5kYm94QXBwIHBvc3RNZXNzYWdlIG1lc3NhZ2U6ICcuZ3JlZW4pO1xuICAgIHByb2Nlc3Muc2VuZChtc2cpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94QXBwLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xubGV0IGNoaWxkID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xubGV0IGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94V29ya2VyIGV4dGVuZHMgU2FuZGJveHtcbiAgY29uc3RydWN0b3Ioc2NyaXB0KSB7XG4gICAgc3VwZXIoc2NyaXB0KTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW4gU2FuZGJveCBXb3JrZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScucmVkKTtcbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndvcmtlciA9IGNoaWxkLmZvcmsoc2NyaXB0KTtcbiAgICBpZiAoISF0aGlzLndvcmtlcikge1xuICAgICAgdGhpcy53b3JrZXIub24oJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBfdGhpcy5fb25NZXNzYWdlKGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLndvcmtlci5zZW5kKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgd29ya2VyIFxcbicsIGUpO1xuICAgIH1cblxuICAgIHRoaXMud29ya2VyLm9uKCdleGl0JywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXhpdCBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcblxuICAgIHRoaXMud29ya2VyLm9uKCdlcnJvcicsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGVycm9yICBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIHRoaXMud29ya2VyLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94V29ya2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJpanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1cmlqc1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNhbmRib3hXb3JrZXIgZnJvbSAnLi9TYW5kYm94V29ya2VyJztcbmltcG9ydCBTYW5kYm94QXBwIGZyb20gJy4vU2FuZGJveEFwcCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL1JlcXVlc3QnO1xuaW1wb3J0IGF0b2IgZnJvbSAnYXRvYic7XG5cbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyJztcbmltcG9ydCB7IFJ1bnRpbWVDYXRhbG9ndWUgfSBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWUnO1xuaW1wb3J0IFBlcnNpc3RlbmNlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlcic7XG5cbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ25vZGUtbG9jYWxzdG9yYWdlJztcblxuaW1wb3J0IERleGllIGZyb20gJ2RleGllJztcbkRleGllLmRlcGVuZGVuY2llcy5pbmRleGVkREIgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYicpXG5EZXhpZS5kZXBlbmRlbmNpZXMuSURCS2V5UmFuZ2UgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2UnKVxuXG5pbXBvcnQgc2V0R2xvYmFsVmFycyBmcm9tICdpbmRleGVkZGJzaGltJztcblxuaW1wb3J0IFJ1bnRpbWVDYXBhYmlsaXRpZXMgZnJvbSAnLi9SdW50aW1lQ2FwYWJpbGl0aWVzJztcblxuXG5sZXQgY3JlYXRlU3RvcmFnZU1hbmFnZXIgPSAoKSA9PiB7XG4gIGxldCBpbmRleGVkZEIgPSB7fTtcbiAgbGV0IHtpbmRleGVkREIsIElEQktleVJhbmdlIH0gPSBpbmRleGVkZEI7XG4gIGxldCBzdG9yYWdlTmFtZSA9ICdjYWNoZSc7XG5cbiAgY29uc3QgZGIgPSBuZXcgRGV4aWUoc3RvcmFnZU5hbWUpO1xuXG4gIHN0b3JhZ2VNYW5hZ2VyID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKGRiLCBzdG9yYWdlTmFtZSk7XG4gIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbn07XG5cbmxldCBzdG9yYWdlTWFuYWdlciA9IGNyZWF0ZVN0b3JhZ2VNYW5hZ2VyKCk7XG5cbmxldCBSdW50aW1lRmFjdG9yeSA9IE9iamVjdC5jcmVhdGUoe1xuICAgIGNyZWF0ZVNhbmRib3goY2FwYWJpbGl0aWVzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0eSA9ICdub2RlJztcbiAgICAgICAgbGV0IFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIuaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBTYW5kYm94Q2FwYWJpbGl0aWVzID0geyBcIm5vZGVcIjogdHJ1ZSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgU2FuZGJveFdvcmtlciggJy4uL2Rpc3QvQ29udGV4dFNlcnZpY2VQcm92aWRlci5qcycpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgICB9XG4gICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVTYW5kYm94IF0sIEVycm9yIG9jY3VyZWQgd2hpbGUgY3JlYXRpbmcgU2FuZGJveCwgcmVhc29uIDogJywgcmVhc29uKTtcbiAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUFwcFNhbmRib3goKSB7XG4gICAgICByZXR1cm4gbmV3IFNhbmRib3hBcHAoICcuLi9kaXN0L0NvbnRleHRBcHAuanMnKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSHR0cFJlcXVlc3QoKSB7XG4gICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9LFxuXG4gICAgYXRvYihiNjQpIHtcbiAgICAgIHJldHVybiBhdG9iKGI2NCk7XG4gICAgfSxcblxuICAgIHBlcnNpc3RlbmNlTWFuYWdlcigpIHtcbiAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCcuL3NjcmF0Y2gnKTtcbiAgICAgIHJldHVybiBuZXcgUGVyc2lzdGVuY2VNYW5hZ2VyKGxvY2FsU3RvcmFnZSk7XG4gICAgfSxcblxuICAgIHN0b3JhZ2VNYW5hZ2VyKCkge1xuICAgICAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xuICAgIH0sXG5cbiAgICBjcmVhdGVSdW50aW1lQ2F0YWxvZ3VlKCkge1xuICAgICAgdGhpcy5jYXRhbG9ndWUgPSBuZXcgUnVudGltZUNhdGFsb2d1ZSh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLmNhdGFsb2d1ZTtcbiAgICB9LFxuXG4gICAgcnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlciA9IG5ldyBSdW50aW1lQ2FwYWJpbGl0aWVzKHN0b3JhZ2VNYW5hZ2VyKTtcbiAgICAgIHJldHVybiAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVGYWN0b3J5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXRvYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF0b2JcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZXhpZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRleGllXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuaW1wb3J0IFVSSSBmcm9tICd1cmlqcyc7XG5cbi8vIC8vRklYTUUgaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9kZXYtc2VydmljZS1mcmFtZXdvcmsvaXNzdWVzLzQ2XG5pbXBvcnQgUnVudGltZUZhY3RvcnkgZnJvbSAnLi9SdW50aW1lRmFjdG9yeSc7XG5cbmltcG9ydCBfZXZhbCBmcm9tICdldmFsJztcblxuXG5cblxubGV0IGRvbWFpbjtcbmxldCBydW50aW1lRGVzY3JpcHRvcjtcblxubGV0IGNhdGFsb2d1ZSA9IFJ1bnRpbWVGYWN0b3J5LmNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUoKTtcblxuLy8gcmV0dXJuSHlwZXJ0eSBnaXZlbnQgdGhlIHJ1bnRpbWVIeXBlcnR5VVJMLFxuLy8gU2VuZHMgbWVzc2FnZSA9J2xvYWRlZEh5cGVydHknIHRvIHRoZSB0aGUgcGFyZW50IHByb2Nlc3MgUnVudGltZU5vZGUgdGhyb3VnaHQgSVBDIGNoYW5uZWxcblxuZnVuY3Rpb24gcmV0dXJuSHlwZXJ0eShoeXBlcnR5KSB7IFxuICBwcm9jZXNzLnNlbmQoe3RvOidydW50aW1lOmxvYWRlZEh5cGVydHknLCBib2R5OiBoeXBlcnR5fSk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEh5cGVydHkocnVudGltZSwgZGVzY3JpcHRvcikge1xuICBsZXQgaHlwZXJ0eSA9IHVuZGVmaW5lZDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgd2hpbGUgKCFoeXBlcnR5ICYmIGluZGV4IDwgcnVudGltZS5yZWdpc3RyeS5oeXBlcnRpZXNMaXN0Lmxlbmd0aCkge1xuICAgIGlmIChydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3RbaW5kZXhdLmRlc2NyaXB0b3IgPT09IGRlc2NyaXB0b3IpXG4gICAgICAgIGh5cGVydHkgPSBydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3RbaW5kZXhdO1xuICAgIGluZGV4Kys7XG4gIH1cbiAgY29uc29sZS5sb2coJ0h5ZXBydHkgZm91bmRlZCEnLmdyZWVuKTtcbiAgcmV0dXJuIGh5cGVydHk7XG59XG5cbmZ1bmN0aW9uIHJ1bnRpbWVSZWFkeShydW50aW1lKSB7XG5cbiAgLy8gY29yZVJ1bnRpbWUgZ2xvYmFsIEV2ZW50TGlzdGVuZXIgZm9yIGFudHkgaW5jb21pbmcgbWVzc2FnZVxuICBwcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgIGlmIChtc2cudG8gPT09ICdjb3JlOmxvYWRIeXBlcnR5Jykge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBtc2cuYm9keS5kZXNjcmlwdG9yO1xuICAgICAgbGV0IGh5cGVydHkgPSBzZWFyY2hIeXBlcnR5KHJ1bnRpbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgaWYgKGh5cGVydHkpIHtcbiAgICAgICAgcmV0dXJuSHlwZXJ0eSh7cnVudGltZUh5cGVydHlVUkw6IGh5cGVydHkuaHlwZXJ0eVVSTH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVudGltZS5sb2FkSHlwZXJ0eShkZXNjcmlwdG9yKS50aGVuKHJldHVybkh5cGVydHkpLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgbG9hZGluZyBIeXBlcnR5LCByZWFzb246ICcsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtc2cudG8gPT09ICdjb3JlOmxvYWRTdHViJykge1xuICAgICAgcnVudGltZS5sb2FkU3R1Yihtc2cuYm9keS5kb21haW4pO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuICBjb25zb2xlLmxvZygnLS0+IHNlbmRpbmcgdG8gTWFpbiBwcm9jZXNzIFJ1bnRpbWVOb2RlJy5vcmFuZ2UpO1xuICBwcm9jZXNzLnNlbmQoe3RvOidydW50aW1lOmluc3RhbGxlZCcsIGJvZHk6e319KTtcblxufVxuXG5wcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgaWYgKG1zZy5kbyA9PT0gJ2luc3RhbGwgcnVudGltZSBjb3JlJykgeyAgICBcbiAgICAgICBsZXQgcnVudGltZVVSTCA9IG1zZy5ib2R5LnJ1bnRpbWVVUkw7XG4gICAgICAgZG9tYWluID0gbXNnLmJvZHkuZG9tYWluO1xuICAgICAgIC8vIEdldHMgUnVudGltZURlc2NyaXB0b3IgZnJvbSB0aGUgcnVudGltZSBjYXRhbG9ndWVcbiAgICAgIGNhdGFsb2d1ZS5nZXRSdW50aW1lRGVzY3JpcHRvcihydW50aW1lVVJMKS50aGVuKChkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgIHJ1bnRpbWVEZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCA9PT0gJy9zb3VyY2VQYWNrYWdlJykge1xuICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGFsb2d1ZS5nZXRTb3VyY2VQYWNrYWdlRnJvbVVSTChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwpO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKChzb3VyY2VQYWNrYWdlKSA9PiB7XG4gICAgICAgICAgbGV0IFJ1bnRpbWVVQSA9IF9ldmFsKHNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSwgdHJ1ZSk7XG4gICAgICAgICAgbGV0IHJ1bnRpbWUgPSBuZXcgUnVudGltZVVBKHJ1bnRpbWVEZXNjcmlwdG9yLCBSdW50aW1lRmFjdG9yeSwgZG9tYWluKTtcbiAgICAgICAgICBydW50aW1lLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJ1bnRpbWVSZWFkeShydW50aW1lKTtcbiAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW5pdCcsIHJlYXNvbik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgdGhlIFJ1bnRpbWVEZXNjcmlwdG9yIGZyb20gdGhlIHNlcnZpY2UgZnJhbWV3b3JrIGNhdGFsb2d1ZSwgcmVhc29uOiAnLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxufSk7XG5cblxucHJvY2Vzcy5vbignZXhpdCcsIGZ1bmN0aW9uKG1zZykge1xuICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgY29yZSBleGl0ZWQnKTtcbiAgIHByb2Nlc3MuZXhpdCgpO1xuICAgcHJvY2Vzcy5raWxsKCk7XG59KTtcblxucHJvY2Vzcy5vbignZXJyb3InLCBmdW5jdGlvbihtc2cpIHtcbiAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXJyb3IgY29yZSBzdG9wcGVkJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pO1xuXG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1JlY2VpdmVkIFNJR0lOVC4gYWxsIE5vZGUgU3ViLVByb2Nlc3MgYXJlIGV4aXRlZCcpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTsgLy8gdG8gY2F0Y2ggY3J0bC1jXG5cbnByb2Nlc3Mub24oJ1NJR1RFUk0nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBTSUdURVJNLiBjb3JlIFByZXNzIENvbnRyb2wtRCB0byBleGl0LicpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTsgLy8gdG8gY2F0Y2gga2lsbCBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==