console.log(typeof 42); // Output: number
console.log(typeof 'Hello'); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object (this is a known issue in JavaScript)
console.log(typeof Symbol('symbol')); // Output: symbol
console.log(typeof 1234567890123456789012345678901234567890n); // Output: bigint
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object (arrays are objects)
console.log(typeof function() {}); // Output: function
