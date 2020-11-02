// 10. 求1到100所有不能被3整除的整数的第一个大于2000的和
var i=1
num=0
while(i<=100){
    if(i%3!=0){
    num+=i
    }
 
    if(num>2000){
        console.log(num)
        break
    }
    i++
}

