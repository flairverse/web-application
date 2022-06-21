import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import * as Lib from '../top-nav-bar/lib'

describe('Testing [layouts] => nav-bar', () => {
  it('should verify that search box is inside the nav bar', () => {
    render(
      <RecoilRoot>
        <Lib.C.SearchInput />
      </RecoilRoot>,
    )
    const searchInput = screen.getByTestId('navbarSearchBox')
    expect(searchInput).toBeInTheDocument()
  })

  it('should verify that search suggestion box is inside the nav bar', () => {
    render(
      <RecoilRoot>
        <Lib.C.SearchInput />
      </RecoilRoot>,
    )
    const searchSuggestion = screen.getByTestId('searchSuggestion')
    expect(searchSuggestion).toBeInTheDocument()
  })

  it('should verify that search suggestion box is hidden at first load time', () => {
    render(
      <RecoilRoot>
        <Lib.C.SearchInput />
      </RecoilRoot>,
    )
    const searchSuggestion = screen.getByTestId('searchSuggestion')
    expect(searchSuggestion).toHaveClass('hidden')
  })

  it('should open up the suggestion box by focusing on the search input', () => {
    render(
      <RecoilRoot>
        <Lib.C.SearchInput />
      </RecoilRoot>,
    )
    const searchInput = screen.getByTestId('navbarSearchBox')
    const searchSuggestion = screen.getByTestId('searchSuggestion')
    act(() => {
      fireEvent.focus(searchInput)
    })
    expect(searchSuggestion).toHaveClass('visible')
  })
})
