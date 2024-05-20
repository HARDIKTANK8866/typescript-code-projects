//union type used

function combine(a:number | string,b:number | string)
{
    if (typeof a ==='number' && b ==='number') {
         return a+b;
    } else {
        return a.toString() + b.toString()
    }
}
console.log(combine(10,20));
console.log(combine("hardik","tank"));

