function company(a:number | string,b:number | string,type:"as-number"|"as-string")
{
    if (type ==="as-number") {
         return (+a)+(+b);
    } else {
        return a.toString() + b.toString()
    }
}
console.log(company(10,20,"as-number"));
// console.log(combine("hardik","tank"));
