'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AllowOverrides = require('./combiningAlgorithms/AllowOverrides');

var _AllowOverrides2 = _interopRequireDefault(_AllowOverrides);

var _BlockOverrides = require('./combiningAlgorithms/BlockOverrides');

var _BlockOverrides2 = _interopRequireDefault(_BlockOverrides);

var _FirstApplicable = require('./combiningAlgorithms/FirstApplicable');

var _FirstApplicable2 = _interopRequireDefault(_FirstApplicable);

var _Rule = require('./Rule');

var _Rule2 = _interopRequireDefault(_Rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Policy = function () {
  function Policy(key, rules, actions, combiningAlgorithm) {
    _classCallCheck(this, Policy);

    if (!key) throw new Error('key is not defined');
    if (!actions) throw new Error('actions are not defined');

    this.actions = actions;
    this.key = key;
    this._setRules(rules);
    this._setCombiningAlgorithm(combiningAlgorithm);
  }

  _createClass(Policy, [{
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

      return new Promise(function (resolve, reject) {
        var results = [];
        if (_this.actions.length !== 0) {
          for (var i in _this.actions) {
            var result = context.pep.actionsService[_this.actions[i].method](message, _this.actions[i].param);
            results.push(result);
          }
          Promise.all(results).then(function (messages) {
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