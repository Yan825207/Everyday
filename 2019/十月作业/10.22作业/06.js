
// 6.下列代码控制台打印出的值是多少？写出执行过程

function test(){
  let x = 31;
  if(true){
    let x = 71;
    console.log(x) // ?       赋值为71打印71
 }
  console.log(x) // ?           31  括号内Let定义不可调用
 }
 test()