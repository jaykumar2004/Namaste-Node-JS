require("./xyz.js");

//import { x,calculateSum } from "./sum.js";

const {calculateSum,calculateMultiply} = require("./calculate");
const data = require("./data.json")
const util = require("node:util");

console.log(data);

var name = "jay kumar"; 

var a = 10;

var b = 20;

// var x = 100;

console.log(name);

console.log(a+b);

calculateSum(a,b);
calculateMultiply(a,b);

// console.log(x);