import { Popover, Skeleton } from 'antd'
import { FC } from 'react'
import * as Lib from './lib'

export const Information: FC<Lib.T.InformationProps> = ({ children, icon, colorTheme, popover, loading, ...rest }) => {
  return (
    <Popover {...popover}>
      <Lib.S.InformationContainer
        colorTheme={colorTheme}
        icon={icon}
        loading={loading}
        {...rest}
        className={`${icon ? '' : 'noIcon'} ${rest.className}`}
      >
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
