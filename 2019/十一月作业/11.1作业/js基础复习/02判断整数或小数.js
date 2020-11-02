// 2. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
var num = 3.14
// 判断能否整除一能是整数
if (parseInt(num) == num) {
    console.log(`${num}是整数`)
    // 不能是小数
} else {
    console.log(`${num}不是整数`)
}