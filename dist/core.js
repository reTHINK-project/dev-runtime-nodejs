// version: 0.1.0
// date: Wed Jul 12 2017 16:04:05 GMT+0100 (WEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("path"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else if(typeof define === 'function' && define.amd)
		define("core", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "path", "node-fetch", "urijs", "atob", "dexie", "fake-indexeddb", "fake-indexeddb/lib/FDBKeyRange", "indexeddbshim", "node-localstorage", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("path"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else
		root["core"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["path"], root["node-fetch"], root["urijs"], root["atob"], root["dexie"], root["fake-indexeddb"], root["fake-indexeddb/lib/FDBKeyRange"], root["indexeddbshim"], root["node-localstorage"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
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
/***/ (function(module, exports) {

module.exports = require("path");

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
var methods = { GET: 'get', POST: 'post' };

var fetch = __webpack_require__(10);

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
/* 7 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
/* 12 */,
/* 13 */
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

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _SandboxWorker = __webpack_require__(9);

var _SandboxWorker2 = _interopRequireDefault(_SandboxWorker);

var _SandboxApp = __webpack_require__(8);

var _SandboxApp2 = _interopRequireDefault(_SandboxApp);

var _Request = __webpack_require__(6);

var _Request2 = _interopRequireDefault(_Request);

var _atob2 = __webpack_require__(14);

var _atob3 = _interopRequireDefault(_atob2);

var _StorageManager = __webpack_require__(22);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _RuntimeCatalogue = __webpack_require__(21);

var _PersistenceManager = __webpack_require__(20);

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _nodeLocalstorage = __webpack_require__(19);

var _dexie = __webpack_require__(15);

var _dexie2 = _interopRequireDefault(_dexie);

var _indexeddbshim = __webpack_require__(18);

var _indexeddbshim2 = _interopRequireDefault(_indexeddbshim);

var _RuntimeCapabilities = __webpack_require__(7);

var _RuntimeCapabilities2 = _interopRequireDefault(_RuntimeCapabilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dexie2.default.dependencies.indexedDB = __webpack_require__(16);
_dexie2.default.dependencies.IDBKeyRange = __webpack_require__(17);

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
          resolve(new _SandboxWorker2.default(_path2.default.join('dist', 'ContextServiceProvider.js')));
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("atob");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("dexie");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("fake-indexeddb");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fake-indexeddb/lib/FDBKeyRange");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("indexeddbshim");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("node-localstorage");

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


var _urijs = __webpack_require__(11);

var _urijs2 = _interopRequireDefault(_urijs);

var _RuntimeFactory = __webpack_require__(13);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZTdhNTUyOTBhYmJjYmI0NDg1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NyYy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9TYW5kYm94QXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9TYW5kYm94V29ya2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmlqc1wiIiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdG9iXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGV4aWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImluZGV4ZWRkYnNoaW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JlLmpzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiZmV0Y2giLCJyZXF1aXJlIiwiUmVxdWVzdCIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibWV0aG9kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWFrZUxvY2FsUmVxdWVzdCIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInJlYXNvbiIsInllbGxvdyIsInVybE1hcCIsIm1hcFByb3RvY29sIiwiZ3JlZW4iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInJlcyIsInN0YXR1cyIsInRleHQiLCJib2R5IiwidG9TdHJpbmciLCJlcnIiLCJlcnJvciIsInJlZCIsInBvc3RPcHRpb25zIiwicHJvdG9jb2xtYXAiLCJmb3VuZFByb3RvY29sIiwicHJvdG9jb2wiLCJzbGljZSIsImxlbmd0aCIsIkVycm9yIiwiUnVudGltZUNhcGFiaWxpdGllcyIsInN0b3JhZ2VNYW5hZ2VyIiwiYWxsIiwiX2dldEVudmlyb25tZW50IiwiY2FwYWJpbGl0aWVzIiwiY2FwYWJpbGl0eSIsImFzc2lnbiIsInNldCIsImdldCIsImhhc093blByb3BlcnR5IiwiZ2V0UnVudGltZUNhcGFiaWxpdGllcyIsIm5vZGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJTYW5kYm94QXBwIiwidHlwZSIsIk5PUk1BTCIsIm9uIiwibXNnIiwidG8iLCJzdGFydHNXaXRoIiwiX29uTWVzc2FnZSIsInNlbmQiLCJjaGlsZCIsImNvbG9ycyIsIlNhbmRib3hXb3JrZXIiLCJzY3JpcHQiLCJ3b3JrZXIiLCJmb3JrIiwiZSIsImV4aXQiLCJraWxsIiwiZGVwZW5kZW5jaWVzIiwiaW5kZXhlZERCIiwiSURCS2V5UmFuZ2UiLCJjcmVhdGVTdG9yYWdlTWFuYWdlciIsImluZGV4ZWRkQiIsInN0b3JhZ2VOYW1lIiwiZGIiLCJSdW50aW1lRmFjdG9yeSIsImNyZWF0ZSIsImNyZWF0ZVNhbmRib3giLCJTYW5kYm94Q2FwYWJpbGl0aWVzIiwiY2FwYWJpbGl0aWVzTWFuYWdlciIsImlzQXZhaWxhYmxlIiwiam9pbiIsImNyZWF0ZUFwcFNhbmRib3giLCJjcmVhdGVIdHRwUmVxdWVzdCIsInJlcXVlc3QiLCJhdG9iIiwiYjY0IiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlUnVudGltZUNhdGFsb2d1ZSIsImNhdGFsb2d1ZSIsInJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJkb21haW4iLCJydW50aW1lRGVzY3JpcHRvciIsInJldHVybkh5cGVydHkiLCJoeXBlcnR5Iiwic2VhcmNoSHlwZXJ0eSIsInJ1bnRpbWUiLCJkZXNjcmlwdG9yIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJyZWdpc3RyeSIsImh5cGVydGllc0xpc3QiLCJydW50aW1lUmVhZHkiLCJydW50aW1lSHlwZXJ0eVVSTCIsImh5cGVydHlVUkwiLCJsb2FkSHlwZXJ0eSIsImxvYWRTdHViIiwib3JhbmdlIiwiZG8iLCJydW50aW1lVVJMIiwiZ2V0UnVudGltZURlc2NyaXB0b3IiLCJzb3VyY2VQYWNrYWdlVVJMIiwic291cmNlUGFja2FnZSIsImdldFNvdXJjZVBhY2thZ2VGcm9tVVJMIiwiUnVudGltZVVBIiwic291cmNlQ29kZSIsImluaXQiLCJ3YXJuaW5nIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFD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Q0QsT0FKRDtBQUtILEtBZkQsRUFlR0QsS0FmSCxDQWVTLFVBQUNDLE1BQUQsRUFBWTtBQUNuQmYsY0FBUTZCLEtBQVIsQ0FBYyxvRkFBZCxFQUFvR2QsTUFBcEc7QUFDRCxLQWpCRDtBQWtCRDtBQUNKLENBeEJEOztBQTBCQTtBQUNBSyxRQUFRbUMsRUFBUixDQUFXLFNBQVgsRUFBc0IsVUFBQ2lFLE9BQUQsRUFBYTtBQUNqQ3hILFVBQVF5SCxJQUFSLENBQWFELFFBQVFFLElBQXJCO0FBQ0ExSCxVQUFReUgsSUFBUixDQUFhRCxRQUFRRyxPQUFyQjtBQUNBM0gsVUFBUXlILElBQVIsQ0FBYUQsUUFBUUksS0FBckI7QUFDRCxDQUpEOztBQU1BeEcsUUFBUW1DLEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFVBQUNDLEdBQUQsRUFBUztBQUN6QnhELFVBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBbUIsVUFBUWdELElBQVI7QUFDQWhELFVBQVFpRCxJQUFSO0FBQ0YsQ0FKRDs7QUFNQWpELFFBQVFtQyxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFDQyxHQUFELEVBQVM7QUFDM0J4RCxVQUFReUgsSUFBUixDQUFhLGtDQUFiO0FBQ0FyRyxVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpEOztBQU1BakQsUUFBUW1DLEVBQVIsQ0FBVyxRQUFYLEVBQXFCLFlBQU07QUFDekJ2RCxVQUFReUgsSUFBUixDQUFhLGtEQUFiO0FBQ0FyRyxVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSTs7QUFFSmpELFFBQVFtQyxFQUFSLENBQVcsU0FBWCxFQUFzQixZQUFNO0FBQzFCdkQsVUFBUXlILElBQVIsQ0FBYSxpREFBYjtBQUNBckcsVUFBUWdELElBQVI7QUFDQWhELFVBQVFpRCxJQUFSO0FBQ0QsQ0FKRCxFLENBSUksZ0IiLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJwYXRoXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiYXRvYlwiKSwgcmVxdWlyZShcImRleGllXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiksIHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpLCByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjb3JlXCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiZXZhbFwiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJjb2xvcnNcIiwgXCJwYXRoXCIsIFwibm9kZS1mZXRjaFwiLCBcInVyaWpzXCIsIFwiYXRvYlwiLCBcImRleGllXCIsIFwiZmFrZS1pbmRleGVkZGJcIiwgXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiwgXCJpbmRleGVkZGJzaGltXCIsIFwibm9kZS1sb2NhbHN0b3JhZ2VcIiwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJwYXRoXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiYXRvYlwiKSwgcmVxdWlyZShcImRleGllXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiksIHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpLCByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJdLCByb290W1wicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXSwgcm9vdFtcImV2YWxcIl0sIHJvb3RbXCJjaGlsZF9wcm9jZXNzXCJdLCByb290W1wiY29sb3JzXCJdLCByb290W1wicGF0aFwiXSwgcm9vdFtcIm5vZGUtZmV0Y2hcIl0sIHJvb3RbXCJ1cmlqc1wiXSwgcm9vdFtcImF0b2JcIl0sIHJvb3RbXCJkZXhpZVwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiXCJdLCByb290W1wiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCJdLCByb290W1wiaW5kZXhlZGRic2hpbVwiXSwgcm9vdFtcIm5vZGUtbG9jYWxzdG9yYWdlXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIl0sIHJvb3RbXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIl0sIHJvb3RbXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZlN2E1NTI5MGFiYmNiYjQ0ODVlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmFsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5jb25zdCBtZXRob2RzID0ge0dFVDogJ2dldCcsIFBPU1Q6ICdwb3N0J307XG5cbmxldCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpO1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgX3RoaXNbbWV0aG9kc1ttZXRob2RdXSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBfdGhpcy5tYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsaW5nIHJlcXVlc3QgbWV0aG9kc1xuICAgKiBAcmV0dXJucyB7dGV4dDxzdHJpbmc+fVxuICAgKiovXG4gIG1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgX3RoaXMgPXRoaXNcbiAgICBjb25zb2xlLmxvZygnSFRUUFMgUmVxdWVzdDonLnllbGxvdywgbWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNYXBwZWQgdXJsIGlzICcueWVsbG93LCB1cmxNYXAsJ21ldGhvZCBpczonLmdyZWVuLCBtZXRob2QpO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xuXG4gICAgICBpZihtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBHRVQgbWV0aG9kXG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBHRVQgbWV0aG9kIG9mIHVybDonLnJlZCAsIHVybE1hcCwgJyByZWFzb24gOicucmVkLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGxldCBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8qICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGJvZHk6IG9wdGlvbnMgJiYgb3B0aW9ucy5ib2R5ID8gb3B0aW9ucy5ib2R5IDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKHVybE1hcCwgcG9zdE9wdGlvbnMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuICAgICAgICB9KS50aGVuKChib2R5KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShib2R5LnRvU3RyaW5nKCd1dGY4JykpXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gUE9TVCBtZXRob2Qgb2YgdXJsOicsdXJsTWFwLCAnd2l0aCBvcHRpb25zOicsIG9wdGlvbnMsICdyZWFzb24gOicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAvKipcbiAgKiBAcmV0dXJucyB7dmFyaWFibGU8c3RyaW5nPn1cbiAgKiovXG4gIG1hcFByb3RvY29sKHVybCkge1xuICAgIGxldCBwcm90b2NvbG1hcCA9IHtcbiAgICAgICdsb2NhbGhvc3Q6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ3VuZGVmaW5lZDovLyc6ICdodHRwczovLycsXG4gICAgICAnaHlwZXJ0eS1jYXRhbG9ndWU6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHBzOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwOi8vJzogJ2h0dHBzOi8vJ1xuICAgIH1cblxuICAgIGxldCBmb3VuZFByb3RvY29sID0gZmFsc2VcbiAgICBmb3IgKGxldCBwcm90b2NvbCBpbiBwcm90b2NvbG1hcCkge1xuICAgICAgaWYgKHVybC5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpID09PSBwcm90b2NvbCkge1xuICAgICAgICB1cmwgPSBwcm90b2NvbG1hcFtwcm90b2NvbF0gKyB1cmwuc2xpY2UocHJvdG9jb2wubGVuZ3RoLCB1cmwubGVuZ3RoKVxuICAgICAgICBmb3VuZFByb3RvY29sID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmRQcm90b2NvbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHByb3RvY29sIG9mIHVybDogJyArIHVybClcbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVxdWVzdC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gVE9ETzogaW1wb3J0IGFuZCBleHRlbmQgdGhlIGNsYXNzIG9mIHRoZSBzZXJ2aWNlLWZyYW1ld29ya1xuLy8gc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5jbGFzcyBSdW50aW1lQ2FwYWJpbGl0aWVzIHtcblxuICAgY29uc3RydWN0b3Ioc3RvcmFnZU1hbmFnZXIpIHtcbiAgICBpZiAoIXN0b3JhZ2VNYW5hZ2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBSdW50aW1lIENhcGFiaWxpdGllcyBuZWVkIHRoZSBzdG9yYWdlTWFuYWdlcicpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIgPSBzdG9yYWdlTWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFzIGEgcHJvbWlzZSBSdW50aW1lQ2FwYWJpbGl0aWVzIGpzb24gb2JqZWN0IHdpdGggYWxsIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMgb2YgdGhlIHJ1bnRpbWUuXG4gICAqIElmIGl0IHdhcyBub3QgeWV0IHBlcnNpc3RlZCBpbiB0aGUgU3RvcmFnZSBNYW5hZ2VyIGl0IGNvbGxlY3RzIGFsbCByZXF1aXJlZCBpbmZvIGZyb20gdGhlIHBsYXRmb3JtIGFuZCBzYXZlcyBpbiB0aGUgc3RvcmFnZSBtYW5hZ2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fVxuICAgKi9cbiAgZ2V0UnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuX2dldEVudmlyb25tZW50KCldKS50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0aWVzID0ge307XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLl9nZXRFbnZpcm9ubWVudCgpczogJywgdGhpcy5fZ2V0RW52aXJvbm1lbnQoKSk7XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKGNhcGFiaWxpdHkpID0+IHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGNhcGFiaWxpdGllcywgY2FwYWJpbGl0eSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXBhYmlsaXRpZXM6ICcsIGNhcGFiaWxpdGllcyk7XG4gICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KCdjYXBhYmlsaXRpZXMnLCAnMScsIGNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgcmVzb2x2ZShjYXBhYmlsaXRpZXMpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFzIGEgcHJvbWlzZSBhIGJvb2xlYW4gYWNjb3JkaW5nIHRvIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5nZXQoJ2NhcGFiaWxpdGllcycpLnRoZW4oKGNhcGFiaWxpdGllcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FwYWJpbGl0eSAnICsgY2FwYWJpbGl0eSArICcgaXMgYXZhaWxhYmxlPyAnLCBjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKTtcbiAgICAgICAgaWYgKGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgY2hlY2tpbmcgY2FwYWJpbGl0eSwgcmVhc29uOicsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGl0IHJlZnJlc2hlcyBwcmV2aW91c2x5IGNvbGxlY3RlZCBjYXBhYmlsaXRpZXMgYW5kIHVwZGF0ZXMgdGhlIHN0b3JhZ2UgbWFuYWdlclxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBvcmdhbml6ZSB0aGUgY29kZSBpbiBzZXBhcmF0ZWQgZmlsZXNcbiAgX2dldEVudmlyb25tZW50KCkge1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIG1vcmUgZWZmZWN0aXZlIGFuZCBjaGVjayB0aGUgZW52aXJvbm1lbnRcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogISEhKHdpbmRvdyAmJiBuYXZpZ2F0b3IpXG4gICAgICB9O1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVDYXBhYmlsaXRpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUNhcGFiaWxpdGllcy5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qXG4qL1xuXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94VHlwZSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZGJveEFwcCBleHRlbmRzIFNhbmRib3gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTYW5kYm94IEFwcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScuZ3JlZW4pO1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgcHJvY2Vzcy5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdTYW5kYm94QXBwIFJlY2VpdmVkIG1lc3NhZ2UgIGlzIDpcXG4nLmdyZWVuKTtcbiAgICAgIGlmIChtc2cuaGFzT3duUHJvcGVydHkoJ3RvJykgJiYgbXNnLnRvLnN0YXJ0c1dpdGgoJ2NvcmU6JykpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdGhpcy5fb25NZXNzYWdlKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBwb3N0TWVzc2FnZSBtZXNzYWdlOiAnLmdyZWVuKTtcbiAgICBwcm9jZXNzLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NhbmRib3hBcHAuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94VHlwZSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5sZXQgY2hpbGQgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG5sZXQgY29sb3JzID0gcmVxdWlyZSgnY29sb3JzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hXb3JrZXIgZXh0ZW5kcyBTYW5kYm94e1xuICBjb25zdHJ1Y3RvcihzY3JpcHQpIHtcbiAgICBzdXBlcihzY3JpcHQpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbiBTYW5kYm94IFdvcmtlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJy5yZWQpO1xuICAgIHRoaXMudHlwZSA9IFNhbmRib3hUeXBlLk5PUk1BTDtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMud29ya2VyID0gY2hpbGQuZm9yayhzY3JpcHQpO1xuICAgIGlmICghIXRoaXMud29ya2VyKSB7XG4gICAgICB0aGlzLndvcmtlci5vbignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgIF90aGlzLl9vbk1lc3NhZ2UoZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMud29ya2VyLnNlbmQoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCB3b3JrZXIgXFxuJywgZSk7XG4gICAgfVxuXG4gICAgdGhpcy53b3JrZXIub24oJ2V4aXQnLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBleGl0IFNhbmRib3hXb3JrZXIgc3RvcHBlZCcpO1xuICAgICAgdGhpcy53b3JrZXIuZXhpdCgpO1xuICAgICAgdGhpcy53b3JrZXIua2lsbCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53b3JrZXIub24oJ2Vycm9yJywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXJyb3IgIFNhbmRib3hXb3JrZXIgc3RvcHBlZCcpO1xuICAgICAgdGhpcy53b3JrZXIuZXhpdCgpO1xuICAgICAgdGhpcy53b3JrZXIua2lsbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uUG9zdE1lc3NhZ2UobXNnKSB7XG4gICAgdGhpcy53b3JrZXIuc2VuZChtc2cpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveFdvcmtlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmlqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVyaWpzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgU2FuZGJveFdvcmtlciBmcm9tICcuL1NhbmRib3hXb3JrZXInO1xuaW1wb3J0IFNhbmRib3hBcHAgZnJvbSAnLi9TYW5kYm94QXBwJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vUmVxdWVzdCc7XG5pbXBvcnQgYXRvYiBmcm9tICdhdG9iJztcblxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXInO1xuaW1wb3J0IHsgUnVudGltZUNhdGFsb2d1ZSB9IGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZSc7XG5pbXBvcnQgUGVyc2lzdGVuY2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyJztcblxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnbm9kZS1sb2NhbHN0b3JhZ2UnO1xuXG5pbXBvcnQgRGV4aWUgZnJvbSAnZGV4aWUnO1xuRGV4aWUuZGVwZW5kZW5jaWVzLmluZGV4ZWREQiA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiJylcbkRleGllLmRlcGVuZGVuY2llcy5JREJLZXlSYW5nZSA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZScpXG5cbmltcG9ydCBzZXRHbG9iYWxWYXJzIGZyb20gJ2luZGV4ZWRkYnNoaW0nO1xuXG5pbXBvcnQgUnVudGltZUNhcGFiaWxpdGllcyBmcm9tICcuL1J1bnRpbWVDYXBhYmlsaXRpZXMnO1xuXG5cbmxldCBjcmVhdGVTdG9yYWdlTWFuYWdlciA9ICgpID0+IHtcbiAgbGV0IGluZGV4ZWRkQiA9IHt9O1xuICBsZXQge2luZGV4ZWREQiwgSURCS2V5UmFuZ2UgfSA9IGluZGV4ZWRkQjtcbiAgbGV0IHN0b3JhZ2VOYW1lID0gJ2NhY2hlJztcblxuICBjb25zdCBkYiA9IG5ldyBEZXhpZShzdG9yYWdlTmFtZSk7XG5cbiAgc3RvcmFnZU1hbmFnZXIgPSBuZXcgU3RvcmFnZU1hbmFnZXIoZGIsIHN0b3JhZ2VOYW1lKTtcbiAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xufTtcblxubGV0IHN0b3JhZ2VNYW5hZ2VyID0gY3JlYXRlU3RvcmFnZU1hbmFnZXIoKTtcblxubGV0IFJ1bnRpbWVGYWN0b3J5ID0gT2JqZWN0LmNyZWF0ZSh7XG4gICAgY3JlYXRlU2FuZGJveChjYXBhYmlsaXRpZXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSAgPT4ge1xuXG4gICAgICAgIGxldCBjYXBhYmlsaXR5ID0gJ25vZGUnO1xuICAgICAgICBsZXQgU2FuZGJveENhcGFiaWxpdGllcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlci5pc0F2YWlsYWJsZShjYXBhYmlsaXR5KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgIFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7IFwibm9kZVwiOiB0cnVlIH07XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBTYW5kYm94V29ya2VyKCBwYXRoLmpvaW4oJ2Rpc3QnLCAnQ29udGV4dFNlcnZpY2VQcm92aWRlci5qcycpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgICAgfVxuICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbY3JlYXRlU2FuZGJveCBdLCBFcnJvciBvY2N1cmVkIHdoaWxlIGNyZWF0aW5nIFNhbmRib3gsIHJlYXNvbiA6ICcsIHJlYXNvbik7XG4gICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBcHBTYW5kYm94KCkge1xuICAgICAgcmV0dXJuIG5ldyBTYW5kYm94QXBwKCAnLi4vZGlzdC9Db250ZXh0QXBwLmpzJyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUh0dHBSZXF1ZXN0KCkge1xuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSxcblxuICAgIGF0b2IoYjY0KSB7XG4gICAgICByZXR1cm4gYXRvYihiNjQpO1xuICAgIH0sXG5cbiAgICBwZXJzaXN0ZW5jZU1hbmFnZXIoKSB7XG4gICAgICBsZXQgbG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgnLi9zY3JhdGNoJyk7XG4gICAgICByZXR1cm4gbmV3IFBlcnNpc3RlbmNlTWFuYWdlcihsb2NhbFN0b3JhZ2UpO1xuICAgIH0sXG5cbiAgICBzdG9yYWdlTWFuYWdlcigpIHtcbiAgICAgIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlUnVudGltZUNhdGFsb2d1ZSgpIHtcbiAgICAgIHRoaXMuY2F0YWxvZ3VlID0gbmV3IFJ1bnRpbWVDYXRhbG9ndWUodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5jYXRhbG9ndWU7XG4gICAgfSxcblxuICAgIHJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIgPSBuZXcgUnVudGltZUNhcGFiaWxpdGllcyhzdG9yYWdlTWFuYWdlcik7XG4gICAgICByZXR1cm4gIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlcjtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lRmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lRmFjdG9yeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF0b2JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhdG9iXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGV4aWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZXhpZVwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmFrZS1pbmRleGVkZGJcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1sb2NhbHN0b3JhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG4vKipcbiAqIE5vZGUuanMgY2hpbGQgcHJvY2VzcyAoc2ltdWx0YW5lb3VzbHkgaXMgYSBwYXJlbnQgcHJvY2VzcyBvZiBDb250ZXh0U2VydmljZVByb3ZpZGVyIHNhbmRib3gpXG4gKiB1c2VkIGFzIGFuIGlzb2xhdGVkIHNhbmRib3ggdG8gbG9hZCB0aGUgSHlwZXJ0eSBydW50aW1lIGFrYSBjb3JlUnVudGltZVxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVVJJIGZyb20gJ3VyaWpzJztcbmltcG9ydCBSdW50aW1lRmFjdG9yeSBmcm9tICcuL1J1bnRpbWVGYWN0b3J5JztcbmltcG9ydCBfZXZhbCBmcm9tICdldmFsJztcblxuXG5cbmxldCBkb21haW47XG5sZXQgcnVudGltZURlc2NyaXB0b3I7XG5cbmxldCBjYXRhbG9ndWUgPSBSdW50aW1lRmFjdG9yeS5jcmVhdGVSdW50aW1lQ2F0YWxvZ3VlKCk7XG5cbi8vIHJldHVybkh5cGVydHkgZ2l2ZW50IHRoZSBydW50aW1lSHlwZXJ0eVVSTCxcbi8vIFNlbmRzIG1lc3NhZ2UgPSdsb2FkZWRIeXBlcnR5JyB0byB0aGUgdGhlIHBhcmVudCBwcm9jZXNzIFJ1bnRpbWVOb2RlIHRocm91Z2h0IElQQyBjaGFubmVsXG5cbmZ1bmN0aW9uIHJldHVybkh5cGVydHkoaHlwZXJ0eSkgeyBcbiAgcHJvY2Vzcy5zZW5kKHt0bzoncnVudGltZTpsb2FkZWRIeXBlcnR5JywgYm9keTogaHlwZXJ0eX0pO1xufVxuXG4vLyB3aGlsZSBsb2FkaW5nIHRoZSBwcm90b2NvbFN0dWIgc2VhcmNoIGh5cGVydHkgaW4gdGhlIHJ1bnRpbWUgcmVnaXN0cnlcbmZ1bmN0aW9uIHNlYXJjaEh5cGVydHkocnVudGltZSwgZGVzY3JpcHRvcikge1xuICBsZXQgaHlwZXJ0eSA9IHVuZGVmaW5lZDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgd2hpbGUgKCFoeXBlcnR5ICYmIGluZGV4IDwgcnVudGltZS5yZWdpc3RyeS5oeXBlcnRpZXNMaXN0Lmxlbmd0aCkge1xuICAgIGlmIChydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3RbaW5kZXhdLmRlc2NyaXB0b3IgPT09IGRlc2NyaXB0b3IpXG4gICAgICAgIGh5cGVydHkgPSBydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3RbaW5kZXhdO1xuICAgIGluZGV4Kys7XG4gIH1cbiAgY29uc29sZS5sb2coJ0h5ZXBydHkgZm91bmRlZCEnLmdyZWVuKTtcbiAgcmV0dXJuIGh5cGVydHk7XG59XG5cbi8vIEluc3RhbGwgcnVudGltZSBvbiB0aGUgY29yZSBTYW5kYm94XG5mdW5jdGlvbiBydW50aW1lUmVhZHkocnVudGltZSkge1xuICAvLyBjb3JlUnVudGltZSBnbG9iYWwgRXZlbnRMaXN0ZW5lciBmb3IgYW50eSBpbmNvbWluZyBtZXNzYWdlXG4gIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZEh5cGVydHknKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IG1zZy5ib2R5LmRlc2NyaXB0b3I7XG4gICAgICBsZXQgaHlwZXJ0eSA9IHNlYXJjaEh5cGVydHkocnVudGltZSwgZGVzY3JpcHRvcik7XG4gICAgICBpZiAoaHlwZXJ0eSkge1xuICAgICAgICByZXR1cm5IeXBlcnR5KHtydW50aW1lSHlwZXJ0eVVSTDogaHlwZXJ0eS5oeXBlcnR5VVJMfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydW50aW1lLmxvYWRIeXBlcnR5KGRlc2NyaXB0b3IpLnRoZW4ocmV0dXJuSHlwZXJ0eSkuY2F0Y2goKGVycm9yKT0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBsb2FkaW5nIEh5cGVydHksIHJlYXNvbjogJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZFN0dWInKSB7XG4gICAgICBydW50aW1lLmxvYWRTdHViKG1zZy5ib2R5LmRvbWFpbik7XG4gICAgfVxuICB9LCBmYWxzZSk7XG4gIGNvbnNvbGUubG9nKCctLT4gc2VuZGluZyB0byBNYWluIHByb2Nlc3MgUnVudGltZU5vZGUnLm9yYW5nZSk7XG4gIHByb2Nlc3Muc2VuZCh7dG86J3J1bnRpbWU6aW5zdGFsbGVkJywgYm9keTp7fX0pO1xufVxuXG5cblxucHJvY2Vzcy5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgIGlmIChtc2cuZG8gPT09ICdpbnN0YWxsIHJ1bnRpbWUgY29yZScpIHsgICAgXG4gICAgICAgbGV0IHJ1bnRpbWVVUkwgPSBtc2cuYm9keS5ydW50aW1lVVJMO1xuICAgICAgIGRvbWFpbiA9IG1zZy5ib2R5LmRvbWFpbjtcbiAgICAgICAvLyBHZXRzIFJ1bnRpbWVEZXNjcmlwdG9yIGZyb20gdGhlIHJ1bnRpbWUgY2F0YWxvZ3VlXG4gICAgICBjYXRhbG9ndWUuZ2V0UnVudGltZURlc2NyaXB0b3IocnVudGltZVVSTCkudGhlbigoZGVzY3JpcHRvcikgPT4ge1xuICAgICAgICBydW50aW1lRGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwgPT09ICcvc291cmNlUGFja2FnZScpIHtcbiAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjYXRhbG9ndWUuZ2V0U291cmNlUGFja2FnZUZyb21VUkwoZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlVVJMKTtcbiAgICAgICAgfVxuICAgICAgfSkudGhlbigoc291cmNlUGFja2FnZSkgPT4ge1xuICAgICAgICAgIGxldCBSdW50aW1lVUEgPSBfZXZhbChzb3VyY2VQYWNrYWdlLnNvdXJjZUNvZGUsIHRydWUpO1xuICAgICAgICAgIGxldCBydW50aW1lID0gbmV3IFJ1bnRpbWVVQShydW50aW1lRGVzY3JpcHRvciwgUnVudGltZUZhY3RvcnksIGRvbWFpbik7XG4gICAgICAgICAgcnVudGltZS5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBydW50aW1lUmVhZHkocnVudGltZSk7XG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluaXQnLCByZWFzb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHRoZSBSdW50aW1lRGVzY3JpcHRvciBmcm9tIHRoZSBzZXJ2aWNlIGZyYW1ld29yayBjYXRhbG9ndWUsIHJlYXNvbjogJywgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vLyBjb3JlUnVudGltZSBQcm9jZXNzICBlcnJvciBoYW5kbGluZ1xucHJvY2Vzcy5vbignd2FybmluZycsICh3YXJuaW5nKSA9PiB7XG4gIGNvbnNvbGUud2Fybih3YXJuaW5nLm5hbWUpO1xuICBjb25zb2xlLndhcm4od2FybmluZy5tZXNzYWdlKTtcbiAgY29uc29sZS53YXJuKHdhcm5pbmcuc3RhY2spO1xufSk7XG5cbnByb2Nlc3Mub24oJ2V4aXQnLCAobXNnKSA9PiB7XG4gICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBjb3JlIGV4aXRlZCcpO1xuICAgcHJvY2Vzcy5leGl0KCk7XG4gICBwcm9jZXNzLmtpbGwoKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdlcnJvcicsIChtc2cpID0+IHtcbiAgY29uc29sZS53YXJuKCdjaGlsZCBwcm9jZXNzIGVycm9yIGNvcmUgc3RvcHBlZCcpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTtcblxucHJvY2Vzcy5vbignU0lHSU5UJywgKCkgPT4ge1xuICBjb25zb2xlLndhcm4oJ1JlY2VpdmVkIFNJR0lOVC4gYWxsIE5vZGUgU3ViLVByb2Nlc3MgYXJlIGV4aXRlZCcpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTsgLy8gdG8gY2F0Y2ggY3J0bC1jXG5cbnByb2Nlc3Mub24oJ1NJR1RFUk0nLCAoKSA9PiB7XG4gIGNvbnNvbGUud2FybignUmVjZWl2ZWQgU0lHVEVSTS4gY29yZSBQcmVzcyBDb250cm9sLUQgdG8gZXhpdC4nKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG4gIHByb2Nlc3Mua2lsbCgpO1xufSk7IC8vIHRvIGNhdGNoIGtpbGxcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==