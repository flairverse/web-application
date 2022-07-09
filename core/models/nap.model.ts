import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import { BaseModel } from './base-model'
import { UserModel } from './user.model'

export interface NapModel extends BaseModel, NapBoardModel {
  creator: UserModel
}

export interface NapBoardModel {
  boardSize: {
    width: number
    height: number
  }
  boardScale: number
  text: NapCreatorUIKitLib.T.Elements.Text[]
  post: NapCreatorUIKitLib.T.Elements.Post[]
  mention: NapCreatorUIKitLib.T.Elements.Mention[]
  question: NapCreatorUIKitLib.T.Elements.Question[]
  quiz: NapCreatorUIKitLib.T.Elements.Quiz[]
  reminder: NapCreatorUIKitLib.T.Elements.Reminder[]
  gif: NapCreatorUIKitLib.T.Elements.Gif[]
  image: NapCreatorUIKitLib.T.Elements.Image[]
  link: NapCreatorUIKitLib.T.Elements.Link[]
}
