'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CommonCtx2 = require('./CommonCtx');

var _CommonCtx3 = _interopRequireDefault(_CommonCtx2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageNodeCtx = function (_CommonCtx) {
  _inherits(MessageNodeCtx, _CommonCtx);

  function MessageNodeCtx() {
    _classCallCheck(this, MessageNodeCtx);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MessageNodeCtx).call(this));
  }

  _createClass(MessageNodeCtx, [{
    key: 'loadPolicies',
    value: function loadPolicies() {
      return {};
    }

    /**
    * Returns the policies associated with a scope.
    * @param   {String} scope
    * @return  {Array}  policies
    */

    //TODO: can policies depend on the hyperty name? Domain Registry interaction

  }, {
    key: 'getApplicablePolicies',
    value: function getApplicablePolicies() {
      var _this = this;
      var myPolicies = _this.policies;
      var policies = [];

      for (var i in myPolicies) {
        policies.push.apply(policies, myPolicies[i]);
      }

      return policies;
    }
  }, {
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;
      message.body = message.body || {};
      var result = void 0;

      var isToVerify = _this.isToVerify(message);
      if (isToVerify) {

        result = _this.applyPolicies(message);
        var messageAccepted = result.policiesResult[0];
        return messageAccepted;
      } else {
        return true;
      }
    }

    //TODO: verify if scheme is not 'runtime', 'hyperty-runtime' or 'domain'

  }, {
    key: 'isToVerify',
    value: function isToVerify() {
      return true;
    }
  }, {
    key: 'group',
    set: function set(params) {
      var _this = this;
      _this.groupAttribute = _this._getList(params.scope, params.group);
    },
    get: function get() {
      var _this = this;
      return _this.groupAttribute;
    }
  }]);

  return MessageNodeCtx;
}(_CommonCtx3.default);

exports.default = MessageNodeCtx;