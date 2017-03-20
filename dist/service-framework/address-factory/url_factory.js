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

"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URLMalformedError = require('./URLMalformedError');

var specialSchemas = {
   "ftp": 21,
   "file": null,
   "gopher": 70,
   "http": 80,
   "https": 443,
   "ws": 80,
   "wss": 443,
   // local schemas
   "about": null,
   "blob": null,
   "data": null,
   "filesystem": null,
   // reThink specific schemas
   "user": null,
   "ctxt": null,
   "acct": null,
   "user-uuid": null,
   "domain": null,
   "hyperty": null,
   "hyperty-catalogue": null,
   "hyperty-runtime": null,
   "hyperty-runtime-uuid": null,
   "hyperty-runtime-dev-os": null,
   "hyperty-runtime-imei": null,
   "hyperty-runtime-esn": null,
   "hyperty-runtime-meid": null,
   "comm": null
};

var URLDataObject = function () {
   /**
    * Creates the Catalogue Data Object
    * @param scheme - indicates the scheme of the URL 
    * @param host - indicates the type of Catalogue Data Object e.g. Hyperty, ProtocolStub, etc
    * @param port - human-understandable name of the catalogue object e.g. "My Awesome Hyperty"
    * @param path - description of the source package
    */
   function URLDataObject(scheme, host, port, path, parameters) {
      (0, _classCallCheck3.default)(this, URLDataObject);

      this.scheme = scheme;
      this.host = host;
      this.port = port;
      this.path = path;
      this.parameters = parameters;
   }

   (0, _createClass3.default)(URLDataObject, [{
      key: "scheme",
      get: function get() {
         return this._scheme;
      },
      set: function set(value) {
         if (!specialSchemas.hasOwnProperty(value)) {
            throw new URLMalformedError("schema not found");
         }
         this._scheme = value;
      }
   }, {
      key: "host",
      get: function get() {
         return this._host;
      },
      set: function set(value) {
         this._host = value;
      }
   }, {
      key: "port",
      get: function get() {
         return this._port;
      },
      set: function set(value) {
         if (isNaN(parseInt(value))) {
            this._port = specialSchemas[this.scheme];
         } else {
            this._port = value;
         }
      } // set port

   }, {
      key: "path",
      get: function get() {
         return this._path;
      },
      set: function set(value) {
         this._path = value;
      }
   }, {
      key: "url",
      get: function get() {
         this._url = this._scheme + "://" + this._host;

         if (this._port) {
            this._url = this._url + ":" + this._port;
         }

         if (this._path) {
            this._url = this._url + "/" + this._path;
         }
         return this._url;
      }
   }, {
      key: "parameters",
      get: function get() {
         return this._parameters;
      },
      set: function set(value) {
         this._parameters = value;
      }
   }]);
   return URLDataObject;
}();

module.exports = URLDataObject;