/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (s == null) return false;
  return isOk(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);

  function isOk(node1, node2) {
    if (node1 == null && node2 == null) return true;
    if (node1 == null || node2 == null) return false;
    if (node1.val != node2.val) {
      return false;
    }
    return isOk(node1.left, node2.left) && isOk(node1.right, node2.right);
  }
};
// @lc code=end
