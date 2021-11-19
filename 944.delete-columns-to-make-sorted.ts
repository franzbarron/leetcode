/*
 * @lc app=leetcode id=944 lang=typescript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  let d = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        d++;
        break;
      }
    }
  }

  return d;
}
// @lc code=end
