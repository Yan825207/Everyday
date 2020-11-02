// 4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
var num=51.45
if(num%1==0){
    console.log(`${num}是整数`)
}else if(num%1!=0){
    console.log(`${num}是小数`)
}