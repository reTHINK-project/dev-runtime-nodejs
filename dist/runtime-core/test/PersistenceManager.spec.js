'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _PersistenceManager = require('service-framework/dist/PersistenceManager');

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
var localStorage = window.localStorage;

describe('PersistenceManager', function () {
    describe('set', function () {
        it('should set the value for a given key-version tuple', function () {
            _PersistenceManager2.default.set('key', 'v1.0.0', {});

            expect(localStorage.getItem('key')).to.exist;
        });
    });

    describe('get', function () {
        it('should get the value for a given key', function () {
            _PersistenceManager2.default.set('key', 'v1.0.0', {});

            expect(_PersistenceManager2.default.get('key')).to.be.eql({});
        });
    });

    describe('getVersion', function () {
        it('should get the value version for a given key', function () {
            _PersistenceManager2.default.set('key', 'v1.0.0', {});

            expect(_PersistenceManager2.default.getVersion('key')).to.be.equal('v1.0.0');
        });
    });

    describe('delete', function () {
        it('should remove a value from PersistenceManager for a given key', function () {
            localStorage.setItem('key', '{}');

            _PersistenceManager2.default.delete('key');

            expect(localStorage.getItem('key')).to.be.a('null');
        });
    });
});