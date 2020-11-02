// 14.写一个函数,去掉任意数组中重复的元素


// 方法二
function a(arr){
    var arr1=[]
    for(var i=0;i<arr.length;i++){
        if(arr1.indexOf(arr[i])==-1){
            arr1.push(arr[i])
        }
    }
    return arr1
}
var arr2=[1,2,3,3,3,74,1]
console.log(a(arr2))