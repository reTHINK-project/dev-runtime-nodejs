'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

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

/**
 * The Graph Connector contains the contact list/address book.
 * @author beierle@tu-berlin.de
 */
/**
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
var GraphConnector = function () {

  // TODO: import / export methods

  /**
   * Constructs a new and empty Graph Connector.
   * @param {string}   hypertyRuntimeURL    The Hyperty Runtime URL.
   * @param {messageBus}    messageBus      The Message Bus.
   * @param {storageManager} storageManager the storage Manager.
   */
  function GraphConnector(hypertyRuntimeURL, messageBus, storageManager) {
    (0, _classCallCheck3.default)(this, GraphConnector);

    this.contacts = [];
    this.lastCalculationBloomFilter1Hop = new Date(0).toISOString();

    this.globalRegistryRecord = new _GlobalRegistryRecord2.default();
    this._prvKey;
    this.privateKey;

    this.groups = [];
    this.residenceLocation = '';
    this.firstName = '';
    this.lastName = '';

    this._messageBus = messageBus;
    this._hypertyRuntimeURL = hypertyRuntimeURL;

    if (!storageManager) throw new Error('storageManager is missing');
    this.storageManager = storageManager;

    this._loadGraphConnector();
  }

  /**
   * Returns the MessageBus.
   */


  (0, _createClass3.default)(GraphConnector, [{
    key: 'setOwnerName',


    /**
     * Sets the first name and last name of the owner.
     * @param  {string}     fname     The owner's first name.
     * @param  {string}     lname     The owner's last name.
     * @returns  {boolean} Returns true if the owner name is successfully added.
     */
    value: function setOwnerName(fname, lname) {
      var status = false;
      if (typeof fname !== 'undefined') {
        this.firstName = fname;
        if (typeof lname !== 'undefined') {
          this.lastName = lname;
        }
        status = true;
      }
      this.storageManager.set('graphConnector:firstName', 0, this.firstName);
      this.storageManager.set('graphConnector:lastName', 0, this.lastName);

      return status;
    }

    /**
     * Generates a GUID and returns a mnemonic from which the GUID can be re-created later.
     * @returns  {string}    mnemonic      A string with 16 words.
     */

  }, {
    key: 'generateGUID',
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
      //save to the storage
      this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);
      this.storageManager.set('graphConnector:privateKey', 0, this.privateKey);

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

      return new _promise2.default(function (resolve, reject) {

        if (_this.messageBus === undefined) {
          reject('MessageBus not found on GraphConnector');
        } else {

          _this.messageBus.postMessage(msg, function (reply) {

            console.log(reply);

            // reply should be the JSON returned from the Global Registry REST-interface
            var jwt = reply.body.Value;

            if (typeof jwt !== 'undefined') {
              var unwrappedJWT = _jsrsasign2.default.KJUR.jws.JWS.parse(reply.body.Value);
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
                var sig = new _jsrsasign2.default.KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
                sig.init(publicKeyObject);
                sig.updateString(encodedString);
                var isValid = sig.verify(sigValueHex);

                if (!isValid) {
                  reject('Retrieved Record not valid!');
                } else {
                  if (typeof dataJSON.userIDs != 'undefined' && dataJSON.userIDs != null) {
                    _this.globalRegistryRecord.userIDs = dataJSON.userIDs;
                  }
                  if (typeof dataJSON.legacyIDs != 'undefined' && dataJSON.legacyIDs != null) {
                    _this.globalRegistryRecord.legacyIDs = dataJSON.legacyIDs;
                  }
                  _this.globalRegistryRecord.lastUpdate = dataJSON.lastUpdate;
                  _this.globalRegistryRecord.timeout = dataJSON.timeout;
                  _this.globalRegistryRecord.salt = dataJSON.salt;
                  _this.globalRegistryRecord.active = dataJSON.active;
                  _this.globalRegistryRecord.revoked = dataJSON.revoked;
                  _this.globalRegistryRecord.defaults = dataJSON.defaults;

                  _this.storageManager.set('graphConnector:globalRegistryRecord', 0, _this.globalRegistryRecord);
                  _this.storageManager.set('graphConnector:privateKey', 0, _this.privateKey);

                  resolve(_this.globalRegistryRecord);
                }
              }
            } else {
              resolve('not found');
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
      var ecparams = _jsrsasign2.default.KJUR.crypto.ECParameterDB.getByName('secp256k1');
      var biPrv = hdnode.keyPair.d; // private key big integer
      var epPub = ecparams.G.multiply(biPrv); // d*G
      var biX = epPub.getX().toBigInteger(); // x from Q
      var biY = epPub.getY().toBigInteger(); // y from Q
      var charlen = ecparams.keylen / 4;
      var hPrv = ('0000000000' + biPrv.toString(16)).slice(-charlen);
      var hX = ('0000000000' + biX.toString(16)).slice(-charlen);
      var hY = ('0000000000' + biY.toString(16)).slice(-charlen);
      var hPub = '04' + hX + hY;
      this._prvKey = new _jsrsasign2.default.KJUR.crypto.ECDSA({ curve: 'secp256k1' });
      this._prvKey.setPrivateKeyHex(hPrv);
      this._prvKey.isPrivate = true;
      this._prvKey.isPublic = false;
      var pubKey = new _jsrsasign2.default.KJUR.crypto.ECDSA({ curve: 'secp256k1' });
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
      var recordString = (0, _stringify2.default)(record);
      var recordStringBase64 = _base64Url2.default.encode(recordString);
      var jwtTemp = _jsrsasign2.default.KJUR.jws.JWS.sign(null, { alg: 'ES256' }, { data: recordStringBase64 }, this._prvKey);
      var encodedString = jwtTemp.split('.').slice(0, 2).join('.');

      var sig = new _jsrsasign2.default.KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
      sig.init(this.privateKey);
      sig.updateString(encodedString);

      var signatureHex = sig.sign();
      var signature = _hex2.default.toBase64(signatureHex);
      var jwt = encodedString + '.' + signature;
      this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);
      this.storageManager.set('graphConnector:privateKey', 0, this.privateKey);
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

      var unwrappedJWT = _jsrsasign2.default.KJUR.jws.JWS.parse(jwt);
      var dataEncoded = unwrappedJWT.payloadObj.data;
      var dataDecoded = _base64Url2.default.decode(dataEncoded);
      var dataJSON = JSON.parse(dataDecoded);

      var _this = this;

      var msg = {
        type: 'CREATE',
        from: this._hypertyRuntimeURL + '/graph-connector',
        to: 'global://registry/',
        body: { guid: dataJSON.guid, jwt: jwt }
      };

      return new _promise2.default(function (resolve, reject) {

        if (_this.messageBus === undefined) {
          reject('MessageBus not found on GraphConnector');
        } else {

          _this.messageBus.postMessage(msg, function (reply) {
            var responseCode = reply.body.Code;
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
     * Edit the values for a specific contact.
     * @param  {string}     guidOld          GUID to identify the contact to edit.
     * @param  {string}     firstName          First name of the contact.
     * @param  {string}     lastName          Last name of the contact.
     * @param  {string}     guidNew          New guid of the contact.
     * @param  {boolean}     privStatus          Boolean value to set the private status of the contact.
     * @returns  {array}   Returns the array which contains the contact with new values
     */

  }, {
    key: 'editContact',
    value: function editContact(guidOld, firstName, lastName, guidNew, privStatus) {

      var rtnArray = [];

      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i]._guid == guidOld) {
          if (guidOld == guidNew) {

            this.contacts[i]._firstName = firstName;
            this.contacts[i]._lastName = lastName;
            this.contacts[i]._guid = guidOld;
            this.contacts[i]._privateContact = privStatus;

            rtnArray.push(this.contacts[i]);
          } else {

            if (!this.guidExist(guidNew)) {

              this.contacts[i]._firstName = firstName;
              this.contacts[i]._lastName = lastName;
              this.contacts[i]._guid = guidNew;
              this.contacts[i]._privateContact = privStatus;

              rtnArray.push(this.contacts[i]);
            }
          }
          if (this.contacts[i]._privateContact) {
            // re-calculate BF1hop
            this.calculateBloomFilter1Hop();
          }
        }
      }
      this.storageManager.set('graphConnector:contacts', 0, this.contacts);

      return rtnArray;
    }

    /**
     * To check whether the GUID already exist.
     * @param  {string}     guid        GUID which needs to be checked.
     * @returns  {boolean}   Returns true if the GUID exist
     */

  }, {
    key: 'guidExist',
    value: function guidExist(guid) {

      var success = false;

      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i]._guid == guid || this.globalRegistryRecord.guid == guid) {
          success = true;
        }
      }
      return success;
    }

    /**
     * To return the owner.
     * @returns  {GraphConnectorContactData}   Returns the owner.
     */

  }, {
    key: 'getOwner',
    value: function getOwner() {

      var owner = new _GraphConnectorContactData2.default(this.globalRegistryRecord.guid, this.firstName, this.lastName);

      owner.groups = this.groups;
      owner.lastCalculationBloomFilter1Hop = this.lastCalculationBloomFilter1Hop;
      owner.residenceLocation = this.residenceLocation;
      owner.contactsBloomFilter1Hop = this.contactsBloomFilter1Hop;
      owner.userIDs = this.globalRegistryRecord.userIDs;
      owner.legacyIDs = this.globalRegistryRecord.legacyIDs;
      owner.defaults = this.globalRegistryRecord.defaults;

      return owner;
    }

    /**
     * Queries the Global Registry for a given GUID.
     * Adds the UserID information from the Global Registry to a contact, if the given GUID matches a user in the contacts.
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
      return new _promise2.default(function (resolve, reject) {

        if (_this.messageBus === undefined) {
          reject('MessageBus not found on GraphConnector');
        } else {

          _this.messageBus.postMessage(msg, function (reply) {

            console.log(reply);

            // reply should be the JSON returned from the Global Registry REST-interface
            var jwt = reply.body.Value;
            if (typeof jwt !== 'undefined') {

              if (reply.body.Code == 200) {
                console.log('verify JWT');
                var unwrappedJWT = _jsrsasign2.default.KJUR.jws.JWS.parse(reply.body.Value);
                var dataEncoded = unwrappedJWT.payloadObj.data;
                var dataDecoded = _base64Url2.default.decode(dataEncoded);
                var dataJSON = JSON.parse(dataDecoded);
                var publicKeyObject = _jsrsasign2.default.KEYUTIL.getKey(dataJSON.publicKey);
                var encodedString = jwt.split('.').slice(0, 2).join('.');
                var sigValueHex = unwrappedJWT.sigHex;
                var sig = new _jsrsasign2.default.KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
                sig.init(publicKeyObject);
                sig.updateString(encodedString);
                var isValid = sig.verify(sigValueHex);
                if (!isValid) {
                  console.log('invalid JWT');
                  reject('Retrieved Record not valid!');
                } else {
                  console.log('valid JWT');
                  var queriedContact = new _GraphConnectorContactData2.default(dataJSON.guid, '', '');
                  if (typeof dataJSON.userIDs != 'undefined' && dataJSON.userIDs != null) {
                    queriedContact.userIDs = dataJSON.userIDs;

                    for (var i = 0; i < _this.contacts.length; i++) {
                      if (_this.contacts[i]._guid == guid) {
                        _this.contacts[i]._userIDs = dataJSON.userIDs;
                      }
                    }
                  }

                  if (typeof dataJSON.legacyIDs != 'undefined' && dataJSON.legacyIDs != null) {
                    queriedContact.legacyIDs = dataJSON.legacyIDs;

                    for (var _i = 0; _i < _this.contacts.length; _i++) {
                      if (_this.contacts[_i]._guid == guid) {
                        _this.contacts[_i]._legacyIDs = dataJSON.legacyIDs;
                      }
                    }
                  }

                  resolve(queriedContact);
                }
              } else {
                console.log('Response code is not 200');
                resolve(reply.body.Description);
              }
            } else {
              console.log(' undefined Response');
              resolve('undefined');
            }
          });
        }
      });
    }

    /**
     * Adds a UserID for the user.
     * @param {string} uid.
     * @param {string} domain.
     * @returns  {boolean}   returns false if the userID exists and the user ID will not be added, true otherwise.
     */

  }, {
    key: 'addUserID',
    value: function addUserID(uid, domain) {
      // check if already inside
      var found = true;
      for (var i = 0; i < this.globalRegistryRecord.userIDs.length; i++) {
        if (this.globalRegistryRecord.userIDs[i].uid == uid && this.globalRegistryRecord.userIDs[i].domain == domain) {
          found = false;
        }
      }
      if (found) {
        var item = new Object();
        item.uid = uid;
        item.domain = domain;
        this.globalRegistryRecord.userIDs.push(item);
        this.globalRegistryRecord.lastUpdate = new Date().toISOString();
      }

      this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);

      return found;
    }

    /**
     * Removes a UserID for the user.
     * @param {string} uid.
     * @param {string} domain.
     * @returns  {boolean}   true if the userID exists and deleted, false otherwise.
     */

  }, {
    key: 'removeUserID',
    value: function removeUserID(uid, domain) {
      var found = false;
      for (var i = 0; i < this.globalRegistryRecord.userIDs.length; i++) {
        if (this.globalRegistryRecord.userIDs[i].uid == uid && this.globalRegistryRecord.userIDs[i].domain == domain) {
          this.globalRegistryRecord.userIDs.splice(i, 1);
          this.globalRegistryRecord.lastUpdate = new Date().toISOString();
          found = true;
        }
      }

      this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);

      return found;
    }

    /**
     * Adds a Legacy ID for the user.
     * @param {string} type.
     * @param {string} category.
     * @param {string} description.
     * @param {string} id.
     * @returns  {boolean}   returns false if the ID exists and the Legacy ID will not be added, true otherwise.
     */

  }, {
    key: 'addLegacyID',
    value: function addLegacyID(type, category, description, id) {
      // check if already inside
      var found = true;
      for (var i = 0; i < this.globalRegistryRecord.legacyIDs.length; i++) {
        if (this.globalRegistryRecord.legacyIDs[i].id == id) {
          found = false;
        }
      }
      if (found) {
        var item = new Object();
        item.type = type;
        item.category = category;
        item.description = description;
        item.id = id;
        this.globalRegistryRecord.legacyIDs.push(item);
        this.globalRegistryRecord.lastUpdate = new Date().toISOString();
      }

      this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);

      return found;
    }

    /**
     * Removes a LegacyID for the user.
     * @param {string} type
     * @param {string} category
     * @param {string} description
     * @param {string} id
     * @returns  {boolean}   true if the LegacyID exists and deleted, false otherwise.
     */

  }, {
    key: 'removeLegacyID',
    value: function removeLegacyID(type, category, description, id) {
      var found = false;
      for (var i = 0; i < this.globalRegistryRecord.legacyIDs.length; i++) {
        if (this.globalRegistryRecord.legacyIDs[i].type == type && this.globalRegistryRecord.legacyIDs[i].category == category && this.globalRegistryRecord.legacyIDs[i].description == description && this.globalRegistryRecord.legacyIDs[i].id == id) {
          this.globalRegistryRecord.legacyIDs.splice(i, 1);
          this.globalRegistryRecord.lastUpdate = new Date().toISOString();
          found = true;
        }
      }

      this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);

      return found;
    }

    /**
     * set User  Defaults.
     * @param {string} voice
     * @param {string} chat
     * @param {string} video
     * @returns  {boolean}   returns True if the Defaults are successfully added, false otherwise.
     */

  }, {
    key: 'setDefaults',
    value: function setDefaults(voice, chat, video) {

      this.globalRegistryRecord.defaults.voice = voice;
      this.globalRegistryRecord.defaults.chat = chat;
      this.globalRegistryRecord.defaults.video = video;
      this.globalRegistryRecord.lastUpdate = new Date().toISOString();

      this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);

      return true;
    }

    /**
     * Add a contact to the Graph Connector.
     * @param  {string}   guid          GUID of the new contact.
     * @param  {string}   firstName     First name of the new contact.
     * @param  {string}   lastName      Last name of the new contact.
     * @returns  {boolean}   returns True if the Contact is successfully added, false otherwise.
     */

  }, {
    key: 'addContact',
    value: function addContact(guid, firstName, lastName) {

      //for test accept any guid

      var success = false;
      if (!this.guidExist(guid)) {

        var _this = this;

        var msg = {
          type: 'READ',
          from: this._hypertyRuntimeURL + '/graph-connector',
          to: 'global://registry/',
          body: { guid: guid }
        };
        return new _promise2.default(function (resolve, reject) {

          if (_this.messageBus === undefined) {
            reject('MessageBus not found on GraphConnector');
          } else {

            _this.messageBus.postMessage(msg, function (reply) {

              console.log(reply);

              // reply should be the JSON returned from the Global Registry REST-interface
              var jwt = reply.body.Value;
              if (typeof jwt !== 'undefined') {

                if (reply.body.Code == 200) {
                  console.log('Response code is 200');
                  console.log('verify JWT');
                  var unwrappedJWT = _jsrsasign2.default.KJUR.jws.JWS.parse(reply.body.Value);
                  var dataEncoded = unwrappedJWT.payloadObj.data;
                  var dataDecoded = _base64Url2.default.decode(dataEncoded);
                  var dataJSON = JSON.parse(dataDecoded);
                  var publicKeyObject = _jsrsasign2.default.KEYUTIL.getKey(dataJSON.publicKey);
                  var encodedString = jwt.split('.').slice(0, 2).join('.');
                  var sigValueHex = unwrappedJWT.sigHex;
                  var sig = new _jsrsasign2.default.KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
                  sig.init(publicKeyObject);
                  sig.updateString(encodedString);
                  var isValid = sig.verify(sigValueHex);
                  if (!isValid) {
                    console.log('invalid JWT');
                    resolve(false);
                  } else {
                    console.log('valid JWT');
                    var queriedContact = new _GraphConnectorContactData2.default(dataJSON.guid, firstName, lastName);
                    if (typeof dataJSON.userIDs != 'undefined' && dataJSON.userIDs != null) {
                      queriedContact.userIDs = dataJSON.userIDs;
                    }
                    if (typeof dataJSON.legacyIDs != 'undefined' && dataJSON.legacyIDs != null) {
                      queriedContact.legacyIDs = dataJSON.legacyIDs;
                    }
                    if (typeof dataJSON.defaults != 'undefined' && dataJSON.defaults != null) {
                      queriedContact.defaults = dataJSON.defaults;
                    }
                    _this.contacts.push(queriedContact);
                    _this.storageManager.set('graphConnector:contacts', 0, _this.contacts);
                    resolve(true);
                  }
                } else {
                  console.log('Response code is not 200');
                  var _queriedContact = new _GraphConnectorContactData2.default(guid, firstName, lastName);
                  _this.contacts.push(_queriedContact);
                  _this.storageManager.set('graphConnector:contacts', 0, _this.contacts);

                  resolve(true);
                }
              } else {
                console.log(' undefined Response');
                resolve(false);
              }
            });
          }
        });
      } else {
        return new _promise2.default(function (resolve, reject) {
          resolve(false);
        });
      }
    }

    /**
     * Add a contact to the Graph Connector.
     * @param  {string}   guid          GUID of the new contact.
     * @param  {string}   firstName     First name of the new contact.
     * @param  {string}   lastName      Last name of the new contact.
     * @returns  {boolean}   returns True if the Contact is successfully added, false otherwise.
     */

  }, {
    key: 'updateContactInfo',
    value: function updateContactInfo(guid) {

      //for test accept any guid

      var success = false;
      if (this.guidExist(guid)) {

        var _this = this;

        var msg = {
          type: 'READ',
          from: this._hypertyRuntimeURL + '/graph-connector',
          to: 'global://registry/',
          body: { guid: guid }
        };
        return new _promise2.default(function (resolve, reject) {

          if (_this.messageBus === undefined) {
            reject('MessageBus not found on GraphConnector');
          } else {

            _this.messageBus.postMessage(msg, function (reply) {

              console.log(reply);

              // reply should be the JSON returned from the Global Registry REST-interface
              var jwt = reply.body.Value;
              if (typeof jwt !== 'undefined') {

                if (reply.body.Code == 200) {
                  console.log('Response code is 200');
                  console.log('verify JWT');
                  var unwrappedJWT = _jsrsasign2.default.KJUR.jws.JWS.parse(reply.body.Value);
                  var dataEncoded = unwrappedJWT.payloadObj.data;
                  var dataDecoded = _base64Url2.default.decode(dataEncoded);
                  var dataJSON = JSON.parse(dataDecoded);
                  var publicKeyObject = _jsrsasign2.default.KEYUTIL.getKey(dataJSON.publicKey);
                  var encodedString = jwt.split('.').slice(0, 2).join('.');
                  var sigValueHex = unwrappedJWT.sigHex;
                  var sig = new _jsrsasign2.default.KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });
                  sig.init(publicKeyObject);
                  sig.updateString(encodedString);
                  var isValid = sig.verify(sigValueHex);
                  if (!isValid) {
                    console.log('invalid JWT');
                    resolve(false);
                  } else {
                    console.log('valid JWT');

                    for (var i = 0; i < _this.contacts.length; i++) {

                      if (_this.contacts[i].guid == guid) {

                        if (typeof dataJSON.userIDs != 'undefined' && dataJSON.userIDs != null) {
                          _this.contacts[i]._userIDs = dataJSON.userIDs;
                        }
                        if (typeof dataJSON.legacyIDs != 'undefined' && dataJSON.legacyIDs != null) {
                          _this.contacts[i]._legacyIDs = dataJSON.legacyIDs;
                        }
                        if (typeof dataJSON.defaults != 'undefined' && dataJSON.defaults != null) {
                          _this.contacts[i]._defaults = dataJSON.defaults;
                        }
                      }
                    }
                    _this.storageManager.set('graphConnector:contacts', 0, _this.contacts);
                    resolve(true);
                  }
                }
              } else {
                console.log(' undefined Response');
                resolve(false);
              }
            });
          }
        });
      } else {
        return new _promise2.default(function (resolve, reject) {
          resolve(false);
        });
      }
    }

    /**
     * Removes a location for a user identified by a given GUID.
     * @param  {string}   guid    GUID of the contact.
     * @returns  {boolean}  True if the Location is successfully  removed, false otherwise.
     */

  }, {
    key: 'removeLocation',
    value: function removeLocation(guid) {
      var success = false;
      if (this.globalRegistryRecord.guid == guid) {
        this.residenceLocation = '';
        success = true;
      } else {
        for (var i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i]._guid == guid) {
            this.contacts[i].residenceLocation = '';
            success = true;
          }
        }
      }

      this.storageManager.set('graphConnector:contacts', 0, this.contacts);
      this.storageManager.set('graphConnector:residenceLocation', 0, this.residenceLocation);

      return success;
    }

    /**
     * Adds a location for a user identified by a given GUID.
     * @param  {string}   guid          GUID of the contact.
     * @param  {string}   locationName    location  of the contact
     * @returns  {boolean}  Success if the Location is successfully added
     */

  }, {
    key: 'setLocation',
    value: function setLocation(guid, locationName) {
      var success = false;
      if (typeof locationName !== 'undefined') {
        if (this.globalRegistryRecord.guid == guid) {
          this.residenceLocation = locationName;
          success = true;
        } else {
          for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]._guid == guid) {
              this.contacts[i].residenceLocation = locationName;
              success = true;
            }
          }
        }
      }

      this.storageManager.set('graphConnector:contacts', 0, this.contacts);
      this.storageManager.set('graphConnector:residenceLocation', 0, this.residenceLocation);

      return success;
    }

    /**
     * Returns all unique group names.
     * @returns  {array}   Array containing all unique group names.
     */

  }, {
    key: 'getGroupNames',
    value: function getGroupNames() {
      var rtnSet = new _set2.default();
      for (var i = 0; i < this.contacts.length; i++) {
        for (var j = 0; j < this.contacts[i]._groups.length; j++) {
          rtnSet.add(this.contacts[i]._groups[j]);
        }
      }
      for (var k = 0; k < this.groups.length; k++) {
        rtnSet.add(this.groups[k]);
      }

      var rtnArray = (0, _from2.default)(rtnSet);
      return rtnArray;
    }

    /**
     * Returns all contacts with a given group name, including the owner if applicable.
     * @param  {string}   groupName    Name of the group to return.
     * @returns  {array}   matchingContacts    Contacts matching the given group name. The format is: Contacts<GraphConnectorContactData>.
     */

  }, {
    key: 'getGroup',
    value: function getGroup(groupName) {
      var rtnArray = [];
      var ownerTmp = void 0;
      if (typeof groupName !== 'undefined') {
        for (var k = 0; k < this.groups.length; k++) {
          if (this.groups[k] == groupName) {
            ownerTmp = new _GraphConnectorContactData2.default(this.globalRegistryRecord.guid, this.firstName, this.lastName);
            typeof this.residenceLocation == 'undefined' ? ownerTmp.residenceLocation = '' : ownerTmp.residenceLocation = this.residenceLocation;
            ownerTmp.userIDs = this.globalRegistryRecord.userIDs;
            ownerTmp.legacyIDs = this.globalRegistryRecord.legacyIDs;
            ownerTmp.defaults = this.globalRegistryRecord.defaults;
            ownerTmp.groups = this.groups;
            ownerTmp.contactsBloomFilter1Hop = this.contactsBloomFilter1Hop;
            ownerTmp._lastSyncBloomFilter1Hop = this.lastCalculationBloomFilter1Hop;
            ownerTmp._lastSyncDomainUserIDs = this.globalRegistryRecord.lastUpdate;
            rtnArray.push(ownerTmp);
          }
        }
        for (var i = 0; i < this.contacts.length; i++) {
          for (var j = 0; j < this.contacts[i]._groups.length; j++) {
            if (this.contacts[i]._groups[j] == groupName) {
              rtnArray.push(this.contacts[i]);
            }
          }
        }
      }
      return rtnArray;
    }

    /**
     * Adds a group to a contact identified by a GUID.
     * @param  {string}   guid          GUID of the contact.
     * @param  {string}   groupName     Group Name to be added to the contact.
     * @returns  {boolean}  Success if the group name is successfully added.
     */

  }, {
    key: 'addGroupName',
    value: function addGroupName(guid, groupName) {
      var success = false;
      if (typeof groupName !== 'undefined') {
        if (guid == this.globalRegistryRecord.guid) {
          if (!this.groups.includes(groupName)) {
            this.groups.push(groupName);
            success = true;
          }
        } else {
          for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]._guid == guid) {
              if (!this.contacts[i]._groups.includes(groupName)) {
                this.contacts[i]._groups.push(groupName);
                success = true;
              }
            }
          }
        }
      }

      this.storageManager.set('graphConnector:contacts', 0, this.contacts);
      this.storageManager.set('graphConnector:groups', 0, this.groups);

      return success;
    }

    /**
     * Removes a group for a contact, identified by a GUID.
     * @param  {string}   guid          GUID of the contact.
     * @param  {string}   groupName     Group name to be removed for the contact.
     * @returns  {boolean}  Success if the group name is successfully removed.
     */

  }, {
    key: 'removeGroupName',
    value: function removeGroupName(guid, groupName) {
      var success = false;
      if (typeof groupName !== 'undefined') {
        if (guid == this.globalRegistryRecord.guid) {
          for (var z = 0; z < this.groups.length; z++) {
            if (this.groups[z] == groupName) {
              this.groups.splice(z, 1);
              success = true;
            }
          }
        } else {
          for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]._guid == guid) {
              for (var j = 0; j < this.contacts[i]._groups.length; j++) {
                if (this.contacts[i]._groups[j] == groupName) {
                  this.contacts[i]._groups.splice(j, 1);
                }
                success = true;
              }
            }
          }
        }
      }
      this.storageManager.set('graphConnector:contacts', 0, this.contacts);
      this.storageManager.set('graphConnector:groups', 0, this.groups);

      return success;
    }

    /**
     * Returns all the contacts, excluding the owner.
     * @returns  {array}   All the contacts. The format is: Contacts<GraphConnectorContactData>.
     */

  }, {
    key: 'getAllContacts',
    value: function getAllContacts() {
      return this.contacts;
    }

    /**
     * Removes a contact from the Graph Connector.
     * @param  {string}     guid      GUID of the user to be removed.
     * @returns  {boolean}  Success if the Contact is successfully removed.
     */

  }, {
    key: 'removeContact',
    value: function removeContact(guid) {
      // remove from contacts
      var status = false;
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i]._guid == guid) {
          this.contacts.splice(i, 1);
          status = true;
        }
      }

      // re-calculate BF1hop
      this.calculateBloomFilter1Hop();
      this.storageManager.set('graphConnector:contacts', 0, this.contacts);

      return status;
    }

    /**
     * Sets the bloomfilter of a contact.
     * @param  {string}     guid      GUID of the contact to set the bloom filter.
     * @param  {BloomFilter}     bf      BloomFilter object.
     * @returns {boolean} success if the contact guid is found and the bloom filter is set
     */

  }, {
    key: 'setBloomFilter1HopContact',
    value: function setBloomFilter1HopContact(guid, bf) {
      var success = false;
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i]._guid == guid) {
          this.contacts[i].contactsBloomFilter1Hop = bf;
          success = true;
        }
      }
      this.storageManager.set('graphConnector:contacts', 0, this.contacts);

      return success;
    }

    /**
     * Calculates the Bloom filter containing all non-private contacts.
     */

  }, {
    key: 'calculateBloomFilter1Hop',
    value: function calculateBloomFilter1Hop() {
      var bf = new _BloomFilter2.default(4314, // number of bits to allocate. With 300 entries, we have a false positive rate of 0.1 %.
      10 // number of hash functions.
      );
      for (var i = 0; i < this.contacts.length; i++) {
        if (!this.contacts[i].privateContact) {
          bf.add(this.contacts[i]._guid);
        }
      }
      this.contactsBloomFilter1Hop = bf;
      this.lastCalculationBloomFilter1Hop = new Date().toISOString();
      this.storageManager.set('graphConnector:lastCalculationBloomFilter1Hop', 0, this.lastCalculationBloomFilter1Hop);
    }

    /**
     * Returns the list of contacts which matches the search string "name". Ex. "Joh" will return users with first or last name "John" or "Aljohanas".
     * @param  {string}   name    First or last name to look for in the contact list.
     * @returns  {array}   matchingContacts       Contacts matching the given name. The format is: Contacts<GraphConnectorContactData>.
     */

  }, {
    key: 'getContact',
    value: function getContact(name) {
      // TODO: optimize, e.g., find misspelled people
      var rtnArray = [];
      var fname = void 0;
      var lname = void 0;

      var patt = new RegExp(name, 'i');
      for (var i = 0; i < this.contacts.length; i++) {
        fname = this.contacts[i]._firstName;
        lname = this.contacts[i]._lastName;

        if (patt.test(fname) || patt.test(lname)) {
          rtnArray.push(this.contacts[i]);
        }
      }

      return rtnArray;
    }

    /**
     * Returns success if the userID is successfully added for a contact
     * @param  {string}   guid    guid of the contact whose userID has to be added.
     * @param  {string}   uid   userID which is supposed to be added.
     * @param  {string}   domain   domain which is supposed to be added.
     * @returns  {boolean}   success       returns true if userID is successfully added to the contact.
     */

  }, {
    key: 'setContactUserIDs',
    value: function setContactUserIDs(guid, uid, domain) {
      var success = false;
      var tmpUserID = [];

      for (var i = 0; i < this.contacts.length; i++) {

        if (this.contacts[i].guid == guid) {

          for (var j = 0; j < this.contacts[i]._userIDs.length; j++) {

            if (this.contacts[i]._userIDs[j].uid == uid && this.contacts[i]._userIDs[j].domain == domain) {
              return false;
            }
          }
          tmpUserID = this.contacts[i]._userIDs;
          var item = new Object();
          item.uid = uid;
          item.domain = domain;
          tmpUserID.push(item);
          this.contacts[i]._userIDs = tmpUserID;
          success = true;
        }
      }

      this.storageManager.set('graphConnector:contacts', 0, this.contacts);

      return success;
    }

    /**
     * Returns ArrayList of userIDs of a contact, if contact not found then it will return a string 'Contact Does not exist'
     * @param  {string}   guid    guid of the contact whose userID has to be added.
     * @returns  {array}   success       returns Arraylist of userID of a contact, if contact not found then it will return a string 'Contact Does not exist'
     */

  }, {
    key: 'getContactUserIDs',
    value: function getContactUserIDs(guid) {
      var userIDsArray = [];
      var found = false;
      for (var i = 0; i < this.contacts.length; i++) {

        if (this.contacts[i]._guid == guid) {
          found = true;

          for (var j = 0; j < this.contacts[i]._userIDs.length; j++) {
            userIDsArray.push(this.contacts[i]._userIDs[j]);
          }
        }
      }

      if (!found) {
        return false;
      } else {
        return userIDsArray;
      }
    }

    /**
     * Sets active attribute of the GlobalRegistryRecord.
     * @param  {int}   int    Value to set the active flag of the GlobalRegistryRecord to.
     * @returns {boolean} True if Active is succesfully set, false otherwise.
     */

  }, {
    key: 'setActive',
    value: function setActive(int) {
      if (typeof int === 'number') {
        this.globalRegistryRecord.active = int;
        this.globalRegistryRecord.lastUpdate = new Date().toISOString();
        this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);
        return true;
      }
      return false;
    }

    /**
     * Sets revoked attribute of the GlobalRegistryRecord.
     * @param  {int}   int    Value to set the revoked flag of the GlobalRegistryRecord to.
     * @returns {boolean} True if Revoked is succesfully set, false otherwise.
     */

  }, {
    key: 'setRevoked',
    value: function setRevoked(int) {
      if (typeof int === 'number') {
        this.globalRegistryRecord.revoked = int;
        this.globalRegistryRecord.lastUpdate = new Date().toISOString();
        this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);

        return true;
      }
      return false;
    }

    /**
     * Sets Timeout attribute of the GlobalRegistryRecord.
     * @param  {Date}   Timeout  Date to set the timeout of the GlobalRegistryRecord to.
     * @returns {boolean} True if Timeout is succesfully set, false otherwise.
     */

  }, {
    key: 'setTimeout',
    value: function setTimeout(Timeout) {
      var now = new Date();
      if ((typeof Timeout === 'undefined' ? 'undefined' : (0, _typeof3.default)(Timeout)) == 'object' && Timeout instanceof Date && Timeout > now) {
        this.globalRegistryRecord.timeout = Timeout.toISOString();
        this.globalRegistryRecord.lastUpdate = new Date().toISOString();
        this.storageManager.set('graphConnector:globalRegistryRecord', 0, this.globalRegistryRecord);

        return true;
      }
      return false;
    }

    /**
     Returns the globalRegistryRecord for the owner.
     @returns {object}
     */

  }, {
    key: 'getGlobalRegistryRecord',
    value: function getGlobalRegistryRecord() {
      return this.globalRegistryRecord;
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
        if (this.contacts[i]._guid === guid) {
          directContactsArray.push(this.contacts[i]);
        }
        var bf1hop = new _BloomFilter2.default(4314, // number of bits to allocate. With 300 entries, we have a false positive rate of 0.1 %.
        10 // number of hash functions.
        );
        bf1hop = this.contacts[i].contactsBloomFilter1Hop;

        if (bf1hop !== undefined) {
          bf1hop = this.extend(new _BloomFilter2.default(4314, 10), bf1hop);
          if (bf1hop.test(guid)) {
            fofContactsArray.push(this.contacts[i]);
          }
        }
      }
      var rtnArray = [];
      rtnArray.push(directContactsArray, fofContactsArray);
      return rtnArray;
    }

    /**
     * Type cast one object to another equivalent to "$.extend" of jquery
     * @param  {Object}     obj1      Object to which the other object need to be typecasted.
     * @param  {Object}     obj2      Object needs to typecasted.
     * @returns  {Object}   Obj2 with typecasted to obj1.
     */

  }, {
    key: 'extend',
    value: function extend(obj1, obj2) {
      for (var key in obj2) {
        if (obj2.hasOwnProperty(key)) obj1[key] = obj2[key];
      }return obj1;
    }

    /**
     * get the entry from the storage Manager for a given keys: globalRegistryRecord, contacts, groups.
     */

  }, {
    key: '_loadGraphConnector',
    value: function _loadGraphConnector() {
      var _this = this;
      return new _promise2.default(function (resolve) {

        _this.storageManager.get('graphConnector:globalRegistryRecord').then(function (globalRegistryRecord) {
          if (globalRegistryRecord) {
            _this.globalRegistryRecord.timeout = globalRegistryRecord.timeout;
            _this.globalRegistryRecord.active = globalRegistryRecord.active;
            _this.globalRegistryRecord.defaults.chat = globalRegistryRecord.defaults.chat;
            _this.globalRegistryRecord.defaults.video = globalRegistryRecord.defaults.video;
            _this.globalRegistryRecord.defaults.voice = globalRegistryRecord.defaults.voice;
            _this.globalRegistryRecord.guid = globalRegistryRecord.guid;
            _this.globalRegistryRecord.lastUpdate = globalRegistryRecord.lastUpdate;
            _this.globalRegistryRecord.publicKey = globalRegistryRecord.publicKey;
            _this.globalRegistryRecord.revoked = globalRegistryRecord.revoked;
            _this.globalRegistryRecord.salt = globalRegistryRecord.salt;
            _this.globalRegistryRecord.userIDs = globalRegistryRecord.userIDs;
            _this.globalRegistryRecord.legacyIDs = globalRegistryRecord.legacyIDs;
            _this.globalRegistryRecord.schemaVersion = globalRegistryRecord.schemaVersion;
          }
          resolve();
        });

        _this.storageManager.get('graphConnector:contacts').then(function (contacts) {
          if (contacts) {
            _this.contacts = contacts;
          }
          resolve();
        });

        _this.storageManager.get('graphConnector:groups').then(function (groups) {
          if (groups) {
            _this.groups = groups;
          }
          resolve();
        });

        _this.storageManager.get('graphConnector:privateKey').then(function (privateKey) {
          if (privateKey) {
            _this.privateKey = privateKey;
            _this._prvKey = _jsrsasign2.default.KEYUTIL.getKey(privateKey, 'PKCS8PRV');
          }
          resolve();
        });

        _this.storageManager.get('graphConnector:firstName').then(function (firstName) {
          if (firstName) {
            console.info('graphConnector:firstName:', firstName);
            _this.firstName = firstName;
          }
          resolve();
        });

        _this.storageManager.get('graphConnector:lastName').then(function (lastName) {
          if (lastName) {
            console.info('graphConnector:lastName:', lastName);
            _this.lastName = lastName;
          }
          resolve();
        });

        _this.storageManager.get('graphConnector:lastCalculationBloomFilter1Hop').then(function (lastCalculationBloomFilter1Hop) {
          if (lastCalculationBloomFilter1Hop) {
            console.info('graphConnector:lastName:', lastCalculationBloomFilter1Hop);
            _this.lastCalculationBloomFilter1Hop = lastCalculationBloomFilter1Hop;
          }
          resolve();
        });

        _this.storageManager.get('graphConnector:residenceLocation').then(function (residenceLocation) {
          if (residenceLocation) {
            console.info('graphConnector:lastName:', residenceLocation);
            _this.residenceLocation = residenceLocation;
          }
          resolve();
        });
      });
    }

    /**
     * store the entry into the storage Manager for the given keys: globalRegistryRecord, contacts, groups.
     */

  }, {
    key: 'storeGraphConnector',
    value: function storeGraphConnector() {
      var _this = this;

      _this.storageManager.set('graphConnector:globalRegistryRecord', 0, _this.globalRegistryRecord);
      _this.storageManager.set('graphConnector:contacts', 0, _this.contacts);
      _this.storageManager.set('graphConnector:groups', 0, _this.groups);
      _this.storageManager.set('graphConnector:privateKey', 0, _this.privateKey);
      _this.storageManager.set('graphConnector:firstName', 0, _this.firstName);
      _this.storageManager.set('graphConnector:lastName', 0, _this.lastName);
      _this.storageManager.set('graphConnector:lastCalculationBloomFilter1Hop', 0, _this.lastCalculationBloomFilter1Hop);
      _this.storageManager.set('graphConnector:residenceLocation', 0, _this.residenceLocation);
    }
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