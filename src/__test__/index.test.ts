import { test, describe, expect } from 'vitest'
describe('utils test', () => { 
  test('model', () => {
    expect(1+1).toMatchInlineSnapshot('2')
  })
})
