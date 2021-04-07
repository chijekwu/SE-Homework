
// const prompt = require('prompt');
// prompt.start();
// prompt.get(nameT, function(err, result){});

var userStart = 3;
var userEnd = 20;
console.log('The Start number = ' + userStart + ' and the End number = ' + userEnd);
/* for(let counter = userStart; counter <= userEnd; counter++){
    if(counter%2 == 0){
        console.log('The counter value is ' + counter);
    }
} */


let counter = userStart;
while(counter <= userEnd){
    if(counter%2 == 0){
        console.log('The counter value is ' + counter);
    }
    counter++;
}