// 7.  求1到100之间的累加值，其中不包含个位数为9的数字（while实现）
var i=1,num=0
while(i<=100){
if(i%10!=9){
    num+=i
}
i++
}
console.log(num)
