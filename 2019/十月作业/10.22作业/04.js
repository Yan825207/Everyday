
// 4.下列代码控制台打印出的值是多少？写出执行过程
var foo = function () {
   console.log(2)
  }
 function foo() {
   console.log(1)
   }
  foo();   // ?  



// 真正执行的 
 function foo() {
    console.log(1)        
    }
  var foo = function () {
    console.log(2)
   }

   foo();    //同名函数会将初始的函数覆盖即输出结果为2