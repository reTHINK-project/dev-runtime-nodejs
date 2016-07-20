"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    _classCallCheck(this, GlobalRegistryRecord);

    this.guid;
    this.salt;
    this.userIDs = [];
    this.lastUpdate;
    this.timeout;
    this.publicKey;
    this.active;
    this.revoked;
  }

  /**
   * Constructs a new object representing information about one contact.
   * @returns {Object}  object  A JavaScript Object with all fields for the Global Registry Record.
   */


  _createClass(GlobalRegistryRecord, [{
    key: "getRecord",
    value: function getRecord() {

      // TODO: give error if fields are missing

      var record = new Object();
      record.guid = this.guid;
      record.salt = this.salt;
      record.userIDs = this.userIDs;
      record.lastUpdate = this.lastUpdate;
      record.timeout = this.timeout;
      record.publicKey = this.publicKey;
      record.active = this.active;
      record.revoked = this.revoked;

      return record;
    }
  }]);

  return GlobalRegistryRecord;
}();

exports.default = GlobalRegistryRecord;