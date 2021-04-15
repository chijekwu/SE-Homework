var colors = ["blue", "orange", "red", "yellow"];
var currentColor = 0;    

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
  let char='';
  for(char in sumMe){
    if(typeof(sumMe[char])==='number'){
        console.log(sumMe[char]);
      total += sumMe[char];
      console.log(total);
    }
  }