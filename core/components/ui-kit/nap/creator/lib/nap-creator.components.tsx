import { CardPick } from '@/components/ui-kit/card'
import { Input } from '@/components/ui-kit/input'
import { LongTap } from '@/components/ui-kit/long-tap'
import { PickUp } from '@/components/ui-kit/pick-up'
import { DateTimePicker } from '@/components/ui-kit/time-picker'
import * as alertKeys from '@/constants/alert-keys.constant'
import { numeralBreakpoints } from '@/constants/style-variables.constant'
import { useGetAutoBreakpoint } from '@/hooks/use-auto-breakpoint'
import { componentNapCreatorAtomFamilies } from '@/store'
import { Grid as GifList } from '@giphy/react-components'
import { Alert, Button, Popconfirm } from 'antd'
import * as staticMocks from 'mock/static'
import { FC } from 'react'
import { FaChevronLeft, FaChevronRight, FaEllipsisH } from 'react-icons/fa'
import { HiChevronRight } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineClose } from 'react-icons/md'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Lib from '.'
import { NapProfile } from '../../profile'

export const Toolbox: FC<Lib.T.ToolboxProps> = ({ active, boardRef, imageInputRef, storeKeys }) => {
  const [activeOption, setActiveOption] = useRecoilState(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))

  return (
    <Lib.S.ToolboxContainer active={active}>
      <div className={`withTitle ${activeOption === 'none'}`}>
        <h1>Create Your Nap</h1>
        <ToolBoxNextBtn boardRef={boardRef} />
      </div>

      <div className={`toolsContainer ${activeOption !== 'none'}`}>
        <span className="backButton" onClick={() => setActiveOption('none')}>
          <MdOutlineClose color="var(--layer-2-text-3)" size={22} />
        </span>
        <div className="tools">
          <Tools selectedOption={activeOption} boardRef={boardRef} imageInputRef={imageInputRef} storeKeys={storeKeys} />
        </div>
        <ToolBoxNextBtn boardRef={boardRef} />
      </div>
    </Lib.S.ToolboxContainer>
  )
}

export const ToolBoxNextBtn: FC<Lib.T.ToolBoxNextBtnProps> = ({ boardRef }) => {
  const { finalizeBoard } = Lib.H.useToolBoxNextBtn({ boardRef })

  return (
    <Button type="primary" onClick={finalizeBoard} className="nextBtn">
      <span>Next</span>
      <HiChevronRight color="var(--layer-2-text-3)" size={20} />
    </Button>
  )
}

export const DraftMessage = () => {
  const { onCloseMessage, onConfirmDisable, hasReadDraftAlert } = Lib.H.useDraftMessage()

  return (
    <Lib.S.DraftMessage>
      {!hasReadDraftAlert && (
        <Alert
          message="Don't worry, the draft will be saved"
          description="The draft is automatically saved. Don't worry about missing this page. If you don't like this feature, you can disable it now."
          type="success"
          closable
          showIcon
          onClose={onCloseMessage}
          className={alertKeys.CREATE_NAP___DRAFTED_NAP_BOARD_ALERT}
          action={
            <Popconfirm
              placement="bottomRight"
              title="Are you sure to disable this feature?"
              onConfirm={onConfirmDisable}
              okText="Yes"
              cancelText="No"
              className="cy-disable-db-popup"
              cancelButtonProps={{ className: 'cy-close-db-popup' }}
            >
              <Button size="small" type="text" className="cy-disable-db">
                Disable it
              </Button>
            </Popconfirm>
          }
        />
      )}
    </Lib.S.DraftMessage>
  )
}

export const Items: FC<Lib.T.ItemsProps> = ({ onOptionsClick, boardRef, imageInputRef, storeKeys }) => {
  const showMoreOptions = useRecoilValue(componentNapCreatorAtomFamilies.showMoreOptions(storeKeys.showMoreOptions))
  const activeOption = useRecoilValue(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))
  const { onItemClick } = Lib.H.useItems({ onOptionsClick, boardRef, storeKeys })
  const items = Lib.H.useDefinedItems({ storeKeys })

  return (
    <>
      <Lib.S.ItemsShadowing active={showMoreOptions} />

      <Lib.S.ItemsContainer className={`itemsContainer ${showMoreOptions ? 'showMore' : 'showLess'}`}>
        <ul>
          {items.map(({ Icon, title, key }, index) => (
            <li
              key={index}
              title={showMoreOptions ? undefined : title}
              className={`${activeOption === key ? 'active' : ''}`}
              onClick={() => onItemClick(key)}
            >
              <span>
                <Icon color="var(--layer-2-text-3)" size={30} />
              </span>

              <p>{title}</p>
            </li>
          ))}
        </ul>
      </Lib.S.ItemsContainer>
    </>
  )
}

export const GuidLines: FC = () => {
  return (
    <Lib.S.GuideLines>
      <div className="left">
        <div className="top">
          <span className="profile" />

          <div className="name">
            <span className="username" />
            <span className="job" />
          </div>

          <div className="gap" />

          <span className="action">
            <FaChevronLeft size={20} />
          </span>

          <span className="action">
            <FaChevronRight size={20} />
          </span>

          <span className="action">
            <FaEllipsisH size={22} />
          </span>

          <span className="action">
            <IoCloseSharp size={30} />
          </span>
        </div>

        <div className="gap" />

        <div className="bottom">
          <span className="input">
            Reply to this nap... You can @mention people
            <span className="button">
              <RiSendPlane2Fill size={20} />
            </span>
          </span>
        </div>
      </div>

      <div className="right">
        <span className="timer" />
      </div>
    </Lib.S.GuideLines>
  )
}

export const PostsPickUp: FC<Lib.T.PostsPickUpProps> = ({ boardRef, storeKeys }) => {
  const { pickUpProps, onPostSelect } = Lib.H.usePostsPickUp({ boardRef, storeKeys })
  const pickUp = useRecoilValue(componentNapCreatorAtomFamilies.postsPickUp(storeKeys.popups.post))
  const { breakpoint } = useGetAutoBreakpoint()
  const napProfileScale = breakpoint <= numeralBreakpoints.md ? 0.35 : 0.5

  return (
    <PickUp {...pickUpProps} visibility={pickUp}>
      {Array.from(Array(staticMocks.pickCard.length)).map((_, index) => {
        return <CardPick key={index} {...staticMocks.pickCard[index]} onSelect={onPostSelect} napProfileScale={napProfileScale} />
      })}
    </PickUp>
  )
}

export const MentionPickUp: FC<Lib.T.MentionPickUpProps> = ({ boardRef, storeKeys }) => {
  const { pickUpProps, onUserSelect } = Lib.H.useMentionPickUp({ boardRef, storeKeys })
  const pickUp = useRecoilValue(componentNapCreatorAtomFamilies.mentionPickUp(storeKeys.popups.mention))

  return (
    <PickUp {...pickUpProps} visibility={pickUp}>
      <Lib.S.Mentions>
        {Array.from(Array(staticMocks.mentions.length)).map((_, index) => (
          <Mention key={index} {...staticMocks.mentions[index]} onClick={onUserSelect} />
        ))}
      </Lib.S.Mentions>
    </PickUp>
  )
}

export const GiphyPickUp: FC<Lib.T.GifPickUpProps> = ({ boardRef, storeKeys }) => {
  const { pickUpProps, gifFetcher, onGifClick, updateKey, windowWidth, giphyColumns } = Lib.H.useGiphyPickUp({ boardRef, storeKeys })
  const pickUp = useRecoilValue(componentNapCreatorAtomFamilies.giphyPickUp(storeKeys.popups.giphy))

  return (
    <PickUp {...pickUpProps} visibility={pickUp}>
      <Lib.S.GIFs>
        <GifList
          width={windowWidth >= 760 ? 760 : windowWidth - 35}
          columns={giphyColumns()}
          fetchGifs={gifFetcher}
          onGifClick={onGifClick}
          noLink
          key={updateKey}
          hideAttribution
          noResultsMessage={<p className="notFound">No Gifs found</p>}
        />
      </Lib.S.GIFs>
    </PickUp>
  )
}

export const Mention: FC<Lib.T.MentionProps> = ({ id, username, profile, hasNap, onClick }) => {
  return (
    <Lib.S.Mention onClick={() => onClick?.(id)}>
      <div>
        <NapProfile id={id} profile={profile} hasNap={hasNap} username={username} usernameWithAtSign size={0.8} />
      </div>
    </Lib.S.Mention>
  )
}

export const ReminderTimePicker: FC<Lib.T.ReminderTimePickerProps> = ({ boardRef, storeKeys }) => {
  const { get } = Lib.H.useReminderTimePicker({ boardRef, storeKeys })
  return <DateTimePicker {...get.timePickerProps} />
}

export const Tool: FC<Lib.T.ToolProps> = ({ disabled, Icon, type, onClick, title, index }) => {
  return (
    <Lib.S.Tool index={index} className={`${disabled && 'disabled'}`}>
      <LongTap popup={{ content: title, mobileOnly: true }}>
        <Button type="dashed" onClick={() => onClick(type)}>
          <Icon color="var(--layer-2-text-2)" size={20} />
          <span>{title}</span>
        </Button>
      </LongTap>
    </Lib.S.Tool>
  )
}

export const EditLinkHrefPopup: FC<Lib.T.EditLinkHrefPopupProps> = ({ boardRef, storeKeys }) => {
  const { modalProps, inputID, isValidURL, onSubmit } = Lib.H.useEditLinkHref({
    boardRef,
    storeKeys,
  })
  const [popupVisibility, setPopupVisibility] = useRecoilState(componentNapCreatorAtomFamilies.editLinkPopupVisibility(storeKeys.popups.editLink))
  const [{ ref, text }, setLinkAndRef] = useRecoilState(componentNapCreatorAtomFamilies.editLinkPopupLinkTextAndRef(storeKeys.popups.editLinkDetail))

  return (
    <Lib.S.EditLinkHrefPopup {...modalProps} visible={popupVisibility}>
      <div className="content">
        <label htmlFor={inputID} className="linkTextHolder">
          {text}
        </label>

        <form onSubmit={onSubmit}>
          <Input
            id={inputID}
            value={ref}
            onInput={({ currentTarget: { value } }) => setLinkAndRef(currVal => ({ ...currVal, ref: value }))}
            className="linkRefHolder"
            placeholder="Type your link here..."
            error={!isValidURL ? 'Must be a valid URL containing https://, http:// or ftp://' : undefined}
          />

          <div className="actions">
            <Button type="primary" htmlType="submit" disabled={!isValidURL}>
              Done
            </Button>
            <Button type="link" onClick={() => setPopupVisibility(false)}>
              Discard
            </Button>
          </div>
        </form>
      </div>
    </Lib.S.EditLinkHrefPopup>
  )
}

export const Tools: FC<Lib.T.ToolsProps> = ({ selectedOption, boardRef, imageInputRef, storeKeys }) => {
  const tools = Lib.H.useTools({ selectedOption, boardRef, imageInputRef, storeKeys })
  return <Lib.S.Tools>{tools}</Lib.S.Tools>
}

export const ToolsForTextInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForTextInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForPostInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForPostInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForMentionInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForMentionInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForQuestionInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForQuestionInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForQuizInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForQuizInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForReminderInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForReminderInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForGifInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForGifInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForImageInserter: FC<Lib.T.ToolsForImageInserter> = ({ boardRef, imageInputRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForImageInserter({
    boardRef,
    imageInputRef,
    storeKeys,
  })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForLinkInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef, storeKeys }) => {
  const { get, on } = Lib.H.useToolsForLinkInserter({ boardRef, storeKeys })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}
