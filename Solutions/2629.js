// FUNCTION COMPOSITION:

// Link: https://leetcode.com/problems/function-composition/

// Article: https://www.educative.io/answers/function-composition-in-javascript#:~:text=Function%20composition%20is%20an%20approach,of%20any%20number%20of%20functions.

// Article-2: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0

const compose = function (functions) {
  return function (x) {
    let value = x;
    for (let i = fnArr.length - 1; i >= 0; i--) {
      value = fnArr[i](value);
    }
    return value;
  };
};

const compose1 = (fnArr) => (x) => {
  let value = x;
  for (let i = fnArr.length - 1; i >= 0; i--) {
    value = fnArr[i](value);
  }
  return value;
};

const compose2 = (fnArr) => (x) => fnArr.reduceRight((val, fn) => fn(val), x);
