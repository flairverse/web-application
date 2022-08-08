module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-transform-runtime',
    'macros',
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],

    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        fileName: true,
        namespace: 'FLAIRVERSE',
      },
    ],

    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
}
