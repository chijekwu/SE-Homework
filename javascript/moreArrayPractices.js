// var num = [20,3,78,100,-1,0]
// console.log(num.reverse());
// console.log(num.sort());
// console.log(num.sort().reverse())

// num.pop();
// if(array[0] < array[3])
// let sorted = array.sort( function (a,b){return (a-b)})

let givenNums = [3, -3,84,42,2, 100];

/* for(let i = 0; i <= givenNums.length-1; i++){
    for(let j = 0; j < givenNums.length; j++){
        if(givenNums[i] < givenNums[j]){
            var temp = givenNums[i];
            givenNums[i] = givenNums[j];
            givenNums[j] = temp;
        }
    }
    console.log(givenNums);
} */

//bubble sortings
let nofsort = 1;
for(let i = 0; i <= givenNums.length; i++){
    for(let j = 0; j < givenNums.length-1; j++){
        if(givenNums[j] > givenNums[j + 1]){
            var temp = givenNums[j+1];
            givenNums[j+1] = givenNums[j];
            givenNums[j] = temp;
            console.log(givenNums);
        }
        nofsort += 1;
        
    }
    
}