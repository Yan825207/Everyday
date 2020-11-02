// 21.用户输入“你是男人吗？”，回答如果是true， 那么输出“原来你是男人呀，呵呵”，  
//如果回答是：false，那么输出“你的性别难道是女?”。
var gender=true
if( gender=true){
    console.log('原来你是男人呀，呵呵')
}else if(geder=false){
    console.log('你的性别难道是女?')
}
// 22.输入两个整数，放入到a与b变量中去， 如果a>=b就将a与b中的值进行交换，否则就不交换
var a=6
var b=5
var c=0
if(a>=b){
  c=a
  a=b
  b=c
  console.log(a,b)
}else {
    console.log(a,b)
}
// 23.输入一个三位整数，判其是不是降序数如:531是降序数 百位>十位>个位
var num=321
a = parseInt(num/100)
b= parseInt (num%100/10)
c= parseInt(num%10)
if(a>b&&b>c){
    console.log('是降序')
}
// 24.用户输入”你爱我吗？”,如果回答的是”yes”,则输出”你是爱我的”,
//如果回答的是”no”,则输出”原来你不爱我”,如果回答的是其它，则输出”你到底是爱还是不爱，自己也不清楚”
var ai='no'
if(ai=='yes'){
    console.log('你是爱我的')
}else if(ai=='no'){
    console.log('原来你不爱我')
}else{
    console.log('你到底是爱还是不爱，自己也不清楚')
}
// 25.利用JavaScript编写程序：张三为他的手机设定了自动拨号
// 按 1：拨爸爸的号
// 按 2：拨妈妈的号
// 按 3：拨爷爷的号
// 按 4：拨奶奶的号
var phone=4
if(phone==1){
    console.log('拨爸爸的号')
}else if(phone==2){
    console.log('拨妈妈的号')
}else if(phone==3){
    console.log('拨爷爷的号')
}else if(phone==4){
    console.log('拨奶奶的号')
}
// 26.利用JavaScript编写程序实现如下功能；普通顾客购物满 100 元打 9 折；
//会员购物打 8 折；会员购物满 200 打 7.5 折。
var gk='会员顾客'
var money =300
if(gk=='会员顾客'){
   if(money>=200){
       console.log('打75折')
   }
}else if(gk=='普通顾客'){
    if(money>=100){
        console.log('打9折')
    }
}
// 27.利用JavaScript编写程序，根据用户定义的运算符，如果是+号，则求出2个数的和；如果是-号，则求出2个数的差；
//如果是*号，则求出2个数的积;如果是/号，则求出2个数的商；如果是%,求出2给数的余数；否则打印输入有误。
var num='/'
var a=6
var b=5
if(num=='+'){
    console.log(a+b)
}else if(num=='-'){
    console.log(a-b)
}else if(num=='*'){
    console.log(a*b)
}else if(num=='/'){
    console.log(a/b)
}
// 28.利用JavaScript编写程序，定义一个变量num并且赋值,
// 1)如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2)如果 num 能被 3 整除，返回字符串 fizz
// 3)如果 num 能被 5 整除，返回字符串 buzz
// 4)如果num不是 Number 类型，返回 false
// 5)其余情况，返回参数 num  
var num =55
if(num%3==0&&num%5==0){
    console.log('fizzbuzz')
}
else if(num%3==0){
    console.log('fizz')
}
else if(num%5==0){
    console.log('buzz')
}
else if(num!=Number){
    console.log('false')
}
else {
    console.log('num')
}
// 29.有个人想知道，一年内之一对兔子能繁殖多少对？
// 于是就筑了一道围墙把一对兔子关在里面。已知一对兔子每个月可以生一对小兔子，
//而一对兔子从出生后第3个月起每月生一对小兔子。
// 假如一年内没有发生死亡现象，那么，一对兔子一年内（12个月）能繁殖成多少对？ 
//（不要看这些文字）这是著名的斐波那契数列
// //兔子的规律为数列，1，1，2，3，5，8，13，21    
//斐波那契系数 前两个数的和等于后一个  (拔高题)

// 二、简答题
// 1.什么情况下控制台会输出undefined    定义变量却没赋值的
// 2.字符串可以解析变量嘛？怎么解析   
//用 `...`    然后使用 ${变量名}  来解析变量   
// 3.Js中的‘+’有几层含义，分别是什么     转数字、 连接字符串 、 运算符号
// 4.console.log(1+’false’)和console.log(1+false)的值，并解释为什么
//  1false        'false'为字串
//  1               false转换数字为0