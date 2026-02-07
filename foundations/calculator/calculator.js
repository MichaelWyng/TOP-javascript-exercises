let userInput1 = 0;
let userInput2 = 0;
let result = 0;
let displayArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
let currentDisplayArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
let collection = "";
let currentCollection = "";


const output = document.querySelector("#output");

const buttonInput = document.querySelector("#calculatorBody");
buttonInput.addEventListener("click", (e) => {
    const button = e.target;
    if (!button.matches("button")) return;

    const type = button.dataset.type;
    const value = button.dataset.value;

    accumulate(type, value);
    render(type, value);    

    console.log(type, value);
});

const accumulate = function(type, value) {
    if(type === "number"){
        currentCollection += value;
        console.log(currentCollection);
        return;
    }
    else if(type === "operator"){
        currentCollection += value;
        console.log(currentCollection);
        return;
    }
    else if(type === "equals"){
        operate(num1, operator, num2);
        return;
    }
    else if(type === "clear"){
        console.log(currentCollection);
        renderBlank()
        currentDisplayArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
        return currentCollection = "";
    }
}

const renderBlank = function() {
    output.textContent = displayArray.join("");
    return;
}

const render = function(type, newNumber) {
    if(type !== "number") return;
    currentDisplayArray.push(newNumber);
    currentDisplayArray.shift();
    console.log(currentDisplayArray);
    output.textContent = currentDisplayArray.join("");
    return;
}

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const power = function(a, b) {
	return Math.pow(a, b);
};

const operate = function(a, operator, b) {
   return result = operator(a, b);
}

render("number", "0");