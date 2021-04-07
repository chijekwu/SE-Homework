var character = prompt("Enter a character: ");
character = character.toLowerCase();

let message;

if(character.length > 1){
    message = 'Please enter a character: ';
}
else if(character >= 0 && character <= 9){
    message = character + ' is a number, Please enter a character';
}
else if( (character >='a' && character <= 'z') || (character >='A' && character <= 'Z') ){
    if(character == 'a' || character == 'e' || character == 'o' || character == 'u'){
        message = 'This character '+ character + ' is a vowel';
    }
    else{
        message = 'This character '+ character + ' is a consonant';
    }
}
else{
    message = 'Please enter a character';
}

console.log(message);
