/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 非递归实现
var preorderTraversal = function(root) {
  if (root == null) return [];
  // 一个栈
  let stack = [];
  stack.push(root);
  let ans = [];
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      ans.push(node.val);
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return ans;
};

// @lc code=end

// 递归实现;
var preorderTraversal = function(root) {
  if (root == null) return null;
  visit(root);
  preorderTraversal(root.left);
  preorderTraversal(root.right);
  function visit(node) {
    if (node == null) return;
    console.log(node.val);
  }
};
