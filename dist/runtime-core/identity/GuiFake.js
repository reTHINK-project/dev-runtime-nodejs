'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* fake class for the gui to select the identity,
* TODO replace with the proper identity GUI
*
*/
var GuiFake = function GuiFake(url, messageBus) {
  (0, _classCallCheck3.default)(this, GuiFake);

  var _this = this;

  _this._url = url;
  _this._waitTime = 10000;
  _this._messageBus = messageBus;

  _this._messageBus.addListener(_this._url, function (msg) {

    var identities = msg.body.value.identities;
    var idps = msg.body.value.idps;

    var value = void 0;

    if (identities[0] !== undefined) {
      value = { type: 'identity', value: identities[0], code: 200 };
    } else {
      value = { type: 'idp', value: idps[0].domain, code: 200 };
    }

    var replyMsg = { id: msg.id, type: 'response', to: msg.from, from: msg.to, body: value };

    // to test on the identity side the listener without the timeout
    // can represent the time the user takes to choose and identity
    if (msg.body.value === 'wait') {

      setTimeout(function () {
        _this._messageBus.postMessage(replyMsg);
      }, _this._waitTime);
    } else {
      _this._messageBus.postMessage(replyMsg);
    }
  });
};

exports.default = GuiFake;