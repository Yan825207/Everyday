// 8. 去掉字符串两端和中间的空格，var str = '   ab  cd    ';
// var str = '   ab  cd    ';
// str.trim()
// console.log(str)
var str = '   ab  cd    ';
let sum = ''
for (var i = 0; i < str.length; i++) {
  if (str[i] != ' ') {
    sum += str[i]
  }
}
console.log(sum); 