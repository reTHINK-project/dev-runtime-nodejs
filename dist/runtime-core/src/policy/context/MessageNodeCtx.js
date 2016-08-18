'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CommonCtx2 = require('./CommonCtx');

var _CommonCtx3 = _interopRequireDefault(_CommonCtx2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageNodeCtx = function (_CommonCtx) {
  _inherits(MessageNodeCtx, _CommonCtx);

  function MessageNodeCtx() {
    _classCallCheck(this, MessageNodeCtx);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(MessageNodeCtx).call(this));

    _this2.serviceProviderPolicies = {}; //TODO: how to load them?
    return _this2;
  }

  _createClass(MessageNodeCtx, [{
    key: 'authorise',
    value: function authorise(message) {
      console.log('--- Policy Engine ---');
      console.log(message);
      var _this = this;
      var result = void 0;

      var isToVerify = _this._isToVerify(message);
      if (isToVerify) {
        var policies = {
          serviceProviderPolicy: _this.getServiceProviderPolicy(message)
        };
        result = _this.policyEngine.pdp.applyPolicies(message, policies);
        if (result === 'Not Applicable') {
          result = _this.defaultBehavior;
        }
        if (result) {
          return true;
        } else {
          return false;
        }
      } else {
        result = _this.defaultBehavior;
        if (result) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, {
    key: 'loadActivePolicy',
    value: function loadActivePolicy() {}
  }, {
    key: 'loadGroups',
    value: function loadGroups() {}
  }, {
    key: 'loadSPPolicies',
    value: function loadSPPolicies() {}
  }, {
    key: 'loadUserPolicies',
    value: function loadUserPolicies() {}
  }, {
    key: 'getServiceProviderPolicy',
    value: function getServiceProviderPolicy() {
      var policy = void 0;

      if (Object.keys(this.serviceProviderPolicies).length !== 0) {
        for (var i in this.serviceProviderPolicies) {
          policy = this.serviceProviderPolicies[i];
        }
      }

      return policy;
    }
  }, {
    key: '_isToVerify',
    value: function _isToVerify() {
      return true;
    }
  }, {
    key: 'saveActivePolicy',
    value: function saveActivePolicy() {}
  }, {
    key: 'savePolicies',
    value: function savePolicies() {}
  }]);

  return MessageNodeCtx;
}(_CommonCtx3.default);

exports.default = MessageNodeCtx;