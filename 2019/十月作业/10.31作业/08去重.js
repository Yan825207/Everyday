// 两种方法去重
let arr = [2, 0, 5, 2, 5, 0]
let set = new Set([2, 0, 5, 2, 5, 0])
var arr1 = []
for (let key of set.keys()) {
    arr1.push(key)
}

console.log(arr1)

// 方法二 ：
// let arr=[2, 0, 5, 2, 5, 0]
// // 循环遍历数组
// var arr1=[]
// for(var i=0;i<arr.length;i++){
//     if(arr1.indexOf(arr[i])==-1){
//       arr1.push(arr[i])
//     }   
// }
// console.log(arr1)