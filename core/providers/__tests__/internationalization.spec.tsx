import { commonHookRenderer } from '@/constants/testing-hook.constants'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { RecoilRoot } from 'recoil'
import {
  InternationalizationProvider,
  InternationalizationProviderLib,
} from '../internationalization'

describe('Testing [providers] => internationalization', () => {
  it("should store user's current language in it's atom", () => {
    const { result } = renderHook(
      InternationalizationProviderLib.H.useInternationalization,
      commonHookRenderer,
    )
    expect(result.current.language).toBe('en')
  })

  it('should render children within itself', () => {
    render(
      <RecoilRoot>
        <InternationalizationProvider>
          <p>test paragraph</p>
        </InternationalizationProvider>
      </RecoilRoot>,
    )
    expect(screen.getByText(/test paragraph/i)).toBeInTheDocument()
  })
})
