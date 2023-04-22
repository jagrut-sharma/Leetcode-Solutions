// Link: https://leetcode.com/problems/remove-element/

//Optimised solution:

const removeElement = function (nums, val) {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }

  return nums.length;
};

// My solution:
/*
const removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }

  console.log(nums);
  return index;
};
*/

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
