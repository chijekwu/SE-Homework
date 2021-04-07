let originalWord = 'racecar';
let backwardWord = '';
// var originalWordClean = originalWord.toLowerCase();
// originalWordClean = originalWordClean.trim();
//sort words and store them backward.

let wordLenght = originalWord.length;

// for(let index=1; index<wordLenght+1; index++) {
//     backwardWord = backwardWord.concat(originalWord[wordLenght - index]);
//     //console.log(originalWord[wordLenght-index]);
// }
for(let index=wordLenght-1; index>=0; index--) 
        backwardWord = backwardWord.concat(originalWord[index]);
        //console.log(originalWord[wordLenght-index]);
    

if(originalWord === backwardWord)
    console.log(originalWord + ' is palindrome');
else
    console.log(originalWord + ' is not palindrome');

