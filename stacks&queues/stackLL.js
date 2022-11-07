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
    const holder = this.top;
    this.top = newNode;
    this.top.next = holder;
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return;
    }
    this.top = this.top.next;
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
