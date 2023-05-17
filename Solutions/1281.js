// Link: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

const subtractProductAndSum = function (n) {
  let prod = 1,
    sum = 0;
  for (; n > 0; ) {
    const digit = n % 10;
    n = Math.floor(n / 10);
    prod *= digit;
    sum += digit;
  }

  return prod - sum;
};

subtractProductAndSum(234);
