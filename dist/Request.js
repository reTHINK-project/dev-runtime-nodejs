// version: 0.1.0
// date: Thu May 18 2017 10:56:54 GMT+0200 (CEST)
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
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
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

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGU0MTAxMmU5NWViNDg4NjNlMGVkP2Q1ZTAqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcXVlc3QuanM/NzNhOSoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiP2U5MDUqIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiZmV0Y2giLCJyZXF1aXJlIiwiUmVxdWVzdCIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibWV0aG9kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWFrZUxvY2FsUmVxdWVzdCIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInJlYXNvbiIsInllbGxvdyIsInVybE1hcCIsIm1hcFByb3RvY29sIiwiZ3JlZW4iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInJlcyIsInN0YXR1cyIsInRleHQiLCJib2R5IiwidG9TdHJpbmciLCJlcnIiLCJlcnJvciIsInJlZCIsInBvc3RPcHRpb25zIiwicHJvdG9jb2xtYXAiLCJmb3VuZFByb3RvY29sIiwicHJvdG9jb2wiLCJzbGljZSIsImxlbmd0aCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7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QUNBLG1CQUFPRCxJQUFJRSxJQUFKLEVBQVA7QUFDRCxXQUhELEVBR0diLElBSEgsQ0FHUSxVQUFDYyxJQUFELEVBQVU7QUFDaEJqQixvQkFBUWlCLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLENBQVI7QUFDRCxXQUxELEVBS0diLEtBTEgsQ0FLUyxVQUFDZSxLQUFELEVBQVc7QUFDbEI3QixvQkFBUTZCLEtBQVIsQ0FBYyxzQ0FBZCxFQUFxRFosTUFBckQsRUFBNkQsZUFBN0QsRUFBOEVWLE9BQTlFLEVBQXVGLFVBQXZGLEVBQW1HcUIsR0FBbkc7QUFDRCxXQVBEO0FBUUQ7QUFDRixPQXBDTSxDQUFQO0FBcUNEOztBQUVGOzs7Ozs7Z0NBR2F0QixHLEVBQUs7QUFDZixVQUFJMEIsY0FBYztBQUNoQix3QkFBZ0IsVUFEQTtBQUVoQix3QkFBZ0IsVUFGQTtBQUdoQixnQ0FBd0IsVUFIUjtBQUloQixvQkFBWSxVQUpJO0FBS2hCLG1CQUFXO0FBTEssT0FBbEI7O0FBUUEsVUFBSUMsZ0JBQWdCLEtBQXBCO0FBQ0EsV0FBSyxJQUFJQyxRQUFULElBQXFCRixXQUFyQixFQUFrQztBQUNoQyxZQUFJMUIsSUFBSTZCLEtBQUosQ0FBVSxDQUFWLEVBQWFELFNBQVNFLE1BQXRCLE1BQWtDRixRQUF0QyxFQUFnRDtBQUM5QzVCLGdCQUFNMEIsWUFBWUUsUUFBWixJQUF3QjVCLElBQUk2QixLQUFKLENBQVVELFNBQVNFLE1BQW5CLEVBQTJCOUIsSUFBSThCLE1BQS9CLENBQTlCO0FBQ0FILDBCQUFnQixJQUFoQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJLENBQUNBLGFBQUwsRUFBb0I7QUFDbEIsY0FBTSxJQUFJSSxLQUFKLENBQVUsOEJBQThCL0IsR0FBeEMsQ0FBTjtBQUNEO0FBQ0QsYUFBT0EsR0FBUDtBQUNEOzs7Ozs7a0JBR1lSLE87Ozs7Ozs7QUN2SGYsdUMiLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm5vZGUtZmV0Y2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJSZXF1ZXN0XCIsIFtcIm5vZGUtZmV0Y2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVxdWVzdFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm5vZGUtZmV0Y2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlcXVlc3RcIl0gPSBmYWN0b3J5KHJvb3RbXCJub2RlLWZldGNoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTQxMDEyZTk1ZWI0ODg2M2UwZWQiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5jb25zdCBtZXRob2RzID0ge0dFVDogJ2dldCcsIFBPU1Q6ICdwb3N0J307XG5cbmxldCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpO1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgX3RoaXNbbWV0aG9kc1ttZXRob2RdXSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBfdGhpcy5tYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsaW5nIHJlcXVlc3QgbWV0aG9kc1xuICAgKiBAcmV0dXJucyB7dGV4dDxzdHJpbmc+fVxuICAgKiovXG4gIG1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgX3RoaXMgPXRoaXNcbiAgICBjb25zb2xlLmxvZygnSFRUUFMgUmVxdWVzdDonLnllbGxvdywgbWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNYXBwZWQgdXJsIGlzICcueWVsbG93LCB1cmxNYXAsJ21ldGhvZCBpczonLmdyZWVuLCBtZXRob2QpO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xuXG4gICAgICBpZihtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBHRVQgbWV0aG9kXG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBHRVQgbWV0aG9kIG9mIHVybDonLnJlZCAsIHVybE1hcCwgJyByZWFzb24gOicucmVkLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGxldCBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8qICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBib2R5OiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2godXJsTWFwLCBwb3N0T3B0aW9ucykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBQT1NUIG1ldGhvZCBvZiB1cmw6Jyx1cmxNYXAsICd3aXRoIG9wdGlvbnM6Jywgb3B0aW9ucywgJ3JlYXNvbiA6JywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuIC8qKlxuICAqIEByZXR1cm5zIHt2YXJpYWJsZTxzdHJpbmc+fVxuICAqKi9cbiAgbWFwUHJvdG9jb2wodXJsKSB7XG4gICAgbGV0IHByb3RvY29sbWFwID0ge1xuICAgICAgJ2xvY2FsaG9zdDovLyc6ICdodHRwczovLycsXG4gICAgICAndW5kZWZpbmVkOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdoeXBlcnR5LWNhdGFsb2d1ZTovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cHM6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHA6Ly8nOiAnaHR0cHM6Ly8nXG4gICAgfVxuXG4gICAgbGV0IGZvdW5kUHJvdG9jb2wgPSBmYWxzZVxuICAgIGZvciAobGV0IHByb3RvY29sIGluIHByb3RvY29sbWFwKSB7XG4gICAgICBpZiAodXJsLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCkgPT09IHByb3RvY29sKSB7XG4gICAgICAgIHVybCA9IHByb3RvY29sbWFwW3Byb3RvY29sXSArIHVybC5zbGljZShwcm90b2NvbC5sZW5ndGgsIHVybC5sZW5ndGgpXG4gICAgICAgIGZvdW5kUHJvdG9jb2wgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZFByb3RvY29sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvdG9jb2wgb2YgdXJsOiAnICsgdXJsKVxuICAgIH1cbiAgICByZXR1cm4gdXJsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVxdWVzdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNyJdLCJzb3VyY2VSb290IjoiIn0=