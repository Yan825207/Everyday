// 12.写一个函数, 用户输入任意3个数的大小，返回最大值
function a(num1,num2,num3){
    if(num1>num2&&num1>num3){
        return num1
    }else if(num1>num1&&num2>num3){
        return num2
    }else if(num3>num2&&num3>num1){
        return num3
    }
}
console.log('最大值是'+a(1,2,3))