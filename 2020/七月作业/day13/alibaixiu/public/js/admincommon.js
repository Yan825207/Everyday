// 公共的代码
$(function(){
    // 点击退出
 $("#logoutButton").click(function(){
     logout()
 })

//  点击隐藏侧边栏
$('#navbarBotton').click(function(){
    $('.main, .aside').toggleClass('toggle')
})
})

// 点击退出
function logout(){
    $.ajax({
        type:'GET',
        url:"/admin/logOut",
        data:null,
        success:function(result){
            if(result.code==200){
                location.href='/admin/login'
            }
        }
    })
}