'use strict';

// decode "craft block argon meter bells brown croon droop"

const code = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

let message = 'craft block argon meter bells brown croon droop';

function decode(string) {
  const stringToArr = string.split(' ');
  let decodedMessage = ' ';
  stringToArr.forEach(function(word){
    const firstLetter = word.charAt(0);
    switch(firstLetter){
    case 'a':
      decodedMessage += word.charAt(code.a-1);
      break;
      
    case 'b': 
      decodedMessage += word.charAt(code.b-1);
      break;
      
    case 'c': 
      decodedMessage += word.charAt(code.c-1);
      break;
      
    case 'd':
      decodedMessage += word.charAt(code.d-1);
      break;
    }
  }
  );
  return decodedMessage;
}

console.log(decode(message));