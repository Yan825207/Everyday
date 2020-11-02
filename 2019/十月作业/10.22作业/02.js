// 2.下列代码控制台打印出的值是多少？写出执行过程
function fn(){
    console.log("我们是全局的fn");
}
function fn2(){
    console.log(fn);  // ？
    fn = 3;
    return ;
    function fn(){
        console.log("我是fn2里面的");
    }
}
fn2();  


// 真正执行的
function fn2(){
    console.log(fn);  // ？    输出fn function fn() {console.log("我们是全局的fn");}
    fn = 3;                       //改变fn为3
    return ;              //     结束函数
    function fn(){
        console.log("我是fn2里面的");
    }
}
function fn(){
    console.log("我们是全局的fn");
}

fn2();  