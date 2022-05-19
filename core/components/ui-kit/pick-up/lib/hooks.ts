import { componentsAtoms } from '@/store/atoms'
import { FormEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { useDebounce } from '@/hooks/use-debounce'
import * as Lib from '.'

export const useSearchBox = ({ searchBox }: Pick<Lib.T.SearchBoxProps, 'searchBox'>) => {
  const { storeKey, delay, onChange } = searchBox
  const setQuery = useSetRecoilState(componentsAtoms.pickUpSearchQuery(storeKey))
  const debounce = useDebounce<string>({ callback: searchBox.onChange, delay: delay })

  const handleOnInput = (evt: FormEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget
    setQuery(value)

    if (onChange) {
      debounce(value)
    }
  }
  return { handleOnInput }
}
