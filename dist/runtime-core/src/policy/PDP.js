'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

  /**
  * This method is invoked by the Policy Engine and instantiates the Policy Decision Point. It
  * initialises or loads from the Persistence Manager the object 'myGroups' to store the user's
  * groups.
  * @param  {Registry}    muchruntimeRegistry
  */
  function PDP(context) {
    _classCallCheck(this, PDP);

    var _this = this;
    _this.context = context;
    _this.operators = new _Operators2.default(context);
  }

  /**
  * Verifies if the given message is compliant with the given policies. If one of the policies
  * evaluates to 'false', then the message is not authorised. Returns the final authorisation
  * decision and a set of actions that policies may require.
  * @param {Message}  message
  * @param {URL}      hypertyToVerify
  * @param {Array}    policies
  * @return {Array}   [authDecision, actions]
  */


  _createClass(PDP, [{
    key: 'evaluate',
    value: function evaluate(message, policies) {
      var _this = this;
      var results = [true];
      var actions = [];
      for (var i in policies) {
        var policy = policies[i];
        var condition = policy.condition;
        var verifiesCondition = false;
        if ((typeof condition === 'undefined' ? 'undefined' : _typeof(condition)) === 'object') {
          verifiesCondition = _this.verifiesAdvancedCondition(condition[0], condition[1], condition[2], policy.scope, message);
        } else {
          verifiesCondition = _this.verifiesSimpleCondition(condition, policy.scope, message);
        }

        if (verifiesCondition) {
          results.push(policy.authorise);
        }
        if (policy.actions !== []) {
          for (var _i in policy.actions) {
            var newAction = {
              method: policy.actions[_i].method,
              params: message
            };
            actions.push(newAction);
          }
        }
      }

      var authDecision = results.indexOf(false) === -1;
      return [authDecision, actions];
    }
  }, {
    key: 'verifiesSimpleCondition',
    value: function verifiesSimpleCondition(condition, scope, message) {
      var _this = this;
      var splitCondition = condition.split(' ');
      var variable = splitCondition[0];
      var operator = splitCondition[1];

      var params = void 0;
      if (operator === 'in') {
        _this.context.group = { scope: scope, group: splitCondition[2], destination: message.to };
        params = _this.context.group;
      } else {
        params = splitCondition.slice(2);
      }
      _this.context[variable] = { message: message };
      var value = _this.context[variable];
      return _this.operators.operators[operator]([params, value]);
    }
  }, {
    key: 'verifiesAdvancedCondition',
    value: function verifiesAdvancedCondition(operator, left, right, scope, message) {
      var _this = this;
      while ((typeof left === 'undefined' ? 'undefined' : _typeof(left)) === 'object') {
        left = _this.verifiesAdvancedCondition(left[0], left[1], left[2], scope, message);
      }
      if (right !== undefined) {
        while ((typeof right === 'undefined' ? 'undefined' : _typeof(right)) === 'object') {
          right = _this.verifiesAdvancedCondition(right[0], right[1], right[2], scope, message);
        }
      }

      var resultLeft = typeof left === 'boolean' ? left : _this.verifiesSimpleCondition(left, scope, message);

      var resultRight = void 0;
      if (right !== undefined) {
        resultRight = typeof right === 'boolean' ? right : _this.verifiesSimpleCondition(right, scope, message);
      }

      return _this.operators.operators[operator]([resultLeft, resultRight]);
    }
  }]);

  return PDP;
}();

exports.default = PDP;