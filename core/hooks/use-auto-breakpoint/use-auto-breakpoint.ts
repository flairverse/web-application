import * as storeKeys from '@/constants/store-keys.constants'
import { breakPointsArrays, numeralBreakpoints } from '@/constants/style-variables.constant'
import { hookUseAutoBreakpointAtomFamilies, StoreLib } from '@/store'
import { NumeralBreakpoints } from '@/types/style-variables.type'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useWindowSize } from '../use-window-size'

export const useAutoBreakpoint = () => {
  const setBreakpoint = useSetRecoilState(
    hookUseAutoBreakpointAtomFamilies.currentWindowBreakpoint(storeKeys.HOOK__USE_AUTO_BREAKPOINT___CURRENT_WINDOW_BREAKPOINT),
  )
  const { xxl, xl, lg, md, sm, xs } = numeralBreakpoints
  const { numeral, stringified } = breakPointsArrays

  const changeBreakpointState = (iw: number): StoreLib.T.CurrentWindowBreakpoint => {
    let breakpointIndex: number = 0

    if (iw > xxl || (iw <= xxl && iw > xl)) {
      breakpointIndex = numeral.indexOf(<NumeralBreakpoints>xxl)
    } else if (iw <= xl && iw > lg) {
      breakpointIndex = numeral.indexOf(<NumeralBreakpoints>xl)
    } else if (iw <= lg && iw > md) {
      breakpointIndex = numeral.indexOf(<NumeralBreakpoints>lg)
    } else if (iw <= md && iw > sm) {
      breakpointIndex = numeral.indexOf(<NumeralBreakpoints>md)
    } else if (iw <= sm && iw > xs) {
      breakpointIndex = numeral.indexOf(<NumeralBreakpoints>sm)
    } else if (iw <= xs) {
      breakpointIndex = numeral.indexOf(<NumeralBreakpoints>xs)
    } else {
      breakpointIndex = numeral.indexOf(<NumeralBreakpoints>xs)
    }

    return {
      breakpoint: numeral[breakpointIndex],
      stringifiedBreakpoint: stringified[breakpointIndex],
      windowWidth: iw,
    }
  }

  useWindowSize(({ width }) => setBreakpoint(changeBreakpointState(width)), [])
}

export const useGetAutoBreakpoint = () => {
  const breakpoint = useRecoilValue(
    hookUseAutoBreakpointAtomFamilies.currentWindowBreakpoint(storeKeys.HOOK__USE_AUTO_BREAKPOINT___CURRENT_WINDOW_BREAKPOINT),
  )

  return breakpoint
}
