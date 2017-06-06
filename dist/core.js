// version: 0.1.0
// date: Tue Jun 06 2017 10:08:39 GMT+0100 (WEST)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNjNlZDAzZjJkOTU3NTMxZjRhMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVyaWpzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZXhpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiR0VUIiwiUE9TVCIsImZldGNoIiwicmVxdWlyZSIsIlJlcXVlc3QiLCJfdGhpcyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm1ldGhvZCIsInVybCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1ha2VMb2NhbFJlcXVlc3QiLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJyZWFzb24iLCJ5ZWxsb3ciLCJ1cmxNYXAiLCJtYXBQcm90b2NvbCIsImdyZWVuIiwicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJyZXMiLCJzdGF0dXMiLCJ0ZXh0IiwiYm9keSIsInRvU3RyaW5nIiwiZXJyIiwiZXJyb3IiLCJyZWQiLCJwb3N0T3B0aW9ucyIsInByb3RvY29sbWFwIiwiZm91bmRQcm90b2NvbCIsInByb3RvY29sIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciIsIlJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJzdG9yYWdlTWFuYWdlciIsImFsbCIsIl9nZXRFbnZpcm9ubWVudCIsImNhcGFiaWxpdGllcyIsImNhcGFiaWxpdHkiLCJhc3NpZ24iLCJzZXQiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJub2RlIiwid2luZG93IiwibmF2aWdhdG9yIiwiU2FuZGJveEFwcCIsInR5cGUiLCJOT1JNQUwiLCJvbiIsIm1zZyIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJzZW5kIiwiY2hpbGQiLCJjb2xvcnMiLCJTYW5kYm94V29ya2VyIiwic2NyaXB0Iiwid29ya2VyIiwiZm9yayIsImUiLCJleGl0Iiwia2lsbCIsImRlcGVuZGVuY2llcyIsImluZGV4ZWREQiIsIklEQktleVJhbmdlIiwiY3JlYXRlU3RvcmFnZU1hbmFnZXIiLCJpbmRleGVkZEIiLCJzdG9yYWdlTmFtZSIsImRiIiwiUnVudGltZUZhY3RvcnkiLCJjcmVhdGUiLCJjcmVhdGVTYW5kYm94IiwiU2FuZGJveENhcGFiaWxpdGllcyIsImNhcGFiaWxpdGllc01hbmFnZXIiLCJpc0F2YWlsYWJsZSIsImNyZWF0ZUFwcFNhbmRib3giLCJjcmVhdGVIdHRwUmVxdWVzdCIsInJlcXVlc3QiLCJhdG9iIiwiYjY0IiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlUnVudGltZUNhdGFsb2d1ZSIsImNhdGFsb2d1ZSIsInJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJmcyIsImRvbWFpbiIsInJ1bnRpbWVEZXNjcmlwdG9yIiwicmV0dXJuSHlwZXJ0eSIsImh5cGVydHkiLCJzZWFyY2hIeXBlcnR5IiwicnVudGltZSIsImRlc2NyaXB0b3IiLCJ1bmRlZmluZWQiLCJpbmRleCIsInJlZ2lzdHJ5IiwiaHlwZXJ0aWVzTGlzdCIsInJ1bnRpbWVSZWFkeSIsInJ1bnRpbWVIeXBlcnR5VVJMIiwiaHlwZXJ0eVVSTCIsImxvYWRIeXBlcnR5IiwibG9hZFN0dWIiLCJvcmFuZ2UiLCJkbyIsInJ1bnRpbWVVUkwiLCJnZXRSdW50aW1lRGVzY3JpcHRvciIsInNvdXJjZVBhY2thZ2VVUkwiLCJzb3VyY2VQYWNrYWdlIiwiZ2V0U291cmNlUGFja2FnZUZyb21VUkwiLCJSdW50aW1lVUEiLCJzb3VyY2VDb2RlIiwiaW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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a0JEO0FBQ0osQ0F4QkQ7O0FBMkJBSyxRQUFRbUMsRUFBUixDQUFXLE1BQVgsRUFBbUIsVUFBU0MsR0FBVCxFQUFjO0FBQzlCeEQsVUFBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRixDQUpEOztBQU1BakQsUUFBUW1DLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVNDLEdBQVQsRUFBYztBQUNoQ3hELFVBQVFDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBbUIsVUFBUWdELElBQVI7QUFDQWhELFVBQVFpRCxJQUFSO0FBQ0QsQ0FKRDs7QUFPQWpELFFBQVFtQyxFQUFSLENBQVcsUUFBWCxFQUFxQixZQUFNO0FBQ3pCdkQsVUFBUUMsR0FBUixDQUFZLGtEQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSTs7QUFFSmpELFFBQVFtQyxFQUFSLENBQVcsU0FBWCxFQUFzQixZQUFNO0FBQzFCdkQsVUFBUUMsR0FBUixDQUFZLGlEQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSSxnQiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwiZnNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjb3JlXCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiZXZhbFwiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJjb2xvcnNcIiwgXCJub2RlLWZldGNoXCIsIFwidXJpanNcIiwgXCJhdG9iXCIsIFwiZGV4aWVcIiwgXCJmYWtlLWluZGV4ZWRkYlwiLCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiLCBcImluZGV4ZWRkYnNoaW1cIiwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiLCBcImZzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiYXRvYlwiKSwgcmVxdWlyZShcImRleGllXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiksIHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpLCByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJmc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSwgcm9vdFtcImZzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2M2VkMDNmMmQ5NTc1MzFmNGEyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmFsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5jb25zdCBtZXRob2RzID0ge0dFVDogJ2dldCcsIFBPU1Q6ICdwb3N0J307XG5cbmxldCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpO1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgX3RoaXNbbWV0aG9kc1ttZXRob2RdXSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBfdGhpcy5tYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsaW5nIHJlcXVlc3QgbWV0aG9kc1xuICAgKiBAcmV0dXJucyB7dGV4dDxzdHJpbmc+fVxuICAgKiovXG4gIG1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgX3RoaXMgPXRoaXNcbiAgICBjb25zb2xlLmxvZygnSFRUUFMgUmVxdWVzdDonLnllbGxvdywgbWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNYXBwZWQgdXJsIGlzICcueWVsbG93LCB1cmxNYXAsJ21ldGhvZCBpczonLmdyZWVuLCBtZXRob2QpO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xuXG4gICAgICBpZihtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBHRVQgbWV0aG9kXG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBHRVQgbWV0aG9kIG9mIHVybDonLnJlZCAsIHVybE1hcCwgJyByZWFzb24gOicucmVkLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGxldCBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8qICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBib2R5OiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2godXJsTWFwLCBwb3N0T3B0aW9ucykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBQT1NUIG1ldGhvZCBvZiB1cmw6Jyx1cmxNYXAsICd3aXRoIG9wdGlvbnM6Jywgb3B0aW9ucywgJ3JlYXNvbiA6JywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuIC8qKlxuICAqIEByZXR1cm5zIHt2YXJpYWJsZTxzdHJpbmc+fVxuICAqKi9cbiAgbWFwUHJvdG9jb2wodXJsKSB7XG4gICAgbGV0IHByb3RvY29sbWFwID0ge1xuICAgICAgJ2xvY2FsaG9zdDovLyc6ICdodHRwczovLycsXG4gICAgICAndW5kZWZpbmVkOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdoeXBlcnR5LWNhdGFsb2d1ZTovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cHM6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHA6Ly8nOiAnaHR0cHM6Ly8nXG4gICAgfVxuXG4gICAgbGV0IGZvdW5kUHJvdG9jb2wgPSBmYWxzZVxuICAgIGZvciAobGV0IHByb3RvY29sIGluIHByb3RvY29sbWFwKSB7XG4gICAgICBpZiAodXJsLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCkgPT09IHByb3RvY29sKSB7XG4gICAgICAgIHVybCA9IHByb3RvY29sbWFwW3Byb3RvY29sXSArIHVybC5zbGljZShwcm90b2NvbC5sZW5ndGgsIHVybC5sZW5ndGgpXG4gICAgICAgIGZvdW5kUHJvdG9jb2wgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZFByb3RvY29sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvdG9jb2wgb2YgdXJsOiAnICsgdXJsKVxuICAgIH1cbiAgICByZXR1cm4gdXJsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVxdWVzdC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gVE9ETzogaW1wb3J0IGFuZCBleHRlbmQgdGhlIGNsYXNzIG9mIHRoZSBzZXJ2aWNlLWZyYW1ld29ya1xuLy8gc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5jbGFzcyBSdW50aW1lQ2FwYWJpbGl0aWVzIHtcblxuICAgY29uc3RydWN0b3Ioc3RvcmFnZU1hbmFnZXIpIHtcbiAgICBpZiAoIXN0b3JhZ2VNYW5hZ2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBSdW50aW1lIENhcGFiaWxpdGllcyBuZWVkIHRoZSBzdG9yYWdlTWFuYWdlcicpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIgPSBzdG9yYWdlTWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFzIGEgcHJvbWlzZSBSdW50aW1lQ2FwYWJpbGl0aWVzIGpzb24gb2JqZWN0IHdpdGggYWxsIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMgb2YgdGhlIHJ1bnRpbWUuXG4gICAqIElmIGl0IHdhcyBub3QgeWV0IHBlcnNpc3RlZCBpbiB0aGUgU3RvcmFnZSBNYW5hZ2VyIGl0IGNvbGxlY3RzIGFsbCByZXF1aXJlZCBpbmZvIGZyb20gdGhlIHBsYXRmb3JtIGFuZCBzYXZlcyBpbiB0aGUgc3RvcmFnZSBtYW5hZ2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fVxuICAgKi9cbiAgZ2V0UnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuX2dldEVudmlyb25tZW50KCldKS50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0aWVzID0ge307XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLl9nZXRFbnZpcm9ubWVudCgpczogJywgdGhpcy5fZ2V0RW52aXJvbm1lbnQoKSk7XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKGNhcGFiaWxpdHkpID0+IHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGNhcGFiaWxpdGllcywgY2FwYWJpbGl0eSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXBhYmlsaXRpZXM6ICcsIGNhcGFiaWxpdGllcyk7XG4gICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KCdjYXBhYmlsaXRpZXMnLCAnMScsIGNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgcmVzb2x2ZShjYXBhYmlsaXRpZXMpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFzIGEgcHJvbWlzZSBhIGJvb2xlYW4gYWNjb3JkaW5nIHRvIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5nZXQoJ2NhcGFiaWxpdGllcycpLnRoZW4oKGNhcGFiaWxpdGllcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FwYWJpbGl0eSAnICsgY2FwYWJpbGl0eSArICcgaXMgYXZhaWxhYmxlPyAnLCBjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKTtcbiAgICAgICAgaWYgKGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgY2hlY2tpbmcgY2FwYWJpbGl0eSwgcmVhc29uOicsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGl0IHJlZnJlc2hlcyBwcmV2aW91c2x5IGNvbGxlY3RlZCBjYXBhYmlsaXRpZXMgYW5kIHVwZGF0ZXMgdGhlIHN0b3JhZ2UgbWFuYWdlclxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBvcmdhbml6ZSB0aGUgY29kZSBpbiBzZXBhcmF0ZWQgZmlsZXNcbiAgX2dldEVudmlyb25tZW50KCkge1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIG1vcmUgZWZmZWN0aXZlIGFuZCBjaGVjayB0aGUgZW52aXJvbm1lbnRcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogISEhKHdpbmRvdyAmJiBuYXZpZ2F0b3IpXG4gICAgICB9O1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVDYXBhYmlsaXRpZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKlxuKi9cblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hBcHAgZXh0ZW5kcyBTYW5kYm94IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2FuZGJveCBBcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLmdyZWVuKTtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBSZWNlaXZlZCBtZXNzYWdlICBpcyA6XFxuJy5ncmVlbik7XG4gICAgICBpZiAobXNnLmhhc093blByb3BlcnR5KCd0bycpICYmIG1zZy50by5zdGFydHNXaXRoKCdjb3JlOicpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHRoaXMuX29uTWVzc2FnZShtc2cpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uUG9zdE1lc3NhZ2UobXNnKSB7XG4gICAgY29uc29sZS5sb2coJ1NhbmRib3hBcHAgcG9zdE1lc3NhZ2UgbWVzc2FnZTogJy5ncmVlbik7XG4gICAgcHJvY2Vzcy5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NhbmRib3hBcHAuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94VHlwZSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5sZXQgY2hpbGQgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG5sZXQgY29sb3JzID0gcmVxdWlyZSgnY29sb3JzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hXb3JrZXIgZXh0ZW5kcyBTYW5kYm94e1xuICBjb25zdHJ1Y3RvcihzY3JpcHQpIHtcbiAgICBzdXBlcihzY3JpcHQpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbiBTYW5kYm94IFdvcmtlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJy5yZWQpO1xuICAgIHRoaXMudHlwZSA9IFNhbmRib3hUeXBlLk5PUk1BTDtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMud29ya2VyID0gY2hpbGQuZm9yayhzY3JpcHQpO1xuICAgIGlmICghIXRoaXMud29ya2VyKSB7XG4gICAgICB0aGlzLndvcmtlci5vbignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgIF90aGlzLl9vbk1lc3NhZ2UoZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMud29ya2VyLnNlbmQoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCB3b3JrZXIgXFxuJywgZSk7XG4gICAgfVxuXG4gICAgdGhpcy53b3JrZXIub24oJ2V4aXQnLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBleGl0IFNhbmRib3hXb3JrZXIgc3RvcHBlZCcpO1xuICAgICAgdGhpcy53b3JrZXIuZXhpdCgpO1xuICAgICAgdGhpcy53b3JrZXIua2lsbCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53b3JrZXIub24oJ2Vycm9yJywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXJyb3IgIFNhbmRib3hXb3JrZXIgc3RvcHBlZCcpO1xuICAgICAgdGhpcy53b3JrZXIuZXhpdCgpO1xuICAgICAgdGhpcy53b3JrZXIua2lsbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uUG9zdE1lc3NhZ2UobXNnKSB7XG4gICAgdGhpcy53b3JrZXIuc2VuZChtc2cpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmlqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVyaWpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2FuZGJveFdvcmtlciBmcm9tICcuL1NhbmRib3hXb3JrZXInO1xuaW1wb3J0IFNhbmRib3hBcHAgZnJvbSAnLi9TYW5kYm94QXBwJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vUmVxdWVzdCc7XG5pbXBvcnQgYXRvYiBmcm9tICdhdG9iJztcblxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXInO1xuaW1wb3J0IHsgUnVudGltZUNhdGFsb2d1ZSB9IGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZSc7XG5pbXBvcnQgUGVyc2lzdGVuY2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyJztcblxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnbm9kZS1sb2NhbHN0b3JhZ2UnO1xuXG5pbXBvcnQgRGV4aWUgZnJvbSAnZGV4aWUnO1xuRGV4aWUuZGVwZW5kZW5jaWVzLmluZGV4ZWREQiA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiJylcbkRleGllLmRlcGVuZGVuY2llcy5JREJLZXlSYW5nZSA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZScpXG5cbmltcG9ydCBzZXRHbG9iYWxWYXJzIGZyb20gJ2luZGV4ZWRkYnNoaW0nO1xuXG5pbXBvcnQgUnVudGltZUNhcGFiaWxpdGllcyBmcm9tICcuL1J1bnRpbWVDYXBhYmlsaXRpZXMnO1xuXG5cbmxldCBjcmVhdGVTdG9yYWdlTWFuYWdlciA9ICgpID0+IHtcbiAgbGV0IGluZGV4ZWRkQiA9IHt9O1xuICBsZXQge2luZGV4ZWREQiwgSURCS2V5UmFuZ2UgfSA9IGluZGV4ZWRkQjtcbiAgbGV0IHN0b3JhZ2VOYW1lID0gJ2NhY2hlJztcblxuICBjb25zdCBkYiA9IG5ldyBEZXhpZShzdG9yYWdlTmFtZSk7XG5cbiAgc3RvcmFnZU1hbmFnZXIgPSBuZXcgU3RvcmFnZU1hbmFnZXIoZGIsIHN0b3JhZ2VOYW1lKTtcbiAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xufTtcblxubGV0IHN0b3JhZ2VNYW5hZ2VyID0gY3JlYXRlU3RvcmFnZU1hbmFnZXIoKTtcblxubGV0IFJ1bnRpbWVGYWN0b3J5ID0gT2JqZWN0LmNyZWF0ZSh7XG4gICAgY3JlYXRlU2FuZGJveChjYXBhYmlsaXRpZXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSAgPT4ge1xuXG4gICAgICAgIGxldCBjYXBhYmlsaXR5ID0gJ25vZGUnO1xuICAgICAgICBsZXQgU2FuZGJveENhcGFiaWxpdGllcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlci5pc0F2YWlsYWJsZShjYXBhYmlsaXR5KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgIFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7IFwibm9kZVwiOiB0cnVlIH07XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBTYW5kYm94V29ya2VyKCAnLi4vZGlzdC9Db250ZXh0U2VydmljZVByb3ZpZGVyLmpzJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgIH1cbiAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgY29uc29sZS5lcnJvcignW2NyZWF0ZVNhbmRib3ggXSwgRXJyb3Igb2NjdXJlZCB3aGlsZSBjcmVhdGluZyBTYW5kYm94LCByZWFzb24gOiAnLCByZWFzb24pO1xuICAgICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlQXBwU2FuZGJveCgpIHtcbiAgICAgIHJldHVybiBuZXcgU2FuZGJveEFwcCggJy4uL2Rpc3QvQ29udGV4dEFwcC5qcycpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVIdHRwUmVxdWVzdCgpIHtcbiAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH0sXG5cbiAgICBhdG9iKGI2NCkge1xuICAgICAgcmV0dXJuIGF0b2IoYjY0KTtcbiAgICB9LFxuXG4gICAgcGVyc2lzdGVuY2VNYW5hZ2VyKCkge1xuICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoJy4vc2NyYXRjaCcpO1xuICAgICAgcmV0dXJuIG5ldyBQZXJzaXN0ZW5jZU1hbmFnZXIobG9jYWxTdG9yYWdlKTtcbiAgICB9LFxuXG4gICAgc3RvcmFnZU1hbmFnZXIoKSB7XG4gICAgICByZXR1cm4gc3RvcmFnZU1hbmFnZXI7XG4gICAgfSxcblxuICAgIGNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUoKSB7XG4gICAgICB0aGlzLmNhdGFsb2d1ZSA9IG5ldyBSdW50aW1lQ2F0YWxvZ3VlKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuY2F0YWxvZ3VlO1xuICAgIH0sXG5cbiAgICBydW50aW1lQ2FwYWJpbGl0aWVzKCkge1xuICAgICAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyID0gbmV3IFJ1bnRpbWVDYXBhYmlsaXRpZXMoc3RvcmFnZU1hbmFnZXIpO1xuICAgICAgcmV0dXJuICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXI7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUZhY3RvcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdG9iXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXRvYlwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRleGllXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGV4aWVcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImluZGV4ZWRkYnNoaW1cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbmxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5pbXBvcnQgVVJJIGZyb20gJ3VyaWpzJztcblxuLy8gLy9GSVhNRSBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L2Rldi1zZXJ2aWNlLWZyYW1ld29yay9pc3N1ZXMvNDZcbmltcG9ydCBSdW50aW1lRmFjdG9yeSBmcm9tICcuL1J1bnRpbWVGYWN0b3J5JztcblxuaW1wb3J0IF9ldmFsIGZyb20gJ2V2YWwnO1xuXG5cblxuXG5sZXQgZG9tYWluO1xubGV0IHJ1bnRpbWVEZXNjcmlwdG9yO1xuXG5sZXQgY2F0YWxvZ3VlID0gUnVudGltZUZhY3RvcnkuY3JlYXRlUnVudGltZUNhdGFsb2d1ZSgpO1xuXG4vLyByZXR1cm5IeXBlcnR5IGdpdmVudCB0aGUgcnVudGltZUh5cGVydHlVUkwsXG4vLyBTZW5kcyBtZXNzYWdlID0nbG9hZGVkSHlwZXJ0eScgdG8gdGhlIHRoZSBwYXJlbnQgcHJvY2VzcyBSdW50aW1lTm9kZSB0aHJvdWdodCBJUEMgY2hhbm5lbFxuXG5mdW5jdGlvbiByZXR1cm5IeXBlcnR5KGh5cGVydHkpIHsgXG4gIHByb2Nlc3Muc2VuZCh7dG86J3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScsIGJvZHk6IGh5cGVydHl9KTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoSHlwZXJ0eShydW50aW1lLCBkZXNjcmlwdG9yKSB7XG4gIGxldCBoeXBlcnR5ID0gdW5kZWZpbmVkO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoIWh5cGVydHkgJiYgaW5kZXggPCBydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3QubGVuZ3RoKSB7XG4gICAgaWYgKHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF0uZGVzY3JpcHRvciA9PT0gZGVzY3JpcHRvcilcbiAgICAgICAgaHlwZXJ0eSA9IHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF07XG4gICAgaW5kZXgrKztcbiAgfVxuICBjb25zb2xlLmxvZygnSHllcHJ0eSBmb3VuZGVkIScuZ3JlZW4pO1xuICByZXR1cm4gaHlwZXJ0eTtcbn1cblxuZnVuY3Rpb24gcnVudGltZVJlYWR5KHJ1bnRpbWUpIHtcblxuICAvLyBjb3JlUnVudGltZSBnbG9iYWwgRXZlbnRMaXN0ZW5lciBmb3IgYW50eSBpbmNvbWluZyBtZXNzYWdlXG4gIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZEh5cGVydHknKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IG1zZy5ib2R5LmRlc2NyaXB0b3I7XG4gICAgICBsZXQgaHlwZXJ0eSA9IHNlYXJjaEh5cGVydHkocnVudGltZSwgZGVzY3JpcHRvcik7XG4gICAgICBpZiAoaHlwZXJ0eSkge1xuICAgICAgICByZXR1cm5IeXBlcnR5KHtydW50aW1lSHlwZXJ0eVVSTDogaHlwZXJ0eS5oeXBlcnR5VVJMfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydW50aW1lLmxvYWRIeXBlcnR5KGRlc2NyaXB0b3IpLnRoZW4ocmV0dXJuSHlwZXJ0eSkuY2F0Y2goKGVycm9yKT0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBsb2FkaW5nIEh5cGVydHksIHJlYXNvbjogJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZFN0dWInKSB7XG4gICAgICBydW50aW1lLmxvYWRTdHViKG1zZy5ib2R5LmRvbWFpbik7XG4gICAgfVxuICB9LCBmYWxzZSk7XG4gIGNvbnNvbGUubG9nKCctLT4gc2VuZGluZyB0byBNYWluIHByb2Nlc3MgUnVudGltZU5vZGUnLm9yYW5nZSk7XG4gIHByb2Nlc3Muc2VuZCh7dG86J3J1bnRpbWU6aW5zdGFsbGVkJywgYm9keTp7fX0pO1xuXG59XG5cbnByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICBpZiAobXNnLmRvID09PSAnaW5zdGFsbCBydW50aW1lIGNvcmUnKSB7ICAgIFxuICAgICAgIGxldCBydW50aW1lVVJMID0gbXNnLmJvZHkucnVudGltZVVSTDtcbiAgICAgICBkb21haW4gPSBtc2cuYm9keS5kb21haW47XG4gICAgICAgLy8gR2V0cyBSdW50aW1lRGVzY3JpcHRvciBmcm9tIHRoZSBydW50aW1lIGNhdGFsb2d1ZVxuICAgICAgY2F0YWxvZ3VlLmdldFJ1bnRpbWVEZXNjcmlwdG9yKHJ1bnRpbWVVUkwpLnRoZW4oKGRlc2NyaXB0b3IpID0+IHtcbiAgICAgICAgcnVudGltZURlc2NyaXB0b3IgPSBkZXNjcmlwdG9yO1xuICAgICAgICBpZiAoZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlVVJMID09PSAnL3NvdXJjZVBhY2thZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY2F0YWxvZ3VlLmdldFNvdXJjZVBhY2thZ2VGcm9tVVJMKGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKHNvdXJjZVBhY2thZ2UpID0+IHtcbiAgICAgICAgICBsZXQgUnVudGltZVVBID0gX2V2YWwoc291cmNlUGFja2FnZS5zb3VyY2VDb2RlLCB0cnVlKTtcbiAgICAgICAgICBsZXQgcnVudGltZSA9IG5ldyBSdW50aW1lVUEocnVudGltZURlc2NyaXB0b3IsIFJ1bnRpbWVGYWN0b3J5LCBkb21haW4pO1xuICAgICAgICAgIHJ1bnRpbWUuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcnVudGltZVJlYWR5KHJ1bnRpbWUpO1xuICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbml0JywgcmVhc29uKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyB0aGUgUnVudGltZURlc2NyaXB0b3IgZnJvbSB0aGUgc2VydmljZSBmcmFtZXdvcmsgY2F0YWxvZ3VlLCByZWFzb246ICcsIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG59KTtcblxuXG5wcm9jZXNzLm9uKCdleGl0JywgZnVuY3Rpb24obXNnKSB7XG4gICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBjb3JlIGV4aXRlZCcpO1xuICAgcHJvY2Vzcy5leGl0KCk7XG4gICBwcm9jZXNzLmtpbGwoKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdlcnJvcicsIGZ1bmN0aW9uKG1zZykge1xuICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBlcnJvciBjb3JlIHN0b3BwZWQnKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG4gIHByb2Nlc3Mua2lsbCgpO1xufSk7XG5cblxucHJvY2Vzcy5vbignU0lHSU5UJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgU0lHSU5ULiBhbGwgTm9kZSBTdWItUHJvY2VzcyBhcmUgZXhpdGVkJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pOyAvLyB0byBjYXRjaCBjcnRsLWNcblxucHJvY2Vzcy5vbignU0lHVEVSTScsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1JlY2VpdmVkIFNJR1RFUk0uIGNvcmUgUHJlc3MgQ29udHJvbC1EIHRvIGV4aXQuJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pOyAvLyB0byBjYXRjaCBraWxsIFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9