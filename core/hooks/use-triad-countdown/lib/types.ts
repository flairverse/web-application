import { DateDetail } from '@/helpers/dates/lib/types'
import { RefObject } from 'react'

type Ref = RefObject<HTMLElement> // aliased

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
}
