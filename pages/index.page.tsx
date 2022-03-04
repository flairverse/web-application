import { useTranslation } from 'next-i18next.config'
import { I18n } from '@/helpers/language.helper'
import * as Lib from './lib'

const Homepage = () => {
  const { t } = useTranslation('common')

  return <Lib.S.Container>{I18n.get}</Lib.S.Container>
}

export default Homepage
