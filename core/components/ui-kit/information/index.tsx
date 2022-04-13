import { FC } from 'react'
import * as Lib from './lib'
import { Popover, Skeleton } from 'antd'

export const Information: FC<Lib.T.InformationProps> = ({ children, icon, colorTheme, popover, loading, ...rest }) => {
  return (
    <Popover {...popover}>
      <Lib.S.InformationContainer colorTheme={colorTheme} icon={icon} loading={loading} {...rest}>
        {loading ? (
          <Skeleton.Button active />
        ) : (
          <>
            {icon ? icon : <svg />}

            {children && <span>{children}</span>}
          </>
        )}
      </Lib.S.InformationContainer>
    </Popover>
  )
}
