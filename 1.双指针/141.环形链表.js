/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null) return false;
  let node1 = head;
  let node2 = head.next;
  while (node1 != null && node2 != null && node2.next != null) {
    if (node1 == node2) {
      return true;
    }
    node1 = node1.next;
    node2 = node2.next.next;
  }
  return false;
};
// @lc code=end
