## js解答题
1. 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？

    is  NaN

     true 代表不是数字

     flast代表是数字

2. 100+100结果是200，那么100+‘100’结果是什么，为什么？

    100100

   数字和字符串用加号连接数字发生隐式转化为字符串，然后拼接字符串。

3. 请说说 `+` 号有几层含义，分别是什么？

    数字间代表数学用算符+号

   字符串之间代表拼接字符串

   数字和字符串用加号链接，隐式转换然后拼接字符串

   将字符串转换为number类型

4. 前--和后--的区别是什么？

    前加加是先运算后辅值

    后加加是先赋值后运算

   单独使用时没有区别


## js编程题

1. 如何能够判断一个数字是小数还是整数？

   ```js
    parsInt取整，判断是否等于原来，如果等于则是整数，反之是小数
   ```

2. 探究题：详见下面代码

   ```js
    isNaN('') // false
    isNaN('1A') // true
   1A是字符串 ，isNaN判断返回true
    isNaN(true) // false
   true是字符串 ，isNaN判断返回true
    isNaN({}) // true
    isNaN([1,1]) // true
    // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
   ```

3. 打印下面的输出结果

   ```js
    var num1 = 12, num2 = '12', num3 = '', num4;
    console.log(num1 + num2);    //1212
    console.log(num1 + +num3);   //12
    console.log(num1 + +num4);    //NaN
    console.log(+num2 + !!num3);   //12
    console.log(!!num2 + !!num4);  //1
   ```

4. 打印下面的输出结果

   ```js
    1) var a = 10,
         b = ++a,
         c = a--,
         d = c++ + ++b + --a;
     console.log(a, b, c, d);
     9 12 12 32
    2) var a = 100,
         b = --a,
         c = a-- + b++,
         d = a - b-- + ++c;
     console.log(a, b, c, d);
   98 99 199 197
   ```
