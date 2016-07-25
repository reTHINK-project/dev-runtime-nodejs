'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bus2 = require('./Bus');

var _Bus3 = _interopRequireDefault(_Bus2);

var _Pipeline = require('./Pipeline');

var _Pipeline2 = _interopRequireDefault(_Pipeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


/**
* @author micaelpedrosa@gmail.com
* Message BUS Interface is an extension of the Bus
* It doesn't support the default '*' listener, instead it uses the registry.resolve(..)
*/
var MessageBus = function (_Bus) {
  _inherits(MessageBus, _Bus);

  /* private
  _registry: Registry
  _forwards: { <from-url>: { fl: MsgListener, sandboxToUrls: Map(Sandbox, [to-url]), urlToSandbox: { to-url: Sandbox } } }
   _pipeline: Pipeline
  */

  //TODO: future optimization
  //1. message batch processing with setInterval
  //2. resolve default gateway/protostub with register.resolve

  function MessageBus(registry) {
    _classCallCheck(this, MessageBus);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(MessageBus).call(this));

    _this2._registry = registry;
    _this2._forwards = {};

    _this2._pipeline = new _Pipeline2.default(function (error) {
      console.log('PIPELINE-ERROR: ', JSON.stringify(error));
    });
    return _this2;
  }

  _createClass(MessageBus, [{
    key: 'postMessage',


    /**
     * Post a message for routing. It will first search for a listener, if there is no one, it sends to a external routing using the _onPostMessage.
     * External routing use the registry.resolve(..) method to decide the destination sandbox.
     * @param  {Message} inMsg            JSON with mandatory Message structure {id, type, from, to}
     * @param  {Callback} responseCallback Optional callback if a response is expected from the request. A response will be always sent, even if it is a "Timeout".
     * @return {number}                  the Message id
     */
    value: function postMessage(inMsg, responseCallback) {
      var _this = this;

      _this._genId(inMsg);

      _this._pipeline.process(inMsg, function (msg) {

        _this._responseCallback(inMsg, responseCallback);

        if (!_this._onResponse(msg)) {
          var itemList = _this._subscriptions[msg.to];
          if (itemList) {
            //do not publish on default address, because of loopback cycle
            _this._publishOn(itemList, msg);
          } else {
            //if there is no listener, send to external interface
            _this._onPostMessage(msg);
          }
        }
      });

      return inMsg.id;
    }

    /**
     * Adds an external publish address listener. Every message for the address will be forwarded to the external routing by _onPostMessage.
     * This means, even if there is a listener for the address, it will also send the message to the external routing.
     * @param {URL} from Publish address.
     */

  }, {
    key: 'addPublish',
    value: function addPublish(from) {
      var _this3 = this;

      var _this = this;

      //verify if forward exist
      var refCount = _this._forwards[from];
      if (!refCount) {
        var forwardListener = _this.addListener(from, function (msg) {
          console.log('MB-PUBLISH: ( ' + from + ' )');
          _this._onPostMessage(msg);
        });

        refCount = {
          counter: 0,
          fl: forwardListener,
          remove: function remove() {
            _this3.counter--;
            if (_this3.counter === 0) {
              _this3.fl.remove();
              delete _this._forwards[from];
            }
          }
        };

        _this._forwards[from] = refCount;
      }

      refCount.counter++;
      return refCount;
    }

    /**
     * Adds a forward listener for a message destination. Every message reaching an address will be also sent to the forward address.
     * @param {URL} from Message destination, it's actually the field "to" of the message.
     * @param {URL} to   Forward address.
     */

  }, {
    key: 'addForward',
    value: function addForward(from, to) {
      var _this = this;

      return _this.addListener(from, function (msg) {
        console.log('MB-FORWARD: ( ' + from + ' to ' + to + ' )');
        _this.forward(to, msg);
      });
    }

    /**
     * Just forward's a message to the forward address. Listeners should be available for the forward address.
     * @param  {URL} url Forward address.
     * @param  {Message} msg Message to forward
     */

  }, {
    key: 'forward',
    value: function forward(url, msg) {
      var _this = this;

      var itemList = _this._subscriptions[url];
      if (itemList) {
        _this._publishOn(itemList, msg);
      }
    }

    //default route, if there are no listeners available for a message destination.

  }, {
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      var _this = this;

      //resolve external protostub...
      _this._registry.resolve(msg.to).then(function (route) {
        _this.forward(route, msg);
      }).catch(function (e) {
        console.log('RESOLVE-ERROR: ', e);
      });
    }
  }, {
    key: 'pipeline',
    get: function get() {
      return this._pipeline;
    }
  }]);

  return MessageBus;
}(_Bus3.default);

exports.default = MessageBus;