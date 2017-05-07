/**
 * Test dependencies.
 */

const test = require('tape')
const ids = require('..')


test('should generate an array of ordered indexes', assert => {
  assert.plan(2)
  assert.deepEqual(ids(3), [0, 1, 2])
  assert.deepEqual(ids[6], [0, 1, 2, 3, 4, 5, 6])
})
