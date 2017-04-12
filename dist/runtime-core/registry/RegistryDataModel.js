"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
*   @author: Gil Dias (gil.dias@tecnico.ulisboa.pt)
*   Registry Data Model includes all Objects to be handled by the Registry functionality including
*/
var RegistryDataModel = function () {
  function RegistryDataModel(id, url, descriptorURL, p2pRequester, startingTime, lastModified, status, stubs, stubsConfiguration) {
    (0, _classCallCheck3.default)(this, RegistryDataModel);

    var _this = this;

    _this._id = id;
    _this._url = url;
    _this._descriptorURL = descriptorURL;
    _this._startingTime = startingTime;
    _this._lastModified = lastModified;
    _this._status = status;
    _this._stubs = stubs;
    _this._stubsConfiguration = stubsConfiguration;
    _this._p2pRequester = p2pRequester;
  }

  (0, _createClass3.default)(RegistryDataModel, [{
    key: "id",
    get: function get() {
      var _this = this;
      return _this._id;
    }
  }, {
    key: "url",
    get: function get() {
      var _this = this;
      return _this._url;
    }
  }, {
    key: "descriptor",
    get: function get() {
      var _this = this;
      return _this._descriptorURL;
    }
  }, {
    key: "p2pRequester",
    get: function get() {
      var _this = this;
      return _this._p2pRequester;
    }
  }, {
    key: "lastModified",
    get: function get() {
      var _this = this;
      return _this._lastModified;
    }
  }]);
  return RegistryDataModel;
}();

exports.default = RegistryDataModel;