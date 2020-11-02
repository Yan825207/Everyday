// 你要做的是统计出100到200之间的整数一共有多少个3。 解释：例如101中没有3；103中有一个3；133中有两个3。
  var num=0
  for(var i=100;i<=200;i++){
      //百位

    var a= parseInt(i/100)
    //十位
    var b=parseInt(i%100/10)
    //个位
    var c=parseInt(i%10) 
     if(a==3||b==3||c==3){
         num=num+1
     }
 }
 console.log(num)