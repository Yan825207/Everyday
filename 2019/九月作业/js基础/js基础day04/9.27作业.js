//1.利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。
for (i = 100; i < 1000; i++) {
    var a = i % 10
    var b = (i - a) / 10 % 10
    var c = (i - a - 10 * b) / 100
    if (a * a * a + b * b * b + c * c * c == i) {
        console.log(i)
    }
}
// 2.求任意三个数字的最大值和最小值
// var arr2 = [num1, num2, num3]
//  arr2.sort(function (a, b) {
//      return a - b;
//  }
//  var min = arr2[0]
//  var max = arr2[arr2.length - 1]
//  console.log('最小值' + min, '最大值' + max)
 //3. 给一个数字赋值给一个变量num1，求出是奇数还是偶数
var a=78
if(a % 2 != 0)
{
console.log('奇数')
}else
{
    console.log('偶数')
}

                              //4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
 var a=3
 if (a % 1 != 1) {
     console.log(a + '是小数')
 } else {
     console.log(a + '是整数')
 }


// 5. 提示用户输入年龄，若用户的年龄大于等于18岁，则弹出“恭喜您，您已经成年”，否则以弹出框的方式提示用户年龄太小。
var arr=20
 if(arr>=18){
    console.log('恭喜您，您已经成年')
 }else {
     console.log('年龄太小')
 }

// 6. 利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值
var a=85
if(a>90){
    b=4
}
else if(a>80){
    b=3
}
else if(a>70){
    b=2
}
else if (a>60){
    b=1
}
console.log (b)
// 7. 利用JavaScript编写程序：通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），
//     并在页面上输出判断结果。
var age=55
if(age>=40 && age>=60){
    console.log('老年')
}
else if(age>60<=40){
    console.log('中年')
}
else if(age>24 && age<40){
    console.log('青年')
}
else if (age>14&& age<24){
    comsole.log('青少年')
}
console.log('儿童')
// 8. 接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐。
//     若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够
var m=100
if(m>=2000){
    console.log('请大家吃西餐')
}
else if(m>=1500&& a<=2000){
    console.log('请大家吃快餐')
}
else if(m>=1000&&m<=1500){
    console.log('请大家喝饮料')
}
 else  if(m>=500&& m<1000){
    console.log('请大家吃棒棒糖')
}
else if(m<=500) {
    console.log('班长下次把钱带够')
}
// 9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
var a=20/1
if (a>=90){
  console.log('A')
}
else if(a>=80&& a<=90){
    console.log('B')
}
else if( a>=70 && a<=80){
    console.log('C')
}
else if (a>=60 &&a <=70)
{
   console.log('D')
}
else  
 {
     console.log('E')
 }
 //10. 获取当前时间，判断今年是否为闰年。两种方法判断 
   //  1）判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除
var tim=2019
 if(tim%400==0){
    console.log('闰年')
}
else if(tim%4==0 && tim/100!=0){
console.log('闰年')
}
var tim=2000
if(tim%400==0||(tim%400==0&&tim/100!=0)){
    console.log('闰年')
}
// 11. 本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？

// 12. 根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
var day=5
if(day<=5){
console.log('工作日')
}
else
console.log('休息日')
// 13. 录入姓名和性别根据输入的姓名，性别，打印欢迎XX先生/女士。（性别用0和1区别。0表示女士，1表示男士）
var name = 'yan'
 var gender = 1
 if (gender == 0) {
     console.log(`欢迎${name}女士`)
 } else if (gender == 1) {
     console.log(`欢迎${name}先生`)
 }
// 14. 输出该数字打头的一个成语，视为你今天的状态
//     1：一帆风顺
//     2：二话不说
//     3：三心二意
//     4：四面楚歌
//     5：五湖四海
//     6：六亲不认
//     7：七上八下
var a='一帆风顺'
   var b='二话不说'
   var c='三心二意'
   var d='四面楚歌'
   var e='五湖四海'
   var f='六亲不认'
   var g='七上八下'
 console.log(e)
// 15. 键盘录入学生考试成绩，使用if语句判断成绩等级，并打印出来。
var age=80
 if(age>90){
     console.log('优秀')
 }else if(age>=80){
     console.log('良好')
 }else if(age>70){
     console.log('一般')
 }else if(age>=60){
     console.log('及格')
 }else if(age<60){
     console.log('差')
 }
// 16. //录入一个整数,判断它能否被3,5,7整除,并输出以下信息
//     (1)能同时被3,5,7整除
var m=105
if(m%3==0 &&m%5==0 &&m%7==0){
    console.log('能同时被3，5，7整除')
}
//     (2)能被其中两个数整除(要指出那两个数)
var n=15
if(m%3==0&m%5==0)
{
    console.log('能被3，5整除')
}
else if(m%3==0&&m/7==0)
{
    console.log('能被3，7整除')
}
else if (m%5==0&&m/7==0){
    conesole.log('能被5，7整除')
}
//     (3)只能被其中一个数整除(指出那一个)
 var w=6
 if(w%3==0 &&w%5!=0 && w%7!=0)
 {
  console.log('只能被3整除')
 }
 else if(w%5==0&&w%3!=0&&w%7!=0)
 {
   console.log('只被5整除')
 }
 else if (w%7==0&&w%5!=0&&w%3!=0){
   conesole.log('能被5整除')
 }
 //     (4)不能被3,5,7任一个整除
 varb=77
 if(b%3!=0&&b/5!=0&b%7 !=0){
     console.log('不能被3,5,7任一个整除')
 }


// 17. 录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和.
var a=2
var b=9
if(a+b>100){
    console.log(a+b-100)
}
else{
    console.log(a+b)
}
// 18. 输入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型
//     等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）
var a=3
var b=4
var c=5
if(a==b==c)
{
   console.log('等边三角形')
}
else if(a==b ||b==c||a==c){
    console.log('等腰三角形')
}
else if(a*a+b*b==c*c){
    console.log('直角三角形')
}

else if(a+b>c && a+c>b && b+c>a){
    console.log('其他三角形')
}


// 19. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
var a=123

// 20.	请编写程序，要求输入身高，体重后，输出体质指数
//     测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
//     成人的BMI数值：
//     过轻：低于18.5 
//     正常：[18.5,23.9]
//     过重：[24,27]
//     肥胖：[28,32]
//     非常肥胖, 高于32
var sg= 170
var tz  =56
var BMI= tz/(sg*2)
if(BMI >32){
    console.log('非常肥胖')
}
else if (BMI>=28&&BMI<=32){
    console.log('肥胖')
}
else if (BMI>=24&&BMI<=27){
    console.log('过重')
}
else if(BMI>=18.5&&BMI<=23.9){
    console.log('正常')
}
else if(BMI<18.5){
    console.log('过轻')
    }

