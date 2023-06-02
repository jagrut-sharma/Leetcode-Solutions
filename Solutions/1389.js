// LINK: https://leetcode.com/problems/create-target-array-in-the-given-order/

// Loop through the index:
// Check if element exist
// If it does insert the element and shift other arrays
// else simply put the element at required position

const createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < index.length; i++) {
    if (target[index[i]] !== undefined) {
      target = insertEle(target, index[i], nums[i]);
    } else {
      target[index[i]] = nums[i];
    }
  }
  return target;
};

const insertEle = (arr, ind, num) => {
  const tempArrPrev = [];
  const tempArrAfter = [];

  // Extracting Prev Arr:
  for (let j = 0; j < arr.length; j++) {
    if (j === ind) {
      break;
    }
    tempArrPrev[j] = arr[j];
  }

  // Extracting After Arr:
  let index = 0;
  for (let k = ind; k < arr.length; k++) {
    tempArrAfter[index] = arr[k];
    index++;
  }

  return [...tempArrPrev, num, ...tempArrAfter];
};

const nums = [0, 1, 0];
const index = [0, 1, 0];
console.log(createTargetArray(nums, index));
