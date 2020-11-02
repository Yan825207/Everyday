window.onload = function () {
    // 正则
    let regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    let regqq = /^[1-9]\d{4,}$/; // qq正则表达式
    let regnc = /^[\u4e00-\u9fa5]{2,8}$/; //中文正则表达式
    let regmsg = /^\d{6}$/; //短信验证码正则表达式
    let regpwd = /^[A-Za-z1-9_-]{6,16}$/ // 密码正则表达式  自己写(包括大小写字母,下划线,数字,6到16位)

    //   获取数剧
    let tel = document.querySelector('#tel')
    let qq = document.querySelector('#qq')
    let nc = document.querySelector('#nc')
    let msg = document.querySelector('#msg')
    let pwd = document.querySelector('#pwd')
    let qr = document.querySelector('#qr')
    fn(tel, regtel)
    fn(qq, regqq)
    fn(nc, regnc)
    fn(msg, regmsg)
    fn(pwd, regpwd)

    function fn(ele, reg) {
        // 失去焦点触发事件
        ele.onblur = function () {
            // 正则判断
            if (reg.test(this.value)) {
                // 正确
                // <i class="success_icon"></i> 恭喜您输入正确
                // 添加给<span> success类名
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入'
            }
        }
        // 二次输入密码
        qr.onblur = function(){
            // 判短
            if(this.value == pwd.value && this.value!= ''){
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
            }else{
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次输入的密码不一样请重新输入'
            }
        }
    }


}