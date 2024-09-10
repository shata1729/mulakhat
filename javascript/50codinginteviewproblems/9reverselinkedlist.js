// reversing linked list
// By dealing with links (recursively):

// Time complexity: O(n)
// Space complexity: O(n)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}
// By dealing with links (iteratively):

// Time complexity: O(n)
// Space complexity: O(1)

function reverseList1(list){
  let previous = null;
  let current = list.head;
  while(current != null){
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  list.head = previous;
  return list;
}


function reverseNodes(head) {
  let node = head
  if (node == null || node.next == null)
    return node;
  let reversed = reverseNodes(node.next);
  node.next.next = node;
  node.next = null;
  return reversed;
}

function reverseList(list) {
  list.head = reverseNodes(list.head);
  return list
}


let list1 = new LinkedList(new Node(5, new Node(6, new Node(8, new Node(9, null)))))
console.log(JSON.stringify(list1))
reverseList(list1)
console.log(JSON.stringify(list1))
reverseList1(list1)
console.log(JSON.stringify(list1))
