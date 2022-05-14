import { StoreKeys } from '@/types/recoil.type'
import { HTMLAttributes, ReactNode } from 'react'
import { BackDropProps } from '../../back-drop/lib/types'

export interface PickUpProps extends HTMLAttributes<HTMLDivElement> {
  visibility: boolean
  onClose?: () => void
  boxWidth?: string
  boxHeight?: string
  placeholder?: string
  backdrop?: Omit<BackDropProps, 'visibility'>
  cancelButton?: boolean
  searchBox: {
    storeKey: StoreKeys
    onChange?: (value: string) => void
    delay?: number
  }
  filter?: {
    content: ReactNode
    filters: Filter[]
    storeKey: StoreKeys
  }
}

export type Filter = {}

export interface FilterButtonProps extends Pick<Required<PickUpProps>, 'filter'> {
  filtersCount: number
}

export interface FiltersBoxProps extends Pick<Required<PickUpProps>, 'filter'> {}

export interface SearchBoxProps extends Pick<PickUpProps, 'placeholder'>, Pick<Required<PickUpProps>, 'searchBox'> {}
