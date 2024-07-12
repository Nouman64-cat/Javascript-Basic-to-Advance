// let result = array.some(function(currentValue, index, array) {
//     // return true if at least one element matches the condition
// });


let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // Output: true
