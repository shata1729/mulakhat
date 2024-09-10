// Given a binary tree root, create a boolean function that checks if it's a binary search tree. Note that in a binary search tree, every node must be strictly greater than all nodes on its left subtree, and strictly smaller than all nodes on its right subtree.
// By recursively checking if every node respects its own range:

// Time complexity: O(n)
// Space complexity: O(h)

class Tree{
    constructor(data, left = null, right = null){
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  function isBst(root, min = -Infinity, max = Infinity){
    if(root === null)
      return true;
    else if(root.data <= min || root.data >= max)
      return false;
    else
      return isBst(root.left, min, root.data) && isBst(root.right, root.data, max);
  }
  
  
  