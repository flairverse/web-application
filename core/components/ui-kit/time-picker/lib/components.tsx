import { FC, useRef } from 'react'
import * as Lib from '.'
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import { componentsAtoms } from '@/store/atoms'

export const Column: FC<Lib.T.ColumnProps> = ({ title, prefixes, valuesStoreKey, minimumDate, rangeStoreKey, maximumDate, type, columnsStoreKeys, ranges }) => {
  const scrollableRef = useRef<HTMLUListElement>(null)
  const { scrollDown, scrollUp } = Lib.H.useColumn({ scrollableRef, ranges, prefixes, valuesStoreKey, minimumDate, rangeStoreKey, maximumDate, type, columnsStoreKeys })
  const ranged = useRecoilValue(componentsAtoms.timePickerColumnsRange(rangeStoreKey))

  return (
    <Lib.S.ColumnContainer>
      <h6>{title}</h6>

      <span onClick={scrollUp}>
        <IoChevronUpOutline color="var(--layer-2-text-3)" size={18} />
      </span>

      <ul className="noScrollbar" ref={scrollableRef}>
        {ranged.map((item, index) => (
          <li className={`${index === 0 ? 'active' : ''}`} key={index}>
            {item.full}
          </li>
        ))}
      </ul>

      <span onClick={scrollDown}>
        <IoChevronDownOutline color="var(--layer-2-text-3)" size={18} />
      </span>
    </Lib.S.ColumnContainer>
  )
}

export const Info: FC<Lib.T.InfoProps> = ({ valuesStoreKey, minimumDate }) => {
  const { get } = Lib.H.useInfo({ valuesStoreKey, minimumDate })
  return <Lib.S.Info>Ends in {get.info}</Lib.S.Info>
}
