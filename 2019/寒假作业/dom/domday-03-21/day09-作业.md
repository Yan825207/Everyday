#  选择题

1. 下列选项关于window对象说法不正确的是(C )

   A、window对象本身带有一个name属性，值是空字符串

   B、window.reload()方法可以用来刷新当前页面

   C、left和top都是window对象本身就带有的属性

   D、定义了全局变量g;可以用window.g的方式来存取该变量

2. 以下关于以对象的属性或方法描述正确的是 (B )

   A、length保存历史URL地址列表的长度信息

   B、forward转到浏览器载入历史URL地址列表的当前URL的下一个URL

   C、back回到浏览器载入历史URL地址列表的当前URL的前一个URL

   D、go加载history列表中的某个具体页面,go(参数)参数可填负数，正数 ,负数往后跳转，正数往前跳转

3. 下列选项关于location对象属性说法错误的是(B)

   A、location.href可以设置或返回完成的URL

   B、location.search可以设置或返回从#开始的URL(查询部分)

   C、location.pathname可以设置或返回URL的路径部分

   D、location.hash可以设置或返回从井号(#)开始的URL(锚)

4. 下列选项中关于浏览器对象的说法正确的是（B)。

   A、history对象记录了用户在一个浏览器中已经访问过的URL

   B、location对象相当于IE浏览器中的地址栏，包含关于当前URL地址的信息

   C、location对象是history对象的父对象

   D、location对象是window对象的子对象

5. 下面关于BOM对象的描述不正确的是(C)

   A、history对象是用来获取浏览器访问历史的一些相关信息

   B、location对象是用来获取浏览器当前URL的一些相关信息

   C、navigator对象记是用来获取客户端屏幕的一些相关信息

   D、window对象是js的最顶级对象，其他的BOM对象都是window对象的属性


# 简答题

第1题. 请列举5个location对象常用的属性，分别写出每个属性的作用？
```js
location.href  获取或设置网址
location.reload 刷新网页
location.replace  替换网址
location.pathname  网页唯一路径
location.port   获取端口

```
第2题. 请列举3个history对象常用的方法，分别写出每个方法的作用？
```js
history.back    网页后退
history.forward 网页前进
history.go(-1)  后退一个网页
history.go(1)   前进一个网页
```
第3题. 请简述一下js的执行机制，同步和异步的区别是什么？(很重要)

```js
javascript第一大特点就是单线程
同步任务在主线程执行，只有执行完才能继续执行下一个
异步任务  当主线程任务结束后才放入主线程执行
```

第4题. 请简述this指向有哪些场景?(很重要)

```js
 1.如果this在全局的函数中 那么这个this指向的是window  
 2.如果this在对象中 那么这个this是对象
 3.如果this在构造函数中 那么this执行构造函数的实例
```

# this指向
1.下列代码控制台打印出的值分别是多少？

```js
function f1(){
    var user = '二狗子';
    alert(this.user);  // ？
    alert(this);   // ？
  }

 f1();
```

2.下列代码控制台打印出的值分别是多少？
```js
var a = {
    user: '二狗子',
    f1: function () {
      alert(this.user); // ？
    }
  }
a.f1();
打印“二狗子”
this在对象中则指向这个对象

```

3.下列代码控制台打印出的值分别是多少？
```js
var a = {
    user: '二狗子',
    b: {
      user: '大傻子',
      f1: function () {
        alert(this.user);  // ?
      }
    }
  }
  a.b.f1();
“大傻子”
```

4.下列代码控制台打印出的值分别是多少？

```js
var a = {
    user: '二狗子',
    b: {
      f1: function () {
        alert(this.user);  // ?
      }
    }
  }
  a.b.f1(); 
undefined
```

5.下列代码控制台打印出的值分别是多少？

```js
function f1(){
    this.user = "二狗子";
  }
  var a = new f1();
  alert(a.user);  // ?
“二狗子”
```

6. 下列代码控制台打印出的值分别是多少？
```js
    var a=1;
    function printA(){
      console.log(this.a);
    }
    var obj={
      a:2,
      foo:printA,
      bar:function(){
        printA();
      }
    }
    obj.foo(); //  ?  2
    obj.bar(); // ?   1

```

7. 下列代码控制台打印出的值分别是多少？
```js
var  color = ""green";
var test = {
 color:'blue',
 getColor:function(){
    var color = "red";
     console.log(this.color);
  }
}
var getColor = test.getColor;
getColor();  // ?   green
test.getColor(); // ?	blue

```

8. 下列代码控制台打印出的值分别是多少？
```js
var point = { 
    x : 0, 
    y : 0, 
    moveTo : function(x, y) { 
        this.x = this.x + x; 
        this.y = this.y + y;
        console.log(this.x); // ?1
        console.log(this.y); // ?1
    } 
}; 
point.moveTo(1, 1)


```


