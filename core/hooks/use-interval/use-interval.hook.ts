import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, timeout: number) => {
  const intervalRef = useRef<number>()
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (typeof timeout === 'number') {
      intervalRef.current = window.setInterval(() => callbackRef.current(), timeout)

      return () => window.clearInterval(intervalRef.current)
    }
  }, [timeout])

  return intervalRef
}
