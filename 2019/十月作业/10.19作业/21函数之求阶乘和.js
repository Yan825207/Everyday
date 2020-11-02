
// 21.写一个函数，实现n的阶层的和求1+2!+3!+...+n!的和
function a(n){
    var num=1
    var arr=0
    for(var i=1;i<=n;i++){
         num*=i
         arr=num
    }
    return arr
}
console.log(a(5))