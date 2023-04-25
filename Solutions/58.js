// Link: https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  let index = s.length - 1;
  console.log("Start", index); // 16
  let output = 0;

  // starts from back and only checks for non space characters

  while (s[index] === " " && index >= 0) {
    index -= 1;
    console.log(index);
  }

  while (s[index] !== " " && index >= 0) {
    output += 1;
    index -= 1;
    console.log(index, "Not space");
  }
  return output;
};

/* 
const lengthOfLastWord = function (s) {
  const trimmedStr = s.replace(/^\s+|\s+$/gm, "");

  const result = /\w+$/gm.exec(trimmedStr);

  return result[0].length;
};
 */
console.log(lengthOfLastWord("   Hello World   "));
