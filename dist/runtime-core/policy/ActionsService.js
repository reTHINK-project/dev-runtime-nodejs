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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionsService = function () {
  function ActionsService(context) {
    (0, _classCallCheck3.default)(this, ActionsService);

    this.context = context;
  }

  (0, _createClass3.default)(ActionsService, [{
    key: 'enforcePolicies',
    value: function enforcePolicies(message, isIncomingMessage) {
      var _this = this;
      return new _promise2.default(function (resolve, reject) {

        var policies = _this.context.getPolicies(message, isIncomingMessage);

        if (policies !== undefined) {
          if (policies.serviceProviderPolicy !== undefined) {
            policies.serviceProviderPolicy.enforceActions(_this.context, message).then(function (messages) {
              resolve(messages);
            }, function (error) {
              reject(error);
            });
          } else {
            if (policies.userPolicy !== undefined) {
              policies.userPolicy.enforceActions(_this.context, message).then(function (messages) {
                resolve(messages);
              }, function (error) {
                reject(error);
              });
            } else {
              resolve([message]);
            }
          }
        } else {
          resolve([message]);
        }
      });
    }
  }, {
    key: 'forwardToID',
    value: function forwardToID(message, email) {
      var _this = this;
      if (!_this.context.runtimeRegistry) throw new Error('forward message to given ID is unsupported in this environment');

      return new _promise2.default(function (resolve, reject) {
        if (_this.context.runtimeRegistry.hypertiesList[0].hypertyURL === message.to) {
          var splitTo = message.to.split('://');
          if (splitTo[0] !== 'runtime') {
            _this.context.runtimeRegistry.discoverHypertyPerUser(email).then(function (result) {
              message.to = result.hypertyURL;
              message.body.via = undefined;
              resolve(message);
              _this.context.runtimeRegistry._messageBus.postMessage(message);
            }, function (error) {
              reject(error);
            });
          } else {
            resolve(message);
          }
        } else {
          resolve(message);
        }
      });
    }
  }, {
    key: 'forwardToHyperty',
    value: function forwardToHyperty(message, hypertyURL) {
      var _this = this;
      if (!_this.context.runtimeRegistry) throw new Error('forward message to given ID is unsupported in this environment');

      return new _promise2.default(function (resolve) {
        if (_this.context.runtimeRegistry.hypertiesList[0].hypertyURL === message.to) {
          var splitTo = message.to.split('://');
          if (splitTo[0] !== 'runtime') {
            message.to = hypertyURL;
            message.body.via = undefined;
            resolve(message);
            _this.context.runtimeRegistry._messageBus.postMessage(message);
          } else {
            resolve(message);
          }
        } else {
          resolve(message);
        }
      });
    }
  }, {
    key: 'sendAutomaticMessage',
    value: function sendAutomaticMessage(message, text) {
      var _this = this;
      return new _promise2.default(function (resolve) {
        var automaticMessage = {
          from: message.to,
          to: message.from,
          body: {
            value: text
          },
          type: message.type
        };
        resolve(message);
        _this.context.runtimeRegistry._messageBus.postMessage(automaticMessage);
      });
    }
  }]);
  return ActionsService;
}();

exports.default = ActionsService;