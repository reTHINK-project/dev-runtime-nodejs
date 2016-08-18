'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _AdvancedCondition = require('../src/policy/conditions/AdvancedCondition');

var _AdvancedCondition2 = _interopRequireDefault(_AdvancedCondition);

var _Condition = require('../src/policy/conditions/Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _DenyOverrides = require('../src/policy/combiningAlgorithms/DenyOverrides');

var _DenyOverrides2 = _interopRequireDefault(_DenyOverrides);

var _MessageNodeCtx = require('../src/policy/context/MessageNodeCtx');

var _MessageNodeCtx2 = _interopRequireDefault(_MessageNodeCtx);

var _PolicyEngine = require('../src/policy/PolicyEngine');

var _PolicyEngine2 = _interopRequireDefault(_PolicyEngine);

var _Rule = require('../src/policy/Rule');

var _Rule2 = _interopRequireDefault(_Rule);

var _RuntimeCoreCtx = require('../src/policy/context/RuntimeCoreCtx');

var _RuntimeCoreCtx2 = _interopRequireDefault(_RuntimeCoreCtx);

var _ServiceProviderPolicy = require('../src/policy/policies/ServiceProviderPolicy');

var _ServiceProviderPolicy2 = _interopRequireDefault(_ServiceProviderPolicy);

var _SubscriptionCondition = require('../src/policy/conditions/SubscriptionCondition');

var _SubscriptionCondition2 = _interopRequireDefault(_SubscriptionCondition);

var _UserPolicy = require('../src/policy/policies/UserPolicy');

var _UserPolicy2 = _interopRequireDefault(_UserPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.truncateThreshold = 0;

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

/********** CONDITIONS **********/
var simpleCondition = new _Condition2.default('source', 'equals', 'user1@domain1');
var andCondition = new _AdvancedCondition2.default(['and', new _Condition2.default('source', 'equals', 'user1@domain1'), new _Condition2.default('domain', 'equals', 'domain1')]);
var orCondition = new _AdvancedCondition2.default(['or', new _Condition2.default('source', 'equals', 'user1@domain1'), new _Condition2.default('domain', 'equals', 'domain1')]);
var notCondition = new _AdvancedCondition2.default(['not', new _Condition2.default('source', 'equals', 'user2@domain2')]);
var andNotCondition = new _AdvancedCondition2.default(['and', new _Condition2.default('source', 'equals', 'user1@domain1'), ['not', new _Condition2.default('domain', 'equals', 'domain1')]]);
var orNotCondition = new _AdvancedCondition2.default(['or', ['not', new _Condition2.default('domain', 'equals', 'domain1')], new _Condition2.default('source', 'equals', 'user1@domain1')]);

/********** RULES **********/
var simpleRule = new _Rule2.default(false, simpleCondition, 0, 'global', 'global');
var acceptAnySubscriptionRule = new _Rule2.default(true, new _SubscriptionCondition2.default('subscription', 'equals', '*'), 0, 'global', 'global');
var acceptPreAuthSubscriptionRule = new _Rule2.default(true, new _SubscriptionCondition2.default('subscription', 'in', 'preauthorised'), 0, 'global', 'global');
var blockAnySubscriptionRule = new _Rule2.default(false, new _SubscriptionCondition2.default('subscription', 'equals', '*'), 0, 'global', 'global');
var blockPreAuthSubscriptionRule = new _Rule2.default(false, new _AdvancedCondition2.default(['not', new _SubscriptionCondition2.default('subscription', 'in', 'preauthorised')]), 0, 'global', 'global');
var dataObjectSchemeRule = new _Rule2.default(false, new _Condition2.default('dataObjectScheme', 'equals', 'comm'), 0, 'global', 'global');
var dateRule = new _Rule2.default(false, new _Condition2.default('date', 'equals', '01/01/2016'), 0, 'global', 'global');
var domainRule = new _Rule2.default(false, new _Condition2.default('domain', 'equals', 'blockedDomain'), 0, 'global', 'global');
var sourceRule = new _Rule2.default(false, new _Condition2.default('source', 'equals', 'user@blockedDomain'), 0, 'global', 'global');
var sourceRuleForConn = new _Rule2.default(false, new _Condition2.default('source', 'equals', 'user@blockedDomain'), 0, 'hyperty', 'Connector');
var sourceRuleForUser1 = new _Rule2.default(false, new _Condition2.default('source', 'equals', 'user@blockedDomain'), 0, 'user', 'user1@work');
var timeRule = new _Rule2.default(false, new _Condition2.default('time', 'between', [1400, 1700]), 0, 'global', 'global');
var weekdayRule = new _Rule2.default(false, new _Condition2.default('weekday', 'equals', '0'), 0, 'global', 'global');

/********** POLICIES **********/
var sourcePolicy = new _ServiceProviderPolicy2.default('HypertyChat', [simpleRule], []);

/********** MESSAGES **********/
var messageFromChat = { body: { identity: { userProfile: { username: 'user@blockedDomain' } } }, id: 1, type: 'subscribe', from: 'hyperty://domain/hyperty-123', to: 'hyperty://domain/hyperty-456' };

var messageFromConn = { body: { identity: { userProfile: { username: 'user@blockedDomain' } } }, id: 1, type: 'subscribe', from: 'hyperty://domain/hyperty-789', to: 'hyperty://domain/hyperty-012' };

var messageFromUser1 = { body: { identity: { userProfile: { username: 'user1@domain1' } } }, id: 1, type: 'subscribe', from: 'scheme://domain/data-object-instance', to: 'comm://domain/data-object-instance' };

var messageFromUser2 = { body: { identity: { userProfile: { username: 'user2@domain2' } } }, id: 1, type: 'subscribe', from: 'scheme://domain/data-object-instance', to: 'comm://domain/data-object-instance' };

var noIdMessage = { from: 'hyperty://domain/hyperty-url', id: 1, to: 'comm://domain/hyperty-instance', type: 'subscribe' };

var message = { body: { auth: false, identity: { userProfile: { username: 'user@domain' } } }, from: 'hyperty://domain/hyperty-url', id: 1, to: 'comm://domain/hyperty-instance', type: 'subscribe' };

var messageFromBlocked = { body: { identity: { userProfile: { username: 'user@blockedDomain' } } }, id: 1, type: 'subscribe', from: 'comm://domain/data-object-instance', to: 'comm://domain/hyperty-instance' };

var subscribeMessage = { body: { identity: { userProfile: { username: 'user@domain' } }, subscriber: 'hyperty://domain/hyperty-instance' }, id: 1, type: 'subscribe', from: 'runtime://localhost/7600/sm', to: 'comm://domain/data-object-url/subscription' };

var allowedSubscribeMessage = { body: { auth: true, identity: { userProfile: { username: 'user@domain' } }, subscriber: 'hyperty://domain/hyperty-instance' }, id: 1, type: 'subscribe', from: 'runtime://localhost/7600/sm', to: 'comm://domain/data-object-url/subscription' };

var badSubscribeMessage = { body: { identity: { userProfile: { username: 'user@domain' } }, subscriber: 'hyperty://domain/not-preauthorised-hyperty-instance' }, id: 1, type: 'subscribe', from: 'runtime://localhost/7600/sm', to: 'comm://domain/data-object-url/subscription' };

/********** TESTS **********/
var runtimeCtx = new _RuntimeCoreCtx2.default();

describe('Policies management', function () {
  describe('conditions management', function () {
    it('creates a simple condition', function () {
      expect(simpleCondition.attribute).to.be.eql('source');
      expect(simpleCondition.operator).to.be.eql('equals');
      expect(simpleCondition.params).to.be.eql('user1@domain1');
    });
    it('returns condition is applicable', function () {
      expect(simpleCondition.isApplicable(runtimeCtx, messageFromUser1)).to.be.eql(true);
    });
    it('returns condition is not applicable', function () {
      expect(simpleCondition.isApplicable(runtimeCtx, messageFromUser2)).to.be.eql(false);
    });

    it('creates an advanced condition - "and"', function () {
      expect(andCondition.condition).to.be.eql(['and', new _Condition2.default('source', 'equals', 'user1@domain1'), new _Condition2.default('domain', 'equals', 'domain1')]);
      expect(andCondition.condition[0]).to.be.eql('and');
      expect(andCondition.condition[1]).to.be.eql(new _Condition2.default('source', 'equals', 'user1@domain1'));
      expect(andCondition.condition[2]).to.be.eql(new _Condition2.default('domain', 'equals', 'domain1'));
    });

    it('correctly returns "and" condition is applicable', function () {
      expect(andCondition.isApplicable(runtimeCtx, messageFromUser1)).to.be.eql(true);
    });

    it('correctly returns "and" condition is not applicable', function () {
      expect(andCondition.isApplicable(runtimeCtx, messageFromUser2)).to.be.eql(false);
    });

    it('creates an advanced condition - "or"', function () {
      expect(orCondition.condition).to.be.eql(['or', new _Condition2.default('source', 'equals', 'user1@domain1'), new _Condition2.default('domain', 'equals', 'domain1')]);
    });

    it('correctly returns "or" condition is applicable', function () {
      expect(orCondition.isApplicable(runtimeCtx, messageFromUser1)).to.be.eql(true);
    });

    it('correctly returns "or" condition is not applicable', function () {
      expect(orCondition.isApplicable(runtimeCtx, messageFromUser2)).to.be.eql(false);
    });

    it('creates an advanced condition - "not"', function () {
      expect(notCondition.condition).to.be.eql(['not', new _Condition2.default('source', 'equals', 'user2@domain2')]);
    });

    it('correctly returns "not" condition is applicable', function () {
      expect(notCondition.isApplicable(runtimeCtx, messageFromUser1)).to.be.eql(true);
    });

    it('correctly returns "not" condition is not applicable', function () {
      expect(notCondition.isApplicable(runtimeCtx, messageFromUser2)).to.be.eql(false);
    });

    it('correctly returns "and not" condition is not applicable', function () {
      expect(andNotCondition.isApplicable(runtimeCtx, messageFromUser1)).to.be.eql(false);
    });

    it('correctly returns "or not" condition is applicable', function () {
      expect(orNotCondition.isApplicable(runtimeCtx, messageFromUser1)).to.be.eql(true);
    });
  });

  describe('rules management', function () {
    it('creates a simple rule', function () {
      expect(simpleRule.authorise).to.be.eql(false);
      expect(simpleRule.condition).to.be.eql(simpleCondition);
      expect(simpleRule.scope).to.be.eql('global');
      expect(simpleRule.target).to.be.eql('global');
    });
    it('evaluates a simple rule to false', function () {
      expect(simpleRule.evaluate(runtimeCtx, messageFromUser1)).to.be.eql(false);
    });
    it('evaluates a simple rule to "Not Applicable"', function () {
      expect(simpleRule.evaluate(runtimeCtx, messageFromUser2)).to.be.eql('Not Applicable');
    });
  });

  describe('policies management', function () {
    it('creates a service provider policy', function () {
      expect(sourcePolicy.key).to.be.eql('HypertyChat');
      expect(sourcePolicy.combiningAlgorithm).to.be.eql(new _DenyOverrides2.default());
      expect(sourcePolicy.rules).to.be.eql([simpleRule]);
    });
    it('evaluates a service provider policy to false', function () {
      expect(sourcePolicy.evaluate(runtimeCtx, messageFromUser1)).to.be.eql(false);
    });
    it('evaluates a service provider policy to "Not Applicable"', function () {
      expect(sourcePolicy.evaluate(runtimeCtx, messageFromUser2)).to.be.eql('Not Applicable');
    });
  });
});

describe('Policy Engine with Runtime Core context', function () {
  var runtimeRegistry = {
    getPreAuthSubscribers: function getPreAuthSubscribers() {
      return ['hyperty://domain/hyperty-instance'];
    },
    getHypertyName: function getHypertyName(hypertyURL) {
      if (hypertyURL === 'hyperty://domain/hyperty-123') {
        return 'HypertyChat';
      }
      if (hypertyURL === 'hyperty://domain/hyperty-789') {
        return 'Connector';
      }
    },
    getReporterURLSynchonous: function getReporterURLSynchonous(hypertyURL) {
      return 'hyperty://domain/hyperty-url';
    },
    isDataObjectURL: function isDataObjectURL(dataObjectURL) {
      var splitURL = dataObjectURL.split('://');
      return splitURL[0] === 'comm';
    },
    registerSubscribedDataObject: function registerSubscribedDataObject() {},
    registerSubscriber: function registerSubscriber() {},
    runtimeURL: 'runtime://localhost/7601'
  };

  var identityModule = {
    decryptMessage: function decryptMessage(message) {
      return new Promise(function (resolve) {
        resolve(message);
      });
    },
    doMutualAuthentication: function doMutualAuthentication() {},
    encryptMessage: function encryptMessage(message) {
      return new Promise(function (resolve) {
        resolve(message);
      });
    },
    getIdentityOfHyperty: function getIdentityOfHyperty() {
      return new Promise(function (resolve) {
        resolve({ userProfile: { username: 'user@domain' } });
      });
    }
  };

  var policyEngine = new _PolicyEngine2.default(new _RuntimeCoreCtx2.default(identityModule, runtimeRegistry));

  describe('initial filtering', function () {
    it('message that loads an hyperty should not be validated by policies', function () {
      var loadMessage = { id: 2, from: 'hyperty-runtime://sandbox/external', to: 'hyperty-runtime://sandbox/internal', type: 'create' };
      expect(policyEngine.context._isToVerify(loadMessage)).to.be.eql(false);
    });
  });

  describe('identity obtention', function () {
    it('should add an identity in the message body', function (done) {
      expect(policyEngine.authorise(noIdMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });

    it('should maintain the identity in the message body', function (done) {
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });

  describe('policies management', function () {
    policyEngine.removePolicy('*');

    it('adds a service provider policy to the engine', function () {
      policyEngine.context.activeUserPolicy = undefined;
      policyEngine.addPolicy('SERVICE_PROVIDER', 'HypertyChat', sourcePolicy);
      expect(policyEngine.context.serviceProviderPolicies).to.be.eql({ HypertyChat: new _ServiceProviderPolicy2.default('HypertyChat', [simpleRule], []) });
      expect(policyEngine.context.serviceProviderPolicies.HypertyChat).to.be.eql(new _ServiceProviderPolicy2.default('HypertyChat', [simpleRule], []));
      expect(policyEngine.context.serviceProviderPolicies.HypertyChat.actions).to.be.eql([]);
      expect(policyEngine.context.serviceProviderPolicies.HypertyChat.rules).to.be.eql([simpleRule]);
    });

    it('adds a user policy to the engine', function () {
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [dateRule], []));
      expect(policyEngine.context.userPolicies).to.be.eql({ 'My policy': new _UserPolicy2.default('My policy', [dateRule], []) });
      expect(policyEngine.context.userPolicies['My policy']).to.be.eql(new _UserPolicy2.default('My policy', [dateRule], []));
      expect(policyEngine.context.userPolicies['My policy'].actions).to.be.eql([]);
      expect(policyEngine.context.userPolicies['My policy'].rules).to.be.eql([dateRule]);
    });

    it('adds a second user policy to the engine', function () {
      policyEngine.addPolicy('USER', 'My second policy', new _UserPolicy2.default('My second policy', [simpleRule], []));
      expect(policyEngine.context.userPolicies).to.be.eql({ 'My policy': new _UserPolicy2.default('My policy', [dateRule], []), 'My second policy': new _UserPolicy2.default('My second policy', [simpleRule], []) });
      expect(policyEngine.context.serviceProviderPolicies).to.be.eql({ HypertyChat: new _ServiceProviderPolicy2.default('HypertyChat', [simpleRule], []) });
      expect(policyEngine.context.activeUserPolicy).to.be.eql(undefined);
    });

    it('removes an existing user policy', function () {
      policyEngine.removePolicy('USER', 'My policy');
      expect(policyEngine.context.serviceProviderPolicies).to.be.eql({ HypertyChat: new _ServiceProviderPolicy2.default('HypertyChat', [simpleRule], []) });
      expect(policyEngine.context.userPolicies).to.be.eql({ 'My second policy': new _UserPolicy2.default('My second policy', [simpleRule], []) });
      expect(policyEngine.context.activeUserPolicy).to.be.eql(undefined);
    });

    it('tries to remove a policy that does not exist', function () {
      policyEngine.removePolicy('USER', 'Vacations');
      expect(policyEngine.context.serviceProviderPolicies).to.be.eql({ HypertyChat: new _ServiceProviderPolicy2.default('HypertyChat', [simpleRule], []) });
      expect(policyEngine.context.userPolicies).to.be.eql({ 'My second policy': new _UserPolicy2.default('My second policy', [simpleRule], []) });
      expect(policyEngine.context.activeUserPolicy).to.be.eql(undefined);
    });

    it('removes all policies', function () {
      policyEngine.removePolicy('*');
      expect(policyEngine.context.serviceProviderPolicies).to.be.eql({});
      expect(policyEngine.context.userPolicies).to.be.eql({});
      expect(policyEngine.context.activeUserPolicy).to.be.eql(undefined);
    });

    it('does not apply a rule as it is not its target', function (done) {
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [sourceRuleForConn], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(messageFromChat).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(messageFromChat).and.notify(done);
    });

    it('applies a rule as it is its target', function (done) {
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [sourceRuleForConn], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(messageFromConn).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });
  });

  describe('functionality: dataObjectScheme', function () {
    it('rejects the message as it is from a blocked scheme', function (done) {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [dataObjectSchemeRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(messageFromBlocked).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('allows the message as it comes from a scheme that is not blocked', function (done) {
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });

  describe('functionality: source', function () {
    it('rejects the message as it comes from a blocked source', function (done) {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [sourceRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(messageFromBlocked).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('allows the message as it comes from a source that is not blocked', function (done) {
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });

  /*describe('functionality: time of the day', () => {
    it('rejects the message as it is received in a blocked timeslot', (done) => {
      policyEngine.context.time = 1530;
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new UserPolicy('My policy', [timeRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(message).then((message) => {
        return message;
      }), (error) => {
        return error;
      }).to.be.rejected.and.notify(done);
    });
     it('accepts the message as it is received in a timeslot not blocked', (done) => {
      policyEngine.context.time = 1700;
      expect(policyEngine.authorise(message).then((message) => {
        return message;
      }), (error) => {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });
   describe('functionality: date', () => {
    it('rejects the message as it is received in a blocked date', (done) => {
      policyEngine.context.date = '01/01/2016';
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new UserPolicy('My policy', [dateRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(message).then((message) => {
        return message;
      }), (error) => {
        return error;
      }).to.be.rejected.and.notify(done);
    });
     it('accepts the message as it is received in a date not blocked', (done) => {
      policyEngine.context.date = '02/01/2016';
      expect(policyEngine.authorise(message).then((message) => {
        return message;
      }), (error) => {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });*/

  describe('functionality: domain', function () {
    it('rejects the message as it comes from a blocked domain', function (done) {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [domainRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(messageFromBlocked).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('allows the message as it comes from a domain that is not blocked', function (done) {
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });

  /*describe('functionality: weekday', () => {
    it('rejects the message as it is received in a blocked weekday', (done) => {
      policyEngine.context.weekday =  '0';
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new UserPolicy('My policy', [weekdayRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(message).then((message) => {
        return message;
      }), (error) => {
        return error;
      }).to.be.rejected.and.notify(done);
    });
     it('allows the message as it comes from a weekday that is not blocked', (done) => {
      policyEngine.context.weekday = '1';
      expect(policyEngine.authorise(message).then((message) => {
        return message;
      }), (error) => {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });*/

  describe('data objects management', function () {
    it('rejects a subscription attempt, as the policy rejects all', function (done) {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [blockAnySubscriptionRule], ['registerSubscriber']));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(subscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('accepts a subscription attempt, as the policy accepts all', function (done) {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [acceptAnySubscriptionRule], ['registerSubscriber']));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(subscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(allowedSubscribeMessage).and.notify(done);
    });

    it('accepts a subscription attempt, as the policy accepts preauthorised subscribers and is preauthorised', function (done) {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [acceptPreAuthSubscriptionRule], ['registerSubscriber']));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(subscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(allowedSubscribeMessage).and.notify(done);
    });

    it('rejects a subscription attempt, as the policy rejects non-preauthorised subscriber and is not preauthorised', function (done) {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('USER', 'My policy', new _UserPolicy2.default('My policy', [blockPreAuthSubscriptionRule], ['registerSubscriber']));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(badSubscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });
  });

  describe('groups management', function () {
    var groups = policyEngine.context.groups;
    for (var i in groups) {
      policyEngine.deleteGroup(i);
    }

    it('creates a group', function () {
      policyEngine.createGroup('groupA');
      expect(policyEngine.getGroupsNames()).to.be.eql(['groupA']);
    });

    it('creates a second group', function () {
      policyEngine.createGroup('groupB');
      expect(policyEngine.getGroupsNames()).to.be.eql(['groupA', 'groupB']);
    });

    it('adds an email to a group', function () {
      policyEngine.addToGroup('groupA', 'user1@domain');
      expect(policyEngine.getGroup('groupA')).to.be.eql(['user1@domain']);
    });

    it('adds a second email to a group', function () {
      policyEngine.addToGroup('groupA', 'user2@domain');
      expect(policyEngine.getGroup('groupA')).to.be.eql(['user1@domain', 'user2@domain']);
    });

    it('removes a user from a group', function () {
      policyEngine.removeFromGroup('groupA', 'user1@domain');
      expect(policyEngine.getGroup('groupA')).to.be.eql(['user2@domain']);
    });

    it('deletes a group', function () {
      policyEngine.deleteGroup('groupA');
      expect(policyEngine.getGroup('groupA')).to.be.eql([]);
      expect(policyEngine.getGroupsNames()).to.be.eql(['groupB']);
    });
  });
  policyEngine.removePolicy('*');
});

describe('Policy Engine with Message Node context', function () {
  var policyEngine = new _PolicyEngine2.default(new _MessageNodeCtx2.default());

  it('authorises a valid message', function () {
    expect(policyEngine.authorise(message)).to.be.eql(true);
  });

  /*describe('functionality: date', () => {
    it('rejects the message as it is received in a blocked date', () => {
      policyEngine.context.date = '01/01/2016';
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('SERVICE_PROVIDER', 'My policy', new ServiceProviderPolicy('My policy', [dateRule], []));
      expect(policyEngine.authorise(message)).to.be.eql(false);
    });
  });*/

  describe('functionality: domain', function () {
    it('rejects the message as it comes from a blocked domain', function () {
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('SERVICE_PROVIDER', 'My policy', new _ServiceProviderPolicy2.default('My policy', [domainRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(messageFromBlocked)).to.be.eql(false);
    });

    it('allows the message as it comes from a domain that is not blocked', function () {
      expect(policyEngine.authorise(message)).to.be.eql(true);
    });
  });

  /*describe('functionality: time of the day', () => {
    it('rejects the message as it is received in a blocked timeslot', () => {
      policyEngine.context.time = 1530;
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('SERVICE_PROVIDER', 'My policy', new ServiceProviderPolicy('My policy', [timeRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(message)).to.be.eql(false);
    });
     it('accepts the message as it is received in a timeslot not blocked', () => {
      policyEngine.context.time = 1701;
      expect(policyEngine.authorise(message)).to.be.eql(true);
    });
  });
   describe('functionality: weekday', () => {
    it('rejects the message as it is received in a blocked weekday', () => {
      policyEngine.context.weekday =  '0';
      policyEngine.removePolicy('*');
      policyEngine.addPolicy('SERVICE_PROVIDER', 'My policy', new ServiceProviderPolicy('My policy', [weekdayRule], []));
      policyEngine.context.activeUserPolicy = 'My policy';
      expect(policyEngine.authorise(message)).to.be.eql(false);
    });
     it('allows the message as it comes from a weekday that is not blocked', () => {
      policyEngine.context.weekday = '1';
      expect(policyEngine.authorise(message)).to.be.eql(true);
    });
  });*/
});