const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')
const { LANGUAGES } = require('./core/constants/languages.constants')

module.exports = new NextI18Next({
  otherLanguages: LANGUAGES.filter(language => language !== 'en'),
  localeSubpaths,
  localePath: path.resolve('./public/locales'),
})
