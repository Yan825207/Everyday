// 声明一个三位数，按逆序打印出各位数字。例如原数字为312，应输出213。
//定义一个三位数保存数据
var num=520
// 取出各位数调换位置打印输出
// 百位
a=parseInt(num/100)
// 十位
b =parseInt(num%100/10)
// 各位
c= parseInt(num%10)
console.log(c,b,a)