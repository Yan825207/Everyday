// 4.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
//     1.去除数组中重复的内容，只保留唯一的元素。
//     2.以下列格式打印数组：[9,10,6,1,3,5,4]
// 定义数组
var arr=[9,10,6,6,1,9,3,5,6,4]
// 循环每个数组元素用第一个元素和后面元素比较，
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
        // 如果有元素相等且下标不相等
        if(arr[i]==arr[j]&&i!=j){
            // 则删除这个元素
        arr.splice(j,1)
        }
    }
}
// 打印
console.log(arr)