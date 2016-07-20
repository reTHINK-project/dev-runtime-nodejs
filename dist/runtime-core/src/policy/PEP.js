"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PEP = function () {
  function PEP(context) {
    _classCallCheck(this, PEP);

    var _this = this;
    _this.context = context;
  }

  _createClass(PEP, [{
    key: "enforce",
    value: function enforce(result) {
      var _this = this;
      var authDecision = result[0];
      var actions = result[1];

      for (var i in actions) {
        _this.context[actions[i].method](actions[i].params, authDecision);
      }
    }

    /*sendAutomaticMessage() {}
     forwardToID() {}
     forwardToHyperty() {}*/

  }]);

  return PEP;
}();

exports.default = PEP;