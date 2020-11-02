
$(function(){
    $('.btn').on('click', function (e) {
        // 阻止提交按钮的默认行为
        e.preventDefault();
        // console.log(111);
        let name =  $('#heroName').val()
        let wname = $('#username').val()
        let skill = $("#skillName").val()
        console.log(name,wname,skill);
        // 发起请求
        $.ajax({
            type:'get',
            url:'/admin/data',
            data:{
                name :name,
                wname:wname,
                skill:skill
            },
            success:function(data){
                console.log(data);
            }
        })
    })
})