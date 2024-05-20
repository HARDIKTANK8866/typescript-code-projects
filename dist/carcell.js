"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `Car Details:\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`;
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getDetails());
