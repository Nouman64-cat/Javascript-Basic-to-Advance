// let result = array.every(function(currentValue, index, array) {
//     // return true if all elements match the condition
// });


let numbers = [1, 2, 3, 4, 5];
let allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // Output: false
