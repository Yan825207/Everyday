// 4. 利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）
// 循环1-100
for (var i = 2; i <= 100; i++) {
    var c = 0
    for (var j = 1; j <= i; j++) {
        if (i % j === 0) {
            c++
        }
    }
    if (c === 2) {
        console.log(i);
    }
}