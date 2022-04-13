import { Cookie } from '../cookie.helper'

describe('Testing [helpers] => cookie', () => {
  it('should set new cookie in the browser', () => {
    const value = Math.random().toString()
    Cookie.set('test', value, 10)
    const { cookie } = document
    expect(cookie).toContain(value)
  })

  it('should read and return a stored value in the browser', () => {
    const cookie = { key: 'key', val: 'value' }
    Cookie.set(cookie.key, cookie.val, 10)
    const storedValue = Cookie.get<string>(cookie.key)
    expect(storedValue).toEqual(cookie.val)
  })
})
