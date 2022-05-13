import { DebounceSettings } from 'lodash'

export interface DebouncedArgs<T> {
  delay?: number
  callback?: (value: T) => void
  debounceSettings?: DebounceSettings
}
