// 5.  求100到200之间所有的奇数的和（while实现）
var i=100,num=0
while(i<=200){
    if(i%2!=0){
        num+=i
    }
    
    i++
}
console.log(num)