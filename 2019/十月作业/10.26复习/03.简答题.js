// 1.js数据类型有哪些（中英文都要写）？
// 答：js的数据类型分为2大类：基本数据类型和复杂数据类型，基本数据类型有:number(数字)，string(字符串)，boolean(布尔)，undefined(未定义),null(空)
// 复杂数据类型有：Array(数组)，Object(对象)等
// 2.请说出目前你在哪些情况下会碰到undefined的情况？
// 答：1）变量只声明没有赋值，会返回undefined；
// 2）当下标超过数组或字符串的范围 ，会返回undefined；
// 3）当对象调用不存在的属性时，会返回undefined；
// 4）当return没有返回值，会返回undefined；
// 3.怎么判断js变量的数据类型？
// 答：判断js变量的数据类型可以通过typeof,但是typeof仅仅能判断的是简单的数据类型，不能判断复杂的数据类型
// 4.数据类型转换涉及的转换是哪些，分别有什么方式实现转换？ 
// 答：转数字：Number（）、+-*/%、parseInt（）、parseFloat（）
// 转字符串：String（）、toString（）
// 转布尔：Boolean（）、!!（）
// 5.写出javascript中typeof返回的所有数据类型?
// 答：console.log(typeof undefined)  // undefined
// console.log(typeof  123)  // number
// console.log(typeof ‘123’ ) // string
// console.log(typeof false) // boolean
// console.log(typeof null) // object
// console.log(typeof [1,2]) // object 
// console.log(typeof {}) // object
// 6. let和var的区别是什么？
// 答：1）使用let声明变量的作用域不会提升  -----   而var会自动提升
// 2）在相同的用作用域下不能有相同的变量，否则报错  ------   而var中则可以出现相同变量名，且不会报错
// 3）作用域只限制于当前代码块{}   -----   var的作用域则是函数体function(){}
// 4）let的for循环体现父子作用域
// 7. 使用toString有哪些限制？
// 答：undefined和null不能调用toString方法,调用的话会报错
// 8. 其他数据类型转布尔类型是 false有且只有哪些？
// 答：null , “”,undefined , 0 ,NaN
// 9.说出2种隐式类型转换和4种显示转换？
// 答：2种隐式类型的转换有: !!, 算术运算符(+、-、*、/)
//   4种显示转换:Number()，Boolean()，String（），parseInt()
// 10.如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？
// 答：判断一个变量是否是数字，可以通过isNaN(变量名)，输出true代表变量不是一个数字，输出false代表变量是数字
// 11.100+100结果是200，那100+‘100’结果是什么，为什么？
// 答：100+”100”的结果是100100,因为+右边是字符串，+和字符串同时出现的时候，+的意义就是做字符串的拼接。
// 12.请写出JavaScript的逻辑运算符，规则分别是什么？
//  答：js的逻辑运算符有&&(与)、||（或）、 ！（非）
//  &&的规则是：只有符号两边有一个为假就是假
//  ||的规则是：只要符号两边有一个为真就是真
//  ！的规则是：如果变量为真，那么！之后的结果就是假，如果变量为假，！之后的结果就是真
// 13.判断flase || !true && false 和 !false && true||true的结果分别什么，并写出具体过程？
// 答：false || ！true &&false的结果是false,
// false&&!true||true的结果是true
// 因为逻辑运算符的运算规则如下：
//  &&的规则是：只有符号两边有一个为假就是假
//  ||的规则是：只要符号两边有一个为真就是真
//  ！的规则是：如果变量为真，那么！之后的结果就是假，如果变量为假，！之后的结果就是真
// 14. N是aN == NaN 判断的结果什么，为什么？
// 答：NaN为Na == NaN的结果是假，因N不与任何值相等，包括它本身
// 15. 请说明 == 和 === 的区别是什么？
// 答：==和只比较值，如果等号两边的数据类型不一致，会进行隐式的转换，然后在进行比较，===既比较值也比较数据类型