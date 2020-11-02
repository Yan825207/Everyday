
// 9.下列代码控制台打印出的值是多少？
// (function f(num) {
//     function num() { };
//     console.log(num); // ？
//     var num = 10
//     console.log(num); // ？
// }(100))




// 真正执行的 
(function f(num) {
    function num() { };
    console.log(num); // ？    num为函数   打印为函数num
    var num = 10                  // 改变num的值为10
    console.log(num); // ？      10
}(100))
