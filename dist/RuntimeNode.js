// version: 0.1.0
// date: Tue May 30 2017 09:19:12 GMT+0200 (CEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeNode", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "urijs", "es6-promise"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeNode"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else
		root["RuntimeNode"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["urijs"], root["es6-promise"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_22__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
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

//  The contextApp is complmentary module to the  RuntimeNode that creates the Context where the Hyperty will be deployed
//  The contextApp handls communiocation between the Hyperty and the coreRuntime

var _sandbox = __webpack_require__(1);

var _minibus = __webpack_require__(0);

var _minibus2 = _interopRequireDefault(_minibus);

var _eval2 = __webpack_require__(2);

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @returns activate Hyperty onn the context App
**/
function createContextApp(coreRuntime) {

  process._miniBus = new _minibus2.default();
  process._miniBus._onPostMessage = function (msg) {
    // onPostMessage on the miniBus will be sent to coreRuntime
    coreRuntime.send(msg);
  };

  // EventListener on the IPC communication channel between the coreRuntime and the RuntimeNode for messages sent from the coreRuntime
  coreRuntime.on('message', function (event) {
    if (event.to.startsWith('runtime:loadedHyperty')) return;

    // onMessage received on the coreRuntime miniBus
    process._miniBus._onMessage(event);
  });

  process._registry = new _sandbox.SandboxRegistry(process._miniBus);

  process._registry._create = function (url, sourceCode, config) {
    try {
      var activate = (0, _eval3.default)(sourceCode, true);

      console.log('TYPEOF:', typeof activate === 'undefined' ? 'undefined' : _typeof(activate));

      if (typeof activate === 'function') {
        return activate(url, process._miniBus, config);
      } else if (typeof activate.default === 'function') {
        return activate.default(url, process._miniBus, config);
      }
    } catch (reason) {
      console.log('ERROR while activating the Hyperty, reason:', reason);
    }
  };
};

/**
* @returns Hyperty by descriptorURL
**/
function getHypertyBy(hypertyDescriptor) {
  console.log('Get Hyperty:', hypertyDescriptor, process._registry.components);
  return process._registry.components[hypertyDescriptor];
};

exports.default = { createContextApp: createContextApp, getHypertyBy: getHypertyBy };

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContextApp = __webpack_require__(11);

var _ContextApp2 = _interopRequireDefault(_ContextApp);

var _urijs = __webpack_require__(10);

var _urijs2 = _interopRequireDefault(_urijs);

var _colors = __webpack_require__(4);

var _colors2 = _interopRequireDefault(_colors);

var _child_process = __webpack_require__(3);

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
* distributed under the Liceruntimense is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

var Promise = __webpack_require__(22);

var coreRuntime = {};
coreRuntime = _child_process2.default.fork('../dist/core.js');

var buildMsg = function buildMsg(hypertyComponent, msg) {
  return {
    runtimeHypertyURL: msg.body.runtimeHypertyURL,
    status: msg.body.status,
    instance: hypertyComponent.instance,
    name: hypertyComponent.name
  };
};

/**
* Returns as a promise Hyperty object with all its informations.
* @returns {Promise<object>}
**/
var runtimeProxy = {
  requireHyperty: function requireHyperty(hypertyDescriptor) {
    var reuseAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return new Promise(function (resolve, reject) {
      coreRuntime.on('message', function (msg) {
        console.log('---- Message from runtime core ----'.green);
        console.log('Hyperty loaded :\n'.green);

        if (msg.to === 'runtime:loadedHyperty') {
          resolve(buildMsg(_ContextApp2.default.getHypertyBy(msg.body.runtimeHypertyURL), msg));
        }
      });
      // console.log('coreRuntime .send'.green);
      coreRuntime.send({ to: 'core:loadHyperty', body: { descriptor: hypertyDescriptor, reuseAddress: reuseAddress } });
    });
  },

  requireProtostub: function requireProtostub(domain) {
    coreRuntime.send({ to: 'core:loadStub', body: { domain: domain } });
  }
};

/**
* Returns as a promise Hyperty runtime object.
* @returns {Promise<object>}
**/
var RethinkNode = {
  install: function install() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        domain = _ref.domain,
        runtimeURL = _ref.runtimeURL,
        development = _ref.development;

    return new Promise(function (resolve, reject) {
      var runtime = _this.getRuntime(runtimeURL, domain, development);
      coreRuntime.send({ do: 'install runtime core', body: { domain: domain, runtimeURL: runtimeURL } });
      coreRuntime.on('message', function (msg) {
        if (msg.to === 'runtime:installed') {
          console.log('\n Runtime installed with success\n'.blue);
          resolve(runtimeProxy);
        }
      });

      coreRuntime.on('error', function (error) {
        console.error('runtime core install failed:', error);
        coreRuntime.kill();
        reject(error);
      });

      coreRuntime.on('exit', function () {
        console.log('runtime core exited.');
        coreRuntime.kill();
      });

      _ContextApp2.default.createContextApp(coreRuntime);
    });
  },

  getRuntime: function getRuntime(runtimeURL, domain, development) {
    if (!!development) {
      runtimeURL = runtimeURL || 'http://' + domain + '/.well-known/runtime/Runtime';
      domain = domain || new _urijs2.default(runtimeURL).host();
    } else {
      runtimeURL = runtimeURL || 'http://${domain}/.well-known/runtime/default';
      domain = domain || new _urijs2.default(runtimeURL).host().replace('catalogue.', '');
    }
    return {
      url: runtimeURL,
      domain: domain
    };
  }
};
exports.default = RethinkNode;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkY2Q3YWY4NjM2YjY5ZThlYmU0MT84YTc5KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCI/NzQ3MioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUqIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIj9hZWFlIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIj80MzA4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIj9hMTk4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmlqc1wiPzk3ZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHRBcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXM2LXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvUnVudGltZU5vZGUuanMiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dEFwcCIsImNvcmVSdW50aW1lIiwicHJvY2VzcyIsIl9taW5pQnVzIiwiX29uUG9zdE1lc3NhZ2UiLCJtc2ciLCJzZW5kIiwib24iLCJldmVudCIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJfcmVnaXN0cnkiLCJfY3JlYXRlIiwidXJsIiwic291cmNlQ29kZSIsImNvbmZpZyIsImFjdGl2YXRlIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHQiLCJyZWFzb24iLCJnZXRIeXBlcnR5QnkiLCJoeXBlcnR5RGVzY3JpcHRvciIsImNvbXBvbmVudHMiLCJQcm9taXNlIiwicmVxdWlyZSIsImZvcmsiLCJidWlsZE1zZyIsImh5cGVydHlDb21wb25lbnQiLCJydW50aW1lSHlwZXJ0eVVSTCIsImJvZHkiLCJzdGF0dXMiLCJpbnN0YW5jZSIsIm5hbWUiLCJydW50aW1lUHJveHkiLCJyZXF1aXJlSHlwZXJ0eSIsInJldXNlQWRkcmVzcyIsInJlc29sdmUiLCJyZWplY3QiLCJncmVlbiIsImRlc2NyaXB0b3IiLCJyZXF1aXJlUHJvdG9zdHViIiwiZG9tYWluIiwiUmV0aGlua05vZGUiLCJpbnN0YWxsIiwicnVudGltZVVSTCIsImRldmVsb3BtZW50IiwicnVudGltZSIsImdldFJ1bnRpbWUiLCJkbyIsImJsdWUiLCJlcnJvciIsImtpbGwiLCJob3N0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxzRDs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7Ozs7OFFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7OztBQUdBLFNBQVNBLGdCQUFULENBQTBCQyxXQUExQixFQUF1Qzs7QUFFckNDLFVBQVFDLFFBQVIsR0FBbUIsdUJBQW5CO0FBQ0FELFVBQVFDLFFB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LGtCQUFZTSxFQUFaLENBQWUsT0FBZixFQUF3QixVQUFDNkMsS0FBRCxFQUFXO0FBQ2pDbEMsZ0JBQVFrQyxLQUFSLENBQWMsOEJBQWQsRUFBOENBLEtBQTlDO0FBQ0FuRCxvQkFBYW9ELElBQWI7QUFDQWQsZUFBT2EsS0FBUDtBQUNELE9BSkQ7O0FBTUFuRCxrQkFBWU0sRUFBWixDQUFlLE1BQWYsRUFBdUIsWUFBTTtBQUMzQlcsZ0JBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBbEIsb0JBQVlvRCxJQUFaO0FBQ0QsT0FIRDs7QUFLQSwyQkFBSXJELGdCQUFKLENBQXFCQyxXQUFyQjtBQUNELEtBdEJNLENBQVA7QUF1QkQsR0F6QmU7O0FBMkJoQmdELFlBM0JnQixzQkEyQkxILFVBM0JLLEVBMkJPSCxNQTNCUCxFQTJCZUksV0EzQmYsRUEyQjRCO0FBQzFDLFFBQUksQ0FBQyxDQUFDQSxXQUFOLEVBQW1CO0FBQ2pCRCxtQkFBYUEsY0FBYyxZQUFZSCxNQUFaLEdBQXFCLDhCQUFoRDtBQUNBQSxlQUFTQSxVQUFVLG9CQUFRRyxVQUFSLEVBQW9CUSxJQUFwQixFQUFuQjtBQUNELEtBSEQsTUFHTztBQUNMUixtQkFBYUEsY0FBYyw4Q0FBM0I7QUFDQUgsZUFBU0EsVUFBVSxvQkFBUUcsVUFBUixFQUFvQlEsSUFBcEIsR0FBMkJDLE9BQTNCLENBQW1DLFlBQW5DLEVBQWlELEVBQWpELENBQW5CO0FBQ0Q7QUFDRCxXQUFPO0FBQ0x6QyxXQUFLZ0MsVUFEQTtBQUVMSCxjQUFRQTtBQUZILEtBQVA7QUFJRDtBQXZDZSxDQUFsQjtrQkF5Q2VDLFciLCJmaWxlIjoiUnVudGltZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwidXJpanNcIiksIHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlJ1bnRpbWVOb2RlXCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiZXZhbFwiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJjb2xvcnNcIiwgXCJ1cmlqc1wiLCBcImVzNi1wcm9taXNlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJ1bnRpbWVOb2RlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiZXM2LXByb21pc2VcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJ1bnRpbWVOb2RlXCJdID0gZmFjdG9yeShyb290W1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXSwgcm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIl0sIHJvb3RbXCJldmFsXCJdLCByb290W1wiY2hpbGRfcHJvY2Vzc1wiXSwgcm9vdFtcImNvbG9yc1wiXSwgcm9vdFtcInVyaWpzXCJdLCByb290W1wiZXM2LXByb21pc2VcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkY2Q3YWY4NjM2YjY5ZThlYmU0MSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZhbFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJpanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1cmlqc1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gIFRoZSBjb250ZXh0QXBwIGlzIGNvbXBsbWVudGFyeSBtb2R1bGUgdG8gdGhlICBSdW50aW1lTm9kZSB0aGF0IGNyZWF0ZXMgdGhlIENvbnRleHQgd2hlcmUgdGhlIEh5cGVydHkgd2lsbCBiZSBkZXBsb3llZFxuLy8gIFRoZSBjb250ZXh0QXBwIGhhbmRscyBjb21tdW5pb2NhdGlvbiBiZXR3ZWVuIHRoZSBIeXBlcnR5IGFuZCB0aGUgY29yZVJ1bnRpbWVcblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFJlZ2lzdHJ5IH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcbmltcG9ydCBfZXZhbCBmcm9tICdldmFsJztcblxuLyoqXG4qIEByZXR1cm5zIGFjdGl2YXRlIEh5cGVydHkgb25uIHRoZSBjb250ZXh0IEFwcFxuKiovXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0QXBwKGNvcmVSdW50aW1lKSB7XG5cbiAgcHJvY2Vzcy5fbWluaUJ1cyA9IG5ldyBNaW5pQnVzKCk7XG4gIHByb2Nlc3MuX21pbmlCdXMuX29uUG9zdE1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgICAvLyBvblBvc3RNZXNzYWdlIG9uIHRoZSBtaW5pQnVzIHdpbGwgYmUgc2VudCB0byBjb3JlUnVudGltZVxuICAgICAgY29yZVJ1bnRpbWUuc2VuZChtc2cpO1xuICAgIH07XG5cbiAgLy8gRXZlbnRMaXN0ZW5lciBvbiB0aGUgSVBDIGNvbW11bmljYXRpb24gY2hhbm5lbCBiZXR3ZWVuIHRoZSBjb3JlUnVudGltZSBhbmQgdGhlIFJ1bnRpbWVOb2RlIGZvciBtZXNzYWdlcyBzZW50IGZyb20gdGhlIGNvcmVSdW50aW1lXG4gIGNvcmVSdW50aW1lLm9uKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRvLnN0YXJ0c1dpdGgoJ3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvLyBvbk1lc3NhZ2UgcmVjZWl2ZWQgb24gdGhlIGNvcmVSdW50aW1lIG1pbmlCdXNcbiAgICBwcm9jZXNzLl9taW5pQnVzLl9vbk1lc3NhZ2UoZXZlbnQpO1xuICB9KTtcblxuICBwcm9jZXNzLl9yZWdpc3RyeSA9IG5ldyBTYW5kYm94UmVnaXN0cnkocHJvY2Vzcy5fbWluaUJ1cyk7XG5cbiAgcHJvY2Vzcy5fcmVnaXN0cnkuX2NyZWF0ZSA9ICh1cmwsIHNvdXJjZUNvZGUsIGNvbmZpZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgYWN0aXZhdGUgPSBfZXZhbChzb3VyY2VDb2RlLCB0cnVlKTtcblxuICAgICAgY29uc29sZS5sb2coJ1RZUEVPRjonLCB0eXBlb2YoYWN0aXZhdGUpKTtcblxuICAgICAgaWYgKHR5cGVvZihhY3RpdmF0ZSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlKHVybCwgcHJvY2Vzcy5fbWluaUJ1cywgY29uZmlnKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFjdGl2YXRlLmRlZmF1bHQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmF0ZS5kZWZhdWx0KHVybCwgcHJvY2Vzcy5fbWluaUJ1cywgY29uZmlnKTtcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SIHdoaWxlIGFjdGl2YXRpbmcgdGhlIEh5cGVydHksIHJlYXNvbjonLCByZWFzb24pO1xuICAgIH1cbiAgfTtcbn07XG5cblxuLyoqXG4qIEByZXR1cm5zIEh5cGVydHkgYnkgZGVzY3JpcHRvclVSTFxuKiovXG5mdW5jdGlvbiBnZXRIeXBlcnR5QnkoaHlwZXJ0eURlc2NyaXB0b3IpIHtcbiAgY29uc29sZS5sb2coJ0dldCBIeXBlcnR5OicsIGh5cGVydHlEZXNjcmlwdG9yLCBwcm9jZXNzLl9yZWdpc3RyeS5jb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb2Nlc3MuX3JlZ2lzdHJ5LmNvbXBvbmVudHNbaHlwZXJ0eURlc2NyaXB0b3JdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVDb250ZXh0QXBwLCBnZXRIeXBlcnR5QnkgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0QXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXM2LXByb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJlczYtcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZXJ1bnRpbWVuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5sZXQgUHJvbWlzZSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJyk7XG5cblxuaW1wb3J0IGFwcCBmcm9tICcuL0NvbnRleHRBcHAnO1xuaW1wb3J0IFVSSSBmcm9tICd1cmlqcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJ2NvbG9ycyc7XG5pbXBvcnQgY2hpbGQgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cblxuXG5sZXQgY29yZVJ1bnRpbWUgPSB7fTtcbmNvcmVSdW50aW1lICA9IGNoaWxkLmZvcmsoICcuLi9kaXN0L2NvcmUuanMnKTsgXG5cbmxldCBidWlsZE1zZyA9IChoeXBlcnR5Q29tcG9uZW50LCBtc2cpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBydW50aW1lSHlwZXJ0eVVSTDogbXNnLmJvZHkucnVudGltZUh5cGVydHlVUkwsXG4gICAgc3RhdHVzOiBtc2cuYm9keS5zdGF0dXMsXG4gICAgaW5zdGFuY2U6IGh5cGVydHlDb21wb25lbnQuaW5zdGFuY2UsXG4gICAgbmFtZTogaHlwZXJ0eUNvbXBvbmVudC5uYW1lXG4gIH07XG59O1xuXG4vKipcbiogUmV0dXJucyBhcyBhIHByb21pc2UgSHlwZXJ0eSBvYmplY3Qgd2l0aCBhbGwgaXRzIGluZm9ybWF0aW9ucy5cbiogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbioqL1xubGV0IHJ1bnRpbWVQcm94eSA9IHtcbiAgcmVxdWlyZUh5cGVydHk6IChoeXBlcnR5RGVzY3JpcHRvciwgcmV1c2VBZGRyZXNzID0gZmFsc2UpPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgIGNvcmVSdW50aW1lLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLSBNZXNzYWdlIGZyb20gcnVudGltZSBjb3JlIC0tLS0nLmdyZWVuKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0h5cGVydHkgbG9hZGVkIDpcXG4nLmdyZWVuKTtcblxuICAgICAgICBpZiAobXNnLnRvID09PSAncnVudGltZTpsb2FkZWRIeXBlcnR5Jykge1xuICAgICAgICAgIHJlc29sdmUoYnVpbGRNc2coYXBwLmdldEh5cGVydHlCeShtc2cuYm9keS5ydW50aW1lSHlwZXJ0eVVSTCksIG1zZykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3JlUnVudGltZSAuc2VuZCcuZ3JlZW4pO1xuICAgICAgY29yZVJ1bnRpbWUuc2VuZCh7dG86J2NvcmU6bG9hZEh5cGVydHknLCBib2R5OntkZXNjcmlwdG9yOiBoeXBlcnR5RGVzY3JpcHRvciwgcmV1c2VBZGRyZXNzfX0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlcXVpcmVQcm90b3N0dWI6IChkb21haW4pID0+IHtcbiAgICBjb3JlUnVudGltZS5zZW5kKHt0bzonY29yZTpsb2FkU3R1YicsIGJvZHk6e2RvbWFpbjogZG9tYWlufX0pO1xuICB9XG59O1xuXG4vKipcbiogUmV0dXJucyBhcyBhIHByb21pc2UgSHlwZXJ0eSBydW50aW1lIG9iamVjdC5cbiogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbioqL1xubGV0IFJldGhpbmtOb2RlID0ge1xuICBpbnN0YWxsOiBmdW5jdGlvbih7ZG9tYWluLCBydW50aW1lVVJMLCBkZXZlbG9wbWVudH09e30pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHJ1bnRpbWUgPSB0aGlzLmdldFJ1bnRpbWUocnVudGltZVVSTCwgZG9tYWluLCBkZXZlbG9wbWVudCk7XG4gICAgICBjb3JlUnVudGltZS5zZW5kKHtkbzonaW5zdGFsbCBydW50aW1lIGNvcmUnLCBib2R5OiB7IGRvbWFpbjogZG9tYWluLCBydW50aW1lVVJMOiBydW50aW1lVVJMfX0pOyAgXG4gICAgICBjb3JlUnVudGltZS5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgICAgaWYgKG1zZy50byA9PT0gJ3J1bnRpbWU6aW5zdGFsbGVkJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4gUnVudGltZSBpbnN0YWxsZWQgd2l0aCBzdWNjZXNzXFxuJy5ibHVlKTtcbiAgICAgICAgICByZXNvbHZlKHJ1bnRpbWVQcm94eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb3JlUnVudGltZS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcigncnVudGltZSBjb3JlIGluc3RhbGwgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgY29yZVJ1bnRpbWUgLmtpbGwoKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb3JlUnVudGltZS5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3J1bnRpbWUgY29yZSBleGl0ZWQuJyk7XG4gICAgICAgIGNvcmVSdW50aW1lLmtpbGwoKTtcbiAgICAgIH0pO1xuXG4gICAgICBhcHAuY3JlYXRlQ29udGV4dEFwcChjb3JlUnVudGltZSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0UnVudGltZShydW50aW1lVVJMLCBkb21haW4sIGRldmVsb3BtZW50KSB7XG4gICAgaWYgKCEhZGV2ZWxvcG1lbnQpIHtcbiAgICAgIHJ1bnRpbWVVUkwgPSBydW50aW1lVVJMIHx8ICdodHRwOi8vJyArIGRvbWFpbiArICcvLndlbGwta25vd24vcnVudGltZS9SdW50aW1lJztcbiAgICAgIGRvbWFpbiA9IGRvbWFpbiB8fCBuZXcgVVJJKHJ1bnRpbWVVUkwpLmhvc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcnVudGltZVVSTCA9IHJ1bnRpbWVVUkwgfHwgJ2h0dHA6Ly8ke2RvbWFpbn0vLndlbGwta25vd24vcnVudGltZS9kZWZhdWx0JztcbiAgICAgIGRvbWFpbiA9IGRvbWFpbiB8fCBuZXcgVVJJKHJ1bnRpbWVVUkwpLmhvc3QoKS5yZXBsYWNlKCdjYXRhbG9ndWUuJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiBydW50aW1lVVJMLFxuICAgICAgZG9tYWluOiBkb21haW5cbiAgICB9O1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUmV0aGlua05vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZU5vZGUuanMiXSwic291cmNlUm9vdCI6IiJ9