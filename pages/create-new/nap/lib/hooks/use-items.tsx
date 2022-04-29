import { RefObject } from 'react'
import * as Lib from '../'
import { IconBaseProps } from 'react-icons'
import { MdFormatColorText } from 'react-icons/md'
import { BsFillImageFill, BsQuestionCircle, BsPlusSquare, BsChevronCompactUp } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { AiOutlineGif } from 'react-icons/ai'
import { GoMention } from 'react-icons/go'
import { IoFilmOutline } from 'react-icons/io5'
import { createNapAtoms } from '@/store/atoms'
import { useRecoilValue, useRecoilState } from 'recoil'
import { Str } from '@/helpers/string'
import { useEffect } from 'react'

export const useItems = ({ onOptionsClick, boardRef }: Pick<Lib.T.ItemsProps, 'onOptionsClick'> & { boardRef: RefObject<HTMLDivElement> }) => {
  const showMoreOptions = useRecoilValue(createNapAtoms.showMoreOptions)
  const [activeOption, setActiveOptions] = useRecoilState(createNapAtoms.activeOption)
  const { compileDown } = Lib.H.useBoardCompiler('mainBoard')

  const addItem = () => {
    switch (activeOption) {
      case 'text': {
        insertNewText()
        break
      }
    }
  }

  const insertNewText = () => {
    const text: Lib.T.Elements.Text = {
      type: 'text',
      id: Str.random(20),
      text: 'Type Something here...',
      color: 'var(--layer-2-text-3)',
      position: {
        left: '0',
        top: '0',
      },
      fontSize: 20,
    }
    appendItem(text)
  }

  const appendItem = (elementInfo: Lib.T.Elements.All) => {
    const board = boardRef.current
    if (!board) return
    const element = compileDown(elementInfo)
    board.appendChild(element)
  }

  const itemClicks = (key: Lib.T.Options) => {
    if (key === activeOption) {
      setActiveOptions('none')
    } else {
      onOptionsClick(key)
    }
  }

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

  useEffect(addItem, [activeOption])
  return {
    get: {
      items,
    },
    on: {
      itemClicks,
    },
  }
}
