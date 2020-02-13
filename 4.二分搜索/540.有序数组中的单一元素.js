/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  if (nums.length == 0) return null;
  let i = 0,
    len = nums.length;
  while (i < len) {
    let nex = i + 1;
    if (nex == len || nums[i] != nums[i + 1]) {
      return nums[i];
    } else {
      i += 2;
    }
  }
};
console.log(singleNonDuplicate([1]));
// @lc code=end
