// 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//     *********
//    *******
//   *****
//  ***      
// *  
for(i=0;i<5;i++){         //外循环控制行数
    var  num=''           //定义变量
    for(j=i;j<5;j++){     //内循环控制一行中的个数
        num+=' '          
    }
    for(k=i*2;k<9;k++){     //添加循环打印*号，递减三， 初始值乘以2
        num+='*'
    }console.log(num)
}