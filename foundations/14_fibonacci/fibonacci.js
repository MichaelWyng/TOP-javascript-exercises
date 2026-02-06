const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;

    let prev = 0
    let curr = 1
    let next = prev + curr;

    for (i = 2; i <= num; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
