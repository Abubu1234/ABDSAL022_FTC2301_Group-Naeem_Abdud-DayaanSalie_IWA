const firstName = 'John';
const age = 35;
const hobbies = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbies}!`)
}

hobby()

