/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
  if (root == null) return 0;
  let queue = [];
  queue.push(root);
  let ans = [];
  while (queue.length) {
    let size = queue.length;
    let level = [];
    while (size--) {
      let node = queue.shift();

      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    let sum = 0;
    for (let each of level) {
      sum += each;
    }
    ans.push(sum / level.length);
  }
  return ans;
};
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let root1 = new TreeNode(2);
// let root2 = new TreeNode(3);
// let root3 = new TreeNode(3);
// let root4 = new TreeNode(4);
// let root5 = new TreeNode(5);
// let root6 = new TreeNode(5);
// root1.left = root2;
// root1.right = root3;
// root2.left = root4;
// root2.right = root5;
// root3.right = root6;
// console.log(averageOfLevels(root1));
// @lc code=end
