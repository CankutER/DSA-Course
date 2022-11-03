const arr1 = ["a", "b", "c", "x"];
const arr2 = [1, 2, 3, "x"];
// O(n)
const checkIfCommon = (arr1, arr2) => {
  let result = false;
  const itemSet = new Set(arr1);
  arr2.forEach((element) => {
    if (itemSet.has(element)) {
      result = true;
    }
  });
  return result;
};

console.log(checkIfCommon(arr1, arr2));
