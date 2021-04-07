// num= int(input(‘Enter a number: ‘))
let number = 1634;
// num_original =num2=num
let count = number.toString().length;
let originalNumber= number;
let quotient = number;
// sum1 = 0
sum = 0;
// cnt=0

// while(num>0):

while(quotient>0){
let reminder = quotient% 10;
sum += reminder**count;
quotient = Math.floor(quotient/10);

}
if(originalNumber==sum)
    console.log('horray! ' + originalNumber + ' is Armstrong Number' )
else
    console.log('Not Armstrong');

