"use strict";

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function getSum(a) {
    return function (b) {
      callCount++;

      if (callCount <= 3 || callCount % 2 === 1) {
        return a + b;
      } else {
        return `Bzzz... Error!`;
      }
    };
  };
}

module.exports = makeRobotAccountant;
