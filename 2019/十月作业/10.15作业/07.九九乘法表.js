// 7、利用JavaScript完成如下九九乘法表
for(var i=1;i<=9;i++){
    var num=''
    for(var j=1;j<=i;j++){
        num+=j+'X'+i+'='+j*i+' '
    }
    console.log(num)
}