/*
 * @lc app=leetcode id=1200 lang=typescript
 *
 * [1200] Minimum Absolute Difference
 */

// @lc code=start
function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let ans: number[][];
  let diff = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) < diff) {
      ans = [[arr[i], arr[i + 1]]];
      diff = Math.abs(arr[i + 1] - arr[i]);
    } else if (Math.abs(arr[i + 1] - arr[i]) === diff) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }

  return ans;
}
// @lc code=end
