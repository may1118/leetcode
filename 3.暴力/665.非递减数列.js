/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let coun = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i - 1]) continue;
    coun++;
    if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
      nums[i] = nums[i - 1];
    } else {
      nums[i - 1] = nums[i];
    }
  }
  return coun <= 1;
};
console.log(checkPossibility([3, 4, 2, 3]));
// @lc code=end
