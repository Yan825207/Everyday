// 11.写一个函数，求任意一个数的阶乘
function a(x){
    // 定义一个变量接受阶乘
    var jc=1
    for(var i=1;i<=x;i++){
        jc*=i
    }
    return jc
}
console.log(a(3))