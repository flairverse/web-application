import * as Lib from '.'

/**
 *
 *
 * calculates and returns size of central sections but not the actual size =>
 * we'll use this size (n) in the css value: "calc(100% - n)"
 */
export const calculateCentralDivSize = ({ sizes, left, right, defaultSize }: Lib.T.CentralDivSizeCalculator): number => {
  /**
   *
   * if we had both left and right side provided
   */
  if (left && right) {
    return (sizes?.right ?? defaultSize) + (sizes?.left ?? defaultSize)
  } else if (right) {
    /**
     *
     * if only right side was provided
     */
    return sizes?.right ?? defaultSize
  } else {
    /**
     *
     * if only left side was provided
     */
    return sizes?.left ?? defaultSize
  }
}
