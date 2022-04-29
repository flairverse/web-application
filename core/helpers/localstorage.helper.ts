import { LocalStorageKeys } from '@/constants/local-storage-keys'

export class LocalStorage {
  /**
   *
   *
   *
   * Sets a property in the browser local storage
   *
   * @param key LocalStorageKeys in source/constants/local-storage-keys
   * @param value string | object
   */
  static set(key: LocalStorageKeys, value: string | object) {
    const val = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, val)
  }

  /**
   *
   *
   *
   * Gives a stored property in the browser local storage
   *
   * @param key LocalStorageKeys in source/constants/local-storage-keys
   * @param isStringifiedJson boolean
   * @returns generic type | string | null
   */
  static get<T = string>(key: LocalStorageKeys, isStringifiedJson?: boolean): T | null {
    const item = localStorage.getItem(key)
    if (!item) {
      return null
    }
    return isStringifiedJson ? JSON.parse(item) : item
  }

  /**
   *
   *
   *
   * Removes one specific key from the browser local storage
   *
   * @param key LocalStorageKeys in source/constants/local-storage-keys
   */
  static remove(key: LocalStorageKeys) {
    localStorage.removeItem(key)
  }

  /**
   *
   *
   *
   * Completely clears the browser local storage (make sure to use it safety)
   */
  static clear() {
    localStorage.clear()
  }
}
