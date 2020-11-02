// 打印到三角、
for (var i = 1; i <= 5; i++) {
    var num = '';
    for (var j = 0; j < i; j++) {
        num += ' '
    }
    for (var j = 5; j >= i; j--) {
        num += '* '
    }
    console.log(num)
}





// for (var i = 0; i < 5; i++) {
//     var num = ''
//     for (var j = 5; j > i; j--) {
//         num += '*'
//     }
//     console.log(num)
// }