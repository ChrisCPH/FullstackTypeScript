// Class exercise 1

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function greeting(name) {
    console.log(`Hello, ${name}!`);
    readline.close();
  }
  
  function processUserInput(callback) {
    readline.question(`What's your name? `, callback);
  }
  
  processUserInput(greeting);
  //processUserInput((name) => { 
    //console.log(`Hello, ${name.toUpperCase()}!`);
    //readline.close();
  //})

  processUserInput((name) => { 
    console.log(`Hello, ${name.length}!`);
    readline.close();
  })