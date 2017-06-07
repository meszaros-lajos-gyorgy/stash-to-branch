/* global describe, it */

import assert from 'assert'

import save from '../src/save'
import restore from '../src/restore'

describe('save', () => {
  it('is a function', () => {
    assert.strictEqual(typeof save, 'function', 'the type of save should be function')
  })
})

describe('restore', () => {
  it('is a function', () => {
    assert.strictEqual(typeof restore, 'function', 'the type of restore should be function')
  })
})
