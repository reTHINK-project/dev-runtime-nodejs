'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function() {
  function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
    } } return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
  };
}();

var _CommonCtx2 = require('./CommonCtx');

var _CommonCtx3 = _interopRequireDefault(_CommonCtx2);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) {
  if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RuntimeCoreCtx = function(_CommonCtx) {
  _inherits(RuntimeCoreCtx, _CommonCtx);

  function RuntimeCoreCtx(idModule, runtimeRegistry) {
    _classCallCheck(this, RuntimeCoreCtx);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(RuntimeCoreCtx).call(this));

    var _this = _this2;
    _this.idModule = idModule;
    _this.runtimeRegistry = runtimeRegistry;
    return _this2;
  }

  _createClass(RuntimeCoreCtx, [{
    key: 'loadPolicies',
    value: function loadPolicies() {
      var _this = this;

      if (!_this.subsPolicies) {
        var policy = {
          scope: 'global',
          condition: 'subscription equals *',
          authorise: true,
          actions: [{ method: 'registerSubscriber' }, { method: 'doMutualAuthentication' }]
        };
        _this.subsPolicies = {};
        _this.subsPolicies[policy.scope] = policy;
      }

      return {};
    }
  }, {
    key: '_isFromRemoteSM',
    value: function _isFromRemoteSM(from) {
      var _this = this;
      var splitFrom = from.split('://');
      return splitFrom[0] === 'runtime' && from !== _this.runtimeRegistry.runtimeURL + '/sm';
    }

    /**
    * Returns the policies associated with a scope.
    * @param   {String} scope
    * @return  {Array}  policies
    */

  }, {
    key: 'getApplicablePolicies',
    value: function getApplicablePolicies(message) {
      var _this = this;
      var myPolicies = _this.policies;
      var policies = [];

      if (message.type === 'subscribe' && _this._isFromRemoteSM(message.from)) {
        var dataObject = message.body.resource;
        if (_this.subsPolicies[dataObject]) {
          policies.push(_this.subsPolicies[dataObject]);
        } else {
          var hypertyName = _this.runtimeRegistry.getHypertyName(_this._getURL(message.to));
          if (_this.subsPolicies[hypertyName]) {
            policies.push(_this.subsPolicies[hypertyName]);
          } else {
            //TODO: change name
            var hyperty = _this.runtimeRegistry.getReporterURLSynchonous(_this._getURL(message.to));
            var owner = _this.runtimeRegistry.getHypertyOwner(hyperty);
            if (_this.subsPolicies[owner]) {
              policies.push(_this.subsPolicies[owner]);
            } else {
              policies.push(_this.subsPolicies.global);
            }
          }
        }
      }
      /*let id = message.body.identity.userProfile.username;
      let hypertyName = _this.runtimeRegistry.getHypertyName(message.from);
       if (myPolicies[id] !== undefined) {
        policies.push.apply(policies, myPolicies[id]);
      }
       if (myPolicies[hypertyName] !== undefined) {
        policies.push.apply(policies, myPolicies[hypertyName]);
      }
       if (myPolicies.global !== undefined) {
        policies.push.apply(policies, myPolicies.global);
      }*/

      for (var i in myPolicies) {
        policies.push.apply(policies, myPolicies[i]);
      }

      return policies;
    }
  }, {
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;

      return new Promise(function(resolve, reject) {
        console.log('--- Policy Engine ---');
        console.log(message);
        message.body = message.body || {};
        var result = void 0;
        var isToVerify = _this.isToVerify(message);
        var isIncomingMessage = _this._isIncomingMessage(message);
        var isToCypher = _this._isToCypherModule(message);
        if (isToVerify) {
          if (isIncomingMessage) {
            if (isToCypher) {
              _this.decrypt(message).then(function(message) {
                result = _this.applyPolicies(message);
                var messageAccepted = result.policiesResult[0];
                message = result.message;
                if (messageAccepted) {
                  resolve(message);
                } else {
                  reject('Message blocked');
                }
              }, function(error) {
                reject(error);
              });
            } else {
              result = _this.applyPolicies(message);
              var messageAccepted = result.policiesResult[0];
              message = result.message;
              if (messageAccepted) {
                resolve(message);
              } else {
                reject('Message blocked');
              }
            }
          } else {
            var isToSetID = _this._isToSetID(message);
            if (isToSetID) {
              _this.getIdentity(message).then(function(identity) {
                message.body.identity = identity;
                result = _this.applyPolicies(message);
                var messageAccepted = result.policiesResult[0];
                message = result.message;
                if (messageAccepted) {
                  if (isToCypher) {
                    _this.encrypt(message).then(function(message) {
                      resolve(message);
                    }, function(error) {
                      reject(error);
                    });
                  } else {
                    resolve(message);
                  }
                } else {
                  reject('Message blocked');
                }
              }, function(error) {
                reject(error);
              });
            } else {
              result = _this.applyPolicies(message);
              var _messageAccepted = result.policiesResult[0];
              message = result.message;
              if (_messageAccepted) {
                resolve(message);
              } else {
                reject('Message blocked');
              }
            }
          }
        } else {
          resolve(message);
        }
      });
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
    key: '_getURL',
    value: function _getURL(url) {
      var splitURL = url.split('/');
      return splitURL[0] + '//' + splitURL[2] + '/' + splitURL[3];
    }

    //TODO: verify if is hyperty or data object

  }, {
    key: 'getIdentity',
    value: function getIdentity(message) {
      var _this = this;

      if (message.type === 'update') {
        return _this.idModule.getIdentityOfHyperty(message.body.source);
      }

      if (message.type === 'response' && message.body.source !== undefined) {
        return _this.idModule.getIdentityOfHyperty(message.body.source);
      }

      var from = _this._getURL(message.from);
      return _this.idModule.getIdentityOfHyperty(_this._getURL(from));
    }
  }, {
    key: 'isToVerify',
    value: function isToVerify(message) {
      var schemasToIgnore = ['domain-idp', 'runtime', 'domain'];
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
    key: 'decrypt',
    value: function decrypt(message) {
      var _this = this;

      return new Promise(function(resolve, reject) {
        _this.idModule.decryptMessage(message).then(function(msg) {
          resolve(msg);
        }, function(error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'encrypt',
    value: function encrypt(message) {
      var _this = this;

      return new Promise(function(resolve, reject) {
        _this.idModule.encryptMessage(message).then(function(msg) {
          resolve(msg);
        }, function(error) {
          reject(error);
        });
      });
    }

    // TODO: instead of verifying message type, load it in PolicyEngine.applicablePolicies() if it is a subscription to a data object

  }, {
    key: 'registerSubscriber',
    value: function registerSubscriber(message, authDecision) {
      var _this = this;
      var to = message.to.split('/');
      var isDataObjectSubscription = to[4] === 'subscription';

      if (authDecision && isDataObjectSubscription) {
        var dataObjectURL = message.to.split('/');
        dataObjectURL.pop();
        dataObjectURL = dataObjectURL[0] + '//' + dataObjectURL[2] + '/' + dataObjectURL[3];
        _this.runtimeRegistry.registerSubscriber(dataObjectURL, message.body.subscriber);
      }
    }
  }, {
    key: 'doMutualAuthentication',
    value: function doMutualAuthentication(message, authDecision) {
      var _this = this;
      var to = message.to.split('/');
      var isDataObjectSubscription = to[4] === 'subscription';

      if (authDecision && isDataObjectSubscription) {
        var dataObjectURL = message.to.split('/');
        dataObjectURL.pop();
        dataObjectURL = dataObjectURL[0] + '//' + dataObjectURL[2] + '/' + dataObjectURL[3];
        _this.idModule.doMutualAuthentication(dataObjectURL, message.body.subscriber);
      }
    }
  }, {
    key: '_getLastComponentOfURL',
    value: function _getLastComponentOfURL(url) {
      var split = url.split('/');
      return split[split.length - 1];
    }
  }, {
    key: 'group',
    set: function set(params) {
      var _this = this;
      if (params.group === 'preauthorised') {
        var dataObjectURL = params.destination.split('/');
        dataObjectURL.pop();
        dataObjectURL = dataObjectURL[0] + '//' + dataObjectURL[2];
        _this.groupAttribute = _this.runtimeRegistry.getPreAuthSubscribers(dataObjectURL);
      } else {
        _this.groupAttribute = _this._getList(params.scope, params.group);
      }
    },
    get: function get() {
      var _this = this;
      return _this.groupAttribute;
    }
  }, {
    key: 'subscription',
    set: function set(params) {
      var _this = this;
      _this.subscriptionAttribute = params.message.body.subscriber;
    },
    get: function get() {
      var _this = this;
      return _this.subscriptionAttribute;
    }
  }]);

  return RuntimeCoreCtx;
}(_CommonCtx3.default);

exports.default = RuntimeCoreCtx;
