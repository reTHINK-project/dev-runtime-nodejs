'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Operators = function () {
  function Operators() {
    _classCallCheck(this, Operators);

    var _this = this;
    _this.operators = _this.setOperators();
  }

  _createClass(Operators, [{
    key: 'setOperators',
    value: function setOperators() {
      var _this = this;
      var operators = {
        between: function between(params) {
          return _this.isBetween(params[0][0], params[0][1], params[1]);
        },
        in: function _in(params) {
          return params[0].indexOf(params[1]) > -1;
        },
        equals: function equals(params) {
          return params[0][0] === '*' || params[0][0] === params[1];
        },

        or: function or(params) {
          return params[0] || params[1];
        },
        and: function and(params) {
          return params[0] && params[1];
        },
        not: function not(params) {
          return !params[0];
        }
      };
      return operators;
    }

    /**
    * Verifies if the current time is between the given start and end times.
    * @param {Number}     start
    * @param {Number}     end
    * @return {Boolean}   boolean
    */

  }, {
    key: 'isBetween',
    value: function isBetween(start, end, now) {
      start = parseInt(start);
      end = parseInt(end);

      if (end < start) {
        now = now < start ? now += 2400 : now;
        end += 2400;
      }

      return now > start && now < end;
    }
  }]);

  return Operators;
}();

exports.default = Operators;