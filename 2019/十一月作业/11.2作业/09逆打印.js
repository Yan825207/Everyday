   // 9. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
        // 定义变量接受用户录入的三位数
  var num=123
//   分别找出各位,十位,百位
var gw=num%10
var sw=parseInt(num/10%10)
var bw=parseInt(num/100)
// 拼接字符串打印
console.log(gw,sw,bw)