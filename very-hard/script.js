var number1 = prompt("first num plz");
var number2 = prompt("second num plz");
var operation = prompt("Operations");
//parse string into number
var parseNumber1 = parseInt(number1)
var parseNumber2 = parseInt(number2)
console.log(typeof number1);
function calc(number1, operation, number2){
    if (operation === "+"){
    var sum = add(number1,number2);
    console.log(number1,"+", number2,"=", sum);
    return number1, number2, sum;
    }
if (operation === "*"){
var sum = multiply(number1,number2);
    console.log(number1,"*", number2,"=", sum);
    return number1, number2, sum;
}
if (operation === "/"){
var sum = divide(number1,number2);
console.log(number1,"/", number2,"=", sum);
return number1, number2, sum;
}
if (operation === "-"){
var sum = subtract(number1,number2);
console.log(number1,"-", number2,"=", sum);
return number1, number2, sum;
}
    }
function add(number1,number2){
return number1 + number2;
}
function subtract(number1, number2){
    return number1 - number2;
}
function multiply(number1,number2){
    return number1 * number2;
    }
    function dvide(number1, number2){
        return number1 / number2;
    }
calc(parseNumber1, operation, parseNumber2)