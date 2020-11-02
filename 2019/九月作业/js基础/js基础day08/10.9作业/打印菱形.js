//利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成） （拔高题）
//  ---*
//  --***
//  -*****
//  *******
//  -*****
//  --***
//  ---*
for(i=0;i<3;i++){
    var num=''
    for(j=i;j<3;j++){
num+='-'
    }
    for(k=0;k<=i*2;k++){
        num+='*'
    }console.log(num)
}
console.log('*******')
for(a=0;a<3;a++){
    num1=''
    for(b=0;b<=a;b++){
        num1+='-'
     } 
   for(c=a*2;c<=4;c++){
     num1+='*'
    } console.log(num1)
}