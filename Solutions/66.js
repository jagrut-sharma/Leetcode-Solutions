// Link: https://leetcode.com/problems/plus-one/

// * Recieve the array.
// * Make a number.
// * add one.
// * Convert into an array
// * return

const plusOne = function (digits) {
  let num = "";

  for (let i = 0; i < digits.length; i++) {
    num += digits[i];
  }

  num = BigInt(num);
  num += 1n;
  num = num + "";

  for (j = 0; j < num.length; j++) {
    digits[j] = +num[j];
  }

  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
