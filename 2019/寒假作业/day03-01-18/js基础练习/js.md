1. 请简述`typeof`的用途，`typeof`的返回结果都是什4么数据类型？

      判断简单的数据类型，返回字符串

2. 数据类型转换，转Number类型有哪些方式？Number +，parseInt（）

3. 数据类型转换，转字符串类型有哪些方式？哪种方式存在什么限制？

- toStrinh：先把基本数据类型装箱，再用对象的toString（）方法
- 加一个“”来实现自动转换
- 如果是篇章的话可以使用join来转串。

1. 数据类型转换，转布尔类型有某种方式？

- Boolean（）
- 如果判断结果是否等于true或flase。

1. 什么是隐式类型转换，有什么是隐式类型转换？

## js编程题

1. 回答以下代码中的结果

   ```
   控制台。log （typeof  [ ] ） //对象
   控制台。log （typeof  [ 666 ] ） //对象
   控制台。log （typeof  [ { age：18 } ] ） //对象
   控制台。log （typeof  NaN ） //数字
   控制台。log （typeof'true  ' ） //字符串
   控制台。日志（typeof  typeof undefined ） //字符串
   ```

2. 说出下面元素转Number类型的结果

   ```
   1 ） '' // 0 
   2 ） '666' // 666 
   3 ） '88＆' // NaN 
   4 ） true // 1 
   5 ） false // 0 
   6 ） null // NaN 
   7 ）未定义// NaN 
   8 ） {  } // NaN 
   9 ） { 名称：“ 9” ，年龄：9 } // NaN 
   10 ） [ ] // 0 
   11 ） [ 1 ] // NaN
   12 ） [ 1 ，1 ] // NaN的
   13 ） [ [ ] ] // NaN的
   14 ） [ [ 1 ] ] // NaN的
   ```

3. 说出下面元素转String类型的结果

   ```
   1 ） 666 // 666 
   2 ） '' // 
   3 ） true // true 
   4 ） false // false 
   5 ） null // null 
   6 ）未定义//未定义
   7 ） {  } // [object Object] 
   8 ） { 名称：“ 9” ，age：9 } // [对象对象] 
   9 ） [ ] // 
   10 ） [ 1 ，'A' ] // 1，'A'
   11 ） [ 8 ，{ age：8 } ，8 ] // 8，[object Object]，8 
   12 ） [ 1 ，[ 2 ，[ 3 ] ] ] // 1,2,3
   ```

4. 说出下面元素转布尔类型的结果

   ```
   1 ） 0 // FLASE 
   2 ） 1 //真
   3 ） - 1 //真
   4 ） '' // FLASE 
   5 ） '0' //真
   6 ） 的NaN // FLASE 
   7 ）空// FLASE 
   8 ）未定义的/ / flase 
   9 ） {  } // true 
   10 ） { name：“ 9” ，age：9 } // true 
   11 ） [ ] // true
   11 ） [ 0 ] // true 
   12 ） [ false ] // true 
   12 ） [ null ， undefined ] // true
   ```