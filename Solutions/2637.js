// Link: https://leetcode.com/problems/promise-time-limit/

const timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise(async (res, rej) => {
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        rej("Time Limit Exceeded");
      }, t);

      try {
        const result = await fn(...args);
        res(result);
      } catch (error) {
        rej(error);
      }
      clearTimeout(timerId);
    });
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const setOne = timeLimit(fn, 150);
setOne(5);
