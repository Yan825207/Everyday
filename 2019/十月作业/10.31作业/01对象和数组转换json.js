// 如果要把json字符串变成js对象 用的方法: JSON.parse(字符串)
var arr = '{"name":"yyl","age":18}'
arr = JSON.parse(arr)
console.log(arr)
console.log(typeof arr)

// 把对象和数组转换为json字符串 用的方法 ： Json.stringifyy(对象或数组))
var object = {
    name: 'yyl',
    age: 19
}
var object = JSON.stringify(object)
console.log(typeof object)