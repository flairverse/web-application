import * as Lib from './lib'

export const useClassNames = () => {
  const createClass = (staticClassNames: string, dynamicClassNames: Lib.T.CreateClassArgs): string => {
    const classNames = Object.keys(dynamicClassNames)
    const classValues = Object.values(dynamicClassNames)

    classNames.forEach((className, index) => classValues[index] && (staticClassNames += ` ${className}`))

    return staticClassNames
  }

  return { createClass }
}
