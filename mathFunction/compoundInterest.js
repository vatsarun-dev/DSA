// let cp = p(1 + r / 100) ^ (t) -p;

let prompt = require("prompt-sync")();
let p = prompt("enter the principal: ");
let r = prompt("enter the rate: ");
let t = prompt("enter the time: ");

console.log((p * Math.pow(1 + r / 100, t) - p).toFixed(2));
