import { FC, useState } from 'react'
import * as Lib from '.'
import { FaBrush } from 'react-icons/fa'
import { MdOutlineLanguage } from 'react-icons/md'
import { AiOutlineFontColors } from 'react-icons/ai'
import { Button } from 'antd'
import { themeNames } from '@/helpers/theme/lib/constants'
import { useTheme } from 'next-themes'
import { I18n } from '@/helpers/language.helper'
import { LANGUAGES, LANGUAGES_NAME } from '@/constants/languages.constants'
import { useRecoilValue } from 'recoil'
import { providerInternationalizationAtoms } from '@/store/atoms'
import { useFont } from '@/hooks/use-font'

/**
 *
 *
 *
 * devtool component. all devtools will use this component to be placed in the document
 */
export const Devtool: FC<Lib.T.DevtoolProps> = ({ children, Icon, position, name, current, testId }) => {
  const [showBox, setShowBox] = useState<boolean>(false)

  return (
    <>
      <Lib.S.FloatButton data-testid={testId} position={position} onClick={() => setShowBox(true)} className="devtool">
        <Icon color="white" size={15} />
      </Lib.S.FloatButton>

      <Lib.S.DevtoolBox className={`${showBox}`}>
        <div className="header">
          <span>
            <Icon color="#b23544" size={25} />
          </span>

          <p>{name} Devtool</p>
        </div>

        <div className="body">
          <h2>
            Current {name}: {current}
          </h2>

          <p>Other options:</p>
          <div>{children}</div>
        </div>

        <div className="footer">
          <Button type="ghost" onClick={() => setShowBox(false)}>
            Close
          </Button>
        </div>
      </Lib.S.DevtoolBox>
    </>
  )
}

/**
 *
 *
 *
 * devtool for changing and testing several themes
 */
export const ThemeDevtool: FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Devtool testId="themeDevtool" position={[55, 10]} Icon={FaBrush} name="Theme" current={theme}>
      {themeNames.map((theme, index) => (
        <Button type="primary" key={index} onClick={() => setTheme(theme)}>
          {theme}
        </Button>
      ))}

      <Button type="primary" onClick={() => setTheme('system')}>
        system
      </Button>
    </Devtool>
  )
}

/**
 *
 *
 *
 * devtool for changing and testing several languages
 */
export const LanguageDevtool: FC = () => {
  const current = useRecoilValue(providerInternationalizationAtoms.language)
  return (
    <Devtool testId="languageDevtool" position={[10, 55]} Icon={MdOutlineLanguage} name="Language" current={LANGUAGES_NAME[LANGUAGES.indexOf(current)]}>
      {LANGUAGES_NAME.map((language, index) => (
        <Button type="primary" key={index} onClick={() => I18n.change(LANGUAGES[index])}>
          {language}
        </Button>
      ))}
    </Devtool>
  )
}

/**
 *
 *
 *
 * devtool for changing and testing several font families
 */
export const FontDevtool: FC = () => {
  const { font, setFont, fonts } = useFont()

  return (
    <Devtool testId="fontDevtool" position={[45, 45]} Icon={AiOutlineFontColors} name="Font" current={font}>
      {fonts.map((item, index) => (
        <Button type="primary" key={index} onClick={() => setFont(item)}>
          {item}
        </Button>
      ))}
    </Devtool>
  )
}
