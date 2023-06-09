// Link: https://leetcode.com/problems/maximum-difference-between-increasing-elements/

// Optimised:

const maximumDifference = function (nums) {
  let min = Number.POSITIVE_INFINITY;
  let diff = -1;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(nums[i], min);
    diff = Math.max(diff, nums[i] - min);
  }

  return diff === 0 ? -1 : diff;
};

console.log(maximumDifference([87, 68, 91, 86, 58, 63, 43, 98, 6, 40]));

// const maximumDifference = function (nums) {
//   var diff = -1;
//   console.log(nums);
//   for (let i = 0; i < nums.length; i++) {
//     console.log("i=", nums[i]);
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > nums[i]) {
//         console.log(nums[j], nums[i]);
//         diff = Math.max(nums[j] - nums[i], diff);
//       }
//     }
//     console.log(diff);
//   }
//   return diff;
// };

// console.log(maximumDifference([87, 68, 91, 86, 58, 63, 43, 98, 6, 40])); // 6 -> 8th, 98 -> 7th ==> 40 -> 9th(makes no sense as its last) => 43 -> 6th, 98 -> 7th => 98-43 = 55
