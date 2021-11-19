/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

import { Node } from "./structures/Node";

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  if (!head) {
    return null;
  }

  const visited: Map<Node, Node> = new Map();
  let curr = head;

  while (curr) {
    visited.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    visited.get(curr).next = visited.get(curr.next) ?? null;
    visited.get(curr).random = visited.get(curr.random) ?? null;
    curr = curr.next;
  }

  return visited.get(head);
}
// @lc code=end
