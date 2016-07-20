'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Context2 = require('../Context');

var _Context3 = _interopRequireDefault(_Context2);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import persistenceManager from '../../persistence/PersistenceManager';

var CommonCtx = function (_Context) {
  _inherits(CommonCtx, _Context);

  function CommonCtx() {
    _classCallCheck(this, CommonCtx);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(CommonCtx).call(this));

    var _this = _this2;
    _this.policies = _this.loadPolicies();
    _this.groups = {};
    return _this2;
  }

  _createClass(CommonCtx, [{
    key: 'applyPolicies',
    value: function applyPolicies(message) {
      var _this = this;
      var policiesResult = [true, []];
      var applicablePolicies = _this.getApplicablePolicies(message);
      policiesResult = _this.pdp.evaluate(message, applicablePolicies);
      message.body.auth = applicablePolicies.length !== 0;
      _this.pep.enforce(policiesResult);
      return { message: message, policiesResult: policiesResult };
    }
  }, {
    key: '_getDate',
    value: function _getDate() {
      var date = new Date();
      var day = String(date.getDate());
      if (day.length === 1) {
        day = '0' + day;
      }

      var month = String(date.getMonth() + 1);
      if (month.length === 1) {
        month = '0' + month;
      }

      return day + '/' + month + '/' + date.getFullYear();
    }
  }, {
    key: '_getList',
    value: function _getList(scope, groupName) {
      var _this = this;
      var myGroups = _this.groups;
      var members = [];
      if (myGroups[scope] !== undefined && myGroups[scope][groupName] !== undefined) {
        members = myGroups[scope][groupName];
      }
      return members;
    }
  }, {
    key: '_getTime',
    value: function _getTime() {
      var now = new Date();
      var minutes = String(now.getMinutes());
      if (minutes.length === 1) {
        minutes = '0' + minutes;
      }
      return parseInt(String(now.getHours()) + minutes);
    }
  }, {
    key: '_getWeekDay',
    value: function _getWeekDay() {
      return String(new Date().getDay());
    }
  }, {
    key: 'date',
    set: function set(now) {
      var _this = this;
      if (!now.message) {
        _this._dateAttribute = typeof now === 'string' ? now : _this._getDate();
      }
    },
    get: function get() {
      var _this = this;
      return _this._dateAttribute;
    }
  }, {
    key: 'domain',
    set: function set(params) {
      var _this = this;
      _this._domainAttribute = (0, _utils.divideEmail)(params.message.body.identity.userProfile.username).domain;
    },
    get: function get() {
      var _this = this;
      return _this._domainAttribute;
    }
  }, {
    key: 'source',
    set: function set(params) {
      var _this = this;
      _this._sourceAttribute = params.message.body.identity.userProfile.username;
    },
    get: function get() {
      var _this = this;
      return _this._sourceAttribute;
    }
  }, {
    key: 'time',
    set: function set(now) {
      var _this = this;
      if (!now.message) {
        _this._timeAttribute = now ? now : _this._getTime();
      }
    },
    get: function get() {
      var _this = this;
      return _this._timeAttribute;
    }
  }, {
    key: 'weekday',
    set: function set(now) {
      var _this = this;
      if (!now.message) {
        _this._weekdayAttribute = now ? now : _this._getWeekDay();
      }
    },
    get: function get() {
      var _this = this;
      return _this._weekdayAttribute;
    }
  }]);

  return CommonCtx;
}(_Context3.default);

exports.default = CommonCtx;