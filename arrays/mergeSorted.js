const arr1 = [0, 3, 4, 8, 31];
const arr2 = [4, 6, 7, 30, 60];

const mergeSorted = (arr1, arr2) => {
  let smaller;
  let larger;
  if (arr1[0] > arr2[0]) {
    larger = [...arr1];
    smaller = [...arr2];
  } else {
    larger = [...arr2];
    smaller = [...arr1];
  }
  let merged = [];
  let smallerIndex = 0;
  let largerIndex = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (smaller[smallerIndex] <= larger[largerIndex]) {
      merged.push(smaller[smallerIndex]);
      if (smallerIndex <= smaller.length - 1) {
        if (smallerIndex === smaller.length - 1) {
          smaller.push(Infinity);
        }
        smallerIndex++;
      }
    } else {
      merged.push(larger[largerIndex]);
      if (largerIndex <= larger.length - 1) {
        if (largerIndex === larger.length - 1) {
          larger.push(Infinity);
        }
        largerIndex++;
      }
    }
  }
  return merged;
};
console.log(mergeSorted(arr1, arr2));
