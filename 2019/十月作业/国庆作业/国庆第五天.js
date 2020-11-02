// 41.入职薪水10K，每年涨幅5%，输出50年后工资多少
v=1
xs=10
for(var i=1;i<=50;i++){
    v=xs+(xs*5/100)
}
console.log(v+'k')
// 42.求出1-1/2+1/3-1/4…..-1/100的和（拔高题）
var  n=0
     v=0
     for(var i=1;i<=100;i++){
         if(i%2!=0){
        n+=(i-1)
         }else if(i%2==0){
        v+=(i+1)
         }
     }
     console.log(v+n)
 
// 43.用for循环求2+22+222+2222+22222的和
h=0
num=0
for(var i=0;i<5;i++){
    num=num*10+2
    h+=num
}
console.log(h)

// 44.定义一个人的对象，有name,age,gender,height等属性，
// 要求：1)获取name的值
// 2)通过2种方式给对象添加一个新的属性weight,值自己写
// 3)删除属性名height
var people={
    name:'闫雨龙',
    age:20,
    gender:'男',
    height:170
}
people.weight=55

delete people.name
delete people.height
 console.log(people)
// 45.定义一个数组，取出下标是3的值，计算下表是2和下表是4对应的元素的和，并且赋值给一个变量，在控制台输出
var arr=[1,2,3,4,5]
arr[3]
var num=arr[2]+arr[4]
console.log(num)
// 46.定义一个二维数组，var arr = [1,2,’3’,true,[22,33,55,66]],将55输出在控制台上
var arr = [1,2,'3',true,[22,33,55,66]]
console.log(arr[4][2])
// 47.猴子偷桃  第一天吃一半+1个，第二天吃剩下的一半+1个，以后都吃剩下的一半+1个 到第10天只剩一个了 
//问第一天摘了多少桃子？

var a=1
for(var i=1;i<=10;i++){
    a=(a+1)*2
}
console.log(a)
// 48.控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和
// 49.控制台输出：求1 x 2 x 3 x 4 x ... x 19 x 20的结果
var num=1
for(var i=1;i<=20;i++){
   num*=i
}
console.log(num)
// 50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？
for(var i=100;i<=500;i++){
    var a,b,c
    a=parseInt(i/100)
    b=parseInt(i%100/10)
    c=parseInt(i%10)
    if(a!=4&&b!=4&&c!=4){
        console.log(i)
    }
}
// 二、简答题
// 1.怎么将别的数据类型转换成字符串类型
// String (属性名)
// 2.怎么定义一个对象，并且给获取对象的属性，给对象添加和删除属性
// var people={  
//      name:'闫'
// } 
//添加属性   people.eig=18
//删除属性   delete people.age
// 3.== 和 === 的区别是什么？
//== 数值相等，
//===数值和类型都相等
// console.log(1 == “1”)和console.log(1 === fasle)的结果是什么，并解释为什么
// true     字符串转数字是一
// false    false转数字也是一 ，但类型不同
// 4.前++ 后++的区别是什么
//前加加先运算后赋值。。后加加先赋值在运算