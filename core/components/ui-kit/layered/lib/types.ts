import { HTMLAttributes, ReactNode } from 'react'
import { StoreKeys } from '@/types/recoil.type'

/**
 *
 *
 * Layered
 */
export type Layer = {
  node: ReactNode
  title?: string
}
export interface LayeredProps extends HTMLAttributes<HTMLDivElement> {
  layers: Layer[]
  withHeader?: boolean
  storeKeys: {
    activeLayer: StoreKeys
  }
}

/**
 *
 *
 * Layer
 */
export interface LayerProps extends Pick<LayeredProps, 'storeKeys' | 'layers' | 'withHeader' | 'title'> {}
export interface UseLayerArgs extends Pick<LayerProps, 'storeKeys'> {}
