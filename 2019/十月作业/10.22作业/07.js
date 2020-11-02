
// 7.下列代码控制台打印出的值是多少？写出执行过程
function test(){
 var x = 31;
 if(true){
   var x = 71;                    
   console.log(x) // ?             71   赋值为71改变a的值
}
 console.log(x) // ?              71  a的值被改变为71
}
test()