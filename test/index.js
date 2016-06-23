
var assert = require('assert');
var type = require('../');

console.log(type.is(undefined));
console.log(type.is(true));
console.log(type.is(false));
console.log(type.is(123));
console.log(type.is(new Number(123)));
console.log(type.is('123'));
console.log(type.is(new String('123')));
console.log(type.is([1, 2, 3, 4]));
console.log(type.is(new Array([1, 2, 3, 4])));
console.log(type.is({a:1, b:2, c:3}));
console.log(type.is({a:1, b:2, c:3}, true));
console.log(type.is(new Object({a:1, b:2, c:3})));

assert.equal(type.is(undefined), 'undefined', 'Error on is(undefined)');
assert.equal(type.is(true), 'boolean', 'Error on is(true)');
assert.equal(type.is(false), 'boolean', 'Error on is(false)');
assert.equal(type.is(123), 'number', 'Error on is(123)');
assert.equal(type.is(new Number(123)), 'number', 'Error on is(new Number(123))');
assert.equal(type.is('123'), 'string', 'Error on is("123")');
assert.equal(type.is(new String('123')), 'string', 'Error on is(new String("123"))');
assert.equal(type.is([1, 2, 3, 4]), 'array', 'Error on is([1, 2, 3, 4])');
assert.equal(type.is(new Array([1, 2, 3, 4])), 'array', 'Error on is(new Array([1, 2, 3, 4]))');
assert.equal(type.is({a:1, b:2, c:3}), 'object', 'Error on is({a:1, b:2, c:3})');
assert.equal(type.is({a:1, b:2, c:3}, 1), 'object', 'Error on is({a:1, b:2, c:3}, 1)');
assert.equal(type.is({a:1, b:2, c:3}, -1), 'object', 'Error on is({a:1, b:2, c:3}, -1)');
assert.equal(type.is(new Object({a:1, b:2, c:3})), 'object', 'Error on is(new Object({a:1, b:2, c:3}))');


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
