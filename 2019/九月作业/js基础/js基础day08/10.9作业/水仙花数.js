// 利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。
// 定义一个变量接收数据
var num
for (var i = 100; i < 1000; i++) {
    // 取出各位数字
    var a = i % 10;
    var  b= parseInt(i / 10 % 10);
    var c = parseInt(i / 100);
  //判断是否满足每一位数字的立方和等于该数字本身
    if(a*a*a+b*b*b+c*c*c=== i) {
        //如果满足 打印输出
        console.log(i);
    }

}
