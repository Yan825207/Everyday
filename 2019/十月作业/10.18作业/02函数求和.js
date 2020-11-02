// 2. 写一个函数，求任意数组的所有元素的和
function a(arr) {
    var num = 0
    for (var i = 0; i < arr.length; i++) {
        num += arr[i]
    }
    return num
}
var arr1=a([18,45,333,5,6,1,5])
console.log(arr1);
