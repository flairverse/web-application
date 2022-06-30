import * as Lib from '..'

export const useUpdaters = ({ boardRef }: Lib.T.UseUpdatersArgs) => {
  const Inserters = Lib.H.useInserters({ boardRef })
  const { compileUp } = Lib.H.useBoardCompileUp(boardRef)

  return class Updater {
    board: HTMLDivElement | null = null

    constructor() {
      this.board = boardRef.current
    }

    /**
     *
     *
     * updates an existing reminder
     */
    updateReminder(newTime: Pick<Lib.T.Elements.Reminder, 'endTime'>) {
      const insert = new Inserters()
      const reminderFrame = Lib.HE.getFramesByType(boardRef, 'reminder')?.[0]
      if (!reminderFrame) {
        return
      }

      const compiledUpReminder = <Lib.T.Elements.Reminder>compileUp(reminderFrame)

      Lib.HE.removeFramesByType(boardRef, 'reminder')
      insert.newReminder({ ...compiledUpReminder, ...newTime })
    }
  }
}
