import { BaseModel } from './base-model'
import { NapModel } from './nap.model'

export interface UserModel extends BaseModel {
  username: string
  job: string
  profileImage: string
  firstName: string
  lastName: string
  naps: NapModel[]
}
