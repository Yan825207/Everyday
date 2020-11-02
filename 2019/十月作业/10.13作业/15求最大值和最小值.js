// 15. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]
// 需求   ：   定义一个数组，两个变量   变量用来接受最大值和最小值
//             循环数组，假设第一个元素最大，判断后面元素是否大与第一个元素，
//              如果大于则赋值给变量在继续比较
var arr =  [11, 32,55, 47,79,23]
var num=0
var max=0
var min=0
max=arr[0]
min=arr[0]
for(var i=0;i<arr.length;i++){ 
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(max)
console.log(min)