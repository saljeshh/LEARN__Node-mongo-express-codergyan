/*

// this is common js i.e require()
const lib = require("./lib.js");

const sum = lib.sum(2, 4);
console.log(sum);

const sub = lib.diff(3, 2);
console.log(sub);

*/

/*
// using ecma script module like react
import { sum, diff } from "./lib.js";

const sums = sum(2, 3);
const diffs = diff(2, 34);

console.log(sums);

console.log(diffs);
*/

// using fs module
const fs = require("fs");

// this is synchronous so it mustnt be used in server as server isnt blocked
// const txt = fs.readFileSync("demo.txt", "utf-8");
// console.log(txt);

// this is asynchronous , so response is in callback

// testing performace
const t1 = performance.now();
console.log(5 + 7);

/*
    when we pass only one argument in callback it means its error
    as first is (err, data) is format
*/

fs.readFile("demo.txt", "utf-8", (err, text) => {
  console.log(text);
});
const t2 = performance.now();
console.log(9 + 7);

console.log(t2 - t1);
