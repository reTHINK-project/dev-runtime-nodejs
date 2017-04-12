'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Operators = function () {
  function Operators() {
    (0, _classCallCheck3.default)(this, Operators);
  }

  (0, _createClass3.default)(Operators, [{
    key: 'and',
    value: function and(params) {
      return params[0] && params[1];
    }
  }, {
    key: 'between',
    value: function between(params) {
      var start = parseInt(params[0][0]);
      var end = parseInt(params[0][1]);
      var now = params[1];

      if (end < start) {
        now = now < start ? now += 2400 : now;
        end += 2400;
      }

      return now > start && now < end;
    }
  }, {
    key: 'equals',
    value: function equals(params) {
      return String(params[0]) === '*' || String(params[0]) === String(params[1]);
    }
  }, {
    key: 'greaterThan',
    value: function greaterThan(params) {
      return params[1] > params[0];
    }
  }, {
    key: 'in',
    value: function _in(params) {
      return params[0].indexOf(params[1]) > -1;
    }
  }, {
    key: 'lessThan',
    value: function lessThan(params) {
      return params[1] < params[0];
    }
  }, {
    key: 'not',
    value: function not(params) {
      return !params[0];
    }
  }, {
    key: 'or',
    value: function or(params) {
      return params[0] || params[1];
    }
  }]);
  return Operators;
}();

exports.default = Operators;