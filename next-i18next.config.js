const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')
const { LANGUAGES } = require('./source/constants/languages')

module.exports = new NextI18Next({
  otherLanguages: LANGUAGES.filter(language => language !== 'en'),
  localeSubpaths,
  localePath: path.resolve('./public/locales'),
})
