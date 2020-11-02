// 6. var str="hello world 378nihao",分别统计出字符串中的英文字母、数字、空格的个数
var str = "hello world 378nihao"
var yw = 0
var num = 0
var kg = 0
for (var i = 0; i < str.length ; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        yw++
    }
    if (str.charCodeAt(i) > 48 && str.charCodeAt(i) <= 57) {
        num++
    }
    if (str.charCodeAt(i) == 32) {
        kg++
    }
}
console.log(`英文字母的个数是${yw},数字的个数是${num},空格的个数是${kg}`)
// A - Z的ASCII码是65 - 90
// a - z的ASCII码是97 - 122
// 数字的ASCII码是48-57
// 空格的ASCII是32

et A = "A"
// console.log(A.charCodeAt(0))//65
// // 求出Z的ASCII码
// let Z = "Z"
// console.log(Z.charCodeAt(0))//90


// // 求出数字的ASCII码
// let n1 = "0"
// console.log(n1.charCodeAt(0))//48

// // 求出数字的ASCII码
// let n2 = "9"
// console.log(n2.charCodeAt(0))//57


// 求出空格的ASCII码
// let k = " ";
// console.log(k.charCodeAt(0));//32
// A - Z的ASCII码是65 - 90
// a - z的ASCII码是97 - 122
// 数字的ASCII码是48-57
// 空格的ASCII是32