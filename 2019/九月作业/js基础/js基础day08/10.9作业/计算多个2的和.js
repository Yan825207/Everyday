// for循环求2+22+222+2222+22222的和
var n = 2;
// 定义一个累加变量 sum
var sum = 0;
for (var i = 0; i < 5; i++) {      
    n = n * 10 + 2;
    sum += n
}
console.log(sum);
