import { useTranslation } from 'next-i18next.config'
import { changeLanguage } from 'source/helpers/language.helper'
import * as Lib from './lib'

const Homepage = () => {
  const { t } = useTranslation('common')

  return (
    <Lib.S.Container>
      <ul>
        <li className="theLI">{t('h1')}</li>
        <li className="theLI">{t('change-locale')}</li>
        <li className="theLI">{t('to-second-page')}</li>
        <li className="theLI">{t('error-with-status')}</li>
        <li className="theLI">{t('error-without-status')}</li>
        <li className="theLI">{t('title')}</li>
        <li className="theLI">{t('nested.translations')}</li>
        <li className="theLI">
          <button onClick={() => changeLanguage('en')}>to en</button>
        </li>
        <li className="theLI">
          <button onClick={() => changeLanguage('fa')}>to en</button>
        </li>
      </ul>
    </Lib.S.Container>
  )
}

export default Homepage
