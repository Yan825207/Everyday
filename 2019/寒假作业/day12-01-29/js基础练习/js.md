## js解答题

1. 数组的两种定义方式是什么

     字面量 ： var  arr=[]

   关键字   ： var arr=new array()


2. 什么是元素下标(索引)，简述在数组中如何使用

    每个元素都有下标，从0开始  arr[0]代表第一个元素


3. 数组中索引的范围是多少？

    数组长度减一


4. 如何知道一个数组的长度，其长度代表的是什么？

   ​	arr.lengh

   ​	代表元素的个数

## js编程题

1. 使用两种定义方式将【true,全栈,666,Full_Stack,{name:"杨"},[1,2]】存入数组

   ```js
   var arr = [true, "全栈", 666, "Full_Stack", {
           name: "杨"
       },
       [1, 2]
   ]
   console.log(arr)
   var arr2 = new Array(true, '全栈', 666, 'Full_Stack', {name: "杨"},[1, 2]);
   console.log(arr)
   ```

2. 分别打印数组var arr = ['金','木','水']中的每个元素

   ```js
   var arr = ['金','木','水']
   for(var i=0;i<arr.length;i++){
       console.log(arr[i])
   }
   ```

3. 操作数组var arr = [1,2,[3,4,5,6],7,[8,9,10]]

   ```js
   1) 打印元素2
   2) 打印元素5
   3) 打印元素7
   4) 打印元素10
   var arr = [1, 2, [3, 4, 5, 6], 7, [8, 9, 10]];
   // 1) 打印元素2
   console.log(arr[1]);
   // 2) 打印元素5
   console.log(arr[2][2]);
   // 3) 打印元素7
   console.log(arr[3]);
   // 4) 打印元素10
   console.log(arr[4][2]);
   ```

4.  操作数组var arr = [1,[2,3,4],[5,[6,7]],{name:"杨"},true,false]

    ```js
    
    // 1) 打印出[6,7]
    console.log(arr[2][1]);
    // 2) 打印数组中的对象
    console.log(arr[3]);
    // 3) 打印该对象的属性值
    console.log(arr[3].name);
    // 4) 将数组中的true和false互换位置
    var cup = arr[4];
    arr[4] = arr[5];
    arr[5] = cup;
    console.log(arr);
    ```

