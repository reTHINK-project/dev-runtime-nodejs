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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("child_process"), require("colors"), require("node-fetch"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeFactory", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "child_process", "colors", "node-fetch", "atob", "dexie", "fake-indexeddb", "fake-indexeddb/lib/FDBKeyRange", "indexeddbshim", "node-localstorage", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeFactory"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("child_process"), require("colors"), require("node-fetch"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else
		root["RuntimeFactory"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["child_process"], root["colors"], root["node-fetch"], root["atob"], root["dexie"], root["fake-indexeddb"], root["fake-indexeddb/lib/FDBKeyRange"], root["indexeddbshim"], root["node-localstorage"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 2 */,
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
/* 10 */,
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGU2M2VkMDNmMmQ5NTc1MzFmNGEyP2I1NWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiPzc0NzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiPzQzMDgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCI/YTE5OCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVxdWVzdC5qcz83M2E5Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzPzQ0NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanM/NzAyZCIsIndlYnBhY2s6Ly8vLi9zcmMvU2FuZGJveFdvcmtlci5qcz8xZTQ2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIj9lOTA1Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lRmFjdG9yeS5qcz8zNTE0Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIj9jNzVhIiwid2VicGFjazovLy9leHRlcm5hbCBcImRleGllXCI/MWQ2NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiPzJhMTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCI/ZTYwMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCI/OTZkZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiP2IwZmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIj82YTc3Iiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiP2YxYzQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiPzdjMTkiXSwibmFtZXMiOlsibWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJmZXRjaCIsInJlcXVpcmUiLCJSZXF1ZXN0IiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWtlTG9jYWxSZXF1ZXN0IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwicmVhc29uIiwieWVsbG93IiwidXJsTWFwIiwibWFwUHJvdG9jb2wiLCJncmVlbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEIiwicmVzIiwic3RhdHVzIiwidGV4dCIsImJvZHkiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicmVkIiwicG9zdE9wdGlvbnMiLCJwcm90b2NvbG1hcCIsImZvdW5kUHJvdG9jb2wiLCJwcm90b2NvbCIsInNsaWNlIiwibGVuZ3RoIiwiRXJyb3IiLCJSdW50aW1lQ2FwYWJpbGl0aWVzIiwic3RvcmFnZU1hbmFnZXIiLCJhbGwiLCJfZ2V0RW52aXJvbm1lbnQiLCJjYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXR5IiwiYXNzaWduIiwic2V0IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJnZXRSdW50aW1lQ2FwYWJpbGl0aWVzIiwibm9kZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIlNhbmRib3hBcHAiLCJ0eXBlIiwiTk9STUFMIiwib24iLCJtc2ciLCJ0byIsInN0YXJ0c1dpdGgiLCJfb25NZXNzYWdlIiwic2VuZCIsImNoaWxkIiwiY29sb3JzIiwiU2FuZGJveFdvcmtlciIsInNjcmlwdCIsIndvcmtlciIsImZvcmsiLCJlIiwiZXhpdCIsImtpbGwiLCJkZXBlbmRlbmNpZXMiLCJpbmRleGVkREIiLCJJREJLZXlSYW5nZSIsImNyZWF0ZVN0b3JhZ2VNYW5hZ2VyIiwiaW5kZXhlZGRCIiwic3RvcmFnZU5hbWUiLCJkYiIsIlJ1bnRpbWVGYWN0b3J5IiwiY3JlYXRlIiwiY3JlYXRlU2FuZGJveCIsIlNhbmRib3hDYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXRpZXNNYW5hZ2VyIiwiaXNBdmFpbGFibGUiLCJjcmVhdGVBcHBTYW5kYm94IiwiY3JlYXRlSHR0cFJlcXVlc3QiLCJyZXF1ZXN0IiwiYXRvYiIsImI2NCIsInBlcnNpc3RlbmNlTWFuYWdlciIsImxvY2FsU3RvcmFnZSIsImNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUiLCJjYXRhbG9ndWUiLCJydW50aW1lQ2FwYWJpbGl0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLHNEOzs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxJQUFNQSxVQUFVLEVBQUNDLEtBQUssS0FBTixFQUFhQyxNQUFNLE1BQW5CLEVBQWhCOztBQUVBLElBQUlDLFFBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFaOztJQUdNQyxPO0FBQ0oscUJBQWM7QUFBQTs7QUFDWixRQUFJQyxRQUFRLElBQVo7QUFDQUMsWUFBUUMsR0FBUixDQUFZLG1CQUFaO0FBQ0FDLFdBQU9DLElBQVAsQ0FBWVYsT0FBWixFQUFxQlcsT0FBckIsQ0FBNkIsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZDTixZQUFNTixRQUFRWSxNQUFSLENBQU4sSUFBeUIsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ3pDLGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1gsZ0JBQU1ZLGdCQUFOLENBQXVCTixNQUF2QixFQUErQkMsR0FBL0IsRUFBb0NDLE9BQXBDLEVBQTZDSyxJQUE3QyxDQUFrRCxVQUFTQyxNQUFULEVBQWlCO0FBQ2pFSixvQkFBUUksTUFBUjtBQUNELFdBRkQsRUFFR0MsS0FGSCxDQUVTLFVBQUNDLE1BQUQsRUFBWTtBQUNuQkwsbUJBQU9LLE1BQVA7QUFDRCxXQUpEO0FBS0QsU0FOTSxDQUFQO0FBT0QsT0FSRDtBQVNELEtBVkQ7QUFXRDs7QUFFRDs7Ozs7Ozs7cUNBSWlCVixNLEVBQVFDLEcsRUFBS0MsTyxFQUFTO0FBQ3JDLFVBQUlSLFFBQU8sSUFBWDtBQUNBQyxjQUFRQyxHQUFSLENBQVksaUJBQWlCZSxNQUE3QixFQUFxQ1gsTUFBckMsRUFBNkNDLEdBQTdDLEVBQWtEQyxPQUFsRDs7QUFFQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUMzQyxZQUFJTyxTQUFTbEIsTUFBTW1CLFdBQU4sQ0FBa0JaLEdBQWxCLENBQWI7O0FBRUFOLGdCQUFRQyxHQUFSLENBQVksaUJBQWlCZSxNQUE3QixFQUFxQ0MsTUFBckMsRUFBNEMsYUFBYUUsS0FBekQsRUFBZ0VkLE1BQWhFO0FBQ0FlLGdCQUFRQyxHQUFSLENBQVlDLDRCQUFaLEdBQTJDLEdBQTNDOztBQUVBLFlBQUdqQixXQUFXLEtBQWQsRUFBcUI7QUFDbkI7QUFDQVQsZ0JBQU1xQixNQUFOLEVBQWNMLElBQWQsQ0FBbUIsVUFBQ1csR0FBRCxFQUFTO0FBQzFCdkIsb0JBQVFDLEdBQVIsQ0FBWSxrQkFBa0JrQixLQUE5QixFQUFzQ0ksSUFBSUMsTUFBMUM7QUFDQSxtQkFBT0QsSUFBSUUsSUFBSixFQUFQO0FBQ0QsV0FIRCxFQUdHYixJQUhILENBR1EsVUFBQ2MsSUFBRCxFQUFTO0FBQ2ZqQixvQkFBUWlCLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLENBQVI7QUFDRCxXQUxELEVBS0diLEtBTEgsQ0FLUyxVQUFDYyxHQUFELEVBQVM7QUFDaEI1QixvQkFBUTZCLEtBQVIsQ0FBYyxzQ0FBc0NDLEdBQXBELEVBQTBEYixNQUExRCxFQUFrRSxZQUFZYSxHQUE5RSxFQUFtRkYsR0FBbkY7QUFDRCxXQVBEO0FBU0QsU0FYRCxNQVdPLElBQUd2QixXQUFXLE1BQWQsRUFBc0I7QUFDM0IsY0FBSTBCLGNBQWM7QUFDaEIxQixvQkFBUSxNQURRO0FBRTFCOzs7O0FBSVVxQixrQkFBTW5CO0FBTlUsV0FBbEI7O0FBU0FYLGdCQUFNcUIsTUFBTixFQUFjYyxXQUFkLEVBQTJCbkIsSUFBM0IsQ0FBZ0MsVUFBQ1csR0FBRCxFQUFTO0FBQ3ZDdkIsb0JBQVFDLEdBQVIsQ0FBWSxrQkFBa0JrQixLQUE5QixFQUFzQ0ksSUFBSUMsTUFBMUM7QUFDQSxtQkFBT0QsSUFBSUUsSUFBSixFQUFQO0FBQ0QsV0FIRCxFQUdHYixJQUhILENBR1EsVUFBQ2MsSUFBRCxFQUFVO0FBQ2hCakIsb0JBQVFpQixLQUFLQyxRQUFMLENBQWMsTUFBZCxDQUFSO0FBQ0QsV0FMRCxFQUtHYixLQUxILENBS1MsVUFBQ2UsS0FBRCxFQUFXO0FBQ2xCN0Isb0JBQVE2QixLQUFSLENBQWMsc0NBQWQsRUFBcURaLE1BQXJELEVBQTZELGVBQTdELEVBQThFVixPQUE5RSxFQUF1RixVQUF2RixFQUFtR3FCLEdBQW5HO0FBQ0QsV0FQRDtBQVFEO0FBQ0YsT0FwQ00sQ0FBUDtBQXFDRDs7QUFFRjs7Ozs7O2dDQUdhdEIsRyxFQUFLO0FBQ2YsVUFBSTBCLGNBQWM7QUFDaEIsd0JBQWdCLFVBREE7QUFFaEIsd0JBQWdCLFVBRkE7QUFHaEIsZ0NBQXdCLFVBSFI7QUFJaEIsb0JBQVksVUFKSTtBQUtoQixtQkFBVztBQUxLLE9BQWxCOztBQVFBLFVBQUlDLGdCQUFnQixLQUFwQjtBQUNBLFdBQUssSUFBSUMsUUFBVCxJQUFxQkYsV0FBckIsRUFBa0M7QUFDaEMsWUFBSTFCLElBQUk2QixLQUFKLENBQVUsQ0FBVixFQUFhRCxTQUFTRSxNQUF0QixNQUFrQ0YsUUFBdEMsRUFBZ0Q7QUFDOUM1QixnQkFBTTBCLFlBQVlFLFFBQVosSUFBd0I1QixJQUFJNkIsS0FBSixDQUFVRCxTQUFTRSxNQUFuQixFQUEyQjlCLElBQUk4QixNQUEvQixDQUE5QjtBQUNBSCwwQkFBZ0IsSUFBaEI7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDQSxhQUFMLEVBQW9CO0FBQ2xCLGNBQU0sSUFBSUksS0FBSixDQUFVLDhCQUE4Qi9CLEdBQXhDLENBQU47QUFDRDtBQUNELGFBQU9BLEdBQVA7QUFDRDs7Ozs7O2tCQUdZUixPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTs7SUFFTXdDLG1CO0FBRUgsK0JBQVlDLGNBQVosRUFBNEI7QUFBQTs7QUFDM0IsUUFBSSxDQUFDQSxjQUFMLEVBQXFCLE1BQU0sSUFBSUYsS0FBSixDQUFVLGtEQUFWLENBQU47QUFDckIsU0FBS0UsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzZDQUt5QjtBQUFBOztBQUN2QixhQUFPLElBQUkvQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDRixnQkFBUWdDLEdBQVIsQ0FBWSxDQUFDLE1BQUtDLGVBQUwsRUFBRCxDQUFaLEVBQXNDN0IsSUFBdEMsQ0FBMkMsVUFBQ0MsTUFBRCxFQUFZOztBQUVyRCxjQUFJNkIsZUFBZSxFQUFuQjtBQUNBMUMsa0JBQVFDLEdBQVIsQ0FBWSwyQkFBWixFQUF5QyxNQUFLd0MsZUFBTCxFQUF6Qzs7QUFFQTVCLGlCQUFPVCxPQUFQLENBQWUsVUFBQ3VDLFVBQUQsRUFBZ0I7QUFDN0J6QyxtQkFBTzBDLE1BQVAsQ0FBY0YsWUFBZCxFQUE0QkMsVUFBNUI7QUFDRCxXQUZEOztBQUlBM0Msa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QnlDLFlBQTlCO0FBQ0EsZ0JBQUtILGNBQUwsQ0FBb0JNLEdBQXBCLENBQXdCLGNBQXhCLEVBQXdDLEdBQXhDLEVBQTZDSCxZQUE3Qzs7QUFFQWpDLGtCQUFRaUMsWUFBUjtBQUNELFNBYkQsRUFhRzVCLEtBYkgsQ0FhUyxVQUFDZSxLQUFELEVBQVc7QUFDbEJuQixpQkFBT21CLEtBQVA7QUFDRCxTQWZEO0FBZ0JELE9BakJNLENBQVA7QUFrQkQ7O0FBRUQ7Ozs7Ozs7Z0NBSVljLFUsRUFBWTtBQUFBOztBQUN0QixhQUFPLElBQUluQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLGVBQUs4QixjQUFMLENBQW9CTyxHQUFwQixDQUF3QixjQUF4QixFQUF3Q2xDLElBQXhDLENBQTZDLFVBQUM4QixZQUFELEVBQWtCO0FBQzdEMUMsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBZ0IwQyxVQUFoQixHQUE2QixpQkFBekMsRUFBNERELGFBQWFLLGNBQWIsQ0FBNEJKLFVBQTVCLEtBQTJDRCxhQUFhQyxVQUFiLENBQXZHO0FBQ0EsY0FBSUQsYUFBYUssY0FBYixDQUE0QkosVUFBNUIsS0FBMkNELGFBQWFDLFVBQWIsQ0FBL0MsRUFBeUU7QUFDdkVsQyxvQkFBUSxJQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG9CQUFRLEtBQVI7QUFDRDtBQUNGLFNBUEQsRUFPR0ssS0FQSCxDQU9TLFVBQUNlLEtBQUQsRUFBVztBQUNsQjdCLGtCQUFRNkIsS0FBUixDQUFjLHNEQUFkLEVBQXNFQSxLQUF0RTtBQUNBbkIsaUJBQU9tQixLQUFQO0FBQ0QsU0FWRDtBQVdELE9BWk0sQ0FBUDtBQWFEOztBQUVEOzs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxhQUFPLElBQUlyQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLGVBQUtzQyxzQkFBTCxHQUE4QnBDLElBQTlCLENBQW1DSCxPQUFuQyxFQUE0Q0ssS0FBNUMsQ0FBa0RKLE1BQWxEO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7O0FBRUQ7Ozs7c0NBQ2tCO0FBQ2hCO0FBQ0EsVUFBSTtBQUNGLGVBQU87QUFDTHVDLGdCQUFNLENBQUMsQ0FBQyxFQUFFQyxVQUFVQyxTQUFaO0FBREgsU0FBUDtBQUdELE9BSkQsQ0FJRSxPQUFNdEIsS0FBTixFQUFhO0FBQ2IsZUFBTztBQUNMb0IsZ0JBQU07QUFERCxTQUFQO0FBR0Q7QUFDRjs7Ozs7O2tCQUdZWCxtQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0VmOztBQUNBOzs7Ozs7Ozs7OytlQXpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNEJxQmMsVTs7O0FBQ25CLHdCQUFjO0FBQUE7O0FBQ1pwRCxZQUFRQyxHQUFSLENBQVksNkRBQTZEa0IsS0FBekU7O0FBRFk7O0FBSVosVUFBS2tDLElBQUwsR0FBWSxxQkFBWUMsTUFBeEI7QUFDQWxDLFlBQVFtQyxFQUFSLENBQVcsU0FBWCxFQUFzQixVQUFDQyxHQUFELEVBQVM7QUFDN0I7QUFDQSxVQUFJQSxJQUFJVCxjQUFKLENBQW1CLElBQW5CLEtBQTRCUyxJQUFJQyxFQUFKLENBQU9DLFVBQVAsQ0FBa0IsT0FBbEIsQ0FBaEMsRUFDRTs7QUFFRixZQUFLQyxVQUFMLENBQWdCSCxHQUFoQjtBQUNELEtBTkQ7QUFMWTtBQVliOzs7O21DQUVjQSxHLEVBQUs7QUFDbEJ4RCxjQUFRQyxHQUFSLENBQVksbUNBQW1Da0IsS0FBL0M7QUFDQUMsY0FBUXdDLElBQVIsQ0FBYUosR0FBYjtBQUNEOzs7Ozs7a0JBbEJrQkosVTs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOztBQUNBOzs7Ozs7Ozs7OytlQXZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQUlTLFFBQVEsbUJBQUFoRSxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUlpRSxTQUFTLG1CQUFBakUsQ0FBUSxDQUFSLENBQWI7O0lBRXFCa0UsYTs7O0FBQ25CLHlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUEsK0hBQ1pBLE1BRFk7O0FBRWxCaEUsWUFBUUMsR0FBUixDQUFZLG9HQUFvRzZCLEdBQWhIO0FBQ0EsV0FBS3VCLElBQUwsR0FBWSxxQkFBWUMsTUFBeEI7QUFDQSxRQUFJdkQsY0FBSjtBQUNBLFdBQUtrRSxNQUFMLEdBQWNKLE1BQU1LLElBQU4sQ0FBV0YsTUFBWCxDQUFkO0FBQ0EsUUFBSSxDQUFDLENBQUMsT0FBS0MsTUFBWCxFQUFtQjtBQUNqQixhQUFLQSxNQUFMLENBQVlWLEVBQVosQ0FBZSxTQUFmLEVBQTBCLFVBQUNZLENBQUQsRUFBTztBQUN6QnBFLGNBQU00RCxVQUFOLENBQWlCUSxDQUFqQjtBQUNQLE9BRkQ7QUFHQSxhQUFLRixNQUFMLENBQVlMLElBQVosQ0FBaUIsRUFBakI7QUFDRCxLQUxELE1BS087QUFDTCxZQUFNLElBQUl2QixLQUFKLENBQVUsNkNBQVYsRUFBeUQ4QixDQUF6RCxDQUFOO0FBQ0Q7O0FBRUQsV0FBS0YsTUFBTCxDQUFZVixFQUFaLENBQWUsTUFBZixFQUF1QixVQUFDQyxHQUFELEVBQVM7QUFDOUJ4RCxjQUFRQyxHQUFSLENBQVksMENBQVo7QUFDQSxhQUFLZ0UsTUFBTCxDQUFZRyxJQUFaO0FBQ0EsYUFBS0gsTUFBTCxDQUFZSSxJQUFaO0FBQ0QsS0FKRDs7QUFNQSxXQUFLSixNQUFMLENBQVlWLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUMvQnhELGNBQVFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGFBQUtnRSxNQUFMLENBQVlHLElBQVo7QUFDQSxhQUFLSCxNQUFMLENBQVlJLElBQVo7QUFDRCxLQUpEO0FBckJrQjtBQTBCbkI7Ozs7bUNBRWNiLEcsRUFBSztBQUNsQixXQUFLUyxNQUFMLENBQVlMLElBQVosQ0FBaUJKLEdBQWpCO0FBQ0Q7Ozs7OztrQkEvQmtCTyxhOzs7Ozs7QUMzQnJCLHVDOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7OztBQUVBOzs7Ozs7QUFMQSxnQkFBTU8sWUFBTixDQUFtQkMsU0FBbkIsR0FBK0IsbUJBQUExRSxDQUFRLEVBQVIsQ0FBL0I7QUFDQSxnQkFBTXlFLFlBQU4sQ0FBbUJFLFdBQW5CLEdBQWlDLG1CQUFBM0UsQ0FBUSxFQUFSLENBQWpDOztBQU9BLElBQUk0RSx1QkFBdUIsU0FBdkJBLG9CQUF1QixHQUFNO0FBQy9CLE1BQUlDLFlBQVksRUFBaEI7QUFEK0IsTUFFMUJILFNBRjBCLEdBRUNHLFNBRkQsQ0FFMUJILFNBRjBCO0FBQUEsTUFFZkMsV0FGZSxHQUVDRSxTQUZELENBRWZGLFdBRmU7O0FBRy9CLE1BQUlHLGNBQWMsT0FBbEI7O0FBRUEsTUFBTUMsS0FBSyxvQkFBVUQsV0FBVixDQUFYOztBQUVBcEMsb0JBQWlCLDZCQUFtQnFDLEVBQW5CLEVBQXVCRCxXQUF2QixDQUFqQjtBQUNBLFNBQU9wQyxlQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFJQSxrQkFBaUJrQyxzQkFBckI7O0FBRUEsSUFBSUksaUJBQWlCM0UsT0FBTzRFLE1BQVAsQ0FBYztBQUMvQkMsZUFEK0IseUJBQ2pCckMsWUFEaUIsRUFDSDtBQUFBOztBQUMxQixXQUFPLElBQUlsQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXNCOztBQUV2QyxVQUFJaUMsYUFBYSxNQUFqQjtBQUNBLFVBQUlxQyxzQkFBc0IsRUFBMUI7O0FBRUEsWUFBS0MsbUJBQUwsQ0FBeUJDLFdBQXpCLENBQXFDdkMsVUFBckMsRUFBaUQvQixJQUFqRCxDQUFzRCxVQUFDQyxNQUFELEVBQVk7QUFDaEUsWUFBR0EsTUFBSCxFQUFXO0FBQ1RtRSxnQ0FBc0IsRUFBRSxRQUFRLElBQVYsRUFBdEI7QUFDQXZFLGtCQUFRLDRCQUFtQixtQ0FBbkIsQ0FBUjtBQUNELFNBSEQsTUFHTyxDQUdOO0FBQ0QsT0FSRixFQVFJSyxLQVJKLENBUVUsVUFBQ0MsTUFBRCxFQUFZO0FBQ25CZixnQkFBUTZCLEtBQVIsQ0FBYyxtRUFBZCxFQUFtRmQsTUFBbkY7QUFDQUwsZUFBT0ssTUFBUDtBQUNGLE9BWEQ7QUFZRCxLQWpCTSxDQUFQO0FBa0JELEdBcEI4QjtBQXNCL0JvRSxrQkF0QitCLDhCQXNCWjtBQUNqQixXQUFPLHlCQUFnQix1QkFBaEIsQ0FBUDtBQUNELEdBeEI4QjtBQTBCL0JDLG1CQTFCK0IsK0JBMEJYO0FBQ2xCLFFBQUlDLFVBQVUsdUJBQWQ7QUFDQSxXQUFPQSxPQUFQO0FBQ0QsR0E3QjhCO0FBK0IvQkMsTUEvQitCLGdCQStCMUJDLEdBL0IwQixFQStCckI7QUFDUixXQUFPLG9CQUFLQSxHQUFMLENBQVA7QUFDRCxHQWpDOEI7QUFtQy9CQyxvQkFuQytCLGdDQW1DVjtBQUNuQixRQUFJQyxlQUFlLG1DQUFpQixXQUFqQixDQUFuQjtBQUNBLFdBQU8saUNBQXVCQSxZQUF2QixDQUFQO0FBQ0QsR0F0QzhCO0FBd0MvQmxELGdCQXhDK0IsNEJBd0NkO0FBQ2YsV0FBT0EsZUFBUDtBQUNELEdBMUM4QjtBQTRDL0JtRCx3QkE1QytCLG9DQTRDTjtBQUN2QixTQUFLQyxTQUFMLEdBQWlCLHVDQUFxQixJQUFyQixDQUFqQjtBQUNBLFdBQU8sS0FBS0EsU0FBWjtBQUNELEdBL0M4QjtBQWlEL0JDLHFCQWpEK0IsaUNBaURUO0FBQ3BCLFNBQUtYLG1CQUFMLEdBQTJCLGtDQUF3QjFDLGVBQXhCLENBQTNCO0FBQ0EsV0FBUSxLQUFLMEMsbUJBQWI7QUFDRDtBQXBEOEIsQ0FBZCxDQUFyQjs7a0JBd0RlSixjOzs7Ozs7QUNqSGYsaUM7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsc0U7Ozs7OztBQ0FBLG9FOzs7Ozs7QUNBQSxrRSIsImZpbGUiOiJSdW50aW1lRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJhdG9iXCIpLCByZXF1aXJlKFwiZGV4aWVcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKSwgcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIiksIHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlJ1bnRpbWVGYWN0b3J5XCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcIm5vZGUtZmV0Y2hcIiwgXCJhdG9iXCIsIFwiZGV4aWVcIiwgXCJmYWtlLWluZGV4ZWRkYlwiLCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiLCBcImluZGV4ZWRkYnNoaW1cIiwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSdW50aW1lRmFjdG9yeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJhdG9iXCIpLCByZXF1aXJlKFwiZGV4aWVcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKSwgcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIiksIHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUnVudGltZUZhY3RvcnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJdLCByb290W1wicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1wiYXRvYlwiXSwgcm9vdFtcImRleGllXCJdLCByb290W1wiZmFrZS1pbmRleGVkZGJcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIl0sIHJvb3RbXCJpbmRleGVkZGJzaGltXCJdLCByb290W1wibm9kZS1sb2NhbHN0b3JhZ2VcIl0sIHJvb3RbXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2M2VkMDNmMmQ5NTc1MzFmNGEyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuY29uc3QgbWV0aG9kcyA9IHtHRVQ6ICdnZXQnLCBQT1NUOiAncG9zdCd9O1xuXG5sZXQgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cblxuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygnTm9kZSBodHRwIFJlcXVlc3QnKTtcbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIF90aGlzW21ldGhvZHNbbWV0aG9kXV0gPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgX3RoaXMubWFrZUxvY2FsUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoYW5kbGluZyByZXF1ZXN0IG1ldGhvZHNcbiAgICogQHJldHVybnMge3RleHQ8c3RyaW5nPn1cbiAgICoqL1xuICBtYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XG4gICAgbGV0IF90aGlzID10aGlzXG4gICAgY29uc29sZS5sb2coJ0hUVFBTIFJlcXVlc3Q6Jy55ZWxsb3csIG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCB1cmxNYXAgPSBfdGhpcy5tYXBQcm90b2NvbCh1cmwpO1xuXG4gICAgICBjb25zb2xlLmxvZygnTWFwcGVkIHVybCBpcyAnLnllbGxvdywgdXJsTWFwLCdtZXRob2QgaXM6Jy5ncmVlbiwgbWV0aG9kKTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCdcblxuICAgICAgaWYobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAvLyBoYW5kbGUgR0VUIG1ldGhvZFxuICAgICAgICBmZXRjaCh1cmxNYXApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuICAgICAgICB9KS50aGVuKChib2R5KT0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gR0VUIG1ldGhvZCBvZiB1cmw6Jy5yZWQgLCB1cmxNYXAsICcgcmVhc29uIDonLnJlZCwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSBpZihtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBsZXQgcG9zdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vKiAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdjYWNoZS1jb250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgICAgICB9LCovXG4gICAgICAgICAgYm9keTogb3B0aW9uc1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKHVybE1hcCwgcG9zdE9wdGlvbnMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuICAgICAgICB9KS50aGVuKChib2R5KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShib2R5LnRvU3RyaW5nKCd1dGY4JykpXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gUE9TVCBtZXRob2Qgb2YgdXJsOicsdXJsTWFwLCAnd2l0aCBvcHRpb25zOicsIG9wdGlvbnMsICdyZWFzb24gOicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAvKipcbiAgKiBAcmV0dXJucyB7dmFyaWFibGU8c3RyaW5nPn1cbiAgKiovXG4gIG1hcFByb3RvY29sKHVybCkge1xuICAgIGxldCBwcm90b2NvbG1hcCA9IHtcbiAgICAgICdsb2NhbGhvc3Q6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ3VuZGVmaW5lZDovLyc6ICdodHRwczovLycsXG4gICAgICAnaHlwZXJ0eS1jYXRhbG9ndWU6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHBzOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwOi8vJzogJ2h0dHBzOi8vJ1xuICAgIH1cblxuICAgIGxldCBmb3VuZFByb3RvY29sID0gZmFsc2VcbiAgICBmb3IgKGxldCBwcm90b2NvbCBpbiBwcm90b2NvbG1hcCkge1xuICAgICAgaWYgKHVybC5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpID09PSBwcm90b2NvbCkge1xuICAgICAgICB1cmwgPSBwcm90b2NvbG1hcFtwcm90b2NvbF0gKyB1cmwuc2xpY2UocHJvdG9jb2wubGVuZ3RoLCB1cmwubGVuZ3RoKVxuICAgICAgICBmb3VuZFByb3RvY29sID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmRQcm90b2NvbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHByb3RvY29sIG9mIHVybDogJyArIHVybClcbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vIFRPRE86IGltcG9ydCBhbmQgZXh0ZW5kIHRoZSBjbGFzcyBvZiB0aGUgc2VydmljZS1mcmFtZXdvcmtcbi8vIHNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhcGFiaWxpdGllcztcblxuY2xhc3MgUnVudGltZUNhcGFiaWxpdGllcyB7XG5cbiAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VNYW5hZ2VyKSB7XG4gICAgaWYgKCFzdG9yYWdlTWFuYWdlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgUnVudGltZSBDYXBhYmlsaXRpZXMgbmVlZCB0aGUgc3RvcmFnZU1hbmFnZXInKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhcyBhIHByb21pc2UgUnVudGltZUNhcGFiaWxpdGllcyBqc29uIG9iamVjdCB3aXRoIGFsbCBhdmFpbGFibGUgY2FwYWJpbGl0aWVzIG9mIHRoZSBydW50aW1lLlxuICAgKiBJZiBpdCB3YXMgbm90IHlldCBwZXJzaXN0ZWQgaW4gdGhlIFN0b3JhZ2UgTWFuYWdlciBpdCBjb2xsZWN0cyBhbGwgcmVxdWlyZWQgaW5mbyBmcm9tIHRoZSBwbGF0Zm9ybSBhbmQgc2F2ZXMgaW4gdGhlIHN0b3JhZ2UgbWFuYWdlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbiAgICovXG4gIGdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLl9nZXRFbnZpcm9ubWVudCgpXSkudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdGllcyA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5fZ2V0RW52aXJvbm1lbnQoKXM6ICcsIHRoaXMuX2dldEVudmlyb25tZW50KCkpO1xuXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChjYXBhYmlsaXR5KSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihjYXBhYmlsaXRpZXMsIGNhcGFiaWxpdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2FwYWJpbGl0aWVzOiAnLCBjYXBhYmlsaXRpZXMpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLnNldCgnY2FwYWJpbGl0aWVzJywgJzEnLCBjYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgIHJlc29sdmUoY2FwYWJpbGl0aWVzKTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhcyBhIHByb21pc2UgYSBib29sZWFuIGFjY29yZGluZyB0byBhdmFpbGFibGUgY2FwYWJpbGl0aWVzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIGlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KCdjYXBhYmlsaXRpZXMnKS50aGVuKChjYXBhYmlsaXRpZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhcGFiaWxpdHkgJyArIGNhcGFiaWxpdHkgKyAnIGlzIGF2YWlsYWJsZT8gJywgY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSk7XG4gICAgICAgIGlmIChjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhcyBvY2N1cmVkIHdoaWxlIGNoZWNraW5nIGNhcGFiaWxpdHksIHJlYXNvbjonLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpdCByZWZyZXNoZXMgcHJldmlvdXNseSBjb2xsZWN0ZWQgY2FwYWJpbGl0aWVzIGFuZCB1cGRhdGVzIHRoZSBzdG9yYWdlIG1hbmFnZXJcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVE9ETzogb3JnYW5pemUgdGhlIGNvZGUgaW4gc2VwYXJhdGVkIGZpbGVzXG4gIF9nZXRFbnZpcm9ubWVudCgpIHtcbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSBtb3JlIGVmZmVjdGl2ZSBhbmQgY2hlY2sgdGhlIGVudmlyb25tZW50XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6ICEhISh3aW5kb3cgJiYgbmF2aWdhdG9yKVxuICAgICAgfTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbipcbiovXG5cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hUeXBlIH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94QXBwIGV4dGVuZHMgU2FuZGJveCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNhbmRib3ggQXBwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJy5ncmVlbik7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9IFNhbmRib3hUeXBlLk5PUk1BTDtcbiAgICBwcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1NhbmRib3hBcHAgUmVjZWl2ZWQgbWVzc2FnZSAgaXMgOlxcbicuZ3JlZW4pO1xuICAgICAgaWYgKG1zZy5oYXNPd25Qcm9wZXJ0eSgndG8nKSAmJiBtc2cudG8uc3RhcnRzV2l0aCgnY29yZTonKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB0aGlzLl9vbk1lc3NhZ2UobXNnKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIGNvbnNvbGUubG9nKCdTYW5kYm94QXBwIHBvc3RNZXNzYWdlIG1lc3NhZ2U6ICcuZ3JlZW4pO1xuICAgIHByb2Nlc3Muc2VuZChtc2cpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94QXBwLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xubGV0IGNoaWxkID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xubGV0IGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94V29ya2VyIGV4dGVuZHMgU2FuZGJveHtcbiAgY29uc3RydWN0b3Ioc2NyaXB0KSB7XG4gICAgc3VwZXIoc2NyaXB0KTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW4gU2FuZGJveCBXb3JrZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScucmVkKTtcbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndvcmtlciA9IGNoaWxkLmZvcmsoc2NyaXB0KTtcbiAgICBpZiAoISF0aGlzLndvcmtlcikge1xuICAgICAgdGhpcy53b3JrZXIub24oJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBfdGhpcy5fb25NZXNzYWdlKGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLndvcmtlci5zZW5kKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgd29ya2VyIFxcbicsIGUpO1xuICAgIH1cblxuICAgIHRoaXMud29ya2VyLm9uKCdleGl0JywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXhpdCBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcblxuICAgIHRoaXMud29ya2VyLm9uKCdlcnJvcicsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGVycm9yICBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIHRoaXMud29ya2VyLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94V29ya2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA3IiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2FuZGJveFdvcmtlciBmcm9tICcuL1NhbmRib3hXb3JrZXInO1xuaW1wb3J0IFNhbmRib3hBcHAgZnJvbSAnLi9TYW5kYm94QXBwJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vUmVxdWVzdCc7XG5pbXBvcnQgYXRvYiBmcm9tICdhdG9iJztcblxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXInO1xuaW1wb3J0IHsgUnVudGltZUNhdGFsb2d1ZSB9IGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZSc7XG5pbXBvcnQgUGVyc2lzdGVuY2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyJztcblxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnbm9kZS1sb2NhbHN0b3JhZ2UnO1xuXG5pbXBvcnQgRGV4aWUgZnJvbSAnZGV4aWUnO1xuRGV4aWUuZGVwZW5kZW5jaWVzLmluZGV4ZWREQiA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiJylcbkRleGllLmRlcGVuZGVuY2llcy5JREJLZXlSYW5nZSA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZScpXG5cbmltcG9ydCBzZXRHbG9iYWxWYXJzIGZyb20gJ2luZGV4ZWRkYnNoaW0nO1xuXG5pbXBvcnQgUnVudGltZUNhcGFiaWxpdGllcyBmcm9tICcuL1J1bnRpbWVDYXBhYmlsaXRpZXMnO1xuXG5cbmxldCBjcmVhdGVTdG9yYWdlTWFuYWdlciA9ICgpID0+IHtcbiAgbGV0IGluZGV4ZWRkQiA9IHt9O1xuICBsZXQge2luZGV4ZWREQiwgSURCS2V5UmFuZ2UgfSA9IGluZGV4ZWRkQjtcbiAgbGV0IHN0b3JhZ2VOYW1lID0gJ2NhY2hlJztcblxuICBjb25zdCBkYiA9IG5ldyBEZXhpZShzdG9yYWdlTmFtZSk7XG5cbiAgc3RvcmFnZU1hbmFnZXIgPSBuZXcgU3RvcmFnZU1hbmFnZXIoZGIsIHN0b3JhZ2VOYW1lKTtcbiAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xufTtcblxubGV0IHN0b3JhZ2VNYW5hZ2VyID0gY3JlYXRlU3RvcmFnZU1hbmFnZXIoKTtcblxubGV0IFJ1bnRpbWVGYWN0b3J5ID0gT2JqZWN0LmNyZWF0ZSh7XG4gICAgY3JlYXRlU2FuZGJveChjYXBhYmlsaXRpZXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSAgPT4ge1xuXG4gICAgICAgIGxldCBjYXBhYmlsaXR5ID0gJ25vZGUnO1xuICAgICAgICBsZXQgU2FuZGJveENhcGFiaWxpdGllcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlci5pc0F2YWlsYWJsZShjYXBhYmlsaXR5KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgIFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7IFwibm9kZVwiOiB0cnVlIH07XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBTYW5kYm94V29ya2VyKCAnLi4vZGlzdC9Db250ZXh0U2VydmljZVByb3ZpZGVyLmpzJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgIH1cbiAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgY29uc29sZS5lcnJvcignW2NyZWF0ZVNhbmRib3ggXSwgRXJyb3Igb2NjdXJlZCB3aGlsZSBjcmVhdGluZyBTYW5kYm94LCByZWFzb24gOiAnLCByZWFzb24pO1xuICAgICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlQXBwU2FuZGJveCgpIHtcbiAgICAgIHJldHVybiBuZXcgU2FuZGJveEFwcCggJy4uL2Rpc3QvQ29udGV4dEFwcC5qcycpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVIdHRwUmVxdWVzdCgpIHtcbiAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH0sXG5cbiAgICBhdG9iKGI2NCkge1xuICAgICAgcmV0dXJuIGF0b2IoYjY0KTtcbiAgICB9LFxuXG4gICAgcGVyc2lzdGVuY2VNYW5hZ2VyKCkge1xuICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoJy4vc2NyYXRjaCcpO1xuICAgICAgcmV0dXJuIG5ldyBQZXJzaXN0ZW5jZU1hbmFnZXIobG9jYWxTdG9yYWdlKTtcbiAgICB9LFxuXG4gICAgc3RvcmFnZU1hbmFnZXIoKSB7XG4gICAgICByZXR1cm4gc3RvcmFnZU1hbmFnZXI7XG4gICAgfSxcblxuICAgIGNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUoKSB7XG4gICAgICB0aGlzLmNhdGFsb2d1ZSA9IG5ldyBSdW50aW1lQ2F0YWxvZ3VlKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuY2F0YWxvZ3VlO1xuICAgIH0sXG5cbiAgICBydW50aW1lQ2FwYWJpbGl0aWVzKCkge1xuICAgICAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyID0gbmV3IFJ1bnRpbWVDYXBhYmlsaXRpZXMoc3RvcmFnZU1hbmFnZXIpO1xuICAgICAgcmV0dXJuICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXI7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUZhY3RvcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdG9iXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXRvYlwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRleGllXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGV4aWVcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImluZGV4ZWRkYnNoaW1cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sInNvdXJjZVJvb3QiOiIifQ==