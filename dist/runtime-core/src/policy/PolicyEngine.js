'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //jshint browser:true, jquery: true

//import persistenceManager from 'service-framework/dist/PersistenceManager';

var _PEP = require('./PEP');

var _PEP2 = _interopRequireDefault(_PEP);

var _PDP = require('./PDP');

var _PDP2 = _interopRequireDefault(_PDP);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Policy Engine intercepts all the messages sent through the Message Bus and applies the
* policies defined by the service provider and the user.
*/

var PolicyEngine = function () {

  /**
  * This method is invoked by the RuntimeUA and instantiates the Policy Engine. A Policy Decision
  * Point (PDP) and a Policy Enforcement Point (PEP) are initialised for the evaluation of policies
  * and the enforcement of additional actions, respectively.
  * @param  {IdentityModule}    identityModule
  * @param  {Registry}          runtimeRegistry
  */

  function PolicyEngine(context) {
    _classCallCheck(this, PolicyEngine);

    var _this = this;
    _this.context = context;
    _this.context.pdp = new _PDP2.default(context);
    _this.context.pep = new _PEP2.default(context);
  }

  /**
  * Associates the given policies with a scope. The possible scopes are 'global', 'hyperty' and
  * 'user'.
  * @param  {Policy[]}  policies
  * @param  {String}    scope
  */


  _createClass(PolicyEngine, [{
    key: 'addPolicies',
    value: function addPolicies(newPolicies) {
      var _this = this;

      var myPolicies = _this.context.policies;
      if (myPolicies === undefined) {
        myPolicies = {};
      }

      for (var i in newPolicies) {
        var newPolicy = newPolicies[i];
        var scope = newPolicy.scope;
        if (myPolicies[scope] === undefined) {
          myPolicies[scope] = [];
        }
        for (var j in myPolicies[scope]) {
          var existingPolicy = myPolicies[scope][j];
          if (existingPolicy.condition === newPolicy.condition) {
            _this.removePolicies(newPolicies[i].condition);
            break;
          }
        }
        myPolicies[scope].push(newPolicies[i]);
      }

      _this.context.policies = myPolicies;
    }

    /**
    * Removes the policy with the given ID from the given scope. If policyID is '*', removes all policies associated with the given scope.
    * @param  {String}  policyID
    * @param  {String}  scope
    */

  }, {
    key: 'removePolicies',
    value: function removePolicies(scope, condition) {
      var _this = this;
      var myPolicies = _this.context.policies;

      if (scope !== '*') {

        if (scope in myPolicies) {
          if (condition !== '*') {
            var policies = myPolicies[scope];
            var typeOfCondition = typeof condition === 'undefined' ? 'undefined' : _typeof(condition);
            for (var i in policies) {
              var typeOfPolicyCondition = _typeof(policies[i].condition);
              if (typeOfCondition === typeOfPolicyCondition) {
                if (typeOfCondition === 'string') {
                  if (policies[i].condition === condition) {
                    policies.splice(i, 1);
                    break;
                  }
                } else {
                  //typeof condition = object (advanced policy)
                  if (_this.areEqualArrays(policies[i].condition, condition)) {
                    policies.splice(i, 1);
                  }
                }
              }
            }
          } else {
            delete myPolicies[scope];
          }

          _this.context.policies = myPolicies;
        }
      } else {
        _this.context.policies = {};
      }
    }
  }, {
    key: 'areEqualArrays',
    value: function areEqualArrays(array1, array2) {
      if (array1.length !== array2.length) {
        return false;
      }

      var numElements = array1.length;
      for (var i = 0; i < numElements; i++) {
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
          if (!array1[i].equals(array2[i])) {
            return false;
          }
        } else if (array1[i] !== array2[i]) {
          return false;
        }
      }
      return true;
    }

    /**
    * This method is executed when a message is intercepted in the Message Bus. The first step is the
    * assignment of the identity associated with the message. The second step is the evaluation of the
    * applicable policies in order to obtain an authorisation decision: if a policy evaluates to
    * false, then the message is unauthorised. The third step is the enforcement of the actions that
    * policies may require. Finally, the message is stamped as authorised or not and is returned to
    * the Message Bus, where it will be forwarded or blocked.
    * @param  {Message}  message
    */

  }, {
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;
      return _this.context.authorise(message);
    }
  }, {
    key: 'getGroupsNames',
    value: function getGroupsNames(scope) {
      var _this = this;
      var myGroups = _this.context.groups;
      var groupsNames = [];
      if (myGroups[scope] !== {}) {
        for (var groupName in myGroups[scope]) {
          groupsNames.push(groupName);
        }
      }
      return groupsNames;
    }

    /**
    * Retrieves the group with the given group name from the PDP.
    * @param  {String}  groupName
    * @return {Array}   group
    */

  }, {
    key: 'getList',
    value: function getList(scope, groupName) {
      var _this = this;
      var myGroups = _this.context.groups;
      var members = [];
      if (myGroups[scope] !== undefined && myGroups[scope][groupName] !== undefined) {
        members = myGroups[scope][groupName];
      }
      return members;
    }

    /**
    * Creates a group with the given name.
    * @param  {String}  groupName
    */

  }, {
    key: 'createList',
    value: function createList(scope, type, groupName) {
      var _this = this;

      var myGroups = _this.context.groups;
      if (myGroups[scope] === undefined) {
        myGroups[scope] = {};
      }
      myGroups[scope][groupName] = [];

      var policy = {
        authorise: false,
        condition: type + ' in ' + groupName,
        scope: scope,
        actions: []
      };
      _this.addPolicies([policy]);

      return myGroups;
    }
  }, {
    key: 'deleteGroup',
    value: function deleteGroup(scope, groupName) {
      var _this = this;

      var myGroups = _this.context.groups;
      delete myGroups[scope][groupName];

      var myPolicies = _this.context.policies;

      var policies = myPolicies[scope];
      for (var i in policies) {
        var condition = policies[i].condition.split(' ');
        condition.shift();
        var groupInPolicy = condition.join(' ');
        if (groupInPolicy === groupName) {
          delete policies[i];
          break;
        }
      }
    }

    /**
    * Adds the given user email to the group with the given name.
    * @param  {String}  userEmail
    * @param  {String}  groupName
    */

  }, {
    key: 'addToList',
    value: function addToList(scope, type, groupName, userEmail) {
      var _this = this;

      var myGroups = _this.context.groups;
      if (myGroups[scope] === undefined) {
        myGroups[scope] = {};
      }
      if (myGroups[scope][groupName] === undefined) {
        myGroups = _this.createList(scope, type, groupName);
      }
      if (myGroups[scope][groupName].indexOf(userEmail) === -1) {
        myGroups[scope][groupName].push(userEmail);
      }
    }

    /**
    * Removes the given user email from the group with the given name.
    * @param  {String}  userEmail
    * @param  {String}  groupName
    */

  }, {
    key: 'removeFromGroup',
    value: function removeFromGroup(scope, groupName, userEmail) {
      var _this = this;

      var myGroups = _this.context.groups;
      var group = myGroups[scope][groupName];

      for (var i in group) {
        if (group[i] === userEmail) {
          group.splice(i, 1);
          break;
        }
      }
    }
  }, {
    key: 'getTimeslots',
    value: function getTimeslots() {
      var _this = this;
      var policies = _this.context.policies.user;
      var timeRestrictions = [];
      for (var i in policies) {
        if (policies[i].condition.split(' ')[0] === 'time') {
          timeRestrictions.push(policies[i].condition);
        }
      }
      return timeRestrictions;
    }
  }, {
    key: 'getTimeslotById',
    value: function getTimeslotById(condition) {
      var _this = this;
      var policies = _this.context.policies.user;
      for (var i in policies) {
        if (policies[i].condition === condition) {
          return policies[i];
        }
      }
    }
  }]);

  return PolicyEngine;
}();

exports.default = PolicyEngine;