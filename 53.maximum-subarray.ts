/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let sum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}
// @lc code=end
