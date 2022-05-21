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
