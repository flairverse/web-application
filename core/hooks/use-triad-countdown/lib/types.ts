import { DateDetail } from '@/helpers/dates/lib/types'
import { RefObject } from 'react'

export interface UseTriadCountdownArgs {
  defaultValues: DateDetail
  triadRefs: TriadCountdownRefs
}

export type TriadCountdownRefs = [RefObject<HTMLElement>, RefObject<HTMLElement>, RefObject<HTMLElement>]
