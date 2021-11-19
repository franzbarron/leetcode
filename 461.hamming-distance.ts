/*
 * @lc app=leetcode id=461 lang=typescript
 *
 * [461] Hamming Distance
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  return (x ^ y).toString(2).replace(/0/g, "").length;
}
// @lc code=end
