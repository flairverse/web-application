import * as Lib from '.'
import { NumeralMonth } from '@/helpers/dater/lib/types'
import { Dater } from '@/helpers/dater'

export const useColumnarDate = ({ dateTime }: Pick<Lib.T.ColumnarDateProps, 'dateTime'>) => {
  const separateDateTime = (): Lib.T.SeparatedDateTime => {
    const date = new Date(dateTime).toISOString().split('-')

    return {
      year: date[0],
      month: <string>Dater.getMonth(<NumeralMonth>parseInt(date[1])),
      day: date[2].split('T')[0].padStart(2, '0'),
    }
  }

  return {
    on: {
      separateDateTime,
    },
  }
}
