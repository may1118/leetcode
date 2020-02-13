/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  let ans = new ListNode(0);
  let ret = ans;
  while (l1 != null && l2 != null) {
    let min = Math.min(l1.val, l2.val);
    let nex = new ListNode(min);
    ans.next = nex;
    ans = nex;
    if (min == l1.val) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
  }
  if (l1 == null) {
    ans.next = l2;
  } else {
    ans.next = l1;
  }
  return ret.next;
};
// @lc code=end
