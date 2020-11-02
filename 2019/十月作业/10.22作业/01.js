// 1.下列代码控制台打印出的值是多少?写出执行过程
function b(x, y, a) {        //形参接受实参传入的数字
  a = 10                // 全局变量 改变a的值
  console.log(arguments[2]);//   10
}

b(1, 2, 3);   