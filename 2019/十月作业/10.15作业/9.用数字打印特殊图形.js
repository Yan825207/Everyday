// 9、在控制台实现下列图形:
/*  55555
    4444
    333
    22
    1
    22
    333
    4444
    55555   */

var a = 5
for (var i = 1; i <= 5; i++) {
    var num = ''

    for (var j = i; j <= 5; j++) {
        num += a
    }
    a = a - 1
    console.log(num)
}
var n=2
for(var a=1;a<=4;a++){
    var num1=''
    for(var b=0;b<=a;b++){
        num1+=n
    }
    n++
    console.log(num1)
}