// let result = array.reduce(function(accumulator, currentValue, index, array) {
//     // return the new accumulator value
// }, initialValue);


let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
