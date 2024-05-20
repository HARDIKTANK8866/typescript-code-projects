"use strict";
class User {
    constructor() {
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
}
const u1 = new User;
u1.setName("hardik");
u1.displayName();
