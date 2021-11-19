/*
 * @lc app=leetcode id=654 lang=typescript
 *
 * [654] Maximum Binary Tree
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  let maxNum = -Infinity;
  let idx: number;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
      idx = i;
    }
  }

  const tree = new TreeNode(maxNum);
  tree.left = constructMaximumBinaryTree(nums.slice(0, idx));
  tree.right = constructMaximumBinaryTree(nums.slice(idx + 1));

  return tree;
}
// @lc code=end
