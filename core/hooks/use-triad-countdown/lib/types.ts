import { DateDetail } from '@/helpers/dates/lib/types'
import { RefObject } from 'react'

export type Ref = RefObject<HTMLElement> | string // aliased

export type TriadCountdownRef = {
  firstLetter: Ref
  secondLetter: Ref
}

export type TriadCountdownRefs = [TriadCountdownRef, TriadCountdownRef, TriadCountdownRef]

export type TitleRefs = [Ref, Ref, Ref]

export interface UseTriadCountdownArgs {
  defaultValues: DateDetail
  triadRefs: TriadCountdownRefs
  titleRefs: TitleRefs
  containerRef: Ref
}

export type RefsState = {
  first1: HTMLElement | null
  first2: HTMLElement | null
  second1: HTMLElement | null
  second2: HTMLElement | null
  third1: HTMLElement | null
  third2: HTMLElement | null
  title1: HTMLElement | null
  title2: HTMLElement | null
  title3: HTMLElement | null
}
