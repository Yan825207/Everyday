## js简答题
1. 怎么定义一个二维数组？

    var arr=[1,2,[3,4,]]

   数值里套数组

2. 数组的方法有哪些？请列举10个，并说明方法的作用

   ​	

   ```
   join(): 将数组的元素组起一个字符串
   push(): 可以接收任意数量的参数 把它们逐个添加到数组末尾 并返回修改后数组的长度
   pop()：数组末尾移除最后一项 减少数组的 length 值 然后返回移除的项
   shift(): 删除原数组第一项 并返回删除元素的值 如果数组为空则返回undefined
   unshift(): 将参数添加到原数组开头 并返回数组的长度
   sort(): 按升序排列数组项
   reverse()：反转数组项的顺序
   concat(): 将参数添加到原数组中
   slice(): 返回从原数组中指定开始下标到结束下标之间的项组成的新数组
   splice(): 可以实现删除、插入和替换
   ```

3. 怎么获取二维数组里面的某一个元素，自己定义数组

     

   ```
   var arr = [[1,2],[3,4]];
   arr[0][1]//获取二维数组arr中的2
   ```

4. 数组的长度和数组的下标(索引)的对应关系

   ```
   数组的索引 = arr.length - 1 （数组的长度-1）
   ```

## js编程题

1. 定义数组 var arr = [1,2,666,3,4],

 - 1） 给数组最后添加1个元素

     arr.push(5)

 - 2）给数组最前面添加1个元素

    arr.unshift(6)

 - 3）将元素666删除之后，添加一个元素"拉拉"

     

   ```
   arr.splice(3, 1, '拉拉');
   console.log(arr);
   ```
```js

```
2. 定义数组var arr = [2,4,77,100,1]
 - 1）在控制台输出数组的最大值

 - ```
   var arr = [2, 4, 77, 100, 1];
   for (var i = 0; i <= arr.length - 1; i++) {
     for (var j = i + 1; j <= arr.length - 1; j++) {
         if (arr[i] < arr[j]) {
             i++;
         }
         else {
             console.log(`${arr[i]}是最大值 `)
         }
     }
   }
   ```

 - 2）在控制台输出数组的最小值
 ```js

//  - 2）在控制台输出数组的最小值
var arr = [2, 4, 77, 100, 1];
for (var i = 0; i <= arr.length - 1; i++) {
  for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
          i++;
      }
      else {
          console.log(`${arr[j]}是最小值 `)
      }
  }
}
 ```
3. 定义数组var arr = [1,2,3,4,5,6,1,2,3,1,2],将数组重复的元素去重,(请使用2种方式实现)
```js
(1)var arr = [1,2,3,4,5,6,1,2,3,1,2]
var arr1=[]
for(var i=0;i<arr.length;i++){
   if(arr1.indexOf(arr[i])==-1) {
        arr1.push(arr[i])
   }
}
console.log(arr1)
(2)var arr = [1,2,3,4,5,6,1,2,3,1,2]
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1)
        }
    }
}
console.log(arr)

```

4. 现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
   - 1). 遍历打印二维数组的所有元素
   
     ```
     **var**  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
     
     for(**var** i=0;i<array.length;i++){
     
        for(**var** j=0;j<array[i].length;j++){
     
             console.log(array[i][j])
     
         }
     
     }
     ```
   
     
   
   - 2). 计算二维数组中所有元素的和
   
   - **var**  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
   
     **var** num = 0;
   
     for (**var** i = 0; i <= array.length - 1; i++) {
   
     ​    for (**var** j = 0; j <= array.length - 1; j++) {
   
     ​        num += array[i][j];
   
     ​    }
   
     }
   
     console.log(num);
   
   - 3). 求二维数组中所有元素的最大值。

  ```js
for (var i = 0; i < array.length; i++) {
    var maxnum = 0;
    for (var j = 0; j < array[i].length; j++) {
        if (array[i][j] > maxnum) {
            maxnum = array[i][j];
        }
    }
}
console.log(maxnum);

  ```

