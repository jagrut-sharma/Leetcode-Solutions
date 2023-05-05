// Link: https://leetcode.com/problems/richest-customer-wealth/

const maximumWealth = function (accounts) {
  let wealth = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < accounts.length; i++) {
    let amount = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      amount += accounts[i][j];
    }
    if (amount > wealth) {
      wealth = amount;
    }
  }

  return wealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
