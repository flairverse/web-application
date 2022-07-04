import { FC, useRef } from 'react'
import * as Lib from './lib'

export const NapCreator: FC = () => {
  const mainBoardRef = useRef<HTMLDivElement>(null)
  const mainBoardParentRef = useRef<HTMLDivElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const { on } = Lib.H.useNapCreator({ imageInputRef, boardRef: mainBoardRef })
  const { onInputChange } = Lib.H.useImagePicker({ imageInputRef, boardRef: mainBoardRef })

  return (
    <>
      <Lib.S.PickImageInput type="file" accept="image/*" ref={imageInputRef} onChange={onInputChange} />

      <Lib.C.ReminderTimePicker boardRef={mainBoardRef} />

      <Lib.C.PostsPickUp boardRef={mainBoardRef} />

      <Lib.C.MentionPickUp boardRef={mainBoardRef} />

      <Lib.C.GiphyPickUp boardRef={mainBoardRef} />

      <Lib.C.EditLinkHrefPopup boardRef={mainBoardRef} />

      <Lib.S.NapCreatorContainer>
        <Lib.C.Toolbox active={true} boardRef={mainBoardRef} imageInputRef={imageInputRef} />

        <Lib.C.DraftMessage />

        <div className="board" ref={mainBoardParentRef}>
          <div className="initialContent">
            <Lib.C.GuidLines />
            <Lib.C.Items onOptionsClick={on.optionsClick} boardRef={mainBoardRef} imageInputRef={imageInputRef} />
          </div>

          <Lib.S.MainBoard id="mainBoard" ref={mainBoardRef} />
        </div>
      </Lib.S.NapCreatorContainer>
    </>
  )
}
