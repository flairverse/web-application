import * as Lib from '.'
import { IconBaseProps } from 'react-icons'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { MdFormatColorText } from 'react-icons/md'
import { BsFillImageFill, BsQuestionCircle, BsPlusSquare, BsChevronCompactUp } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { AiOutlineGif } from 'react-icons/ai'
import { GoMention } from 'react-icons/go'
import { IoFilmOutline } from 'react-icons/io5'
import { createNapAtoms } from '@/store/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'

export const useCreateNewNapPage = () => {
  const setShowMoreOptions = useSetRecoilState(createNapAtoms.showMoreOptions)
  const setActiveOption = useSetRecoilState(createNapAtoms.activeOption)

  const optionsClick = (key: Lib.T.Options) => {
    switch (key) {
      case 'more|less': {
        setShowMoreOptions(_ => !_)
        break
      }
      default: {
        setActiveOption(key)
        setShowMoreOptions(false)
      }
    }
  }

  return {
    on: {
      optionsClick,
    },
  }
}

export const useItems = () => {
  const showMoreOptions = useRecoilValue(createNapAtoms.showMoreOptions)

  const itemsIconProps: IconBaseProps = {
    color: 'var(--layer-2-text-3)',
    size: 30,
  }

  const items: Lib.T.Item[] = [
    {
      icon: <MdFormatColorText {...itemsIconProps} />,
      title: 'Insert some texts',
      key: 'text',
    },
    {
      icon: <BsPlusSquare {...itemsIconProps} />,
      title: 'Explore & add a post',
      key: 'post',
    },
    {
      icon: <GoMention {...itemsIconProps} />,
      title: 'Mention a friend',
      key: 'mention',
    },
    {
      icon: <HiOutlineChatAlt2 {...itemsIconProps} />,
      title: 'Ask a question',
      key: 'question',
    },
    {
      icon: <BsQuestionCircle {...itemsIconProps} />,
      title: 'Take a quiz',
      key: 'quiz',
    },
    {
      icon: <FiBell {...itemsIconProps} />,
      title: 'Add a reminder',
      key: 'reminder',
    },
    {
      icon: <AiOutlineGif {...itemsIconProps} />,
      title: 'Explore & add GIFs',
      key: 'gif',
    },
    {
      icon: <BsFillImageFill {...itemsIconProps} />,
      title: 'Attache an image',
      key: 'image',
    },
    {
      icon: <IoFilmOutline {...itemsIconProps} />,
      title: 'Attach a video',
      key: 'video',
    },
    {
      icon: <BsChevronCompactUp {...itemsIconProps} />,
      title: showMoreOptions ? 'Show Less' : 'Show More',
      key: 'more|less',
    },
  ]

  return {
    get: {
      items,
    },
  }
}
