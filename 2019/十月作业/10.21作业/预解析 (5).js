// 1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
 function abc() {
   console.log(a);   // underfined   函数作用域，var a  定义不赋值，
   var a = 10;
 }
abc();
console.log(a)  //25         全局作用域   赋值为25