// 1. 打印1-100中前三个是17的整数倍的数。
// 定义变量接受个数
var num=0
// 循环1-100
for(var i=1;i<=100;i++){
  // 判断如果能整除7则打印
  if(i%17==0){
    //   个数加一
      num++
      console.log(i)
  }
// 判断如果个数等于3则跳出循环
if(num==3){
    break
}
}
