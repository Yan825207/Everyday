// 10.定义一个三位数，求各位数的平方和是多少，在控制台输出。
let num = 123
//分别求出个位十位百位
let ge = num % 10;
let shi = parseInt(num % 100 / 10)
let bai = parseInt(num / 100)
let sum = Math.pow(ge, 2) + Math.pow(shi, 2) + Math.pow(bai, 2);
console.log("各位数的平方和是" + sum)