// set 集合
let set = new Set()
// 添加元素
set.add(1)
set.add("850")
set.add(undefined)
set.add(null)
// 属性
console.log(set.size)   //set中不能有重复的元素，  可以用来数组去重
// 方法
// 添加元素
set.add(66)
console.log(set)
// 删除属性
set.delete(undefined)
console.log(set)
// 查找元素
console.log(set.has(null))
// 清楚数据
set.clear()
console.log(set)
