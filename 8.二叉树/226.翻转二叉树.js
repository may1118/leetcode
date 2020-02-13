/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root == null || (root.left == null && root.right == null)) return root;
  exchange(root);
  return root;
  function exchange(node) {
    if (node == null) return;
    if (node.left == null && node.right == null) return;
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    exchange(node.left);
    exchange(node.right);
  }
};
// @lc code=end
