import { i18n } from 'next-i18next.config'
import { LANGUAGES_TYPE } from '@/constants/languages'
import { Cookie } from './cookie'

export class I18n {
  static change(language: LANGUAGES_TYPE) {
    i18n.changeLanguage(language)
  }

  static get get(): LANGUAGES_TYPE {
    return (typeof window !== 'undefined' && Cookie.get('next-i18next')) || 'en'
  }
}
