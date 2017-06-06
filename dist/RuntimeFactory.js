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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDUyOWRmNGEwYzhmMDBlNzMxZjQ1PzdiYTEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiPzc0NzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiPzQzMDgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCI/YTE5OCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVxdWVzdC5qcz83M2E5Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzPzQ0NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanM/NzAyZCIsIndlYnBhY2s6Ly8vLi9zcmMvU2FuZGJveFdvcmtlci5qcz8xZTQ2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIj9lOTA1Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lRmFjdG9yeS5qcz8zNTE0Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIj9jNzVhIiwid2VicGFjazovLy9leHRlcm5hbCBcImRleGllXCI/MWQ2NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiPzJhMTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCI/ZTYwMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCI/OTZkZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiP2IwZmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIj82YTc3Iiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiP2YxYzQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiPzdjMTkiXSwibmFtZXMiOlsibWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJmZXRjaCIsInJlcXVpcmUiLCJSZXF1ZXN0IiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWtlTG9jYWxSZXF1ZXN0IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwicmVhc29uIiwieWVsbG93IiwidXJsTWFwIiwibWFwUHJvdG9jb2wiLCJncmVlbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEIiwicmVzIiwic3RhdHVzIiwidGV4dCIsImJvZHkiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicmVkIiwicG9zdE9wdGlvbnMiLCJwcm90b2NvbG1hcCIsImZvdW5kUHJvdG9jb2wiLCJwcm90b2NvbCIsInNsaWNlIiwibGVuZ3RoIiwiRXJyb3IiLCJSdW50aW1lQ2FwYWJpbGl0aWVzIiwic3RvcmFnZU1hbmFnZXIiLCJhbGwiLCJfZ2V0RW52aXJvbm1lbnQiLCJjYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXR5IiwiYXNzaWduIiwic2V0IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJnZXRSdW50aW1lQ2FwYWJpbGl0aWVzIiwibm9kZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIlNhbmRib3hBcHAiLCJ0eXBlIiwiTk9STUFMIiwib24iLCJtc2ciLCJ0byIsInN0YXJ0c1dpdGgiLCJfb25NZXNzYWdlIiwic2VuZCIsImNoaWxkIiwiY29sb3JzIiwiU2FuZGJveFdvcmtlciIsInNjcmlwdCIsIndvcmtlciIsImZvcmsiLCJlIiwiZXhpdCIsImtpbGwiLCJkZXBlbmRlbmNpZXMiLCJpbmRleGVkREIiLCJJREJLZXlSYW5nZSIsImNyZWF0ZVN0b3JhZ2VNYW5hZ2VyIiwiaW5kZXhlZGRCIiwic3RvcmFnZU5hbWUiLCJkYiIsIlJ1bnRpbWVGYWN0b3J5IiwiY3JlYXRlIiwiY3JlYXRlU2FuZGJveCIsIlNhbmRib3hDYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXRpZXNNYW5hZ2VyIiwiaXNBdmFpbGFibGUiLCJjcmVhdGVBcHBTYW5kYm94IiwiY3JlYXRlSHR0cFJlcXVlc3QiLCJyZXF1ZXN0IiwiYXRvYiIsImI2NCIsInBlcnNpc3RlbmNlTWFuYWdlciIsImxvY2FsU3RvcmFnZSIsImNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUiLCJjYXRhbG9ndWUiLCJydW50aW1lQ2FwYWJpbGl0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLHNEOzs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxJQUFNQSxVQUFVLEVBQUNDLEtBQUssS0FBTixFQUFhQyxNQUFNLE1BQW5CLEVBQWhCOztBQUVBLElBQUlDLFFBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFaOztJQUdNQyxPO0FBQ0oscUJBQWM7QUFBQTs7QUFDWixRQUFJQyxRQUFRLElBQVo7QUFDQUMsWUFBUUMsR0FBUixDQUFZLG1CQUFaO0FBQ0FDLFdBQU9DLElBQVAsQ0FBWVYsT0FBWixFQUFxQlcsT0FBckIsQ0FBNkIsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZDTixZQUFNTixRQUFRWSxNQUFSLENBQU4sSUFBeUIsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ3pDLGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1gsZ0JBQU1ZLGdCQUFOLENBQXVCTixNQUF2QixFQUErQkMsR0FBL0IsRUFBb0NDLE9BQXBDLEVBQTZDSyxJQUE3QyxDQUFrRCxVQUFTQyxNQUFULEVBQWlCO0FBQ2pFSixvQkFBUUksTUFBUjtBQUNELFdBRkQsRUFFR0MsS0FGSCxDQUVTLFVBQUNDLE1BQUQsRUFBWTtBQUNuQkwsbUJBQU9LLE1BQVA7QUFDRCxXQUpEO0FBS0QsU0FOTSxDQUFQO0FBT0QsT0FSRDtBQVNELEtBVkQ7QUFXRDs7QUFFRDs7Ozs7Ozs7cUNBSWlCVixNLEVBQVFDLEcsRUFBS0MsTyxFQUFTO0FBQ3JDLFVBQUlSLFFBQU8sSUFBWDtBQUNBQyxjQUFRQyxHQUFSLENBQVksaUJBQWlCZSxNQUE3QixFQUFxQ1gsTUFBckMsRUFBNkNDLEdBQTdDLEVBQWtEQyxPQUFsRDs7QUFFQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUMzQyxZQUFJTyxTQUFTbEIsTUFBTW1CLFdBQU4sQ0FBa0JaLEdBQWxCLENBQWI7O0FBRUFOLGdCQUFRQyxHQUFSLENBQVksaUJBQWlCZSxNQUE3QixFQUFxQ0MsTUFBckMsRUFBNEMsYUFBYUUsS0FBekQsRUFBZ0VkLE1BQWhFO0FBQ0FlLGdCQUFRQyxHQUFSLENBQVlDLDRCQUFaLEdBQTJDLEdBQTNDOztBQUVBLFlBQUdqQixXQUFXLEtBQWQsRUFBcUI7QUFDbkI7QUFDQVQsZ0JBQU1xQixNQUFOLEVBQWNMLElBQWQsQ0FBbUIsVUFBQ1csR0FBRCxFQUFTO0FBQzFCdkIsb0JBQVFDLEdBQVIsQ0FBWSxrQkFBa0JrQixLQUE5QixFQUFzQ0ksSUFBSUMsTUFBMUM7QUFDQSxtQkFBT0QsSUFBSUUsSUFBSixFQUFQO0FBQ0QsV0FIRCxFQUdHYixJQUhILENBR1EsVUFBQ2MsSUFBRCxFQUFTO0FBQ2ZqQixvQkFBUWlCLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLENBQVI7QUFDRCxXQUxELEVBS0diLEtBTEgsQ0FLUyxVQUFDYyxHQUFELEVBQVM7QUFDaEI1QixvQkFBUTZCLEtBQVIsQ0FBYyxzQ0FBc0NDLEdBQXBELEVBQTBEYixNQUExRCxFQUFrRSxZQUFZYSxHQUE5RSxFQUFtRkYsR0FBbkY7QUFDRCxXQVBEO0FBU0QsU0FYRCxNQVdPLElBQUd2QixXQUFXLE1BQWQsRUFBc0I7QUFDM0IsY0FBSTBCLGNBQWM7QUFDaEIxQixvQkFBUSxNQURRO0FBRTFCOzs7O0FBSVVxQixrQkFBTW5CLFdBQVdBLFFBQVFtQixJQUFuQixHQUEwQm5CLFFBQVFtQixJQUFsQyxHQUF5QztBQU4vQixXQUFsQjs7QUFTQTlCLGdCQUFNcUIsTUFBTixFQUFjYyxXQUFkLEVBQTJCbkIsSUFBM0IsQ0FBZ0MsVUFBQ1csR0FBRCxFQUFTO0FBQ3ZDdkIsb0JBQVFDLEdBQVIsQ0FBWSxrQkFBa0JrQixLQUE5QixFQUFzQ0ksSUFBSUMsTUFBMUM7QUFDQSxtQkFBT0QsSUFBSUUsSUFBSixFQUFQO0FBQ0QsV0FIRCxFQUdHYixJQUhILENBR1EsVUFBQ2MsSUFBRCxFQUFVO0FBQ2hCakIsb0JBQVFpQixLQUFLQyxRQUFMLENBQWMsTUFBZCxDQUFSO0FBQ0QsV0FMRCxFQUtHYixLQUxILENBS1MsVUFBQ2UsS0FBRCxFQUFXO0FBQ2xCN0Isb0JBQVE2QixLQUFSLENBQWMsc0NBQWQsRUFBcURaLE1BQXJELEVBQTZELGVBQTdELEVBQThFVixPQUE5RSxFQUF1RixVQUF2RixFQUFtR3FCLEdBQW5HO0FBQ0QsV0FQRDtBQVFEO0FBQ0YsT0FwQ00sQ0FBUDtBQXFDRDs7QUFFRjs7Ozs7O2dDQUdhdEIsRyxFQUFLO0FBQ2YsVUFBSTBCLGNBQWM7QUFDaEIsd0JBQWdCLFVBREE7QUFFaEIsd0JBQWdCLFVBRkE7QUFHaEIsZ0NBQXdCLFVBSFI7QUFJaEIsb0JBQVksVUFKSTtBQUtoQixtQkFBVztBQUxLLE9BQWxCOztBQVFBLFVBQUlDLGdCQUFnQixLQUFwQjtBQUNBLFdBQUssSUFBSUMsUUFBVCxJQUFxQkYsV0FBckIsRUFBa0M7QUFDaEMsWUFBSTFCLElBQUk2QixLQUFKLENBQVUsQ0FBVixFQUFhRCxTQUFTRSxNQUF0QixNQUFrQ0YsUUFBdEMsRUFBZ0Q7QUFDOUM1QixnQkFBTTBCLFlBQVlFLFFBQVosSUFBd0I1QixJQUFJNkIsS0FBSixDQUFVRCxTQUFTRSxNQUFuQixFQUEyQjlCLElBQUk4QixNQUEvQixDQUE5QjtBQUNBSCwwQkFBZ0IsSUFBaEI7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDQSxhQUFMLEVBQW9CO0FBQ2xCLGNBQU0sSUFBSUksS0FBSixDQUFVLDhCQUE4Qi9CLEdBQXhDLENBQU47QUFDRDtBQUNELGFBQU9BLEdBQVA7QUFDRDs7Ozs7O2tCQUdZUixPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTs7SUFFTXdDLG1CO0FBRUgsK0JBQVlDLGNBQVosRUFBNEI7QUFBQTs7QUFDM0IsUUFBSSxDQUFDQSxjQUFMLEVBQXFCLE1BQU0sSUFBSUYsS0FBSixDQUFVLGtEQUFWLENBQU47QUFDckIsU0FBS0UsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzZDQUt5QjtBQUFBOztBQUN2QixhQUFPLElBQUkvQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDRixnQkFBUWdDLEdBQVIsQ0FBWSxDQUFDLE1BQUtDLGVBQUwsRUFBRCxDQUFaLEVBQXNDN0IsSUFBdEMsQ0FBMkMsVUFBQ0MsTUFBRCxFQUFZOztBQUVyRCxjQUFJNkIsZUFBZSxFQUFuQjtBQUNBMUMsa0JBQVFDLEdBQVIsQ0FBWSwyQkFBWixFQUF5QyxNQUFLd0MsZUFBTCxFQUF6Qzs7QUFFQTVCLGlCQUFPVCxPQUFQLENBQWUsVUFBQ3VDLFVBQUQsRUFBZ0I7QUFDN0J6QyxtQkFBTzBDLE1BQVAsQ0FBY0YsWUFBZCxFQUE0QkMsVUFBNUI7QUFDRCxXQUZEOztBQUlBM0Msa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QnlDLFlBQTlCO0FBQ0EsZ0JBQUtILGNBQUwsQ0FBb0JNLEdBQXBCLENBQXdCLGNBQXhCLEVBQXdDLEdBQXhDLEVBQTZDSCxZQUE3Qzs7QUFFQWpDLGtCQUFRaUMsWUFBUjtBQUNELFNBYkQsRUFhRzVCLEtBYkgsQ0FhUyxVQUFDZSxLQUFELEVBQVc7QUFDbEJuQixpQkFBT21CLEtBQVA7QUFDRCxTQWZEO0FBZ0JELE9BakJNLENBQVA7QUFrQkQ7O0FBRUQ7Ozs7Ozs7Z0NBSVljLFUsRUFBWTtBQUFBOztBQUN0QixhQUFPLElBQUluQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLGVBQUs4QixjQUFMLENBQW9CTyxHQUFwQixDQUF3QixjQUF4QixFQUF3Q2xDLElBQXhDLENBQTZDLFVBQUM4QixZQUFELEVBQWtCO0FBQzdEMUMsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBZ0IwQyxVQUFoQixHQUE2QixpQkFBekMsRUFBNERELGFBQWFLLGNBQWIsQ0FBNEJKLFVBQTVCLEtBQTJDRCxhQUFhQyxVQUFiLENBQXZHO0FBQ0EsY0FBSUQsYUFBYUssY0FBYixDQUE0QkosVUFBNUIsS0FBMkNELGFBQWFDLFVBQWIsQ0FBL0MsRUFBeUU7QUFDdkVsQyxvQkFBUSxJQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG9CQUFRLEtBQVI7QUFDRDtBQUNGLFNBUEQsRUFPR0ssS0FQSCxDQU9TLFVBQUNlLEtBQUQsRUFBVztBQUNsQjdCLGtCQUFRNkIsS0FBUixDQUFjLHNEQUFkLEVBQXNFQSxLQUF0RTtBQUNBbkIsaUJBQU9tQixLQUFQO0FBQ0QsU0FWRDtBQVdELE9BWk0sQ0FBUDtBQWFEOztBQUVEOzs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxhQUFPLElBQUlyQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLGVBQUtzQyxzQkFBTCxHQUE4QnBDLElBQTlCLENBQW1DSCxPQUFuQyxFQUE0Q0ssS0FBNUMsQ0FBa0RKLE1BQWxEO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7O0FBRUQ7Ozs7c0NBQ2tCO0FBQ2hCO0FBQ0EsVUFBSTtBQUNGLGVBQU87QUFDTHVDLGdCQUFNLENBQUMsQ0FBQyxFQUFFQyxVQUFVQyxTQUFaO0FBREgsU0FBUDtBQUdELE9BSkQsQ0FJRSxPQUFNdEIsS0FBTixFQUFhO0FBQ2IsZUFBTztBQUNMb0IsZ0JBQU07QUFERCxTQUFQO0FBR0Q7QUFDRjs7Ozs7O2tCQUdZWCxtQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0VmOztBQUNBOzs7Ozs7Ozs7OytlQXpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNEJxQmMsVTs7O0FBQ25CLHdCQUFjO0FBQUE7O0FBQ1pwRCxZQUFRQyxHQUFSLENBQVksNkRBQTZEa0IsS0FBekU7O0FBRFk7O0FBSVosVUFBS2tDLElBQUwsR0FBWSxxQkFBWUMsTUFBeEI7QUFDQWxDLFlBQVFtQyxFQUFSLENBQVcsU0FBWCxFQUFzQixVQUFDQyxHQUFELEVBQVM7QUFDN0I7QUFDQSxVQUFJQSxJQUFJVCxjQUFKLENBQW1CLElBQW5CLEtBQTRCUyxJQUFJQyxFQUFKLENBQU9DLFVBQVAsQ0FBa0IsT0FBbEIsQ0FBaEMsRUFDRTs7QUFFRixZQUFLQyxVQUFMLENBQWdCSCxHQUFoQjtBQUNELEtBTkQ7QUFMWTtBQVliOzs7O21DQUVjQSxHLEVBQUs7QUFDbEJ4RCxjQUFRQyxHQUFSLENBQVksbUNBQW1Da0IsS0FBL0M7QUFDQUMsY0FBUXdDLElBQVIsQ0FBYUosR0FBYjtBQUNEOzs7Ozs7a0JBbEJrQkosVTs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOztBQUNBOzs7Ozs7Ozs7OytlQXZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQUlTLFFBQVEsbUJBQUFoRSxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUlpRSxTQUFTLG1CQUFBakUsQ0FBUSxDQUFSLENBQWI7O0lBRXFCa0UsYTs7O0FBQ25CLHlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUEsK0hBQ1pBLE1BRFk7O0FBRWxCaEUsWUFBUUMsR0FBUixDQUFZLG9HQUFvRzZCLEdBQWhIO0FBQ0EsV0FBS3VCLElBQUwsR0FBWSxxQkFBWUMsTUFBeEI7QUFDQSxRQUFJdkQsY0FBSjtBQUNBLFdBQUtrRSxNQUFMLEdBQWNKLE1BQU1LLElBQU4sQ0FBV0YsTUFBWCxDQUFkO0FBQ0EsUUFBSSxDQUFDLENBQUMsT0FBS0MsTUFBWCxFQUFtQjtBQUNqQixhQUFLQSxNQUFMLENBQVlWLEVBQVosQ0FBZSxTQUFmLEVBQTBCLFVBQUNZLENBQUQsRUFBTztBQUN6QnBFLGNBQU00RCxVQUFOLENBQWlCUSxDQUFqQjtBQUNQLE9BRkQ7QUFHQSxhQUFLRixNQUFMLENBQVlMLElBQVosQ0FBaUIsRUFBakI7QUFDRCxLQUxELE1BS087QUFDTCxZQUFNLElBQUl2QixLQUFKLENBQVUsNkNBQVYsRUFBeUQ4QixDQUF6RCxDQUFOO0FBQ0Q7O0FBRUQsV0FBS0YsTUFBTCxDQUFZVixFQUFaLENBQWUsTUFBZixFQUF1QixVQUFDQyxHQUFELEVBQVM7QUFDOUJ4RCxjQUFRQyxHQUFSLENBQVksMENBQVo7QUFDQSxhQUFLZ0UsTUFBTCxDQUFZRyxJQUFaO0FBQ0EsYUFBS0gsTUFBTCxDQUFZSSxJQUFaO0FBQ0QsS0FKRDs7QUFNQSxXQUFLSixNQUFMLENBQVlWLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUMvQnhELGNBQVFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGFBQUtnRSxNQUFMLENBQVlHLElBQVo7QUFDQSxhQUFLSCxNQUFMLENBQVlJLElBQVo7QUFDRCxLQUpEO0FBckJrQjtBQTBCbkI7Ozs7bUNBRWNiLEcsRUFBSztBQUNsQixXQUFLUyxNQUFMLENBQVlMLElBQVosQ0FBaUJKLEdBQWpCO0FBQ0Q7Ozs7OztrQkEvQmtCTyxhOzs7Ozs7QUMzQnJCLHVDOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7OztBQUVBOzs7Ozs7QUFMQSxnQkFBTU8sWUFBTixDQUFtQkMsU0FBbkIsR0FBK0IsbUJBQUExRSxDQUFRLEVBQVIsQ0FBL0I7QUFDQSxnQkFBTXlFLFlBQU4sQ0FBbUJFLFdBQW5CLEdBQWlDLG1CQUFBM0UsQ0FBUSxFQUFSLENBQWpDOztBQU9BLElBQUk0RSx1QkFBdUIsU0FBdkJBLG9CQUF1QixHQUFNO0FBQy9CLE1BQUlDLFlBQVksRUFBaEI7QUFEK0IsTUFFMUJILFNBRjBCLEdBRUNHLFNBRkQsQ0FFMUJILFNBRjBCO0FBQUEsTUFFZkMsV0FGZSxHQUVDRSxTQUZELENBRWZGLFdBRmU7O0FBRy9CLE1BQUlHLGNBQWMsT0FBbEI7O0FBRUEsTUFBTUMsS0FBSyxvQkFBVUQsV0FBVixDQUFYOztBQUVBcEMsb0JBQWlCLDZCQUFtQnFDLEVBQW5CLEVBQXVCRCxXQUF2QixDQUFqQjtBQUNBLFNBQU9wQyxlQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFJQSxrQkFBaUJrQyxzQkFBckI7O0FBRUEsSUFBSUksaUJBQWlCM0UsT0FBTzRFLE1BQVAsQ0FBYztBQUMvQkMsZUFEK0IseUJBQ2pCckMsWUFEaUIsRUFDSDtBQUFBOztBQUMxQixXQUFPLElBQUlsQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXNCOztBQUV2QyxVQUFJaUMsYUFBYSxNQUFqQjtBQUNBLFVBQUlxQyxzQkFBc0IsRUFBMUI7O0FBRUEsWUFBS0MsbUJBQUwsQ0FBeUJDLFdBQXpCLENBQXFDdkMsVUFBckMsRUFBaUQvQixJQUFqRCxDQUFzRCxVQUFDQyxNQUFELEVBQVk7QUFDaEUsWUFBR0EsTUFBSCxFQUFXO0FBQ1RtRSxnQ0FBc0IsRUFBRSxRQUFRLElBQVYsRUFBdEI7QUFDQXZFLGtCQUFRLDRCQUFtQixtQ0FBbkIsQ0FBUjtBQUNELFNBSEQsTUFHTyxDQUdOO0FBQ0QsT0FSRixFQVFJSyxLQVJKLENBUVUsVUFBQ0MsTUFBRCxFQUFZO0FBQ25CZixnQkFBUTZCLEtBQVIsQ0FBYyxtRUFBZCxFQUFtRmQsTUFBbkY7QUFDQUwsZUFBT0ssTUFBUDtBQUNGLE9BWEQ7QUFZRCxLQWpCTSxDQUFQO0FBa0JELEdBcEI4QjtBQXNCL0JvRSxrQkF0QitCLDhCQXNCWjtBQUNqQixXQUFPLHlCQUFnQix1QkFBaEIsQ0FBUDtBQUNELEdBeEI4QjtBQTBCL0JDLG1CQTFCK0IsK0JBMEJYO0FBQ2xCLFFBQUlDLFVBQVUsdUJBQWQ7QUFDQSxXQUFPQSxPQUFQO0FBQ0QsR0E3QjhCO0FBK0IvQkMsTUEvQitCLGdCQStCMUJDLEdBL0IwQixFQStCckI7QUFDUixXQUFPLG9CQUFLQSxHQUFMLENBQVA7QUFDRCxHQWpDOEI7QUFtQy9CQyxvQkFuQytCLGdDQW1DVjtBQUNuQixRQUFJQyxlQUFlLG1DQUFpQixXQUFqQixDQUFuQjtBQUNBLFdBQU8saUNBQXVCQSxZQUF2QixDQUFQO0FBQ0QsR0F0QzhCO0FBd0MvQmxELGdCQXhDK0IsNEJBd0NkO0FBQ2YsV0FBT0EsZUFBUDtBQUNELEdBMUM4QjtBQTRDL0JtRCx3QkE1QytCLG9DQTRDTjtBQUN2QixTQUFLQyxTQUFMLEdBQWlCLHVDQUFxQixJQUFyQixDQUFqQjtBQUNBLFdBQU8sS0FBS0EsU0FBWjtBQUNELEdBL0M4QjtBQWlEL0JDLHFCQWpEK0IsaUNBaURUO0FBQ3BCLFNBQUtYLG1CQUFMLEdBQTJCLGtDQUF3QjFDLGVBQXhCLENBQTNCO0FBQ0EsV0FBUSxLQUFLMEMsbUJBQWI7QUFDRDtBQXBEOEIsQ0FBZCxDQUFyQjs7a0JBd0RlSixjOzs7Ozs7QUNqSGYsaUM7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsc0U7Ozs7OztBQ0FBLG9FOzs7Ozs7QUNBQSxrRSIsImZpbGUiOiJSdW50aW1lRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJhdG9iXCIpLCByZXF1aXJlKFwiZGV4aWVcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKSwgcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIiksIHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlJ1bnRpbWVGYWN0b3J5XCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcIm5vZGUtZmV0Y2hcIiwgXCJhdG9iXCIsIFwiZGV4aWVcIiwgXCJmYWtlLWluZGV4ZWRkYlwiLCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiLCBcImluZGV4ZWRkYnNoaW1cIiwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSdW50aW1lRmFjdG9yeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJhdG9iXCIpLCByZXF1aXJlKFwiZGV4aWVcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKSwgcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIiksIHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUnVudGltZUZhY3RvcnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJdLCByb290W1wicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1wiYXRvYlwiXSwgcm9vdFtcImRleGllXCJdLCByb290W1wiZmFrZS1pbmRleGVkZGJcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIl0sIHJvb3RbXCJpbmRleGVkZGJzaGltXCJdLCByb290W1wibm9kZS1sb2NhbHN0b3JhZ2VcIl0sIHJvb3RbXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUyOWRmNGEwYzhmMDBlNzMxZjQ1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuY29uc3QgbWV0aG9kcyA9IHtHRVQ6ICdnZXQnLCBQT1NUOiAncG9zdCd9O1xuXG5sZXQgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cblxuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygnTm9kZSBodHRwIFJlcXVlc3QnKTtcbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIF90aGlzW21ldGhvZHNbbWV0aG9kXV0gPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgX3RoaXMubWFrZUxvY2FsUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoYW5kbGluZyByZXF1ZXN0IG1ldGhvZHNcbiAgICogQHJldHVybnMge3RleHQ8c3RyaW5nPn1cbiAgICoqL1xuICBtYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XG4gICAgbGV0IF90aGlzID10aGlzXG4gICAgY29uc29sZS5sb2coJ0hUVFBTIFJlcXVlc3Q6Jy55ZWxsb3csIG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCB1cmxNYXAgPSBfdGhpcy5tYXBQcm90b2NvbCh1cmwpO1xuXG4gICAgICBjb25zb2xlLmxvZygnTWFwcGVkIHVybCBpcyAnLnllbGxvdywgdXJsTWFwLCdtZXRob2QgaXM6Jy5ncmVlbiwgbWV0aG9kKTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCdcblxuICAgICAgaWYobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAvLyBoYW5kbGUgR0VUIG1ldGhvZFxuICAgICAgICBmZXRjaCh1cmxNYXApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuICAgICAgICB9KS50aGVuKChib2R5KT0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gR0VUIG1ldGhvZCBvZiB1cmw6Jy5yZWQgLCB1cmxNYXAsICcgcmVhc29uIDonLnJlZCwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSBpZihtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBsZXQgcG9zdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vKiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBib2R5OiBvcHRpb25zICYmIG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCh1cmxNYXAsIHBvc3RPcHRpb25zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbiAgICAgICAgfSkudGhlbigoYm9keSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIFBPU1QgbWV0aG9kIG9mIHVybDonLHVybE1hcCwgJ3dpdGggb3B0aW9uczonLCBvcHRpb25zLCAncmVhc29uIDonLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gLyoqXG4gICogQHJldHVybnMge3ZhcmlhYmxlPHN0cmluZz59XG4gICoqL1xuICBtYXBQcm90b2NvbCh1cmwpIHtcbiAgICBsZXQgcHJvdG9jb2xtYXAgPSB7XG4gICAgICAnbG9jYWxob3N0Oi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICd1bmRlZmluZWQ6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h5cGVydHktY2F0YWxvZ3VlOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwczovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cDovLyc6ICdodHRwczovLydcbiAgICB9XG5cbiAgICBsZXQgZm91bmRQcm90b2NvbCA9IGZhbHNlXG4gICAgZm9yIChsZXQgcHJvdG9jb2wgaW4gcHJvdG9jb2xtYXApIHtcbiAgICAgIGlmICh1cmwuc2xpY2UoMCwgcHJvdG9jb2wubGVuZ3RoKSA9PT0gcHJvdG9jb2wpIHtcbiAgICAgICAgdXJsID0gcHJvdG9jb2xtYXBbcHJvdG9jb2xdICsgdXJsLnNsaWNlKHByb3RvY29sLmxlbmd0aCwgdXJsLmxlbmd0aClcbiAgICAgICAgZm91bmRQcm90b2NvbCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kUHJvdG9jb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwcm90b2NvbCBvZiB1cmw6ICcgKyB1cmwpXG4gICAgfVxuICAgIHJldHVybiB1cmxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXF1ZXN0LmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vLyBUT0RPOiBpbXBvcnQgYW5kIGV4dGVuZCB0aGUgY2xhc3Mgb2YgdGhlIHNlcnZpY2UtZnJhbWV3b3JrXG4vLyBzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXBhYmlsaXRpZXM7XG5cbmNsYXNzIFJ1bnRpbWVDYXBhYmlsaXRpZXMge1xuXG4gICBjb25zdHJ1Y3RvcihzdG9yYWdlTWFuYWdlcikge1xuICAgIGlmICghc3RvcmFnZU1hbmFnZXIpIHRocm93IG5ldyBFcnJvcignVGhlIFJ1bnRpbWUgQ2FwYWJpbGl0aWVzIG5lZWQgdGhlIHN0b3JhZ2VNYW5hZ2VyJyk7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlciA9IHN0b3JhZ2VNYW5hZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYXMgYSBwcm9taXNlIFJ1bnRpbWVDYXBhYmlsaXRpZXMganNvbiBvYmplY3Qgd2l0aCBhbGwgYXZhaWxhYmxlIGNhcGFiaWxpdGllcyBvZiB0aGUgcnVudGltZS5cbiAgICogSWYgaXQgd2FzIG5vdCB5ZXQgcGVyc2lzdGVkIGluIHRoZSBTdG9yYWdlIE1hbmFnZXIgaXQgY29sbGVjdHMgYWxsIHJlcXVpcmVkIGluZm8gZnJvbSB0aGUgcGxhdGZvcm0gYW5kIHNhdmVzIGluIHRoZSBzdG9yYWdlIG1hbmFnZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4gICAqL1xuICBnZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5fZ2V0RW52aXJvbm1lbnQoKV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgIGxldCBjYXBhYmlsaXRpZXMgPSB7fTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuX2dldEVudmlyb25tZW50KClzOiAnLCB0aGlzLl9nZXRFbnZpcm9ubWVudCgpKTtcblxuICAgICAgICByZXN1bHQuZm9yRWFjaCgoY2FwYWJpbGl0eSkgPT4ge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2FwYWJpbGl0aWVzLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NhcGFiaWxpdGllczogJywgY2FwYWJpbGl0aWVzKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5zZXQoJ2NhcGFiaWxpdGllcycsICcxJywgY2FwYWJpbGl0aWVzKTtcblxuICAgICAgICByZXNvbHZlKGNhcGFiaWxpdGllcyk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYXMgYSBwcm9taXNlIGEgYm9vbGVhbiBhY2NvcmRpbmcgdG8gYXZhaWxhYmxlIGNhcGFiaWxpdGllcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBpc0F2YWlsYWJsZShjYXBhYmlsaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmdldCgnY2FwYWJpbGl0aWVzJykudGhlbigoY2FwYWJpbGl0aWVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYXBhYmlsaXR5ICcgKyBjYXBhYmlsaXR5ICsgJyBpcyBhdmFpbGFibGU/ICcsIGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pO1xuICAgICAgICBpZiAoY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSkge1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYXMgb2NjdXJlZCB3aGlsZSBjaGVja2luZyBjYXBhYmlsaXR5LCByZWFzb246JywgZXJyb3IpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogaXQgcmVmcmVzaGVzIHByZXZpb3VzbHkgY29sbGVjdGVkIGNhcGFiaWxpdGllcyBhbmQgdXBkYXRlcyB0aGUgc3RvcmFnZSBtYW5hZ2VyXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0UnVudGltZUNhcGFiaWxpdGllcygpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE86IG9yZ2FuaXplIHRoZSBjb2RlIGluIHNlcGFyYXRlZCBmaWxlc1xuICBfZ2V0RW52aXJvbm1lbnQoKSB7XG4gICAgLy8gVE9ETzogdGhpcyBzaG91bGQgYmUgbW9yZSBlZmZlY3RpdmUgYW5kIGNoZWNrIHRoZSBlbnZpcm9ubWVudFxuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiAhISEod2luZG93ICYmIG5hdmlnYXRvcilcbiAgICAgIH07XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUNhcGFiaWxpdGllcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUNhcGFiaWxpdGllcy5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qXG4qL1xuXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94VHlwZSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZGJveEFwcCBleHRlbmRzIFNhbmRib3gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTYW5kYm94IEFwcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScuZ3JlZW4pO1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgcHJvY2Vzcy5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdTYW5kYm94QXBwIFJlY2VpdmVkIG1lc3NhZ2UgIGlzIDpcXG4nLmdyZWVuKTtcbiAgICAgIGlmIChtc2cuaGFzT3duUHJvcGVydHkoJ3RvJykgJiYgbXNnLnRvLnN0YXJ0c1dpdGgoJ2NvcmU6JykpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdGhpcy5fb25NZXNzYWdlKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBwb3N0TWVzc2FnZSBtZXNzYWdlOiAnLmdyZWVuKTtcbiAgICBwcm9jZXNzLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveEFwcC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hUeXBlIH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcbmxldCBjaGlsZCA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbmxldCBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZGJveFdvcmtlciBleHRlbmRzIFNhbmRib3h7XG4gIGNvbnN0cnVjdG9yKHNjcmlwdCkge1xuICAgIHN1cGVyKHNjcmlwdCk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGluIFNhbmRib3ggV29ya2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLnJlZCk7XG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53b3JrZXIgPSBjaGlsZC5mb3JrKHNjcmlwdCk7XG4gICAgaWYgKCEhdGhpcy53b3JrZXIpIHtcbiAgICAgIHRoaXMud29ya2VyLm9uKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgX3RoaXMuX29uTWVzc2FnZShlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53b3JrZXIuc2VuZCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IHdvcmtlciBcXG4nLCBlKTtcbiAgICB9XG5cbiAgICB0aGlzLndvcmtlci5vbignZXhpdCcsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGV4aXQgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndvcmtlci5vbignZXJyb3InLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBlcnJvciAgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICB0aGlzLndvcmtlci5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveFdvcmtlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNhbmRib3hXb3JrZXIgZnJvbSAnLi9TYW5kYm94V29ya2VyJztcbmltcG9ydCBTYW5kYm94QXBwIGZyb20gJy4vU2FuZGJveEFwcCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL1JlcXVlc3QnO1xuaW1wb3J0IGF0b2IgZnJvbSAnYXRvYic7XG5cbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyJztcbmltcG9ydCB7IFJ1bnRpbWVDYXRhbG9ndWUgfSBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWUnO1xuaW1wb3J0IFBlcnNpc3RlbmNlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlcic7XG5cbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ25vZGUtbG9jYWxzdG9yYWdlJztcblxuaW1wb3J0IERleGllIGZyb20gJ2RleGllJztcbkRleGllLmRlcGVuZGVuY2llcy5pbmRleGVkREIgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYicpXG5EZXhpZS5kZXBlbmRlbmNpZXMuSURCS2V5UmFuZ2UgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2UnKVxuXG5pbXBvcnQgc2V0R2xvYmFsVmFycyBmcm9tICdpbmRleGVkZGJzaGltJztcblxuaW1wb3J0IFJ1bnRpbWVDYXBhYmlsaXRpZXMgZnJvbSAnLi9SdW50aW1lQ2FwYWJpbGl0aWVzJztcblxuXG5sZXQgY3JlYXRlU3RvcmFnZU1hbmFnZXIgPSAoKSA9PiB7XG4gIGxldCBpbmRleGVkZEIgPSB7fTtcbiAgbGV0IHtpbmRleGVkREIsIElEQktleVJhbmdlIH0gPSBpbmRleGVkZEI7XG4gIGxldCBzdG9yYWdlTmFtZSA9ICdjYWNoZSc7XG5cbiAgY29uc3QgZGIgPSBuZXcgRGV4aWUoc3RvcmFnZU5hbWUpO1xuXG4gIHN0b3JhZ2VNYW5hZ2VyID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKGRiLCBzdG9yYWdlTmFtZSk7XG4gIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbn07XG5cbmxldCBzdG9yYWdlTWFuYWdlciA9IGNyZWF0ZVN0b3JhZ2VNYW5hZ2VyKCk7XG5cbmxldCBSdW50aW1lRmFjdG9yeSA9IE9iamVjdC5jcmVhdGUoe1xuICAgIGNyZWF0ZVNhbmRib3goY2FwYWJpbGl0aWVzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0eSA9ICdub2RlJztcbiAgICAgICAgbGV0IFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIuaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBTYW5kYm94Q2FwYWJpbGl0aWVzID0geyBcIm5vZGVcIjogdHJ1ZSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgU2FuZGJveFdvcmtlciggJy4uL2Rpc3QvQ29udGV4dFNlcnZpY2VQcm92aWRlci5qcycpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgICB9XG4gICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVTYW5kYm94IF0sIEVycm9yIG9jY3VyZWQgd2hpbGUgY3JlYXRpbmcgU2FuZGJveCwgcmVhc29uIDogJywgcmVhc29uKTtcbiAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUFwcFNhbmRib3goKSB7XG4gICAgICByZXR1cm4gbmV3IFNhbmRib3hBcHAoICcuLi9kaXN0L0NvbnRleHRBcHAuanMnKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSHR0cFJlcXVlc3QoKSB7XG4gICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9LFxuXG4gICAgYXRvYihiNjQpIHtcbiAgICAgIHJldHVybiBhdG9iKGI2NCk7XG4gICAgfSxcblxuICAgIHBlcnNpc3RlbmNlTWFuYWdlcigpIHtcbiAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCcuL3NjcmF0Y2gnKTtcbiAgICAgIHJldHVybiBuZXcgUGVyc2lzdGVuY2VNYW5hZ2VyKGxvY2FsU3RvcmFnZSk7XG4gICAgfSxcblxuICAgIHN0b3JhZ2VNYW5hZ2VyKCkge1xuICAgICAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xuICAgIH0sXG5cbiAgICBjcmVhdGVSdW50aW1lQ2F0YWxvZ3VlKCkge1xuICAgICAgdGhpcy5jYXRhbG9ndWUgPSBuZXcgUnVudGltZUNhdGFsb2d1ZSh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLmNhdGFsb2d1ZTtcbiAgICB9LFxuXG4gICAgcnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlciA9IG5ldyBSdW50aW1lQ2FwYWJpbGl0aWVzKHN0b3JhZ2VNYW5hZ2VyKTtcbiAgICAgIHJldHVybiAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVGYWN0b3J5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXRvYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF0b2JcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZXhpZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRleGllXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=