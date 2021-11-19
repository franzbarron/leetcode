/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
 */

import { ListNode } from "./structures/ListNode";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head?.val === val) {
    head = head.next;
  }

  if (!head) {
    return null;
  }

  const newHead = new ListNode(head.val);
  head = head.next;
  let curr = newHead;

  while (head) {
    if (head.val === val) {
      head = head.next;
      continue;
    }
    curr.next = new ListNode(head.val);
    head = head.next;
    curr = curr.next;
  }

  return newHead;
}
// @lc code=end
