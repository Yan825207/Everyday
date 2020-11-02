// 2.需求  ：  定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和 
// 分析  :   定义数组，     
            //  循环数组所有元素
            //  定义接收总数的变量
            
var arr = [11,22,33,44,55]
var num=0
for(var i=0;i<arr.length;i++){
      num+=arr[i]
}
console.log(num)
