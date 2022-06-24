import { ChangeEvent } from 'react'
import * as Lib from '..'

export const useImagePicker = ({ imageInputRef }: Lib.T.UseImagePickerArgs) => {
  const pickImage = () => {
    const { current: imageInput } = imageInputRef
    console.log(imageInput)
  }

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt)
  }

  return { pickImage, onInputChange }
}
