const numArr = [1, 2, 3, 4, 5];

// O(n^2)
const checkPair = (arr, sum) => {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result = true;
        break;
      }
    }
  }
  return result;
};

//O(n)

const checkPairOn = (arr, sum) => {
  let result = false;
  const validPairs = {};
  arr.forEach((element) => {
    if (validPairs[sum - element]) {
      result = true;
    } else {
      validPairs[element] = true;
    }
  });

  return result;
};

console.log(checkPairOn(numArr, 11));
