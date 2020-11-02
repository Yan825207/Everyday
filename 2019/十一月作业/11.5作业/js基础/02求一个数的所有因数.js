// 2. 用户输入一个数字，列出所有它能够整除的数字。?
var num=20
// 定义循环小于用户输入的数
for(var i=1;i<num;i++){
    // 判断如果能整除则打印
    if(num%i==0){
        console.log(i)
    }
}