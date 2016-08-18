'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _universalLocalstorage = require('./universal-localstorage');

var _universalLocalstorage2 = _interopRequireDefault(_universalLocalstorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistenceManager = {
    set: function set(key, version, value) {
        _universalLocalstorage2.default.setItem(key, JSON.stringify({ 'version': version, 'value': value }));
    },

    get: function get(key) {
        try {
            return JSON.parse(_universalLocalstorage2.default.getItem(key)).value;
        } catch (e) {
            // return undefined
        }
    },

    getVersion: function getVersion(key) {
        try {
            return JSON.parse(_universalLocalstorage2.default.getItem(key)).version;
        } catch (e) {
            // return undefined
        }
    },

    delete: function _delete(key) {
        _universalLocalstorage2.default.removeItem(key);
    }
}; /**
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
exports.default = persistenceManager;