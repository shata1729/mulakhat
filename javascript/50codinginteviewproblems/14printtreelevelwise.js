class Tree{
    constructor(data, left = null, right = null){
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


// Parameters:
//  root: Tree
// return type: undefined

// By using a queue (recursively):

// Time complexity: O(n)
// Space complexity: O(n)
  
  function bfs(root, i = 0, queue = [root]){
    if(i >= queue.length) return;
    else {
      let poppedNode = queue[i];
      if(poppedNode !== null){
        console.log(poppedNode.data);
        queue.push(poppedNode.left);
        queue.push(poppedNode.right);
      }
      bfs(root, i+1, queue);
    }
  }
    
let arr = [1, 2, 3, 4, 5, 6, 7]
let root = buildTree(arr);
bfs(root)