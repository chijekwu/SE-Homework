//text processing
let textVar = ' The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method\'s call.  ';
//get the text from the user and store it in a variable
//textVar = input('Enter your text: ');

//clean the text
textVar = textVar.replace('\s', '');
const re = /[.*+?^${}();'|[\]\\] /g;
textVar = textVar.toLowerCase().split(re);
//remove all not important characters and words
let newWord = '';
for(var i in textVar){
    newWord = newWord.concat(textVar[i].split(" "));
    
}
console.log(newWord);
//count the words and check which of the word appear most

//display it.
console.log(textVar);