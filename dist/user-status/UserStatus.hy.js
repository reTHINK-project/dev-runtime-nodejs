'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = activate;

var _HypertyDiscovery = require('service-framework/dist/HypertyDiscovery');

var _HypertyDiscovery2 = _interopRequireDefault(_HypertyDiscovery);

var _Syncher = require('service-framework/dist/Syncher');

var _EventEmitter2 = require('../utils/EventEmitter.js');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

var _availability = require('./availability.js');

var _availability2 = _interopRequireDefault(_availability);

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

// Service Framework


// Utils

// import {divideURL} from '../utils/utils.js';


/**
* Hyperty Presence;
* @author Apizee [dev@apizee.com]
* @version 0.1.0
*/
var UserStatus = function (_EventEmitter) {
  _inherits(UserStatus, _EventEmitter);

  function UserStatus(hypertyURL, bus, configuration) {
    _classCallCheck(this, UserStatus);

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    var _this = _possibleConstructorReturn(this, (UserStatus.__proto__ || Object.getPrototypeOf(UserStatus)).call(this, hypertyURL, bus, configuration));

    _this._syncher = new _Syncher.Syncher(hypertyURL, bus, configuration);

    _this._hypertyDiscovery = new _HypertyDiscovery2.default(hypertyURL, bus);

    _this._userStatusDescURL = 'hyperty-catalogue://' + new _urijs2.default(hypertyURL).hostname() + '/.well-known/dataschemas/Context';

    _this._heartbeat = [];

    _this._syncher.onNotification(function (event) {
      _this._onNotification(event);
    });
    return _this;
  }

  _createClass(UserStatus, [{
    key: '_onNotification',
    value: function _onNotification(event) {
      var _this2 = this;

      console.info('UserStatus Event Received: ', event);
      console.log('from hyperty', event.from);

      event.ack();

      if (event.schema === this._userStatusDescURL) {
        // Subscribe to user status presence
        this._syncher.subscribe(this._userStatusDescURL, event.url).then(function (statusObjectObserver) {
          console.info('-------- Status Observer received ---------', statusObjectObserver);
          console.log('trigger statusChange for', event.identity);
          _this2.trigger('statusChange', {
            identity: event.identity,
            status: _this2.getStatus(statusObjectObserver)
          });

          _this2._managePresenceHeartbeat(event.identity);

          statusObjectObserver.onChange('*', function () {
            console.info('status event received:', event);
            _this2.trigger('statusChange', {
              identity: event.identity,
              status: _this2.getStatus(statusObjectObserver)
            });
            _this2._managePresenceHeartbeat(event.identity);
          });

          console.log(event.identity.email, 'has subscribe to my status data object, send invite to listen mine');
          _this2._statusObjectReporter.inviteObservers([event.from]);
        }).catch(function (reason) {
          console.error(reason);
        });
      }
    }

    /**
     * This function is used to create a new status object syncher
     * @param  {URL.UserURL} participants List of User allowed
     * @return {Promise}
     */

  }, {
    key: 'create',
    value: function create(participants) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        console.info('----------------------- Mapping Particpants --------------------');
        _this3._mappingUser(participants).then(function (hyperties) {
          return _this3.createSyncher(hyperties, (0, _availability2.default)());
        }).then(function (statusObjectReporter) {
          _this3._statusObjectReporter = statusObjectReporter;

          _this3._statusObjectReporter.onSubscription(function (event) {
            console.info('-------- Status Reporter received subscription request ---------', event);
            event.accept();
            if (event.url === _this3._statusObjectReporter._owner) {
              console.log('define my own presence state to available');
              _this3.setStatus('available');
            }
          });

          // set interval for heartbeat
          setInterval(function () {
            _this3._sendHeartbeat();
          }, 50000);
        }).catch(function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: 'createSyncher',
    value: function createSyncher(hyperties, status) {
      console.info('------------------------ Syncher Create ----------------------', hyperties, status);
      return this._syncher.create(this._userStatusDescURL, hyperties, status);
    }
  }, {
    key: 'join',
    value: function join(resource) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {

        console.info('------------------------ Syncher subscribe ----------------------');

        _this4._syncher.subscribe(_this4._userStatusDescURL, resource).then(function (dataObjectObserver) {
          console.info('Data Object Observer: ', dataObjectObserver);
        }).catch(function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: 'getStatus',
    value: function getStatus(statusObserver) {
      var state = false;
      if (typeof statusObserver !== 'undefined') {
        console.log('getStatus from observer:', statusObserver.data.values[0].value);
        return statusObserver.data.values[0].value;
      } else {
        console.log('getStatus from reporter:', this._statusObjectReporter.data.values[0].value);
        return this._statusObjectReporter.data.values[0].value;
      }
      return state;
    }
  }, {
    key: 'setStatus',
    value: function setStatus(newStatus) {
      console.log('setStatus', newStatus, 'in reporter', this._statusObjectReporter.data);
      this._statusObjectReporter.data.values[0].value = newStatus;
      this._statusObjectReporter.data.time = new Date().getTime();
    }

    /**
     * Update status object date
     */

  }, {
    key: '_sendHeartbeat',
    value: function _sendHeartbeat() {
      console.log('send heartbeat');
      this._statusObjectReporter.data.time = new Date().getTime();
    }

    /**
     * Monitor user activity within heartbeat timeout period
     */

  }, {
    key: '_managePresenceHeartbeat',
    value: function _managePresenceHeartbeat(identity) {
      var _this5 = this;

      console.log('renew heartbeat period for', identity);
      var email = identity.email;
      if (email in this._heartbeat) {
        clearTimeout(this._heartbeat[email]);
      }
      this._heartbeat[email] = setTimeout(function () {
        console.log(email, 'has disconnect');
        clearTimeout(_this5._heartbeat[email]);
        _this5.trigger('statusChange', {
          identity: identity,
          status: 'unavailable'
        });
      }, 60000);
    }
  }, {
    key: '_mappingUser',
    value: function _mappingUser(userList) {
      var _this6 = this;

      console.info('------------------------ _mappingUser ----------------------', userList);

      return new Promise(function (resolve, reject) {
        var hyperties = [];
        var count = 0;

        if (userList.length === 0) reject(hyperties);

        var resultUsers = function resultUsers() {
          if (count === userList.length) {
            console.info('Have ' + hyperties.length + 'users found;');
            resolve(hyperties);
          }
        };

        var activeUsers = function activeUsers(user) {
          count++;
          hyperties.push(user.hypertyURL);
          resultUsers();
        };

        var inactiveUsers = function inactiveUsers() {
          count++;
          resultUsers();
        };

        userList.forEach(function (user) {
          console.log(user);
          if (user.email.length) {
            console.info('------------------------ _mappingUser ----------------------', userList);
            return _this6._hypertyDiscovery.discoverHypertyPerUser(user.email, user.domain).then(activeUsers).catch(inactiveUsers);
          }
        });
      });
    }
  }]);

  return UserStatus;
}(_EventEmitter3.default);

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'UserStatus',
    instance: new UserStatus(hypertyURL, bus, configuration)
  };
}