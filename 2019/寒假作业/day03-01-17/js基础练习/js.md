## js解答题

1. 如何通过字面量方式创建对象，对象都是有什么组成的？

   ​     var  对象名={属性：属性值}

   对象由键值对组成


2. 如何使用new关键字创建对象?

    var 对象名 = new object ()


3. 说明对象的基本操作（读取，修改，添加，删除） 

    读取 ： 对象名.属性

   修改 ：  属性名 = 属性值

   属性名存在则修改，不存在则添加

   删除 ： delete  对象名.属性


4. 创建对象有几种方式，分别是什么？写语法

1.字面量方式： var 对象名={属性：属性值}

2.系统创建函数构建对象：var  变量名=new object（）

3.工厂函数创建对象：var 函数名 =funtion（形参）{

var 对象名 =new object（）；

对象名.键=形参；

return 对象名

}

var 新的变量=函数名（实参）；

4.自定义构造函数创建对象

var  函数名 =function（形参）{

this.键=形参；

}

var 对象名=new 函数名（实参）

## js编程题

1. 字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】

   ```js
   var obj={
       name:"可乐",
       age:18,
       xingbie:"你猜",
       aihao:"Rush B",
   }
   ```

2. 使用new关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】

    ```js
    var obj=new Object()
    obj.name="雪碧",
    obj.age="19",
    obj.xingbie="未知"
    obj.aihao="Rush A"
    console.log(obj)
    ```

3. 根据步骤操作对象

    ```js
    1) 定义一个对象：【姓名:柠檬 年龄:17】
    2) 输出该对象的姓名
    3) 修改该对象年龄为：未成年
    4) 添加对象属性：性别为女，爱好为画画，职业为学生
    5) 输出该对象
    6) 删除该对象的姓名
    7) 输出该对象
    
    var obj={
        name:"柠檬",
        age:17,
    }
    console.log(obj.name)
    obj.age="未成年"
    obj.xingbie="女"
    obj.aihao="画画"
    obj.zhiye="学生"
    console.log(obj)
    delete obj.name
    console.log(obj)
    ```

4. 使用三种方式给对象var obj = {name:"杨"}添加属性age为30

    ```js
    `参考答案：
    1) obj.age = 30; 
    2) obj['age'] = 30; 
    3) var age = "age"; obj[age] = 30;`
    ```