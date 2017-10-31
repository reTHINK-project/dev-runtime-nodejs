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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeNode", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "urijs", "es6-promise"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeNode"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else
		root["RuntimeNode"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["urijs"], root["es6-promise"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_23__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 24 */,
/* 25 */
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

var Promise = __webpack_require__(23);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4YTMzNTE5NDg4NjA0ZTczMjcxNj8yMjE5KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCI/NzQ3MioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUqIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIj9hZWFlIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIj80MzA4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIj9hMTk4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmlqc1wiPzk3ZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHRBcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXM2LXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvUnVudGltZU5vZGUuanMiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dEFwcCIsImNvcmVSdW50aW1lIiwicHJvY2VzcyIsIl9taW5pQnVzIiwiX29uUG9zdE1lc3NhZ2UiLCJtc2ciLCJzZW5kIiwib24iLCJldmVudCIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJfcmVnaXN0cnkiLCJfY3JlYXRlIiwidXJsIiwic291cmNlQ29kZSIsImNvbmZpZyIsImFjdGl2YXRlIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHQiLCJyZWFzb24iLCJnZXRIeXBlcnR5QnkiLCJoeXBlcnR5RGVzY3JpcHRvciIsImNvbXBvbmVudHMiLCJQcm9taXNlIiwicmVxdWlyZSIsImZvcmsiLCJidWlsZE1zZyIsImh5cGVydHlDb21wb25lbnQiLCJydW50aW1lSHlwZXJ0eVVSTCIsImJvZHkiLCJzdGF0dXMiLCJpbnN0YW5jZSIsIm5hbWUiLCJydW50aW1lUHJveHkiLCJyZXF1aXJlSHlwZXJ0eSIsInJldXNlQWRkcmVzcyIsInJlc29sdmUiLCJyZWplY3QiLCJncmVlbiIsImRlc2NyaXB0b3IiLCJyZXF1aXJlUHJvdG9zdHViIiwiZG9tYWluIiwiUmV0aGlua05vZGUiLCJpbnN0YWxsIiwicnVudGltZVVSTCIsImRldmVsb3BtZW50IiwicnVudGltZSIsImdldFJ1bnRpbWUiLCJkbyIsImJsdWUiLCJlcnJvciIsImtpbGwiLCJob3N0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxzRDs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7Ozs7OFFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7OztBQUdBLFNBQVNBLGdCQUFULENBQTBCQyxXQUExQixFQUF1Qzs7QUFFckNDLFVBQVFDLFFBQVIsR0FBbUIsdUJBQW5CO0FBQ0FELFVBQVFDLFFB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QyxrQkFBWU0sRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBQzZDLEtBQUQsRUFBVztBQUNqQ2xDLGdCQUFRa0MsS0FBUixDQUFjLDhCQUFkLEVBQThDQSxLQUE5QztBQUNBbkQsb0JBQWFvRCxJQUFiO0FBQ0FkLGVBQU9hLEtBQVA7QUFDRCxPQUpEOztBQU1BbkQsa0JBQVlNLEVBQVosQ0FBZSxNQUFmLEVBQXVCLFlBQU07QUFDM0JXLGdCQUFRQyxHQUFSLENBQVksc0JBQVo7QUFDQWxCLG9CQUFZb0QsSUFBWjtBQUNELE9BSEQ7O0FBS0EsMkJBQUlyRCxnQkFBSixDQUFxQkMsV0FBckI7QUFDRCxLQXRCTSxDQUFQO0FBdUJELEdBekJlOztBQTJCaEJnRCxZQTNCZ0Isc0JBMkJMSCxVQTNCSyxFQTJCT0gsTUEzQlAsRUEyQmVJLFdBM0JmLEVBMkI0QjtBQUMxQyxRQUFJLENBQUMsQ0FBQ0EsV0FBTixFQUFtQjtBQUNqQkQsbUJBQWFBLGNBQWMsWUFBWUgsTUFBWixHQUFxQiw4QkFBaEQ7QUFDQUEsZUFBU0EsVUFBVSxvQkFBUUcsVUFBUixFQUFvQlEsSUFBcEIsRUFBbkI7QUFDRCxLQUhELE1BR087QUFDTFIsbUJBQWFBLGNBQWMsOENBQTNCO0FBQ0FILGVBQVNBLFVBQVUsb0JBQVFHLFVBQVIsRUFBb0JRLElBQXBCLEdBQTJCQyxPQUEzQixDQUFtQyxZQUFuQyxFQUFpRCxFQUFqRCxDQUFuQjtBQUNEO0FBQ0QsV0FBTztBQUNMekMsV0FBS2dDLFVBREE7QUFFTEgsY0FBUUE7QUFGSCxLQUFQO0FBSUQ7QUF2Q2UsQ0FBbEI7a0JBeUNlQyxXIiwiZmlsZSI6IlJ1bnRpbWVOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiZXM2LXByb21pc2VcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJSdW50aW1lTm9kZVwiLCBbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiLCBcImV2YWxcIiwgXCJjaGlsZF9wcm9jZXNzXCIsIFwiY29sb3JzXCIsIFwidXJpanNcIiwgXCJlczYtcHJvbWlzZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSdW50aW1lTm9kZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImVzNi1wcm9taXNlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSdW50aW1lTm9kZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJ1cmlqc1wiXSwgcm9vdFtcImVzNi1wcm9taXNlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIzX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGEzMzUxOTQ4ODYwNGU3MzI3MTYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2YWxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbG9yc1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVyaWpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXJpanNcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vICBUaGUgY29udGV4dEFwcCBpcyBjb21wbG1lbnRhcnkgbW9kdWxlIHRvIHRoZSAgUnVudGltZU5vZGUgdGhhdCBjcmVhdGVzIHRoZSBDb250ZXh0IHdoZXJlIHRoZSBIeXBlcnR5IHdpbGwgYmUgZGVwbG95ZWRcbi8vICBUaGUgY29udGV4dEFwcCBoYW5kbHMgY29tbXVuaW9jYXRpb24gYmV0d2VlbiB0aGUgSHlwZXJ0eSBhbmQgdGhlIGNvcmVSdW50aW1lXG5cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hSZWdpc3RyeSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5pbXBvcnQgX2V2YWwgZnJvbSAnZXZhbCc7XG5cbi8qKlxuKiBAcmV0dXJucyBhY3RpdmF0ZSBIeXBlcnR5IG9ubiB0aGUgY29udGV4dCBBcHBcbioqL1xuZnVuY3Rpb24gY3JlYXRlQ29udGV4dEFwcChjb3JlUnVudGltZSkge1xuXG4gIHByb2Nlc3MuX21pbmlCdXMgPSBuZXcgTWluaUJ1cygpO1xuICBwcm9jZXNzLl9taW5pQnVzLl9vblBvc3RNZXNzYWdlID0gKG1zZykgPT4ge1xuICAgICAgLy8gb25Qb3N0TWVzc2FnZSBvbiB0aGUgbWluaUJ1cyB3aWxsIGJlIHNlbnQgdG8gY29yZVJ1bnRpbWVcbiAgICAgIGNvcmVSdW50aW1lLnNlbmQobXNnKTtcbiAgICB9O1xuXG4gIC8vIEV2ZW50TGlzdGVuZXIgb24gdGhlIElQQyBjb21tdW5pY2F0aW9uIGNoYW5uZWwgYmV0d2VlbiB0aGUgY29yZVJ1bnRpbWUgYW5kIHRoZSBSdW50aW1lTm9kZSBmb3IgbWVzc2FnZXMgc2VudCBmcm9tIHRoZSBjb3JlUnVudGltZVxuICBjb3JlUnVudGltZS5vbignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50by5zdGFydHNXaXRoKCdydW50aW1lOmxvYWRlZEh5cGVydHknKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy8gb25NZXNzYWdlIHJlY2VpdmVkIG9uIHRoZSBjb3JlUnVudGltZSBtaW5pQnVzXG4gICAgcHJvY2Vzcy5fbWluaUJ1cy5fb25NZXNzYWdlKGV2ZW50KTtcbiAgfSk7XG5cbiAgcHJvY2Vzcy5fcmVnaXN0cnkgPSBuZXcgU2FuZGJveFJlZ2lzdHJ5KHByb2Nlc3MuX21pbmlCdXMpO1xuXG4gIHByb2Nlc3MuX3JlZ2lzdHJ5Ll9jcmVhdGUgPSAodXJsLCBzb3VyY2VDb2RlLCBjb25maWcpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGFjdGl2YXRlID0gX2V2YWwoc291cmNlQ29kZSwgdHJ1ZSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdUWVBFT0Y6JywgdHlwZW9mKGFjdGl2YXRlKSk7XG5cbiAgICAgIGlmICh0eXBlb2YoYWN0aXZhdGUpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmF0ZSh1cmwsIHByb2Nlc3MuX21pbmlCdXMsIGNvbmZpZyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZihhY3RpdmF0ZS5kZWZhdWx0KSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gYWN0aXZhdGUuZGVmYXVsdCh1cmwsIHByb2Nlc3MuX21pbmlCdXMsIGNvbmZpZyk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiB3aGlsZSBhY3RpdmF0aW5nIHRoZSBIeXBlcnR5LCByZWFzb246JywgcmVhc29uKTtcbiAgICB9XG4gIH07XG59O1xuXG5cbi8qKlxuKiBAcmV0dXJucyBIeXBlcnR5IGJ5IGRlc2NyaXB0b3JVUkxcbioqL1xuZnVuY3Rpb24gZ2V0SHlwZXJ0eUJ5KGh5cGVydHlEZXNjcmlwdG9yKSB7XG4gIGNvbnNvbGUubG9nKCdHZXQgSHlwZXJ0eTonLCBoeXBlcnR5RGVzY3JpcHRvciwgcHJvY2Vzcy5fcmVnaXN0cnkuY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm9jZXNzLl9yZWdpc3RyeS5jb21wb25lbnRzW2h5cGVydHlEZXNjcmlwdG9yXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlQ29udGV4dEFwcCwgZ2V0SHlwZXJ0eUJ5IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dEFwcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVzNi1wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXM2LXByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2VydW50aW1lbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxubGV0IFByb21pc2UgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpO1xuXG5cbmltcG9ydCBhcHAgZnJvbSAnLi9Db250ZXh0QXBwJztcbmltcG9ydCBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICdjb2xvcnMnO1xuaW1wb3J0IGNoaWxkIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5cblxubGV0IGNvcmVSdW50aW1lID0ge307XG5jb3JlUnVudGltZSAgPSBjaGlsZC5mb3JrKCAnLi4vZGlzdC9jb3JlLmpzJyk7IFxuXG5sZXQgYnVpbGRNc2cgPSAoaHlwZXJ0eUNvbXBvbmVudCwgbXNnKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcnVudGltZUh5cGVydHlVUkw6IG1zZy5ib2R5LnJ1bnRpbWVIeXBlcnR5VVJMLFxuICAgIHN0YXR1czogbXNnLmJvZHkuc3RhdHVzLFxuICAgIGluc3RhbmNlOiBoeXBlcnR5Q29tcG9uZW50Lmluc3RhbmNlLFxuICAgIG5hbWU6IGh5cGVydHlDb21wb25lbnQubmFtZVxuICB9O1xufTtcblxuLyoqXG4qIFJldHVybnMgYXMgYSBwcm9taXNlIEh5cGVydHkgb2JqZWN0IHdpdGggYWxsIGl0cyBpbmZvcm1hdGlvbnMuXG4qIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4qKi9cbmxldCBydW50aW1lUHJveHkgPSB7XG4gIHJlcXVpcmVIeXBlcnR5OiAoaHlwZXJ0eURlc2NyaXB0b3IsIHJldXNlQWRkcmVzcyA9IGZhbHNlKT0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICBjb3JlUnVudGltZS5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0gTWVzc2FnZSBmcm9tIHJ1bnRpbWUgY29yZSAtLS0tJy5ncmVlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIeXBlcnR5IGxvYWRlZCA6XFxuJy5ncmVlbik7XG5cbiAgICAgICAgaWYgKG1zZy50byA9PT0gJ3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScpIHtcbiAgICAgICAgICByZXNvbHZlKGJ1aWxkTXNnKGFwcC5nZXRIeXBlcnR5QnkobXNnLmJvZHkucnVudGltZUh5cGVydHlVUkwpLCBtc2cpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY29yZVJ1bnRpbWUgLnNlbmQnLmdyZWVuKTtcbiAgICAgIGNvcmVSdW50aW1lLnNlbmQoe3RvOidjb3JlOmxvYWRIeXBlcnR5JywgYm9keTp7ZGVzY3JpcHRvcjogaHlwZXJ0eURlc2NyaXB0b3IsIHJldXNlQWRkcmVzc319KTtcbiAgICB9KTtcbiAgfSxcblxuICByZXF1aXJlUHJvdG9zdHViOiAoZG9tYWluKSA9PiB7XG4gICAgY29yZVJ1bnRpbWUuc2VuZCh7dG86J2NvcmU6bG9hZFN0dWInLCBib2R5Ontkb21haW46IGRvbWFpbn19KTtcbiAgfVxufTtcblxuLyoqXG4qIFJldHVybnMgYXMgYSBwcm9taXNlIEh5cGVydHkgcnVudGltZSBvYmplY3QuXG4qIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4qKi9cbmxldCBSZXRoaW5rTm9kZSA9IHtcbiAgaW5zdGFsbDogZnVuY3Rpb24oe2RvbWFpbiwgcnVudGltZVVSTCwgZGV2ZWxvcG1lbnR9PXt9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBydW50aW1lID0gdGhpcy5nZXRSdW50aW1lKHJ1bnRpbWVVUkwsIGRvbWFpbiwgZGV2ZWxvcG1lbnQpO1xuICAgICAgY29yZVJ1bnRpbWUuc2VuZCh7ZG86J2luc3RhbGwgcnVudGltZSBjb3JlJywgYm9keTogeyBkb21haW46IGRvbWFpbiwgcnVudGltZVVSTDogcnVudGltZVVSTH19KTsgIFxuICAgICAgY29yZVJ1bnRpbWUub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAgIGlmIChtc2cudG8gPT09ICdydW50aW1lOmluc3RhbGxlZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXFxuIFJ1bnRpbWUgaW5zdGFsbGVkIHdpdGggc3VjY2Vzc1xcbicuYmx1ZSk7XG4gICAgICAgICAgcmVzb2x2ZShydW50aW1lUHJveHkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29yZVJ1bnRpbWUub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWUgY29yZSBpbnN0YWxsIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgIGNvcmVSdW50aW1lIC5raWxsKCk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgY29yZVJ1bnRpbWUub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lIGNvcmUgZXhpdGVkLicpO1xuICAgICAgICBjb3JlUnVudGltZS5raWxsKCk7XG4gICAgICB9KTtcblxuICAgICAgYXBwLmNyZWF0ZUNvbnRleHRBcHAoY29yZVJ1bnRpbWUpO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldFJ1bnRpbWUocnVudGltZVVSTCwgZG9tYWluLCBkZXZlbG9wbWVudCkge1xuICAgIGlmICghIWRldmVsb3BtZW50KSB7XG4gICAgICBydW50aW1lVVJMID0gcnVudGltZVVSTCB8fCAnaHR0cDovLycgKyBkb21haW4gKyAnLy53ZWxsLWtub3duL3J1bnRpbWUvUnVudGltZSc7XG4gICAgICBkb21haW4gPSBkb21haW4gfHwgbmV3IFVSSShydW50aW1lVVJMKS5ob3N0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bnRpbWVVUkwgPSBydW50aW1lVVJMIHx8ICdodHRwOi8vJHtkb21haW59Ly53ZWxsLWtub3duL3J1bnRpbWUvZGVmYXVsdCc7XG4gICAgICBkb21haW4gPSBkb21haW4gfHwgbmV3IFVSSShydW50aW1lVVJMKS5ob3N0KCkucmVwbGFjZSgnY2F0YWxvZ3VlLicsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogcnVudGltZVVSTCxcbiAgICAgIGRvbWFpbjogZG9tYWluXG4gICAgfTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFJldGhpbmtOb2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVOb2RlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==