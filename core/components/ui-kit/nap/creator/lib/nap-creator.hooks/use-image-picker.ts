import { Img } from '@/helpers/image'
import { ChangeEvent } from 'react'
import * as Lib from '..'

export const useImagePicker = ({ imageInputRef, boardRef }: Lib.T.UseImagePickerArgs) => {
  const Inserter = Lib.H.useInserters({ boardRef })
  const insert = new Inserter()

  const pickImage = () => {
    const { current: imageInput } = imageInputRef
    if (!imageInput) return
    imageInput.click()
  }

  const onInputChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    const image = evt.target.files?.[0]
    evt.target.value = ''
    if (!image) return

    const resized = await Img.resize(
      image,
      {
        newSizeOrScale: 300,
        sizeOrScale: 'size',
        target: 'width',
      },
      console.error,
    )
    if (!resized) return

    insert.newImage(resized)
  }

  return { pickImage, onInputChange }
}
