// 1. 写一个函数，实现对任意数组的排序  
function a(arr) {
    var num = 0
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+ 1] ) {
                num = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = num
            }
        }
    }
    return arr
}
var arr1 = [1, 5, 6, 3, 7]
console.log(a(arr1))