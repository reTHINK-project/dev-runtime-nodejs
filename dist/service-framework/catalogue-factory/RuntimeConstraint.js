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
 * Created by amo on 14/11/2015.
 */
var RuntimeConstraint = function () {
    function RuntimeConstraint(constraint, runtimeHypertyCapabilityType) {
        (0, _classCallCheck3.default)(this, RuntimeConstraint);

        this._constraint = constraint;
        this._runtimeHypertyCapabilityType = runtimeHypertyCapabilityType;
    }

    (0, _createClass3.default)(RuntimeConstraint, [{
        key: "constraint",
        get: function get() {
            return this._constraint;
        },
        set: function set(constraint) {
            if (constraint) this._constraint = constraint;
        }
    }, {
        key: "runtimeHypertyCapabilityType",
        get: function get() {
            return this._runtimeHypertyCapabilityType;
        },
        set: function set(runtimeHypertyCapabilityType) {
            if (runtimeHypertyCapabilityType) this._runtimeHypertyCapabilityType = runtimeHypertyCapabilityType;
        }
    }]);
    return RuntimeConstraint;
}();

exports.default = RuntimeConstraint;