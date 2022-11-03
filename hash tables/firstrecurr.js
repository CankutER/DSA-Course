const findFirstRecur = (arr) => {
  let hash = {};
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = true;
    } else {
      result = arr[i];
      break;
    }
  }
  return result;
};

console.log(findFirstRecur("geeksforgeek".split("")));
