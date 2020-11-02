//1.打印九九乘法表
// 打印两遍乘法表，第二遍倒着打
// for(var i=1;i<=9;i++){
//     var num=''
//     for(var j=1;j<=i;j++){
//         num+=i+'x'+j+'='+i*j+'  '
        
//     }console.log(num)
// }
// 外循环从9开始，a--
// for(var a=9;a>=1;a--){
//     var num1=''
//     for(var b=1;b<=a;b++){
//         num1+=a+'X'+b+'='+a*b+'  '
//     }console.log(num1)
// }
// // 2.打印闪电
// for(var i=1;i<=3;i++){
//     var num=''
//     for(var j=1;j<=i;j++){
//         num+='*'
//     }console.log(num)
// }
// var num1=''
// for(n=1;n<=6;n++){
//     num1+='*'
// }console.log(num1)
// for(var a=3;a>=1;a--){
//     var num2=''
//     for(var b=1;b<=a;b++){
//         num2+=' *'
//     }console.log(num2)
// }
// 3.打印下列图形
for(var i=0;i<5;i++){
    var num=''
    for(var j=i;j<=5;j++){
        num+='-'
    }
        for(var a=i*2;a<9;a++){
            num+='*'
        }console.log(num)
    }
    // 4.打印金字塔
    // 5.5文钱可以买一只公鸡，3文钱可以买一只母鸡，1文钱可以买3只雏鸡。
    // 现在用100文钱买100只鸡，那么各有公鸡、母鸡、雏鸡多少只？
     var gj,mj,cj
     var money=100
     var zh=100
     for(gj=0;gj<=20;gj++){
         for(mj=0;mj<=34;mj++){
             for(cj=0;cj<=300;cj++){
             if(5*gj+3*mj+cj*(1/3)==100&&gj+mj+cj==100){
                 console.log('公鸡'+gj+'只','母鸡'+mj+'只','雏鸡'+cj+'只')
             }
             }
         }
     }
     //6.有一个棋盘，有64个方格，在第一个方格里面放1粒芝麻重量是0.00001kg，第二个里面放2粒，第三个里面放4，求棋盘上放的所有芝麻的重量
     var kg;
     var sum = 1;
     for (var i = 1; i < 64; i++) {
         sum *= 2;
         console.log(sum);
     }
     kg = sum * 0.00001;
     console.log(kg)
     
     
     // 7.大马驮2石粮食，中马驮1石粮食，两头小马驮一石粮食，要用100匹马，驮100石粮食，该如何调配？
     for(var i=0;i<=50;i++){
         　　for(var a=0;a<=100;a++){
         　　　　for(var b=0;b<=100;b++){
         　　　　if((i*2+a+b/2==100)&&(i+a+b==100)){
         　　　　　　console.log("大"+i+"中"+a+"小"+b);
         　　　　　　}
         　　　　}
         　　}
         }
     
     
     // 8.有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？有多少个，有哪些三位数？
     var sum=0;
     
     for(var i = 1; i < 5; i ++){
         for(var j = 1; j < 5; j ++){
             for(var k = 1; k < 5; k ++){
                 if(i != j && j != k && k != i){
                     sum+=1;
                     console.log("1、2、3、4个数字能组成的三位数有" + i + j + k );
                 }
             }
         }
     }
     console.log(sum+'个');
     
     // 9.输入某年，某月，某日，判断这一天是一年中的第几天？
 