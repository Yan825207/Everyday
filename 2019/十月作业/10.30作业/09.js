// 9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
var grades = 66
if (grades >= 90) {
    console.log('A')
} else if (grades >= 80 && grades < 90) {
    console.log('B')
} else if (grades >= 70 && grades < 80) {
    console.log('C')
} else if (grades >= 60 && grades < 70) {
    console.log('D')
} else if (grades < 60) {
    console.log('E')
}