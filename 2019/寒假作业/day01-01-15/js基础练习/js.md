## js简答题

1. js中的单行和多行注释如何表示?

2. 什么是变量,声明变量有哪几种方式？

3. 变量名命名可以包含什么？其中不能以什么开头？

4. 变量名命名为什么区分大小写？不能拿什么用来命名？




## js编程题

1. 根据题意注释下面的内容

   ```js
   ( 使用单行注释注释小括号的内容 )
   【 使用
   多行注释
   注释大括号的
   内容 】
   ···不要注释我···
   ```

2. 使用一个var同时定义：变量名为age变量值为18；变量名为name变量值无；变量名为num变量值为NaN

   ```js
   
   ```

3. 作为一名程序员，请指出下面错误的变量命名方式，并说明原因

   ```js
    var ABC = "A123";
    var name1 = "杨";
    var _age$ = 3; 
    var 6Bu = 6;
    var this = "that";
    var is_Na& = "NO"
    var 呵呵 = 233
   ```

4. 指出下面代码的错误及原因，并给出你认为正确的修正

   ```js
   var num, age, name;
   const num1;
   const name = "杨";
   const age1 = 3;
   age = age1 = 18;
   console.log(age);
   ```