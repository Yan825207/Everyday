// 16.某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
//   第一组： 89，66，54
//   第二组： 77，93，68
//   第三组： 55,   45,  88
//   第四组： 71,   76,  75


var arr = [
    [89, 66, 54],
    [77, 93, 68],
    [55, 45, 88],
    [71, 76, 75]
]
var sum = 0;//存和
var count = 0;//存累加了多少次
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        count++;
        sum += arr[i][j];
    }
}
console.log(sum / count);