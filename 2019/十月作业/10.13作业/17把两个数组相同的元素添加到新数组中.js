// 17. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
//    要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组
// 分析  :  定义三个数组,,  
//          循环两个数组,判断如果数组二中元素等于数组一中的元素则添加到新数组中
//          步骤   定义三个数组,,
       var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
    //    空数组用来接受一二数组相同的元素
       var arr3=[]
       /* 双循环用第一个数组的元素与二数组所有元素比较 */
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
        // 如果相等
        if(arr1[i]==arr2[j]){
            // 添加到空数组里
         arr3.push(arr1[i])
        }
    }
}
// 打印
console.log(arr3)