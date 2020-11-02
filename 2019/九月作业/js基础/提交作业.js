//1. 定义一个数组，保存六种数据类型的名称？
var people=[11,{name:'闫雨龙'},'111'[1,2],[true, true, false, false],]
console.log(people)
//2. 定义一个对象，保存你自己的名字、年龄、爱好？
var me={
    name:'闫雨龙',
    age:20,
    aihao:'学习'
}
//3. 有一个数组：var arr = [12,43,54,43]，写代码计算数组中第1个元素和第3个元素的和
var arr=[13,54,23,54]
arr[2]=arr[1]+arr[3]
//4. 定义一个二维数组（随便放些数据进去）？
var arr=[123,{name:'付'}]
// 5. 有两个变量 a 和 b ，请写代码交换这两个变量的值？
var a=123
var b=456
var c
c=a
a=b
b=c
console.log(a,b)
//6. 有一个对象： var obj = {name:'tom',age:10,books:['水浒','西游']} ，写代码打印出 name 属性和 books 中第2个元素？
var obj = {name:'tom',age:10,books:['水浒','西游']}
console.log(obj.name, obj.books[1])
//定义两个变量保存两个数字，然后再定义一个变量保存前两个变量的和？
var num2=1
var num1=2
var num3=num2+num1
 console.log(num3)
//8. 定义一个包含多行和另一个变量值的字符串？
var sum =`111111111111111
22222222222222222
333333333333333333`
var shu =`刚才的数字,是: ${sum}`
console.log(shu)
//9. 定义一个数组，数组中保存两个对象，然后打印数组中第二个对象的随便一个属性
var people= [
    {
    name:'闫雨龙',
    age:20
},
    {
     name:'付',
     age:22

    }
]
console.log(people[1].name)
console.log(people)
//10. 有一个数组：var arr = [13,54,65,23,54]，写代码计算数组中第2个元素和第4个元素的和，并把和保存到第3个元素上 
var arr = [13,54,65,23,54]
arr[2]=arr[1]+arr[3]
console.log(arr)


// 11.说出下面代码的运行结果,并且解释原因:
//     var name = '张三';  张三，
//     var age ;           空  没有属性值
//     const gender ="女";   女
//     name = "李四"；   
//     console.log(name);    李四
//     console.log(age);  
//     gender = "男";      
//     console.log(gender);  男


//12.下列变量名哪个不正确
 // var sname ;  var 1age ; var Name;8
  // 2 不能以数字开头


  //二、解答题
// 1、数据类型有几种？     七种
// 2、什么是对象？如何创建对象？       由由多个键值对组合到一起形成的一种类型
// 3、如何读取和修改和删除对象中的值？  console.log(属性)  属性名 = 修改值           delete.属性名
// 4、什么时候会出现 undefined？         未定义
// 5、什么是数组？如何创建数组？          把同一类的数据放到一起组成一组。            var 属性名 = []
// 6、如何获取和修改数组中的某一个值？    属性名 = 修改的值
// 7、js变量命名有什么规范？              变量名只能包含数字、字母、下划线 _ 中文也可以做为变量名，但是不要使用！  // 2. 不能以数字开头
                                        // 3. 不能是一些关键字（JS 中有些单词已经被占用了，比如 var、if、for等等 ）
// 8、如何定义多行字符串？有几种方法？     ·，，，·    /n
// 9、Boolean 类型有几个值？分别代表什么？     true  false 真，假
// 10、字符串中能解析变量吗？怎么解析？        ·    ·


  