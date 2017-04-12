'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _RegistryDataModel2 = require('./RegistryDataModel');

var _RegistryDataModel3 = _interopRequireDefault(_RegistryDataModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
*   @author: Gil Dias (gil.dias@tecnico.ulisboa.pt)
*   HypertyInstance Data Model used to model instances of Hyperties running in devices and servers.
*/
var HypertyInstance = function (_RegistryDataModel) {
  (0, _inherits3.default)(HypertyInstance, _RegistryDataModel);

  function HypertyInstance(id, url, descriptorURL, descriptor, hypertyURL, user, guid, runtime, context, p2pHandler, p2pRequester, dataSchemes, resources, startingTime, lastModified) {
    (0, _classCallCheck3.default)(this, HypertyInstance);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (HypertyInstance.__proto__ || (0, _getPrototypeOf2.default)(HypertyInstance)).call(this, id, url, descriptorURL, p2pRequester, startingTime, lastModified));

    var _this = _this2;
    _this._descriptor = descriptor;
    _this._hypertyURL = hypertyURL;
    _this._user = user;
    _this._guid = guid;
    _this._runtime = runtime;
    _this._context = context;
    _this._p2pHandler = p2pHandler;
    _this._dataSchemes = dataSchemes;
    _this._resources = resources;
    return _this2;
  }

  (0, _createClass3.default)(HypertyInstance, [{
    key: 'user',
    set: function set(identity) {
      var _this = this;
      _this.user = identity;
    },
    get: function get() {
      var _this = this;
      return _this._user;
    }
  }, {
    key: 'hypertyURL',
    get: function get() {
      var _this = this;
      return _this._hypertyURL;
    }
  }, {
    key: 'descriptor',
    get: function get() {
      var _this = this;
      return _this._descriptor;
    }
  }, {
    key: 'objectName',
    get: function get() {
      var _this = this;
      return _this._descriptor._objectName;
    }
  }, {
    key: 'p2pHandler',
    get: function get() {
      var _this = this;
      return _this._p2pHandler;
    }
  }, {
    key: 'dataSchemes',
    get: function get() {
      var _this = this;
      return _this._dataSchemes;
    }
  }, {
    key: 'resources',
    get: function get() {
      var _this = this;
      return _this._resources;
    }
  }, {
    key: 'runtimeURL',
    get: function get() {
      var _this = this;
      return _this._runtime;
    }
  }]);
  return HypertyInstance;
}(_RegistryDataModel3.default); /**
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


exports.default = HypertyInstance;