//Boolean
let isRaining: boolean = true;

function checkWeather(isRaining: boolean): void {
  if (isRaining) {
    console.log("it's raining ,carry an  umrella");
  } else {
    console.log("no rain ,enjoy the weather");
  }
}
checkWeather(isRaining);

isRaining = false;
checkWeather(isRaining);

//Number
let age: number = 25;
let height: number = 175.1;
function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}
let area: number = calculateRectangleArea(5, 10);
console.log("Area of Rectangle is : ", area);

// string
function concatenateStrings(str1: string, str2: string): string {
  return str1 + str2;
}
let firstName: string = "hardik";
let lastName: string = "tank";

let fullName: string = concatenateStrings(firstName, lastName);
console.log("Fullname is:", fullName);
//array
let fruits: string[] = ["apple", "banana", "orange", "mango"];

console.log("Fruits", fruits);
let searchItem: string = "banana";
if (fruits.includes(searchItem)) {
  console.log(`${searchItem}exists in the array.`);
} else {
  console.log(`${searchItem}does not exits in the array.`);
}
fruits.sort();
console.log("sorted Fruits", fruits);

fruits.reverse();
console.log("reversed fruits", fruits);

let subset: string[] = fruits.slice(1, 3);
console.log("Subset:", subset);

//Tuple
let point: [number, number];
point = [10, 20];
function movePoint(point: [number, number], offsetX: number, offsetY: number) {
  return [point[0] + offsetX, point[1] + offsetY];
}
let newPoint = movePoint(point, 5, -5);
console.log("new point", newPoint);


enum Color{Red,Green,Blue}
let myColor: Color =Color.Green
console.log(myColor);
console.log(Color[myColor]);
