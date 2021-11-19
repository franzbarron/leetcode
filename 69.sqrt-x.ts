/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }

  let guess = x;
  for (let i = 0; i < 20; i++) {
    guess -= (guess * guess - x) / (2 * guess);
  }

  return Math.trunc(guess);
}
// @lc code=end
