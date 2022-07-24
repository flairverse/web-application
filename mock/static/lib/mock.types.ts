export type RandomKeys = 'JOBS' | 'FIRST_NAMES' | 'LAST_NAMES' | 'USERNAME_SPLITTER'
export type RandomGeneratorTypes = RandomKeys | 'USERNAME' | 'DATE_STRING' | 'ID' | 'PROFILE_IMAGE'
export type Randoms = {
  [key in RandomKeys]: string[]
}

export type StaticRandomReturnType = string | number | undefined
