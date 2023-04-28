// Link: https://leetcode.com/problems/defanging-an-ip-address/

const defangIPaddr = function (address) {
  const result = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") result += "[.]";
    else result += address[i];
  }

  return result;
};

/*
//* This is faster:

const makeArr = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }
  return arr;
};

const makeStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
};

const defangIPaddr = function (address) {
  const strArr = makeArr(address);

  for (let i = 0; i < address.length; i++) {
    if (strArr[i] === ".") strArr[i] = "[.]";
  }

  return makeStr(strArr);
};*/

console.log(defangIPaddr("1.1.1.1"));
