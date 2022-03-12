import { render, screen } from '@testing-library/react'
import { DevtoolsProvider } from '../devtools'

describe('Testing [providers] => devtools', () => {
  it('should should render custom devtools inside react query devtool', async () => {
    render(<DevtoolsProvider />)

    expect(screen.getAllByText('Font')).toBeInTheDocument()
  })
})
