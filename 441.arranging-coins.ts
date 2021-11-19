/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
  return Math.floor((Math.sqrt(1 + 8 * n) - 1) / 2);
}
// @lc code=end
