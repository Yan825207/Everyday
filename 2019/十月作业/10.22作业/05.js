// 5.下列代码控制台打印出的值是多少？写出执行过程
// console.log(a);    // ?    
// var a = '666';
// function a(){ console.log('我是函数') }
//  console.log(a);    // ?


// 真正执行的
function a(){ console.log('我是函数') }
var a
 console.log(a);    // ?           打印函数{ console.log('我是函数') }
 a= '666';                       //改变a为666
 console.log(a);    // ?