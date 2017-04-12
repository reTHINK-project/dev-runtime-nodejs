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

var _ActionsService = require('./ActionsService');

var _ActionsService2 = _interopRequireDefault(_ActionsService);

var _PDP = require('./PDP');

var _PDP2 = _interopRequireDefault(_PDP);

var _Policy = require('./Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PEP = function () {

  /**
  * Creates a Policy Enforcement Point (PEP) instance
  * @param    {Object}    context
  */
  function PEP(context) {
    (0, _classCallCheck3.default)(this, PEP);

    var _this = this;

    _this.pdp = new _PDP2.default(context);
    _this.actionsService = new _ActionsService2.default(context);
    _this.context = context;
    context.pep = _this;

    //TODO should be added a trigger to verify when the loadConfigurations is successfully completed
    context.loadConfigurations();
  }

  /**
  * Adds a policy to the Policy Enforcement Point (PEP). The policy can be created by the service
  * provider or by the user.
  * @param    {String}    source
  * @param    {String}    key
  * @param    {Object}    policy
  */


  (0, _createClass3.default)(PEP, [{
    key: 'addPolicy',
    value: function addPolicy(source, key, policy, combiningAlgorithm) {
      if (!source) throw new Error('source is not defined');
      if (!key) throw new Error('key is not defined');

      if (policy === undefined) {
        policy = new _Policy2.default(key, [], [], combiningAlgorithm);
      } else {
        if (!(policy instanceof _Policy2.default)) {
          policy = new _Policy2.default(policy.key, policy.rules, policy.actions, policy.combiningAlgorithm);
        }
      }

      switch (source) {
        case 'SERVICE_PROVIDER':
          this.context.savePolicies(source, policy, key);
          break;
        case 'USER':
          this.context.userPolicies[key] = policy;
          this.context.savePolicies(source);
          break;
        default:
          throw Error('Unknown policy source: ' + source);
      }
    }
  }, {
    key: 'authorise',
    value: function authorise(message) {
      var _this2 = this;

      console.log('[Policy.PEP Authorise] ', message);
      console.log(message);
      if (!message) throw new Error('message is not defined');
      if (!message.from) throw new Error('message.from is not defined');
      if (!message.to) throw new Error('message.to is not defined');
      if (!message.type) throw new Error('message.type is not defined');
      message.body = message.body || {};

      return new _promise2.default(function (resolve, reject) {

        message.body = message.body || {};
        var _this = _this2;
        var result = void 0;
        if (_this._isToVerify(message)) {
          var isIncoming = _this._isIncomingMessage(message);
          _this.context.prepareForEvaluation(message, isIncoming).then(function (message) {
            result = _this.pdp.evaluatePolicies(message, isIncoming);
            if (result === 'Not Applicable') {
              result = _this.context.defaultBehaviour;
              message.body.auth = false;
            }
            _this.actionsService.enforcePolicies(message, isIncoming).then(function (messages) {
              for (var i in messages) {
                message = messages[i];
                _this.context.prepareToForward(message, isIncoming, result).then(function (message) {
                  if (result) {
                    message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                    resolve(message);
                  } else {
                    var errorMessage = { body: { code: 403, description: 'Blocked by policy' }, from: message.to, to: message.from, type: 'response' };
                    reject(errorMessage);
                  }
                }, function (error) {
                  reject(error);
                });
              }
            }, function (error) {
              reject(error);
            });
          }, function (error) {
            reject(error);
          });
        } else {
          result = _this.context.defaultBehaviour;
          if (result) {
            message.body.auth = false;
            resolve(message);
          } else {
            var errorMessage = { body: { code: 403, description: 'Blocked by policy' }, from: message.to, to: message.from, type: 'response' };
            reject(errorMessage);
          }
        }
      });
    }
  }, {
    key: 'authoriseSync',
    value: function authoriseSync(message) {
      var result = void 0;
      message.body = message.body || {};
      if (this._isToVerify(message)) {
        var isIncoming = this._isIncomingMessage(message);
        message = this.context.prepareForEvaluation(message, isIncoming);
        result = this.pdp.evaluatePolicies(message, isIncoming);
        if (result === 'Not Applicable') {
          result = this.context.defaultBehaviour;
          message.body.auth = false;
        }
        this.actionsService.enforcePolicies(message, isIncoming);
        message = this.context.prepareToForward(message, isIncoming, result);
        if (result) {
          message.body.auth = message.body.auth === undefined ? true : message.body.auth;
          return true;
        } else {
          return false;
        }
      } else {
        result = this.context.defaultBehaviour;
        if (result) {
          message.body.auth = false;
          return true;
        } else {
          return false;
        }
      }
    }
  }, {
    key: '_isIncomingMessage',
    value: function _isIncomingMessage(message) {
      var from = void 0;

      if (message.type === 'forward') {
        console.info('[PEP - isIncomingMessage] - message.type: ', message.type);
        from = message.body.from;
      } else if (message.body.hasOwnProperty('source') && message.body.source) {
        console.info('[PEP - isIncomingMessage] - message.body.source: ', message.body.source);
        from = message.body.source;
      } else if (message.body.hasOwnProperty('subscriber') && message.body.subscriber) {
        //TODO: this subscriber validation should not exist, because is outdated
        //TODO: the syncher and syncher manager not following the correct spec;
        console.info('[PEP - isIncomingMessage] - message.body.subscriber: ', message.body.subscriber);
        from = message.body.subscriber;
      } else if (message.body.hasOwnProperty('reporter') && message.body.reporter) {
        //TODO: this subscriber validation should not exist, because is outdated
        //TODO: the syncher and syncher manager not following the correct spec;
        console.info('[PEP - isIncomingMessage] - message.body.reporter: ', message.body.reporter);
        from = message.body.reporter;
      } else {
        console.info('[PEP - isIncomingMessage] - message.from ', message.from);
        from = message.from;
      }

      console.info('[PEP - isIncomingMessage] - check if isLocal: ', from);
      return !this.context.isLocal(from);
    }

    /**
    * Identifies the messages to be verified by the Policy Engine
    * @param    {Message}   message
    * @returns  {boolean}   returns true if the message requires encryption/decryption
    *                       or if its type equals 'handshake'; false otherwise
    */

  }, {
    key: '_isToVerify',
    value: function _isToVerify(message) {
      var schemasToIgnore = ['domain', 'domain-idp', 'global', 'hyperty-runtime', 'runtime'];
      var splitFrom = message.from.split('://');
      var fromSchema = splitFrom[0];
      var splitTo = message.to.split('://');
      var toSchema = splitTo[0];
      var from = message.from;
      var to = message.to;

      // Signalling messages between P2P Stubs don't have to be verified. FFS

      if (message.body && message.body.source) {
        from = message.body.source;
      }

      if (message.body && message.body.subscriber) {
        from = message.body.subscriber;
      }

      if (from.indexOf('/p2phandler/') !== -1 || from.indexOf('/p2prequester/') !== -1 || to.indexOf('/p2phandler/') !== -1 || to.indexOf('/p2prequester/') !== -1) {
        return false;
      }

      // hack to disable Identity verification for messages coming from legacy domains while solution is not implemented

      if (this.context.isInterworkingProtoStub(from)) {
        return false;
      }

      if (message.from === fromSchema || message.to === toSchema || message.type === 'read' || message.type === 'response' || (0, _utils.isHypertyURL)(message.from) && message.type === 'delete') {
        return false;
      } else {
        return schemasToIgnore.indexOf(fromSchema) === -1 || schemasToIgnore.indexOf(toSchema) === -1;
      }
    }
  }, {
    key: 'removePolicy',
    value: function removePolicy(source, key) {
      if (!source) throw new Error('source is not defined');
      if (source !== '*' && !key) throw new Error('key is not defined');

      switch (source) {
        case '*':
          this.context.serviceProviderPolicy = {};
          this.context.userPolicies = {};
          this.context.activeUserPolicy = undefined;
          this.context.savePolicies('USER');
          this.context.savePolicies('SERVICE_PROVIDER');
          this.context.saveActivePolicy();
          break;
        case 'SERVICE_PROVIDER':
          delete this.context.serviceProviderPolicy[key];
          this.context.savePolicies();
          break;
        case 'USER':
          delete this.context.userPolicies[key];
          if (key === this.context.activeUserPolicy) {
            this.context.activeUserPolicy = undefined;
            this.context.saveActivePolicy();
          }
          this.context.savePolicies('USER');
          break;
        default:
          throw Error('Unknown policy source: ' + source);
      }
    }
  }]);
  return PEP;
}();

exports.default = PEP;