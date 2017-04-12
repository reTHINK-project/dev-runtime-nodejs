'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReThinkCtx = function () {
  function ReThinkCtx() {
    (0, _classCallCheck3.default)(this, ReThinkCtx);

    this.defaultBehaviour = true;
    this.groups = {};
  }

  (0, _createClass3.default)(ReThinkCtx, [{
    key: 'scheme',
    get: function get() {
      return this._scheme;
    },
    set: function set(params) {
      var from = params.message.from;
      if ((0, _utils.isDataObjectURL)(from)) {
        this._scheme = (0, _utils.divideURL)(from).type;
      } else {
        this._scheme = undefined;
      }
    }
  }, {
    key: 'date',
    get: function get() {
      return this._date;
    },
    set: function set(now) {
      var date = new Date();
      var day = String(date.getDate());
      if (day.length === 1) {
        day = '0' + day;
      }
      var month = String(date.getMonth() + 1);
      if (month.length === 1) {
        month = '0' + month;
      }
      this._date = day + '/' + month + '/' + date.getFullYear();
    }
  }, {
    key: 'domain',
    get: function get() {
      return this._domain;
    },
    set: function set(params) {
      if (params.message.body.identity !== undefined) {
        this._domain = (0, _utils.divideEmail)(params.message.body.identity.userProfile.username).domain;
      }
    }
  }, {
    key: 'type',
    get: function get() {
      return this._type;
    },
    set: function set(params) {
      var message = params.message;
      if (message.body.value !== undefined) {
        this._type = message.body.value.resourceType;
      }
    }
  }, {
    key: 'source',
    get: function get() {
      return this._source;
    },
    set: function set(params) {
      if (params.message.body.identity !== undefined) {
        this._source = params.message.body.identity.userProfile.username;
      }
    }
  }, {
    key: 'time',
    get: function get() {
      return this._time;
    },
    set: function set(now) {
      now = new Date();
      var minutes = String(now.getMinutes());
      if (minutes.length === 1) {
        minutes = '0' + minutes;
      }
      this._time = parseInt(String(now.getHours()) + minutes);
    }
  }, {
    key: 'weekday',
    get: function get() {
      return this._weekday;
    },
    set: function set(now) {
      this._weekday = String(new Date().getDay());
    }
  }]);
  return ReThinkCtx;
}();

exports.default = ReThinkCtx;