// 8.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序
var arr= [1,3,2,8,6,11,9]
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i-1;j++){
         if(arr[j]>arr[j+1]){
            var num=arr[j]
             arr[j]=arr[j+1]
             arr[j+1]=num
         }
    }
}
console.log(arr)