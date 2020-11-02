// 18.给定一个整数，写一个函数来判断它是否是 3 的幂次方
function a(num){
    var j=1
    var flag=false
for(var i=1;i<=num;i++){
    j*=3
    if(j==num){
        flag=true
       break
    }else if(j>num){
   flag=false
   break
    }
}0
return flag
}
console.log(a(81))