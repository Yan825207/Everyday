$(function () {
    //    渲染数据
    $.ajax({
        type: 'get',
        url: '/admin/data',
        data: null,
        success: function (result) {
            let str = template("template_users", result)
            $(".container tbody").html(str);
        }
    })

    // 删除功能

    $("tbody").on('click', ('#delect'), function (e) {
        if (!confirm('确认删除吗？')) {
            return
        } else {


            // e.preventDefault();  
            var userid = $(this).attr('data-id')
            console.log(userid);
            // 点击发起请求
            $.ajax({
                type: 'GET',
                url: "/delect",
                data: {
                    id: userid
                },
                success: function (result) {
                    if (result.code == 200) {
                        location.href = '/'
                    };
                }
            })
        }
    });

    // 修改
    $('tbody').on('click', '.btn-success', function (e) {
        // e.preventDefault();  
        // 通过id查找修改的数据
        let userid = $(this).attr('data-id');
        console.log(userid);
        // 发起ajax请求
        $.ajax({
            type: "POST",
            url: '/edit',
            data: {
                id: userid
            },
            success: function (result) {
                // 拿到编辑的数据
                // 显示模态框
                console.log(result);
                $('#modify-form input[name=username]').val(result.data[0].uname)
                $('#modify-form input[name=password]').val(result.data[0].password)
                $('#modify-form input[name=age]').val(result.data[0].age)
                $('#modify-form input[name=email]').val(result.data[0].email)
                $("#modify-form input[name='hobbies']").val(result.data[0].hobbies);
                $('#modify-modal').modal('show')

            }
        })
    })

    $('.save-btn').click(function () {
        let fromdata = $('#modify-form').serialize();
        console.log(fromdata);
        // 点击保存按钮发起ajax请求
        $.ajax({
            type: 'POST',
            url: '/editsave',
            data: fromdata,
            success: function (result) {
                console.log(result);
            }
        })
    })
})