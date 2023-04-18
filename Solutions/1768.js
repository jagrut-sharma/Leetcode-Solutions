// Link of the problem: https://leetcode.com/problems/merge-strings-alternately/

//? check shorter word.
//? run loop till its length and add one of shorter, one of longer
//? run remaining length of upper and add elements.

const mergeAlternately = function (word1, word2) {
  // Merging letters:

  const longestWord = Math.max(word1.length, word2.length);

  let mergedStr = "";

  for (let i = 0; i < longestWord; i++) {
    mergedStr += word1[i] || "";
    mergedStr += word2[i] || "";
  }

  return mergedStr;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("pqrs", "ab"));

/*
const mergeAlternately = function (word1, word2) {
  // Calculating lengths:
  const shorterLength =
    word1.length <= word2.length ? word1.length : word2.length;
  const longerLength =
    word1.length <= word2.length ? word2.length : word1.length;

  // Merging letters:
  let mergedStr = "";
  for (let i = 0; i < shorterLength; i++) {
    mergedStr += word1[i] + word2[i];
  }

  const longerWord = word1.length > word2.length ? word1 : word2;
  for (let j = shorterLength; j < longerLength; j++) {
    mergedStr += longerWord[j];
  }

  return mergedStr;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("pqrs", "ab"));
*/
