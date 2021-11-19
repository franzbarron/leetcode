/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const ans = new ListNode();
  let curr1 = l1;
  let curr2 = l2;
  let currAns = ans;
  let carry = 0;

  while (currAns) {
    let sum = carry;
    if (curr1) {
      sum += curr1.val;
      curr1 = curr1.next;
    }
    if (curr2) {
      sum += curr2.val;
      curr2 = curr2.next;
    }
    currAns.val = sum % 10;
    carry = Math.floor(sum / 10);
    if (curr1 || curr2) {
      currAns.next = new ListNode();
    } else if (carry) {
      currAns.next = new ListNode(carry);
      currAns = currAns.next;
    }
    currAns = currAns.next;
  }

  return ans;
}
// @lc code=end
