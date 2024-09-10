// Home
// 50 popular coding interview problems
// Solve the problem [JavaScript]
// Given a binary tree of integers root, create 3 functions to print the tree nodes in preorder, inorder, and postorder traversal.
// Preorder: print the root value, then print the left subtree, then print the right subtree.
// Inorder: print the left subtree, then print the root value, then print the right subtree.
// Postorder: print the left subtree, then print the right subtree, then print the root value.

// Example 1:

// Input: root = [1, 2, 3, 4, 5, 6, 7]

// Output:
// Preorder: 1 2 4 5 3 6 7
// Inorder: 4 2 5 1 6 3 7
// Postorder: 4 5 2 6 7 3 1


// Example 2:

// Input: root = [6, 8, 13, 2, 1, 5, null, 7]

// Output:
// Preorder: 6 8 2 7 1 13 5
// Inorder: 7 2 8 1 6 5 13
// Postorder: 7 2 1 8 5 13 6

// Time complexity: O(n)
// Space complexity: O(h)

class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function buildTree(nums) {
    if (nums.length === 0) {
        return null;
    }
    let root = new Tree(nums[0]);
    let q = [root];
    let i = 1;
    while (i < nums.length) {
        let curr = q.shift();
        if (i < nums.length) {
            curr.left = new Tree(nums[i++]);
            q.push(curr.left);
        }
        if (i < nums.length) {
            curr.right = new Tree(nums[i++]);
            q.push(curr.right);
        }
    }
    return root;
}

function dfsPreorder(root) {
    if (root == null) return preorderArr;
    // console.log(root.data + " ");
    preorderArr.push(root.data)
    dfsPreorder(root.left);
    dfsPreorder(root.right);
}
let inorderArr = []
let preorderArr = []
let postorderArr = []
function dfsInorder(root) {
    if (root == null) return inorderArr;
    dfsInorder(root.left);
    // console.log(root.data + " ");
    inorderArr.push(root.data)
    dfsInorder(root.right);
}


function dfsPostorder(root) {
    if (root == null) return postorderArr;
    dfsPostorder(root.left);
    dfsPostorder(root.right);
    // console.log(root.data + " ");
    postorderArr.push(root.data)
}


let arr = [1, 2, 3, 4, 5, 6, 7]
let root = buildTree(arr);
// console.log(root)
console.log("Inorder")
dfsInorder(root);
console.log(inorderArr.join(' '))
dfsPreorder(root);
console.log("Preorder")
console.log(preorderArr.join(' '))
dfsPostorder(root); 
console.log("Postorder")
console.log(postorderArr.join(' '))