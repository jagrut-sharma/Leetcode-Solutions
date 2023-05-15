// Link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// optimised:
const smallerNumbersThanCurrent = function (nums) {
  const counts = new Array(101).fill(0);
  nums.forEach((num) => ++counts[num]);
  console.log(counts);

  let prevCount = 0;
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    counts[i] = prevCount;
    prevCount += count;
  }
  console.log(counts);

  return nums.map((num) => counts[num]);
};

/*
const smallerNumbersThanCurrent = function (nums) {
  const resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    resultArr[i] = count;
  }
  console.log(resultArr);
  return resultArr;
};
*/

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
