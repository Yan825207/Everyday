// 3.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。
var arr= [10, 5, 34, 59, 98]
for(var i=0;i<arr.length;i++){
    arr.sort((a, b) => {
        return a - b
   })   
}
console.log(arr)