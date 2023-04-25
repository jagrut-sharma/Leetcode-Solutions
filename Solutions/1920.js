// Link: https://leetcode.com/problems/build-array-from-permutation/description/?languageTags=javascript

// For O(1) space complexity:
const buildArray = function (nums) {
  // with O(1) and O(n+n)
  // store two numbers with math.
  // ex - for 0 -> 0, 2 -> 1002, 1 -> 2001, 5 -> 4005, 3 -> 5003, 4 -> 3004
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (nums[nums[i]] % 1000) * 1000;
  }
  // get the result number
  // ex - for 0 -> 0, 1002 -> 1, 2001 -> 2, 4005-> 4, 5003 -> 5, 3005 -> 3
  for (let i = 0; i < nums.length; i++) {
    // bitwise not operator to make the number integer.
    nums[i] = ~~(nums[i] / 1000);
  }
  return nums;
};

//const buildArray = (nums) => nums.map((num) => nums[num]);

/*
const buildArray = function (nums) {
  let builtArr = [];
  for (let i = 0; i < nums.length; i++) {
    builtArr[i] = nums[nums[i]];
  }

  return builtArr;
};
*/
console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));
