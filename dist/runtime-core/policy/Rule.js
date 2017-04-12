'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _AdvancedCondition = require('./conditions/AdvancedCondition');

var _AdvancedCondition2 = _interopRequireDefault(_AdvancedCondition);

var _Condition = require('./conditions/Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rule = function () {
  function Rule(decision, condition, scope, target, priority) {
    (0, _classCallCheck3.default)(this, Rule);

    this.decision = decision;
    this.setCondition(condition);
    this.priority = priority;
    this.scope = scope;
    this.target = target;
  }

  (0, _createClass3.default)(Rule, [{
    key: 'setCondition',
    value: function setCondition(condition) {
      if (!(condition instanceof _Condition2.default || condition instanceof _AdvancedCondition2.default || condition instanceof _AdvancedCondition2.default)) {
        var attribute = condition.attribute;
        switch (attribute) {
          case 'subscription':
            this.condition = new _AdvancedCondition2.default(condition.attribute, condition.operator, condition.params);
            break;
          case undefined:
            this.condition = new _AdvancedCondition2.default(condition);
            break;
          default:
            this.condition = new _Condition2.default(condition.attribute, condition.operator, condition.params);
        }
      } else {
        this.condition = condition;
      }
    }
  }, {
    key: 'evaluate',
    value: function evaluate(context, message, isIncoming) {
      var field = isIncoming ? message.to : message.from;
      var hypertyName = void 0;
      switch (this.scope) {
        case 'global':
          break;

        case 'hyperty':
          if ((0, _utils.isDataObjectURL)(field)) {
            var reporter = context.runtimeRegistry.getReporterURLSynchonous((0, _utils.removePathFromURL)(field));
            if (reporter !== undefined) {
              hypertyName = context.runtimeRegistry.getHypertyName(reporter);
            }
          } else {
            if (field.split('://')[0] === 'hyperty') {
              hypertyName = context.runtimeRegistry.getHypertyName((0, _utils.removePathFromURL)(field));
            }
          }
          if (hypertyName === this.target) {
            break;
          }

          return 'Not Applicable';

        case 'identity':
          var owner = void 0;

          if ((0, _utils.isDataObjectURL)(field)) {
            var _reporter = context.runtimeRegistry.getReporterURLSynchonous((0, _utils.removePathFromURL)(field));
            owner = context.runtimeRegistry.getHypertyOwner(_reporter);
          } else {
            if (field.split('://')[0] === 'hyperty') {
              owner = context.runtimeRegistry.getHypertyOwner((0, _utils.removePathFromURL)(field));
            }
          }
          if (owner !== undefined) {
            owner = (0, _utils.getUserEmailFromURL)(owner);
          }
          if (owner === this.target) {
            break;
          }

          return 'Not Applicable';
      }

      if (this.condition.isApplicable(context, message, this.scope, this.target)) {
        return this.decision;
      } else {
        return 'Not Applicable';
      }
    }
  }]);
  return Rule;
}();

exports.default = Rule;