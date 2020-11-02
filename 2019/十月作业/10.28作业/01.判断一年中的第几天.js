// 判断这一天是一年中的那一天
function tian(year, month, day) {
    days = day
    if (month < 2) {
        return days
    }
    var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (var i = 0; i < month - 1; i++) {
        days += arr[i]
    }
    if ((year % 4 == 0 && year % 100 != 0 || year % 400 == 0) && month > 2) {
        days++
    }
    return days
}
console.log(tian(2001, 3, 1))