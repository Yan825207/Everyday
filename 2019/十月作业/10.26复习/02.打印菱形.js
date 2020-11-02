
for (var i = 0; i < 3; i++) {
    var num = ''
    for (var j = i; j < 3; j++) {
        num += '-'
    }
    for (var k = 0; k <= i * 2; k++) {
        num += '*'
    }
    console.log(num)
}
console.log('********')
for (var a = 0; a < 3; a++) {
    var num1 = ''
    for (var b = 0; b <= a; b++) {
        num1 += '-'
    }
    for (var c = 5; c > a * 2; c--) {
        num1 += '*'

    }
    console.log(num1)
}