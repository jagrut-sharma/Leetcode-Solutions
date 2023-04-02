// Link to question: https://leetcode.com/problems/longest-common-prefix/

// Prefix means starting of word should match
// store first string
// compare it from each element's letter. Ele is a word and we need to compare letter

const longestCommonPrefix = function (strArr) {
  let commonPrefix = "",
    init = strArr[0];

  let curr = "",
    count = 0;
  let length = strArr.length;

  // checking for prefix --> Guard clause
  if (length === 1) return init;
  if (strArr[1][0] !== init[0]) return "";

  // Checking if common:
  for (let i = 0; i < init.length; i++) {
    // need to compare it with first lettter of first word
    curr = init[i];
    for (let j = 0; j < length; j++) {
      // f in curr, we need to compare first letter form word
      if (curr !== strArr[j][i]) return commonPrefix;
      console.log(curr, strArr[j]);
      if (curr === strArr[j][i]) count++;
      if (count === length) {
        commonPrefix += curr;
      }
    }
    count = 0;
  }
  return commonPrefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cir", "car"]));
