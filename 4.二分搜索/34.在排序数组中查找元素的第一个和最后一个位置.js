/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let ans = [-1, -1];
  let len = nums.length,
    i = 0;
  while (i < len) {
    if (nums[i] > target) return ans;
    if (nums[i] == target) {
      if (ans[0] == -1) {
        ans[0] = i;
        ans[1] = i;
      } else {
        ans[1] = i;
      }
    }
    i++;
  }
  return ans;
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// @lc code=end
