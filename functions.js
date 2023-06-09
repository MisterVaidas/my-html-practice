

// Suntax - function keyword / function name / parameters / curly braces for the body

// function declaration

//mySum;

function mySum() {
    let x = 2 + 2;
    console.log(x);
}

mySum();

// function expresion

let help = 0;

const myFunc = function () {
    let x = 3 * 3;
    console.log(x);
}

myFunc();

// parameters



function bestSum(param1, param2) { // parameters
    let x = param1 + param2;
    console.log(x);
}

bestSum("I am ", 41); // declare parameters

function theReturningSum(num1, num2, num3) {
    let sum = num1 + num2;
    let sumDivided = sum / num3;
    return sumDivided;
}
 console.log(theReturningSum(30, 30, 3));
 console.log(theReturningSum(50, 50, 2));

 function getString() {
    let help = "help"
    return help;
 }
  console.log(getString());