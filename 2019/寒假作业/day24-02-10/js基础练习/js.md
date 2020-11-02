## js简答题

1. 定义Map字典的语法格式是什么？

   ```js
    let map=new Map()
   ```

2. 定义Set集合的语法格式是什么？

   ```js
   let set= new Set([元素,元素,....])
   ```

3. Set集合的特点有哪些？

   ```js
   存入集合的顺序和取出集合的顺序不一致 没有索引 存入集合的元素没有重复
   ```

   

4. Set集合的打印结果和Array的打印结果有什么不同？

5. ```js
   一个输出的是对象形式 一个输出的是数组形式
   ```

6. 

7. 什么是 `json` ？作用是什么？优点有什么？



## js编程题

1. 使用Set集合对下面数组去重

    1) [1,1,2,2,3,3,4,4,5,5]
    2) [true,'66',null,true,66,null,88,'set',88]
    3) [1,[0],1,[0],1,[0]]

```js
1）
var arr1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
var arrNew1 = Array.from(new Set(arr1))
console.log(arrNew1)
```

2. 定义2个数组，let arrA = [1,2,3,3]; let arrB = [2,4,5,6]求2个数组的并集，交集
```js
let arrA = [1, 2, 3, 3];
let arrB = [2, 4, 5, 6];

//并集
let arrC = new Set(arrA, arrB)
console.log(arrC);
//交集
let addA = new Set(arrA)
let addB = new Set(arrB)
let arrD = new Set([...addA].filter(x => addB.has(x)))
console.log(arrD);
```


3. 操作字符串 let str = 'AaBbCcDdEe'
  
    1) 输出str字符串中所有的大写字母
    2) 查看字符串是否有'Ff'，有返回对应下标(索引)，没有返回false
    3) 使用两种方式截取字符串'bCcD'
```js
    //输出
    let str = 'AaBbCcDdEe'
    for(let i = 0 ; i<str.length;i++){
        if(str.charAt(i)>= "A" && str.charAt(i)<= "Z" ){
            console.log(str.charAt(i));
        }
    }
    //查看
    let str = 'AaBbCcDdEe'
    for(let i = 0 ; i<str.length;i++){
        var add
        if(str.charAt(i) == "Ff" ){
            add= i
        }else{
            add= "flase"
        }
    }
    console.log(add);
    //截取
    let str = 'AaBbCcDdEe'
    console.log(str.slice(3,7));
    console.log(str.substring(3,7));
```

4. 操作字符串 let str = 'hello-word'
    1) 将str字符串中的h和w替换成对应的大写字母
    2) 在 1)的基础上使该字符串变成数组['Hello','Word']
    3) 再将 2)中的数组转成字符串'Hello_Word'
  ```js
1)var str = 'hello-word'
str=str.replace(/h/, "H")
str = str.replace(/w/, "W")
console.log(str);
2)let arr = new Array()
arr = str.split("-")
console.log(arr);
3)let add = arr.join("_")
console.log(add);
  ```



