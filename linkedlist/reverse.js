// my own implementation pre-watching

// class LinkedList {
//   constructor(start) {
//     this.head = start;

//     this.head.next = null;
//   }
//   append(obj) {
//     if (!this.tail) {
//       this.head.next = obj;
//       this.tail = obj;
//       this.tail.next = null;
//     } else {
//       this.tail.next = obj;
//       this.tail = obj;
//       this.tail.next = null;
//     }
//   }
//   prepend(obj) {
//     obj.next = this.head;
//     this.head = obj;
//   }
// }

// const obj10 = { content: 10 };

// const linkedList = new LinkedList(obj10);

// console.log(linkedList);

// linkedList.append({ content: 5 });
// linkedList.append({ content: 16 });
// linkedList.prepend({ content: 1 });

//

// implementation stated in the course

// general example
// let myLinkedList = {
//   head: { value: 10, next: { value: 5, next: { value: 16, next: null } } },
// };
//

class myLinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = { value: value, next: null };
    this.tail = this.tail.next;
    this.length += 1;
  }
  prepend(value) {
    let pre = { value: value, next: this.head };
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
          const newNode = { value: value, next: iterator };
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
        }
        break;
      }
    }
    this.length--;
  }

  //   my own implementation before course solution
  reverse() {
    let tailHolder = this.tail;
    let headHolder;
    for (let i = 0; i < this.length - 1; i++) {
      if (i === 0) {
        headHolder = this.head.next;
        this.head.next = null;
        tailHolder.next = this.head;
        this.tail = this.head;
        this.head = headHolder;
      } else {
        headHolder = headHolder.next;
        this.head.next = tailHolder.next;
        tailHolder.next = this.head;
        this.head = headHolder;
      }
    }
  }

  //
}

// 1-10-13-16
// reversed: 16-13-10-1
const linkedlist = new myLinkedList(10);
linkedlist.append(16);
linkedlist.append(5);
linkedlist.prepend(1);
linkedlist.insert(2, 13);
linkedlist.delete(20);
linkedlist.delete(20);
linkedlist.delete(20);
// linkedlist.reverse();
console.log(linkedlist);
