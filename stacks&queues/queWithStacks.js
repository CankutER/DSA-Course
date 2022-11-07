var MyQueue = function () {
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
      let popped = this.data[this.data.length - 1];
      this.data.pop();
      return popped;
    }
  }
  this.pushStack = new Stack();
  this.popStack = new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.pushStack.data.length) {
    this.popStack.push(this.pushStack.pop());
  }
  let popped = this.popStack.pop();
  while (this.popStack.data.length) {
    this.pushStack.push(this.popStack.pop());
  }
  return popped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.pushStack.data.length) {
    this.popStack.push(this.pushStack.pop());
  }
  let peeked = this.popStack.peek();
  while (this.popStack.data.length) {
    this.pushStack.push(this.popStack.pop());
  }
  return peeked;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.pushStack.data.length === 0) {
    return true;
  }
  return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
