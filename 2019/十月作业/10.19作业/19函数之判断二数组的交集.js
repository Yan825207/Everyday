// 19.给定两个数组，编写一个函数来计算它们的交集。
function a(arr1,arr2){
    var arr3=[]
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
              arr3.push(arr1[i])
            }
        }
    }
    return arr3
}
var arr1=[1,2,3,4,5]
var arr2=[1,3,5,7]
console.log(a(arr1,arr2))