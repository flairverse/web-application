import { useEffect } from 'react'

export const useSSREffect: typeof useEffect = (effect, deps) => {
  return useEffect(() => {
    if (typeof window !== 'undefined') {
      effect()
    }
  }, deps)
}
