// 12.定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];
// 遍历arrA中的所有元素并按逆序存储在数组arrB中，并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，
// arrB的结果如下，var arrB = ["e","d","c","b","a"]
// 分析  ：定义两个数组，，
         // 循环第一个数组，将元素逆序保存到数组二中
         // 打印数组二
var arrA=["a","b","c","d","e"];
var arrB=[]
for(var i=0;i<arrA.length;i++){
   //讲数组一的元素按顺序保存到数组二的最前边
   arrB.unshift(arrA[i])
}
console.log(arrB)
