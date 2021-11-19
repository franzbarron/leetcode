/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

function postorderTraversal(root: TreeNode | null): number[] {
  let curr = root;
  const left: TreeNode[] = [];
  const post: TreeNode[] = [];
  const postOrder: number[] = [];

  while (curr) {
    post.push(curr);
    if (curr.left) {
      left.push(curr.left);
    }
    if (curr.right) {
      curr = curr.right;
    } else if (left.length) {
      curr = left.pop();
    } else {
      curr = null;
    }
  }

  while (post.length) {
    postOrder.push(post.pop().val);
  }

  return postOrder;
}
// @lc code=end
