// 一、编程题
// 1.定义若干个js变量，需表现出js中的各种数据类型，并在页面中输出每个变量的值和其对应类型。
var num=123
console.log(typeof num+num)
var a='yan'
console.log(typeof a+ a)
var b=true
console.log(typeof b+ b)
var c=
console.log(typeof c )
var d=NaN
console.log(d )
var people={
    name:'闫'
}
console.log( typeof people)
var num=[1,2]
console.log(typeof num)

// 2.用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：
//比如，用户输入19，那么控制台显示
// 1
// 19
// 比如，用户输入21，那么控制台显示
// 1
// 3
// 7
// 21
for(var i=1;i<=48;i++){
    if(48%i==0){
        console.log(i)
    }
}

// 3.读程序，写结果：
// （1）
// 123abc
// abc
//（2）
// 22
// 22
// 4.已知任意两个正整数（a，b），将其作为直角三角形的直角边长，求斜边长
var a=3
var b=4
var c= Math.sqrt(a*a+b*b)
console.log(c)
// 5.一个小球从空中掉下来，求如下问题：
// 附自由落体公式：自由落体运动的规律：2gh=v^2。；（其中g是重力加速度，在地球上g≈9.8m/s2；v是速度，h高度)
// 如果已知小球掉落时高度（1000m），求其触地瞬间的速度；
var g=9.8
var h=1000
var v=Math.sqrt (g*h*2)           //开方   Math.sqrt    
console.log(v)
// 如果已知小球落地瞬间的速度（1000m/s），求其掉落时的高度）
var v=1000
var g=9.8
var h=Math.pow(h,2) / (2*g)                //Math.pow(x,y) // x的y次幂 
console.log(h)

// 6.写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，
//既是3的倍数又是5的倍数打印“abcde”。

for(var i=1;i<=100;i++){
    if(i%3==0){
      console.log('Fizz')
    }else{
        
    }
    if(i%5==0){
        console.log('Buzz')
    } else{
        console.log(i)
    }
    }
//  7.求两个正数的最大公约数
var num1 = 22
var num2 = 44
if (num1>num2)
{
    var a= 0
    for (var i=1;i<=num2;i++)
    {
        
        if (num2%i==0 && num1%i==0)
        {
           a=i
        }
    }
    console.log(a); 
}
else
{
    var da = 0
    for (var i=1;i<=num1;i++)
    {
        
        if (num2%i==0 && num1%i==0)
        {
           da=i
        }
    }
    console.log(`最大公约数为${da}`); 
}


//  8.求两个正数的最小公倍数

// 9.水果店LED屏幕
// 模拟LED屏幕显示内容
var liulian = {
    name : '榴莲',
    Id : 1,
    price : 32.0,
    quality : 'A' 
}
var apple = {
    name : '苹果',
    Id : 2,
    price : 6.5,
    quality : 'B'
}
var mihoutao = {
    name : '猕猴桃',
    Id : 3,
    price : 6.0,
    quality : 'A'
}
console.log('编号','名称','单价','品质');

console.log(liulian.Id,liulian.name,liulian.price,liulian.quality);
console.log(apple.Id,apple.name,apple.price,apple.quality);
console.log(mihoutao.Id,mihoutao.name,mihoutao.price,mihoutao.quality);


//                       图二
// 要求 1）商品编号 商品名称  单价 和品质 都定义成变量
//      2）在控制台出各种水果的信息，如图二所示



// 10、超市购物小票V2  
// 展示超市所有的商品信息到控制台，如图三所示:
  var num1=15.50*22.00;
  var num2=16.00*55.00;
  var num3=14.50*24.00
  console.log('商品单价'+num1);
  console.log('商品单价'+num2);
  console.log('商品单价'+num3);
  console.log('商品总价'+ (num1+num2+num3));

//           图三
// 二、简答题
// 1.数据类型有几种,分别是哪些
// 7种
// 1.number
// 2.string
// 3.boolean
// 4.undefined
// 5. null
// 6.object
// 7.symbol
// 2.怎么判断一个变量的数据类型
// console.log(typeof '变量名')
// // 3.怎么判断一个变量是否是数字
// 打印数据类型
// 4.怎么将其他数据类型转换成数字类型
// Number( 变量名)