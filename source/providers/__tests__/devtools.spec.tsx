import { render, screen } from '@testing-library/react'
import { DevtoolsProvider } from '../devtools'
import { RecoilRoot } from 'recoil'

describe('Testing [providers] => devtools', () => {
  it('should should render custom devtools next to the react query devtool', async () => {
    render(
      <RecoilRoot>
        <DevtoolsProvider testMode />
      </RecoilRoot>,
    )

    expect(screen.getByTestId('themeDevtool')).toBeInTheDocument()
    expect(screen.getByTestId('languageDevtool')).toBeInTheDocument()
    expect(screen.getByTestId('fontDevtool')).toBeInTheDocument()
  })
})
