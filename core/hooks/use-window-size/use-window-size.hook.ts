import { DependencyList, useLayoutEffect } from 'react'
import * as Lib from './lib'

export const useWindowSize = (
  callback: (params: Lib.T.UseWindowSizeCallBack) => void,
  deps?: DependencyList,
) => {
  const dispatchCallBack = (evt: UIEvent) => {
    const width = (<Window>evt.currentTarget).innerWidth
    const height = (<Window>evt.currentTarget).innerHeight
    callback({ evt, width, height })
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', dispatchCallBack)
    return () => window.removeEventListener('resize', dispatchCallBack)
  }, deps)
}
