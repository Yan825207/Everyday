// 7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
function a(b) {        //   输出的是形参  实参为函数外的另一个函数 所以把外面的函数输出了
    console.log(b);  //?     b为函数c  
    var s = b();         //调用函数b为123    
    console.log(s)  // ?     打印为123
}
a(c);      // 局域变量   值为123
function c() { return 123 }   