class myDoublyLinkedList {
  constructor(value) {
    this.head = { value: value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = { value: value, next: null, prev: this.tail };
    this.tail = this.tail.next;
    this.length += 1;
  }
  prepend(value) {
    let pre = { value: value, next: this.head, prev: null };
    this.head.prev = pre;
    this.head = pre;
    this.length += 1;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length - 1) {
      this.append(value);
    } else {
      let iterator;
      let pre;

      for (let i = 0; i < this.length - 1; i++) {
        if (i === 0) {
          iterator = this.head;
        } else {
          pre = iterator;
          iterator = iterator.next;
        }
        if (i === index) {
          const newNode = { value: value, next: iterator, prev: pre };
          iterator.prev = newNode;
          pre.next = newNode;
          break;
        }
      }
    }
    this.length++;
  }
  delete(index) {
    if (index === 0 && this.length === 1) {
      return console.log("You cannot remove the head");
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let iterator;
    let pre;
    let usableIndex = index;
    if (index >= this.length - 1) {
      usableIndex = this.length - 1;
    }
    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        iterator = this.head;
      } else {
        pre = iterator;
        iterator = iterator.next;
      }
      if (i === usableIndex) {
        pre.next = iterator.next;
        if (usableIndex === this.length - 1) {
          this.tail = pre;
        } else {
          iterator.next.prev = pre;
        }
        break;
      }
    }
    this.length--;
  }
}

// 1-3-10-5
const doublyList = new myDoublyLinkedList(10);
doublyList.append(5);
doublyList.prepend(1);
doublyList.insert(1, 3);
doublyList.delete(20);
console.log(doublyList);
