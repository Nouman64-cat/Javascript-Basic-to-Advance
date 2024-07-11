//bitwise operators treat their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.
let a = 5 & 1; //bitwise AND

let b = 5 | 1; //bitwise OR

let c = 5 ^ 1; //bitwise XOR

let d = ~5; //bitwise NOT

let e = 5 << 1; //bitwise left shift

let f = 5 >> 1; //bitwise right shift

let g = 5 >>> 1; //bitwise unsigned right shift