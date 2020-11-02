// 3.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。
// 声明变量
var arr= [10, 5, 34, 59, 98]
// 循环数组元素
for(var i=0;i<arr.length;i++){
//    按正序排列
    arr.sort((a, b) => {return a - b})}
    // 打印
console.log(arr)