import * as Lib from '.'

/**
 *
 *
 * calculates and returns size of central sections but not the actual size =>
 * we'll use this size (n) in the css value: "calc(100% - n)"
 */
export const calculateCentralDivSize = ({
  left,
  right,
  defaultSize,
  leftSize,
  rightSize,
}: Lib.T.CentralDivSizeCalculator): number => {
  /**
   *
   * if we had both left and right side provided
   */
  if (left && right) {
    return (rightSize ?? defaultSize) + (leftSize ?? defaultSize)
  } else if (right) {
    /**
     *
     * if only right side was provided
     */
    return rightSize ?? defaultSize
  } else {
    /**
     *
     * if only left side was provided
     */
    return leftSize ?? defaultSize
  }
}
