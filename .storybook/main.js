module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)', '../**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    'storybook-addon-performance/register',
    '@storybook/addon-jest',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //   },
  // },
}
