import { Num } from '../number'
import * as Lib from './lib'

export class Img {
  /**
   *
   *
   *
   *
   * generates random image as for placeholders
   */
  static random(width?: number, height?: number) {
    const w = width || Num.random(300, 700)
    const h = height || Num.random(300, 700)

    return `https://picsum.photos/${w}/${h}`
  }

  /**
   *
   *
   *
   *
   * converts an image file to base64 date url (get image file from and input element with type of file)
   */
  static async toBase64(imageFile: File, onError?: (error: ProgressEvent<FileReader>) => void) {
    const toBase64 = (): Promise<string | null> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onload = () => resolve(<string | null>reader.result)
        reader.onerror = reject
      })
    }

    try {
      return await toBase64()
    } catch (error) {
      onError?.(error as ProgressEvent<FileReader>)
      return null
    }
  }

  /**
   *
   *
   *
   *
   * convert a base64 date url to an image element
   */
  static async base64ToImage(base64: string, onError?: (error?: Error) => void): Promise<HTMLImageElement | null> {
    const getImage = (): Promise<HTMLImageElement | null> => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = base64
        image.onload = () => resolve(image)
        image.onerror = (_0, _1, _2, _3, error) => reject(error)
      })
    }

    try {
      return await getImage()
    } catch (error) {
      onError?.(error as Error | undefined)
      return null
    }
  }

  /**
   *
   *
   *
   *
   * returns the actual size of and image (image could be a base64 data url or a file)
   */
  static async getSizes(image: File | string, onError?: (error?: Error | undefined | ProgressEvent<FileReader>) => void) {
    const base64Image = typeof image === 'string' ? image : await Img.toBase64(image, onError)
    if (!base64Image) {
      return null
    }

    const getSizes = (): Promise<Lib.T.ImageSizes | null> => {
      return new Promise(function (resolve, reject) {
        const image = new Image()
        image.onload = () => resolve(image)
        image.onerror = (_0, _1, _2, _3, error) => reject(error)
        image.src = base64Image
      })
    }

    try {
      return await getSizes()
    } catch (error) {
      onError?.(error as Error | undefined)
      return null
    }
  }

  /**
   *
   *
   *
   *
   * it's a helper for the Img.decreaseSize static method
   * helps to calculate the new width and height of the given image on that method
   */
  private static calculateSize(defaultWidth: number, defaultHeight: number, scaleOrCustom: Lib.T.ResizeOptions): Lib.T.ImageSizes {
    const { newSizeOrScale, sizeOrScale, target } = scaleOrCustom
    let width = defaultWidth
    let height = defaultHeight

    switch (sizeOrScale) {
      case 'scale': {
        width = defaultWidth / newSizeOrScale
        height = defaultHeight / newSizeOrScale
        break
      }

      case 'size': {
        if (target === 'width') {
          if (defaultWidth > newSizeOrScale) {
            width = newSizeOrScale
            height = (defaultHeight * newSizeOrScale) / defaultWidth
          }
        } else {
          if (defaultHeight > newSizeOrScale) {
            height = newSizeOrScale
            width = (defaultWidth * newSizeOrScale) / defaultHeight
          }
        }
        break
      }
    }

    return { width, height }
  }

  /**
   *
   *
   *
   *
   * resizes an image (image could be a base64 data url or a file)
   */
  static async resize(
    image: File | string,
    scaleOrCustom: Lib.T.ResizeOptions = {
      newSizeOrScale: 0.5,
      sizeOrScale: 'scale',
      target: 'width',
    },
    onError?: (error?: ProgressEvent<FileReader> | Error) => void,
  ) {
    const resize = async (): Promise<string | null> => {
      return new Promise(async (resolve, reject) => {
        const _image = typeof image === 'string' ? image : await Img.toBase64(image, reject)
        if (!_image) return null

        const sizes = await Img.getSizes(_image, reject)
        if (!sizes) return

        const { width: defaultWidth, height: defaultHeight } = sizes
        const { width: newWidth, height: newHeight } = Img.calculateSize(defaultWidth, defaultHeight, scaleOrCustom)
        const canvas = document.createElement('canvas')

        canvas.width = newWidth
        canvas.height = newHeight

        const context = canvas.getContext('2d')
        if (!context) return

        const img = await Img.base64ToImage(_image, reject)
        if (!img) return

        context.drawImage(img, 0, 0, newWidth, newHeight)
        resolve(canvas.toDataURL())
      })
    }

    try {
      return await resize()
    } catch (error) {
      onError?.(error as ProgressEvent<FileReader> | Error)
      return null
    }
  }
}
