// Link: https://leetcode.com/problems/filter-elements-from-array/

const filter = function (arr, fn) {
  const filtredArr = [];
  let indx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      filtredArr[indx++] = arr[i];
    }
  }
  return filtredArr;
};

filter([0, 10, 20, 30], (n) => n > 10);
