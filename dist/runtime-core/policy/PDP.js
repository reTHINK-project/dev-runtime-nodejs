'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Operators = require('./Operators');

var _Operators2 = _interopRequireDefault(_Operators);

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
    key: 'evaluatePolicies',
    value: function evaluatePolicies(message, isIncomingMessage) {
      var policies = this.context.getPolicies(message, isIncomingMessage);
      var result = 'Not Applicable';

      if (policies !== undefined) {
        result = this.evaluatePolicy(message, policies.serviceProviderPolicy, isIncomingMessage);
        if (result || result === 'Not Applicable') {
          var userResult = this.evaluatePolicy(message, policies.userPolicy, isIncomingMessage);
          if (userResult !== 'Not Applicable') {
            result = userResult;
          }
        }
      }

      return result;
    }
  }, {
    key: 'evaluatePolicy',
    value: function evaluatePolicy(message, policy, isIncoming) {
      var result = 'Not Applicable';
      if (policy) {
        result = policy.evaluateRules(this.context, message, isIncoming);
      }

      return result;
    }
  }]);

  return PDP;
}();

exports.default = PDP;