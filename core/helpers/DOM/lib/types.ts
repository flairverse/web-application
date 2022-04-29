export interface MakeElementDraggableArgs {
  element: HTMLElement
  areaSensitive?: MakeElementDraggableSensitive
}

export type MakeElementDraggableSensitive = {
  target: string
  sensitiveOnMove?: boolean
  sensitiveOnMoveEnd?: boolean
}
