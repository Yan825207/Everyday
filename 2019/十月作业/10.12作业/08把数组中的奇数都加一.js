// 需求：   8.已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容
// 分析  ：  定义数组 ，，   
//          循环数组里的所有元素
//          判断数组中的元素如果是奇数则加一，是偶数则减一，
var arr= [1, 3, 5, 8, 10, 11, 16]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr[i]-=1
    }else if(arr[i]%2!=0){
        arr[i]+=1
    }
}
console.log(arr)
