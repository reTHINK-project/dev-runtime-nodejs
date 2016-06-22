'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataUrlScheme = exports.ContextDataObjectSchema = exports.IdentityDataObjectSchema = exports.ConnectionDataObjectSchema = exports.CommunicationDataObjectSchema = exports.HypertyDataObjectSchema = exports.MessageDataObjectSchema = exports.DataObjectSchema = undefined;

var _CatalogueDataObject2 = require('./CatalogueDataObject');

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
 * Created by pzu on 19.11.15.
 */

var DataObjectSchema = exports.DataObjectSchema = function (_CatalogueDataObject) {
    _inherits(DataObjectSchema, _CatalogueDataObject);

    function DataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL) {
        _classCallCheck(this, DataObjectSchema);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DataObjectSchema).call(this, guid, type, version, objectName, description, language, sourcePackageURL));
    }

    return DataObjectSchema;
}(_CatalogueDataObject3.default);

//Children


var MessageDataObjectSchema = exports.MessageDataObjectSchema = function (_DataObjectSchema) {
    _inherits(MessageDataObjectSchema, _DataObjectSchema);

    function MessageDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL) {
        _classCallCheck(this, MessageDataObjectSchema);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MessageDataObjectSchema).call(this, guid, type, version, objectName, description, language, sourcePackageURL));
    }

    return MessageDataObjectSchema;
}(DataObjectSchema);

var HypertyDataObjectSchema = exports.HypertyDataObjectSchema = function (_DataObjectSchema2) {
    _inherits(HypertyDataObjectSchema, _DataObjectSchema2);

    function HypertyDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy, dataUrlScheme) {
        _classCallCheck(this, HypertyDataObjectSchema);

        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(HypertyDataObjectSchema).call(this, guid, type, version, objectName, description, language, sourcePackageURL));

        _this3._accessControlPolicy = accessControlPolicy;
        _this3._scheme = dataUrlScheme;
        return _this3;
    }

    return HypertyDataObjectSchema;
}(DataObjectSchema);

//Children


var CommunicationDataObjectSchema = exports.CommunicationDataObjectSchema = function (_HypertyDataObjectSch) {
    _inherits(CommunicationDataObjectSchema, _HypertyDataObjectSch);

    function CommunicationDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, CommunicationDataObjectSchema);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CommunicationDataObjectSchema).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return CommunicationDataObjectSchema;
}(HypertyDataObjectSchema);

var ConnectionDataObjectSchema = exports.ConnectionDataObjectSchema = function (_HypertyDataObjectSch2) {
    _inherits(ConnectionDataObjectSchema, _HypertyDataObjectSch2);

    function ConnectionDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, ConnectionDataObjectSchema);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ConnectionDataObjectSchema).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return ConnectionDataObjectSchema;
}(HypertyDataObjectSchema);

var IdentityDataObjectSchema = exports.IdentityDataObjectSchema = function (_HypertyDataObjectSch3) {
    _inherits(IdentityDataObjectSchema, _HypertyDataObjectSch3);

    function IdentityDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, IdentityDataObjectSchema);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(IdentityDataObjectSchema).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return IdentityDataObjectSchema;
}(HypertyDataObjectSchema);

var ContextDataObjectSchema = exports.ContextDataObjectSchema = function (_HypertyDataObjectSch4) {
    _inherits(ContextDataObjectSchema, _HypertyDataObjectSch4);

    function ContextDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, ContextDataObjectSchema);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ContextDataObjectSchema).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return ContextDataObjectSchema;
}(HypertyDataObjectSchema);

var DataUrlScheme = exports.DataUrlScheme = {
    COMM: 'COMM', CONNECTION: 'CONNECTION', CTXT: 'CTXT', IDENTITY: 'IDENTITY'
};

exports.default = DataObjectSchema;