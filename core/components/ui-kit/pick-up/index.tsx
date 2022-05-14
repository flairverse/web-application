import { FC } from 'react'
import * as Lib from './lib'
import { BackDrop } from '../back-drop'
import { FiSearch } from 'react-icons/fi'
import { Button } from 'antd'
import { IoClose } from 'react-icons/io5'

export const PickUp: FC<Lib.T.PickUpProps> = ({ visibility, onClose, boxHeight, boxWidth, filter, placeholder, children, backdrop, searchBox, cancelButton, ...rest }) => {
  return (
    <>
      <BackDrop {...backdrop} visibility={visibility} />

      <Lib.S.PickUpContainer boxHeight={boxHeight} boxWidth={boxWidth} onClick={() => onClose?.()} {...rest} className={`${rest.className ? rest.className : ''} ${visibility}`}>
        <div onClick={evt => evt.stopPropagation()}>
          <div className="searchBox">
            <FiSearch color="var(--layer-2-text-2)" size={25} />

            <Lib.C.SearchBox placeholder={placeholder} searchBox={searchBox} />

            {filter && <Lib.C.FilterButton filtersCount={filter.filters.length} filter={filter} />}

            {onClose && cancelButton && (
              <Button type="default" className="cancel" onClick={() => onClose?.()}>
                <IoClose size={20} />
              </Button>
            )}
          </div>

          <div className="body">
            {filter && <Lib.C.FiltersBox filter={filter} />}

            <div className="content">{children}</div>
          </div>
        </div>
      </Lib.S.PickUpContainer>
    </>
  )
}
