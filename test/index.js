
var assert = require('assert');
var type = require('../');

assert.equal(type.of(undefined, 'undefined'), true, 'Error on value: undefined');
assert.equal(type.of(true, 'boolean'), true, 'Error on value: true');
assert.equal(type.of(false, 'boolean'), true, 'Error on value: false');
assert.equal(type.of(1, 'number'), true, 'Error on value: number 1');
assert.equal(type.of(1.2, 'number'), true, 'Error on value: number 1.2');
assert.equal(type.of('1', 'string'), true, 'Error on value: string "1"');
assert.equal(type.of(null, 'null'), true, 'Error on value: null');
assert.equal(type.of({}, 'object'), true, 'Error on value: {}');
assert.equal(type.of([], 'array'), true, 'Error on value: []');
assert.equal(type.of(new Date(), 'date'), true, 'Error on value: date');
assert.equal(type.of(new Date(), ['string', 'null', 'date']), true, 'Error on value: date\'s');
assert.equal(type.ofs([new Date(), new Date(), new Date()], ['string', 'null', 'date']), true, 'Error on value: date\'s from many');
