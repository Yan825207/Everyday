// 6. 写一个函数，判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】
function a(num) {
    if (num % 4 == 0 && num % 100 != 0 || num % 400 == 0) {
        return '是闰年'
    } else {
        return ('不是闰年')
    }
}
console.log(a(2000))