/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head;
  if (node == null || node.next == null) return head;
  let next = node.next;
  while (next != null) {
    if (node.val == next.val) {
      next = next.next;
      node.next = next;
    } else {
      node = node.next;
      next = next.next;
    }
  }
  return head;
};
// @lc code=end
