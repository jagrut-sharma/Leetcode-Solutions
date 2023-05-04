// Link: https://leetcode.com/problems/maximum-difference-between-increasing-elements/

const maximumDifference = function (nums) {
  let largestNum = Number.NEGATIVE_INFINITY;
  let shortestNum = Number.POSITIVE_INFINITY;

  let shortIndx, largeIndx;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
      largestNum = nums[i];
      largeIndx = i;
    }
    if (nums[i] < shortestNum) {
      shortestNum = nums[i];
      shortIndx = i;
    }
  }

  console.log(largestNum, largeIndx);
  console.log(shortestNum, shortIndx);

  if (shortIndx < largeIndx) return largestNum - shortestNum;

  return -1;
};

console.log(maximumDifference([7, 1, 3, 5, 4]));
// console.log(maximumDifference([9, 4, 3, 2]));
// console.log(maximumDifference([1, 5, 2, 10]));
