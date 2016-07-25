'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Identity Data Model is used to model the reTHINK User entity. The Identity data model is handled by Identity Management functionality.
*
*/
var Identity = function () {
  function Identity(guid, type) {
    _classCallCheck(this, Identity);

    var _this = this;

    _this.guid = guid;
    _this.type = type;
    _this.identifiersList = {};
  }

  _createClass(Identity, [{
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
  _classCallCheck(this, IdAssertion);

  var _this = this;

  _this.assertion = assertion;
  _this.idp = idp;
  _this.scope = scope;
};

var IdValidation = function () {
  function IdValidation(identity, contents) {
    _classCallCheck(this, IdValidation);

    var _this = this;
    _this.identity = identity;
    _this.contents = contents;
  }

  _createClass(IdValidation, [{
    key: 'validates',
    value: function validates(identity, contents) {
      //TODO implement the logic

    }
  }]);

  return IdValidation;
}();

exports.default = Identity;