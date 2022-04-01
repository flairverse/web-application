/**
 *
 * keys
 */
export const FONT = 'FONT'
export const THEME = 'theme'
export const REACT_QUERY_DEVTOOLS_IS_OPEN = 'reactQueryDevtoolsOpen'
export const ALLY_SUPPORTS_CACHE = 'ally-supports-cache'
export const REACT_QUERY_DEVTOOLS_SORT_FN = 'reactQueryDevtoolsSortFn'

/**
 *
 * types
 */
export const LOCAL_STORAGE_KEYS = [FONT, THEME, REACT_QUERY_DEVTOOLS_IS_OPEN, ALLY_SUPPORTS_CACHE, REACT_QUERY_DEVTOOLS_SORT_FN] as const
export type LocalStorageKeys = typeof LOCAL_STORAGE_KEYS[number]
