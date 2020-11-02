// 1.声明两个变量,第一个变量为num1,值为123,第二个变量为num12,值为456,实现两个变量值的交换,即让num1为456,让num12为123;
// 要求，最少用2种方式实现


// 借助第三方变量
var num1 = 123;
var num2  = 456;
var temp;
temp = num1;
num1 = num2;
num2 = temp;
console.log(num1,num2)

// 加法求和
var num1 = 123;
var num2  = 456;
num2 = num1 +num2;   // 579;
num1 = num2 - num1 ;  // 579-123 = 456
num2 = num2 - num1;  // 579-456=123
console.log(num1,num2);


// es6
var num1 = 123;
var num2  = 456;
[num1,num2] = [num2,num1];
console.log(num1,num2);



// 3.用于输入2个数字分别是num1和num2，求出2个数字中的最大值。（三元表达式实现）
  
var num1 = prompt("请您输入一个数字");
var num2 = prompt("请您输入另外一个数字");
var max  =  num1>num2?num1:num2;
console.log(max)

// 3.用户录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和（三元表达式实现）
var a = +prompt("请您输入一个数字");  
var b = +prompt("请您输入另外一个数字");   

(a+b)>100?console.log(a+b-100):console.log(a+b)


// 4.用于输入3个数字分别是num1和num2和num3，求出3个数字中的最大值。（三元表达式实现）
var a = +prompt("请您输入一个数字");  
var b = +prompt("请您输入另外一个数字"); 
var c = +prompt("请您输入另外一个数字"); 

 var max =  (a>b?a:b)>c?( a>b?a:b):c

console.log(max)

// 5.用户任意输入一个三位数，求这个三位数字百位，十位，个位之和，在网页中弹出结果
var num = prompt("请您输入一个三位数");  // 123  = 6
// 百 + 十 + 个
var bai = parseInt( num/100 );   // 123/100 = 1.23  = 1
// 十位
var shi =  parseInt(num/10%10)    // 123/10 = 12.3%10 = 2
// 个位
var ge  = num%10   // 123%10 = 3

console.log(bai+shi+ge)  // 6