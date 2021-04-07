/* let guessNum = 7;
//checking for prime numbers
 let isPrime = true;
for(let count = 2; count < guessNum; count++){
    if(guessNum%count === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(guessNum + " is a prime number");
} */


let guessNum = 100;
//checking for prime numbers
 
for(let count = 2; count < guessNum+1; count++){
    
    let isPrime = true;
    
    for(let index = 2; index< count; index++){
        if(count% index === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(count + " is a prime number");
    }
}
