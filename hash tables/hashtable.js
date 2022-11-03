// this is without considering hash collision

class Hashtable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    this.data[this.hashKey(key)] = [key, value];
  }
  get(key) {
    return this.data[this.hashKey(key)][1];
  }
}

const myHashTable = new Hashtable(50);
myHashTable.set("grapes", 1000);
let grapes = myHashTable.get("grapes");
//

// this is an attempt to prevent hash collision
class betterHashtable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    if (!this.data[this.hashKey(key)]) {
      let indexList = { [key]: 0, lastIndex: 1 };
      this.data[this.hashKey(key)] = [];
      this.data[this.hashKey(key)].push(indexList);
      this.data[this.hashKey(key)][1] = [key, value];
    } else {
      let indexToUse = this.data[this.hashKey(key)][0].lastIndex;
      this.data[this.hashKey(key)][0][key] = indexToUse;
      this.data[this.hashKey(key)].push([key, value]);
      this.data[this.hashKey(key)][0].lastIndex += 1;
    }
  }
  get(key) {
    if (this.data[this.hashKey(key)].length === 2) {
      return this.data[this.hashKey(key)][1][1];
    } else {
      return this.data[this.hashKey(key)][
        this.data[this.hashKey(key)][0][key]
      ][1];
    }
  }
  getKeys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]) {
        continue;
      } else {
        for (let j = 1; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }
}

const betterTable = new betterHashtable(50);
betterTable.set("grapes", 2000);
betterTable.set("apples", 500);
betterTable.set("oranges", 100);
console.log(betterTable.getKeys());
//
