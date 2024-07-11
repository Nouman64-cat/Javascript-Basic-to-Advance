var myVar = "This is a var variable";
let myLet = "This is a let variable";
const myConst = "This is a const variable";

//string
let myString = "This is a string";

//Number
let myNumber = 10;

//Boolean
let myBoolean = true;

//Null
let myNull = null;

//undefined
let myUndefined;

//object
let myObject = {
    name: "Nouman",
    age: 30
};

//array
let myArray = [1, 2, 3, 4, 5];

//function
let myFunction = function(){
    console.log("This is a function");

}

//function scope
function functionScopeExample(){
    var functionScoped = "I'm only accessible within this funciton";
    console.log(functionScoped);
}

functionScopeExample();


if(true){
    let blockScoped = "I'm only accessible within this block";
    console.log(blockScoped);
}


console.log(hoistedVar) //undefined because hoistedVar is a hoisted varialbe

var hoistedVar = "I'm hoisted";


//template literals
// template literals allow for easier string interpolation and multi-line strings
let name = "Nouman";
let greetings = `Hello my name is ${name}`;

console.log(greetings);

//multiline string 
let multiLineString = `This is a
multi-line
string`;
console.log(multiLineString);
