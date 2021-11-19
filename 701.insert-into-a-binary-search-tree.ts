/*
 * @lc app=leetcode id=701 lang=typescript
 *
 * [701] Insert into a Binary Search Tree
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  let curr = root;
  let parent: TreeNode | null;

  while (curr) {
    parent = curr;
    curr = curr.val < val ? curr.right : curr.left;
  }

  if (!parent) {
    root = new TreeNode(val);
  } else if (parent.val < val) {
    parent.right = new TreeNode(val);
  } else {
    parent.left = new TreeNode(val);
  }

  return root;
}
// @lc code=end
