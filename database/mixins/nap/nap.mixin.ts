import { NapCreatorUIKitLib } from '@/components/ui-kit/nap/creator'
import { DraftableCollection } from 'database/collections'
import {
  NapGifsDBModel,
  NapImagesDBModel,
  NapLinksDBModel,
  NapMentionsDBModel,
  NapPostsDBModel,
  NapQuestionsDBModel,
  NapQuizzesDBModel,
  NapRemindersDBModel,
  NapTextsDBModel,
} from 'database/models'
import { IndexableType, Table } from 'dexie'
import * as Lib from './lib'

const draftableCollection = DraftableCollection.use

export class NapMixin {
  gif: Table<NapGifsDBModel, IndexableType> = draftableCollection.napGifs
  image: Table<NapImagesDBModel, IndexableType> = draftableCollection.napImages
  link: Table<NapLinksDBModel, IndexableType> = draftableCollection.napLinks
  mention: Table<NapMentionsDBModel, IndexableType> = draftableCollection.napMentions
  post: Table<NapPostsDBModel, IndexableType> = draftableCollection.napPosts
  question: Table<NapQuestionsDBModel, IndexableType> = draftableCollection.napQuestions
  quiz: Table<NapQuizzesDBModel, IndexableType> = draftableCollection.napQuizzes
  reminder: Table<NapRemindersDBModel, IndexableType> = draftableCollection.napReminders
  text: Table<NapTextsDBModel, IndexableType> = draftableCollection.napTexts

  /**
   *
   *
   *
   * renames default id key of elements to elementID,
   * and assigns new key 'id' which is the auto generated id by indexedDB.
   * pass the second argument 'id' when you want to prepare element to put (not add).
   */
  private prepareNapElementToInsert(element: NapCreatorUIKitLib.T.Elements.All, id?: number) {
    // the idea behind casting TEXT to these stuff is to ignoring typescript checks (using the comment '@ts-ignore', is not a good idea at all)
    const _element = <Partial<NapCreatorUIKitLib.T.Elements.Text>>element
    const elementID = element.id!
    delete _element.id

    const preparedElement = {
      elementID,
      ...(<Omit<NapCreatorUIKitLib.T.Elements.Text, 'id'>>_element),
    }
    id && Object.assign(preparedElement, { id })
    return preparedElement
  }

  /**
   *
   *
   *
   * its the reverse implementation of the `prepareNapElementToInsert` private method
   */
  private prepareStoredNapElementToRead(storedNap: Lib.T.AllNapDBModels) {
    const _storedNap = <Partial<NapTextsDBModel>>storedNap
    const elementID = storedNap.elementID

    delete _storedNap.id
    delete _storedNap.elementID

    const element: NapCreatorUIKitLib.T.Elements.Text = {
      id: elementID,
      ...(<Omit<NapTextsDBModel, 'id' | 'elementID'>>_storedNap),
    }

    return element
  }

  /**
   *
   *
   *
   * insert new nap element into the nap storage
   */
  async addNewNapElement(elementType: NapCreatorUIKitLib.T.ElementalOptions, element: NapCreatorUIKitLib.T.Elements.All): Promise<this> {
    const _element = this.prepareNapElementToInsert(element)
    await (<typeof this.text>this[elementType]).add(_element)
    return this
  }

  /**
   *
   *
   *
   * find an existing nap element by its stringy elementID (not the autoIncremented id)
   */
  // async findNapElementByElementID(elementID: string, elementType: NapCreatorUIKitLib.T.ElementalOptions) {
  //   return await this[elementType].where('elementID').equals(elementID).distinct().first()
  // }
  async findNapElementInStorage(element: NapCreatorUIKitLib.T.Elements.All) {
    return await this[<NapCreatorUIKitLib.T.ElementalOptions>element.type].where('elementID').equals(element.id!).distinct().first()
  }

  /**
   *
   *
   *
   * edit an existing nap element
   */
  async editExistingNapElement(element: NapCreatorUIKitLib.T.Elements.All): Promise<this> {
    const { text } = this
    const elementType = <NapCreatorUIKitLib.T.ElementalOptions>element.type

    const foundElement = await this.findNapElementInStorage(element)
    if (!foundElement) {
      return this
    }

    const _element = this.prepareNapElementToInsert(element, foundElement.id)
    await (<typeof text>this[elementType]).put(_element)
    return this
  }

  /**
   *
   *
   *
   * delete an existing nap element
   */
  async deleteExistingElement(element: NapCreatorUIKitLib.T.Elements.All): Promise<this> {
    const foundElement = await this.findNapElementInStorage(element)
    if (!foundElement) {
      return this
    }

    const { type, id } = foundElement
    await this[type].delete(id!)
    return this
  }

  /**
   *
   *
   *
   * find and return all stored nap elements
   */
  async readAllNapElements() {
    const elements: NapCreatorUIKitLib.T.Elements.All[] = []

    for (const option of NapCreatorUIKitLib.CO.ELEMENTAL_OPTIONS) {
      await this[option].each(element => elements.push(this.prepareStoredNapElementToRead(element)))
    }

    return elements
  }
}
