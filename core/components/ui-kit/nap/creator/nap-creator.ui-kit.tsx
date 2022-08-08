import { FC, useRef } from 'react'
import * as Lib from './lib'

export const NapCreator: FC<Lib.T.NapCreatorProps> = ({ storeKeys }) => {
  const mainBoardRef = useRef<HTMLDivElement>(null)
  const mainBoardParentRef = useRef<HTMLDivElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const { on } = Lib.H.useNapCreator({ imageInputRef, boardRef: mainBoardRef, storeKeys })
  const { onInputChange } = Lib.H.useImagePicker({
    boardRef: mainBoardRef,
    imageInputRef,
    storeKeys,
  })

  return (
    <>
      <Lib.S.PickImageInput type="file" accept="image/*" ref={imageInputRef} onChange={onInputChange} />

      <Lib.C.ReminderTimePicker boardRef={mainBoardRef} storeKeys={storeKeys} />

      <Lib.C.PostsPickUp boardRef={mainBoardRef} storeKeys={storeKeys} />

      <Lib.C.MentionPickUp boardRef={mainBoardRef} storeKeys={storeKeys} />

      <Lib.C.GiphyPickUp boardRef={mainBoardRef} storeKeys={storeKeys} />

      <Lib.C.EditLinkHrefPopup boardRef={mainBoardRef} storeKeys={storeKeys} />

      <Lib.S.NapCreatorContainer>
        <Lib.C.Toolbox active={true} boardRef={mainBoardRef} imageInputRef={imageInputRef} storeKeys={storeKeys} />

        <Lib.C.DraftMessage />

        <div className="board" ref={mainBoardParentRef}>
          <div className="initialContent">
            <Lib.C.GuidLines />
            <Lib.C.Items onOptionsClick={on.optionsClick} boardRef={mainBoardRef} imageInputRef={imageInputRef} storeKeys={storeKeys} />
          </div>

          <Lib.S.MainBoard id="mainBoard" ref={mainBoardRef} />
        </div>
      </Lib.S.NapCreatorContainer>
    </>
  )
}
