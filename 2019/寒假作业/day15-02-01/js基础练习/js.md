## js简答题

1. arguments对象和数组的相同点和不同点有哪些？

    相同：  拥有length属性，

   ​				按照索引进行储存

   不同 ：  arguments对象不能使用数组方法

   


2. rest参数作为函数的形参只能是最后一个参数，谈谈你的理解

    形参和实参是相对应的，rest接受的是多余的参数，只能放在最后一个


3. 什么是函数表达式？

    函数表达式: 声明一个变量，该变量的值是一个函数


4. 谈谈你对自调用函数的理解，格式是什么？

    

   ```
   自调用函数: 
   1)自己调用自己只执行一次
   2)没有 return
   3)一般用于初始化
   格式：
   (function (形参,...){
   函数体
   })(实参);
   ```


## js编程题
1. 写一个函数，求出`3`在数组 var arr = {3,4,3,5,7,9};中出现的次数
 ```js
function fn(arr) {
var num = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 3) {
        num++
    }
}
console.log(num)
}
fn([3, 4, 3, 5, 7, 9])
 ```


2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
```js
function fn(num) {
    for (var i = 2; i <= num; i++) {
        if (num % i == 0) {
            return false
        }
        else {
            return true
        }
    }
}
var result = fn(12);
console.log(result);
```


3. 写一个函数，求任意一个数的阶乘
```js
function fn(num) {
    var one = 1;
    var jie = 0;
    for (var i = 1; i <= num; i++) {
        one *= i;
        jie += one;
    }
    return jie
}
var result = fn(4);
console.log(result);

```


4. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）
```js
function fn(num) {
    var all = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            all += i;
        }
    }
    return all;
}
var result = fn(6);
console.log(result);
```