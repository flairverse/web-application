import * as Lib from '.'

export class Sizing {
  static font(size: Lib.T.ColumnarDateSize): Lib.T.SizesOutput {
    switch (size) {
      case 'small': {
        return {
          day: 'var(--f-1)',
          year: 'var(--f-1)',
          month: 'var(--f-1)',
        }
      }

      case 'medium': {
        return {
          day: '10pt',
          year: '17pt',
          month: '8pt',
        }
      }

      case 'large': {
        return {
          day: 'var(--f-1)',
          year: 'var(--f-1)',
          month: 'var(--f-1)',
        }
      }
    }
  }
}
