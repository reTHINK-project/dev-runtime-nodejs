'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PEP = require('./PEP');

var _PEP2 = _interopRequireDefault(_PEP);

var _PDP = require('./PDP');

var _PDP2 = _interopRequireDefault(_PDP);

var _UserPolicy = require('./policies/UserPolicy');

var _UserPolicy2 = _interopRequireDefault(_UserPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PolicyEngine = function () {
  function PolicyEngine(context) {
    _classCallCheck(this, PolicyEngine);

    this.context = context;
    context.policyEngine = this;
    context.loadActivePolicy();
    context.loadGroups();
    context.loadSPPolicies();
    context.loadUserPolicies();
    this.pdp = new _PDP2.default(context);
    this.pep = new _PEP2.default(context);
  }

  _createClass(PolicyEngine, [{
    key: 'addPolicy',
    value: function addPolicy(source, key, policy) {
      if (source === 'SERVICE_PROVIDER') {
        this.context.serviceProviderPolicies[key] = policy;
        this.context.savePolicies(source);
      } else {
        if (source === 'USER') {
          if (!policy) {
            policy = new _UserPolicy2.default(key, [], []);
          }
          this.context.userPolicies[key] = policy;
          this.context.savePolicies(source);
        } else {
          throw Error('Unknown policy source: ' + source);
        }
      }
    }
  }, {
    key: 'removePolicy',
    value: function removePolicy(source, key) {
      if (source === '*') {
        this.context.serviceProviderPolicies = {};
        this.context.userPolicies = {};
        this.context.activeUserPolicy = undefined;
      } else {
        if (source === 'SERVICE_PROVIDER') {
          delete this.context.serviceProviderPolicies[key];
        } else {
          if (source === 'USER') {
            delete this.context.userPolicies[key];
            if (key === this.context.activeUserPolicy) {
              this.context.activeUserPolicy = undefined;
            }
          } else {
            throw Error('Unknown policy source: ' + source);
          }
        }
      }

      this.context.savePolicies('USER');
      this.context.savePolicies('SERVICE_PROVIDER');
      this.context.saveActivePolicy();
    }
  }, {
    key: 'removeRule',
    value: function removeRule(key, rule) {
      delete this.context.userPolicies[key][rule.scope][rule.target][rule.condition];
    }
  }, {
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;
      return _this.context.authorise(message);
    }
  }, {
    key: 'getGroupsNames',
    value: function getGroupsNames() {
      var myGroups = this.context.groups;
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
    value: function getGroup(groupName) {
      var myGroups = this.context.groups;
      var members = [];

      if (myGroups[groupName] !== undefined) {
        members = myGroups[groupName];
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
      this.context.groups[groupName] = [];
      this.context.saveGroups();
    }
  }, {
    key: 'deleteGroup',
    value: function deleteGroup(groupName) {
      delete this.context.groups[groupName];
      this.context.saveGroups();
    }

    /**
    * Adds the given user email to the group with the given name.
    * @param  {String}  userEmail
    * @param  {String}  groupName
    */

  }, {
    key: 'addToGroup',
    value: function addToGroup(groupName, userEmail) {
      var myGroups = this.context.groups;
      if (myGroups[groupName] !== undefined) {
        if (myGroups[groupName].indexOf(userEmail) === -1) {
          myGroups[groupName].push(userEmail);
          this.context.saveGroups();
        }
      } else {
        throw Error('Group "' + groupName + '" does not exist!');
      }
    }
  }, {
    key: 'removeFromGroup',
    value: function removeFromGroup(groupName, userEmail) {
      var group = this.context.groups[groupName];

      group.splice(group.indexOf(userEmail), 1);
      this.context.saveGroups();
    }
  }]);

  return PolicyEngine;
}();

exports.default = PolicyEngine;