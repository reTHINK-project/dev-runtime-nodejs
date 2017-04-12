'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _AllowOverrides = require('../combiningAlgorithms/AllowOverrides');

var _AllowOverrides2 = _interopRequireDefault(_AllowOverrides);

var _BlockOverrides = require('../combiningAlgorithms/BlockOverrides');

var _BlockOverrides2 = _interopRequireDefault(_BlockOverrides);

var _utils = require('../../utils/utils');

var _FirstApplicable = require('../combiningAlgorithms/FirstApplicable');

var _FirstApplicable2 = _interopRequireDefault(_FirstApplicable);

var _ReThinkCtx2 = require('../ReThinkCtx');

var _ReThinkCtx3 = _interopRequireDefault(_ReThinkCtx2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RuntimeCoreCtx = function (_ReThinkCtx) {
  (0, _inherits3.default)(RuntimeCoreCtx, _ReThinkCtx);

  function RuntimeCoreCtx(idModule, runtimeRegistry, storageManager, runtimeCapabilities) {
    (0, _classCallCheck3.default)(this, RuntimeCoreCtx);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (RuntimeCoreCtx.__proto__ || (0, _getPrototypeOf2.default)(RuntimeCoreCtx)).call(this));

    _this2.idModule = idModule;
    _this2.runtimeRegistry = runtimeRegistry;
    _this2.activeUserPolicy = undefined;
    _this2.serviceProviderPolicy = {};
    _this2.userPolicies = {};
    _this2.storageManager = storageManager;
    _this2.runtimeCapabilities = runtimeCapabilities;
    return _this2;
  }

  (0, _createClass3.default)(RuntimeCoreCtx, [{
    key: 'loadConfigurations',
    value: function loadConfigurations() {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        _this.storageManager.get('rethink:activePolicy').then(function (value) {
          _this.activeUserPolicy = value;

          return _this.storageManager.get('rethink:groups');
        }).then(function (groupInfo) {
          var groups = groupInfo;
          _this.groups = groups === undefined ? {} : groups;

          return _this.storageManager.get('rethink:spPolicies');
        }).then(function (policiesInfo) {
          var spPolicies = policiesInfo;
          _this.serviceProviderPolicy = spPolicies === undefined ? {} : spPolicies;

          _this._loadUserPolicies().then(function () {
            resolve();
          });
        });
      });
    }
  }, {
    key: 'prepareForEvaluation',
    value: function prepareForEvaluation(message, isIncoming) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {

        var _this = _this3;
        if (isIncoming) {
          if (_this._isToCypherModule(message)) {
            _this.idModule.decryptMessage(message).then(function (message) {
              /*if (message.type === 'update') {
                _this._isValidUpdate(message).then(message => {*/
              resolve(message);
            }, function (error) {
              reject(error);

              /*});
              } else {
                resolve(message);
              }*/
            });
          } else {
            resolve(message);
          }
        } else {
          console.log('[Policy.RuntimeCoreCtx prepareForEvaluation]', message);
          if (_this._isToSetID(message)) {
            _this._getIdentity(message).then(function (identity) {
              message.body.identity = identity;
              resolve(message);
            }, function (error) {
              reject(error);
            });
          } else {
            resolve(message);
          }
        }
      });
    }
  }, {
    key: 'getPolicies',
    value: function getPolicies(message, isIncomingMessage) {
      var policies = {};

      if (this.activeUserPolicy !== undefined) {
        policies.userPolicy = this.userPolicies[this.activeUserPolicy];
      }

      policies.serviceProviderPolicy = this.getServiceProviderPolicy(message, isIncomingMessage);

      return policies;
    }
  }, {
    key: '_isValidUpdate',
    value: function _isValidUpdate(message) {
      var _this = this;
      return new _promise2.default(function (resolve, reject) {
        if (message.from.split('://').length > 1) {
          _this.idModule._getHypertyFromDataObject(message.from).then(function (hypertyURL) {
            if (hypertyURL === message.body.source) {
              resolve(message);
            } else {
              reject('The source of the message is not valid.');
            }
          }, function (error) {
            reject(error);
          });
        } else {
          resolve(message);
        }
      });
    }
  }, {
    key: 'prepareToForward',
    value: function prepareToForward(message, isIncoming, result) {
      var _this4 = this;

      var _this = this;
      return new _promise2.default(function (resolve, reject) {
        console.log('[Policy.RuntimeCoreCtx.prepareToForward]', message);

        // TODO remove this validation. When the Nodejs auth was completed this should work like browser;
        _this4.runtimeCapabilities.isAvailable('node').then(function (result) {

          console.log('[RuntimeCoreCtx - isAvailable - node] - ', result);
          if (result) {
            return resolve(message);
          } else {
            if (isIncoming & result) {
              var isSubscription = message.type === 'subscribe';
              var isFromRemoteSM = _this.isFromRemoteSM(message.from);
              if (isSubscription & isFromRemoteSM) {

                // TODO: should do mutualAuthentication and this should be removed
                resolve(message);

                // TODO: should verify why the mutualAuthentication is not working
                // TODO: this should uncommented
                /*_this.doMutualAuthentication(message).then(() => {
                  resolve(message);
                }, (error) => {
                  reject(error);
                });*/
              } else {
                resolve(message);
              }
            } else {

              // TODO should encrypt messages and this should be removed;
              resolve(message);

              // TODO: should verify why the mutualAuthentication is not working
              // TODO: this should uncommented
              /*if (_this._isToCypherModule(message)) {
                _this.idModule.encryptMessage(message).then((message) => {
                  resolve(message);
                }, (error) => {
                  reject(error);
                });
              } else {
                resolve(message);
              }*/
            }
          }
        });
      });
    }
  }, {
    key: 'doMutualAuthentication',
    value: function doMutualAuthentication(message) {
      var _this = this;
      return new _promise2.default(function (resolve, reject) {
        var to = message.to.split('/');
        var subsIndex = to.indexOf('subscription');
        var isDataObjectSubscription = subsIndex !== -1;
        var isFromRemoteSM = _this.isFromRemoteSM(message.from);
        if (isDataObjectSubscription & isFromRemoteSM) {
          to.pop();
          var dataObjectURL = to[0] + '//' + to[2] + '/' + to[3];
          _this.idModule.doMutualAuthentication(dataObjectURL, message.body.subscriber).then(function () {
            _this.runtimeRegistry.registerSubscriber(dataObjectURL, message.body.subscriber);
            resolve();
          }, function (error) {
            reject(error);
          });
        }
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
        policy = this.serviceProviderPolicy[toHyperty];
      } else {
        var fromHyperty = this.runtimeRegistry.getHypertyName(message.from);
        policy = this.serviceProviderPolicy[fromHyperty];
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
    key: 'isLocal',
    value: function isLocal(url) {
      return this.runtimeRegistry.isLocal(url);
    }
  }, {
    key: 'isInterworkingProtoStub',
    value: function isInterworkingProtoStub(url) {
      return this.runtimeRegistry.isInterworkingProtoStub(url);
    }
  }, {
    key: '_isToSetID',
    value: function _isToSetID(message) {
      var schemasToIgnore = ['domain-idp', 'runtime', 'domain'];
      var splitFrom = message.from.split('://');
      var fromSchema = splitFrom[0];

      var _from = message.from;

      if (message.body && message.body.hasOwnProperty('source')) {
        _from = message.body.source;
      }

      // Signalling Messages between P2P Stubs don't have Identities. FFS

      if (_from.includes('/p2prequester/') || _from.includes('/p2phandler/')) {
        return false;
      }

      return schemasToIgnore.indexOf(fromSchema) === -1;
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

      var from = message.from;
      console.log('[Policy.RuntimeCoreCtx.getIdentity] ', message);

      if (message.body.source !== undefined) {
        from = message.body.source;
      }

      if (message.type === 'forward') {
        from = message.body.from;
      }

      /*    if (message.type === 'update') {
            return this.idModule.getToken(message.body.source);
          }
      
          if (message.type === 'response' && message.body.source !== undefined) {
            return this.idModule.getToken(message.body.source);
          }*/

      //    if (divideURL(message.from).type === 'hyperty') {

      return this.idModule.getToken(from, message.to);
    }

    /**
    * Identifies the messages to be forwarded to the Identity Module for
    * encryption/decryption and integrity validation.
    * @param {Message}    message
    * @returns {boolean}  returns true if the message requires encryption/decryption
    *                     or if its type equals 'handshake'; false otherwise
    */

  }, {
    key: '_isToCypherModule',
    value: function _isToCypherModule(message) {
      console.log('[Policy.RuntimeCoreCtx.istoChyperModule]', message);
      var isCreate = message.type === 'create';
      var isFromHyperty = (0, _utils.divideURL)(message.from).type === 'hyperty';
      var isToHyperty = (0, _utils.divideURL)(message.to).type === 'hyperty';
      var isToDataObject = (0, _utils.isDataObjectURL)(message.to);

      //TODO: For Further Study
      var doMutualAuthentication = message.body.hasOwnProperty('mutualAuthentication') ? message.body.mutualAuthentication : true;

      // todo: return false for messages coming from interworking stubs.
      // Get descriptor from runtime catalogue and check interworking field.

      return (isCreate && isFromHyperty && isToHyperty || isCreate && isFromHyperty && isToDataObject || message.type === 'handshake' || message.type === 'update') && doMutualAuthentication;
    }

    /**
    * Creates a group with the given name.
    * @param  {String}  groupName
    */

  }, {
    key: '_loadUserPolicies',
    value: function _loadUserPolicies() {
      var _this5 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        _this.storageManager.get('rethink:userPolicies').then(function (value) {
          var policies = value;
          if (policies !== undefined) {
            for (var i in policies) {
              _this5.pep.addPolicy('USER', i, policies[i]);
            }
          }
          resolve();
        });
      });
    }
  }, {
    key: '_getLastComponentOfURL',
    value: function _getLastComponentOfURL(url) {
      var split = url.split('/');
      return split[split.length - 1];
    }
  }, {
    key: '_getPoliciesJSON',
    value: function _getPoliciesJSON(policies) {
      for (var i in policies) {
        var combiningAlgorithm = policies[i].combiningAlgorithm;
        if (combiningAlgorithm instanceof _BlockOverrides2.default) {
          policies[i].combiningAlgorithm = 'blockOverrides';
        } else {
          if (combiningAlgorithm instanceof _AllowOverrides2.default) {
            policies[i].combiningAlgorithm = 'allowOverrides';
          } else {
            if (combiningAlgorithm instanceof _FirstApplicable2.default) {
              policies[i].combiningAlgorithm = 'firstApplicable';
            } else {
              policies[i].combiningAlgorithm = undefined;
            }
          }
        }
      }

      return policies;
    }
  }, {
    key: 'saveActivePolicy',
    value: function saveActivePolicy() {
      var _this6 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.storageManager.set('rethink:activePolicy', 0, _this6.activeUserPolicy).then(function () {
          resolve();
        });
      });
    }
  }, {
    key: 'saveGroups',
    value: function saveGroups() {
      var _this7 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.storageManager.set('rethink:groups', 0, _this7.groups).then(function () {
          resolve();
        });
      });
    }
  }, {
    key: 'savePolicies',
    value: function savePolicies(source, policy, key) {
      var policiesJson = void 0;

      switch (source) {
        case 'USER':
          policiesJson = (0, _stringify2.default)(this.userPolicies);
          policiesJson = this._getPoliciesJSON(JSON.parse(policiesJson));
          this.storageManager.set('rethink:userPolicies', 0, policiesJson);
          break;
        case 'SERVICE_PROVIDER':
          if (policy !== undefined & key !== undefined) {
            this.serviceProviderPolicy[key] = policy;
          }
          policiesJson = (0, _stringify2.default)(this.serviceProviderPolicy);
          policiesJson = this._getPoliciesJSON(JSON.parse(policiesJson));
          this.storageManager.set('rethink:spPolicies', 0, policiesJson);
          break;
        default:
          throw Error('Unknown policy source: ' + source);
      }
    }
  }, {
    key: 'getGroupsNames',
    value: function getGroupsNames() {
      var myGroups = this.groups;
      var groupsNames = [];
      if (myGroups !== undefined) {
        for (var groupName in myGroups) {
          groupsNames.push(groupName);
        }
      }
      return groupsNames;
    }
  }, {
    key: 'getGroup',
    value: function getGroup(groupName, destination) {
      var members = [];

      if (groupName === 'preauthorised') {
        var dataObjectURL = destination.split('/');
        dataObjectURL.pop();
        dataObjectURL = dataObjectURL[0] + '//' + dataObjectURL[2];
        members = this.runtimeRegistry.getPreAuthSubscribers(dataObjectURL);
      } else {
        if (this.groups[groupName] !== undefined) {
          members = this.groups[groupName];
        }
      }

      return members;
    }

    /**
    * Creates a group with the given name.
    * @param  {String}  groupName
    */

  }, {
    key: 'createGroup',
    value: function createGroup(groupName) {
      this.groups[groupName] = [];
      this.saveGroups();
    }
  }, {
    key: 'deleteGroup',
    value: function deleteGroup(groupName) {
      delete this.groups[groupName];
      this.saveGroups();
    }

    /**
    * Adds the given user email to the group with the given name.
    * @param  {String}  userEmail
    * @param  {String}  groupName
    */

  }, {
    key: 'addToGroup',
    value: function addToGroup(groupName, userEmail) {
      var myGroups = this.groups;
      if (myGroups[groupName] !== undefined) {
        if (myGroups[groupName].indexOf(userEmail) === -1) {
          myGroups[groupName].push(userEmail);
          this.saveGroups();
        }
      } else {
        throw Error('Group "' + groupName + '" does not exist!');
      }
    }
  }, {
    key: 'removeFromGroup',
    value: function removeFromGroup(groupName, userEmail) {
      var group = this.groups[groupName];

      group.splice(group.indexOf(userEmail), 1);
      this.saveGroups();
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
}(_ReThinkCtx3.default);

exports.default = RuntimeCoreCtx;