// Link: https://leetcode.com/problems/left-and-right-sum-differences/

var leftRigthDifference = function (nums) {
  let result = [];

  let left = 0;
  let right = 0;

  for (var i = 0; i < nums.length; i++) {
    right += nums[i];
  }

  console.log(nums);

  for (var i = 0; i < nums.length; i++) {
    right -= nums[i];
    console.log(nums[i], right);
    result.push(Math.abs(left - right));
    left += nums[i];
    console.log(left);
  }
  return result;
};

/* 
const getReverse = function (arr) {
  const reversedArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr[j++] = arr[i];
  }
  return reversedArr;
};

const leftRightDifference = function (nums) {
  let sumLeft = 0,
    sumRight = 0;

  let leftSumArr = [],
    rightSumArr = [];

  for (let i = 0; i < nums.length; i++) {
    leftSumArr.push(sumLeft);
    rightSumArr.push(sumRight);
    sumLeft += nums[i];
    sumRight += nums[nums.length - 1 - i];
  }

  const reversedRight = getReverse(rightSumArr);

  const result = [];

  for (let j = 0; j < nums.length; j++) {
    result[j] = Math.abs(leftSumArr[j] - reversedRight[j]);
  }

  return result;
};
 */
console.log(leftRigthDifference([10, 4, 8, 3]));
