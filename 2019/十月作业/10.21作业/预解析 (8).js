// 4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
var color = "red";             //全局变量
   function outer() {
       var anotherColor = "blue";    //局部变量    anotherColor 为"blue"
       function inner() {
           var tmpColor = color;      //局部变量      tmpColor 为 color=red
           color = anotherColor;         //全局变量     改变color的值 为 anotherColor=blue
           anotherColor = tmpColor;       //全局变量      anotherColor 为 tmpColor=red
           console.log(anotherColor);     //  输出为0red  
       }
       inner();
   }
   outer();
   console.log(color);  //        blue
