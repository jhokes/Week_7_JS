var userInput = prompt("Write Something");
console.log(userInput);

function processInput(a) {
    var upper = a.toLocaleUppercase();
    var lower = a.toLocaleLowercase();
    if (a === upper) {
        console.log("Why are you using all uppercase")
    }else if (a===lower) {
        console.log("Why are you whispering?('lowercase'")
    }else {
        console.log("You are a regular person")
    }
}
processInput(userInput);