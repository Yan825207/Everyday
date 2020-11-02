var arr = [1, 5, 63, 8, 74, 9]
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= arr.length; j++) {
        if (arr[i] < arr[j]) {
            var num = arr[j]
            arr[j] = arr[i]
            arr[i] = num
        }
    }
}
console.log(arr)