'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SandboxBrowser = require('./sandboxes/SandboxBrowser');

var _SandboxBrowser2 = _interopRequireDefault(_SandboxBrowser);

var _AppSandboxBrowser = require('./sandboxes/AppSandboxBrowser');

var _AppSandboxBrowser2 = _interopRequireDefault(_AppSandboxBrowser);

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

var _RuntimeCatalogue = require('service-framework/dist/RuntimeCatalogue');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RuntimeFactory = function () {
  function RuntimeFactory() {
    _classCallCheck(this, RuntimeFactory);
  }

  _createClass(RuntimeFactory, [{
    key: 'createSandbox',
    value: function createSandbox() {
      return new _SandboxBrowser2.default();
    }
  }, {
    key: 'createAppSandbox',
    value: function createAppSandbox() {
      return new _AppSandboxBrowser2.default();
    }
  }, {
    key: 'createHttpRequest',
    value: function createHttpRequest() {
      var request = new _Request2.default();
      return request;
    }

    // TODO optimize the parameter was passed to inside the RuntimeCatalogue

  }, {
    key: 'createRuntimeCatalogue',
    value: function createRuntimeCatalogue() {

      var _this = this;
      var factory = {
        createHttpRequest: function createHttpRequest() {
          return _this.createHttpRequest();
        }
      };

      return new _RuntimeCatalogue.RuntimeCatalogueLocal(factory);
    }
  }, {
    key: 'removeSandbox',
    value: function removeSandbox() {}
  }]);

  return RuntimeFactory;
}();

exports.default = RuntimeFactory;