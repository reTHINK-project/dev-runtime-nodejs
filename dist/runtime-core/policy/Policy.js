'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _AllowOverrides = require('./combiningAlgorithms/AllowOverrides');

var _AllowOverrides2 = _interopRequireDefault(_AllowOverrides);

var _BlockOverrides = require('./combiningAlgorithms/BlockOverrides');

var _BlockOverrides2 = _interopRequireDefault(_BlockOverrides);

var _FirstApplicable = require('./combiningAlgorithms/FirstApplicable');

var _FirstApplicable2 = _interopRequireDefault(_FirstApplicable);

var _Rule = require('./Rule');

var _Rule2 = _interopRequireDefault(_Rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Policy = function () {
  function Policy(key, rules, actions, combiningAlgorithm) {
    (0, _classCallCheck3.default)(this, Policy);

    if (!key) throw new Error('key is not defined');
    if (!actions) throw new Error('actions are not defined');

    this.actions = actions;
    this.key = key;
    this._setRules(rules);
    this._setCombiningAlgorithm(combiningAlgorithm);
  }

  (0, _createClass3.default)(Policy, [{
    key: 'addAction',
    value: function addAction(method, param) {
      this.actions.push({ method: method, param: param });
    }
  }, {
    key: 'createRule',
    value: function createRule(decision, condition, scope, target, priority) {
      if (priority === undefined) {
        priority = this.getLastPriority() + 1;
      }
      var rule = new _Rule2.default(decision, condition, scope, target, priority);
      this.rules.push(rule);
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(rule) {
      var indexToRemove = this.rules.indexOf(rule);
      this.rules.splice(indexToRemove, 1);
    }
  }, {
    key: 'enforceActions',
    value: function enforceActions(context, message) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var results = [];
        if (_this.actions.length !== 0) {
          for (var i in _this.actions) {
            var result = context.pep.actionsService[_this.actions[i].method](message, _this.actions[i].param);
            results.push(result);
          }
          _promise2.default.all(results).then(function (messages) {
            resolve(messages);
          }, function (error) {
            reject(error);
          });
        } else {
          resolve([message]);
        }
      });
    }
  }, {
    key: 'evaluateRules',
    value: function evaluateRules(context, message, isIncoming) {
      var results = [];
      for (var i in this.rules) {
        results.push(this.rules[i].evaluate(context, message, isIncoming));
      }

      return this.combiningAlgorithm.combine(results);
    }
  }, {
    key: 'getLastPriority',
    value: function getLastPriority() {
      var priorities = [];

      if (this.rules.length !== 0) {
        for (var i in this.rules) {
          priorities.push(this.rules[i].priority);
        }
        return Math.max.apply(Math, priorities);
      } else {
        return -1;
      }
    }
  }, {
    key: 'getRuleByPriority',
    value: function getRuleByPriority(priority) {
      for (var i in this.rules) {
        if (String(this.rules[i].priority) === String(priority)) {
          return this.rules[i];
        }
      }
      throw Error('Rule with priority ' + priority + ' does not exist!');
    }
  }, {
    key: '_setCombiningAlgorithm',
    value: function _setCombiningAlgorithm(combiningAlgorithm) {
      if (!combiningAlgorithm) {
        combiningAlgorithm = 'blockOverrides';
      }
      switch (combiningAlgorithm) {
        case 'blockOverrides':
          this.combiningAlgorithm = new _BlockOverrides2.default();
          break;
        case 'allowOverrides':
          this.combiningAlgorithm = new _AllowOverrides2.default();
          break;
        case 'firstApplicable':
          this.combiningAlgorithm = new _FirstApplicable2.default();
          break;
        default:
          throw Error('Unknown algorithm: ' + combiningAlgorithm);
      }
    }
  }, {
    key: '_setRules',
    value: function _setRules(rules) {
      this.rules = [];

      for (var i in rules) {
        var rule = rules[i];
        if (rule.priority === undefined) {
          rule.priority = this.getLastPriority() + 1;
        }
        if (!(rule instanceof _Rule2.default)) {
          rule = new _Rule2.default(rule.decision, rule.condition, rule.scope, rule.target, rule.priority);
        }
        this.rules.push(rule);
      }
    }
  }, {
    key: 'sortRules',
    value: function sortRules() {
      return this.rules.sort(function (a, b) {
        var x = a.priority;var y = b.priority;
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
  }]);
  return Policy;
}();

exports.default = Policy;