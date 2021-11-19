/*
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const ans: number[][] = [];
  const q = [root];

  while (q.length) {
    const level: number[] = [];
    let n = q.length;
    while (n) {
      const curr = q.shift();
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
      level.push(curr.val);
      n--;
    }
    ans.unshift(level);
  }

  return ans;
}
// @lc code=end
