// 1. 1-100之间所有数的总和 与 平均值(while实现)
var i=1
var num=0
var pjz=0
while(i<=100){
    num+=i
    pjz=num/i
    i++
}
console.log('和为'+num+'平均值为'+pjz)