## js简答题

 1. 网页的三种弹出框分别是什么？作用分别是什么？

     aleat  警示框

    confirm  确认框

    prompt   提示框


 2. 用户输入框，获取到值的数据类型是什么？

    字符串

## js编程题
1. 打开网页时弹出：全栈牛逼！！！(只有确定键)

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <!-- 打开网页时弹出：全栈牛逼！！！(只有确定键) -->
        <script>
        alert("全站牛逼！！！")
        </script>
    </body>
    </html>
    
    ```

2. 让用户可以在网页输入年龄

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <!-- 让用户可以在网页输入年龄 -->
        <script>
            prompt("请输入年龄")
        </script>
    </body>
    </html>
    
    ```

3. 打开网页弹出：您打开了一个网页，是否继续？（有确定键和取消键）

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <!-- 让用户可以在网页输入年龄 -->
        <script>
            confirm("您打开了一个网页，是否继续")
        </script>
    </body>
    </html>
    
    ```

4. 让用户输入一个数字，实现判断该数字是小数还是整数并告诉用户

    ```js
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <!-- 让用户输入一个数字，实现判断该数字是小数还是整数并告诉用户 -->
        <script>
            var num=prompt("请输入一个数字")
            if(num%1==0){
                alert("该数是整数")
            }else{
                alert("该数是小数")
            }
        </script>
    </body>
    </html>
    
    ```

