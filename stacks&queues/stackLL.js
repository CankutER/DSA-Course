class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return;
    }
    this.top.next = newNode;
    this.top = newNode;
    this.length++;
  }
  pop() {
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return;
    }
    let leader;
    for (let i = 0; i < this.length - 1; i++) {
      if (i === 0) {
        leader = this.bottom;
      } else {
        leader = leader.next;
      }
      if (i === this.length - 2) {
        leader.next = null;
        this.top = leader;
      }
    }
    this.length--;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
myStack.pop();

console.log(myStack);
