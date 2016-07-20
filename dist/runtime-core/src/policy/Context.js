'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    _classCallCheck(this, Context);

    if (this.constructor === Context) {
      throw new TypeError('Can not construct abstract class.');
    }
    if (this.constructor === Context.prototype.constructor) {
      throw new TypeError('Please implement abstract method constructor.');
    }
  }

  _createClass(Context, null, [{
    key: 'loadPolicies',
    value: function loadPolicies() {
      if (this === Context) {
        throw new TypeError('Can not call static abstract method loadPolicies.');
      } else if (this.loadPolicies === Context.loadPolicies) {
        throw new TypeError('Please implement static abstract method loadPolicies.');
      } else {
        throw new TypeError('Do not call static abstract method loadPolicies from child.');
      }
    }
  }, {
    key: 'addSubscriptionPolicy',
    value: function addSubscriptionPolicy() {
      if (this === Context) {
        throw new TypeError('Can not call static abstract method addSubscriptionPolicy.');
      } else if (this.addSubscriptionPolicy === Context.addSubscriptionPolicy) {
        throw new TypeError('Please implement static abstract method addSubscriptionPolicy.');
      } else {
        throw new TypeError('Do not call static abstract method addSubscriptionPolicy from child.');
      }
    }
  }, {
    key: 'isToVerify',
    value: function isToVerify() {
      if (this === Context) {
        throw new TypeError('Can not call static abstract method isToVerify.');
      } else if (this.isToVerify === Context.isToVerify) {
        throw new TypeError('Please implement static abstract method isToVerify.');
      } else {
        throw new TypeError('Do not call static abstract method isToVerify from child.');
      }
    }
  }, {
    key: 'getApplicablePolicies',
    value: function getApplicablePolicies() {
      if (this === Context) {
        throw new TypeError('Can not call static abstract method getApplicablePolicies.');
      } else if (this.getApplicablePolicies === Context.getApplicablePolicies) {
        throw new TypeError('Please implement static abstract method getApplicablePolicies.');
      } else {
        throw new TypeError('Do not call static abstract method getApplicablePolicies from child.');
      }
    }
  }, {
    key: 'applyPolicies',
    value: function applyPolicies() {
      if (this === Context) {
        throw new TypeError('Can not call static abstract method applyPolicies.');
      } else if (this.applyPolicies === Context.applyPolicies) {
        throw new TypeError('Please implement static abstract method applyPolicies.');
      } else {
        throw new TypeError('Do not call static abstract method applyPolicies from child.');
      }
    }
  }, {
    key: 'authorise',
    value: function authorise() {
      if (this === Context) {
        throw new TypeError('Can not call static abstract method authorise.');
      } else if (this.authorise === Context.authorise) {
        throw new TypeError('Please implement static abstract method authorise.');
      } else {
        throw new TypeError('Do not call static abstract method authorise from child.');
      }
    }
  }]);

  return Context;
}();

exports.default = Context;