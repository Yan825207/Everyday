// 3. 输出下列代码name3的值分别是多少？并且把预解析的过程写出来
var name3 = "zs";
function f3() {
    var name3 = "ls";                //局部定义
    function f4() {
        name3 = "ww";                //全局定义
    }
    f4();
    console.log(name3);   //       打印为ww
}
f3();
console.log(name3); //      zs       