// Link: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

// const minimumSum = function (num) {
//   let numbers = [];
//   for (let i = 0; i < 4; i++) {
//     numbers[i] = num % 10;
//     num = Math.floor(num / 10);
//   }
//   //   console.log(numbers);
//   const sorted = numbers.sort((a, b) => b - a);
//   //   console.log(sorted);
//   return sorted[0] + sorted[1] + 10 * (sorted[2] + sorted[3]);
// };

const minimumSum = function (num) {
  const temp = (num + "").split("").sort();
  console.log(temp);
  return parseInt(temp[0] + temp[2]) + parseInt(temp[1] + temp[3]);
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));

/*
4009 => 40 09 | 400 9 | 04 09 | 49 0 | 409 0 | 
*/
