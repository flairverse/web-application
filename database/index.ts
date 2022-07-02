import { mix } from 'ts-mixer'
import { NapMixin } from './mixins'

/**
 *
 *
 *
 * This is not an online DB
 * It uses IndexedDB to store users data asynchronously
 */
interface AllMixins extends NapMixin {}

@mix(NapMixin)
export class DB implements AllMixins {}
export interface DB extends AllMixins {}
