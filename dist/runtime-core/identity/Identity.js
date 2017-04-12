'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The Identity Data Model is used to model the reTHINK User entity. The Identity data model is handled by Identity Management functionality.
*
*/
var Identity = function () {
  function Identity(guid, type) {
    (0, _classCallCheck3.default)(this, Identity);

    var _this = this;

    _this.guid = guid;
    _this.type = type;
    _this.identifiersList = {};
  }

  (0, _createClass3.default)(Identity, [{
    key: 'addIdentity',
    value: function addIdentity(identifier) {
      var _this = this;
      var identityInformation = {
        idAssertion: '',
        serviceAddress: '',
        authenticationData: '',
        authorisationData: '',
        userProfile: ''
      };
      _this.identifiersList[identifier] = identityInformation;
    }
  }, {
    key: 'addIdAssertion',
    value: function addIdAssertion(identifier, assertion, idp, scope) {
      var _this = this;

      var newIdAssertion = new IdAssertion(assertion, idp, scope);

      _this.idAssertionList.push(newIdAssertion);
    }
  }]);
  return Identity;
}();

var IdAssertion = function IdAssertion(assertion, idp, scope) {
  (0, _classCallCheck3.default)(this, IdAssertion);

  var _this = this;

  _this.assertion = assertion;
  _this.idp = idp;
  _this.scope = scope;
};

var IdValidation = function () {
  function IdValidation(identity, contents) {
    (0, _classCallCheck3.default)(this, IdValidation);

    var _this = this;
    _this.identity = identity;
    _this.contents = contents;
  }

  (0, _createClass3.default)(IdValidation, [{
    key: 'validates',
    value: function validates(identity, contents) {
      //TODO implement the logic

    }
  }]);
  return IdValidation;
}();

exports.default = Identity;