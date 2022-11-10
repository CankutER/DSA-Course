class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

// My own implementation before course

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let leader = this.traverse(value);
    if (leader.value !== value) {
      if (value > leader.value) {
        leader.right = new Node(value);
      } else {
        leader.left = new Node(value);
      }
    } else {
      throw "Node already exists";
    }
  }
  lookup(value) {
    let leader = this.traverse(value);
    if (leader.value === value) {
      return leader;
    }
  }
  traverse(value) {
    let leader = this.root;
    while (true) {
      if (value === leader.value) {
        return leader;
      }
      if (value > leader.value) {
        if (!leader.right) {
          return leader;
        }
        leader = leader.right;
      } else {
        if (!leader.left) {
          return leader;
        }
        leader = leader.left;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(bst);

//
