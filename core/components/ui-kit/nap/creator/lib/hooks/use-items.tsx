import * as Lib from '../'
import { MdFormatColorText } from 'react-icons/md'
import { BsFillImageFill, BsQuestionCircle, BsPlusSquare, BsChevronCompactLeft } from 'react-icons/bs'
import { FiBell, FiLink2 } from 'react-icons/fi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { AiOutlineGif, AiOutlineMessage } from 'react-icons/ai'
import { GoMention } from 'react-icons/go'
import { createNapAtoms } from '@/store/atoms'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'

export const useItems = ({ onOptionsClick, boardRef }: Pick<Lib.T.ItemsProps, 'boardRef' | 'onOptionsClick'>) => {
  const showMoreOptions = useRecoilValue(createNapAtoms.showMoreOptions)
  const [activeOption, setActiveOptions] = useRecoilState(createNapAtoms.activeOption)
  const setActiveItemID = useSetRecoilState(createNapAtoms.activeItemID)
  const Insert = Lib.H.useInserters(boardRef)

  useEffect(() => {
    // new Insert(boardRef).newText()
    // new Insert(boardRef).newPost(0)
    // new Insert(boardRef).newMention(0)
    // new Insert(boardRef).newQuestion()
    new Insert(boardRef).newReminder()
  }, [])

  const addItem = () => {
    const insert = new Insert(boardRef)

    if (activeOption !== 'none' && !Lib.HE.boardContains(activeOption, boardRef)) {
      switch (activeOption) {
        case 'text': {
          insert.newText()
          break
        }

        case 'question': {
          insert.newQuestion()
          break
        }

        case 'quiz': {
          insert.newQuiz()
          break
        }

        case 'reminder': {
          insert.newReminder()
          break
        }
      }
    }

    return () => {
      setActiveItemID(null)
    }
  }

  const itemClicks = (key: Lib.T.Options) => {
    if (key === activeOption) {
      setActiveOptions('none')
    } else {
      onOptionsClick(key)
    }
  }

  const items: Lib.T.Item[] = [
    {
      Icon: MdFormatColorText,
      title: 'Text',
      key: 'text',
    },
    {
      Icon: BsPlusSquare,
      title: 'Post',
      key: 'post',
    },
    {
      Icon: GoMention,
      title: 'Mention',
      key: 'mention',
    },
    {
      Icon: AiOutlineMessage,
      title: 'Question',
      key: 'question',
    },
    // {
    //   Icon: HiOutlineChatAlt2,
    //   title: 'Discussion',
    //   key: 'discussion',
    // },
    {
      Icon: BsQuestionCircle,
      title: 'Quiz',
      key: 'quiz',
    },
    {
      Icon: FiBell,
      title: 'Reminder',
      key: 'reminder',
    },
    {
      Icon: AiOutlineGif,
      title: 'GIF',
      key: 'gif',
    },
    {
      Icon: BsFillImageFill,
      title: 'Image',
      key: 'image',
    },
    {
      Icon: FiLink2,
      title: 'Link',
      key: 'link',
    },
    {
      Icon: BsChevronCompactLeft,
      title: showMoreOptions ? 'Less' : 'More',
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
