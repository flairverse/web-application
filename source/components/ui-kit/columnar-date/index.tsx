import { FC } from 'react'
import * as Lib from './lib'

export const ColumnarDate: FC<Lib.T.ColumnarDateProps> = ({ dateTime, topic, size = 'medium' }) => {
  const { on } = Lib.H.useColumnarDate({ dateTime })
  const { year, month, day } = on.separateDateTime()

  return (
    <Lib.S.ColumnarDateContainer topic={topic} dateTime={dateTime} size={size}>
      <span className="month">{month}</span>

      <span className="day">{day}</span>

      <span className="year">{year}</span>
    </Lib.S.ColumnarDateContainer>
  )
}
