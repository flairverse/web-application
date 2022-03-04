import { render, screen } from '@testing-library/react'
import { InternationalizationProvider } from '../internationalization'
import { useInternationalization } from '../internationalization/lib/hooks'
import { RecoilRoot } from 'recoil'
import { renderHook } from '@testing-library/react-hooks'
import { commonHookRenderer } from '@/constants/testing-hook.constants'

describe('testing [providers] => internationalization', () => {
  it("should store user's current language in it's atom", () => {
    const { result } = renderHook(useInternationalization, commonHookRenderer)
    expect(result.current.language).toBe('en')
  })

  it('should render children within itself', () => {
    render(
      <RecoilRoot>
        <InternationalizationProvider>
          <p>test paragraph</p>
        </InternationalizationProvider>
        ,
      </RecoilRoot>,
    )
    expect(screen.getByText(/test paragraph/i)).toBeInTheDocument()
  })
})
