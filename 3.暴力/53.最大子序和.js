/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let preSum = max;
  for (let i = 1; i < nums.length; i++) {
    preSum = preSum > 0 ? preSum + nums[i] : nums[i];
    max = Math.max(max, preSum);
  }
  return max;
};
// @lc code=end
