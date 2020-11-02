// 例: 3!=6 4!=24

function jie(n){
    // 判断是否为1
    if(n==1){
        // 返回1
        return 1
    }
    // 否则递归
    return n * jie(n-1)
}
console.log(jie(4));
