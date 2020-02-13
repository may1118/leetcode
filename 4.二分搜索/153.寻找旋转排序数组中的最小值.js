/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let len = nums.length;
  let i = 0,
    j = len - 1;
  while (i < j) {
    let m = Math.floor((i + j) / 2);
    if (nums[m] <= nums[j]) {
      j = m;
    } else {
      i = m + 1;
    }
  }
  return nums[i];
};
// @lc code=end
