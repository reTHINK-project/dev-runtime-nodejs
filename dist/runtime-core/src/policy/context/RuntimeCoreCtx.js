'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CommonCtx2 = require('./CommonCtx');

var _CommonCtx3 = _interopRequireDefault(_CommonCtx2);

var _Condition = require('../conditions/Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _utils = require('../../utils/utils');

var _PersistenceManager = require('service-framework/dist/PersistenceManager');

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _Rule = require('../Rule');

var _Rule2 = _interopRequireDefault(_Rule);

var _UserPolicy = require('../policies/UserPolicy');

var _UserPolicy2 = _interopRequireDefault(_UserPolicy);

var _SubscriptionCondition = require('../conditions/SubscriptionCondition');

var _SubscriptionCondition2 = _interopRequireDefault(_SubscriptionCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RuntimeCoreCtx = function (_CommonCtx) {
  _inherits(RuntimeCoreCtx, _CommonCtx);

  function RuntimeCoreCtx(idModule, runtimeRegistry) {
    _classCallCheck(this, RuntimeCoreCtx);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(RuntimeCoreCtx).call(this));

    _this2.idModule = idModule;
    _this2.runtimeRegistry = runtimeRegistry;
    _this2.activeUserPolicy = undefined;
    _this2.serviceProviderPolicies = {};
    _this2.userPolicies = {};
    return _this2;
  }

  _createClass(RuntimeCoreCtx, [{
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        console.log('--- Policy Engine ---');
        console.log(message);
        message.body = message.body || {};
        var result = void 0;
        var isToVerify = _this._isToVerify(message);
        var isIncomingMessage = _this._isIncomingMessage(message);
        var isToCypher = _this._isToCypherModule(message);
        if (isToVerify) {
          if (isIncomingMessage) {
            if (isToCypher) {
              _this.decrypt(message).then(function (message) {
                var policies = {
                  serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                  userPolicy: _this.activeUserPolicy
                };
                result = _this.policyEngine.pdp.applyPolicies(message, policies);
                _this.policyEngine.pep.enforcePolicies(message, policies, result);
                if (result === 'Not Applicable') {
                  result = _this.defaultBehavior;
                  message.body.auth = false;
                }
                if (result) {
                  var isSubscription = message.type === 'subscribe';
                  var isFromRemoteSM = _this.isFromRemoteSM(message.from);
                  if (isSubscription & isFromRemoteSM) {
                    _this.registerSubscriber(message);
                    _this.doMutualAuthentication(message);
                  }
                  message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                  resolve(message);
                } else {
                  reject('Message blocked');
                }
              }, function (error) {
                reject(error);
              });
            } else {
              var policies = {
                serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                userPolicy: _this.activeUserPolicy
              };
              result = _this.policyEngine.pdp.applyPolicies(message, policies);
              _this.policyEngine.pep.enforcePolicies(message, policies, result);
              if (result === 'Not Applicable') {
                result = _this.defaultBehavior;
                message.body.auth = false;
              }
              if (result) {
                var isSubscription = message.type === 'subscribe';
                var isFromRemoteSM = _this.isFromRemoteSM(message.from);
                if (isSubscription & isFromRemoteSM) {
                  _this.registerSubscriber(message);
                  _this.doMutualAuthentication(message);
                }
                message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                resolve(message);
              } else {
                reject('Message blocked');
              }
            }
          } else {
            var isToSetID = _this._isToSetID(message);
            if (isToSetID) {
              _this._getIdentity(message).then(function (identity) {
                message.body.identity = identity;
                var policies = {
                  serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                  userPolicy: _this.activeUserPolicy
                };
                result = _this.policyEngine.pdp.applyPolicies(message, policies);
                _this.policyEngine.pep.enforcePolicies(message, policies, result);
                if (result === 'Not Applicable') {
                  result = _this.defaultBehavior;
                  message.body.auth = false;
                }
                if (result) {
                  message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                  if (isToCypher) {
                    _this.encrypt(message).then(function (message) {
                      resolve(message);
                    }, function (error) {
                      reject(error);
                    });
                  } else {
                    resolve(message);
                  }
                } else {
                  reject('Message blocked');
                }
              }, function (error) {
                reject(error);
              });
            } else {
              var _policies = {
                serviceProviderPolicy: _this.getServiceProviderPolicy(message, isIncomingMessage),
                userPolicy: _this.activeUserPolicy
              };
              result = _this.policyEngine.pdp.applyPolicies(message, _policies);
              _this.policyEngine.pep.enforcePolicies(message, _policies, result);
              if (result === 'Not Applicable') {
                result = _this.defaultBehavior;
                message.body.auth = false;
              }
              if (result) {
                message.body.auth = message.body.auth === undefined ? true : message.body.auth;
                resolve(message);
              } else {
                reject('Message blocked');
              }
            }
          }
        } else {
          result = _this.defaultBehavior;
          message.body.auth = false;
          if (result) {
            resolve(message);
          } else {
            reject('Message blocked');
          }
        }
      });
    }
  }, {
    key: 'decrypt',
    value: function decrypt(message) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.idModule.decryptMessage(message).then(function (msg) {
          resolve(msg);
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'doMutualAuthentication',
    value: function doMutualAuthentication(message) {
      var to = message.to.split('/');
      var subsIndex = to.indexOf('subscription');
      var isDataObjectSubscription = subsIndex !== -1;
      var isFromRemoteSM = this.isFromRemoteSM(message.from);
      if (isDataObjectSubscription & isFromRemoteSM) {
        to.pop();
        var dataObjectURL = to[0] + '//' + to[2] + '/' + to[3];
        if (to.length > 4) {
          dataObjectURL = to[0] + '//' + to[2] + '/' + to[3] + '/' + to[4];
        }
        this.idModule.doMutualAuthentication(dataObjectURL, message.body.subscriber);
      }
    }
  }, {
    key: 'encrypt',
    value: function encrypt(message) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.idModule.encryptMessage(message).then(function (msg) {
          resolve(msg);
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'getMyEmails',
    value: function getMyEmails() {
      var identities = this.idModule.getIdentities();
      var emails = [];

      for (var i in identities) {
        emails.push((0, _utils.getUserEmailFromURL)(identities[i].identity));
      }

      return emails;
    }
  }, {
    key: 'getMyHyperties',
    value: function getMyHyperties() {
      var hyperties = this.runtimeRegistry.hypertiesList;
      var hypertiesNames = [];

      for (var i in hyperties) {
        var hypertyName = hyperties[i].objectName;
        if (hypertiesNames.indexOf(hypertyName) === -1) {
          hypertiesNames.push(hypertyName);
        }
      }

      return hypertiesNames;
    }
  }, {
    key: 'getServiceProviderPolicy',
    value: function getServiceProviderPolicy(message, isIncoming) {
      var policy = void 0;

      if (isIncoming) {
        var toHyperty = this.runtimeRegistry.getHypertyName(message.to);
        policy = this.serviceProviderPolicies[toHyperty];
      } else {
        var fromHyperty = this.runtimeRegistry.getHypertyName(message.from);
        policy = this.serviceProviderPolicies[fromHyperty];
      }
      return policy;
    }
  }, {
    key: 'isFromRemoteSM',
    value: function isFromRemoteSM(from) {
      var splitFrom = from.split('://');
      return splitFrom[0] === 'runtime' && from !== this.runtimeRegistry.runtimeURL + '/sm';
    }
  }, {
    key: '_isToSetID',
    value: function _isToSetID(message) {
      var schemasToIgnore = ['domain-idp', 'runtime', 'domain'];
      var splitFrom = message.from.split('://');
      var fromSchema = splitFrom[0];

      return schemasToIgnore.indexOf(fromSchema) === -1;
    }
  }, {
    key: '_isIncomingMessage',
    value: function _isIncomingMessage(message) {
      return message.body.identity ? true : false;
    }
  }, {
    key: 'getURL',
    value: function getURL(url) {
      var splitURL = url.split('/');
      return splitURL[0] + '//' + splitURL[2] + '/' + splitURL[3];
    }
  }, {
    key: '_getIdentity',
    value: function _getIdentity(message) {
      if (message.type === 'update') {
        return this.idModule.getIdentityOfHyperty(message.body.source);
      }

      if (message.type === 'response' && message.body.source !== undefined) {
        return this.idModule.getIdentityOfHyperty(message.body.source);
      }

      if ((0, _utils.divideURL)(message.from).type === 'hyperty') {
        return this.idModule.getIdentityOfHyperty(message.from);
      } else {
        return this.idModule.getIdentityOfHyperty(this.getURL(message.from));
      }
    }
  }, {
    key: '_isToVerify',
    value: function _isToVerify(message) {
      var schemasToIgnore = ['domain-idp', 'hyperty-runtime', 'runtime', 'domain'];
      var splitFrom = message.from.split('://');
      var fromSchema = splitFrom[0];
      var splitTo = message.to.split('://');
      var toSchema = splitTo[0];
      if (fromSchema === message.from || toSchema === message.to) {
        return false;
      }
      return schemasToIgnore.indexOf(fromSchema) === -1 || schemasToIgnore.indexOf(toSchema) === -1;
    }

    //TODO use schemasToIgnore instead

  }, {
    key: '_isToCypherModule',
    value: function _isToCypherModule(message) {
      var isCreate = message.type === 'create';
      var isFromHyperty = (0, _utils.divideURL)(message.from).type === 'hyperty';
      var isToHyperty = (0, _utils.divideURL)(message.to).type === 'hyperty';
      var isToDataObject = (0, _utils.isDataObjectURL)(message.to);
      var isHandshake = message.type === 'handshake';

      return isCreate && isFromHyperty && isToHyperty || isCreate && isFromHyperty && isToDataObject || isHandshake;
    }
  }, {
    key: 'loadActivePolicy',
    value: function loadActivePolicy() {
      this.activeUserPolicy = _PersistenceManager2.default.get('rethink:activePolicy');
    }
  }, {
    key: 'loadGroups',
    value: function loadGroups() {
      var groups = _PersistenceManager2.default.get('rethink:groups');
      if (groups != undefined) {
        this.groups = groups;
      }
    }
  }, {
    key: 'loadSPPolicies',
    value: function loadSPPolicies() {
      var policies = _PersistenceManager2.default.get('rethink:spPolicies');
      if (policies !== undefined) {
        this.serviceProviderPolicies = policies;
      }
    }
  }, {
    key: 'loadUserPolicies',
    value: function loadUserPolicies() {
      var policies = _PersistenceManager2.default.get('rethink:userPolicies');

      if (policies !== undefined) {
        for (var i in policies) {
          var rulesPE = [];
          var rules = policies[i].rules;
          for (var j in rules) {
            var condition = void 0;
            if (rules[j].condition.attribute === 'subscription') {
              condition = new _SubscriptionCondition2.default(rules[j].condition.attribute, rules[j].condition.operator, rules[j].condition.params);
            } else {
              condition = new _Condition2.default(rules[j].condition.attribute, rules[j].condition.operator, rules[j].condition.params);
            }
            rulesPE.push(new _Rule2.default(rules[j].authorise, condition, rules[j].priority, rules[j].scope, rules[j].target));
          }
          this.userPolicies[i] = new _UserPolicy2.default(policies[i].key, rulesPE, policies[i].actions, policies[i].combiningAlgorithm);
        }
      }
    }
  }, {
    key: 'registerSubscriber',
    value: function registerSubscriber(message) {
      var to = message.to.split('/');
      var subsIndex = to.indexOf('subscription');
      var isDataObjectSubscription = subsIndex !== -1;
      var isFromRemoteSM = this.isFromRemoteSM(message.from);

      if (isDataObjectSubscription & isFromRemoteSM) {
        to.pop();
        var dataObjectURL = to[0] + '//' + to[2] + '/' + to[3];
        if (to.length > 4) {
          dataObjectURL = to[0] + '//' + to[2] + '/' + to[3] + '/' + to[4];
        }
        this.runtimeRegistry.registerSubscriber(dataObjectURL, message.body.subscriber);
      }
    }
  }, {
    key: '_getLastComponentOfURL',
    value: function _getLastComponentOfURL(url) {
      var split = url.split('/');
      return split[split.length - 1];
    }
  }, {
    key: 'saveActivePolicy',
    value: function saveActivePolicy() {
      _PersistenceManager2.default.set('rethink:activePolicy', 0, this.activeUserPolicy);
    }
  }, {
    key: 'saveGroups',
    value: function saveGroups() {
      _PersistenceManager2.default.set('rethink:groups', 0, this.groups);
    }
  }, {
    key: 'savePolicies',
    value: function savePolicies(source) {
      switch (source) {
        case 'USER':
          _PersistenceManager2.default.set('rethink:userPolicies', 0, this.userPolicies);
          break;
        case 'SERVICE_PROVIDER':
          _PersistenceManager2.default.set('rethink:spPolicies', 0, this.serviceProviderPolicies);
          break;
      }
    }
  }, {
    key: 'dataObjectScheme',
    get: function get() {
      return this._dataObjectScheme;
    },
    set: function set(params) {
      var from = params.message.from;
      if ((0, _utils.isDataObjectURL)(from)) {
        this._dataObjectScheme = (0, _utils.divideURL)(from).type;
      } else {
        this._dataObjectScheme = undefined;
      }
    }
  }, {
    key: 'subscription',
    get: function get() {
      return this._subscription;
    },
    set: function set(params) {
      this._subscription = params.message.body.subscriber;
    }
  }]);

  return RuntimeCoreCtx;
}(_CommonCtx3.default);

exports.default = RuntimeCoreCtx;