/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
 */

import { TreeNode } from "./structures/TreeNode";

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let sum = 0;
  const s = [root];
  let curr: TreeNode;
  while (s.length) {
    curr = s.pop();
    sum++;
    if (curr.left) {
      s.push(curr.left);
    }
    if (curr.right) {
      s.push(curr.right);
    }
  }

  return sum;
}
// @lc code=end
