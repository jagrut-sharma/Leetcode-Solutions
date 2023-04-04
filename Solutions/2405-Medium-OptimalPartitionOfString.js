// Link: https://leetcode.com/problems/optimal-partition-of-string/description/

// Given a string str, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.

// ? Loop through the str: store letters in new ele.
// ? Once a letter repeats => push it into the arr and continue with rest of str.
// ? Make sure to empty the variable after pushing it in str.

/*
// Other best solutions:
var partitionString = function (s) {
    let output = 0;
    let currStr = "";
    for (let i = 0; i < s.length; i++) {
      let regex = new RegExp(s[i], "g");
      if (regex.test(currStr)) {
        currStr = s[i];
        output++;
        continue;
      }
      currStr += s[i];
    }
    return output + 1;
  };
  
  var partitionString = function (s) {
    let output = 0;
    let currStr = new Set();
    for (let i = 0; i < s.length; i++) {
      if (currStr.has(s[i])) {
        currStr.clear();
        output++;
      }
      currStr.add(s[i]);
    }
    return ++output;
  };
*/
const partitionString = function (str) {
  //   console.log(str);
  let uniqueLetter = str[0];
  const substrings = [];
  let hasBreaked = false;
  // let j=0; j < uniqueLetter.length; j++

  for (let i = 1; i < str.length; i++) {
    // checking if the letter is present in uniqueLetter
    for (const letter of uniqueLetter) {
      if (letter === str[i]) {
        hasBreaked = true;
        break;
      }
    }
    if (hasBreaked) {
      substrings.push(uniqueLetter);
      uniqueLetter = str[i];
      hasBreaked = false;
      continue;
    }
    uniqueLetter += str[i];
    // console.log(uniqueLetter);
  }
  substrings.push(uniqueLetter);
  //   console.log(substrings);
  return substrings.length;
};

console.log(partitionString("abacaba"));
console.log(partitionString("ssssss"));
