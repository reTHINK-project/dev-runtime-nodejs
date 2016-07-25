'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _MessageNodeCtx = require('../src/policy/context/MessageNodeCtx');

var _MessageNodeCtx2 = _interopRequireDefault(_MessageNodeCtx);

var _PolicyEngine = require('../src/policy/PolicyEngine');

var _PolicyEngine2 = _interopRequireDefault(_PolicyEngine);

var _RuntimeCoreCtx = require('../src/policy/context/RuntimeCoreCtx');

var _RuntimeCoreCtx2 = _interopRequireDefault(_RuntimeCoreCtx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.truncateThreshold = 0;

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

/********** POLICIES **********/
var datePolicy = { actions: [], authorise: false, condition: 'date in blockedDates', scope: 'global' };

var domainPolicy = { actions: [], authorise: false, condition: 'domain in blockedDomains', scope: 'global' };

var groupPolicy = { actions: [], authorise: false, condition: 'source in students', scope: 'user@domain' };

var sourcePolicy = { actions: [], authorise: false, condition: 'source in blockedEmails', scope: 'user@domain' };

var timePolicy = { actions: [], authorise: false, condition: 'time between 1400 1700', scope: 'global' };

var weekdayPolicy = { actions: [], authorise: false, condition: 'weekday in blockedWeekdays', scope: 'global' };

var weekdayPolicy2 = { actions: [], authorise: false, condition: 'weekday in blockedWeekdays', scope: 'HypertyChat' };

var orPolicy = { actions: [], authorise: true, condition: ['or', 'source in coleagues', 'source in students'], scope: 'global' };

var andPolicy = { actions: [], authorise: true, condition: ['and', 'source in coleagues', 'source in students'], scope: 'global' };

var notPolicy = { actions: [], authorise: true, condition: ['not', 'source in coleagues'], scope: 'global' };

var notPolicy2 = { actions: [], authorise: false, condition: ['not', 'source in students', 'source in students'], scope: 'global' };

var andOrPolicy = { actions: [], authorise: true, condition: ['and', ['or', 'source in blockedEmails', 'source in students'], 'source in coleagues'], scope: 'global' };

var andOrPolicy2 = { actions: [], authorise: true, condition: ['or', 'source in students', ['and', 'source in students', 'source in coleagues']], scope: 'global' };

var blockAnySubscriptionPolicy = { actions: [{ method: 'registerSubscriber' }], authorise: false, condition: 'subscription equals *', scope: 'global' };

var acceptAnySubscriptionPolicy = { actions: [{ method: 'registerSubscriber' }], authorise: true, condition: 'subscription equals *', scope: 'global' };

var acceptPreAuthSubscriptionPolicy = { actions: [{ method: 'registerSubscriber' }], authorise: true, condition: 'subscription in preauthorised', scope: 'hyperty' };

var blockPreAuthSubscriptionPolicy = { actions: [{ method: 'registerSubscriber' }], authorise: false, condition: ['not', 'subscription in preauthorised'], scope: 'global' };

/********** MESSAGES **********/
var message = { body: { identity: { userProfile: { username: 'user@domain' } } }, id: 1, type: 'subscribe', from: 'hyperty://domain/hyperty-url', to: 'comm://domain/hyperty-instance' };

var messageFromBlocked = { body: { identity: { userProfile: { username: 'user@blockedDomain' } } }, id: 1, type: 'subscribe', from: 'hyperty://domain/hyperty-url', to: 'comm://domain/hyperty-instance' };

var subscribeMessage = { body: { identity: { userProfile: { username: 'user@domain' } }, subscriber: 'hyperty://domain/hyperty-instance' }, id: 1, type: 'subscribe', from: 'runtime://localhost/7601/sm', to: 'comm://domain/data-object-url/subscription' };

var allowedSubscribeMessage = { body: { auth: true, identity: { userProfile: { username: 'user@domain' } }, subscriber: 'hyperty://domain/hyperty-instance' }, id: 1, type: 'subscribe', from: 'runtime://localhost/7601/sm', to: 'comm://domain/data-object-url/subscription' };

var badSubscribeMessage = { body: { identity: { userProfile: { username: 'user@domain' } }, subscriber: 'hyperty://domain/not-preauthorised-hyperty-instance' }, id: 1, type: 'subscribe', from: 'runtime://localhost/7601/sm', to: 'comm://domain/data-object-url/subscription' };

var noIdMessage = { from: 'hyperty://domain/hyperty-url', id: 1, to: 'comm://domain/hyperty-instance', type: 'subscribe' };

/* ********** TESTS **********/
describe('Policy Engine with Message Node context', function () {
  var policyEngine = new _PolicyEngine2.default(new _MessageNodeCtx2.default());

  it('authorises a valid message', function () {
    expect(policyEngine.authorise(message)).to.be.eql(true);
  });

  describe('functionality: date', function () {
    it('rejects the message as it is received in a blocked date', function () {
      policyEngine.context.pdp.context.date = '01/01/2016';
      policyEngine.addPolicies([datePolicy]);
      policyEngine.addToList('global', 'date', 'blockedDates', '01/01/2016');
      expect(policyEngine.authorise(message)).to.be.eql(false);
    });
  });

  describe('functionality: domain', function () {
    it('rejects the message as it comes from a blocked domain', function () {
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([domainPolicy]);
      policyEngine.addToList('global', 'domain', 'blockedDomains', 'blockedDomain');
      expect(policyEngine.authorise(messageFromBlocked)).to.be.eql(false);
    });

    it('allows the message as it comes from a domain that is not blocked', function () {
      expect(policyEngine.authorise(message)).to.be.eql(true);
    });
  });

  describe('functionality: source', function () {
    it('rejects the message as it comes from a blocked source', function () {
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([sourcePolicy]);
      policyEngine.addToList('global', 'source', 'blockedEmails', 'user@blockedDomain');
      expect(policyEngine.authorise(messageFromBlocked)).to.be.eql(false);
    });

    it('allows the message as it comes from a source that is not blocked', function () {
      expect(policyEngine.authorise(message)).to.be.eql(true);
    });
  });

  describe('functionality: time of the day', function () {
    it('rejects the message as it is received in a blocked timeslot', function () {
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([timePolicy]);
      policyEngine.context.time = 1500;
      expect(policyEngine.authorise(message)).to.be.eql(false);
    });

    it('accepts the message as it is received in a timeslot not blocked', function () {
      policyEngine.context.time = 1701;
      expect(policyEngine.authorise(message)).to.be.eql(true);
    });
  });

  describe('functionality: weekday', function () {
    it('rejects the message as it is received in a blocked weekday', function () {
      policyEngine.context.weekday = '0';
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([weekdayPolicy]);
      policyEngine.addToList('global', 'weekday', 'blockedWeekdays', '0');
      expect(policyEngine.authorise(message)).to.be.eql(false);
    });

    it('allows the message as it comes from a weekday that is not blocked', function () {
      policyEngine.context.weekday = '1';
      expect(policyEngine.authorise(message)).to.be.eql(true);
    });
  });
});

describe('Policy Engine with Runtime Core context', function () {
  var runtimeRegistry = {
    getPreAuthSubscribers: function getPreAuthSubscribers() {
      return ['hyperty://domain/hyperty-instance'];
    },
    getHypertyName: function getHypertyName() {
      console.log('YOOOOOOOOOOOOOO');
      return 'HypertyChat';
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

  describe('identity', function () {
    it('should add an identity in the message body', function (done) {
      var message = { body: { auth: false, identity: { userProfile: { username: 'user@domain' } } }, id: 1, type: 'subscribe', from: 'hyperty://domain/hyperty-url', to: 'comm://domain/hyperty-instance' };
      policyEngine.removePolicies('*', '*');
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
    it('removes all policies', function () {
      policyEngine.removePolicies('*', '*');
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([]);
    });

    it('associates a policy for ID = user@domain', function () {
      policyEngine.addPolicies([groupPolicy]);
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([groupPolicy]);
    });

    it('associates a second policy for ID = user@domain', function () {
      policyEngine.addPolicies([sourcePolicy]);
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([groupPolicy, sourcePolicy]);
    });

    it('associates a policy for hyperty = HypertyChat', function () {
      policyEngine.addPolicies([weekdayPolicy2]);
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([groupPolicy, sourcePolicy, weekdayPolicy2]);
    });

    it('removes an existing policy associated for ID = user@domain', function () {
      policyEngine.removePolicies('user@domain', 'source in blockedEmails');
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([groupPolicy, weekdayPolicy2]);
    });

    it('tries to remove a policy that does not exist for ID = user@domain', function () {
      policyEngine.removePolicies('user@domain', 'block-08-20');
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([groupPolicy, weekdayPolicy2]);
    });

    it('removes all policies associated with ID = user@domain', function () {
      policyEngine.removePolicies('user@domain', '*');
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([weekdayPolicy2]);
    });

    it('removes all policies associated with hyperty = HypertyChat', function () {
      policyEngine.removePolicies('HypertyChat', '*');
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([]);
    });
  });

  describe('advanced policies management', function () {

    it('stores an advanced policy', function () {
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([orPolicy]);
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([orPolicy]);
    });

    it('deletes an advanced policy', function () {
      policyEngine.removePolicies(orPolicy.scope, orPolicy.condition);
      expect(policyEngine.context.getApplicablePolicies(message)).to.be.eql([]);
    });

    it('condition is verified when [or false true]', function () {
      policyEngine.addToList('global', 'source', 'students', 'user@domain');
      expect(policyEngine.context.pdp.verifiesAdvancedCondition(orPolicy.condition[0], orPolicy.condition[1], orPolicy.condition[2], orPolicy.scope, message)).to.be.eql(true);
    });

    it('condition is not verified when [and false true]', function () {
      expect(policyEngine.context.pdp.verifiesAdvancedCondition(andPolicy.condition[0], false, true, andPolicy.scope, message)).to.be.eql(false);
    });

    it('condition is verified when [not false]', function () {
      expect(policyEngine.context.pdp.verifiesAdvancedCondition(notPolicy.condition[0], notPolicy.condition[1], undefined, notPolicy.scope, message)).to.be.eql(true);
    });

    it('condition is not verified when [not true]', function () {
      expect(policyEngine.context.pdp.verifiesAdvancedCondition(notPolicy2.condition[0], notPolicy2.condition[1], undefined, notPolicy2.scope, message)).to.be.eql(false);
    });

    it('condition is not verified when [and [or false true] false]', function () {
      expect(policyEngine.context.pdp.verifiesAdvancedCondition(andOrPolicy.condition[0], andOrPolicy.condition[1], andOrPolicy.condition[2], andOrPolicy.scope, message)).to.be.eql(false);
    });

    it('condition is verified when [or true [and false true]]', function () {
      expect(policyEngine.context.pdp.verifiesAdvancedCondition(andOrPolicy2.condition[0], true, andOrPolicy2.condition[2], andOrPolicy2.scope, message)).to.be.eql(true);
    });
  });

  describe('groups management', function () {
    it('creates a group', function () {
      policyEngine.deleteGroup('global', 'students');
      policyEngine.createList('global', 'group', 'groupA');
      expect(policyEngine.getGroupsNames('global')).to.be.eql(['groupA']);
    });

    it('creates a second group', function () {
      policyEngine.createList('global', ' group', 'groupB');
      expect(policyEngine.getGroupsNames('global')).to.be.eql(['groupA', 'groupB']);
    });

    it('adds an email to a group', function () {
      policyEngine.addToList('global', 'source', 'groupA', 'user1@domain');
      expect(policyEngine.getList('global', 'groupA')).to.be.eql(['user1@domain']);
    });

    it('adds a second email to a group', function () {
      policyEngine.addToList('global', 'source', 'groupA', 'user2@domain');
      expect(policyEngine.getList('global', 'groupA')).to.be.eql(['user1@domain', 'user2@domain']);
    });

    it('removes a user from a group', function () {
      policyEngine.removeFromGroup('global', 'groupA', 'user1@domain');
      expect(policyEngine.getList('global', 'groupA')).to.be.eql(['user2@domain']);
    });

    it('deletes a group', function () {
      policyEngine.deleteGroup('global', 'groupA');
      expect(policyEngine.getList('global', 'groupA')).to.be.eql([]);
      expect(policyEngine.getGroupsNames('global')).to.be.eql(['groupB']);
    });
  });

  describe('functionality: source', function () {
    it('rejects the message as it comes from a blocked source', function (done) {
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([sourcePolicy]);
      policyEngine.addToList('global', 'source', 'blockedEmails', 'user@blockedDomain');
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

  describe('functionality: time of the day', function () {
    it('rejects the message as it is received in a blocked timeslot', function (done) {
      policyEngine.context.time = 1530;
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([timePolicy]);
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('accepts the message as it is received in a timeslot not blocked', function (done) {
      policyEngine.context.time = 1700;
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });

  describe('functionality: date', function () {
    it('rejects the message as it is received in a blocked date', function (done) {
      policyEngine.context.date = '01/01/2016';
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([datePolicy]);
      policyEngine.addToList('global', 'date', 'blockedDates', '01/01/2016');
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('accepts the message as it is received in a date not blocked', function (done) {
      policyEngine.context.date = '02/01/2016';
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });

  describe('functionality: domain', function () {
    it('rejects the message as it comes from a blocked domain', function (done) {
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([domainPolicy]);
      policyEngine.addToList('global', 'domain', 'blockedDomains', 'blockedDomain');
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

  describe('functionality: weekday', function () {
    it('rejects the message as it is received in a blocked weekday', function (done) {
      policyEngine.context.weekday = '0';
      policyEngine.removePolicies('*', '*');
      policyEngine.addPolicies([weekdayPolicy]);
      policyEngine.addToList('global', 'weekday', 'blockedWeekdays', '0');
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('allows the message as it comes from a weekday that is not blocked', function (done) {
      policyEngine.context.weekday = '1';
      expect(policyEngine.authorise(message).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(message).and.notify(done);
    });
  });

  describe('data objects management', function () {
    it('rejects a subscription attempt, as the policy rejects all', function (done) {
      policyEngine.addPolicies([blockAnySubscriptionPolicy]);
      expect(policyEngine.authorise(subscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });

    it('accepts a subscription attempt, as the policy accepts all', function (done) {
      policyEngine.removePolicies('global', 'subscription equals *');
      policyEngine.addPolicies([acceptAnySubscriptionPolicy]);
      expect(policyEngine.authorise(subscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(allowedSubscribeMessage).and.notify(done);
    });

    it('accepts a subscription attempt, as the policy accepts preauthorised subscribers and is preauthorised', function (done) {
      policyEngine.removePolicies('global', 'subscription equals *');
      policyEngine.addPolicies([acceptPreAuthSubscriptionPolicy]);
      expect(policyEngine.authorise(subscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.fulfilled.and.eventually.eql(allowedSubscribeMessage).and.notify(done);
    });

    it('rejects a subscription attempt, as the policy rejects non-preauthorised subscriber and is not preauthorised', function (done) {
      policyEngine.removePolicies('global', 'subscription in preauthorised');
      policyEngine.addPolicies([blockPreAuthSubscriptionPolicy]);
      expect(policyEngine.authorise(badSubscribeMessage).then(function (message) {
        return message;
      }), function (error) {
        return error;
      }).to.be.rejected.and.notify(done);
    });
  });

  describe('initial filtering', function () {
    it('message that loads an hyperty should not be validated by policies', function () {
      var loadMessage = { id: 2, from: 'hyperty-runtime://sandbox/external', to: 'hyperty-runtime://sandbox/internal', type: 'create' };
      expect(policyEngine.context.isToVerify(loadMessage)).to.be.eql(false);
    });
  });
});