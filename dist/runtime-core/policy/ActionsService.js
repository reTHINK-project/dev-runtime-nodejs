'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionsService = function () {
  function ActionsService(context) {
    _classCallCheck(this, ActionsService);

    this.context = context;
  }

  _createClass(ActionsService, [{
    key: 'enforcePolicies',
    value: function enforcePolicies(message, isIncomingMessage) {
      var _this = this;
      return new Promise(function (resolve, reject) {

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

      return new Promise(function (resolve, reject) {
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

      return new Promise(function (resolve) {
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
      return new Promise(function (resolve) {
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