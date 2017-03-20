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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Core Discovery interface
* Class to allow applications to search for hyperties and DataObjects using the message bus
*/
var Discovery = function () {

  /**
  * To initialise the HypertyDiscover, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {RuntimeURL}          runtimeURL            runtimeURL
  */
  function Discovery(hypertyURL, msgBus) {
    (0, _classCallCheck3.default)(this, Discovery);

    var _this = this;
    _this.messageBus = msgBus;

    _this.domain = (0, _utils.divideURL)(hypertyURL).domain;
    _this.discoveryURL = hypertyURL;
  }

  /**
  * function to request about an dataObject registered in domain registry with a given name, and
  * return the dataObject information, if found.
  * @param  {String}              name  dataObject URL
  * @param  {String}            domain (Optional)
  * @return {Promise}          Promise
  */


  (0, _createClass3.default)(Discovery, [{
    key: 'discoverDataObjectPerName',
    value: function discoverDataObjectPerName(name, domain) {
      var _this = this;
      var activeDomain = void 0;

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: name }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var dataObject = reply.body.value;

          if (dataObject) {
            resolve(dataObject);
          } else {
            reject('DataObject not found');
          }
        });
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * return the dataObject information, if found.
    * @param  {String}              url  dataObject URL
    * @param  {String}            domain (Optional)
    * @return {Promise}          Promise
    */

  }, {
    key: 'discoverDataObjectPerURL',
    value: function discoverDataObjectPerURL(url, domain) {
      var _this = this;
      var activeDomain = void 0;

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var msg = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: url }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var dataObject = reply.body.value;

          if (dataObject) {
            resolve(dataObject);
          } else {
            reject('DataObject not found');
          }
        });
      });
    }

    /**
    *  function to delete an Data Object registered in the Domain Registry
    *  @param   {String}           url              dataObject url
    *  @param   {domain}           domain         (Optional)
    *  @return  {Promise}          Promise          result
    */

  }, {
    key: 'deleteDataObject',
    value: function deleteDataObject(url, domain) {
      var _this = this;
      var activeDomain = void 0;

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var msg = {
        type: 'delete', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { value: { name: url } } };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var response = reply.body.code;

          if (response === 200) {
            resolve(response);
          } else {
            reject('Error on deleting dataObject');
          }
        });
      });
    }

    /**
    * function to request about specific reporter dataObject registered in domain registry, and
    * return the dataObjects from that reporter.
    * @param  {String}           reporter     dataObject reporter
    * @param  {String}           domain       (Optional)
    * @return {Array}           Promise       DataObjects
    */

  }, {
    key: 'discoverDataObjectPerReporter',
    value: function discoverDataObjectPerReporter(reporter, domain) {
      var _this = this;
      var activeDomain = void 0;

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var msg = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: reporter }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var dataObjects = reply.body.value;

          if (dataObjects) {
            resolve(dataObjects);
          } else {
            reject('No dataObject was found');
          }
        });
      });
    }

    /** Advanced Search for dataObjects registered in domain registry
    * @param  {String}           user                  user identifier, either in url or email format
    * @param  {Array<string>}    schema (Optional)     types of dataObject schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObject resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverDataObject',
    value: function discoverDataObject(name, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;
      //let userIdentifier = convertToUserURL(user);

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: name,
          criteria: { resources: resources, dataSchemes: schema }
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var hyperties = reply.body.value;

          if (hyperties) {
            resolve(hyperties);
          } else {
            reject('No DataObject was found');
          }
        });
      });
    }

    /** Advanced Search for Hyperties registered in domain registry
    * @param  {String}           user                  user identifier, either in url or email format
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverHyperty',
    value: function discoverHyperty(user, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;
      var userIdentifier = (0, _utils.convertToUserURL)(user);

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var msg = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: userIdentifier,
          criteria: { resources: resources, dataSchemes: schema }
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var hyperties = reply.body.value;

          if (hyperties) {
            resolve(hyperties);
          } else {
            reject('No Hyperty was found');
          }
        });
      });
    }

    /**
    * function to request about users registered in domain registry, and
    * return the last hyperty instance registered by the user.
    * @param  {email}              email
    * @param  {domain}            domain (Optional)
    * @return {Promise}          Promise
    */

  }, {
    key: 'discoverHypertyPerUser',
    value: function discoverHypertyPerUser(email, domain) {
      var _this = this;
      var activeDomain = void 0;

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

      // message to query domain registry, asking for a user hyperty.
      var message = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: identityURL }
      };

      console.log('Message: ', message, activeDomain, identityURL);

      //console.log('message READ', message);
      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(message, function (reply) {
          console.log('message reply', reply);

          var hyperty = void 0;
          var mostRecent = void 0;
          var lastHyperty = void 0;
          var value = reply.body.value;

          for (hyperty in value) {
            if (value[hyperty].lastModified !== undefined) {
              if (mostRecent === undefined) {
                mostRecent = new Date(value[hyperty].lastModified);
                lastHyperty = hyperty;
              } else {
                var hypertyDate = new Date(value[hyperty].lastModified);
                if (mostRecent.getTime() < hypertyDate.getTime()) {
                  mostRecent = hypertyDate;
                  lastHyperty = hyperty;
                }
              }
            }
          }

          console.log('Last Hyperty: ', lastHyperty, mostRecent);

          var hypertyURL = lastHyperty;

          if (hypertyURL === undefined) {
            return reject('User Hyperty not found');
          }

          var idPackage = {
            id: email,
            descriptor: value[hypertyURL].descriptor,
            hypertyURL: hypertyURL
          };

          console.log('===> hypertyDiscovery messageBundle: ', idPackage);
          resolve(idPackage);
        });
      });
    }

    /**
    * function to request about users registered in domain registry, and
    * return the all the hyperties registered by the user
    * @param  {email}              email
    * @param  {domain}            domain (Optional)
    * @return {Promise}          Promise
    */

  }, {
    key: 'discoverHypertiesPerUser',
    value: function discoverHypertiesPerUser(email, domain) {
      var _this = this;
      var activeDomain = void 0;

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

      // message to query domain registry, asking for a user hyperty.
      var message = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: identityURL }
      };

      console.log('Message discoverHypertiesPerUser: ', message, activeDomain, identityURL);

      //console.log('message READ', message);
      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(message, function (reply) {
          console.log('discoverHypertiesPerUser reply', reply);

          var value = reply.body.value;

          if (!value) {
            return reject('User Hyperty not found');
          }

          resolve(value);
        });
      });
    }

    /**
    *  function to delete an hypertyInstance in the Domain Registry
    *  @param   {String}           user              user url
    *  @param   {String}           hypertyInstance   HypertyInsntance url
    *  @param   {domain}           domain (Optional)
    *  @return  {Promise}          Promise          result
    */

  }, {
    key: 'deleteHyperty',
    value: function deleteHyperty(user, hypertyInstance, domain) {
      var _this = this;
      var activeDomain = void 0;

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var msg = {
        type: 'delete', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { value: { user: user, url: hypertyInstance } } };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var response = reply.body.code;

          if (response) {
            resolve('Hyperty successfully deleted');
          } else {
            reject('Error on deleting hyperty');
          }
        });
      });
    }
  }]);
  return Discovery;
}(); /**
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

exports.default = Discovery;