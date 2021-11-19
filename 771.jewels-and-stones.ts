/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  let ans = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      ans++;
    }
  }

  return ans;
}
// @lc code=end
