// 2.输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
 function abc() {
   console.log(a);   // 25          全局定义赋值为25
   a = 10;                         // 更改值为10
 }
abc();
console.log(a)  //    10             打印10

