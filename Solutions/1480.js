// Link: https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }

  return nums;
};

runningSum([1, 2, 3, 4]);
