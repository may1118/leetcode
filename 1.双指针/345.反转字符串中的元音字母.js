/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function isYY(s) {
  return /a|e|i|o|u|A|E|I|O|U/gi.test(s);
}
var reverseVowels = function(s) {
  if (s == null) return null;
  let arr = Array.from(s.split(''));

  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (!isYY(arr[i])) {
      i++;
    } else if (!isYY(arr[j])) {
      j--;
    } else {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  let ans = '';
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
};
// @lc code=end
