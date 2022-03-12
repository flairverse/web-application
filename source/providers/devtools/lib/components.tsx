import { FC, useState } from 'react'
import * as Lib from '.'
import { FaBrush } from 'react-icons/fa'
import { MdOutlineLanguage } from 'react-icons/md'
import { AiOutlineFontColors } from 'react-icons/ai'
import { Button } from 'antd'
import { themeNames } from '@/helpers/theme/lib/constants'
import { useTheme } from 'next-themes'
import { I18n } from '@/helpers/language.helper'
import { LANGUAGES, LANGUAGES_NAME } from '@/constants/languages'
import { useRecoilValue } from 'recoil'
import { languageState } from '@/store/atoms'

export const Devtool: FC<Lib.T.DevtoolProps> = ({ children, Icon, position, name, current }) => {
  const [showBox, setShowBox] = useState<boolean>(false)

  return (
    <>
      <Lib.S.FloatButton position={position} onClick={() => setShowBox(true)} className="devtool">
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

export const ThemeDevtool: FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Devtool position={[55, 10]} Icon={FaBrush} name="Theme" current={theme}>
      {themeNames.map((theme, index) => (
        <Button type="primary" key={index} onClick={() => setTheme(theme)}>
          {theme}
        </Button>
      ))}
    </Devtool>
  )
}

export const LanguageDevtool: FC = () => {
  const current = useRecoilValue(languageState)
  return (
    <Devtool position={[10, 55]} Icon={MdOutlineLanguage} name="Language" current={LANGUAGES_NAME[LANGUAGES.indexOf(current)]}>
      {LANGUAGES_NAME.map((language, index) => (
        <Button type="primary" key={index} onClick={() => I18n.change(LANGUAGES[index])}>
          {language}
        </Button>
      ))}
    </Devtool>
  )
}

export const FontDevtool: FC = () => {
  return (
    <Devtool position={[45, 45]} Icon={AiOutlineFontColors} name="Font" current={'myFont'}>
      <p>list of fonts</p>
    </Devtool>
  )
}
