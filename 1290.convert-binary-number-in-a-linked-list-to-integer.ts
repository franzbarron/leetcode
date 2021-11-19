/*
 * @lc app=leetcode id=1290 lang=typescript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
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

function getDecimalValue(head: ListNode | null): number {
  let ans = head.val;
  let curr = head.next;

  while (curr) {
    ans *= 2;
    ans += curr.val;
    curr = curr.next;
  }

  return ans;
}
// @lc code=end
