'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import hello from 'hellojs';

/**
*  class to facilitate the operations with the openID connect, through several Identity Providers
*
*/

var OpenIdLib = function () {
  function OpenIdLib(identityProvider, clientID) {
    _classCallCheck(this, OpenIdLib);

    var _this = this;
    _this.clientID = clientID;
    _this.identityProvider = identityProvider;

    switch (identityProvider) {
      case 'google':
        var googleInfo = new GoogleInfo();
        _this.info = googleInfo;
        break;
      case 'facebook':
        var facebookInfo = new FacebookInfo();
        _this.info = facebookInfo;
        break;
      case 'windows':
        var microsoftInfo = new MicrosoftInfo();
        _this.info = microsoftInfo;
        break;
      default:
        break;
    }
  }

  _createClass(OpenIdLib, [{
    key: 'openPopup',
    value: function openPopup() {
      var _this = this;

      var REDIRECT = _this.info.REDIRECT;
      var URL = _this.info.URL;

      var acToken = void 0;
      var tokenType = void 0;
      var expiresIn = void 0;

      return new Promise(function (resolve, reject) {

        //function to parse the query string in the given URL to obatin certain values
        function gup(url, name) {
          name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
          var regexS = '[\\#&?]' + name + '=([^&#]*)';
          var regex = new RegExp(regexS);
          var results = regex.exec(url);
          if (results === null) return '';else return results[1];
        }

        /*hello.init({google: '808329566012-tqr8qoh111942gd2kg007t0s8f277roi.apps.googleusercontent.com',
                   facebook: '655302667942219',
                   windows: 'asdf197f6ad6-808f-4ddc-b725-3d8fe2660349'});
        hello(_this.identityProvider).login({scope: 'email'}).then(function(token) {
          console.log(token);
          resolve(token.authResponse.access_token);
        }, function(error) {
          console.log('errorValidating ', error);
          reject(error);
        });*/

        var win = window.open(URL, 'openIDrequest', 'width=800, height=600');
        var pollTimer = window.setInterval(function () {
          try {
            //console.log(win.document.URL);

            if (win.closed) {
              reject('Some error occured.');
              clearInterval(pollTimer);
            }

            var redirectURL = document.URL; //window.location.origin;
            if (win.document.URL.indexOf('REDIRECT') !== -1 || win.document.URL.indexOf(redirectURL) !== -1) {
              window.clearInterval(pollTimer);
              var url = win.document.URL;

              //not working yet. Some problems with the 'POST' method
              if (_this.identityProvider === 'windows') {
                (function () {
                  var code = gup(url, 'code');
                  var sessionState = gup(url, 'session_state');

                  var reqAccessURL = _this.info.TOKENEND + 'redirect_uri=' + _this.info.REDIRECT + '&grant_type=authorization_code' + '&client_id=' + _this.info.CLIENTID + '&code=' + code;

                  win.close();

                  var req = new XMLHttpRequest();
                  req.open('POST', _this.info.TOKENEND, true);
                  req.setRequestHeader('Access-Control-Allow-Origin', '*');

                  var data = new FormData();
                  data.append('redirect_uri', _this.info.REDIRECT);
                  data.append('grant_type', 'authorization_code');
                  data.append('client_id', _this.info.CLIENTID);
                  data.append('code', code);

                  req.onreadystatechange = function (e) {
                    if (req.readyState === 4) {
                      if (req.status === 200) {

                        resolve('null');
                      } else if (req.status === 400) {
                        reject('There was an error processing the token');
                      } else {
                        reject('something else other than 200 was returned');
                      }
                    }
                  };
                  req.send(data);
                })();
              } else {

                acToken = gup(url, 'access_token');
                tokenType = gup(url, 'token_type'); //FACEBOOK does not return tokenType in the field
                expiresIn = gup(url, 'expires_in');

                win.close();

                if (_this.identityProvider === 'facebook') {
                  _this.info.VALIDURL = 'https://graph.facebook.com/debug_token?input_token=' + acToken + '&access_token=';
                }

                //after receiving the access token, google requires to validate first the token to prevent confused deputy problem.
                resolve(acToken);
              }
            }
          } catch (e) {
            //console.log(e);
          }
        }, 1000);
      });
    }
  }, {
    key: 'validateToken',
    value: function validateToken(token) {
      var _this = this;
      var tokenID = void 0;
      var VALIDURL = _this.info.VALIDURL;
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', VALIDURL + token, true);

        req.onreadystatechange = function (e) {
          if (req.readyState === 4) {
            if (req.status === 200) {
              tokenID = JSON.parse(req.responseText);

              resolve({ token: token, tokenID: tokenID });
            } else if (req.status === 400) {
              reject('There was an error processing the token');
            } else {
              reject('something else other than 200 was returned');
            }
          }
        };
        req.send();
      });
    }

    //function to exchange the access token with an ID Token containing the information

  }, {
    key: 'getInfoToken',
    value: function getInfoToken(token, tokenID) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var USERINFURL = _this.info.USERINFURL;

        var req = new XMLHttpRequest();
        req.open('GET', USERINFURL + token, true);

        req.onreadystatechange = function (e) {
          if (req.readyState === 4) {
            if (req.status === 200) {
              var infoToken = JSON.parse(req.responseText);
              var email = infoToken.email;

              //contruct the identityURL to be defined as in specification
              // model: user://<idpdomain>/<user-identifier>
              var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

              //TODO remove later the 'token' field key
              var identityBundle = { identity: identityURL, token: infoToken, accessToken: token, idToken: tokenID, infoToken: infoToken, idp: 'google' };

              resolve(identityBundle);
            } else if (req.status === 400) {
              reject('There was an error processing the token');
            } else {
              reject('something else other than 200 was returned');
            }
          }
        };
        req.send();
      });
    }
  }]);

  return OpenIdLib;
}();

//Google works fine with OpenID connect


var GoogleInfo = function GoogleInfo() {
  _classCallCheck(this, GoogleInfo);

  var _this = this;
  _this.OAUTHURL = 'https://accounts.google.com/o/oauth2/auth?';
  _this.SCOPE = 'email%20profile';
  _this.CLIENTID = '808329566012-tqr8qoh111942gd2kg007t0s8f277roi.apps.googleusercontent.com';
  _this.REDIRECT = document.URL;
  _this.TYPE = 'token';
  _this.VALIDURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
  _this.USERINFURL = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=';

  _this.URL = _this.OAUTHURL + 'scope=' + _this.SCOPE + '&client_id=' + _this.CLIENTID + '&redirect_uri=' + _this.REDIRECT + '&response_type=' + _this.TYPE;
};

//Facebook only provides the support for Oauth2 Tokens, and do not directly provide support for OpenID connect. So, no 'oficial' ID token can be requested, just information about the user.


var FacebookInfo = function FacebookInfo() {
  _classCallCheck(this, FacebookInfo);

  var _this = this;
  _this.OAUTHURL = 'https://www.facebook.com/dialog/oauth?';
  _this.CLIENTID = 655302667942219;
  _this.REDIRECT = document.URL; // 'http://localhost:8080/example/index.html';
  _this.TYPE = 'token';
  _this.VALIDURL = 'https://graph.facebook.com/debug_token?input_token='; //must be updated later
  _this.USERINFURL = 'https://graph.facebook.com/v2.5/me?fields=id,name,email,picture&access_token=';
  _this.URL = _this.OAUTHURL + 'client_id=' + _this.CLIENTID + '&redirect_uri=' + _this.REDIRECT + '&response_type=' + _this.TYPE;
};

//Microsoft is not yet implemented to obtain the Access token / ID token. Some troubles to request the Access token, since it is required to make a http Post request with the authorization code.


var MicrosoftInfo = function MicrosoftInfo() {
  _classCallCheck(this, MicrosoftInfo);

  var _this = this;
  _this.OAUTHURL = 'https://login.microsoftonline.com/common/oauth2/authorize?';
  _this.CLIENTID = '7e2f3589-4b38-4b1c-a321-c9251de00ef2';
  _this.REDIRECT = document.URL; //'http%3A%2F%2Flocalhost%3A8080%2Fexample%2Findex%2Ehtml'
  _this.TYPE = 'code';

  _this.TOKENEND = 'https://login.microsoftonline.com/3fa4042c-7c4d-4382-aba8-fc8ec61103a4/oauth2/token';
  _this.AUTHEND = 'https://login.microsoftonline.com/3fa4042c-7c4d-4382-aba8-fc8ec61103a4/oauth2/authorize?';

  _this.URL = _this.AUTHEND + 'response_type=' + _this.TYPE + '&client_id=' + _this.CLIENTID; //+ '&redirect_uri=' + _this.REDIRECT;
};

exports.default = OpenIdLib;