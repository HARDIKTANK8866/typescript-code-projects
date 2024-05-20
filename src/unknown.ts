// any datatype is uesed all datatype allowed in ts but unknown datatype is strickly follow
// all variable are same datatype but if any data type is string that you can not used unknwon datatype

let Data: unknown;
Data = 20;
Data = "hello";
let item: string;
if (typeof Data === "string") {
  item = Data;
}
