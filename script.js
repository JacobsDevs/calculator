//Calculator

//Need our button 0 - 9, + - * / and =.  Also add .

//Need our vars, num 1, num 2, operator, result
let num1, num2, result = 0;
let operator;

//Get the Input Screen
const inputNum = document.getElementById("inputNumbers");

//Get all the number buttons
const numbers = document.querySelectorAll(".number");
//for each of the number buttons set up the buttonPressed function.
for (number of numbers) {
    number.addEventListener("click", buttonPressed)
};

function buttonPressed() {
    inputNum.value = inputNum.value + this.innerText;
}