// 13.写一个函数,求任意数组中的最大值, 
// 声明函数
function a(arr){
    // 定义变量保存最大值，默认数组中第一个元素为最大值
    var max=arr[0]
    // 循环数组元素
      for(var i=0;i<arr.length;i++){
           // 判断如果后面元素大于定义的最大值
          if(arr[i]>max){
              // 则把元素赋值给最大值
           max=arr[i]
          }
      }
    // 返回最大值
     return max
}
var arr1=[1,2,3,5,8]
console.log(a(arr1))
   
    
    