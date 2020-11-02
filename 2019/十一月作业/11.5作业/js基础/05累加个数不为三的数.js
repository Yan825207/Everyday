// 5. 求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】
// 定义变量接受和
var num=0
// 循环1-100
for (var i = 1; i < 100; i++) {
    // 如果各位不为三则累加
    if (i % 10 != 3) {
        num++
    }
}
console.log(num)