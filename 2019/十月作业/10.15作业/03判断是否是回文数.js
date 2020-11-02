// 3、定义一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
var num=12321
var a=parseInt (num/10000)
var b=parseInt (num%10000/1000)
var c=parseInt (num%1000/100)
var d=parseInt (num%100/10)
var e=parseInt (num%10)
if(a==e&&b==d){
    console.log(num+'是回文数')
}else{
    console.log(num+'不是回文数')
}