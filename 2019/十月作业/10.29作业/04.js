// 4. var str= 'qweqweoeqweroqweqweodfsfdo'
//   1)查找字符串中所有字母 'o'出现的位置
//   2)把字符串中的所有字母'o'替换成 '-';
var str = 'qweqweoeqweroqweqweodfsfdo'
for (var i = 0; i < str.length - 1; i++) {
    arr = str.indexOf('o')
    str = str.replace('o', '-')

    if (arr == -1) {
        break
    }
    console.log(arr)
}
console.log(str)