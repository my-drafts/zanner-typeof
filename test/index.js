
var assert = require('assert');
var type = require('../');

assert.equal(type.typeOf(undefined, 'undefined'), true, 'Error on value: undefined');
assert.equal(type.typeOf(true, 'boolean'), true, 'Error on value: true');
assert.equal(type.typeOf(false, 'boolean'), true, 'Error on value: false');
assert.equal(type.typeOf(1, 'number'), true, 'Error on value: number 1');
assert.equal(type.typeOf(1.2, 'number'), true, 'Error on value: number 1.2');
assert.equal(type.typeOf('1', 'string'), true, 'Error on value: string "1"');
assert.equal(type.typeOf(null, 'null'), true, 'Error on value: null');
assert.equal(type.typeOf({}, 'object'), true, 'Error on value: {}');
assert.equal(type.typeOf([], 'array'), true, 'Error on value: []');
assert.equal(type.typeOf(new Date(), 'date'), true, 'Error on value: date');

assert.equal(type.typeOf(new Date(), ['string', 'null', 'date']), true, 'Error on value: date');
