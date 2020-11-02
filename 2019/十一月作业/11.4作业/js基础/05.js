// 5.打印九九乘法表
// 外层循环控制行数
for (var i = 1; i <= 9; i++) {
    // 定义变量连接字符串
    var num = ''
    // 内层循环控制列数
    for (var j = 1; j <= i; j++) {
        num += j + 'X' + i + '=' + i * j + ' '
    }
    console.log(num)
}