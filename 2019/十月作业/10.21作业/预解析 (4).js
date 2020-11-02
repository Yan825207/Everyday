// 9.下列代码控制台打印出的值是多少？把执行过程写出来
function a(){
     console.log('a');     //2打印a              8打印a
     c();                 //3调用c               9调用c 
 }
 function b(){
     console.log('b');             //             6 打印b
     a();                        //               7 调用a
 }
 function c(){              
     console.log('c');   //4   打印c                10 打印c                 12打印c
 }
 a(); // ？    1 调用a
 b();  // ？                5调用b
 c();   // ？                                                               11调用c