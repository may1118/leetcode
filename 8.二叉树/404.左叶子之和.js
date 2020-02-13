/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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

var sumOfLeftLeaves = function(root) {
  let ans = 0;
  return isOk(root);
  function isOk(root) {
    if (root == null) return 0;
    if (
      root.left != null &&
      root.left.left == null &&
      root.left.right == null
    ) {
      // console.log(root.left.val);
      ans += root.left.val;
    }
    isOk(root.left);
    isOk(root.right);
    return ans;
  }
};

// @lc code=end
