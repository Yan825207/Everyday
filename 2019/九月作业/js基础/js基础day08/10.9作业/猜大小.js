// 我们正在玩一个猜数字游戏。 游戏规则如下：
//  我从 1 到 100选择一个数字。 你需要猜我选择了哪个数字。
//  每次你猜错了，我会告诉你这个数字是大了还是小了, 如果你猜大了，输出”猜大了”；如果猜小了，输出”猜小了”；如果猜对了，则输出“恭喜你，猜对了”

// 步骤:
// 1.声明一个变量 真实数字
var num = 5;
// 2.声明一个变量 代表我猜的数字
var a = 4;
if (a > num) {
    console.log("猜大了");
}
if (a < num) {
    console.log("猜小了");
}
if (a == num) {
    console.log("恭喜你，猜对了");
}