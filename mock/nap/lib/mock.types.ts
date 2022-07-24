import { NapModel } from '@/models/nap.model'
import { MockLib } from 'mock'

export type GenerateRandomNapsArgs = MockLib.T.DynamicRandom<Pick<NapModel, 'creator'>>
