let fname = 'John';
let lname = 'Smith';

// fname.toLowerCase();
// fname.indexOf('o',4);
// fname.lastIndexOf('a');

var fullName= fname.concat(' ', lname);
console.log(fullName);

/*charAt()
slice()
indexOf()
concat()
lastIndex()
tolowercase()
toString()
trim()
replace()
replaceAll()
padStart()
padEnd()
*/
let message = "I like hot coffee and a hot chocolate";
console.log(message.replace('hot', 'cold'));
console.log(message.replaceAll('hot', 'cold'));
//console.log(message.replace(\hot\gi, 'cold'));
message = 'I like you';
console.log(message.padStart(11, '1'));

const str1 = '589765432';
console.log(str1.padStart(2, '99'));