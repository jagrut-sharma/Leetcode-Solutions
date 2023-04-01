// Linkof the question: https://leetcode.com/problems/missing-number/description/

// const missingNumber = function (numsArr) {
//   let isPresent = true;
//   for (let i = 0; i <= numsArr.length; i++) {
//     for (let j = 0; j < numsArr.length; j++) {
//       //   console.log(i, numsArr[j]);
//       if (i === numsArr[j]) {
//         isPresent = true;
//         break;
//       }
//       isPresent = false;
//     }
//     if (!isPresent) return i;
//   }
// };

// const missingNumber = function (nums) {
//   let numsObj = {};
//   let isPresent;
//   for (let i = 0; i < nums.length; i++) {
//     numsObj[nums[i]] = nums[i];
//   }
//   console.log(numsObj);
//   const keysNumsObj = Object.keys(numsObj);
//   // console.log(keysNumsObj);
//   for (let j = 0; j <= keysNumsObj.length; j++) {
//     // console.log(j, +keysNumsObj[j]);
//     if (j !== +keysNumsObj[j]) return j;
//   }
// };

const missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }

  return expectedSum - actualSum;
};

console.log(missingNumber([0, 3, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
