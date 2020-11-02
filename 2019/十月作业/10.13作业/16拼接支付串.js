// 16.var arr = ['张三'，'李四'，‘王五’]
// 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五
// 分析   ：   定义数组， ，  定义一个空字符串
//             
//             循环数组，判断如果元素小于length
//             则元素后加 '|'赋值给空字符串
//             大于则元素不变赋值给空字符串
var arr = ['张三','李四','王五']
var num=''
for(var i=0;i<arr.length;i++){
if(i<arr.length-1){
    num+=arr[i]+'|'
}else{
    num+=arr[i]
}
}
console.log(num)

