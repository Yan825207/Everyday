// 计算 1+1/2!+1/3!+1/4!+...1/20!的和
var sum = 0;
var jie = 1;
for (var i = 1; i <= 20; i++) {
    jie = jie * i;
    sum += 1 / jie;
}
console.log(sum);