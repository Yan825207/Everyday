// 13.将下面对象的属性取出来存储到一个数组中
var person = {name:"one",age:12,sex:"男"};

var person = { name: "one", age: 12, sex: "男" };
var arr = [];
arr.push(person.name, person.age, person.sex);
console.log(arr);