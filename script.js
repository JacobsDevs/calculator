//Calculator

//Need our button 0 - 9, + - * / and =.  Also add .

//Need our vars, num 1, num 2, operator, result & decimals(to limit to 1 decimal place.)
let num1 = num2 = operatorChoice = result = decimals = 0;
let operator;
let operatorJustPressed = true;
let equalsJustPressed = false;

//Get the Input Screen
const inputNum = document.getElementById("inputNumbers");
inputNum.value = 0;
//Get all the number buttons
const numbers = document.querySelectorAll(".number");
//for each of the number buttons set up the buttonPressed function.
for (number of numbers) {
    number.addEventListener("click", buttonPressed);
};

//Get all the operator buttons
const operators = document.querySelectorAll(".operator")
//Add the operator function to distinguish which button was pressed, save the current inputNum and reset the decimals and inputNum.value to 0
for (operator of operators) {
    operator.addEventListener("click", operatorPressed);
};

//Get all memory buttons
const memoryButtons = document.querySelectorAll(".memory")
for (memButton of memoryButtons) {
    memButton.addEventListener("click", memoryPressed);
};

//Get Clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearPressed);

//Get Backspace button
const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", backspacePressed);

//buttonPressed() will add the button pressed to the inputNum.value.  It will also check for multiple decimal points and will not allow a 2nd . to be added to the number
function buttonPressed() {
    if (operatorJustPressed == true){
        inputNum.value = "";
        operatorJustPressed = false;
    };
    if (equalsJustPressed == true) {
        num1 = 0;
        equalsJustPressed = false;
    };
    if (this.innerText == "." && decimals < 1){
        inputNum.value = inputNum.value + this.innerText;
        decimals++;
    } else if (this.innerText == "." && decimals >= 1) {
        return;
    } else {
        inputNum.value = inputNum.value + this.innerText;
    };
};

//Check if we're holding any numbers
//If we aren't, save the first number and save the operator so we know 
//what to do to it with the next number.  
function operatorPressed() {
    let oldOperator = operator;
    operator = this.innerText;
    decimals = 0;
    if (num1 == 0) {
        num1 = inputNum.value;
        inputNum.value = "";
        return;
    };
    if (oldOperator == "+") {
        num1 = parseInt(num1) + parseInt(inputNum.value);
        inputNum.value = num1;
        operatorJustPressed = true;
    } else if (oldOperator == "*") {
        num1 = parseInt(num1) * parseInt(inputNum.value);
        inputNum.value = num1;
        operatorJustPressed = true;
    } else if (oldOperator == "/") {
        num1 = parseInt(num1) / parseInt(inputNum.value);
        inputNum.value = num1;
        operatorJustPressed = true;
    } else if (oldOperator == "-") {
        num1 = parseInt(num1) - parseInt(inputNum.value);
        inputNum.value = num1;
        operatorJustPressed = true;
    };
    if (operator == "="){
        inputNum.value = num1; 
        equalsJustPressed = true;
    };
};

//Memory Function
function memoryPressed() {
    if (this.innerText == "M" && num2 == 0) {
        num2 = inputNum.value;
        inputNum.value = "";
    } else if (this.innerText == "M") {
        inputNum.value = num2;
        num2 = 0;
    } else if (this.innerText == "MC") {
        num2 = 0;
    };
};

function clearPressed() {
    num1 = inputNum.value = num2 = 0;
    operator = oldOperator = null
    operatorJustPressed = true;
};

function backspacePressed() {
    inputNum.value = inputNum.value.slice(0, -1);
}