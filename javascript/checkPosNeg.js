var num = 10;
if(num > 0){
    if(num >=50 && num < 100){
        console.log(num);
    }
    else{
        console.log('num ' + num + ' is positive but out of range');
    }
}else if(num < 0){
    console.log('number ' + num + ' is negative');
}
else if(num == 0){
    console.log('number ' + num + ' is zero');
}
else{
    console.log('This ' + num + ' is not a number');
}