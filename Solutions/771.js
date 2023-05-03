// Link: https://leetcode.com/problems/jewels-and-stones/

// For includes
/* const numJewelsInStones = function (jewels, stones) {
  let sample = "";

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === jewels[0]) {
      for (let j = 0; j < jewels.length; j++) {
        sample += stones[i + j];
      }
      if (sample === jewels) return [i, sample];
      sample = "";
    }
  }
}; */

const numJewelsInStones = function (jewels, stones) {
  const typeOfJewels = {};
  for (let i = 0; i < jewels.length; i++) {
    if (!typeOfJewels[jewels[i]]) {
      typeOfJewels[jewels[i]] = 1;
    }
  }

  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    if (typeOfJewels[stones[j]]) count++;
  }

  return count;
};

console.log(numJewelsInStones("aA", "aAAbabbb"));
