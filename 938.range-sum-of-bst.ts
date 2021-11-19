/*
 * @lc app=leetcode id=938 lang=typescript
 *
 * [938] Range Sum of BST
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) {
    return 0;
  }

  let sum = root.val >= low && root.val <= high ? root.val : 0;
  return (
    sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
  );
}
// @lc code=end
