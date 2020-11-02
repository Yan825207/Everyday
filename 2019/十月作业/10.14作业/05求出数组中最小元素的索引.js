// 5.  求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引，
    // 如果这样的元素个数大于1，则返回索引最小的数的索引

    var arr=[1,2,4,5,10,100,2,-22,]

    for(var i=0;i<arr.length;i++){
       for(var j=0;j<arr.length;j++){
          if(arr[j]>arr[j+1]){

           var arr1=arr.indexOf(arr[j+1])
          }
       }
    }
console.log(arr1)