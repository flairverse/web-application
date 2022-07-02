import { DB } from 'database'
import { RefObject, useMemo } from 'react'
import * as Lib from '..'

export const useNapStorage = (boardRef: RefObject<HTMLDivElement>) => {
  const db = useMemo<DB>(() => new DB(), [])
  const { compileUp } = Lib.H.useBoardCompileUp(boardRef)

  // CRUD API for the nap storage
  return class NapStorage {
    static create(type: Lib.T.ElementalOptions, elementInfo: Lib.T.Elements.All) {
      db.addNewNapElement(type, elementInfo)
    }

    static async readAll() {
      return await db.readAllNapElements()
    }

    static async update(element: HTMLDivElement) {
      const compiledElement = compileUp(element)
      if (!compiledElement) {
        return
      }
      await db.editExistingNapElement(compiledElement)
    }

    static async delete(element: HTMLDivElement) {
      const compiledElement = compileUp(element)
      if (!compiledElement) {
        return
      }
      db.deleteExistingElement(compiledElement)
    }
  }
}
