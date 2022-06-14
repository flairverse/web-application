import { Button } from 'antd'
import Link from 'next/link'
import { FC, MouseEvent } from 'react'
import * as Lib from '.'

export const Suggestion: FC<Lib.T.SuggestionItem & Lib.T.SuggestionItemExtraProps> = ({
  href,
  title,
  index,
  topic,
  id,
  button,
}) => {
  const buttonHandler = (evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    evt.preventDefault()
    button!.onClick(id)
  }

  return (
    <Link href={href}>
      <Lib.S.SuggestionContainer topic={topic} href={href} button={button}>
        {!button && <span className="index">#{index}</span>}

        <span className="title">{title}</span>

        {button && (
          <Button onClick={buttonHandler} type="primary">
            {button.text}
          </Button>
        )}
      </Lib.S.SuggestionContainer>
    </Link>
  )
}
