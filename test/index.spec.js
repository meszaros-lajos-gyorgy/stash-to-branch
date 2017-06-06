/* global describe, it */

import assert from 'assert'

import {
  save,
  restore
} from '../src/index'

describe('save', () => {
  it('is a function', () => {
    assert.strictEqual(typeof save, 'function', 'the type of save should be a function')
  })
})

describe('restore', () => {
  it('is a function', () => {
    assert.strictEqual(typeof restore, 'function', 'the type of restore should be a function')
  })
})
