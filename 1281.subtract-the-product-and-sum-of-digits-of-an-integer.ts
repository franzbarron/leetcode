/*
 * @lc app=leetcode id=1281 lang=typescript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
  const s = n.toString();
  let mult = 1;
  let sum = 0;
  for (const c of s) {
    mult *= parseInt(c);
    sum += parseInt(c);
  }

  return mult - sum;
}
// @lc code=end
