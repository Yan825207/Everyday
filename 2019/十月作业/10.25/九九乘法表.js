for (var i = 1; i <= 9; i++) {
    var num = ''
    for (var j = 1; j <= i; j++) {
        num += j + 'X' + i + '=' + i * j + ' '
    }
    console.log(num)
}
