// 8.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
var n = 0;          //全局变量
function a(){
    var n = 10;       //局部变量   n赋值为10
    function b(){
        n++;             n=11
        console.log(n);      打印为11
    }
    b();
    return b;     //返回值为函数b
}
var c = a();   //?   c=函数b 
c(); //?             调用函数b   值为11
console.log(n); // ?      0