/* 
 - this is common js type

const sum = (a, b) => a + b;

const diff = (a, b) => a - b;

// in module(exports).(sum i.e making method) and passing function sum
exports.sum = sum;
exports.diff = diff;


or--

exports.sum = (a,b) => a + b;


*/

// now using ecma scipt module
const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

export { sum, diff };
