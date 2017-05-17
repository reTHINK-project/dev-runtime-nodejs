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
* Identity Provider Proxy Protocol Stub
*/
var IdpProxyStub = function () {

  /**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the idpProxy received
  *
  * @param  {messageBus}      messageBus
  * @param  {domain}          Domain
  * @param  {idpProxy}    identity Provider Proxy javascript file
  */
  function IdpProxyStub(messageBus, domain, idpProxy) {
    (0, _classCallCheck3.default)(this, IdpProxyStub);

    var _this = this;
    _this.messageBus = messageBus;
    _this.domain = domain;
    _this.idpProxy = idpProxy;

    _this.messageBus.addListener('domain://' + idpProxy, function (msg) {
      _this.requestToIdp(msg);
    });

    //start the web worker with the idpProxy
    _this.start(idpProxy);
  }

  /**
  * Function that see the intended method in the message received and call the respective function
  *
  * @param {message}  message received in the messageBus
  */


  (0, _createClass3.default)(IdpProxyStub, [{
    key: 'requestToIdp',
    value: function requestToIdp(msg) {
      var _this = this;
      var params = msg.body.params;
      switch (msg.body.method) {
        case 'login':
          _this.login(params).then(function (value) {
            _this.replyMessage(msg, value);
          });
          break;
        case 'generateAssertion':
          _this.generate(params).then(function (value) {
            _this.replyMessage(msg, value);
          });
          break;
        case 'validateAssertion':
          _this.validate(params).then(function (value) {
            _this.replyMessage(msg, value);
          });
          break;
        default:
          break;
      }
    }

    /**
    * Starts a web worker with the idpProxy javascipt file
    *
    * @param  {idpProxy}    identity Provider Proxy javascript file
    */

  }, {
    key: 'start',
    value: function start(idpProxy) {
      var _this = this;
      if (window.Worker) {
        //check if the browser supports the worker API

        var myWorker = new Worker('/src/identity/IdpProxy.js');
        _this.myWorker = myWorker;
        _this.myWorker.postMessage(['create', 'IdpProxy']);
      } else {
        return 'error';
      }
    }

    /**
    * function that makes a request for an identity assertion to the web worker running the idpProxy
    *
    * @param  {params}  parameters received in the message. In this case contains the content, origin and usernamehint
    * @return {Promise} returns a promise with an identity assertion generate by the idpProxy
    */

  }, {
    key: 'generate',
    value: function generate(params) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        if (window.Worker) {
          //check if the browser supports the worker API

          _this.myWorker.postMessage(['generate', params]);

          _this.myWorker.onmessage = function (e) {
            resolve(e.data);
            console.log('Message received from worker', e.data);
          };
        } else {
          reject('error');
        }
      });
    }

    /**
    * function that makes a request to validate an identity assertion to the web worker running the idpProxy
    *
    * @param  {params}  parameters received in the message. In this case contains the identity assertion and origin
    * @return {Promise} returns a promise with the identity assertion validation result, received by the idpProxy
    */

  }, {
    key: 'validate',
    value: function validate(params) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        if (window.Worker) {
          //check if the browser supports the worker API

          _this.myWorker.postMessage(['validate', params]);

          _this.myWorker.onmessage = function (e) {
            resolve(e.data);
            console.log('Message received from worker', e.data);
          };
        } else {
          reject('error');
        }
      });
    }

    /**
    * function that makes a request for a user identity to the web worker running the idpProxy
    *
    * @param  {params}  parameters received in the message. In this case contains the login scope
    * @return {Promise} returns a promise an URL so the Identity Module can use to obtain an identity
    */

  }, {
    key: 'login',
    value: function login(params) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        if (window.Worker) {
          //check if the browser supports the worker API

          _this.myWorker.postMessage(['login', params]);

          _this.myWorker.onmessage = function (e) {
            resolve(e.data);
            console.log('Message received from worker', e.data);
          };
        } else {
          reject('error');
        }
      });
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
  return IdpProxyStub;
}();

exports.default = IdpProxyStub;