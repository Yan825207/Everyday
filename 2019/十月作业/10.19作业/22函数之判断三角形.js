// 22.写一个函数， 传入3 个正数，判断能否构成一个三角形
function a(num1, num2, num3) {
    var n = true
    if (num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2) {
        n = true
        return n
    } else {
        n = false
        return n
    }
}
console.log(a(7, 4, 3))
