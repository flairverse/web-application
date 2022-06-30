import { Str } from '@/helpers/string'
import { pageCreateNapAtoms } from '@/store/atoms'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useInserters = ({ boardRef }: Lib.T.UseInsertersArgs) => {
  const { compileDown } = Lib.H.useBoardCompileDown()
  const setShowMoreOptions = useSetRecoilState(pageCreateNapAtoms.showMoreOptions)
  const setGifPickupVisibility = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)
  const items = Lib.H.useDefinedItems()

  return class Insert {
    board: HTMLDivElement | null = null

    constructor() {
      this.board = boardRef.current
    }

    /**
     *
     *
     *
     * checks if a new item can be inserted or not (according to its limit)
     */
    canInsert(option: Lib.T.Options, focusLastWhenFalse: boolean = true): boolean {
      const { limit } = items.filter(item => item.key === option)[0]
      const existItems = Lib.HE.getFramesByType(boardRef, option)
      if (!existItems) {
        return true
      }
      const canInsert = existItems.length < limit

      if (!canInsert && focusLastWhenFalse) {
        existItems[existItems.length - 1].focus()
      }
      return canInsert
    }

    /**
     *
     *
     *
     * append the compiled item into the board
     */
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

    /**
     *
     *
     *
     * generates a new uniq id
     * TODO: check if the new generated ID doest not already exists in the board
     */
    makeID = (): string => {
      return Str.random(20, 'allLetters')
    }

    /**
     *
     *
     * makes new text item and passes it to the `appendItem`
     */
    newText(defaultValues?: Lib.T.Elements.Text) {
      if (!this.canInsert('text')) {
        return
      }

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
      if (!this.canInsert('post')) {
        return
      }

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
      if (!this.canInsert('mention')) {
        return
      }

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
      if (!this.canInsert('question')) {
        return
      }

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
      if (!this.canInsert('quiz')) {
        return
      }

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
      if (!this.canInsert('reminder')) {
        return
      }

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
      if (!this.canInsert('gif')) {
        return
      }

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

    /**
     *
     *
     * makes new gif item and passes it to the `appendItem`
     */
    newImage(imageURL: string, defaultValues?: Lib.T.Elements.Image) {
      if (!this.canInsert('image')) {
        return
      }

      const image: Lib.T.Elements.Image = defaultValues || {
        type: 'image',
        effect: 'no-effect',
        id: this.makeID(),
        position: { left: '85px', top: '85px' },
        rotate: 0,
        imageURL,
        imageWidth: '200px',
      }
      this.appendItem(image)
      setShowMoreOptions(false)
    }

    /**
     *
     *
     * makes new link item and passes it to the `appendItem`
     */
    newLink(defaultValues?: Lib.T.Elements.Link) {
      if (!this.canInsert('link')) {
        return
      }

      const link: Lib.T.Elements.Link = defaultValues || {
        type: 'link',
        id: this.makeID(),
        link: 'Type link text here...',
        position: { left: '85px', top: '85px' },
        rotate: 0,
        linkFontSize: '20px',
        effect: 'no-effect',
        href: 'https://example.com',
      }
      this.appendItem(link)
    }
  }
}
