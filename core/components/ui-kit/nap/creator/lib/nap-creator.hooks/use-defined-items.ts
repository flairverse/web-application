import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineGif, AiOutlineMessage } from 'react-icons/ai'
import { BsChevronCompactLeft, BsFillImageFill, BsPlusSquare, BsQuestionCircle } from 'react-icons/bs'
import { FiBell, FiLink2 } from 'react-icons/fi'
import { GoMention } from 'react-icons/go'
import { MdFormatColorText } from 'react-icons/md'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useDefinedItems = () => {
  const showMoreOptions = useRecoilValue(pageCreateNapAtoms.showMoreOptions)

  const items: Lib.T.Item[] = [
    {
      Icon: MdFormatColorText,
      title: 'Text',
      key: 'text',
      limit: 50,
    },
    {
      Icon: BsPlusSquare,
      title: 'Post',
      key: 'post',
      limit: 1,
    },
    {
      Icon: GoMention,
      title: 'Mention',
      key: 'mention',
      limit: 50,
    },
    {
      Icon: AiOutlineMessage,
      title: 'Question',
      key: 'question',
      limit: 1,
    },
    {
      Icon: BsQuestionCircle,
      title: 'Quiz',
      key: 'quiz',
      limit: 1,
    },
    {
      Icon: FiBell,
      title: 'Reminder',
      key: 'reminder',
      limit: 1,
    },
    {
      Icon: AiOutlineGif,
      title: 'GIF',
      key: 'gif',
      limit: 5,
    },
    {
      Icon: BsFillImageFill,
      title: 'Image',
      key: 'image',
      limit: 5,
    },
    {
      Icon: FiLink2,
      title: 'Link',
      key: 'link',
      limit: 50,
    },
    {
      Icon: BsChevronCompactLeft,
      title: showMoreOptions ? 'Less' : 'More',
      key: 'more|less',
      limit: Infinity,
    },
  ]

  return items
}
