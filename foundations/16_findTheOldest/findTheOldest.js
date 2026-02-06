const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const sorted = people.slice().sort((a, b) => ((b.yearOfDeath ?? currentYear) - b.yearOfBirth) - ((a.yearOfDeath ?? currentYear) - a.yearOfBirth));
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
