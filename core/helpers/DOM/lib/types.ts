import { DateDetail } from '@/helpers/dates/lib/types'
import { RefObject } from 'react'

export type RefOrSelector = RefObject<HTMLElement> | string // aliased
export interface MakeElementDraggableArgs {
  element: HTMLElement
  areaSensitive?: MakeElementDraggableSensitive
  blackList?: string[]
}

export type MakeElementDraggableSensitive = {
  target: string
  sensitiveOnMove?: boolean
  sensitiveOnMoveEnd?: boolean
}

export type ScrollByDragTriggers = 'move' | 'start' | 'stop'

export interface ScrollByDragArgs {
  scrollable: HTMLElement
  type: 'all' | 'horizontal' | 'vertical'
  callback?: (scrollPosition: [number, number]) => void
  triggerCallbackOn?: (ScrollByDragTriggers | 'all')[]
}

export type TitleRefs = [RefOrSelector, RefOrSelector, RefOrSelector]
export type TriadCountdownRef = {
  firstLetter: RefOrSelector
  secondLetter: RefOrSelector
}
export type TriadCountdownRefs = [TriadCountdownRef, TriadCountdownRef, TriadCountdownRef]
export type QuerySelectorPrefix = '.' | '#'
export interface CreateTriadCountdownArgs {
  defaultValues: DateDetail
  triadRefs: TriadCountdownRefs
  titleRefs: TitleRefs
  containerRef: RefOrSelector
  querySelectorPrefixes?: {
    container?: QuerySelectorPrefix
    titlesAndTriad?: QuerySelectorPrefix
  }
}
