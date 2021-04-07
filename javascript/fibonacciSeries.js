var fibNum = 6;
let previous = 0;
let current = 0;
let answer = 0;

for(let count = 0; count<=fibNum; count++){
    answer = previous + current;
    if(count === 1){
        answer = 1;
    }
     previous = current;
     current = answer;
     
}

console.log('The fibonacci number for ' + fibNum + ' is ' + answer);