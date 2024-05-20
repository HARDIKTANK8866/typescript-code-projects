class Users {
  
  constructor(public name: string,public age: string,public email: string) {
    
  }
  displayVal()
  {
    console.log(this.name,this.age,this.email);

  }
}
const dat = new Users("hardik", "25", "abc@gmail.com");
dat.displayVal()