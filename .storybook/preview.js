import { addDecorator } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { withPerformance } from 'storybook-addon-performance'

initialize()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [mswDecorator]
addDecorator(withPerformance)
