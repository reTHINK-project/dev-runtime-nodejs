'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subscription = function () {
  function Subscription(bus, owner, url, childrens, isReporter) {
    (0, _classCallCheck3.default)(this, Subscription);

    var _this = this;
    var childBaseURL = url + '/children/';
    var changeURL = url + '/changes';

    //process delete message
    _this._deleteListener = bus.addListener(changeURL, function (msg) {
      if (msg.type === 'delete') {
        console.log('Subscription-DELETE: ', msg);

        //FLOW-OUT: message sent to all subscribers
        var deleteMessageToHyperty = {
          type: 'delete', from: msg.from, to: owner,
          body: { identity: msg.body.identity, resource: url }
        };

        //send delete to hyperty
        bus.postMessage(deleteMessageToHyperty, function (reply) {
          console.log('Subscription-DELETE-REPLY: ', reply);
          if (reply.body.code === 200) {
            _this._releaseListeners();
          }
        });
      }
    });

    //add change publish address or forward
    if (isReporter) {
      _this._changeListener = bus.addPublish(changeURL);
    } else {
      _this._changeListener = bus.addForward(changeURL, owner);
    }

    _this._childrenListeners = [];
    console.log('[Subscription] - childID', childrens);
    childrens.forEach(function (child) {
      var childId = childBaseURL + child;

      console.log('[Subscription] - childID', childBaseURL, childId, child);

      //add children publish address
      var childrenForward = bus.addPublish(childId);
      _this._childrenListeners.push(childrenForward);

      //add self forward if an observer
      if (!isReporter) {
        var selfForward = bus.addForward(childId, owner);
        _this._childrenListeners.push(selfForward);
      }
    });
  }

  (0, _createClass3.default)(Subscription, [{
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._deleteListener.remove();

      _this._changeListener.remove();

      _this._childrenListeners.forEach(function (forward) {
        forward.remove();
      });
    }
  }]);
  return Subscription;
}();

exports.default = Subscription;