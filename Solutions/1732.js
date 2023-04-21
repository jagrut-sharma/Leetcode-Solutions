// Question Link: https://leetcode.com/problems/find-the-highest-altitude/

// Optimised Solution:
var largestAltitude = function (gain) {
  rest = [0];
  for (i = 0; i < gain.length; i++) {
    // adding current position and altitude difference to make a position and store it for next iteration
    rest.push(rest[i] + gain[i]);
  }
  return Math.max(...rest);
};

//? Start from 0.
//? Add digits => return the highest point
/*
const largestAltitude = function (gain) {
  let max = 0,
    sum = 0;
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    if (sum > max) max = sum;
  }
  return max;
};
*/
// console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
