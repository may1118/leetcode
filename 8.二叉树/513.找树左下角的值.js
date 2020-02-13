/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  if (root == null) return 0;
  let queue = [];
  queue.push(root);
  let leftNode = root;

  while (queue.length) {
    let size = queue.length;

    while (size--) {
      let node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (queue.length) {
      leftNode = queue[0];
    }
  }
  return leftNode.val;
};
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let root1 = new TreeNode(2);
// let root2 = new TreeNode(1);
// let root3 = new TreeNode(3);
// let root4 = new TreeNode(4);
// let root5 = new TreeNode(5);
// let root6 = new TreeNode(5);
// root1.left = root2;
// root1.right = root3;
// root2.left = root4;
// root2.right = root5;
// root3.right = root6;
// console.log(findBottomLeftValue(root1));
// @lc code=end
