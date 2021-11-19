/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const str = x.toString();
  const n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str.charAt(i) !== str.charAt(n - 1 - i)) {
      return false;
    }
  }

  return true;
}
// @lc code=end
