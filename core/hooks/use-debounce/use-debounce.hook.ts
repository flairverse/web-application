import { debounce } from 'lodash'
import { useRef } from 'react'
import * as Lib from './lib'

export const useDebounce = <T = unknown>({ callback, debounceSettings, delay = 700 }: Lib.T.DebouncedArgs<T>) => {
  const dispatchValue = (value: T) => callback?.(value)

  const setValueDebounced = useRef(debounce(dispatchValue, delay, { ...debounceSettings, maxWait: debounceSettings?.maxWait || 1400 }))

  return (value: T) => setValueDebounced.current(value)
}
