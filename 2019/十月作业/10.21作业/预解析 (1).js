// 6.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
  (function (num) {
        console.log(num); // ？   100    局域变量，把100赋值给num 
        var num = 10;             // 局域变量
      console.log(num);  // ?         10    变量值改为10
    }(100))