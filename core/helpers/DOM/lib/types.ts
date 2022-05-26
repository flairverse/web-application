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
