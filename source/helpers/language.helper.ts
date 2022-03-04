import { i18n } from 'next-i18next.config'
import { LANGUAGES_TYPE } from 'source/constants/languages'
import { Cookie } from './cookie'

export const changeLanguage = (language: LANGUAGES_TYPE) => i18n.changeLanguage(language)

export const getLanguage = (): LANGUAGES_TYPE => Cookie.get('next-i18next') || 'en'
