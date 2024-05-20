"use strict";
class Users {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    displayVal() {
        console.log(this.name, this.age, this.email);
    }
}
const dat = new Users("hardik", "25", "abc@gmail.com");
dat.displayVal();
