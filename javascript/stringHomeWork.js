//text processing
let textVar = `A for...in loop iterates over the properties of an object in an arbitrary order \
(see the delete operator for more on why one cannot depend on the seeming orderliness\
     of iteration, at least in a cross-browser setting).\

If a property is modified in one iteration and then visited at a later time, its value in the\
 loop is its value at that later time. A property that is deleted before it has been visited\
  will not be visited later. Properties added to the object over which iteration is occurring\ 
  should may either be visited or omitted from iteration.\
In general, it is best not to add, modify, or remove properties from the object during iteration,\
 other than the property currently being visited. There is no guarantee whether an added property\
  will be visited, whether a modified property (other than the current one) will be visited before or\
   after it is modified, or whether a deleted property will be visited before it is deleted.`;
//get the text from the user and store it in a variable
//textVar = input('Enter your text: ');

//clean the text
textVar = textVar.replace(/^\s+|\s+$/gm,'').trim();
const re = /[.*+?^${}();'|[\]\\] /g;
textVar = textVar.toLowerCase().split("re");
//remove all not important characters and words
let newWord = '';
let manyWords =[];
wordCount = {};         //the object that's holds the count of word in a sentence

for(var i in textVar){
    textSecond = textVar[i].split(" ");
    
    for(var j in textSecond){
        manyWords.push(textSecond[j]);
    }   
}

//count the words and check which of the word appear most
//manyWords = manyWords.flat(2);
for (var i=0; i<manyWords.length; i++) {   
    if ( manyWords[i] in wordCount) {
        
        wordCount[manyWords[i]] = wordCount[manyWords[i]]+1;
    }
    else {
        wordCount[manyWords[i]] = 1;
    }
}

console.log(wordCount);