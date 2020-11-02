
// 17.写一个函数，实现无论用户传入几个数字，都可以求和，
// 例如，console.log(add(1,2,3)); //6   console.log(add(1,2,3,4,5,6)); //21
// 定义函数
function he(){
    var num=0
    for(var i=0;i<=arguments.length-1;i++){
     num+=arguments[i]
    }
    return num
}
console.log(he(1,2,3,4,5,7))