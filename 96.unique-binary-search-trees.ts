/*
 * @lc app=leetcode id=96 lang=typescript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
function numTrees(n: number): number {
  let ans = 1;

  for (let k = 2; k <= n; k++) {
    ans *= (n + k) / k;
  }

  return ans;
}
// @lc code=end
