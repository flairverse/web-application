import * as Lib from '.'

export const makeOpenMenuEffect = (effect?: Lib.T.OpenMenuEffects): string => {
  switch (effect) {
    default:
    case 'scale-in': {
      return 'scale(0.95)'
    }

    case 'scale-out': {
      return 'scale(1.07)'
    }

    case 'slide-down': {
      return 'translateY(-15px)'
    }

    case 'slide-left': {
      return 'translateX(15px)'
    }

    case 'slide-right': {
      return 'translateX(-15px)'
    }

    case 'slide-up': {
      return 'translateY(15px)'
    }
  }
}
