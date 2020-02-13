/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var generateTrees = function(n) {
  if (n < 1) {
    return [];
  }
  return resolve(1, n);

  function resolve(start, end) {
    let ans = [];
    if (start > end) {
      ans.push(null);
      return ans;
    }

    for (let i = start; i <= end; i++) {
      let left = resolve(start, i - 1);
      let right = resolve(i + 1, end);

      for (let l = 0; l < left.length; l++) {
        for (let r = 0; r < right.length; r++) {
          let cur = new TreeNode(i);
          cur.left = left[l];
          cur.right = right[r];
          ans.push(cur);
        }
      }
    }
    return ans;
  }
};
// console.log(generateTrees(5));

// @lc code=end
