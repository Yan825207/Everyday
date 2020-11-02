// 3. 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数
function a(arr){
    var num=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]==3)
         num++
    }
    return num
}
var arr1=a([3,4,3,5,7,9])
console.log(arr1)