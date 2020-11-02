//1.在控制台打印输出目前所学的所有数据类型的类型
// console.log(typeof 123)
// console.log(typeof false)
// var name
// console.log(typeof name)
// console.log(typeof '闫')
// console.log(typeof {})
// console.log(typeof [])
// console.log(null)


// 2.数据类型的相互转换:
//  Number(true)  // ?     1
//  Number(false) // ?     0
//  Number(" ") // ?       0
//  Number( [] ) //?       0
//  Number(['1','2']) //?   NaN
//  Number([1]) // ?       1
//  Number({})   //?        NaN
//  Number({a:1}) // ?      NaN
//  Number("3.14") //?      3.14
//  Number(null) // ?       0
//  Number(undefined) //?    NaN
//  Number("12456aaaa") //?  NaN 
//  String({}) // ?          [object Object]
//  String([]) // ?          ''
//  String(123) //?          123
//  String(false) //?        false
//  String(null) //?          null
//  String(undefined) //?      undefined
//  undefined.toString() //?    报错
//  null.toString()  //?        报错
//  Boolean(0) // ?             false
//  Boolean("") //?            false
//  Boolean(undefined) //?     false
//  Boolean(null) //?         false
//  Boolean(NaN) //?          false
//  Boolean({}) // ?          true
//  Boolean([])  // ?         true


// 3. 将下列结果打印出来下面的题的结果
 var num1 = 123;                                                      
 var num2 ="123"                                                        // 因为数字打了引号，所以加号成了连接号
  console.log(num1+num2)  123123                                      //246，转成数字类型了，所以等于123+123=246
  console.log(num1 + +num2)  246                                      // 123+true=123+1=124,因为隐式类型转换把true自动转成数字1了
  console.log(num1 + !! num2)  124                                   // 123+123=246
  console.log(num1+Number(num2))  246                                      
//4. 求值                                      
var a = 1; var b = ++a + ++a;   console.log(b);  //   5                                      
var a = 1; var b = a++ + ++a;   console.log(b);  //   4                                      
var a = 1; var b = a++ + a++;   console.log(b);  //   3                                      
var a = 1; var b = ++a + a++;   console.log(b);  //   4                                      
//5.输出下面的结果:                                      
console.log ( NaN == NaN );//？                    false                                      
console.log( NaN === NaN ); //？                   false                                      
console.log ( undefined == null );//？             true                                      
console.log ( undefined === null );//？            false                                      
console.log ( 1 + "true" ); // ？                  true                                      
console.log ( 1 + true );  //？                    2                                      
console.log ( "abc" > "b" ); //？                  false                                      
console.log ( "abc" > "aad" ); //？                true                                      
console.log ( [] == [] ); //？                     false                                      
console.log ( [] === [] ); //？                   false                                      
console.log ( [] == ! [] ); // ？                 true                                      
console.log ( [] == 0 );//？                      true                                      
console.log ( ! [] == 0 );//？                     true                                      
//8. 输出下面的结果:                                      
var num1 = 20;                                      
var num2 = 30                                      
console.log(num1%num2);  // 20                                      
num1+= num2                                      
console.log(num1);  //  50                                      
num1 = num1- num2;  // 将这段代码改写                                      
console.log(num1);   // num1 -= num()


// 9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
//    利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度
 var tem = 30;
// var htem = (9 / 5) * tem + 32;
// console.log('华氏度是' + htem + '华氏度');



// 10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。
var Name = '闫雨龙';
var Age = 20;
var adders = '河北';

console.log(`我是${Name}
今年${Age}了
我来自${adders}`);
