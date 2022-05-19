import * as Lib from './lib'

export class Str {
  static random(length: number = 5, includes: Lib.T.RandomStringIncludes = 'allCharacters'): string {
    let result = ''
    const numeric = '123456789'
    const zero = '0'
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const specialCharacters = '!@#$%^&*_+=-/\\|(){}[]?.<>,~`\'"' // lemme know if there is some special characters missing

    let characters = ''

    switch (includes) {
      default:
      case 'allCharacters': {
        characters = numeric + zero + capitalLetters + lowercaseLetters + specialCharacters
        break
      }
      case 'numeric': {
        characters = numeric
        break
      }
      case 'numericWithZero': {
        characters = numeric + zero
        break
      }
      case 'allLetters': {
        characters = capitalLetters + lowercaseLetters
        break
      }
      case 'capitalLetters': {
        characters = capitalLetters
        break
      }
      case 'lowercaseLetters': {
        characters = lowercaseLetters
        break
      }
      case 'specialCharacters': {
        characters = specialCharacters
        break
      }
    }

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  static cut(string: string, length: number): string {
    if (string.length <= length) {
      return string
    }

    return string.substring(0, length - 3).concat('...')
  }
}
