// 5. 写一个函数，判断一个数是否是素数，并返回结果true 或 false
// (又叫质数，只能被1和自身整数的数)
//  定义函数
function ss(num){
//    定义变量变量值等于true
var sum=true
// 循环num到一之间的数
for(var i=2;i<num;i++){
    if(num%i==0){
        sum=false
        return sum
    }else{
       sum=true
    }
}
return sum
}
console.log(ss(8))