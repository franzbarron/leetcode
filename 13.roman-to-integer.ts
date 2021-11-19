/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const v: number[] = [];
  for (const c of s) {
    v.push(values[c]);
  }
  let sum = 0;
  for (let i = 0; i < v.length - 1; i++) {
    if (v[i] >= v[i + 1]) {
      sum += v[i];
    } else {
      sum -= v[i];
    }
  }
  sum += v[v.length - 1];

  return sum;
}
// @lc code=end
