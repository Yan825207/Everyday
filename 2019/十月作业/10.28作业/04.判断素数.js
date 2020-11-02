function ss(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
        // if (num % i != 0) {

        // }

    }
    return true
}
console.log(ss(5))