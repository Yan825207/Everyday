//1.输出""我是传智学院的一名学生，我为自己代言"
console.log('我是传智学院的一名学生，我为自己代言')
//2.利用JavaScript定义变量a，赋值为88，并且在控制台打印输出变量a的值
var a = 88
console.log(a)
//3.    6种不同类型的变量
//3.利用JavaScript定义6个不同类型的变量，赋值，并且在控制台打印输出变量的类型
var num = 6
var arr = [1, 2, 3, 4]
console.log('num, yan, yu, name, people,')
var  num1="123",
     num2="456"
     num3=num1
    num2 = num3
console.log(num1,num2)
var arr1 = [number1= 123, numben2 = 456 ,]
number3=numben2
console.log('number1, number2')
var num1 = "123"
var num2 = "456"
var num3 = num1
num1 = num2
num2 = num3
console.log(num1, num2)

//6
var people1 = {
    name: '闫雨龙',
    weight: '60kg ',
    age: 20,
    hight: '170',
    XueHao: 205250,
    number: 11100
}
people1.gender = "男"
console.log('name, age')
var people={age:22,
            XueHao:200,
            name:'付',
            hight:158,
            phone:110,
            kg:200
        }
 people.gender ="男"   
 console.log(people.name,people.age)       

var people2 = {
    name: '张三',
    weight: '70kg ',
    age: 21,
    hight: '180',
    XueHao: 18,
    number: 10000
};
people2.gender = "男"//添加属性，值为男
console.log('name, age')
delete people.weight
console.log('name, age')
delete people.weight
delete people.weight


//8.将下列字符串按照句号分段显示，不要一行显示，
console.log('君不见，黄河之水天上来，奔流到海不复回。\
        君不见，高堂明镜悲白发，朝如青丝暮成雪。\
        人生得意须尽欢，莫使金樽空对月。\
        烹羊宰牛且为乐，会须一饮三百杯。\
        岑夫子，丹丘生，将进酒，杯莫停。\
        与君歌一曲，请君为我倾耳听')
//8.第九题
//9.将字符串我是"我是中国人"，我爱我的祖国"种的中国人需要加上引号再控制台打印出来，如下图所示:
console.log("我是\"中国人\"，我爱我的祖国")
console.log(`我是"中国人",我爱我的祖国`)
//10.第十题
//10.定义一个数组，里面放都是数字的类型
var num5 = [1, 2, 3, 4, 5, 6]
console.log(num5[3])
num5[1] = "666"
console.log(num5[1] = num5[2] + num5[4])
//11.第十一题
//11.定义一个数组，里面的元素要把今天所学的数据类型都用到
var today = [mun6 = 1, WoZhenShuai = true, WOZhenRou = false, ABC = ""]
//12.第十二题
//12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
var you = [
    {
        price1: "500",
        num1: "110",
        gender1: "男",
        studentld1: 21,
        name:'闫',
        ago: 10
    }]
    var people = [
        {
            name:'tom',
            age: 10,
            books: ['三国', '西游', '红楼梦', '水浒传']
        },
        {
            name:'jack',
            age:20
        }
    ]
//第十三题
var iphone =[
    price=10,
    num=15,
    name="iphone11",
    colors="red,bule,black"
]
console.log('liangren.ago + liangren.ago1')
//13.定义一个数组，数组里面有一个对象，对象里面有属性price,num,name,colors,colors的值是一个数组，获取colors数组下标是1的值
var iphone = [
    price = 10,
    num = 15,
    name = "iphone11",
    colors = "red,bule,black"
]
console.log(iphone,colors[1])
console.log(iphone, colors[1])
/*        1.	什么时候会出现 undefined？
        //解:
            //变量声明未定义,出现未知错误
// 2.	什么是数组？什么时候使用？如何创建数组？
        //解:
            //1.由中括号包裹起来的数据
            //2.相同类型的数据过多的时候
            //3.需要调用时
            //4.var arr = [] 或 var arr = new Array
// 3.	如何获取和修改数组中的某一个值？
        //解:
            //arr[对应的下标];arr[对应的下标] = ???
// 4.	什么是对象？什么时候使用？如何创建对象？
        //对象是具体的某个实例
        //需要获取和修改数据时
        //var obj = {} 或 var obj = new Object;
// 5.	如何读取和修改和删除对象中的值？
        // 解:
            //对象.属性名;对象.属性名 = '新的值'
// 6.	什么是数据类型？干什么用的？有几种数据类型？
        //解:
            //各种数据的分类,
            //区分错误和更方便的计算
            //7种
// 7.	Boolean 类型有几个值？分别代表什么？
        //解:
            //两个
            //true真, false假
// 8.	什么时候使用字符串类型？
        //解:
            //需要用到文字,数据不可变时,
// 9.	为变量起名有什么要求？
        // 解:
            //不能以数字开头
            //只能使用"_"
            //不可以使用关键字和保留字
// 10.	如何定义常量？常量命名规范?
        // 解:
            // consent 变量名 = 'value'
                //不能以数字开头
                //只能使用"_"
                //不可以使用关键字和保留字
                */