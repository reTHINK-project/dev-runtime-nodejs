'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Condition = require('./Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _Operators = require('../Operators');

var _Operators2 = _interopRequireDefault(_Operators);

var _SubscriptionCondition = require('./SubscriptionCondition');

var _SubscriptionCondition2 = _interopRequireDefault(_SubscriptionCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdvancedCondition = function () {
  function AdvancedCondition(condition) {
    _classCallCheck(this, AdvancedCondition);

    this.operators = new _Operators2.default();
    if (condition.operators !== undefined) {
      condition = condition.condition;
    }
    condition = this.buildCondition(condition);
    this.condition = condition;
  }

  _createClass(AdvancedCondition, [{
    key: 'buildCondition',
    value: function buildCondition(condition) {
      if (Array.isArray(condition[1])) {
        condition[1] = this.buildCondition(condition[1]);
      } else {
        if (condition[1].attribute === 'subscription') {
          condition[1] = new _SubscriptionCondition2.default(condition[1].attribute, condition[1].operator, condition[1].params);
        } else {
          condition[1] = new _Condition2.default(condition[1].attribute, condition[1].operator, condition[1].params);
        }
      }

      if (condition[2] !== undefined) {
        if (Array.isArray(condition[2])) {
          condition[2] = this.buildCondition(condition[2]);
        } else {
          if (condition[2].attribute === 'subscription') {
            condition[2] = new _SubscriptionCondition2.default(condition[2].attribute, condition[2].operator, condition[2].params);
          } else {
            condition[2] = new _Condition2.default(condition[2].attribute, condition[2].operator, condition[2].params);
          }
        }
      }
      return condition;
    }
  }, {
    key: 'isApplicable',
    value: function isApplicable(context, message, scope, target, operator, left, right) {
      if (!operator) {
        operator = this.condition[0];
        left = this.condition[1];
        right = this.condition[2];
      }

      while (!(left instanceof _Condition2.default) & !(left instanceof _SubscriptionCondition2.default) & typeof left !== 'boolean') {
        left = this.isApplicable(context, message, scope, target, left[0], left[1], left[2]);
      }
      if (right !== undefined) {
        while (!(right instanceof _Condition2.default) & !(right instanceof _SubscriptionCondition2.default) & typeof right !== 'boolean') {
          right = this.isApplicable(context, message, scope, target, right[0], right[1], right[2]);
        }
      }

      var resultLeft = typeof left === 'boolean' ? left : left.isApplicable(context, message, scope, target);
      var resultRight = void 0;
      if (right !== undefined) {
        resultRight = typeof right === 'boolean' ? right : right.isApplicable(context, message, scope, target);
      }
      return this.operators[operator]([resultLeft, resultRight]);
    }
  }]);

  return AdvancedCondition;
}();

exports.default = AdvancedCondition;