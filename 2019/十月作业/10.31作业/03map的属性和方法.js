// map 语法一：
// 定义空的map
//  let map = new Map()

// 字面量方式定义map
let map = new Map([
    ["name", "yyl"],
    ["age", 28]
])

// map的属性和方法
// 判断数组长度
console.log(map.size);

//   在字典中添加数据
map.set("a", 1)
console.log(map)
// 删除数据
map.delete("age")
console.log(map)
// 查找某元素的值
console.log(map.get("name"))
// 查找某元素  如果有则返回true 没有则返回false
console.log(map.has("name"))
// 删除所有数据
map.clear()
console.log(map)

