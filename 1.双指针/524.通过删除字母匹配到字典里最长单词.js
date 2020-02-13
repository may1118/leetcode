/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
function isSubstr(s, target) {
  let i = 0,
    j = 0;
  while (i < s.length && j < target.length) {
    if (s[i] == target[j]) {
      j++;
    }
    i++;
  }
  return j == target.length;
}
var findLongestWord = function(s, d) {
  let len1 = s.length;
  let longStr = '';
  for (let i = 0; i < d.length; i++) {
    let target = d[i];
    if (
      len1 < target.length ||
      (longStr.length == target.length && longStr < target)
    ) {
      continue;
    }
    if (isSubstr(s, target) && longStr.length <= target.length) {
      longStr = target;
    }
  }
  return longStr;
};
// console.log('--' + findLongestWord('bab', ['ba', 'ab', 'a', 'b']));
// @lc code=end
