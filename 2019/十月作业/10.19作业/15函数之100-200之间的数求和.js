// 5.写一个函数，求100 - 200 之间所有数的和
function a(){
    // 定义变量接收和
    var num=0
    // 循环100-200之间的所有数
    for(var i=100;i<=200;i++){
        num+=i
    }
    // 累加
    return num
}
console.log(a())