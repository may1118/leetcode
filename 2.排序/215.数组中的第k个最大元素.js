/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let sort_heap = (function() {
  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  function heapify(arr, n, parent) {
    if (parent >= n) return;
    let c1 = parent * 2 + 1;
    let c2 = parent * 2 + 2;
    let max = parent;

    if (c1 < n && arr[c1] < arr[max]) {
      max = c1;
    }
    if (c2 < n && arr[c2] < arr[max]) {
      max = c2;
    }
    if (max != parent) {
      swap(arr, parent, max);
      heapify(arr, n, max);
    }
  }
  function build_heap(arr, n) {
    let last_node = n - 1;
    let build_node = Math.floor((last_node - 1) / 2);
    for (let i = build_node; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }
  function sort_heap(arr, n) {
    build_heap(arr, n);
    for (let i = n - 1; i >= 0; i--) {
      swap(arr, i, 0);
      heapify(arr, i, 0);
    }
  }
  function main(arr, n) {
    sort_heap(arr, n);
  }
  return main;
})();

var findKthLargest = function(nums, k) {
  sort_heap(nums, nums.length);
  return nums[k - 1];
};
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// @lc code=end
