class Stack {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    this.data.pop();
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
myStack.pop();

console.log(myStack);
