/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let h = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return h;
};
// @lc code=end

// if (head == null || head.next == null) {
//   return head;
// }
// let next = head.next;
// let newNode = new ListNode(next);
// next.next = head;
// head.next = null;
// return newNode;
