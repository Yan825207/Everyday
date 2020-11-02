// 1、定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），
// 遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组
var arr = []

function sun(min, max) {
    for (var i = 0; i < 5; i++) {
        var n = parseInt(Math.random() * (100 - 10 + 1) + 10)
        arr.push(n)
        if (arr[i] < 50) {
            arr[i] = 0
        }
    }
}
sun(10, 100)
console.log(arr)
