class Car {
  private make: string;
  private model: string;
  private year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails(): string {
    return `Car Details:\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);

console.log(myCar.getDetails());
