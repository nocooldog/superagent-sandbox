import assert from 'node:assert/strict'
import test from 'node:test'
import { greet } from '../src/greeting.js'

test('greets with a space after the comma', () => {
  assert.equal(greet('World'), 'Hello, World!')
})
