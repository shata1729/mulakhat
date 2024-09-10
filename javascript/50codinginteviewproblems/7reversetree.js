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

function reverseTree(root) {
    // your code here
    if (root == null) return;
    let temp = {}
    temp = root.right;
    root.right = root.left;
    root.left = temp;
    reverseTree(root.left);
    reverseTree(root.right);
}

let arr = [1, 2, 3, 4, 5, 6, 7]
let root = buildTree(arr);

let inorderArr = []
function dfsInorder(root) {
    if (root == null) return inorderArr;
    dfsInorder(root.left);
    // console.log(root.data + " ");
    inorderArr.push(root.data)
    dfsInorder(root.right);
}

console.log("Inorder")
dfsInorder(root);
console.log(inorderArr.join(' '));
reverseTree(root)
inorderArr = [];
console.log("After reverse")
dfsInorder(root);
console.log(inorderArr.join(' '));

