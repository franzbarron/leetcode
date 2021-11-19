/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const s = new Set(nums);
  const ans = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!s.has(i)) {
      ans.push(i);
    }
  }

  return ans;
}
// @lc code=end
