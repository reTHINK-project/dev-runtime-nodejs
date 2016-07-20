'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils/utils');

var _Subscription = require('./Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObserverObject = function () {
  function ObserverObject(parent, url, childrens) {
    _classCallCheck(this, ObserverObject);

    var _this = this;

    _this._parent = parent;
    _this._url = url;
    _this._childrens = childrens;

    _this._bus = parent._bus;
    _this._subscriptions = {};
  }

  _createClass(ObserverObject, [{
    key: 'addSubscription',
    value: function addSubscription(hyperty) {
      var _this = this;

      _this._subscriptions[hyperty] = new _Subscription2.default(_this._bus, hyperty, _this._url, _this._childrens, false);
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
  }]);

  return ObserverObject;
}();

exports.default = ObserverObject;