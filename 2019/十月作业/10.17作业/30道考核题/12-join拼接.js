

// // 12.var arr = ['张三'，'李四'，‘王五’]
// // 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五

var arr = ['张三' , '李四', '王五'];
console.log(arr.join('|'))
var str  = arr[0]
for(var i = 1;i<arr.length;i++) {
 str += '|'+arr[i]
}
console.log(str);

