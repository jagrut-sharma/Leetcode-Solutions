// https://leetcode.com/problems/happy-number/

const getSquareDigits = (num) => {
  const eleArr = [...("" + num)];
  let sum = 0;
  for (let i = 0; i < eleArr.length; i++) {
    sum += Number(eleArr[i]) ** 2;
  }

  return sum;
};

const isHappy = function (n) {
  const squareStore = {};
  const square = getSquareDigits(n);
  if (square === 1) return true;

  let currNum = square;

  while (!squareStore[currNum]) {
    squareStore[currNum] = currNum;
    currNum = getSquareDigits(currNum);

    if (currNum === 1) {
      return true;
    }
  }

  return false;
};

console.log(isHappy(17));
console.log(isHappy(19));
console.log(isHappy(2));

// 19 => 1 + 81 => 82
// 82 => 64 + 4 => 68
// 68 => 36 + 64 => 100
// 100 => 1 + 0 + 0 => 1

// 17 => 1 + 49 => 50
// 50 => 25 + 0 => 25
// 25 => 4 + 25 => 29
// 29 => 4 + 81 => 85
// 85 => 64 + 25 => 89
// 89 => 64 + 81 => 145
// 145 => 1 + 16 + 25 => 42
// 42 => 16 + 4 => 20
// 20 => 4 + 0 => 4
// 4 => 16
// 16 => 1 + 36 => 37
// 37 => 9 + 49 => 58
// 58 => 25 + 64 => 89
