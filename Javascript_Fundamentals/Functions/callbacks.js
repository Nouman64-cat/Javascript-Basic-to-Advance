//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}

processUserInput(greet); // Output: Hello, Alice!
