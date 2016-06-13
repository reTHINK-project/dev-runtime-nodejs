'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _chaiJsonSchema = require('chai-json-schema');

var _chaiJsonSchema2 = _interopRequireDefault(_chaiJsonSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
var assert = _chai2.default.assert;
_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_chaiJsonSchema2.default);
/*
//Testing the Message factory the chai
let goodApple = {
    skin: "thin",
    colors: ["red", "green", "yellow"],
    taste: 10
};
let badApple = {
    colors: ["brown"],
    taste: 0,
    worms: 2
};
let fruitSchema = {
    "title": "fresh fruit schema v1",
    "type": "object",
    "required": ["skin", "colors", "taste"],
    "properties": {
        "colors": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true,
            "items": {
                "type": "string"
            }
        },
        "skin": {
            "type": "string"
        },
        "taste": {
            "type": "number",
            "minimum": 5
        }
    }
};

//bdd style
expect(goodApple).to.be.jsonSchema(fruitSchema);
expect(badApple).to.not.be.jsonSchema(fruitSchema);

goodApple.should.be.jsonSchema(fruitSchema);
badApple.should.not.be.jsonSchema(fruitSchema);

expect(goodApple).equal(true);

//tdd style
assert.jsonSchema(goodApple, fruitSchema);
assert.notJsonSchema(badApple, fruitSchema);
*/