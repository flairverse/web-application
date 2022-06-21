import { FC } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import * as Lib from './lib'

/**
 *
 *
 * devtools wrapper, we'll add all the devtools here
 */
export const DevtoolsProvider: FC<Lib.T.DevtoolsProviderProps> = ({ testMode = true }) => {
  return process.env.NODE_ENV === 'development' || testMode ? (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <Lib.C.ThemeDevtool />
      <Lib.C.LanguageDevtool />
      <Lib.C.FontDevtool />
    </>
  ) : null
}
