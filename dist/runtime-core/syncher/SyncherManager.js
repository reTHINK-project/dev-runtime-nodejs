'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils/utils');

var _schemaValidation = require('../utils/schemaValidation');

var _AddressAllocation = require('../allocation/AddressAllocation');

var _AddressAllocation2 = _interopRequireDefault(_AddressAllocation);

var _ReporterObject = require('./ReporterObject');

var _ReporterObject2 = _interopRequireDefault(_ReporterObject);

var _ObserverObject = require('./ObserverObject');

var _ObserverObject2 = _interopRequireDefault(_ObserverObject);

var _MessageFactory = require('service-framework/dist/MessageFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author micaelpedrosa@gmail.com
 * Core Syncronization system.
 */
/**
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
var SyncherManager = function () {
  /* private
  _url: URL
  _bus: MiniBus
  _registry: Registry
  _allocator: AddressAllocation
   _reporters: { ObjectURL: ReporterObject }
  _observers: { ObjectURL: ObserverObject }
  */

  function SyncherManager(runtimeURL, bus, registry, catalog, storageManager, allocator, storeDataObjects) {
    (0, _classCallCheck3.default)(this, SyncherManager);

    if (!runtimeURL) throw new Error('[Syncher Manager] - needs the runtimeURL parameter');
    if (!bus) throw new Error('[Syncher Manager] - needs the MessageBus instance');
    if (!registry) throw new Error('[Syncher Manager] - needs the Registry instance');
    if (!catalog) throw new Error('[Syncher Manager] - needs the RuntimeCatalogue instance');
    if (!storageManager) throw new Error('[Syncher Manager] - need the storageManager instance');

    var _this = this;

    _this._bus = bus;
    _this._registry = registry;
    _this._catalog = catalog;
    _this._storageManager = storageManager;

    //TODO: these should be saved in persistence engine?
    _this.runtimeURL = runtimeURL;
    _this._url = runtimeURL + '/sm';
    _this._objectURL = runtimeURL + '/object-allocation';

    _this._reporters = {};
    _this._observers = {};

    _this._dataObjectsStorage = storeDataObjects;

    //TODO: this should not be hardcoded!
    _this._domain = (0, _utils.divideURL)(runtimeURL).domain;

    _this._mf = new _MessageFactory.MessageFactory(false, {});

    if (allocator) {
      _this._allocator = allocator;
    } else {
      _this._allocator = _AddressAllocation2.default.instance;
    }

    console.log('[SyncherManager - AddressAllocation] - ', _this._allocator);

    bus.addListener(_this._url, function (msg) {
      console.log('SyncherManager-RCV: ', msg);
      switch (msg.type) {
        case 'create':
          _this._onCreate(msg);break;
        case 'delete':
          _this._onDelete(msg);break;
        case 'subscribe':
          _this._onLocalSubscribe(msg);break;
        case 'unsubscribe':
          _this._onLocalUnSubscribe(msg);break;
      }
    });
  }

  (0, _createClass3.default)(SyncherManager, [{
    key: '_onCreate',


    //FLOW-IN: message received from Syncher -> create
    value: function _onCreate(msg) {
      var _this2 = this;

      var from = msg.from;
      var to = msg.to;

      if (!msg.body.hasOwnProperty('resume') || msg.body.hasOwnProperty('resume') && !msg.body.resume) {

        // If from the hyperty side, don't call the resumeReporter we will have resume = false'
        // so we will create a not resumed object and always create a new object;
        console.info('[SyncherManager - Create New Object]', msg);
        this._newCreate(msg);
      } else {

        // If from the hyperty side, call the resumeReporter we will have resume = true'
        // so we will create an resumed object and will try to resume the object previously saved;
        this._dataObjectsStorage.getResourcesByCriteria(msg, true).then(function (result) {

          console.info('[SyncherManager - Create Resumed] - ResourcesByCriteria | Message: ', msg, ' result: ', result);

          if (result && (0, _keys2.default)(result).length > 0) {

            var listOfReporters = [];

            (0, _keys2.default)(result).forEach(function (objURL) {
              listOfReporters.push(_this2._resumeCreate(msg, result[objURL]));
            });

            _promise2.default.all(listOfReporters).then(function (resumedReporters) {
              console.log('[SyncherManager - Create Resumed]', resumedReporters);

              // TODO: shoud send the information if some object was fail;
              var successfullyResumed = (0, _values2.default)(resumedReporters).filter(function (reporter) {
                return reporter !== false;
              });

              //FLOW-OUT: message response to Syncher -> create
              _this2._bus.postMessage({
                id: msg.id, type: 'response', from: to, to: from,
                body: { code: 200, value: successfullyResumed }
              });
            });
          } else {
            //forward to hyperty:
            var reply = {};
            reply.id = msg.id;
            reply.from = msg.to;
            reply.to = msg.from;
            reply.type = 'response';
            reply.body = {
              code: 404,
              desc: 'No data objects reporters to be resumed'
            };
            _this2._bus.postMessage(reply);
          }
        });
      }
    }
  }, {
    key: '_newCreate',
    value: function _newCreate(msg) {
      var _this3 = this;

      var _this = this;

      var owner = msg.from;
      var domain = (0, _utils.divideURL)(msg.from).domain;

      // if reporter is in a Interworking Protostub the runtime domain backend services will be used
      if (_this._registry.isInterworkingProtoStub(msg.from)) {
        domain = (0, _utils.divideURL)(_this.runtimeURL).domain;
      }

      if (msg.body.resource) {
        _this._authorise(msg, msg.body.resource);
        return;
      }

      //get schema from catalogue and parse -> (scheme, children)
      _this._catalog.getDataSchemaDescriptor(msg.body.schema).then(function (descriptor) {

        var properties = descriptor.sourcePackage.sourceCode.properties;
        var scheme = properties.scheme ? properties.scheme.constant : 'resource';
        var childrens = properties.children ? properties.children.constant : [];

        // Do schema validation
        // TODO: check if is need to handle with the result of validation
        (0, _schemaValidation.schemaValidation)(scheme, descriptor, msg.body.value);

        var objectInfo = {
          name: msg.body.value.name,
          schema: msg.body.value.schema,
          reporter: msg.body.value.reporter,
          resources: msg.body.value.resources
        };

        // should resuse data object url if it passed
        var reuseDataObject = msg.body.value.resource;
        var numOfAddress = 1;

        //request address allocation of a new object from the msg-node
        _this._allocator.create(domain, numOfAddress, objectInfo, scheme, reuseDataObject).then(function (allocated) {
          var objURL = allocated.address[0];

          console.log('ALLOCATOR CREATE:', allocated);

          var subscriptionURL = objURL + '/subscription';

          console.log('Subscription URL', subscriptionURL);

          //To register the dataObject in the runtimeRegistry
          console.info('Register Object: ', msg.body.value.name, msg.body.value.schema, objURL, msg.body.value.reporter, msg.body.value.resources);
          _this._registry.registerDataObject(msg.body.value.name, msg.body.value.schema, objURL, msg.body.value.reporter, msg.body.value.resources, allocated, msg.body.authorise).then(function (resolve) {
            console.log('DataObject successfully registered', resolve);

            //all OK -> create reporter and register listeners
            var reporter = void 0;

            if (!_this3._reporters[objURL]) {
              reporter = new _ReporterObject2.default(_this, owner, objURL);
            } else {
              reporter = _this3._reporters[objURL];
            }

            console.log('[SyncherManager - new Create] - ', msg);

            // Store for each reporter hyperty the dataObject
            var userURL = void 0;
            var interworking = false;

            if (msg.body.hasOwnProperty('identity') && msg.body.identity.userProfile.userURL) {
              userURL = msg.body.identity.userProfile.userURL;
              if (!userURL.includes('user://')) {
                interworking = true;
              }
            } else {
              interworking = true;
            }

            // Store the dataObject information

            if (!interworking) {
              _this._dataObjectsStorage.set(objURL, true, msg.body.schema, 'on', owner, null, childrens, userURL);

              if (msg.body.hasOwnProperty('store') && msg.body.store) {
                reporter.isToSaveData = true;
                _this._dataObjectsStorage.update(true, objURL, 'isToSaveData', true);
                _this._dataObjectsStorage.saveData(true, objURL, null, msg.body.value);
              }
            }

            reporter.forwardSubscribe([objURL, subscriptionURL]).then(function () {
              reporter.addChildrens(childrens).then(function () {
                _this._reporters[objURL] = reporter;

                //FLOW-OUT: message response to Syncher -> create
                _this._bus.postMessage({
                  id: msg.id, type: 'response', from: msg.to, to: owner,
                  body: { code: 200, resource: objURL, childrenResources: childrens }
                });

                //send create to all observers, responses will be deliver to the Hyperty owner?
                //schedule for next cycle needed, because the Reporter should be available.
                setTimeout(function () {
                  //will invite other hyperties
                  _this._authorise(msg, objURL);
                });
              });
            });
          }, function (error) {
            console.error(error);
          });
        });
      }).catch(function (reason) {
        //FLOW-OUT: error message response to Syncher -> create
        var responseMsg = {
          id: msg.id, type: 'response', from: msg.to, to: owner,
          body: { code: 500, desc: reason }
        };

        _this._bus.postMessage(responseMsg);
      });
    }
  }, {
    key: '_resumeCreate',
    value: function _resumeCreate(msg, storedObject) {
      var _this4 = this;

      var _this = this;

      return new _promise2.default(function (resolve) {

        var owner = msg.from;
        var schema = storedObject.schema;
        var resource = storedObject.resource;
        var initialData = storedObject.data;

        console.log('[SyncherManager] - resume create', msg, storedObject);

        //get schema from catalogue and parse -> (scheme, children)
        _this._catalog.getDataSchemaDescriptor(schema).then(function (descriptor) {

          var properties = descriptor.sourcePackage.sourceCode.properties;
          var scheme = properties.scheme ? properties.scheme.constant : 'resource';
          var childrens = properties.children ? properties.children.constant : [];

          console.log('[SyncherManager] - getDataSchemaDescriptor: ', descriptor, childrens, storedObject.childrenResources);

          // Do schema validation
          // TODO: check if is need to handle with the result of validation
          (0, _schemaValidation.schemaValidation)(scheme, descriptor, initialData);

          //all OK -> create reporter and register listeners
          var reporter = void 0;

          if (!_this4._reporters[resource]) {
            reporter = new _ReporterObject2.default(_this, owner, resource);
          } else {
            reporter = _this4._reporters[resource];
          }

          reporter.isToSaveData = storedObject.isToSaveData;

          reporter.addChildrens(childrens).then(function () {

            reporter.resumeSubscriptions(storedObject.subscriptions);

            _this._reporters[resource] = reporter;

            console.info('[SyncherManager - resume create] - resolved resumed: ', storedObject);
            resolve(storedObject);
          }).catch(function (reason) {
            console.error('[SyncherManager - resume create] - fail on addChildrens: ', reason);
            resolve(false);
          });
        }).catch(function (reason) {
          console.error('[SyncherManager - resume create] - fail on getDataSchemaDescriptor: ', reason);
          resolve(false);
        });
      });
    }
  }, {
    key: '_authorise',
    value: function _authorise(msg, objURL) {
      var _this = this;
      var objSubscriptorURL = objURL + '/subscription';

      console.log('[SyncherManager -  authorise] - ', msg, objURL);

      msg.body.authorise.forEach(function (hypertyURL) {
        //FLOW-OUT: send invites to list of remote Syncher -> _onRemoteCreate -> onNotification
        _this._bus.postMessage({
          type: 'create', from: objSubscriptorURL, to: hypertyURL,
          body: { identity: msg.body.identity, source: msg.from, value: msg.body.value, schema: msg.body.schema }
        });
      });
    }

    //FLOW-IN: message received from DataObjectReporter -> delete

  }, {
    key: '_onDelete',
    value: function _onDelete(msg) {
      var _this = this;

      var objURL = msg.body.resource;

      var object = _this._reporters[objURL];
      if (object) {
        //TODO: is there any policy verification before delete?
        object.delete();

        this._dataObjectsStorage.deleteResource(objURL);

        //TODO: unregister object?
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200 }
        });
      }
    }

    //FLOW-IN: message received from local Syncher -> subscribe

  }, {
    key: '_onLocalSubscribe',
    value: function _onLocalSubscribe(msg) {
      var _this5 = this;

      this._dataObjectsStorage.getResourcesByCriteria(msg, false).then(function (result) {

        console.info('[SyncherManager - Subscribe] - ResourcesByCriteria | Message: ', msg, ' result: ', result);

        if (result && (0, _keys2.default)(result).length > 0) {

          var listOfObservers = [];

          // TODO: should reuse the storaged information
          (0, _keys2.default)(result).forEach(function (objURL) {
            console.log('[SyncherManager - resume Subscribe] - reuse current object url: ', result[objURL]);
            listOfObservers.push(_this5._resumeSubscription(msg, result[objURL]));
          });

          _promise2.default.all(listOfObservers).then(function (resumedObservers) {
            console.log('[SyncherManager - Observers Resumed]', resumedObservers);

            // TODO: shoud send the information if some object was fail;
            var successfullyResumed = (0, _values2.default)(resumedObservers).filter(function (observer) {
              return observer !== false;
            });

            //FLOW-OUT: message response to Syncher -> create
            _this5._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: msg.from,
              body: { code: 200, value: successfullyResumed }
            });
          });
        } else if (msg.body.schema && msg.body.resource) {
          console.log('[SyncherManager - new Subscribe] - ', msg.body.schema, msg.body.resource);
          _this5._newSubscription(msg);
        } else {
          //forward to hyperty:
          var reply = {};
          reply.id = msg.id;
          reply.from = msg.to;
          reply.to = msg.from;
          reply.type = 'response';
          reply.body = {
            code: 404,
            desc: 'No data objects observers to be resumed'
          };
          _this5._bus.postMessage(reply);
        }
      });
    }
  }, {
    key: '_newSubscription',
    value: function _newSubscription(msg) {
      var _this6 = this;

      var _this = this;

      var objURL = msg.body.resource;

      var hypertyURL = msg.from;
      var domain = (0, _utils.divideURL)(objURL).domain;
      var objURLSubscription = objURL + '/subscription';

      var childBaseURL = objURL + '/children/';

      //get schema from catalogue and parse -> (children)
      _this._catalog.getDataSchemaDescriptor(msg.body.schema).then(function (descriptor) {
        var properties = descriptor.sourcePackage.sourceCode.properties;
        var childrens = properties.children ? properties.children.constant : [];

        //children addresses
        var subscriptions = [];
        subscriptions.push(objURL + '/changes');
        childrens.forEach(function (child) {
          return subscriptions.push(childBaseURL + child);
        });

        //FLOW-OUT: subscribe message to the msg-node, registering listeners on the broker
        var nodeSubscribeMsg = {
          type: 'subscribe', from: _this._url, to: 'domain://msg-node.' + domain + '/sm',
          body: { identity: msg.body.identity, subscribe: subscriptions, source: hypertyURL }
        };

        //subscribe in msg-node
        _this._bus.postMessage(nodeSubscribeMsg, function (reply) {
          console.log('node-subscribe-response(observer): ', reply);
          if (reply.body.code === 200) {

            //FLOW-OUT: reply with provisional response
            _this._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: hypertyURL,
              body: { code: 100, childrenResources: childrens, schema: msg.body.schema, resource: msg.body.resource }
            });

            //FLOW-OUT: subscribe message to remote ReporterObject -> _onRemoteSubscribe
            var objSubscribeMsg = {
              type: 'subscribe', from: _this._url, to: objURLSubscription,
              body: { identity: nodeSubscribeMsg.body.identity, subscriber: hypertyURL }
            };

            //TODO: For Further Study
            if (msg.body.hasOwnProperty('mutualAuthentication')) objSubscribeMsg.body.mutualAuthentication = msg.body.mutualAuthentication;
            console.log('[SyncherManager._newSubscription]', objSubscribeMsg, msg);

            //subscribe to reporter SM
            _this._bus.postMessage(objSubscribeMsg, function (reply) {
              console.log('reporter-subscribe-response-new: ', reply);
              if (reply.body.code === 200) {

                var observer = _this._observers[objURL];
                if (!observer) {
                  observer = new _ObserverObject2.default(_this, objURL, childrens);
                  _this._observers[objURL] = observer;
                }

                var interworking = false;

                // Store for each reporter hyperty the dataObject
                var userURL = void 0;
                if (msg.body.hasOwnProperty('identity') && msg.body.identity.userProfile.userURL) {
                  userURL = msg.body.identity.userProfile.userURL;
                  if (!userURL.includes('user://')) {
                    interworking = true;
                  }
                } else {
                  interworking = true;
                }

                if (!interworking) {
                  _this._dataObjectsStorage.set(objURL, false, msg.body.schema, 'on', reply.body.owner, hypertyURL, childrens, userURL);
                  if (msg.body.hasOwnProperty('store') && msg.body.store) {
                    observer.isToSaveData = true;
                    _this._dataObjectsStorage.update(false, objURL, 'isToSaveData', true);
                    _this._dataObjectsStorage.saveData(false, objURL, null, reply.body.value.data);
                  }
                }

                // register new hyperty subscription
                observer.addSubscription(hypertyURL);

                // add childrens and listeners to save data if necessary
                observer.addChildrens(childrens);

                //forward to hyperty:
                reply.id = msg.id;
                reply.from = _this._url;
                reply.to = hypertyURL;
                reply.body.schema = msg.body.schema;
                reply.body.resource = msg.body.resource;

                //TODO: For Further Study
                if (msg.body.hasOwnProperty('mutualAuthentication')) reply.body.mutualAuthentication = msg.body.mutualAuthentication;
                console.log('[subscribe] - new subscription: ', msg, reply, observer);

                _this6._bus.postMessage(reply);
              }
            });
          } else {
            //listener rejected
            _this._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: hypertyURL,
              body: reply.body
            });
          }
        });
      });
    }
  }, {
    key: '_resumeSubscription',
    value: function _resumeSubscription(msg, storedObject) {
      var _this7 = this;

      return new _promise2.default(function (resolve) {

        var objURL = storedObject.resource;
        var schema = storedObject.schema;

        var hypertyURL = msg.from;

        // let objURLSubscription = objURL + '/subscription';

        var childBaseURL = objURL + '/children/';

        console.log('[SyncherManager - ReuseSubscription] - objURL: ', objURL, ' - schema:', schema);

        //get schema from catalogue and parse -> (children)
        _this7._catalog.getDataSchemaDescriptor(schema).then(function (descriptor) {
          var properties = descriptor.sourcePackage.sourceCode.properties;
          var childrens = properties.children ? properties.children.constant : [];

          //children addresses
          var subscriptions = [];
          subscriptions.push(objURL + '/changes');
          childrens.forEach(function (child) {
            return subscriptions.push(childBaseURL + child);
          });

          //FLOW-OUT: reply with provisional response
          _this7._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: hypertyURL,
            body: { code: 100, childrenResources: childrens, schema: schema, resource: objURL }
          });

          //FLOW-OUT: subscribe message to remote ReporterObject -> _onRemoteSubscribe
          /*let objSubscribeMsg = {
            type: 'subscribe', from: this._url, to: objURLSubscription,
            body: { subscriber: hypertyURL, identity: msg.body.identity }
          };
           //subscribe to reporter SM
          this._bus.postMessage(objSubscribeMsg, (reply) => {*/

          var observer = _this7._observers[objURL];
          if (!observer) {
            observer = new _ObserverObject2.default(_this7, objURL, childrens);
            observer.isToSaveData = storedObject.isToSaveData;
            _this7._observers[objURL] = observer;
          }

          //register new hyperty subscription
          observer.addSubscription(hypertyURL);
          observer.addChildrens(childrens);

          // Object.assign(storedObject.data, reply.body.value.data);
          // Object.assign(storedObject.childrens, reply.body.value.childrens);

          //console.log('[subscribe] - resume subscription: ', msg, reply, storedObject, observer);
          resolve(storedObject);

          //});
        }).catch(function (reason) {
          console.error('[SyncherManager - resume subscription] - fail on getDataSchemaDescriptor: ', reason);
          resolve(false);
        });
      });
    }

    //FLOW-IN: message received from local DataObjectObserver -> unsubscribe

  }, {
    key: '_onLocalUnSubscribe',
    value: function _onLocalUnSubscribe(msg) {
      var _this = this;

      var hypertyURL = msg.from;
      var objURL = msg.body.resource;

      var observer = _this._observers[objURL];
      if (observer) {
        //TODO: is there any policy verification before delete?
        observer.removeSubscription(hypertyURL);

        //TODO: destroy object in the registry?
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200 }
        });

        this._dataObjectsStorage.delete(true, objURL, 'subscriptions', hypertyURL);

        //TODO: remove Object if no more subscription?
        //delete _this._observers[objURL];
      }
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }]);
  return SyncherManager;
}();

exports.default = SyncherManager;