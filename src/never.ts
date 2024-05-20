

function apiError(msg:any,code:any)   //msg,code : any datatype add 
{
    throw {msg,code}
}
console.log(apiError("server side error",500));
 