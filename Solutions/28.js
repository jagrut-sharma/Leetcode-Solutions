const strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let str = "";
    if (haystack[i] === needle[0]) {
      for (let j = i; j < i + needle.length; j++) {
        str += haystack[j];
      }
      if (str === needle) return i;
    }
  }
  return -1;
};

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));
// console.log(strStr("babba", "bbb"));
