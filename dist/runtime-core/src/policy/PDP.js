'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Operators = require('./Operators');

var _Operators2 = _interopRequireDefault(_Operators);

var _RuntimeCoreCtx = require('./context/RuntimeCoreCtx');

var _RuntimeCoreCtx2 = _interopRequireDefault(_RuntimeCoreCtx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Policy Decision Point (PDP) decides if a message is to be authorised by checking a set of
* policies. The resource to be verified is specified in the first word of the 'condition' field of
* a Policy object. The implementation that verifies if the message is compliant with a policy is
* specified in a hashtable to allow dynamic definition of the implementation, providing
* extensibility to the Policy Engine functionalities.
*/
var PDP = function () {
  function PDP(context) {
    _classCallCheck(this, PDP);

    this.context = context;
    this.operators = new _Operators2.default();
  }

  _createClass(PDP, [{
    key: 'applyPolicies',
    value: function applyPolicies(message, policies) {
      var result = this.evaluateSPPolicy(message, policies.serviceProviderPolicy);

      if (this.context instanceof _RuntimeCoreCtx2.default && (result || result === 'Not Applicable')) {
        result = this.evaluateUserPolicy(message, policies.userPolicy);
      }

      return result;
    }
  }, {
    key: 'evaluateSPPolicy',
    value: function evaluateSPPolicy(message, policy) {
      var result = void 0;

      if (policy) {
        result = policy.evaluate(this.context, message);
      } else {
        result = 'Not Applicable';
      }

      return result;
    }
  }, {
    key: 'evaluateUserPolicy',
    value: function evaluateUserPolicy(message, title) {
      var result = void 0;

      if (title !== undefined) {
        var policy = this.context.userPolicies[title];

        if (policy) {
          result = policy.evaluate(this.context, message);
        } else {
          result = 'Not Applicable';
        }
      } else {
        result = 'Not Applicable';
      }

      return result;
    }
  }, {
    key: 'context',
    get: function get() {
      return this._context;
    },
    set: function set(context) {
      this._context = context;
    }
  }, {
    key: 'operators',
    get: function get() {
      return this._operators;
    },
    set: function set(operators) {
      this._operators = operators;
    }
  }]);

  return PDP;
}();

exports.default = PDP;