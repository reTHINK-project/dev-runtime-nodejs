'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _universalLocalstorage = require('universal-localstorage');

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
};

exports.default = persistenceManager;