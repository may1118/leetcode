/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 左---root---右
var inorderTraversal = function(root) {
  if (root == null) return [];
  let stack = [];
  let ans = [];
  let cur = root;
  // 保证进入的都是有效节点
  while (stack.length || cur != null) {
    // 将左子树所有节点全部进行压入（包括了根节点
    while (cur != null) {
      stack.push(cur);
      cur = cur.left;
    }

    let node = stack.pop();
    ans.push(node.val);
    cur = node.right; // 压入右子树
  }
  return ans;
};
// @lc code=end
