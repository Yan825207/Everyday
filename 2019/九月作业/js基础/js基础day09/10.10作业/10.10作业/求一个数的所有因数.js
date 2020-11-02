// 3.  用户输入一个数字，列出所有它能够整除的数字（while实现）
var num=10
var i=1
while(i<=num){
    if(num%i==0){
        console.log(i)
    }
    i++
}
