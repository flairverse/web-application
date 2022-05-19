/** @type {import('next').NextConfig} */
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withAntdLess = require('next-plugin-antd-less')

const localeSubpaths = {}

const nextConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  // env: {},
  pageExtensions: ['page.tsx'],

  devIndicators: {
    buildActivityPosition: 'top-left',
  },

  modifyVars: {
    '@primary-color': '#0a498c',
    '@border-radius-base': '5px',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = withAntdLess(nextConfig)
