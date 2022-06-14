import { Button } from 'antd'
import Link from 'next/link'
import { FC } from 'react'
import { NapProfile } from '../nap'
import * as Lib from './lib'

export const SuggestionBox: FC<Lib.T.SuggestionBoxProps> = ({
  topic,
  title,
  suggestionsItems,
  suggestionsFlairs,
  suggestionContent,
  ...rest
}) => {
  return (
    <Lib.S.SuggestionsBoxContainer topic={topic} {...rest}>
      {suggestionContent && (
        <div className="suggestionContent">
          <p>{title}</p>

          <Link href={suggestionContent.href}>
            <Button type="default" href={suggestionContent.href}>
              {suggestionContent.buttonText}
            </Button>
          </Link>
        </div>
      )}

      {!suggestionContent && (
        <>
          <h5 className="header">
            <span>#{(suggestionsItems || suggestionsFlairs || []).length}</span>
            {title}
          </h5>

          <div className="suggestions">
            {suggestionsItems?.map((item, index) => (
              <Lib.C.Suggestion key={index} index={index + 1} topic={topic} {...item} />
            ))}

            {suggestionsFlairs?.map((flair, index) => (
              <NapProfile
                key={index}
                mode="horizontal"
                {...flair}
                className={`flair ${flair.className || ''}`}
                linked
              />
            ))}
          </div>
        </>
      )}
    </Lib.S.SuggestionsBoxContainer>
  )
}
