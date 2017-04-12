'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils/utils');

var _Subscription = require('./Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReporterObject = function () {
  function ReporterObject(parent, owner, url) {
    (0, _classCallCheck3.default)(this, ReporterObject);

    var _this = this;

    _this._parent = parent;
    _this._owner = owner;
    _this._url = url;

    _this._bus = parent._bus;

    _this._domain = (0, _utils.divideURL)(url).domain;
    _this._objSubscriptorURL = _this._url + '/subscription';

    _this._subscriptions = {};
    _this._childrens = [];
    _this._childrenListeners = [];

    _this._forwards = {};

    _this._isToSaveData = false;

    _this._allocateListeners();
  }

  (0, _createClass3.default)(ReporterObject, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this2 = this;

      var _this = this;

      //add subscription listener...
      _this._subscriptionListener = _this._bus.addListener(_this._objSubscriptorURL, function (msg) {
        console.log('[SyncherManager.ReporterObject received ]', msg);
        switch (msg.type) {
          case 'subscribe':
            _this._onRemoteSubscribe(msg);break;
          case 'unsubscribe':
            _this._onRemoteUnSubscribe(msg);break;
          case 'response':
            _this._onRemoteResponse(msg);break;
        }
      });

      var changeURL = _this._url + '/changes';
      _this._changeListener = _this._bus.addListener(changeURL, function (msg) {

        console.log('[SyncherManager.ReporterObject ] SyncherManager-' + changeURL + '-RCV: ', msg);

        //TODO: what todo here? Save changes?
        if (_this2._isToSaveData && msg.body.attribute) {
          console.log('[SyncherManager.ReporterObject ] SyncherManager - save data: ', msg);
          _this._parent._dataObjectsStorage.update(true, _this._url, 'version', msg.body.version);
          _this._parent._dataObjectsStorage.saveData(true, _this._url, msg.body.attribute, msg.body.value);
        }
      });
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._subscriptionListener.remove();

      _this._changeListener.remove();

      _this._childrenListeners.forEach(function (cl) {
        cl.remove();
      });

      (0, _keys2.default)(_this._forwards).forEach(function (key) {
        _this.forwardUnSubscribe(key);
      });

      //remove all subscriptions
      (0, _keys2.default)(_this._subscriptions).forEach(function (key) {
        _this._subscriptions[key]._releaseListeners();
      });
    }
  }, {
    key: 'resumeSubscriptions',
    value: function resumeSubscriptions(subscriptions) {
      var _this = this;

      (0, _keys2.default)(subscriptions).forEach(function (key) {
        var hypertyURL = subscriptions[key];

        console.log('[SyncherManager.ReporterObject] - resume subscriptions', _this, hypertyURL, _this._childrens);

        if (!_this._subscriptions[hypertyURL]) {
          _this._subscriptions[hypertyURL] = new _Subscription2.default(_this._bus, _this._owner, _this._url, _this._childrens, true);
        }
      });
    }

    /**
     * Register a listener in the msg-node and in the local MessageBus, so that messages on this address are forwarded to the reporter object
     * @param  {string} address - URL to register the listeners
     * @return {Promise} Return Promise OK or error
     */

  }, {
    key: 'forwardSubscribe',
    value: function forwardSubscribe(addresses) {
      var _this = this;

      //FLOW-OUT: message sent to the msg-node SubscriptionManager component
      var nodeSubscribeMsg = {
        type: 'subscribe', from: _this._parent._url, to: 'domain://msg-node.' + _this._domain + '/sm',
        body: { subscribe: addresses, source: _this._owner }
      };

      return new _promise2.default(function (resolve, reject) {
        _this._bus.postMessage(nodeSubscribeMsg, function (reply) {
          console.log('[SyncherManager.ReporterObject ]forward-subscribe-response(reporter): ', reply);
          if (reply.body.code === 200) {
            var newForward = _this._bus.addForward(_this._url, _this._owner);
            _this._forwards[addresses[0]] = newForward;
            resolve();
          } else {
            reject('Error on msg-node subscription: ' + reply.body.desc);
          }
        });
      });
    }

    /**
     * UnRegister a listener in the msg-node and in the local MessageBus, so that messages on this address are removed from forward
     * @param  {string} address - URL to un-register the listeners
     */

  }, {
    key: 'forwardUnSubscribe',
    value: function forwardUnSubscribe(address) {
      var _this = this;

      _this._forwards[address].remove();
      delete _this._forwards[address];

      //FLOW-OUT: message sent to the msg-node SubscriptionManager component
      var nodeUnSubscribeMsg = {
        type: 'unsubscribe', from: _this._parent._url, to: 'domain://msg-node.' + _this._domain + '/sm',
        body: { subscribe: [address], source: _this._owner }
      };

      _this._bus.postMessage(nodeUnSubscribeMsg);
    }

    /**
     * Register listeners for a list of childrens. Public channels used to transmit messages.
     * @param  {string[]} childrens - channels to register
     * @return {Promise} Return Promise OK or error
     */

  }, {
    key: 'addChildrens',
    value: function addChildrens(childrens) {
      var _this3 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        if (childrens.length === 0) {
          resolve();
          return;
        }

        var childBaseURL = _this._url + '/children/';
        console.log('[SyncherManager.ReporterObject - addChildrens] - childrens: ', childrens, childBaseURL);

        childrens.forEach(function (child) {
          _this._childrens.push(child);
        });

        /*
        _this._childrens.forEach((child) => {
          let childId = childBaseURL + child;
           let selfForward = _this._bus.addForward(childId, owner);
          _this._childrenListeners.push(selfForward);
        });*/

        var subscriptions = [];
        childrens.forEach(function (child) {
          return subscriptions.push(childBaseURL + child);
        });

        //_this._storageSubscriptions[_this._objSubscriptorURL] = {url: _this._url, owner: _this._owner, childrens: _this._childrens};

        //FLOW-OUT: message sent to the msg-node SubscriptionManager component
        var nodeSubscribeMsg = {
          type: 'subscribe', from: _this._parent._url, to: 'domain://msg-node.' + _this._domain + '/sm',
          body: { subscribe: subscriptions, source: _this._owner }
        };

        _this._bus.postMessage(nodeSubscribeMsg, function (reply) {
          console.log('[SyncherManager.ReporterObject ]node-subscribe-response(reporter):', reply);
          if (reply.body.code === 200) {

            //add children listeners on local ...
            subscriptions.forEach(function (childURL) {
              var childListener = _this._bus.addListener(childURL, function (msg) {
                //TODO: what todo here? Save childrens?
                console.log('[SyncherManager.ReporterObject received]', msg);

                if (msg.type === 'create' && msg.to.includes('children') && _this3._isToSaveData) {
                  var splitedReporterURL = (0, _utils.splitObjectURL)(msg.to);
                  var url = splitedReporterURL.url;

                  var resource = splitedReporterURL.resource;
                  var value = {
                    identity: msg.body.identity,
                    value: msg.body.value
                  };
                  var objectURLResource = msg.body.resource;
                  var attribute = resource;

                  if (objectURLResource) attribute += '.' + objectURLResource;

                  console.log('[SyncherManager.ReporterObject - save childrens] - : ', _this3._isToSaveData, url, attribute, value);

                  _this._parent._dataObjectsStorage.saveChildrens(true, url, attribute, value);
                }
              });
              _this._childrenListeners.push(childListener);

              var selfForward = _this._bus.addForward(childURL, _this._owner);
              _this._childrenListeners.push(selfForward);
            });

            resolve();
          } else {
            reject('Error on msg-node subscription: ' + reply.body.desc);
          }
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;
      var domain = (0, _utils.divideURL)(_this._owner).domain;

      //FLOW-OUT: message sent directly to all subscribers of the reporter
      _this._bus.postMessage({
        type: 'delete', from: _this._objSubscriptorURL, to: _this._url + '/changes'
      });

      //FLOW-OUT: message sent to the msg-node ObjectAllocationManager component
      _this._bus.postMessage({
        type: 'delete', from: _this._parent._url, to: 'domain://msg-node.' + domain + '/object-address-allocation',
        body: { resource: _this._url, childrenResources: _this._childrens }
      });

      _this._releaseListeners();
      delete _this._parent._reporters[_this._url];
    }
  }, {
    key: '_onRemoteResponse',
    value: function _onRemoteResponse(msg) {
      var _this = this;

      _this._bus.postMessage({
        id: msg.id, type: 'response', from: msg.to, to: _this._url,
        body: { code: msg.body.code, identity: msg.body.identity, source: msg.from }
      });
    }

    //FLOW-IN: message received from Syncher -> subscribe

  }, {
    key: '_onRemoteSubscribe',
    value: function _onRemoteSubscribe(msg) {
      var _this = this;
      var hypertyURL = msg.body.subscriber;

      //validate if subscription already exists?
      if (_this._subscriptions[hypertyURL]) {
        // let errorMsg = {
        //   id: msg.id, type: 'response', from: msg.to, to: hypertyURL,
        //   body: { code: 500, desc: 'Subscription for (' + _this._url + ' : ' +  hypertyURL + ') already exists!' }
        // };
        //
        // _this._bus.postMessage(errorMsg);
        // return;

        // new version because of reusage
        _this._subscriptions[hypertyURL]._releaseListeners();
      }

      //ask to subscribe to Syncher? (depends on the operation mode)
      //TODO: get mode from object!
      var mode = 'sub/pub';

      if (mode === 'sub/pub') {
        //FLOW-OUT: message sent to local hyperty address Syncher -> _onForward
        var forwardMsg = {
          type: 'forward', from: _this._url, to: _this._owner,
          body: { type: msg.type, from: hypertyURL, to: _this._url, identity: msg.body.identity }
        };

        //TODO: For Further Study
        if (msg.body.hasOwnProperty('mutualAuthentication')) forwardMsg.body.mutualAuthentication = msg.body.mutualAuthentication;

        _this._bus.postMessage(forwardMsg, function (reply) {
          console.log('[SyncherManager.ReporterObject ]forward-reply: ', reply);
          if (reply.body.code === 200) {
            if (!_this._subscriptions[hypertyURL]) {
              console.log('[SyncherManager.ReporterObject] - _onRemoteSubscribe:', _this._childrens);
              _this._subscriptions[hypertyURL] = new _Subscription2.default(_this._bus, _this._owner, _this._url, _this._childrens, true);
            }
          }

          // Store for each reporter hyperty the dataObject
          var userURL = void 0;
          if (msg.body.identity && msg.body.identity.userProfile.userURL) {
            userURL = msg.body.identity.userProfile.userURL;
            _this._parent._dataObjectsStorage.update(true, _this._url, 'subscriberUsers', userURL);
          }

          _this._parent._dataObjectsStorage.update(true, _this._url, 'subscriptions', hypertyURL);

          reply.body.owner = _this._owner;

          //FLOW-OUT: subscription response sent (forward from internal Hyperty)
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: reply.body
          });
        });
      }
    }

    //FLOW-IN: message received from remote ObserverObject -> removeSubscription

  }, {
    key: '_onRemoteUnSubscribe',
    value: function _onRemoteUnSubscribe(msg) {
      var _this = this;
      var hypertyURL = msg.body.subscriber;

      var subscription = _this._subscriptions[hypertyURL];
      if (subscription) {
        subscription._releaseListeners();
        delete _this._subscriptions[hypertyURL];

        //TODO: send un-subscribe message to Syncher? (depends on the operation mode)
      }
    }
  }, {
    key: 'isToSaveData',
    set: function set(value) {
      this._isToSaveData = value;
    }
  }]);
  return ReporterObject;
}();

exports.default = ReporterObject;