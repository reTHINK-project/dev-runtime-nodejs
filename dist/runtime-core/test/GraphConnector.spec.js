'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _BloomFilter = require('../src/graphconnector/BloomFilter');

var _BloomFilter2 = _interopRequireDefault(_BloomFilter);

var _GraphConnector = require('../src/graphconnector/GraphConnector');

var _GraphConnector2 = _interopRequireDefault(_GraphConnector);

var _GraphConnectorContactData = require('../src/graphconnector/GraphConnectorContactData');

var _GraphConnectorContactData2 = _interopRequireDefault(_GraphConnectorContactData);

var _bip = require('bip39');

var _bip2 = _interopRequireDefault(_bip);

var _jsrsasign = require('jsrsasign');

var _jsrsasign2 = _interopRequireDefault(_jsrsasign);

var _Registry = require('../src/registry/Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _MessageBus = require('../src/bus/MessageBus');

var _MessageBus2 = _interopRequireDefault(_MessageBus);

var _RuntimeFactory = require('../resources/RuntimeFactory');

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.truncateThreshold = 0;

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

// dependencies


// variables
var runtimeURL = 'hyperty-runtime://ua.pt/123';
var runtimeFactory = new _RuntimeFactory2.default();
var appSandbox = runtimeFactory.createAppSandbox();

var identityModule = {
  getIdentities: function getIdentities() {
    var identities = [];
    var identityBundle = { identity: 'user://gmail.com/openidtest10', token: 'idToken' };
    identities.push(identityBundle);
    return identities;
  }
};

var getRegistry = new Promise(function (resolve, reject) {
  var registry = new _Registry2.default(runtimeURL, appSandbox, identityModule);
  resolve(registry);
});

getRegistry.then(function (registry) {
  describe('Graph Connector', function () {

    describe('construction', function () {
      it('create new GraphConnector instance with zero contacts', function () {
        var msgbus = new _MessageBus2.default(registry);
        registry.messageBus = msgbus;
        var graphConnector = new _GraphConnector2.default(runtimeURL, msgbus);
        expect(graphConnector.contacts.length).to.equal(0);
      });
    });

    describe('create mock address book', function () {
      var msgbus = new _MessageBus2.default(registry);
      registry.messageBus = msgbus;
      var graphConnector = new _GraphConnector2.default(runtimeURL, msgbus);
      var guid = void 0;
      var firstName = void 0;
      var lastName = void 0;
      var remGUIDArr = [];
      for (var j = 0; j < 299; j++) {

        // to mock GUIDs for now
        guid = Math.floor(Math.random() * 9999999999999999999999999999999999) + 1000000000000000000000000000000000;

        firstName = randomName();
        lastName = randomName();
        graphConnector.addContact(guid, firstName, lastName);
        if (j % 10 === 0) {
          remGUIDArr.push(guid);
        }
      }
      graphConnector.addContact('123', 'Alice', 'Wonderland');
      var expected = new _GraphConnectorContactData2.default('123', 'Alice', 'Wonderland');

      it('create new GraphConnector with random contacts', function () {
        expect(graphConnector.contacts.length).to.equal(300);
      });

      it('remove some contacts from GraphConnector', function () {
        for (var _j = 0; _j < remGUIDArr.length; _j++) {
          graphConnector.removeContact(remGUIDArr[_j]);
        }
        expect(graphConnector.contacts.length).to.equal(270);
      });

      it('get contact by first name', function () {
        var result = graphConnector.getContact('Alice');
        expect(result.length).to.equal(1);
        expect(result[0]).to.eql(expected);
      });

      it('get contact by last name', function () {
        var result = graphConnector.getContact('Wonderland');
        expect(result.length).to.equal(1);
        expect(result[0]).to.eql(expected);
      });

      it('check GUID when in direct contacts', function () {

        // Format is: RelatedContacts<Direct<GraphConnectorContactData>,FoF<GraphConnectorContactData>>
        var result = graphConnector.checkGUID('123');
        var directContacts = result[0];
        var fofs = result[1];
        expect(result.length).to.equal(2);
        expect(directContacts.length).to.equal(1);
        expect(fofs.length).to.equal(0);
        expect(directContacts[0]).to.eql(expected);
      });

      it('test direct contacts bloom filter', function () {

        graphConnector.calculateBloomFilter1Hop();

        for (var i = 0; i < remGUIDArr.length; i++) {
          var result = graphConnector.contactsBloomFilter1Hop.test(remGUIDArr[i]);
          expect(result).to.equal(false);
        }

        var resultAlice = graphConnector.contactsBloomFilter1Hop.test('123');
        expect(resultAlice).to.equal(true);
        expect(graphConnector.contactsBloomFilter1Hop.test('absdgdghdftgh')).to.equal(false);
        graphConnector.removeContact('123');
        expect(graphConnector.contactsBloomFilter1Hop.test('123')).to.equal(false);
      });

      it('test privacy setting for contacts', function () {

        graphConnector.addContact('123', 'Alice', 'Wonderland');
        graphConnector.calculateBloomFilter1Hop();
        expect(graphConnector.contactsBloomFilter1Hop.test('123')).to.equal(true);

        // set private
        graphConnector.getContact('Alice')[0].privateContact = true;
        graphConnector.calculateBloomFilter1Hop();
        expect(graphConnector.contactsBloomFilter1Hop.test('123')).to.equal(false);
      });

      it('check GUID when in friend-of-friend connection', function () {

        var bf = new _BloomFilter2.default(431328, // number of bits to allocate.
        10 // number of hash functions.
        );

        bf.add('george');
        bf.add('jerry');
        bf.add('elaine');
        graphConnector.getContact('Alice')[0].contactsBloomFilter1Hop = bf;

        var result = graphConnector.checkGUID('george');
        var directContacts = result[0];
        var fofs = result[1];
        expect(result.length).to.equal(2);
        expect(directContacts.length).to.equal(0);
        expect(fofs.length).to.equal(1);

        // connection through Alice
        expect(fofs[0].firstName).to.eql('Alice');
        expect(fofs[0].lastName).to.eql('Wonderland');
        expect(fofs[0].guid).to.eql('123');
      });

      it('bloom filter tests', function () {

        var jabberwocky = '`Twas brillig, and the slithy toves\n  Did gyre and gimble in the wabe:\nAll mimsy were the borogoves,\n  And the mome raths outgrabe.\n\n\"Beware the Jabberwock, my son!\n  The jaws that bite, the claws that catch!\nBeware the Jubjub bird, and shun\n  The frumious Bandersnatch!\"\n\nHe took his vorpal sword in hand:\n  Long time the manxome foe he sought --\nSo rested he by the Tumtum tree,\n  And stood awhile in thought.\n\nAnd, as in uffish thought he stood,\n  The Jabberwock, with eyes of flame,\nCame whiffling through the tulgey wood,\n  And burbled as it came!\n\nOne, two! One, two! And through and through\n  The vorpal blade went snicker-snack!\nHe left it dead, and with its head\n  He went galumphing back.\n\n\"And, has thou slain the Jabberwock?\n  Come to my arms, my beamish boy!\nO frabjous day! Callooh! Callay!\n  He chortled in his joy.\n\n`Twas brillig, and the slithy toves\n  Did gyre and gimble in the wabe;\nAll mimsy were the borogoves,\n  And the mome raths outgrabe.';

        var f = new _BloomFilter2.default(1000, 4);
        var n1 = 'Bess';
        var n2 = 'Jane';
        f.add(n1);
        expect(f.test(n1)).to.equal(true);
        expect(f.test(n2)).to.equal(false);

        f = new _BloomFilter2.default(1000, 4);
        n1 = jabberwocky;
        n2 = jabberwocky + '\n';
        f.add(n1);
        expect(f.test(n1)).to.equal(true);
        expect(f.test(n2)).to.equal(false);

        f = new _BloomFilter2.default(1000, 4);
        n1 = 'Ā';
        n2 = 'ā';
        var n3 = 'ă';
        f.add(n1);
        expect(f.test(n1)).to.equal(true);
        expect(f.test(n2)).to.equal(false);
        expect(f.test(n3)).to.equal(false);

        f = new _BloomFilter2.default(20, 10);
        f.add('abc');
        expect(f.test('wtf')).to.equal(false);

        f = new _BloomFilter2.default(1000, 4);
        f.add(1);
        expect(f.test(1)).to.equal(true);
        expect(f.test(2)).to.equal(false);

        f = new _BloomFilter2.default(1000, 4);
        for (var i = 0; i < 100; ++i) {
          f.add(i);
        }
        expect(f.size()).to.be.closeTo(99.953102, 1e-6);
        for (var _i = 0; _i < 1000; ++_i) {
          f.add(_i);
        }
        expect(f.size()).to.be.closeTo(950.424571, 1e-6);
      });
    });

    describe('GUID', function () {
      var msgbus = new _MessageBus2.default(registry);
      registry.messageBus = msgbus;
      var graphConnector1 = new _GraphConnector2.default(runtimeURL, msgbus);
      var graphConnector2 = new _GraphConnector2.default(runtimeURL, msgbus);

      it('GUID generation', function () {

        this.timeout(30000);

        var mnemonic1 = graphConnector1.generateGUID();
        var res = mnemonic1.split(' ');

        expect(res.length).to.equal(16);
      });

      it('GUID re-generation', function (done) {

        this.timeout(15000);

        // create mnemonic and sign Global Regsitry record
        var mnemonic1 = graphConnector1.generateGUID();
        var jwt1 = graphConnector1.signGlobalRegistryRecord();

        // mock reply from Global Registry
        graphConnector2.messageBus.addListener('global://registry/', function (msg) {
          var message = { id: msg.id, type: 'response', from: 'global://registry/', to: msg.from,
            body: { message: 'request was performed successfully',
              responseCode: 200,
              data: jwt1,
              errorCode: 0 } };

          graphConnector2.messageBus.postMessage(message, function (reply) {
            console.log('Reply GUID re-generation: ', reply);
          });
        });

        expect(graphConnector2.useGUID(mnemonic1).then(function (response) {

          var publicKey2 = graphConnector2.globalRegistryRecord.publicKey;
          var publicKeyObject2 = _jsrsasign2.default.KEYUTIL.getKey(publicKey2);

          var unwrappedJWT = KJUR.jws.JWS.parse(jwt1);
          var encodedString = jwt1.split('.').slice(0, 2).join('.');
          var sigValueHex = unwrappedJWT.sigHex;
          var sig = new KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
          sig.init(publicKeyObject2);
          sig.updateString(encodedString);
          var isValid = sig.verify(sigValueHex);

          return isValid;
        })).to.be.fulfilled.and.eventually.equal(true).and.notify(done);
      });
    });

    describe('Global Registry Connection - send', function () {
      var msgbus = new _MessageBus2.default(registry);
      registry.messageBus = msgbus;
      var graphConnector1 = new _GraphConnector2.default(runtimeURL, msgbus);
      var graphConnector2 = new _GraphConnector2.default(runtimeURL, msgbus);

      it('send Global Registry Record', function (done) {

        this.timeout(15000);

        // create mnemonic and sign Global Regsitry record
        var mnemonic1 = graphConnector1.generateGUID();
        var jwt1 = graphConnector1.signGlobalRegistryRecord();

        // mock reply from Global Registry 1
        graphConnector1.messageBus.addListener('global://registry/', function (msg) {
          var message = { id: msg.id, type: 'response', from: 'global://registry/', to: msg.from,
            body: { message: 'request was performed successfully',
              responseCode: 200,
              errorCode: 0 } };

          graphConnector1.messageBus.postMessage(message, function (reply) {
            console.log('Reply GRC - send: ', reply);
          });
        });

        expect(graphConnector1.sendGlobalRegistryRecord(jwt1).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal(200).and.notify(done);
      });
    });

    describe('Global Registry Connection - use GUID', function () {
      var msgbus = new _MessageBus2.default(registry);
      registry.messageBus = msgbus;
      var graphConnector1 = new _GraphConnector2.default(runtimeURL, msgbus);
      var graphConnector2 = new _GraphConnector2.default(runtimeURL, msgbus);

      it('re-use GUID and retrieve data from Global Registry', function (done) {

        this.timeout(15000);

        // create mnemonic and sign Global Regsitry record
        var mnemonic1 = graphConnector1.generateGUID();
        var jwt1 = graphConnector1.signGlobalRegistryRecord();
        var grr1 = graphConnector1.globalRegistryRecord;

        // mock reply from Global Registry 2
        graphConnector2.messageBus.addListener('global://registry/', function (msg) {
          var message = { id: msg.id, type: 'response', from: 'global://registry/', to: msg.from,
            body: { message: 'request was performed successfully',
              responseCode: 200,
              data: jwt1,
              errorCode: 0 } };

          graphConnector2.messageBus.postMessage(message, function (reply) {
            console.log('Reply GRC - use GUID: ', reply);
          });
        });

        expect(graphConnector2.useGUID(mnemonic1).then(function (response) {
          return graphConnector2.globalRegistryRecord;
        })).to.be.fulfilled.and.eventually.eql(grr1).and.notify(done);
      });
    });

    describe('Querying Global Registry', function () {
      var msgbus = new _MessageBus2.default(registry);
      registry.messageBus = msgbus;
      var graphConnector1 = new _GraphConnector2.default(runtimeURL, msgbus);
      var graphConnector2 = new _GraphConnector2.default(runtimeURL, msgbus);

      it('query Global Registry', function (done) {

        this.timeout(15000);

        // create mnemonic and sign Global Regsitry record
        var mnemonic1 = graphConnector1.generateGUID();
        var jwt1 = graphConnector1.signGlobalRegistryRecord();
        var guid1 = graphConnector1.globalRegistryRecord.guid;
        var result = new _GraphConnectorContactData2.default();

        // mock reply from Global Registry
        graphConnector2.messageBus.addListener('global://registry/', function (msg) {
          var message = { id: 1, type: 'response', from: 'global://registry/', to: msg.from,
            body: { message: 'request was performed successfully',
              responseCode: 200,
              data: jwt1,
              errorCode: 0 } };

          graphConnector2.messageBus.postMessage(message, function (reply) {
            console.log('Reply QGR - query: ', reply);
          });
        });

        expect(graphConnector2.queryGlobalRegistry(guid1).then(function (response) {
          return response.guid;
        })).to.be.fulfilled.and.eventually.equal(guid1).and.notify(done);
      });
    });
  });
});

function randomName() {
  var text = '';
  var firstLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var restLetters = 'abcdefghijklmnopqrstuvwxyz';

  text += firstLetter.charAt(Math.floor(Math.random() * firstLetter.length));

  for (var i = 0; i < 4; i++) {
    text += restLetters.charAt(Math.floor(Math.random() * restLetters.length));
  }

  return text;
}