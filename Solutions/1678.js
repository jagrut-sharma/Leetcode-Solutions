// Link: https://leetcode.com/problems/goal-parser-interpretation/

const interpret = function (command) {
  let str = "";

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      str += command[i];
    } else if (command[i] === "(" && command[i + 1] === ")") {
      i++;
      str += "o";
    } else {
      i += 3;
      str += "al";
    }
  }

  return str;
};

interpret("G()()()()(al)");
