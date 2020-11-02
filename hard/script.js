var number1 = prompt("first number ");
var operation = prompt("operation");
var number2 = prompt("second number" );
console.log(number1);
function calc(number1, number2) {
    console.log(operation);
}
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
calc(2, "*",2)