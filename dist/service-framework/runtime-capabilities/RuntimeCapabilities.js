"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RuntimeCapabilities = function () {
  function RuntimeCapabilities() {
    (0, _classCallCheck3.default)(this, RuntimeCapabilities);
  }

  /**
   * Returns as a promise RuntimeCapabilities json object with all available capabilities of the runtime.
   * If it was not yet persisted in the Storage Manager it collects all required info from the platform and saves in the storage manager.
   * @returns {Promise<object>}
   */


  (0, _createClass3.default)(RuntimeCapabilities, [{
    key: "getRuntimeCapabilities",
    value: function getRuntimeCapabilities() {}

    /**
     * returns as a promise a boolean according to available capabilities.
     * @returns {Promise<boolean>}
     */

  }, {
    key: "isAvailable",
    value: function isAvailable(capability) {}

    /**
     * it refreshes previously collected capabilities and updates the storage manager
     */

  }, {
    key: "update",
    value: function update() {}
  }]);
  return RuntimeCapabilities;
}();

exports.default = RuntimeCapabilities;