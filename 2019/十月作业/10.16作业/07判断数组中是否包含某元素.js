// 7.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配 ，
//   通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"
// 定义数组
var arr=['fourteen','fifteen','hello','please','can','spell','that','secret','this','in']
var E='in'
// ncludes()判断一个数组是否包含某元素，如果有则返回true  ，没有则返回false
// 查找数组里是否有用户输入的单词
// 有则返回元素下标，没有则返回-1
// 如果返回的值不是-1
if(arr.indexOf(E)!=-1){
    则打印Yes
    console.log('Yes')
    // 否则打印no
}else{
    console.log('No')
}


