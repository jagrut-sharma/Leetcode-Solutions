// Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = function (candies, extraCandies) {
  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > largest) {
      largest = candies[i];
    }
  }

  const isGreatest = [];

  for (let j = 0; j < candies.length; j++) {
    if (candies[j] + extraCandies >= largest) {
      isGreatest[j] = true;
    } else {
      isGreatest[j] = false;
    }
  }

  return isGreatest;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
