/*
 * @lc app=leetcode id=1528 lang=typescript
 *
 * [1528] Shuffle String
 */

// @lc code=start
function restoreString(s: string, indices: number[]): string {
  const arr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s.charAt(i);
  }

  return arr.join("");
}
// @lc code=end
