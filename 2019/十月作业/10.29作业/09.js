// 9.已知字符串："this is a test of java"
// (1) 取出子字符串"test"
// (2) 将'java'替换为'JAVASE'
var str = 'this is a test of java'
var num = str.indexOf('test')
console.log(str.substr(num, 4));
var str = 'this is a test of java'
str = str.replace('java', 'JAVASE')
console.log(str); 