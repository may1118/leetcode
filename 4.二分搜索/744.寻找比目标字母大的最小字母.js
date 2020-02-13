/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// a < b
var nextGreatestLetter = function(letters, target) {
  let len = letters.length;
  let i = 0;
  while (i <= len) {
    if (i == len) {
      return letters[0];
    }
    if (letters[i] == target) {
      i++;
    } else if (letters[i] < target) {
      i++;
    } else {
      return letters[i];
    }
  }
};
console.log(nextGreatestLetter(['c', 'f', 'j'], 'k'));
// @lc code=end
