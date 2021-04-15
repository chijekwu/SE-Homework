/* let num = [];
num.push(0);
var sum = 0;
for(let i = 0;i<=10;i++){
    num.push(5*i);
}

for(let i = 0;i<num.length;i++){
    console.log(num[i]);
    sum+= num[i];
} */

let num1 = [];
let num2 = [];
let sumArray = [];

for(let i = 0; i<10; i++){
    num1.push(i);
    num2.push(i+2);
    sumArray.push(num1[i]+num2[i]);
}
for(let i = 0;i<num1.length; i++){
    process.stdout.write(num1[i] + ' + '+ num2[i] + ' =  ' + sumArray[i]);
    console.log();
}
console.log(num1);
console.log(num2);
console.log(sumArray);