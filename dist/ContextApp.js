// version: 0.1.0
// date: Tue May 30 2017 09:22:39 GMT+0200 (CEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"));
	else if(typeof define === 'function' && define.amd)
		define("ContextApp", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval"], factory);
	else if(typeof exports === 'object')
		exports["ContextApp"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"));
	else
		root["ContextApp"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
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

function createContextApp(coreRuntime) {

  process._miniBus = new _minibus2.default();
  process._miniBus._onPostMessage = function (msg) {
    // onPostMessage on the miniBus will be sent to coreRuntime 
    coreRuntime.send(msg);
  };
  // EventListener on the IPC communication channel between the coreRuntime and the RuntimeNode for messages sent from the coreRuntime
  coreRuntime.on('message', function (event) {
    if (event.to.startsWith('runtime:loadedHyperty')) return;

    // _onMessage received on the coreRuntime miniBus

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNjNlZDAzZjJkOTU3NTMxZjRhMj9iNTVmKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCI/NzQ3MioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUqKioqIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIj9hZWFlKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHRBcHAuanM/YzcyNCJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0QXBwIiwiY29yZVJ1bnRpbWUiLCJwcm9jZXNzIiwiX21pbmlCdXMiLCJfb25Qb3N0TWVzc2FnZSIsIm1zZyIsInNlbmQiLCJvbiIsImV2ZW50IiwidG8iLCJzdGFydHNXaXRoIiwiX29uTWVzc2FnZSIsIl9yZWdpc3RyeSIsIl9jcmVhdGUiLCJ1cmwiLCJzb3VyY2VDb2RlIiwiY29uZmlnIiwiYWN0aXZhdGUiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdCIsInJlYXNvbiIsImdldEh5cGVydHlCeSIsImh5cGVydHlEZXNjcmlwdG9yIiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxzRDs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OFFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDOztBQUVyQ0MsVUFBUUMsUUFBUixHQUFtQix1QkFBbkI7QUFDQUQsVUFBUUMsUUFBUixDQUFpQkMsY0FBakIsR0FBa0MsVUFBU0MsR0FBVCxFQUFjO0FBQzVDO0FBQ0FKLGdCQUFZSyxJQUFaLENBQWlCRCxHQUFqQjtBQUNMLEdBSEM7QUFJRjtBQUNBSixjQUFZTSxFQUFaLENBQWUsU0FBZixFQUEwQixVQUFTQyxLQUFULEVBQWdCO0FBQ3RDLFFBQUlBLE1BQU1DLEVBQU4sQ0FBU0MsVUFBVCxDQUFvQix1QkFBcEIsQ0FBSixFQUNJOztBQUVKOztBQUVBUixZQUFRQyxRQUFSLENBQWlCUSxVQUFqQixDQUE0QkgsS0FBNUI7QUFDRCxHQVBIOztBQVNFTixVQUFRVSxTQUFSLEdBQW9CLDZCQUFvQlYsUUFBUUMsUUFBNUIsQ0FBcEI7O0FBRUFELFVBQVFVLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCLFVBQUNDLEdBQUQsRUFBTUMsVUFBTixFQUFrQkMsTUFBbEIsRUFBNkI7QUFDdkQsUUFBSTtBQUNGLFVBQUlDLFdBQVcsb0JBQU1GLFVBQU4sRUFBa0IsSUFBbEIsQ0FBZjs7QUFFQUcsY0FBUUMsR0FBUixDQUFZLFNBQVosU0FBOEJGLFFBQTlCLHlDQUE4QkEsUUFBOUI7O0FBRUEsVUFBSSxPQUFPQSxRQUFQLEtBQXFCLFVBQXpCLEVBQXFDO0FBQ25DLGVBQU9BLFNBQVNILEdBQVQsRUFBY1osUUFBUUMsUUFBdEIsRUFBZ0NhLE1BQWhDLENBQVA7QUFDRCxPQUZELE1BRU8sSUFBSSxPQUFPQyxTQUFTRyxPQUFoQixLQUE2QixVQUFqQyxFQUE2QztBQUNsRCxlQUFPSCxTQUFTRyxPQUFULENBQWlCTixHQUFqQixFQUFzQlosUUFBUUMsUUFBOUIsRUFBd0NhLE1BQXhDLENBQVA7QUFDRDtBQUVGLEtBWEQsQ0FXRSxPQUFPSyxNQUFQLEVBQWU7QUFDZkgsY0FBUUMsR0FBUixDQUFZLDZDQUFaLEVBQTJERSxNQUEzRDtBQUNEO0FBQ0YsR0FmRDtBQWdCRDs7QUFHRDs7O0FBR0EsU0FBU0MsWUFBVCxDQUFzQkMsaUJBQXRCLEVBQXlDO0FBQ3ZDTCxVQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QkksaUJBQTVCLEVBQStDckIsUUFBUVUsU0FBUixDQUFrQlksVUFBakU7QUFDQSxTQUFPdEIsUUFBUVUsU0FBUixDQUFrQlksVUFBbEIsQ0FBNkJELGlCQUE3QixDQUFQO0FBQ0Q7O2tCQUVjLEVBQUV2QixrQ0FBRixFQUFvQnNCLDBCQUFwQixFIiwiZmlsZSI6IkNvbnRleHRBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJDb250ZXh0QXBwXCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiZXZhbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb250ZXh0QXBwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb250ZXh0QXBwXCJdID0gZmFjdG9yeShyb290W1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXSwgcm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIl0sIHJvb3RbXCJldmFsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTYzZWQwM2YyZDk1NzUzMWY0YTIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2YWxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vICBUaGUgY29udGV4dEFwcCBpcyBjb21wbG1lbnRhcnkgbW9kdWxlIHRvIHRoZSAgUnVudGltZU5vZGUgdGhhdCBjcmVhdGVzIHRoZSBDb250ZXh0IHdoZXJlIHRoZSBIeXBlcnR5IHdpbGwgYmUgZGVwbG95ZWRcbi8vICBUaGUgY29udGV4dEFwcCBoYW5kbHMgY29tbXVuaW9jYXRpb24gYmV0d2VlbiB0aGUgSHlwZXJ0eSBhbmQgdGhlIGNvcmVSdW50aW1lXG5cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hSZWdpc3RyeSB9IGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L3NhbmRib3gnO1xuaW1wb3J0IE1pbmlCdXMgZnJvbSAncnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1cyc7XG5pbXBvcnQgX2V2YWwgZnJvbSAnZXZhbCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHRBcHAoY29yZVJ1bnRpbWUpIHtcblxuICBwcm9jZXNzLl9taW5pQnVzID0gbmV3IE1pbmlCdXMoKTtcbiAgcHJvY2Vzcy5fbWluaUJ1cy5fb25Qb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKG1zZykge1xuICAgICAgLy8gb25Qb3N0TWVzc2FnZSBvbiB0aGUgbWluaUJ1cyB3aWxsIGJlIHNlbnQgdG8gY29yZVJ1bnRpbWUgXG4gICAgICBjb3JlUnVudGltZS5zZW5kKG1zZyk7XG59O1xuLy8gRXZlbnRMaXN0ZW5lciBvbiB0aGUgSVBDIGNvbW11bmljYXRpb24gY2hhbm5lbCBiZXR3ZWVuIHRoZSBjb3JlUnVudGltZSBhbmQgdGhlIFJ1bnRpbWVOb2RlIGZvciBtZXNzYWdlcyBzZW50IGZyb20gdGhlIGNvcmVSdW50aW1lXG5jb3JlUnVudGltZS5vbignbWVzc2FnZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvLnN0YXJ0c1dpdGgoJ3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvLyBfb25NZXNzYWdlIHJlY2VpdmVkIG9uIHRoZSBjb3JlUnVudGltZSBtaW5pQnVzXG5cbiAgICBwcm9jZXNzLl9taW5pQnVzLl9vbk1lc3NhZ2UoZXZlbnQpO1xuICB9KTtcblxuICBwcm9jZXNzLl9yZWdpc3RyeSA9IG5ldyBTYW5kYm94UmVnaXN0cnkocHJvY2Vzcy5fbWluaUJ1cyk7XG5cbiAgcHJvY2Vzcy5fcmVnaXN0cnkuX2NyZWF0ZSA9ICh1cmwsIHNvdXJjZUNvZGUsIGNvbmZpZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgYWN0aXZhdGUgPSBfZXZhbChzb3VyY2VDb2RlLCB0cnVlKTtcblxuICAgICAgY29uc29sZS5sb2coJ1RZUEVPRjonLCB0eXBlb2YoYWN0aXZhdGUpKTtcblxuICAgICAgaWYgKHR5cGVvZihhY3RpdmF0ZSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlKHVybCwgcHJvY2Vzcy5fbWluaUJ1cywgY29uZmlnKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFjdGl2YXRlLmRlZmF1bHQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmF0ZS5kZWZhdWx0KHVybCwgcHJvY2Vzcy5fbWluaUJ1cywgY29uZmlnKTtcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SIHdoaWxlIGFjdGl2YXRpbmcgdGhlIEh5cGVydHksIHJlYXNvbjonLCByZWFzb24pO1xuICAgIH1cbiAgfTtcbn07XG5cblxuLyoqXG4qIEByZXR1cm5zIEh5cGVydHkgYnkgZGVzY3JpcHRvclVSTFxuKiovXG5mdW5jdGlvbiBnZXRIeXBlcnR5QnkoaHlwZXJ0eURlc2NyaXB0b3IpIHtcbiAgY29uc29sZS5sb2coJ0dldCBIeXBlcnR5OicsIGh5cGVydHlEZXNjcmlwdG9yLCBwcm9jZXNzLl9yZWdpc3RyeS5jb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb2Nlc3MuX3JlZ2lzdHJ5LmNvbXBvbmVudHNbaHlwZXJ0eURlc2NyaXB0b3JdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVDb250ZXh0QXBwLCBnZXRIeXBlcnR5QnkgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250ZXh0QXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==