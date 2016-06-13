'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourcePackage = exports.ProtocolStubDescriptor = exports.HypertyDescriptor = exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = exports.MessageFactory = exports.CatalogueFactory = undefined;

var _CatalogueDataObjectFactory = require('./catalogue-factory/CatalogueDataObjectFactory');

var _CatalogueDataObjectFactory2 = _interopRequireDefault(_CatalogueDataObjectFactory);

var _MessageFactory = require('./message-factory/MessageFactory');

var _MessageFactory2 = _interopRequireDefault(_MessageFactory);

var _Syncher = require('./syncher/Syncher');

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = require('./syncher/DataObjectReporter');

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = require('./syncher/DataObjectObserver');

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _HypertyDescriptor = require('./catalogue-factory/HypertyDescriptor');

var _HypertyDescriptor2 = _interopRequireDefault(_HypertyDescriptor);

var _ProtocolStubDescriptor = require('./catalogue-factory/ProtocolStubDescriptor');

var _ProtocolStubDescriptor2 = _interopRequireDefault(_ProtocolStubDescriptor);

var _SourcePackage = require('./catalogue-factory/SourcePackage');

var _SourcePackage2 = _interopRequireDefault(_SourcePackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export {AddressFactory};
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

// import AddressFactory from './address-factory/url';
exports.CatalogueFactory = _CatalogueDataObjectFactory2.default;
exports.MessageFactory = _MessageFactory2.default;
exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;
exports.HypertyDescriptor = _HypertyDescriptor2.default;
exports.ProtocolStubDescriptor = _ProtocolStubDescriptor2.default;
exports.SourcePackage = _SourcePackage2.default;