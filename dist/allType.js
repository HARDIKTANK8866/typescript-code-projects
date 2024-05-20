"use strict";
let isRaining = true;
function checkWeather(isRaining) {
    if (isRaining) {
        console.log("it's raining ,carry an  umrella");
    }
    else {
        console.log("no rain ,enjoy the weather");
    }
}
checkWeather(isRaining);
isRaining = false;
checkWeather(isRaining);
let age = 25;
let height = 175.1;
function calculateRectangleArea(length, width) {
    return length * width;
}
let area = calculateRectangleArea(5, 10);
console.log("Area of Rectangle is : ", area);
function concatenateStrings(str1, str2) {
    return str1 + str2;
}
let firstName = "hardik";
let lastName = "tank";
let fullName = concatenateStrings(firstName, lastName);
console.log("Fullname is:", fullName);
let fruits = ["apple", "banana", "orange", "mango"];
console.log("Fruits", fruits);
let searchItem = "banana";
if (fruits.includes(searchItem)) {
    console.log(`${searchItem}exists in the array.`);
}
else {
    console.log(`${searchItem}does not exits in the array.`);
}
fruits.sort();
console.log("sorted Fruits", fruits);
fruits.reverse();
console.log("reversed fruits", fruits);
let subset = fruits.slice(1, 3);
console.log("Subset:", subset);
let point;
point = [10, 20];
function movePoint(point, offsetX, offsetY) {
    return [point[0] + offsetX, point[1] + offsetY];
}
let newPoint = movePoint(point, 5, -5);
console.log("new point", newPoint);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
console.log(Color[myColor]);
