// Link: https://leetcode.com/problems/number-of-good-pairs/

const numIdenticalPairs = function (nums) {
  let count = 0;
  let countObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!countObj[nums[i]]) {
      countObj[nums[i]] = 1;
    } else {
      countObj[nums[i]]++;
    }
  }
  const repeatVal = Object.values(countObj);

  for (let j = 0; j < repeatVal.length; j++) {
    if (repeatVal[j] > 1) {
      count += repeatVal[j] * ((repeatVal[j] - 1) / 2);
    }
  }
  return count;
};

/* 
const numIdenticalPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
}; 
*/

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// console.log(numIdenticalPairs([1, 1, 1, 1]));
