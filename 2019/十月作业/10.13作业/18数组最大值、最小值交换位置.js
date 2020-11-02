// 18. 需求  :  请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，然后打印数组内容,
//               var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]
//   分析  :   定义数组,
//            循环数组
//            判断最大元素与第一个元素交换
//             判断最小元素与最后一个交换
var arr = [1, 2, 4, 5, 7, 7, 666, 0, -1, -2, -3, 5, 6]
// ?定义一个变量假设第一个元素就是最大值
var max = arr[0]
//    定义变量接受数组的下标
var num = 0
// 定义一个最小值,假设第一个元素就是最小值
var min = arr[0]
// 定义变量接受数组的下标
var num1 = 0

// 循环数组
for (var i = 0; i < arr.length; i++) {
    // 判断如果数组元素大于定义的最大值
    if (arr[i] > max) {
        //  则把值赋给变量max作为最大值和下个元素比较
        max = arr[i]
        // 把最大值的下标赋给num
        num = i
    }

    // 判断如果数组元素小于定义的最小值
    if (arr[i] < min) {
        //  则把值赋给变量min作为最小值和下个元素比较
        min = arr[i]
        // 把最小值的下标赋给num1
        num1 = i
    }
}
// arr.push(arr[num1])
// 获取最大值的元素并替换为原数组的第一个元素
// 因为将最大值放到素组最前面了,所以起始值应该从最大值的下标加一开始,取一个,把第二个元素替换在最大元素的位置


//删除最大值的位置替换成第一个值
arr.splice(num,1,arr[0])
// 把最大值放到素组最前面
arr.unshift(max)
//删除数组未添加前的第一个值
arr.splice(arr[1],1)

arr.splice(num1,1,arr[arr.length-1])
arr.push(min)
arr.splice(arr.length-1-1,1)

// 把最小值放到素组最后面
// arr.splice(num + 1, 1, arr[1])
// arr.splice(arr[arr.lenght - 2], 1)
// arr.splice(arr[1],1)

// 打印数组
console.log(arr)


// 获取最小值的元素并替换为原数组的最后一个元素
// 从最小值开始,取出一个元素,放到最小值的位置
// arr.splice(num1, 1, arr[arr.length - 2])
// arr.splice(arr[arr.lenght - 1 - 1], 1)
// console.log(arr)


