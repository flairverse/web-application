import * as Lib from '.'
import { IconBaseProps } from 'react-icons'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { MdFormatColorText } from 'react-icons/md'
import { BsFillImageFill, BsQuestionCircle, BsPlusSquare } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { AiOutlineGif } from 'react-icons/ai'
import { GoMention } from 'react-icons/go'
import { IoFilmOutline } from 'react-icons/io5'

export const useCreateNewNapPage = () => {
  const itemsIconProps: IconBaseProps = {
    color: 'var(--layer-2-text-3)',
    size: 30,
  }

  const items: Lib.T.Item[] = [
    {
      active: false,
      icon: <MdFormatColorText {...itemsIconProps} />,
      title: 'Add text',
    },
    {
      active: false,
      icon: <BsFillImageFill {...itemsIconProps} />,
      title: 'Add image',
    },
    {
      active: false,
      icon: <AiOutlineGif {...itemsIconProps} />,
      title: 'Add GIF',
    },
    {
      active: false,
      icon: <HiOutlineChatAlt2 {...itemsIconProps} />,
      title: 'Add question',
    },
    {
      active: false,
      icon: <FiBell {...itemsIconProps} />,
      title: 'Add timer',
    },
    {
      active: false,
      icon: <BsQuestionCircle {...itemsIconProps} />,
      title: 'Add timer',
    },
    {
      active: false,
      icon: <BsPlusSquare {...itemsIconProps} />,
      title: 'Add timer',
    },
    {
      active: false,
      icon: <GoMention {...itemsIconProps} />,
      title: 'Add timer',
    },
    {
      active: false,
      icon: <IoFilmOutline {...itemsIconProps} />,
      title: 'Add timer',
    },
  ]

  return {
    get: {
      items,
    },
  }
}
