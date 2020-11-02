// 4.  求整数1～100的累加值，但要求跳过所有个位为3的数(while实现)
var i=1,num=0
while(i<=100){
if(i%10!=3){
    num+=i
}
i++
}
console.log(num)
