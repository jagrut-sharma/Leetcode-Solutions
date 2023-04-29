// Link: https://leetcode.com/problems/shuffle-the-array/

const shuffle = function (nums, n) {
  const shuffledArr = [];
  let j = 0;

  for (let i = 0; i < n; i++) {
    shuffledArr[j++] = nums[i];
    shuffledArr[j++] = nums[i + n];
  }

  return shuffledArr;
};

/*
const shuffle = function (nums, n) {
  const x = [],
    y = [];

  let temp;
  for (i = 0; i < n; i++) {
    x[i] = nums[i];
    y[i] = nums[i + n];
  }

  const shuffledArr = [];
  let index = 0;
  for (let j = 0; j < 2 * n; j++) {
    shuffledArr[j] = j % 2 ? y[index] : x[index];
    if (j > 0 && j % 2 !== 0) index++;
  }
  return shuffledArr;
};
*/
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
