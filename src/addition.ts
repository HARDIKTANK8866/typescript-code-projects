let message :string = "hello typescript"

function addition(a:number, b:number):number {
    return a+b
}
 
function printMessage(message: string): void{
    console.log(message);
    
}

printMessage(message)
console.log("this sum of 3 and 5 is :",addition(3,5));