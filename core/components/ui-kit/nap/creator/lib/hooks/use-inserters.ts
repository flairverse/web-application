import * as Lib from '../'
import { Str } from '@/helpers/string'
import { RefObject } from 'react'
import * as mock from 'mock'

export const useInserters = () => {
  const { compileDown } = Lib.H.useBoardCompiler('mainBoard')

  return class Insert {
    board: HTMLDivElement | null = null

    constructor(_boardRef: RefObject<HTMLDivElement>) {
      this.board = _boardRef.current
    }

    appendItem(elementInfo: Lib.T.Elements.All) {
      if (!this.board) {
        return
      }
      const element = compileDown(elementInfo)
      this.board.appendChild(element)
      element.focus()
    }

    makeID = (): string => {
      return Str.random(20, 'allLetters')
    }

    /**
     *
     *
     * makes new text item and passes it to the `appendItem`
     */
    newText() {
      const text: Lib.T.Elements.Text = {
        type: 'text',
        id: this.makeID(),
        text: 'Type Something here...',
        position: { left: '20px', top: '20px' },
        rotate: 0,
        fontSize: '20px',
        effect: 'no-effect',
      }
      this.appendItem(text)
    }

    /**
     *
     *
     * makes new post item and passes it to the `appendItem`
     */
    newPost(id: number) {
      const post: Lib.T.Elements.Post = {
        type: 'post',
        style: 'no-effect',
        id: this.makeID(),
        position: { left: '40px', top: '40px' },
        rotate: 0,
        user: {
          fullName: 'HamidReza Qafoori',
          job: 'Computer engineering',
          profile: '/removal/profile.jpg',
        },
        post: {
          id,
          title: 'How To Manage You Time And Get More Done? Is It Really Helps You To be More Careful aAbout Times?',
          cover: '/removal/1.jpg',
          day: '08',
          month: 'May',
          year: '2018',
          summary: 'It may not possible to squeeze more time in the day without sacrificing sleep. So how do you achieve It',
          topic: 'article',
          timeToRead: 55,
          comments: 6545454564,
          likes: 465465,
          paymentRequired: true,
        },
      }
      this.appendItem(post)
    }
  }
}
