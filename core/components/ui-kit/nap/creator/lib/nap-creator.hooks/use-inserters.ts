import { Str } from '@/helpers/string'
import { pageCreateNapAtoms } from '@/store/atoms'
import { RefObject } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useInserters = (boardRef: RefObject<HTMLDivElement>) => {
  const { compileDown } = Lib.H.useBoardCompileDown('mainBoard')
  const setShowMoreOptions = useSetRecoilState(pageCreateNapAtoms.showMoreOptions)
  const setGifPickupVisibility = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)

  return class Insert {
    board: HTMLDivElement | null = null

    constructor(_boardRef: RefObject<HTMLDivElement>) {
      this.board = _boardRef.current
    }

    appendItem(elementInfo: Lib.T.Elements.All) {
      if (!this.board) {
        console.log('!this.board')
        return
      }
      const element = compileDown(elementInfo)
      this.board.appendChild(element)
      Lib.HE.changeFrameScale(boardRef, element)
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
    newText(defaultValues?: Lib.T.Elements.Text) {
      const text: Lib.T.Elements.Text = defaultValues || {
        type: 'text',
        id: this.makeID(),
        text: 'Type Something here...',
        position: { left: '85px', top: '85px' },
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
    newPost(id: number, defaultValues?: Lib.T.Elements.Post) {
      const post: Lib.T.Elements.Post = defaultValues || {
        type: 'post',
        effect: 'no-effect',
        id: this.makeID(),
        position: { left: '85px', top: '85px' },
        rotate: 0,
        user: {
          fullName: 'HamidReza Qafoori',
          job: 'Computer engineering',
          profile: '/removal/profile.jpg',
          hasNap: true,
          seen: false,
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
      setShowMoreOptions(false)
      this.appendItem(post)
    }

    /**
     *
     *
     * makes new mention item and passes it to the `appendItem`
     */
    newMention(id: number, defaultValues?: Lib.T.Elements.Mention) {
      const mention: Lib.T.Elements.Mention = defaultValues || {
        type: 'mention',
        effect: 'no-effect',
        id: this.makeID(),
        position: { left: '85px', top: '85px' },
        rotate: 0,
        fullName: 'HamidReza Qafoori',
        userID: id,
        username: 'qafoori',
        job: 'Computer Engineering',
        profile: '/removal/profile.jpg',
        hasNap: true,
        seen: false,
        followers: 66757757,
        subscribes: 654654648678,
      }
      setShowMoreOptions(false)
      this.appendItem(mention)
    }

    /**
     *
     *
     * makes new question item and passes it to the `appendItem`
     */
    newQuestion(defaultValues?: Lib.T.Elements.Question) {
      const question: Lib.T.Elements.Question = defaultValues || {
        type: 'question',
        effect: 'no-effect',
        id: this.makeID(),
        position: { left: '85px', top: '85px' },
        rotate: 0,
        hint: '',
        question: '',
        questionerUser: {
          hasNap: true,
          profile: '/removal/profile.jpg',
          seen: false,
        },
      }
      this.appendItem(question)
    }

    /**
     *
     *
     * makes new quiz item and passes it to the `appendItem`
     */
    newQuiz(defaultValues?: Lib.T.Elements.Quiz) {
      const quiz: Lib.T.Elements.Quiz = defaultValues || {
        type: 'quiz',
        effect: 'no-effect',
        id: this.makeID(),
        position: { left: '85px', top: '85px' },
        rotate: 0,
        hintText: '',
        questionText: '',
        answers: ['', '', '', ''],
        correctAnswer: 0,
        questioner: {
          hasNap: true,
          profile: '/removal/profile.jpg',
          seen: false,
        },
      }
      this.appendItem(quiz)
    }

    /**
     *
     *
     * makes new reminder item and passes it to the `appendItem`
     */
    newReminder(defaultValues?: Lib.T.Elements.Reminder) {
      const { minimumDate, maximumDate } = Lib.HE.getReminderInitialTime()

      const reminder: Lib.T.Elements.Reminder = defaultValues || {
        type: 'reminder',
        effect: 'no-effect',
        id: this.makeID(),
        position: { left: '85px', top: '85px' },
        rotate: 0,
        reminderName: '',
        endTime: new Date().toISOString(),
      }
      this.appendItem(reminder)
    }

    /**
     *
     *
     * makes new gif item and passes it to the `appendItem`
     */
    newGif(gifURL: string, defaultValues?: Lib.T.Elements.Gif) {
      const gif: Lib.T.Elements.Gif = defaultValues || {
        type: 'gif',
        effect: 'no-effect',
        id: this.makeID(),
        position: { left: '85px', top: '85px' },
        rotate: 0,
        gifURL,
        gifWidth: '200px',
      }
      this.appendItem(gif)
      setShowMoreOptions(false)
      setGifPickupVisibility(false)
    }
  }
}
