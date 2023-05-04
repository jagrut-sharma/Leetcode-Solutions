// Link: https://leetcode.com/problems/move-zeroes/

const moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j++;
    } else {
      [nums[i - j], nums[i]] = [nums[i], nums[i - j]];
    }
  }
  return nums;
};

/* const moveZeroes = function (nums) {
  let indx = 0,
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[indx] = nums[i];
      nums[i] = 0;
      indx++;
    }
  }
  return nums;
}; */

console.log(moveZeroes([0, 0, 1, 0, 3, 12]));
