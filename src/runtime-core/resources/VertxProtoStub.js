(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.VertxProtoStub = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = activate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var VertxProtoStub = (function () {
  /* private
    _continuousOpen: boolean
      _runtimeProtoStubURL: string
    _bus: MiniBus
    _msgCallback: (Message) => void
    _config: { url, runtimeURL }
      _sock: (WebSocket | SockJS)
    _reOpen: boolean
  */

  /**
   * Vertx ProtoStub creation
   * @param  {string} runtimeProtoStubURL - URL used internally for message delivery point. Not used for MessageNode deliver.
   * @param  {MiniBus} bus - MiniBus used to send/receive messages. Normally connected to the MessageBus.
   * @param  {Object} config - Mandatory fields are: "url" of the MessageNode address and "runtimeURL".
   * @return {VertxProtoStub}
   */

  function VertxProtoStub(runtimeProtoStubURL, bus, config) {
    _classCallCheck(this, VertxProtoStub);

    var _this = this;

    this._id = 0;
    this._continuousOpen = true;

    this._runtimeProtoStubURL = runtimeProtoStubURL;
    this._bus = bus;
    this._config = config;

    this._runtimeSessionURL = config.runtimeURL;
    this._reOpen = false;

    bus.addListener('*', function (msg) {
      _this._open(function () {
        if (msg.body && msg.body.via === _this._runtimeProtoStubURL) return;

        _this._sock.send(JSON.stringify(msg));
      });
    });
  }

  /**
   * Get the configuration for this ProtoStub
   * @return {Object} - Mandatory fields are: "url" of the MessageNode address and "runtimeURL".
   */

  _createClass(VertxProtoStub, [{
    key: 'connect',

    /**
     * Try to open the connection to the MessageNode. Connection is auto managed, there is no need to call this explicitly.
     * However, if "disconnect()" is called, it's necessary to call this to enable connections again.
     * A status message is sent to "runtimeProtoStubURL/status", containing the value "connected" if successful, or "disconnected" if some error occurs.
     */
    value: function connect() {
      var _this = this;

      _this._continuousOpen = true;
      _this._open(function () {});
    }

    /**
     * It will disconnect and order to stay disconnected. Reconnection tries, will not be attempted, unless "connect()" is called.
     * A status message is sent to "runtimeProtoStubURL/status" with value "disconnected".
     */
  }, {
    key: 'disconnect',
    value: function disconnect() {
      var _this = this;

      _this._continuousOpen = false;
      if (_this._sock) {
        _this._sendClose();
      }
    }
  }, {
    key: '_sendOpen',
    value: function _sendOpen(callback) {
      var _this = this;

      _this._id++;
      var msg = {
        id: _this._id, type: 'open', from: _this._runtimeSessionURL, to: 'mn:/session'
      };

      if (_this._reOpen) {
        msg.type = 're-open';
      }

      //register and wait for open reply...
      var hasResponse = false;
      _this._sessionCallback = function (reply) {
        if (reply.type === 'response' & reply.id === msg.id) {
          hasResponse = true;
          if (reply.body.code === 200) {
            if (reply.body.runtimeToken) {
              //setup runtimeSession
              _this._reOpen = true;
              _this._runtimeSessionURL = _this._config.runtimeURL + '/' + reply.body.runtimeToken;
            }

            _this._sendStatus('connected');
            callback();
          } else {
            _this._sendStatus('disconnected', reply.body.desc);
          }
        }
      };

      _this._sock.send(JSON.stringify(msg));
      setTimeout(function () {
        if (!hasResponse) {
          //no response after x seconds...
          _this._sendStatus('disconnected', 'Timeout from mn:/session');
        }
      }, 3000);
    }
  }, {
    key: '_sendClose',
    value: function _sendClose() {
      var _this = this;

      _this._id++;
      var msg = {
        id: _this._id, type: 'close', from: _this._runtimeSessionURL, to: 'mn:/session'
      };

      //invalidate runtimeSession
      _this._reOpen = false;
      _this._runtimeSessionURL = _this._config._runtimeURL;

      _this._sock.send(JSON.stringify(msg));
    }
  }, {
    key: '_sendStatus',
    value: function _sendStatus(value, reason) {
      var _this = this;

      var msg = {
        type: 'update',
        from: _this._runtimeProtoStubURL,
        to: _this._runtimeProtoStubURL + '/status',
        body: {
          value: value
        }
      };

      if (reason) {
        msg.body.desc = reason;
      }

      _this._bus.postMessage(msg);
    }
  }, {
    key: '_waitReady',
    value: function _waitReady(callback) {
      var _this = this;

      if (_this._sock.readyState === 1) {
        callback();
      } else {
        setTimeout(function () {
          _this._waitReady(callback);
        });
      }
    }
  }, {
    key: '_deliver',
    value: function _deliver(msg) {
      if (!msg.body) msg.body = {};

      msg.body.via = this._runtimeProtoStubURL;
      this._bus.postMessage(msg);
    }
  }, {
    key: '_open',
    value: function _open(callback) {
      var _this = this;

      if (!this._continuousOpen) {
        //TODO: send status (sent message error - disconnected)
        return;
      }

      if (!_this._sock) {
        if (_this._config.url.substring(0, 2) === 'ws') {
          _this._sock = new WebSocket(_this._config.url);
        } else {
          _this._sock = new SockJS(_this._config.url);
        }

        _this._sock.onopen = function () {
          _this._sendOpen(function () {
            callback();
          });
        };

        _this._sock.onmessage = function (e) {
          var msg = JSON.parse(e.data);
          if (msg.from === 'mn:/session') {
            if (_this._sessionCallback) {
              _this._sessionCallback(msg);
            }
          } else {
            _this._deliver(msg);
          }
        };

        _this._sock.onclose = function (event) {
          var reason = undefined;

          //See https://tools.ietf.org/html/rfc6455#section-7.4
          if (event.code === 1000) {
            reason = 'Normal closure, meaning that the purpose for which the connection was established has been fulfilled.';
          } else if (event.code === 1001) {
            reason = 'An endpoint is \'going away\', such as a server going down or a browser having navigated away from a page.';
          } else if (event.code === 1002) {
            reason = 'An endpoint is terminating the connection due to a protocol error';
          } else if (event.code === 1003) {
            reason = 'An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).';
          } else if (event.code === 1004) {
            reason = 'Reserved. The specific meaning might be defined in the future.';
          } else if (event.code === 1005) {
            reason = 'No status code was actually present.';
          } else if (event.code === 1006) {
            reason = 'The connection was closed abnormally, e.g., without sending or receiving a Close control frame';
          } else if (event.code === 1007) {
            reason = 'An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message).';
          } else if (event.code === 1008) {
            reason = 'An endpoint is terminating the connection because it has received a message that "violates its policy". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.';
          } else if (event.code === 1009) {
            reason = 'An endpoint is terminating the connection because it has received a message that is too big for it to process.';
          } else if (event.code === 1010) {
            reason = 'An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn\'t return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: ' + event.reason;
          } else if (event.code === 1011) {
            reason = 'A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.';
          } else if (event.code === 1015) {
            reason = 'The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can\'t be verified).';
          } else {
            reason = 'Unknown reason';
          }

          delete _this._sock;
          _this._sendStatus('disconnected', reason);
        };
      } else {
        _this._waitReady(callback);
      }
    }
  }, {
    key: 'config',
    get: function get() {
      return this._config;
    }
  }, {
    key: 'runtimeSession',
    get: function get() {
      return this._runtimeSessionURL;
    }
  }]);

  return VertxProtoStub;
})();

function activate(url, bus, config) {
  return {
    name: 'VertxProtoStub',
    instance: new VertxProtoStub(url, bus, config)
  };
}

/**
* Callback used to send messages
* @callback PostMessage
* @param {Message} msg - Message to send
*/
module.exports = exports['default'];

},{}]},{},[1])(1)
});