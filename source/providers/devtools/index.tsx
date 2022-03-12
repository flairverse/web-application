import { FC } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import * as Lib from './lib'

export const DevtoolsProvider: FC = () => {
  return process.env.NODE_ENV === 'development' ? (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <Lib.C.ThemeDevtool />
      <Lib.C.LanguageDevtool />
      <Lib.C.FontDevtool />
    </>
  ) : null
}
