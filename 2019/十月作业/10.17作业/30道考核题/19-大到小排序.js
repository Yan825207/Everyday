// // 19.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。

var arr = [10, 5, 34, 59, 98];
for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)


// console.log(arr.indexOf(98))

// console.log(arr[arr.length-1])