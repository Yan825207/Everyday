// 5、用for循环求1+11+111+1111+11111+111111的和
var num = 0
he = 0
for (var i = 1; i <= 6; i++) {
   he = he * 10 + 1
    num += he
}
console.log(num)