const leapYears = function(a) {
    if (a % 4 !== 0) return false;
    else if (a % 100 === 0 && a % 400 !== 0) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
