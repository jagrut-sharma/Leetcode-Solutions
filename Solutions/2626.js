// Link: https://leetcode.com/problems/array-reduce-transformation/

const reduce = function (nums, fn, init) {
  let accum = init;

  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }

  return accum;
};

reduce(
  [1, 2, 3, 4],
  function (acc, curr) {
    return acc + curr;
  },
  0
);
