/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function delteOk(ac, en, s) {
  while (ac <= en) {
    if (s[ac] != s[en]) {
      return false;
    } else {
      ac++;
      en--;
    }
  }
  return true;
}
var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i] != s[j]) {
      return delteOk(i, j - 1, s) || delteOk(i + 1, j, s);
    } else {
      i++;
      j--;
    }
  }
  return true;
};
// console.log(validPalindrome('abca'));
// @lc code=end
