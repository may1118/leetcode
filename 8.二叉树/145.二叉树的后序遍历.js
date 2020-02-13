/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// 左 -->  右 --> root
// 非递归实现
var postorderTraversal = function(root) {
  let stack = [];
  stack.push(root);
  let ans = [];
  while (stack.length) {
    let node = stack.pop();
    if (node == null) continue;
    ans.push(node.val);
    stack.push(node.left);
    stack.push(node.right);
  }
  return ans.reverse();
};
// @lc code=end

// 递归实现
var postorderTraversal = function(root) {
  if (root == null) return;
  postorderTraversal(root.left);
  postorderTraversal(root.right);
  visit(root);
  function visit(node) {
    if (node) console.log(node.val);
  }
};
