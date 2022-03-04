import { RenderHookOptions } from '@testing-library/react-hooks'
import { RecoilRoot } from 'recoil'

export const commonHookRenderer: RenderHookOptions<unknown> = {
  wrapper: RecoilRoot,
}
