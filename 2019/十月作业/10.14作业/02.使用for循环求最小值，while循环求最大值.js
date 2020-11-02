// 2.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
// 定义数组   
var num=[10, 5, 34, 59, 98]
var max=num[0]
for(var i=0;i<num.length;i++){
    if(max<num[i]){
      max=num[i]
    }
}
console.log(max)

var min=num[0]
var j=0
while(j<num.length){
    if(num[j]<min){
        min=num[j]
    }
        j++
    }
console.log(min)