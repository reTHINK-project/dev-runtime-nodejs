'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SandboxRegistry = exports.SandboxType = exports.Sandbox = undefined;

var _Sandbox = require('./sandbox/Sandbox');

var _Sandbox2 = _interopRequireDefault(_Sandbox);

var _SandboxRegistry = require('./sandbox/SandboxRegistry');

var _SandboxRegistry2 = _interopRequireDefault(_SandboxRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sandbox = _Sandbox2.default;
exports.SandboxType = _Sandbox.SandboxType;
exports.SandboxRegistry = _SandboxRegistry2.default; /**
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