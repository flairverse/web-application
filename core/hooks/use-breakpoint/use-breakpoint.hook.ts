import { useEffect, useState } from 'react'

/**
 *
 * @param breakpoint breakpoint to check
 * @param equality equality checker
 * @returns [isGreaterThanBreakpoint, isLessThanBreakpoint]
 */
export const useBreakpoint = (breakpoint: number, equality: boolean = true): [boolean, boolean] => {
  const [lessThan, setLessThan] = useState<boolean>(false)
  const [greaterThan, setGreaterThan] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { innerWidth } = window

      if (equality) {
        setLessThan(innerWidth <= breakpoint)
        setGreaterThan(innerWidth >= breakpoint)
      } else {
        setLessThan(innerWidth < breakpoint)
        setGreaterThan(innerWidth > breakpoint)
      }
    }
  }, [])

  return [greaterThan, lessThan]
}
