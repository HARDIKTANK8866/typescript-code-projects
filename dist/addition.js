"use strict";
let message = "hello typescript";
function addition(a, b) {
    return a + b;
}
function printMessage(message) {
    console.log(message);
}
printMessage(message);
console.log("this sum of 3 and 5 is :", addition(3, 5));
