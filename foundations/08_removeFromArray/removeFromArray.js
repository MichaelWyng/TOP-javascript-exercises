const removeFromArray = function(arr, ...toRemove) {
  let result = [];

  for (let value of arr) {
    if (!toRemove.includes(value)) {
      result.push(value);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
