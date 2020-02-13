/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let obj = {};
  for (let val of nums) {
    obj[val] = obj[val] ? obj[val] + 1 : 1;
  }
  let ans = Object.keys(obj)
    // 从大到小排序
    .sort((a, b) => obj[b] - obj[a])
    .splice(0, k);
  return ans;
};
// console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
// @lc code=end
