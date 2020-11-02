// 8.下列代码控制台打印出的值是多少？写出执行过程
function n() {
    if(2>1) {
        arr = 10;
        brr = 10;
        let arr;               //Let只能先声明再赋值，且在js预解析的时候let不会被提升。
        var brr;
        console.log(arr); // ？                 报错
        console.log(brr); // ？      
    }
}
n(); 