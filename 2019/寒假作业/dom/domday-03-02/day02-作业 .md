# 选择题

1. 下列代码可以正确设置文本颜色的是（A）

  A、document.getElementById('d1').style.color="red";

  B、document.getElementById('d1').style.=(color:"red");

  C、document.getElementById('d1').style.css=(color:"red");

  D、document.getElementById('d1').style.cssText=color:"red";

2. 下列哪项JavaScript代码可以显示Html页面中包含id为"cover"的层（A）

  A、document.getElementById("cover").style.display="block";

  B、document.getElementById("cover").style.display="none";

  C、document.getElementsByTagName("cover").style.display="visible";

  D、document.getElementsByTagName("cover").style.display="hidden";

3. 假设已经定义好show表示显示样式，hide表示隐藏样式，鼠标移入要完成显示，移出隐藏功能，补充1.处代码（B）
```js
<script>
  var oBtn = document.getElementById('btn');
  var oImg = document.getElementById('img');
  oBtn.onmouseover = function () {
   1.补充代码
  }
  oBtn.onmouseout = function () {
  oImg.className = 'hide';

}
</script>
```
  A、oImg.style.class = show;   

  B、oImg.className = 'show';   

  C、oImg.className == 'show';  

  D、oImg.style.class = "show"

4. 下面的HTML结构中，获取div元素的innerHTML和innerText的结果分别是（ C  ）
```html
<div>存在即<span>合理</span><strong></strong></div>
```

   A、存在即合理   存在即<span>合理</span>

  B、存在即<span>合理</span>   存在即合理

  C、存在即<span>合理</span><strong></strong>   存在即合理 

  D、<span>合理</span>  存在即<span>合理</span><strong></strong>

5. 为了实现修改img标签中的title属性值为“我是大王图片”，补充1处的代码（B）
```js
<input type="button" value="点我看看" id="btn">
<img id="img" src="./image/1.jpg" alt="这是谁?" title="这是一张图片">
<script>
var oBtn = document.getElementById("btn");
oBtn.onclick = function () {
  var oImg = document.getElementById('img');
  1.补充代码
}
</script>
```

A、oImg[title] = "我是大王图片"
B、oImg.title = "我是大王图片" 
C、title = "我是大王图片";	 
D、oImg.alt = "我是大王图片";	


# 简答题

第1题. 操作元素常见属性有哪些？
```js
元素.title =值
元素.id =值
元素.src =值
元素.alt =值
```
第2题. 操作元素内容的属性是什么，并且区别是什么？
```js
innerTHML 、 innerText  
innerTHML  ： 会识别html代码  获取内容的时候 包括标签和内容
innerText  ： 不识别标签  获取元素时不包括标签 
```
第3题. 操作元素类名有几种方式，分别是什么,把类名添加，删除，切换，是否包含这个类语法都写出来?
```js
四种方式 添加元素 元素.classList.add("类名") ，
                元素.className("类名")
        删除元素  元素.classList.remove("类名")
		切换元素  元素.classList.toggle("类名")
 		判断元素是否包含某个类名  元素.classList.contains("类名")
```

# 编程题

需求1. div的显示和隐藏效果：(用2种方式实现)
- 页面中有一个div,2个按钮，一个按钮的文字是"显示"，一个按钮的文字是"隐藏"

- 点击隐藏按钮，那么div就会在页面中隐藏

- 点击显示按钮，那么div就会在页面中显示

- ```js
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          div {
              width: 200px;
              height: 200px;
              margin: 200px auto;
              background-color: red;
          }
      </style>
  </head>
  <body>
      <button>显示</button>
      <button>隐藏</button>
      <div>
      </div>
      <script>
          var odiv = document.querySelector("div")
          var btn1 = document.querySelector("button")
          var btn2 = document.querySelectorAll("button")[1]
          btn1.onclick = function () {
              odiv.style.display = "block"
          }
          btn2.onclick = function () {
              odiv.style.display = "none"
          }
      </script>
  </body>
  
  </html>
  ```

  

需求2. 实现网页的开关灯效果:
- 页面有一个按钮，按钮上面的文字是”开”，点击后变成”关”，同时网页的背景色是黑色，再次点击就变成”开”,同时网页的背景色是白色，如此反复循环

- ```js
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  
  <body>
      <button>开</button>
      <script>
          let oBtn = document.querySelector('button')
          let oBody = document.body
          oBtn.onclick = function () {
              if (oBtn.innerHTML == '开') {
                  oBody.style.backgroundColor = 'black'
                  oBtn.innerHTML = '关'
              } else {
                  oBody.style.backgroundColor = 'white'
                  oBtn.innerHTML = '开'
              }
          }
      </script>
  </body>
  </html>
  ```

- 

