'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = activate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Identity Provider Proxy
*/
var idp = {

  /**
  * Function to validate an identity Assertion received
  * TODO add details of the implementation, and improve the implementation
  *
  * @param  {assertion}    Identity Assertion to be validated
  * @param  {origin}       Origin parameter that identifies the origin of the RTCPeerConnection
  * @return {Promise}      Returns a promise with the identity assertion validation result
  */
  validateAssertion: function validateAssertion(assertion, origin) {
    return new _promise2.default(function (resolve, reject) {

      resolve({ identity: 'identity@idp.com', contents: 'content' });
    });
  },

  /**
  * Function to generate an identity Assertion
  * TODO add details of the implementation, and improve implementation
  *
  * @param  {contents} The contents includes information about the identity received
  * @param  {origin} Origin parameter that identifies the origin of the RTCPeerConnection
  * @param  {usernameHint} optional usernameHint parameter
  * @return {Promise} returns a promise with an identity assertion
  */
  generateAssertion: function generateAssertion(contents, origin, hint) {

    return new _promise2.default(function (resolve, reject) {

      //the hint field contains the information obtained after the user authentication
      // if the hint content is not present, then rejects the value with the URL to open the page to authenticate the user
      if (!hint) {

        reject({ name: 'IdPLoginError', loginUrl: 'requestUrl' });
      } else {

        resolve({ assertion: 'identityAssertion', idp: { domain: 'idp.com', protocol: 'OIDC' } });
      }
    });
  }
};

/**
* Identity Provider Proxy Protocol Stub
*/

var ProxyStubTemplate = function () {

  /**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the received idpProxy
  *
  * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
  * @param  {Message.Message}                           busPostMessage     configuration
  * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
  */
  function ProxyStubTemplate(runtimeProtoStubURL, bus, config) {
    (0, _classCallCheck3.default)(this, ProxyStubTemplate);

    var _this = this;
    _this.runtimeProtoStubURL = runtimeProtoStubURL;
    _this.messageBus = bus;
    _this.config = config;

    _this.messageBus.addListener('*', function (msg) {

      //TODO add the respective listener
      if (msg.to === 'domain-idp://ProxyStubTemplate.com') {

        _this.requestToIdp(msg);
      }
    });
  }

  /**
  * Function that see the intended method in the message received and call the respective function
  *
  * @param {message}  message received in the messageBus
  */


  (0, _createClass3.default)(ProxyStubTemplate, [{
    key: 'requestToIdp',
    value: function requestToIdp(msg) {
      var _this = this;
      var params = msg.body.params;

      switch (msg.body.method) {
        case 'generateAssertion':
          idp.generateAssertion(params.contents, params.origin, params.usernameHint).then(function (value) {
            _this.replyMessage(msg, value);
          }, function (error) {
            _this.replyMessage(msg, error);
          });
          break;
        case 'validateAssertion':
          idp.validateAssertion(params.assertion, params.origin).then(function (value) {
            _this.replyMessage(msg, value);
          }, function (error) {
            _this.replyMessage(msg, error);
          });
          break;
        default:
          break;
      }
    }

    /**
    * This function receives a message and a value. It replies the value to the sender of the message received
    *
    * @param  {message}   message received
    * @param  {value}     value to include in the new message to send
    */

  }, {
    key: 'replyMessage',
    value: function replyMessage(msg, value) {
      var _this = this;

      var message = { id: msg.id, type: 'response', to: msg.from, from: msg.to,
        body: { code: 200, value: value } };

      _this.messageBus.postMessage(message);
    }
  }]);
  return ProxyStubTemplate;
}();

/**
 * To activate this protocol stub, using the same method for all protostub.
 * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
 * @param  {Message.Message}                           busPostMessage     configuration
 * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
 * @return {Object} Object with name and instance of ProtoStub
 */


function activate(url, bus, config) {
  return {
    name: 'ProxyStubTemplate',
    instance: new ProxyStubTemplate(url, bus, config)
  };
}