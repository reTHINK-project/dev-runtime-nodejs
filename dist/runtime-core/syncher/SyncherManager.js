'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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


var _utils = require('../utils/utils');

var _ObjectAllocation = require('./ObjectAllocation');

var _ObjectAllocation2 = _interopRequireDefault(_ObjectAllocation);

var _ReporterObject = require('./ReporterObject');

var _ReporterObject2 = _interopRequireDefault(_ReporterObject);

var _ObserverObject = require('./ObserverObject');

var _ObserverObject2 = _interopRequireDefault(_ObserverObject);

var _tv = require('../utils/tv4');

var _tv2 = _interopRequireDefault(_tv);

var _MessageFactory = require('service-framework/dist/MessageFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author micaelpedrosa@gmail.com
 * Core Syncronization system.
 */
var SyncherManager = function () {
  /* private
  _url: URL
  _bus: MiniBus
  _registry: Registry
  _allocator: ObjectAllocation
   _reporters: { ObjectURL: ReporterObject }
  _observers: { ObjectURL: ObserverObject }
  */

  function SyncherManager(runtimeURL, bus, registry, catalog, allocator) {
    _classCallCheck(this, SyncherManager);

    var _this = this;

    _this._bus = bus;
    _this._registry = registry;
    _this._catalog = catalog;

    //TODO: these should be saved in persistence engine?
    _this._url = runtimeURL + '/sm';
    _this._objectURL = runtimeURL + '/object-allocation';

    _this._reporters = {};
    _this._observers = {};

    //TODO: this should not be hardcoded!
    _this._domain = (0, _utils.divideURL)(runtimeURL).domain;

    _this._mf = new _MessageFactory.MessageFactory(false, {});

    if (allocator) {
      _this._allocator = allocator;
    } else {
      _this._allocator = new _ObjectAllocation2.default(_this._objectURL, bus);
    }

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

  _createClass(SyncherManager, [{
    key: '_onCreate',


    //FLOW-IN: message received from Syncher -> create
    value: function _onCreate(msg) {

      var _this = this;
      var owner = msg.from;
      var domain = (0, _utils.divideURL)(msg.from).domain;

      if (msg.body.resource) {
        _this._authorise(msg, msg.body.resource);
        return;
      }

      //get schema from catalogue and parse -> (scheme, children)
      _this._catalog.getDataSchemaDescriptor(msg.body.schema).then(function (descriptor) {

        var properties = descriptor.sourcePackage.sourceCode.properties;
        var scheme = properties.scheme ? properties.scheme.constant : 'resource';
        var childrens = properties.children ? properties.children.constant : [];

        console.log('Scheme: ', scheme);

        // schema validation
        console.log('Running object validation...');
        try {
          var obj = msg.body.value;
          var schema = descriptor.sourcePackage.sourceCode;

          // add support for schema referencing itself
          _tv2.default.addSchema(schema.id, schema);

          // validate
          var result = _tv2.default.validateMultiple(obj, schema);

          // delete error stacks to improve logging
          result.errors.forEach(function (error) {
            delete error.stack;
          });

          // print more details about validation if it fails or schema contains $refs
          if (!result.valid || result.missing.length > 0) {
            console.warn('Object validation ' + (result.valid ? 'succeeded, but schema contained references:' : 'failed:'), JSON.stringify(result, null, 2));
            console.debug('Object:', JSON.stringify(obj, null, 2), '\r\nSchema:', JSON.stringify(schema, null, 2));
          } else {
            console.log('Object validation succeeded');
          }
        } catch (e) {
          console.warn('Error during object validation:', e);
        }

        //request address allocation of a new object from the msg-node
        _this._allocator.create(domain, scheme, 1).then(function (allocated) {
          var objURL = allocated[0];

          console.log('ALLOCATOR CREATE:', allocated);

          var subscriptionURL = objURL + '/subscription';

          console.log('Subscription URL', subscriptionURL);

          //To register the dataObject in the runtimeRegistry
          console.info('Register Object: ', msg.body.value.name, msg.body.value.schema, objURL, msg.body.value.reporter, msg.body.value.resources);
          _this._registry.registerDataObject(msg.body.value.name, msg.body.value.schema, objURL, msg.body.value.reporter, msg.body.value.resources, msg.body.authorise).then(function (resolve) {
            console.log('DataObject successfully registered', resolve);

            //all OK -> create reporter and register listeners
            var reporter = new _ReporterObject2.default(_this, owner, objURL);
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
    key: '_authorise',
    value: function _authorise(msg, objURL) {
      var _this = this;
      var objSubscriptorURL = objURL + '/subscription';

      msg.body.authorise.forEach(function (hypertyURL) {
        //FLOW-OUT: send invites to list of remote Syncher -> _onRemoteCreate -> onNotification
        _this._bus.postMessage({
          type: 'create', from: objSubscriptorURL, to: hypertyURL,
          body: { identity: msg.body.identity, source: msg.from, value: msg.body.value, schema: msg.body.scheme }
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
      var _this2 = this;

      var _this = this;

      var hypertyURL = msg.from;
      var objURL = msg.body.resource;
      var objURLSubscription = objURL + '/subscription';
      var childBaseURL = objURL + '/children/';

      var domain = (0, _utils.divideURL)(objURL).domain;

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
              body: { code: 100, childrenResources: childrens }
            });

            //FLOW-OUT: subscribe message to remote ReporterObject -> _onRemoteSubscribe
            var objSubscribeMsg = {
              type: 'subscribe', from: _this._url, to: objURLSubscription,
              body: { identity: nodeSubscribeMsg.body.identity, subscriber: hypertyURL }
            };

            //subscribe to reporter SM
            _this._bus.postMessage(objSubscribeMsg, function (reply) {
              console.log('reporter-subscribe-response: ', reply);
              if (reply.body.code === 200) {

                var observer = _this._observers[objURL];
                if (!observer) {
                  observer = new _ObserverObject2.default(_this, objURL, childrens);
                  _this._observers[objURL] = observer;
                }

                //register hyperty subscription
                observer.addSubscription(hypertyURL);

                //forward to hyperty:
                reply.id = msg.id;
                reply.from = _this._url;
                reply.to = hypertyURL;
                _this2._bus.postMessage(reply);
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