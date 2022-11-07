class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue);
