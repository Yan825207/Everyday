// 循环遍历map
let map = new Map([
    ["name", "yyl"],
    ["age", 28]
])
// 1 fo...if 
// 循环map中的所有键
for (let key of map.keys()) {
    console.log(key)
}
// 循环map中的所有值
for (var value of map.values()) {
    console.log(value)
}
// 循环所有键值对
for (var item of map.entries()) {
    console.log(item)
}
// forEach循环
map.forEach(function (value, key) {
    console.log(key, value)
})
