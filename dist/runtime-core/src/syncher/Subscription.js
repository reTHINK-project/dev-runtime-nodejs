'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subscription = function () {
  function Subscription(bus, owner, url, childrens, isReporter) {
    _classCallCheck(this, Subscription);

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
          body: { resource: url }
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
    childrens.forEach(function (child) {
      var childId = childBaseURL + child;

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

  _createClass(Subscription, [{
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