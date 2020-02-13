/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0,
    j = 0;
  let len1 = s.length,
    len2 = t.length;
  while (i < len1 && j < len2) {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
  }
  return i == len1;
};
console.log(isSubsequence('abc', 'ahbgdc'));
// @lc code=end
