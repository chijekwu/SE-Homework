/*Store a sentence in a string variable and find the total number of vowels that string contains
you can display those vowels if you want to
*/


//get the sentence and store it a  variable
let sentenceSt = 'Store a sentence in a string variable and find the total number of vowels that string contains\
                    you can display those vowels if you want to';

//find the vowels in the sentence and store in a variable calle vowelsAph
let vowelsAph = '';
for(let index =0; index < sentenceSt.length; index++){
    let char = sentenceSt[index];
        if(char == 'a' || char == 'e' || char == 'o' || char == 'u'){
            vowelsAph = vowelsAph.concat(char);
        }
        else{
            vowelsAph = vowelsAph.concat(' ');
        }
}
console.log(vowelsAph);
//find the number of the vowels in the sentence by using lenght 

//display them.