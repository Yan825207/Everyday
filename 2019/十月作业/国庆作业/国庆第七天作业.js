// 一、编程题
// 61.计算从1到100临近两个整数的合并依次输出3(1+2),第二次输出5(2+3),最后一次输出199(99+100)
// 62.把1-100之间的数字，10个数字为一组，在控制台打印出每组的和，
//例如，1-10的和为一组，输出来，11-20的和为一组输出来，依次类推
// 63.开发一个标题为“ FlipFlop”的游戏应用程序。它从 1 计数到100 ，遇到3的倍数输出单词“ Flip”，
//遇到5的倍数就输出单词“Flop”，遇到即使 3 又是 5 的倍数时则输出单词“ FlipFlop” ，其余情况下输出当前数字
for(var f=1;f<=100;f++){
    if(f%3==0){
        console.log('Flip')
    }else if(f%5==0){
    console.log('Llop')
} else if(f%3==0&&f%5==0){
    console.log('FlipFlp')
}else{
    console.log(f)
}
}

// 64. 将下列文字分成多行显示, 春眠不觉晓，处处闻啼鸟。 夜来风雨声，花落知多少。
var a=
`村眠不觉晓
处处闻啼鸟
夜来风雨声
花落知多少`
 console.log(a)
// 65. 定义一个四位数，按逆序打印出各位数字。例如原数字为4321，应输出1234
var num=1234
var a,b,c,d
a=parseInt (num/1000)
b=parseInt (num%1000/100)
c=parseInt (num%100/10)
d=parseInt (num%10)
console.log(d,c,b,a)
// 66.定义一个三位数，求各位数的总和是多少，在控制台输出
var a=112
var b ,c ,d 
b= parseInt (a/100)
c= parseInt (a%100/10)
d= parseInt (a%10)
console.log(b+c+d)
// 67.计算1+1/4+1/9+….+1/400，并且在控制台输出结果
var num
var num1=1
for (a=4;a<=400;a++){
    num=5+a
   num1+=1/num
   
}
console.log(num1)
// 68. 计算1-100能被3整除，但是不能被5整除的数，在控制台打印出来，并且统计出个数
var num=0
for( var i=1;i<+100;i++){
    if(i%13==0&&i%5!=0){
        num+=1
        console.log(i)
    }
} console.log(num)
// 69.输出从2000年（含）到3000年（含）间的所有闰年
for(var i=2000;i<=3000;i++){
    if(i%4==0){
        console.log(i)
    }
}
// 70.计算下列表达式的结果：，并写出详细步骤
//  var a = 10;
//  var b = 2;
//  a %=b;
// console.log(a);
// console.log(b++);
  var a = 10;
 var b = 2;
 a =a%b;
console.log(a);   //=0
console.log(b++);  //先赋值再加一   =2
// 二、简答题
// 1.console.log(0.1+.03)结果是什么，为什么      0.4
// 2.怎么将一个小数，取小数点的后2位       变量名.toFixed
// 3.什么是隐式类型转换，什么时候发生        在运算的时候由于两边的数据类型不相等，就会出现隐式转换
// 4.类型转换时，Number和parseInt的区别是什么    parseInt 转换成整数

