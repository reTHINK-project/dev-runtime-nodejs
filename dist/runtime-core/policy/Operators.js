'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Operators = function () {
  function Operators() {
    _classCallCheck(this, Operators);
  }

  _createClass(Operators, [{
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