/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

function maxOfTwoNumbers(a, b){
    // ADD YOUR CODE HERE
    if(a<b){return b;}
    else{return a;}
  }
  
  //maxOfThree();
  
  /*
  2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
  */
  function maxOfThree(a,b,c){
    return maxOfTwoNumbers(a, maxOfTwoNumbers(b,c));
  }

  console.log(maxOfThree(10,9,5));
  /*
  3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  function isCharacterAVowel (a){
        character = a.toLowerCase();

        let message = false;

        if(character.length > 1){
            process.stdout.write('Please enter a character: ');
        }
        else if(character >= 0 && character <= 9){
            process.stdout.write(character + ' is a number, Please enter a character');
        }
        else if( (character >='a' && character <= 'z') || (character >='A' && character <= 'Z') ){
            if(character == 'a' || character == 'e' || character == 'o' || character == 'u' || character == 'i'){
                message = true;
            }
        }
        return message;
  }
  
  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
  */
  
  function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
  }
  
  function multiplyArray(array){
    let product = 1;
    for (let i = 0; i < array.length; i++)
        product *= array[i];
    return product;
  }
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  function findParameterLength(fun){
    return fun.length;
  }
  /*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString(originalWord){
    // var originalWordClean = originalWord.toLowerCase();
    // originalWordClean = originalWordClean.trim();
    //sort words and store them backward.
    let backwardWord ='';
    let wordLenght = originalWord.length;

    // for(let index=1; index<wordLenght+1; index++) {
    //     backwardWord = backwardWord.concat(originalWord[wordLenght - index]);
    //     //console.log(originalWord[wordLenght-index]);
    // }
    for(let index=wordLenght-1; index>=0; index--) 
            backwardWord = backwardWord.concat(originalWord[index]);
            //console.log(originalWord[wordLenght-index]);
    return backwardWord;

  }
  
  /*
  7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
  */
 
  function findLongestWord(arr){
    let longest = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){ longest = arr[i].length;}
    }
    return longest;
  }
  let arr = ['king', 'Queen', 'Princes','Princess'];
  console.log(findLongestWord(arr));
  
  /*
  8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
  */

  function filterLongWords(arr, num){
    //declare a array to hold the words longer then the number
    let longWords = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i].length > num){longWords.push(arr[i]);}
    }
    if(longWords.length < 1){return null;}
    return longWords;
  }
  

