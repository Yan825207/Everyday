// 9. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）
function a(num){
    var he=0
    for(var i=1;i<=num;i++){
        if(num%i==0){
            he+=i
        }
    }
    return he
}
console.log(a(6))