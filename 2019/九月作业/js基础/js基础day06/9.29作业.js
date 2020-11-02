// 1.     字符串用+号连接
 //2，   如何吧一个数转换成字符串？ 如何把字符串转换成整数
          //console.log(String(Number))
          // console.log(ParseInt( )
//3   i++先赋值再运算，++i先运算在赋值
//4       乘后赋值  *=
//         var a=5;
//         a*=5; 相当于a=5*a
//5  求余用%
//6      ==数值相等，===数值和类型都相等
//7 NaN 非数字
//8 NaN ==NaN的结果是 false  NaN不等同于任何，包括本声
//9  var a={
     //    name : '闫雨龙'
     //}
     //console.log(a.name)
//10 删除对象属性   
//     delete 对象名加属性
//11 打印第二个元素的第四个元素
//    var  a=[1,[3,4,5,6]]
//    console.log(a[1][3])
//12   什么时候使用.
//   取对象中某一u键值对属性的时候
//13   1至100 能够整除5的和
//      var a=0
//      for(var i=1;i<=100;i++){
//      if(i%5==0){
//          a+=i
//      }
//      }
//      console.log(a)
// 14分支有三种结构：单项分支，双向分支，多项分支
    //单向分支是指一个，如果中只有一行代码。
    //双向分支是指一个，如果中有两段代码，如果有一段代码条件允许就执行。
    //多向分支是指一个，如果中有多段代码，哪段代码条件允许就执行。
// 15查看一个变量的类型 
  //console.log（typeof（属性名）） 
//  16    1=='1'是否相等         相等
//   0=='0'是否相等       不相等
//   17  并且用&&表示
//  18    定义一个对象保存姓名和年龄，然后判断是否成年
//     var people={
    // name:'闫雨龙',
    // age: 20
// }
// if(people.age>=18){
// console.log('xxx已成年')
// }else{
    // console.log('xxx未成年')
// }
//19与%%表示并且  一假则假
//   或||表示或者  非一真及真
// ！非       布尔值取反
//20  三种执行js代码的方法
  //1网页中运行
  //2Node中运行
  //3vscode中运行
//21定义对象
    //var 属性=属性名
//22打印对象中的属性
   //  console.log(属性.属性值)
//23 var 属性=[属性值]
    // console.log(属性[角标])
// 24 计算1~100之间的所有奇数

  //  for(var i=1;i<=100;i++){
  //      if(i%2!=0){
  //          console.log(i)
  //      }
  //  }
//25 定义变量保存学生分数按分类打出优，良，及格，不及格，
    //  var fs=55
    //  if(fs>=90){
        //  console.log('优')
    //  }
    //  else if(fs>=70&&fs<80){
        //  console.log('良')
    //  }
    //  else if(fs>=60&&fs<70){
        // console.log('及格')
    // }else if(fs<60){
        // console.log('不及格')
    // }
    //26   true && fales && true &&false  的结果是false
    // 27    false || fales ||false ||true    的结果是true
    // 28   ！ false && !true && !false      的结果是false
    //29      如何把一个数字转成布尔？
//             console.log（布尔（变量））