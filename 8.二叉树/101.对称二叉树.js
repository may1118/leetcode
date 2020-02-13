/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) return true;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;

    let level = [];
    console.log('size = ' + size);
    while (size--) {
      let node = queue.shift();
      if (node.left == null) {
        level.push(null);
      } else {
        level.push(node.left.val);
        queue.push(node.left);
      }
      if (node.right == null) {
        level.push(null);
      } else {
        level.push(node.right.val);
        queue.push(node.right);
      }
    }
    let len = level.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (level[i] != level[len - i - 1]) return false;
    }
    console.log(level);
  }
  return true;
};

console.log(isSymmetric(root1));

// @lc code=end
