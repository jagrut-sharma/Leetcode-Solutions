// Link: https://leetcode.com/problems/search-insert-position/

const findIndex = function (nums, target, start, end) {
  let mid = Math.floor(start + (end - start) / 2);

  while (start < end) {
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else end = mid;

    mid = Math.floor(start + (end - start) / 2);
    // console.log(`Start: ${start}, End: ${end}, Mid: ${mid}`);
  }

  return mid;
};

const searchInsert = function (nums, target) {
  const n = nums.length;

  if (n === 1 && target === nums[0]) return 0;

  const index = findIndex(nums, target, 0, n);

  return index;
};

/* 
const searchInsert = function (nums, target) {
  // If element is in start/end:
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  let index = "";
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) return i;
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
  }
}; */

// console.log(searchInsert([1, 3, 6, 7], 5));
// console.log(searchInsert([1, 3, 6, 7, 8, 10, 11], 7.5));
// console.log(searchInsert([1, 3, 6, 7], 8));
console.log(searchInsert([1, 3, 6, 7], 0));
