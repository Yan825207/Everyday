// // 10. 写一个函数，求斐波那契数列fibonacci中的第n个数是多少？？1  1  2  3  5   8  13  21 
function  a(n){
     var num1=1
     var num2=1
     var num3=0
   for(var i=0;i<n-2;i++){
       num3=num1+num2
       num1=num2
       num2=num3
   }
  return num3
}
console.log(a(5))





