// // 8. 写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。
// //    你要做的是统计出到200之间的整数一共有多少个3。
function a(){
    var num=0
    for(var i=100;i<=200;i++){
       if(i%10==3){
           num++
       }
       if(parseInt(i/10%10)==3){
           num++
       }
    }
  return num
}
console.log(a())









// // 7. 写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。
// // 你要做的是统计出到200之间的整数一共有多少个3。
// function getNum() {
//     // 设置变量来递增
//     var count = 0;
//     // 判断100到200 之间是否有3的数
//     for (var i = 100; i <= 200; i++) {
//         //将个位和十位的数字找出
//         var a = i % 10;
//         var b = parseInt(i / 10 % 10)
//         // 判断是否每个位上有3的数字
//         if (a == 3) {
//             count++
//         }
//         if (b == 3) {
//             count++
//         }
//     }

//     return count

// }
// var result = getNum();
// console.log(result);
