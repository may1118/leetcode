/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let ans = 0;
  height(root);
  return ans;
  function height(node) {
    if (node == null) return 0;
    let left = height(node.left);
    let right = height(node.right);
    ans = Math.max(left + right, ans);
    return Math.max(left + right) + 1;
  }
};
// @lc code=end
// 正确代码
var diameterOfBinaryTree2 = function(root) {
  if (!root) {
    return 0;
  }
  return findMaxDiameter(root)['max'] - 1;
};
const findMaxDiameter = node => {
  let lDepth = { depth: 0, max: 0 },
    rDepth = { depth: 0, max: 0 };
  if (node.left) {
    lDepth = findMaxDiameter(node.left);
  }
  if (node.right) {
    rDepth = findMaxDiameter(node.right);
  }
  let max = Math.max(lDepth.max, rDepth.max, lDepth.depth + rDepth.depth + 1);
  let depth = Math.max(lDepth.depth, rDepth.depth) + 1;
  return { max, depth };
};
