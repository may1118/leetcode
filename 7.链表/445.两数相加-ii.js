/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let head1 = l1;
  let head2 = l2;
  let ans = null;
  while (l1 != l2) {
    if (l1.next == null) {
      l1 = head2;
      if (!ans) {
        ans = head2;
      }
    } else {
      l1 = l1.next;
    }
    if (l2.next == null) {
      l2 = head1;
      if (!ans) {
        ans = head1;
      }
    } else {
      l2 = l2.next;
    }
  }
  
  return ans;
};
// @lc code=end
