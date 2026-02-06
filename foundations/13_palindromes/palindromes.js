const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  const arr = Array.from(string);
  const reversedArr = [...arr].reverse();

  if (arr.join("") === reversedArr.join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
