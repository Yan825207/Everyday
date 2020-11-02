## js解答题

1. 系统构造函数创建对象的格式

    

   ```javascript
   var person = new Object();
   person.name = '...';
   person.sex = '...';
   person.age = ...;
   console.log(person);
   ```

2. 工厂函数创建对象的格式

   ```
   var person = function (name, sex, age, hobby) {
       var object = new Object();
       object.name = name;
       object.sex = sex;
       object.age = age;
       object.hobby = hobby;
       return object;
   };
   var man = person('...', '...', ...);
   console.log(man);
   ```

3. 自定义构造函数创建对象的格式 

   ```
   var Person = function (name, sex, age, hobby) {
       this.name = name;
       this.sex = sex;
       this.age = age;
       this.hobby = hobby;
   }
   var man = new Person('...', '...', ...);
   console.log(man);
   ```

4. 构造函数创建对象有什么好处？

   ```
   通过封装后的构造函数创建对象，可以方便快捷大量的创建我们需要的对象。
   ```


## js编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 要求分别使用 `4` 种方式创建下面要求的对象
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得 `年龄` 这个属性删除
 - 将对象的 `身高` 的值题换成"180cm"
 - 给对象添加属性 `学号` ，通过两种方式

 ```js
// 【一】1.字面量创建对象
var coke = {
   name: '可乐',
   sex: '水',
   age: 3,
   height: '未知',
   hobby: function () {
       console.log('吃饭,跑步');
   }
}
// 2.
for (var key in coke) {
   console.log(key);
   console.log(coke[key]);
}
coke.hobby();
// 3.
delete coke.age;
// 4.
coke.height = '180cm';
// 5.
coke.id = 6; // 方式一
coke['id'] = 6 // 方式二
// 打印对象
console.log(coke);


// 【二】1.系统构造函数创建对象
var coke = new Object();
coke.name = '可乐';
coke.sex = '水';
coke.age = 3;
coke.height = '未知';
coke.hobby = function () {
   console.log('吃饭,跑步');
};
// 2.
for (var key in coke) {
   console.log(key);
   console.log(coke[key]);
}
coke.hobby();
// 3.
delete coke.age;
// 4.
coke.height = '180cm';
// 5.
coke.id = 6; // 方式一
coke['id'] = 6 // 方式二
// 打印对象
console.log(coke);


// 【三】1.工厂函数创建对象
var person = function (name, sex, age, height, hobby) {
   var object = new Object();
   object.name = name;
   object.sex = sex;
   object.age = age;
   object.height = height;
   object.hobby = hobby;
   return object;
}
var coke = person('可乐', '水', 3, '未知', function () {
   console.log('吃饭,跑步');
})
// 2.
for (var key in coke) {
   console.log(key);
   console.log(coke[key]);
}
coke.hobby();
// 3.
delete coke.age;
// 4.
coke.height = '180cm';
// 5.
coke.id = 6; // 方式一
coke['id'] = 6 // 方式二
// 打印对象
console.log(coke);


// 【四】1.自定义构造函数创建对象
var Person = function (name, sex, age, height, hobby) {
   this.name = name;
   this.sex = sex;
   this.age = age;
   this.height = height;
   this.hobby = hobby;
}
var coke = new Person('可乐', '水', 3, '未知', function () {
   console.log('吃饭,跑步');
});
// 2.
for (var key in coke) {
   console.log(key);
   console.log(coke[key]);
}
coke.hobby();
// 3.
delete coke.age;
// 4.
coke.height = '180cm';
// 5.
coke.id = 6; // 方式一
coke['id'] = 6 // 方式二
// 打印对象
console.log(coke);
````

 2. 编写一个程序，让用户输入一个5位数，判断该 五位数是否为 `回文数`。（判断第一位和第五位是否一样，第二位和第四位是否一样）如果用户输入的不是5位数提示错误并继续输入直到用户输入一个5位数

    ```js
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>判断回文数</title>
    </head>
    
    <body>
        <script>
            while (true) {
                var num = prompt('请输入一个五位数');
                if (num != +(num) || (num / 10000) < 1 || (num / 10000) >= 10 || num == '') {
                    continue;
                }
                var ge = num % 10;
                var shi = parseInt(num / 10 % 10);
                var qian = parseInt(num / 1000 % 10);
                var wan = parseInt(num / 10000 % 10);
                if (ge == wan && shi == qian) {
                    alert(`${num}是一个回文数`);
                    break;
                } else {
                    alert(`${num}不是一个回文数`);
                    break;
                }
            }
        </script>
    </body>
    
    </html>
    ```

3. 求10! 的结果（提示：10! = 1x2x3x4x5x6x7x8x9x10）

    ```js
    var num = 1;
    for (var i = 1; i <= 10; i++) {
        num *= i;
    }
    console.log(num);
    ```

4. 操作数组 var arr = [2,3,4,5,6] 

    ```js
    1) 将1放到数组中2的前面
    2) 删除数组中的6
    3) 将数组的所有剩余元素求和
    4) 在 3) 的基础上通过length求出数组元素和的平均值
    5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
    
    var arr = [2, 3, 4, 5, 6]
    // 1) 将1放到数组中2的前面
    arr.unshift(1);
    console.log(arr);
    
    // 2) 删除数组中的6
    arr.pop();
    console.log(arr);
    
    // 3) 将数组的所有剩余元素求和
    var sum = 0
    for (var key in arr) {
        sum += arr[key];
    }
    console.log(sum);
    
    // 4) 在 3) 的基础上通过length求出数组元素和的平均值
    var average = sum / (arr.length);
    console.log(average);
    
    // 5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
    if (arr.indexOf(6) != -1) {
        console.log(arr.indexOf(6));
    } else {
        console.log(false);
    }
    ```