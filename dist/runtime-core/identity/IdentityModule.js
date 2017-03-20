'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils/utils.js');

var _Identity = require('./Identity');

var _Identity2 = _interopRequireDefault(_Identity);

var _Crypto = require('./Crypto');

var _Crypto2 = _interopRequireDefault(_Crypto);

var _GuiFake = require('./GuiFake');

var _GuiFake2 = _interopRequireDefault(_GuiFake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
*
* The Identity Module (Id Module) is the component responsible for handling the
* user identity and the association of this identity with the Hyperty instances,
* in order to make Hyperty instances identifiable. The identity in the reTHINK project
* is not fixed to a unique Identity Service Provider, but obtained through several
* different Identity sources. With this approach, the Id Module provides to the user the
* option to choose the preferred method for authentication.
* This module will thus able to support multiple Identity acquisition methods,
* such as OpenID connect 1.0, Kerberos System, or authentication through smart cards.
* For example, a user with a Google account can use the Google as an Identity Provider to provide Identity Tokens,
*  which can be used by the Identity Module to associate it with a Hyperty instance.
*
* The Identity Module uses a node package, the HelloJS, which is a client-side JavaScript API for authentication
* that facilitates the requests for the OpenID connect protocol. This method allows for some abstraction
* when making requests for different Identity Providers, such as OpenID connect used by Google, Facebook, Microsoft, for example.
*
* When a request for a user identity is made using the method loginWithRP(identifier, scope),
* this method will analyse the Identity Provider chosen to obtain an identity and will use the HelloJS node package
* with the selected Identity Provider and identity scope. After the HelloJS request for an Access Token
* to the Identity Providers, the user will be prompted to authenticate towards the Identity Provider.
* Upon receiving the Access Token, this token is validated with a RESTful web service request to an endpoint
* on the Identity Provider Authorization Server, and after the validation is done,
* an ID token is obtained with the information according to the scope required.
* This ID token is then preserved in this module that can obtained through the getIdentities()
* and is passed as return value of the loginWithRP function. The methods generateAssertion and validateAssertion have not yet been developed.
*
*/
var IdentityModule = function () {

  /**
  * This is the constructor to initialise the Identity Module it does not require any input.
  */
  function IdentityModule(runtimeURL, runtimeCapabilities) {
    _classCallCheck(this, IdentityModule);

    var _this = this;

    if (!runtimeURL) throw new Error('runtimeURL is missing.');

    _this._runtimeURL = runtimeURL;
    _this._idmURL = _this._runtimeURL + '/idm';
    _this._guiURL = _this._runtimeURL + '/identity-gui';
    _this.runtimeCapabilities = runtimeCapabilities;

    _this._domain = (0, _utils.divideURL)(_this._runtimeURL).domain;

    //to store items with this format: {identity: identityURL, token: tokenID}
    _this.identities = [];
    _this.emailsList = [];
    var newIdentity = new _Identity2.default('guid', 'HUMAN');
    _this.identity = newIdentity;
    _this.crypto = new _Crypto2.default();

    //stores the association of the dataObject and the Hyperty registered within
    _this.dataObjectsIdentity = {};

    // hashTable to store all the crypto information between two hyperties
    _this.chatKeys = {};

    // hashTable to store the symmetric keys to be used in the chat group
    _this.dataObjectSessionKeys = {};

    //failsafe to enable/disable all the criptographic functions
    _this.isToUseEncryption = true;

    // variable to know if the GUI is deployed to choose the identity. if the real GUI is not deployed, a fake gui is deployed instead.
    _this.guiDeployed = false;

    // verification of nodeJS, and in case it is nodeJS then disable encryption
    // TODO improve later, this exists because the crypto lib uses browser cryptographic methods
    //_this.isToUseEncryption = (window) ? true : false;
  }

  /**
  * return the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */


  _createClass(IdentityModule, [{
    key: 'getIdentities',


    /**
    * Function to return all the identities registered within a session by a user.
    * These identities are returned in an array containing a JSON package for each user identity.
    * @return {Array<Identities>}         Identities
    */
    value: function getIdentities() {
      var _this = this;
      return _this.identities;
    }

    /**
    * gets all the information from a given userURL
    * @param  {String}  userURL     user url
    * @return {JSON}    identity    identity bundle from the userURL
    */

  }, {
    key: 'getIdentity',
    value: function getIdentity(userURL) {
      var _this = this;

      for (var index in _this.identities) {

        var identity = _this.identities[index];
        if (identity.identity === userURL) {
          return identity;
        }
      }

      throw 'identity not found';
    }
  }, {
    key: 'deployGUI',
    value: function deployGUI() {
      var _this = this;
      _this.guiDeployed = true;
    }
  }, {
    key: 'getIdentityOfHyperty',
    value: function getIdentityOfHyperty(hypertyURL) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var splitURL = hypertyURL.split('://');
        if (splitURL[0] !== 'hyperty') {
          _this._getHypertyFromDataObject(hypertyURL).then(function (returnedHypertyURL) {
            var userURL = _this.registry.getHypertyOwner(returnedHypertyURL);
            if (userURL) {

              for (var index in _this.identities) {
                var identity = _this.identities[index];
                if (identity.identity === userURL) {
                  return resolve(identity.messageInfo);
                }
              }
            } else {
              return reject('no identity was found ');
            }
          });
        } else {
          var userURL = _this.registry.getHypertyOwner(hypertyURL);
          if (userURL) {

            for (var index in _this.identities) {
              var identity = _this.identities[index];
              if (identity.identity === userURL) {
                // TODO check this getIdentityOfHyperty when we run on nodejs environment;
                if (identity.hasOwnProperty('messageInfo')) return resolve(identity.messageInfo);else return resolve(identity);
              }
            }
          } else {
            return reject('no identity was found.');
          }
        }
      });
    }
  }, {
    key: 'getIdentitiesToChoose',
    value: function getIdentitiesToChoose() {
      var _this = this;
      var identities = _this.emailsList;
      var idps = ['google.com', 'microsoft.com', 'orange.fr'];

      return { identities: identities, idps: idps };
    }

    /**
    * Function to return all the users URLs registered within a session
    * These users URLs are returned in an array of strings.
    * @param  {Boolean}  emailFormat (Optional)   boolean to indicate to return in email format
    * @return {Array<String>}         users
    */

  }, {
    key: 'getUsersIDs',
    value: function getUsersIDs(emailFormat) {
      var _this = this;
      var users = [];

      //if request comes with the emailFormat option, then convert url to email format
      var converter = emailFormat ? _utils.getUserEmailFromURL : function (value) {
        return value;
      };

      for (var index in _this.identities) {
        var identity = _this.identities[index];
        users.push(converter(identity.identity));
      }
      return users;
    }

    /**
    * Function to return the selected Identity within a session
    * @return {Identity}        identity         identity
    */

  }, {
    key: 'getCurrentIdentity',
    value: function getCurrentIdentity() {
      var _this = this;
      return _this.currentIdentity;
    }

    /**
    * Function to set the current Identity with a given Identity
    * @param {Identity}        identity         identity
    */

  }, {
    key: 'setCurrentIdentity',
    value: function setCurrentIdentity(identity) {
      var _this = this;
      _this.currentIdentity = identity;
    }

    /**
    * Function to remove an identity from the Identities array
    * @param {String}    userID      userID
    */

  }, {
    key: 'deleteIdentity',
    value: function deleteIdentity(userID) {
      var _this = this;

      var userURL = (0, _utils.convertToUserURL)(userID);

      for (var identity in _this.identities) {
        if (_this.identities[identity].identity === userURL) {
          _this.identities.splice(identity, 1);
        }
      }
    }

    /**
    * Function to unregister an identity from the emailsList array and not show in to the GUI
    * @param {String}    email      email
    */

  }, {
    key: 'unregisterIdentity',
    value: function unregisterIdentity(email) {
      var _this = this;

      for (var e in _this.emailsList) {
        if (_this.emailsList[e] === email) {
          _this.emailsList.splice(e, 1);
        }
      }
    }

    /**
    * Function that resolve and create the domainURL in case it is provided one. If not, resolve the default domainURL
    * @param {String}     idpDomain     idpDomain (Optional)
    */

  }, {
    key: '_resolveDomain',
    value: function _resolveDomain(idpDomain) {
      if (!idpDomain) {
        return 'domain-idp://google.com';
      } else {
        return 'domain-idp://' + idpDomain;
      }
    }

    /**
    * Function to login a user within the session, it will start the process to obtain an Identity from a user, including the request for an identity Assertion. The function returns a promise with the token received by the idpProxy.
    *
    * @param  {Identifier}      identifier      identifier
    * @param  {Scope}           scope           scope
    * @return {Promise}         Promise         IDToken containing the user information
    */

  }, {
    key: 'loginWithRP',
    value: function loginWithRP(identifier, scope) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        //TODO remove this verification and refactor this part
        _this.currentIdentity = undefined;
        _this.getIdentityAssertion('identifier', 'origin', 'hint', identifier).then(function (value) {
          console.log('loginWithRP');
          resolve(value);
        }, function (err) {
          console.log('loginWithRP err');
          reject(err);
        });
      });
    }

    /**
    * Function that sends a request to the GUI using messages. Sends all identities registered and
    * the Idps supported, and return the identity/idp received by the GUI
    * @param {Array<identity>}  identities      list of identitiies
    * @param {Array<String>}    idps            list of idps to authenticate
    * @return {Promise}         returns a chosen identity or idp
    */

  }, {
    key: 'requestIdentityToGUI',
    value: function requestIdentityToGUI(identities, idps) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        //condition to check if the real GUI is deployed. If not, deploys a fake gui
        if (_this.guiDeployed === false) {

          var guiFake = new _GuiFake2.default(_this._guiURL, _this._messageBus);
          _this.guiFake = guiFake;
          _this.guiDeployed = true;
        }

        var message = { type: 'create', to: _this._guiURL, from: _this._idmURL,
          body: { value: { identities: identities, idps: idps } } };

        var id = _this._messageBus.postMessage(message);

        //add listener without timout
        _this._messageBus.addResponseListener(_this._idmURL, id, function (msg) {
          _this._messageBus.removeResponseListener(_this._idmURL, id);

          if (msg.body.code === 200) {
            var selectedIdentity = msg.body;

            console.log('selectedIdentity: ', selectedIdentity.value);
            resolve(selectedIdentity);
          } else {
            reject('error on requesting an identity to the GUI');
          }
        });
      });
    }
  }, {
    key: 'openPopup',
    value: function openPopup(urlreceived) {

      return new Promise(function (resolve, reject) {

        var win = window.open(urlreceived, 'openIDrequest', 'width=800, height=600');
        if (window.cordova) {
          win.addEventListener('loadstart', function (e) {
            var url = e.url;
            var code = /\&code=(.+)$/.exec(url);
            var error = /\&error=(.+)$/.exec(url);

            if (code || error) {
              win.close();
              resolve(url);
            }
          });
        } else {
          (function () {
            var pollTimer = setInterval(function () {
              try {
                if (win.closed) {
                  reject('Some error occured when trying to get identity.');
                  clearInterval(pollTimer);
                }

                if (win.document.URL.indexOf('id_token') !== -1 || win.document.URL.indexOf(location.origin) !== -1) {
                  window.clearInterval(pollTimer);
                  var url = win.document.URL;

                  win.close();
                  resolve(url);
                }
              } catch (e) {
                //console.log(e);
              }
            }, 500);
          })();
        }
      });
    }

    /**
    * Function that fetch an identityAssertion from a user.
    *
    * @return {IdAssertion}              IdAssertion
    */

  }, {
    key: 'getIdentityAssertion',
    value: function getIdentityAssertion(identifier, origin, usernameHint, idpDomain) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        //CHECK whether is browser environment or nodejs
        //if it is browser, then create a fake identity

        _this.runtimeCapabilities.isAvailable('browser').then(function (result) {
          console.log('runtime browser identity acquisition ', result);

          if (!result) return;

          var identitiesInfo = _this.getIdentitiesToChoose();

          _this.requestIdentityToGUI(identitiesInfo.identities, identitiesInfo.idps).then(function (value) {

            if (value.type === 'identity') {

              var chosenID = (0, _utils.getUserURLFromEmail)(value.value);

              // returns the identity info from the chosen id
              for (var i in _this.identities) {
                if (_this.identities[i].identity === chosenID) {
                  return resolve(_this.identities[i].messageInfo);
                }
              }
              reject('no identity was found .');
            } else if (value.type === 'idp') {

              _this.callGenerateMethods(value.value, origin).then(function (value) {
                resolve(value);
              }, function (err) {
                reject(err);
              });
            } else {
              reject('error on GUI received message.');
            }
          });
        }).catch(function (error) {
          console.log('Error on identity acquisition ', error);
          reject(error);
        });

        _this.runtimeCapabilities.isAvailable('node').then(function (result) {
          console.log('node identity acquisition ', result);

          if (!result) return;

          if (_this.currentIdentity !== undefined) {
            //TODO verify whether the token is still valid or not.
            // should be needed to make further requests, to obtain a valid token
            return resolve(_this.currentIdentity);
          } else {
            console.log('getIdentityAssertion for nodejs');
            // let randomNumber = Math.floor((Math.random() * 10000) + 1);
            var randomNumber = '12345';

            var userProfile = {
              avatar: 'https://lh3.googleusercontent.com/-WaCrjVMMV-Q/AAAAAAAAAAI/AAAAAAAAAAs/8OlVqCpSB9c/photo.jpg',
              cn: 'test nodejs',
              username: 'nodejs-' + randomNumber + '@nodejs.com',
              userURL: 'user://nodejs.com/nodejs-' + randomNumber
            };

            var identityBundle = {
              assertion: 'assertion',
              idp: 'nodejs',
              identity: 'user://nodejs.com/nodejs-' + randomNumber,
              messageInfo: {
                assertion: 'assertion',
                idp: 'nodejs',
                userProfile: userProfile
              },
              userProfile: userProfile
            };
            console.log('---------------------------------------Identity bundle is'.red, identityBundle);
            _this.currentIdentity = identityBundle;
            _this.identities.push(identityBundle);
            return resolve(identityBundle);
          }
        }).catch(function (error) {
          console.log('Error on identity acquisition ', error);
          reject(error);
        });
      });
    }
  }, {
    key: 'callGenerateMethods',
    value: function callGenerateMethods(idp, origin) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        var publicKey = void 0;
        var userkeyPair = void 0;

        //generates the RSA key pair
        _this.crypto.generateRSAKeyPair().then(function (keyPair) {

          publicKey = btoa(keyPair.public);
          userkeyPair = keyPair;
          return _this.generateAssertion(publicKey, origin, '', userkeyPair, idp);
        }).then(function (url) {
          return _this.generateAssertion(publicKey, origin, url, userkeyPair, idp);
        }).then(function (value) {
          if (value) {
            resolve(value);
          } else {
            reject('Error on obtaining Identity');
          }
        }).catch(function (err) {
          console.log(err);
          reject(err);
        });
      });
    }
  }, {
    key: 'sendGenerateMessage',
    value: function sendGenerateMessage(contents, origin, usernameHint, idpDomain) {
      var _this = this;
      var domain = _this._resolveDomain(idpDomain);
      var message = void 0;

      return new Promise(function (resolve, reject) {
        message = { type: 'execute', to: domain, from: _this._idmURL, body: { resource: 'identity', method: 'generateAssertion', params: { contents: contents, origin: origin, usernameHint: usernameHint } } };
        _this._messageBus.postMessage(message, function (res) {
          var result = res.body.value;

          resolve(result);
        });
      });
    }
  }, {
    key: 'storeIdentity',
    value: function storeIdentity(result, keyPair) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        var splitedAssertion = result.assertion.split('.');
        var assertionParsed = void 0;

        //verify if the token contains the 3 components, or just the assertion
        if (splitedAssertion[1]) {
          assertionParsed = JSON.parse(atob(splitedAssertion[1]));
        } else {

          assertionParsed = JSON.parse(atob(result.assertion));
        }
        var idToken = void 0;

        //TODO remove the verification and remove the tokenIDJSON from the google idpProxy;
        if (assertionParsed.tokenIDJSON) {
          idToken = assertionParsed.tokenIDJSON;
        } else {
          idToken = assertionParsed;
        }

        var email = idToken.email || idToken.sub;

        var identifier = (0, _utils.getUserURLFromEmail)(email);

        result.identity = identifier;

        _this.identity.addIdentity(result);

        // check if exists any infoToken in the result received
        var infoToken = result.infoToken ? result.infoToken : {};

        var commonName = idToken.name || email.substring(0, email.indexOf('@'));
        var userProfileBundle = { username: email, cn: commonName, avatar: infoToken.picture, locale: infoToken.locale, userURL: identifier };

        //creation of a new JSON with the identity to send via messages
        var newIdentity = { userProfile: userProfileBundle, idp: result.idp.domain, assertion: result.assertion };
        result.messageInfo = newIdentity;
        result.keyPair = keyPair;

        _this.currentIdentity = newIdentity;

        //verify if the id already exists. If already exists then do not add to the identities list;
        var idAlreadyExists = false;
        var oldId = void 0;
        for (var identity in _this.identities) {
          if (_this.identities[identity].identity === result.identity) {
            idAlreadyExists = true;
            oldId = _this.identities[identity].messageInfo;
          }
        }

        if (idAlreadyExists) {
          resolve(oldId);
          var exists = false;

          //check if the identity exists in emailList, if not add it
          //This is useful if an identity was previously registered but was later unregistered
          for (var i in _this.emailsList) {
            if (_this.emailsList[i] === email) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            _this.emailsList.push(email);
          }
        } else {
          _this.emailsList.push(email);
          _this.identities.push(result);
          resolve(newIdentity);
        }
      });
    }

    /**
    * Requests the IdpProxy from a given Domain for an identityAssertion
    *
    * @param  {DOMString} contents     contents
    * @param  {DOMString} origin       origin
    * @param  {DOMString} usernameHint usernameHint
    * @param  {JSON}      keyPair       user keyPair
    * @return {IdAssertion}              IdAssertion
    */

  }, {
    key: 'generateAssertion',
    value: function generateAssertion(contents, origin, usernameHint, keyPair, idpDomain) {
      var _this = this;

      console.log('generateAssertion');

      return new Promise(function (resolve, reject) {

        _this.sendGenerateMessage(contents, origin, usernameHint, idpDomain).then(function (result) {

          if (result.loginUrl) {

            _this.openPopup(result.loginUrl).then(function (value) {
              resolve(value);
            }, function (err) {
              reject(err);
            });
          } else if (result) {

            _this.storeIdentity(result, keyPair).then(function (value) {
              resolve(value);
            }, function (err) {
              reject(err);
            });
          } else {
            reject('error on obtaining identity information');
          }
        });
      });
    }

    /**
    * OTHER USER'S IDENTITY
    */

    /**
    * Requests the IdpProxy from a given Domain to validate an IdentityAssertion
    * Returns a promise with the result from the validation.
    * @param  {DOMString} assertion
    * @param  {DOMString} origin       origin
    * @return {Promise}         Promise         promise with the result from the validation
    */

  }, {
    key: 'validateAssertion',
    value: function validateAssertion(assertion, origin, idpDomain) {
      var _this = this;

      var domain = _this._resolveDomain(idpDomain);

      var message = { type: 'execute', to: domain, from: _this._idmURL, body: { resource: 'identity', method: 'validateAssertion',
          params: { assertion: assertion, origin: origin } } };

      return new Promise(function (resolve, reject) {
        _this._messageBus.postMessage(message, function (result) {
          if (result.body.code === 200) {
            resolve(result.body.value);
          } else {
            reject('error', result.body.code);
          }
        });
      });
    }
  }, {
    key: 'encryptMessage',
    value: function encryptMessage(message) {
      var _this = this;

      console.log('encrypt message ');

      return new Promise(function (resolve, reject) {
        var isHandShakeType = message.type === 'handshake';

        //if is not to apply encryption, then returns resolve
        if (!_this.isToUseEncryption && !isHandShakeType) {
          console.log('encryption disabled');
          return resolve(message);
        }

        //TODO remove this logic and move it to a util function
        var splitedToURL = message.to.split('/');
        var dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3];
        if (splitedToURL.length > 6) {
          dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3] + '/' + splitedToURL[4];
        }

        var isToDataObject = (0, _utils.isDataObjectURL)(dataObjectURL);
        var isFromHyperty = (0, _utils.divideURL)(message.from).type === 'hyperty';
        var isToHyperty = (0, _utils.divideURL)(message.to).type === 'hyperty';

        if (message.type === 'update') {
          resolve(message);
        }

        if (isFromHyperty && isToHyperty) {
          var userURL = _this._registry.getHypertyOwner(message.from);
          if (userURL) {
            (function () {

              // check if exists any keys between two users
              var chatKeys = _this.chatKeys[message.from + '<->' + message.to];
              if (!chatKeys) {
                chatKeys = _this._newChatCrypto(message, userURL);
                console.log('createChatKey encrypt', message.from + message.to);
                _this.chatKeys[message.from + '<->' + message.to] = chatKeys;
                message.body.handshakePhase = 'startHandShake';
              }

              if (chatKeys.authenticated && !isHandShakeType) {
                (function () {

                  var iv = _this.crypto.generateIV();
                  _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, message.body.value, iv).then(function (encryptedValue) {

                    var filteredMessage = _this._filterMessageToHash(message, message.body.value + iv, chatKeys.hypertyFrom.messageInfo);

                    _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, filteredMessage).then(function (hash) {
                      //console.log('result of hash ', hash);
                      var value = { iv: _this.crypto.encode(iv), value: _this.crypto.encode(encryptedValue), hash: _this.crypto.encode(hash) };
                      message.body.value = JSON.stringify(value);

                      resolve(message);
                    });
                  });

                  // if is a handshake message, just resolve it
                })();
              } else if (isHandShakeType) {
                resolve(message);

                // else, starts a new handshake protocol
              } else {
                _this._doHandShakePhase(message, chatKeys).then(function (value) {
                  _this.chatKeys[message.from + '<->' + message.to] = value.chatKeys;

                  _this._messageBus.postMessage(value.message);
                  reject('encrypt handshake protocol phase ');
                });
              }
            })();
          }

          //if from hyperty to a dataObjectURL
        } else if (isFromHyperty && isToDataObject) {
          (function () {
            console.log('dataObject value to encrypt: ', message.body.value);

            var dataObjectKey = _this.dataObjectSessionKeys[dataObjectURL];

            //if no key exists, create a new one if is the reporter of dataObject
            if (!dataObjectKey) {
              var isHypertyReporter = _this.registry.getReporterURLSynchonous(dataObjectURL);

              // if the hyperty is the reporter of the dataObject then generates a session key
              if (isHypertyReporter && isHypertyReporter === message.from) {

                var sessionKey = _this.crypto.generateRandom();
                _this.dataObjectSessionKeys[dataObjectURL] = { sessionKey: sessionKey, isToEncrypt: true };

                dataObjectKey = _this.dataObjectSessionKeys[dataObjectURL];
              }
            }

            //check if there is already a session key for the chat room
            if (dataObjectKey) {

              // and if is to apply encryption, encrypt the messages
              if (dataObjectKey.isToEncrypt) {
                (function () {
                  var iv = _this.crypto.generateIV();

                  _this.crypto.encryptAES(dataObjectKey.sessionKey, _this.crypto.encode(JSON.stringify(message.body.value)), iv).then(function (encryptedValue) {

                    var filteredMessage = _this._filterMessageToHash(message, message.body.value + iv, dataObjectKey.sessionKey);

                    _this.crypto.hashHMAC(dataObjectKey.sessionKey, filteredMessage).then(function (hash) {
                      //console.log('hash ', hash);

                      var newValue = { value: _this.crypto.encode(encryptedValue), iv: _this.crypto.encode(iv), hash: _this.crypto.encode(hash) };

                      message.body.value = JSON.stringify(newValue);
                      resolve(message);
                    });
                  });

                  // if not, just send the message
                })();
              } else {
                resolve(message);
              }

              // start the generation of a new session Key
            } else {
              reject('failed to decrypt message');
            }
          })();
        }
      });
    }
  }, {
    key: 'decryptMessage',
    value: function decryptMessage(message) {
      var _this = this;

      console.log('decrypt message ');

      return new Promise(function (resolve, reject) {
        var isHandShakeType = message.type === 'handshake';

        //if is not to apply encryption, then returns resolve
        if (!_this.isToUseEncryption && !isHandShakeType) {
          console.log('decryption disabled');
          return resolve(message);
        }

        //TODO remove this logic and move it to a util function

        var splitedToURL = message.to.split('/');
        var dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3];
        if (splitedToURL.length > 6) {
          dataObjectURL = splitedToURL[0] + '//' + splitedToURL[2] + '/' + splitedToURL[3] + '/' + splitedToURL[4];
        }

        var isToDataObject = (0, _utils.isDataObjectURL)(dataObjectURL);
        var isFromHyperty = (0, _utils.divideURL)(message.from).type === 'hyperty';
        var isToHyperty = (0, _utils.divideURL)(message.to).type === 'hyperty';

        if (message.type === 'update') {
          resolve(message);
        }

        //is is hyperty to hyperty communication
        if (isFromHyperty && isToHyperty) {
          //console.log('decrypt hyperty to hyperty');
          var userURL = _this._registry.getHypertyOwner(message.to);
          if (userURL) {
            (function () {

              var chatKeys = _this.chatKeys[message.to + '<->' + message.from];
              if (!chatKeys) {
                chatKeys = _this._newChatCrypto(message, userURL, 'decrypt');
                _this.chatKeys[message.to + '<->' + message.from] = chatKeys;
              }

              if (chatKeys.authenticated && !isHandShakeType) {
                (function () {
                  var value = JSON.parse(message.body.value);
                  var iv = _this.crypto.decode(value.iv);
                  var data = _this.crypto.decode(value.value);
                  var hash = _this.crypto.decode(value.hash);
                  _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, data, iv).then(function (decryptedData) {
                    console.log('decrypted value ', decryptedData);
                    message.body.value = decryptedData;

                    var filteredMessage = _this._filterMessageToHash(message, decryptedData + iv);

                    _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, filteredMessage, hash).then(function (result) {
                      //console.log('result of hash verification! ', result);
                      message.body.assertedIdentity = true;
                      resolve(message);
                    });
                  });
                })();
              } else if (isHandShakeType) {
                _this._doHandShakePhase(message, chatKeys).then(function (value) {

                  //if it was started by doMutualAuthentication then ends the protocol
                  if (value === 'handShakeEnd') {
                    reject('decrypt handshake protocol phase ');

                    // if was started by a message, then resend that message
                  } else {
                    _this.chatKeys[message.to + '<->' + message.from] = value.chatKeys;
                    _this._messageBus.postMessage(value.message);
                    reject('decrypt handshake protocol phase ');
                  }
                });
              } else {
                reject('wrong message do decrypt');
              }
            })();
          } else {
            reject('error on decrypt message');
          }

          //if from hyperty to a dataObjectURL
        } else if (isFromHyperty && isToDataObject) {
          (function () {
            console.log('dataObject value to decrypt: ', message.body);

            var dataObjectKey = _this.dataObjectSessionKeys[dataObjectURL];

            if (dataObjectKey) {

              //check if is to apply encryption
              if (dataObjectKey.isToEncrypt) {
                (function () {
                  var parsedValue = JSON.parse(message.body.value);
                  var iv = _this.crypto.decode(parsedValue.iv);
                  var encryptedValue = _this.crypto.decode(parsedValue.value);
                  var hash = _this.crypto.decode(parsedValue.hash);

                  _this.crypto.decryptAES(dataObjectKey.sessionKey, encryptedValue, iv).then(function (decryptedValue) {
                    var parsedValue = JSON.parse(atob(decryptedValue));
                    console.log('decrypted Value,', parsedValue);
                    message.body.value = parsedValue;

                    var filteredMessage = _this._filterMessageToHash(message, parsedValue + iv);

                    _this.crypto.verifyHMAC(dataObjectKey.sessionKey, filteredMessage, hash).then(function (result) {
                      //console.log('result of hash verification! ', result);

                      message.body.assertedIdentity = true;
                      resolve(message);
                    });
                  });

                  //if not, just return the message
                })();
              } else {
                message.body.assertedIdentity = true;
                resolve(message);
              }
            } else {
              message.body.assertedIdentity = true;
              resolve(message);

              //reject('no sessionKey for chat room found');
            }
          })();
        } else {
          reject('wrong message to decrypt');
        }
      });
    }
  }, {
    key: 'doMutualAuthentication',
    value: function doMutualAuthentication(sender, receiver) {
      console.log('doMutualAuthentication: ', sender, receiver);
      var _this = this;
      var dataObjectURL = void 0;

      // check if the sender is a dataObject and if so stores that value
      var reporterURL = _this.registry.getReporterURLSynchonous(sender);
      if (reporterURL) {
        dataObjectURL = sender;
        sender = reporterURL;
      }

      var msg = {
        to: receiver,
        from: sender,
        callback: undefined,
        body: { handshakePhase: 'startHandShake', ignore: 'ignoreMessage' }
      };

      return new Promise(function (resolve, reject) {

        if (!sender || !receiver) {
          return reject('sender or receiver missing on doMutualAuthentication');
        }

        var chatKeys = _this.chatKeys[sender + '<->' + receiver];
        var userURL = _this._registry.getHypertyOwner(sender);

        if (userURL) {

          if (!chatKeys) {
            // callback to resolve when finish the mutual authentication
            var resolved = function resolved(value) {
              console.log('callback value:', value);
              resolve(value);
            };
            msg.callback = resolved;
            msg.dataObjectURL = dataObjectURL;

            chatKeys = _this._newChatCrypto(msg, userURL);
            _this.chatKeys[sender + '<->' + receiver] = chatKeys;
          }

          if (chatKeys.authenticated) {

            var startSessionKeyExchange = {
              to: sender,
              from: receiver
            };
            chatKeys.dataObjectURL = dataObjectURL;
            _this._sendReporterSessionKey(startSessionKeyExchange, chatKeys).then(function (value) {

              _this._messageBus.postMessage(value.message);
              resolve('exchange of chat sessionKey initiated');
            });
          } else {

            _this._doHandShakePhase(msg, chatKeys);
          }
        } else {
          reject('error on doMutualAuthentication');
        }
      });
    }
  }, {
    key: '_doHandShakePhase',
    value: function _doHandShakePhase(message, chatKeys) {
      var _this = this;

      //console.log('handshakeType');

      return new Promise(function (resolve, reject) {

        var handshakeType = message.body.handshakePhase;
        var iv = void 0;
        var hash = void 0;
        var value = {};
        var filteredMessage = void 0;

        (function () {
          switch (handshakeType) {

            case 'startHandShake':
              chatKeys.keys.fromRandom = _this.crypto.generateRandom();

              var startHandShakeMsg = {
                type: 'handshake',
                to: message.to,
                from: message.from,
                body: {
                  handshakePhase: 'senderHello',
                  value: _this.crypto.encode(chatKeys.keys.fromRandom)
                }
              };
              chatKeys.handshakeHistory.senderHello = _this._filterMessageToHash(startHandShakeMsg, undefined, chatKeys.hypertyFrom.messageInfo);

              // check if was the encrypt function or the mutual authentication that request the
              // start of the handShakePhase.
              if (chatKeys.initialMessage) {
                resolve({ message: startHandShakeMsg, chatKeys: chatKeys });
              } else {
                _this.chatKeys[message.from + '<->' + message.to] = chatKeys;
                _this._messageBus.postMessage(startHandShakeMsg);
              }

              break;
            case 'senderHello':

              console.log('senderHello');
              chatKeys.handshakeHistory.senderHello = _this._filterMessageToHash(message);
              chatKeys.keys.fromRandom = _this.crypto.decode(message.body.value);
              chatKeys.keys.toRandom = _this.crypto.generateRandom();

              var senderHelloMsg = {
                type: 'handshake',
                to: message.from,
                from: message.to,
                body: {
                  handshakePhase: 'receiverHello',
                  value: _this.crypto.encode(chatKeys.keys.toRandom)
                }
              };
              chatKeys.handshakeHistory.receiverHello = _this._filterMessageToHash(senderHelloMsg, undefined, chatKeys.hypertyFrom.messageInfo);
              resolve({ message: senderHelloMsg, chatKeys: chatKeys });

              break;
            case 'receiverHello':

              console.log('receiverHello');
              chatKeys.handshakeHistory.receiverHello = _this._filterMessageToHash(message);

              _this.validateAssertion(message.body.identity.assertion, undefined, message.body.identity.idp).then(function (value) {

                //TODO remove later this verification as soon as all the IdP proxy are updated in the example
                var encodedpublicKey = typeof value.contents === 'string' ? value.contents : value.contents.nonce;

                var receiverPublicKey = _this.crypto.decode(encodedpublicKey);
                var premasterSecret = _this.crypto.generatePMS();
                var toRandom = message.body.value;
                chatKeys.hypertyTo.assertion = message.body.identity.assertion;
                chatKeys.hypertyTo.publicKey = receiverPublicKey;
                chatKeys.hypertyTo.userID = value.contents.email;
                chatKeys.keys.toRandom = _this.crypto.decode(toRandom);
                chatKeys.keys.premasterKey = premasterSecret;

                var concatKey = _this.crypto.concatPMSwithRandoms(premasterSecret, chatKeys.keys.toRandom, chatKeys.keys.fromRandom);

                return _this.crypto.generateMasterSecret(concatKey, 'messageHistoric' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

                //generate the master key
              }).then(function (masterKey) {
                chatKeys.keys.masterKey = masterKey;

                return _this.crypto.generateKeys(masterKey, 'key expansion' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

                //generate the symmetric and hash keys
              }).then(function (keys) {

                chatKeys.keys.hypertyToSessionKey = new Uint8Array(keys[0]);
                chatKeys.keys.hypertyFromSessionKey = new Uint8Array(keys[1]);
                chatKeys.keys.hypertyToHashKey = new Uint8Array(keys[2]);
                chatKeys.keys.hypertyFromHashKey = new Uint8Array(keys[3]);
                iv = _this.crypto.generateIV();
                value.iv = _this.crypto.encode(iv);

                var messageStructure = {
                  type: 'handshake',
                  to: message.from,
                  from: message.to,
                  body: {
                    handshakePhase: 'senderCertificate'
                  }
                };

                // hash the value and the iv
                filteredMessage = _this._filterMessageToHash(messageStructure, 'ok' + iv, chatKeys.hypertyFrom.messageInfo);
                return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, filteredMessage);
              }).then(function (hash) {
                value.hash = _this.crypto.encode(hash);

                //encrypt the data
                return _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, 'ok', iv);
              }).then(function (encryptedData) {
                value.symetricEncryption = _this.crypto.encode(encryptedData);

                return _this.crypto.encryptRSA(chatKeys.hypertyTo.publicKey, chatKeys.keys.premasterKey);
              }).then(function (encryptedValue) {

                value.assymetricEncryption = _this.crypto.encode(encryptedValue);

                var messageStructure = {
                  type: 'handshake',
                  to: message.from,
                  from: message.to,
                  body: {
                    handshakePhase: 'senderCertificate'
                  }
                };

                var messageToHash = _this._filterMessageToHash(messageStructure, chatKeys.keys.premasterKey, chatKeys.hypertyFrom.messageInfo);

                return _this.crypto.signRSA(chatKeys.hypertyFrom.privateKey, JSON.stringify(chatKeys.handshakeHistory) + JSON.stringify(messageToHash));
              }).then(function (signature) {

                value.signature = _this.crypto.encode(signature);

                var receiverHelloMsg = {
                  type: 'handshake',
                  to: message.from,
                  from: message.to,
                  body: {
                    handshakePhase: 'senderCertificate',
                    value: btoa(JSON.stringify(value))
                  }
                };
                chatKeys.handshakeHistory.senderCertificate = _this._filterMessageToHash(receiverHelloMsg, 'ok' + iv, chatKeys.hypertyFrom.messageInfo);

                resolve({ message: receiverHelloMsg, chatKeys: chatKeys });
              }, function (error) {
                return reject(error);
              });

              break;
            case 'senderCertificate':

              console.log('senderCertificate');
              var receivedValue = JSON.parse(atob(message.body.value));

              _this.validateAssertion(message.body.identity.assertion, undefined, message.body.identity.idp).then(function (value) {
                var encryptedPMS = _this.crypto.decode(receivedValue.assymetricEncryption);

                //TODO remove later this verification as soon as all the IdP proxy are updated in the example
                var encodedpublicKey = typeof value.contents === 'string' ? value.contents : value.contents.nonce;

                var senderPublicKey = _this.crypto.decode(encodedpublicKey);
                chatKeys.hypertyTo.assertion = message.body.identity.assertion;
                chatKeys.hypertyTo.publicKey = senderPublicKey;
                chatKeys.hypertyTo.userID = value.contents.email;

                return _this.crypto.decryptRSA(chatKeys.hypertyFrom.privateKey, encryptedPMS);
              }, function (error) {
                console.log(error);
                reject('Error during authentication of identity');

                //obtain the PremasterKey using the private key
              }).then(function (pms) {

                chatKeys.keys.premasterKey = new Uint8Array(pms);

                var signature = _this.crypto.decode(receivedValue.signature);

                var receivedmsgToHash = _this._filterMessageToHash(message, chatKeys.keys.premasterKey);

                return _this.crypto.verifyRSA(chatKeys.hypertyTo.publicKey, JSON.stringify(chatKeys.handshakeHistory) + JSON.stringify(receivedmsgToHash), signature);

                // validates the signature received
              }).then(function (signValidationResult) {

                console.log('signature validation result ', signValidationResult);
                var concatKey = _this.crypto.concatPMSwithRandoms(chatKeys.keys.premasterKey, chatKeys.keys.toRandom, chatKeys.keys.fromRandom);

                return _this.crypto.generateMasterSecret(concatKey, 'messageHistoric' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

                // generates the master keys from the Premaster key and the randoms
              }).then(function (masterKey) {
                chatKeys.keys.masterKey = masterKey;

                return _this.crypto.generateKeys(masterKey, 'key expansion' + chatKeys.keys.toRandom + chatKeys.keys.fromRandom);

                // generates the symmetric keys to be used in the symmetric encryption
              }).then(function (keys) {
                chatKeys.keys.hypertyFromSessionKey = new Uint8Array(keys[0]);
                chatKeys.keys.hypertyToSessionKey = new Uint8Array(keys[1]);
                chatKeys.keys.hypertyFromHashKey = new Uint8Array(keys[2]);
                chatKeys.keys.hypertyToHashKey = new Uint8Array(keys[3]);
                iv = _this.crypto.decode(receivedValue.iv);
                var data = _this.crypto.decode(receivedValue.symetricEncryption);

                return _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, data, iv);
              }).then(function (decryptedData) {
                //console.log('decryptedData', decryptedData);

                chatKeys.handshakeHistory.senderCertificate = _this._filterMessageToHash(message, decryptedData + iv);

                var hashReceived = _this.crypto.decode(receivedValue.hash);

                filteredMessage = _this._filterMessageToHash(message, decryptedData + iv);

                return _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, filteredMessage, hashReceived);
              }).then(function (verifiedHash) {

                //console.log('result of hash verification ', verifiedHash);
                var receiverFinishedMessage = {
                  type: 'handshake',
                  to: message.from,
                  from: message.to,
                  body: {
                    handshakePhase: 'receiverFinishedMessage'
                  }
                };
                iv = _this.crypto.generateIV();
                value.iv = _this.crypto.encode(iv);

                filteredMessage = _this._filterMessageToHash(receiverFinishedMessage, 'ok!' + iv, chatKeys.hypertyFrom.messageInfo);

                return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, receiverFinishedMessage);
              }).then(function (hash) {

                value.hash = _this.crypto.encode(hash);
                return _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, 'ok!', iv);
              }).then(function (encryptedValue) {
                value.value = _this.crypto.encode(encryptedValue);
                var receiverFinishedMessage = {
                  type: 'handshake',
                  to: message.from,
                  from: message.to,
                  body: {
                    handshakePhase: 'receiverFinishedMessage',
                    value: btoa(JSON.stringify(value))
                  }
                };

                chatKeys.handshakeHistory.receiverFinishedMessage = _this._filterMessageToHash(receiverFinishedMessage, 'ok!' + iv, chatKeys.hypertyFrom.messageInfo);
                chatKeys.authenticated = true;
                resolve({ message: receiverFinishedMessage, chatKeys: chatKeys });
              });

              break;
            case 'receiverFinishedMessage':

              console.log('receiverFinishedMessage');
              chatKeys.authenticated = true;

              value = JSON.parse(atob(message.body.value));

              iv = _this.crypto.decode(value.iv);
              var data = _this.crypto.decode(value.value);
              hash = _this.crypto.decode(value.hash);

              _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, data, iv).then(function (decryptedData) {
                console.log('decryptedData', decryptedData);
                chatKeys.handshakeHistory.receiverFinishedMessage = _this._filterMessageToHash(message, decryptedData + iv);

                var filteredMessage = _this._filterMessageToHash(message, data + iv);
                _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, filteredMessage, hash).then(function (result) {
                  console.log('hash result', result);

                  // check if there was an initial message that was blocked and send it
                  if (chatKeys.initialMessage) {
                    var initialMessage = {
                      type: 'create',
                      to: message.from,
                      from: message.to,
                      body: {
                        value: chatKeys.initialMessage.body.value
                      }
                    };

                    resolve({ message: initialMessage, chatKeys: chatKeys });

                    //sends the sessionKey to the subscriber hyperty
                  } else {
                    _this._sendReporterSessionKey(message, chatKeys).then(function (value) {
                      resolve(value);
                    });
                  }
                });
              });

              break;
            case 'reporterSessionKey':

              console.log('reporterSessionKey');

              var valueIVandHash = JSON.parse(atob(message.body.value));
              hash = _this.crypto.decode(valueIVandHash.hash);
              iv = _this.crypto.decode(valueIVandHash.iv);
              var encryptedValue = _this.crypto.decode(valueIVandHash.value);
              var parsedValue = void 0;
              var sessionKey = void 0;
              var dataObjectURL = void 0;
              var receiverAcknowledgeMsg = void 0;

              _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, encryptedValue, iv).then(function (decryptedValue) {

                parsedValue = JSON.parse(decryptedValue);
                sessionKey = _this.crypto.decode(parsedValue.value);
                dataObjectURL = parsedValue.dataObjectURL;

                var messageToHash = _this._filterMessageToHash(message, decryptedValue + iv);

                return _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, messageToHash, hash);
              }).then(function (hashResult) {

                //console.log('hash successfully validated ', hashResult);

                _this.dataObjectSessionKeys[dataObjectURL] = { sessionKey: sessionKey, isToEncrypt: true };

                iv = _this.crypto.generateIV();
                value.iv = _this.crypto.encode(iv);

                return _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, 'ok!!', iv);
              }).then(function (encryptedValue) {

                receiverAcknowledgeMsg = {
                  type: 'handshake',
                  to: message.from,
                  from: message.to,
                  body: {
                    handshakePhase: 'receiverAcknowledge'
                  }
                };

                value.value = _this.crypto.encode(encryptedValue);
                var messageToHash = _this._filterMessageToHash(receiverAcknowledgeMsg, 'ok!!' + iv, chatKeys.hypertyFrom.messageInfo);

                return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, messageToHash);
              }).then(function (hashedMessage) {
                var finalValue = btoa(JSON.stringify({ value: value.value, hash: _this.crypto.encode(hashedMessage), iv: value.iv }));

                receiverAcknowledgeMsg.body.value = finalValue;
                resolve({ message: receiverAcknowledgeMsg, chatKeys: chatKeys });
              });

              break;
            case 'receiverAcknowledge':

              console.log('receiverAcknowledge');

              var receivedvalueIVandHash = JSON.parse(atob(message.body.value));
              var receivedHash = _this.crypto.decode(receivedvalueIVandHash.hash);
              iv = _this.crypto.decode(receivedvalueIVandHash.iv);
              var receivedEncryptedValue = _this.crypto.decode(receivedvalueIVandHash.value);

              _this.crypto.decryptAES(chatKeys.keys.hypertyToSessionKey, receivedEncryptedValue, iv).then(function (decryptedValue) {

                var filteredMessage = _this._filterMessageToHash(message, decryptedValue + iv);
                return _this.crypto.verifyHMAC(chatKeys.keys.hypertyToHashKey, filteredMessage, receivedHash);
              }).then(function (hashResult) {
                //console.log('hashResult ', hashResult);

                var callback = chatKeys.callback;

                if (callback) {
                  callback('handShakeEnd');
                }
                resolve('handShakeEnd');
              });

              break;
            default:
              reject(message);
          }
        })();
      });
    }
  }, {
    key: '_sendReporterSessionKey',
    value: function _sendReporterSessionKey(message, chatKeys) {
      var _this = this;
      var sessionKeyBundle = _this.dataObjectSessionKeys[chatKeys.dataObjectURL];
      var reporterSessionKeyMsg = void 0;
      var valueToEncrypt = void 0;
      var sessionKey = void 0;
      var iv = void 0;
      var value = {};

      return new Promise(function (resolve, reject) {

        //if there is not yet a session Key, generates a new one
        if (!sessionKeyBundle) {
          sessionKey = _this.crypto.generateRandom();
          _this.dataObjectSessionKeys[chatKeys.dataObjectURL] = { sessionKey: sessionKey, isToEncrypt: true };
        } else {
          sessionKey = sessionKeyBundle.sessionKey;
        }

        valueToEncrypt = JSON.stringify({ value: _this.crypto.encode(sessionKey), dataObjectURL: chatKeys.dataObjectURL });

        iv = _this.crypto.generateIV();
        value.iv = _this.crypto.encode(iv);
        _this.crypto.encryptAES(chatKeys.keys.hypertyFromSessionKey, valueToEncrypt, iv).then(function (encryptedValue) {

          reporterSessionKeyMsg = {
            type: 'handshake',
            to: message.from,
            from: message.to,
            body: {
              handshakePhase: 'reporterSessionKey',
              value: _this.crypto.encode(encryptedValue)
            }
          };

          var filteredMessage = _this._filterMessageToHash(reporterSessionKeyMsg, valueToEncrypt + iv, chatKeys.hypertyFrom.messageInfo);

          return _this.crypto.hashHMAC(chatKeys.keys.hypertyFromHashKey, filteredMessage);
        }).then(function (hashedMessage) {

          var valueWithHash = btoa(JSON.stringify({ value: reporterSessionKeyMsg.body.value, hash: _this.crypto.encode(hashedMessage), iv: value.iv }));

          reporterSessionKeyMsg.body.value = valueWithHash;
          resolve({ message: reporterSessionKeyMsg, chatKeys: chatKeys });
        });
      });
    }

    /**
    * returns the reporter associated to the dataObject URL
    * @param   {String}   dataObjectURL         dataObject url
    * @return   {String}  reporter              dataObject url reporter
    */

  }, {
    key: '_getHypertyFromDataObject',
    value: function _getHypertyFromDataObject(dataObjectURL) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        //TODO remove this logic and move it to a util function

        var splitedURL = dataObjectURL.split('/');
        var finalURL = splitedURL[0] + '//' + splitedURL[2] + '/' + splitedURL[3];
        if (splitedURL.length > 6) {
          finalURL = splitedURL[0] + '//' + splitedURL[2] + '/' + splitedURL[3] + '/' + splitedURL[4];
        }

        // check if is the creator of the hyperty
        var reporterURL = _this.registry.getReporterURLSynchonous(finalURL);

        if (reporterURL) {
          resolve(reporterURL);
        } else {
          // check if there is already an association from an hypertyURL to the dataObject
          var storedReporterURL = _this.dataObjectsIdentity[finalURL];

          if (storedReporterURL) {
            resolve(storedReporterURL);
          } else {
            // check if there is any hyperty that subscribed the dataObjectURL
            var subscriberHyperty = _this.registry.getDataObjectSubscriberHyperty(dataObjectURL);

            if (subscriberHyperty) {
              resolve(subscriberHyperty);
            } else {

              // search in domain registry for the hyperty associated to the dataObject
              // search in case is a subscriber who wants to know the reporter
              _this.registry.discoverDataObjectPerURL(finalURL, splitedURL[2]).then(function (dataObject) {
                _this.dataObjectsIdentity[finalURL] = dataObject.reporter;
                resolve(dataObject.reporter);
              }, function (err) {
                reject(err);
              });
            }
          }
        }
      });
    }

    /**
    * filter the messages to hash, by removing some fields not generated by the runtime core
    * @param {Message}  message                     message
    * @param {String}  decryptedValue (Optional)    value from body.value in case it originally comes encrypted
    * @param {JSON}  identity(Optional)    add the hyperty identity associated in case is not added to the initial message
    * @return {Message}  new message filtered
    */

  }, {
    key: '_filterMessageToHash',
    value: function _filterMessageToHash(message, decryptedValue, identity) {

      return {
        type: message.type,
        from: message.from,
        to: message.to,
        body: {
          identity: identity || message.body.identity,
          value: decryptedValue || message.body.value,
          handshakePhase: message.body.handshakePhase
        }
      };
    }

    /**
    * generates the initial structure for the keys between two users
    * @param {JSON}    message              initial message that triggers the mutual authentication
    * @param {String}  userURL              userURL
    * @param {boolean} receiver(Optional)  indicates if is the sender or the receiver that creates a new chat crypto
    * @return {JSON} newChatCrypto  new JSON structure for the chat crypto
    */

  }, {
    key: '_newChatCrypto',
    value: function _newChatCrypto(message, userURL, receiver) {
      var _this = this;

      //check whether is the sender or the receiver to create a new chatCrypto
      //to mantain consistency on the keys if the receiver create a new chatCrypto,
      //then invert the fields
      var from = receiver ? message.to : message.from;
      var to = receiver ? message.from : message.to;

      var userInfo = _this.getIdentity(userURL);

      var newChatCrypto = {
        hypertyFrom: {
          hyperty: from,
          userID: userInfo.messageInfo.userProfile.username,
          privateKey: userInfo.keyPair.private,
          publicKey: userInfo.keyPair.public,
          assertion: userInfo.assertion,
          messageInfo: userInfo.messageInfo
        },
        hypertyTo: {
          hyperty: to,
          userID: undefined,
          publicKey: undefined,
          assertion: undefined
        },
        keys: {
          hypertyToSessionKey: undefined,
          hypertyFromSessionKey: undefined,
          hypertyToHashKey: undefined,
          hypertyFromHashKey: undefined,
          toRandom: undefined,
          fromRandom: undefined,
          premasterKey: undefined,
          masterKey: undefined
        },
        handshakeHistory: {
          senderHello: undefined,
          receiverHello: undefined,
          senderCertificate: undefined,
          receiverFinishedMessage: undefined
        },
        initialMessage: message.body.ignore ? undefined : message,
        callback: message.callback,
        authenticated: false,
        dataObjectURL: message.dataObjectURL
      };

      return newChatCrypto;
    }
  }, {
    key: 'messageBus',
    get: function get() {
      var _this = this;
      return _this._messageBus;
    }

    /**
    * Set the messageBus in this Registry
    * @param {MessageBus}           messageBus
    */
    ,
    set: function set(messageBus) {
      var _this = this;
      _this._messageBus = messageBus;
    }

    /**
    * return the registry in this idModule
    * @param {registry}           registry
    */

  }, {
    key: 'registry',
    get: function get() {
      var _this = this;
      return _this._registry;
    }

    /**
    * Set the registry in this idModule
    * @param {registry}     reg
    */
    ,
    set: function set(registry) {
      var _this = this;
      _this._registry = registry;
    }
  }]);

  return IdentityModule;
}();

exports.default = IdentityModule;