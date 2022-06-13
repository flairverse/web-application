import { FC } from 'react'
import * as Lib from '.'
import { Button } from 'antd'
import { HiOutlineChevronLeft } from 'react-icons/hi'

export const Layer: FC<Lib.T.LayerProps> = ({ storeKeys, layers, withHeader }) => {
  const { activeLayer, closeLayer } = Lib.H.useLayer({ storeKeys })

  return (
    <Lib.S.Layer className={`${activeLayer !== null} layer`} withHeader={withHeader}>
      {activeLayer !== null && (
        <>
          {withHeader && (
            <div className="header">
              <Button onClick={closeLayer}>
                <HiOutlineChevronLeft color="var(--layer-2-text-2)" size={18} />
              </Button>

              {layers[activeLayer].title && <h6>{layers[activeLayer].title}</h6>}
            </div>
          )}

          <div className="body">{layers[activeLayer].node}</div>
        </>
      )}
    </Lib.S.Layer>
  )
}
