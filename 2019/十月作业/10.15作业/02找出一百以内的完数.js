// 2、一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出100以内的所有完数。
// 循环1-100所有的元素
for(var i=1;i<=100;i++){
    // 定义一个变量等于0用来接收因数和
    var num=0
    // 循环小于i的所有数
    for(var j=1;j<i;j++){
        // 如果i能够整除j
        if(i%j==0){
            // 则把因数累加
            num+=j
        }
    }
    // 如果这个数等于因数和则打印
    if(num==i){
        console.log(num)
    }
}