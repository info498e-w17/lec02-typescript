import readline = require('readline'); 

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Where do you want to go?', function(answer) {
  console.log('You said "'+answer.toUpperCase()+'"!');

  rl.close(); //close the whole interface once 
              //completely done asking questions
});