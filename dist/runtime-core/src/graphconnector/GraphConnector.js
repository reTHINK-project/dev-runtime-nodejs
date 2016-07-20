'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 PT Inovação e Sistemas SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 INESC-ID
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 QUOBIS NETWORKS SL
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 ORANGE SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 Deutsche Telekom AG
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 Apizee
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **/


var _GraphConnectorContactData = require('./GraphConnectorContactData');

var _GraphConnectorContactData2 = _interopRequireDefault(_GraphConnectorContactData);

var _BloomFilter = require('./BloomFilter');

var _BloomFilter2 = _interopRequireDefault(_BloomFilter);

var _GlobalRegistryRecord = require('./GlobalRegistryRecord');

var _GlobalRegistryRecord2 = _interopRequireDefault(_GlobalRegistryRecord);

var _bitcoinjsLib = require('bitcoinjs-lib');

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _bip = require('bip39');

var _bip2 = _interopRequireDefault(_bip);

var _sjcl = require('sjcl');

var _sjcl2 = _interopRequireDefault(_sjcl);

var _jsrsasign = require('jsrsasign');

var _jsrsasign2 = _interopRequireDefault(_jsrsasign);

var _base64Url = require('base64-url');

var _base64Url2 = _interopRequireDefault(_base64Url);

var _hex = require('hex64');

var _hex2 = _interopRequireDefault(_hex);

var _buffer = require('buffer');

var _buffer2 = _interopRequireDefault(_buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Graph Connector contains the contact list/address book.
* @author beierle@tu-berlin.de
*/

var GraphConnector = function () {

  // TODO: import / export methods

  /**
   * Constructs a new and empty Graph Connector.
   * @param {string}   HypertyRuntimeURL    The Hyperty Runtime URL.
   * @param {messageBus}    MessageBus      The Message Bus.
   */

  function GraphConnector(hypertyRuntimeURL, messageBus) {
    _classCallCheck(this, GraphConnector);

    this.contacts = [];
    this.lastCalculationBloomFilter1Hop = new Date(0).toISOString();

    this.globalRegistryRecord = new _GlobalRegistryRecord2.default();
    this._prvKey;
    this.privateKey;

    this.groups = [];
    this.residenceLocation;
    this.firstName;
    this.lastName;

    this._messageBus = messageBus;
    this._hypertyRuntimeURL = hypertyRuntimeURL;
  }

  /**
  * Returns the MessageBus.
  * @param {MessageBus}           messageBus    The Message Bus.
  */


  _createClass(GraphConnector, [{
    key: 'generateGUID',


    /**
     * Generates a GUID and returns a mnemonic from which the GUID can be re-created later.
     * @returns  {string}    mnemonic      A string with 16 words.
     */
    value: function generateGUID() {

      // generate mnemonic and salt
      _buffer2.default.TYPED_ARRAY_SUPPORT = true;
      var mnemonic = _bip2.default.generateMnemonic(160);

      var saltWord = _bip2.default.generateMnemonic(8);
      this._createKeys(mnemonic, saltWord);

      // set lasUpdate date
      this.globalRegistryRecord.lastUpdate = new Date().toISOString();

      // set defualt timeout
      var timeout = new Date();
      timeout.setMonth(timeout.getMonth() + 120);
      this.globalRegistryRecord.timeout = timeout.toISOString();

      // set default values
      this.globalRegistryRecord.active = 1;
      this.globalRegistryRecord.revoked = 0;

      // return mnemonic
      var rtn = mnemonic + ' ' + saltWord;
      return rtn;
    }

    /**
     * Generates a public/private key pair from a given mnemonic (16 words).
     * Expects a string containing 16 words seperated by single spaces.
     * Retrieves data from the Global Registry.
     * @param  {string}     mnemonicAndSalt     A string of 16 words.
     * @returns  {Promise}  Promise          Global Registry Record.
     */

  }, {
    key: 'useGUID',
    value: function useGUID(mnemonicAndSalt) {
      // TODO: check if format is correct and if all words are from bip39 english wordlist
      var lastIndex = mnemonicAndSalt.lastIndexOf(' ');
      var mnemonic = mnemonicAndSalt.substring(0, lastIndex);
      var saltWord = mnemonicAndSalt.substring(lastIndex + 1, mnemonicAndSalt.length);
      this._createKeys(mnemonic, saltWord);

      var _this = this;

      // retrieve current info from Global Registry and fill this.globalRegistryRecord
      var msg = {
        type: 'READ',
        from: this._hypertyRuntimeURL + '/graph-connector',
        to: 'global://registry/',
        body: { guid: this.globalRegistryRecord.guid }
      };

      return new Promise(function (resolve, reject) {

        if (_this.messageBus === undefined) {
          reject('MessageBus not found on GraphConnector');
        } else {

          _this.messageBus.postMessage(msg, function (reply) {

            // reply should be the JSON returned from the Global Registry REST-interface
            var jwt = reply.body.data;
            var unwrappedJWT = KJUR.jws.JWS.parse(reply.body.data);
            var dataEncoded = unwrappedJWT.payloadObj.data;
            var dataDecoded = _base64Url2.default.decode(dataEncoded);
            var dataJSON = JSON.parse(dataDecoded);

            // public key should match
            var sameKey = dataJSON.publicKey == _this.globalRegistryRecord.publicKey;
            if (!sameKey) {
              reject('Retrieved key does not match!');
            } else {
              var publicKeyObject = _jsrsasign2.default.KEYUTIL.getKey(dataJSON.publicKey);
              var encodedString = jwt.split('.').slice(0, 2).join('.');
              var sigValueHex = unwrappedJWT.sigHex;
              var sig = new KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
              sig.init(publicKeyObject);
              sig.updateString(encodedString);
              var isValid = sig.verify(sigValueHex);

              if (!isValid) {
                reject('Retrieved Record not valid!');
              } else {
                if (typeof dataJSON.userIDs != 'undefined' && dataJSON.userIDs != null) {
                  _this.globalRegistryRecord.userIDs = dataJSON.userIDs;
                }
                _this.globalRegistryRecord.lastUpdate = dataJSON.lastUpdate;
                _this.globalRegistryRecord.timeout = dataJSON.timeout;
                _this.globalRegistryRecord.salt = dataJSON.salt;
                _this.globalRegistryRecord.active = dataJSON.active;
                _this.globalRegistryRecord.revoked = dataJSON.revoked;
                resolve(_this.globalRegistryRecord);
              }
            }
          });
        }
      });
    }

    /**
     * Creates the keys from mnemonic and salt. Also sets public key, guid, and salt for globalRegistryRecord.
     * @param  {string}     mnemonic     A string with 15 words.
     * @param  {string}     salt         A word.
     */

  }, {
    key: '_createKeys',
    value: function _createKeys(mnemonic, saltWord) {

      // generate key pair
      var seed = _bip2.default.mnemonicToSeed(mnemonic);
      _buffer2.default.TYPED_ARRAY_SUPPORT = false;
      var hdnode = _bitcoinjsLib2.default.HDNode.fromSeedBuffer(seed);
      var ecparams = KJUR.crypto.ECParameterDB.getByName('secp256k1');
      var biPrv = hdnode.keyPair.d; // private key big integer
      var epPub = ecparams.G.multiply(biPrv); // d*G
      var biX = epPub.getX().toBigInteger(); // x from Q
      var biY = epPub.getY().toBigInteger(); // y from Q
      var charlen = ecparams.keylen / 4;
      var hPrv = ('0000000000' + biPrv.toString(16)).slice(-charlen);
      var hX = ('0000000000' + biX.toString(16)).slice(-charlen);
      var hY = ('0000000000' + biY.toString(16)).slice(-charlen);
      var hPub = '04' + hX + hY;
      this._prvKey = new KJUR.crypto.ECDSA({ curve: 'secp256k1' });
      this._prvKey.setPrivateKeyHex(hPrv);
      this._prvKey.isPrivate = true;
      this._prvKey.isPublic = false;
      var pubKey = new KJUR.crypto.ECDSA({ curve: 'secp256k1' });
      this.privateKey = _jsrsasign2.default.KEYUTIL.getPEM(this._prvKey, 'PKCS8PRV');
      pubKey.setPublicKeyHex(hPub);
      pubKey.isPrivate = false;
      pubKey.isPublic = true;
      var publicKey = _jsrsasign2.default.KEYUTIL.getPEM(pubKey, 'PKCS8PUB');
      publicKey = publicKey.replace(/(\r\n|\n|\r)/gm, '');
      this.globalRegistryRecord.publicKey = publicKey;

      // generate salt
      var saltHashedBitArray = _sjcl2.default.hash.sha256.hash(saltWord);
      var salt = _sjcl2.default.codec.base64.fromBits(saltHashedBitArray);
      this.globalRegistryRecord.salt = salt;

      // generate GUID
      var iterations = 10000;
      var guidBitArray = _sjcl2.default.misc.pbkdf2(this.globalRegistryRecord.publicKey, salt, iterations);
      var guid = _sjcl2.default.codec.base64url.fromBits(guidBitArray);
      this.globalRegistryRecord.guid = guid;
    }

    /**
     * SignGenerates a public/private key pair from a given mnemonic.
     * @returns  {string}     JWT     JSON Web Token ready to commit to Global Registry.
     */

  }, {
    key: 'signGlobalRegistryRecord',
    value: function signGlobalRegistryRecord() {

      var record = this.globalRegistryRecord.getRecord();
      var recordString = JSON.stringify(record);
      var recordStringBase64 = _base64Url2.default.encode(recordString);

      var jwtTemp = KJUR.jws.JWS.sign(null, { alg: 'ES256' }, { data: recordStringBase64 }, this._prvKey);
      var encodedString = jwtTemp.split('.').slice(0, 2).join('.');

      var sig = new KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
      sig.init(this.privateKey);
      sig.updateString(encodedString);

      var signatureHex = sig.sign();
      var signature = _hex2.default.toBase64(signatureHex);
      var jwt = encodedString + '.' + signature;
      return jwt;
    }

    /**
     * Takes the Global Registry Record as a signed JWT and sends it to the Global Registry via the MessageBus.
     * Returns the response code of the REST-interface of the Global Registry as a Promise.
     * @param  {string}     jwt     The Global Registry Record as a signed JWT.
     * @returns {Propmise}  Promise Response Code from Global Registry.
     */

  }, {
    key: 'sendGlobalRegistryRecord',
    value: function sendGlobalRegistryRecord(jwt) {

      var payloadObj = KJUR.jws.JWS.parse(jwt).payloadObj;
      var guid = payloadObj.guid;

      var _this = this;

      var msg = {
        type: 'CREATE',
        from: this._hypertyRuntimeURL + '/graph-connector',
        to: 'global://registry/',
        body: { guid: this.globalRegistryRecord.guid, jwt: jwt }
      };

      return new Promise(function (resolve, reject) {

        if (_this.messageBus === undefined) {
          reject('MessageBus not found on GraphConnector');
        } else {

          _this.messageBus.postMessage(msg, function (reply) {

            var responseCode = reply.body.responseCode;
            if (responseCode == 200) {
              resolve(200);
            } else {
              reject(responseCode);
            }
          });
        }
      });
    }

    /**
     * Queries the Global Registry for a given GUID.
     * Returns a Graph Connector Contact Data as a Promise.
     * @param  {string}   guid  The GUID to query the Global Registry for
     * @returns   {Promise}   Promise   Graph Connector Contact Data containing UserIDs.
     */

  }, {
    key: 'queryGlobalRegistry',
    value: function queryGlobalRegistry(guid) {

      var _this = this;

      var msg = {
        type: 'READ',
        from: this._hypertyRuntimeURL + '/graph-connector',
        to: 'global://registry/',
        body: { guid: guid }
      };

      return new Promise(function (resolve, reject) {

        if (_this.messageBus === undefined) {
          reject('MessageBus not found on GraphConnector');
        } else {

          _this.messageBus.postMessage(msg, function (reply) {

            // reply should be the JSON returned from the Global Registry REST-interface
            var jwt = reply.body.data;
            var unwrappedJWT = KJUR.jws.JWS.parse(reply.body.data);
            var dataEncoded = unwrappedJWT.payloadObj.data;
            var dataDecoded = _base64Url2.default.decode(dataEncoded);
            var dataJSON = JSON.parse(dataDecoded);

            var publicKeyObject = _jsrsasign2.default.KEYUTIL.getKey(dataJSON.publicKey);
            var encodedString = jwt.split('.').slice(0, 2).join('.');
            var sigValueHex = unwrappedJWT.sigHex;
            var sig = new KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
            sig.init(publicKeyObject);
            sig.updateString(encodedString);
            var isValid = sig.verify(sigValueHex);

            if (!isValid) {
              reject('Retrieved Record not valid!');
            } else {
              var queriedContact = new _GraphConnectorContactData2.default(dataJSON.guid, '', '');
              if (typeof dataJSON.userIDs != 'undefined' && dataJSON.userIDs != null) {
                queriedContact.userIDs = dataJSON.userIDs;
              }
              resolve(queriedContact);
            }
          });
        }
      });
    }

    /**
     * Adds a UserID for the user.
     * @param  {string}     userID          The UserID for a Domain Registry to add for the user.
     */

  }, {
    key: 'addUserID',
    value: function addUserID(userID) {
      // check if already inside
      var found = false;
      for (var i = 0; i < this.globalRegistryRecord.userIDs.length; i++) {
        if (this.globalRegistryRecord.userIDs == userID) {
          found = true;
        }
      }
      if (!found) {
        this.globalRegistryRecord.userIDs.push(userID);
      }
    }

    /**
     * Removes a UserID for the user.
     * @param  {string}     userID          The UserID to remove.
     */

  }, {
    key: 'removeUserID',
    value: function removeUserID(userID) {
      for (var i = 0; i < this.globalRegistryRecord.userIDs.length; i++) {
        if (this.globalRegistryRecord.userIDs == userID) {
          this.globalRegistryRecord.userIDs.splice(i, 1);
        }
      }
    }

    /**
     * Add a contact to the Graph Connector.
     * @param  {string}   guid          GUID of the new contact.
     * @param  {string}   firstName     First name of the new contact.
     * @param  {string}   lastname      Last name of the new contact.
     */

  }, {
    key: 'addContact',
    value: function addContact(guid, firstName, lastName) {

      // TODO: what if two contacts have the same GUID?
      // TODO: reject invalid GUIDs

      this.contacts.push(new _GraphConnectorContactData2.default(guid, firstName, lastName));
    }

    /**
     * Remove a contact from the Graph Connector.
     * @param  {string}     guid      GUID of the user to be removed.
     */

  }, {
    key: 'removeContact',
    value: function removeContact(guid) {
      // remove from contacts
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].guid == guid) {
          this.contacts.splice(i, 1);
        }
      }

      // re-calculate BF1hop
      this.calculateBloomFilter1Hop();
    }

    /**
     * Calculates the Bloom filter containing all non-private contacts.
     */

  }, {
    key: 'calculateBloomFilter1Hop',
    value: function calculateBloomFilter1Hop() {
      var bf = new _BloomFilter2.default(431328, // number of bits to allocate. With 30000 entries, we have a false positive rate of 0.1 %.
      10 // number of hash functions.
      );
      for (var i = 0; i < this.contacts.length; i++) {
        if (!this.contacts[i].privateContact) {
          bf.add(this.contacts[i].guid);
        }
      }
      this.contactsBloomFilter1Hop = bf;
      this.lastCalculationBloomFilter1Hop = new Date().toISOString();
    }

    /**
     * Gets contacts by name.
     * @param  {string}   name    First or last name to look for in the contact list.
     * @returns  {array}   matchingContacts       Contacts matching the given name. The format is: Contacts<GraphConnectorContactData>.
     */

  }, {
    key: 'getContact',
    value: function getContact(name) {
      // TODO: optimize, e.g., find misspelled people
      var rtnArray = [];
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].firstName == name || this.contacts[i].lastName == name) {
          rtnArray.push(this.contacts[i]);
        }
      }
      return rtnArray;
    }

    /**
     * Checks, if the given GUID is known and returns a list of contacs that are direct connections as well as a list of contacts that (most likely) know the given contact.
     * @param  {string}     guid      GUID of the contact to look for.
     * @returns  {array}    relatedContacts     List of related direct contacts and of related friends-of-friends contacts.The format is: RelatedContacts<Direct<GraphConnectorContactData>,FoF<GraphConnectorContactData>>.
     */

  }, {
    key: 'checkGUID',
    value: function checkGUID(guid) {
      var directContactsArray = [];
      var fofContactsArray = [];
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].guid == guid) {
          directContactsArray.push(this.contacts[i]);
        }
        var bf1hop = this.contacts[i].contactsBloomFilter1Hop;
        if (bf1hop !== undefined) {
          if (bf1hop.test(guid)) {
            fofContactsArray.push(this.contacts[i]);
          }
        }
      }
      var rtnArray = [];
      rtnArray.push(directContactsArray, fofContactsArray);
      return rtnArray;
    }

    // TODO: exportGraphData(?){}
    // TODO: importGraphData(?){}

  }, {
    key: 'messageBus',
    get: function get() {
      return this._messageBus;
    }

    /**
    * Sets the MessageBus.
    * @param {MessageBus}           messageBus    The Message Bus.
    */
    ,
    set: function set(messageBus) {
      this._messageBus = messageBus;
    }
  }]);

  return GraphConnector;
}();

exports.default = GraphConnector;