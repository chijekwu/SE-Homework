num = 0;

if(num < 0){
    console.log("The number is negative")
}
else if (num == 0) {
    console.log("The number is zero")
}
else {
    
    console.log("The number is positive")
    if(num % 2 == 0){
        console.log(num + " is an even number");
    }
    else{
        console.log(num + " is a odd number");
    }
}

