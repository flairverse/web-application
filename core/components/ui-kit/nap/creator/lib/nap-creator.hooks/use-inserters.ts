import { componentNapCreatorAtomFamilies } from '@/store'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useInserters = ({ boardRef, storeKeys }: Lib.T.UseInsertersArgs) => {
  const { compileDown } = Lib.H.useBoardCompileDown({ boardRef, storeKeys })
  const setShowMoreOptions = useSetRecoilState(componentNapCreatorAtomFamilies.showMoreOptions(storeKeys.showMoreOptions))
  const setGifPickupVisibility = useSetRecoilState(componentNapCreatorAtomFamilies.giphyPickUp(storeKeys.popups.giphy))
  const items = Lib.H.useDefinedItems({ storeKeys })
  const NapStorage = Lib.H.useNapStorage(boardRef)
  const dummyTexts = Lib.H.useDummyTexts()

  return class Insert {
    board: HTMLDivElement | null = null

    constructor() {
      this.board = boardRef.current
    }

    /**
     *
     *
     * insert an element of type of any options
     */
    newAny(element: Lib.T.Elements.All): void {
      const insert = new Insert()

      switch (element.type) {
        case 'text': {
          insert.newText(<Lib.T.Elements.Text>element, false)
          break
        }

        case 'post': {
          insert.newPost(-1, <Lib.T.Elements.Post>element, false)
          break
        }

        case 'mention': {
          insert.newMention(-1, <Lib.T.Elements.Mention>element, false)
          break
        }

        case 'question': {
          insert.newQuestion(<Lib.T.Elements.Question>element, false)
          break
        }

        case 'quiz': {
          insert.newQuiz(<Lib.T.Elements.Quiz>element, false)
          break
        }

        case 'reminder': {
          insert.newReminder(<Lib.T.Elements.Reminder>element)
          break
        }

        case 'gif': {
          insert.newGif('', <Lib.T.Elements.Gif>element, false)
          break
        }

        case 'image': {
          insert.newImage('', <Lib.T.Elements.Image>element, false)
          break
        }

        case 'link': {
          insert.newLink(<Lib.T.Elements.Link>element, false)
          break
        }

        default: {
          throw new Error('Case not implemented')
        }
      }
    }

    /**
     *
     *
     *
     * insert a bunch of any element
     */
    bulkNewAny(elements: Lib.T.Elements.All[]): void {
      elements.forEach(this.newAny)
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
    async appendItem(elementInfo: Lib.T.Elements.All, pushToDB = true) {
      if (!this.board) {
        return
      }
      const element = compileDown(elementInfo)
      this.board.appendChild(element)
      Lib.HE.changeFrameScale(boardRef, element)
      element.focus()

      if (pushToDB) {
        await NapStorage.create(<Exclude<Lib.T.ElementalOptions, 'reminder'>>elementInfo.type, elementInfo)
      }
    }

    /**
     *
     *
     *
     * generates a new uniq id
     * TODO: check if the new generated ID doest not already exists in the board
     */
    makeID = (): string => {
      return Lib.HE.makeElementID()
    }

    /**
     *
     *
     * makes new text item and passes it to the `appendItem`
     */
    newText(defaultValues?: Lib.T.Elements.Text, pushToDB = true) {
      if (!this.canInsert('text')) {
        return
      }

      const text: Lib.T.Elements.Text = defaultValues || {
        type: 'text',
        id: this.makeID(),
        text: dummyTexts.text.defaultText,
        position: { left: '85px', top: '85px' },
        rotate: 0,
        fontSize: '20px',
        effect: 'no-effect',
      }
      this.appendItem(text, pushToDB)
    }

    /**
     *
     *
     * makes new post item and passes it to the `appendItem`
     */
    newPost(id: number, defaultValues?: Lib.T.Elements.Post, pushToDB = true) {
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
      this.appendItem(post, pushToDB)
    }

    /**
     *
     *
     * makes new mention item and passes it to the `appendItem`
     */
    newMention(id: number, defaultValues?: Lib.T.Elements.Mention, pushToDB = true) {
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
      this.appendItem(mention, pushToDB)
    }

    /**
     *
     *
     * makes new question item and passes it to the `appendItem`
     */
    newQuestion(defaultValues?: Lib.T.Elements.Question, pushToDB = true) {
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
        hintEnabled: true,
        questionerUser: {
          hasNap: true,
          profile: '/removal/profile.jpg',
          seen: false,
        },
      }
      this.appendItem(question, pushToDB)
    }

    /**
     *
     *
     * makes new quiz item and passes it to the `appendItem`
     */
    newQuiz(defaultValues?: Lib.T.Elements.Quiz, pushToDB = true) {
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
        hintTextEnabled: true,
        questioner: {
          hasNap: true,
          profile: '/removal/profile.jpg',
          seen: false,
        },
      }
      this.appendItem(quiz, pushToDB)
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
        endTime: Lib.HE.getReminderInitialTime().minimumDate.toISOString(),
      }
      this.appendItem(reminder, false)
    }

    /**
     *
     *
     * makes new gif item and passes it to the `appendItem`
     */
    newGif(gifURL: string, defaultValues?: Lib.T.Elements.Gif, pushToDB = true) {
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
      this.appendItem(gif, pushToDB)
      setShowMoreOptions(false)
      setGifPickupVisibility(false)
    }

    /**
     *
     *
     * makes new gif item and passes it to the `appendItem`
     */
    newImage(imageURL: string, defaultValues?: Lib.T.Elements.Image, pushToDB = true) {
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
      this.appendItem(image, pushToDB)
      setShowMoreOptions(false)
    }

    /**
     *
     *
     * makes new link item and passes it to the `appendItem`
     */
    newLink(defaultValues?: Lib.T.Elements.Link, pushToDB = true) {
      if (!this.canInsert('link')) {
        return
      }

      const link: Lib.T.Elements.Link = defaultValues || {
        type: 'link',
        id: this.makeID(),
        link: dummyTexts.link.defaultText,
        position: { left: '85px', top: '85px' },
        rotate: 0,
        linkFontSize: '20px',
        effect: 'no-effect',
        href: dummyTexts.link.defaultLink,
      }
      this.appendItem(link, pushToDB)
    }
  }
}
