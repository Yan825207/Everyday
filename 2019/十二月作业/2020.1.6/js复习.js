// var a = 10;
// ;(function (e) {
//       console.log(1 == true);    // 1 == 1    true
//       console.log(2 == true);    // 2 == 1     
//   })() 

//   // == 和 ===      true  1   false 0


// (function (e) {
//   // var e  
//       console.log(e === undefined);  //   undefined ==== undefined   true
//       console.log(typeof e === undefined);  //     "undefined" ==== undefined  
//   })()  





// var f=true;
// var a=10;
// function fn() {
//    var b;

//   b = 20;

//   c = 30;
// }



// c = true;
// if (f === true) {
//    a = 10;
// }

// fn();



// console.log(a);  // 10 
// console.log(c);  // 30
// console.log(b);  // 报错



// this的指向


function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
// const lydia = new Person('Lydia', 'Hallie');




var sarah =Person('Sarah', 'Smith');
console.log(sarah);  // undefined

console.log(Person('Sarah', 'Smith'))


// console.log(lydia); 






// 字面量  系统构造函数  工厂函数   自定义构造函数  

//  1.字面量    属性和行为 
// var obj = {
//   name:'zs',
//   age:18,
//   eat:function(){
//     console.log('我爱吃')
//   }

// }

// var obj = {}
// obj.name = "zs";
// obj.age = 18;
// obj.eat = function(){}


// 2.系统构造函数
// var obj2 = new Object();
// obj2.name = 'liss';
// obj2.age = 20;



// 3.工厂函数  
// function CreateObj(name,age) {
//   var obj2 = new Object();
//   obj2.name = name;
//   obj2.age = age;
//   return obj2;
// }

//  // 创建对象
//  var o = new CreateObj('lisi',18);
//  var o1 = new CreateObj('zs',20);


// 自定义构造函数

// function Person(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
// }
// const lydia = new Person('Lydia', 'Hallie');


// function fn(){}




// function sum(a, b) {
//   console.log(a+b);   // 12
//   }
//   var result = sum(1, '2');
//   console.log(result);      


//   var a = [1,2,3]
//   var b = [1,2,3]
//   console.log(a == b)


//   var a = [4,5,6]
//   var b = a;
//   console.log(a==b)




// 定义函数的方式

// 声明式
function fn(){}
fn()

// 表达式
var fn = function(){}
fn();


// 系统构造函数
var fn = new Function();

//  Object()    Array()    Function()




//  数组

// 字面量的方式
var arr = [1,"1",undefined,[1,2,3],{}];
// 系统构造函数
var arr1 = new Array()




// continue 和 break;

// 区别：continue是跳出当前循环，继续下一次循环，break 跳出整个循环，



// slice,substring,substr,concat,split,charAt(0)
var str = "I want pizza";
// for(var i = 0;i<str.length;i++){
//   console.log(str[i])   
// }

console.log(str.charAt(0))


// 数组的方法   push() 后面添加元素, unshift() ,pop() 末尾删除，返回值是删除的元素 ,shift(),concat(),splice(),slice(),sort(),reverse(),join()