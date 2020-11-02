// 7.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配 ，
//   通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"
var arr=['fourteen','fifteen','hello','please','can','spell','that','secret','this','in']
var E='in'
// ncludes()判断一个数组是否包含某元素，如果有则返回true  ，没有则返回false
if(arr.indexOf(E)!=-1){
    console.log('Yes')
}else{
    console.log('No')
}


