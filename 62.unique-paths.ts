/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const arr: number[][] = [];

  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[m - 1][n - 1];
}
// @lc code=end
