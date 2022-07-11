import { FC } from 'react'
import { HiChevronRight } from 'react-icons/hi'
import * as Lib from '.'

export const NapGroup: FC<Lib.T.NapGroupProps> = ({ active, naps, afterActive, beforeActive }) => {
  const { classNames } = Lib.H.useNapGroup({ active, naps, afterActive, beforeActive })
  return <Lib.S.NapGroup className={classNames}></Lib.S.NapGroup>
}

export const NavigateButton: FC<Lib.T.NavigateButtonProps> = ({ role, onClick }) => {
  return (
    <Lib.S.NavigateButton className={role} onClick={onClick}>
      <HiChevronRight size={30} color="var(--layer-2-text-2)" />
    </Lib.S.NavigateButton>
  )
}
