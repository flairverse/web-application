import { FC } from 'react'
import * as Lib from './lib'

export const SuggestionBox: FC<Lib.T.SuggestionBoxProps> = ({ count, topic, title, suggestions, ...rest }) => {
  return (
    <Lib.S.SuggestionsBoxContainer topic={topic} {...rest}>
      <h5 className="header">
        <span>#{count}</span>
        {title}
      </h5>

      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <Lib.C.Suggestion key={index} index={index + 1} topic={topic} {...suggestion} />
        ))}
      </div>
    </Lib.S.SuggestionsBoxContainer>
  )
}
