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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("path"), require("urijs"), require("es6-promise"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeNode", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "path", "urijs", "es6-promise"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeNode"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("path"), require("urijs"), require("es6-promise"));
	else
		root["RuntimeNode"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["path"], root["urijs"], root["es6-promise"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_23__) {
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
/* 12 */
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

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _ContextApp = __webpack_require__(12);

var _ContextApp2 = _interopRequireDefault(_ContextApp);

var _urijs = __webpack_require__(11);

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
coreRuntime = _child_process2.default.fork(_path2.default.join('dist', 'core.js'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZTdhNTUyOTBhYmJjYmI0NDg1ZT84MjdiKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCI/NzQ3MioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUqIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIj9hZWFlIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIj80MzA4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIj9hMTk4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJpanNcIj85N2UwIiwid2VicGFjazovLy8uL3NyYy9Db250ZXh0QXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVzNi1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVOb2RlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHRBcHAiLCJjb3JlUnVudGltZSIsInByb2Nlc3MiLCJfbWluaUJ1cyIsIl9vblBvc3RNZXNzYWdlIiwibXNnIiwic2VuZCIsIm9uIiwiZXZlbnQiLCJ0byIsInN0YXJ0c1dpdGgiLCJfb25NZXNzYWdlIiwiX3JlZ2lzdHJ5IiwiX2NyZWF0ZSIsInVybCIsInNvdXJjZUNvZGUiLCJjb25maWciLCJhY3RpdmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwicmVhc29uIiwiZ2V0SHlwZXJ0eUJ5IiwiaHlwZXJ0eURlc2NyaXB0b3IiLCJjb21wb25lbnRzIiwiUHJvbWlzZSIsInJlcXVpcmUiLCJmb3JrIiwiam9pbiIsImJ1aWxkTXNnIiwiaHlwZXJ0eUNvbXBvbmVudCIsInJ1bnRpbWVIeXBlcnR5VVJMIiwiYm9keSIsInN0YXR1cyIsImluc3RhbmNlIiwibmFtZSIsInJ1bnRpbWVQcm94eSIsInJlcXVpcmVIeXBlcnR5IiwicmV1c2VBZGRyZXNzIiwicmVzb2x2ZSIsInJlamVjdCIsImdyZWVuIiwiZGVzY3JpcHRvciIsInJlcXVpcmVQcm90b3N0dWIiLCJkb21haW4iLCJSZXRoaW5rTm9kZSIsImluc3RhbGwiLCJydW50aW1lVVJMIiwiZGV2ZWxvcG1lbnQiLCJydW50aW1lIiwiZ2V0UnVudGltZSIsImRvIiwiYmx1ZSIsImVycm9yIiwia2lsbCIsImhvc3QiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLHNEOzs7Ozs7QUNBQSxzRDs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7Ozs7OFFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7OztBQUdBLFNBQVNBLGdCQUFULENBQTBCQyxX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LEtBQVcsbUJBQWYsRUFBb0M7QUFDbENTLGtCQUFRQyxHQUFSLENBQVksc0NBQXNDaUMsSUFBbEQ7QUFDQWIsa0JBQVFILFlBQVI7QUFDRDtBQUNGLE9BTEQ7O0FBT0FuQyxrQkFBWU0sRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBQzhDLEtBQUQsRUFBVztBQUNqQ25DLGdCQUFRbUMsS0FBUixDQUFjLDhCQUFkLEVBQThDQSxLQUE5QztBQUNBcEQsb0JBQWFxRCxJQUFiO0FBQ0FkLGVBQU9hLEtBQVA7QUFDRCxPQUpEOztBQU1BcEQsa0JBQVlNLEVBQVosQ0FBZSxNQUFmLEVBQXVCLFlBQU07QUFDM0JXLGdCQUFRQyxHQUFSLENBQVksc0JBQVo7QUFDQWxCLG9CQUFZcUQsSUFBWjtBQUNELE9BSEQ7O0FBS0EsMkJBQUl0RCxnQkFBSixDQUFxQkMsV0FBckI7QUFDRCxLQXRCTSxDQUFQO0FBdUJELEdBekJlOztBQTJCaEJpRCxZQTNCZ0Isc0JBMkJMSCxVQTNCSyxFQTJCT0gsTUEzQlAsRUEyQmVJLFdBM0JmLEVBMkI0QjtBQUMxQyxRQUFJLENBQUMsQ0FBQ0EsV0FBTixFQUFtQjtBQUNqQkQsbUJBQWFBLGNBQWMsWUFBWUgsTUFBWixHQUFxQiw4QkFBaEQ7QUFDQUEsZUFBU0EsVUFBVSxvQkFBUUcsVUFBUixFQUFvQlEsSUFBcEIsRUFBbkI7QUFDRCxLQUhELE1BR087QUFDTFIsbUJBQWFBLGNBQWMsOENBQTNCO0FBQ0FILGVBQVNBLFVBQVUsb0JBQVFHLFVBQVIsRUFBb0JRLElBQXBCLEdBQTJCQyxPQUEzQixDQUFtQyxZQUFuQyxFQUFpRCxFQUFqRCxDQUFuQjtBQUNEO0FBQ0QsV0FBTztBQUNMMUMsV0FBS2lDLFVBREE7QUFFTEgsY0FBUUE7QUFGSCxLQUFQO0FBSUQ7QUF2Q2UsQ0FBbEI7a0JBeUNlQyxXIiwiZmlsZSI6IlJ1bnRpbWVOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImVzNi1wcm9taXNlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUnVudGltZU5vZGVcIiwgW1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiLCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiwgXCJldmFsXCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcInBhdGhcIiwgXCJ1cmlqc1wiLCBcImVzNi1wcm9taXNlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJ1bnRpbWVOb2RlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImVzNi1wcm9taXNlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSdW50aW1lTm9kZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJwYXRoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJlczYtcHJvbWlzZVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZTdhNTUyOTBhYmJjYmI0NDg1ZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZhbFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJpanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1cmlqc1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gIFRoZSBjb250ZXh0QXBwIGlzIGNvbXBsbWVudGFyeSBtb2R1bGUgdG8gdGhlICBSdW50aW1lTm9kZSB0aGF0IGNyZWF0ZXMgdGhlIENvbnRleHQgd2hlcmUgdGhlIEh5cGVydHkgd2lsbCBiZSBkZXBsb3llZFxuLy8gIFRoZSBjb250ZXh0QXBwIGhhbmRscyBjb21tdW5pb2NhdGlvbiBiZXR3ZWVuIHRoZSBIeXBlcnR5IGFuZCB0aGUgY29yZVJ1bnRpbWVcblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFJlZ2lzdHJ5IH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcbmltcG9ydCBfZXZhbCBmcm9tICdldmFsJztcblxuLyoqXG4qIEByZXR1cm5zIGFjdGl2YXRlIEh5cGVydHkgb25uIHRoZSBjb250ZXh0IEFwcFxuKiovXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0QXBwKGNvcmVSdW50aW1lKSB7XG5cbiAgcHJvY2Vzcy5fbWluaUJ1cyA9IG5ldyBNaW5pQnVzKCk7XG4gIHByb2Nlc3MuX21pbmlCdXMuX29uUG9zdE1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgICAvLyBvblBvc3RNZXNzYWdlIG9uIHRoZSBtaW5pQnVzIHdpbGwgYmUgc2VudCB0byBjb3JlUnVudGltZVxuICAgICAgY29yZVJ1bnRpbWUuc2VuZChtc2cpO1xuICAgIH07XG5cbiAgLy8gRXZlbnRMaXN0ZW5lciBvbiB0aGUgSVBDIGNvbW11bmljYXRpb24gY2hhbm5lbCBiZXR3ZWVuIHRoZSBjb3JlUnVudGltZSBhbmQgdGhlIFJ1bnRpbWVOb2RlIGZvciBtZXNzYWdlcyBzZW50IGZyb20gdGhlIGNvcmVSdW50aW1lXG4gIGNvcmVSdW50aW1lLm9uKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRvLnN0YXJ0c1dpdGgoJ3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvLyBvbk1lc3NhZ2UgcmVjZWl2ZWQgb24gdGhlIGNvcmVSdW50aW1lIG1pbmlCdXNcbiAgICBwcm9jZXNzLl9taW5pQnVzLl9vbk1lc3NhZ2UoZXZlbnQpO1xuICB9KTtcblxuICBwcm9jZXNzLl9yZWdpc3RyeSA9IG5ldyBTYW5kYm94UmVnaXN0cnkocHJvY2Vzcy5fbWluaUJ1cyk7XG5cbiAgcHJvY2Vzcy5fcmVnaXN0cnkuX2NyZWF0ZSA9ICh1cmwsIHNvdXJjZUNvZGUsIGNvbmZpZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgYWN0aXZhdGUgPSBfZXZhbChzb3VyY2VDb2RlLCB0cnVlKTtcblxuICAgICAgY29uc29sZS5sb2coJ1RZUEVPRjonLCB0eXBlb2YoYWN0aXZhdGUpKTtcblxuICAgICAgaWYgKHR5cGVvZihhY3RpdmF0ZSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlKHVybCwgcHJvY2Vzcy5fbWluaUJ1cywgY29uZmlnKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFjdGl2YXRlLmRlZmF1bHQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmF0ZS5kZWZhdWx0KHVybCwgcHJvY2Vzcy5fbWluaUJ1cywgY29uZmlnKTtcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SIHdoaWxlIGFjdGl2YXRpbmcgdGhlIEh5cGVydHksIHJlYXNvbjonLCByZWFzb24pO1xuICAgIH1cbiAgfTtcbn07XG5cblxuLyoqXG4qIEByZXR1cm5zIEh5cGVydHkgYnkgZGVzY3JpcHRvclVSTFxuKiovXG5mdW5jdGlvbiBnZXRIeXBlcnR5QnkoaHlwZXJ0eURlc2NyaXB0b3IpIHtcbiAgY29uc29sZS5sb2coJ0dldCBIeXBlcnR5OicsIGh5cGVydHlEZXNjcmlwdG9yLCBwcm9jZXNzLl9yZWdpc3RyeS5jb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb2Nlc3MuX3JlZ2lzdHJ5LmNvbXBvbmVudHNbaHlwZXJ0eURlc2NyaXB0b3JdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVDb250ZXh0QXBwLCBnZXRIeXBlcnR5QnkgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0QXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXM2LXByb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJlczYtcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZXJ1bnRpbWVuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5sZXQgUHJvbWlzZSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJyk7XG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGFwcCBmcm9tICcuL0NvbnRleHRBcHAnO1xuaW1wb3J0IFVSSSBmcm9tICd1cmlqcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJ2NvbG9ycyc7XG5pbXBvcnQgY2hpbGQgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cblxuXG5sZXQgY29yZVJ1bnRpbWUgPSB7fTtcbmNvcmVSdW50aW1lICA9IGNoaWxkLmZvcmsoIHBhdGguam9pbignZGlzdCcsICdjb3JlLmpzJykpO1xuXG5sZXQgYnVpbGRNc2cgPSAoaHlwZXJ0eUNvbXBvbmVudCwgbXNnKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcnVudGltZUh5cGVydHlVUkw6IG1zZy5ib2R5LnJ1bnRpbWVIeXBlcnR5VVJMLFxuICAgIHN0YXR1czogbXNnLmJvZHkuc3RhdHVzLFxuICAgIGluc3RhbmNlOiBoeXBlcnR5Q29tcG9uZW50Lmluc3RhbmNlLFxuICAgIG5hbWU6IGh5cGVydHlDb21wb25lbnQubmFtZVxuICB9O1xufTtcblxuLyoqXG4qIFJldHVybnMgYXMgYSBwcm9taXNlIEh5cGVydHkgb2JqZWN0IHdpdGggYWxsIGl0cyBpbmZvcm1hdGlvbnMuXG4qIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4qKi9cbmxldCBydW50aW1lUHJveHkgPSB7XG4gIHJlcXVpcmVIeXBlcnR5OiAoaHlwZXJ0eURlc2NyaXB0b3IsIHJldXNlQWRkcmVzcyA9IGZhbHNlKT0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICBjb3JlUnVudGltZS5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0gTWVzc2FnZSBmcm9tIHJ1bnRpbWUgY29yZSAtLS0tJy5ncmVlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIeXBlcnR5IGxvYWRlZCA6XFxuJy5ncmVlbik7XG5cbiAgICAgICAgaWYgKG1zZy50byA9PT0gJ3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScpIHtcbiAgICAgICAgICByZXNvbHZlKGJ1aWxkTXNnKGFwcC5nZXRIeXBlcnR5QnkobXNnLmJvZHkucnVudGltZUh5cGVydHlVUkwpLCBtc2cpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY29yZVJ1bnRpbWUgLnNlbmQnLmdyZWVuKTtcbiAgICAgIGNvcmVSdW50aW1lLnNlbmQoe3RvOidjb3JlOmxvYWRIeXBlcnR5JywgYm9keTp7ZGVzY3JpcHRvcjogaHlwZXJ0eURlc2NyaXB0b3IsIHJldXNlQWRkcmVzc319KTtcbiAgICB9KTtcbiAgfSxcblxuICByZXF1aXJlUHJvdG9zdHViOiAoZG9tYWluKSA9PiB7XG4gICAgY29yZVJ1bnRpbWUuc2VuZCh7dG86J2NvcmU6bG9hZFN0dWInLCBib2R5Ontkb21haW46IGRvbWFpbn19KTtcbiAgfVxufTtcblxuLyoqXG4qIFJldHVybnMgYXMgYSBwcm9taXNlIEh5cGVydHkgcnVudGltZSBvYmplY3QuXG4qIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4qKi9cbmxldCBSZXRoaW5rTm9kZSA9IHtcbiAgaW5zdGFsbDogZnVuY3Rpb24oe2RvbWFpbiwgcnVudGltZVVSTCwgZGV2ZWxvcG1lbnR9PXt9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBydW50aW1lID0gdGhpcy5nZXRSdW50aW1lKHJ1bnRpbWVVUkwsIGRvbWFpbiwgZGV2ZWxvcG1lbnQpO1xuICAgICAgY29yZVJ1bnRpbWUuc2VuZCh7ZG86J2luc3RhbGwgcnVudGltZSBjb3JlJywgYm9keTogeyBkb21haW46IGRvbWFpbiwgcnVudGltZVVSTDogcnVudGltZVVSTH19KTtcbiAgICAgIGNvcmVSdW50aW1lLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgICBpZiAobXNnLnRvID09PSAncnVudGltZTppbnN0YWxsZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1xcbiBSdW50aW1lIGluc3RhbGxlZCB3aXRoIHN1Y2Nlc3NcXG4nLmJsdWUpO1xuICAgICAgICAgIHJlc29sdmUocnVudGltZVByb3h5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvcmVSdW50aW1lLm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdydW50aW1lIGNvcmUgaW5zdGFsbCBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICBjb3JlUnVudGltZSAua2lsbCgpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvcmVSdW50aW1lLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncnVudGltZSBjb3JlIGV4aXRlZC4nKTtcbiAgICAgICAgY29yZVJ1bnRpbWUua2lsbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGFwcC5jcmVhdGVDb250ZXh0QXBwKGNvcmVSdW50aW1lKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRSdW50aW1lKHJ1bnRpbWVVUkwsIGRvbWFpbiwgZGV2ZWxvcG1lbnQpIHtcbiAgICBpZiAoISFkZXZlbG9wbWVudCkge1xuICAgICAgcnVudGltZVVSTCA9IHJ1bnRpbWVVUkwgfHwgJ2h0dHA6Ly8nICsgZG9tYWluICsgJy8ud2VsbC1rbm93bi9ydW50aW1lL1J1bnRpbWUnO1xuICAgICAgZG9tYWluID0gZG9tYWluIHx8IG5ldyBVUkkocnVudGltZVVSTCkuaG9zdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW50aW1lVVJMID0gcnVudGltZVVSTCB8fCAnaHR0cDovLyR7ZG9tYWlufS8ud2VsbC1rbm93bi9ydW50aW1lL2RlZmF1bHQnO1xuICAgICAgZG9tYWluID0gZG9tYWluIHx8IG5ldyBVUkkocnVudGltZVVSTCkuaG9zdCgpLnJlcGxhY2UoJ2NhdGFsb2d1ZS4nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmw6IHJ1bnRpbWVVUkwsXG4gICAgICBkb21haW46IGRvbWFpblxuICAgIH07XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZXRoaW5rTm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lTm9kZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=