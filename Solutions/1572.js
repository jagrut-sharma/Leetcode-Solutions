// 1572. Matrix Diagonal Sum

// Link: https://leetcode.com/problems/matrix-diagonal-sum/description/

const diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (mat.length - 1 - i != i) {
      sum += mat[i][mat.length - 1 - i];
    }
  }
  return sum;
};

// mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

diagonalSum(mat);
