import { DB } from 'database'
import { RefObject, useMemo } from 'react'
import * as Lib from '..'

export const useNapStorage = (boardRef: RefObject<HTMLDivElement>) => {
  const db = useMemo<DB>(() => new DB(), [])
  const { compileUp } = Lib.H.useBoardCompileUp(boardRef)

  // CRUD API for the nap storage
  return class NapStorage {
    static get isCreatorPage(): boolean {
      return window.location.href.includes('create-new/nap')
    }

    static async create(type: Exclude<Lib.T.ElementalOptions, 'reminder'>, elementInfo: Lib.T.Elements.All) {
      if (!(await db.getDraftedNapBoard()) || !NapStorage.isCreatorPage) {
        return
      }
      await db.addNewNapElement(type, elementInfo)
    }

    static async readAll() {
      if (!(await db.getDraftedNapBoard()) || !NapStorage.isCreatorPage) {
        return []
      }
      return await db.readAllNapElements()
    }

    static async update(element: HTMLDivElement) {
      if (!(await db.getDraftedNapBoard()) || !NapStorage.isCreatorPage) {
        return
      }
      const compiledElement = compileUp(element)
      if (!compiledElement) {
        return
      }
      await db.editExistingNapElement(compiledElement)
    }

    static async delete(element: HTMLDivElement) {
      if (!(await db.getDraftedNapBoard()) || !NapStorage.isCreatorPage) {
        return
      }
      const compiledElement = compileUp(element)
      if (!compiledElement) {
        return
      }
      db.deleteExistingElement(compiledElement)
    }
  }
}
