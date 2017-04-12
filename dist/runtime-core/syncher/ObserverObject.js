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

var _utils = require('../utils/utils');

var _Subscription = require('./Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObserverObject = function () {
  function ObserverObject(parent, url, childrens) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ObserverObject);

    var _this = this;

    _this._parent = parent;
    _this._url = url;
    _this._childrens = childrens;

    _this._bus = parent._bus;

    _this._subscriptions = {};
    _this._storageSubscriptions = {};
    _this._childrenListeners = [];

    this._isToSaveData = false;

    var changeURL = _this._url + '/changes';
    _this._changeListener = _this._bus.addListener(changeURL, function (msg) {

      console.log('[SyncherManager.ObserverObject ] SyncherManager-' + changeURL + '-RCV: ', msg);

      //TODO: what todo here? Save changes?
      if (_this2._isToSaveData && msg.body.attribute) {
        console.log('[SyncherManager.ObserverObject ] SyncherManager - save data: ', msg);
        _this._parent._dataObjectsStorage.update(false, _this._url, 'version', msg.body.version);
        _this._parent._dataObjectsStorage.saveData(false, _this._url, msg.body.attribute, msg.body.value);
      }
    });
  }

  (0, _createClass3.default)(ObserverObject, [{
    key: '_newSubscription',
    value: function _newSubscription(hyperty) {
      var _this = this;

      var subscription = _this._subscriptions[hyperty];
      console.log('[Observer Object - new subscription] - ', _this._subscriptions, hyperty, _this._subscriptions.hasOwnProperty(hyperty));
      if (!subscription) {
        _this._subscriptions[hyperty] = new _Subscription2.default(_this._bus, hyperty, _this._url, _this._childrens, false);
      }
    }
  }, {
    key: 'addSubscription',
    value: function addSubscription(hyperty) {
      var _this = this;

      _this._newSubscription(hyperty);
    }
  }, {
    key: 'addChildrens',
    value: function addChildrens(childrens) {
      var _this3 = this;

      var _this = this;

      return new _promise2.default(function (resolve) {
        if (childrens.length === 0) {
          return resolve();
        }

        var childBaseURL = _this._url + '/children/';
        console.log('[SyncherManager.ObserverObject - addChildrens] - childrens: ', childrens, childBaseURL);

        childrens.forEach(function (child) {

          var childListener = _this._bus.addListener(childBaseURL + child, function (msg) {
            //TODO: what todo here? Save childrens?
            console.log('[SyncherManager.ObserverObject received]', msg);

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

              console.log('[SyncherManager.ObserverObject - save childrens] - : ', _this3._isToSaveData, url, attribute, value);

              _this._parent._dataObjectsStorage.saveChildrens(false, url, attribute, value);
            }

            console.log('[SyncherManager.ObserverObject children Listeners]', _this._childrenListeners, childListener);
            if (_this._childrenListeners.indexOf(childListener) === -1) {
              _this._childrenListeners.push(childListener);
            }
          });
        });
      });
    }
  }, {
    key: 'removeSubscription',
    value: function removeSubscription(hyperty) {
      var _this = this;

      var domain = (0, _utils.divideURL)(hyperty).domain;
      var objURLSubscription = _this._url + '/subscription';

      var subscription = _this._subscriptions[hyperty];
      if (subscription) {
        //FLOW-OUT: message sent to remote ReporterObject -> _onRemoteUnSubscribe
        _this._bus.postMessage({
          type: 'unsubscribe', from: _this._parent._url, to: objURLSubscription,
          body: { resource: _this._url }
        });

        //TODO: should I wait for response before unsubscribe on msg-node
        //FLOW-OUT: message sent to msg-node SubscriptionManager component
        _this._bus.postMessage({
          type: 'unsubscribe', from: _this._parent._url, to: 'domain://msg-node.' + domain + '/sm',
          body: { resource: _this._url, childrenResources: _this._childrens }
        });

        subscription._releaseListeners();
        delete _this._subscriptions[hyperty];
      }
    }
  }, {
    key: 'isToSaveData',
    set: function set(value) {
      this._isToSaveData = value;
    }
  }]);
  return ObserverObject;
}();

exports.default = ObserverObject;