## js解答题

1. 算数运算符都有哪些？

    +，-,* , / ,=,==,===,+=，-=...

2. NaN和任何值比较的结果都是什么？包括和自身比较吗？

    flast ，包括，

3. == 和 === 的区别在哪？
   ==，比较数值，如果相等则返回true

   ===不仅比较数值还比较数据类型，都相等才返回ture


4. 逻辑运算符有哪些, 逻辑运算的规则有哪些

    与 （&）， 或 （|） ， 非（！）

   优先级是：！、&& 、||  


## js编程题

1. `typeof` 无法显示出的数据类型名称有什么？为什么？
   
   ```js
   Array 、 object 、 null
   typeof只能判断简单数据类型
   ```
   
2. 判断下面结果的布尔值

   ```js
   //  333 == '333'  //true
   //  666 == [666]  //true
   //  '999' == [999]  //true
   //  NaN == NaN      //flast
   //  NaN === NaN     //flast
   //  undefined == null   //true
   //  undefined === null  //flast
   //  [] == []            //flst
   //  [] === []           //flst
   //  [] == 0             //ture
   //  ![] == 0            //ture
   //  [] == ![]           //ture
   
   
   
   // 数据类型转换规则：
   // 在转换不同的数据类型时，相等操作符遵循下列基本规则：
   
   // 1. 如果有一个操作数是布尔值，则在比较相等性之前，将其转换为数值；
   
   // 2. 如果一个操作数是字符串，另一个操作数是数值，在比较之前先将字符串转换为数值；
   
   // 3. 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；
   
   // 4. 如果有一个操作数是 NaN，无论另一个操作数是什么，相等操作符都返回 false；
   
   // 5. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果指向同一个对象，则相等操作符返回 true；
   
   // 6. 在比较相等性之前，不能将 null 和 undefined 转成其他值。
   
   // 7. null 和 undefined 是相等的。
   ```

3. 打印输出下面的结果

   ```js
   1) true && !true   //falst
   2) false || !false  //ture
   3) false || !true && !false     //flast
   4) true && !false || false      //ture
   5) undefined && true            //undefined
   6) 2+2 > 5 || 3-3 <=0 && !undefined     //ture
   
   ```

4. 打印输出下面的结果

   ```js
   var a = 10;
   var b = a++;     // b=10   a=11
   console.log(b>=a);        // flast
   var c = b + 'a';    
   console.log(c);     // "10a"
   console.log(c == ('a' + b))  //flast
   
   ```