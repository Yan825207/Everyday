// 求1!+2!+3!+...+10!的和
var h=0
for(var i=1;i<=10;i++){
    var num=1
    for(j=1;j<=i;j++){
        num=num*j
    }h+=num
}
console.log(h)