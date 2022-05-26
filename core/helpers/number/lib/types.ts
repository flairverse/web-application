export type CreateArrayFromRangeArgs = {
  range: [number, number]
  prefix?: string
  suffix?: string
  fixesType?: CreateArrayFromRangeFixesType
}

export type CreateArrayFromRangeFixesType = {
  type: 'month' | 'weekDay'
  placement: 'suffix' | 'prefix'
}

export type CreateArrayFromRangeReturn = {
  integer: number
  full: string
}
