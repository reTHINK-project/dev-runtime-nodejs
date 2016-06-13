'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _utils = require('../src/utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

// internal modules to be tested
// Unit test modules


_chai2.default.config.showDiff = true;
_chai2.default.config.truncateThreshold = 0;

_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_sinonChai2.default);

describe('Utils Module', function () {

  it('should divide an url in 3 parts (type, domain, identity)', function () {

    // http://localhost:9090/test
    // hyperty://localhost:9090/test
    // http://sp1.sp/test-testes
    // hyperty-catalogue://sp1.sp/HelloHyperty
    // runtime://sp1.sp/8456/sm
    // domain://msg-node.sp1.sp/hyperty-address-allocation
    // hyperty-runtime://sp1.sp

    var url = 'runtime://sp.sp/8456/sm';
    expect((0, _utils.divideURL)(url)).to.deep.equal({ 'type': 'runtime', 'domain': 'sp.sp', 'identity': '/8456/sm' });

    url = 'domain://msg-node.sp1.sp/hyperty-address-allocation';
    expect((0, _utils.divideURL)(url)).to.deep.equal({ 'type': 'domain', 'domain': 'msg-node.sp1.sp', 'identity': '/hyperty-address-allocation' });

    url = 'hyperty://sp1.sp/HelloHyperty';
    expect((0, _utils.divideURL)(url)).to.deep.equal({ 'type': 'hyperty', 'domain': 'sp1.sp', 'identity': '/HelloHyperty' });

    url = 'hyperty://localhost:9090/test';
    expect((0, _utils.divideURL)(url)).to.deep.equal({ 'type': 'hyperty', 'domain': 'localhost:9090', 'identity': '/test' });

    url = 'runtime://sp1.sp';
    expect((0, _utils.divideURL)(url)).to.deep.equal({ 'type': 'runtime', 'domain': 'sp1.sp', 'identity': '' });

    url = 'http://localhost:9090/test';
    expect((0, _utils.divideURL)(url)).to.deep.equal({ 'type': 'http', 'domain': 'localhost:9090', 'identity': '/test' });

    url = 'https://localhost:9090/secure-test';
    expect((0, _utils.divideURL)(url)).to.deep.equal({ 'type': 'https', 'domain': 'localhost:9090', 'identity': '/secure-test' });
  });

  it('should convert a user identity to userURL', function () {

    var userIdentity = 'openidtest10@gmail.com';
    expect((0, _utils.convertToUserURL)(userIdentity)).to.deep.equal('user://gmail.com/openidtest10');

    userIdentity = 'user://gmail.com/openidtest10';
    expect((0, _utils.convertToUserURL)(userIdentity)).to.deep.equal('user://gmail.com/openidtest10');
  });
});