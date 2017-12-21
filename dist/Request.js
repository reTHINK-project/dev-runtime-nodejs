// version: 0.1.0
// date: Wed Dec 20 2017 17:26:42 GMT+0000 (WET)
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
		module.exports = factory(require("node-fetch"));
	else if(typeof define === 'function' && define.amd)
		define("Request", ["node-fetch"], factory);
	else if(typeof exports === 'object')
		exports["Request"] = factory(require("node-fetch"));
	else
		root["Request"] = factory(root["node-fetch"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ 6:
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
						reject(err);
					});
				} else if (method === 'POST') {
					var postOptions = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'cache-control': 'no-cache'
						},
						body: options && options.body ? options.body : {}
					};

					console.log('PostOptions:', postOptions);

					fetch(urlMap, postOptions).then(function (res) {
						console.log('statusCode is: '.green, res.status);
						return res.text();
					}).then(function (body) {
						resolve(body.toString('utf8'));
					}).catch(function (error) {
						console.error('Error occured on POST method of url:', urlMap, 'with options:', options, 'reason :', error);
						reject(error);
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGU3ZTYwMTU2NjViMTk3OTI2OWU3PzBkOTEqKioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiP2U5MDUqIiwid2VicGFjazovLy8uL3NyYy9SZXF1ZXN0LmpzPzczYTkqIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiZmV0Y2giLCJyZXF1aXJlIiwiUmVxdWVzdCIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibWV0aG9kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWFrZUxvY2FsUmVxdWVzdCIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInJlYXNvbiIsInllbGxvdyIsInVybE1hcCIsIm1hcFByb3RvY29sIiwiZ3JlZW4iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInJlcyIsInN0YXR1cyIsInRleHQiLCJib2R5IiwidG9TdHJpbmciLCJlcnIiLCJlcnJvciIsInJlZCIsInBvc3RPcHRpb25zIiwiaGVhZGVycyIsInByb3RvY29sbWFwIiwiZm91bmRQcm90b2NvbCIsInByb3RvY29sIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURB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VUFBTSxJQUFJSSxLQUFKLENBQVUsOEJBQThCaEMsR0FBeEMsQ0FBTjtBQUNBO0FBQ0QsVUFBT0EsR0FBUDtBQUNBOzs7Ozs7a0JBR2FSLE8iLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm5vZGUtZmV0Y2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJSZXF1ZXN0XCIsIFtcIm5vZGUtZmV0Y2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVxdWVzdFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm5vZGUtZmV0Y2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlcXVlc3RcIl0gPSBmYWN0b3J5KHJvb3RbXCJub2RlLWZldGNoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU3ZTYwMTU2NjViMTk3OTI2OWU3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmNvbnN0IG1ldGhvZHMgPSB7R0VUOiAnZ2V0JywgUE9TVDogJ3Bvc3QnfVxuXG5sZXQgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcblxuXG5jbGFzcyBSZXF1ZXN0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpc1xuXHRcdGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpXG5cdFx0T2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG5cdFx0XHRfdGhpc1ttZXRob2RzW21ldGhvZF1dID0gKHVybCwgb3B0aW9ucykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdF90aGlzLm1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdClcblx0XHRcdFx0XHR9KS5jYXRjaCgocmVhc29uKSA9PiB7XG5cdFx0XHRcdFx0XHRyZWplY3QocmVhc29uKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuICAgKiBoYW5kbGluZyByZXF1ZXN0IG1ldGhvZHNcbiAgICogQHJldHVybnMge3RleHQ8c3RyaW5nPn1cbiAgICoqL1xuXHRtYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XG5cdFx0bGV0IF90aGlzID10aGlzXG5cdFx0Y29uc29sZS5sb2coJ0hUVFBTIFJlcXVlc3Q6Jy55ZWxsb3csIG1ldGhvZCwgdXJsLCBvcHRpb25zKVxuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0bGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybClcblxuXHRcdFx0Y29uc29sZS5sb2coJ01hcHBlZCB1cmwgaXMgJy55ZWxsb3csIHVybE1hcCwnbWV0aG9kIGlzOicuZ3JlZW4sIG1ldGhvZClcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCdcblxuXHRcdFx0aWYobWV0aG9kID09PSAnR0VUJykge1xuXHRcdFx0XHQvLyBoYW5kbGUgR0VUIG1ldGhvZFxuXHRcdFx0XHRmZXRjaCh1cmxNYXApLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnRleHQoKVxuXHRcdFx0XHR9KS50aGVuKChib2R5KT0+IHtcblx0XHRcdFx0XHRyZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcblx0XHRcdFx0fSkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gR0VUIG1ldGhvZCBvZiB1cmw6Jy5yZWQgLCB1cmxNYXAsICcgcmVhc29uIDonLnJlZCwgZXJyKVxuXHRcdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHRcdH0pXG5cblx0XHRcdH0gZWxzZSBpZihtZXRob2QgPT09ICdQT1NUJykge1xuXHRcdFx0XHRsZXQgcG9zdE9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0XHRcdCdjYWNoZS1jb250cm9sJzogJ25vLWNhY2hlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJvZHk6IG9wdGlvbnMgJiYgb3B0aW9ucy5ib2R5ID8gb3B0aW9ucy5ib2R5IDoge31cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQb3N0T3B0aW9uczonLCBwb3N0T3B0aW9ucylcblxuXHRcdFx0XHRmZXRjaCh1cmxNYXAsIHBvc3RPcHRpb25zKS50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy50ZXh0KClcblx0XHRcdFx0fSkudGhlbigoYm9keSkgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuXHRcdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIFBPU1QgbWV0aG9kIG9mIHVybDonLHVybE1hcCwgJ3dpdGggb3B0aW9uczonLCBvcHRpb25zLCAncmVhc29uIDonLCBlcnJvcilcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuICAqIEByZXR1cm5zIHt2YXJpYWJsZTxzdHJpbmc+fVxuICAqKi9cblx0bWFwUHJvdG9jb2wodXJsKSB7XG5cdFx0bGV0IHByb3RvY29sbWFwID0ge1xuXHRcdFx0J2xvY2FsaG9zdDovLyc6ICdodHRwczovLycsXG5cdFx0XHQndW5kZWZpbmVkOi8vJzogJ2h0dHBzOi8vJyxcblx0XHRcdCdoeXBlcnR5LWNhdGFsb2d1ZTovLyc6ICdodHRwczovLycsXG5cdFx0XHQnaHR0cHM6Ly8nOiAnaHR0cHM6Ly8nLFxuXHRcdFx0J2h0dHA6Ly8nOiAnaHR0cHM6Ly8nXG5cdFx0fVxuXG5cdFx0bGV0IGZvdW5kUHJvdG9jb2wgPSBmYWxzZVxuXHRcdGZvciAobGV0IHByb3RvY29sIGluIHByb3RvY29sbWFwKSB7XG5cdFx0XHRpZiAodXJsLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCkgPT09IHByb3RvY29sKSB7XG5cdFx0XHRcdHVybCA9IHByb3RvY29sbWFwW3Byb3RvY29sXSArIHVybC5zbGljZShwcm90b2NvbC5sZW5ndGgsIHVybC5sZW5ndGgpXG5cdFx0XHRcdGZvdW5kUHJvdG9jb2wgPSB0cnVlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCFmb3VuZFByb3RvY29sKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvdG9jb2wgb2YgdXJsOiAnICsgdXJsKVxuXHRcdH1cblx0XHRyZXR1cm4gdXJsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9