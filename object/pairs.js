var basePairs = require('../internal/basePairs'),
    keys = require('./keys');

/**
 * Creates an array of own enumerable key-value pairs for `object`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.pairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
function pairs(object) {
  return basePairs(object, keys(object));
}

module.exports = pairs;
