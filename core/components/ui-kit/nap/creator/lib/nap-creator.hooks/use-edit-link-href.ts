import { RegExes } from '@/constants/reg-exes.constant'
import { Str } from '@/helpers/string'
import { componentNapCreatorAtomFamilies } from '@/store'
import { ModalProps } from 'antd'
import { FormEvent, useMemo } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useEditLinkHref = ({ boardRef, storeKeys }: Pick<Lib.T.EditLinkHrefPopupProps, 'boardRef' | 'storeKeys'>) => {
  const setPopupVisibility = useSetRecoilState(componentNapCreatorAtomFamilies.editLinkPopupVisibility(storeKeys.popups.editLink))
  const [{ ref, frameID }, setEditLinkPopupLinkTextAndRef] = useRecoilState(
    componentNapCreatorAtomFamilies.editLinkPopupLinkTextAndRef(storeKeys.popups.editLinkDetail),
  )
  const isValidURL = useMemo(() => RegExes.url.test(ref), [ref])
  const NapStorage = Lib.H.useNapStorage(boardRef)

  const modalProps = useMemo<ModalProps>(
    () => ({
      onCancel: () => setPopupVisibility(false),
      title: null,
      footer: null,
      width: 405,
      closable: false,
      destroyOnClose: false,
    }),
    [],
  )

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (!isValidURL) {
      return
    }

    const frame = Lib.HE.getFrameById(boardRef, frameID)
    const frameParagraph = frame?.querySelector('p.link')
    if (!frame || !frameParagraph) {
      return
    }

    frameParagraph.setAttribute('data-href', ref)
    setPopupVisibility(false)
    setEditLinkPopupLinkTextAndRef({ frameID: '', ref: '', text: '' })
    NapStorage.update(frame)
  }

  const inputID = useMemo<string>(() => Str.random(10, 'allLetters'), [])

  return { modalProps, inputID, isValidURL, onSubmit }
}
