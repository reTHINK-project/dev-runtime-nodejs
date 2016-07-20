'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var methods = { GET: 'get', POST: 'post', DELETE: 'delete', UPDATE: 'update' };

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);

    console.log('Browser Request');

    var _this = this;

    Object.keys(methods).forEach(function (method) {

      _this[methods[method]] = function (url) {

        return new Promise(function (resolve, reject) {

          _this._makeLocalRequest(methods[method], url).then(function (result) {
            resolve(result);
          }).catch(function (reason) {
            reject(reason);
          });
        });
      };
    });
  }

  _createClass(Request, [{
    key: '_makeLocalRequest',
    value: function _makeLocalRequest(method, url) {

      console.log(url);

      return new Promise(function (resolve, reject) {
        var protocolmap = {
          'hyperty-catalogue://': 'http://',
          '../': '../'
        };

        var foundProtocol = false;
        for (var protocol in protocolmap) {
          if (url.slice(0, protocol.length) === protocol) {
            // console.log('exchanging ' + protocol + " with " + protocolmap[protocol]);
            url = protocolmap[protocol] + url.slice(protocol.length, url.length);
            foundProtocol = true;
            break;
          }
        }

        if (!foundProtocol) {
          reject('Invalid protocol of url: ' + url);
          return;
        }

        var xhr = new XMLHttpRequest();

        // console.log(url);

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function (event) {
          var xhr = event.currentTarget;
          if (xhr.readyState === 4) {
            // console.log("got response:", xhr);
            if (xhr.status === 200) {
              resolve(xhr.responseText);
            } else {
              // console.log("rejecting promise because of response code: 200 != ", xhr.status);
              reject(xhr.responseText);
            }
          }
        };

        xhr.send();
      });
    }
  }]);

  return Request;
}();

exports.default = Request;