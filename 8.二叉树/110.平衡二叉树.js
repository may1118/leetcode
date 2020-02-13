/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let ans = true;
  height(root);
  return ans;
  function height(node) {
    if (node == null) return 0;
    let left = height(node.left);
    let right = height(node.right);

    if (Math.abs(left - right) > 1) ans = false;
    return 1 + Math.max(left, right);
  }
};
// @lc code=end
