// Link: https://leetcode.com/problems/counter-ii/

class CreateCounter {
  constructor(num) {
    this.num = num;
    this.number = num;
  }

  increment() {
    this.num++;
    return this.num;
  }

  decrement() {
    this.num--;
    return this.num;
  }

  reset() {
    this.num = this.number;
    return this.num;
  }
}

const createCounter = function (init) {
  return new CreateCounter(init);
};

// through function:
var createCounter2 = function (init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }

  function decrement() {
    return --presentCount;
  }

  function reset() {
    return (presentCount = init);
  }

  return { increment, decrement, reset };
};

// using arrow:
var createCounter3 = function (init) {
  let presentCount = init;
  return {
    increment: () => ++presentCount,
    decrement: () => --presentCount,
    reset: () => (presentCount = init),
  };
};
