/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
var sortColors = function(nums) {
  let zero = -1,
    two = nums.length,
    one = 0;
  while (one < two) {
    if (nums[one] == 0) {
      swap(nums, ++zero, one++);
    } else if (nums[one] == 2) {
      swap(nums, --two, one);
    } else {
      one++;
    }
  }
};
// @lc code=end
