/*
 * @lc app=leetcode id=1413 lang=typescript
 *
 * [1413] Minimum Value to Get Positive Step by Step Sum
 */

// @lc code=start
function minStartValue(nums: number[]): number {
  let min = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, sum);
  }

  return -min + 1;
}
// @lc code=end
