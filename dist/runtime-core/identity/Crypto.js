'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Class with the cryptographic functions for the authentication protocol
*
*/
var Crypto = function () {
  function Crypto() {
    (0, _classCallCheck3.default)(this, Crypto);

    var _this = this;
  }

  /**
  * encode a byteArray value in base 64 encode
  * @param   {byteArray}    value    byteArray value
  * @return  {string}   encoded value
  */


  (0, _createClass3.default)(Crypto, [{
    key: 'encode',
    value: function encode(value) {
      return btoa(value);
    }

    /**
    * decode a base64 value in a new Uint8Array
    * @param   {string}    value    value encoded in base 64
    * @return  {byteArray} decodedValue
    */

  }, {
    key: 'decode',
    value: function decode(value) {
      return new Uint8Array(JSON.parse('[' + atob(value) + ']'));
    }
  }, {
    key: 'encryptRSA',
    value: function encryptRSA(pubKey, data) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this._importRSAencryptKey(new Uint8Array(pubKey)).then(function (publicKey) {

          crypto.subtle.encrypt({
            name: 'RSA-OAEP'
          }, publicKey, //from generateKey or importKey above
          data //ArrayBuffer of data you want to encrypt
          ).then(function (encrypted) {
            //returns an ArrayBuffer containing the encrypted data
            //console.log('crypto-encryptRSA', new Uint8Array(encrypted));
            resolve(new Uint8Array(encrypted));
          }).catch(function (err) {
            console.log('crypto-encryptRSA', err);
            reject(err);
          });
        });
      });
    }
  }, {
    key: 'decryptRSA',
    value: function decryptRSA(privKey, data) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this._importRSAdecryptKey(privKey).then(function (privateKey) {

          crypto.subtle.decrypt({
            name: 'RSA-OAEP'
          }, privateKey, //from generateKey or importKey above
          data //ArrayBuffer of the data
          ).then(function (decrypted) {

            var decryptedData = new Uint8Array(decrypted);

            //console.log('crypto-decryptRSA', decryptedData);
            resolve(decryptedData);
          }).catch(function (err) {
            console.log('crypto-decryptRSA', err);
            reject(err);
          });
        });
      });
    }
  }, {
    key: 'signRSA',
    value: function signRSA(privKey, data) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this._importRSAsignKey(privKey).then(function (privateKey) {

          crypto.subtle.sign({
            name: 'RSASSA-PKCS1-v1_5'
          }, privateKey, //from generateKey or importKey above
          _this._utf8Encode(data) //ArrayBuffer of data you want to sign
          ).then(function (signature) {
            //returns an ArrayBuffer containing the signature
            //console.log('crypto-signRSA', new Uint8Array(signature));
            resolve(new Uint8Array(signature));
          }).catch(function (err) {
            console.log('crypto-signRSA', err);
            reject(err);
          });
        });
      });
    }
  }, {
    key: 'verifyRSA',
    value: function verifyRSA(pubKey, data, signature) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this._importRSAverifyKey(pubKey).then(function (publicKey) {

          crypto.subtle.verify({
            name: 'RSASSA-PKCS1-v1_5'
          }, publicKey, //from generateKey or importKey above
          signature, //ArrayBuffer of the signature
          _this._utf8Encode(data) //ArrayBuffer of the data
          ).then(function (isvalid) {
            //returns a boolean on whether the signature is true or not
            //console.log('crypto-verifyRSA', isvalid);
            resolve(isvalid);
          }).catch(function (err) {
            console.log('crypto-verifyRSA', err);
            reject(err);
          });
        });
      });
    }
  }, {
    key: 'encryptAES',
    value: function encryptAES(key, data, iv) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this._importAESkey(key).then(function (aesKey) {

          crypto.subtle.encrypt({
            name: 'AES-CBC',
            //Don't re-use initialization vectors!
            //Always generate a new iv every time your encrypt!
            iv: iv
          }, aesKey, //from generateKey or importKey above
          _this._utf8Encode(data) //ArrayBuffer of data you want to encrypt
          ).then(function (encrypted) {
            //returns an ArrayBuffer containing the encrypted data
            //console.log('crypto-encryptAES', new Uint8Array(encrypted));
            resolve(new Uint8Array(encrypted));
          }).catch(function (err) {
            console.log('crypto-encryptAES', err);
            reject(err);
          });
        });
      });
    }
  }, {
    key: 'decryptAES',
    value: function decryptAES(key, data, iv) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this._importAESkey(key).then(function (aesKey) {

          crypto.subtle.decrypt({
            name: 'AES-CBC',
            iv: iv
          }, aesKey, //from generateKey or importKey above
          data //ArrayBuffer of the data
          ).then(function (decrypted) {

            var decodedData = _this._utf8Decode(new Uint8Array(decrypted));
            //console.log('crypto-decryptAES', decodedData);
            resolve(decodedData);
          }).catch(function (err) {
            console.log('crypto-decryptAES', err);
            reject(err);
          });
        });
      });
    }

    /**
    * creates a hash using the HMAC algorithm
    * @param  {byteArray}    key       key to be used in the hmac
    * @param  {string}      data       information to be hashed
    * @return  {byteArray}   signature  resulting hash
    */

  }, {
    key: 'hashHMAC',
    value: function hashHMAC(key, data) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        _this._importHMACkey(key).then(function (hmacKey) {

          crypto.subtle.sign({
            name: 'HMAC'
          }, hmacKey, //from generateKey or importKey above
          _this._utf8Encode(data) //ArrayBuffer of data you want to sign
          ).then(function (signature) {
            //console.log('crypto-hashHMAC', signature);

            //returns an ArrayBuffer containing the signature
            resolve(new Uint8Array(signature));
          }).catch(function (err) {
            console.log('crypto-hashHMAC', err);
            reject(err);
          });
        });
      });
    }

    /**
    * verifies an hash using the HMAC algorithm
    * @param  {byteArray}    key       key to be used in the hmac
    * @param  {string}      data       information to be hashed to compare
    * @param  {byteArray}  signature   hash to compare with the received data
    * @return  {boolean}   isvalid     boolean saying if the data corresponds to the hash received
    */

  }, {
    key: 'verifyHMAC',
    value: function verifyHMAC(key, data, signature) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        _this._importHMACkey(key).then(function (hmacKey) {

          crypto.subtle.verify({
            name: 'HMAC'
          }, hmacKey, //from generateKey or importKey above
          signature, //ArrayBuffer of the signature
          _this._utf8Encode(data) //ArrayBuffer of the data
          ).then(function (isvalid) {
            //returns a boolean on whether the signature is true or not
            //console.log('crypto-verifyHMAC', isvalid);
            isvalid ? resolve(isvalid) : reject(isvalid);
          }).catch(function (err) {
            console.error('crypto-verifyHMAC', err);
            reject(err);
          });
        });
      });
    }

    /**
    * generates a RSA public/private key pair with a modulus length of 2048 bits
    * @return  {JSON}   keyPair    json containing the public and private keys
    */

  }, {
    key: 'generateRSAKeyPair',
    value: function generateRSAKeyPair() {
      var _this = this;
      var keyPair = {};

      return new _promise2.default(function (resolve, reject) {
        crypto.subtle.generateKey({
          name: 'RSA-PSS',
          modulusLength: 2048, //can be 1024, 2048, or 4096
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: 'SHA-256' } //can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
        }, true, //whether the key is extractable (i.e. can be used in exportKey)
        ['sign', 'verify'] //can be any combination of 'sign' and 'verify'

        ).then(function (key) {
          //returns a keypair object
          //console.log(key);

          crypto.subtle.exportKey('spki', //can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
          key.publicKey //can be a publicKey or privateKey, as long as extractable was true
          ).then(function (publicKey) {
            //returns the exported key data
            keyPair.public = new Uint8Array(publicKey);
            return crypto.subtle.exportKey('pkcs8', //can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
            key.privateKey //can be a publicKey or privateKey, as long as extractable was true
            );
          }).then(function (privateKey) {
            keyPair.private = new Uint8Array(privateKey);
            //console.log('crypto-generateRSAKeyPair', keyPair);

            resolve(keyPair);
          }).catch(function (err) {
            console.error(err);
            reject(err);
          });
        }).catch(function (err) {
          console.error(err);
          reject(err);
        });
      });
    }

    /**
    * Generates a 128 bit random value.
    * @return {byteArray}  array    random value
    */

  }, {
    key: 'generateIV',
    value: function generateIV() {
      var _this = this;

      var array = new Uint8Array(16);
      crypto.getRandomValues(array);

      return array;
    }

    /**
    * Generates a 256 bit random value. 32 bits are extrated from the machine time,
    * the remaining are generated randomly
    * @return {byteArray}  array    random value
    */

  }, {
    key: 'generateRandom',
    value: function generateRandom() {
      var _this = this;

      var array = new Uint8Array(32);
      crypto.getRandomValues(array);

      var date = Date.now();
      var dateEncoded = _this._utf8Encode(date);

      //extract the least significant 4 bytes in the date
      var finalDate = dateEncoded.slice(dateEncoded.length - 4, dateEncoded.length);

      // add in the first 4 bytes of the array the bytes extracted previously;
      for (var i = 0; i < 4; i++) {
        array[i] = finalDate[i];
      }
      return array;
    }

    /**
    * generates a premaster secret (PMS) of 48 bytes (384 bits) randomly
    * @return {byteArray}  array    premaster secret key
    */

  }, {
    key: 'generatePMS',
    value: function generatePMS() {
      var _this = this;

      var array = new Uint8Array(48);
      crypto.getRandomValues(array);
      return array;
    }

    /**
    * generates a masterKey secret (PMS) of 48 bytes (384 bits) using the premaster secret and
    * two randoms
    * @return {byteArray}  array    master secret key with 48 bytes
    */

  }, {
    key: 'generateMasterSecret',
    value: function generateMasterSecret(hmacKey, data) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var key = new Uint8Array(48);
        var seed = data;

        _this._digest(hmacKey).then(function (digestedKey) {

          _this.hashHMAC(digestedKey, seed).then(function (keypart0) {

            //copy the first 32 bytes into the key
            for (var i = 0; i < 32; i++) {
              key[i] = keypart0[i];
            }
            return _this.hashHMAC(digestedKey, seed + keypart0);
          }).then(function (keypart1) {

            //copy the first 16 bytes to the key remaining 16 bytes
            for (var i = 0; i < 16; i++) {
              key[i + 32] = keypart1[i];
            }
            //console.log('crypto-generateMasterSecret', key);
            resolve(key);
          }).catch(function (err) {
            console.log('crypto-generateMasterSecret', err);
            reject(err);
          });
        });
      });
    }

    /**
    * generates both users MAC and encryption keys. generate as output an array
    * with 4 byteArray each with 32 bytes
    * @param  {byteArray}        secret       secret to be used in the HMAC function
    * @param  {String}           data         information to be used as seed
    * @return {Array<byteArray>} key          array with the information to generate keys
    */

  }, {
    key: 'generateKeys',
    value: function generateKeys(hmacKey, data) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        var key = [];
        var seed = data;

        // iterate 4 times to obtain a 1024 key size
        _this.hashHMAC(hmacKey, seed).then(function (keypart0) {
          key.push(keypart0);
          return _this.hashHMAC(hmacKey, seed + keypart0);
        }).then(function (keypart1) {
          key.push(keypart1);
          return _this.hashHMAC(hmacKey, seed + keypart1);
        }).then(function (keypart2) {
          key.push(keypart2);
          return _this.hashHMAC(hmacKey, seed + keypart2);
        }).then(function (keypart3) {
          key.push(keypart3);

          //console.log('crypto-generateKeys', key);
          resolve(key);
        }).catch(function (err) {
          //console.log('crypto-generateKeys', err);
          reject(err);
        });

        //console.log(hmacKey, data);
      });
    }
  }, {
    key: '_importRSAsignKey',
    value: function _importRSAsignKey(privKey) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        crypto.subtle.importKey('pkcs8', //can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
        privKey, { //these are the algorithm options
          name: 'RSASSA-PKCS1-v1_5',
          hash: { name: 'SHA-256' } //can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
        }, true, //whether the key is extractable (i.e. can be used in exportKey)
        ['sign'] //'verify' for public key import, 'sign' for private key imports
        ).then(function (privateKey) {
          //returns a publicKey (or privateKey if you are importing a private key)
          //console.log('crypto-_importRSAsignKey', privateKey);
          resolve(privateKey);
        }).catch(function (err) {
          console.error('crypto-_importRSAsignKey', err);
          reject(err);
        });
      });
    }
  }, {
    key: '_importRSAverifyKey',
    value: function _importRSAverifyKey(pubKey) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        crypto.subtle.importKey('spki', //can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
        pubKey, { //these are the algorithm options
          name: 'RSASSA-PKCS1-v1_5',
          hash: { name: 'SHA-256' } //can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
        }, true, //whether the key is extractable (i.e. can be used in exportKey)
        ['verify'] //'verify' for public key import, 'sign' for private key imports
        ).then(function (publicKey) {
          //returns a publicKey (or privateKey if you are importing a private key)
          //console.log('crypto-_importRSAverifyKey', publicKey);
          resolve(publicKey);
        }).catch(function (err) {
          console.error('crypto-_importRSAverifyKey', err);
          reject(err);
        });
      });
    }
  }, {
    key: '_importRSAencryptKey',
    value: function _importRSAencryptKey(pubKey) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        crypto.subtle.importKey('spki', //can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
        pubKey, { //these are the algorithm options
          name: 'RSA-OAEP',
          hash: { name: 'SHA-256' } //can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
        }, true, //whether the key is extractable (i.e. can be used in exportKey)
        ['encrypt'] //'encrypt' or 'wrapKey' for public key import or
        //'decrypt' or 'unwrapKey' for private key imports
        ).then(function (publicKey) {
          //returns a publicKey (or privateKey if you are importing a private key)
          //console.log('crypto-_importRSAencryptKey', publicKey);
          resolve(publicKey);
        }).catch(function (err) {
          console.error('crypto-_importRSAencryptKey', err);
          reject(err);
        });
      });
    }
  }, {
    key: '_importRSAdecryptKey',
    value: function _importRSAdecryptKey(privKey) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        crypto.subtle.importKey('pkcs8', //can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
        privKey, { //these are the algorithm options
          name: 'RSA-OAEP',
          hash: { name: 'SHA-256' } //can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
        }, true, //whether the key is extractable (i.e. can be used in exportKey)
        ['decrypt'] //'encrypt' or 'wrapKey' for public key import or
        //'decrypt' or 'unwrapKey' for private key imports
        ).then(function (privateKey) {
          //returns a publicKey (or privateKey if you are importing a private key)
          //console.log('crypto-_importRSAdecryptKey', privateKey);
          resolve(privateKey);
        }).catch(function (err) {
          console.error('crypto-_importRSAdecryptKey', err);
          reject(err);
        });
      });
    }
  }, {
    key: 'concatPMSwithRandoms',
    value: function concatPMSwithRandoms(pms, toRandom, fromRandom) {
      var _this = this;

      var finalKey = new Uint8Array(pms.length + toRandom.length + fromRandom.length);

      // add PremasterKey
      for (var i = 0; i < pms.length; i++) {
        finalKey[i] = pms[i];
      }

      //add to random
      for (var _i = 0; _i < toRandom.length; _i++) {
        finalKey[_i + pms.length] = pms[_i];
      }

      //add from random
      for (var _i2 = 0; _i2 < fromRandom.length; _i2++) {
        finalKey[_i2 + pms.length + toRandom.length] = pms[_i2];
      }

      return finalKey;
    }
  }, {
    key: '_generate256bitKey',
    value: function _generate256bitKey() {
      var array = new Uint8Array(32);
      crypto.getRandomValues(array);

      return array;
    }

    /**
    * imports the secret to the HMAC function
    * @param  {byteArray}   arrayBuffer     bytes to import as key
    * @return {JSON}       key              key ready to be used in the HMAC cryptographic function
    */

  }, {
    key: '_importHMACkey',
    value: function _importHMACkey(arrayBuffer) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        _this._digest(arrayBuffer).then(function (key) {

          crypto.subtle.importKey('raw', //can be 'jwk' or 'raw'
          key, { //this is the algorithm options
            name: 'HMAC',
            hash: { name: 'SHA-256' }, //can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
            length: 256 //optional, if you want your key length to differ from the hash function's block length
          }, true, //whether the key is extractable (i.e. can be used in exportKey)
          ['sign', 'verify'] //can be any combination of 'sign' and 'verify'
          ).then(function (key) {
            //returns the symmetric key
            //console.log('crypto-_importHMACkey', key);
            resolve(key);
          }).catch(function (err) {
            reject(err);
          });
        });
      });
    }
  }, {
    key: '_digest',
    value: function _digest(value) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        crypto.subtle.digest({
          name: 'SHA-256'
        }, value //The data you want to hash as an ArrayBuffer
        ).then(function (hash) {
          //returns the hash as an ArrayBuffer
          //console.log('crypto-digest', new Uint8Array(hash));
          resolve(new Uint8Array(hash));
        }).catch(function (err) {
          console.error(err);
          reject(err);
        });
      });
    }
  }, {
    key: '_importAESkey',
    value: function _importAESkey(arrayBuffer) {
      return new _promise2.default(function (resolve, reject) {
        crypto.subtle.importKey('raw', //can be 'jwk' or 'raw'
        arrayBuffer, { //this is the algorithm options
          name: 'AES-CBC'
        }, true, //whether the key is extractable (i.e. can be used in exportKey)
        ['encrypt', 'decrypt'] //can be 'encrypt', 'decrypt', 'wrapKey', or 'unwrapKey'
        ).then(function (key) {
          //returns the symmetric key
          //console.log('crypto-importAESkey', key);
          resolve(key);
        }).catch(function (err) {
          console.error('crypto-importAESkey', err);
          reject(err);
        });
      });
    }
  }, {
    key: '_utf8Encode',
    value: function _utf8Encode(s) {
      return new TextEncoder('utf-8').encode(s);
    }
  }, {
    key: '_utf8Decode',
    value: function _utf8Decode(s) {
      return new TextDecoder('utf-8').decode(s);
    }
  }]);
  return Crypto;
}();

exports.default = Crypto;