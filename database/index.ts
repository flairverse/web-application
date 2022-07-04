import { mix } from 'ts-mixer'
import { AlertMixin, DraftSettingsMixin, NapMixin } from './mixins'

/**
 *
 *
 *
 * This is not an online DB
 * It uses IndexedDB to store users data asynchronously
 */
interface AllMixins extends NapMixin, DraftSettingsMixin, AlertMixin {}

@mix(NapMixin, DraftSettingsMixin, AlertMixin)
export class DB implements AllMixins {}
export interface DB extends AllMixins {}
