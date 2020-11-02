// 1.用函数实现任意数组从小到大的排序，不允许使用sort 
// 定义函数
function px(arr){
//    双循环数组元素
for(var i=0;i<arr.length;i++){
    // 定义零时变量
    for(var j=i+1;j<arr.length;j++){
        // 判断如果前面的数大于后面的则互换位置
        if(arr[i]>arr[j]){
            // 定义临时变量
          var num=arr[i]
          arr[i]=arr[j]
          arr[j]=num
        }
    }
}
return arr
} 
console.log(px([1,5,3,4,2,9,88,7]))