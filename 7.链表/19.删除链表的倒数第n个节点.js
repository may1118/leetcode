/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head == null) return null;
  let neNode = head;
  let cur = head;
  while (n-- > 0) {
    neNode = neNode.next;
  }
  if (neNode == null) return head.next;
  while (neNode.next != null) {
    neNode = neNode.next;
    cur = cur.next;
  }
  cur.next = cur.next.next;
  return head;
};
// @lc code=end
