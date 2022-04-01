import { FC } from 'react'
import * as Lib from './lib'
import { NapProfile } from '../nap-profile'

export const SuggestionBox: FC<Lib.T.SuggestionBoxProps> = ({ topic, title, suggestionsItems, suggestionsFlairs, ...rest }) => {
  return (
    <Lib.S.SuggestionsBoxContainer topic={topic} {...rest}>
      <h5 className="header">
        <span>#{(suggestionsItems || suggestionsFlairs || []).length}</span>
        {title}
      </h5>

      <div className="suggestions">
        {suggestionsItems?.map((item, index) => (
          <Lib.C.Suggestion key={index} index={index + 1} topic={topic} {...item} />
        ))}

        {suggestionsFlairs?.map((flair, index) => (
          <NapProfile key={index} mode="horizontal" {...flair} className={`flair ${flair.className || ''}`} />
        ))}
      </div>
    </Lib.S.SuggestionsBoxContainer>
  )
}
