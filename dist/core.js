// version: 0.1.0
// date: Wed May 17 2017 17:52:49 GMT+0200 (CEST)
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
            body: options
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
      console.log('SandboxApp Received message  is :\n'.green, msg);
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


console.debug = console.log;

// let domain = 'hysmart.rethink.ptinovacao.pt';
var domain = 'localhost';

var runtimeURL = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';
var catalogue = _RuntimeFactory2.default.createRuntimeCatalogue();

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

  process.on('message', function (msg) {
    console.log('Message Received on runtime-core: \n'.blue);

    if (msg.to === 'core:loadHyperty') {
      var descriptor = msg.body.descriptor;
      var hyperty = searchHyperty(runtime, descriptor);
      if (hyperty) {
        returnHyperty({ runtimeHypertyURL: hyperty.hypertyURL });
      } else {
        runtime.loadHyperty(descriptor).then(returnHyperty);
      }
    } else if (msg.to === 'core:loadStub') {
      runtime.loadStub(msg.body.domain);
    }
  }, false);

  console.log('--> sending to Main process RuntimeNode'.red);
  process.send({ to: 'runtime:installed', body: {} });
}

var runtimeDescriptor = void 0;

catalogue.getRuntimeDescriptor(runtimeURL).then(function (descriptor) {
  runtimeDescriptor = descriptor;

  if (descriptor.sourcePackageURL === '/sourcePackage') {
    return descriptor.sourcePackage;
  } else {
    return catalogue.getSourcePackageFromURL(descriptor.sourcePackageURL);
  }
}).then(function (sourcePackage) {

  // let runtime = new RuntimeUA(RuntimeFactory, domain); 
  var RuntimeUA = (0, _eval3.default)(sourcePackage.sourceCode, true);
  var runtime = new RuntimeUA(runtimeDescriptor, _RuntimeFactory2.default, domain);

  runtime.init().then(function () {

    runtimeReady(runtime);
  }).catch(function (reason) {
    console.log('Error init', reason);
  });
}).catch(function (error) {
  console.log('Error: ', error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNDEwMTJlOTVlYjQ4ODYzZTBlZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVyaWpzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZXhpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiR0VUIiwiUE9TVCIsImZldGNoIiwicmVxdWlyZSIsIlJlcXVlc3QiLCJfdGhpcyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm1ldGhvZCIsInVybCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1ha2VMb2NhbFJlcXVlc3QiLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJyZWFzb24iLCJ5ZWxsb3ciLCJ1cmxNYXAiLCJtYXBQcm90b2NvbCIsImdyZWVuIiwicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJyZXMiLCJzdGF0dXMiLCJ0ZXh0IiwiYm9keSIsInRvU3RyaW5nIiwiZXJyIiwiZXJyb3IiLCJyZWQiLCJwb3N0T3B0aW9ucyIsInByb3RvY29sbWFwIiwiZm91bmRQcm90b2NvbCIsInByb3RvY29sIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciIsIlJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJzdG9yYWdlTWFuYWdlciIsImFsbCIsIl9nZXRFbnZpcm9ubWVudCIsImNhcGFiaWxpdGllcyIsImNhcGFiaWxpdHkiLCJhc3NpZ24iLCJzZXQiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJub2RlIiwid2luZG93IiwibmF2aWdhdG9yIiwiU2FuZGJveEFwcCIsInR5cGUiLCJOT1JNQUwiLCJvbiIsIm1zZyIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJzZW5kIiwiY2hpbGQiLCJjb2xvcnMiLCJTYW5kYm94V29ya2VyIiwic2NyaXB0Iiwid29ya2VyIiwiZm9yayIsImUiLCJleGl0Iiwia2lsbCIsImRlcGVuZGVuY2llcyIsImluZGV4ZWREQiIsIklEQktleVJhbmdlIiwiY3JlYXRlU3RvcmFnZU1hbmFnZXIiLCJpbmRleGVkZEIiLCJzdG9yYWdlTmFtZSIsImRiIiwiUnVudGltZUZhY3RvcnkiLCJjcmVhdGUiLCJjcmVhdGVTYW5kYm94IiwiU2FuZGJveENhcGFiaWxpdGllcyIsImNhcGFiaWxpdGllc01hbmFnZXIiLCJpc0F2YWlsYWJsZSIsImNyZWF0ZUFwcFNhbmRib3giLCJjcmVhdGVIdHRwUmVxdWVzdCIsInJlcXVlc3QiLCJhdG9iIiwiYjY0IiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlUnVudGltZUNhdGFsb2d1ZSIsImNhdGFsb2d1ZSIsInJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJmcyIsImRlYnVnIiwiZG9tYWluIiwicnVudGltZVVSTCIsInJldHVybkh5cGVydHkiLCJoeXBlcnR5Iiwic2VhcmNoSHlwZXJ0eSIsInJ1bnRpbWUiLCJkZXNjcmlwdG9yIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJyZWdpc3RyeSIsImh5cGVydGllc0xpc3QiLCJydW50aW1lUmVhZHkiLCJibHVlIiwicnVudGltZUh5cGVydHlVUkwiLCJoeXBlcnR5VVJMIiwibG9hZEh5cGVydHkiLCJsb2FkU3R1YiIsInJ1bnRpbWVEZXNjcmlwdG9yIiwiZ2V0UnVudGltZURlc2NyaXB0b3IiLCJzb3VyY2VQYWNrYWdlVVJMIiwic291cmNlUGFja2FnZSIsImdldFNvdXJjZVBhY2thZ2VGcm9tVVJMIiwiUnVudGltZVVBIiwic291cmNlQ29kZSIsImluaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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SUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRixDQUpEOztBQU1BakQsUUFBUW1DLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVNDLEdBQVQsRUFBYztBQUNoQ3hELFVBQVFDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBbUIsVUFBUWdELElBQVI7QUFDQWhELFVBQVFpRCxJQUFSO0FBQ0QsQ0FKRDs7QUFPQWpELFFBQVFtQyxFQUFSLENBQVcsUUFBWCxFQUFxQixZQUFNO0FBQ3pCdkQsVUFBUUMsR0FBUixDQUFZLGtEQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSTs7QUFFSmpELFFBQVFtQyxFQUFSLENBQVcsU0FBWCxFQUFzQixZQUFNO0FBQzFCdkQsVUFBUUMsR0FBUixDQUFZLGlEQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSSxnQiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwiZnNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjb3JlXCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiZXZhbFwiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJjb2xvcnNcIiwgXCJub2RlLWZldGNoXCIsIFwidXJpanNcIiwgXCJhdG9iXCIsIFwiZGV4aWVcIiwgXCJmYWtlLWluZGV4ZWRkYlwiLCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiLCBcImluZGV4ZWRkYnNoaW1cIiwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiLCBcImZzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiYXRvYlwiKSwgcmVxdWlyZShcImRleGllXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiksIHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpLCByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJmc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSwgcm9vdFtcImZzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU0MTAxMmU5NWViNDg4NjNlMGVkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmFsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5jb25zdCBtZXRob2RzID0ge0dFVDogJ2dldCcsIFBPU1Q6ICdwb3N0J307XG5cbmxldCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpO1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgX3RoaXNbbWV0aG9kc1ttZXRob2RdXSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBfdGhpcy5tYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsaW5nIHJlcXVlc3QgbWV0aG9kc1xuICAgKiBAcmV0dXJucyB7dGV4dDxzdHJpbmc+fVxuICAgKiovXG4gIG1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgX3RoaXMgPXRoaXNcbiAgICBjb25zb2xlLmxvZygnSFRUUFMgUmVxdWVzdDonLnllbGxvdywgbWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNYXBwZWQgdXJsIGlzICcueWVsbG93LCB1cmxNYXAsJ21ldGhvZCBpczonLmdyZWVuLCBtZXRob2QpO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xuXG4gICAgICBpZihtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBHRVQgbWV0aG9kXG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBHRVQgbWV0aG9kIG9mIHVybDonLnJlZCAsIHVybE1hcCwgJyByZWFzb24gOicucmVkLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGxldCBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8qICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBib2R5OiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2godXJsTWFwLCBwb3N0T3B0aW9ucykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBQT1NUIG1ldGhvZCBvZiB1cmw6Jyx1cmxNYXAsICd3aXRoIG9wdGlvbnM6Jywgb3B0aW9ucywgJ3JlYXNvbiA6JywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuIC8qKlxuICAqIEByZXR1cm5zIHt2YXJpYWJsZTxzdHJpbmc+fVxuICAqKi9cbiAgbWFwUHJvdG9jb2wodXJsKSB7XG4gICAgbGV0IHByb3RvY29sbWFwID0ge1xuICAgICAgJ2xvY2FsaG9zdDovLyc6ICdodHRwczovLycsXG4gICAgICAndW5kZWZpbmVkOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdoeXBlcnR5LWNhdGFsb2d1ZTovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cHM6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHA6Ly8nOiAnaHR0cHM6Ly8nXG4gICAgfVxuXG4gICAgbGV0IGZvdW5kUHJvdG9jb2wgPSBmYWxzZVxuICAgIGZvciAobGV0IHByb3RvY29sIGluIHByb3RvY29sbWFwKSB7XG4gICAgICBpZiAodXJsLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCkgPT09IHByb3RvY29sKSB7XG4gICAgICAgIHVybCA9IHByb3RvY29sbWFwW3Byb3RvY29sXSArIHVybC5zbGljZShwcm90b2NvbC5sZW5ndGgsIHVybC5sZW5ndGgpXG4gICAgICAgIGZvdW5kUHJvdG9jb2wgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZFByb3RvY29sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvdG9jb2wgb2YgdXJsOiAnICsgdXJsKVxuICAgIH1cbiAgICByZXR1cm4gdXJsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVxdWVzdC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gVE9ETzogaW1wb3J0IGFuZCBleHRlbmQgdGhlIGNsYXNzIG9mIHRoZSBzZXJ2aWNlLWZyYW1ld29ya1xuLy8gc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5jbGFzcyBSdW50aW1lQ2FwYWJpbGl0aWVzIHtcblxuICAgY29uc3RydWN0b3Ioc3RvcmFnZU1hbmFnZXIpIHtcbiAgICBpZiAoIXN0b3JhZ2VNYW5hZ2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBSdW50aW1lIENhcGFiaWxpdGllcyBuZWVkIHRoZSBzdG9yYWdlTWFuYWdlcicpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIgPSBzdG9yYWdlTWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFzIGEgcHJvbWlzZSBSdW50aW1lQ2FwYWJpbGl0aWVzIGpzb24gb2JqZWN0IHdpdGggYWxsIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMgb2YgdGhlIHJ1bnRpbWUuXG4gICAqIElmIGl0IHdhcyBub3QgeWV0IHBlcnNpc3RlZCBpbiB0aGUgU3RvcmFnZSBNYW5hZ2VyIGl0IGNvbGxlY3RzIGFsbCByZXF1aXJlZCBpbmZvIGZyb20gdGhlIHBsYXRmb3JtIGFuZCBzYXZlcyBpbiB0aGUgc3RvcmFnZSBtYW5hZ2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fVxuICAgKi9cbiAgZ2V0UnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuX2dldEVudmlyb25tZW50KCldKS50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0aWVzID0ge307XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLl9nZXRFbnZpcm9ubWVudCgpczogJywgdGhpcy5fZ2V0RW52aXJvbm1lbnQoKSk7XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKGNhcGFiaWxpdHkpID0+IHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGNhcGFiaWxpdGllcywgY2FwYWJpbGl0eSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXBhYmlsaXRpZXM6ICcsIGNhcGFiaWxpdGllcyk7XG4gICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KCdjYXBhYmlsaXRpZXMnLCAnMScsIGNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgcmVzb2x2ZShjYXBhYmlsaXRpZXMpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFzIGEgcHJvbWlzZSBhIGJvb2xlYW4gYWNjb3JkaW5nIHRvIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5nZXQoJ2NhcGFiaWxpdGllcycpLnRoZW4oKGNhcGFiaWxpdGllcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FwYWJpbGl0eSAnICsgY2FwYWJpbGl0eSArICcgaXMgYXZhaWxhYmxlPyAnLCBjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKTtcbiAgICAgICAgaWYgKGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgY2hlY2tpbmcgY2FwYWJpbGl0eSwgcmVhc29uOicsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGl0IHJlZnJlc2hlcyBwcmV2aW91c2x5IGNvbGxlY3RlZCBjYXBhYmlsaXRpZXMgYW5kIHVwZGF0ZXMgdGhlIHN0b3JhZ2UgbWFuYWdlclxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBvcmdhbml6ZSB0aGUgY29kZSBpbiBzZXBhcmF0ZWQgZmlsZXNcbiAgX2dldEVudmlyb25tZW50KCkge1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIG1vcmUgZWZmZWN0aXZlIGFuZCBjaGVjayB0aGUgZW52aXJvbm1lbnRcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogISEhKHdpbmRvdyAmJiBuYXZpZ2F0b3IpXG4gICAgICB9O1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVDYXBhYmlsaXRpZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKlxuKi9cblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hBcHAgZXh0ZW5kcyBTYW5kYm94IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2FuZGJveCBBcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLmdyZWVuKTtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBSZWNlaXZlZCBtZXNzYWdlICBpcyA6XFxuJy5ncmVlbiwgbXNnKTtcbiAgICAgIGlmIChtc2cuaGFzT3duUHJvcGVydHkoJ3RvJykgJiYgbXNnLnRvLnN0YXJ0c1dpdGgoJ2NvcmU6JykpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdGhpcy5fb25NZXNzYWdlKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBwb3N0TWVzc2FnZSBtZXNzYWdlOiAnLmdyZWVuKTtcbiAgICBwcm9jZXNzLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveEFwcC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hUeXBlIH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcbmxldCBjaGlsZCA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbmxldCBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZGJveFdvcmtlciBleHRlbmRzIFNhbmRib3h7XG4gIGNvbnN0cnVjdG9yKHNjcmlwdCkge1xuICAgIHN1cGVyKHNjcmlwdCk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGluIFNhbmRib3ggV29ya2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLnJlZCk7XG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53b3JrZXIgPSBjaGlsZC5mb3JrKHNjcmlwdCk7XG4gICAgaWYgKCEhdGhpcy53b3JrZXIpIHtcbiAgICAgIHRoaXMud29ya2VyLm9uKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgX3RoaXMuX29uTWVzc2FnZShlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53b3JrZXIuc2VuZCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IHdvcmtlciBcXG4nLCBlKTtcbiAgICB9XG5cbiAgICB0aGlzLndvcmtlci5vbignZXhpdCcsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGV4aXQgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndvcmtlci5vbignZXJyb3InLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBlcnJvciAgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICB0aGlzLndvcmtlci5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveFdvcmtlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVyaWpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXJpanNcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTYW5kYm94V29ya2VyIGZyb20gJy4vU2FuZGJveFdvcmtlcic7XG5pbXBvcnQgU2FuZGJveEFwcCBmcm9tICcuL1NhbmRib3hBcHAnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9SZXF1ZXN0JztcbmltcG9ydCBhdG9iIGZyb20gJ2F0b2InO1xuXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlcic7XG5pbXBvcnQgeyBSdW50aW1lQ2F0YWxvZ3VlIH0gZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlJztcbmltcG9ydCBQZXJzaXN0ZW5jZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXInO1xuXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICdub2RlLWxvY2Fsc3RvcmFnZSc7XG5cbmltcG9ydCBEZXhpZSBmcm9tICdkZXhpZSc7XG5EZXhpZS5kZXBlbmRlbmNpZXMuaW5kZXhlZERCID0gcmVxdWlyZSgnZmFrZS1pbmRleGVkZGInKVxuRGV4aWUuZGVwZW5kZW5jaWVzLklEQktleVJhbmdlID0gcmVxdWlyZSgnZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlJylcblxuaW1wb3J0IHNldEdsb2JhbFZhcnMgZnJvbSAnaW5kZXhlZGRic2hpbSc7XG5cbmltcG9ydCBSdW50aW1lQ2FwYWJpbGl0aWVzIGZyb20gJy4vUnVudGltZUNhcGFiaWxpdGllcyc7XG5cblxubGV0IGNyZWF0ZVN0b3JhZ2VNYW5hZ2VyID0gKCkgPT4ge1xuICBsZXQgaW5kZXhlZGRCID0ge307XG4gIGxldCB7aW5kZXhlZERCLCBJREJLZXlSYW5nZSB9ID0gaW5kZXhlZGRCO1xuICBsZXQgc3RvcmFnZU5hbWUgPSAnY2FjaGUnO1xuXG4gIGNvbnN0IGRiID0gbmV3IERleGllKHN0b3JhZ2VOYW1lKTtcblxuICBzdG9yYWdlTWFuYWdlciA9IG5ldyBTdG9yYWdlTWFuYWdlcihkYiwgc3RvcmFnZU5hbWUpO1xuICByZXR1cm4gc3RvcmFnZU1hbmFnZXI7XG59O1xuXG5sZXQgc3RvcmFnZU1hbmFnZXIgPSBjcmVhdGVTdG9yYWdlTWFuYWdlcigpO1xuXG5sZXQgUnVudGltZUZhY3RvcnkgPSBPYmplY3QuY3JlYXRlKHtcbiAgICBjcmVhdGVTYW5kYm94KGNhcGFiaWxpdGllcykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpICA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdHkgPSAnbm9kZSc7XG4gICAgICAgIGxldCBTYW5kYm94Q2FwYWJpbGl0aWVzID0ge307XG5cbiAgICAgICAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyLmlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgU2FuZGJveENhcGFiaWxpdGllcyA9IHsgXCJub2RlXCI6IHRydWUgfTtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IFNhbmRib3hXb3JrZXIoICcuLi9kaXN0L0NvbnRleHRTZXJ2aWNlUHJvdmlkZXIuanMnKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgICAgfVxuICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbY3JlYXRlU2FuZGJveCBdLCBFcnJvciBvY2N1cmVkIHdoaWxlIGNyZWF0aW5nIFNhbmRib3gsIHJlYXNvbiA6ICcsIHJlYXNvbik7XG4gICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBcHBTYW5kYm94KCkge1xuICAgICAgcmV0dXJuIG5ldyBTYW5kYm94QXBwKCAnLi4vZGlzdC9Db250ZXh0QXBwLmpzJyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUh0dHBSZXF1ZXN0KCkge1xuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSxcblxuICAgIGF0b2IoYjY0KSB7XG4gICAgICByZXR1cm4gYXRvYihiNjQpO1xuICAgIH0sXG5cbiAgICBwZXJzaXN0ZW5jZU1hbmFnZXIoKSB7XG4gICAgICBsZXQgbG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgnLi9zY3JhdGNoJyk7XG4gICAgICByZXR1cm4gbmV3IFBlcnNpc3RlbmNlTWFuYWdlcihsb2NhbFN0b3JhZ2UpO1xuICAgIH0sXG5cbiAgICBzdG9yYWdlTWFuYWdlcigpIHtcbiAgICAgIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlUnVudGltZUNhdGFsb2d1ZSgpIHtcbiAgICAgIHRoaXMuY2F0YWxvZ3VlID0gbmV3IFJ1bnRpbWVDYXRhbG9ndWUodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5jYXRhbG9ndWU7XG4gICAgfSxcblxuICAgIHJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIgPSBuZXcgUnVudGltZUNhcGFiaWxpdGllcyhzdG9yYWdlTWFuYWdlcik7XG4gICAgICByZXR1cm4gIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlcjtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lRmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lRmFjdG9yeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF0b2JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhdG9iXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGV4aWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZXhpZVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmFrZS1pbmRleGVkZGJcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1sb2NhbHN0b3JhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmltcG9ydCBVUkkgZnJvbSAndXJpanMnO1xuXG4vLyAvL0ZJWE1FIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3QvZGV2LXNlcnZpY2UtZnJhbWV3b3JrL2lzc3Vlcy80NlxuaW1wb3J0IFJ1bnRpbWVGYWN0b3J5IGZyb20gJy4vUnVudGltZUZhY3RvcnknO1xuXG5pbXBvcnQgX2V2YWwgZnJvbSAnZXZhbCc7XG5cblxuXG5jb25zb2xlLmRlYnVnID0gY29uc29sZS5sb2c7XG5cbi8vIGxldCBkb21haW4gPSAnaHlzbWFydC5yZXRoaW5rLnB0aW5vdmFjYW8ucHQnO1xubGV0IGRvbWFpbiA9ICdsb2NhbGhvc3QnO1xuXG5sZXQgcnVudGltZVVSTCA9ICdodHRwczovL2NhdGFsb2d1ZS4nICsgZG9tYWluICsgJy8ud2VsbC1rbm93bi9ydW50aW1lL1J1bnRpbWUnO1xubGV0IGNhdGFsb2d1ZSA9IFJ1bnRpbWVGYWN0b3J5LmNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUoKTtcblxuZnVuY3Rpb24gcmV0dXJuSHlwZXJ0eShoeXBlcnR5KSB7XG4gIHByb2Nlc3Muc2VuZCh7dG86J3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScsIGJvZHk6IGh5cGVydHl9KTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoSHlwZXJ0eShydW50aW1lLCBkZXNjcmlwdG9yKSB7XG4gIGxldCBoeXBlcnR5ID0gdW5kZWZpbmVkO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoIWh5cGVydHkgJiYgaW5kZXggPCBydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3QubGVuZ3RoKSB7XG4gICAgaWYgKHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF0uZGVzY3JpcHRvciA9PT0gZGVzY3JpcHRvcilcbiAgICAgICAgaHlwZXJ0eSA9IHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF07XG4gICAgaW5kZXgrKztcbiAgfVxuICBjb25zb2xlLmxvZygnSHllcHJ0eSBmb3VuZGVkIScuZ3JlZW4pO1xuICByZXR1cm4gaHlwZXJ0eTtcbn1cblxuZnVuY3Rpb24gcnVudGltZVJlYWR5KHJ1bnRpbWUpIHtcblxuICBwcm9jZXNzLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24obXNnKSB7XG4gICAgY29uc29sZS5sb2coJ01lc3NhZ2UgUmVjZWl2ZWQgb24gcnVudGltZS1jb3JlOiBcXG4nLmJsdWUpO1xuXG4gICAgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZEh5cGVydHknKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IG1zZy5ib2R5LmRlc2NyaXB0b3I7XG4gICAgICBsZXQgaHlwZXJ0eSA9IHNlYXJjaEh5cGVydHkocnVudGltZSwgZGVzY3JpcHRvcik7XG4gICAgICBpZiAoaHlwZXJ0eSkge1xuICAgICAgICByZXR1cm5IeXBlcnR5KHtydW50aW1lSHlwZXJ0eVVSTDogaHlwZXJ0eS5oeXBlcnR5VVJMfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydW50aW1lLmxvYWRIeXBlcnR5KGRlc2NyaXB0b3IpXG4gICAgICAgICAgICAudGhlbihyZXR1cm5IeXBlcnR5KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZFN0dWInKSB7XG4gICAgICBydW50aW1lLmxvYWRTdHViKG1zZy5ib2R5LmRvbWFpbik7XG4gICAgfVxuICB9LCBmYWxzZSk7XG5cbiAgY29uc29sZS5sb2coJy0tPiBzZW5kaW5nIHRvIE1haW4gcHJvY2VzcyBSdW50aW1lTm9kZScucmVkKTtcbiAgcHJvY2Vzcy5zZW5kKHt0bzoncnVudGltZTppbnN0YWxsZWQnLCBib2R5Ont9fSk7XG5cbn1cblxubGV0IHJ1bnRpbWVEZXNjcmlwdG9yOyBcblxuY2F0YWxvZ3VlLmdldFJ1bnRpbWVEZXNjcmlwdG9yKHJ1bnRpbWVVUkwpLnRoZW4oKGRlc2NyaXB0b3IpID0+IHtcbiAgcnVudGltZURlc2NyaXB0b3IgPSBkZXNjcmlwdG9yO1xuXG4gIGlmIChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwgPT09ICcvc291cmNlUGFja2FnZScpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYXRhbG9ndWUuZ2V0U291cmNlUGFja2FnZUZyb21VUkwoZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlVVJMKTtcbiAgfVxuXG59KS50aGVuKGZ1bmN0aW9uKHNvdXJjZVBhY2thZ2UpIHtcbiAgXG4gICAgLy8gbGV0IHJ1bnRpbWUgPSBuZXcgUnVudGltZVVBKFJ1bnRpbWVGYWN0b3J5LCBkb21haW4pOyBcbiAgICBsZXQgUnVudGltZVVBID0gX2V2YWwoc291cmNlUGFja2FnZS5zb3VyY2VDb2RlLCB0cnVlKTtcbiAgICBsZXQgcnVudGltZSA9IG5ldyBSdW50aW1lVUEocnVudGltZURlc2NyaXB0b3IsIFJ1bnRpbWVGYWN0b3J5LCBkb21haW4pO1xuXG4gICAgcnVudGltZS5pbml0KCkudGhlbigoKSA9PiB7XG5cbiAgICAgIHJ1bnRpbWVSZWFkeShydW50aW1lKTtcblxuICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbml0JywgcmVhc29uKTtcbiAgICB9KTtcblxuXG5cbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdleGl0JywgZnVuY3Rpb24obXNnKSB7XG4gICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBjb3JlIGV4aXRlZCcpO1xuICAgcHJvY2Vzcy5leGl0KCk7XG4gICBwcm9jZXNzLmtpbGwoKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdlcnJvcicsIGZ1bmN0aW9uKG1zZykge1xuICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBlcnJvciBjb3JlIHN0b3BwZWQnKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG4gIHByb2Nlc3Mua2lsbCgpO1xufSk7XG5cblxucHJvY2Vzcy5vbignU0lHSU5UJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgU0lHSU5ULiBhbGwgTm9kZSBTdWItUHJvY2VzcyBhcmUgZXhpdGVkJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pOyAvLyB0byBjYXRjaCBjcnRsLWNcblxucHJvY2Vzcy5vbignU0lHVEVSTScsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1JlY2VpdmVkIFNJR1RFUk0uIGNvcmUgUHJlc3MgQ29udHJvbC1EIHRvIGV4aXQuJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pOyAvLyB0byBjYXRjaCBraWxsIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==