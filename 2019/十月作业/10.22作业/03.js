
// 3.下列代码控制台打印出的值是多少？写出执行过程
// function test(){                          
//       b();  
//       var a=1;
//      function b(){
//           console.log(a);  // ？
//           var a=2;
//       }
// }
// test();  // ? 




// 真正执行的
function test() {
      function b() {
            var a
            console.log(a);  // ？
            a = 2;
      }
      b();
      var a = 1;

}
test();  // ?