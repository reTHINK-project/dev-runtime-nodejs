'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MiniBus = require('../../src/bus/MiniBus');

var _MiniBus2 = _interopRequireDefault(_MiniBus);

var _Sandbox2 = require('../../src/sandbox/Sandbox');

var _Sandbox3 = _interopRequireDefault(_Sandbox2);

var _SandboxRegistry = require('../../src/sandbox/SandboxRegistry');

var _SandboxRegistry2 = _interopRequireDefault(_SandboxRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Mockup code for testing
var AppSandboxBrowser = function (_Sandbox) {
  _inherits(AppSandboxBrowser, _Sandbox);

  function AppSandboxBrowser() {
    _classCallCheck(this, AppSandboxBrowser);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(AppSandboxBrowser).call(this));

    var _this = _this2;

    _this.type = _Sandbox2.SandboxType.APP;

    console.log('AppSandboxBrowser');

    //simulate sandbox frontier
    _this._bus = new _MiniBus2.default();
    _this._bus._onPostMessage = function (msg) {
      console.log('AppSandboxBrowser._onPostMessage -> external', 'from: ', msg.from, 'to: ', msg.to);

      //redirect messages to the external part of the sandbox
      _this._onMessage(msg);
    };

    _this._sbr = new _SandboxRegistry2.default(_this._bus);
    _this._sbr._create = function (url, sourceCode, config) {
      console.log('SandboxRegistry._create ', url, config, sourceCode);
      eval(sourceCode);
      return activate(url, _this._bus, config);
    };

    //for testing, this make components accessible from browser console
    window.components = _this._sbr.components;
    return _this2;
  }

  _createClass(AppSandboxBrowser, [{
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      var _this = this;
      console.log('AppSandboxBrowser._onPostMessage -> internal', 'from: ', msg.from, 'to: ', msg.to);

      //redirect messages to the internal part of the sandbox
      _this._bus._onMessage(msg);
    }
  }]);

  return AppSandboxBrowser;
}(_Sandbox3.default);

exports.default = AppSandboxBrowser;