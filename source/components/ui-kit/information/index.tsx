import { FC } from 'react'
import * as Lib from './lib'
import { Popover } from 'antd'

export const Information: FC<Lib.T.InformationProps> = ({ children, icon, colorTheme, popover, ...rest }) => {
  return (
    <Popover {...popover}>
      <Lib.S.InformationContainer colorTheme={colorTheme} icon={icon} {...rest}>
        {icon ? icon : <svg />}

        {children && <span>{children}</span>}
      </Lib.S.InformationContainer>
    </Popover>
  )
}
