/*

// this is common js i.e require()
const lib = require("./lib.js");

const sum = lib.sum(2, 4);
console.log(sum);

const sub = lib.diff(3, 2);
console.log(sub);

*/

// using ecma script module like react
import { sum, diff } from "./lib.js";

const sums = sum(2, 3);
const diffs = diff(2, 34);

console.log(sums);

console.log(diffs);
