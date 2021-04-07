var num1 = 12;
var num2 = 20;
var sum = num1 + num2;

// to swap a temp variable will be created and assign num1 value
console.log("num1 is " + num1 + " num2 is " + num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log("After swapped:");
console.log("num1 is " + num1 + " num2 is " + num2);