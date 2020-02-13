/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let obj = {};
  for (let str of s) {
    obj[str] = obj[str] ? obj[str] + 1 : 1;
  }
  let coun = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  let ans = '';
  let i = 0;
  while (i < coun.length) {
    let str = coun[i];
    let time = obj[coun[i]];
    ans += str.repeat(time);
    i++;
  }
  return ans;
};
// console.log(frequencySort('tree'));
// @lc code=end
