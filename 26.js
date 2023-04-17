// Question link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Optimised solution:

var removeDuplicatesOptimised = function (nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    // We skip to next index if we see a duplicate element
    if (nums[i - 1] != nums[i]) {
      /* Storing the unique element at insertIndex index and incrementing
           the insertIndex by 1 */
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};

// My solution:
const getLength = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  return count;
};

// [1, 1, 2, 3, 4, 4]
const removeDuplicates = function (numsArr) {
  const wasPresent = {};
  let count = 0,
    index = 0;

  for (let i = 0; i < numsArr.length; i++) {
    if (wasPresent[numsArr[i]]) {
      count++;
    } else {
      numsArr[index] = numsArr[i];
      wasPresent[numsArr[i]] = numsArr[i];
      index++;
    }
  }

  // Adding '' in uniqueArr
  const lengthOfUnique = numsArr.length - count;
  for (let j = lengthOfUnique; j < numsArr.length; j++) {
    numsArr[j] = "";
  }

  return getLength(numsArr);
};

let nums = [1, 1, 2, 3, 4, 4];
console.log(removeDuplicates(nums));
console.log(nums);
