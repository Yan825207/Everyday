// 11.  var arr = [1,888,4,66,7,8]
//     要求，可以把数组中的下标为 3 的元素移到数组的开头 

var arr = [1,888,4,66,7,8]

arr.splice(3,1,)
arr.unshift(arr[3])
console.log(arr)