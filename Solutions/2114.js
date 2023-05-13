// LINK: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

// Second solution: A different approach but same time complexity:
const mostWordsFound2 = function (sentences) {
  let ans = 0;

  sentences.forEach((s) => {
    const temp = s.split(" ").length;
    if (temp > ans) ans = temp;
  });
  return ans;
};

// This is most optimised:
const mostWordsFound = function (sentences) {
  let count = 0,
    maxCount = 0;

  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
    }
    count = 0;
  }

  return maxCount + 1;
};

// mostWordsFound([
//   "alice and bob love leetcode",
//   "i think so too",
//   "this is great thanks very much",
// ]);

mostWordsFound([
  "w jrpihe zsyqn l dxchifbxlasaehj",
  "nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom",
  "xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg",
  "krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm",
  "rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr",
  "o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk",
  "hrvh efqvjilibdqxjlpmanmogiossjyxepotezo",
  "qstd zui nbbohtuk",
  "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc",
]);
