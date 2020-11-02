// 8、利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
/*    *
     * *
    * * *
   * * * * 
  * * * * *
*/
for(var i=1;i<=5;i++){
    var num=''
    for(var j=i;j<=5;j++){
        num+=' '
    }
    for(var k=1;k<=i;k++){
        num+='* '
    }
    console.log(num)
}