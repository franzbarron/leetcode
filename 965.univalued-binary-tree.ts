/*
 * @lc app=leetcode id=965 lang=typescript
 *
 * [965] Univalued Binary Tree
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

function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  if (root.left && root.left.val !== root.val) {
    return false;
  }
  if (root.right && root.right.val !== root.val) {
    return false;
  }
  return isUnivalTree(root.left) && isUnivalTree(root.right);
}
// @lc code=end
