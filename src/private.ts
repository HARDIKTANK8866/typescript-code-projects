class User{
    private name: string =""

    setName(name : string)
    {
        this.name=name
    }
    displayName()
    {
        console.log(this.name);
        
    }
}

const u1= new User;
u1.setName("hardik")
u1.displayName()