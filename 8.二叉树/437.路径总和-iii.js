/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root == null) return 0;
  let ans =
    pathSum(root.left, sum) + pathSum(root.right, sum) + isOk(root, sum);
  return ans;
  function isOk(root, sum) {
    if (root == null) return 0;
    let coun = 0;
    if (root.val == sum) coun++;
    coun += isOk(root.left, sum - root.val) + isOk(root.right, sum - root.val);
    return coun;
  }
};
// @lc code=end
