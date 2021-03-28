const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(n, time) {
  let steps = Math.pow(2, n) - 1;
  let timeOfSeconds = Math.floor(3600 / time * steps);
  let result = { turns: steps, seconds: timeOfSeconds };
  return result;
};
