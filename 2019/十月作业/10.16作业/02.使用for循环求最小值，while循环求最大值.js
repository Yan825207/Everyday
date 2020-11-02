// 2.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
// 定义数组   
var num=[10, 5, 34, 59, 98]
// 默认第一个数组为最大值
var max=num[0]
// 循环数组的说有元素
for(var i=0;i<num.length;i++){
    // 如果后面元素小于定义的最小值
    if(max<num[i]){
        // 则把当前元素赋值给最小值
      max=num[i]
    }
}
// 打印

console.log(max)
// 默认第一个数组为最小值
var min=num[0]
// 定义初始值
var j=0
// while循环数组元素
while(j<num.length){
    // 判断如果小于最小值
    if(num[j]<min){
        // 则赋值给定义的最小值
        min=num[j]
    }
    // 自增
        j++
    }
    // 打印
console.log(min)