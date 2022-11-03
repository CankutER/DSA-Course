class myArray {
  constructor(size) {
    this.length = size ? size : 0;
  }
  push(item) {
    this[this.length] = item;
    this.length += 1;
  }
  pop() {
    delete this[this.length - 1];
    this.length -= 1;
  }
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
    this[0] = item;
    this.length += 1;
  }
  shift() {
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    delete this[this.length - 1];
    this.length -= 1;
  }
}

const arr = new myArray();
arr.push("cankut");
arr.push("ecem");
arr.unshift("turkoz");
arr.shift();
console.log(arr);
