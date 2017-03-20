"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RethinkObject = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _tv = require("tv4");

var _tv2 = _interopRequireDefault(_tv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RethinkObject = exports.RethinkObject = function () {
    function RethinkObject() {
        (0, _classCallCheck3.default)(this, RethinkObject);
    }

    (0, _createClass3.default)(RethinkObject, [{
        key: "validate",


        /**
         * Validates this RethinkObject against the provided schema.
         *
         * LIMITATIONS: The provided schema cannot contain references to other schemas, since they can't be resolved.
         * @param schema - schema to validate against
         * @returns {boolean} true if valid, false otherwise
         */
        value: function validate(schema) {
            // add schema itself so local references work
            _tv2.default.addSchema(schema.id, schema);

            // JSON stringify -> parse needed to have proper validation
            var result = _tv2.default.validateMultiple(JSON.parse((0, _stringify2.default)(this)), schema);

            // delete error stacks to improve logging
            result.errors.forEach(function (error) {
                delete error.stack;
            });

            // print more details about validation if it fails or schema contains $refs
            if (!result.valid || result.missing.length > 0) {
                console.warn("Object validation " + (result.valid ? "succeeded, but schema contained references:" : "failed:"), (0, _stringify2.default)(result, null, 2));
                console.log("Object:", (0, _stringify2.default)(this, null, 2));
            }
            return result.valid;
        }
    }]);
    return RethinkObject;
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


exports.default = RethinkObject;