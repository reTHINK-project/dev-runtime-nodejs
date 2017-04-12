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
* Represents the user's information for the global registry.
* @author beierle@tu-berlin.de
*/
var GlobalRegistryRecord = function () {

  /**
   * Constructs a new empty object.
   */
  function GlobalRegistryRecord() {
    (0, _classCallCheck3.default)(this, GlobalRegistryRecord);

    this.schemaVersion = 1;
    this.guid;
    this.salt;
    this.userIDs = [];
    this.legacyIDs = [];
    this.lastUpdate;
    this.timeout;
    this.publicKey;
    this.active;
    this.revoked;
    this.defaults = new Object();
  }

  /**
   * Constructs a new object representing information about one contact.
   * @returns {Object}  object  A JavaScript Object with all fields for the Global Registry Record.
   */


  (0, _createClass3.default)(GlobalRegistryRecord, [{
    key: "getRecord",
    value: function getRecord() {

      // TODO: give error if fields are missing

      var record = new Object();
      record.schemaVersion = this.schemaVersion;
      record.guid = this.guid;
      record.salt = this.salt;
      record.userIDs = this.userIDs;
      record.lastUpdate = this.lastUpdate;
      record.timeout = this.timeout;
      record.publicKey = this.publicKey;
      record.active = this.active;
      record.revoked = this.revoked;
      record.defaults = this.defaults;
      record.legacyIDs = this.legacyIDs;

      return record;
    }
  }]);
  return GlobalRegistryRecord;
}();

exports.default = GlobalRegistryRecord;