import { FC } from 'react'
import * as Lib from './lib'

export const Horizontal: FC<Lib.T.HorizontalProps> = ({ speed = 3, scale = true, central, items, onItemsClick, itemProps, ...rest }): JSX.Element => {
  const { on } = Lib.H.useHorizontal(scale, speed)

  const clickHandler = ({ id }: Pick<Lib.T.HorizontalItemProps, 'id'>) => {
    if (onItemsClick) {
      on.itemClick(() => onItemsClick(id || 0))
    }
  }

  return (
    <Lib.S.items
      onMouseDown={on.mouseDown}
      onMouseLeave={on.mouseLeave}
      onMouseUp={on.mouseUp}
      onMouseMove={on.mouseMove}
      central={central}
      {...rest}
    >
      {items.map((item, index) => (
        <HorizontalItem onClick={() => clickHandler({ id: item.id })} key={index} {...itemProps} {...item} />
      ))}
    </Lib.S.items>
  )
}

const HorizontalItem: FC<Lib.T.HorizontalItemProps> = ({ children, spaceX = '0', spaceY = '0', id, ...rest }): JSX.Element => {
  return (
    <Lib.S.item spaceX={spaceX} spaceY={spaceY} {...rest}>
      {children}
    </Lib.S.item>
  )
}
