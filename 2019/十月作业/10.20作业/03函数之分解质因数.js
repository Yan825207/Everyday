// 3.写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5
    // ！ 不理解 ！！！



function f1(num) {
    //   创建字符串
    var str = num +"=";
    //   定义最小的质数为2
    var i = 2;
    // 如果i<=输入的数num就进入循环
    while (i <= num) {
        // 判断如果num能被i整除
        if (num % i == 0) {
            // 字符串拼接
            str += i
            // 如果不能与i就加上*
            if (num != i) {
                str += '*'
            }
            num /= i;
            // 否则 i++
        } else {
            i++;
        }
    }
    return (str)
}

console.log(f1(90))